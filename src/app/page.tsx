import { Metadata } from 'next'
import Hero from './_components/Hero'
import WhyUs from './_components/WhyUs'
import BoothGallery from './_components/BoothGallery'
import Services from './_components/Services'
import Clients from './_components/Clients'
import ContactCTA from './_components/ContactCTA'
import { localBusinessSchema, webSiteSchema } from '@/data/seo-schemas'

/* ── Task A: Home Page Meta Suite ── */
export const metadata: Metadata = {
  title: 'Echo Carnival HK｜一站式嘉年華租借 · 2026 活動策劃',
  description:
    '香港首選嘉年華攤位遊戲租借！一站式服務涵蓋中華文化日、ESG 團隊建設、商場活動及學校週年慶典。2026 最新遊戲及充氣設施，立即免費報價！',
  keywords:
    '一站式嘉年華租借, 2026 活動策劃, 攤位遊戲租借, 嘉年華, 中華文化日, ESG 團隊建設, 商場活動, 學校慶典, 充氣設施, 香港',
  alternates: { canonical: 'https://echocarnival.hk/' },
  openGraph: {
    type: 'website',
    url: 'https://echocarnival.hk/',
    title: 'Echo Carnival HK｜一站式嘉年華租借 · 2026 活動策劃',
    description:
      '香港首選嘉年華攤位遊戲租借！涵蓋中華文化日、ESG 團隊建設、商場活動及學校慶典。2026 最新遊戲及充氣設施，立即免費報價！',
    siteName: 'Echo Carnival HK',
    images: ['/images/echo-carnival-logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Echo Carnival HK｜一站式嘉年華租借 · 2026 活動策劃',
    description:
      '香港首選嘉年華攤位遊戲租借！涵蓋中華文化日、ESG 團隊建設、商場活動及學校慶典。2026 最新遊戲，立即免費報價！',
    images: ['/images/echo-carnival-logo.png'],
  },
}

const HomePage = () => {
  return (
    <>
      {/* LocalBusiness + Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      {/* WebSite Schema (sitelinks) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <Hero />
      <WhyUs />
      <BoothGallery />
      <Services />
      <Clients />
      <ContactCTA />
    </>
  )
}

export default HomePage
