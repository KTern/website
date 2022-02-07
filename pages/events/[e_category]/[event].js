import Image from "next/image";
import Link from "next/link";
import Countdown from "react-countdown";
import Layout from "../../../component/Layout";
import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import image from "next/image";
import Head from "next/head";
import { Timeline } from "react-twitter-widgets";
import Markdown from "markdown-to-jsx";
import { useRouter } from "next/router";
import BreadCrumb from "../../../component/breadcrumb";
import ReactTooltip from "react-tooltip";
// SEO Tags
import { NextSeo } from "next-seo";
import { BreadcrumbJsonLd } from "next-seo";
import { LogoJsonLd } from "next-seo";
import { EventJsonLd } from 'next-seo';
const responsive = {
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
let events = [];

// Zoho check box validation
// function checkBoxSelected(e, t) {
//   var r = e.getAttribute("check"),
//     o = e.value ? e.value : "",
//     n = e.form;
//   if (n) {
//     var i = "#checkBoxValue_" + t,
//       a = n.querySelector(i);
//     if (
//       ("notChecked" == r
//         ? (e.setAttribute("check", "checked"),
//           e.setAttribute("checked", "checked"))
//         : (e.removeAttribute("checked"), e.setAttribute("check", "notChecked")),
//       "checked" != r)
//     ) {
//       a && "" == a.value ? (a.value += o) : a && (a.value += ";" + o);
//     } else {
//       var c = a.value.split(";"),
//         l = o;
//       c.splice(c.indexOf(l), 1), (a.value = c.join(";"));
//     }
//   }
//   // console.log(e.value)
//   if (events.includes(e.value)) events.splice(events.indexOf(e.value), 1);
//   else events.push(e.value);
// }
export default function Events({ h_data, f_data, data }) {
  const router = useRouter();
  console.log(router.query.message);
 
  
  let breadcrumb = [];
	data.PageSEO.BreadCrumb.map((dt) => {
	  breadcrumb.push({ position: dt.position, name: dt.name, item: dt.item });
	});
  let performers=[]
  data.speakers.speakersList.map((dt)=>{
      performers.push({name:dt.speakerName})
  })
  const [countDownState, setCountDownState] = useState(false);
  // Count down renderer

  // @refresh reset
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    // console.log(completed)

    if (completed) setCountDownState(true);
    return (
      <div className="flex md:space-x-4  ">
        <div className="flex flex-col items-center uppercase text-white  font-bold text-sm">
          <span className="h-16 w-16 items-center bg-white bg-opacity-10 flex justify-center  border border-white  text-white shadow-xl rounded-full text-2xl font-bold  mb-2">
            {days}
          </span>
          <p className="events-bg px-2 py-1 rounded-lg text-black shadow-xl  font-bold">
            Days
          </p>
        </div>

        <span className="items-center mb-10 flex justify-center text-white text-3xl">
          :
        </span>
        <div className="flex flex-col items-center uppercase text-white  font-bold text-sm">
          <span className="h-16 w-16 items-center bg-white bg-opacity-10 flex justify-center  border border-white  text-white shadow-xl rounded-full text-2xl font-bold  mb-2">
            {hours}
          </span>
          <p className="events-bg px-2 py-1 rounded-lg text-black shadow-xl  font-bold">
            Hours
          </p>
        </div>
        <span className="items-center mb-10 flex justify-center text-white text-3xl">
          :
        </span>
        <div className="flex flex-col items-center uppercase text-white  font-bold text-sm">
          <span className="h-16 w-16 items-center bg-white bg-opacity-10 flex justify-center  border border-white  text-white shadow-xl rounded-full text-2xl font-bold  mb-2">
            {minutes}
          </span>
          <p className="events-bg px-2 py-1 rounded-lg text-black shadow-xl  font-bold">
            Minutes
          </p>
        </div>
        <span className="items-center mb-10 flex justify-center text-white text-3xl">
          :
        </span>
        <div className="flex flex-col items-center uppercase text-white  font-bold text-sm">
          <span className="h-16 w-16 items-center bg-white bg-opacity-10 flex justify-center  border border-white  text-white shadow-xl rounded-full text-2xl font-bold  mb-2">
            {seconds}
          </span>
          <p className="events-bg px-2 py-1 rounded-lg text-black shadow-xl  font-bold">
            Seconds
          </p>
        </div>
      </div>
    );
  };
  // Message Container on Form Submission
  const [thanksState,setThanksState]=useState(false)
  
  useEffect(() => {
    if (router.query.message == 'thanks') {
      setThanksState(true);
  }
    if (countDownState) {
      window.addEventListener("click", validateForm);
    }
    window.addEventListener("popstate", () => {
      router.reload();
      setCountDownState(false);
    });
  }, []);
  // Form checkbox Validation
  function validateForm() {
    if (events.length > 0) {
      document.getElementById("eventsField").setCustomValidity("");
      document.getElementById("zcWebOptin").disabled = false;
    } else {
      document
        .getElementById("eventsField")
        .setCustomValidity("Please select atleast one event");
    }
  }
  return (
    <>
      <body className="">
      <LogoJsonLd logo={process.env.NEXT_PUBLIC_LOGO} url={process.env.NEXT_PUBLIC_URL} />
      <NextSeo
        title={data.PageSEO.PageTitle}
        description={data.PageSEO.PageDescription}
        canonical={data.PageSEO.CanonicalTag}
        openGraph={{
          url: `${data.PageSEO.PageURL}`,
          title: `${data.PageSEO.PageTitle}`,
          description: `${data.PageSEO.PageDescription}`,
          images: [
            {
              url: `${data.PageSEO.ThumbnailImageURL}`,
              width: 1920,
              height: 1080,
              alt: `${data.PageSEO.PageTitle}`,
              type: "image/png",
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
            property: "dc:creator",
            content: "Nivedha",
          },
          {
            name: "application-name",
            content: "KTern.AI",
          },
          {
            httpEquiv: "x-ua-compatible",
            content: "IE=edge; chrome=1",
          },
        ]}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "https://storage.googleapis.com/ktern-public-files/website/icons/favicon.ico",
          },
          {
            rel: "apple-touch-icon",
            href: "https://storage.googleapis.com/ktern-public-files/website/icons/apple-touch-icon-76x76.png",
            sizes: "76x76",
          },
          {
            rel: "manifest",
            href: "/manifest.json",
          },
        ]}
      />
      <BreadcrumbJsonLd itemListElements={breadcrumb} />
      <EventJsonLd
      name={data.EventsSEO.EventName}
      startDate={data.EventsSEO.StartDate}
      endDate={data.EventsSEO.EndDate}
      location={{
        type:`${data.EventsSEO.Location}`,
        name: `${data.EventsSEO.Location}`,
        sameAs: `${data.EventsSEO.WebUrl}`,
        address: {
        },
      }}
      performers={performers}
      url={data.EventsSEO.WebUrl} 
    />
        <Layout h_data={h_data} f_data={f_data} className="events">
          {/* Hero Section */}
          <section className="overflow-hidden  pt-4">
            <div className="  bg-roadshowbg bg-cover rounded-b-9xl pb-6 overflow-auto  shadow-xl ">
              <div className=" px-4 mx-auto pb-5">
              <div className="mx-28 mt-10">
                    <BreadCrumb
                      color={"white"}
                      b_data={breadcrumb}
                    />
                  </div>
                <div className="relative flex flex-col items-center justify-center pt-2 z-20 mb-16 xl:mb-0">
                 
                  <span className="block mb-4 mt-10 text-center  tracking-wide heading text-white">
                    {data.heroSection.header}
                  </span>
                  <h1 className="max-w-xl mb-6 mx-auto  text-center text-white subheading  leading-tight">
                    {data.heroSection.subHeading}
                  </h1>
                  {!countDownState && (
                    <Countdown
                      renderer={renderer}
                      date={data.eventDate}
                      className="mb-4"
                    />
                  )}
                  {countDownState && (
                    <div className="text-black text-lg font-bold uppercase live-text p-3 rounded-md ">
                      {data.alternateBannerText}
                    </div>
                  )}
                  <div className="flex space-x-4 mt-10">
                    <Link
                      href={`#${data.heroSection.primaryCTA.linkURL}`}
                      passHref
                    >
                      <a
                        className={`inline-block py-3 px-10  bg-black border-2 border-white text-white hover:bg-secondary hover:text-black shadow text-black  rounded-r-xl rounded-b-xl transition duration-200 uppercase border-2 border-black  hyperlink button`}
                      >
                        {data.heroSection.primaryCTA.buttonTitle}
                      </a>
                    </Link>
                    {!countDownState && (
                      <Link
                        href={`#${data.heroSection.secondaryCTA.linkURL}`}
                        passHref
                      >
                        <a
                          className={`inline-block py-3 px-10  bg-white text-black hover:bg-secondary hover:text-black shadow text-black  rounded-r-xl rounded-b-xl transition duration-200 uppercase border-2 border-black  hyperlink button`}
                        >
                          {data.heroSection.secondaryCTA.buttonTitle}
                        </a>
                      </Link>
                    )}
                    {countDownState && (
                      <Link
                        href={`#${data.alternateCta.CTAButtonLink}`}
                        passHref
                      >
                        <a
                          className={`inline-block py-3 px-10  bg-white text-black hover:bg-secondary hover:text-black shadow text-black  rounded-r-xl rounded-b-xl transition duration-200 uppercase border-2 border-black  hyperlink button`}
                        >
                          {data.alternateCta.CTAButtonText}
                        </a>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* /Hero Section */}
          {/* Logos Section */}
          <div className="px-4 pt-14">
						<div className=" px-4 mx-auto">
							<h2 className=" text-center  text-gray-500 section-heading sm:text-xl">
								{data.TrustedByStatement}
							</h2>
							{/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. ab repudiandae et.</p> */}
						</div>
						   <Carousel className='bots flex p-6  z-10' responsive={responsive}>
            {data.TrustedByLogos.map((dt) => (
              <div key='dt' className='p-3 bots-card flex-row'>
                <Image priority
                  className=' w-auto lg:w-100'
                  src={dt.logoUrl}
                  alt={dt.altText}
                  width={dt.width}
                  height={dt.height}
                  layout=''
                />
              </div>
            ))}
          </Carousel>
					</div>
          {/* Logos Section */}
          {/* Speakers Section */}
          <section className="pb-10 sm:px-6 pt-5 events">
            <div className="container mx-auto text-center ">
              <div className=" mx-auto mb-8">
                <span className="inline-block py-1 px-3 hyperlink bg-blue-100 text-gray-600 text-sm rounded-xl">
                  {data.speakers.tag}
                </span>
                <h2 className="section-heading mt-2 mb-4 ">
                  {data.speakers.heading}
                </h2>
                <p className="text-sky-700 leading-loose section-subheading">
                  {data.speakers.subHeading}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-2 md:flex md:items-center md:justify-center md:space-x-4 mx-auto">
               
                {data.speakers.speakersList.map((dt) => (
                  <div key="dt" className=" px-5 mb-4" >
                    <Image
                      priority
                      width={dt.imageWidth}
                      height={dt.imageHeight}
                      className="h-16 w-16 mx-auto rounded-full object-cover object-top"
                      src={dt.imageUrl}
                      alt={dt.imageAlt}
                    />
                  
                    <p className="mt-6 mb-2 text-md">{dt.speakerName}</p>
                    <p className="text-gray-600 text-sm">{dt.designation}</p>
                     {/* <ReactTooltip
            id="main"
            place="right"
            type="dark"
            effect="solid"
            multiline={true}
          /> */}
                  </div>
                  
                ))}
              </div>
            </div>
          </section>
          {/*/ Speakers Section */}
          {/* Featured Events */}
          {data.ToggleFeaturedEvents && <section
            id={data.heroSection.primaryCTA.linkURL}
            className="anchor events"
          >
            <section className=" md:px-10 py-10 bg-eventsbg bg-cover  mx-5">
              <svg
                className="absolute -mt-20 hidden lg:block"
                width="320"
                height="380"
                viewBox="0 0 1920 1080"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1347,578.9999999999999C1342.571923275551,688.9403392132672,1219.9546011784512,865.4225877905782,1136.7267807814264,914.882508860439C1053.4989603844017,964.3424299302998,902.3137668478092,929.5732778959044,847.6330776178515,875.7595264191646C792.9523883878938,821.9457749424247,818.8314916713223,701.9198421397215,808.6426454016803,592C798.4537991320383,482.0801578602785,727.391234045593,272.367061317363,786.4999999999998,216.24047358083556C845.6087659544065,160.11388584430813,1069.8785744614543,194.78055251097467,1163.295241128121,255.24047358083538C1256.7119077947877,315.7003946506961,1351.428076724449,469.05966078673265,1347,578.9999999999999C1342.571923275551,688.9403392132672,1219.9546011784512,865.4225877905782,1136.7267807814264,914.882508860439"
                  fill="#f0f9ff"
                />
              </svg>
              <div className="flex z-10 flex-col px-4 mx-auto overflow-hidden">
                <h2 className=" text-center  text-black section-heading mb-6">
                  {data.featuredEventsHeading}
                </h2>
                <p className="section-subheading text-center text-skys-700">
                  {data.featuredEventsSubHeading}
                </p>
              </div>
              <Carousel
                className=" flex py-5   z-10 -mx-4 overflow-hidden "
                responsive={responsive}
              >
                {data.events.map((data) => (
                  <div
                    key="data"
                    className="h-full w-80 relative flex  px-2  group  false transition transform hover:-translate-y-1 duration-500"
                  >
                    {data.OpenNewTab && (
                      <div
                        className={`relative  bg-white flex-col p-5 px-5  group overflow-hidden false rounded-xl shadow-lg `}
                      >
                        <div className="bg-white">
                          <Link href={data.CTAUrl} passHref>
                            <a
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
                          <a className="bg-white">
                            <span className="bg-white block text-md mb-2 font-bold leading-tight text-gray-700  hover:text-gray-900 ">
                              {data.CardTitle}
                            </span>
                            <span className="bg-white block card-subheading h-1/5  leading-tight text-gray-700  hover:text-gray-900 ">
                              {data.CardDescription}
                            </span>
                            <Link href={data.CTAUrl} passHref>
                              <a
                                target="_blank"
                                className="mb-6 flex bg-white w-full inline-flex h-1/5 items-center   text-black hover:text-gray-400 group "
                              >
                                <span className="hyperlink group-hover:text-gray-300">
                                  {data.CTAText}
                                </span>
                                <svg
                                  className="w-5 h-6 mt-1 ml-2  group-hover:text-gray-300"
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
                        className={`relative bg-white flex-col p-5 px-5  group overflow-hidden false rounded-xl  shadow-lg`}
                      >
                        <div className="bg-white">
                          <Link href={data.CTAUrl} passHref>
                            <a className="relative h-3/5 w-full block w-full h-44 overflow-hidden rounded">
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
                          <a className="bg-white">
                          <span className="bg-white block text-md mb-2 font-bold leading-tight text-gray-700  hover:text-gray-900 ">
                              {data.CardTitle}
                            </span>
                            <span className="bg-white block card-subheading  leading-tight text-gray-700  hover:text-gray-900 ">
                              {data.CardDescription}
                            </span>
                            <Link href={data.CTAUrl} passHref>
                              <a className="mb-6 flex bg-white w-full inline-flex h-1/5 items-center   text-black hover:text-gray-400 group ">
                                <span className="hyperlink group-hover:text-gray-300">
                                  {data.CTAText}
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
                          </a>
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </Carousel>
            </section>
          </section>}
          {/* /Featured Events */}
          {/* Video Banner */}
          {countDownState && (
            <section
              id={data.alternateCta.CTAButtonLink}
              className="anchor events py-10 text-center justify-center items-center flex flex-col"
            >
              <h2 className="section-heading mb-3">
                {data.eventVideo.heading}
              </h2>
              <p className="section-subheading mb-6 text-center">
                {data.eventVideo.subHeading}
              </p>
              <div className="justify-center overflow-hidden bg-gradient-to-r from-sky-900 via-black to-sky-300 h-full w-full flex flex-wrap">
                <div>
                  <iframe
                    className="hidden lg:block"
                    style={{
                      height: "calc(89vh - 100px)",
                      width: "calc(130vh)",
                    }}
                    src={data.eventVideo.videoUrl}
                    title={data.eventVideo.heading}
                    frameBorder="0"
                    scrolling="no"
                    allow="accelerometer;loop; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <iframe
                    className="lg:hidden block"
                    style={{
                      height: "calc(59vh - 100px)",
                      width: "calc(60vh)",
                    }}
                    src={data.eventVideo.videoUrl}
                    title={data.eventVideo.heading}
                    frameBorder="0"
                    scrolling="no"
                    allow="accelerometer;loop; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </section>
          )}
          {/* /Video Banner */}
          {/* Register Section */}
          {!countDownState && (
            <section
              id={data.heroSection.secondaryCTA.linkURL}
              className="anchor events"
            >
              <section className="py-5 pb-10 px-5">
                <div className="flex flex-col items-center justify-center text-center">
                  <p className="section-heading mb-2">
                    {data.registerSection.header}
                  </p>
                  <p className="section-subheading max-w-2xl text-gray-700 text-center mb-2">
                    {data.registerSection.subHeading}
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-1 ">
                  <div className="bg-sky-100 rounded-b-xl10 rounded-tr-xl10 flex flex-col items-center justify-center mb-4  md:mx-24 md:px-12 py-5">
                    <div className="h-100  w-auto bg-white my-10 shadow-2xl rounded-xl transform translate-10 ">
                      <Image
                        priority
                        src={data.registerSection.ImageURL}
                        height={data.registerSection.ImageWidth}
                        width={data.registerSection.ImageHeight}
                        alt="Forming ideas"
                      />
                    </div>
                  </div>
                  <div className="md:mx-16">
                    <div className=" relative z-10 h-auto p-8  overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                      <h3 className="mb-6 card-heading  text-center">
                        {data.form.title}
                      </h3>
                      {thanksState &&
                       <div
                id="thanks_container"
                className="block  mb-5 bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
                role="alert"
              >
                <div className="flex ">
                  <div className="py-1 pr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold card-subheading">
                     { data.form.ThanksMessage}
                    </p>
                  </div>
                </div>
              </div>}
                      <form
                        method="POST"
                        id="zcampaignOptinForm"
                        className="relative w-full mt-2 space-y-10"
                        action="https://kter.maillist-manage.in/weboptin.zc"
                      
                      >
                        <div id="SIGNUP_BODY_ALL" name="SIGNUP_BODY_ALL">
                          <div id="SIGNUP_BODY" name="SIGNUP_BODY">
                            <div>
                              <div>
                                <div
                                  name="fieldsdivSf"
                                  className="flex-col space-y-5"
                                >
                                  <div
                                    className="zcsffield "
                                    fieldid="71738000000000023"
                                  >
                                    <div>
                                      <label
                                        className="absolute px-2 ml-2 -mt-3 card-subheading font-bold text-black bg-white"
                                        htmlFor="CONTACT_EMAIL"
                                      >
                                        {data.form.email}
                                      </label>
                                      <input
                                        required
                                        className="block w-full px-4 py-4 mt-2  placeholder-gray-400 bg-white border-2 border-gray-400 rounded-md focus:outline-none focus:border-black"
                                        maxLength="100"
                                        placeholder="Business Email"
                                        name="CONTACT_EMAIL"
                                        changeitem="SIGNUP_FORM_FIELD"
                                        type="email"
                                      />
                                    </div>
                                    <div></div>
                                  </div>
                                  <div
                                    className="zcsffield "
                                    fieldid="71738000000000029"
                                  >
                                    <div>
                                      <label
                                        className="absolute px-2 ml-2 -mt-3 card-subheading font-bold text-black bg-white"
                                        htmlFor="FIRSTNAME"
                                      >
                                        {data.form.name}
                                      </label>
                                      <input
                                        required
                                        className="block w-full px-4 py-4 mt-2  placeholder-gray-400 bg-white border-2 border-gray-400 rounded-md focus:outline-none focus:border-black"
                                        maxLength="100"
                                        placeholder="Full Name"
                                        name="FIRSTNAME"
                                        changeitem="SIGNUP_FORM_FIELD"
                                        type="text"
                                      />
                                    </div>
                                    <div></div>
                                  </div>
                                  {/* <div
                                    className="zcsffield "
                                    fieldid="71738000002653048"
                                  >
                                    <div>
                                      <label
                                        className="absolute px-2 ml-2 -mt-3 card-subheading font-bold text-black bg-white"
                                        title="Events"
                                      >
                                        {data.form.events}
                                      </label>

                                      <div className="  block w-full px-4 py-4 mt-2  placeholder-gray-400 bg-white border-2 border-gray-400 rounded-md focus:outline-none focus:border-black">
                                        {data.form.eventsList.map((dt) => (
                                          <div
                                            key="dt"
                                            className="flex space-x-2 items-center"
                                          >
                                            <input
                                              id="eventsField"
                                              name="checkbox-group"
                                              type="checkbox"
                                              names="CONTACT_CF7"
                                              multi="true"
                                              zc_display_name=""
                                              onClick={(e) =>
                                                checkBoxSelected(
                                                  e.target,
                                                  "CONTACT_CF7"
                                                )
                                              }
                                              check="notChecked"
                                              value={dt.eventValue}
                                            />
                                            <p className="text-sm ">
                                              {" "}
                                              {dt.eventName}
                                            </p>
                                          </div>
                                        ))}
                                      </div>
                                      <input
                                        type="hidden"
                                        id="checkBoxValue_CONTACT_CF7"
                                        name="CONTACT_CF7"
                                        value=""
                                      />
                                      <div></div>

                                      <div></div>
                                    </div>
                                    <div></div>
                                  </div> */}
                                  <div className="zcwf_col_fld">
                                    <input
                                      type="checkbox"
                                      id="privacy"
                                      value="true"
                                      required
                                    />
                                    <label>
                                      {" "}
                                      <Markdown
                                        options={{
                                          overrides: {
                                            p: {
                                              props: {
                                                className:
                                                  "card-subheading text-justify",
                                              },
                                            },
                                            strong: {
                                              props: {
                                                className: "",
                                              },
                                            },
                                            a:{
                                              props:{
                                                className:"text-blue-800"
                                              }
                                        }
                                          },
                                        }}
                                        className=""
                                      >
                                        {data.form.PrivacyStatement}
                                      </Markdown>
                                    </label>
                                  </div>
                                </div>
                                <input
                                  type="hidden"
                                  id="secretid"
                                  value="6LdNeDUUAAAAAG5l7cJfv1AA5OKLslkrOa_xXxLs"
                                />
                                <div></div>

                                <div className="mt-5">
                                  <input
                                    type="submit"
                                    action="Save"
                                    id="zcWebOptin"
                                    name="SIGNUP_SUBMIT_BUTTON"
                                    changetype="SIGNUP_SUBMIT_BUTTON_TEXT"
                                    value={data.form.submitButton}
                                    className="cursor-pointer  inline-block w-full button px-5 py-4 uppercase hyperlink text-center text-white transition duration-200 bg-black 
                                  rounded-r-xl rounded-b-xl transition duration-200 hover:bg-gray-500 ease"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <input type="hidden" id="fieldBorder" value="" />
                          <input
                            type="hidden"
                            name="zc_trackCode"
                            id="zc_trackCode"
                            value="ZCFORMVIEW"
                            onLoad=""
                          />
                          <input
                            type="hidden"
                            name="viewFrom"
                            id="viewFrom"
                            value="URL_ACTION"
                          />
                          <input
                            type="hidden"
                            id="submitType"
                            name="submitType"
                            value="optinCustomView"
                          />
                          <input
                            type="hidden"
                            id="lD"
                            name="lD"
                            value="1fedd54b70d1dcd"
                          />
                          <input
                            type="hidden"
                            name="emailReportId"
                            id="emailReportId"
                            value=""
                          />
                          <input
                            type="hidden"
                            name="zx"
                            id="cmpZuid"
                            value="1df8f43af3"
                          />
                          <input type="hidden" name="zcvers" value="2.0" />
                          <input
                            type="hidden"
                            name="oldListIds"
                            id="allCheckedListIds"
                            value=""
                          />
                          <input
                            type="hidden"
                            id="mode"
                            name="mode"
                            value="OptinCreateView"
                          />
                          <input
                            type="hidden"
                            id="zcld"
                            name="zcld"
                            value={data.form.mailingListId}
                          />
                          <input
                            type="hidden"
                            id="zctd"
                            name="zctd"
                            value=""
                          />
                          <input type="hidden" id="document_domain" value="" />
                          <input
                            type="hidden"
                            id="zc_Url"
                            value="kter.maillist-manage.in"
                          />
                          <input
                            type="hidden"
                            id="new_optin_response_in"
                            value="0"
                          />
                          <input
                            type="hidden"
                            id="duplicate_optin_response_in"
                            value="0"
                          />
                          <input
                            type="hidden"
                            id="zc_formIx"
                            name="zc_formIx"
                            value={data.form.formId}
                          />
                        </div>
                        <input
                          type="hidden"
                          id="scriptless"
                          name="scriptless"
                          value="yes"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </section>
          )}
          {/*/ Register Section */}
          {/* Access Report */}
          <section className="relative bg-white py-20  events overflow-hidden">
            <div className="hidden md:block absolute top-0 right-0 w-1/2 h-full  rounded-b-10xl"></div>
            <div className="relative  mx-auto">
              <div className="flex flex-wrap items-center text-center">
                <div className="w-full md:w-1/2 px-6 md:px-20">
                  <h2 className="mt-8 mb-8 section-heading leading-tight">
                    {data.accessReportSection.CardTitle}
                  </h2>
                  <p className="mb-10 section-subheading text-darkBlueGray-400">
                    {data.accessReportSection.CardDescription}
                  </p>
                  {data.accessReportSection.OpenNewTab && <Link href={data.accessReportSection.CTAUrl} passHref>
                    <a
                      target="_blank"
                      className={`inline-block mb-10 md:mb-0 py-3 px-10  bg-black border-2 border-white text-white hover:bg-secondary hover:text-black shadow text-black  rounded-r-xl rounded-b-xl transition duration-200 uppercase border-2 border-black  hyperlink button`}
                    >
                      {data.accessReportSection.CTAText}
                    </a>
                  </Link>}
                  {!data.accessReportSection.OpenNewTab && <Link href={data.accessReportSection.CTAUrl} passHref>
                    <a
                      className={`inline-block mb-10 md:mb-0 py-3 px-10  bg-black border-2 border-white text-white hover:bg-secondary hover:text-black shadow text-black  rounded-r-xl rounded-b-xl transition duration-200 uppercase border-2 border-black  hyperlink button`}
                    >
                      {data.accessReportSection.CTAText}
                    </a>
                  </Link>}
                </div>
                <div className="relative w-full md:w-1/2 px-10   ">
                  <div className="md:hidden absolute bottom-0 left-0 h-full w-full rounded-b-xl10 "></div>
                  <div className="flex items-center justify-center  p-5 shadow-2xl rounded-tr-xl10 rounded-b-xl10">
                    <Image
                      priority
                      className="relative z-10 "
                      src={data.accessReportSection.Icon.imageURL}
                      alt={data.accessReportSection.Icon.imageDescription}
                      width={data.accessReportSection.Icon.width}
                      height={data.accessReportSection.Icon.height}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* /Access Report */}
          {/* Featured Articles */}
          <section className="events px-10 md:px-20 md:mx-20 mb-10 flex flex-col items-center justify-center ">
            <h2 className="section-heading mb-4 ">
              {data.featuredArticlesSectionHeading}
            </h2>
            <p className="section-subheading mb-10 text-center">
              {data.featureArticlesSectionSubheading}
            </p>
            <div className="grid lg:grid-cols-6 sm:grid-rows-2 gap-y-4  lg:gap-8 lg:mb-10">
              <div className="lg:col-span-4 flex flex-col items-center justify-center rounded-xl10 shadow-xl">
                {data.featuredArticles[0].OpenNewTab && <Link href={data.featuredArticles[0].CTAUrl} passHref>
                  <a
                    target="_blank"
                    className="relative  h-full w-full block w-full h-44 overflow-hidden rounded-xl"
                  >
                    <div className="hidden lg:block">
                      <Image
                        priority
                        className="bg-secondary  object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105"
                        src={data.featuredArticles[0].Icon.imageURL}
                        alt={data.featuredArticles[0].Icon.imageDescription}
                        width={data.featuredArticles[0].Icon.width}
                        height={data.featuredArticles[0].Icon.height}
                      />
                    </div>
                    <div className="lg:hidden block">
                      <Image
                        priority
                        className="bg-secondary  object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105"
                        src={data.featuredArticles[0].Icon.imageURL}
                        alt={data.featuredArticles[0].Icon.imageDescription}
                        width="650"
                        height="470"
                      />
                    </div>
                    <div className="px-4 ">
                      <p className="md:text-lg text-md font-semibold  mb-2">
                        {data.featuredArticles[0].CardTitle}
                      </p>
                    </div>
                  </a>
                </Link>}
                {!data.featuredArticles[0].OpenNewTab && <Link href={data.featuredArticles[0].CTAUrl} passHref>
                  <a
                    className="relative  h-full w-full block w-full h-44 overflow-hidden rounded-xl"
                  >
                    <div className="hidden lg:block">
                      <Image
                        priority
                        className="bg-secondary  object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105"
                        src={data.featuredArticles[0].Icon.imageURL}
                        alt={data.featuredArticles[0].Icon.imageDescription}
                        width={data.featuredArticles[0].Icon.width}
                        height={data.featuredArticles[0].Icon.height}
                      />
                    </div>
                    <div className="lg:hidden block">
                      <Image
                        priority
                        className="bg-secondary  object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105"
                        src={data.featuredArticles[0].Icon.imageURL}
                        alt={data.featuredArticles[0].Icon.imageDescription}
                        width="650"
                        height="470"
                      />
                    </div>
                    <div className="px-4 ">
                      <p className="md:text-lg text-md font-semibold  mb-2">
                        {data.featuredArticles[0].CardTitle}
                      </p>
                    </div>
                  </a>
                </Link>}
              </div>

              <div className="lg:col-span-2  flex flex-col items-center justify-center rounded-xl10 shadow-xl">
                {data.featuredArticles[1].OpenNewTab && <Link href={data.featuredArticles[1].CTAUrl} passHref>
                  <a
                    target="_blank"
                    className="relative h-full w-full block w-full h-44 overflow-hidden rounded-xl"
                  >
                    <Image
                      priority
                      className="bg-secondary  object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105 "
                      src={data.featuredArticles[1].Icon.imageURL}
                      alt=""
                      width={data.featuredArticles[1].Icon.width}
                      height={data.featuredArticles[1].Icon.height}
                    />
                    <p className="text-md mb-4 font-semibold px-4">
                      {data.featuredArticles[1].CardTitle}
                    </p>
                  </a>
                </Link>}
                {!data.featuredArticles[1].OpenNewTab && <Link href={data.featuredArticles[1].CTAUrl} passHref>
                  <a
                   
                    className="relative h-full w-full block w-full h-44 overflow-hidden rounded-xl"
                  >
                    <Image
                      priority
                      className="bg-secondary  object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105 "
                      src={data.featuredArticles[1].Icon.imageURL}
                      alt=""
                      width={data.featuredArticles[1].Icon.width}
                      height={data.featuredArticles[1].Icon.height}
                    />
                    <p className="text-md mb-4 font-semibold px-4">
                      {data.featuredArticles[1].CardTitle}
                    </p>
                  </a>
                </Link>}
              </div>
            </div>
            <div className="grid sm:grid-rows-3 lg:grid-cols-3 gap-y-4  lg:gap-8">
              {data.featuredArticles.map((dt, index) => {
                return index > 1 ? (
                  <div
                    key="dt"
                    className=" flex items-center justify-center rounded-xl shadow-xl"
                  >
                    {dt.OpenNewTab && <Link href={dt.CTAUrl} passHref>
                      <a
                        target="_blank"
                        className="relative h-full w-full block w-full h-44 overflow-hidden rounded-xl"
                      >
                        <Image
                          priority
                          className="bg-secondary  object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105 "
                          src={dt.Icon.imageURL}
                          alt={dt.Icon.imageDescription}
                          width={dt.Icon.width}
                          height={dt.Icon.height}
                        />
                        <p className="text-md mb-4 font-semibold px-4">
                          {dt.CardTitle}
                        </p>
                      </a>
                    </Link>}
                    {!dt.OpenNewTab && <Link href={dt.CTAUrl} passHref>
                      <a
                        className="relative h-full w-full block w-full h-44 overflow-hidden rounded-xl"
                      >
                        <Image
                          priority
                          className="bg-secondary  object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105 "
                          src={dt.Icon.imageURL}
                          alt={dt.Icon.imageDescription}
                          width={dt.Icon.width}
                          height={dt.Icon.height}
                        />
                        <p className="text-md mb-4 font-semibold px-4">
                          {dt.CardTitle}
                        </p>
                      </a>
                    </Link>}
                  </div>
                ) : (
                  <></>
                );
              })}
            </div>
          </section>
          {/* /Featured Articles */}
          {/* Discussions Section */}
          <section className="events py-20 grid lg:grid-cols-4 text-center sm:grid-rows-4 px-10">
            <div className="lg:hidden block  flex flex-col px-10">
              <h2 className="section-heading mb-4 mt-5">
                {data.discussionSection.heading}
              </h2>
              <p className="section-subheading text-gray-400">
                {data.discussionSection.subHeading}
              </p>
              <Image
              priority
                height={350}
                width={300}
                alt={data.discussionSection.image.imageDescription}
                src={data.discussionSection.image.imageURL}
              />
            </div>
            <div className="border border-gray-100">
              <Timeline
                className="col-span-1"
                dataSource={{
                  sourceType: "profile",
                  screenName: `${data.discussionSection.twitterScreenName}`,
                }}
                options={{
                  height: "400",
                }}
              />
            </div>
            {data.discussionSection.linkedIn.map((dt) => (
              <div key="dt" className="grid grid-rows-8 ">
                <iframe
                  className=" row-span-4 mb-2  h-full w-full  border-gray-100"
                  src={`${dt.postId}`}
                  scrolling="yes"
                  frameBorder="0"
                  allowFullScreen=""
                  title="Embedded post"
                />
                <Link href={dt.redirectUrl} passHref>
                  <a
                    target="_blank"
                    className="row-span-1 sm:border-l flex items-center justify-center text-xs text-sky-700 border-t border-r border-b"
                  >
                    View on LinkedIn
                  </a>
                </Link>
              </div>
            ))}

            <div className="hidden lg:block flex flex-col px-10">
              <h2 className="section-heading mb-4 mt-5">
                {data.discussionSection.heading}
              </h2>
              <p className="section-subheading text-gray-400">
                {data.discussionSection.subHeading}
              </p>
              <Image
              priority
                height={data.discussionSection.image.height}
                width={data.discussionSection.image.width}
                alt={data.discussionSection.image.imageDescription}
                src={data.discussionSection.image.imageURL}
              />
            </div>
          </section>
          {/* /Discussions Section */}
        </Layout>
      </body>
    </>
  );
}
// export const getStaticPaths = async () => {
//   // dynamic route array values must be acquired here from strapi
//   const data = [{ e_category: "roadshow", event: "digital-roadshow-2022" }];
//   const paths = data.map((index) => {
//     return {
//       params: { e_category: index.e_category, event: index.event },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// };

export const getServerSideProps = async (ctx) => {
  const event_name = ctx.params.event;

  const res = await fetch(
    `https://api.ktern.com/events-libraries?eventSlug=${event_name}`,
    {
      method: "get",
    }
  );
  // console.log(res)

  const data = await res.json();
  if (data[0] == undefined) {
    ctx.res.setHeader("Location", "/404");
    ctx.res.statusCode = 302;
    ctx.res.end();
  }
  const res1 = await fetch("https://api.ktern.com/header", {
    method: "get",
  });
  const h_data = await res1.json();
  const res2 = await fetch("https://api.ktern.com/footer", {
    method: "get",
  });
  const f_data = await res2.json();
  return {
    props: {
      data: data[0],
      h_data: h_data,
      f_data: f_data,
    },
  };
};
