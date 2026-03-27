'use client'

import { motion } from 'framer-motion'

const values = [
  {
    icon: '❤️',
    title: '以客為先',
    desc: '每位客戶都是獨一無二的。我們用心聆聽需求，提供度身訂造的方案，確保活動完美符合您的期望。',
  },
  {
    icon: '🎯',
    title: '追求卓越',
    desc: '從遊戲設備的質素到現場的每一個細節，我們都堅持高標準，力求帶給參加者最佳的嘉年華體驗。',
  },
  {
    icon: '🤝',
    title: '誠信可靠',
    desc: '透明的報價、準時的交付、專業的態度——我們珍惜每一份信任，用行動贏得客戶的長期合作。',
  },
  {
    icon: '💡',
    title: '不斷創新',
    desc: '我們持續研發新穎遊戲及獨特體驗，如自家設計的夜光遊戲攤位，讓您的活動永遠走在潮流前端。',
  },
]

const AboutValues = () => {
  return (
    <section className="section about-values-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">核心價值</h2>
          <p className="section-subtitle">驅動我們每一天的信念</p>
        </div>

        <div className="about-values-grid">
          {values.map((v, index) => (
            <motion.div
              key={index}
              className="about-value-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="about-value-icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutValues
