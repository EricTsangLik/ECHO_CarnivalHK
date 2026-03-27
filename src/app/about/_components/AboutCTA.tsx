'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const AboutCTA = () => {
  return (
    <section className="section booth-cta-section">
      <div className="container">
        <motion.div
          className="booth-cta-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="booth-cta-inner">
            <h2>準備好為您的活動注入歡樂了嗎？</h2>
            <p>讓我們的專業團隊為您打造一場難忘的嘉年華體驗。</p>
            <div className="booth-cta-buttons">
              <a
                href="https://wa.me/85293910332?text=I'm%20inquiring%20about%20carnival%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="booth-cta-primary"
              >
                💬 WhatsApp 免費諮詢
              </a>
              <Link href="/booths" className="booth-cta-secondary">
                🎮 瀏覽遊戲攤位
              </Link>
            </div>
            <p className="booth-cta-note">免費報價 · 度身訂造 · 1小時內回覆</p>
          </div>

          <div className="booth-cta-blob booth-cta-blob-1" />
          <div className="booth-cta-blob booth-cta-blob-2" />
        </motion.div>
      </div>
    </section>
  )
}

export default AboutCTA
