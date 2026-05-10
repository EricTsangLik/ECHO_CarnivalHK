import { MetadataRoute } from 'next'
import { keytomic } from '@/lib/keytomic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Use the environment variable or fallback to your production domain
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.echocarnival.com.hk'

  // 1. Define your static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/booths',
    '/services',
    '/blog',
    '/contact',
    '/about',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))

  // 2. Fetch your dynamic blog posts
  let dynamicBlogRoutes: MetadataRoute.Sitemap = []
  let cursor: string | undefined = undefined
  let hasMore = true

  try {
    while (hasMore) {
      // Fetching 50 blogs at a time using your existing Keytomic setup
      const listRes = await keytomic.listBlogs(50, cursor)
      const page = listRes.data
      
      page.data.forEach((blog) => {
        dynamicBlogRoutes.push({
          url: `${baseUrl}/blog/${blog.slug}`,
          lastModified: new Date(blog.updatedAt), // Automatically updates to the latest blog modified date
          changeFrequency: 'monthly',
          priority: 0.9,
        })
      })
      
      hasMore = page.pageInfo.hasMore
      cursor = page.pageInfo.nextCursor || undefined
    }
  } catch (error) {
    console.error('Failed to fetch blogs for sitemap', error)
  }

  // 3. Combine and return all routes
  return [...staticRoutes, ...dynamicBlogRoutes]
}
