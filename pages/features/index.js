import Layout from "../../component/Layout";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import { NextSeo } from "next-seo";
import { BreadcrumbJsonLd } from "next-seo";
import { LogoJsonLd } from "next-seo";
import { SocialProfileJsonLd } from "next-seo";
import BreadCrumb from "../../component/breadcrumb";
import { features } from "process";
import Event,{resolve_interest_score,resolve_stream_score} from "../../component/page_event";
const Feature_index = ({ data, h_data, f_data }) => {
  let breadcrumb = [];
  data.PageSEO.BreadCrumb.map((dt) => {
    breadcrumb.push({ position: dt.position, name: dt.name, item: dt.item });
  });
 
  
  // Amplitude Tracking onClick
  function onClick(data){
    Event(data)
    }
  return (
    <>
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
        //   languageAlternates={[
        //       {
        //           hrefLang: `${h_data.OtherSEO.languageAlternates.hrefLang}`,
        //           href: `${h_data.OtherSEO.languageAlternates.href}`,
        //       },
        //   ]}
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
      <LogoJsonLd logo={process.env.NEXT_PUBLIC_LOGO} url={process.env.NEXT_PUBLIC_URL} />
      
      <Layout h_data={h_data} f_data={f_data}>
        {/* HEader */}
        <section id="features" className="w-full py-32 background">
          <div className=" flex flex-col items-center px-12 mx-auto lg:flex-row">
            <div className="relative z-20 flex flex-col  w-full h-full ">
              <BreadCrumb color="white" b_data={breadcrumb} />
              <p className="max-w-max mt-4  inline-block px-2 py-1 mb-5  hyperlink text-gray-900 uppercase bg-gray-200 rounded-full ">
                {data.HeroSection.Tag}
              </p>
              <h1 className="heading text-white ">{data.HeroSection.header}</h1>
              <p className="subheading text-gray-100 pb-7 pt-2">
                {data.HeroSection.subHeading}
              </p>

              <div className="md:flex md:flex-row md:space-x-5">
                <Link
                  rel="noopener noreferrer"
                  href={data.HeroSection.primaryCTA.linkURL}
                >
                  <a
                  onClick={()=>{onClick({stream_score:resolve_stream_score('none'),event_name:"Button Click",section_name:"Hero Section",page_source:`${data.PageSEO.PageTitle}`,label:`${data.HeroSection.primaryCTA.buttonTitle}`})}}  
                    target="_blank"
                    className="sm:mb-4 inline-block py-3 px-10 bg-black hover:bg-gray-300 hover:text-black shadow   text-white  rounded-r-xl rounded-b-xl transition duration-200 border-2 border-white button "
                  >
                    {data.HeroSection.primaryCTA.buttonTitle}
                  </a>
                </Link>
                <Link href={data.HeroSection.secondaryCTA.linkURL}>
                  <a
                   onClick={()=>{onClick({stream_score:resolve_stream_score('none'),event_name:"Button Click",section_name:"Hero Section",page_source:`${data.PageSEO.PageTitle}`,label:`${data.HeroSection.secondaryCTA.buttonTitle}`})}}  
                   className="inline-block     shadow-md py-3 px-6 hover:text-white   hover:bg-gray-300   text-black   rounded-r-xl bg-white rounded-b-xl transition duration-200 uppercase  button">
                    {data.HeroSection.secondaryCTA.buttonTitle}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Header */}
        {/* sticky nav */}
        <section className="sm:hidden block flex sm:space-x-2 md:space-x-10 justify-center items-center  sm:py-5 md:p-5 bg-white shadow-2xl  sticky z-10 md:top-16 sm:top-10 border-2">
          <Link href="/features#digital-maps">
            <a
             onClick={()=>{onClick({stream_score:resolve_stream_score('maps'),event_name:"Filter Click",section_name:"Filter Section",page_source:`${data.PageSEO.PageTitle}`,label:`Digital Maps-Filter`})}}  
            className="hyperlink  uppercase hover:text-maps-primary">
              Digital Maps
            </a>
          </Link>
          <Link href="/features#digital-projects">
            <a
            onClick={()=>{onClick({stream_score:resolve_stream_score('projects'),event_name:"Filter Click",section_name:"Filter Section",page_source:`${data.PageSEO.PageTitle}`,label:`Digital Projects-Filter`})}}  
             className="hyperlink  uppercase hover:text-projects-primary">
              Digital Projects
            </a>
          </Link>
          <Link href="/features#digital-process">
            <a
            onClick={()=>{onClick({stream_score:resolve_stream_score('process'),event_name:"Filter Click",section_name:"Filter Section",page_source:`${data.PageSEO.PageTitle}`,label:`Digital Process-Filter`})}}  
            className="hyperlink  uppercase hover:text-process-primary">
              Digital Process
            </a>
          </Link>
          <Link href="/features#digital-labs">
            <a
            onClick={()=>{onClick({stream_score:resolve_stream_score('labs'),event_name:"Filter Click",section_name:"Filter Section",page_source:`${data.PageSEO.PageTitle}`,label:`Digital Labs-Filter`})}}  
            className="hyperlink  uppercase hover:text-labs-primary">
              Digital Labs
            </a>
          </Link>
          <Link href="/features#digital-mines">
            <a
            onClick={()=>{onClick({stream_score:resolve_stream_score('mines'),event_name:"Filter Click",section_name:"Filter Section",page_source:`${data.PageSEO.PageTitle}`,label:`Digital Mines-Filter`})}}  
             className="hyperlink  uppercase hover:text-mines-primary">
              Digital Mines
            </a>
          </Link>
        </section>
        {/* Sticky nav */}
        {/* digital Maps */}
        <section
          id="digital-maps"
          className="pt-10 relative w-full py-5 overflow-hidden bg-white md:py-10 xl:pt-36 xl:pb-20 "
        >
          <div className="grid md:grid-cols-5 gap-6 px-10  ">
            <div className="md:col-span-2  sticky top-0 ">
              <h2 className="mb-1 section-heading  leading-tight text-gray-900">
                {data.DigitalStreamSection[0].Title}
              </h2>
              <p className="mb-12 section-subheading  text-gray-500">
                {data.DigitalStreamSection[0].Description}
              </p>
            </div>
            <div className="md:col-span-3 w-full h-full">
              <div className="grid  md:grid-cols-2 md:gap-4  ">
                {/* <!-- Feature blocks first column --> */}
                {data.DigitalStreamSection[0].AllFeaturesCard.map((feature) => (
                  <div className="mb-10 " key="feature">
                    <Link href={feature.CTAUrl}>
                      <a 
                        onClick={()=>{onClick({stream_score:resolve_stream_score('maps'),event_name:"Card Click",section_name:"Features Section",page_source:`${data.PageSEO.PageTitle}`,label:`${feature.CTAText}-${feature.Title}`})}}  
                      className="relative flex flex-auto  px-2  group overflow-hidden false transition transform hover:-translate-y-1 duration-500 ">
                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-secondary  group-hover:bg-maps-secondary "></span>
                        <div className="relative shadow bg-white flex flex-auto p-5 px-5  group overflow-hidden false border border-black hover:border-maps-primary">
                          <div className="relative bg-white flex flex-col justify-between flex-1 mr-12 text-black">
                            <div className="flex ">
                              <div className="relative w-8 h-8">
                                <Image
                                  src={feature.IconURL}
                                  layout="fill"
                                  alt="Digital Maps Icon"
                                />
                              </div>
                            </div>
                            <h3 className="my-2 card-heading  text-gray-800">
                              {feature.Title}
                            </h3>
                            <p className="mb-2 card-subheading text-gray-600">
                              {feature.Description}
                            </p>
                            <div className="mt-2">
                              <div className="icon-link transition-opacity duration-200 group-hover:opacity-50 icon-link--black">
                                <Link href={feature.CTAUrl} passHref>
                                  <a
                                  onClick={()=>{onClick({stream_score:resolve_stream_score('maps'),event_name:"Card Click",section_name:"Features Section-Maps",page_source:`${data.PageSEO.PageTitle}`,label:`${feature.CTAText}-${feature.Title}`})}}  
                                  className="inline-flex items-center pb-1  text-black group ">
                                    <span className="hyperlink group-hover:text-maps-primary">
                                      {feature.CTAText}
                                    </span>
                                    <svg
                                      className="w-5 h-6 mt-1 ml-2 group-hover:text-maps-primary"
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
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* /digital maps */}
        {/* digital Projects */}
        <section
          id="digital-projects"
          className="pt-10 relative w-full py-5 overflow-hidden bg-white md:py-10 xl:pt-36 xl:pb-20 "
        >
          <div className="grid md:grid-cols-5 gap-10 px-10  ">
            <div className="md:col-span-2  sticky top-0 ">
              <h2 className="mb-1 section-heading  leading-tight text-gray-900">
                {data.DigitalStreamSection[1].Title}
              </h2>
              <p className="mb-12 section-subheading  text-gray-500">
                {data.DigitalStreamSection[1].Description}
              </p>
            </div>
            <div className="md:col-span-3 w-full h-full">
              <div className="grid md:grid-cols-2 md:gap-4 ">
                {/* <!-- Feature blocks first column --> */}
                {data.DigitalStreamSection[1].AllFeaturesCard.map((feature) => (
                  <div className="mb-10 " key="feature">
                    <Link href={feature.CTAUrl}>
                      <a
                        onClick={()=>{onClick({stream_score:resolve_stream_score('projects'),event_name:"Card Click",section_name:"Features Section-Projects",page_source:`${data.PageSEO.PageTitle}`,label:`${feature.CTAText}-${feature.Title}`})}}  
                      className="relative flex flex-auto  px-2  group overflow-hidden false transition transform hover:-translate-y-1 duration-500 ">
                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-secondary  group-hover:bg-projects-secondary "></span>
                        <div className="relative shadow bg-white flex flex-auto p-5 px-5  group overflow-hidden false border border-black hover:border-projects-primary">
                          <div className="relative bg-white flex flex-col justify-between flex-1 mr-12 text-black">
                            <div className="flex ">
                              <div className="relative w-8 h-8">
                                <Image
                                  src={feature.IconURL}
                                  layout="fill"
                                  alt="Digital Projects Icon"
                                />
                              </div>
                            </div>
                            <h3 className="my-2 card-heading  text-gray-800">
                              {feature.Title}
                            </h3>
                            <p className="mb-2 card-subheading text-gray-600">
                              {feature.Description}
                            </p>
                            <div className="mt-2">
                              <div className="icon-link transition-opacity duration-200 group-hover:opacity-50 icon-link--black">
                                <Link href={feature.CTAUrl} passHref>
                                  <a 
                                   onClick={()=>{onClick({stream_score:resolve_stream_score('projects'),event_name:"Card Click",section_name:"Features Section-Projects",page_source:`${data.PageSEO.PageTitle}`,label:`${feature.CTAText}-${feature.Title}`})}}  
                                  className="inline-flex items-center pb-1  text-black group ">
                                    <span className="hyperlink group-hover:text-projects-primary">
                                      {feature.CTAText}
                                    </span>
                                    <svg
                                      className="w-5 h-6 mt-1 ml-2 group-hover:text-projects-primary"
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
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* /Digital Projects */}
        {/* Digital Process */}
        <section
          id="digital-process"
          className="pt-10 relative w-full py-5 overflow-hidden bg-white md:py-10 xl:pt-36 xl:pb-20 "
        >
          <div className="grid md:grid-cols-5 gap-10 px-10  ">
            <div className="md:col-span-2  sticky top-0 ">
              <h2 className="mb-1 section-heading  leading-tight text-gray-900">
                {data.DigitalStreamSection[2].Title}
              </h2>
              <p className="mb-12 section-subheading  text-gray-500">
                {data.DigitalStreamSection[2].Description}
              </p>
            </div>
            <div className="md:col-span-3 w-full h-full">
              <div className="grid md:grid-cols-2 md:gap-4 ">
                {/* <!-- Feature blocks first column --> */}
                {data.DigitalStreamSection[2].AllFeaturesCard.map((feature) => (
                  <div className="mb-10 " key="feature">
                    <Link href={feature.CTAUrl}>
                      <a 
                       onClick={()=>{onClick({stream_score:resolve_stream_score('process'),event_name:"Card Click",section_name:"Features Section-Process",page_source:`${data.PageSEO.PageTitle}`,label:`${feature.CTAText}-${feature.Title}`})}}  
                      className="relative flex flex-auto  px-2  group overflow-hidden false transition transform hover:-translate-y-1 duration-500 ">
                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-secondary  group-hover:bg-process-secondary "></span>
                        <div className="relative shadow bg-white flex flex-auto p-5 px-5  group overflow-hidden false border border-black hover:border-process-primary">
                          <div className="relative bg-white flex flex-col justify-between flex-1 mr-12 text-black">
                            <div className="flex ">
                              <div className="relative w-8 h-8">
                                <Image
                                  src={feature.IconURL}
                                  layout="fill"
                                  alt="Digital Projects Icon"
                                />
                              </div>
                            </div>
                            <h3 className="my-2 card-heading  text-gray-800">
                              {feature.Title}
                            </h3>
                            <p className="mb-2 card-subheading text-gray-600">
                              {feature.Description}
                            </p>
                            <div className="mt-2">
                              <div className="icon-link transition-opacity duration-200 group-hover:opacity-50 icon-link--black">
                                <Link href={feature.CTAUrl} passHref>
                                  <a
                                   onClick={()=>{onClick({stream_score:resolve_stream_score('process'),event_name:"Card Click",section_name:"Features Section-Process",page_source:`${data.PageSEO.PageTitle}`,label:`${feature.CTAText}-${feature.Title}`})}}  
                                    className="inline-flex items-center pb-1  text-black group ">
                                    <span className="hyperlink group-hover:text-projects-primary">
                                      {feature.CTAText}
                                    </span>
                                    <svg
                                      className="w-5 h-6 mt-1 ml-2 group-hover:text-projects-primary"
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
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* /Digital Process */}
        {/* Digital Labs */}
        <section
          id="digital-labs"
          className="pt-10 relative w-full py-5 overflow-hidden bg-white md:py-10 xl:pt-36 xl:pb-20 "
        >
          <div className="grid md:grid-cols-5 gap-10 px-10  ">
            <div className="md:col-span-2  sticky top-0 ">
              <h2 className="mb-1 section-heading  leading-tight text-gray-900">
                {data.DigitalStreamSection[3].Title}
              </h2>
              <p className="mb-12 section-subheading  text-gray-500">
                {data.DigitalStreamSection[3].Description}
              </p>
            </div>
            <div className="md:col-span-3 w-full h-full">
              <div className="grid md:grid-cols-2 gap-4 ">
                {/* <!-- Feature blocks first column --> */}
                {data.DigitalStreamSection[3].AllFeaturesCard.map((feature) => (
                  <div className="mb-10" key="feature">
                    <Link href={feature.CTAUrl}>
                      <a
                       onClick={()=>{onClick({stream_score:resolve_stream_score('labs'),event_name:"Card Click",section_name:"Features Section-Labs",page_source:`${data.PageSEO.PageTitle}`,label:`${feature.CTAText}-${feature.Title}`})}}  
                       className="relative flex flex-auto   group overflow-hidden false transition transform hover:-translate-y-1 duration-500 ">
                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-secondary  group-hover:bg-labs-secondary "></span>
                        <div className="relative shadow bg-white flex flex-auto p-5 px-5  group overflow-hidden false border border-black hover:border-labs-primary">
                          <div className="relative bg-white flex flex-col justify-between flex-1  text-black">
                            <div className="flex ">
                              <div className="relative w-8 h-8">
                                <Image
                                  src={feature.IconURL}
                                  layout="fill"
                                  alt="Digital Labs Icon"
                                />
                              </div>
                            </div>
                            <h3 className="my-2 card-heading  text-gray-800">
                              {feature.Title}
                            </h3>
                            <p className="mb-2 card-subheading text-gray-600">
                              {feature.Description}
                            </p>
                            <div className="mt-2">
                              <div className="icon-link transition-opacity duration-200 group-hover:opacity-50 icon-link--black">
                                <Link href={feature.CTAUrl} passHref>
                                  <a
                                   onClick={()=>{onClick({stream_score:resolve_stream_score('labs'),event_name:"Card Click",section_name:"Features Section-Labs",page_source:`${data.PageSEO.PageTitle}`,label:`${feature.CTAText}-${feature.Title}`})}}  
                                   className="inline-flex items-center pb-1  text-black group ">
                                    <span className="hyperlink group-hover:text-projects-primary">
                                      {feature.CTAText}
                                    </span>
                                    <svg
                                      className="w-5 h-6 mt-1 ml-2 group-hover:text-projects-primary"
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
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* /Digital Labs */}
        {/* Digital Mines */}
        <section
          id="digital-mines"
          className="pt-10 relative w-full py-5 overflow-hidden bg-white md:py-10 xl:pt-36 xl:pb-20 "
        >
          <div className="grid md:grid-cols-5 gap-10 px-10  ">
            <div className="md:col-span-2  sticky top-0 ">
              <h2 className="mb-1 section-heading  leading-tight text-gray-900">
                {data.DigitalStreamSection[4].Title}
              </h2>
              <p className="mb-12 section-subheading  text-gray-500">
                {data.DigitalStreamSection[4].Description}
              </p>
            </div>
            <div className="md:col-span-3 w-full h-full">
              <div className="grid md:grid-cols-2 md:gap-4 ">
                {/* <!-- Feature blocks first column --> */}
                {data.DigitalStreamSection[4].AllFeaturesCard.map((feature) => (
                  <div className="mb-10 " key="feature">
                    <Link href={feature.CTAUrl}>
                      <a 
                       onClick={()=>{onClick({stream_score:resolve_stream_score('mines'),event_name:"Card Click",section_name:"Features Section-Mines",page_source:`${data.PageSEO.PageTitle}`,label:`${feature.CTAText}-${feature.Title}`})}}  
                      className="relative flex flex-auto  px-2  group overflow-hidden false transition transform hover:-translate-y-1 duration-500 ">
                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-secondary  group-hover:bg-mines-secondary "></span>
                        <div className="relative shadow bg-white flex flex-auto p-5 px-5  group overflow-hidden false border border-black hover:border-mines-primary">
                          <div className="relative bg-white flex flex-col justify-between flex-1 mr-12 text-black">
                            <div className="flex ">
                              <div className="relative w-8 h-8">
                                <Image
                                  src={feature.IconURL}
                                  layout="fill"
                                  alt="Digital Projects Icon"
                                />
                              </div>
                            </div>
                            <h3 className="my-2 card-heading  text-gray-800">
                              {feature.Title}
                            </h3>
                            <p className="mb-2 card-subheading text-gray-600">
                              {feature.Description}
                            </p>
                            <div className="mt-2">
                              <div className="icon-link transition-opacity duration-200 group-hover:opacity-50 icon-link--black">
                                <Link href={feature.CTAUrl} passHref>
                                  <a
                                   onClick={()=>{onClick({stream_score:resolve_stream_score('mines'),event_name:"Card Click",section_name:"Features Section-Mines",page_source:`${data.PageSEO.PageTitle}`,label:`${feature.CTAText}-${feature.Title}`})}}  
                                  className="inline-flex items-center pb-1  text-black group ">
                                    <span className="hyperlink group-hover:text-projects-primary">
                                      {feature.CTAText}
                                    </span>
                                    <svg
                                      className="w-5 h-6 mt-1 ml-2 group-hover:text-projects-primary"
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
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* /Digital Mines */}
        {/* <!-- Footer--> */}
        <section className="bg-white">
          <div className="md:px-8 md:py-8 mx-auto  sm:py-10 lg:py-20 max-w-7xl">
            <div className="relative py-6 overflow-hidden  background lg:py-12 md:px-6 lg:p-16 lg:flex lg:items-center lg:justify-between md:shadow-xl ">
              <div className="absolute top-0 right-0 hidden w-full -mt-20 transform rotate-45 translate-x-1/2 bg-white sm:block h-96 opacity-5"></div>
              <div className="absolute top-0 left-0 hidden w-full -mt-20 transform rotate-45 -translate-x-1/2 bg-white sm:block h-96 opacity-5"></div>
              <div className="relative p-6  md:p-0 md:pb-4">
                <h2 className="card-heading  leading-9 tracking-tight text-white  sm:leading-10">
                  {data.CTA.CTATitle}
                </h2>
                <p className="w-full mt-5 card-subheading text-white ">
                  {data.CTA.CTADescription}
                </p>
              </div>
              <div className="relative flex flex-col items-center w-full px-6 space-y-5  md:space-x-5 md:space-y-0 md:flex-row md:w-auto lg:flex-shrink-0 md:px-0">
                <Link href={data.CTA.PrimaryCTA.linkURL} passHref>
                  <a
                   onClick={()=>{onClick({stream_score:resolve_stream_score('none'),event_name:"Button Click",section_name:"CTA Section",page_source:`${data.PageSEO.PageTitle}`,label:`${data.CTA.PrimaryCTA.buttonTitle}`})}}  
                  className="  inline-block border-2 border-white py-3 px-10 bg-black hover:bg-gray-300 hover:text-black shadow  button  text-white rounded-r-xl rounded-b-xl transition duration-200 border-2 border-black">
                    {data.CTA.PrimaryCTA.buttonTitle}
                  </a>
                </Link>
                <Link
                  rel="noopener noreferrer"
                  href={data.CTA.SecondaryCTA.linkURL}
                  passHref
                >
                  <a
                                      onClick={()=>{onClick({stream_score:resolve_stream_score('none'),event_name:"Button Click",section_name:"CTA Section",page_source:`${data.PageSEO.PageTitle}`,label:`${data.CTA.SecondaryCTA.buttonTitle}`})}}  
                   target="_blank"
                    className="  inline-block py-3 px-10 bg-white button hover:bg-gray-50 hover:text-black shadow hyperlink  text-black rounded-r-xl rounded-b-xl transition duration-200 border-2 border-black"
                  >
                    {data.CTA.SecondaryCTA.buttonTitle}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};
export const getStaticProps = async () => {
  // data url from strapi)
  const res = await fetch("https://api.ktern.com/all-features", {
    method: "get",
  });
  const data = await res.json();
  // console.log("data",data)
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

export default Feature_index;
