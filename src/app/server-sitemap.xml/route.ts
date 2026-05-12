import { getServerSideSitemap } from 'next-sitemap'
import { keytomic } from '@/lib/keytomic'

export async function GET(request: Request) {
  let allBlogs: any[] = []
  let cursor: string | undefined = undefined
  let hasMore = true

  try {
    while (hasMore) {
      const result = await keytomic.listBlogs(50, cursor)
      const blogs = result.data.data
      const pageInfo = result.data.pageInfo
      
      allBlogs = [...allBlogs, ...blogs]
      hasMore = pageInfo.hasMore
      cursor = pageInfo.nextCursor || undefined
    }

    const fields = allBlogs.map((blog) => ({
      loc: `https://echocarnival.com.hk/blog/${blog.slug}`,
      lastmod: new Date(blog.updatedAt || blog.publishedAt).toISOString(),
      changefreq: 'weekly' as const,
      priority: 0.8,
    }))

    return getServerSideSitemap(fields)
  } catch (error) {
    console.error('Error generating server-sitemap:', error)
    // Fallback if API fails
    return getServerSideSitemap([])
  }
}
