import Layout from '../../component/Layout';
import SEO from '../../component/seo';
import StreamFeatures from '../../component/streamFeatures';
import Hero2 from '../../component/hero2';
import ImageCard from '../../component/imageCard';
import CTABar1 from '../../component/ctaBar1';

export default function PartnerLandingPage({ pageData, headerData, footerData, stream }) {
	return (
		<>
			<Layout h_data={headerData} f_data={footerData}>
				<SEO data={pageData.PageSEO}></SEO>
				<Hero2 data={pageData.PartnerHero} stream={stream} breadcrumb={pageData.PageSEO.BreadCrumb}></Hero2>
				<StreamFeatures
					data={pageData.PartnerContent}
					source={pageData.PageSEO.PageTitle}
					stream={stream}
					background={'dxaas'}
					button={false}
				></StreamFeatures>
				<ImageCard stream={stream} data={pageData.PartnerSolutions}></ImageCard>
				<CTABar1 stream={stream} data={pageData.CTACard}></CTABar1>
			</Layout>
		</>
	);
}

export const getServerSideProps = async (ctx) => {
	const partnerslug = ctx.params.partner;
	const res = await fetch(`https://api.ktern.com/partners?slug=${partnerslug}`, {
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
			stream: 'dxaas',
		},
	};
};
