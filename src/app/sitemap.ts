import type { MetadataRoute } from 'next'
import { getAllKeytomicBlogsForSitemap } from '@/lib/keytomic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  if (!siteUrl) {
    throw new Error('NEXT_PUBLIC_SITE_URL is not defined')
  }

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/booths`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  let blogPages: MetadataRoute.Sitemap = []
  try {
    const blogs = await getAllKeytomicBlogsForSitemap()
    blogPages = blogs.map((blog) => {
      const lastModifiedDate = blog.updatedAt || blog.publishedAt || blog.createdAt || new Date().toISOString()
      
      return {
        url: `${siteUrl}/blog/${blog.slug}`,
        lastModified: new Date(lastModifiedDate),
        changeFrequency: 'weekly',
        priority: 0.8,
      }
    })
  } catch (error) {
    console.error('Error fetching blogs for sitemap:', error)
  }

  return [...staticPages, ...blogPages]
}
