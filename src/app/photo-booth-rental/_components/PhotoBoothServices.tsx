'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const aiPhotoBoothImage = '/images/Booth/AI photo Booth/AI_photo_booth.jpeg'

const photoBoothServices = [
  {
    id: 'korean',
    icon: '🎞️',
    title: '韓式 Photo Booth／人生四格',
    shortDesc:
      '經典韓式四格相片體驗，簡約、好玩、易分享。客人可自由擺 pose，即場打印專屬相片，最適合校園活動、商場推廣、品牌快閃店及企業活動。',
    color: '#ff6b6b',
  },
  {
    id: 'ai',
    icon: '✨',
    title: 'AI Photo Booth',
    shortDesc:
      '將普通合照變成有故事感的 AI 創作相片。可按活動主題設計不同視覺效果，為嘉賓帶來更有話題性的打卡體驗。',
    color: '#4d96ff',
    image: aiPhotoBoothImage,
    imageAlt: 'ECHO HK Carnival AI Photo Booth 機械人拍照設備',
  },
  {
    id: 'souvenirs',
    icon: '🧲',
    title: '金幣相／冰箱貼相片',
    shortDesc:
      '將活動相片變成可收藏、可帶走的實體紀念品。可製作金幣相、磁石冰箱貼等，增加品牌曝光與活動記憶點。',
    color: '#ff922b',
  },
]

const PhotoBoothServices = () => {
  return (
    <section className="section svc-showcase-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">三個主力服務</h2>
          <p className="section-subtitle">
            韓式四格 Photo Booth 已成為香港受歡迎的拍攝體驗，這類服務特別適合做即場分享與實體紀念品。
          </p>
        </div>

        <div className="svc-showcase-grid">
          {photoBoothServices.map((svc, index) => (
            <motion.div
              key={svc.id}
              id={svc.id}
              className="svc-showcase-card"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
            >
              {svc.image && (
                <div className="booth-image-wrapper photo-booth-svc-image">
                  <Image
                    src={svc.image}
                    alt={svc.imageAlt || svc.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              )}
              <div className="svc-showcase-header" style={{ borderLeftColor: svc.color }}>
                <span className="svc-showcase-icon">{svc.icon}</span>
                <div>
                  <h3>{svc.title}</h3>
                  <p className="svc-showcase-short">{svc.shortDesc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PhotoBoothServices
