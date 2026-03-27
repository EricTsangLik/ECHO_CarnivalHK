'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const AboutStory = () => {
  return (
    <section className="section about-story-section">
      <div className="container">
        <div className="about-story-grid">
          <motion.div
            className="about-story-image"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/echo-carnival-logo.png"
              alt="Echo Carnival HK 嘉年華服務公司 Logo"
              width={260}
              height={260}
              style={{ width: '100%', maxWidth: '260px', height: 'auto' }}
            />
          </motion.div>

          <motion.div
            className="about-story-text"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="about-label">我們的故事</span>
            <h2>從一個想法到香港嘉年華服務的首選品牌</h2>
            <p>
              ECHO HK Carnival 成立於 2022 年，源於一個簡單的信念——每一場活動都值得擁有最精彩的嘉年華體驗。我們深信，歡樂不應受限於預算或場地，而是應該讓每一位參加者都能盡情投入。
            </p>
            <p>
              從最初幾款攤位遊戲起步，到今天我們已發展成為擁有多種室內外遊戲攤位、充氣設施、表演娛樂及全方位活動策劃的一站式嘉年華服務團隊。
            </p>
            <p>
              我們與學校、企業、商場、社區及各類機構合作，為大大小小的活動提供度身訂造的嘉年華方案。每一次合作，我們都全力以赴，務求超越客戶期望。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutStory
