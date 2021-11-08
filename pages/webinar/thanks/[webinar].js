import Layout from "../../../component/Layout"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NextSeo } from 'next-seo';
import { BreadcrumbJsonLd } from 'next-seo';
import { LogoJsonLd } from 'next-seo';
import { SocialProfileJsonLd } from 'next-seo';

import { Authorization ,getToken} from '../../../auth';
export default function Thanks ({webinar_data})
{
    
    const [ isVideoVisible, setIsVideoVisible ] = useState(true);
    const [ isSlideVisible, setIsSlideVisible ] = useState(false);
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
        <Layout>
            
    {!webinar_data.IsOnDemandWebinar && <section className="relative py-32  bg-gray-800 overflow-hidden flex justify-center ">
     
  <div className="hidden xl:block absolute top-0 right-0 h-40 lg:h-80 lg:mr-34 lg:mt-24"><Image  src="/404/five-stars.svg" alt="" width={400} height={300}/></div>
     
      <div className="container px-3 mx-auto">
        <div className="max-w-3xl mx-auto pb-10  text-center">
           
                        <h2 className="my-10 heading font-bold font-heading text-white">Thank You for Registering for the webinar</h2>
                        <div className="max-w-md mx-auto">
                           
            <p className="mb-10 card-subheading text-gray-200">We look forward to you joining our Webinar</p>
            
                            <Link  href="/" passHref>
                                <a className=" uppercase inline-block py-3 px-10 bg-white hover:bg-gray-50 hover:text-black shadow text-lg text-black font-bold rounded-r-xl rounded-b-xl transition duration-200 hyperlink">Return Home</a>
                                </Link>
            
          </div>
          
        </div>
                </div>
            </section>}
            {/* On demand Webinar */}
           {webinar_data.IsOnDemandWebinar && <section className="relative py-32 text-center  overflow-hidden justify-center text-white bg-gray-800">
                <h1 className="heading mb-5">On-demand Webinar</h1>
                <p className="subheading mb-10">Democratizing SAP Digital Transformation as a Service(#DXaaS)</p>
     <div className="px-5 pt-10 pb-0  mx-auto flex flex-wrap flex-col mb-20">
                   
                <div className="flex md:w-1/2 mx-auto flex-wrap mb-5 text-center items-center justify-center mb-10">
                    
                        <button onClick={() => { setIsVideoVisible(true);setIsSlideVisible(false);}} className="text-white sm:px-6 py-3 w-1/4 sm:w-auto justify-center sm:justify-start border-b-2 title-font  focus:bg-gray-100 inline-flex items-center leading-none border-gray-200 focus:border-indigo-500   focus:text-indigo-500 tracking-wider rounded-t ">
                       <span className="hyperlink ">Video</span>
                        </button>
                    
                    
                                <button onClick={()=>{setIsSlideVisible(true);setIsVideoVisible(false)}} className="text-white sm:px-6 py-3 w-1/4 sm:w-auto justify-center sm:justify-start focus:bg-gray-100 border-b-2 title-font  inline-flex items-center leading-none border-gray-200 tracking-wider focus:border-indigo-500 focus:text-indigo-500 ">
                        <span className=" hyperlink">Slide</span>
                        </button>
                    
                    
                            
                            
                </div>
              {isVideoVisible &&  <section className="pt-20 pb-5 bg-white mx-auto flex justify-center iterms-center" >
    <div className="md:px-20 p-4 mx-auto max-w-7xl">
      
            <div className=" block w-60 h-60 relative mx-auto ">
                <Image layout="fill" className="mx-auto  mb-6 object-cover border-2 border-black" src="/trust-center/cloud.png" alt=""/>
                     </div>
                <h3 className="mb-2 card-heading  text-gray-900 lg:">Video</h3>
                <p className=" text-gray-500 card-subheading">Faster processing to help you build your applications quicker and with more efficiency.</p>
                <Link href="#_"  passHref>
                                <a className="inline-flex items-center pt-5  text-black hover:border-blue-500 group ">
                                <span className="hyperlink group-hover:text-gray-400">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>            
            </div>
                    </section>}
                  {isSlideVisible && <section className="pt-20 pb-5 bg-white mx-auto flex justify-center iterms-center" >
    <div className="md:px-20 p-4 mx-auto max-w-7xl">
      
            <div className=" block w-60 h-60 relative mx-auto ">
                <Image layout="fill" className="mx-auto  mb-6 object-cover border-2 border-black" src="/trust-center/cloud.png" alt=""/>
                     </div>
                <h3 className="mb-2 card-heading  text-gray-900 lg:">Slide</h3>
                <p className=" text-gray-500 card-subheading">Faster processing to help you build your applications quicker and with more efficiency.</p>
                <Link href="#_"  passHref>
                                <a className="inline-flex items-center pt-5  text-black hover:border-blue-500 group ">
                                <span className="hyperlink group-hover:text-gray-400">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>            
            </div>
                    </section>    }
                </div>
                 <Link  href="/" passHref>
                                <a className=" uppercase inline-block py-3 px-10 bg-white hover:bg-gray-50 hover:text-black shadow text-lg text-black font-bold rounded-r-xl rounded-b-xl transition duration-200 hyperlink">Return Home</a>
                                </Link>
            </section>}
            {/* /On demand Webinar */}
                   <section className="w-full mb-10 pt-8 bg-white sm:pt-12 md:pt-16">
                    <div className="px-2 mx-auto max-w-7xl">
                    <div className="flex justify-center w-full pb-5 mb-4 border-gray-200">
                    <h2 className="section-heading  text-gray-800 ">Related Resources</h2>
                    
                    </div>
                    
                    <div className="grid grid-cols-12 gap-6 mb-6">
                   <div className="relative col-span-12 space-y-3 md:col-span-5 lg:col-span-3 shadow-lg hover:shadow-xl  p-4" >
                    <div className="">
                    <Link href="#_" passHref>
                    <a className="relative block w-full h-44 overflow-hidden rounded"> 
                    <Image className="bg-secondary object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="/product/maps/maps_1.svg" alt="resource" layout="fill"/>
                    </a> 
                    </Link>
                    </div>
                    <div className="">
                    <p className="hyperlink text-gray-400  uppercase mb-4">Resources</p>
                    <span className="block card-subheading font-semibold leading-tight text-gray-700 mb-4 hover:text-gray-900 ">SAP Activate – The Heart of KTern and S/4HANA Migration </span>
                   <Link href="#_"  passHref>
                                <a className="inline-flex items-center   text-black hover:text-gray-400 group ">
                                <span className="hyperlink group-hover:text-gray-300">Read more</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>
                    </div>
                    </div>

  
                    <div className="relative col-span-12 space-y-3 md:col-span-5 lg:col-span-3 shadow-lg hover:shadow-xl p-4" >
                    <div className="">
                    <Link href="#_" passHref>
                    <a className="relative block w-full h-44 overflow-hidden rounded"> 
                    <Image className="bg-secondary object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="/product/maps/maps_1.svg" alt="resource" layout="fill"/>
                    </a> 
                    </Link>
                    </div>
                    <div className="">
                    <p className="hyperlink text-gray-400  uppercase mb-4">Resources</p>
                    <span className="block card-subheading font-semibold leading-tight text-gray-700 mb-4 hover:text-gray-900 ">SAP Activate – The Heart of KTern and S/4HANA Migration </span>
                   <Link href="#_"  passHref>
                                <a className="inline-flex items-center   text-black hover:text-gray-400 group ">
                                <span className="hyperlink group-hover:text-gray-300">Read more</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>
                    </div>
                    </div>


                    <div className="relative col-span-12 space-y-3 md:col-span-5 lg:col-span-3 shadow-lg hover:shadow-xl p-4" >
                    <div className="">
                    <Link href="#_" passHref>
                    <a className="relative block w-full h-44 overflow-hidden rounded"> 
                    <Image className="object-cover bg-secondary object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="/product/maps/maps_1.svg" alt="resource" layout="fill"/>
                    </a> 
                    </Link>
                    </div>
                    <div className="">
                    <p className="hyperlink text-gray-400  uppercase mb-4">Resources</p>
                    <span className="block card-subheading font-semibold leading-tight text-gray-700 mb-4 hover:text-gray-900 ">SAP Activate – The Heart of KTern and S/4HANA Migration </span>
                   <Link href="#_"  passHref>
                                <a className="inline-flex items-center   text-black hover:text-gray-400 group ">
                                <span className="hyperlink group-hover:text-gray-300">Read more</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>
                    </div>
                    </div>

                    <div className="relative col-span-12 space-y-3 md:col-span-5 lg:col-span-3 shadow-lg hover:shadow-xl p-4" >
                                    <div className="">
                                    <Link href="#_" passHref>
                                    <a className="relative block w-full h-44 overflow-hidden rounded"> 
                                    <Image className="bg-secondary object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="/product/maps/maps_1.svg" alt="resource" layout="fill"/>
                                    </a> 
                                    </Link>
                                    </div>
                                    <div className="">
                                    <p className="hyperlink text-gray-400  uppercase mb-4">Resources</p>
                                    <span className="block card-subheading font-semibold leading-tight text-gray-700 mb-4 hover:text-gray-900 ">SAP Activate – The Heart of KTern and S/4HANA Migration </span>
                                <Link href="#_"  passHref>
                                                <a className="inline-flex items-center   text-black hover:text-gray-400 group ">
                                                <span className="hyperlink group-hover:text-gray-300">Read more</span>
                                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                                </svg>
                                                </a>
                                            </Link>
                                    </div>
                                    </div>

                    </div>
                    <div className="text-center">
                        <Link href="#_"  passHref>
                                <a className="inline-flex items-center   text-black hover:text-gray-400 group ">
                                <span className="hyperlink group-hover:text-gray-300">View All Resources</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>
                    </div>
                    </div>
            </section>  {/* / Resources Setion */}
          
           
            </Layout>
            </>
    )
}
// Return a list of possible value for webinar
export const getStaticPaths = async () => {
  // dynamic route array values must be acquired here from strapi
    const data=[{webinar:'transforming-s4hana-upgrade-journey'},{webinar:'reimagining-sap-s4hana-conversion'},{webinar:'democratizing-sap-digital-transformation-as-a-service-dxaas'},{webinar:'manage-digital-transformation-effectively'},{webinar:'reimagining-sap-testing'}]
    
    const paths = data.map(index => {
        return ({
            params:{webinar:index.webinar}
        })
    })
    return {
        paths,
        fallback:false
    }
}
// Fetch necessary data for the blog post using params.webinar
export const getStaticProps = async ({params}) => {
     let token = await Authorization()
   
    console.log("in features",token,params.webinar);
    // data url from strapi)
    const res = await fetch(`https://api.ktern.com/webinars?WebinarURL=${params.webinar}`,{method:'get',headers:new Headers({'Authorization':'Bearer '+token})});
    const data = await res.json();
    console.log("data",data)
    return {
        props: {
            webinar_data:data[0]
        }
    }
}

