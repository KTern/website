import Layout from "../component/Layout";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from 'next-seo';
import { BreadcrumbJsonLd } from 'next-seo';
import { LogoJsonLd } from 'next-seo';
import { SocialProfileJsonLd } from 'next-seo';

export default function Webinar ({data}) {
    return (
        <>
              <NextSeo
                title={data.PageSEO.PageTitle}
                description={data.PageSEO.PageDescription}
                canonical={data.PageSEO.CanonicalTag}
                openGraph={{
                    url: `${data.PageSEO.ThumbnailImageURL}`,
                    title: 'Open Graph Title',
                                description: 'Open Graph Description',
                    images: [
                    {
                        url: 'https://www.example.ie/og-image-01.jpg',
                        width: 800,
                        height: 600,
                        alt: 'Og Image Alt',
                        type: 'image/jpeg',
                    },
                    {
                        url: 'https://www.example.ie/og-image-02.jpg',
                        width: 900,
                        height: 800,
                        alt: 'Og Image Alt Second',
                        type: 'image/jpeg',
                    },
                    { url: 'https://www.example.ie/og-image-03.jpg' },
                    { url: 'https://www.example.ie/og-image-04.jpg' },
                    ],
                    site_name: 'SiteName',
                }}
                twitter={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                }}
                facebook={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                    appId: '1234567890',
                }}
                languageAlternates={[{
                    hrefLang: 'de',
                    href: 'https://www.canonical.ie/de',
                } ]}
                additionalMetaTags={[{
                    property: 'dc:creator',
                    content: 'Jane Doe'
                    }, {
                    name: 'application-name',
                    content: 'NextSeo'
                    }, {
                    httpEquiv: 'x-ua-compatible',
                    content: 'IE=edge; chrome=1'
                    } ]}
                additionalLinkTags={[
                    {
                        rel: 'icon',
                        href: 'https://www.test.ie/favicon.ico',
                    },
                    {
                        rel: 'apple-touch-icon',
                        href: 'https://www.test.ie/touch-icon-ipad.jpg',
                        sizes: '76x76'
                    },
                    {
                        rel: 'manifest',
                        href: '/manifest.json'
                    }
                ]}
                 
    />
<BreadcrumbJsonLd
      itemListElements={[
        {
          position: 1,
          name: 'Books',
          item: 'https://example.com/books',
        },
        {
          position: 2,
          name: 'Authors',
          item: 'https://example.com/books/authors',
        },
        {
          position: 3,
          name: 'Ann Leckie',
          item: 'https://example.com/books/authors/annleckie',
        },
        {
          position: 4,
          name: 'Ancillary Justice',
          item: 'https://example.com/books/authors/ancillaryjustice',
        },
      ]}
    />
 <LogoJsonLd
      logo="http://www.your-site.com/images/logo.jpg"
      url="http://www.your-site.com"
    />
<SocialProfileJsonLd
      type="Person"
      name="your name"
      url="http://www.your-site.com"
      sameAs={[
        'http://www.facebook.com/your-profile',
        'http://instagram.com/yourProfile',
        'http://www.linkedin.com/in/yourprofile',
        'http://plus.google.com/your_profile',
      ]}
    />
    <Layout > 
        {/* <!--Upcoming Webinar Section--> */}
        <div className=" mx-auto md:py-4">
            <section className="w-full  bg-white py-12 pt-20  bg-secondary" >
            <div className="flex flex-col items-center justify-center md:mx-auto xl:flex-row md:max-w-7xl">
                <div className="relative flex flex-col items-start justify-center w-full h-full max-w-2xl px-6 mx-auto xl:max-w-none xl:w-2/5">
                            <h2 className=" heading  text-gray-900 sm:w-4/5 mb-5 mt-5 text-3">{data.PageHeader.header}</h2>
                            <p className="subheading">{data.PageHeader.subHeading}</p>
                    {/* <div className="w-20 h-1 mt-3 ml-1 bg-black  rounded-full"></div> */}
                   
                      <svg className="hidden md:block absolute top-0 right-0  w-auto h-24 mt-20 text-black fill-current  xl:mr-5 xl:-mt-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 74"><defs></defs><g fillRule="nonzero"><path d="M43.13 71.58c.29-.025.58-.025.87 0 .3 0 .71-.14 1-.17.54 0 1.08-.19 1.62-.23l2.3-.17 4.65-.25 6.47-.26h.68c3-.15 6-.3 9-.53 1.68-.14 5.83-.49 6.21-.52.63 0 4.36-.53 5-.63.25 0 1.95-.35 3.35-.58-.09-1-.55-1.77-.62-2.71-4.33.66-8.7 1.18-13 1.51-5.34.4-10.71.66-16.08 1l-7 .39c-1.4 0-2.82-.31-4.17-.26a2 2 0 00-1 .31c-.3.21-.4.16-.5.3a1.18 1.18 0 00-.12.81c.06.84.66 2.11 1.34 1.99zM106.33 62.04l.5-.23c.31-.13.72-.33 1.16-.56.88-.46 1.94-1 2.59-1.38l.56-.31a31.87 31.87 0 002.81-1.74 48.77 48.77 0 0014-13.59 38.22 38.22 0 004.34-8.87 28.9 28.9 0 001.51-9.86 31.56 31.56 0 00-3.3-13.46 23.9 23.9 0 00-3.62-5.22 20.47 20.47 0 00-2.38-2.22c-.42-.34-.89-.63-1.33-.94a10.88 10.88 0 00-1.38-.85A18.21 18.21 0 00109.16.92c-.5.11-1 .22-1.45.33-.45.11-.88.31-1.3.47-.42.16-.86.3-1.27.49-.41.19-.8.41-1.21.61A27.71 27.71 0 0098.5 6.5l-1.51 1.42-1.59 1.84c-.51.66-1 1.36-1.44 2-.44.64-.75 1.28-1 1.78a22.66 22.66 0 00-2 5 23.44 23.44 0 00-.82 5.31 26.71 26.71 0 00.72 7c.22 1.16.65 2.26 1 3.38a33.94 33.94 0 001.41 3.21 36.93 36.93 0 008.44 10.95 47.5 47.5 0 005.77 4.43 35.5 35.5 0 0010.02 4.59 86.41 86.41 0 0010 2.09 84.59 84.59 0 0018.2.51c4.8-.31 9.33-.8 13.8-1.39 2.25-.3 4.49-.63 6.76-1l3.43-.59.83-.11a15.59 15.59 0 001.98-.25 46 46 0 014.66-.82c.69-.12 2.24-.87 2.34-1.35.06-.28-.19-.56-.15-.85.09-.65-1.16-1.47-2.06-1.25-.9.22-1.89.51-2.84.73-.95.22-2 .37-3 .62a9.82 9.82 0 00-1.16.38c-.19.06-.39.13-.58.18l-.29.08-.69.12c-3.55.62-7 1.3-10.81 1.68-5.54.53-11.42 1.31-17.15 1.37a73.61 73.61 0 01-18.84-1.81 41.54 41.54 0 01-16.81-8.06 37.32 37.32 0 01-7.9-8.78 27.1 27.1 0 01-4.12-10.8C91.25 17.6 98.76 6.5 108.89 3.76a15.83 15.83 0 0114.56 3.4 23.24 23.24 0 017.36 13.74 28.32 28.32 0 01.29 8 28.05 28.05 0 01-2.06 7.7 37.16 37.16 0 01-5 8.63 39.08 39.08 0 01-7 7l-.87.66-.14.11c-1.69 1.29-3.61 2.56-5.55 3.75a54.34 54.34 0 01-12 5.4c-.42 1-1 2.35-.6 3.17 1.18-.35 2.25-.69 3.52-1.19.8-.28 1.61-.63 2.44-1 .83-.37 1.66-.72 2.49-1.09z"></path><path d="M46.93 71a8.72 8.72 0 011.16 0c.51 0 1.48.05 2 0l8.52-.5c8.84-.54 17.78-1 26.66-2.45 2.33-.38 4.67-.8 7-1.29a56.65 56.65 0 0010.45-3.26 85.2 85.2 0 009.11-4.57 48.44 48.44 0 0014-12c.86-1 1.57-2.14 2.33-3.2s1.34-2.12 1.89-3.23a35.91 35.91 0 002.81-7.11 31.08 31.08 0 00.4-12.78 6.21 6.21 0 01-1.89 2.64 25.44 25.44 0 01-1 9.32l-.09.26a21.31 21.31 0 01-.69 2 41.94 41.94 0 01-3.72 7.43 41.78 41.78 0 01-5.3 6.63 52.72 52.72 0 01-15.45 10.61 73.71 73.71 0 01-18.17 5.41 207.23 207.23 0 01-24.09 2.59l-15.92.87a4.07 4.07 0 01-.01 2.63zM21.1 71.79a1.43 1.43 0 01-.27-1.49 2.72 2.72 0 011.81-1.54c1-.14 2.13.44 3.2.44 1.47 0 2.94-.27 4.42-.39 1-.08 1.92 0 2.86-.15a17 17 0 012.57-.11 5.7 5.7 0 001.17 0 3 3 0 011.12-.16c1 .18 1.3 2.22.71 2.91-.45.53-1.56.36-2.18.36h-2.67c-2.13.13-4.28 0-6.41.1-.91 0-1.8.24-2.7.35-.9.11-1.7.15-2.56.2a1.31 1.31 0 01-1.07-.52zM7.5 71.7a3.09 3.09 0 010-1 1.26 1.26 0 01.4-.74 2.18 2.18 0 012.16-.49 9.2 9.2 0 002.87 0 9.22 9.22 0 013.1 0 2 2 0 011.17.72c.46.6.61 1.35-.14 1.8a5.18 5.18 0 01-2.91.44c-1.34-.13-2.75.53-4.15.76a2 2 0 01-1.34-.22A2.49 2.49 0 017.5 71.7zM.01 71.57c.082-.29.2-.569.35-.83a1.91 1.91 0 013.27-.25c.54.63.61 2.26-.16 2.72a4.27 4.27 0 01-1.32.44c-1.12.1-2.05-.23-2.14-2.08z"></path></g></svg>
                </div>
                <div className=" relative flex items-center md:w-1/2 w-full h-auto sm:px-4 py-5 md:mx-auto overflow-hidden    via-transparent">
                    {/* <!-- Slide Page 1 --> */}
                    <div className="flex md:px-6 md:space-x-6 transition w-full duration-500 ease-out transform xl:pl-6 h-94" >
                        {/* <!-- story 1 --> */}
                        <div className="md:flex md:flex-col md:flex-shrink-0 w-full overflow-hidden  shadow-lg">
                                    <div className="flex-shrink-0">
                                         <div className={`mt-4 mx-4 z-20 ${data.FeaturedWebinar.tagClass} text-black  uppercase hyperlink absolute top:0   flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block`}>
                                        <span>Digital {data.FeaturedWebinar.tag}</span>
                                    </div>
                            <div className="block  w-full w-80 h-60 relative transition duration-200 ease-out transform hover:scale-110">
                                    <Image layout="fill" alt="webinar" className="object-cover  h-32 sm:h-48" src={data.FeaturedWebinar.imageURL} />
                                </div>
                            </div>
                            <div className="flex flex-col justify-between flex-1 px-6 py-2 bg-white ">
                                <div className="flex-1">
                                   
                                    <Link href={data.FeaturedWebinar.WebinarURL} className="block" passHref>
                                        <a className="">
                                        <span className="mt-2 card-heading text-gray-900 sm:text-xl">
                                           {data.FeaturedWebinar.WebinarTitle}
                                        </span>
                                        <span className="block card-subheading text-gray-500 sm:text-sm">
                                           {data.FeaturedWebinar.WebinarDescription}
                                                    </span>
                                                    <div className="items-center sm:flex">
                                                        <div className="relative">
                                                            <div className="flex mb-5">

                                                        {data.FeaturedWebinar.Speaker.map((data) => (
                                                                        <div key="data" className="h-16 mr-6 rounded-full mr-10 "><Image width="60%" height="60%" className="w-16 h-16 mr-6 rounded-full" src={data.AvatarURL} alt="" />
                                                                <p className="text-xs font-medium  text-gray-500">                                                                
                                                                        <span className="hyperlink">{data.Name}<br/></span>
                                                                  <span className="text-xs">{data.Description}</span>         
                                                            </p></div>
                                                          ) )} 
                                                               
                                                            </div>
                                                              <div className="flex">
                                                                    
                                                             <div className="block mt-14  h-10 mr-4 relative left-0 flex items-center">
                            <Image width="30%" height="30%" className=" w-full shadow-sm max-h-20 mr-10" src="/webinar/calendar.png" alt="Calendar"/><time className="ml-2 hyperlink">{data.FeaturedWebinar.Date}</time>
                                                                </div>
                                                               <div className="block mt-14  h-10 mr-4 relative left-0 flex items-center">
                            <Image width="30%" height="30%" className=" w-full shadow-sm max-h-20 mr-10" src="/webinar/clock.png" alt="Calendar"/><time className="ml-2 hyperlink">{data.FeaturedWebinar.Time} {data.FeaturedWebinar.TimeZone}</time>
                                                                </div>
                                                          </div>
                                                            
                                                        </div>
                                                    
                                </div>
                                                </a>
                                                
                                    </Link>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>
        </div>
         <section className="w-full lg:p-10 ">
               
                <div className="flex flex-wrap md:-mx-4 -mb-4 md:mb-0 px-2 md:px-10">
                    {/* <!-- On demand Filter Options--> */}
                <div className="hidden md:block w-full md:w-1/5 md:px-4 mb-4 mt-10  md:mb-0">
                    <form action="#" method="post" className="">
                            <div className="mb-6">
                                <h1 className="text-2xl mt-2 mb-2 card-heading">Streams</h1>
                                    <hr className="mb-2" /></div>
                           {data.DigitalStreamsFilter.map((data)=>( <div key="data" className="mb-6">
                                <input type="checkbox" id={data.Id} name={data.Name} value={data.Value}/>
                                <label className="card-subheading" htmlFor="vehicle1">{data.FilterName}</label><br/>
                            </div>))}
                           
                        </form>          
                    <form action="#" method="post" className="">
                            <div className="mb-6">
                                <h1 className="text-2xl mt-2 mb-2 card-heading">Role</h1>
                                <hr className="mb-2"/></div>
                                {data.RolesFilter.map((data) => (
                                    <div key="data" className="mb-6">
                                <input type="checkbox" name="field-name" value="example value" />
                                <label>
                                <span className="ml-1 card-subheading">Project Manager</span>
                                </label>
                                    </div>
                                ))}
                               
                           
                        </form>  
                    </div>
                {/* <!-- On demand Webinar Card Display--> */}
           
                    <div className="w-full md:w-4/5 md:pl-20 mb-4 md:mb-0  mt-10">
                        {/* Chips Section */}
                         <section className=" flex sm:pt-5  pb-10 items-center justify-end">
                          <input id="demo-2" style={{width:'35%'}} type="search" placeholder="Search"/>
                        </section>
                       
                        <div className="xl:gap-6 gap-3 grid sm:grid-cols-1 w-full grid-cols-2 xl:grid-cols-3 p-3 mx-auto xl:p-6">
{data.WebinarList.map(data=>(
    <div key="data" className="relative  space-y-3 shadow-lg hover:shadow-xl hover:border-black border-2 p-4" >
                                    <div className="">
                                    <Link href={data.PageURL} passHref>
                                            <a className="relative block w-full h-44 overflow-hidden rounded">
                                                 <div className={`z-20  ${data.tagClass}  absolute hyperlink top:0 mx-2 mt-2 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md uppercase text-black inline-block`}>
                                        <span>Digital {data.RelatedStream}</span>
                                    </div>
                                    <Image className="bg-secondary object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src={data.ImageURL} alt="resource" layout="fill"/>
                                    </a> 
                                    </Link>
                                    </div>
                                    <div className="">
                                    <p className="hyperlink text-gray-400  uppercase mb-4">Webinar</p>
                                    <span className="block card-subheading font-semibold leading-tight text-gray-700 mb-4 hover:text-gray-900 ">{data.WebinarTitle}</span>
                                <Link href={data.PageURL}  passHref>
                                                <a className="inline-flex items-center   text-black hover:text-gray-400 group ">
                                                <span className="hyperlink group-hover:text-gray-300">Read more</span>
                                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                                </svg>
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
                <div className="relative py-6 overflow-hidden  bg-gradient-to-r from-black to-secondary lg:py-12 md:px-6 lg:p-16 lg:flex lg:items-center lg:justify-between md:shadow-xl md:bg-purple-1000">
                <div className="absolute top-0 right-0 hidden w-full -mt-20 transform rotate-45 translate-x-1/2 bg-white sm:block h-96 opacity-5"></div>
                <div className="absolute top-0 left-0 hidden w-full -mt-20 transform rotate-45 -translate-x-1/2 bg-white sm:block h-96 opacity-5"></div>
                <div className="relative p-6  md:p-0 md:pb-4">
                <h2 className="card-heading  leading-9 tracking-tight text-white  sm:leading-10">{data.CTA.CTATitle}</h2>
                <p className="w-full mt-5 card-subheading text-white ">{data.CTA.CTADescription}</p>
                </div>
                <div className="relative flex flex-col items-center w-full px-6 space-y-5 md:space-x-5 md:space-y-0 md:flex-row md:w-auto lg:flex-shrink-0 md:px-0">
                <Link  href={data.CTA.PrimaryCTA.linkURL} passHref><a className="  inline-block py-3 px-10 bg-black hover:bg-gray-300 hover:text-black shadow  button  text-white rounded-r-xl rounded-b-xl transition duration-200 border-2 border-black">{data.CTA.PrimaryCTA.buttonTitle}</a></Link>
                <Link  rel="noopener noreferrer" href={data.CTA.SecondaryCTA.linkURL} passHref><a target="_blank" className="  inline-block py-3 px-10 bg-white button hover:bg-gray-50 hover:text-black shadow hyperlink  text-black rounded-r-xl rounded-b-xl transition duration-200 border-2 border-black">{data.CTA.SecondaryCTA.buttonTitle}</a></Link>
                </div>
                </div>
                </div>
            </section> 
        
            </Layout>
            </>
    )
}
export const getServerSideProps = async () => {
    // data url from strapi
    
    
    // data url from strapi)
    const res = await fetch("https://api.ktern.com/all-webinars",{method:'get'});
    const data = await res.json();
    console.log("data",data)
    return {
        props: {
            data:data
        }
    }
}