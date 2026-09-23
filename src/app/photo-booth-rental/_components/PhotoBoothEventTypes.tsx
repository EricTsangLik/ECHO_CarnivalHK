'use client'

import { motion } from 'framer-motion'

const eventTypes = [
  { icon: '🛍️', title: '商場推廣及節日活動', desc: '週末推廣、節日主題及商場打卡位，帶動人流與分享。' },
  { icon: '🏢', title: '企業周年晚宴、team building、家庭日', desc: '為同事與家屬留下可分享、可帶走的活動紀錄。' },
  { icon: '🏫', title: '學校開放日、畢業禮、校慶及嘉年華', desc: '適合校園人流高峰，即場拍照、即場打印。' },
  { icon: '📣', title: '品牌快閃店、新品發佈及 roadshow', desc: '自訂相框與視覺效果，把品牌記憶帶回家。' },
  { icon: '🎂', title: '屋苑活動、生日派對及婚禮', desc: '私人活動同樣適合韓式四格與紀念品相片。' },
  { icon: '🎪', title: '與嘉年華攤位組合成完整體驗', desc: '可與攤位遊戲、爆谷機、氣球佈置一站式配套。' },
]

const PhotoBoothEventTypes = () => {
  return (
    <section className="section event-types-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">適合活動類型</h2>
          <p className="section-subtitle">無論什麼類型的活動，Photo Booth 都能成為最受歡迎的打卡位</p>
        </div>

        <div className="event-types-grid">
          {eventTypes.map((event, index) => (
            <motion.div
              key={event.title}
              className="event-type-card"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
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

export default PhotoBoothEventTypes
