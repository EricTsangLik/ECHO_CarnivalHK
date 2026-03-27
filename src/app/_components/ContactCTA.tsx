'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { mainLogo } from '@/data/assets';

const ContactCTA = () => {
  return (
    <section className="section contact-cta-section">
      <div className="contact-cta-container">
        <div className="contact-cta-content">
          <motion.div 
            className="contact-cta-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>準備好策劃您的完美嘉年華了嗎？</h2>
            <p>為您創造難忘的體驗，立刻獲取免費報價！</p>
            
            <div className="contact-details">
              <a href="tel:+85293910332" className="contact-item">
                <FaPhone className="contact-icon" /> +852 9391 0332
              </a>
              <a href="mailto:echohkcarnival@gmail.com" className="contact-item">
                <FaEnvelope className="contact-icon" /> echohkcarnival@gmail.com
              </a>
              <a href="https://www.instagram.com/echohk_carnival/" target="_blank" rel="noopener noreferrer" className="contact-item">
                <FaInstagram className="contact-icon" /> echohk_carnival
              </a>
            </div>

            <a href="https://wa.me/85293910332?text=I'm%20inquiring%20about%20the%20game%20booth" target="_blank" rel="noopener noreferrer" className="cta-button">
              👉🏻 獲取免費報價
            </a>
          </motion.div>
          
          <motion.div 
            className="contact-cta-logo"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="logo-glow"></div>
            <Image
              src={mainLogo}
              alt="Echo Carnival HK 嘉年華攤位遊戲租借 Logo"
              fill
              sizes="250px"
              style={{ objectFit: 'contain' }}
            />
          </motion.div>
        </div>
        
        {/* Background shapes for the wavy effect */}
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
      </div>
    </section>
  );
};

export default ContactCTA;
