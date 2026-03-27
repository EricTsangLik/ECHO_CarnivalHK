import { Metadata } from 'next'
import AboutPageHero from './_components/AboutPageHero'
import AboutStory from './_components/AboutStory'
import AboutValues from './_components/AboutValues'
import AboutWhyUs from './_components/AboutWhyUs'
import AboutProcess from './_components/AboutProcess'
import AboutStats from './_components/AboutStats'
import AboutCTA from './_components/AboutCTA'

export const metadata: Metadata = {
  title: '關於我們 | Echo Carnival HK - 專業嘉年華服務團隊',
  description: '自2022年起，Echo Carnival HK 致力為香港學校、企業及各類活動提供一站式嘉年華服務。了解我們的故事、核心價值及為何成為客戶的首選夥伴。',
  alternates: { canonical: 'https://echocarnival.hk/about' },
  openGraph: {
    title: '關於我們 | Echo Carnival HK',
    description: '自2022年起，Echo Carnival HK 致力為香港各類活動提供一站式嘉年華服務。了解我們的故事與核心價值。',
    url: 'https://echocarnival.hk/about',
    siteName: 'Echo Carnival HK',
    type: 'website',
  },
}

const AboutPage = () => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: '關於我們 | Echo Carnival HK',
    description: '自2022年起，Echo Carnival HK 致力為香港各類活動提供一站式嘉年華服務。',
    url: 'https://echocarnival.hk/about',
    mainEntity: {
      '@type': 'Organization',
      name: 'Echo Carnival HK',
      foundingDate: '2022',
      url: 'https://echocarnival.hk',
      telephone: '+852 9391 0332',
      email: 'echohkcarnival@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Hong Kong',
        addressCountry: 'HK',
      },
      description: '專營嘉年華攤位遊戲租借及一站式活動配套服務。',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <AboutPageHero />
      <AboutStory />
      <AboutValues />
      <AboutWhyUs />
      <AboutProcess />
      <AboutStats />
      <AboutCTA />
    </>
  )
}

export default AboutPage
