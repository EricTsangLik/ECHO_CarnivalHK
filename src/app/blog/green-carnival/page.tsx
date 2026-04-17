import { Metadata } from 'next'
import Link from 'next/link'
import { localBusinessSchema } from '@/data/seo-schemas'

/* ── Task C: Landing Page 2 — Sustainable Green Carnivals ──
   Target Keywords: 環保攤位, 無塑活動, ESG 慶祝活動
   ─────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: '嘉年華遊戲租借價錢香港｜收費一覽＋套餐推薦 | ECHO HK Carnival',
  description:
    '想知嘉年華遊戲租借幾錢？提供最新價格參考及套餐建議。 即日WhatsApp報價，透明收費！',
  keywords:
    '攤位遊戲租借價錢',
  alternates: {
    canonical: 'https://echocarnival.hk/blog/green-carnival',
  },
  openGraph: {
    title: '環保嘉年華｜無塑活動 · ESG 慶祝活動 · 綠色攤位',
    description:
      '符合 ESG 標準的綠色嘉年華方案：環保攤位、無塑佈置及低碳運輸。適合企業及社區活動。',
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
      <section className="relative bg-gradient-to-br from-[#0d7c3a] to-[#28a745] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/blog"
            className="text-sm uppercase tracking-widest mb-4 opacity-80 hover:underline inline-block"
          >
            ← 返回攻略總覽
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 mt-4">
            環保嘉年華 × ESG 慶祝活動
            <br />
            <span className="text-xl md:text-3xl font-normal opacity-90">
              無塑活動 · 綠色攤位 · 可持續活動策劃
            </span>
          </h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            助企業實現 ESG 承諾，讓每一場慶祝活動都為地球出一分力
          </p>
          <p className="text-sm opacity-60 mt-4">
            發佈日期：2026 年 3 月 ｜ 閱讀時間：約 4 分鐘
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <article className="max-w-4xl mx-auto px-4 py-16 text-gray-800 leading-relaxed">
        <h2 className="text-2xl font-bold text-[#0d7c3a] mb-4">
          為什麼需要綠色嘉年華？
        </h2>
        <p className="mb-6">
          隨着港交所上市規則及《公司管治守則》對 ESG 披露要求日益嚴格，企業在策劃員工活動、週年慶典及客戶答謝活動時，越來越重視<strong>可持續活動策劃</strong>。Echo Carnival HK 的「綠色嘉年華」方案專為有 ESG 合規需求的企業度身設計，從<strong>環保攤位</strong>遊戲到<strong>無塑活動</strong>佈置，每個細節都貫徹可持續理念。
        </p>

        <h2 className="text-2xl font-bold text-[#0d7c3a] mb-4 mt-10">
          🌿 環保攤位遊戲系列
        </h2>
        <p className="mb-4">
          所有綠色嘉年華攤位遊戲均使用環保物料製作，棄用即棄塑膠，改用 FSC 認證木材、再生紙板及天然麻繩。
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="border border-green-200 rounded-xl p-5 bg-green-50">
            <h3 className="font-bold text-lg mb-2">♻️ 環保投壺</h3>
            <p className="text-gray-600 text-sm">
              竹製壺身配天然箭矢，零塑膠用料。遊戲結束後所有物料可完全回收或堆肥處理。
            </p>
          </div>
          <div className="border border-green-200 rounded-xl p-5 bg-green-50">
            <h3 className="font-bold text-lg mb-2">
              🌱 種子彈珠台
            </h3>
            <p className="text-gray-600 text-sm">
              以種子包取代傳統塑膠獎品，參加者贏取的種子可帶回家種植。寓教於樂，推廣綠色生活。
            </p>
          </div>
          <div className="border border-green-200 rounded-xl p-5 bg-green-50">
            <h3 className="font-bold text-lg mb-2">
              🎯 紙板飛鏢靶
            </h3>
            <p className="text-gray-600 text-sm">
              100% 再生紙板製作的飛鏢靶，配合磁性飛鏢（安全 + 環保）。攤位裝飾全部採用可回收物料。
            </p>
          </div>
          <div className="border border-green-200 rounded-xl p-5 bg-green-50">
            <h3 className="font-bold text-lg mb-2">
              🎨 升級再造工作坊
            </h3>
            <p className="text-gray-600 text-sm">
              將回收物料（舊 T 恤、紙箱、瓶蓋）改造成藝術品。手把手教學，增強團隊合作及環保意識。
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#0d7c3a] mb-4 mt-10">
          📊 ESG 慶祝活動方案規格
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[#0d7c3a] text-white">
                <th className="border p-3 text-left">項目</th>
                <th className="border p-3 text-left">綠色標準</th>
                <th className="border p-3 text-left">傳統方案對比</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border p-3 font-semibold">
                  攤位物料
                </td>
                <td className="border p-3">
                  FSC 木材 / 再生紙板 / 竹
                </td>
                <td className="border p-3">塑膠 / PVC</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">活動佈置</td>
                <td className="border p-3">
                  布質橫額 / 植物裝飾 / LED 燈（低耗電）
                </td>
                <td className="border p-3">
                  即棄橫額 / 氣球 / 螢光棒
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-3 font-semibold">獎品</td>
                <td className="border p-3">
                  種子包 / 環保袋 / 竹製餐具
                </td>
                <td className="border p-3">
                  塑膠玩具 / 即棄禮品
                </td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">運輸</td>
                <td className="border p-3">
                  電動車輛 / 合併運送
                </td>
                <td className="border p-3">多次柴油車運輸</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-3 font-semibold">
                  活動後報告
                </td>
                <td className="border p-3">
                  完整 ESG 影響報告（碳排放、回收率、參與數據）
                </td>
                <td className="border p-3">無</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-[#0d7c3a] mb-4 mt-10">
          🏢 適用場景
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <strong>企業 ESG 慶祝活動：</strong>週年晚宴、員工答謝日、CSR 日
          </li>
          <li>
            <strong>社區環保日：</strong>屋苑會所、區議會活動、環保團體籌款
          </li>
          <li>
            <strong>學校環保週：</strong>配合環保教育主題，將攤位遊戲與環保知識結合
          </li>
          <li>
            <strong>商場綠色推廣：</strong>商場活動配合品牌 ESG 企劃，提升公眾形象
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-[#0d7c3a] mb-4 mt-10">
          活動後 ESG 影響報告
        </h2>
        <p className="mb-6">
          每場綠色嘉年華結束後，Echo Carnival HK 將提供一份專業的<strong>ESG 影響報告</strong>，涵蓋：碳排放量計算、塑膠減量數據、回收物料重量、參與人數及滿意度調查。報告格式符合 GRI Standards 及港交所 ESG 報告指引要求，可直接用於企業年報披露。
        </p>

        {/* ── CTA ── */}
        <div className="bg-gradient-to-r from-[#0d7c3a] to-[#28a745] text-white rounded-2xl p-8 text-center my-12">
          <h2 className="text-2xl font-bold mb-4">
            🌍 讓您的下一場活動成為 ESG 亮點
          </h2>
          <p className="mb-6 opacity-90">
            Echo Carnival HK
            綠色嘉年華方案——環保不代表沉悶，讓可持續活動同樣精彩有趣！
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-[#0d7c3a] font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition"
            >
              索取綠色方案報價
            </Link>
            <a
              href="https://wa.me/85293910332?text=我想查詢綠色嘉年華/ESG活動方案"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-[#0d7c3a] transition"
            >
              WhatsApp 查詢
            </a>
          </div>
        </div>

        {/* ── Internal Links ── */}
        <div className="border-t pt-8 mt-8">
          <h3 className="text-lg font-semibold mb-4">📎 相關文章</h3>
          <ul className="space-y-2 text-[#0d7c3a]">
            <li>
              <Link href="/booths" className="hover:underline">
                → 所有攤位遊戲租借
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">
                → 嘉年華配套服務
              </Link>
            </li>
            <li>
              <Link
                href="/blog/2026-carnival-planning-guide"
                className="hover:underline"
              >
                → 2026 嘉年華活動策劃全攻略
              </Link>
            </li>
            <li>
              <Link
                href="/blog/sports-fan-zones"
                className="hover:underline"
              >
                → 欖球主題 Fan Zone 方案
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </>
  )
}

export default GreenCarnivalPage
