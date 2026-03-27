'use client'

import { motion } from 'framer-motion'

const ServicePageHero = () => {
  return (
    <section className="service-page-hero">
      <div className="service-page-hero-overlay" />
      <div className="service-page-hero-content">
        <motion.span
          className="service-page-badge"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          🎪 一站式嘉年華服務
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
          全方位<span className="highlight-text">嘉年華配套<span className="swoosh" /></span>服務
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          從充氣設施、氣球佈置到舞台表演、活動策劃，我們提供全面的嘉年華配套服務，讓您的活動從籌備到完成都無後顧之憂。
        </motion.p>

        <motion.div
          className="service-hero-highlights"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
        >
          <div className="hero-highlight-item">
            <span className="hero-highlight-icon">🎯</span>
            <span>9 大服務類別</span>
          </div>
          <div className="hero-highlight-item">
            <span className="hero-highlight-icon">🏢</span>
            <span>學校 · 企業 · 商場</span>
          </div>
          <div className="hero-highlight-item">
            <span className="hero-highlight-icon">⚡</span>
            <span>快速報價回覆</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicePageHero
