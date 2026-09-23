'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { mainLogo } from '@/data/assets'
import { mainNav } from '@/data/navigation'
import { ChevronDown, Menu, X } from 'lucide-react'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null)

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setOpenMobileDropdown(null)
  }

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

        <ul className="navbar-menu">
          {mainNav.map((item) => (
            <li
              key={item.href + item.label}
              className={`navbar-item${item.children ? ' has-dropdown' : ''}${item.cta ? ' navbar-item-cta' : ''}`}
            >
              {item.children ? (
                <>
                  <Link href={item.href} className="navbar-parent-link">
                    {item.label}
                    <ChevronDown size={14} className="navbar-chevron" />
                  </Link>
                  <ul className="navbar-dropdown">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href}>{child.label}</Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link href={item.href} className={item.cta ? 'navbar-cta' : undefined}>
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className={`mobile-menu-dropdown ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
          {mainNav.map((item) => (
            <li key={`m-${item.href}-${item.label}`}>
              {item.children ? (
                <div className="mobile-nav-group">
                  <div className="mobile-nav-parent">
                    <Link href={item.href} onClick={closeMobileMenu}>
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      className="mobile-dropdown-toggle"
                      aria-expanded={openMobileDropdown === item.label}
                      aria-label={`${item.label} 子選單`}
                      onClick={() =>
                        setOpenMobileDropdown((current) =>
                          current === item.label ? null : item.label
                        )
                      }
                    >
                      <ChevronDown
                        size={18}
                        className={openMobileDropdown === item.label ? 'rotated' : ''}
                      />
                    </button>
                  </div>
                  <ul
                    className={`mobile-submenu ${openMobileDropdown === item.label ? 'open' : ''}`}
                  >
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} onClick={closeMobileMenu}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={item.cta ? 'navbar-cta' : undefined}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Header
