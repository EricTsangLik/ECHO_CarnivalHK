import React from 'react';
import { motion } from 'framer-motion';
import './WhyUs.css';

const features = [
  {
    icon: '💰',
    title: '價格實惠',
    desc: '比一般市面上的Foam Board攤位更實惠'
  },
  {
    icon: '🎨',
    title: '遊戲種類多',
    desc: '玩法多變，適合各種場合與年齡層'
  },
  {
    icon: '🌃',
    title: '夜光模式',
    desc: '獨特夜光設計，白天黑夜都好玩'
  },
  {
    icon: '🧰',
    title: '全面支援',
    desc: '提供送貨、安裝與現場支援服務'
  }
];

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="section why-us">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">為什麼選擇我們？</h2>
          <p className="section-subtitle">我們致力於提供最優質的服務，讓您的每一場活動都完美無缺</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
