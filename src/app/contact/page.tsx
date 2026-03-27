import { Metadata } from 'next'
import ContactPageHero from './_components/ContactPageHero'
import ContactInfo from './_components/ContactInfo'
import ContactForm from './_components/ContactForm'
import ContactFAQ from './_components/ContactFAQ'
import { contactFaqs, buildFaqSchema } from '@/data/faqs'

export const metadata: Metadata = {
  title: '聯絡我們 | Echo Carnival HK - 免費報價諮詢',
  description: '歡迎聯絡 Echo Carnival HK 查詢嘉年華攤位遊戲租借、活動策劃及各類配套服務。WhatsApp、電話或電郵均可，我們會在1小時內回覆！',
  alternates: { canonical: 'https://echocarnival.hk/contact' },
  openGraph: {
    title: '聯絡我們 | Echo Carnival HK',
    description: '歡迎聯絡 Echo Carnival HK 查詢嘉年華攤位遊戲租借及各類配套服務。',
    url: 'https://echocarnival.hk/contact',
    siteName: 'Echo Carnival HK',
    type: 'website',
  },
}

const ContactPage = () => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: '聯絡我們 | Echo Carnival HK',
    description: '歡迎聯絡 Echo Carnival HK 查詢嘉年華攤位遊戲租借及各類配套服務。',
    url: 'https://echocarnival.hk/contact',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'Echo Carnival HK',
      telephone: '+852 9391 0332',
      email: 'echohkcarnival@gmail.com',
      url: 'https://echocarnival.hk',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Hong Kong',
        addressCountry: 'HK',
      },
    },
  }

  const faqSchema = buildFaqSchema(contactFaqs)

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
      <ContactPageHero />
      <ContactInfo />
      <ContactForm />
      <ContactFAQ />
    </>
  )
}

export default ContactPage
