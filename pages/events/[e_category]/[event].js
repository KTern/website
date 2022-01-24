import Image from "next/image";
import Link from "next/link";
import Countdown from "react-countdown";
import Layout from "../../../component/Layout";

import Carousel from "react-multi-carousel";
import image from "next/image";
import { Timeline } from "react-twitter-widgets";
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
export default function Events({ h_data, f_data, data }) {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    // Render a countdown
    return (
      <div className="flex md:space-x-4  ">
        <span className="h-20 w-20 items-center events-bg flex justify-center bg-white border-2 border-white  text-sky-800 shadow-xl rounded-full heading ">
          {days}
        </span>
        <span className="items-center flex justify-center text-white text-3xl">
          :
        </span>
        <span className="h-20 w-20 items-center events-bg flex justify-center bg-white border-2 border-white  text-sky-800 shadow-xl rounded-full heading ">
          {hours}
        </span>
        <span className="items-center flex justify-center text-white text-3xl">
          :
        </span>
        <span className="h-20 w-20 items-center events-bg flex justify-center bg-white border-2 border-white  text-sky-800 shadow-xl rounded-full heading ">
          {minutes}
        </span>
        <span className="items-center flex justify-center text-white text-3xl">
          :
        </span>
        <span className="h-20 w-20 items-center events-bg flex justify-center bg-white border-2 border-white  text-sky-800 shadow-xl rounded-full heading ">
          {seconds}
        </span>
      </div>
    );
  };
  return (
    <body className="">
      <Layout h_data={h_data} f_data={f_data} className="">
        {/* Hero Section */}
        <section className="overflow-hidden  bg-black py-10">
          <div className="   bg-opacity-40 bg-roadshowbg rounded-b-9xl pb-20 overflow-hidden  shadow-xl ">
            <div className=" px-4 mx-auto pb-5">
              <div className="relative flex flex-col items-center justify-center pt-2 z-20 mb-16 xl:mb-0">
                <span className="block mb-4 mt-10 text-center  tracking-wide heading text-white">
                  Better communication and work
                </span>
                <h1 className="max-w-lg mb-6 mx-auto  text-center text-white subheading  leading-tight">
                  Stay home and Create design
                </h1>
                <Countdown
                
                  renderer={renderer}
                  date={"2022-01-25T20:38:03"}
                  className="mb-4"
                />
                <div className="flex space-x-4 mt-10">
                  <Link href="#SeeAllTracks" passHref>
                    <a
                      className={`inline-block py-3 px-10  bg-black border-2 border-white text-white hover:bg-secondary hover:text-black shadow text-black  rounded-r-xl rounded-b-xl transition duration-200 uppercase border-2 border-black  hyperlink button`}
                    >
                      See All Tracks
                    </a>
                  </Link>
                  <Link href="#RegisterNow" passHref>
                    <a
                      className={`inline-block py-3 px-10  bg-white text-black hover:bg-secondary hover:text-black shadow text-black  rounded-r-xl rounded-b-xl transition duration-200 uppercase border-2 border-black  hyperlink button`}
                    >
                      Reserve your Seat Now
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Hero Section */}
        {/* Speakers Section */}
        <section className="pb-10 pt-5">
          <div className="container mx-auto text-center ">
            <div className=" mx-auto mb-8">
              <span className="inline-block py-1 px-3 hyperlink bg-blue-100 text-gray-600 text-sm rounded-xl">
                Our Speakers
              </span>
              <h2 className="section-heading mt-2 mb-4 ">
                Inspired by the elite
              </h2>
              <p className="text-sky-700 leading-loose section-subheading">
                Watch out for the premier speakers of this Digital Roadshow
                &nbsp;|&nbsp; Jan 24 - Jan 28
              </p>
            </div>
            <div className="grid md:grid-cols-5 grid-cols-2  gap-10">
              <div className=" px-5 mb-4">
                <Image
                  width={100}
                  height={100}
                  className="h-20 w-20 mx-auto rounded-full object-cover object-top"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                  alt=""
                />
                <p className="mt-6 mb-2 text-md">Anne Bailey</p>
                <p className="text-gray-600 text-sm">CEO</p>
              </div>
              <div className=" px-5 mb-4">
                <Image
                  width={100}
                  height={100}
                  className="h-20 w-20 mx-auto rounded-full object-cover object-top"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                  alt=""
                />
                <p className="mt-6 mb-2 text-md">Anne Bailey</p>
                <p className="text-gray-600 text-sm">CEO</p>
              </div>
              <div className=" px-5 mb-4">
                <Image
                  width={100}
                  height={100}
                  className="h-20 w-20 mx-auto rounded-full object-cover object-top"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                  alt=""
                />
                <p className="mt-6 mb-2 text-md">Anne Bailey</p>
                <p className="text-gray-600 text-sm">CEO</p>
              </div>

              <div className=" px-5 mb-4">
                <Image
                  width={100}
                  height={100}
                  className="h-20 w-20 mx-auto rounded-full object-cover object-top"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                  alt=""
                />
                <p className="mt-6 mb-2 text-md">Julie Brown</p>
                <p className="text-gray-600 text-sm">Head of Development</p>
              </div>
              <div className=" px-5 mb-4">
                <Image
                  width={100}
                  height={100}
                  className="h-20 w-20 mx-auto rounded-full object-cover object-top"
                  src="https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                  alt=""
                />
                <p className="mt-6 mb-2 text-md">Tom Jones</p>
                <p className="text-gray-600 text-sm">Head of Operations</p>
              </div>
            </div>
          </div>
        </section>
        {/*/ Speakers Section */}
        {/* Featured Events */}
        <section id="SeeAllTracks" className="anchor">
         <section className=" px-10 py-5  bg-eventsbg bg-cover  mx-5">
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
              Featured Events
            </h2>
            <p className="section-subheading text-center text-skys-700">
              Immerse yourself in 5 days of digital exploration and useful
              information on SAP DevOps
            </p>
          </div>
          <Carousel
            className=" flex py-5   z-10 -mx-4 overflow-hidden "
            responsive={responsive}
          >
            {data.Resource.map((data) => (
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
                        <span className="bg-white block card-subheading h-1/5 font-semibold leading-tight text-gray-700 mb-4 hover:text-gray-900 ">
                          {data.CardTitle}
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
                        <span className="bg-white block card-subheading h-1/5 font-semibold leading-tight text-gray-700 mb-4 hover:text-gray-900 ">
                          {data.CardTitle}
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
        </section>
        {/* /Featured Events */}
        {/* Register Section */}
        <section id="RegisterNow" className="anchor">
          <section className="py-10 px-5">
          <div className="flex flex-col items-center justify-center text-justify">
            <p className="section-heading mb-5">Reserve Your Seat Now</p>
            <p className="section-subheading max-w-2xl text-gray-700 text-center mb-5">
              Register for free to hear what our SAP fraternity says on the
              disruptive automation in SAP world. What next ? Also get your SAP
              DXaaS Kit and benefit from valuable insights.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-1 ">
            <div className="bg-sky-100 rounded-b-xl10 rounded-tr-xl10 flex flex-col items-center justify-center mb-4  md:mx-24 md:px-12 py-5">
              <div className="h-100  w-auto bg-white my-10 shadow-2xl rounded-xl transform translate-10 ">
                <Image
                  src="/events-landing/form.svg"
                  height={250}
                  width={300}
                  alt="Forming ideas"
                />
              </div>
            </div>
            <div className="mx-auto">
              <Image
                src="/events-landing/form-template.jpg"
                width={400}
                height={370}
                alt="form template"
              />
            </div>
          </div>
          </section>
        </section>
        {/*/ Register Section */}
        {/* Access Report */}
        <section className="relative bg-white   overflow-hidden">
          <div className="hidden md:block absolute top-0 right-0 w-1/2 h-full  rounded-b-10xl"></div>
          <div className="relative  mx-auto">
            <div className="flex flex-wrap items-center text-center">
              <div className="w-full md:w-1/2 px-20">
                <h2 className="mt-8 mb-8 section-heading leading-tight">
                  Enterprise-Ops Value Assessment Report
                </h2>
                <p className="mb-10 section-subheading text-darkBlueGray-400">
                  All participants get to have your tailor-made report with
                  insights to streamline your SAP DevOps in your SAP landscape -
                  (All for Free).
                </p>
                <Link href="/" passHref>
                  <a
                    className={`inline-block mb-10 md:mb-0 py-3 px-10  bg-black border-2 border-white text-white hover:bg-secondary hover:text-black shadow text-black  rounded-r-xl rounded-b-xl transition duration-200 uppercase border-2 border-black  hyperlink button`}
                  >
                    Access Report
                  </a>
                </Link>
              </div>
              <div className="relative w-full md:w-1/2 px-10   ">
                <div className="md:hidden absolute bottom-0 left-0 h-full w-full rounded-b-xl10 "></div>
                <div className="flex items-center justify-center bg-blue-100 p-10 shadow-2xl rounded-tr-xl10 rounded-b-xl10">
                  <Image
                    className="relative z-10 "
                    src="/events-landing/phone-full-2.png"
                    alt=""
                    width={"500px"}
                    height={"400px"}
                  />
                </div>
              </div>
            </div>
          </div>
          <Image
            width={100}
            height={100}
            className="hidden md:block absolute top-0 right-0 h-full -mr-32"
            src="/events-landing/line-right.svg"
            alt=""
          />
        </section>
        {/* /Access Report */}
        {/* Featured Articles */}
        <section className=" px-10 md:px-20 md:mx-20 mb-10 flex flex-col items-center justify-center ">
          <h2 className="section-heading mb-4">Go Digital Go Green</h2>
          <p className="section-subheading mb-10">
            Let&apos;s support the green cause
          </p>
          <div className="grid lg:grid-cols-6 grid-rows-2 gap-y-4 lg:gap-8 mb-10">
            <div className="lg:col-span-4 flex flex-col items-center justify-center rounded-xl10 shadow-xl">
              <Link href="/" passHref>
                <a
                  target="_blank"
                  className="relative  h-full w-full block w-full h-44 overflow-hidden rounded-xl"
                >
                  <div className="hidden lg:block">
                  <Image
                    priority
                    className="bg-secondary  object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105"
                    src="/events-landing/core-feature.png"
                    alt=""
                    width="750"
                    height="260"
                  /></div>
                  <div className="lg:hidden block">
                  <Image
                    priority
                    className="bg-secondary  object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105"
                    src="/events-landing/core-feature.png"
                    alt=""
                    width="650"
                    height="470"
                  /></div>
                  <div className="px-4 ">
                    <p className="md:text-lg text-md font-semibold  mb-2">
                      KTern accelerated S/4HANA Conversion for an E-Services
                      Provider in the Kingdom of Saudi Arabia​
                    </p>
               
                  </div>
                </a>
              </Link>
            </div>

            <div className="lg:col-span-2  flex flex-col items-center justify-center rounded-xl10 shadow-xl">
              <Link href="/" passHref>
                <a
                  target="_blank"
                  className="relative h-full w-full block w-full h-44 overflow-hidden rounded-xl"
                >
                  <Image
                    priority
                    className="bg-secondary  object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105 "
                    src="/events-landing/core-feature.png"
                    alt=""
                    width="650"
                    height="470"
                  />
                  <p className="text-md mb-4 font-semibold px-4">
                    KTern accelerated S/4HANA Conversion for an E-Services
                    Provider in the Kingdom of Saudi Arabia​
                  </p>
                </a>
              </Link>
            </div>
          </div>
          <div className="grid grid-rows-3 lg:grid-cols-3 gap-y-4 lg:gap-8">
            <div className=" flex items-center justify-center rounded-xl shadow-xl">
              {" "}
              <Link href="/" passHref>
                <a
                  target="_blank"
                  className="relative h-full w-full block w-full h-44 overflow-hidden rounded-xl"
                >
                  <Image
                    priority
                    className="bg-secondary  object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105 "
                    src="/events-landing/core-feature.png"
                    alt=""
                    width="650"
                    height="400"
                  />
                  <p className="text-md mb-4 font-semibold px-4">
                    KTern accelerated S/4HANA Conversion for an E-Services
                    Provider in the Kingdom of Saudi Arabia​
                  </p>
                </a>
              </Link>
            </div>
            <div className=" flex items-center justify-center rounded-xl shadow-xl">
              {" "}
              <Link href="/" passHref>
                <a
                  target="_blank"
                  className="relative h-full w-full block w-full h-44 overflow-hidden rounded-xl"
                >
                  <Image
                    priority
                    className="bg-secondary  object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105 "
                    src="/events-landing/core-feature.png"
                    alt=""
                    width="650"
                    height="400"
                  />
                  <p className="text-md mb-4 font-semibold px-4">
                    KTern accelerated S/4HANA Conversion for an E-Services
                    Provider in the Kingdom of Saudi Arabia​
                  </p>
                </a>
              </Link>
            </div>
            <div className=" flex items-center justify-center rounded-xl shadow-xl">
              {" "}
              <Link href="/" passHref>
                <a
                  target="_blank"
                  className="relative h-full w-full block w-full h-44 overflow-hidden rounded-xl"
                >
                  <Image
                    priority
                    className="bg-secondary  object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105 "
                    src="/events-landing/core-feature.png"
                    alt=""
                    width="650"
                    height="400"
                  />
                  <p className="text-md mb-4 font-semibold px-4">
                    KTern accelerated S/4HANA Conversion for an E-Services
                    Provider in the Kingdom of Saudi Arabia​
                  </p>
                </a>
              </Link>
            </div>
          </div>
        </section>
        {/* /Featured Articles */}
        {/* Discussions Section */}
        <section className="py-20 grid lg:grid-cols-4 text-center grid-rows-4 px-10">
        <div className="lg:hidden block  flex flex-col px-10">
            <h2 className="section-heading mb-4 mt-5">Join our discussions</h2>
            <p className="section-subheading text-gray-400">
              #DigitalRoadshow #KTern #SAP #DXaaS
            </p>
            <Image height={350} width={300} alt="" src="/events-landing/follow.png"/>
          </div>
          <div className="border border-gray-100">
            <Timeline
              className="col-span-1"
              dataSource={{
                sourceType: "profile",
                screenName: "KternOfficial",
              }}
              options={{
                height: "400",
              }}
            />
          </div>
          <div className="grid grid-rows-8 ">
            <iframe
              className=" row-span-4 mb-4  h-full w-full  border-gray-100"
              src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6886254574198501376"
              scrolling="yes"
              frameBorder="0"
              allowFullScreen=""
              title="Embedded post"
            />
            <Link href="https://www.linkedin.com/posts/ktern_benefits-of-quality-assurance-activity-6886254574659870720-zpPT" passHref>
              <a target="_blank" className="row-span-1 sm:border-l flex items-center justify-center text-xs text-sky-700 border-t border-r border-b">
                View on LinkedIn
              </a>
            </Link>
          </div>
          <div className="grid grid-rows-8">
            <iframe
              className=" row-span-4 mb-3 h-full w-full  border-gray-100"
              src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6886254574198501376"
              scrolling="yes"
              frameBorder="0"
              allowFullScreen=""
              title="Embedded post"
            />
            <Link href="https://www.linkedin.com/posts/ktern_benefits-of-quality-assurance-activity-6886254574659870720-zpPT" passHref>
              <a target="_blank" className="row-span-1 sm:border-l flex items-center justify-center text-xs text-sky-700 border-t border-r border-b">
                View on LinkedIn
              </a>
            </Link>
          </div>
          <div className="hidden lg:block flex flex-col px-10">
            <h2 className="section-heading mb-4 mt-5">Join our discussions</h2>
            <p className="section-subheading text-gray-400">
              #DigitalRoadshow #KTern #SAP #DXaaS
            </p>
            <Image height={220} width={100} alt="" src="/events-landing/follow.png"/>
          </div>
        </section>
        {/* /Discussions Section */}
      </Layout>
    </body>
  );
}
export const getStaticPaths = async () => {
  // dynamic route array values must be acquired here from strapi
  const data = [{ e_category: "roadshow", event: "digital-roadshow-2022" }];
  const paths = data.map((index) => {
    return {
      params: { e_category: index.e_category, event: index.event },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const name = params.e_category;

  const res = await fetch(
    `https://api.ktern.com/digital-streams?slug=digital-projects`,
    {
      method: "get",
    }
  );

  const data = await res.json();
  // console.log(data[0]);
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
