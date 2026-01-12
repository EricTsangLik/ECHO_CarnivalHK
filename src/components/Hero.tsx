import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-badge"
        >
          <span className="star-icon">✨</span> 自2010年起打造難忘活動
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          為您的活動 <span className="highlight-text">帶來<span className="swoosh"></span></span> 嘉年華樂趣
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          為生日派對、企業活動、學校慶典等各類活動提供優質嘉年華遊戲租賃服務。用我們精心策劃的遊戲系列，創造美好回憶。
        </motion.p>
        
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a href="#booths" className="btn btn-primary">探索遊戲 →</a>
          <a href="#contact" className="btn btn-outline">獲取報價</a>
        </motion.div>

        <motion.div 
          className="hero-social-proof"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="avatars">
            <div className="avatar" style={{backgroundColor: '#FF6B6B'}}>A</div>
            <div className="avatar" style={{backgroundColor: '#4ECDC4'}}>B</div>
            <div className="avatar" style={{backgroundColor: '#45B7D1'}}>C</div>
            <div className="avatar" style={{backgroundColor: '#FFA07A'}}>D</div>
          </div>
          <div className="rating">
            <div className="stars">
              {'★★★★★'.split('').map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>
            <span className="rating-text">500+ 場愉快活動</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
