module.exports = {
  siteUrl: 'https://web.ktern.com',
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: ['/protected-page', '/awesome/secret-page'],
  alternateRefs: [
    {
      href: 'https://es.example.com',
      hreflang: 'en',
    },
    {
      href: 'https://fr.example.com',
      hreflang: 'en',
    },
  ],
  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
  additionalPaths: async (config) => [
    await config.transform(config, '/additional-page'),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://web.ktern.com/digital-maps',
      'https://web.ktern.com/digital-projects',
        'https://web.ktern.com/digital-process',
        'https://web.ktern.com/digital-mines',
      'https://web.ktern.com/digital-labs'
    ],
  },
}