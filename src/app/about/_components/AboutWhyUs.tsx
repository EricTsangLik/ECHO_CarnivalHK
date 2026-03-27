'use client'

import { motion } from 'framer-motion'

const advantages = [
  {
    icon: '💰',
    title: '高性價比',
    desc: '我們根據您的預算靈活配搭，提供最具性價比的方案。無論大小活動，都能在預算內享受最佳體驗。',
    highlight: '客製化預算方案',
  },
  {
    icon: '🎨',
    title: '遊戲種類豐富',
    desc: '擁有超過30款室內外攤位遊戲，遠超市面常見的 Foam Board 攤位。真實互動遊戲讓參加者更投入、更開心。',
    highlight: '30+ 款攤位遊戲',
  },
  {
    icon: '🌃',
    title: '獨家夜光遊戲',
    desc: '自家獨創的夜光設計遊戲攤位，在黑暗環境中發出繽紛色彩，白天精彩、夜晚更耀眼——市面上獨一無二的體驗。',
    highlight: '市面獨家設計',
  },
  {
    icon: '🧰',
    title: '全面專業支援',
    desc: '從場地評估、物資運輸、安裝佈置到活動當日營運，全程由專業團隊跟進。您只需坐享成果，其餘交給我們。',
    highlight: '全程駐場支援',
  },
  {
    icon: '🎪',
    title: '一站式服務',
    desc: '除攤位遊戲外，同時提供充氣設施、氣球佈置、表演娛樂、工作坊、牌照申請等九大配套服務，一個電話搞定所有需求。',
    highlight: '9 大服務範疇',
  },
  {
    icon: '⚡',
    title: '快速響應',
    desc: '查詢後 1 小時內回覆，確認預訂後迅速安排所有準備工作。緊急活動需求？我們也能靈活應對。',
    highlight: '1 小時內回覆',
  },
]

const AboutWhyUs = () => {
  return (
    <section className="section about-whyus-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">為什麼選擇我們？</h2>
          <p className="section-subtitle">六大理由，讓 ECHO HK Carnival 成為您的嘉年華首選夥伴</p>
        </div>

        <div className="about-whyus-grid">
          {advantages.map((adv, index) => (
            <motion.div
              key={index}
              className="about-whyus-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <div className="about-whyus-icon">{adv.icon}</div>
              <div className="about-whyus-body">
                <h3>{adv.title}</h3>
                <p>{adv.desc}</p>
                <span className="about-whyus-highlight">{adv.highlight}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutWhyUs
