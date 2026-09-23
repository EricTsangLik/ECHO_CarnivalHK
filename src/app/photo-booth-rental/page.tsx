import { Metadata } from 'next'
import PhotoBoothPageHero from './_components/PhotoBoothPageHero'
import PhotoBoothServices from './_components/PhotoBoothServices'
import PhotoBoothEventTypes from './_components/PhotoBoothEventTypes'
import PhotoBoothCTA from './_components/PhotoBoothCTA'
import { buildServiceSchema } from '@/data/seo-schemas'

const pageTitle = 'Photo Booth 租用｜韓式人生四格・AI Photo Booth｜ECHO HK Carnival'
const pageDescription =
  'ECHO HK Carnival 提供韓式 Photo Booth、人生四格、AI Photo Booth、金幣相及冰箱貼相片服務。支援自訂相框、品牌活動、商場推廣、學校及企業活動。'

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  keywords:
    'Photo Booth 租用, 韓式人生四格, AI Photo Booth, 金幣相, 冰箱貼相片, 即影即有, 商場推廣, 學校活動, 企業活動, 香港',
  alternates: { canonical: 'https://echocarnival.com.hk/photo-booth-rental' },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: 'https://echocarnival.com.hk/photo-booth-rental',
    siteName: 'ECHO HK Carnival',
    images: ['/images/Booth/AI photo Booth/AI_photo_booth.jpeg'],
    type: 'website',
  },
}

const PhotoBoothRentalPage = () => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageTitle,
    description: pageDescription,
    url: 'https://echocarnival.com.hk/photo-booth-rental',
    isPartOf: {
      '@type': 'WebSite',
      name: 'ECHO HK Carnival',
      url: 'https://echocarnival.com.hk',
    },
  }

  const serviceSchema = {
    ...buildServiceSchema({
      name: 'Photo Booth 租用｜韓式人生四格・AI Photo Booth',
      description: pageDescription,
      slug: 'photo-booth-rental',
      image: '/images/Booth/AI photo Booth/AI_photo_booth.jpeg',
    }),
    url: 'https://echocarnival.com.hk/photo-booth-rental',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PhotoBoothPageHero />
      <PhotoBoothServices />
      <PhotoBoothEventTypes />
      <PhotoBoothCTA />
    </>
  )
}

export default PhotoBoothRentalPage
