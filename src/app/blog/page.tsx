import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '活動策劃攻略｜學校嘉年華、企業團建及收費指南',
  description:
    '探索 Echo Carnival HK 的嘉年華活動策劃攻略及實用貼士。涵蓋學校嘉年華、公司 Team Building 團建方案及最新遊戲租借價錢與套餐推薦。',
  alternates: { canonical: 'https://echocarnival.hk/blog' },
  openGraph: {
    title: '活動策劃攻略｜學校嘉年華、企業團建及收費指南',
    description:
      '嘉年華活動策劃攻略及實用貼士。涵蓋學校嘉年華、企業團建及最新攤位遊戲租借收費指南。',
    url: 'https://echocarnival.hk/blog',
    siteName: 'Echo Carnival HK',
    type: 'website',
  },
}

const articles = [
  {
    slug: '2026-carnival-planning-guide',
    title: '學校嘉年華遊戲租借香港｜中學・小學活動專用方案',
    excerpt:
      '專為全港幼稚園、小學及中學度身訂造的攤位遊戲與充氣設施！適合學校開放日、陸運會及試後活動，提供機電署安全認證充氣設施及專人駐場支援。',
    date: '2026-03-27',
    tags: ['學校嘉年華', '學校攤位遊戲', '嘉年華遊戲租借', '學校開放日'],
    color: 'from-[#0f3460] to-[#4dbedf]',
    emoji: '🏫',
  },
  {
    slug: 'sports-fan-zones',
    title: '公司團建活動遊戲香港｜Team Building 嘉年華方案',
    excerpt:
      '提升團隊合作的嘉年華活動方案，適合企業Team Building。提供多款破冰遊戲及競技攤位，即日獲取專屬報價及建議！',
    date: '2026-03-27',
    tags: ['公司團建活動', 'Team Building 香港', '團隊建立', '攤位遊戲租借'],
    color: 'from-[#1a1a2e] to-[#ff2151]',
    emoji: '🤝',
  },
  {
    slug: 'green-carnival',
    title: '嘉年華遊戲租借價錢香港｜收費一覽＋套餐推薦',
    excerpt:
      '想知嘉年華遊戲租借幾錢？為您提供最新價格參考及人氣套餐建議，即日WhatsApp報價，透明清晰無隱藏收費！',
    date: '2026-03-27',
    tags: ['攤位遊戲租借價錢', '嘉年華遊戲租借香港', '攤位遊戲收費', '嘉年華套餐'],
    color: 'from-[#ff2151] to-[#ffae21]',
    emoji: '💰',
  },
]

const BlogPage = () => {
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: '活動策劃攻略 | Echo Carnival HK',
    description:
      '嘉年華活動策劃攻略、學校活動、企業團建方案及收費指南。',
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