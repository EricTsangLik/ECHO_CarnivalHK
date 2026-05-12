/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://echocarnival.com.hk',
    generateRobotsTxt: true,  // whether to generate robots.txt
    exclude: ['/server-sitemap.xml'],
    robotsTxtOptions: {
      additionalSitemaps: [
        `${process.env.SITE_URL || 'https://echocarnival.com.hk'}/server-sitemap.xml`,
      ],
    },
  }