import React from 'react';
import { motion } from 'framer-motion';
import './WhyUs.css';

const features = [
  {
    icon: '💰',
    title: '高性價比',
    desc: <>根據您的預算<br/>訂製完美的嘉年華</>
  },
  {
    icon: '🎨',
    title: '遊戲種類多',
    desc: <>比市面上的Foam Board<br/>攤位遊戲更吸引</>
  },
  {
    icon: '🌃',
    title: '夜光模式',
    desc: <>自家獨特夜光設計<br/>白天黑夜都好玩</>
  },
  {
    icon: '🧰',
    title: '全面支援',
    desc: <>專業團隊協助安裝<br/>及操作遊戲及營運</>
  }
];

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="section why-us">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">為什麼選擇ECHO HK Carnival？</h2>
          <p className="section-subtitle">我們為您提供順利舉辦難忘活動所需的一切</p>
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
