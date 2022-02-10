import { FAQPageJsonLd } from "next-seo";
import Layout from "../../component/Layout";
import Carousel from "react-multi-carousel";
import { NextSeo } from "next-seo";
import { BreadcrumbJsonLd } from "next-seo";
import { LogoJsonLd } from "next-seo";
import { SocialProfileJsonLd } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import { ProductJsonLd } from "next-seo";
import { VideoJsonLd } from "next-seo";
import Event,{resolve_interest_score,resolve_stream_score} from "../../component/page_event";
import { SoftwareAppJsonLd } from "next-seo";
import FAQ from "../../component/faq";
import BreadCrumb from "../../component/breadcrumb";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const responsive_2 = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function next(id, last) {

  let elem = document.getElementById(id);
  const styles = window.getComputedStyle(elem);
  const amount = styles.getPropertyValue("--amount");
  const gapV = styles.getPropertyValue("--gap-v");
  const gapM = amount * gapV;
  const tokElem = document.getElementById(token);
  const tokStyles = window.getComputedStyle(tokElem);
  const iWidth = parseFloat(tokStyles.width);
  document.getElementById(id).scrollBy({ left: iWidth * amount + gapM, behavior: "smooth" });
}

function prev(id, last) {
  let elem = document.getElementById(id);
  const styles = window.getComputedStyle(elem);
  const amount = styles.getPropertyValue("--amount");
  const gapV = styles.getPropertyValue("--gap-v");
  const gapM = amount * gapV;
  const tokElem = document.getElementById(token);
  const tokStyles = window.getComputedStyle(tokElem);
  const iWidth = parseFloat(tokStyles.width);
  document.getElementById(id).scrollBy({ left: -(iWidth * amount + gapM), behavior: "smooth" });
}
export default function DigitalStream({stream_data,h_data,f_data}) {
  let breadcrumb = [];
  stream_data.PageSEO.BreadCrumb.map((dt) => {
    breadcrumb.push({ position: dt.position, name: dt.name, item: dt.item });
  });
  let faq=[]
  stream_data.FAQSection.map((dt)=>{
  faq.push({questionName:dt.Question,acceptedAnswerText:dt.Answer})
})
  // Amplitude Tracking onClick
  function onClick(data){
    Event(data)
    }
    
  return (
		<>
			<NextSeo
				title={stream_data.PageSEO.PageTitle}
				description={stream_data.PageSEO.PageDescription}
				canonical={stream_data.PageSEO.CanonicalTag}
				openGraph={{
					url: `${stream_data.PageSEO.PageURL}`,
					title: `${stream_data.PageSEO.PageTitle}`,
					description: `${stream_data.PageSEO.PageDescription}`,
					images: [
						{
							url: `${stream_data.PageSEO.ThumbnailImageURL}`,
							width: 1920,
							height: 1080,
							alt: `${stream_data.PageSEO.PageTitle}`,
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
			<BreadcrumbJsonLd itemListElements={breadcrumb} />
			<FAQPageJsonLd mainEntity={faq} />

			<ProductJsonLd
				productName={stream_data.pageHeader.header}
				images={[stream_data.PageSEO.ThumbnailImageURL, stream_data.VideoURL]}
				description={stream_data.PageSEO.PageDescription}
				brand="KTern.AI"
				color="#0b1320"
				slogan="Democratizing the digital transformation as a service."
				disambiguatingDescription="DXaaS platform for SAP Transformations"
				reviews={[
					{
						author: {
							type: 'Person',
							name: `${stream_data.TestimonialSection[0].AuthorName}`,
						},

						reviewBody: `${stream_data.TestimonialSection[0].TestimonialStatement}`,
						name: `${stream_data.TestimonialSection[1].TestimonialStatement}`,
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
					ratingValue: '4.9',
					reviewCount: '8',
				}}
			/>

			<SoftwareAppJsonLd
				name={process.env.NEXT_PUBLIC_NAME}
				price="0"
				priceCurrency="USD"
				aggregateRating={{
					ratingValue: '4.7',
					reviewCount: '17',
				}}
				operatingSystem="Windows 10, Windows 11"
				applicationCategory="BusinessApplication"
			/>
			<Layout h_data={h_data} f_data={f_data}>
				{/* Hero Section */}
				<section className="relative pb-8 overflow-hidden bg-rose-50">
					<div className="hidden lg:block absolute inset-0 mr-20 mt-10">
						<img
							className="ml-auto h-64"
							src="https://shuffle.dev/zeus-assets/images/backgrounds/light-circle.svg"
							alt=""
						/>
						{/* <img
						className="ml-auto h-64"
						src="https://shuffle.dev/zeus-assets/images/backgrounds/yellow-blue.svg"
						alt=""
					/> */}
						{/* <img
						className="ml-auto h-64"
						src="https://shuffle.dev/zeus-assets/images/backgrounds/light-eclipse.svg"
						alt=""
					/> */}
					</div>
					<div className="flex flex-wrap -mx-4">
						<div className="w-full lg:w-1/2 pt-12 pb-6 px-4 flex justify-center">
							<div className="px-16 pl-20 sm:p-8 sm:py-0">
								<div className="ml-auto max-w-xl mb-8 lg:mb-8 m-8">
									{/* <span className="text-xs text-blue-400 font-semibold">Whats new at Shuffle</span> */}
									<div className="mb-4">
										{' '}
										<BreadCrumb color="black" b_data={breadcrumb} />
									</div>
									<span className="p-1 text-xs rounded mines text-white font-semibold">DIGITAL MINES</span>
									<h1 className="heading mt-6 mb-4 lg:mb-6 text-4xl lg:text-5xl font-semibold ease-in sm:text-center">
										{stream_data.pageHeader.header}
									</h1>
									<p className="text-lg text-gray-500 sm:text-center">{stream_data.pageHeader.subHeading}</p>
								</div>
								<div className="relative flex flex-wrap">
									<input
										className="relative mb-2 md:mb-0 w-full md:w-2/3 py-4 pl-4 text-sm border rounded"
										type="text"
										placeholder="e.g hello@shuffle.dev"
									/>
									{/* <span className="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
									Email Address
								</span> */}
									<button className="w-full md:w-auto py-3 px-6 md:ml-2 text-sm text-white font-medium leading-normal border-2 border-black bg-black hover:bg-gray-300 hover:text-black shadow text-white  rounded-r-xl rounded-b-xl transition duration-200">
										Start&nbsp;for&nbsp;free
									</button>
								</div>
								<div className="rating pt-5">
									<div className="rating-star"></div>
									<div className="rating-star"></div>
									<div className="rating-star"></div>
									<div className="rating-star"></div>
									<div className="rating-star"></div>
									<span className="pl-3">Based on 10,000+ reviews on</span>
									{/* <img
									className="w-1/3 pt-5"
									src="https://clickup.com/landing/images/reviews/color/g2crowd.png"
								/> */}
								</div>
								<div className="flex flex-wrap items-center justify-center -mx-2 -mb-12 mt-5">
									<div className="w-1/2 md:w-1/3 lg:w-1/5 px-2 mb-12">
										<img
											className="mx-auto lg:mx-0 h-5"
											src="https://shuffle.dev/zeus-assets/logo/slack-gray.svg"
											alt=""
										/>
									</div>
									<div className="w-1/2 md:w-1/3 lg:w-1/5 px-2 mb-12">
										<img
											className="mx-auto lg:mx-0 h-5"
											src="https://shuffle.dev/zeus-assets/logo/slack-gray.svg"
											alt=""
										/>
									</div>
									<div className="w-1/2 md:w-1/3 lg:w-1/5 px-2 mb-12">
										<img
											className="mx-auto lg:mx-0 h-5"
											src="https://shuffle.dev/zeus-assets/logo/slack-gray.svg"
											alt=""
										/>
									</div>
									<div className="w-1/2 md:w-1/3 lg:w-1/5 px-2 mb-12">
										<img
											className="mx-auto lg:mx-0 h-5"
											src="https://shuffle.dev/zeus-assets/logo/slack-gray.svg"
											alt=""
										/>
									</div>
									<div className="w-1/2 md:w-1/3 lg:w-1/5 px-2 mb-12">
										<img
											className="mx-auto lg:mx-0 h-5"
											src="https://shuffle.dev/zeus-assets/logo/slack-gray.svg"
											alt=""
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="relative w-full lg:w-1/2 px-4">
							<img
								className="hidden lg:block lg:absolute top-0 left-0 mt-52 ml-10"
								src="https://shuffle.dev/zeus-assets/icons/dots/yellow-dot-right.svg"
								alt=""
							/>

							<Image
								priority
								className={`rounded-3xl  md:rounded-6xl`}
								layout="fill"
								src={stream_data.VideoURL}
								alt=""
							/>
						</div>
					</div>
				</section>

				{/* /Hero Section */}
				{/* <!-- Customer logos Section --> */}
				<div className="px-4 pt-10 pb-10">
					<div className="container px-4 mx-auto">
						<h2 className=" text-center  text-gray-400 section-heading sm:sm-section-heading">
							{stream_data.LogoHeading}
						</h2>
						{/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. ab repudiandae et.</p> */}
					</div>
					<Carousel className="bots flex p-10  z-10" responsive={responsive_2}>
						{stream_data.Logos.map((dt) => (
							<div key="dt" className="p-3 bots-card flex-row">
								<Image
									priority
									className=" w-auto lg:w-100"
									src={dt.logoUrl}
									alt=""
									width={dt.width}
									height={dt.height}
									layout=""
								/>
							</div>
						))}
					</Carousel>
				</div>
				{/* <!-- /Customer logos Section --> */}
				{/* <!-- Why Ktern --> */}
				<section
					className={`md:px-20 ${stream_data.cssstreamtag} text-white py-10 md:rounded-tr-large md:rounded-b-large md:mx-10 mb-10`}
				>
					<h2 className="section-heading text-center text-white mt-10 mb-3">{stream_data.WhySectionTitle}</h2>
					<p className="section-subheading text-center text-white">{stream_data.WhySectionDescription}</p>
					<div className="flex justify-center items-center   mx-auto space-x-10 ">
						<div className="grid md:grid-cols-4 gap-3 justify-center ">
							{stream_data.WhyStreamPoints.map((dt) => (
								<div key="dt" className="p-6 w-full  md:mb-8 md:mt-8 justify-center items-center ">
									<div className="flex items-center  justify-center p-2 w-16 h-16 mb-8 rounded-full bg-white">
										<Image
											priority
											src={dt.Icon.imageURL}
											alt={dt.Icon.imageDescription}
											width={dt.Icon.width}
											height={dt.Icon.height}
											className=" rounded-full "
										/>
									</div>
									<h3 className="mb-4 text-white card-heading">{dt.CardTitle}</h3>
									<p className="card-subheading text-gray-200">{dt.CardDescription} </p>
								</div>
							))}
						</div>
					</div>
				</section>
				{/* <!-- /Why Ktern --> */}
				{/* Streams Content Section */}
				<section className="px-5 pb-10 relative overflow-hidden ">
					{/* <Image priority className="hidden lg:block absolute inset-0 w-full" src="/lines.svg" alt=""/> */}

					{stream_data.FeaturesSection.map((dt, index) => {
						return index % 2 == 0 ? (
							<div key="dt" className="relative pt-20 rounded-t-3xl pb-12 lg:pb-24">
								<div className="w-full md:container mx-auto px-4">
									<div className="flex flex-wrap -mx-4">
										<div className="hidden sm:block w-full lg:w-1/2 px-4 flex items-center justify-center">
											<div className="relative" style={{ zIndex: 0 }}>
												<div className="h-128 w-full relative">
													<Image
														priority
														className="rounded-3xl md:rounded-tl-none bg-white"
														width={500}
														height={400}
														src={dt.imageurl}
														alt=""
													/>
												</div>
												<div
													className="animate-pulse hidden md:block absolute w-60 h-40"
													style={{ top: '-2rem', right: '3rem', zIndex: -1 }}
												>
													<svg
														width="98"
														height="98"
														viewBox="0 0 98 98"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															fillRule="evenodd"
															clipRule="evenodd"
															d="M0 49V0H49H50L49.99 0.00980377C76.595 0.537064 98 22.2688 98 49C98 76.062 76.062 98 49 98C21.938 98 0 76.062 0 49Z"
															fill={dt.topwing}
														/>
													</svg>
												</div>
												<div
													className="animate-pulse hidden md:block absolute w-60 h-40"
													style={{ bottom: '-2rem', right: '-2rem', zIndex: -1 }}
												>
													<svg
														width="166"
														height="165"
														viewBox="0 0 166 165"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															fillRule="evenodd"
															clipRule="evenodd"
															d="M82.9727 164.999C82.8152 165 82.6577 165 82.5 165C36.9365 165 0 128.063 0 82.5C0 36.9365 36.9365 0 82.5 0C128.063 0 165 36.9365 165 82.5C165 83.2975 164.989 84.0924 164.966 84.8844L165.21 165H82.9714L82.9727 164.999Z"
															fill={dt.bottomwing}
														/>
													</svg>
												</div>
												<div
													className="animate-pulse hidden md:block absolute w-60 h-40"
													style={{ bottom: '2.5rem', right: '-4.5rem', zIndex: -1 }}
												>
													<Image priority layout="fill" src="/bullets-gray-left.svg" alt="" />
												</div>
												<div
													className="animate-pulse hidden md:block absolute w-60 h-40"
													style={{ top: '3rem', left: '-8rem', zIndex: -1 }}
												>
													<Image priority layout="fill" src="/bullets-gray-right.svg" alt="" />
												</div>
											</div>
										</div>

										<div className="w-full lg:w-1/2 md:px-20 lg:mb-12 lg:mb-20 lg:mb-0 space-x-10 flex items-center">
											<div className="w-full text-center lg:text-left">
												<div className="max-w-md mx-auto lg:mx-0">
													<h2 className="mb-3 card-heading">
														<span className="card-heading">{dt.Title} </span>
													</h2>
												</div>
												<div className="max-w-sm mx-auto lg:mx-0">
													<p className="mb-6 text-black  card-subheading">{dt.Description}</p>
													<Link href={dt.CTAUrl} passHref>
														<a
															onClick={() => {
																onClick({
																	stream_score: resolve_stream_score(stream_data.cssstreamtag),
																	event_name: 'Link Click',
																	section_name: 'Features Section',
																	page_source: `${stream_data.PageSEO.PageTitle}`,
																	label: `${dt.Title}-${dt.CTAText}`,
																});
															}}
															className="inline-flex items-center pb-1  text-black hover:border-blue-400 group "
														>
															<span className="hyperlink group-hover:text-gray-400">{dt.CTAText}</span>
															<svg
																className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400"
																fill="none"
																stroke="currentColor"
																viewBox="0 0 24 24"
																xmlns="http://www.w3.org/2000/svg"
															>
																<path
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	strokeWidth="2"
																	d="M17 8l4 4m0 0l-4 4m4-4H3"
																></path>
															</svg>
														</a>
													</Link>
													<div className="my-12"></div>
												</div>
											</div>
										</div>
										<div className="invisible lg:visible w-full lg:w-1/2 px-4 flex items-center justify-center">
											<div className="absolute mr-4" style={{ zIndex: 0 }}>
												<div>
													<Image
														priority
														width={500}
														height={400}
														className="rounded-3xl md:rounded-tl-none bg-white"
														src={dt.imageurl}
														alt=""
													/>
												</div>
												<div
													className="animate-pulse hidden md:block absolute w-60 h-40"
													style={{ top: '-2rem', right: '3rem', zIndex: -1 }}
												>
													<svg
														width="98"
														height="98"
														viewBox="0 0 98 98"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															fillRule="evenodd"
															clipRule="evenodd"
															d="M0 49V0H49H50L49.99 0.00980377C76.595 0.537064 98 22.2688 98 49C98 76.062 76.062 98 49 98C21.938 98 0 76.062 0 49Z"
															fill={dt.topwing}
														/>
													</svg>
												</div>
												<div
													className="animate-pulse hidden md:block absolute w-60 h-40"
													style={{ bottom: '-2rem', right: '-2rem', zIndex: -1 }}
												>
													<svg
														width="166"
														height="165"
														viewBox="0 0 166 165"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															fillRule="evenodd"
															clipRule="evenodd"
															d="M82.9727 164.999C82.8152 165 82.6577 165 82.5 165C36.9365 165 0 128.063 0 82.5C0 36.9365 36.9365 0 82.5 0C128.063 0 165 36.9365 165 82.5C165 83.2975 164.989 84.0924 164.966 84.8844L165.21 165H82.9714L82.9727 164.999Z"
															fill={dt.bottomwing}
														/>
													</svg>
												</div>
												<div
													className="animate-pulse hidden md:block absolute w-60 h-40"
													style={{ bottom: '2.5rem', right: '-4.5rem', zIndex: -1 }}
												>
													<Image priority layout="fill" src="/bullets-gray-left.svg" alt="" />
												</div>
												<div
													className="animate-pulse hidden md:block absolute w-60 h-40"
													style={{ top: '3rem', left: '-8rem', zIndex: -1 }}
												>
													<Image priority layout="fill" src="/bullets-gray-right.svg" alt="" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						) : (
							index % 2 != 0 && (
								<div key="dt" className="relative pt-2  lg:pb-24 pb-12 lg:pb-24">
									<div className="container mx-auto px-20">
										<div className="flex flex-wrap -mx-20">
											<div className="w-full lg:w-1/2 px-4 flex items-center justify-center">
												<div className="relative" style={{ zIndex: 0 }}>
													<div className="h-128 w-full relative">
														<Image
															priority
															className="rounded-3xl md:rounded-tl-none bg-white"
															width={500}
															height={400}
															src={dt.imageurl}
															alt=""
														/>
													</div>
													<div
														className="animate-pulse hidden md:block absolute w-60 h-40"
														style={{ top: '-2rem', right: '3rem', zIndex: -1 }}
													>
														<svg
															width="98"
															height="98"
															viewBox="0 0 98 98"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																fillRule="evenodd"
																clipRule="evenodd"
																d="M0 49V0H49H50L49.99 0.00980377C76.595 0.537064 98 22.2688 98 49C98 76.062 76.062 98 49 98C21.938 98 0 76.062 0 49Z"
																fill={dt.topwing}
															/>
														</svg>
													</div>
													<div
														className="animate-pulse hidden md:block absolute w-60 h-40"
														style={{ bottom: '-2rem', right: '-2rem', zIndex: -1 }}
													>
														<svg
															width="166"
															height="165"
															viewBox="0 0 166 165"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																fillRule="evenodd"
																clipRule="evenodd"
																d="M82.9727 164.999C82.8152 165 82.6577 165 82.5 165C36.9365 165 0 128.063 0 82.5C0 36.9365 36.9365 0 82.5 0C128.063 0 165 36.9365 165 82.5C165 83.2975 164.989 84.0924 164.966 84.8844L165.21 165H82.9714L82.9727 164.999Z"
																fill={dt.bottomwing}
															/>
														</svg>
													</div>
													<div
														className="animate-pulse hidden md:block absolute w-60 h-40"
														style={{ bottom: '2.5rem', right: '-4.5rem', zIndex: -1 }}
													>
														<Image priority layout="fill" src="/bullets-gray-left.svg" alt="" />
													</div>
													<div
														className="animate-pulse hidden md:block absolute w-60 h-40"
														style={{ top: '3rem', left: '-8rem', zIndex: -1 }}
													>
														<Image priority layout="fill" src="/bullets-gray-right.svg" alt="" />
													</div>
												</div>
											</div>
											<div className="w-full lg:w-1/2 md:px-20  lg:mb-20 lg:mb-0 flex items-center">
												<div className="w-full text-center lg:text-left">
													<div className="max-w-md mx-auto lg:mx-0">
														<h2 className="mb-3  card-heading">
															<span className="card-heading">{dt.Title}</span>
														</h2>
													</div>
													<div className="max-w-sm mx-auto lg:mx-0">
														<p className="mb-6 text-black  card-subheading">{dt.Description}</p>
														<Link href={dt.CTAUrl} passHref>
															<a
																onClick={() => {
																	onClick({
																		stream_score: resolve_stream_score(stream_data.cssstreamtag),
																		event_name: 'Link Click',
																		section_name: 'Features Section',
																		page_source: `${stream_data.PageSEO.PageTitle}`,
																		label: `${dt.Title}-${dt.CTAText}`,
																	});
																}}
																className="inline-flex items-center pb-1  text-black hover:border-blue-400 group "
															>
																<span className="hyperlink group-hover:text-gray-400">
																	{dt.CTAText}
																</span>
																<svg
																	className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400"
																	fill="none"
																	stroke="currentColor"
																	viewBox="0 0 24 24"
																	xmlns="http://www.w3.org/2000/svg"
																>
																	<path
																		strokeLinecap="round"
																		strokeLinejoin="round"
																		strokeWidth="2"
																		d="M17 8l4 4m0 0l-4 4m4-4H3"
																	></path>
																</svg>
															</a>
														</Link>
														<div className="my-12"></div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							)
						);
					})}
				</section>
				{/*/ Streams Content Section */}
				{/* Bots Section */}
				<div className={`md:px-20 py-10 `}>
					<div className="px-20">
						<h2 className="section-heading text-center mb-4">{stream_data.BotsSectionHeading}</h2>
						{/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. ab repudiandae et.</p> */}
					</div>
					<Carousel className="bots flex p-10  " responsive={responsive}>
						{stream_data.BotCards.map((dt) => (
							<div
								key="dt"
								className=" relative flex  px-2  group overflow-hidden false transition transform hover:-translate-y-1 duration-500 "
							>
								<span
									className={`absolute top-0 left-0 h-full mt-1 ml-1 bg-secondary  group-hover:bg-${stream_data.cssstreamtag}-secondary `}
									style={{ height: '500px', width: '310px' }}
								></span>
								<div
									className={`relative shadow bots-card bg-white flex-col p-5   group overflow-hidden false border border-black hover:border-${stream_data.cssstreamtag}-primary bots-card`}
								>
									<div className="relative bg-white flex flex-col justify-between flex-1  text-black">
										<Image
											priority
											src={dt.Icon.imageURL}
											alt={dt.Icon.imageDescription}
											width={dt.Icon.width}
											height={dt.Icon.height}
										/>
										<h3 className="my-2 mt-4 text-md font-bold  text-gray-800">{dt.CardTitle}</h3>
										<p className="mb-2 navbar-s text-gray-600">{dt.CardDescription}</p>
									</div>
								</div>
							</div>
						))}
					</Carousel>
				</div>
				{/* /Bots Section */}
				{/* Testimonial Section */}
				<section className="sm:px-4 relative py-10 md:py-15 bg-black overflow-x-hidden">
					{/* <Image priority width="10%" height="10%" className="absolute h-24 md:h-auto top-0 left-0 right-0" src="/atis-assets/elements/line-top.svg" alt=""/> */}

					<h2 className="mb-10 lg:mb-10   section-heading text-center  text-white  ">
						{stream_data.TestimonialSectionHeading}
					</h2>
					<div className="flex flex-wrap lg:flex-nowrap justify-center">
						<div className="hidden lg:block  opacity-50 flex-shrink-0 w-full max-w-md px-3"></div>

						{stream_data.TestimonialSection.map((dt, index) => {
							return index % 2 == 0 ? (
								<div key="dt" className="flex-shrink-0  w-full lg:max-w-md px-3 lg:mt-20 mb-6 lg:mb-0">
									<div className="px-6 py-12 bg-black   border border-white">
										<div className="relative px-4 mx-auto">
											<div className="absolute top-0 left-0">
												<Image priority width="10%" height="10%" src="/quote-grey.svg" alt="" />
											</div>
											<div className="absolute top-0 right-0">
												<Image priority width="10%" height="10%" src="/quote-grey.svg" alt="" />
											</div>
											<div className="px-4 md:px-10 flex-col text-center">
												<h3 className="mb-8 card-subheading text-white ">{dt.TestimonialStatement}</h3>
												<div className="flex-col items-center justify-center">
													<p className="mb-4 md:mb-0 text-gray-300 hyperlink">{dt.AuthorName}</p>
													<p className="mb-4 md:mb-0 text-gray-300 hyperlink">{dt.AuthorDescription}</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							) : (
								index % 2 != 0 && (
									<div className="flex-shrink-0 w-full lg:max-w-md px-3 mb-6 lg:mb-0">
										<div className="px-6 py-12   bg-black border border-white">
											<div className="relative px-4 mx-auto">
												<div className="absolute top-0 left-0">
													<Image priority width="10%" height="10%" src="/quote-grey.svg" alt="" />
												</div>
												<div className="absolute top-0 right-0">
													<Image priority width="10%" height="10%" src="/quote-grey.svg" alt="" />
												</div>
												<div className="px-4 md:px-10 flex-col text-center">
													<h3 className="mb-8 card-subheading text-white ">{dt.TestimonialStatement}</h3>
													<div className="flex-col items-center justify-center">
														<p className="mb-4 md:mb-0 text-gray-300 hyperlink">{dt.AuthorName}</p>
														<p className="mb-4 md:mb-0 text-gray-300 hyperlink">{dt.AuthorDescription}</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								)
							);
						})}

						<div className="hidden lg:block opacity-50 flex-shrink-0 w-full max-w-md px-3"></div>
					</div>
				</section>
				{/* /Testimonial Section */}
				{/* FAQ Section */}
				<FAQ data={stream_data.FAQSection} title={stream_data.FAQTitle} />
				{/*/ FAQ Section */}
				{/* Resources Section */}
				<section className="w-full pt-8 bg-white sm:pt-12 md:pt-16">
					<div className="px-2 mx-auto max-w-7xl">
						<div className="flex justify-center w-full pb-5 mb-4 border-gray-200">
							<h2 className="section-heading  text-gray-800 ">{stream_data.RelatedResourcesSectionHeading}</h2>
						</div>

						<div className="grid  md:grid-cols-4 gap-6 mb-6">
							{stream_data.Resource.map((data) => (
								<div
									key="data"
									className="relative flex  px-2  group overflow-hidden false transition transform hover:-translate-y-1 duration-500"
								>
									<span
										className={`absolute top-0 left-0 h-full mt-1 ml-1 bg-secondary  group-hover:bg-${stream_data.cssstreamtag}-secondary `}
										style={{ height: '400px', width: '345px' }}
									></span>
									{data.OpenNewTab && (
										<div
											className={`relative shadow bg-white flex-col p-5 px-5  group overflow-hidden false border border-black hover:border-${stream_data.cssstreamtag}-primary `}
										>
											<div className="bg-white">
												<Link href={data.CTAUrl} passHref>
													<a
														onClick={() => {
															onClick({
																stream_score: resolve_stream_score(stream_data.cssstreamtag),
																event_name: 'Card Click',
																section_name: 'Related Resources Section',
																page_source: `${stream_data.PageSEO.PageTitle}`,
																label: `${data.CardTitle}-${data.CTAUrl}`,
															});
														}}
														target="_blank"
														className="relative h-3/5 w-full block w-full h-44 overflow-hidden rounded"
													>
														<Image
															priority
															className="bg-secondary  object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105"
															src={data.Icon.imageURL}
															alt={data.Icon.imageDescription}
															width="550"
															height="300"
														/>
													</a>
												</Link>
											</div>
											<Link href={data.CTAUrl} passHref>
												<a
													className="bg-white"
													onClick={() => {
														onClick({
															stream_score: resolve_stream_score(stream_data.cssstreamtag),
															event_name: 'Card Click',
															section_name: 'Related Resources Section',
															page_source: `${stream_data.PageSEO.PageTitle}`,
															label: `${data.CardTitle}-${data.CTAUrl}`,
														});
													}}
												>
													<span className="bg-white block card-subheading h-1/5 font-semibold leading-tight text-gray-700 mb-4 hover:text-gray-900 ">
														{data.CardTitle}
													</span>
													<Link href={data.CTAUrl} passHref>
														<a
															onClick={() => {
																onClick({
																	stream_score: resolve_stream_score(stream_data.cssstreamtag),
																	event_name: 'Card Click',
																	section_name: 'Related Resources Section',
																	page_source: `${stream_data.PageSEO.PageTitle}`,
																	label: `${data.CardTitle}-${data.CTAUrl}`,
																});
															}}
															target="_blank"
															className="mb-6 flex bg-white w-full inline-flex h-1/5 items-center   text-black hover:text-gray-400 group "
														>
															<span className="hyperlink group-hover:text-gray-300">{data.CTAText}</span>
															<svg
																className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-300"
																fill="none"
																stroke="currentColor"
																viewBox="0 0 24 24"
																xmlns="http://www.w3.org/2000/svg"
															>
																<path
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	strokeWidth="2"
																	d="M17 8l4 4m0 0l-4 4m4-4H3"
																></path>
															</svg>
														</a>
													</Link>
												</a>
											</Link>
										</div>
									)}
									{!data.OpenNewTab && (
										<div
											className={`relative shadow bg-white flex-col p-5 px-5  group overflow-hidden false border border-black hover:border-${stream_data.cssstreamtag}-primary `}
										>
											<div className="bg-white">
												<Link href={data.CTAUrl} passHref>
													<a
														onClick={() => {
															onClick({
																stream_score: resolve_stream_score(stream_data.cssstreamtag),
																event_name: 'Card Click',
																section_name: 'Related Resources Section',
																page_source: `${stream_data.PageSEO.PageTitle}`,
																label: `${data.CardTitle}-${data.CTAUrl}`,
															});
														}}
														className="relative h-3/5 w-full block w-full h-44 overflow-hidden rounded"
													>
														<Image
															priority
															className="bg-secondary  object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105"
															src={data.Icon.imageURL}
															alt={data.Icon.imageDescription}
															width="550"
															height="300"
														/>
													</a>
												</Link>
											</div>
											<Link href={data.CTAUrl} passHref>
												<a
													onClick={() => {
														onClick({
															stream_score: resolve_stream_score(stream_data.cssstreamtag),
															event_name: 'Card Click',
															section_name: 'Related Resources Section',
															page_source: `${stream_data.PageSEO.PageTitle}`,
															label: `${data.CardTitle}-${data.CTAUrl}`,
														});
													}}
													className="bg-white"
												>
													<span className="bg-white block card-subheading h-1/5 font-semibold leading-tight text-gray-700 mb-4 hover:text-gray-900 ">
														{data.CardTitle}
													</span>
													<Link href={data.CTAUrl} passHref>
														<a
															onClick={() => {
																onClick({
																	stream_score: resolve_stream_score(stream_data.cssstreamtag),
																	event_name: 'Card Click',
																	section_name: 'Related Resources Section',
																	page_source: `${stream_data.PageSEO.PageTitle}`,
																	label: `${data.CardTitle}-${data.CTAUrl}`,
																});
															}}
															className="mb-6 flex bg-white w-full inline-flex h-1/5 items-center   text-black hover:text-gray-400 group "
														>
															<span className="hyperlink group-hover:text-gray-300">{data.CTAText}</span>
															<svg
																className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-300"
																fill="none"
																stroke="currentColor"
																viewBox="0 0 24 24"
																xmlns="http://www.w3.org/2000/svg"
															>
																<path
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	strokeWidth="2"
																	d="M17 8l4 4m0 0l-4 4m4-4H3"
																></path>
															</svg>
														</a>
													</Link>
												</a>
											</Link>
										</div>
									)}
								</div>
							))}
						</div>
						<div className="text-center">
							<Link href={stream_data.ViewAllResources.LinkURL} passHref>
								<a
									onClick={() => {
										onClick({
											stream_score: resolve_stream_score('none'),
											event_name: 'Link Click',
											section_name: 'Related Resources Section',
											page_source: `${stream_data.PageSEO.PageTitle}`,
											label: `${stream_data.ViewAllResources.LinkText}-${data.CTAUrl}`,
										});
									}}
									className="inline-flex items-center   text-black hover:text-gray-400 group "
								>
									<span className="hyperlink group-hover:text-gray-300">
										{stream_data.ViewAllResources.LinkText}
									</span>
									<svg
										className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-300"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M17 8l4 4m0 0l-4 4m4-4H3"
										></path>
									</svg>
								</a>
							</Link>
						</div>
					</div>
				</section>
				{/* / Resources Setion */}
				{/* / Resources Setion */}
				{/* Cta Section */}
				<section className="bg-white">
					<div className="md:px-2 md:py-8 mx-auto sm:py-10  lg:py-20 max-w-7xl">
						<div
							className={`relative py-6 overflow-hidden  ${stream_data.cssstreamtag} lg:py-12 md:px-6 lg:p-16 lg:flex lg:items-center lg:justify-between md:shadow-xl md:bg-purple-1000`}
						>
							<div className="absolute top-0 right-0 hidden w-full -mt-20 transform rotate-45 translate-x-1/2 bg-white sm:block h-96 opacity-5"></div>
							<div className="absolute top-0 left-0 hidden w-full -mt-20 transform rotate-45 -translate-x-1/2 bg-white sm:block h-96 opacity-5"></div>
							<div className="relative w-2/3 p-6  md:p-0 md:pb-4">
								<h2 className="card-heading  leading-9 tracking-tight text-white sm:text-4xl sm:leading-10">
									{stream_data.FinalCTASection.CTATitle}
								</h2>
								<p className="w-full mt-5 card-subheading text-white ">
									{stream_data.FinalCTASection.CTADescription}
								</p>
							</div>
							<div className="relative w-1/3 flex flex-col items-center w-full px-6 space-y-5 md:space-x-5 md:space-y-0 md:flex-row md:w-auto lg:flex-shrink-0 md:px-0">
								{stream_data.FinalCTASection.PrimaryCTA.openNewTab && (
									<Link href={stream_data.FinalCTASection.PrimaryCTA.linkURL} passHref>
										<a
											onClick={() => {
												onClick({
													stream_score: resolve_stream_score('none'),
													event_name: 'Button Click',
													section_name: 'CTA Section',
													page_source: `${stream_data.PageSEO.PageTitle}`,
													label: `${stream_data.FinalCTASection.PrimaryCTA.buttonTitle}`,
												});
											}}
											target="_blank"
											className={` border-2 inline-block py-3 px-10  hover:bg-gray-300 hover:text-black shadow button ${stream_data.cssstreamtag}button  uppercase text-white rounded-r-xl rounded-b-xl transition duration-200 `}
										>
											{stream_data.FinalCTASection.PrimaryCTA.buttonTitle}
										</a>
									</Link>
								)}
								{!stream_data.FinalCTASection.PrimaryCTA.openNewTab && (
									<Link href={stream_data.FinalCTASection.PrimaryCTA.linkURL} passHref>
										<a
											onClick={() => {
												onClick({
													stream_score: resolve_stream_score('none'),
													event_name: 'Button Click',
													section_name: 'CTA Section',
													page_source: `${stream_data.PageSEO.PageTitle}`,
													label: `${stream_data.FinalCTASection.PrimaryCTA.buttonTitle}`,
												});
											}}
											className={` border-2 inline-block py-3 px-10  hover:bg-gray-300 hover:text-black shadow button ${stream_data.cssstreamtag}button  uppercase text-white rounded-r-xl rounded-b-xl transition duration-200 `}
										>
											{stream_data.FinalCTASection.PrimaryCTA.buttonTitle}
										</a>
									</Link>
								)}
								<Link
									rel="noopener noreferrer"
									href={stream_data.FinalCTASection.SecondaryCTA.linkURL}
									passHref
								>
									<a
										onClick={() => {
											onClick({
												stream_score: resolve_stream_score('none'),
												event_name: 'Button Click',
												section_name: 'CTA Section',
												page_source: `${stream_data.PageSEO.PageTitle}`,
												label: `${stream_data.FinalCTASection.SecondaryCTA.buttonTitle}`,
											});
										}}
										target="_blank"
										className={` inline-block py-3 px-10 bg-white hover:bg-gray-50 hover:text-black shadow button uppercase text-black rounded-r-xl rounded-b-xl transition duration-200 border-2 border-black`}
									>
										{stream_data.FinalCTASection.SecondaryCTA.buttonTitle}
									</a>
								</Link>
							</div>
						</div>
					</div>
				</section>
				{/* /Cta Section */}
			</Layout>
		</>
  );
}

export const getStaticPaths = async () => {
  // dynamic route array values must be acquired here from strapi
  const data = [
    { product: "digital-maps" },
    { product: "digital-projects" },
    { product: "digital-process" },
    { product: "digital-labs" },
    { product: "digital-mines" },
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
  const streamname = params.product;

  const res = await fetch(`https://api.ktern.com/digital-streams?slug=${streamname}`, {
    method: "get",
  });
  if(res==undefined){
    ctx.res.setHeader('Location', '/404');
    ctx.res.statusCode = 302;
    ctx.res.end();
  }
  const data = await res.json();
  
  //  console.log(data[0])
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
      stream_data: data[ 0 ],
      h_data: h_data,
      f_data:f_data
    }
  };
};