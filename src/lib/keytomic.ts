import {
  getHealth,
  listBlogs,
  getBlogById,
  type GetHealthResult,
  type ListBlogsResult,
  type GetBlogByIdResult,
} from '@keytomic/sdk'

const getHeaders = () => ({
  Authorization: `Bearer ${process.env.KEYTOMIC_API_KEY}`,
})

export const keytomic = {
  getHealth: (): Promise<GetHealthResult> => {
    return getHealth({
      headers: getHeaders(),
    })
  },
  listBlogs: (
    limit?: number,
    cursor?: string
  ): Promise<ListBlogsResult> => {
    return listBlogs({
      query: { limit, cursor },
      headers: getHeaders(),
    })
  },
  getBlogById: (id: string): Promise<GetBlogByIdResult> => {
    return getBlogById({
      path: { id },
      headers: getHeaders(),
    })
  },
  getBlogBySlug: async (slug: string) => {
    let blogId: string | null = null
    let cursor: string | undefined = undefined
    let hasMore = true

    try {
      while (hasMore && !blogId) {
        const listRes = await listBlogs({
          query: { limit: 50, cursor },
          headers: getHeaders(),
        })

        const page = listRes.data
        const found = page.data.find((b) => b.slug === slug)
        if (found) {
          blogId = found.id
          break
        }

        hasMore = page.pageInfo.hasMore
        cursor = page.pageInfo.nextCursor || undefined
      }

      if (!blogId) return null

      const detailRes = await getBlogById({
        path: { id: blogId },
        headers: getHeaders(),
      })

      return detailRes.data.data
    } catch (err) {
      console.error(err)
      return null
    }
  },
}

export type { GetHealthResult, ListBlogsResult, GetBlogByIdResult }
