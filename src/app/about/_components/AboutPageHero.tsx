'use client'

import { motion } from 'framer-motion'

const AboutPageHero = () => {
  return (
    <section className="about-page-hero">
      <div className="about-page-hero-overlay" />
      <div className="about-page-hero-content">
        <motion.span
          className="about-page-badge"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ✨ 自2022年起打造難忘嘉年華
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
          用<span className="highlight-text">熱情<span className="swoosh" /></span>與<span className="highlight-text">專業<span className="swoosh" /></span>創造歡樂
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          ECHO HK Carnival 是香港專業的嘉年華服務團隊，致力為每一場活動注入歡笑與驚喜，讓每位參加者都留下難忘回憶。
        </motion.p>
      </div>
    </section>
  )
}

export default AboutPageHero
