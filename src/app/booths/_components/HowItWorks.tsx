'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    icon: '💬',
    title: '聯絡我們',
    desc: '透過 WhatsApp 或電話告訴我們您的活動日期、場地及人數，我們會即時回覆。',
  },
  {
    number: '02',
    icon: '📝',
    title: '度身訂造方案',
    desc: '根據您的預算和需求，推薦最適合的遊戲組合及套餐配搭。',
  },
  {
    number: '03',
    icon: '🚚',
    title: '專業安裝',
    desc: '活動當日，專業團隊準時到場安裝所有遊戲設備，確保一切就緒。',
  },
  {
    number: '04',
    icon: '🎉',
    title: '盡情享樂',
    desc: '遊戲期間由我們的人員全程協助運作，活動結束後負責拆卸清場。',
  },
]

const HowItWorks = () => {
  return (
    <section className="section how-it-works-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">租借流程</h2>
          <p className="section-subtitle">簡單四步，輕鬆打造完美嘉年華</p>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="step-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              {index < steps.length - 1 && <div className="step-connector" />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
