'use client'

import { motion } from 'framer-motion'

const servicesFull = [
  {
    id: 1,
    icon: '🏰',
    title: '嘉年華充氣互動設施',
    shortDesc: '大型充氣彈床、滑梯及互動競技設施，為活動增添動感與歡笑。',
    details: [
      '大型充氣城堡及彈床',
      '充氣滑梯及攀爬牆',
      '充氣障礙賽道',
      '充氣相撲對戰服',
      '專業安全墊及圍欄',
    ],
    suitable: '學校運動日、大型嘉年華、親子日營',
    color: '#ff6b6b',
  },
  {
    id: 2,
    icon: '🎈',
    title: '特色氣球佈置',
    shortDesc: '特色氣球佈置，為活動增添歡樂氣氛。',
    details: [
      '氣球拱門及立柱',
      '主題氣球牆',
      '氦氣球佈置',
      '氣球花束及造型',
      '可配合品牌主題顏色',
    ],
    suitable: '生日派對、開幕禮、週年慶典',
    color: '#ffd93d',
  },
  {
    id: 3,
    icon: '🤹',
    title: '互動娛樂',
    shortDesc: '專業小丑表演、近景魔術互動及現場扭氣球，帶動全場氣氛。',
    details: [
      '專業小丑表演',
      '近景魔術互動',
      '現場扭氣球',
      '小丑雜耍表演',
      '互動遊戲主持',
    ],
    suitable: '商場推廣、聖誕活動、兒童生日會',
    color: '#6bcb77',
  },
  {
    id: 4,
    icon: '🎨',
    title: '手工藝工作坊',
    shortDesc: '各類創意DIY工作坊，適合親子同樂，製作獨一無二的紀念品。',
    details: [
      '皮革工藝製作',
      '手繪帆布袋',
      '乾花藝術擺設',
      '手工肥皂製作',
      '彩繪面具/陶瓷',
    ],
    suitable: '學校中華文化日、親子活動、企業團建',
    color: '#4d96ff',
  },
  {
    id: 5,
    icon: '🍿',
    title: '體驗活動',
    shortDesc: '即影即有拍照區、爆谷站、棉花糖機及各式小食攤位。',
    details: [
      '即影即有拍照區',
      '爆谷機租借',
      '棉花糖機租借',
      '雪糕機租借',
      '各式小食攤位',
    ],
    suitable: '社區嘉年華、節日派對、週年慶典',
    color: '#ff922b',
  },
  {
    id: 6,
    icon: '🎤',
    title: '舞台表演',
    shortDesc: '現場樂隊唱歌、舞蹈表演及專業DJ打碟，打造視聽盛宴。',
    details: [
      '現場樂隊表演',
      '歌手駐唱',
      '專業DJ打碟',
      '舞蹈團體表演',
      '音響及燈光設備',
    ],
    suitable: '大型嘉年華、企業年會、開幕典禮',
    color: '#cc5de8',
  },
  {
    id: 7,
    icon: '🧸',
    title: '毛絨公仔訂購',
    shortDesc: '提供各類嘉年華獎品公仔批發及訂購服務。',
    details: [
      '各尺寸毛絨公仔',
      '品牌公仔定制',
      '嘉年華經典獎品',
      '文具及玩具獎品',
      '批發優惠價格',
    ],
    suitable: '所有嘉年華活動、遊戲攤位獎品配套',
    color: '#f06595',
  },
  {
    id: 8,
    icon: '📝',
    title: '活動牌照及保險',
    shortDesc: '代辦各類臨時娛樂牌照及活動第三者責任保險申請。',
    details: [
      '臨時娛樂牌照申請',
      '臨時公眾娛樂場所牌照',
      '第三者責任保險',
      '食物製造牌照顧問',
      '消防安全顧問',
    ],
    suitable: '所有公開活動、商場推廣、大型嘉年華',
    color: '#20c997',
  },
  {
    id: 9,
    icon: '✨',
    title: '活動策劃及設計',
    shortDesc: '一站式活動策劃、場地佈置及平面設計服務。',
    details: [
      '活動主題策劃',
      '場地佈置及裝飾',
      '平面設計（海報、橫額）',
      '活動流程規劃',
      '供應商統籌管理',
    ],
    suitable: '企業活動、大型嘉年華、品牌推廣',
    color: '#845ef7',
  },
]

const ServiceShowcase = () => {
  return (
    <section className="section svc-showcase-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">我們的服務</h2>
          <p className="section-subtitle">九大專業服務範疇，涵蓋嘉年華活動的每一個環節</p>
        </div>

        <div className="svc-showcase-grid">
          {servicesFull.map((svc, index) => (
            <motion.div
              key={svc.id}
              className="svc-showcase-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <div className="svc-showcase-header" style={{ borderLeftColor: svc.color }}>
                <span className="svc-showcase-icon">{svc.icon}</span>
                <div>
                  <h3>{svc.title}</h3>
                  <p className="svc-showcase-short">{svc.shortDesc}</p>
                </div>
              </div>

              <div className="svc-showcase-body">
                <h4>服務內容</h4>
                <ul className="svc-detail-list">
                  {svc.details.map((d, i) => (
                    <li key={i}><span className="svc-check">✓</span> {d}</li>
                  ))}
                </ul>

                <div className="svc-suitable">
                  <span className="svc-suitable-label">適合：</span>
                  <span>{svc.suitable}</span>
                </div>
              </div>

              <a
                href="https://wa.me/85293910332?text=I'm%20inquiring%20about%20the%20game%20booth"
                target="_blank"
                rel="noopener noreferrer"
                className="svc-showcase-btn"
                style={{ backgroundColor: svc.color }}
              >
                💬 查詢此服務
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceShowcase
