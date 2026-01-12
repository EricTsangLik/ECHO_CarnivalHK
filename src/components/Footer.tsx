import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>關於我們</h3>
          <p>Echo Carnival 致力於為客戶提供最優質的嘉年華遊戲體驗。無論是公司活動、學校嘉年華還是私人派對，我們都能為您打造難忘的歡樂時光。</p>
        </div>
        
        <div className="footer-section">
          <h3>快速連結</h3>
          <ul className="footer-links">
            <li><a href="#home">首頁</a></li>
            <li><a href="#why-us">為什麼選擇我們</a></li>
            <li><a href="#booths">遊戲攤位</a></li>
            <li><a href="#clients">合作夥伴</a></li>
            <li><a href="#contact">聯絡我們</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>聯絡資訊</h3>
          <p>
            電話: <a href="https://wa.me/85293910332?text=I'm%20inquiring%20about%20the%20game%20booth" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>+852 9391 0332</a>
          </p>
          <p>電郵: echohkcarnival@gmail.com</p>
          <div className="social-links">
             {/* Placeholder for future social links if needed */}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Echo Carnival HK. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
