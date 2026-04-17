import { Metadata } from 'next'
import Link from 'next/link'
import { localBusinessSchema } from '@/data/seo-schemas'

/* ── 嘉年華遊戲租借價錢香港｜收費一覽＋套餐推薦 ── */
export const metadata: Metadata = {
  title: '嘉年華遊戲租借價錢香港｜收費一覽＋套餐推薦 | ECHO HK Carnival',
  description:
    '想知嘉年華遊戲租借幾錢？提供最新價格參考及套餐建議。 即日WhatsApp報價，透明收費！',
  keywords: '攤位遊戲租借價錢, 嘉年華遊戲租借香港, 攤位遊戲收費, 嘉年華套餐',
  alternates: {
    canonical: 'https://echocarnival.hk/blog/green-carnival',
  },
  openGraph: {
    title: '嘉年華遊戲租借價錢香港｜收費一覽＋套餐推薦',
    description:
      '想知嘉年華遊戲租借幾錢？提供最新價格參考及套餐建議。 即日WhatsApp報價，透明收費！',
    url: 'https://echocarnival.hk/blog/green-carnival',
    siteName: 'Echo Carnival HK',
    type: 'article',
    publishedTime: '2026-03-27T00:00:00+08:00',
    authors: ['Echo Carnival HK'],
  },
}

const GreenCarnivalPage = () => {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '嘉年華遊戲租借價錢香港｜收費一覽＋套餐推薦 | ECHO HK Carnival',
    description:
      '想知嘉年華遊戲租借幾錢？提供最新價格參考及套餐建議。 即日WhatsApp報價，透明收費！',
    url: 'https://echocarnival.hk/blog/green-carnival',
    datePublished: '2026-03-27T00:00:00+08:00',
    author: {
      '@type': 'Organization',
      name: 'ECHO HK Carnival',
      url: 'https://echocarnival.hk',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ECHO HK Carnival',
      logo: {
        '@type': 'ImageObject',
        url: 'https://echocarnival.hk/images/echo-carnival-logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://echocarnival.hk/blog/green-carnival',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-[#ff2151] to-[#ffae21] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/blog"
            className="text-sm uppercase tracking-widest mb-4 opacity-80 hover:underline inline-block"
          >
            ← 返回攻略總覽
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 mt-4">
            嘉年華遊戲租借價錢香港
            <br />
            <span className="text-xl md:text-3xl font-normal opacity-90">
              收費一覽 ＋ 套餐推薦
            </span>
          </h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            想知嘉年華遊戲租借幾錢？為您提供最新價格參考及套餐建議，透明收費！
          </p>
          <p className="text-sm opacity-60 mt-4">
            發佈日期：2026 年 3 月 ｜ 閱讀時間：約 4 分鐘
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <article className="max-w-4xl mx-auto px-4 py-16 text-gray-800 leading-relaxed">
        <h2 className="text-2xl font-bold text-[#ff2151] mb-4">
          嘉年華攤位遊戲租借收費指南
        </h2>
        <p className="mb-6">
          在香港舉辦嘉年華、學校週年慶典、商場推廣或企業團隊建立活動，攤位遊戲是必不可少的元素。了解各類套餐和收費標準，可以幫助您更好地控制預算並策劃出完美的活動。我們 Echo Carnival HK 提供多款透明清晰的租借套餐，切合不同規模的活動需求。
        </p>

        <h2 className="text-2xl font-bold text-[#ff2151] mb-4 mt-10">
          🎁 人氣租借套餐推薦
        </h2>
        <p className="mb-4">
          我們精心設計了三大套餐，所有套餐均可根據您的具體需求進行自訂調整。以下是我們為您推薦的超值套餐：
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* 基本套餐 */}
          <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm flex flex-col">
            <div className="text-4xl mb-3 text-center">🎯</div>
            <h3 className="font-bold text-xl mb-1 text-center">基本套餐</h3>
            <p className="text-gray-500 text-sm mb-4 text-center">適合小型活動</p>
            <ul className="text-sm text-gray-600 space-y-2 mb-4 flex-grow">
              <li className="flex items-start"><span className="text-[#ff2151] mr-2">✓</span> 2 款遊戲攤位</li>
              <li className="flex items-start"><span className="text-[#ff2151] mr-2">✓</span> 客製化玩法</li>
              <li className="flex items-start"><span className="text-[#ff2151] mr-2">✓</span> 4 小時遊戲時間</li>
              <li className="flex items-start"><span className="text-[#ff2151] mr-2">✓</span> 安裝及拆卸服務</li>
              <li className="flex items-start"><span className="text-[#ff2151] mr-2">✓</span> 操作人員 2 名</li>
            </ul>
          </div>
          
          {/* 標準套餐 */}
          <div className="border-2 border-[#ff2151] rounded-xl p-5 bg-[#fff0f3] shadow-md relative flex flex-col">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ff2151] text-white px-3 py-1 rounded-full text-xs font-bold">最受歡迎</div>
            <div className="text-4xl mb-3 text-center mt-2">🎪</div>
            <h3 className="font-bold text-xl mb-1 text-center text-[#ff2151]">標準套餐</h3>
            <p className="text-gray-500 text-sm mb-4 text-center">中型活動首選</p>
            <ul className="text-sm text-gray-600 space-y-2 mb-4 flex-grow">
              <li className="flex items-start"><span className="text-[#ff2151] mr-2">✓</span> 4 款遊戲攤位</li>
              <li className="flex items-start"><span className="text-[#ff2151] mr-2">✓</span> 客製化玩法</li>
              <li className="flex items-start"><span className="text-[#ff2151] mr-2">✓</span> 4 小時遊戲時間</li>
              <li className="flex items-start"><span className="text-[#ff2151] mr-2">✓</span> 安裝及拆卸服務</li>
              <li className="flex items-start"><span className="text-[#ff2151] mr-2">✓</span> 操作人員 4 名</li>
              <li className="flex items-start"><span className="text-[#ff2151] mr-2">✓</span> 獎品配套</li>
            </ul>
          </div>
          
          {/* 豪華套餐 */}
          <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm flex flex-col">
            <div className="text-4xl mb-3 text-center">🏆</div>
            <h3 className="font-bold text-xl mb-1 text-center">豪華套餐</h3>
            <p className="text-gray-500 text-sm mb-4 text-center">適合大型嘉年華</p>
            <ul className="text-sm text-gray-600 space-y-2 mb-4 flex-grow">
              <li className="flex items-start"><span className="text-[#ff2151] mr-2">✓</span> 6 款遊戲攤位</li>
              <li className="flex items-start"><span className="text-[#ff2151] mr-2">✓</span> 客製化外觀包裝</li>
              <li className="flex items-start"><span className="text-[#ff2151] mr-2">✓</span> 4 小時遊戲時間</li>
              <li className="flex items-start"><span className="text-[#ff2151] mr-2">✓</span> 安裝及拆卸服務</li>
              <li className="flex items-start"><span className="text-[#ff2151] mr-2">✓</span> 操作人員 6 名</li>
              <li className="flex items-start"><span className="text-[#ff2151] mr-2">✓</span> 獎品配套</li>
              <li className="flex items-start"><span className="text-[#ff2151] mr-2">✓</span> 活動策劃顧問</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#ff2151] mb-4 mt-10">
          💡 影響租借費用的主要因素
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-3">
          <li>
            <strong>活動時長：</strong>基本報價通常包含 4 小時服務時間。如需延長時間，可按小時計算額外收費。
          </li>
          <li>
            <strong>攤位數量與種類：</strong>攤位數量越多，平均單個攤位的租賃成本可能越具性價比。某些大型或特殊設計的設施（如大型充氣設施）會產生額外費用。
          </li>
          <li>
            <strong>客製化服務：</strong>我們提供客製化攤位外觀包裝和玩法設計，適合品牌推廣或特定主題活動。此類設計會涉及額外的製作與材料費用。
          </li>
          <li>
            <strong>人力資源：</strong>是否需要增加額外的操作人員或活動助理，以應付大量人流。
          </li>
          <li>
            <strong>地點與物流：</strong>偏遠地區或缺乏升降機等設施的場地，可能會產生額外的運輸及搬運費用。
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-[#ff2151] mb-4 mt-10">
          📝 為什麼選擇 Echo Carnival HK？
        </h2>
        <p className="mb-6">
          我們致力於提供高性價比且服務透明的嘉年華體驗。由報價到活動完結，我們全程與客戶緊密溝通，確保沒有隱藏收費。我們的專業團隊將為您包辦安裝、拆卸及現場指導，讓您無後顧之憂地享受活動的樂趣。
        </p>

        {/* ── CTA ── */}
        <div className="bg-gradient-to-r from-[#ff2151] to-[#ffae21] text-white rounded-2xl p-8 text-center my-12">
          <h2 className="text-2xl font-bold mb-4">
            🎡 立即獲取專屬您的報價方案
          </h2>
          <p className="mb-6 opacity-90">
            每個活動都是獨一無二的，告訴我們您的需求，讓我們為您量身訂做最佳的嘉年華套餐！
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-[#ff2151] font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition shadow-md hover:shadow-lg"
            >
              網上表格查詢
            </Link>
            <a
              href="https://wa.me/85293910332?text=我想查詢嘉年華遊戲租借價錢及套餐"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-[#ff2151] transition shadow-md hover:shadow-lg"
            >
              WhatsApp 即時報價
            </a>
          </div>
        </div>

        {/* ── Internal Links ── */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">📎 探索更多</h3>
          <ul className="space-y-2 text-[#ff2151]">
            <li>
              <Link href="/booths" className="hover:underline flex items-center">
                <span className="mr-2">→</span> 瀏覽所有攤位遊戲
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline flex items-center">
                <span className="mr-2">→</span> 了解嘉年華配套服務
              </Link>
            </li>
            <li>
              <Link
                href="/blog/2026-carnival-planning-guide"
                className="hover:underline flex items-center"
              >
                <span className="mr-2">→</span> 2026 嘉年華活動策劃全攻略
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </>
  )
}

export default GreenCarnivalPage
