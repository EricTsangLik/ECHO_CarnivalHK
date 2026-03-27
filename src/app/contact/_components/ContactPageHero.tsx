'use client'

import { motion } from 'framer-motion'

const ContactPageHero = () => {
  return (
    <section className="contact-page-hero">
      <div className="contact-page-hero-overlay" />
      <div className="contact-page-hero-content">
        <motion.span
          className="contact-page-badge"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          📞 聯絡我們
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
          讓我們一起<span className="highlight-text">創造歡樂<span className="swoosh" /></span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          無論您有任何查詢或需要報價，歡迎隨時與我們聯繫。我們的團隊將在最短時間內回覆您！
        </motion.p>

        <motion.div
          className="contact-hero-highlights"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
        >
          <div className="hero-highlight-item">
            <span className="hero-highlight-icon">⚡</span>
            <span>1小時內回覆</span>
          </div>
          <div className="hero-highlight-item">
            <span className="hero-highlight-icon">💬</span>
            <span>免費諮詢報價</span>
          </div>
          <div className="hero-highlight-item">
            <span className="hero-highlight-icon">🇭🇰</span>
            <span>香港本地團隊</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactPageHero
