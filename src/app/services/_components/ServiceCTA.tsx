'use client'

import { motion } from 'framer-motion'

const ServiceCTA = () => {
  return (
    <section className="section booth-cta-section">
      <div className="container">
        <motion.div
          className="service-cta-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="service-cta-inner">
            <span className="service-cta-badge">🎪 免費諮詢</span>
            <h2>讓我們為您打造難忘的嘉年華體驗</h2>
            <p>告訴我們您的活動構想，我們會提供最合適的方案及報價。</p>
            <div className="booth-cta-buttons">
              <a
                href="https://wa.me/85293910332?text=I'm%20inquiring%20about%20carnival%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="booth-cta-primary"
              >
                💬 WhatsApp 免費諮詢
              </a>
              <a href="mailto:echohkcarnival@gmail.com" className="booth-cta-secondary">
                ✉️ echohkcarnival@gmail.com
              </a>
            </div>
            <div className="service-cta-trust">
              <div className="trust-item">✅ 免費報價</div>
              <div className="trust-item">✅ 度身訂造</div>
              <div className="trust-item">✅ 1小時內回覆</div>
            </div>
          </div>

          <div className="booth-cta-blob booth-cta-blob-1" />
          <div className="booth-cta-blob booth-cta-blob-2" />
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceCTA
