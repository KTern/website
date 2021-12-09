module.exports = {
  siteUrl: 'https://ktern.com',
  changefreq: 'daily',
  priority: 1.0,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: [],
  alternateRefs: [
    // {
    //   href: 'https://es.example.com',
    //   hreflang: 'en',
    // },
    // {
    //   href: 'https://fr.example.com',
    //   hreflang: 'en',
    // },
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
  // additionalPaths: async (config) => [
  //   await config.transform(config, '/additional-page'),
  // ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
    ],
  },
}