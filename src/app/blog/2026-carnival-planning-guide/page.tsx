import { Metadata } from 'next'
import Link from 'next/link'
import { localBusinessSchema } from '@/data/seo-schemas'
import { geoFaqs, buildFaqSchema } from '@/data/faqs'

export const metadata: Metadata = {
  title:
    '2026 香港嘉年華活動策劃全攻略：從啟德體育園盛事到企業 ESG 團隊建設',
  description:
    '2026 年香港嘉年華活動策劃完整指南！涵蓋啟德體育園盛事、攤位遊戲租借、可持續活動策劃、夜光遊戲及 Phygital 互動趨勢。附活動籌備清單，立即收藏！',
  keywords:
    '攤位遊戲租借, 啟德體育園活動, 可持續活動策劃, 夜光遊戲租借, 2026 嘉年華, ESG 團隊建設, Phygital, 香港活動策劃',
  alternates: {
    canonical:
      'https://echocarnival.hk/blog/2026-carnival-planning-guide',
  },
  openGraph: {
    title:
      '2026 香港嘉年華活動策劃全攻略：從啟德體育園盛事到企業 ESG 團隊建設',
    description:
      '2026 年最全面的香港嘉年華策劃指南，涵蓋攤位遊戲租借、ESG 活動、Phygital 趨勢及活動籌備清單。',
    url: 'https://echocarnival.hk/blog/2026-carnival-planning-guide',
    siteName: 'Echo Carnival HK',
    type: 'article',
    publishedTime: '2026-03-27T00:00:00+08:00',
    modifiedTime: '2026-03-27T00:00:00+08:00',
    authors: ['Echo Carnival HK'],
  },
}

const PillarArticlePage = () => {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      '2026 香港嘉年華活動策劃全攻略：從啟德體育園盛事到企業 ESG 團隊建設',
    description:
      '2026 年香港嘉年華活動策劃完整指南，涵蓋攤位遊戲租借、啟德體育園盛事、可持續活動策劃及 Phygital 互動趨勢。',
    image: 'https://echocarnival.hk/images/echo-carnival-logo.png',
    datePublished: '2026-03-27T00:00:00+08:00',
    dateModified: '2026-03-27T00:00:00+08:00',
    author: {
      '@type': 'Organization',
      name: 'Echo Carnival HK',
      url: 'https://echocarnival.hk',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Echo Carnival HK',
      logo: {
        '@type': 'ImageObject',
        url: 'https://echocarnival.hk/images/echo-carnival-logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id':
        'https://echocarnival.hk/blog/2026-carnival-planning-guide',
    },
    keywords: [
      '攤位遊戲租借',
      '啟德體育園活動',
      '可持續活動策劃',
      '夜光遊戲租借',
      'ESG 團隊建設',
      'Phygital',
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
      <section className="relative bg-gradient-to-br from-[#ff2151] to-[#ff6b35] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/blog"
            className="text-sm uppercase tracking-widest mb-4 opacity-80 hover:underline inline-block"
          >
            ← 返回攻略總覽
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 mt-4">
            2026 香港嘉年華活動策劃全攻略
            <br />
            <span className="text-xl md:text-3xl font-normal opacity-90">
              從啟德體育園盛事到企業 ESG 團隊建設
            </span>
          </h1>
          <p className="text-lg opacity-90">
            發佈日期：2026 年 3 月 ｜ 閱讀時間：約 6 分鐘
          </p>
        </div>
      </section>

      {/* ── Article Body ── */}
      <article className="max-w-4xl mx-auto px-4 py-16 text-gray-800 leading-relaxed">
        {/* ── 引言 ── */}
        <p className="text-lg mb-8">
          2026 年，香港活動產業迎來前所未有的機遇。全新的<strong>啟德體育園</strong>落成啟用，適逢<strong>香港國際七人欖球賽 50 週年</strong>，加上政府大力推動文化及盛事經濟，各類嘉年華、文化日及企業活動需求急速攀升。無論您是學校行政人員、企業 HR、還是活動策劃師，這篇全攻略將為您提供從選址到執行的完整指引，助您在 2026 年策劃一場叫好又叫座的<strong>嘉年華活動</strong>。
        </p>

        {/* ── H2: 啟德體育園 ── */}
        <h2 className="text-2xl font-bold text-[#ff2151] mb-4 mt-12">
          一、啟德體育園：2026 年盛事新地標
        </h2>
        <p className="mb-4">
          啟德體育園作為香港最大型的綜合體育場館，主場館可容納 50,000 名觀眾，配備多用途草地及室外活動空間。2026 年欖球七人賽首次移師啟德，預計吸引超過 10 萬名海內外球迷，帶來龐大的<strong>啟德體育園活動</strong>商機。
        </p>
        <p className="mb-4">
          品牌及企業可善用場館周邊的 Fan Zone 區域，設置<strong>攤位遊戲租借</strong>體驗區。從經典的保齡狂潮、投壺遊戲到全新的<strong>夜光遊戲租借</strong>——LED 發光保齡球道、霓虹飛鏢靶——在夜間賽事氛圍下格外吸睛。配合現場大屏幕直播，打造「睇波 × 玩遊戲」的雙重體驗，是品牌曝光及客戶互動的絕佳機會。
        </p>
        <h3 className="text-xl font-semibold mb-3 mt-8">
          1.1 Fan Zone 企劃要點
        </h3>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <strong>場地申請：</strong>需向啟德體育園管理公司提交活動計劃書，建議提前 3-6 個月申請
          </li>
          <li>
            <strong>電力規劃：</strong>Fan Zone 一般提供三相電源，需提前確認可用安培數
          </li>
          <li>
            <strong>人流管理：</strong>預計高峰時段每小時 5,000+ 人流，攤位動線設計至關重要
          </li>
          <li>
            <strong>欖球主題遊戲：</strong>建議加入橄欖球傳接挑戰、踢球入門遊戲等主題攤位
          </li>
        </ul>

        {/* ── H2: ESG 企業活動 ── */}
        <h2 className="text-2xl font-bold text-[#ff2151] mb-4 mt-12">
          二、ESG 團隊建設：企業嘉年華的新標準
        </h2>
        <p className="mb-4">
          2026 年，ESG（環境、社會及管治）已不再是口號。港交所上市規則要求企業在年報中披露 ESG 表現，令越來越多跨國企業及上市公司在策劃員工活動時，主動尋求符合<strong>可持續活動策劃</strong>標準的方案。
        </p>
        <p className="mb-4">
          Echo Carnival HK 的「綠色嘉年華」方案涵蓋三大範疇：
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[#ff2151] text-white">
                <th className="border p-3 text-left">ESG 範疇</th>
                <th className="border p-3 text-left">活動元素</th>
                <th className="border p-3 text-left">KPI 指標</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border p-3 font-semibold">
                  環境 (E)
                </td>
                <td className="border p-3">
                  環保物料攤位、無塑裝飾、可回收獎品、低碳運輸
                </td>
                <td className="border p-3">
                  碳排放量、回收率、塑膠減量百分比
                </td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">
                  社會 (S)
                </td>
                <td className="border p-3">
                  共融遊戲（輪椅友善）、社企合作餐飲、義工參與
                </td>
                <td className="border p-3">
                  參與人數、共融比例、社企採購金額
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-3 font-semibold">
                  管治 (G)
                </td>
                <td className="border p-3">
                  活動後 ESG 報告、數據透明、供應商審核
                </td>
                <td className="border p-3">
                  報告完整度、數據準確性
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4">
          企業可在公司週年晚宴或員工福利日中融入綠色嘉年華元素，讓團隊建設活動同時成為 ESG 年報中的亮點案例。
        </p>

        {/* ── H2: 學校文化週 ── */}
        <h2 className="text-2xl font-bold text-[#ff2151] mb-4 mt-12">
          三、從「文化日」到「文化週」：學校活動升級趨勢
        </h2>
        <p className="mb-4">
          教育界正經歷一場轉變——越來越多學校將單日的「中華文化日」擴展為整整一週的<strong>非物質文化遺產（ICH）體驗週</strong>。這種模式讓學生有更充裕的時間深度體驗傳統文化。
        </p>
        <h3 className="text-xl font-semibold mb-3 mt-8">
          3.1 五天文化週建議時間表
        </h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[#ff2151] text-white">
                <th className="border p-3 text-left">日期</th>
                <th className="border p-3 text-left">主題</th>
                <th className="border p-3 text-left">活動內容</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border p-3">Day 1（週一）</td>
                <td className="border p-3">書畫藝術</td>
                <td className="border p-3">
                  書法工作坊、水墨畫體驗、對聯攤位
                </td>
              </tr>
              <tr>
                <td className="border p-3">Day 2（週二）</td>
                <td className="border p-3">傳統手藝</td>
                <td className="border p-3">
                  剪紙、中國結編織、扇面繪畫工作坊
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-3">Day 3（週三）</td>
                <td className="border p-3">民間遊藝</td>
                <td className="border p-3">
                  投壺、踢毽子、陀螺及文化攤位遊戲
                </td>
              </tr>
              <tr>
                <td className="border p-3">Day 4（週四）</td>
                <td className="border p-3">飲食文化</td>
                <td className="border p-3">
                  糖畫示範、湯圓製作、茶藝體驗
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-3">Day 5（週五）</td>
                <td className="border p-3">嘉年華日</td>
                <td className="border p-3">
                  大型嘉年華、攤位遊戲、舞龍舞獅表演、頒獎禮
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ── H2: Phygital 趨勢 ── */}
        <h2 className="text-2xl font-bold text-[#ff2151] mb-4 mt-12">
          四、Phygital 遊戲趨勢：實體 × 數碼融合
        </h2>
        <p className="mb-4">
          「Phygital」（Physical + Digital）是 2026 年全球活動產業最火熱的關鍵詞。將實體攤位遊戲與數碼互動結合，大幅提升參加者投入度及社交媒體分享率。
        </p>
        <h3 className="text-xl font-semibold mb-3 mt-8">
          4.1 熱門 Phygital 遊戲形式
        </h3>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <strong>AR 攤位打卡：</strong>透過 AR 濾鏡在遊戲攤位前拍照，即時生成品牌主題動態貼紙，鼓勵社交平台分享
          </li>
          <li>
            <strong>QR Code 積分系統：</strong>每完成一個攤位遊戲掃碼集點，儲夠點數可換取獎品，實現線上線下閉環
          </li>
          <li>
            <strong>LED 夜光遊戲系列：</strong>發光保齡球道、霓虹飛鏢、UV 塗鴉牆——特別適合夜間活動及打卡位設計
          </li>
          <li>
            <strong>電子排行榜：</strong>透過平板即時顯示各隊得分，增加競技氣氛，適合企業團隊建設
          </li>
        </ul>
        <p className="mb-4">
          <strong>夜光遊戲租借</strong>是今年最受商場及企業客戶歡迎的新品類。Echo Carnival HK 率先引入全套 LED 夜光遊戲系列，結合專業燈光佈置，為夜間活動打造沉浸式體驗。
        </p>

        {/* ── H2: 攤位遊戲租借 Pillar ── */}
        <h2 className="text-2xl font-bold text-[#ff2151] mb-4 mt-12">
          五、攤位遊戲租借：2026 年人氣遊戲推薦
        </h2>
        <p className="mb-4">
          不論活動規模大小，選擇合適的<strong>攤位遊戲租借</strong>組合至關重要。以下是 2026 年最受歡迎的遊戲分類：
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <strong>經典人氣：</strong>保齡狂潮、飛鏢挑戰、釣鴨樂、投壺
          </li>
          <li>
            <strong>大型戶外：</strong>充氣城堡、大型滑梯、障礙賽道——適合大型戶外活動器材租借
          </li>
          <li>
            <strong>夜光系列：</strong>LED 保齡、霓虹套圈、UV 塗鴉——最新夜光遊戲租借
          </li>
          <li>
            <strong>文化主題：</strong>投壺、踢毽子、書法攤位——校園文化日首選
          </li>
          <li>
            <strong>團隊競技：</strong>企業接力賽、團隊拼圖、計時挑戰——ESG 團隊建設熱選
          </li>
        </ul>

        {/* ── H2: Planning Checklist ── */}
        <h2 className="text-2xl font-bold text-[#ff2151] mb-4 mt-12">
          六、2026 年活動籌備清單 ✅
        </h2>
        <p className="mb-4">
          無論您籌備的是學校文化週、企業嘉年華還是大型 Fan Zone，以下清單確保萬無一失：
        </p>
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold mb-4">
            📋 活動前 8-12 週
          </h3>
          <ul className="list-none space-y-2 mb-6">
            <li>☐ 確定活動主題、日期及預算</li>
            <li>☐ 選定場地並確認電力、空間需求</li>
            <li>☐ 聯絡 Echo Carnival HK 索取免費報價</li>
            <li>☐ 申請臨時娛樂牌照（如需要）</li>
          </ul>
          <h3 className="text-lg font-semibold mb-4">
            📋 活動前 4-6 週
          </h3>
          <ul className="list-none space-y-2 mb-6">
            <li>☐ 確認攤位遊戲及服務組合</li>
            <li>☐ 安排場地實地視察（商場 / 學校 / 戶外）</li>
            <li>☐ 確認保險及安全認證（EMSD / 第三者責任）</li>
            <li>☐ 設計活動流程表及人流動線</li>
          </ul>
          <h3 className="text-lg font-semibold mb-4">
            📋 活動前 1-2 週
          </h3>
          <ul className="list-none space-y-2 mb-6">
            <li>☐ 確認最終人數及攤位配置</li>
            <li>☐ 準備後備天氣方案（戶外活動）</li>
            <li>☐ 確認獎品、佈置物料及餐飲安排</li>
            <li>☐ 確認活動當日時間表及工作人員分工</li>
          </ul>
          <h3 className="text-lg font-semibold mb-4">
            📋 活動當日
          </h3>
          <ul className="list-none space-y-2">
            <li>☐ 提前 2 小時到場安裝及測試</li>
            <li>☐ 進行安全檢查（充氣設施、電力）</li>
            <li>☐ 開始活動！記得拍照打卡 📸</li>
            <li>☐ 活動結束後有序拆卸及清場</li>
          </ul>
        </div>

        {/* ── CTA ── */}
        <div className="bg-gradient-to-r from-[#ff2151] to-[#ff6b35] text-white rounded-2xl p-8 text-center my-12">
          <h2 className="text-2xl font-bold mb-4">
            準備好策劃 2026 年最精彩的嘉年華了嗎？
          </h2>
          <p className="mb-6 text-lg opacity-90">
            Echo Carnival HK 提供免費場地評估及報價。WhatsApp
            即時回覆，讓我們為您度身訂造完美活動方案！
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-[#ff2151] font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition"
            >
              免費報價查詢
            </Link>
            <a
              href="https://wa.me/85293910332?text=我想查詢2026年嘉年華活動策劃"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-[#ff2151] transition"
            >
              WhatsApp 即時查詢
            </a>
          </div>
        </div>

        {/* ── Internal Links (Hub-and-Spoke) ── */}
        <div className="border-t pt-8 mt-8">
          <h3 className="text-lg font-semibold mb-4">📎 延伸閱讀</h3>
          <ul className="space-y-2 text-[#ff2151]">
            <li>
              <Link href="/booths" className="hover:underline">
                → 瀏覽所有攤位遊戲租借選擇
              </Link>
            </li>
            <li>
              <Link
                href="/blog/sports-fan-zones"
                className="hover:underline"
              >
                → 欖球主題 Fan Zone｜HK Sevens 2026
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
                → 嘉年華一站式配套服務
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                → 聯絡我們獲取免費報價
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </>
  )
}

export default PillarArticlePage
