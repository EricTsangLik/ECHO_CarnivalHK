import React from 'react';
import { mainLogo } from '../data/assets';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={mainLogo} alt="Echo Carnival" />
        </div>
        <ul className="navbar-menu">
          <li><a href="#home">首頁</a></li>
          <li><a href="#why-us">為什麼選擇我們</a></li>
          <li><a href="#booths">遊戲攤位</a></li>
          <li><a href="#clients">合作夥伴</a></li>
          <li><a href="#contact">聯絡我們</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
