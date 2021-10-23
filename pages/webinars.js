import Layout from "../component/Layout";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from 'next-seo';
import { BreadcrumbJsonLd } from 'next-seo';
import { LogoJsonLd } from 'next-seo';
import { SocialProfileJsonLd } from 'next-seo';
export default function Webinar ({webinar_data}) {
    return (
        <>
            <NextSeo
                title="Simple Usage Example"
                description="A short description goes here."
                canonical="https://www.canonical.ie/"
                openGraph={{
                    url: 'https://www.url.ie/a',
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
        <div className="container mx-auto md:py-10">
            <section className="w-full  bg-white py-12 pt-20  bg-secondary" >
            <div className="flex flex-col items-center justify-center md:mx-auto xl:flex-row md:max-w-7xl">
                <div className="relative flex flex-col items-start justify-center w-full h-full max-w-2xl px-6 mx-auto xl:max-w-none xl:w-2/5">
                            <h2 className=" heading  text-gray-900 sm:w-4/5 mb-5 mt-5 text-3">Upcoming Webinars</h2>
                            <p className="subheading">A single place to discover live and on-demand webinars hosted by the KTern team and KTern&apos;s Partners across the globe. </p>
                    {/* <div className="w-20 h-1 mt-3 ml-1 bg-black  rounded-full"></div> */}
                   
                      <svg className="hidden md:block absolute top-0 right-0  w-auto h-24 mt-20 text-black fill-current  xl:mr-5 xl:-mt-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 74"><defs></defs><g fillRule="nonzero"><path d="M43.13 71.58c.29-.025.58-.025.87 0 .3 0 .71-.14 1-.17.54 0 1.08-.19 1.62-.23l2.3-.17 4.65-.25 6.47-.26h.68c3-.15 6-.3 9-.53 1.68-.14 5.83-.49 6.21-.52.63 0 4.36-.53 5-.63.25 0 1.95-.35 3.35-.58-.09-1-.55-1.77-.62-2.71-4.33.66-8.7 1.18-13 1.51-5.34.4-10.71.66-16.08 1l-7 .39c-1.4 0-2.82-.31-4.17-.26a2 2 0 00-1 .31c-.3.21-.4.16-.5.3a1.18 1.18 0 00-.12.81c.06.84.66 2.11 1.34 1.99zM106.33 62.04l.5-.23c.31-.13.72-.33 1.16-.56.88-.46 1.94-1 2.59-1.38l.56-.31a31.87 31.87 0 002.81-1.74 48.77 48.77 0 0014-13.59 38.22 38.22 0 004.34-8.87 28.9 28.9 0 001.51-9.86 31.56 31.56 0 00-3.3-13.46 23.9 23.9 0 00-3.62-5.22 20.47 20.47 0 00-2.38-2.22c-.42-.34-.89-.63-1.33-.94a10.88 10.88 0 00-1.38-.85A18.21 18.21 0 00109.16.92c-.5.11-1 .22-1.45.33-.45.11-.88.31-1.3.47-.42.16-.86.3-1.27.49-.41.19-.8.41-1.21.61A27.71 27.71 0 0098.5 6.5l-1.51 1.42-1.59 1.84c-.51.66-1 1.36-1.44 2-.44.64-.75 1.28-1 1.78a22.66 22.66 0 00-2 5 23.44 23.44 0 00-.82 5.31 26.71 26.71 0 00.72 7c.22 1.16.65 2.26 1 3.38a33.94 33.94 0 001.41 3.21 36.93 36.93 0 008.44 10.95 47.5 47.5 0 005.77 4.43 35.5 35.5 0 0010.02 4.59 86.41 86.41 0 0010 2.09 84.59 84.59 0 0018.2.51c4.8-.31 9.33-.8 13.8-1.39 2.25-.3 4.49-.63 6.76-1l3.43-.59.83-.11a15.59 15.59 0 001.98-.25 46 46 0 014.66-.82c.69-.12 2.24-.87 2.34-1.35.06-.28-.19-.56-.15-.85.09-.65-1.16-1.47-2.06-1.25-.9.22-1.89.51-2.84.73-.95.22-2 .37-3 .62a9.82 9.82 0 00-1.16.38c-.19.06-.39.13-.58.18l-.29.08-.69.12c-3.55.62-7 1.3-10.81 1.68-5.54.53-11.42 1.31-17.15 1.37a73.61 73.61 0 01-18.84-1.81 41.54 41.54 0 01-16.81-8.06 37.32 37.32 0 01-7.9-8.78 27.1 27.1 0 01-4.12-10.8C91.25 17.6 98.76 6.5 108.89 3.76a15.83 15.83 0 0114.56 3.4 23.24 23.24 0 017.36 13.74 28.32 28.32 0 01.29 8 28.05 28.05 0 01-2.06 7.7 37.16 37.16 0 01-5 8.63 39.08 39.08 0 01-7 7l-.87.66-.14.11c-1.69 1.29-3.61 2.56-5.55 3.75a54.34 54.34 0 01-12 5.4c-.42 1-1 2.35-.6 3.17 1.18-.35 2.25-.69 3.52-1.19.8-.28 1.61-.63 2.44-1 .83-.37 1.66-.72 2.49-1.09z"></path><path d="M46.93 71a8.72 8.72 0 011.16 0c.51 0 1.48.05 2 0l8.52-.5c8.84-.54 17.78-1 26.66-2.45 2.33-.38 4.67-.8 7-1.29a56.65 56.65 0 0010.45-3.26 85.2 85.2 0 009.11-4.57 48.44 48.44 0 0014-12c.86-1 1.57-2.14 2.33-3.2s1.34-2.12 1.89-3.23a35.91 35.91 0 002.81-7.11 31.08 31.08 0 00.4-12.78 6.21 6.21 0 01-1.89 2.64 25.44 25.44 0 01-1 9.32l-.09.26a21.31 21.31 0 01-.69 2 41.94 41.94 0 01-3.72 7.43 41.78 41.78 0 01-5.3 6.63 52.72 52.72 0 01-15.45 10.61 73.71 73.71 0 01-18.17 5.41 207.23 207.23 0 01-24.09 2.59l-15.92.87a4.07 4.07 0 01-.01 2.63zM21.1 71.79a1.43 1.43 0 01-.27-1.49 2.72 2.72 0 011.81-1.54c1-.14 2.13.44 3.2.44 1.47 0 2.94-.27 4.42-.39 1-.08 1.92 0 2.86-.15a17 17 0 012.57-.11 5.7 5.7 0 001.17 0 3 3 0 011.12-.16c1 .18 1.3 2.22.71 2.91-.45.53-1.56.36-2.18.36h-2.67c-2.13.13-4.28 0-6.41.1-.91 0-1.8.24-2.7.35-.9.11-1.7.15-2.56.2a1.31 1.31 0 01-1.07-.52zM7.5 71.7a3.09 3.09 0 010-1 1.26 1.26 0 01.4-.74 2.18 2.18 0 012.16-.49 9.2 9.2 0 002.87 0 9.22 9.22 0 013.1 0 2 2 0 011.17.72c.46.6.61 1.35-.14 1.8a5.18 5.18 0 01-2.91.44c-1.34-.13-2.75.53-4.15.76a2 2 0 01-1.34-.22A2.49 2.49 0 017.5 71.7zM.01 71.57c.082-.29.2-.569.35-.83a1.91 1.91 0 013.27-.25c.54.63.61 2.26-.16 2.72a4.27 4.27 0 01-1.32.44c-1.12.1-2.05-.23-2.14-2.08z"></path></g></svg>
                </div>
                <div className=" relative flex items-center md:w-1/2 w-full h-auto sm:px-4 py-5 md:mx-auto overflow-hidden    via-transparent">
                    {/* <!-- Slide Page 1 --> */}
                    <div className="flex md:px-6 md:space-x-6 transition w-full duration-500 ease-out transform xl:pl-6 h-94" >
                        {/* <!-- story 1 --> */}
                        <div className="md:flex md:flex-col md:flex-shrink-0 w-full overflow-hidden  shadow-lg">
                                    <div className="flex-shrink-0">
                                         <div className="mt-4 mx-4 z-20 bg-maps-secondary text-black  uppercase hyperlink absolute top:0   flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                            <div className="block  w-full w-80 h-60 relative transition duration-200 ease-out transform hover:scale-110">
                                    <Image layout="fill" alt="webinar" className="object-cover  h-32 sm:h-48" src="https://cdn.devdojo.com/images/march2021/slide-1.jpg" />
                                </div>
                            </div>
                            <div className="flex flex-col justify-between flex-1 px-6 py-2 bg-white ">
                                <div className="flex-1">
                                   
                                    <Link href="/webinars/webinar-1" className="block" passHref>
                                        <a className="">
                                        <span className="mt-2 card-heading text-gray-900 sm:text-xl">
                                            How to build the perfect landing fdmf.
                                        </span>
                                        <span className="block card-subheading text-gray-500 sm:text-sm">
                                            If you want to learn the tips and tricks to building the perfect landing page you&apos;ve got to follow these fd...
                                                    </span>
                                                    <div className="items-center sm:flex">
                                                        <div className="relative">
                                                            <div className="flex mb-5">

                                                                <div className="h-16 mr-6 rounded-full mr-10 "><Image width="60%" height="60%" className="w-16 h-16 mr-6 rounded-full" src="data:image/jpeg;base64,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" alt="" />
                                                                <p className="text-xs font-medium  text-gray-500">                                                                
                                                                        <span className="hyperlink">Edson Frainlar<br/></span>
                                                                  <span className="text-xs">Designation</span>         
                                                            </p></div>
                                                            
                                                                <div className=" h-16  mr-6 rounded-full "><Image width="60%" height="60%" className="w-16 h-16 mr-6 rounded-full" src="data:image/jpeg;base64,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" alt="" />
                                                                <p className="text-xs font-medium  text-gray-500">                                                                
                                                                        <span className="hyperlink">Edson Frainlar<br/></span>
                                                                  <span className="text-xs">Designation</span>         
                                                                    </p></div>
                                                               
                                                               
                                                            </div>
                                                              <div className="flex">
                                                                    
                                                             <div className="block mt-14  h-10 mr-4 relative left-0 flex items-center">
                            <Image width="30%" height="30%" className=" w-full shadow-sm max-h-20 mr-10" src="/webinar/calendar.png" alt="Calendar"/><time className="ml-2 hyperlink">January 21, 2022</time>
                                                                </div>
                                                               <div className="block mt-14  h-10 mr-4 relative left-0 flex items-center">
                            <Image width="30%" height="30%" className=" w-full shadow-sm max-h-20 mr-10" src="/webinar/clock.png" alt="Calendar"/><time className="ml-2 hyperlink">11:30 AM CET</time>
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
        {/* <!-- Search Box--> */}
        <section className=" flex pb-10 items-center justify-end mr-10">
                          <input id="demo-2" type="search" placeholder="Search"/>
                        </section>
        {/* <!-- On Demand Webinar Display--> */}
        <section className="container md:p-5 ">
                {/* <!-- On Demand Webinar Display--> */}
                <div className="flex flex-wrap md:-mx-4 -mb-4 md:mb-0 md:px-10">
                    {/* <!-- On demand Filter Options--> */}
                <div className="hidden md:block w-full md:w-1/5 px-4 mb-4  md:mb-0">
                        <form action="#" method="post" className="">
                            <div className="mb-6">
                                <h1 className="text-2xl mt-2 mb-2  card-heading">Streams</h1>
                                <hr className="mb-2"/>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                <label className="card-subheading" htmlFor="vehicle1"> Digital Maps</label><br/>
                            
                            </div>
                            <div className="mb-6">
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                <label className="card-subheading" htmlFor="vehicle1"> Digital Process</label><br/>
                            </div>
                            <div className="mb-6">
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                <label className="card-subheading" htmlFor="vehicle1"> Digital Projects</label><br/>
                            </div>
                            <div className="mb-6">
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                <label className="card-subheading" htmlFor="vehicle1"> Digital Labs</label><br/>
                            </div>
                            <div className="mb-6">
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                <label className="card-subheading" htmlFor="vehicle1"> Digital Mines</label><br/>
                            </div>
                        </form>          
                    <form action="#" method="post" className="">
                            <div className="mb-6">
                                <h1 className="text-2xl mt-2 mb-2  card-heading">Role</h1>
                                <hr className="mb-2"/>
                                <label>
                                <input type="checkbox" name="field-name" value="example value" />
                                <span className="card-subheading ml-1">Project Manager</span>
                                </label>
                            </div>
                            <div className="mb-6">
                                <label>
                                <input type="checkbox" name="field-name" value="example value" />
                                <span className="card-subheading ml-1">Test Manager</span>
                                </label>
                            </div>
                            <div className="mb-6">
                                <label>
                                <input type="checkbox" name="field-name" value="example value" />
                                <span className="card-subheading ml-1">Tester</span>
                                </label>
                            </div>
                            <div className="mb-6">
                                <label>
                                <input type="checkbox" name="field-name" value="example value" />
                                <span className="card-subheading ml-1">CEO/CIO/CXO/CTO</span>
                                </label>
                            </div>
                            <div className="mb-6">
                                <label>
                                <input type="checkbox" name="field-name" value="example value" />
                                <span className="card-subheading ml-1">Consultant</span>
                                </label>
                            </div>
                        </form>  
                     <form action="#" method="post" className="">
                                <div className="mb-6">
                                    <h1 className="text-2xl mt-2 mb-2  card-heading">Month</h1>
                                <hr className="mb-2"/>
                                    <label>
                        <input type="checkbox" name="field-name" value="example value" checked=""/>
                        <span className="card-subheading ml-1">August</span>
                        </label>
                                </div>
                                <div className="mb-6">
                                    <label>
                        <input type="checkbox" name="field-name" value="example value" checked=""/>
                        <span className="card-subheading ml-1">July</span>
                        </label>
                                </div>
                                <div className="mb-6">
                                    <label>
                        <input type="checkbox" name="field-name" value="example value" checked=""/>
                        <span className="card-subheading ml-1">June</span>
                        </label>
                                </div>
                                <div className="mb-6">
                                    <label>
                        <input type="checkbox" name="field-name" value="example value" checked=""/>
                        <span className="card-subheading ml-1">May</span>
                        </label>
                                </div>
                                <div className="mb-6">
                                    <label>
                        <input type="checkbox" name="field-name" value="example value" checked=""/>
                        <span className="card-subheading ml-1">April</span>
                        </label>
                        </div>
                    </form>
                    </div>
                {/* <!-- On demand Webinar Card Display--> */}
                <div className="w-full md:w-4/5 md:pl-20 px-4 mb-4 md:mb-0">
                        {/* Chips Section */}
                        
                        <div className="container mx-auto space-y-10">
                                <div className="grid grid-cols-12 col-span-12 gap-7">
                                    {/* {webinar_data.map(data => (
                                        <Link href="/webinars/webinar-1" passHref key="data">
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden shadow border  md:col-span-6 lg:col-span-4">
                                    <div className="z-20  bg-maps-secondary   absolute hyperlink top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div className="block  w-full h-60 relative transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="https://cdn.devdojo.com/images/may2021/blog-image-01.jpg"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className="hyperlink mb-2 mt-2  text-gray-400 uppercase">Webinar</p>
                                        <h2 className=" card-heading">Landscape Assessment</h2>
                                        <p className="mb-2 card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                    ))} */}
                                <Link href="/webinars/webinar-1" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden shadow border  md:col-span-6 lg:col-span-4">
                                    <div className="z-20  bg-maps-secondary   absolute hyperlink top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div className="block  w-full h-60 relative transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="https://cdn.devdojo.com/images/may2021/blog-image-01.jpg"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className="hyperlink mb-2 mt-2  text-gray-400 uppercase">Webinar</p>
                                        <h2 className=" card-heading">Landscape Assessment</h2>
                                        <p className="mb-2 card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/webinars/webinar-1" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden shadow border  md:col-span-6 lg:col-span-4">
                                    <div className="z-20  bg-maps-secondary   absolute hyperlink top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-full h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="https://cdn.devdojo.com/images/may2021/blog-image-01.jpg"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className="hyperlink mb-2 mt-2  text-gray-400 uppercase">Webinar</p>
                                        <h2 className=" card-heading">Landscape Assessment</h2>
                                        <p className="mb-2 card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/webinars/webinar-1" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden shadow border  md:col-span-6 lg:col-span-4">
                                        <div className="z-20  bg-project-secondary   absolute hyperlink top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md uppercase text-black inline-block">
                                            <span>Digital Projects</span>
                                        </div>
                                        <div  className="block w-full h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                            <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="https://cdn.devdojo.com/images/may2021/blog-image-01.jpg"/>
                                        </div>
                                        <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                            <p className="hyperlink mb-2 mt-2  text-gray-400 uppercase">Webinar</p>
                                            <h2 className=" card-heading">Landscape Assessment</h2>
                                            <p className="mb-2 card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                        </div>
                                    </a>
                                </Link>
                                <Link href="/webinars/webinar-1" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden shadow border  md:col-span-6 lg:col-span-4">
                                    <div className="z-20  bg-mines-secondary   absolute hyperlink top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md uppercase text-black inline-block">
                                        <span>Digital Mines</span>
                                    </div>
                                    <div  className="block w-full h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="https://cdn.devdojo.com/images/may2021/blog-image-01.jpg"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className="hyperlink mb-2 mt-2  text-gray-400 uppercase">Webinar</p>
                                        <h2 className=" card-heading">Landscape Assessment</h2>
                                        <p className="mb-2 card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/webinars/webinar-1" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden shadow border  md:col-span-6 lg:col-span-4">
                                    <div className="z-20  bg-labs-secondary   absolute hyperlink top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md uppercase text-black inline-block">
                                        <span>Digital Labs</span>
                                    </div>
                                    <div  className="block w-full h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="https://cdn.devdojo.com/images/may2021/blog-image-01.jpg"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className="hyperlink mb-2 mt-2  text-gray-400 uppercase">Webinar</p>
                                        <h2 className=" card-heading">Landscape Assessment</h2>
                                        <p className="mb-2 card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/webinars/webinar-1" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden shadow border  md:col-span-6 lg:col-span-4">
                                    <div className="z-20  bg-process-secondary   absolute hyperlink top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md uppercase text-black inline-block">
                                        <span>Digital Process</span>
                                    </div>
                                    <div  className="block w-full h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="https://cdn.devdojo.com/images/may2021/blog-image-01.jpg"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className="hyperlink mb-2 mt-2  text-gray-400 uppercase">Webinar</p>
                                        <h2 className=" card-heading">Landscape Assessment</h2>
                                        <p className="mb-2 card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                            </div>
                           
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
                <h2 className="card-heading  leading-9 tracking-tight text-white  sm:leading-10">Get started with your DXaaS Journey</h2>
                <p className="w-full mt-5 card-subheading text-white ">Start your 15-day free trial. No credit card required. No strings attached.</p>
                </div>
                <div className="relative flex flex-col items-center w-full px-6 space-y-5 md:space-x-5 md:space-y-0 md:flex-row md:w-auto lg:flex-shrink-0 md:px-0">
                <Link  href="/pricing" passHref><a className="  inline-block py-3 px-10 bg-black hover:bg-gray-300 hover:text-black shadow  button  text-white rounded-r-xl rounded-b-xl transition duration-200 border-2 border-black">See Pricing</a></Link>
                <Link  rel="noopener noreferrer" href="https://app.ktern.com" passHref><a target="_blank" className="  inline-block py-3 px-10 bg-white button hover:bg-gray-50 hover:text-black shadow hyperlink  text-black rounded-r-xl rounded-b-xl transition duration-200 border-2 border-black">Try it free</a></Link>
                </div>
                </div>
                </div>
            </section> 
        
            </Layout>
            </>
    )
}
export const getStaticProps = async () => {
    // data url from strapi
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    
    return {
        props: {
            webinar_data:data
        }
    }
}