import { Metadata } from 'next'
import ContactPageHero from './_components/ContactPageHero'
import ContactInfo from './_components/ContactInfo'
import ContactForm from './_components/ContactForm'
import ContactFAQ from './_components/ContactFAQ'
import { contactFaqs, buildFaqSchema } from '@/data/faqs'

export const metadata: Metadata = {
  title: '嘉年華報價查詢｜即日回覆',
  description: '立即查詢嘉年華遊戲租借及活動服務報價！WhatsApp +852 93910332，最快 1 小時內回覆，免費提供活動建議。',
  alternates: { canonical: 'https://echocarnival.com.hk/contact' },
  openGraph: {
    title: 'ECHO HK Carnival | 聯絡我們',
    description: '歡迎聯絡 ECHO HK Carnival 查詢嘉年華攤位遊戲租借及各類配套服務。',
    url: 'https://echocarnival.com.hk/contact',
    siteName: 'Echo Carnival HK',
    type: 'website',
  },
}

const ContactPage = () => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: '嘉年華報價查詢｜即日回覆 | ECHO HK Carnival',
    description: '立即查詢嘉年華遊戲租借及活動服務報價！WhatsApp +852 93910332，最快 1 小時內回覆，免費提供活動建議。',
    url: 'https://echocarnival.com.hk/contact',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'Echo Carnival HK',
      telephone: '+852 9391 0332',
      email: 'echohkcarnival@gmail.com',
      url: 'https://echocarnival.com.hk',
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
