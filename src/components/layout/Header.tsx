'use client'

import Link from 'next/link'
import Image from 'next/image'
import { mainLogo } from '@/data/assets'

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          <Image
            src={mainLogo}
            alt="Echo Carnival HK 嘉年華攤位遊戲租借 Logo"
            width={150}
            height={50}
            style={{ width: 'auto', height: '50px' }}
            priority
          />
        </Link>
        <ul className="navbar-menu">
          <li><Link href="/#home">首頁</Link></li>
          <li><Link href="/about">關於我們</Link></li>
          <li><Link href="/booths">遊戲攤位</Link></li>
          <li><Link href="/services">嘉年華服務</Link></li>
          <li><Link href="/blog">攻略</Link></li>
          <li><Link href="/#clients">合作夥伴</Link></li>
          <li><Link href="/contact">聯絡我們</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
