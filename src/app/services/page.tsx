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
  title: '嘉年華服務香港｜充氣設施・ESG活動・汽球佈置 | ECHO HK Carnival',
  description:
    '9 大嘉年華配套服務：充氣彈床、氣球佈置、小丑魔術、DIY 工作坊、舞台表演及活動牌照申請。適合學校中華文化日、企業 ESG 團建及商場嘉年華，免費諮詢。',
  keywords:
    '中華文化日, 校園週, 文化攤位遊戲, ESG 團隊建設, 公司週年晚宴, 員工福利日, 嘉年華服務, 活動策劃, 充氣設施, 香港, 嘉年華服務香港 充氣設施租借 中華文化日活動 ESG 團隊建設汽球佈置',
  alternates: { canonical: 'https://echocarnival.hk/services' },
  openGraph: {
    title: '嘉年華服務香港｜充氣設施・ESG活動・汽球佈置 | ECHO HK Carnival',
    description:
      '9 大嘉年華配套服務：充氣彈床、氣球佈置、小丑魔術、DIY 工作坊、舞台表演及活動牌照申請。適合學校中華文化日、企業 ESG 團建及商場嘉年華，免費諮詢。',
    url: 'https://echocarnival.hk/services',
    siteName: 'ECHO HK Carnival',
    type: 'website',
  },
}

const ServicesPage = () => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: '嘉年華服務香港｜充氣設施・ESG活動・汽球佈置 | ECHO HK Carnival',
    description:
      '9 大嘉年華配套服務：充氣彈床、氣球佈置、小丑魔術、DIY 工作坊、舞台表演及活動牌照申請。適合學校中華文化日、企業 ESG 團建及商場嘉年華，免費諮詢。',
    url: 'https://echocarnival.hk/services',
    isPartOf: {
      '@type': 'WebSite',
      name: 'ECHO HK Carnival',
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
