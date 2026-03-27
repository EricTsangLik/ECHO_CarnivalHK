'use client'

import { motion } from 'framer-motion'

const BoothCTA = () => {
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
            <h2>準備好為您的活動增添樂趣了嗎？</h2>
            <p>立即聯絡我們，獲取免費報價及專業建議！</p>
            <div className="booth-cta-buttons">
              <a
                href="https://wa.me/85293910332?text=I'm%20inquiring%20about%20the%20game%20booth"
                target="_blank"
                rel="noopener noreferrer"
                className="booth-cta-primary"
              >
                💬 WhatsApp 查詢
              </a>
              <a href="tel:+85293910332" className="booth-cta-secondary">
                📞 +852 9391 0332
              </a>
            </div>
            <p className="booth-cta-note">⚡ 通常於 1 小時內回覆</p>
          </div>

          {/* Decorative blobs */}
          <div className="booth-cta-blob booth-cta-blob-1" />
          <div className="booth-cta-blob booth-cta-blob-2" />
        </motion.div>
      </div>
    </section>
  )
}

export default BoothCTA
