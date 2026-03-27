'use client'

import { motion } from 'framer-motion'

const stats = [
  { number: '2022', label: '成立年份', suffix: '' },
  { number: '30', label: '款攤位遊戲', suffix: '+' },
  { number: '9', label: '大服務範疇', suffix: '' },
  { number: '100', label: '場成功活動', suffix: '+' },
]

const commitments = [
  {
    icon: '🛡️',
    title: '安全第一',
    desc: '所有設備定期檢查維護，配備專業安全措施，為參加者提供安心的遊樂環境。',
  },
  {
    icon: '♻️',
    title: '環保意識',
    desc: '持續優化物資使用，減少即棄用品，選用耐用及可重複使用的設備和裝飾。',
  },
  {
    icon: '🌟',
    title: '品質保證',
    desc: '每一款遊戲攤位都經過精心設計製作，採用優質材料，確保長期使用仍保持最佳狀態。',
  },
]

const AboutStats = () => {
  return (
    <section className="section about-stats-section">
      <div className="container">
        {/* Stats bar */}
        <motion.div
          className="about-stats-bar"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="about-stat-item">
              <span className="about-stat-number">
                {stat.number}
                <span className="about-stat-suffix">{stat.suffix}</span>
              </span>
              <span className="about-stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Commitments */}
        <div className="section-header" style={{ marginTop: '4rem' }}>
          <h2 className="section-title">我們的承諾</h2>
          <p className="section-subtitle">不僅是服務，更是一份對品質與安全的堅持</p>
        </div>

        <div className="about-commitments-grid">
          {commitments.map((item, index) => (
            <motion.div
              key={index}
              className="about-commitment-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <span className="about-commitment-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutStats
