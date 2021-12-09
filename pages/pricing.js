import Image from "next/image";
import Link from "next/link";
import Layout from "../component/Layout";
import { NextSeo } from "next-seo";
import { BreadcrumbJsonLd } from "next-seo";
import { LogoJsonLd } from "next-seo";
import { SocialProfileJsonLd } from "next-seo";

import React, { useState, useRef, useEffect } from "react";
import { isPlainObject } from "lodash";
import Carousel from "react-multi-carousel";
import FAQ from "../component/faq";
import BreadCrumb from "../component/breadcrumb";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
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
let selectedOptions = ["maps", "projects", "process", "labs", "mines"];
let total = 10;
function handleClick(selectedOption) {
  if (!selectedOptions.includes(selectedOption)) {
    selectedOptions.push(selectedOption);
  } else {
    selectedOptions.splice(selectedOptions.indexOf(selectedOption), 1);
  }
  total = selectedOptions.length * 3;
  if (selectedOptions.length == 5) total = 10;
  // console.log(selectedOptions)
}
function handleTotal() {
  selectedOptions = ["maps", "projects", "process", "labs", "mines"];
  total = 10;
}
export default function Pricing({ data, h_data, f_data }) {
  let breadcrumb = [];
  data.PageSEO.BreadCrumb.map((dt) => {
    breadcrumb.push({ position: dt.position, name: dt.name, item: dt.item });
  });
  const [isMapsSelected, setIsMapsSelected] = useState(true);
  const [isProjectsSelected, setIsProjectsSelected] = useState(true);
  const [isProcessSelected, setIsProcessSelected] = useState(true);
  const [isLabsSelected, setIsLabsSelected] = useState(true);
  const [isMinesSelected, setIsMinesSelected] = useState(true);
  useEffect(() => {
    if (isMapsSelected) {
      if (process.browser)
        document.getElementById("maps").style.borderColor = "blue";
    } else {
      if (process.browser)
        document.getElementById("maps").style.borderColor = "gray";
    }
    if (isProjectsSelected) {
      if (process.browser)
        document.getElementById("projects").style.borderColor = "blue";
    } else {
      if (process.browser)
        document.getElementById("projects").style.borderColor = "gray";
    }
    if (isProcessSelected) {
      if (process.browser)
        document.getElementById("process").style.borderColor = "blue";
    } else {
      if (process.browser)
        document.getElementById("process").style.borderColor = "gray";
    }
    if (isLabsSelected) {
      if (process.browser)
        document.getElementById("labs").style.borderColor = "blue";
    } else {
      if (process.browser)
        document.getElementById("labs").style.borderColor = "gray";
    }
    if (isMinesSelected) {
      if (process.browser)
        document.getElementById("mines").style.borderColor = "blue";
    } else {
      if (process.browser)
        document.getElementById("mines").style.borderColor = "gray";
    }
  }, []);
  return (
    <>
      <NextSeo
        title="Simple Usage Example"
        description="A short description goes here."
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "https://www.url.ie/a",
          title: "Open Graph Title",
          description: "Open Graph Description",
          images: [
            {
              url: "https://www.example.ie/og-image-01.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
            {
              url: "https://www.example.ie/og-image-02.jpg",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
              type: "image/jpeg",
            },
            { url: "https://www.example.ie/og-image-03.jpg" },
            { url: "https://www.example.ie/og-image-04.jpg" },
          ],
          site_name: "SiteName",
        }}
        twitter={{
          handle: `${process.env.TWITTER_HANDLE}`,
          site: `${process.env.TWITTER_SITE}`,
          cardType: `${process.env.CARD_TYPE}`,
        }}
        facebook={{
          handle: `${process.env.FACEBOOK_HANDLE}`,
          site: `${process.env.FACEBOOK_SITE}`,
          cardType: `${process.env.CARD_TYPE}`,
          appId: `${process.env.FB_APPID}`,
        }}
        languageAlternates={[
          {
            hrefLang: "de",
            href: "https://www.canonical.ie/de",
          },
        ]}
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
            href: "https://www.test.ie/favicon.ico",
          },
          {
            rel: "apple-touch-icon",
            href: "https://www.test.ie/touch-icon-ipad.jpg",
            sizes: "76x76",
          },
          {
            rel: "manifest",
            href: "/manifest.json",
          },
        ]}
      />
      <BreadcrumbJsonLd
        itemListElements={breadcrumb}
      />
      <LogoJsonLd logo={process.env.LOGO} url={process.env.URL} />
      <SocialProfileJsonLd
        type="Person"
        name="your name"
        url="http://www.your-site.com"
        sameAs={[
          "http://www.facebook.com/your-profile",
          "http://instagram.com/yourProfile",
          "http://www.linkedin.com/in/yourprofile",
          "http://plus.google.com/your_profile",
        ]}
      />
      <Layout h_data={h_data} f_data={f_data}>
        {/* <!-- Main Pricing Section-->         */}
        <section className="overflow-hidden text-gray-700 ">
         
          <div className="container px-5 pt-32 pb-4 mx-auto">
            
            <div className="flex flex-col w-full mb-24 text-center">
            <BreadCrumb color="black" b_data={breadcrumb}/>
              <div className="relative mt-4 z-10 max-w-3xl px-12 mx-auto space-y-5 text-center lg:px-0">
                <h1 className="heading">{data.PageHeader.header}</h1>
                {/* <p className="mx-auto subheading ">Digital Transformation made simple</p> */}
              </div>
            </div>

            <div className="flex flex-row">
              <div className="md:w-3/5 w-full  mr-10">
                <div className="flex flex-wrap">
                  <div className="w-full mb-3">
                    <div
                      id="maps"
                      className="cursor-pointer relative flex flex-col justify-between h-full p-6 overflow-hidden border rounded-lg"
                    >
                      {isMapsSelected && (
                        <span className="absolute top-0 right-0 px-3 py-0 text-xs tracking-widest text-white bg-blue-600 rounded-bl">
                          Selected
                        </span>
                      )}
                      <details className="">
                        <summary className="">
                          <div className="flex flex-col w-full">
                            <div className="flex flex-row justify-between">
                              <div className=" flex flex-row ">
                                <span className="flex  w-10 h-8  mb-3 mr-0 bg-transparent rounded-lg">
                                  <Image
                                    src={data.PricingCard[0].StreamLogoURL}
                                    alt="Digital maps"
                                    height={40}
                                    width={30}
                                  />
                                </span>
                                <h2 className="mb-1 pr-2 card-heading">
                                  {data.PricingCard[0].StreamTitle}
                                </h2>
                              </div>

                              {isMapsSelected && (
                                <div className="flex flex-arrow ">
                                  <button
                                    id="hey"
                                    className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
                                    onClick={() => {
                                      setIsMapsSelected(false);
                                      handleClick("maps");
                                    }}
                                  >
                                    Unselect
                                  </button>
                                  <div id="arrow" className="mt-2"></div>
                                </div>
                              )}
                              {!isMapsSelected && (
                                <div className="flex flex-arrow ">
                                  <button
                                    id="hey"
                                    className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
                                    onClick={() => {
                                      setIsMapsSelected(true);
                                      handleClick("maps");
                                    }}
                                  >
                                    Select
                                  </button>
                                  <div id="arrow" className="mt-2"></div>
                                </div>
                              )}
                            </div>
                            <h1 className="flex items-center pb-0 card-heading text-gray-900  border-gray-200">
                              <span>${data.PricingCard[0].Price}K</span>
                              <span className="ml-1 text-lg font-normal text-gray-500">
                                /MO
                              </span>
                            </h1>
                            <p className="mt-3 card-subheading  pb-4   text-gray-500">
                              {data.PricingCard[0].StreamDescription}
                            </p>
                          </div>
                        </summary>
                        <div className="flex">
                          <div className=" justify-between pt-6 border-t w-1/2">
                            <h2 className="mb-3 text-lg font-bold  ">
                              Key Features
                            </h2>
                            {data.PricingCard[0].KeyFeatures.map((dt) => (
                              <Link key="dt" href={dt.PageUrl}>
                                <a className="flex items-center mb-2 text-gray-600 card-subheading">
                                  {" "}
                                  <svg
                                    className="w-5 h-5 mr-1 text-black"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    ></path>
                                  </svg>
                                  {dt.listItem}
                                </a>
                              </Link>
                            ))}
                          </div>
                          <div className="justify-between pt-6 border-t w-1/2">
                            <h2 className="mb-3 text-lg font-bold  ">Values</h2>
                            {data.PricingCard[0].Values.map((dt) => (
                              <p
                                key="dt"
                                className="flex items-center mb-2 text-gray-600 card-subheading"
                              >
                                {" "}
                                <svg
                                  className="w-5 h-5 mr-1 text-black"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                                {dt.listItem}
                              </p>
                            ))}
                          </div>
                        </div>
                        <div className="border-t border-b pt-5 mb-6 pb-2">
                          <div className="flex flex-row justify-between">
                            <h2 className="mb-3 text-lg font-bold  ">Bots</h2>
                          </div>
                          {data.PricingCard[0].Bots.map((dt) => (
                            <div
                              key="dt"
                              className="inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
                            >
                              {dt.listItem}
                            </div>
                          ))}
                        </div>
                        <div className="">
                          <div className="flex flex-row justify-between">
                            <h2 className="mb-1 text-lg font-bold ">Users</h2>
                          </div>

                          {data.PricingCard[0].Users.map((dt)=>( <p key="dt" className="flex items-center mb-2 text-gray-600 card-subheading ">
                            <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-white rounded-full">
                              <Image
                                src="https://static.thenounproject.com/png/925249-200.png"
                                alt=""
                                width={150}
                                height={150}
                              />
                            </span>
                            {dt.listItem}
                          </p>
                          ))}
                        </div>
                        <div className="w-full border-t">
                          {/* <button className="inline-flex items-center justify-center w-full px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"> 
                                        View All Features
                                        <div className="w-4 h-4 ml-2 relative"><Image layout="fill" src="/pricing/down-arrow-svgrepo-com.svg"  alt="down arrow"/></div>
                                    </button>
                                     */}
                          <p className="mt-3 text-xs text-center text-gray-500">
                           {data.PricingCard[0].ExtraText}
                          </p>
                        </div>
                      </details>
                    </div>
                  </div>
                  <div className="w-full mb-3">
                  <div
                      id="projects"
                      className="cursor-pointer relative flex flex-col justify-between h-full p-6 overflow-hidden border rounded-lg"
                    >
                      {isProjectsSelected && (
                        <span className="absolute top-0 right-0 px-3 py-0 text-xs tracking-widest text-white bg-blue-600 rounded-bl">
                          Selected
                        </span>
                      )}
                      <details className="">
                        <summary className="">
                          <div className="flex flex-col w-full">
                            <div className="flex flex-row justify-between">
                              <div className=" flex flex-row ">
                                <span className="flex  w-10 h-8  mb-3 mr-0 bg-transparent rounded-lg">
                                  <Image
                                    src={data.PricingCard[1].StreamLogoURL}
                                    alt="Digital maps"
                                    height={40}
                                    width={30}
                                  />
                                </span>
                                <h2 className="mb-1 pr-2 card-heading">
                                  {data.PricingCard[1].StreamTitle}
                                </h2>
                              </div>

                              {isProjectsSelected  && (
                                <div className="flex flex-arrow ">
                                  <button
                                    id="hey"
                                    className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
                                    onClick={() => {
                                      setIsProjectsSelected(false);
                                      handleClick("projects");
                                    }}
                                  >
                                    Unselect
                                  </button>
                                  <div id="arrow" className="mt-2"></div>
                                </div>
                              )}
                              {!isProjectsSelected  && (
                                <div className="flex flex-arrow ">
                                  <button
                                    id="hey"
                                    className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
                                    onClick={() => {
                                      setIsProjectsSelected(true);
                                      handleClick("projects");
                                    }}
                                  >
                                    Select
                                  </button>
                                  <div id="arrow" className="mt-2"></div>
                                </div>
                              )}
                            </div>
                            <h1 className="flex items-center pb-0 card-heading text-gray-900  border-gray-200">
                              <span>${data.PricingCard[1].Price}K</span>
                              <span className="ml-1 text-lg font-normal text-gray-500">
                                /MO
                              </span>
                            </h1>
                            <p className="mt-3 card-subheading  pb-4   text-gray-500">
                              {data.PricingCard[1].StreamDescription}
                            </p>
                          </div>
                        </summary>
                        <div className="flex">
                          <div className=" justify-between pt-6 border-t w-1/2">
                            <h2 className="mb-3 text-lg font-bold  ">
                              Key Features
                            </h2>
                            {data.PricingCard[1].KeyFeatures.map((dt) => (
                              <Link key="dt" href={dt.PageUrl}>
                                <a className="flex items-center mb-2 text-gray-600 card-subheading">
                                  {" "}
                                  <svg
                                    className="w-5 h-5 mr-1 text-black"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    ></path>
                                  </svg>
                                  {dt.listItem}
                                </a>
                              </Link>
                            ))}
                          </div>
                          <div className="justify-between pt-6 border-t w-1/2">
                            <h2 className="mb-3 text-lg font-bold  ">Values</h2>
                            {data.PricingCard[1].Values.map((dt) => (
                              <p
                                key="dt"
                                className="flex items-center mb-2 text-gray-600 card-subheading"
                              >
                                {" "}
                                <svg
                                  className="w-5 h-5 mr-1 text-black"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                                {dt.listItem}
                              </p>
                            ))}
                          </div>
                        </div>
                        <div className="border-t border-b pt-5 mb-6 pb-2">
                          <div className="flex flex-row justify-between">
                            <h2 className="mb-3 text-lg font-bold  ">Bots</h2>
                          </div>
                          {data.PricingCard[1].Bots.map((dt) => (
                            <div
                              key="dt"
                              className="inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
                            >
                              {dt.listItem}
                            </div>
                          ))}
                        </div>
                        <div className="">
                          <div className="flex flex-row justify-between">
                            <h2 className="mb-1 text-lg font-bold ">Users</h2>
                          </div>

                          {data.PricingCard[1].Users.map((dt)=>( <p key="dt" className="flex items-center mb-2 text-gray-600 card-subheading ">
                            <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-white rounded-full">
                              <Image
                                src="https://static.thenounproject.com/png/925249-200.png"
                                alt=""
                                width={150}
                                height={150}
                              />
                            </span>
                            {dt.listItem}
                          </p>
                          ))}
                        </div>
                        <div className="w-full border-t">
                          {/* <button className="inline-flex items-center justify-center w-full px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"> 
                                        View All Features
                                        <div className="w-4 h-4 ml-2 relative"><Image layout="fill" src="/pricing/down-arrow-svgrepo-com.svg"  alt="down arrow"/></div>
                                    </button>
                                     */}
                          <p className="mt-3 text-xs text-center text-gray-500">
                           {data.PricingCard[1].ExtraText}
                          </p>
                        </div>
                      </details>
                    </div>
                  </div>
                  <div className="w-full mb-3">
                  <div
                      id="process"
                      className="cursor-pointer relative flex flex-col justify-between h-full p-6 overflow-hidden border rounded-lg"
                    >
                      {isProcessSelected && (
                        <span className="absolute top-0 right-0 px-3 py-0 text-xs tracking-widest text-white bg-blue-600 rounded-bl">
                          Selected
                        </span>
                      )}
                      <details className="">
                        <summary className="">
                          <div className="flex flex-col w-full">
                            <div className="flex flex-row justify-between">
                              <div className=" flex flex-row ">
                                <span className="flex  w-10 h-8  mb-3 mr-0 bg-transparent rounded-lg">
                                  <Image
                                    src={data.PricingCard[2].StreamLogoURL}
                                    alt="Digital process"
                                    height={40}
                                    width={30}
                                  />
                                </span>
                                <h2 className="mb-1 pr-2 card-heading">
                                  {data.PricingCard[2].StreamTitle}
                                </h2>
                              </div>

                              {isProcessSelected  && (
                                <div className="flex flex-arrow ">
                                  <button
                                    id="hey"
                                    className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
                                    onClick={() => {
                                      setIsProcessSelected(false);
                                      handleClick("process");
                                    }}
                                  >
                                    Unselect
                                  </button>
                                  <div id="arrow" className="mt-2"></div>
                                </div>
                              )}
                              {!isProcessSelected  && (
                                <div className="flex flex-arrow ">
                                  <button
                                    id="hey"
                                    className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
                                    onClick={() => {
                                      setIsProcessSelected(true);
                                      handleClick("process");
                                    }}
                                  >
                                    Select
                                  </button>
                                  <div id="arrow" className="mt-2"></div>
                                </div>
                              )}
                            </div>
                            <h1 className="flex items-center pb-0 card-heading text-gray-900  border-gray-200">
                              <span>${data.PricingCard[2].Price}K</span>
                              <span className="ml-1 text-lg font-normal text-gray-500">
                                /MO
                              </span>
                            </h1>
                            <p className="mt-3 card-subheading  pb-4   text-gray-500">
                              {data.PricingCard[2].StreamDescription}
                            </p>
                          </div>
                        </summary>
                        <div className="flex">
                          <div className=" justify-between pt-6 border-t w-1/2">
                            <h2 className="mb-3 text-lg font-bold  ">
                              Key Features
                            </h2>
                            {data.PricingCard[2].KeyFeatures.map((dt) => (
                              <Link key="dt" href={dt.PageUrl}>
                                <a className="flex items-center mb-2 text-gray-600 card-subheading">
                                  {" "}
                                  <svg
                                    className="w-5 h-5 mr-1 text-black"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    ></path>
                                  </svg>
                                  {dt.listItem}
                                </a>
                              </Link>
                            ))}
                          </div>
                          <div className="justify-between pt-6 border-t w-1/2">
                            <h2 className="mb-3 text-lg font-bold  ">Values</h2>
                            {data.PricingCard[2].Values.map((dt) => (
                              <p
                                key="dt"
                                className="flex items-center mb-2 text-gray-600 card-subheading"
                              >
                                {" "}
                                <svg
                                  className="w-5 h-5 mr-1 text-black"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                                {dt.listItem}
                              </p>
                            ))}
                          </div>
                        </div>
                        <div className="border-t border-b pt-5 mb-6 pb-2">
                          <div className="flex flex-row justify-between">
                            <h2 className="mb-3 text-lg font-bold  ">Bots</h2>
                          </div>
                          {data.PricingCard[2].Bots.map((dt) => (
                            <div
                              key="dt"
                              className="inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
                            >
                              {dt.listItem}
                            </div>
                          ))}
                        </div>
                        <div className="">
                          <div className="flex flex-row justify-between">
                            <h2 className="mb-1 text-lg font-bold ">Users</h2>
                          </div>

                          {data.PricingCard[2].Users.map((dt)=>( <p key="dt" className="flex items-center mb-2 text-gray-600 card-subheading ">
                            <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-white rounded-full">
                              <Image
                                src="https://static.thenounproject.com/png/925249-200.png"
                                alt=""
                                width={150}
                                height={150}
                              />
                            </span>
                            {dt.listItem}
                          </p>
                          ))}
                        </div>
                        <div className="w-full border-t">
                          {/* <button className="inline-flex items-center justify-center w-full px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"> 
                                        View All Features
                                        <div className="w-4 h-4 ml-2 relative"><Image layout="fill" src="/pricing/down-arrow-svgrepo-com.svg"  alt="down arrow"/></div>
                                    </button>
                                     */}
                          <p className="mt-3 text-xs text-center text-gray-500">
                           {data.PricingCard[2].ExtraText}
                          </p>
                        </div>
                      </details>
                    </div>
                  </div>
                  <div className="w-full mb-3">
                  <div
                      id="labs"
                      className="cursor-pointer relative flex flex-col justify-between h-full p-6 overflow-hidden border rounded-lg"
                    >
                      {isLabsSelected && (
                        <span className="absolute top-0 right-0 px-3 py-0 text-xs tracking-widest text-white bg-blue-600 rounded-bl">
                          Selected
                        </span>
                      )}
                      <details className="">
                        <summary className="">
                          <div className="flex flex-col w-full">
                            <div className="flex flex-row justify-between">
                              <div className=" flex flex-row ">
                                <span className="flex  w-10 h-8  mb-3 mr-0 bg-transparent rounded-lg">
                                  <Image
                                    src={data.PricingCard[3].StreamLogoURL}
                                    alt="Digital process"
                                    height={40}
                                    width={30}
                                  />
                                </span>
                                <h2 className="mb-1 pr-2 card-heading">
                                  {data.PricingCard[3].StreamTitle}
                                </h2>
                              </div>

                              {isLabsSelected  && (
                                <div className="flex flex-arrow ">
                                  <button
                                    id="hey"
                                    className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
                                    onClick={() => {
                                      setIsLabsSelected(false);
                                      handleClick("labs");
                                    }}
                                  >
                                    Unselect
                                  </button>
                                  <div id="arrow" className="mt-2"></div>
                                </div>
                              )}
                              {!isLabsSelected  && (
                                <div className="flex flex-arrow ">
                                  <button
                                    id="hey"
                                    className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
                                    onClick={() => {
                                      setIsLabsSelected(true);
                                      handleClick("labs");
                                    }}
                                  >
                                    Select
                                  </button>
                                  <div id="arrow" className="mt-2"></div>
                                </div>
                              )}
                            </div>
                            <h1 className="flex items-center pb-0 card-heading text-gray-900  border-gray-200">
                              <span>${data.PricingCard[3].Price}K</span>
                              <span className="ml-1 text-lg font-normal text-gray-500">
                                /MO
                              </span>
                            </h1>
                            <p className="mt-3 card-subheading  pb-4   text-gray-500">
                              {data.PricingCard[3].StreamDescription}
                            </p>
                          </div>
                        </summary>
                        <div className="flex">
                          <div className=" justify-between pt-6 border-t w-1/2">
                            <h2 className="mb-3 text-lg font-bold  ">
                              Key Features
                            </h2>
                            {data.PricingCard[3].KeyFeatures.map((dt) => (
                              <Link key="dt" href={dt.PageUrl}>
                                <a className="flex items-center mb-2 text-gray-600 card-subheading">
                                  {" "}
                                  <svg
                                    className="w-5 h-5 mr-1 text-black"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    ></path>
                                  </svg>
                                  {dt.listItem}
                                </a>
                              </Link>
                            ))}
                          </div>
                          <div className="justify-between pt-6 border-t w-1/2">
                            <h2 className="mb-3 text-lg font-bold  ">Values</h2>
                            {data.PricingCard[3].Values.map((dt) => (
                              <p
                                key="dt"
                                className="flex items-center mb-2 text-gray-600 card-subheading"
                              >
                                {" "}
                                <svg
                                  className="w-5 h-5 mr-1 text-black"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                                {dt.listItem}
                              </p>
                            ))}
                          </div>
                        </div>
                        <div className="border-t border-b pt-5 mb-6 pb-2">
                          <div className="flex flex-row justify-between">
                            <h2 className="mb-3 text-lg font-bold  ">Bots</h2>
                          </div>
                          {data.PricingCard[3].Bots.map((dt) => (
                            <div
                              key="dt"
                              className="inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
                            >
                              {dt.listItem}
                            </div>
                          ))}
                        </div>
                        <div className="">
                          <div className="flex flex-row justify-between">
                            <h2 className="mb-1 text-lg font-bold ">Users</h2>
                          </div>

                          {data.PricingCard[3].Users.map((dt)=>( <p key="dt" className="flex items-center mb-2 text-gray-600 card-subheading ">
                            <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-white rounded-full">
                              <Image
                                src="https://static.thenounproject.com/png/925249-200.png"
                                alt=""
                                width={150}
                                height={150}
                              />
                            </span>
                            {dt.listItem}
                          </p>
                          ))}
                        </div>
                        <div className="w-full border-t">
                          {/* <button className="inline-flex items-center justify-center w-full px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"> 
                                        View All Features
                                        <div className="w-4 h-4 ml-2 relative"><Image layout="fill" src="/pricing/down-arrow-svgrepo-com.svg"  alt="down arrow"/></div>
                                    </button>
                                     */}
                          <p className="mt-3 text-xs text-center text-gray-500">
                           {data.PricingCard[3].ExtraText}
                          </p>
                        </div>
                      </details>
                    </div>
                  </div>
                  <div className="w-full mb-3">
                  <div
                      id="mines"
                      className="cursor-pointer relative flex flex-col justify-between h-full p-6 overflow-hidden border rounded-lg"
                    >
                      {isMinesSelected && (
                        <span className="absolute top-0 right-0 px-3 py-0 text-xs tracking-widest text-white bg-blue-600 rounded-bl">
                          Selected
                        </span>
                      )}
                      <details className="">
                        <summary className="">
                          <div className="flex flex-col w-full">
                            <div className="flex flex-row justify-between">
                              <div className=" flex flex-row ">
                                <span className="flex  w-10 h-8  mb-3 mr-0 bg-transparent rounded-lg">
                                  <Image
                                    src={data.PricingCard[4].StreamLogoURL}
                                    alt="Digital mines"
                                    height={40}
                                    width={30}
                                  />
                                </span>
                                <h2 className="mb-1 pr-2 card-heading">
                                  {data.PricingCard[4].StreamTitle}
                                </h2>
                              </div>

                              {isMinesSelected  && (
                                <div className="flex flex-arrow ">
                                  <button
                                    id="hey"
                                    className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
                                    onClick={() => {
                                      setIsMinesSelected(false);
                                      handleClick("mines");
                                    }}
                                  >
                                    Unselect
                                  </button>
                                  <div id="arrow" className="mt-2"></div>
                                </div>
                              )}
                              {!isMinesSelected  && (
                                <div className="flex flex-arrow ">
                                  <button
                                    id="hey"
                                    className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
                                    onClick={() => {
                                      setIsMinesSelected(true);
                                      handleClick("mines");
                                    }}
                                  >
                                    Select
                                  </button>
                                  <div id="arrow" className="mt-2"></div>
                                </div>
                              )}
                            </div>
                            <h1 className="flex items-center pb-0 card-heading text-gray-900  border-gray-200">
                              <span>${data.PricingCard[4].Price}K</span>
                              <span className="ml-1 text-lg font-normal text-gray-500">
                                /MO
                              </span>
                            </h1>
                            <p className="mt-3 card-subheading  pb-4   text-gray-500">
                              {data.PricingCard[4].StreamDescription}
                            </p>
                          </div>
                        </summary>
                        <div className="flex">
                          <div className=" justify-between pt-6 border-t w-1/2">
                            <h2 className="mb-3 text-lg font-bold  ">
                              Key Features
                            </h2>
                            {data.PricingCard[4].KeyFeatures.map((dt) => (
                              <Link key="dt" href={dt.PageUrl}>
                                <a className="flex items-center mb-2 text-gray-600 card-subheading">
                                  {" "}
                                  <svg
                                    className="w-5 h-5 mr-1 text-black"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    ></path>
                                  </svg>
                                  {dt.listItem}
                                </a>
                              </Link>
                            ))}
                          </div>
                          <div className="justify-between pt-6 border-t w-1/2">
                            <h2 className="mb-3 text-lg font-bold  ">Values</h2>
                            {data.PricingCard[4].Values.map((dt) => (
                              <p
                                key="dt"
                                className="flex items-center mb-2 text-gray-600 card-subheading"
                              >
                                {" "}
                                <svg
                                  className="w-5 h-5 mr-1 text-black"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                                {dt.listItem}
                              </p>
                            ))}
                          </div>
                        </div>
                        <div className="border-t border-b pt-5 mb-6 pb-2">
                          <div className="flex flex-row justify-between">
                            <h2 className="mb-3 text-lg font-bold  ">Bots</h2>
                          </div>
                          {data.PricingCard[4].Bots.map((dt) => (
                            <div
                              key="dt"
                              className="inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
                            >
                              {dt.listItem}
                            </div>
                          ))}
                        </div>
                        <div className="">
                          <div className="flex flex-row justify-between">
                            <h2 className="mb-1 text-lg font-bold ">Users</h2>
                          </div>

                          {data.PricingCard[4].Users.map((dt)=>( <p key="dt" className="flex items-center mb-2 text-gray-600 card-subheading ">
                            <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-white rounded-full">
                              <Image
                                src="https://static.thenounproject.com/png/925249-200.png"
                                alt=""
                                width={150}
                                height={150}
                              />
                            </span>
                            {dt.listItem}
                          </p>
                          ))}
                        </div>
                        <div className="w-full border-t">
                          {/* <button className="inline-flex items-center justify-center w-full px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"> 
                                        View All Features
                                        <div className="w-4 h-4 ml-2 relative"><Image layout="fill" src="/pricing/down-arrow-svgrepo-com.svg"  alt="down arrow"/></div>
                                    </button>
                                     */}
                          <p className="mt-3 text-xs text-center text-gray-500">
                           {data.PricingCard[4].ExtraText}
                          </p>
                        </div>
                      </details>
                    </div>
                  </div>
                </div>
                <div className="hidden sm:block w-full">
                  <div className="w-full ">
                    <div className="cursor-pointer relative flex flex-col  justify-between h-full p-6 overflow-hidden border border-gray-600 bg-gray-100 rounded-lg">
                      <div className="flex flex-col w-full">
                        <div className="flex">
                          <div className="w-1/2">
                            <h2 className="mb-1 card-heading">Overall</h2>
                            <h1 className="flex items-center pb-4 mb-4 card-heading text-gray-900 border-b border-gray-200">
                              <span>${total}K</span>
                              <span className="ml-1 text-lg font-normal text-gray-500">
                                /MO
                              </span>
                            </h1>
                          </div>
                          <div
                            className="w-1/2  border-2 text-center mb-14 rounded-lg  text-black justify-center flex items-center"
                            onClick={() => {
                              setIsMinesSelected(true);
                              setIsProjectsSelected(true);
                              setIsLabsSelected(true);
                              setIsMapsSelected(true);
                              setIsProcessSelected(true);
                              handleTotal();
                            }}
                          >
                            Select all to save $5K 🎉
                          </div>
                        </div>
                        {isMapsSelected && (
                          <div className="flex py-2 pl-5 pr-0 mb-4 bg-white rounded-lg overflow-hidden flex-row justify-between ">
                            <div className="flex items-center">
                              <span className="flex items-center justify-center w-8 h-8 mr-8 bg-transparent rounded-lg">
                                <Image
                                  src="/assets/icons/maps.png"
                                  alt="Digital Maps"
                                  height={30}
                                  width={30}
                                />
                              </span>
                              <h2 className="mb-1 pr-2 card-subheading ">
                                Digital Maps
                              </h2>
                            </div>
                            <div>
                              {isMapsSelected && (
                                <div className="flex flex-arrow ">
                                  <button
                                    id="hey"
                                    className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
                                    onClick={() => {
                                      setIsMapsSelected(false);
                                      handleClick("maps");
                                    }}
                                  >
                                    <p>Unselect</p>
                                  </button>
                                </div>
                              )}
                              {!isMapsSelected && (
                                <div className="flex flex-arrow ">
                                  <button
                                    id="hey"
                                    className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
                                    onClick={() => {
                                      setIsMapsSelected(true);
                                      handleClick("maps");
                                    }}
                                  >
                                    <p>Select</p>
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        {isProjectsSelected && (
                          <div className="flex py-2 pl-5 pr-0 mb-4 bg-white rounded-lg overflow-hidden flex-row justify-between ">
                            <div className="flex items-center">
                              <span className="flex items-center justify-center w-8 h-8 mr-8 bg-transparent rounded-lg">
                                <Image
                                  src="/assets/icons/projects.png"
                                  alt="Digital Projects"
                                  height={30}
                                  width={30}
                                />
                              </span>
                              <h2 className="mb-1 pr-2 card-subheading ">
                                Digital Projects
                              </h2>
                            </div>
                            <div>
                              {isProjectsSelected && (
                                <div className="flex flex-arrow ">
                                  <button
                                    id="hey"
                                    className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
                                    onClick={() => {
                                      setIsProjectsSelected(false);
                                      handleClick("projects");
                                    }}
                                  >
                                    Unselect
                                  </button>
                                </div>
                              )}
                              {!isProjectsSelected && (
                                <div className="flex flex-arrow ">
                                  <button
                                    id="hey"
                                    className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
                                    onClick={() => {
                                      setIsProjectsSelected(true);
                                      handleClick("projects");
                                    }}
                                  >
                                    Select
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        {isProcessSelected && (
                          <div className="flex py-2 pl-5 pr-0 mb-4 bg-white rounded-lg overflow-hidden flex-row justify-between ">
                            <div className="flex items-center">
                              <span className="flex items-center justify-center w-8 h-8 mr-8 bg-transparent rounded-lg">
                                <Image
                                  src="/assets/icons/process.svg"
                                  alt="Digital Process"
                                  height={30}
                                  width={30}
                                />
                              </span>
                              <h2 className="mb-1 pr-2 card-subheading ">
                                Digital Process
                              </h2>
                            </div>
                            <div>
                              {isProcessSelected && (
                                <div className="flex flex-arrow ">
                                  <button
                                    id="hey"
                                    className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
                                    onClick={() => {
                                      setIsProcessSelected(false);
                                      handleClick("process");
                                    }}
                                  >
                                    Unselect
                                  </button>
                                </div>
                              )}
                              {!isProcessSelected && (
                                <div className="flex flex-arrow ">
                                  <button
                                    id="hey"
                                    className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
                                    onClick={() => {
                                      setIsProcessSelected(true);
                                      handleClick("process");
                                    }}
                                  >
                                    Select
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                        {isLabsSelected && (
                          <div className="flex py-2 pl-5 pr-0 mb-4 bg-white rounded-lg overflow-hidden flex-row justify-between ">
                            <div className="flex items-center">
                              <span className="flex items-center justify-center w-8 h-8 mr-8 bg-transparent rounded-lg">
                                <Image
                                  src="/assets/icons/Labs.png"
                                  alt="Digital Labs"
                                  height={30}
                                  width={30}
                                />
                              </span>
                              <h2 className="mb-1 pr-2 card-subheading ">
                                Digital Labs
                              </h2>
                            </div>
                            <div>
                              {isLabsSelected && (
                                <div className="flex flex-arrow ">
                                  <button
                                    id="hey"
                                    className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
                                    onClick={() => {
                                      setIsLabsSelected(false);
                                      handleClick("labs");
                                    }}
                                  >
                                    Unselect
                                  </button>
                                </div>
                              )}
                              {!isLabsSelected && (
                                <div className="flex flex-arrow ">
                                  <button
                                    id="hey"
                                    className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
                                    onClick={() => {
                                      setIsLabsSelected(true);
                                      handleClick("labs");
                                    }}
                                  >
                                    Select
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                        {isMinesSelected && (
                          <div className="flex py-2 pl-5 pr-0 mb-4 bg-white rounded-lg overflow-hidden flex-row justify-between ">
                            <div className="flex items-center">
                              <span className="flex items-center justify-center w-8 h-8 mr-8 bg-transparent rounded-lg">
                                <Image
                                  src="/assets/icons/Mines.png"
                                  alt="Digital Mines"
                                  height={30}
                                  width={30}
                                />
                              </span>
                              <h2 className="mb-1 pr-2 card-subheading ">
                                Digital Mines
                              </h2>
                            </div>
                            <div>
                              {isMinesSelected && (
                                <div className="flex flex-arrow ">
                                  <button
                                    id="hey"
                                    className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
                                    onClick={() => {
                                      setIsMinesSelected(false);
                                      handleClick("mines");
                                    }}
                                  >
                                    Unselect
                                  </button>
                                </div>
                              )}
                              {!isMinesSelected && (
                                <div className="flex flex-arrow ">
                                  <button
                                    id="hey"
                                    className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
                                    onClick={() => {
                                      setIsMinesSelected(true);
                                      handleClick("mines");
                                    }}
                                  >
                                    Select
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="w-full">
                        <button className="inline-flex items-center button  justify-center w-full px-4 py-3 bg-black text-white button whitespace-no-wrap  border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 hover:text-black focus:outline-none focus:shadow-none">
                          Contact Sales
                          <div className="w-4 h-4 ml-2 relative">
                            <Image
                              layout="fill"
                              src="/pricing/down-arrow-svgrepo-com.svg"
                              alt="down arrow"
                            />
                          </div>
                        </button>
                        {/* <Link href="" passHref>
                        <a  className="flex flex-row justify-center text-center mt-2 py-3 px-8 rounded-r-xl rounded-b-xl  button  ">        
                        <span className="flex items-center justify-center w-5 h-5 bg-transparent rounded-lg ">
                                                <Image src="/assets/icons/upload.png" alt="Digital Mines" height={30} width={30}/>
                                                </span>        
                                <span className="button ">&nbsp;&nbsp;Share Price</span>
                        </a>
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden md:block w-2/5">
                <div className="w-full p-2">
                  <div className="cursor-pointer relative flex flex-col  justify-between h-full p-6 overflow-hidden border border-gray-600 background rounded-lg">
                    <div className="flex flex-col w-full">
                      <div className="flex">
                        <div className="w-1/2">
                          <h2 className="mb-1 card-heading text-white">
                            Overall
                          </h2>
                          <h1 className="flex items-center text-white pb-4 mb-4 card-heading  border-b border-gray-200">
                            <span>${total}K</span>
                            <span className="ml-1 text-lg font-normal text-gray-200">
                              /MO
                            </span>
                          </h1>
                        </div>
                        <div
                          className="w-1/2  border-2 text-center mb-14 rounded-lg  text-white justify-center flex items-center"
                          onClick={() => {
                            setIsMinesSelected(true);
                            setIsProjectsSelected(true);
                            setIsLabsSelected(true);
                            setIsMapsSelected(true);
                            setIsProcessSelected(true);
                            handleTotal();
                          }}
                        >
                          Select all to save $5K 🎉
                        </div>
                      </div>
                      {isMapsSelected && (
                        <div className="flex py-2 pl-5 pr-0 mb-4 bg-white rounded-lg overflow-hidden flex-row justify-between ">
                          <div className="flex items-center">
                            <span className="flex items-center justify-center w-8 h-8 mr-8 bg-transparent rounded-lg">
                              <Image
                                src="/assets/icons/maps.png"
                                alt="Digital Maps"
                                height={30}
                                width={30}
                              />
                            </span>
                            <h2 className="mb-1 pr-2 card-subheading ">
                              Digital Maps
                            </h2>
                          </div>
                          <div>
                            {isMapsSelected && (
                              <div className="flex flex-arrow ">
                                <button
                                  id="hey"
                                  className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
                                  onClick={() => {
                                    setIsMapsSelected(false);
                                    handleClick("maps");
                                  }}
                                >
                                  Unselect
                                </button>
                              </div>
                            )}
                            {!isMapsSelected && (
                              <div className="flex flex-arrow ">
                                <button
                                  id="hey"
                                  className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
                                  onClick={() => {
                                    setIsMapsSelected(true);
                                    handleClick("maps");
                                  }}
                                >
                                  Select
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {isProjectsSelected && (
                        <div className="flex py-2 pl-5 pr-0 mb-4 bg-white rounded-lg overflow-hidden flex-row justify-between ">
                          <div className="flex items-center">
                            <span className="flex items-center justify-center w-8 h-8 mr-8 bg-transparent rounded-lg">
                              <Image
                                src="/assets/icons/projects.png"
                                alt="Digital Projects"
                                height={30}
                                width={30}
                              />
                            </span>
                            <h2 className="mb-1 pr-2 card-subheading ">
                              Digital Projects
                            </h2>
                          </div>
                          <div>
                            {isProjectsSelected && (
                              <div className="flex flex-arrow ">
                                <button
                                  id="hey"
                                  className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
                                  onClick={() => {
                                    setIsProjectsSelected(false);
                                    handleClick("projects");
                                  }}
                                >
                                  Unselect
                                </button>
                              </div>
                            )}
                            {!isProjectsSelected && (
                              <div className="flex flex-arrow ">
                                <button
                                  id="hey"
                                  className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
                                  onClick={() => {
                                    setIsProjectsSelected(true);
                                    handleClick("projects");
                                  }}
                                >
                                  Select
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {isProcessSelected && (
                        <div className="flex py-2 pl-5 pr-0 mb-4 bg-white rounded-lg overflow-hidden flex-row justify-between ">
                          <div className="flex items-center">
                            <span className="flex items-center justify-center w-8 h-8 mr-8 bg-transparent rounded-lg">
                              <Image
                                src="/assets/icons/process.svg"
                                alt="Digital Process"
                                height={30}
                                width={30}
                              />
                            </span>
                            <h2 className="mb-1 pr-2 card-subheading ">
                              Digital Process
                            </h2>
                          </div>
                          <div>
                            {isProcessSelected && (
                              <div className="flex flex-arrow ">
                                <button
                                  id="hey"
                                  className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
                                  onClick={() => {
                                    setIsProcessSelected(false);
                                    handleClick("process");
                                  }}
                                >
                                  Unselect
                                </button>
                              </div>
                            )}
                            {!isProcessSelected && (
                              <div className="flex flex-arrow ">
                                <button
                                  id="hey"
                                  className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
                                  onClick={() => {
                                    setIsProcessSelected(true);
                                    handleClick("process");
                                  }}
                                >
                                  Select
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                      {isLabsSelected && (
                        <div className="flex py-2 pl-5 pr-0 mb-4 bg-white rounded-lg overflow-hidden flex-row justify-between ">
                          <div className="flex items-center">
                            <span className="flex items-center justify-center w-8 h-8 mr-8 bg-transparent rounded-lg">
                              <Image
                                src="/assets/icons/Labs.png"
                                alt="Digital Labs"
                                height={30}
                                width={30}
                              />
                            </span>
                            <h2 className="mb-1 pr-2 card-subheading ">
                              Digital Labs
                            </h2>
                          </div>
                          <div>
                            {isLabsSelected && (
                              <div className="flex flex-arrow ">
                                <button
                                  id="hey"
                                  className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
                                  onClick={() => {
                                    setIsLabsSelected(false);
                                    handleClick("labs");
                                  }}
                                >
                                  Unselect
                                </button>
                              </div>
                            )}
                            {!isLabsSelected && (
                              <div className="flex flex-arrow ">
                                <button
                                  id="hey"
                                  className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
                                  onClick={() => {
                                    setIsLabsSelected(true);
                                    handleClick("labs");
                                  }}
                                >
                                  Select
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                      {isMinesSelected && (
                        <div className="flex py-2 pl-5 pr-0 mb-4 bg-white rounded-lg overflow-hidden flex-row justify-between ">
                          <div className="flex items-center">
                            <span className="flex items-center justify-center w-8 h-8 mr-8 bg-transparent rounded-lg">
                              <Image
                                src="/assets/icons/Mines.png"
                                alt="Digital Mines"
                                height={30}
                                width={30}
                              />
                            </span>
                            <h2 className="mb-1 pr-2 card-subheading ">
                              Digital Mines
                            </h2>
                          </div>
                          <div>
                            {isMinesSelected && (
                              <div className="flex flex-arrow ">
                                <button
                                  id="hey"
                                  className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
                                  onClick={() => {
                                    setIsMinesSelected(false);
                                    handleClick("mines");
                                  }}
                                >
                                  Unselect
                                </button>
                              </div>
                            )}
                            {!isMinesSelected && (
                              <div className="flex flex-arrow ">
                                <button
                                  id="hey"
                                  className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
                                  onClick={() => {
                                    setIsMinesSelected(true);
                                    handleClick("mines");
                                  }}
                                >
                                  Select
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="w-full">
                      <Link href="/contact">
                        <a className="inline-flex items-center button  justify-center w-full px-4 py-3 bg-black text-white button whitespace-no-wrap  border-2 border-gray-300 rounded-md shadow-sm hover:bg-gray-50 hover:text-black focus:outline-none focus:shadow-none">
                          {" "}
                          Contact Sales
                          <div className="w-4 h-4 ml-2 relative">
                            <Image
                              layout="fill"
                              src="/pricing/down-arrow-svgrepo-com.svg"
                              alt="down arrow"
                            />
                          </div>
                        </a>
                      </Link>
                      {/* <Link href="" passHref>
                        <a  className="flex flex-row justify-center text-center mt-2 py-3 px-8 rounded-r-xl rounded-b-xl  button  ">        
                        <span className="flex items-center justify-center w-5 h-5 bg-transparent rounded-lg ">
                                                <Image src="/assets/icons/upload.png" alt="Digital Mines" height={30} width={30}/>
                                                </span>        
                                <span className="button ">&nbsp;&nbsp;Share Price</span>
                        </a>
                        </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Customer logos Section --> */}

          <div className="px-4 py-10">
            <div className="container px-4 mx-auto">
              <h2 className=" text-center  text-gray-500 section-heading sm:sm-section-heading">
                {data.LogoSectionTitle}
              </h2>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. ab repudiandae et.</p> */}
            </div>
            <Carousel className="bots flex p-10  " responsive={responsive}>
             {data.LogoSectionContent.map((dt)=>( <div key="dt" className="p-3 bots-card flex-row">
                <Image
                  className=" w-auto lg:w-100"
                  src={dt.imageURL}
                  alt={dt.imageDescription}
                  width={dt.width}
                  height={dt.height}
                  layout="responsive"
                />
              </div>))}
              
            </Carousel>
          </div>
          {/* <!-- /Customer logos Section --> */}
        </section>
        
      </Layout>
    </>
  );
}
export const getServerSideProps = async () => {
  // data url from strapi
  let res = await fetch("https://api.ktern.com/pricing", {
    method: "get",
  });
  let data = await res.json();
  // console.log(data);
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
      data: data,
      h_data: h_data,
      f_data: f_data,
    },
  };
};
