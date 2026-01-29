import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Echo Carnival HK - 攤位遊戲租借 | 嘉年華服務',
  description = '專營嘉年華攤位遊戲租借，適合學校慶典、中華文化日、企業活動、商場活動及各類派對。提供室內外遊戲、保齡、射擊等豐富選擇。立即查詢報價！',
  keywords = '嘉年華, 攤位遊戲, 租借, 香港, Echo Carnival, 活動策劃, 學校活動, 企業活動, 派對遊戲',
  image = '/images/echo-carnival-logo.png', // Ensure this path is correct
  url = 'https://echocarnival.hk/', // REPLACE with your actual domain
}) => {
  const siteTitle = 'Echo Carnival HK';
  const themeColor = '#ff2151';

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Mobile & PWA Optimization */}
      <meta name="theme-color" content={themeColor} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="format-detection" content="telephone=yes" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data (JSON-LD) for Local Business */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: siteTitle,
          image: image,
          description: description,
          url: url,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Hong Kong',
            addressCountry: 'HK',
          },
          priceRange: '$$',
          telephone: '+852 1234 5678', // Replace with actual phone
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
