import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '活動策劃攻略｜嘉年華趨勢及資訊',
  description:
    '探索 Echo Carnival HK 的嘉年華活動策劃攻略、行業趨勢及實用貼士。涵蓋學校文化日、企業 ESG 活動、攤位遊戲租借指南及欖球 Fan Zone 方案等熱門主題。',
  alternates: { canonical: 'https://echocarnival.hk/blog' },
  openGraph: {
    title: '活動策劃攻略｜Echo Carnival HK 嘉年華資訊',
    description:
      '嘉年華活動策劃攻略、行業趨勢及實用貼士。涵蓋學校文化日、ESG 活動及攤位遊戲租借。',
    url: 'https://echocarnival.hk/blog',
    siteName: 'Echo Carnival HK',
    type: 'website',
  },
}

const articles = [
  {
    slug: '2026-carnival-planning-guide',
    title:
      '2026 香港嘉年華活動策劃全攻略：從啟德體育園盛事到企業 ESG 團隊建設',
    excerpt:
      '2026 年最全面的香港嘉年華策劃指南，涵蓋攤位遊戲租借、可持續活動策劃、夜光遊戲及 Phygital 互動趨勢。附活動籌備清單！',
    date: '2026-03-27',
    tags: ['活動策劃', '攤位遊戲租借', 'ESG', '啟德體育園'],
    color: 'from-[#ff2151] to-[#ff6b35]',
    emoji: '📋',
  },
  {
    slug: 'sports-fan-zones',
    title: '欖球主題 Fan Zone｜大型戶外活動器材租借 · HK Sevens 2026',
    excerpt:
      '為 2026 香港國際七人欖球賽 50 週年打造最強 Fan Zone！欖球主題攤位遊戲、大型戶外活動器材租借及夜光體驗。',
    date: '2026-03-27',
    tags: ['欖球主題遊戲', 'Fan Zone', '大型戶外活動', '啟德體育園'],
    color: 'from-[#1a1a2e] to-[#16213e]',
    emoji: '🏉',
  },
  {
    slug: 'green-carnival',
    title: '環保嘉年華｜無塑活動 · ESG 慶祝活動 · 綠色攤位',
    excerpt:
      '策劃符合 ESG 標準的環保嘉年華！環保攤位遊戲、無塑活動佈置、可回收獎品及低碳運輸。附 ESG 影響報告。',
    date: '2026-03-27',
    tags: ['環保攤位', '無塑活動', 'ESG', '可持續活動'],
    color: 'from-[#0d7c3a] to-[#28a745]',
    emoji: '🌿',
  },
]

const BlogPage = () => {
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: '活動策劃攻略 | Echo Carnival HK',
    description:
      '嘉年華活動策劃攻略、行業趨勢及實用貼士。',
    url: 'https://echocarnival.hk/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Echo Carnival HK',
      url: 'https://echocarnival.hk',
    },
    blogPost: articles.map((a) => ({
      '@type': 'BlogPosting',
      headline: a.title,
      description: a.excerpt,
      url: `https://echocarnival.hk/blog/${a.slug}`,
      datePublished: a.date,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-[#ff2151] to-[#ff6b35] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            活動策劃攻略
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            嘉年華趨勢、策劃貼士及行業資訊——助您策劃 2026 年最精彩的活動
          </p>
        </div>
      </section>

      {/* ── Articles Grid ── */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-1 gap-8">
          {/* Featured Article */}
          <Link
            href={`/blog/${articles[0].slug}`}
            className="block group"
          >
            <div
              className={`bg-gradient-to-r ${articles[0].color} rounded-2xl p-8 text-white hover:shadow-2xl transition-shadow`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{articles[0].emoji}</span>
                <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                  精選文章
                </span>
                <span className="text-sm opacity-70">
                  {articles[0].date}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:underline decoration-2 underline-offset-4">
                {articles[0].title}
              </h2>
              <p className="text-lg opacity-90 mb-6">
                {articles[0].excerpt}
              </p>
              <div className="flex flex-wrap gap-2">
                {articles[0].tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-white/20 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>

          {/* Other Articles */}
          <div className="grid md:grid-cols-2 gap-6">
            {articles.slice(1).map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="block border rounded-2xl overflow-hidden hover:shadow-lg transition group"
              >
                <div
                  className={`bg-gradient-to-r ${article.color} p-6 text-white`}
                >
                  <span className="text-3xl">{article.emoji}</span>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">
                    {article.date}
                  </p>
                  <h2 className="text-lg font-bold text-gray-800 group-hover:text-[#ff2151] transition mb-3 line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-red-50 text-[#ff2151] px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="mt-16 text-center border-t pt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            想了解更多活動策劃貼士？
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            關注 Echo Carnival HK 獲取最新嘉年華趨勢，或直接聯絡我們獲取免費活動方案報價。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-[#ff2151] text-white font-bold py-3 px-8 rounded-full hover:bg-[#e01040] transition"
            >
              免費報價查詢
            </Link>
            <Link
              href="/booths"
              className="inline-block border-2 border-[#ff2151] text-[#ff2151] font-bold py-3 px-8 rounded-full hover:bg-[#ff2151] hover:text-white transition"
            >
              瀏覽攤位遊戲
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogPage
