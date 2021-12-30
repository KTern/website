import Image from "next/image";
import Link from "next/link";

import FeatureCard from "./featureCard";
import React, { useState, useRef, useEffect } from "react";

import { useRouter } from "next/router";
import HeaderCard from "./headerCard";
function openNav() {
  if (process.browser) {
    // console.log("Clicked")
    document.getElementById("navbar-menu").style.display = "block";
  }
}
function closeNav() {
  if (process.browser) {
    // console.log("Clicked as well")
    document.getElementById("navbar-menu").style.display = "none";
  }
}

export default function Navbar({ h_data }) {
  // console.log("Navbar",h_data)
  const router = useRouter();

  // const [ headerNew, changeHeader ] = useState(false);
  const [isProjectShown, setIsProjectShown] = useState(true);
  const [isProcessShown, setIsProcessShown] = useState(false);
  const [isMapsShown, setIsMapsShown] = useState(false);
  const [isMinesShown, setIsMinesShown] = useState(false);
  const [isLabsShown, setIsLabsShown] = useState(false);
  const [isWebinarsShown, setIsWebinarsShown] = useState(true);
  const [isArticlesShown, setIsArticlesShown] = useState(false);
  const [isEbooksShown, setIsEbooksShown] = useState(false);
  const [isCaseShown, setIsCaseShown] = useState(false);
  const [isTrustShown, setIsTrustShown] = useState(false);
  const [isPartnersShown, setIsPartnersShown] = useState(true);
  const [isConsultingShown, setIsConsultingShown] = useState(false);
  const [isTechnologyShown, setIsTechnologyShown] = useState(false);
  const [isBecomeAPartnerShown, setIsBecomeAPartnerShown] = useState(false);
  const [isPortalShown, setIsPortalShown] = useState(false);
  const [isResourceLibraryShown, setIsResourceLibraryShown] = useState(false);
  const [isPricingShown, setIsPricingShown] = useState(false);
  const [isDocumentationShown, setIsDocumentationShown] = useState(false);
  const [isCloudLiveShown, setIsCloudLiveShown] = useState(false);
  const [isProductTourShown, setIsProductTourShown] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  // console.log(router.pathname==='/')

  const listenToScroll = () => {
    let heightToHideFrom = 0;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      isVisible && // to limit setting state only the first time
        setIsVisible(false);
    } else {
      //   console.log(isOpen)
      if (isOpen) setIsVisible(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);

    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []);

  return (
    <>
      <nav className="p-0 bg-white  w-full   fixed z-1 shadow-md">
        {/* Top banner */}
        {isVisible &&
          isOpen &&
          router.pathname === "/" &&
          h_data.Topbar.buttonTitle != "" && (
            <div className="flex sm:hidden">
              <div
                id="banner"
                className="  w-full h-10 bg-black text-white flex space-x-12 items-center text-center justify-center "
              >
                <div>{h_data.Topbar.buttonTitle}</div>
                <Link href={h_data.Topbar.linkURL} passHref>
                  <a
                    target="_blank"
                    className="inline-flex items-center  text-white hover:border-blue-500 group hyperlink group-hover:text-gray-100"
                  >
                    &nbsp;Learn More
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
              </div>
              <button
                className="navbar-close justify-end bg-black pr-5"
                onClick={() => setIsOpen(false)}
              >
                <svg
                  className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          )}
        {/*/ Top banner */}

        <div className="flex flex-wrap justify-between  items-center">
          {/* KTern Logo Desktop*/}
          <div className="hidden lg:block">
            <Link href={h_data.Logo.Url} passHref>
              <a title={h_data.Logo.Title} className="mx-8">
                <Image
                  priority
                  className="text-lg font-medium xl:mx-20 "
                  width="130"
                  height="30"
                  src={h_data.Logo.ImageUrl}
                  alt="Ktern Logo"
                />
              </a>
            </Link>
          </div>
          {/*/ KTern Logo Desktop */}
          {/* KTern Logo mobile */}
          <div className="hidden sm:block">
            <Link href={h_data.Logo.Url} passHref>
              <a
                title={h_data.Logo.Title}
                className="mx-6 hidden sm:block mr-auto text-2xl font-medium leading-none cursor-pointer"
              >
                <Image
                  priority
                  src={h_data.Logo.ImageUrl}
                  alt="Ktern Logo"
                  width="100%"
                  height="25%"
                />
              </a>
            </Link>
          </div>
          {/* /KTern Logo mobile */}
          {/* Mobile Menu Icon*/}
          <div className="lg:hidden py-2">
            <button
              className="navbar-burger flex items-center mr-5 p-2 hover:bg-gray-50 rounded"
              onClick={openNav}
            >
              <svg
                className="block h-4 w-4"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          {/* /Mobile Menu Icon*/}
          {/* Header menu */}
          <div className="hidden lg:flex ">
            <ul className="container flex ">
              <li className="hoverable hover:border-2 hover:bg-secondary">
                <label
                  htmlFor="toggle-products"
                  className="block cursor-pointer py-3 px-6 lg:p-5 header  "
                >
                  Products
                </label>
                <div id="toggle-2" role="toggle" className="mega-menu   ">
                  <div
                    id="tag"
                    className="space-x-10 flex-col  bg-white mx-10 p-6 shadow-xl rounded-b-xl  border-b-4 border-dxaas-primary"
                  >
                    <div className="grid grid-cols-5 gap-6 mx-auto">
                      {h_data.Products.map((dt) => (
                        <Link key="dt" href={dt.redirectURL}>
                          <a className=" relative flex   px-2  group overflow-hidden false transition transform hover:-translate-y-5 duration-500 ">
                            
                            <div
                              className={`relative  rounded-lg  w-full bg-white flex-col p-3   group overflow-hidden false shadow-xl  `}
                            >
                              <div className=" bg-white mr-12 w-full text-black">
                                <p className={`uppercase text-${dt.css}-primary hyperlink mb-2`}>{dt.tagPhrase}</p>
                                <div className="h-50">
                                <Image
                                      priority
                                      src={dt.Logo.logoUrl}
                                      width={dt.Logo.width}
                                      height={dt.Logo.height}
                                      alt={dt.Logo.altText}
                                    />
                                  <div className="flex space-x-8">
                                    
                                    <div>
                                      <h3 className=" font-bold text-md mb-2 text-gray-800">
                                        {dt.Title}
                                      </h3>
                                      <p className="text-sm">
                                        {dt.Description}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </Link>
                      ))}

                    </div>
                   <div className="flex justify-end pt-4"> <Link href={h_data.cta.linkURL} passHref>
                              <a
                              // onClick={()=>{onClick({stream_score:resolve_stream_score(dt.DigitalStream),event_name:"Card Click",section_name:"Resources Section",page_source:`${data.PageSEO.PageTitle}`,label:`${dt.ResourceTitle}-${dt.CTAText}`})}}
                               className="inline-flex items-center   text-black hover:text-gray-400 group ">
                                <span className="hyperlink group-hover:text-gray-300">
                                {h_data.cta.buttonTitle}
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
                 
                </div>
              </li>
              <li className="hoverable hover:border-2  hover:bg-secondary">
                <label
                  htmlFor="toggle-resources"
                  className="block cursor-pointer py-3 px-6 lg:p-5 header  "
                >
                  Resources
                </label>
                <div id="toggle-2" role="toggle" className="mega-menu   ">
                  <div
                    id="tag"
                    className="divide-x space-x-10 flex bg-white mx-10 p-6 shadow-xl rounded-b-xl  border-b-4 border-dxaas-primary"
                  >
                    <div id="tag" className="w-2/6 px-4 h-full  ">
                      <div>
                        <h3 className="text-lg mb-2 font-bold">
                          {h_data.Resources.WhatsNewSection.Title}
                        </h3>
                        <p className="text-md mb-6">
                          {h_data.Resources.WhatsNewSection.Description}
                        </p>
                        <Link
                          href={h_data.Resources.WhatsNewSection.redirectURL}
                          passhref
                        >
                          <a
                            title={h_data.Resources.WhatsNewSection.Title}
                            className="inline-block py-2 px-6 bg-black hover:bg-gray-300 hover:text-black shadow text-sm text-white  rounded-r-xl rounded-b-xl transition duration-200 uppercase"
                          >
                            {h_data.Resources.WhatsNewSection.ctaText}
                          </a>
                        </Link>
                      </div>
                      {/* <FeatureCard
                        id="tag"
                        border={"border"}
                        type={"rows"}
                        space="4"
                        bold={"none"}
                        color={"bg-secondary"}
                        data={h_data.Resources.WhatsNewSection}
                      /> */}
                    </div>
                    <div className="w-4/6 px-6  ">
                      <FeatureCard
                        id="tag"
                        border={"none"}
                        space="0"
                        color={"bg-secondary"}
                        type={"cols"}
                        bold={"font-semibold"}
                        data={h_data.ResourcesList}
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li className="hoverable hover:border-2  hover:bg-secondary">
                <label
                  htmlFor="toggle-partners"
                  className="block cursor-pointer py-3 px-6 lg:p-5 header  "
                >
                  Partners
                </label>
                <div id="toggle-3" role="toggle" className="mega-menu   ">
                  <div
                    id="tag"
                    className="divide-x space-x-10 flex bg-white mx-10 p-6 shadow-xl rounded-b-xl  border-b-4 border-dxaas-primary"
                  >
                    <div id="tag" className="w-2/6 px-4 h-full  ">
                      <div>
                        <h3 className="text-lg mb-2 font-bold">
                          {h_data.Partners.WhatsNewSection.Title}
                        </h3>
                        <p className="text-md mb-6">
                          {h_data.Partners.WhatsNewSection.Description}
                        </p>
                        <Link
                          href={h_data.Partners.WhatsNewSection.redirectURL}
                          passhref
                        >
                          <a
                            title={h_data.Partners.WhatsNewSection.Title}
                            className="inline-block py-2 px-6 bg-black hover:bg-gray-300 hover:text-black shadow text-sm text-white  rounded-r-xl rounded-b-xl transition duration-200 uppercase"
                          >
                            {h_data.Partners.WhatsNewSection.ctaText}
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="w-4/6 px-6 ">
                      <FeatureCard
                        id="tag"
                        border={"none"}
                        space="0"
                        color={"bg-secondary"}
                        type={"cols"}
                        data={h_data.PartnersList}
                        bold={"font-semibold"}
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li className="hoverable hover:border-2  hover:bg-secondary">
                <label
                  htmlFor="toggle-Company"
                  className="block cursor-pointer py-3 px-6 lg:p-5 header  "
                >
                  Company
                </label>
                <div id="toggle-4" role="toggle" className="mega-menu   ">
                  <div
                    id="tag"
                    className="divide-x space-x-10 flex bg-white mx-10 p-6 shadow-xl rounded-b-xl  border-b-4 border-dxaas-primary"
                  >
                    <div id="tag" className="w-2/6 px-4 h-full  ">
                      <div>
                        <h3 className="text-lg mb-2 font-bold">
                          {h_data.Company.WhatsNewSection.Title}
                        </h3>
                        <p className="text-md mb-6">
                          {h_data.Company.WhatsNewSection.Description}
                        </p>
                        <Link
                          href={h_data.Company.WhatsNewSection.redirectURL}
                          passhref
                        >
                          <a
                            title={h_data.Company.WhatsNewSection.Title}
                            className="inline-block py-2 px-6 bg-black hover:bg-gray-300 hover:text-black shadow text-sm text-white  rounded-r-xl rounded-b-xl transition duration-200 uppercase"
                          >
                            {h_data.Company.WhatsNewSection.ctaText}
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="w-4/6 px-6 ">
                      <FeatureCard
                        id="tag"
                        border={"none"}
                        space="0"
                        color={"bg-secondary"}
                        type={"cols"}
                        bold={"font-semibold"}
                        data={h_data.CompanyList}
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li className="hoverable hover:border-2  hover:bg-secondary">
                <input
                  type="checkbox"
                  value="selected"
                  id="toggle-Support"
                  className="toggle-input"
                />
                <label
                  htmlFor="toggle-Support"
                  className="block cursor-pointer py-3 px-6 lg:p-5 header  "
                >
                  Support
                </label>
                <div id="toggle-5" role="toggle" className="mega-menu   ">
                  <div
                    id="tag"
                    className="divide-x space-x-10 flex bg-white mx-10 p-6 shadow-xl rounded-b-xl  border-b-4 border-dxaas-primary"
                  >
                    <div id="tag" className="w-2/6 px-4 h-full  ">
                      <div>
                        <h3 className="text-lg mb-2 font-bold">
                          {h_data.Support.WhatsNewSection.Title}
                        </h3>
                        <p className="text-md mb-6">
                          {h_data.Support.WhatsNewSection.Description}
                        </p>
                        <Link
                          href={h_data.Support.WhatsNewSection.redirectURL}
                          passhref
                        >
                          <a
                            title={h_data.Support.WhatsNewSection.Title}
                            className="inline-block py-2 px-6 bg-black hover:bg-gray-300 hover:text-black shadow text-sm text-white  rounded-r-xl rounded-b-xl transition duration-200 uppercase"
                          >
                            {h_data.Support.WhatsNewSection.ctaText}
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="w-4/6 px-6 ">
                      <FeatureCard
                        id="tag"
                        border={"none"}
                        space="0"
                        color={"bg-secondary"}
                        type={"cols"}
                        data={h_data.SupportList}
                        bold={"font-semibold"}
                      />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* /Header menu */}
          <div className=" hidden lg:block flex-end xl:mx-20 lg:my-auto mr-4 space-x-10">
            <Link href={h_data.PrimaryCTA.linkURL} passhref>
              <a
                title={h_data.PrimaryCTA.buttonTitle}
                target="_blank"
                className="button"
              >
                {h_data.PrimaryCTA.buttonTitle}
              </a>
            </Link>
            <Link href={h_data.SecondaryCTA.linkURL}>
              <a
                title={h_data.SecondaryCTA.buttonTitle}
                className="border-2 border-black hidden mb-1 lg:inline-block py-2 px-6 bg-black hover:bg-gray-300 hover:text-black shadow  text-white  rounded-r-xl button rounded-b-xl transition duration-200 "
              >
                {h_data.SecondaryCTA.buttonTitle}
              </a>
            </Link>
          </div>
        </div>
      </nav>

      <div id="navbar-menu" className="py-20 z-50 hidden relative bg-white">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="py-2  nav fixed top-0 left-0 bottom-0 flex flex-col w-full max-w-sm  px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center justify-between mb-8">
            <Link href={h_data.Logo.Url} passHref>
              <a
                title={h_data.Logo.Title}
                className="mx-6 hidden sm:block mr-auto text-2xl font-medium leading-none cursor-pointer"
              >
                <Image
                  priority
                  src={h_data.Logo.ImageUrl}
                  alt="Ktern Logo"
                  width="100%"
                  height="30%"
                />
              </a>
            </Link>
            <button className="navbar-close" onClick={closeNav}>
              <svg
                className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="toggleable hover:bg-secondary bg-white ">
                <input
                  type="checkbox"
                  value="selected"
                  id="toggle-sm-one"
                  className="toggle-input  "
                />
                <label
                  htmlFor="toggle-sm-one"
                  className="block cursor-pointer py-2 px-4 lg:p-6 header bg-white  "
                >
                  Products
                </label>
                <div
                  id="toggle"
                  role="toggle"
                  className="p-6 z-50 mega-menu mb-16 sm:mb-0 shadow-2xl  "
                >
                  <div className=" container bg-white mx-auto w-full flex flex-wrap justify-between bg-secondary  mx-2">
                    <ul className="bg-white px-4 w-full z-0  lg:w-1/4 border-gray-300 lg:border-b lg:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                      <h3 className="navbar-h uppercase text-black text-bold mb-2">
                        {h_data.Streams}
                      </h3>
                      <li className="hover:bg-secondary ">
                        <Link href="/digital-maps">
                          <a
                            htmlFor="toggle-sm-two"
                            className="block cursor-pointer navbar-s py-2 lg:p-6  "
                          >
                            Digital Maps
                          </a>
                        </Link>
                      </li>
                      <li className="hover:bg-secondary ">
                        <Link href="/digital-projects">
                          <a
                            htmlFor="toggle-sm-two"
                            className="block cursor-pointer navbar-s py-2 lg:p-6  "
                          >
                            Digital Projects
                          </a>
                        </Link>
                      </li>
                      <li className="hover:bg-secondary ">
                        <Link href="/digital-process">
                          <a
                            htmlFor="toggle-sm-two"
                            className="block cursor-pointer navbar-s py-2 lg:p-6  "
                          >
                            Digital Process
                          </a>
                        </Link>
                      </li>
                      <li className="hover:bg-secondary ">
                        <Link href="/digital-labs">
                          <a
                            htmlFor="toggle-sm-two"
                            className="block cursor-pointer navbar-s py-2 lg:p-6  "
                          >
                            Digital Labs
                          </a>
                        </Link>
                      </li>
                      <li className="hover:bg-secondary ">
                        <Link href="/digital-mines">
                          <a
                            htmlFor="toggle-sm-two"
                            className="block cursor-pointer navbar-s py-2 lg:p-6  "
                          >
                            Digital Mines
                          </a>
                        </Link>
                      </li>
                      <li className="mt-4 hover:bg-secondary">
                        <Link href="/pricing" passHref>
                          <a className="inline-flex items-center pb-1  text-black hover:border-blue-500 group hyperlink group-hover:text-gray-400">
                            See Pricing
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
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="toggleable hover:bg-secondary bg-white ">
                <input
                  type="checkbox"
                  value="selected"
                  id="toggle-sm-two"
                  className="toggle-input "
                />
                <label
                  htmlFor="toggle-sm-two"
                  className="block cursor-pointer py-2 px-4 lg:p-6 header "
                >
                  Resources
                </label>
                <div
                  id="toggle"
                  role="toggle"
                  className="p-2  mega-menu mb-16 z-50 sm:mb-0 shadow-2xl bg-secondary "
                >
                  <div className=" container mx-auto w-full flex flex-wrap justify-between bg-secondary  mx-2">
                    <ul className="bg-white px-4 w-full  lg:w-1/4 border-gray-300 lg:border-b lg:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                      <h3 className="navbar-h uppercase text-black text-bold mb-2">
                        Resources
                      </h3>
                      {h_data.ResourcesList.map((dt) => (
                        <li key="dt" className="hover:bg-secondary ">
                          {dt.OpenInNewTab && (
                            <Link
                              target="_blank"
                              href={dt.redirectURL}
                              passHref
                            >
                              <a
                                htmlFor="toggle-sm-two"
                                className="block cursor-pointer navbar-s py-2 lg:p-6  "
                              >
                                {dt.Title}
                              </a>
                            </Link>
                          )}
                          {!dt.OpenInNewTab && (
                            <Link href={dt.redirectURL} passHref>
                              <a
                                htmlFor="toggle-sm-two"
                                className="block cursor-pointer navbar-s py-2 lg:p-6  "
                              >
                                {dt.Title}
                              </a>
                            </Link>
                          )}
                        </li>
                      ))}
                      <li className="mt-4 hover:bg-secondary">
                        <Link href="/resources" passHref>
                          <a className="inline-flex items-center pb-1  text-black hover:border-blue-500 group hyperlink group-hover:text-gray-400">
                            See All Resources
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
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="toggleable hover:bg-secondary bg-white ">
                <input
                  type="checkbox"
                  value="selected"
                  id="toggle-sm-three"
                  className="toggle-input "
                />
                <label
                  htmlFor="toggle-sm-three"
                  className="block cursor-pointer py-2 px-4 lg:p-6 header "
                >
                  Partners
                </label>
                <div
                  id="toggle"
                  role="toggle"
                  className="p-2  mega-menu mb-16 z-50 sm:mb-0 shadow-2xl bg-secondary "
                >
                  <div className=" container mx-auto w-full flex flex-wrap justify-between bg-secondary  mx-2">
                    <ul className="bg-white px-4 w-full  lg:w-1/4 border-gray-300 lg:border-b lg:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                      <h3 className="navbar-h uppercase text-black text-bold mb-2">
                        Partners
                      </h3>
                      {h_data.PartnersList.map((dt) => (
                        <li key="dt" className="hover:bg-secondary ">
                          {dt.OpenInNewTab && (
                            <Link
                              target="_blank"
                              href={dt.redirectURL}
                              passHref
                            >
                              <a
                                htmlFor="toggle-sm-three"
                                className="block cursor-pointer navbar-s py-2 lg:p-6  "
                              >
                                {dt.Title}
                              </a>
                            </Link>
                          )}
                          {!dt.OpenInNewTab && (
                            <Link href={dt.redirectURL} passHref>
                              <a
                                htmlFor="toggle-sm-three"
                                className="block cursor-pointer navbar-s py-2 lg:p-6  "
                              >
                                {dt.Title}
                              </a>
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
              <li className="toggleable hover:bg-secondary bg-white ">
                <input
                  type="checkbox"
                  value="selected"
                  id="toggle-sm-four"
                  className="toggle-input  "
                />
                <label
                  htmlFor="toggle-sm-four"
                  className="block cursor-pointer py-2 px-4 lg:p-6 header bg-white  "
                >
                  Company
                </label>
                <div
                  id="toggle"
                  role="toggle"
                  className="p-6 z-50 mega-menu mb-16 sm:mb-0 shadow-2xl  "
                >
                  <div className=" container bg-white mx-auto w-full flex flex-wrap justify-between bg-secondary  mx-2">
                    <ul className="bg-white px-4 w-full z-0  lg:w-1/4 border-gray-300 lg:border-b lg:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                      <h3 className="navbar-h uppercase text-black text-bold mb-2">
                        Company
                      </h3>
                      {h_data.CompanyList.map((dt) => (
                        <li key="dt" className="hover:bg-secondary ">
                          {dt.OpenInNewTab && (
                            <Link target="_blank" href={dt.redirectURL}>
                              <a
                                title={dt.Title}
                                htmlFor="toggle-sm-two"
                                className="block cursor-pointer navbar-s py-2 lg:p-6  "
                              >
                                {dt.Title}
                              </a>
                            </Link>
                          )}
                          {!dt.OpenInNewTab && (
                            <Link href={dt.redirectURL}>
                              <a
                                title={dt.Title}
                                htmlFor="toggle-sm-two"
                                className="block cursor-pointer navbar-s py-2 lg:p-6  "
                              >
                                {dt.Title}
                              </a>
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
              <li className="toggleable hover:bg-secondary bg-white ">
                <input
                  type="checkbox"
                  value="selected"
                  id="toggle-sm-five"
                  className="toggle-input  "
                />
                <label
                  htmlFor="toggle-sm-five"
                  className="block cursor-pointer py-2 px-4 lg:p-6 header bg-white  "
                >
                  Support
                </label>
                <div
                  id="toggle"
                  role="toggle"
                  className="p-6 z-50 mega-menu mb-16 sm:mb-0 shadow-2xl  "
                >
                  <div className=" container bg-white mx-auto w-full flex flex-wrap justify-between bg-secondary  mx-2">
                    <ul className="bg-white px-4 w-full z-0  lg:w-1/4 border-gray-300 lg:border-b lg:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                      <h3 className="navbar-h uppercase text-black text-bold mb-2">
                        Support
                      </h3>
                      {h_data.SupportList.map((dt) => (
                        <li key="dt" className="hover:bg-secondary ">
                          {dt.OpenInNewTab && (
                            <Link target="_blank" href={dt.redirectURL}>
                              <a
                                title={dt.Title}
                                htmlFor="toggle-sm-two"
                                className="block cursor-pointer navbar-s py-2 lg:p-6  "
                              >
                                {dt.Title}
                              </a>
                            </Link>
                          )}
                          {!dt.OpenInNewTab && (
                            <Link href={dt.redirectURL}>
                              <a
                                title={dt.Title}
                                htmlFor="toggle-sm-two"
                                className="block cursor-pointer navbar-s py-2 lg:p-6  "
                              >
                                {dt.Title}
                              </a>
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="pt-6 flex-col space-y-6">
            <Link href={h_data.PrimaryCTA.linkURL}>
              <a
                title={h_data.PrimaryCTA.buttonTitle}
                className="inline-block py-2 px-6 bg-black hover:bg-gray-300 hover:text-black shadow text-sm text-white  rounded-r-xl rounded-b-xl transition duration-200 uppercase"
              >
                {h_data.PrimaryCTA.buttonTitle}
              </a>
            </Link>
            <Link href={h_data.SecondaryCTA.linkURL}>
              <a
                title={h_data.SecondaryCTA.buttonTitle}
                className="inline-block py-2 px-6 bg-black hover:bg-gray-300 hover:text-black shadow text-sm text-white  rounded-r-xl rounded-b-xl transition duration-200 uppercase"
              >
                {h_data.SecondaryCTA.buttonTitle}
              </a>
            </Link>
          </div>
          <div className="mt-auto">
            <p className="mt-6 mb-4 text-sm text-center text-gray-500">
              <span>© 2021 All rights reserved.</span>
            </p>
          </div>
        </nav>
      </div>
    </>
  );
}
