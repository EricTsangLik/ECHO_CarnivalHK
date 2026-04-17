'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { mainLogo } from '@/data/assets'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo" onClick={closeMobileMenu}>
          <Image
            src={mainLogo}
            alt="Echo Carnival HK 嘉年華攤位遊戲租借 Logo"
            width={150}
            height={50}
            style={{ width: 'auto', height: '50px' }}
            priority
          />
        </Link>
        
        {/* Desktop Menu */}
        <ul className="navbar-menu">
          <li><Link href="/#home">首頁</Link></li>
          <li><Link href="/about">關於我們</Link></li>
          <li><Link href="/booths">遊戲攤位</Link></li>
          <li><Link href="/services">嘉年華服務</Link></li>
          <li><Link href="/blog">攻略</Link></li>
          <li><Link href="/#clients">合作夥伴</Link></li>
          <li><Link href="/contact">聯絡我們</Link></li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="mobile-menu-btn" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`mobile-menu-dropdown ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link href="/#home" onClick={closeMobileMenu}>首頁</Link></li>
          <li><Link href="/about" onClick={closeMobileMenu}>關於我們</Link></li>
          <li><Link href="/booths" onClick={closeMobileMenu}>遊戲攤位</Link></li>
          <li><Link href="/services" onClick={closeMobileMenu}>嘉年華服務</Link></li>
          <li><Link href="/blog" onClick={closeMobileMenu}>攻略</Link></li>
          <li><Link href="/#clients" onClick={closeMobileMenu}>合作夥伴</Link></li>
          <li><Link href="/contact" onClick={closeMobileMenu}>聯絡我們</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
