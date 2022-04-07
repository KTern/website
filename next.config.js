module.exports = {
	swcMinify: true,
	target: 'serverless',
	reactStrictMode: true,
	throwIfNamespace: false,
	optimizeImages: true,
	poweredByHeader: false,
	compress: true,
	trailingSlash: false,
	devIndicators: {
		buildActivityPosition: 'bottom-right',
	},
	i18n: {
		locales: ['en'],
		defaultLocale: 'en',
	},
	generateBuildId: async () => {
		// You can, for example, get the latest git commit hash here
		return 'build-id';
	},
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
	images: {
		domains: [
			'img.icons8.com',
			'cdn-icons-png.flaticon.com',
			'assets-global.website-files.com',
			'storage.googleapis.com',
			'logodix.com',
			'ktern.com',
			'tracking.g2crowd.com',
			'a.storyblok.com',
			'static.thenounproject.com',
			'encrypted-tbn0.gstatic.com',
			'cdn0.iconfinder.com',
			'images.squarespace-cdn.com',
			'cdn.devdojo.com',
			'dummyimage.com',
			'images.unsplash.com',
			'cdn1.iconfinder.com',
			'unsplash.com',
			's.clipartkey.com',
			'ktern.com',
			'w3.org',
			'www.w3.org',
			'stackoverflow.com',
			'web.ktern.com',
			'shuffle.dev',
			'storage.googleapis.com',
		],
	},
};

