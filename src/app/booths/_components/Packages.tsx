'use client'

import { motion } from 'framer-motion'

const packages = [
  {
    id: 'basic',
    name: '基本套餐',
    tagline: '適合小型活動',
    icon: '🎯',
    features: [
      '2 款遊戲攤位',
      '客製化玩法',
      '4 小時遊戲時間',
      '安裝及拆卸服務',
      '操作人員 2 名',
    ],
    highlight: false,
  },
  {
    id: 'standard',
    name: '標準套餐',
    tagline: '最受歡迎',
    icon: '🎪',
    features: [
      '4 款遊戲攤位',
      '客製化玩法',
      '4 小時遊戲時間',
      '安裝及拆卸服務',
      '操作人員 4 名',
      '獎品配套',
    ],
    highlight: true,
  },
  {
    id: 'premium',
    name: '豪華套餐',
    tagline: '適合大型嘉年華',
    icon: '🏆',
    features: [
      '6 款遊戲攤位',
      '客製化外觀包裝',
      '4 小時遊戲時間',
      '安裝及拆卸服務',
      '操作人員 6 名',
      '獎品配套',
      '活動策劃顧問',
    ],
    highlight: false,
  },
]

const Packages = () => {
  return (
    <section className="section packages-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">租借套餐</h2>
          <p className="section-subtitle">靈活配搭，切合不同活動需要。所有套餐均可自訂，歡迎聯絡我們度身訂造！</p>
        </div>

        <div className="packages-grid">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              className={`package-card ${pkg.highlight ? 'package-highlight' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              {pkg.highlight && <div className="package-popular-badge">最受歡迎</div>}
              <div className="package-icon">{pkg.icon}</div>
              <h3>{pkg.name}</h3>
              <p className="package-tagline">{pkg.tagline}</p>

              <ul className="package-features">
                {pkg.features.map((feature, i) => (
                  <li key={i}>
                    <span className="check-icon">✓</span> {feature}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/85293910332?text=I'm%20inquiring%20about%20the%20game%20booth"
                target="_blank"
                rel="noopener noreferrer"
                className={`package-btn ${pkg.highlight ? 'package-btn-primary' : 'package-btn-outline'}`}
              >
                查詢報價
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Packages
