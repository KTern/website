import Image from "next/image";
import Link from "next/link";
import BreadCrumb from "../../component/breadcrumb";
import Layout from "../../component/Layout";
import ReactPlayer from "react-player";
export default function Events({ h_data, f_data, data }) {
  function formatDate(date) {
    const dateFormat = new Date(date);

    let formattedDate = dateFormat.toLocaleDateString("en-us", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    return formattedDate;
  }
  return (
    <Layout h_data={h_data} f_data={f_data}>
      {/* Banner Section */}
      <section className="relative py-8 top-10 text-white bg-events bg-cover bg-sky-800 overflow-hidden rounded-t-10">
        <div className="container md:px-4 mx-auto">
          <div className="md:grid md:grid-cols-2 md:items-center md:gap-16">
            <div className="relative px-20 mb-10 md:mb-0 text-center md:text-left z-10">
              <BreadCrumb
                color={"white"}
                b_data={[
                  { position: "", name: "Home", item: "/" },
                  { position: "dt.position", name: "Events", item: "/events" },
                ]}
              />
              <h1 className="mb-3 mt-4 text-6xl font-bold  leading-tight">
                {data.bannerSection.header}
              </h1>
              <p className="text-lg uppercase mb-10">
                {data.bannerSection.subHeading}
              </p>
              <Link href={data.bannerSection.primaryCTA.linkURL} passHref>
                <a className="sm:mb-4 inline-block py-3 px-3 md:px-10 border-2 border-black bg-white hover:bg-gray-300 hover:text-black shadow   text-black  rounded-r-xl rounded-b-xl transition duration-200 button ">
                  {data.bannerSection.primaryCTA.buttonTitle}
                </a>
              </Link>
            </div>
            <Image
              priority
              src="/events/events-calendar.svg"
              alt=""
              height={`${data.bannerSection.ImageHeight}`}
              width={`${data.bannerSection.ImageWidth}`}
            />
          </div>
        </div>
      </section>
      {/* /Banner Section */}
      {/* Highlighted Event Section */}
      <div id={data.bannerSection.primaryCTA.linkURL.slice(1,)} className="events  scroll-mt-8">
        <section className=" py-6 xl:bg-contain bg-top bg-no-repeat">
          <div className="container px-4 mx-auto">
            <div className="pt-10 text-center">
              <div className="max-w-lg mx-auto ">
                <h2
                  className="mb-8 text-black  section-heading uppercase "
                  style={{
                    textShadow:
                      " 0px 15px 5px rgba(0,0,0,0.1),0px 0px 1px rgba(0,0,0,0.5),-4px 8px 5px rgba(0,0,0,0.4)",
                  }}
                >
                  {data.highlightedEvent.header}
                </h2>
              </div>
              <div className="mb-10 md:mb-0 md:flex sm:flex-col md:space-x-4 sm:space-y-10 justify-center">
                <div>
                  <Link
                    href={data.highlightedEvent.primaryCTA.linkURL}
                    passHref
                  >
                    <a className="lg:inline-block py-3 px-6 bg-black hover:bg-gray-300 hover:text-black shadow uppercase text-white  rounded-r-xl hyperlink rounded-b-xl transition duration-200 button ">
                      {data.highlightedEvent.primaryCTA.buttonTitle}
                    </a>
                  </Link>
                </div>
                <div>
                  <Link
                    href={data.highlightedEvent.secondaryCTA.linkURL}
                    passHref
                  >
                    <a className=" lg:inline-block py-3 px-6 bg-white hover:bg-gray-300 hover:text-black shadow uppercase text-black border-2 border-black  rounded-r-xl hyperlink rounded-b-xl transition duration-200 button ">
                      {data.highlightedEvent.secondaryCTA.buttonTitle}
                      <svg
                        className="inline-block w-2 ml-2"
                        fill="currentColor"
                        viewBox="0 0 12 12"
                      >
                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative max-w-3xl mb-8 mx-auto">
              <Image
                priority
                height="1100px"
                width="1900px"
                src="/events/pattern-small.png"
                alt=""
              />
              <div
                className="absolute"
                style={{ top: "3%", left: "9%", width: "82%", height: "90%" }}
              >
                <Image
                  priority
                  layout="fill"
                  className="object-contain w-full h-full"
                  src={data.highlightedEvent.ImageURL}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* /Highlighted Event Section */}
      {/* Other Events Section */}
      <section className=" font-medium py-2 bg-events  pb-20 rounded-b-10xl">
        <div className="container px-4 mx-auto">
          {/* <span className="block mb-9 uppercase tracking-widest hyperlink leading-4 text-gray-300">Discover out blog</span> */}
          <h2 className=" section-heading leading-tight text-center mb-7">
            {data.otherEventsTitle}
          </h2>
          <div className="grid md:grid-cols-6 grid-row-2 lg:gap-y-10 md:gap-x-4">
            <div className="relative md:col-span-4 mb-40 lg:mb-0   md:px-4 ">
              <div><Image
                className="w-full hidden"
                src={data.otherEvents[0].imageUrl}
                layout="fill"
                alt=""
              />
              </div>
              <div className="absolute   md:left-1/2  md:transform md:-translate-x-1/2 md:top-60 md:px-6 w-full">
                <div className="py-6  border-t-4 rounded-tr-xl border-black px-4 md:px-10 bg-white z-10 rounded-xl shadow-xl">
                  <div className="flex items-center mb-4">
                    <a
                      className="inline-block font-heading text-lg leading-5 text-purple-500 hover:text-purple-600"
                      href="#"
                    >
                      {data.otherEvents[0].tag}
                    </a>
                    <div className="mx-4 w-px h-6 bg-gray-50"></div>
                    <p className="relative top-px uppercase tracking-widest hyperlink text-gray-200">
                      {formatDate(data.otherEvents[0].date)}
                    </p>
                  </div>
                  <h3 className="mb-2 font-heading leading-normal card-heading">
                    {data.otherEvents[0].heading}
                  </h3>
                  <p className="xl:max-w-md mb-2 card-subheading leading-8 text-black">
                    {data.otherEvents[0].subHeading}
                  </p>

                  <Link href={data.otherEvents[0].ctaUrl} passHref>
                    <a className="sm:mb-4 inline-block py-3 px-2 md:px-10 bg-black hover:bg-gray-200 hover:text-black shadow   text-white  rounded-r-xl rounded-b-xl transition duration-200  button ">
                      {data.otherEvents[0].ctaText}
                    </a>
                  </Link>
                </div>
              </div>
              <div className="h-48 xl:h-80 bg-gray-50 rounded-b-9xl"></div>
            </div>
            <div className="relative md:col-span-2  px-4">
              <div className="flex flex-col space-y-10 p -mx-4">
                <Link href={data.otherEvents[1].ctaUrl}>
                  <a className="relative border-t-4 rounded-tr-xl border-black">
                    <div className="py-12 px-6 md:px-14 bg-white rounded-tr-xl shadow-md">
                      <div className="flex items-center mb-4">
                        <p className="inline-block font-heading text-lg leading-5 text-purple-500 hover:text-purple-600">
                          {data.otherEvents[1].tag}
                        </p>
                        <div className="mx-4 w-px h-6 bg-gray-50"></div>
                        <p className="relative top-px uppercase tracking-widest text-xs text-gray-300">
                          {formatDate(data.otherEvents[1].date)}
                        </p>
                      </div>
                      <Link href={data.otherEvents[1].ctaUrl}>
                        <a className="inline-block ">
                          <h3 className="font-heading leading-normal card-heading">
                            {data.otherEvents[1].heading}
                          </h3>
                        </a>
                      </Link>
                    </div>
                  </a>
                </Link>
                <Link href={data.otherEvents[2].ctaUrl}>
                  <a className="relative border-t-4 rounded-tr-xl border-black">
                    <div className="py-12 px-6 md:px-14 bg-white rounded-tr-xl shadow-md">
                      <div className="flex items-center mb-4">
                        <p className="inline-block font-heading text-lg leading-5 text-purple-500 hover:text-purple-600">
                          {data.otherEvents[2].tag}
                        </p>
                        <div className="mx-4 w-px h-6 bg-gray-50"></div>
                        <p className="relative top-px uppercase tracking-widest text-xs text-gray-300">
                          {formatDate(data.otherEvents[2].date)}
                        </p>
                      </div>
                      <Link href={data.otherEvents[2].ctaUrl}>
                        <a className="inline-block ">
                          <h3 className="font-heading leading-normal card-heading">
                            {data.otherEvents[2].heading}
                          </h3>
                        </a>
                      </Link>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/ Other Events Section */}
      {/* Banner Video */}
      <section className="events py-10 text-center justify-center items-center flex flex-col">
        <h2 className="section-heading mb-3">{data.bannerVideo.heading}</h2>
        <p className="section-subheading mb-6 text-center">{data.bannerVideo.subHeading}</p>
        <div className="justify-center overflow-hidden bg-gradient-to-r from-sky-900 via-black to-sky-300 h-full w-full flex flex-wrap">
          <div>
            <iframe className="hidden lg:block"
            style={{height:'calc(89vh - 100px)',width:'calc(130vh)'}}
              src="https://www.youtube.com/embed/AK-K74D-mTM?rel=0?version=3&autoplay=1&&showinfo=0&loop=1&playlist=AK-K74D-mTM&mute=1"
              title="YouTube video player"
              frameBorder="0"
              scrolling="no"
              allow="accelerometer;loop; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
             <iframe className="lg:hidden block"
            style={{height:'calc(59vh - 100px)',width:'calc(60vh)'}}
              src="https://www.youtube.com/embed/AK-K74D-mTM?rel=0?version=3&autoplay=1&&showinfo=0&loop=1&playlist=AK-K74D-mTM&mute=1"
              title="YouTube video player"
              frameBorder="0"
              scrolling="no"
              allow="accelerometer;loop; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      {/* /Banner Video */}
      {/* Resources Section */}
      <section className="events w-full pt-8 text-center bg-white sm:pt-12 md:pt-16">
        <div className="px-2 mx-auto max-w-7xl mb-6">
          <div className="flex justify-center w-full pb-5 mb-4 border-gray-200">
            <h2 className="section-heading  text-gray-800 ">
              {data.featuredWebinarsTitle}
            </h2>
          </div>

          {/* <div className='grid md:grid-cols-4 gap-6 mb-8'>
              {data.featuresWebinars.map((data) => (
              <div key="data" className="relative flex  px-2  group  false transition transform hover:-translate-y-1 duration-500" >
              
                            {data.OpenNewTab &&  <div  className={`relative  bg-white flex-col p-5 px-5  group overflow-hidden false rounded-xl shadow-lg `}>   
                            <div className="bg-white">
                            <Link href={data.CTAUrl} passHref>
                                    <a
                                    	onClick={()=>{onClick({stream_score:resolve_stream_score(data.cssstreamtag),event_name:"Card Click",section_name:"Related Resources Section",page_source:`${data.PageSEO.PageTitle}`,label:`${data.CardTitle}-${data.CTAUrl}`})}}
                                     target="_blank" className="relative h-3/5 w-full block w-full h-44 overflow-hidden rounded">
                                    
                            <Image priority className="bg-secondary  object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src={data.Icon.imageURL} alt={data.Icon.imageDescription} width="550" height="300"/>
                            </a> 
                            </Link>
                            </div>
              <Link href={data.CTAUrl} passHref>
              <a className="bg-white"
                	onClick={()=>{onClick({stream_score:resolve_stream_score(data.cssstreamtag),event_name:"Card Click",section_name:"Related Resources Section",page_source:`${data.PageSEO.PageTitle}`,label:`${data.CardTitle}-${data.CTAUrl}`})}}>
                            <span className="bg-white block card-subheading h-1/5 font-semibold leading-tight text-gray-700 mb-4 hover:text-gray-900 ">{data.CardTitle}</span>
                        <Link href={data.CTAUrl}  passHref>
                                        <a
                                          	onClick={()=>{onClick({stream_score:resolve_stream_score(data.cssstreamtag),event_name:"Card Click",section_name:"Related Resources Section",page_source:`${data.PageSEO.PageTitle}`,label:`${data.CardTitle}-${data.CTAUrl}`})}} target="_blank" className="mb-6 flex bg-white w-full inline-flex h-1/5 items-center   text-black hover:text-gray-400 group ">
                                        <span className="hyperlink group-hover:text-gray-300">{data.CTAText}</span>
                                        <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                        </a>
                                    </Link>
                                    </a>
                            </Link>
                            </div>}
                            {!data.OpenNewTab &&  <div  className={`relative bg-white flex-col p-5 px-5  group overflow-hidden false rounded-xl  shadow-lg`}>   
                            <div className="bg-white">
                            <Link href={data.CTAUrl} passHref>
                                    <a
                                      	onClick={()=>{onClick({stream_score:resolve_stream_score(data.cssstreamtag),event_name:"Card Click",section_name:"Related Resources Section",page_source:`${data.PageSEO.PageTitle}`,label:`${data.CardTitle}-${data.CTAUrl}`})}}
                                     className="relative h-3/5 w-full block w-full h-44 overflow-hidden rounded">
                                    
                            <Image priority className="bg-secondary  object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src={data.Icon.imageURL} alt={data.Icon.imageDescription} width="550" height="300"/>
                            </a> 
                            </Link>
                            </div>
              <Link href={data.CTAUrl} passHref>
              <a
                	onClick={()=>{onClick({stream_score:resolve_stream_score(data.cssstreamtag),event_name:"Card Click",section_name:"Related Resources Section",page_source:`${data.PageSEO.PageTitle}`,label:`${data.CardTitle}-${data.CTAUrl}`})}}
               className="bg-white">
                            <span className="bg-white block card-subheading h-1/5 font-semibold leading-tight text-gray-700 mb-4 hover:text-gray-900 ">{data.CardTitle}</span>
                        <Link href={data.CTAUrl}  passHref>
                                        <a
                                          	onClick={()=>{onClick({stream_score:resolve_stream_score(data.cssstreamtag),event_name:"Card Click",section_name:"Related Resources Section",page_source:`${data.PageSEO.PageTitle}`,label:`${data.CardTitle}-${data.CTAUrl}`})}}
                                        className="mb-6 flex bg-white w-full inline-flex h-1/5 items-center   text-black hover:text-gray-400 group ">
                                        <span className="hyperlink group-hover:text-gray-300">{data.CTAText}</span>
                                        <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                        </a>
                                    </Link>
                                    </a>
                            </Link>
                            </div>}
                        </div>
              ))}
            </div> */}
          <div className="text-center">
            <Link href="/webinars" passHref>
              <a
                onClick={() => {
                  onClick({
                    stream_score: resolve_stream_score("none"),
                    event_name: "Link Click",
                    section_name: "Related Resources Section",
                    page_source: `${data.PageSEO.PageTitle}`,
                    label: `${data.ViewAllResources.LinkText}-${data.CTAUrl}`,
                  });
                }}
                className="inline-flex items-center mb-4  text-black hover:text-gray-400 group "
              >
                <span className="hyperlink group-hover:text-gray-300">
                  See All Webinars
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
      {/* /Resources Section */}
      {/* CTA Section */}
      <section className="events relative py-24 font-heading font-medium bg-white rounded-t-10xl overflow-hidden">
        <div className="relative container px-4 mx-auto z-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="mb-4 section-heading leading-tight">
              {data.ctaSection.CTATitle}
            </h2>
            <p className="mb-8 xl:mb-16 section-subheading">
              {data.ctaSection.CTADescription}
            </p>
            <div className="flex space-x-2 md:space-x-5 justify-center">
              <Link href={data.ctaSection.PrimaryCTA.linkURL} passHref>
                <a className="sm:mb-4 border-2 border-white  inline-block py-3 px-2 md:px-10 bg-black hover:bg-gray-300 hover:text-black shadow   text-white  rounded-r-xl rounded-b-xl transition duration-200 button ">
                  {data.ctaSection.PrimaryCTA.buttonTitle}
                </a>
              </Link>
              <Link href={data.ctaSection.SecondaryCTA.linkURL} passHref>
                <a className="sm:mb-4 inline-block py-2 px-2 md:px-10 bg-white hover:bg-gray-300 hover:text-black shadow   text-black  rounded-r-xl rounded-b-xl transition duration-200 border-2 border-black button ">
                  {data.ctaSection.SecondaryCTA.buttonTitle}
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img
            priority
            layout="fill"
            className="absolute top-64 md:top-0 left-1/2 transform -translate-x-1/2 h-full"
            src="/events/elipse-bg-gray.svg"
            alt=""
          />
        </div>
      </section>
      {/* /CTA Section */}
    </Layout>
  );
}
export const getStaticProps = async () => {
  // data url from strapi)
  const res = await fetch("https://api.ktern.com/events", {
    method: "get",
  });
  const data = await res.json();
  console.log("data", data);
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
