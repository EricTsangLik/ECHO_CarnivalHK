import {
  getHealth,
  listBlogs,
  getBlogById,
  getBlogBySlug,
  type GetHealthResult,
  type ListBlogsResult,
  type GetBlogByIdResult,
  type GetBlogBySlugResult,
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
    try {
      const detailRes = await getBlogBySlug({
        query: { slug },
        headers: getHeaders(),
      })

      return detailRes.data.data
    } catch (err: any) {
      if (err?.response?.status === 404) {
        return null
      }
      throw err
    }
  },
}

export type { GetHealthResult, ListBlogsResult, GetBlogByIdResult, GetBlogBySlugResult }

