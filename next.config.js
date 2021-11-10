module.exports = {
  target: "serverless",
  reactStrictMode: true,
  throwIfNamespace: false,
  i18n: {
    locales: ["en", "de"],
    defaultLocale: "en",
  },
  images: {
    domains: [
      "storage.googleapis.com",
      "logodix.com",
      "ktern.com",
      "tracking.g2crowd.com",
      "a.storyblok.com",
      "static.thenounproject.com",
      "encrypted-tbn0.gstatic.com",
      "cdn0.iconfinder.com",
      "images.squarespace-cdn.com",
      "cdn.devdojo.com",
      "dummyimage.com",
      "images.unsplash.com",
      "cdn1.iconfinder.com",
      "unsplash.com",
      "s.clipartkey.com",
      "web.ktern.com",
      "w3.org",
      "www.w3.org",
    ],
  },

  headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF- X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};
