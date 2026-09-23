'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { photoBoothWhatsApp } from '@/data/navigation'

const PhotoBoothPageHero = () => {
  return (
    <section className="service-page-hero">
      <div className="service-page-hero-overlay" />
      <div className="service-page-hero-content">
        <motion.span
          className="service-page-badge"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Photo Booth 租用
        </motion.span>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          讓每位客人帶走屬於活動的一刻
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          韓式人生四格、即影即有 Photo Booth 及 AI 創意相片體驗，
          為學校、商場、品牌及企業活動打造最受歡迎的打卡位與專屬紀念品。
        </motion.p>

        <motion.div
          className="booth-cta-buttons photo-booth-hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Link href="/contact" className="booth-cta-primary">
            立即查詢 Photo Booth
          </Link>
          <a
            href={photoBoothWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="booth-cta-secondary"
          >
            WhatsApp 獲取報價
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default PhotoBoothPageHero
