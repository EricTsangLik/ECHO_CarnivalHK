import { Metadata } from 'next'
import Link from 'next/link'
import { keytomic } from '@/lib/keytomic'

export const metadata: Metadata = {
  title: '活動策劃攻略｜學校嘉年華、企業團建及收費指南',
  description: '探索 Echo Carnival HK 的嘉年華活動策劃攻略及實用貼士。涵蓋學校嘉年華、公司 Team Building 團建方案及最新遊戲租借價錢與套餐推薦。',
  alternates: { canonical: 'https://echocarnival.com.hk/blog' },
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { cursor?: string }
}) {
  const limit = 10
  
  try {
    const result = await keytomic.listBlogs(limit, searchParams.cursor)
    const pageInfo = result.data.pageInfo
    const blogs = result.data.data

    return (
      <>
        {/* ── Hero ── */}
        <section className="bg-gradient-to-br from-[#ff2151] to-[#ffae21] text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              活動策劃攻略
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              嘉年華遊戲租借、學校活動方案、企業團建貼士及最新收費指南——助您策劃最精彩的活動！
            </p>
          </div>
        </section>

        {/* ── Articles Grid ── */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <Link
                key={blog.id}
                href={`/blog/${blog.slug}`}
                className="block border rounded-2xl overflow-hidden hover:shadow-lg transition group bg-white flex flex-col"
              >
                {blog.coverImageUrl && (
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src={blog.coverImageUrl}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-sm text-gray-500 mb-2">
                    {new Date(blog.publishedAt).toLocaleDateString()}
                  </p>
                  <h2 className="text-xl font-bold text-gray-800 group-hover:text-[#ff2151] transition mb-3 line-clamp-2">
                    {blog.title}
                  </h2>
                  {blog.excerpt && (
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {blog.excerpt}
                    </p>
                  )}
                  <div className="mt-auto">
                    <span className="text-sm text-[#ff2151] font-semibold group-hover:underline">閱讀更多 →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Pagination Controls */}
          <div className="mt-12 flex justify-center gap-4">
            {pageInfo.hasMore && pageInfo.nextCursor && (
              <Link
                href={`/blog?cursor=${pageInfo.nextCursor}`}
                className="inline-block bg-[#ff2151] text-white font-bold py-3 px-8 rounded-full hover:bg-[#e01040] transition"
              >
                載入更多 Load More
              </Link>
            )}
          </div>
        </section>
      </>
    )
  } catch (error) {
    return <div className="p-8 text-center text-red-500">Failed to load blogs.</div>
  }
}
