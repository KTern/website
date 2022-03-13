import { BreadcrumbJsonLd, FAQPageJsonLd, NextSeo, ProductJsonLd, SoftwareAppJsonLd } from 'next-seo';

export default function SEO({ data }) {
	return (
		<>
			{/* START: Page SEO  */}
			<NextSeo
				title={data.PageTitle}
				description={data.PageDescription}
				canonical={data.CanonicalTag}
				openGraph={{
					url: `${data.PageURL}`,
					title: `${data.PageTitle}`,
					description: `${data.PageDescription}`,
					images: [
						{
							url: `${data.ThumbnailImageURL}`,
							width: 1920,
							height: 1080,
							alt: `${data.PageTitle}`,
							type: 'image/png',
						},
					],
					site_name: `${process.env.NEXT_PUBLIC_SITE_TITLE}`,
				}}
				twitter={{
					handle: `${process.env.NEXT_PUBLIC_TWITTER_HANDLE}`,
					site: `${process.env.NEXT_PUBLIC_TWITTER_SITE}`,
					cardType: `${process.env.NEXT_PUBLIC_CARD_TYPE}`,
				}}
				facebook={{
					handle: `${process.env.NEXT_PUBLIC_FACEBOOK_HANDLE}`,
					site: `${process.env.NEXT_PUBLIC_FACEBOOK_SITE}`,
					cardType: `${process.env.NEXT_PUBLIC_CARD_TYPE}`,
					appId: `${process.env.NEXT_PUBLIC_FB_APPID}`,
				}}
				//  languageAlternates={[
				//    {
				//      hrefLang: `${h_data.OtherSEO.languageAlternates.hrefLang}`,
				//      href: `${h_data.OtherSEO.languageAlternates.href}`,
				//    },
				//  ]}
				additionalMetaTags={[
					{
						property: 'dc:creator',
						content: 'Nivedha',
					},
					{
						name: 'application-name',
						content: 'KTern.AI',
					},
					{
						httpEquiv: 'x-ua-compatible',
						content: 'IE=edge; chrome=1',
					},
				]}
				additionalLinkTags={[
					{
						rel: 'icon',
						href: 'https://storage.googleapis.com/ktern-public-files/website/icons/favicon.ico',
					},
					{
						rel: 'apple-touch-icon',
						href: 'https://storage.googleapis.com/ktern-public-files/website/icons/apple-touch-icon-76x76.png',
						sizes: '76x76',
					},
					{
						rel: 'manifest',
						href: '/manifest.json',
					},
				]}
			/>
			{/* END: Page SEO  */}
		</>
	);
}
