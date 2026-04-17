import { Metadata } from 'next'
import Link from 'next/link'
import { localBusinessSchema } from '@/data/seo-schemas'

/* ── Task C: Landing Page 1 — Sports Fan Zones (HK Sevens 2026) ──
   Target Keywords: 欖球主題遊戲, 大型戶外活動器材租借
   ────────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: '公司團建活動遊戲香港｜Team Building 嘉年華方案 | ECHO HK Carnival',
  description:
    '提升團隊合作的嘉年華活動方案，適合企業Team Building。即日獲取專屬報價及建議！',
  keywords:
    '欖球主題遊戲, 大型戶外活動器材租借, HK Sevens 2026, Fan Zone, 啟德體育園, 攤位遊戲租借, 夜光遊戲, 香港, 公司Team Building, Annual Dinner, 公司Annual Dinner ',
  alternates: {
    canonical: 'https://echocarnival.hk/blog/sports-fan-zones',
  },
  openGraph: {
    title: '欖公司團建活動遊戲香港｜Team Building 嘉年華方案 | ECHO HK Carnival',
    description:
      '提升團隊合作的嘉年華活動方案，適合企業Team Building。即日獲取專屬報價及建議！',
    url: 'https://echocarnival.hk/blog/sports-fan-zones',
    siteName: 'ECHO HK Carnival',
    type: 'article',
    publishedTime: '2026-03-27T00:00:00+08:00',
    authors: ['ECHO HK Carnival'],
  },
}

const SportsFanZonesPage = () => {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '欖公司團建活動遊戲香港｜Team Building 嘉年華方案 | ECHO HK Carnival',
    description:
      '提升團隊合作的嘉年華活動方案，適合企業Team Building。即日獲取專屬報價及建議！',
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
      <section className="relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/blog"
            className="text-sm uppercase tracking-widest mb-4 text-[#ff2151] hover:underline inline-block"
          >
            ← 返回攻略總覽
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 mt-4">
            欖球主題 Fan Zone
            <br />
            <span className="text-xl md:text-3xl font-normal opacity-90">
              大型戶外活動器材租借 · 啟德體育園
            </span>
          </h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            為 2026 香港國際七人欖球賽 50 週年打造最震撼的球迷互動體驗區
          </p>
          <p className="text-sm opacity-60 mt-4">
            發佈日期：2026 年 3 月 ｜ 閱讀時間：約 4 分鐘
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <article className="max-w-4xl mx-auto px-4 py-16 text-gray-800 leading-relaxed">
        <h2 className="text-2xl font-bold text-[#ff2151] mb-4">
          為什麼選擇 Echo Carnival HK 打造 Fan Zone？
        </h2>
        <p className="mb-6">
          2026 年欖球七人賽首次移師<strong>啟德體育園</strong>，場館周邊活動空間較以往大幅增加。品牌及贊助商可善用 Fan Zone 區域設置<strong>欖球主題遊戲</strong>攤位，在球迷高度集中的時段內實現最大品牌曝光。Echo Carnival HK 擁有豐富的<strong>大型戶外活動器材租借</strong>經驗，從充氣障礙賽道到巨型投射遊戲，為您的 Fan Zone 提供一站式方案。
        </p>

        <h2 className="text-2xl font-bold text-[#ff2151] mb-4 mt-10">
          🏉 欖球主題遊戲推薦
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="border rounded-xl p-5">
            <h3 className="font-bold text-lg mb-2">
              橄欖球傳接挑戰
            </h3>
            <p className="text-gray-600 text-sm">
              模擬欖球傳接情境的互動攤位，參加者於指定時間內完成最多次精準傳接即可贏取獎品。適合所有年齡層。
            </p>
          </div>
          <div className="border rounded-xl p-5">
            <h3 className="font-bold text-lg mb-2">
              踢球入門 Kick Zone
            </h3>
            <p className="text-gray-600 text-sm">
              專業充氣球門搭配電子計分系統，挑戰精準踢球入指定區域。配備即時排行榜，競技氣氛十足。
            </p>
          </div>
          <div className="border rounded-xl p-5">
            <h3 className="font-bold text-lg mb-2">
              Speed Dash 衝刺跑道
            </h3>
            <p className="text-gray-600 text-sm">
              大型充氣賽道搭配電子計時器，測試你的短跑速度。企業團隊賽尤其受歡迎。
            </p>
          </div>
          <div className="border rounded-xl p-5">
            <h3 className="font-bold text-lg mb-2">
              🌙 LED 夜光保齡球道
            </h3>
            <p className="text-gray-600 text-sm">
              夜間賽事限定！全套 LED 發光保齡球道，霓虹燈效配合現場音樂，是打卡位的不二之選。
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#ff2151] mb-4 mt-10">
          📋 大型戶外活動器材租借清單
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[#1a1a2e] text-white">
                <th className="border p-3 text-left">器材類型</th>
                <th className="border p-3 text-left">規格</th>
                <th className="border p-3 text-left">適用場景</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border p-3">充氣城堡</td>
                <td className="border p-3">5m × 5m, 需 4m+ 樓高</td>
                <td className="border p-3">
                  兒童區、家庭 Fan Zone
                </td>
              </tr>
              <tr>
                <td className="border p-3">充氣障礙賽道</td>
                <td className="border p-3">15m × 4m</td>
                <td className="border p-3">企業團隊挑戰</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-3">巨型滑梯</td>
                <td className="border p-3">8m 高, 需戶外平地</td>
                <td className="border p-3">活動亮點、打卡位</td>
              </tr>
              <tr>
                <td className="border p-3">LED 夜光遊戲套裝</td>
                <td className="border p-3">含 4-6 款遊戲</td>
                <td className="border p-3">夜間活動、品牌體驗</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-[#ff2151] mb-4 mt-10">
          場地規劃及安全要求
        </h2>
        <p className="mb-4">
          啟德體育園 Fan Zone 面積約 5,000-10,000 平方呎，建議攤位佈局採用「環形動線」設計，確保人流暢順。所有充氣設施需通過<strong>機電工程署（EMSD）</strong>安全認證，並配備合資格操作員及第三者責任保險。Echo Carnival HK 團隊將提供免費場地評估，確保安全合規。
        </p>

        {/* ── CTA ── */}
        <div className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] text-white rounded-2xl p-8 text-center my-12">
          <h2 className="text-2xl font-bold mb-4">
            🏟️ 立即規劃您的 HK Sevens 2026 Fan Zone
          </h2>
          <p className="mb-6 opacity-90">
            名額有限，建議提前 3-6 個月預訂。WhatsApp 即時回覆！
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-[#ff2151] text-white font-bold py-3 px-8 rounded-full hover:bg-[#e01040] transition"
            >
              免費報價查詢
            </Link>
            <a
              href="https://wa.me/85293910332?text=我想查詢HK Sevens 2026 Fan Zone方案"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-[#1a1a2e] transition"
            >
              WhatsApp 查詢
            </a>
          </div>
        </div>

        {/* ── Internal Links ── */}
        <div className="border-t pt-8 mt-8">
          <h3 className="text-lg font-semibold mb-4">📎 相關文章</h3>
          <ul className="space-y-2 text-[#ff2151]">
            <li>
              <Link href="/booths" className="hover:underline">
                → 所有攤位遊戲租借
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
                href="/blog/green-carnival"
                className="hover:underline"
              >
                → 環保嘉年華 × ESG 慶祝活動
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">
                → 嘉年華配套服務
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </>
  )
}

export default SportsFanZonesPage
