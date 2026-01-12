import React from 'react';
import { motion } from 'framer-motion';
import { mainLogo } from '../data/assets';
import './ContactCTA.css';

const ContactCTA: React.FC = () => {
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
            <h2>想舉辦一場閃亮的活動嗎？</h2>
            <p>聯絡我們了解更多租借方案！</p>
            <a href="https://wa.me/85293910332?text=I'm%20inquiring%20about%20the%20game%20booth" target="_blank" rel="noopener noreferrer" className="cta-button">
              聯絡我們 📞
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
            <img src={mainLogo} alt="Echo Carnival Logo" />
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
