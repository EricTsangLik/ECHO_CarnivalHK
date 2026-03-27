'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: '了解需求',
    desc: '深入了解活動類型、場地、人數及預算，確保方案完全貼合您的需求。',
  },
  {
    number: '02',
    title: '度身訂造',
    desc: '根據您的需求精選遊戲組合及配套服務，提供清晰詳盡的報價方案。',
  },
  {
    number: '03',
    title: '專業執行',
    desc: '活動當日團隊提前到場佈置，全程駐場營運，確保活動暢順精彩。',
  },
  {
    number: '04',
    title: '超越期望',
    desc: '我們不只是完成工作——從每一個微笑到完美收場，力求超越您的期望。',
  },
]

const AboutProcess = () => {
  return (
    <section className="section about-process-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">我們如何為您創造價值</h2>
          <p className="section-subtitle">從第一通電話到活動完美收場，每一步都用心</p>
        </div>

        <div className="about-process-timeline">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="about-process-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <div className="about-process-number">{step.number}</div>
              <div className="about-process-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutProcess
