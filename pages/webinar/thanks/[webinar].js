import Layout from "../../../component/Layout";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NextSeo } from "next-seo";
import { BreadcrumbJsonLd } from "next-seo";
import { LogoJsonLd } from "next-seo";
import { SocialProfileJsonLd } from "next-seo";
import React from "react";
import ICalendarLink from "react-icalendar-link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { data } from "autoprefixer";
import BreadCrumb from "../../../component/breadcrumb";
import Event,{resolve_interest_score,resolve_stream_score} from "../../../component/page_event";
export default function Thanks({ webinar_data, h_data,f_data }) {
  // var options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' ,hours:'numeric',minutes:'numeric'};
  const start = new Date(webinar_data.DateTime);
  const end = new Date(webinar_data.DateTime).setHours(start.getHours() + 1);
  console.log(webinar_data.DateTime,start,end)
  const event = {
    title: webinar_data.WebinarTitle,
    description: `${webinar_data.iCalDescription}`,
    startTime: start,
    endTime: end,
    location: `${webinar_data.PageSEO.PageURL}`,
    attendees: [],
  };
  console.log(event)
  const [isVideoVisible, setIsVideoVisible] = useState(true);
  const [isSlideVisible, setIsSlideVisible] = useState(false);
  let breadcrumb = [];
  webinar_data.PageSEO.BreadCrumb.map((dt) => {
    breadcrumb.push({ position: dt.position, name: dt.name, item: dt.item });
  });
  // Amplitude Tracking onClick
  function onClick(data){
    Event(data)
    }
  return (
		<>
			<LogoJsonLd logo={process.env.NEXT_PUBLIC_LOGO} url={process.env.NEXT_PUBLIC_URL} />
			<NextSeo
				title={webinar_data.PageSEO.PageTitle}
				description={webinar_data.PageSEO.PageDescription}
				canonical={webinar_data.PageSEO.CanonicalTag}
				openGraph={{
					url: `${webinar_data.PageSEO.PageURL}`,
					title: `${webinar_data.PageSEO.PageTitle}`,
					description: `${webinar_data.PageSEO.PageDescription}`,
					images: [
						{
							url: `${webinar_data.PageSEO.ThumbnailImageURL}`,
							width: 1920,
							height: 1080,
							alt: `${webinar_data.PageSEO.PageTitle}`,
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

			<Layout h_data={h_data} f_data={f_data}>
				{!webinar_data.IsOnDemandWebinar && (
					<section
						className={`relative py-20   overflow-hidden flex   justify-center bg-${webinar_data.CssStreamTag}-secondary`}
					>
						<div className="container px-3 mx-auto">
							<BreadCrumb color="black" b_data={breadcrumb} />
							<div className="max-w-3xl mx-auto  flex-col  text-center">
								<h2 className="my-10 heading font-bold font-heading text-black ">
									{webinar_data.WebinarThanksPage.PageHeader}
								</h2>
								<div className="max-w-md mx-auto">
									<p className="mb-10  subheading text-gray-600">
										{webinar_data.WebinarThanksPage.PageSubHeader}
									</p>
									<div className="flex space-x-6 items-center justify-center">
										<Link href="/webinars" passHref>
                      <a className=" uppercase inline-block py-3 px-10 bg-white hover:bg-gray-50 hover:text-black shadow text-lg text-black font-bold rounded-r-xl rounded-b-xl transition duration-200 hyperlink">
                        Return to Webinars
                      </a>
                    </Link>
										{/* <ICalendarLink
											event={event}
											className="text-black "
											onClick={() => {
												onClick({
													stream_score: resolve_stream_score(webinar_data.CssStreamTag),
													event_name: 'Button Click',
													section_name: 'Hero Section',
													page_source: `${webinar_data.PageSEO.PageTitle}`,
													label: `${webinar_data.WebinarThanksPage.CTAButton.buttonTitle}`,
												});
											}}
										>
											<div className=" uppercase inline-block py-3 px-10 bg-white hover:bg-gray-50 hover:text-black shadow text-lg text-black font-bold rounded-r-xl rounded-b-xl transition duration-200 hyperlink">
												{webinar_data.WebinarThanksPage.CTAButton.buttonTitle}
											</div>
										</ICalendarLink> */}
									</div>
								</div>
							</div>
						</div>
					</section>
				)}
				{/* On demand Webinar */}
				{webinar_data.IsOnDemandWebinar && (
					<div
						className={`relative py-24 text-center flex-col   overflow-hidden justify-center text-white  bg-${webinar_data.CssStreamTag}-secondary`}
					>
						<div className="mx-10 sm:mx-4 mb-4">
							<BreadCrumb color="black" b_data={breadcrumb} />
						</div>
						<section className="relative  text-center md:flex overflow-hidden justify-center items-center text-black  ">
							{/* <BreadCrumb color="black" b_data={breadcrumb}/> */}
							<div className="md:w-1/2 w-full ">
								<h1 className="heading mb-5">{webinar_data.OnDemandWebinar.PageHeader}</h1>
								<p className="subheading mb-10">{webinar_data.OnDemandWebinar.PageSubHeader}</p>
							</div>
							<div className="md:w-1/2 w-full">
								<Tabs className="md:px-5  pb-0  md:mx-auto flex flex-wrap flex-col ">
									<TabList className="flex md:w-1/2 mx-auto flex-wrap mb-5 text-center items-center justify-center ">
										<Tab className="cursor-pointer hyperlink uppercase text-black  sm:px-6 py-3 w-1/4 sm:w-auto justify-center sm:justify-start border-b-2 title-font  focus:bg-gray-100 inline-flex items-center leading-none border-gray-200  tracking-wider rounded-t ">
											{webinar_data.OnDemandWebinar.Video}
										</Tab>
										<Tab className="cursor-pointer hyperlink uppercase text-black sm:px-6 py-3 w-1/4 sm:w-auto justify-center sm:justify-start border-b-2 title-font  focus:bg-gray-100 inline-flex items-center leading-none border-gray-200  tracking-wider rounded-t ">
											{webinar_data.OnDemandWebinar.Slide}
										</Tab>
									</TabList>

									<TabPanel className="  flex justify-center px-2 items-center">
										<iframe
											width="100%"
											height="315"
											src={webinar_data.OnDemandWebinar.VideoURL}
											title="YouTube video player"
											frameBorder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
											allowFullScreen
										></iframe>
									</TabPanel>
									<TabPanel className="  justify-center items-center">
										<h2 className="">
											<iframe
												src={webinar_data.OnDemandWebinar.SlideURL}
												width="100%"
												height="315"
												frameBorder="0"
												marginWidth="0"
												marginHeight="0"
												scrolling="no"
												style={{
													border: '1px solid #CCC',
													borderWidth: '1px',
													marginBottom: '5px',
													maxWidth: '100%',
												}}
												allowFullScreen
											></iframe>
										</h2>
									</TabPanel>
								</Tabs>
							</div>
						</section>
						{/* <Link href="/" passHref>
          <a className=" uppercase inline-block py-3 px-10 bg-white hover:bg-gray-50 hover:textblack shadow text-lg text-black font-bold rounded-r-xl rounded-b-xl transition duration-200 hyperlink">
            Return Home
          </a>
        </Link> */}
					</div>
				)}

				{/* /On demand Webinar */}
				<section className="w-full mb-10 pt-8 bg-white sm:pt-12 md:pt-16">
					<div className="px-2 mx-auto max-w-7xl">
						<div className="flex justify-center w-full pb-5 mb-4 border-gray-200">
							<h2 className="section-heading  text-gray-800 ">{webinar_data.RelatedResourcesTitle}</h2>
						</div>

						<div className="grid md:grid-cols-4 gap-6 px-4 mb-6">
							{webinar_data.RelatedResources.map((data) => (
								<div
									key="data"
									className={`relative w-full h-full bg-white  space-y-3 shadow-lg  p-4  group overflow-hidden transition transform hover:-translate-y-3 duration-500 hover:border-black border-2 `}
								>
									<div className="bg-white">
										<Link href={data.CTAUrl} passHref>
											<a
												onClick={() => {
													onClick({
														stream_score: resolve_stream_score(webinar_data.CssStreamTag),
														event_name: 'Card Click',
														section_name: 'Related Resources Section',
														page_source: `${webinar_data.PageSEO.PageTitle}`,
														label: `${data.CTAText}`,
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
													stream_score: resolve_stream_score(webinar_data.CssStreamTag),
													event_name: 'Card Click',
													section_name: 'Related Resources Section',
													page_source: `${webinar_data.PageSEO.PageTitle}`,
													label: `${data.CTAText}`,
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
															stream_score: resolve_stream_score(webinar_data.CssStreamTag),
															event_name: 'Card Click',
															section_name: 'Related Resources Section',
															page_source: `${webinar_data.PageSEO.PageTitle}`,
															label: `${data.CTAText}`,
														});
													}}
													className="flex bg-white w-full inline-flex h-1/5 items-center   text-black hover:text-gray-400 group "
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
							))}
						</div>
						<div className="text-center">
							<Link href="/resources" passHref>
								<a
									onClick={() => {
										onClick({
											stream_score: resolve_stream_score('none'),
											event_name: 'Link Click',
											section_name: 'Related Resources Section',
											page_source: `${webinar_data.PageSEO.PageTitle}`,
											label: `${webinar_data.ViewAllResourcesTitle}`,
										});
									}}
									className="inline-flex items-center   text-white hover:text-gray-400 group "
								>
									<span className="hyperlink group-hover:text-gray-300">
										{webinar_data.ViewAllResourcesTitle}
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
			</Layout>
		</>
  );
}
// Return a list of possible value for webinar
// export const getStaticPaths = async () => {
//   // dynamic route array values must be acquired here from strapi
//     const data=[{webinar:'transforming-s4hana-upgrade-journey'},{webinar:'reimagining-sap-s4hana-conversion'},{webinar:'democratizing-sap-digital-transformation-as-a-service-dxaas'},{webinar:'manage-digital-transformation-effectively'},{webinar:'reimagining-sap-testing'}]

//     const paths = data.map(index => {
//         return ({
//             params:{webinar:index.webinar}
//         })
//     })
//     return {
//         paths,
//         fallback:true
//     }
// }
// Fetch necessary data for the blog post using params.webinar
export const getServerSideProps = async (ctx) => {
  // console.log("in features", params.webinar);
  // data url from strapi)
  const res = await fetch(
    `https://api.ktern.com/webinars?slug=${ctx.params.webinar}`,
    { method: "get" }
  );
  const data = await res.json();
  if(data[0]==undefined){
    ctx.res.setHeader('Location', '/404');
    ctx.res.statusCode = 302;
    ctx.res.end();
  }
  const res1 = await fetch("https://api.ktern.com/header", {
    method: "get",
  });
  const h_data = await res1.json();
  const res2 = await fetch('https://api.ktern.com/footer', {
		method: 'get',
	});
	const f_data = await res2.json();
  return {
    props: {
      webinar_data: data[0],
      h_data: h_data,
      f_data:f_data
    },
  };
};
