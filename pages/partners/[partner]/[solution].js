import MultiCardCarousel from '../../../component/carousel1';
import CTABar1 from '../../../component/ctaBar1';
import Features from '../../../component/features';
import Layout from '../../../component/Layout';
import List from '../../../component/list';
import NoImageHero from '../../../component/NoImageHero';
import PricingCard from '../../../component/pricingCard';
import PricingTerms from '../../../component/pricingTerms';
import SEO from '../../../component/seo';

export default function PartnerSolutionLandingPage({ pageData, headerData, footerData, stream }) {
	return (
		<>
			<SEO data={pageData.PageSEO}></SEO>
			<Layout h_data={headerData} f_data={footerData}>
				<NoImageHero
					data={pageData.PageHero}
					breadcrumb={pageData.PageSEO.BreadCrumb}
					stream={stream}
				></NoImageHero>
				<section id="content" className="w-full px-8 py-16 bg-white xl:px-0">
					<div className="flex flex-col max-w-6xl mx-auto md:flex-row">
						<div className="w-full pr-6 md:w-3/12 xl:pr-12">
							<img className="pt-8" src={pageData.LogoURL} />
						</div>
						<div className="w-full mt-5 md:mt-0 md:w-4/5 md:pl-2">
							<p className="text-base font-normal leading-none text-gray-700 md:text-lg">
								{pageData.Introduction}
							</p>
						</div>
					</div>
				</section>
				<Features stream={stream} data={pageData.Values}></Features>
				<List stream={stream} data={pageData.ListSection}></List>
				<MultiCardCarousel data={pageData.ProductOfferings} stream={stream}></MultiCardCarousel>
				<PricingCard
					stream={stream}
					tag={pageData.PricingSectionTag}
					title={pageData.PricingSectionTitle}
					data={pageData.PricingComponent}
				></PricingCard>
				<PricingTerms stream={stream} data={pageData.PricingTerms}></PricingTerms>				
				<CTABar1 stream={stream} data={pageData.CTACard}></CTABar1>
			</Layout>
		</>
	);
}

export const getServerSideProps = async (ctx) => {
	const partnerslug = ctx.params.partner;
	const solutionslug = ctx.params.solution;
	const res = await fetch(
		`https://api.ktern.com/partner-solutions?PartnerSlug=${partnerslug}&SolutionSlug=${solutionslug}`,
		{
			method: 'get',
		}
	);
	const data = await res.json();
	if (data[0] == undefined) {
		ctx.res.setHeader('Location', '/404');
		ctx.res.statusCode = 302;
		ctx.res.end();
	}
	const res1 = await fetch('https://api.ktern.com/header', {
		method: 'get',
	});
	const h_data = await res1.json();
	const res2 = await fetch('https://api.ktern.com/footer', {
		method: 'get',
	});
	const f_data = await res2.json();
	return {
		props: {
			pageData: data[0],
			headerData: h_data,
			footerData: f_data,
			stream: 'dxaas',
		},
	};
};
