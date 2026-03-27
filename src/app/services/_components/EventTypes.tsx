'use client'

import { motion } from 'framer-motion'

const eventTypes = [
  { icon: '🏫', title: '學校慶典', desc: '校慶、中華文化日、運動日、畢業典禮等校園活動。' },
  { icon: '🏢', title: '企業活動', desc: '年會、團建、Family Day、品牌推廣及員工獎勵活動。' },
  { icon: '🛍️', title: '商場推廣', desc: '週末推廣、節日主題嘉年華、新店開幕慶典。' },
  { icon: '🏘️', title: '屋苑嘉年華', desc: '屋苑節日活動、管理處活動、住戶聯誼嘉年華。' },
  { icon: '🎂', title: '生日派對', desc: '兒童生日會、主題派對、百日宴及周歲派對。' },
  { icon: '🎄', title: '節日活動', desc: '聖誕派對、新年慶典、萬聖節、中秋節及復活節活動。' },
  { icon: '⛪', title: '教會及社福', desc: '教會嘉年華、社區中心活動、慈善籌款嘉年華。' },
  { icon: '🎗️', title: '特別慶典', desc: '開幕禮、週年誌慶、頒獎典禮及慶祝活動。' },
]

const EventTypes = () => {
  return (
    <section className="section event-types-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">適用活動類型</h2>
          <p className="section-subtitle">無論什麼類型的活動，我們都能提供最合適的嘉年華方案</p>
        </div>

        <div className="event-types-grid">
          {eventTypes.map((event, index) => (
            <motion.div
              key={index}
              className="event-type-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.4 }}
            >
              <span className="event-type-icon">{event.icon}</span>
              <h3>{event.title}</h3>
              <p>{event.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EventTypes
