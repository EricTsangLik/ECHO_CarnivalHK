import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingWhatsApp from '@/components/shared/FloatingWhatsApp'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://echocarnival.com.hk'),
  title: {
    default: 'ECHO HK Carnival | 一站式嘉年華租借 · 2026 活動策劃',
    template: 'ECHO HK Carnival | %s',
  },
  description:
    '香港首選嘉年華攤位遊戲租借！一站式服務涵蓋中華文化日、ESG 團隊建設、商場活動及學校週年慶典。2026 最新遊戲及充氣設施，立即免費報價！',
  keywords:
    '一站式嘉年華租借, 2026 活動策劃, 攤位遊戲租借, 嘉年華, 中華文化日, ESG 團隊建設, 商場活動, 學校慶典, 充氣設施, 香港, Echo Carnival',
  icons: {
    icon: '/favicon.png',
  },
  verification: {
    other: {
      'msvalidate.01': '1F46F73E80F43D2CC22C71BCBB6A9566',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://echocarnival.com.hk/',
    title: 'ECHO HK Carnival | 一站式嘉年華租借 · 2026 活動策劃',
    description:
      '香港首選嘉年華攤位遊戲租借！涵蓋中華文化日、ESG 團隊建設、商場活動及學校慶典。2026 最新遊戲及充氣設施，立即免費報價！',
    siteName: 'Echo Carnival HK',
    images: ['/images/echo-carnival-logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ECHO HK Carnival | 一站式嘉年華租借 · 2026 活動策劃',
    description:
      '香港首選嘉年華攤位遊戲租借！涵蓋中華文化日、ESG 團隊建設、商場活動及學校慶典。2026 最新遊戲，立即免費報價！',
    images: ['/images/echo-carnival-logo.png'],
  },
  alternates: {
    canonical: 'https://echocarnival.com.hk/',
  },
  other: {
    'theme-color': '#ff2151',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'format-detection': 'telephone=yes',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-HK">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9EMDM0LKR9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9EMDM0LKR9');
          `}
        </Script>
        <link rel="preload" href="/images/hero.JPG" as="image" />
      </head>
      <body className={inter.className}>
        <div className="app">
          <Header />
          <main className="min-h-screen flex flex-col">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
