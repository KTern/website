import { BreadcrumbJsonLd, FAQPageJsonLd, NextSeo, ProductJsonLd, SoftwareAppJsonLd } from 'next-seo';
import Hero from '../../component/hero';
import Layout from '../../component/Layout';
import Event from '../../component/page_event';

export default function DigitalStream({ pageData, headerData, footerData }) {
	// Breadcrumb JSON LD
	let breadcrumb = [];
	pageData.PageSEO.BreadCrumb.map((dt) => {
		breadcrumb.push({ position: dt.position, name: dt.name, item: dt.item });
	});

	// FAQ JSON LD
	let faq = [];
	pageData.ProductsFAQ.FAQ.map((dt) => {
		faq.push({ questionName: dt.Question, acceptedAnswerText: dt.Answer });
	});
	
	// Testimonials JSON LD
	let testimonials = [];
	pageData.ProductsTestimonials.Testimonials.map((dt) => {
		testimonials.push({ statement: dt.TestimonialStatement, author: dt.AuthorName });
	})

	// Amplitude Tracking onClick
	function onClick(data) {
		Event(data);
	}

	return (
		<>
			{/* START: Page SEO  */}
			<NextSeo
				title={pageData.PageSEO.PageTitle}
				description={pageData.PageSEO.PageDescription}
				canonical={pageData.PageSEO.CanonicalTag}
				openGraph={{
					url: `${pageData.PageSEO.PageURL}`,
					title: `${pageData.PageSEO.PageTitle}`,
					description: `${pageData.PageSEO.PageDescription}`,
					images: [
						{
							url: `${pageData.PageSEO.ThumbnailImageURL}`,
							width: 1920,
							height: 1080,
							alt: `${pageData.PageSEO.PageTitle}`,
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
			{/* START: Breadcrumbs JSON LD  */}
			<BreadcrumbJsonLd itemListElements={breadcrumb} />
			{/* END: Breadcrumbs JSON LD*/}
			{/* START: FAQ JSON LD  */}
			<FAQPageJsonLd mainEntity={faq} />
			{/* END: FAQ JSON LD  */}
			{/* START: Product JSON LD */}
			<ProductJsonLd
				productName={pageData.ProductsBanner.DigitalStreamTitle}
				images={[pageData.PageSEO.ThumbnailImageURL]}
				description={pageData.PageSEO.PageDescription}
				brand="KTern.AI"
				color="#f28900"
				slogan={pageData.ProductsBanner.BannerHeadline}
				disambiguatingDescription={pageData.PageSEO.PageDescription}
				reviews={[
					{
						author: {
							type: 'Person',
							name: `${testimonials[0].author}`,
						},
						reviewBody: `${testimonials[0].statement}`,
						name: `${testimonials[1].statement}`,
						reviewRating: {
							bestRating: '5',
							ratingValue: '5',
							worstRating: '1',
						},
						publisher: {
							type: 'Organization',
							name: 'G2',
						},
					},
				]}
				aggregateRating={{
					ratingValue: '4.6',
					reviewCount: '21',
				}}
			/>
			{/* END: Product JSON LD  */}
			{/* START: Software JSON LD  */}
			<SoftwareAppJsonLd
				name={pageData.ProductsBanner.DigitalStreamTitle}
				price="0"
				priceCurrency="USD"
				aggregateRating={{
					ratingValue: '4.6',
					reviewCount: '22',
				}}
				operatingSystem="Windows 10, Windows 11"
				applicationCategory="BusinessApplication"
			/>
			{/* END: Software JSON LD  */}
			{/* START: Page Layout */}
			<Layout h_data={headerData} f_data={footerData}>
				{/* START: Hero  */}
				<Hero banner_data={pageData.ProductsBanner} stream={pageData.ProductsDevAttributes.Stream} breadcrumb={breadcrumb}></Hero>
				{/* END: Hero  */}
			</Layout>
			{/* END: Page Layout  */}
		</>
	);
}

export const getStaticPaths = async () => {
	// dynamic route array values must be acquired here from strapi
	const data = [
		{ product: 'digital-maps' },
		{ product: 'digital-projects' },
		{ product: 'digital-process' },
		{ product: 'digital-labs' },
		{ product: 'digital-mines' },
	];

	const paths = data.map((index) => {
		return {
			params: { product: index.product },
		};
	});
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async ({ params }) => {
	const stream = params.product;

	// Page
	const page = await fetch(`https://api.ktern.com/products?slug=${stream}`, {
		method: 'get',
	});
	if (page == undefined) {
		ctx.res.setHeader('Location', '/404');
		ctx.res.statusCode = 302;
		ctx.res.end();
	}
	const p_data = await page.json();

	// Header
	const header = await fetch('https://api.ktern.com/header', {
		method: 'get',
	});
	const h_data = await header.json();

	// Footer
	const footer = await fetch('https://api.ktern.com/footer', {
		method: 'get',
	});
	const f_data = await footer.json();

	return {
		props: {
			pageData: p_data[0],
			headerData: h_data,
			footerData: f_data,
		},
	};
};
