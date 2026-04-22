/**
 * SEO Schema Data (JSON-LD) for Echo Carnival HK
 * ================================================
 * 1. LocalBusiness + Organization — establishes trusted HK entity
 * 2. Product / Service template  — for individual game / service pages
 *
 * Generated: 2026-03 | Strategy: Entity-Based SEO + GEO
 */

/* ─────────────────────────────────────────────
   1. LocalBusiness & Organization Schema
   ───────────────────────────────────────────── */
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'Organization'],
  '@id': 'https://echocarnival.com.hk/#organization',
  name: 'Echo Carnival HK',
  alternateName: 'ECHO HK Carnival',
  description:
    '香港一站式嘉年華活動策劃及攤位遊戲租借服務商，專營學校文化日、企業 ESG 團隊建設、商場活動及各類慶典嘉年華。',
  url: 'https://echocarnival.com.hk',
  logo: 'https://echocarnival.com.hk/images/echo-carnival-logo.png',
  image: 'https://echocarnival.com.hk/images/echo-carnival-logo.png',
  telephone: '+852-9391-0332',
  email: 'echohkcarnival@gmail.com',
  foundingDate: '2022',
  priceRange: '$$',
  currenciesAccepted: 'HKD',
  paymentAccepted: 'Bank Transfer, FPS, PayMe, Cheque',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hong Kong',
    addressRegion: 'HK',
    addressCountry: 'HK',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 22.3193,
    longitude: 114.1694,
  },
  areaServed: {
    '@type': 'Country',
    name: 'Hong Kong',
  },
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 22.3193,
      longitude: 114.1694,
    },
    geoRadius: '50000',
  },
  sameAs: [
    'https://www.facebook.com/echocarnivalhk',
    'https://www.instagram.com/echocarnivalhk',
    'https://wa.me/85293910332',
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '09:00',
    closes: '21:00',
  },
  knowsAbout: [
    '嘉年華活動策劃',
    '攤位遊戲租借',
    '中華文化日',
    '企業團隊建設',
    'ESG 活動策劃',
    '商場活動',
    '充氣設施',
    '學校週年慶典',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: '嘉年華服務及攤位遊戲',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: '攤位遊戲租借',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: '室內攤位遊戲',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: '室外攤位遊戲',
            },
          },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: '活動配套服務',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: '充氣設施',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: '氣球佈置',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: '活動策劃',
            },
          },
        ],
      },
    ],
  },
}

/* ─────────────────────────────────────────────
   2. Product / Service Schema Template
   ─────────────────────────────────────────────
   Usage:
     buildProductSchema({
       name: '保齡狂潮',
       description: '...',
       image: '/images/Booth/室內/保齡.png',
       slug: 'bowling-mania',
       price: '800',
     })
   ───────────────────────────────────────────── */
export interface ProductSchemaInput {
  /** 遊戲名稱 e.g. '保齡狂潮' */
  name: string
  /** 遊戲描述 */
  description: string
  /** 圖片路徑 */
  image: string
  /** URL slug e.g. 'bowling-mania' */
  slug: string
  /** 價格 (HKD) e.g. '800' */
  price: string
  /** 適用場地 (optional) */
  suitableFor?: string[]
}

export const buildProductSchema = (input: ProductSchemaInput) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: input.name,
  description: input.description,
  image: `https://echocarnival.com.hk${input.image}`,
  url: `https://echocarnival.com.hk/booths/${input.slug}`,
  brand: {
    '@type': 'Organization',
    name: 'Echo Carnival HK',
    '@id': 'https://echocarnival.com.hk/#organization',
  },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'HKD',
    price: input.price,
    priceValidUntil: '2026-12-31',
    availability: 'https://schema.org/InStock',
    url: `https://echocarnival.com.hk/booths/${input.slug}`,
    seller: {
      '@type': 'Organization',
      name: 'Echo Carnival HK',
    },
  },
  areaServed: {
    '@type': 'Country',
    name: 'Hong Kong',
  },
  category: '嘉年華攤位遊戲',
  audience: {
    '@type': 'Audience',
    audienceType: '學校、企業、商場、屋苑',
  },
  ...(input.suitableFor && {
    additionalProperty: input.suitableFor.map((venue) => ({
      '@type': 'PropertyValue',
      name: '適用場地',
      value: venue,
    })),
  }),
})

/* ─────────────────────────────────────────────
   3. Service Schema Template (for service pages)
   ───────────────────────────────────────────── */
export interface ServiceSchemaInput {
  name: string
  description: string
  image?: string
  slug: string
  price?: string
}

export const buildServiceSchema = (input: ServiceSchemaInput) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: input.name,
  description: input.description,
  ...(input.image && {
    image: `https://echocarnival.com.hk${input.image}`,
  }),
  url: `https://echocarnival.com.hk/services/${input.slug}`,
  provider: {
    '@type': 'Organization',
    name: 'Echo Carnival HK',
    '@id': 'https://echocarnival.com.hk/#organization',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Hong Kong',
  },
  ...(input.price && {
    offers: {
      '@type': 'Offer',
      priceCurrency: 'HKD',
      price: input.price,
      availability: 'https://schema.org/InStock',
    },
  }),
  serviceType: '嘉年華活動服務',
  termsOfService: 'https://echocarnival.com.hk/contact',
})

/* ─────────────────────────────────────────────
   4. WebSite Schema (for sitelinks search box)
   ───────────────────────────────────────────── */
export const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://echocarnival.com.hk/#website',
  name: 'Echo Carnival HK',
  url: 'https://echocarnival.com.hk',
  description: '香港一站式嘉年華活動策劃及攤位遊戲租借服務',
  publisher: {
    '@type': 'Organization',
    '@id': 'https://echocarnival.com.hk/#organization',
  },
  inLanguage: 'zh-HK',
}
