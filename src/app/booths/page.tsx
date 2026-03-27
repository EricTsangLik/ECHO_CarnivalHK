import { Metadata } from 'next'
import BoothPageHero from './_components/BoothPageHero'
import BoothShowcase from './_components/BoothShowcase'
import Packages from './_components/Packages'
import HowItWorks from './_components/HowItWorks'
import BoothFAQ from './_components/BoothFAQ'
import BoothCTA from './_components/BoothCTA'
import { boothFaqs, buildFaqSchema } from '@/data/faqs'
import { buildProductSchema } from '@/data/seo-schemas'

/* ── Task A: Product Page Template Meta Suite ──
   Dynamic template for specific games like 保齡狂潮
   Current page = Booth Index (all games)
   ──────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: '攤位遊戲租借｜保齡狂潮 · 室內外嘉年華遊戲',
  description:
    '租借保齡狂潮、飛鏢、射擊、釣鴨等人氣嘉年華攤位遊戲！室內外均可，適合學校文化日、企業活動及商場嘉年華。全港送貨安裝，立即查詢 2026 最新價格！',
  keywords:
    '保齡狂潮, 攤位遊戲租借, 嘉年華攤位, 室內遊戲, 室外遊戲, 飛鏢, 射擊, 釣鴨, 學校文化日, 企業活動, 商場嘉年華',
  alternates: { canonical: 'https://echocarnival.hk/booths' },
  openGraph: {
    title: '攤位遊戲租借｜保齡狂潮 · 室內外嘉年華遊戲',
    description:
      '租借保齡狂潮、飛鏢、射擊、釣鴨等嘉年華攤位遊戲！室內外均可，適合學校、企業及商場。立即查詢！',
    url: 'https://echocarnival.hk/booths',
    siteName: 'Echo Carnival HK',
    type: 'website',
  },
}

const BoothsPage = () => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: '攤位遊戲租借｜保齡狂潮 · 室內外嘉年華遊戲',
    description:
      '探索 Echo Carnival HK 豐富多彩的室內外嘉年華遊戲攤位。',
    url: 'https://echocarnival.hk/booths',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Echo Carnival HK',
      url: 'https://echocarnival.hk',
    },
  }

  /* ── Product Schema Example: 保齡狂潮 (Bowling Mania) ── */
  const bowlingManiaSchema = buildProductSchema({
    name: '保齡狂潮 Bowling Mania',
    description:
      '經典保齡球攤位遊戲，適合室內嘉年華及商場活動。包含專業保齡球道、球及球瓶，配備工作人員協助。',
    image: '/images/Booth/室內/保齡.png',
    slug: 'bowling-mania',
    price: '800',
    suitableFor: ['學校慶典', '企業嘉年華', '商場活動', '屋苑會所'],
  })

  const faqSchema = buildFaqSchema(boothFaqs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(bowlingManiaSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BoothPageHero />
      <BoothShowcase />
      <Packages />
      <HowItWorks />
      <BoothFAQ />
      <BoothCTA />
    </>
  )
}

export default BoothsPage
