import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { indoorBooths, outdoorBooths, type BoothItem } from '../data/assets';
import './BoothGallery.css';

const BoothGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'indoor' | 'outdoor'>('indoor');
  const [selectedBooth, setSelectedBooth] = useState<BoothItem | null>(null);

  const displayedBooths = activeTab === 'indoor' ? indoorBooths : outdoorBooths;

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedBooth) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedBooth]);

  const handleBoothClick = (booth: BoothItem) => {
    setSelectedBooth(booth);
  };

  const closeModal = () => {
    setSelectedBooth(null);
  };

  return (
    <section id="booths" className="section booth-gallery">
      <div className="gallery-container">
        <h2 className="section-title">精選遊戲攤位</h2>
        <p className="gallery-subtitle">探索我們豐富多彩的遊戲選擇，為您的活動增添無限樂趣</p>
        
        <div className="tabs-container">
          <div className="tabs">
            <button 
              className={`tab-btn ${activeTab === 'indoor' ? 'active' : ''}`}
              onClick={() => setActiveTab('indoor')}
            >
              🏢 室內攤位
            </button>
            <button 
              className={`tab-btn ${activeTab === 'outdoor' ? 'active' : ''}`}
              onClick={() => setActiveTab('outdoor')}
            >
              🌳 室外攤位
            </button>
          </div>
        </div>

        <motion.div layout className="gallery-grid">
          <AnimatePresence mode='wait'>
            {displayedBooths.map((booth) => (
              <motion.div
                key={booth.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="booth-card"
                onClick={() => handleBoothClick(booth)}
              >
                <div className="booth-image-wrapper">
                  <img src={booth.image} alt={booth.name} loading="lazy" />
                  <div className="booth-overlay">
                    <span className="view-btn">查看詳情</span>
                  </div>
                </div>
                <div className="booth-content">
                  <span className="booth-category">
                    {booth.category === 'indoor' ? '室內遊戲' : '室外遊戲'}
                  </span>
                  <h3>{booth.name}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedBooth && (
          <motion.div 
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close-btn" onClick={closeModal}>×</button>
              
              <div className="modal-body">
                <div className="modal-image-container">
                  <img src={selectedBooth.image} alt={selectedBooth.name} />
                </div>
                <div className="modal-info">
                  <span className="modal-category">
                    {selectedBooth.category === 'indoor' ? '室內遊戲' : '室外遊戲'}
                  </span>
                  <h2>{selectedBooth.name}</h2>
                  <p className="modal-description">{selectedBooth.description || '暫無描述'}</p>
                  
                  {selectedBooth.dimensions && (
                    <div className="modal-detail-item">
                      <span className="detail-label">尺寸:</span>
                      <span className="detail-value">{selectedBooth.dimensions}</span>
                    </div>
                  )}

                  <a href="#contact" className="modal-cta-btn" onClick={closeModal}>
                    立即查詢
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BoothGallery;
