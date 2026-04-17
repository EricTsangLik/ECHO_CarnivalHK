import { Metadata } from 'next'
import AboutPageHero from './_components/AboutPageHero'
import AboutStory from './_components/AboutStory'
import AboutValues from './_components/AboutValues'
import AboutWhyUs from './_components/AboutWhyUs'
import AboutProcess from './_components/AboutProcess'
import AboutStats from './_components/AboutStats'
import AboutCTA from './_components/AboutCTA'

export const metadata: Metadata = {
  title: '關於ECHO HK Carnival｜香港專業嘉年華服務團隊',
  description: 'ECHO HK Carnival自 2022 年起為香港學校、企業及商場提供一站式嘉年華服務。訂製30+ 款攤位遊戲、9 大服務範疇、100+ 場成功活動，全程專業駐場支援。',
  alternates: { canonical: 'https://echocarnival.hk/about' },
  openGraph: {
    title: '關於ECHO HK Carnival｜香港專業嘉年華服務團隊',
    description: 'ECHO HK Carnival自 2022 年起為香港學校、企業及商場提供一站式嘉年華服務。訂製30+ 款攤位遊戲、9 大服務範疇、100+ 場成功活動，全程專業駐場支援。',
    url: 'https://echocarnival.hk/about',
    siteName: 'ECHO HK Carnival',
    type: 'website',
  },
}

const AboutPage = () => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: '關於ECHO HK Carnival｜香港專業嘉年華服務團隊',
    description: 'ECHO HK Carnival自 2022 年起為香港學校、企業及商場提供一站式嘉年華服務。訂製30+ 款攤位遊戲、9 大服務範疇、100+ 場成功活動，全程專業駐場支援。',
    url: 'https://echocarnival.hk/about',
    mainEntity: {
      '@type': 'Organization',
      name: 'ECHO HK Carnival',
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
