import Link from 'next/link'

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>關於我們</h3>
          <p>ECHO HK Carnival 致力於為客戶提供最優質的嘉年華遊戲體驗。無論是公司活動、學校嘉年華還是私人派對，我們都能為您打造難忘的歡樂時光。</p>
        </div>
        
        <div className="footer-section">
          <h3>快速連結</h3>
          <ul className="footer-links">
            <li><Link href="/#home">首頁</Link></li>
            <li><Link href="/about">關於我們</Link></li>
            <li><Link href="/booths">遊戲攤位</Link></li>
            <li><Link href="/services">嘉年華服務</Link></li>
            <li><Link href="/blog">活動策劃攻略</Link></li>
            <li><Link href="/#clients">合作夥伴</Link></li>
            <li><Link href="/contact">聯絡我們</Link></li>
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
        <p>&copy; {new Date().getFullYear()} ECHO HK Carnival. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
