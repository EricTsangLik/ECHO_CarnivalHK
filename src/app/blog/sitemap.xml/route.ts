import { keytomic } from '@/lib/keytomic'

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://echocarnival.com.hk'
  
  // Add static /blog route
  let urls = [
    {
      loc: `${baseUrl}/blog`,
      lastmod: new Date().toISOString(),
    }
  ]
  
  // Add all dynamic blog slugs
  let cursor: string | undefined = undefined
  let hasMore = true
  
  try {
    while (hasMore) {
      const listRes = await keytomic.listBlogs(50, cursor)
      const page = listRes.data
      page.data.forEach((blog) => {
        urls.push({
          loc: `${baseUrl}/blog/${blog.slug}`,
          lastmod: new Date(blog.updatedAt).toISOString(),
        })
      })
      
      hasMore = page.pageInfo.hasMore
      cursor = page.pageInfo.nextCursor || undefined
    }
  } catch (error) {
    console.error('Failed to fetch blogs for sitemap', error)
  }
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=86400, stale-while-revalidate',
    },
  })
}