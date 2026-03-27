'use client'

import { motion } from 'framer-motion'

const processSteps = [
  {
    number: '01',
    icon: '📞',
    title: '初步諮詢',
    desc: '透過 WhatsApp 或電話聯繫我們，分享您的活動構想、日期及場地資訊。',
  },
  {
    number: '02',
    icon: '📋',
    title: '方案策劃',
    desc: '根據活動規模和預算，我們會提供度身訂造的服務方案及詳細報價。',
  },
  {
    number: '03',
    icon: '✅',
    title: '確認預訂',
    desc: '確認方案後繳付訂金，我們會為您安排所有細節及物資準備工作。',
  },
  {
    number: '04',
    icon: '🚛',
    title: '現場佈置',
    desc: '活動當日，團隊會提前到場完成佈置安裝，確保一切準備就緒。',
  },
  {
    number: '05',
    icon: '🎊',
    title: '活動執行',
    desc: '專業人員全程駐場支援，確保活動暢順進行，讓賓客盡情享樂。',
  },
  {
    number: '06',
    icon: '🧹',
    title: '收拾清場',
    desc: '活動結束後，團隊負責拆卸所有設備及清理場地，為您省心省力。',
  },
]

const ServiceProcess = () => {
  return (
    <section className="section service-process-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">服務流程</h2>
          <p className="section-subtitle">從諮詢到清場，六步輕鬆搞定完美嘉年華</p>
        </div>

        <div className="service-process-grid">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              className="service-process-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="service-process-number">{step.number}</div>
              <div className="service-process-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceProcess
