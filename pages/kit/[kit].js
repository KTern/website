import React, { useCallback, useRef } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';

import Breadcrumbs from '../../component/breadcrumb-new';
import CtaBar from '../../component/ctaBar';
import FeaturedResources from '../../component/featuredResources';
import Layout from '../../component/Layout';
import SEO from '../../component/seo';

const canvasStyles = {
	position: 'fixed',
	pointerEvents: 'none',
	width: '100%',
	height: '100%',
	top: 0,
	left: 0,
};

export default function Kit({ pageData, headerData, footerData, heroData }) {
  const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance) => {
		refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
		refAnimationInstance.current &&
			refAnimationInstance.current({
				...opts,
				origin: { y: 0.7 },
				particleCount: Math.floor(200 * particleRatio),
			});
  }, []);

  const fire = useCallback(() => {
		makeShot(0.25, {
			spread: 26,
			startVelocity: 55,
		});

		makeShot(0.2, {
			spread: 60,
		});

		makeShot(0.35, {
			spread: 100,
			decay: 0.91,
			scalar: 0.8,
		});

		makeShot(0.1, {
			spread: 120,
			startVelocity: 25,
			decay: 0.92,
			scalar: 1.2,
		});

		makeShot(0.1, {
			spread: 120,
			startVelocity: 45,
		});
  }, [makeShot]);
	return (
		<>
			<SEO data={pageData.PageSEO}></SEO>
			<Layout h_data={headerData} f_data={footerData}>
				<section className="py-24 relative overflow-hidden bg-bg">
					<div className="container px-4 mx-auto relative z-10">
						<div className="max-w-md lg:max-w-2xl mx-auto text-center">
							{' '}
							<div className="sm:hidden">
								<Breadcrumbs breadcrumb={pageData.PageSEO.BreadCrumb} />
							</div>
							<div className="p-6">
								<span className={`uppercase`}>{heroData.Tag}</span>
								<h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mt-2 mb-6 ibm-plex">
									{heroData.Heading}
								</h1>
								<p className="leading-8 mb-6">{heroData.SubHeading}</p>
							</div>
							<div className="flex flex-wrap -mx-2 -mb-2 justify-center items-center">
								<div className="w-full md:w-auto px-2 mb-2">
									<a
										className="block rounded-r-xl uppercase rounded-b-xl w-full md:w-auto py-3 px-4 text-center bg-black text-white font-bold border border-gray-200 hover:bg-gray-500 hover:text-white transition duration-200"
										href={heroData.CTAButtons.linkURL}
										onClick={fire}
									>
										{heroData.CTAButtons.buttonTitle}
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="absolute bottom-0 left-0 h-full md:flex md:flex-col md:justify-center">
						<div className="hidden md:block mb-8 h-32 lg:h-64 w-32 lg:w-64 bg-gray-100"></div>
						<div className="hidden md:block mb-8 h-32 lg:h-64 w-32 lg:w-64 bg-orange-100"></div>
						<div className="h-16 sm:h-32 lg:h-64 w-16 sm:w-32 lg:w-64 bg-red-100"></div>
					</div>
					<div className="absolute top-0 right-0 h-full md:flex md:flex-col md:justify-center">
						<div className="mb-8 h-16 sm:h-32 lg:h-64 w-16 sm:w-32 lg:w-64 bg-pink-100"></div>
						<div className="hidden md:block mb-8 h-32 lg:h-64 w-32 lg:w-64 bg-indigo-100"></div>
						<div className="hidden md:block h-32 lg:h-64 w-32 lg:w-64 bg-blue-100"></div>
					</div>
				</section>
				<div id="resources" className="py-6">
					<ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
					<FeaturedResources
						data={pageData.FeaturedResources}
						stream={pageData.ProductsDevAttributes.Stream}
					></FeaturedResources>
				</div>
				<CtaBar data={pageData.CTABarSection} stream={pageData.ProductsDevAttributes.Stream}></CtaBar>
			</Layout>
		</>
	);
}

export const getServerSideProps = async (ctx) => {
	const id = ctx.params.kit;
	const res = await fetch(`https://api.ktern.com/kits?slug=${id}`, {
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
			heroData: data[0].NoImageHero,
		},
	};
};
