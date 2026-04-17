import { Metadata } from 'next'
import Link from 'next/link'
import { localBusinessSchema } from '@/data/seo-schemas'
import { geoFaqs, buildFaqSchema } from '@/data/faqs'

/* ── 學校嘉年華遊戲租借香港｜中學・小學活動專用方案 ── */
export const metadata: Metadata = {
  title: '學校嘉年華遊戲租借香港｜中學・小學活動專用方案 | ECHO HK Carnival',
  description:
    '專為全港中學、小學及幼稚園設計的嘉年華遊戲租借方案。適合學校開放日、陸運會及試後活動，提供機電署安全認證充氣設施及專人駐場支援。',
  keywords:
    '學校嘉年華, 學校攤位遊戲, 嘉年華遊戲租借, 中學活動, 小學活動, 學校開放日, 試後活動, 充氣設施租借香港, 學校嘉年華策劃, 攤位遊戲',
  alternates: {
    canonical: 'https://echocarnival.hk/blog/2026-carnival-planning-guide',
  },
  openGraph: {
    title: '學校嘉年華遊戲租借香港｜中學・小學活動專用方案 | ECHO HK Carnival',
    description:
      '專為全港中學、小學及幼稚園設計的嘉年華遊戲租借方案。適合學校開放日、陸運會及試後活動，提供機電署安全認證充氣設施及專人駐場支援。',
    url: 'https://echocarnival.hk/blog/2026-carnival-planning-guide',
    siteName: 'ECHO HK Carnival',
    type: 'article',
    publishedTime: '2026-03-27T00:00:00+08:00',
    modifiedTime: '2026-03-27T00:00:00+08:00',
    authors: ['ECHO HK Carnival'],
  },
}

const SchoolCarnivalPage = () => {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '學校嘉年華遊戲租借香港｜中學・小學活動專用方案 | ECHO HK Carnival',
    description:
      '專為全港中學、小學及幼稚園設計的嘉年華遊戲租借方案。適合學校開放日、陸運會及試後活動，提供機電署安全認證充氣設施及專人駐場支援。',
    image: 'https://echocarnival.hk/images/echo-carnival-logo.png',
    datePublished: '2026-03-27T00:00:00+08:00',
    dateModified: '2026-03-27T00:00:00+08:00',
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
      '@id': 'https://echocarnival.hk/blog/2026-carnival-planning-guide',
    },
    keywords: [
      '學校嘉年華',
      '學校攤位遊戲',
      '嘉年華遊戲租借',
      '中學活動',
      '小學活動',
      '學校開放日',
    ],
  }

  const faqSchema = buildFaqSchema(geoFaqs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-[#0f3460] to-[#4dbedf] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/blog"
            className="text-sm uppercase tracking-widest mb-4 opacity-80 hover:underline inline-block"
          >
            ← 返回攻略總覽
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 mt-4">
            學校嘉年華遊戲租借香港
            <br />
            <span className="text-xl md:text-3xl font-normal opacity-90">
              中學・小學活動專用方案
            </span>
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            專為全港幼稚園、小學及中學度身訂造的攤位遊戲與充氣設施！無論是學校開放日、陸運會還是試後活動，我們都能為師生帶來安全又難忘的嘉年華體驗。
          </p>
          <p className="text-sm opacity-60 mt-4">
            發佈日期：2026 年 3 月 ｜ 閱讀時間：約 5 分鐘
          </p>
        </div>
      </section>

      {/* ── Article Body ── */}
      <article className="max-w-4xl mx-auto px-4 py-16 text-gray-800 leading-relaxed">
        {/* ── 引言 ── */}
        <p className="text-lg mb-8">
          籌辦校園活動時，老師及家教會（PTA）往往需要花費大量時間與精力設計攤位遊戲。Echo Carnival HK 提供一站式<strong>學校嘉年華遊戲租借</strong>服務，涵蓋經典攤位、大型充氣設施及益智遊戲，讓學校行政人員省卻繁瑣的準備工作。我們深知學校活動對安全性的嚴格要求，所有設施均具備相關安全認證，並提供專人駐場協助，確保活動順利進行。
        </p>

        {/* ── H2: 適用場景 ── */}
        <h2 className="text-2xl font-bold text-[#0f3460] mb-4 mt-12">
          一、校園嘉年華的四大適用場景
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <div className="text-3xl mb-2">🏫</div>
            <h3 className="text-lg font-bold text-[#0f3460] mb-2">學校開放日 (Open Day)</h3>
            <p className="text-gray-600 text-sm">
              開放日是展示學校活力的最佳時機。設置色彩繽紛的充氣城堡及合家歡攤位遊戲，能有效吸引區內家長及幼童駐足參與，提升學校形象。
            </p>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <div className="text-3xl mb-2">🏅</div>
            <h3 className="text-lg font-bold text-[#0f3460] mb-2">陸運會及水運會</h3>
            <p className="text-gray-600 text-sm">
              在看台區後方或體育館旁設置競技類充氣設施（如充氣障礙賽）及運動主題攤位（如籃球神射手），讓未有參賽的學生也能感受濃厚的運動氣氛。
            </p>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <div className="text-3xl mb-2">🎉</div>
            <h3 className="text-lg font-bold text-[#0f3460] mb-2">試後活動 / 結業派對</h3>
            <p className="text-gray-600 text-sm">
              考試過後，學生最需要放鬆身心！舉辦全校嘉年華，引進巨型充氣滑梯、水上充氣設施或夜光遊戲，為學年畫上完美句號。
            </p>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <div className="text-3xl mb-2">🧧</div>
            <h3 className="text-lg font-bold text-[#0f3460] mb-2">中華文化日及節日慶典</h3>
            <p className="text-gray-600 text-sm">
              配合特定節日（如農曆新年、中秋節），我們提供投壺、踢毽子等傳統民間遊藝攤位，寓教於樂，讓學生在遊戲中體驗傳統文化。
            </p>
          </div>
        </div>

        {/* ── H2: 遊戲推薦 ── */}
        <h2 className="text-2xl font-bold text-[#0f3460] mb-4 mt-12">
          二、按年齡層嚴選：最受歡迎的校園遊戲
        </h2>
        <p className="mb-4">
          不同年齡層的學生對遊戲的興趣和體能要求各異，我們為不同學校提供針對性的遊戲組合推薦：
        </p>
        
        <h3 className="text-xl font-semibold mb-3 mt-6 text-[#4dbedf]">幼稚園及初小 (K1 - P3)</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
          <li><strong>小型充氣城堡：</strong>高度及安全性專為幼童設計，防止碰撞。</li>
          <li><strong>釣鴨樂 / 撈金魚：</strong>訓練幼童手眼協調能力，經典且極受歡迎。</li>
          <li><strong>拋圈圈：</strong>規則簡單易懂，容易獲得成功感。</li>
          <li><strong>魔術表演及扭氣球：</strong>由專業表演者駐場，為小朋友帶來驚喜。</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3 mt-6 text-[#4dbedf]">高小及初中 (P4 - S3)</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
          <li><strong>巨型充氣障礙賽道：</strong>挑戰體能及速度，適合班際對抗賽。</li>
          <li><strong>充氣飛鏢 / 競技神射手：</strong>結合運動元素，安全又刺激的射擊體驗。</li>
          <li><strong>巨型疊疊樂 (Giant Jenga)：</strong>考驗邏輯思維與耐性。</li>
          <li><strong>環保種子彈珠台：</strong>結合 STEM 與環保教育，寓教於樂。</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3 mt-6 text-[#4dbedf]">高中 (S4 - S6)</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
          <li><strong>Speed Dash 衝刺跑道：</strong>配備電子計時器，測試爆發力，競技感滿分。</li>
          <li><strong>LED 夜光保齡球：</strong>適合傍晚或室內禮堂舉行的試後派對，打卡一流。</li>
          <li><strong>VR/AR 互動遊戲：</strong>結合最新科技，吸引青少年的眼球。</li>
          <li><strong>客製化難度攤位：</strong>調高經典遊戲的難度，增加挑戰性。</li>
        </ul>

        {/* ── H2: 安全與認證 ── */}
        <h2 className="text-2xl font-bold text-[#0f3460] mb-4 mt-12">
          三、校園活動，安全第一
        </h2>
        <p className="mb-4">
          學校活動容不得半點安全隱患。Echo Carnival HK 將學生安全放在首位，我們的服務承諾包括：
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[#0f3460] text-white">
                <th className="border p-3 text-left">安全範疇</th>
                <th className="border p-3 text-left">Echo Carnival HK 承諾</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border p-3 font-semibold">充氣設施認證</td>
                <td className="border p-3">所有大型充氣設施均符合香港機電工程署 (EMSD) 的安全規格，並可提供相關證明文件供校方存檔。</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">電力與佈線</td>
                <td className="border p-3">由合資格技工進行電力接駁，所有電線均會使用線槽板覆蓋或高空架設，防止學生絆倒。</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-3 font-semibold">專業駐場指導</td>
                <td className="border p-3">按遊戲設施的危險程度，配備足夠數量的專業操作員及指導員駐場，全程監控使用情況。</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">保險保障</td>
                <td className="border p-3">我們具備完善的第三者責任保險，保障活動期間的突發意外。</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-3 font-semibold">衛生及清潔</td>
                <td className="border p-3">所有遊戲道具及充氣設施在每次租借前後均會進行徹底清潔及消毒。</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ── H2: 學校專屬優惠 ── */}
        <h2 className="text-2xl font-bold text-[#0f3460] mb-4 mt-12">
          四、學校及家教會 (PTA) 專屬方案
        </h2>
        <p className="mb-4">
          我們明白學校的活動預算往往需要經過嚴格審批。因此，我們特別為香港的中小學及幼稚園提供<strong>學校專屬折扣優惠</strong>。
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
          <li><strong>彈性套餐選擇：</strong>由 2 個攤位的小型體驗，到 10+ 個攤位連大型充氣設施的全校嘉年華，均可按預算度身訂造。</li>
          <li><strong>一條龍服務：</strong>報價已包含運輸、安裝、拆卸及基本操作人員，清晰透明，沒有隱藏收費。</li>
          <li><strong>採購程序配合：</strong>我們熟悉學校的採購及報價程序，能迅速提供正式報價單、商業登記證及相關資質文件以配合校方審批。</li>
        </ul>

        {/* ── CTA ── */}
        <div className="bg-gradient-to-r from-[#0f3460] to-[#4dbedf] text-white rounded-2xl p-8 text-center my-12 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">
            🎓 為學生打造最難忘的校園嘉年華！
          </h2>
          <p className="mb-6 text-lg opacity-90">
            立即聯絡我們，獲取學校專屬的嘉年華遊戲組合清單及報價。我們的顧問團隊將協助您規劃完美的活動流程！
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-[#0f3460] font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition shadow-md hover:shadow-lg"
            >
              索取學校報價單
            </Link>
            <a
              href="https://wa.me/85293910332?text=我想查詢學校嘉年華活動及攤位遊戲租借"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-[#0f3460] transition shadow-md hover:shadow-lg"
            >
              WhatsApp 即時查詢
            </a>
          </div>
        </div>

        {/* ── Internal Links ── */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">📎 延伸閱讀</h3>
          <ul className="space-y-2 text-[#4dbedf]">
            <li>
              <Link href="/booths" className="hover:underline flex items-center">
                <span className="mr-2">→</span> 瀏覽所有攤位遊戲租借選擇
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
                href="/blog/sports-fan-zones"
                className="hover:underline flex items-center"
              >
                <span className="mr-2">→</span> 公司團建活動遊戲香港｜Team Building 嘉年華方案
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline flex items-center">
                <span className="mr-2">→</span> 嘉年華一站式配套服務
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </>
  )
}

export default SchoolCarnivalPage