module.exports = {
	target: 'serverless',
	reactStrictMode: true,
	throwIfNamespace: false,
	i18n: {
		locales: ['en', 'de'],
		defaultLocale: 'en',
	},
	images: {
		domains: ['storage.googleapis.com'],
	},

	headers() {
		return [
			{
				// matching all API routes
				source: '/api/:path*',
				headers: [
					{ key: 'Access-Control-Allow-Credentials', value: 'true' },
					{ key: 'Access-Control-Allow-Origin', value: '*' },
					{ key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
					{
						key: 'Access-Control-Allow-Headers',
						value: 'X-CSRF- X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
					},
				],
			},
		];
	},
};
