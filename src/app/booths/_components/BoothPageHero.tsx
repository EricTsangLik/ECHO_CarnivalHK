'use client'

import { motion } from 'framer-motion'
import { indoorBooths, outdoorBooths } from '@/data/assets'

const BoothPageHero = () => {
  const totalBooths = indoorBooths.length + outdoorBooths.length

  return (
    <section className="booth-page-hero">
      <div className="booth-page-hero-overlay" />
      <div className="booth-page-hero-content">
        <motion.span
          className="booth-page-badge"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          🎮 遊戲攤位租借
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
          精選嘉年華<span className="highlight-text">遊戲攤位<span className="swoosh" /></span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          超過 {totalBooths} 款室內外遊戲任您選擇，從經典保齡到趣味釣鴨，為每一場活動帶來最難忘的歡樂體驗。
        </motion.p>

        <motion.div
          className="booth-page-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
        >
          <div className="stat-item">
            <span className="stat-number">{indoorBooths.length}+</span>
            <span className="stat-label">室內遊戲</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">{outdoorBooths.length}+</span>
            <span className="stat-label">室外遊戲</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">100+</span>
            <span className="stat-label">成功活動</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BoothPageHero
