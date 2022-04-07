import Event from '../../component/page_event';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import CtaBar from '../../component/ctaBar';
import FaqNew from '../../component/faqNew';
import FeaturedResources from '../../component/featuredResources';
import FeaturedResourcesComponent from '../../component/featuredResources1';
import Hero from '../../component/hero';
import Layout from '../../component/Layout';
import SEO from '../../component/seo';
import StreamFeatures from '../../component/streamFeatures';
import ValuePoints from '../../component/valuePoints';
import TabSet from '../../component/tabset';
import Statistics from '../../component/statistics';
import TestimonialSingle from '../../component/testimonialSingle';

export default function Feature_Landing({ pageData, headerData, footerData, background }) {
  const router = useRouter();
  console.log(pageData.ProductsDevAttributes.Stream);
	useEffect(() => {
		if (pageData == undefined) router.push('/404');
	}, []);
	
	
	
	let breadcrumb = [];
	pageData.PageSEO.BreadCrumb.map((dt) => {
		breadcrumb.push({
			position: dt.position,
			name: dt.name,
			item: dt.item,
		});
	});
	// Amplitude Tracking onClick
	function onClick(data) {
		Event(data);
	}
  return (
		<>
			<SEO data={pageData.PageSEO}></SEO>
			<Layout h_data={headerData} f_data={footerData}>
				<Hero
					data={pageData.ProductsBanner}
					stream={pageData.ProductsDevAttributes.Stream}
					breadcrumb={pageData.PageSEO.BreadCrumb}
					background={background}
					feature={true}
				></Hero>
				<TestimonialSingle
					data={pageData.CustomerTestimonial}
					stream={pageData.ProductsDevAttributes.Stream}
				></TestimonialSingle>
				<ValuePoints data={pageData.ValuePropositions} stream={pageData.ProductsDevAttributes.Stream} background={'bg'}></ValuePoints>

				<StreamFeatures
					data={pageData.StreamFeatures}
					source={pageData.PageSEO.PageTitle}
					stream={pageData.ProductsDevAttributes.Stream}
					background={'banner'}
					button={true}
				></StreamFeatures>
				<Statistics stream={pageData.ProductsDevAttributes.Stream} data={pageData.Statistics}></Statistics>
				<TabSet stream={pageData.ProductsDevAttributes.Stream} data={pageData.OtherFeatures}></TabSet>
				<FaqNew
					data={pageData.FAQ}
					title={pageData.FAQ.SectionTitle}
					stream={pageData.ProductsDevAttributes.Stream}
				/>
				<FeaturedResourcesComponent
					resources={pageData.ResourcesComponent}
					stream={pageData.ProductsDevAttributes.Stream}
					articles={pageData.Articles}
					news={pageData.News}
				></FeaturedResourcesComponent>
				<CtaBar data={pageData.CTABar} stream={pageData.ProductsDevAttributes.Stream}></CtaBar>
			</Layout>
		</>
  );
}

export const getStaticPaths = async () => {
	// dynamic route array values must be acquired here from strapi
	const data = [
		{
			product: 'digital-maps',
			feature: 'business-process-mining',
		},
		{
			product: 'digital-maps',
			feature: 'custom-code-analysis',
		},
		{
			product: 'digital-maps',
			feature: 'timeline-effort-estimation',
		},
		{
			product: 'digital-maps',
			feature: 'landscape-assessment',
		},
		{
			product: 'digital-maps',
			feature: 'transformation-insights',
		},
		{
			product: 'digital-projects',
			feature: 'digital-workspace',
		},
		{
			product: 'digital-projects',
			feature: 'sap-activate-cockpit',
		},
		{
			product: 'digital-projects',
			feature: 'social-collaboration',
		},
		{
			product: 'digital-projects',
			feature: 'signoffs-workflows',
		},
		{
			product: 'digital-projects',
			feature: 'project-reporting',
		},
		{
			product: 'digital-process',
			feature: 'process-orchestration',
		},
		{
			product: 'digital-process',
			feature: 'sap-scope-item-cockpit',
		},
		{
			product: 'digital-process',
			feature: 'process-modelling',
		},
		{
			product: 'digital-process',
			feature: 'process-dashboards',
		},
		{
			product: 'digital-process',
			feature: 'custom-process-adaptation',
		},
		{
			product: 'digital-labs',
			feature: 'test-repository',
		},
		{
			product: 'digital-labs',
			feature: 'test-scripts-evidences-defects',
		},
		{
			product: 'digital-labs',
			feature: 'test-reporting',
		},
		{
			product: 'digital-labs',
			feature: 'test-scenario-recommendations',
		},
		{
			product: 'digital-labs',
			feature: 'uat-signoffs',
		},
		{
			product: 'digital-mines',
			feature: 'change-impact-mining',
		},
		{
			product: 'digital-mines',
			feature: 'test-fit-gaps',
		},
		{
			product: 'digital-mines',
			feature: 'process-impact',
		},
		{
			product: 'digital-mines',
			feature: 'change-impact-orchestration',
		},
		{
			product: 'digital-mines',
			feature: 'release-impact-analytics',
		},
	];

	const paths = data.map((index) => {
		return {
			params: {
				product: index.product,
				feature: index.feature,
			},
		};
	});
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (ctx) => {
	const streamslug = ctx.params.product;
	const featureslug = ctx.params.feature;

	const res = await fetch(`https://api.ktern.com/capabilities?StreamSlug=${streamslug}&slug=${featureslug}`, {
		method: 'get',
	});

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
			background: 'texture'
		},
	};
};
