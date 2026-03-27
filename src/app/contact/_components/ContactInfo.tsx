'use client'

import { motion } from 'framer-motion'

const contactMethods = [
  {
    icon: '💬',
    title: 'WhatsApp',
    detail: '+852 9391 0332',
    subtext: '最快捷的查詢方式，即時對話',
    href: "https://wa.me/85293910332?text=I'm%20inquiring%20about%20carnival%20services",
    color: '#25d366',
    buttonLabel: '立即 WhatsApp 查詢',
  },
  {
    icon: '📞',
    title: '電話',
    detail: '+852 9391 0332',
    subtext: '歡迎致電查詢，服務時間 10:00-20:00',
    href: 'tel:+85293910332',
    color: 'var(--primary)',
    buttonLabel: '撥打電話',
  },
  {
    icon: '✉️',
    title: '電郵',
    detail: 'echohkcarnival@gmail.com',
    subtext: '詳細查詢或報價需求，歡迎電郵',
    href: 'mailto:echohkcarnival@gmail.com',
    color: '#4d96ff',
    buttonLabel: '發送電郵',
  },
  {
    icon: '📸',
    title: 'Instagram',
    detail: '@echohk_carnival',
    subtext: '追蹤我們的最新活動及作品',
    href: 'https://www.instagram.com/echohk_carnival/',
    color: '#e1306c',
    buttonLabel: '前往 Instagram',
  },
]

const ContactInfo = () => {
  return (
    <section className="section contact-info-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">聯繫方式</h2>
          <p className="section-subtitle">選擇您最方便的方式與我們聯繫</p>
        </div>

        <div className="contact-methods-grid">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="contact-method-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="contact-method-icon-wrap" style={{ backgroundColor: method.color }}>
                <span className="contact-method-icon">{method.icon}</span>
              </div>
              <h3>{method.title}</h3>
              <p className="contact-method-detail">{method.detail}</p>
              <p className="contact-method-subtext">{method.subtext}</p>
              <span className="contact-method-btn" style={{ color: method.color }}>
                {method.buttonLabel} →
              </span>
            </motion.a>
          ))}
        </div>

        {/* Business Hours */}
        <motion.div
          className="contact-hours-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="contact-hours-inner">
            <div className="contact-hours-left">
              <span className="contact-hours-icon">🕙</span>
              <div>
                <h3>營業時間</h3>
                <p>我們隨時準備為您服務</p>
              </div>
            </div>
            <div className="contact-hours-right">
              <div className="hours-row">
                <span className="hours-day">星期一 至 星期五</span>
                <span className="hours-time">10:00 - 20:00</span>
              </div>
              <div className="hours-row">
                <span className="hours-day">星期六</span>
                <span className="hours-time">10:00 - 18:00</span>
              </div>
              <div className="hours-row">
                <span className="hours-day">星期日及公眾假期</span>
                <span className="hours-time">WhatsApp 查詢</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactInfo
