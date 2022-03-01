import MultiCarousel from '../../component/carousel';
import Hero from '../../component/hero';
import Layout from '../../component/Layout';
import LogoBanner from '../../component/logo-banner';
import SEO from '../../component/seo';
import SEOProduct from '../../component/seo-product';
import StreamFeatures from '../../component/streamFeatures';
import Testimonial from '../../component/testimonial';
import ValuePoints from '../../component/valuePoints';
import FeaturedResources from '../../component/featuredResources';
import AppBanner from '../../component/appBanner';
import CtaBar from '../../component/ctaBar';
import FaqNew from '../../component/faqNew';

export default function DigitalStream({ pageData, headerData, footerData }) {

	// Testimonials JSON LD
	let testimonials = [];
	pageData.ProductsTestimonials.Testimonials.map((dt) => {
		testimonials.push({ statement: dt.TestimonialStatement, author: dt.AuthorName });
	});

	return (
		<>
			<SEO data={pageData.PageSEO}></SEO>
			<SEOProduct
				product={pageData.ProductsBanner.DigitalStreamTitle}
				seo={pageData.PageSEO}
				slogan={pageData.ProductsBanner.BannerHeadline}
				testimonials={testimonials}
				ratingValue={pageData.ProductsBanner.RatingValue}
				reviewCount={pageData.ProductsBanner.ReviewCount}
			/>
			<Layout h_data={headerData} f_data={footerData}>
				<Hero
					data={pageData.ProductsBanner}
					stream={pageData.ProductsDevAttributes.Stream}
					breadcrumb={pageData.PageSEO.BreadCrumb}
				></Hero>
				<ValuePoints data={pageData.ValuePropositions} stream={pageData.ProductsDevAttributes.Stream}></ValuePoints>
				<LogoBanner data={pageData.CustomerLogo} stream={pageData.ProductsDevAttributes.Stream}></LogoBanner>
				<StreamFeatures
					data={pageData.StreamFeatures}
					source={pageData.PageSEO.PageTitle}
					stream={pageData.ProductsDevAttributes.Stream}
				></StreamFeatures>
				<MultiCarousel data={pageData.Bots} stream={pageData.ProductsDevAttributes.Stream}></MultiCarousel>
				<Testimonial
					data={pageData.ProductsTestimonials}
					stream={pageData.ProductsDevAttributes.Stream}
				></Testimonial>
				<AppBanner stream={pageData.ProductsDevAttributes.Stream}></AppBanner>
				<FaqNew
					data={pageData.ProductsFAQ}
					title={pageData.ProductsFAQ.SectionTitle}
					stream={pageData.ProductsDevAttributes.Stream}
				/>
				<FeaturedResources
					data={pageData.FeaturedResources}
					stream={pageData.ProductsDevAttributes.Stream}
				></FeaturedResources>
				<CtaBar></CtaBar>
			</Layout>
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
