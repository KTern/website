import Image from "next/image";
import Link from "next/link";
import Layout from "../component/Layout"
import { NextSeo } from 'next-seo';
import { BreadcrumbJsonLd } from 'next-seo';
import { LogoJsonLd } from 'next-seo';
import { SocialProfileJsonLd } from 'next-seo';

import React, { useState,useRef, useEffect  } from 'react';
import { isPlainObject } from "lodash";
import Carousel from 'react-multi-carousel';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
let selectedOptions = ['maps','projects','process','labs','mines']
let total = 10;
function handleClick (selectedOption) {
  if(!selectedOptions.includes(selectedOption)){
    selectedOptions.push(selectedOption)
  }
  else{
    selectedOptions.splice(selectedOptions.indexOf(selectedOption), 1)}
  total = selectedOptions.length * 3;
  if (selectedOptions.length == 5)
    total=10
}
function handleTotal () {
  selectedOptions = ['maps','projects','process','labs','mines']
  total = 10;
}
export default function Pricing ({data}) {
  const [ isMapsSelected, setIsMapsSelected ] = useState(true);
  const [ isProjectsSelected, setIsProjectsSelected ] = useState(true);
  const [ isProcessSelected, setIsProcessSelected ] = useState(true);
  const [ isLabsSelected, setIsLabsSelected ] = useState(true);
  const [  isMinesSelected,setIsMinesSelected ] = useState(true);
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
             {/* <!-- Main Pricing Section-->         */}
            <section className="overflow-hidden text-gray-700 " >
                <div className="container px-5 pt-32 pb-4 mx-auto">
            
                    <div className="flex flex-col w-full mb-24 text-center">

                        <div className="relative z-10 max-w-3xl px-12 mx-auto space-y-5 text-center lg:px-0">
                            <h1 className="heading">Get Started With KTern</h1>
                            {/* <p className="mx-auto subheading ">Digital Transformation made simple</p> */}
                        </div>

                    
            
            
            </div>
             
              <div className="flex flex-row">    
                    <div className="md:w-3/5 w-full  mr-10">                    
                    <div className="flex flex-wrap">
                    
                   
                    
                    
                        <div className="w-full mb-3">
                        
                        <div id="maps" className="cursor-pointer relative flex flex-col justify-between h-full p-6 overflow-hidden border border-blue-600 rounded-lg" >
                            
                           {isMapsSelected && <span className="absolute top-0 right-0 px-3 py-0 text-xs tracking-widest text-white bg-blue-600 rounded-bl">Selected</span>   }
                            <details className="">
                            <summary className="">                     
                            <div className="flex flex-col w-full">
                                <div className="flex flex-row justify-between" >
                                    <div className=" flex flex-row ">
                                    <span className="flex  w-10 h-8  mb-3 mr-0 bg-transparent rounded-lg">
                                            <Image src="/assets/icons/maps.png"alt="Digital maps" height={40} width={30}/>
                                            </span>
                                            <h2 className="mb-1 pr-2 card-heading">Digital Maps</h2>
                                    </div>
                                    
                                    {isMapsSelected && 
                                    <div className="flex flex-arrow ">
                              <button id="hey" className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={() => { setIsMapsSelected(false); handleClick('maps')}}>
                               
                                  <p>Unselect</p>
                                 
                                    </button>
                                    <div id="arrow" className="mt-2">
                                    </div>
                                    </div>}
                                    {!isMapsSelected && <div className="flex flex-arrow ">
                              <button id="hey" className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={() => { setIsMapsSelected(true);handleClick('maps')}}>
                               
                                  <p>Select</p>
                                 
                                    </button>
                                    <div id="arrow" className="mt-2">
                                    </div>
                                   
                                    </div>}
                                    </div>
                                    <h1 className="flex items-center pb-0 card-heading text-gray-900  border-gray-200"><span>$3K</span><span className="ml-1 text-lg font-normal text-gray-500">/MO</span></h1>
                                    <p className="mt-3 card-subheading  pb-4   text-gray-500">Build your Business Case for your SAP Digital Transformation with KTern&apos;s Digital Maps</p>
                                    </div>
                                
                                    </summary>
                                    <div className="flex">
                                    <div className=" justify-between pt-6 border-t w-1/2" >
                                <h2 className="mb-3 card-heading  ">Key Features</h2>                                  
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"> <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Landscape Assessment</p>
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"> <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Business Assessment</p>
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"> <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Custom Assessment</p>
                                    <p className="flex items-center mb-6 pb-2 text-gray-600 border-b"> <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Scope Assessment</p>
                        </div>
                        <div className="justify-between pt-6 border-t w-1/2">
                           <h2 className="mb-3 card-heading  ">Values</h2>                                  
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"> <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Landscape Assessment</p>
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"> <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Business Assessment</p>
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"> <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Custom Assessment</p>
                                    <p className="flex items-center mb-6 pb-2 text-gray-600 border-b"> <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Scope Assessment</p>
                        </div>
                      </div>
                                <div className="border-b mb-6 pb-2">
                                <div className="flex flex-row justify-between" >
                                <h2 className="mb-3 card-heading  ">Bots</h2>
                                   
                                    </div>
                                
  <div
    className="inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
  >
   
    StakeHolder Impact Simulation
  </div>
  <div
    className="inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
  >
   
    Process Impact Simulation
  </div>
  <div
    className="inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
  >
   
    Project Impact Simulation
  </div>
  <div
    className="inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
  >
   
    Task Impact Simulation
  </div>

  </div>
                                <div className="">
                                <div className="flex flex-row justify-between" >
                                <h2 className="mb-1 card-heading ">Users</h2>
                                   
                                    </div>
                                
                                <p className="flex items-center mb-2 text-gray-600 card-subheading "><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-white rounded-full">
                                <Image src="https://static.thenounproject.com/png/925249-200.png" alt="" width={150} height={150}/>
                                    </span>No.of SAP Customers : Unlimited</p>
                                            <p className="flex items-center mb-6 pb-2 text-gray-600 border-b"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-white rounded-full">
                                            <Image src="https://static.thenounproject.com/png/925249-200.png" alt="" width={150} height={150}/></span>No.of SAP Partners : Unlimited</p>  
                                </div>







                                <div className="w-full">
                                {/* <button className="inline-flex items-center justify-center w-full px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"> 
                                        View All Features
                                        <div className="w-4 h-4 ml-2 relative"><Image layout="fill" src="/pricing/down-arrow-svgrepo-com.svg"  alt="down arrow"/></div>
                                    </button>
                                     */}
                                    <p className="mt-3 text-xs text-center text-gray-500">All plans include a free onboarding call.</p>
                                
                                </div>
                                </details>
                            </div>
                        </div>
                        <div className="w-full mb-3">
                        
                        <div id="projects" className="cursor-pointer relative flex flex-col justify-between h-full p-6 overflow-hidden border border-blue-600 rounded-lg" >
                            
                            {isProjectsSelected && <span className="absolute top-0 right-0 px-3 py-0 text-xs tracking-widest text-white bg-blue-600 rounded-bl">Selected</span>   }
                            <details className="">
                            <summary className="">                     
                            <div className="flex flex-col w-full">
                                <div className="flex flex-row justify-between" >
                                    <div className=" flex flex-row ">
                                    <span className="flex  w-10 h-8  mb-3 mr-0 bg-transparent rounded-lg">
                                            <Image src="/assets/icons/projects.png"alt="Digital Projects" height={40} width={30}/>
                                            </span>
                                            <h2 className="mb-1 pr-2 card-heading">Digital Projects</h2>
                                    </div>
                                  { isProjectsSelected &&  
                                    <div className="flex flex-arrow ">
                                    <button id="hey" className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={()=>{setIsProjectsSelected(false);handleClick('projects')}}> 
                                        Unselect   
                                    </button>
                                    <div id="arrow" className="mt-2">
                                    </div>
                                    
                                   
                              </div>
                            }
                                  { !isProjectsSelected &&  <div className="flex flex-arrow ">
                                    <button id="hey" className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={()=>{setIsProjectsSelected(true);handleClick('projects')}}> 
                                        Select   
                                    </button>
                                    <div id="arrow" className="mt-2">
                                    </div>
                                    
                                   
                                    </div>}
                                    </div>
                                    <h1 className="flex items-center pb-0 card-heading text-gray-900  border-gray-200"><span>$3K</span><span className="ml-1 text-lg font-normal text-gray-500">/MO</span></h1>
                                    <p className="mt-3 card-subheading  pb-4   text-gray-500">Gain ultimate control of your SAP projects and teams with KTern&apos;s Digital projects</p>
                                    </div>
                                
                                    </summary>
                                   <div className="flex"> 
                                    <div className=" justify-between pt-6 border-t w-1/2  " >
                                <h2 className="mb-3 card-heading  ">Key Features</h2>
                                   
                                 
                                   
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"> <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Plan Transformation</p>
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"> <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Team Collaboration</p>
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"> <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Organized Transformation</p>
                                    <p className="flex items-center mb-6 pb-2 text-gray-600 border-b"> <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Customizable Dashboards</p>
                        </div>
                        <div className=" justify-between pt-6 border-t w-1/2" >
                                <h2 className="mb-3 card-heading  ">Values</h2>
                                   
                                 
                                   
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"> <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Plan Transformation</p>
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"> <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Team Collaboration</p>
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"> <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Organized Transformation</p>
                                    <p className="flex items-center mb-6 pb-2 text-gray-600 border-b"> <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Customizable Dashboards</p>
                                </div>
                                </div>
                                <div className="border-b mb-6 pb-2">
                                <div className="flex flex-row justify-between" >
                                <h2 className="mb-3 card-heading  ">Bots</h2>
                                   
                                    </div>
                                
  <div
    className="inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
  >
   
    StakeHolder Impact Simulation
  </div>
  <div
    className="inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
  >
   
    Process Impact Simulation
  </div>
  <div
    className="inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
  >
   
    Project Impact Simulation
  </div>
  <div
    className="inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
  >
   
    Task Impact Simulation
  </div>

  </div>
                                <div className="">
                                <div className="flex flex-row justify-between" >
                                <h2 className="mb-1 card-heading ">Users</h2>
                                   
                                    </div>
                                
                                <p className="flex items-center mb-2 text-gray-600 card-subheading "><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-white rounded-full">
                                <Image src="https://static.thenounproject.com/png/925249-200.png" alt="" width={150} height={150}/>
                                    </span>No.of SAP Customers : Unlimited</p>
                                            <p className="flex items-center mb-6 pb-2 text-gray-600 border-b"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-white rounded-full">
                                            <Image src="https://static.thenounproject.com/png/925249-200.png" alt="" width={150} height={150}/></span>No.of SAP Partners : Unlimited</p>  
                                </div>







                                <div className="w-full">
                                {/* <button className="inline-flex items-center justify-center w-full px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"> 
                                        View All Features
                                        <div className="w-4 h-4 ml-2 relative"><Image layout="fill" src="/pricing/down-arrow-svgrepo-com.svg"  alt="down arrow"/></div>
                                    </button>
                                     */}
                                    <p className="mt-3 text-xs text-center text-gray-500">All plans include a free onboarding call.</p>
                                
                                </div>
                                </details>
                            </div>
                        </div>
                        <div className="w-full mb-3">
                        
                        <div id="process" className="cursor-pointer relative flex flex-col justify-between h-full p-6 overflow-hidden border border-blue-600 rounded-lg" >
                            
                           {isProcessSelected && <span className="absolute top-0 right-0 px-3 py-0 text-xs tracking-widest text-white bg-blue-600 rounded-bl">Selected</span>   }
                            <details className="">
                            <summary className="">                     
                            <div className="flex flex-col w-full">
                                <div className="flex flex-row justify-between" >
                                    <div className=" flex flex-row ">
                                    <span className="flex  w-10 h-8  mb-3 mr-0 bg-transparent rounded-lg">
                                            <Image src="/assets/icons/process.svg"alt="Digital process" height={40} width={30}/>
                                            </span>
                                            <h2 className="mb-1 pr-2 card-heading">Digital Process</h2>
                                    </div>
                                    
                                   {isProcessSelected && <div className="flex flex-arrow ">
                                    <button id="hey" className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={()=>{setIsProcessSelected(false);handleClick('process')}}> 
                                        Unselect   
                                    </button>
                                    <div id="arrow" className="mt-2">
                                    </div>
                                    
                                   
                            </div>}
                           { !isProcessSelected && <div className="flex flex-arrow ">
                                    <button id="hey" className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={()=>{setIsProcessSelected(true);handleClick('process')}}> 
                                        Select   
                                    </button>
                                    <div id="arrow" className="mt-2">
                                    </div>
                                    
                                   
                                    </div>}
                                    </div>
                                    <h1 className="flex items-center pb-0 card-heading text-gray-900  border-gray-200"><span>$3K</span><span className="ml-1 text-lg font-normal text-gray-500">/MO</span></h1>
                                    <p className="mt-3 card-subheading  pb-4   text-gray-500">Create a Digital Footprint and optimize your processes with KTern&apos;s Digital Process</p>
                                    </div>
                                
                                    </summary>
                                    <div className="flex">
                                    <div className=" justify-between pt-6 border-t w-1/2" >
                                <h2 className="mb-3 card-heading  ">Key Features</h2>
                                   
                                    
                                   
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"> <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Landscape Assessment</p>
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"> <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Business Assessment</p>
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"> <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Custom Assessment</p>
                                    <p className="flex items-center mb-6 pb-2 text-gray-600 border-b"> <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Scope Assessment</p>
                      </div>
                      <div className=" justify-between pt-6 border-t w-1/2" >
                                <h2 className="mb-3 card-heading  ">Values</h2>
                                   
                                    
                                   
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"> <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Landscape Assessment</p>
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"> <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Business Assessment</p>
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"> <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Custom Assessment</p>
                                    <p className="flex items-center mb-6 pb-2 text-gray-600 border-b"> <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Scope Assessment</p>
                                </div>
                                </div>
                                <div className="border-b mb-6 pb-2">
                                <div className="flex flex-row justify-between" >
                                <h2 className="mb-3 card-heading  ">Bots</h2>
                                   
                                    </div>
                                
  <div
    className="inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
  >
   
    StakeHolder Impact Simulation
  </div>
  <div
    className="inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
  >
   
    Process Impact Simulation
  </div>
  <div
    className="inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
  >
   
    Project Impact Simulation
  </div>
  <div
    className="inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
  >
   
    Task Impact Simulation
  </div>

  </div>
                                <div className="">
                                <div className="flex flex-row justify-between" >
                                <h2 className="mb-1 card-heading ">Users</h2>
                                   
                                    </div>
                                
                                <p className="flex items-center mb-2 text-gray-600 card-subheading "><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-white rounded-full">
                                <Image src="https://static.thenounproject.com/png/925249-200.png" alt="" width={150} height={150}/>
                                    </span>No.of SAP Customers : Unlimited</p>
                                            <p className="flex items-center mb-6 pb-2 text-gray-600 border-b"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-white rounded-full">
                                            <Image src="https://static.thenounproject.com/png/925249-200.png" alt="" width={150} height={150}/></span>No.of SAP Partners : Unlimited</p>  
                                </div>







                                <div className="w-full">
                                {/* <button className="inline-flex items-center justify-center w-full px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"> 
                                        View All Features
                                        <div className="w-4 h-4 ml-2 relative"><Image layout="fill" src="/pricing/down-arrow-svgrepo-com.svg"  alt="down arrow"/></div>
                                    </button>
                                     */}
                                    <p className="mt-3 text-xs text-center text-gray-500">All plans include a free onboarding call.</p>
                                
                                </div>
                                </details>
                            </div>
                        </div>
                        <div className="w-full mb-3">
                        
                        <div id="labs" className="cursor-pointer relative flex flex-col justify-between h-full p-6 overflow-hidden border border-blue-600 rounded-lg" >
                            
                            {isLabsSelected && <span className="absolute top-0 right-0 px-3 py-0 text-xs tracking-widest text-white bg-blue-600 rounded-bl">Selected</span>   }
                            <details className="">
                            <summary className="">                     
                            <div className="flex flex-col w-full">
                                <div className="flex flex-row justify-between" >
                                    <div className=" flex flex-row ">
                                    <span className="flex  w-10 h-8  mb-3 mr-0 bg-transparent rounded-lg">
                                            <Image src="/assets/icons/labs.png"alt="Digital Labs" height={40} width={30}/>
                                            </span>
                                            <h2 className="mb-1 pr-2 card-heading">Digital Labs</h2>
                                    </div>
                                    
                                   {isLabsSelected && <div className="flex flex-arrow ">
                                    <button id="hey" className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={()=>{setIsLabsSelected(false);handleClick('labs')}}> 
                                        Unselect   
                                    </button>
                                    <div id="arrow" className="mt-2">
                                    </div>
                                    
                                   
                            </div>}
                           {!isLabsSelected && <div className="flex flex-arrow ">
                                    <button id="hey" className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={()=>{setIsLabsSelected(true);handleClick('labs')}}> 
                                        Select   
                                    </button>
                                    <div id="arrow" className="mt-2">
                                    </div>
                                    
                                   
                                    </div>}
                                    </div>
                                    <h1 className="flex items-center pb-0 card-heading text-gray-900  border-gray-200"><span>$3K</span><span className="ml-1 text-lg font-normal text-gray-500">/MO</span></h1>
                                    <p className="mt-3 card-subheading  pb-4   text-gray-500">Automate your Testing for modern Enterprises with KTern&apos;s AI driven Digital Maps</p>
                                    </div>
                                
                                    </summary>
                                    <div className="flex">
                                    <div className=" justify-between pt-6 border-t w-1/2" >
                                <h2 className="mb-3 card-heading  ">Key Features</h2>
                                   
                                    
                                   
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"> <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Auto Recommendation</p>
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"> <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Sign-Off Management</p>
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"> <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Auto Execution</p>
                                    <p className="flex items-center mb-6 pb-2 text-gray-600 border-b"> <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>TestCase Management</p>
                      </div>
                        <div className=" justify-between pt-6 border-t w-1/2" >
                                <h2 className="mb-3 card-heading  ">Values</h2>
                                   
                                    
                                   
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"> <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Auto Recommendation</p>
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"> <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Sign-Off Management</p>
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"> <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Auto Execution</p>
                                    <p className="flex items-center mb-6 pb-2 text-gray-600 border-b"> <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>TestCase Management</p>
                                </div></div>
                                <div className="border-b mb-6 pb-2">
                                <div className="flex flex-row justify-between" >
                                <h2 className="mb-3 card-heading  ">Bots</h2>
                                   
                                    </div>
                                
  <div
    className="inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
  >
   
    StakeHolder Impact Simulation
  </div>
  <div
    className="inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
  >
   
    Process Impact Simulation
  </div>
  <div
    className="inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
  >
   
    Project Impact Simulation
  </div>
  <div
    className="inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
  >
   
    Task Impact Simulation
  </div>

  </div>
                                <div className="">
                                <div className="flex flex-row justify-between" >
                                <h2 className="mb-1 card-heading ">Users</h2>
                                   
                                    </div>
                                
                                <p className="flex items-center mb-2 text-gray-600 card-subheading "><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-white rounded-full">
                                <Image src="https://static.thenounproject.com/png/925249-200.png" alt="" width={150} height={150}/>
                                    </span>No.of SAP Customers : Unlimited</p>
                                            <p className="flex items-center mb-6 pb-2 text-gray-600 border-b"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-white rounded-full">
                                            <Image src="https://static.thenounproject.com/png/925249-200.png" alt="" width={150} height={150}/></span>No.of SAP Partners : Unlimited</p>  
                                </div>







                                <div className="w-full">
                                {/* <button className="inline-flex items-center justify-center w-full px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"> 
                                        View All Features
                                        <div className="w-4 h-4 ml-2 relative"><Image layout="fill" src="/pricing/down-arrow-svgrepo-com.svg"  alt="down arrow"/></div>
                                    </button>
                                     */}
                                    <p className="mt-3 text-xs text-center text-gray-500">All plans include a free onboarding call.</p>
                                
                                </div>
                                </details>
                            </div>
                        </div>
                        <div className="w-full mb-3">
                        
                        <div id="mines" className="cursor-pointer relative flex flex-col justify-between h-full p-6 overflow-hidden border border-blue-600 rounded-lg" >
                            
                            {isMinesSelected &&<span className="absolute top-0 right-0 px-3 py-0 text-xs tracking-widest text-white bg-blue-600 rounded-bl">Selected</span>   }
                            <details className="">
                            <summary className="">                     
                            <div className="flex flex-col w-full">
                                <div className="flex flex-row justify-between" >
                                    <div className=" flex flex-row ">
                                    <span className="flex  w-10 h-8  mb-3 mr-0 bg-transparent rounded-lg">
                                            <Image src="/assets/icons/mines.png"alt="Digital mines" height={40} width={30}/>
                                            </span>
                                            <h2 className="mb-1 pr-2 card-heading">Digital Mines</h2>
                                    </div>
                                    
                                    {isMinesSelected && <div className="flex flex-arrow ">
                                    <button id="hey" className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={()=>{setIsMinesSelected(false);handleClick('mines')}}> 
                                        Unselect   
                                    </button>
                                    <div id="arrow" className="mt-2">
                                    </div>
                                    
                                   
                            </div>}
{!isMinesSelected &&                            <div className="flex flex-arrow ">
                                    <button id="hey" className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={()=>{setIsMinesSelected(true);handleClick('mines')}}> 
                                        Select   
                                    </button>
                                    <div id="arrow" className="mt-2">
                                    </div>
                                    
                                   
                                    </div>
}                                    </div>
                                    <h1 className="flex items-center pb-0 card-heading text-gray-900  border-gray-200"><span>$3K</span><span className="ml-1 text-lg font-normal text-gray-500">/MO</span></h1>
                                    <p className="mt-3 card-subheading  pb-4   text-gray-500">Run all your Processes better to run your Business better with KTern&apos;s Digital Mines</p>
                                    </div>
                                
                                    </summary>
                                    <div className="flex">
                                    <div className=" justify-between pt-6 border-t w-1/2" >
                                <h2 className="mb-3 card-heading  ">Key Features</h2>
                                   
                                  
                                   
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"> <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Process Mining</p>
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"> <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Optimize Processes</p>
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"> <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Process Monitoring</p>
                                    <p className="flex items-center mb-6 pb-2 text-gray-600 border-b"> <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>ROI Estimation</p>
                                  </div> <div className=" justify-between pt-6 border-t w-1/2" >
                                <h2 className="mb-3 card-heading  ">Values</h2>
                                   
                                  
                                   
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"> <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Process Mining</p>
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"> <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Optimize Processes</p>
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"> <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Process Monitoring</p>
                                    <p className="flex items-center mb-6 pb-2 text-gray-600 border-b"> <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>ROI Estimation</p>
                                  </div>
                                  </div>
                                <div className="border-b mb-6 pb-2">
                                <div className="flex flex-row justify-between" >
                                <h2 className="mb-3 card-heading  ">Bots</h2>
                                   
                                    </div>
                                
  <div
    className="inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
  >
   
    StakeHolder Impact Simulation
  </div>
  <div
    className="inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
  >
   
    Process Impact Simulation
  </div>
  <div
    className="inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
  >
   
    Project Impact Simulation
  </div>
  <div
    className="inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
  >
   
    Task Impact Simulation
  </div>

  </div>
                                <div className="">
                                <div className="flex flex-row justify-between" >
                                <h2 className="mb-1 card-heading ">Users</h2>
                                   
                                    </div>
                                
                                <p className="flex items-center mb-2 text-gray-600 card-subheading "><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-white rounded-full">
                                <Image src="https://static.thenounproject.com/png/925249-200.png" alt="" width={150} height={150}/>
                                    </span>No.of SAP Customers : Unlimited</p>
                                            <p className="flex items-center mb-6 pb-2 text-gray-600 border-b"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-white rounded-full">
                                            <Image src="https://static.thenounproject.com/png/925249-200.png" alt="" width={150} height={150}/></span>No.of SAP Partners : Unlimited</p>  
                                </div>







                                <div className="w-full">
                                {/* <button className="inline-flex items-center justify-center w-full px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"> 
                                        View All Features
                                        <div className="w-4 h-4 ml-2 relative"><Image layout="fill" src="/pricing/down-arrow-svgrepo-com.svg"  alt="down arrow"/></div>
                                    </button>
                                     */}
                                    <p className="mt-3 text-xs text-center text-gray-500">All plans include a free onboarding call.</p>
                                
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
                                    <h1 className="flex items-center pb-4 mb-4 card-heading text-gray-900 border-b border-gray-200"><span>${total}K</span><span className="ml-1 text-lg font-normal text-gray-500">/MO</span></h1>
                    </div>
                      <div className="w-1/2  border-2 text-center mb-14 rounded-lg  text-black justify-center flex items-center" onClick={() => { setIsMinesSelected(true); setIsProjectsSelected(true); setIsLabsSelected(true); setIsMapsSelected(true); setIsProcessSelected(true); handleTotal()}}>
                                   Select all to save $5K  🎉
                    </div></div>
                                    {isMapsSelected && <div className="flex py-2 pl-5 pr-0 mb-4 bg-white rounded-lg overflow-hidden flex-row justify-between ">
                                            <div className="flex items-center">
                                                <span className="flex items-center justify-center w-8 h-8 mr-8 bg-transparent rounded-lg">
                                                <Image src="/assets/icons/maps.png" alt="Digital Maps" height={30} width={30}/>
                                                </span>
                                                <h2 className="mb-1 pr-2 card-subheading ">Digital Maps</h2>
                                            </div>
                                            <div>
                                             {isMapsSelected && 
                                    <div className="flex flex-arrow ">
                              <button id="hey" className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={() => { setIsMapsSelected(false); handleClick('maps')}}>
                               
                                  <p>Unselect</p>
                                 
                                    </button>
                                   
                                    </div>}
                                    {!isMapsSelected && <div className="flex flex-arrow ">
                              <button id="hey" className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={() => { setIsMapsSelected(true);handleClick('maps')}}>
                               
                                  <p>Select</p>
                                 
                                    </button>
                                   
                                   
                                    </div>}
                                            </div>
                                            
                                            </div>}
    
                                            {isProjectsSelected && <div className="flex py-2 pl-5 pr-0 mb-4 bg-white rounded-lg overflow-hidden flex-row justify-between ">
                                            <div className="flex items-center">
                                                <span className="flex items-center justify-center w-8 h-8 mr-8 bg-transparent rounded-lg">
                                                <Image src="/assets/icons/projects.png" alt="Digital Projects" height={30} width={30}/>
                                                </span>
                                                <h2 className="mb-1 pr-2 card-subheading ">Digital Projects</h2>
                                            </div>
                                            <div>
                                            { isProjectsSelected &&  
                                    <div className="flex flex-arrow ">
                                    <button id="hey" className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={()=>{setIsProjectsSelected(false);handleClick('projects')}}> 
                                        Unselect   
                                    </button>
                                   
                                    
                                   
                              </div>
                            }
                                  { !isProjectsSelected &&  <div className="flex flex-arrow ">
                                    <button id="hey" className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={()=>{setIsProjectsSelected(true);handleClick('projects')}}> 
                                        Select   
                                    </button>
                                   
                                    
                                   
                                    </div>}
                                            </div>
                                            
                                            </div>}
    
                                           {isProcessSelected && <div className="flex py-2 pl-5 pr-0 mb-4 bg-white rounded-lg overflow-hidden flex-row justify-between ">
                                            <div className="flex items-center">
                                                <span className="flex items-center justify-center w-8 h-8 mr-8 bg-transparent rounded-lg">
                                                <Image src="/assets/icons/process.svg" alt="Digital Process" height={30} width={30}/>
                                                </span>
                                                <h2 className="mb-1 pr-2 card-subheading ">Digital Process</h2>
                                            </div>
                                            <div>
                                            {isProcessSelected && <div className="flex flex-arrow ">
                                    <button id="hey" className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={()=>{setIsProcessSelected(false);handleClick('process')}}> 
                                        Unselect   
                                    </button>
                                   
                                    
                                   
                            </div>}
                           { !isProcessSelected && <div className="flex flex-arrow ">
                                    <button id="hey" className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={()=>{setIsProcessSelected(true);handleClick('process')}}> 
                                        Select   
                                    </button>
                                   
                                    
                                   
                                    </div>}
                                            </div>
                                            
                                            </div>}
                                           {isLabsSelected && <div className="flex py-2 pl-5 pr-0 mb-4 bg-white rounded-lg overflow-hidden flex-row justify-between ">
                                            <div className="flex items-center">
                                                <span className="flex items-center justify-center w-8 h-8 mr-8 bg-transparent rounded-lg">
                                                <Image src="/assets/icons/Labs.png" alt="Digital Labs" height={30} width={30}/>
                                                </span>
                                                <h2 className="mb-1 pr-2 card-subheading ">Digital Labs</h2>
                                            </div>
                                            <div>
                                           {isLabsSelected && <div className="flex flex-arrow ">
                                    <button id="hey" className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={()=>{setIsLabsSelected(false);handleClick('labs')}}> 
                                        Unselect   
                                    </button>
                                   
                                    
                                   
                            </div>}
                           {!isLabsSelected && <div className="flex flex-arrow ">
                                    <button id="hey" className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={()=>{setIsLabsSelected(true);handleClick('labs')}}> 
                                        Select   
                                    </button>
                                   
                                    
                                   
                                    </div>}
                                            </div>
                                            
                                            </div>}
                                           {isMinesSelected && <div className="flex py-2 pl-5 pr-0 mb-4 bg-white rounded-lg overflow-hidden flex-row justify-between ">
                                            <div className="flex items-center">
                                                <span className="flex items-center justify-center w-8 h-8 mr-8 bg-transparent rounded-lg">
                                                <Image src="/assets/icons/Mines.png" alt="Digital Mines" height={30} width={30}/>
                                                </span>
                                                <h2 className="mb-1 pr-2 card-subheading ">Digital Mines</h2>
                                            </div>
                                            <div>
                                           {isMinesSelected && <div className="flex flex-arrow ">
                                    <button id="hey" className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={()=>{setIsMinesSelected(false);handleClick('mines')}}> 
                                        Unselect   
                                    </button>
                                   
                                    
                                   
                            </div>}
{!isMinesSelected &&                            <div className="flex flex-arrow ">
                                    <button id="hey" className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={()=>{setIsMinesSelected(true);handleClick('mines')}}> 
                                        Select   
                                    </button>
                                   
                                    
                                   
                                    </div>
} 
                                            </div>
                                            
                                            </div>}
                                </div>
                                
                                <div className="w-full">
                                    <button className="inline-flex items-center button  justify-center w-full px-4 py-3 bg-black text-white button whitespace-no-wrap  border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 hover:text-black focus:outline-none focus:shadow-none"> 
                                        Contact Sales
                                        <div className="w-4 h-4 ml-2 relative"><Image layout="fill" src="/pricing/down-arrow-svgrepo-com.svg"  alt="down arrow"/></div>
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
                            

                            <div className="cursor-pointer relative flex flex-col  justify-between h-full p-6 overflow-hidden border border-gray-600 bg-gray-100 rounded-lg">
    
                  <div className="flex flex-col w-full">
                    <div className="flex">
                                 <div className="w-1/2">
                                    <h2 className="mb-1 card-heading">Overall</h2>
                                    <h1 className="flex items-center pb-4 mb-4 card-heading text-gray-900 border-b border-gray-200"><span>${total}K</span><span className="ml-1 text-lg font-normal text-gray-500">/MO</span></h1>
                    </div>
                      <div className="w-1/2  border-2 text-center mb-14 rounded-lg  text-black justify-center flex items-center" onClick={() => { setIsMinesSelected(true); setIsProjectsSelected(true); setIsLabsSelected(true); setIsMapsSelected(true); setIsProcessSelected(true); handleTotal()}}>
                                   Select all to save $5K  🎉
                    </div></div>
                                    {isMapsSelected && <div className="flex py-2 pl-5 pr-0 mb-4 bg-white rounded-lg overflow-hidden flex-row justify-between ">
                                            <div className="flex items-center">
                                                <span className="flex items-center justify-center w-8 h-8 mr-8 bg-transparent rounded-lg">
                                                <Image src="/assets/icons/maps.png" alt="Digital Maps" height={30} width={30}/>
                                                </span>
                                                <h2 className="mb-1 pr-2 card-subheading ">Digital Maps</h2>
                                            </div>
                                            <div>
                                             {isMapsSelected && 
                                    <div className="flex flex-arrow ">
                              <button id="hey" className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={() => { setIsMapsSelected(false); handleClick('maps')}}>
                               
                                  <p>Unselect</p>
                                 
                                    </button>
                                   
                                    </div>}
                                    {!isMapsSelected && <div className="flex flex-arrow ">
                              <button id="hey" className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={() => { setIsMapsSelected(true);handleClick('maps')}}>
                               
                                  <p>Select</p>
                                 
                                    </button>
                                   
                                   
                                    </div>}
                                            </div>
                                            
                                            </div>}
    
                                            {isProjectsSelected && <div className="flex py-2 pl-5 pr-0 mb-4 bg-white rounded-lg overflow-hidden flex-row justify-between ">
                                            <div className="flex items-center">
                                                <span className="flex items-center justify-center w-8 h-8 mr-8 bg-transparent rounded-lg">
                                                <Image src="/assets/icons/projects.png" alt="Digital Projects" height={30} width={30}/>
                                                </span>
                                                <h2 className="mb-1 pr-2 card-subheading ">Digital Projects</h2>
                                            </div>
                                            <div>
                                            { isProjectsSelected &&  
                                    <div className="flex flex-arrow ">
                                    <button id="hey" className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={()=>{setIsProjectsSelected(false);handleClick('projects')}}> 
                                        Unselect   
                                    </button>
                                   
                                    
                                   
                              </div>
                            }
                                  { !isProjectsSelected &&  <div className="flex flex-arrow ">
                                    <button id="hey" className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={()=>{setIsProjectsSelected(true);handleClick('projects')}}> 
                                        Select   
                                    </button>
                                   
                                    
                                   
                                    </div>}
                                            </div>
                                            
                                            </div>}
    
                                           {isProcessSelected && <div className="flex py-2 pl-5 pr-0 mb-4 bg-white rounded-lg overflow-hidden flex-row justify-between ">
                                            <div className="flex items-center">
                                                <span className="flex items-center justify-center w-8 h-8 mr-8 bg-transparent rounded-lg">
                                                <Image src="/assets/icons/process.svg" alt="Digital Process" height={30} width={30}/>
                                                </span>
                                                <h2 className="mb-1 pr-2 card-subheading ">Digital Process</h2>
                                            </div>
                                            <div>
                                            {isProcessSelected && <div className="flex flex-arrow ">
                                    <button id="hey" className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={()=>{setIsProcessSelected(false);handleClick('process')}}> 
                                        Unselect   
                                    </button>
                                   
                                    
                                   
                            </div>}
                           { !isProcessSelected && <div className="flex flex-arrow ">
                                    <button id="hey" className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={()=>{setIsProcessSelected(true);handleClick('process')}}> 
                                        Select   
                                    </button>
                                   
                                    
                                   
                                    </div>}
                                            </div>
                                            
                                            </div>}
                                           {isLabsSelected && <div className="flex py-2 pl-5 pr-0 mb-4 bg-white rounded-lg overflow-hidden flex-row justify-between ">
                                            <div className="flex items-center">
                                                <span className="flex items-center justify-center w-8 h-8 mr-8 bg-transparent rounded-lg">
                                                <Image src="/assets/icons/Labs.png" alt="Digital Labs" height={30} width={30}/>
                                                </span>
                                                <h2 className="mb-1 pr-2 card-subheading ">Digital Labs</h2>
                                            </div>
                                            <div>
                                           {isLabsSelected && <div className="flex flex-arrow ">
                                    <button id="hey" className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={()=>{setIsLabsSelected(false);handleClick('labs')}}> 
                                        Unselect   
                                    </button>
                                   
                                    
                                   
                            </div>}
                           {!isLabsSelected && <div className="flex flex-arrow ">
                                    <button id="hey" className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={()=>{setIsLabsSelected(true);handleClick('labs')}}> 
                                        Select   
                                    </button>
                                   
                                    
                                   
                                    </div>}
                                            </div>
                                            
                                            </div>}
                                           {isMinesSelected && <div className="flex py-2 pl-5 pr-0 mb-4 bg-white rounded-lg overflow-hidden flex-row justify-between ">
                                            <div className="flex items-center">
                                                <span className="flex items-center justify-center w-8 h-8 mr-8 bg-transparent rounded-lg">
                                                <Image src="/assets/icons/Mines.png" alt="Digital Mines" height={30} width={30}/>
                                                </span>
                                                <h2 className="mb-1 pr-2 card-subheading ">Digital Mines</h2>
                                            </div>
                                            <div>
                                           {isMinesSelected && <div className="flex flex-arrow ">
                                    <button id="hey" className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={()=>{setIsMinesSelected(false);handleClick('mines')}}> 
                                        Unselect   
                                    </button>
                                   
                                    
                                   
                            </div>}
{!isMinesSelected &&                            <div className="flex flex-arrow ">
                                    <button id="hey" className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={()=>{setIsMinesSelected(true);handleClick('mines')}}> 
                                        Select   
                                    </button>
                                   
                                    
                                   
                                    </div>
} 
                                            </div>
                                            
                                            </div>}
                                </div>
                                
                                <div className="w-full">
                                    <button className="inline-flex items-center button  justify-center w-full px-4 py-3 bg-black text-white button whitespace-no-wrap  border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 hover:text-black focus:outline-none focus:shadow-none"> 
                                        Contact Sales
                                        <div className="w-4 h-4 ml-2 relative"><Image layout="fill" src="/pricing/down-arrow-svgrepo-com.svg"  alt="down arrow"/></div>
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
                </div>
                  {/* <!-- Customer logos Section --> */}

                    <div className="px-4 py-10">
                <div className="container px-4 mx-auto">
                <h2 className=" text-center  text-gray-500 section-heading sm:sm-section-heading">Trusted by brands all over the world</h2>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. ab repudiandae et.</p> */}
                </div>
                <Carousel className="bots flex p-10  " responsive={responsive}>
                    {/* <div className="p-3 bots-card flex-row justify-center items-center shadow-xl  border-2 border-maps-400 text-center ">
                        
                        <p className="text-lg font-bold mt-7 mb-4">DX maps Orchestrator Bot</p>
                        <p className="text-md">Orchestrate maps Lifecycle with a Digital footprint</p>
                    </div>
                    <div className="p-3 bots-card flex-row justify-center items-center shadow-xl  border-2 border-maps-400 text-center ">
                        
                        <p className="text-lg font-bold mt-7 mb-4">DX Release Orchestrator Bot</p>
                        <p className="text-md">Orchestrate the SAP TR Releases</p>
                    </div>
                    <div className="p-3 bots-card flex-row justify-center items-center shadow-xl  border-2 border-maps-400 text-center ">
                        
                        <p className="text-lg font-bold mt-7 mb-4">DX Event Orchestrator Bot</p>
                        <p className="text-md">Event Orchestrations for swift collaborations</p>
                    </div>
                    <div className="p-3 bots-card flex-row justify-center items-center shadow-xl  border-2 border-maps-400 text-center ">
                        
                        <p className="text-lg font-bold mt-7 mb-4">DX Change Management Orchestrator Bot</p>
                        <p className="text-md">Orchestrate the Change management</p>
                    </div>
                     <div className="p-3 bots-card flex-row justify-center items-center shadow-xl  border-2 border-maps-400 text-center ">
                        
                        <p className="text-lg font-bold mt-7 mb-4">DX  Security Impact Simulation Bot</p>
                        <p className="text-md">Simulate the Security Impact - Helping to mitigate Security and Compliance Risk</p>
                    </div>
                     <div className="p-3 bots-card flex-row justify-center items-center shadow-xl  border-2 border-maps-400 text-center ">
                        
                        <p className="text-lg font-bold mt-7 mb-4">Bot Name</p>
                        <p className="text-md">Bot description</p>
                    </div>
                    <div className="p-3 bots-card flex-row justify-center items-center shadow-xl  border-2 border-maps-400 text-center ">
                        
                        <p className="text-lg font-bold mt-7 mb-4">Bot Name</p>
                        <p className="text-md">Bot description</p>
                        </div> */}
                    <div className="p-3 bots-card flex-row">

                                <Image className=" w-auto lg:w-100" src="data:image/png;base64,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"
                                    alt="" width={250} height={250} layout="responsive"/>

                            </div>
                            <div className="p-3 bots-card flex-row">

                                <Image className="w-auto lg:w-100" src="data:image/png;base64,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"
                                    alt=""width={250} height={250} />

                            </div>
                            <div className="p-3 bots-card flex-row">

                                <Image className="w-auto lg:w-100" src="data:image/png;base64,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"
                                    alt="" width={250} height={250}/>

                            </div>
                            <div className="p-3 bots-card flex-row">

                                <Image className="w-auto lg:w-100" src="data:image/png;base64,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"
                                    alt="" width={250} height={250}/>

                            </div>
                            <div className="p-3 bots-card flex-row">

                                <Image className="w-auto lg:w-100" src="data:image/png;base64,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"
                                    alt="" width={250} height={250}/>

                            </div>
                            <div className="p-3 bots-card flex-row">

                                <Image className="w-auto lg:w-100" src="data:image/png;base64,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"
                                    alt="" width={250} height={250}/>

                            </div>    
                </Carousel>
            </div>
                {/* <!-- /Customer logos Section --> */}
            </section>
      </Layout>
      </>
    )
}
export const getStaticProps = async () => {
    // data url from strapi
    data={a:'ab'}
    
    return {
        props: {
            data:data
        }
    }
}