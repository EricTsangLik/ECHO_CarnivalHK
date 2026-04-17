import { Metadata } from 'next'
import Link from 'next/link'
import { localBusinessSchema } from '@/data/seo-schemas'

/* ── 公司團建活動遊戲香港｜Team Building 嘉年華方案 ── */
export const metadata: Metadata = {
  title: '公司團建活動遊戲香港｜Team Building 嘉年華方案 | ECHO HK Carnival',
  description:
    '提升團隊合作的嘉年華活動方案，適合企業Team Building。提供多款破冰遊戲及競技攤位，即日獲取專屬報價及建議！',
  keywords:
    '公司團建活動, Team Building 香港, 團隊建立, 攤位遊戲租借, 破冰遊戲, 企業活動, 嘉年華方案, 香港, 公司Annual Dinner',
  alternates: {
    canonical: 'https://echocarnival.hk/blog/sports-fan-zones',
  },
  openGraph: {
    title: '公司團建活動遊戲香港｜Team Building 嘉年華方案 | ECHO HK Carnival',
    description:
      '提升團隊合作的嘉年華活動方案，適合企業Team Building。提供多款破冰遊戲及競技攤位，即日獲取專屬報價及建議！',
    url: 'https://echocarnival.hk/blog/sports-fan-zones',
    siteName: 'ECHO HK Carnival',
    type: 'article',
    publishedTime: '2026-03-27T00:00:00+08:00',
    authors: ['ECHO HK Carnival'],
  },
}

const TeamBuildingPage = () => {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '公司團建活動遊戲香港｜Team Building 嘉年華方案 | ECHO HK Carnival',
    description:
      '提升團隊合作的嘉年華活動方案，適合企業Team Building。提供多款破冰遊戲及競技攤位，即日獲取專屬報價及建議！',
    url: 'https://echocarnival.hk/blog/sports-fan-zones',
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
      '@id': 'https://echocarnival.hk/blog/sports-fan-zones',
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
      <section className="relative bg-gradient-to-br from-[#1a1a2e] to-[#ff2151] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/blog"
            className="text-sm uppercase tracking-widest mb-4 opacity-80 hover:underline inline-block"
          >
            ← 返回攻略總覽
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 mt-4">
            公司團建活動遊戲香港
            <br />
            <span className="text-xl md:text-3xl font-normal opacity-90">
              Team Building 嘉年華方案
            </span>
          </h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            透過充滿樂趣的嘉年華競技與破冰遊戲，打破部門隔閡，提升團隊凝聚力！為您的企業打造難忘的 Team Building 體驗。
          </p>
          <p className="text-sm opacity-60 mt-4">
            發佈日期：2026 年 3 月 ｜ 閱讀時間：約 4 分鐘
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <article className="max-w-4xl mx-auto px-4 py-16 text-gray-800 leading-relaxed">
        <h2 className="text-2xl font-bold text-[#ff2151] mb-4">
          為何選擇嘉年華形式進行 Team Building？
        </h2>
        <p className="mb-6">
          傳統的團隊建立（Team Building）活動有時會讓人感到枯燥或壓力。相反，<strong>嘉年華形式的團建活動</strong>結合了輕鬆愉快的氛圍和趣味性十足的競技遊戲，能讓員工在零壓力的環境下自然互動。Echo Carnival HK 提供多款適合企業的攤位遊戲及競技設施，幫助團隊打破冰山，促進溝通與協作。
        </p>

        <h2 className="text-2xl font-bold text-[#ff2151] mb-4 mt-10">
          🤝 皇牌團建嘉年華遊戲推薦
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition">
            <div className="text-4xl mb-3 text-center">🏆</div>
            <h3 className="font-bold text-lg mb-2 text-center text-[#1a1a2e]">
              巨型充氣障礙賽 (Obstacle Course)
            </h3>
            <p className="text-gray-600 text-sm text-center">
              考驗體能與團隊合作！隊員需要互相扶持通過各種充氣障礙，最快全員完成的隊伍獲勝。非常適合激發團隊拼搏精神。
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition">
            <div className="text-4xl mb-3 text-center">🎯</div>
            <h3 className="font-bold text-lg mb-2 text-center text-[#1a1a2e]">
              競技神射手 (Archery Darts)
            </h3>
            <p className="text-gray-600 text-sm text-center">
              安全安全的泡沫箭頭射箭遊戲。透過分組對抗，不僅考驗個人眼界，還需要隊長排兵佈陣，極具策略性。
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition">
            <div className="text-4xl mb-3 text-center">🧩</div>
            <h3 className="font-bold text-lg mb-2 text-center text-[#1a1a2e]">
              巨型疊疊樂 (Giant Jenga)
            </h3>
            <p className="text-gray-600 text-sm text-center">
              放大版的經典桌遊。每一次抽取木塊都需要團隊共同商議和小心翼翼地執行，是絕佳的溝通與風險管理訓練。
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition">
            <div className="text-4xl mb-3 text-center">🎪</div>
            <h3 className="font-bold text-lg mb-2 text-center text-[#1a1a2e]">
              經典攤位闖關 (Carnival Relay)
            </h3>
            <p className="text-gray-600 text-sm text-center">
              將多個經典攤位遊戲（如拋圈圈、擲沙包、射籃球）串聯成闖關模式，適合所有年齡層及體能狀況的員工參與。
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#ff2151] mb-4 mt-10">
          📋 企業專屬 Team Building 方案特色
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[#1a1a2e] text-white">
                <th className="border p-3 text-left">服務特點</th>
                <th className="border p-3 text-left">內容詳情</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border p-3 font-semibold text-[#ff2151]">客製化活動流程</td>
                <td className="border p-3">根據企業文化及活動目標（如領導力培訓、破冰、解壓），設計專屬的遊戲規則與計分機制。</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold text-[#ff2151]">品牌元素融入</td>
                <td className="border p-3">攤位外觀、遊戲道具及獎品均可印上公司 Logo 或活動主題，增強企業歸屬感。</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-3 font-semibold text-[#ff2151]">專業司儀與指導</td>
                <td className="border p-3">提供經驗豐富的活動司儀帶動全場氣氛，並配備專業指導員確保遊戲安全及順利進行。</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold text-[#ff2151]">一站式場地與佈置</td>
                <td className="border p-3">無論是戶外草地、沙灘，還是室內宴會廳、辦公室，我們都能提供場地建議及全套佈置服務。</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-[#ff2151] mb-4 mt-10">
          成功舉辦 Team Building 的三大要素
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-3">
          <li>
            <strong>多元化選擇：</strong>員工的體能和興趣各異，提供靜態與動態兼備的嘉年華遊戲，確保每個人都能樂在其中。
          </li>
          <li>
            <strong>良性競爭：</strong>設立分組計分制及豐富獎品，激發員工的求勝心與團隊榮譽感。
          </li>
          <li>
            <strong>無憂執行：</strong>將繁瑣的器材運輸、安裝及現場管理交給 Echo Carnival HK 的專業團隊，讓 HR 及活動籌委也能享受活動。
          </li>
        </ul>

        {/* ── CTA ── */}
        <div className="bg-gradient-to-r from-[#1a1a2e] to-[#ff2151] text-white rounded-2xl p-8 text-center my-12 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">
            🚀 準備好激發團隊的無限潛能了嗎？
          </h2>
          <p className="mb-6 opacity-90">
            告訴我們您的團隊規模及預算，我們將於 24 小時內為您提供免費的 Team Building 嘉年華計劃書及報價！
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-[#ff2151] font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition shadow-md hover:shadow-lg"
            >
              索取活動計劃書
            </Link>
            <a
              href="https://wa.me/85293910332?text=我想查詢公司Team Building嘉年華方案"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-[#1a1a2e] transition shadow-md hover:shadow-lg"
            >
              WhatsApp 即時聯絡
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
              <Link
                href="/blog/green-carnival"
                className="hover:underline flex items-center"
              >
                <span className="mr-2">→</span> 嘉年華遊戲租借價錢香港｜收費一覽＋套餐推薦
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
            <li>
              <Link href="/services" className="hover:underline flex items-center">
                <span className="mr-2">→</span> 嘉年華配套服務
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </>
  )
}

export default TeamBuildingPage
