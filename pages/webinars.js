import Layout from "../component/Layout";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { BreadcrumbJsonLd } from "next-seo";
import { LogoJsonLd } from "next-seo";
import { SocialProfileJsonLd } from "next-seo";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import _ from "lodash";
import BreadCrumb from "../component/breadcrumb";
import Event, {
  resolve_interest_score,
  resolve_stream_score,
} from "../component/page_event";
export default function Webinar({ data, h_data, f_data }) {
  // Amplitude Tracking onClick
  function onClick(data) {
    Event(data);
  }
  // Filters
  const router = useRouter();
  const [isFilters, setFilters] = useState([]);

  function colorChange() {
    if (typeof process.browser)
      document.getElementById("option").style.backgroundColor = "#00000";
  }
  // Drop Down
  // console.log(data.StreamsFilter)

  let streamOptions = [];
  // let topicOptions = [];
  // let resourceTypeOptions = [];
  let roleOptions = [];
  function filterData(data) {
    let filter = [];
    let val = {};

    data.map((item) => {
      val = {};
      val["label"] = item.Label;
      val["value"] = item.Value;
      filter.push(val);
    });

    console.log(filter, data);
    return filter;
  }
  streamOptions = filterData(data.DigitalStreamsFilter);
  // topicOptions = filterData(data.TopicsFilter);
  // resourceTypeOptions = filterData(data.ResourceTypeFilters);
  roleOptions = filterData(data.RolesFilter);
  const [ResourceList, setResourceList] = useState(data.WebinarList);
  let filter = [];

  let Labels = ["stream", "role"];
  function handleChange(event) {
    let filterArray = {};
    if (document.getElementById("stream").value != "allStreams")
      filterArray.RelatedStream = document.getElementById("stream").value;
    //   if (document.getElementById('type').value!= 'allTypes')
    //     filterArray.ResourceType = document.getElementById('type').value
    //   if (document.getElementById('topic').value!= 'allTopics')
    //     filterArray.RelatedTopic = document.getElementById('topic').value
    //   if (document.getElementById('role').value!= 'allRoles')
    //       filterArray.RelatedRole=document.getElementById('role').value

    console.log(filterArray);

    filter = _.filter(data.WebinarList, filterArray);

    setResourceList(filter);
  }
  let video = "Video";
  useEffect(() => {
    if (router.query.type) {
      let filterArray = {};
      filterArray.ResourceType = router.query.type;

      // console.log(filterArray)

      filter = _.filter(data.WebinarList, filterArray);
      // console.log(filter)
      setResourceList(filter);
      if (process.browser)
        document.getElementById("type").value = router.query.type;
    }
  }, []);
  function handleFilter(element) {
    filter = [];
    data.WebinarList.map((item) => {
      if (filterArray.includes(item.ResourceType)) filter.push(item);
    });

    setResourceList(filter);
  }

  // Filters end
  let breadcrumb = [];
  data.PageSEO.BreadCrumb.map((dt) => {
    breadcrumb.push({ position: dt.position, name: dt.name, item: dt.item });
  });
  console.log(breadcrumb);
  const date = new Date(
    data.FeaturedWebinar.Date + "T" + data.FeaturedWebinar.Time
  );
  const time = date.toLocaleString("en-US", {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });
  const dateFormat = new Date(data.FeaturedWebinar.Date);

  let formattedDate = dateFormat.toLocaleDateString("en-us", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

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
      <LogoJsonLd logo={process.env.NEXT_PUBLIC_LOGO} url={process.env.NEXT_PUBLIC_URL} />
      <SocialProfileJsonLd
        type="Person"
        name="KTern.AI"
        url="https://ktern.com"
        sameAs={process.env.NEXT_PUBLIC_SOCIALPROFILEJSON.split(',')}
      />
      <Layout h_data={h_data} f_data={f_data}>
        {/* <!--Upcoming Webinar Section--> */}

        <div className=" mx-auto md:py-4">
          <section className="w-full   bg-white py-12 pt-20  background text-white">
            <div className="md:ml-20 sm:px-6">
              <BreadCrumb color="white" b_data={breadcrumb} />
            </div>
            <div className="md:flex md:flex-row items-center justify-center md:mx-auto md:space-x-5 md:max-w-6xl">
              <div className="md:w-1/2 relative flex flex-col items-start justify-center  h-full  px-6 mx-auto xl:max-w-none ">
                <h2 className=" heading  text-white sm:w-4/5 mb-5 mt-5 text-3">
                  {data.PageHeader.header}
                </h2>
                <p className="subheading text-gray-300">
                  {data.PageHeader.subHeading}
                </p>
                {/* <div className="w-20 h-1 mt-3 ml-1 bg-black  rounded-full"></div> */}

                {/* <svg className="hidden md:block absolute top-0 right-0  w-auto h-24 mt-20 text-black fill-current  xl:mr-5 xl:-mt-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 74"><defs></defs><g fillRule="nonzero"><path d="M43.13 71.58c.29-.025.58-.025.87 0 .3 0 .71-.14 1-.17.54 0 1.08-.19 1.62-.23l2.3-.17 4.65-.25 6.47-.26h.68c3-.15 6-.3 9-.53 1.68-.14 5.83-.49 6.21-.52.63 0 4.36-.53 5-.63.25 0 1.95-.35 3.35-.58-.09-1-.55-1.77-.62-2.71-4.33.66-8.7 1.18-13 1.51-5.34.4-10.71.66-16.08 1l-7 .39c-1.4 0-2.82-.31-4.17-.26a2 2 0 00-1 .31c-.3.21-.4.16-.5.3a1.18 1.18 0 00-.12.81c.06.84.66 2.11 1.34 1.99zM106.33 62.04l.5-.23c.31-.13.72-.33 1.16-.56.88-.46 1.94-1 2.59-1.38l.56-.31a31.87 31.87 0 002.81-1.74 48.77 48.77 0 0014-13.59 38.22 38.22 0 004.34-8.87 28.9 28.9 0 001.51-9.86 31.56 31.56 0 00-3.3-13.46 23.9 23.9 0 00-3.62-5.22 20.47 20.47 0 00-2.38-2.22c-.42-.34-.89-.63-1.33-.94a10.88 10.88 0 00-1.38-.85A18.21 18.21 0 00109.16.92c-.5.11-1 .22-1.45.33-.45.11-.88.31-1.3.47-.42.16-.86.3-1.27.49-.41.19-.8.41-1.21.61A27.71 27.71 0 0098.5 6.5l-1.51 1.42-1.59 1.84c-.51.66-1 1.36-1.44 2-.44.64-.75 1.28-1 1.78a22.66 22.66 0 00-2 5 23.44 23.44 0 00-.82 5.31 26.71 26.71 0 00.72 7c.22 1.16.65 2.26 1 3.38a33.94 33.94 0 001.41 3.21 36.93 36.93 0 008.44 10.95 47.5 47.5 0 005.77 4.43 35.5 35.5 0 0010.02 4.59 86.41 86.41 0 0010 2.09 84.59 84.59 0 0018.2.51c4.8-.31 9.33-.8 13.8-1.39 2.25-.3 4.49-.63 6.76-1l3.43-.59.83-.11a15.59 15.59 0 001.98-.25 46 46 0 014.66-.82c.69-.12 2.24-.87 2.34-1.35.06-.28-.19-.56-.15-.85.09-.65-1.16-1.47-2.06-1.25-.9.22-1.89.51-2.84.73-.95.22-2 .37-3 .62a9.82 9.82 0 00-1.16.38c-.19.06-.39.13-.58.18l-.29.08-.69.12c-3.55.62-7 1.3-10.81 1.68-5.54.53-11.42 1.31-17.15 1.37a73.61 73.61 0 01-18.84-1.81 41.54 41.54 0 01-16.81-8.06 37.32 37.32 0 01-7.9-8.78 27.1 27.1 0 01-4.12-10.8C91.25 17.6 98.76 6.5 108.89 3.76a15.83 15.83 0 0114.56 3.4 23.24 23.24 0 017.36 13.74 28.32 28.32 0 01.29 8 28.05 28.05 0 01-2.06 7.7 37.16 37.16 0 01-5 8.63 39.08 39.08 0 01-7 7l-.87.66-.14.11c-1.69 1.29-3.61 2.56-5.55 3.75a54.34 54.34 0 01-12 5.4c-.42 1-1 2.35-.6 3.17 1.18-.35 2.25-.69 3.52-1.19.8-.28 1.61-.63 2.44-1 .83-.37 1.66-.72 2.49-1.09z"></path><path d="M46.93 71a8.72 8.72 0 011.16 0c.51 0 1.48.05 2 0l8.52-.5c8.84-.54 17.78-1 26.66-2.45 2.33-.38 4.67-.8 7-1.29a56.65 56.65 0 0010.45-3.26 85.2 85.2 0 009.11-4.57 48.44 48.44 0 0014-12c.86-1 1.57-2.14 2.33-3.2s1.34-2.12 1.89-3.23a35.91 35.91 0 002.81-7.11 31.08 31.08 0 00.4-12.78 6.21 6.21 0 01-1.89 2.64 25.44 25.44 0 01-1 9.32l-.09.26a21.31 21.31 0 01-.69 2 41.94 41.94 0 01-3.72 7.43 41.78 41.78 0 01-5.3 6.63 52.72 52.72 0 01-15.45 10.61 73.71 73.71 0 01-18.17 5.41 207.23 207.23 0 01-24.09 2.59l-15.92.87a4.07 4.07 0 01-.01 2.63zM21.1 71.79a1.43 1.43 0 01-.27-1.49 2.72 2.72 0 011.81-1.54c1-.14 2.13.44 3.2.44 1.47 0 2.94-.27 4.42-.39 1-.08 1.92 0 2.86-.15a17 17 0 012.57-.11 5.7 5.7 0 001.17 0 3 3 0 011.12-.16c1 .18 1.3 2.22.71 2.91-.45.53-1.56.36-2.18.36h-2.67c-2.13.13-4.28 0-6.41.1-.91 0-1.8.24-2.7.35-.9.11-1.7.15-2.56.2a1.31 1.31 0 01-1.07-.52zM7.5 71.7a3.09 3.09 0 010-1 1.26 1.26 0 01.4-.74 2.18 2.18 0 012.16-.49 9.2 9.2 0 002.87 0 9.22 9.22 0 013.1 0 2 2 0 011.17.72c.46.6.61 1.35-.14 1.8a5.18 5.18 0 01-2.91.44c-1.34-.13-2.75.53-4.15.76a2 2 0 01-1.34-.22A2.49 2.49 0 017.5 71.7zM.01 71.57c.082-.29.2-.569.35-.83a1.91 1.91 0 013.27-.25c.54.63.61 2.26-.16 2.72a4.27 4.27 0 01-1.32.44c-1.12.1-2.05-.23-2.14-2.08z"></path></g></svg> */}
              </div>
              <div className="md:w-1/2 relative flex items-center md:w-1/2  h-auto sm:px-4 py-5 md:mx-auto overflow-hidden    via-transparent">
                {/* <!-- Slide Page 1 --> */}
                <div className="flex md:px-2 md:space-x-10 transition w-full duration-500 ease-out  xl:pl-6 h-94">
                  {/* <!-- story 1 --> */}
                  <Link href={data.FeaturedWebinar.WebinarURL}>
                    <a
                      onClick={() => {
                        onClick({
                          stream_score: resolve_stream_score(
                            data.FeaturedWebinar.tagClass
                          ),
                          event_name: "Card Click",
                          section_name: "Featured Webinar Section",
                          page_source: `${data.PageSEO.PageTitle}`,
                          label: `${data.FeaturedWebinar.WebinarTitle}`,
                        });
                      }}
                      className="md:flex md:flex-col md:flex-shrink-0 w-full overflow-hidden  shadow-lg"
                    >
                      <div className="flex-shrink-0 mb-10">
                        <div
                          className={`mt-4 mx-4 z-20  border border-white ${data.FeaturedWebinar.tagClass}  uppercase hyperlink absolute top:0   flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block opactiy-60`}
                        >
                          <span className="text-white">
                            Digital {data.FeaturedWebinar.tag}
                          </span>
                        </div>
                      </div>
                      <div className=" flex flex-col justify-between flex-1 px-6 py-2 bg-white ">
                        <div className="flex-1">
                          <Link
                            href={data.FeaturedWebinar.WebinarURL}
                            className="block"
                            passHref
                          >
                            <a
                              onClick={() => {
                                onClick({
                                  stream_score: resolve_stream_score(
                                    data.FeaturedWebinar.tagClass
                                  ),
                                  event_name: "Card Click",
                                  section_name: "Featured Webinar Section",
                                  page_source: `${data.PageSEO.PageTitle}`,
                                  label: `${data.FeaturedWebinar.WebinarTitle}`,
                                });
                              }}
                              className=""
                            >
                              <span className="mt-2 card-heading text-gray-900 sm:text-xl">
                                {data.FeaturedWebinar.WebinarTitle}
                              </span>
                              <span className="block card-subheading text-gray-500 sm:text-sm">
                                {data.FeaturedWebinar.WebinarDescription}
                              </span>
                              <div className="items-center ">
                                <div className="relative mb-5">
                                  <div className="flex mb-5 ">
                                    {data.FeaturedWebinar.Speaker.map(
                                      (data) => (
                                        <div
                                          key="data"
                                          className="h-16 mr-6 rounded-full mr-10 "
                                        >
                                          <Image
                                            width="60%"
                                            height="60%"
                                            className="w-16 h-16 mr-6 rounded-full"
                                            src={data.AvatarURL}
                                            alt=""
                                          />
                                          <p className="text-xs font-medium  text-gray-500">
                                            <span className="hyperlink">
                                              {data.Name}
                                              <br />
                                            </span>
                                            <span className="text-xs">
                                              {data.Description}
                                            </span>
                                          </p>
                                        </div>
                                      )
                                    )}
                                  </div>
                                  <div className="flex ">
                                    <div className="block mt-14  h-10 mr-4 relative left-0 flex flex-wrap items-center">
                                      <Image
                                        width="30%"
                                        height="30%"
                                        className=" w-full shadow-sm max-h-20 mr-10"
                                        src="/webinar/calendar.png"
                                        alt="Calendar"
                                      />
                                      <time className="ml-2 hyperlink text-black">
                                        {formattedDate}
                                      </time>
                                    </div>
                                    <div className="block mt-14  h-10 mr-4 relative left-0 flex-wrap flex items-center">
                                      <Image
                                        width="30%"
                                        height="30%"
                                        className=" w-full shadow-sm max-h-20 mr-10"
                                        src="/webinar/clock.png"
                                        alt="Calendar"
                                      />
                                      <time className="ml-2 hyperlink text-black">
                                        {time}&nbsp;
                                        {data.FeaturedWebinar.TimeZone}
                                      </time>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <Link href={data.FeaturedWebinar.WebinarURL}>
                                    <a
                                      onClick={() => {
                                        onClick({
                                          stream_score: resolve_stream_score(
                                            data.FeaturedWebinar.tagClass
                                          ),
                                          event_name: "Button Click",
                                          section_name:
                                            "Featured Webinar Section",
                                          page_source: `${data.PageSEO.PageTitle}`,
                                          label: `${data.FeaturedWebinar.CTAText}`,
                                        });
                                      }}
                                      target="_blank"
                                      className="mb-1 inline-block py-2 px-10  border-2 border-black bg-black hover:bg-gray-300 hover:text-black shadow text-white  rounded-r-xl rounded-b-xl transition duration-200 uppercase hyperlink"
                                    >
                                      {data.FeaturedWebinar.CTAText}
                                    </a>
                                  </Link>
                                </div>
                              </div>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="sm:hidden block  bg-black flex items-center justify-center p-5 sticky z-30 md:top-16 sm:top-10">
            <h1 className="w-1/6 uppercase text-white navbar-h ">Filter By:</h1>
            <form
              onChange={handleChange}
              className="w-5.5/6 grid grid-cols-4 gap-7"
            >
              <select
                name="stream"
                id="stream"
                className="p-2 pr-4 text-black bg-white  w-90"
                style={{
                  webkitAppearance: "none",
                  mozAppearance: "none",
                  appearance: "none",
                  background:
                    "url('/assets/icons/down-arrow.png') 92% / 8% no-repeat #fff",
                }}
              >
                {streamOptions.map((item) => (
                  <option
                    id="option"
                    style={{ appearance: "none" }}
                    onMouseEnter={colorChange}
                    key="item"
                    value={item.value}
                  >
                    {item.label}
                  </option>
                ))}
              </select>

              <select
                name="role"
                id="role"
                className="p-2 pr-4 text-black bg-white  w-90"
                style={{
                  webkitAppearance: "none",
                  mozAppearance: "none",
                  appearance: "none",
                  background:
                    "url('/assets/icons/down-arrow.png') 92% / 8% no-repeat #fff",
                }}
              >
                {roleOptions.map((item) => (
                  <option
                    id="option"
                    style={{ appearance: "none" }}
                    onMouseEnter={colorChange}
                    key="item"
                    value={item.value}
                  >
                    {item.label}
                  </option>
                ))}
              </select>
            </form>
          </section>
        </div>
        <section className="w-full lg:p-10 ">
          <div className="flex flex-wrap md:-mx-4 -mb-4 md:mb-0 px-2 md:px-10">
            {/* <!-- On demand Filter Options--> */}

            {/* <!-- On demand Webinar Card Display--> */}

            <div className="w-full md:w-full md:pl-20 mb-4 md:mb-0  mt-10">
              {/* Chips Section */}

              <div className="xl:gap-6 gap-3 grid sm:grid-cols-1 w-full grid-cols-2 xl:grid-cols-3 p-3 mx-auto xl:p-6">
                {ResourceList.slice(0)
                  .reverse()
                  .map((dt) => (
                    <div
                      key="dt"
                      className="relative flex  px-2  group overflow-hidden false transition transform hover:-translate-y-1 duration-500"
                    >
                      <span
                        className={`absolute top-0 left-0 h-full mt-1 ml-1 bg-secondary  group-hover:bg-${dt.RelatedStream}-secondary `}
                        style={{ height: "400px", width: "345px" }}
                      ></span>
                      <div
                        className={`relative shadow bg-white flex-col p-5 px-5  group overflow-hidden false border border-black hover:border-${dt.RelatedStream}-primary `}
                      >
                        <div className="">
                          <Link href={dt.PageURL} passHref>
                            <a
                              onClick={() => {
                                onClick({
                                  stream_score: resolve_stream_score(
                                    dt.RelatedStream
                                  ),
                                  event_name: "Card Click",
                                  section_name: "Webinars Section",
                                  page_source: `${data.PageSEO.PageTitle}`,
                                  label: `${dt.WebinarTitle}-${dt.CTAText}`,
                                });
                              }}
                              className="relative block w-full h-44 overflow-hidden rounded"
                            >
                              <div
                                className={`z-20  ${dt.RelatedStream} opacity-60  absolute hyperlink top:0 mx-2 mt-2 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md uppercase text-white inline-block`}
                              >
                                <span className="text-white">
                                  Digital {dt.RelatedStream}
                                </span>
                              </div>
                              <Image
                                className="bg-secondary object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105"
                                src={dt.ImageURL}
                                alt="resource"
                                width="550"
                                height="300"
                              />
                            </a>
                          </Link>
                        </div>
                        <Link href={dt.PageURL} passHref>
                          <a>
                            <p className="hyperlink text-gray-400  uppercase mb-4">
                              Webinar
                            </p>
                            <span className="block card-subheading font-semibold leading-tight text-gray-700 mb-4 hover:text-gray-900 ">
                              {dt.WebinarTitle}
                            </span>
                            <Link href={dt.PageURL} passHref>
                              <a
                                onClick={() => {
                                  onClick({
                                    stream_score: resolve_stream_score(
                                      dt.RelatedStream
                                    ),
                                    event_name: "Card Click",
                                    section_name: "Webinars Section",
                                    page_source: `${data.PageSEO.PageTitle}`,
                                    label: `${dt.WebinarTitle}-${dt.CTAText}`,
                                  });
                                }}
                                className="inline-flex items-center   text-black hover:text-gray-400 group "
                              >
                                <span className="hyperlink group-hover:text-gray-300">
                                  {dt.CTAText}
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
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Footer--> */}
        <section className="bg-white">
          <div className="md:px-8 md:py-8 mx-auto  sm:py-10 lg:py-20 max-w-7xl">
            <div
              className={`relative py-6 overflow-hidden  lg:py-12 md:px-6 lg:p-16 lg:flex lg:items-center lg:justify-between md:shadow-xl md:bg-purple-1000 background`}
            >
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
              <div className="relative flex flex-col items-center w-full px-6 space-y-5 md:space-x-5 md:space-y-0 md:flex-row md:w-auto lg:flex-shrink-0 md:px-0">
                <Link href={data.CTA.PrimaryCTA.linkURL} passHref>
                  <a
                   onClick={() => {
                    onClick({
                      stream_score:
                        resolve_stream_score('none'),
                      event_name: "Button Click",
                      section_name: "CTA Section",
                      page_source: `${data.PageSEO.PageTitle}`,
                      label: `${data.CTA.PrimaryCTA.buttonTitle}`,
                    });
                  }}
                  className=" border-2 border-white inline-block py-3 px-10 bg-black hover:bg-gray-300 hover:text-black shadow  button  text-white rounded-r-xl rounded-b-xl transition duration-200 border-2 border-black">
                    {data.CTA.PrimaryCTA.buttonTitle}
                  </a>
                </Link>
                <Link
                  rel="noopener noreferrer"
                  href={data.CTA.SecondaryCTA.linkURL}
                  passHref
                >
                  <a
                  onClick={() => {
                    onClick({
                      stream_score:
                        resolve_stream_score('none'),
                      event_name: "Button Click",
                      section_name: "CTA Section",
                      page_source: `${data.PageSEO.PageTitle}`,
                      label: `${data.CTA.SecondaryCTA.buttonTitle}`,
                    });
                  }}
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
}
export const getServerSideProps = async () => {
  // data url from strapi

  // data url from strapi)
  const res = await fetch("https://api.ktern.com/all-webinars", {
    method: "get",
  });
  const data = await res.json();
  // console.log("data", data)
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
