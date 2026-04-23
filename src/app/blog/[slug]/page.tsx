import { notFound } from 'next/navigation'
import { keytomic } from '@/lib/keytomic'
import { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const { slug } = params
  const blog = await keytomic.getBlogBySlug(slug)
  
  if (!blog) {
    return { title: 'Blog Not Found | Echo Carnival HK' }
  }
  
  return {
    title: blog.seo.metaTitle || `${blog.title} | Echo Carnival HK`,
    description: blog.seo.metaDescription || blog.excerpt || '',
    alternates: {
      canonical: blog.seo.canonicalUrl || `https://echocarnival.com.hk/blog/${blog.slug}`,
    },
    openGraph: {
      title: blog.seo.metaTitle || blog.title,
      description: blog.seo.metaDescription || blog.excerpt || '',
      url: `https://echocarnival.com.hk/blog/${blog.slug}`,
      siteName: 'Echo Carnival HK',
      type: 'article',
      publishedTime: blog.publishedAt,
      modifiedTime: blog.updatedAt,
      images: blog.coverImageUrl ? [{ url: blog.coverImageUrl }] : [],
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const blog = await keytomic.getBlogBySlug(slug)
  
  if (!blog) {
    notFound()
  }
  
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: blog.title,
    description: blog.excerpt,
    image: blog.coverImageUrl || 'https://echocarnival.com.hk/images/echo-carnival-logo.png',
    datePublished: blog.publishedAt,
    dateModified: blog.updatedAt,
    author: {
      '@type': 'Organization',
      name: 'Echo Carnival HK',
      url: 'https://echocarnival.com.hk',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Echo Carnival HK',
      logo: {
        '@type': 'ImageObject',
        url: 'https://echocarnival.com.hk/images/echo-carnival-logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://echocarnival.com.hk/blog/${blog.slug}`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0f3460] to-[#4dbedf] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/blog"
            className="text-sm uppercase tracking-widest mb-4 opacity-80 hover:underline inline-block"
          >
            ← 返回攻略總覽
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 mt-4">
            {blog.title}
          </h1>
          <p className="text-sm opacity-80 mt-4">
            發佈日期：{new Date(blog.publishedAt).toLocaleDateString()}
          </p>
        </div>
      </section>

      {/* Article Body */}
      <article className="max-w-4xl mx-auto px-4 py-16 text-gray-800 leading-relaxed">
        {blog.coverImageUrl && (
          <div className="mb-12 overflow-hidden rounded-2xl shadow-lg">
            <img
              src={blog.coverImageUrl}
              alt={blog.title}
              className="w-full h-auto object-cover max-h-[500px]"
            />
          </div>
        )}
        
        {/* Content Rendered */}
        <div 
          className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-[#0f3460] prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-[#4dbedf] hover:prose-a:text-[#0f3460] prose-a:transition-colors prose-a:underline prose-img:rounded-2xl prose-img:shadow-lg prose-img:mx-auto prose-strong:text-[#0f3460] prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal prose-ol:pl-6 prose-li:my-2 prose-blockquote:border-l-4 prose-blockquote:border-[#4dbedf] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600"
          dangerouslySetInnerHTML={{ __html: blog.html }}
        />

        {/* Internal Links & CTA */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <div className="bg-gradient-to-r from-[#0f3460] to-[#4dbedf] text-white rounded-2xl p-8 text-center shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
              籌備活動遇到困難？
            </h2>
            <p className="mb-6 text-lg opacity-90">
              立即聯絡 ECHO HK Carnival，我們的專業團隊為您度身訂造專屬嘉年華方案！
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-white text-[#0f3460] font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition shadow-md hover:shadow-lg"
              >
                獲取免費報價
              </Link>
              <a
                href="https://wa.me/85293910332"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-[#0f3460] transition shadow-md hover:shadow-lg"
              >
                WhatsApp 即時查詢
              </a>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
