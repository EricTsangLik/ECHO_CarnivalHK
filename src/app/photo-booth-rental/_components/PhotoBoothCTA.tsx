'use client'

import { motion } from 'framer-motion'
import { photoBoothWhatsApp } from '@/data/navigation'

const PhotoBoothCTA = () => {
  return (
    <section className="section booth-cta-section">
      <div className="container">
        <motion.div
          className="service-cta-card"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="service-cta-inner">
            <span className="service-cta-badge">Photo Booth 查詢</span>
            <h2>想做一個客人會主動排隊、影完又會分享的活動打卡位？</h2>
            <p>告訴我活動日期、地點、人數和主題，我幫你建議最合適的 Photo Booth 方案。</p>
            <div className="booth-cta-buttons">
              <a
                href={photoBoothWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="booth-cta-primary"
              >
                WhatsApp 查詢 Photo Booth
              </a>
            </div>
            <div className="service-cta-trust">
              <div className="trust-item">✅ 免費報價</div>
              <div className="trust-item">✅ 自訂相框</div>
              <div className="trust-item">✅ 1小時內回覆</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PhotoBoothCTA
