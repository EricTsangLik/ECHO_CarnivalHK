import { Metadata } from 'next'
import ServicePageHero from './_components/ServicePageHero'
import ServiceShowcase from './_components/ServiceShowcase'
import EventTypes from './_components/EventTypes'
import ServiceProcess from './_components/ServiceProcess'
import ServiceFAQ from './_components/ServiceFAQ'
import ServiceCTA from './_components/ServiceCTA'
import { serviceFaqs, buildFaqSchema } from '@/data/faqs'

/* ── Task A: Services Page Meta Suite ──
   Focus 1: 中華文化日 · 校園週 · 文化攤位遊戲
   Focus 2: ESG 團隊建設 · 公司週年晚宴 · 員工福利日
   ───────────────────────────────────────── */
export const metadata: Metadata = {
  title: '嘉年華服務｜中華文化日 · ESG 團隊建設 · 校園活動週',
  description:
    '一站式嘉年華服務：中華文化日攤位遊戲、校園文化週策劃、ESG 團隊建設活動、公司週年晚宴及員工福利日。充氣設施、氣球佈置、工作坊及舞台表演，全港服務。',
  keywords:
    '中華文化日, 校園週, 文化攤位遊戲, ESG 團隊建設, 公司週年晚宴, 員工福利日, 嘉年華服務, 活動策劃, 充氣設施, 香港',
  alternates: { canonical: 'https://echocarnival.hk/services' },
  openGraph: {
    title: '嘉年華服務｜中華文化日 · ESG 團隊建設 · 校園活動週',
    description:
      '一站式嘉年華配套：中華文化日、校園週、ESG 企業團隊建設、公司晚宴及員工福利日。全港專業活動策劃服務。',
    url: 'https://echocarnival.hk/services',
    siteName: 'Echo Carnival HK',
    type: 'website',
  },
}

const ServicesPage = () => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: '嘉年華服務｜中華文化日 · ESG 團隊建設 · 校園活動週',
    description:
      '一站式嘉年華服務：中華文化日攤位遊戲、校園文化週策劃、ESG 團隊建設活動、公司週年晚宴及員工福利日。',
    url: 'https://echocarnival.hk/services',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Echo Carnival HK',
      url: 'https://echocarnival.hk',
    },
    about: [
      { '@type': 'Thing', name: '中華文化日' },
      { '@type': 'Thing', name: 'ESG 團隊建設' },
      { '@type': 'Thing', name: '校園文化週' },
      { '@type': 'Thing', name: '公司週年晚宴' },
      { '@type': 'Thing', name: '員工福利日' },
    ],
  }

  const faqSchema = buildFaqSchema(serviceFaqs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServicePageHero />
      <ServiceShowcase />
      <EventTypes />
      <ServiceProcess />
      <ServiceFAQ />
      <ServiceCTA />
    </>
  )
}

export default ServicesPage
