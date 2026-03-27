'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { indoorBooths, outdoorBooths, type BoothItem } from '@/data/assets'

const BoothShowcase = () => {
  const [activeTab, setActiveTab] = useState<'indoor' | 'outdoor'>('indoor')
  const [selectedBooth, setSelectedBooth] = useState<BoothItem | null>(null)

  const displayedBooths = activeTab === 'indoor' ? indoorBooths : outdoorBooths

  useEffect(() => {
    if (selectedBooth) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => { document.body.style.overflow = 'auto' }
  }, [selectedBooth])

  return (
    <section className="section booth-showcase-section">
      <div className="gallery-container">
        <div className="section-header">
          <h2 className="section-title">
            {activeTab === 'indoor' ? '🏠 室內遊戲攤位' : '🌳 室外遊戲攤位'}
          </h2>
          <p className="section-subtitle">
            {activeTab === 'indoor'
              ? '適合室內場地的精選遊戲，無論天氣如何都能盡情玩樂'
              : '適合戶外空間的大型遊戲，享受陽光下的嘉年華氛圍'}
          </p>
        </div>

        <div className="tabs-container">
          <div className="tabs">
            <button
              className={`tab-btn ${activeTab === 'indoor' ? 'active' : ''}`}
              onClick={() => setActiveTab('indoor')}
            >
              🏠 室內攤位
            </button>
            <button
              className={`tab-btn ${activeTab === 'outdoor' ? 'active' : ''}`}
              onClick={() => setActiveTab('outdoor')}
            >
              🌳 室外攤位
            </button>
          </div>
        </div>

        <motion.div layout className="gallery-grid showcase-grid">
          <AnimatePresence mode="wait">
            {displayedBooths.map((booth, index) => (
              <motion.div
                key={booth.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="booth-card showcase-card"
                onClick={() => setSelectedBooth(booth)}
              >
                <div className="booth-image-wrapper">
                  <Image
                    src={booth.image}
                    alt={`${booth.name} - Echo Carnival 嘉年華遊戲攤位`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="booth-overlay">
                    <span className="view-btn">查看詳情</span>
                  </div>
                </div>
                <div className="booth-content">
                  <span className="booth-category">
                    {booth.category === 'indoor' ? '室內遊戲' : '室外遊戲'}
                  </span>
                  <h3>{booth.name}</h3>
                  <p className="booth-desc-preview">{booth.description}</p>
                  {booth.dimensions && (
                    <span className="booth-dimensions">📐 {booth.dimensions}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedBooth && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedBooth(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: 'spring', duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close-btn" onClick={() => setSelectedBooth(null)}>×</button>
              <div className="modal-body">
                <div className="modal-image-container">
                  <Image
                    src={selectedBooth.image}
                    alt={`${selectedBooth.name} - Echo Carnival 嘉年華遊戲攤位詳情`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="modal-info">
                  <span className="modal-category">
                    {selectedBooth.category === 'indoor' ? '室內遊戲' : '室外遊戲'}
                  </span>
                  <h2>{selectedBooth.name}</h2>
                  <p className="modal-description">{selectedBooth.description || '暫無描述'}</p>
                  {selectedBooth.dimensions && (
                    <div className="modal-detail-item">
                      <span className="detail-label">📐 尺寸:</span>
                      <span className="detail-value">{selectedBooth.dimensions}</span>
                    </div>
                  )}
                  <div className="modal-features">
                    <h4>包含服務</h4>
                    <ul>
                      <li>✅ 遊戲設備及配件</li>
                      <li>✅ 專業安裝及拆卸</li>
                      <li>✅ 操作人員指導</li>
                      <li>✅ 安全檢查及保險</li>
                    </ul>
                  </div>
                  <a
                    href="https://wa.me/85293910332?text=I'm%20inquiring%20about%20the%20game%20booth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-cta-btn"
                  >
                    💬 WhatsApp 查詢
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default BoothShowcase
