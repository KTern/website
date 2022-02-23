import { FAQPageJsonLd } from 'next-seo';
import Hero from '../../component/hero';
import Layout from '../../component/Layout';
import Event from '../../component/page_event';
import SEO from '../../component/seo';
import SEOProduct from '../../component/seo-product';
import ValuePoints from '../../component/valuePoints';

export default function DigitalStream({ pageData, headerData, footerData }) {
	// FAQ JSON LD
	let faq = [];
	pageData.ProductsFAQ.FAQ.map((dt) => {
		faq.push({ questionName: dt.Question, acceptedAnswerText: dt.Answer });
	});

	// Testimonials JSON LD
	let testimonials = [];
	pageData.ProductsTestimonials.Testimonials.map((dt) => {
		testimonials.push({ statement: dt.TestimonialStatement, author: dt.AuthorName });
	});

	// Amplitude Tracking onClick
	function onClick(data) {
		Event(data);
	}

	return (
		<>
			{/* START: SEO  */}
			<SEO data={pageData.PageSEO}></SEO>
			<SEOProduct
				product={pageData.ProductsBanner.DigitalStreamTitle}
				seo={pageData.PageSEO}
				slogan={pageData.ProductsBanner.BannerHeadline}
				testimonials={testimonials}
				ratingValue={pageData.ProductsBanner.RatingValue}
				reviewCount={pageData.ProductsBanner.ReviewCount}
			/>
			{/* START: FAQ JSON LD  */}
			<FAQPageJsonLd mainEntity={faq} />
			{/* END: FAQ JSON LD  */}
			{/* END: SEO  */}
			{/* START: Page Layout */}
			<Layout h_data={headerData} f_data={footerData}>
				{/* START: Hero  */}
				<Hero
					data={pageData.ProductsBanner}
					stream={pageData.ProductsDevAttributes.Stream}
					breadcrumb={pageData.PageSEO.BreadCrumb}
				></Hero>
				{/* END: Hero  */}
				{/* START: Value Points --> */}
				<ValuePoints data={pageData.ValuePropositions} stream={pageData.ProductsDevAttributes.Stream}></ValuePoints>
				{/* END: Value Points --> */}
			</Layout>
			{/* END: Page Layout  */}
		</>
	);
}

export const getStaticPaths = async () => {
	// dynamic route array values must be acquired here from strapi
	const data = [
		{ product: 'digital-maps' },
		// { product: 'digital-projects' },
		// { product: 'digital-process' },
		// { product: 'digital-labs' },
		// { product: 'digital-mines' },
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
