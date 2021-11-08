import Layout from "../../../component/Layout"
import Head from "next/head"
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from 'next-seo';
import { BreadcrumbJsonLd } from 'next-seo';
import { LogoJsonLd } from 'next-seo';
import { SocialProfileJsonLd } from 'next-seo';
const Customer_Success_Story_Landing = ({data}) => {
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
            <Head>
                <script type='text/javascript' src='https://platform-api.sharethis.com/js/sharethis.js#property=60f91fc57c9b910013246b36&product=inline-share-buttons' async='async'></script>
            </Head>
        <Layout>
      <section id="features" className="w-full py-20  pt-32 bg-herogradient" >
            <div className="flex flex-col items-center px-12 mx-auto lg:flex-row">
                <div className="relative z-20 flex flex-col  w-full h-full ">
                <p className="max-w-max px-2 py-1 mb-5  hyperlink text-gray-900 uppercase bg-gray-200 rounded-full ">
                    Customer Success Story
                </p>
                    <h1 className="heading text-white "  >A comprehensive SAP S/4HANA Readiness Assessment using KTern</h1>
                    <p className="subheading text-gray-100 pb-7 pt-2">Digitally Transform to SAP S/4HANA From SAP ECC</p>
                    <div className="flex flex-row">
                    
                   
                    <Link  href=""><a className=" inline-block py-3 px-10 bg-black button  hover:bg-gray-300 hover:text-black shadow   text-white  rounded-r-xl rounded-b-xl transition duration-200 uppercase hyperlink">Download Case Study</a></Link>
                    </div>
                </div>
               
            </div>
            </section>
       
            <section>
            <div className="flex flex-wrap md:px-10  overflow-hidden ">
                <div className="w-full md:w-1/3 md:px-10 mb-4 md:mb-0">

                    <div className="flex flex-col mt-10 w-full mb-10 ">
                    <div className="w-full md:mb-20 lg:mb-10  ">
                        <div className="relative h-full ml-5 mr-0 sm:mr-10">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1  rounded-lg"></span>
                            <div className="relative w-full h-full p-5 bg-white  rounded-lg">
                            <div className=" lg:block justify-end w-full pl-0 overflow-hidden ">
            <Image width={500} height={400} alt="hero" src="/resources/metus.jpeg" className="object-cover w-full h-full transform translate-x-0 md:translate-x-0" />
        </div>
                            </div>

                        </div>
                    </div>
                    <div className="w-full mb-10  ">
                        <div className="relative h-full ml-5 mr-0 sm:mr-10">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-800 rounded-lg"></span>
                            <div className="relative h-full p-5 bg-white border-2 border-black rounded-lg">
                            <div className="flex items-center -mt-1">
                                 <h3 className="my-2 ml-0 card-heading  text-gray-800 ">KTern&apos;s Value</h3>
                                 
                                </div>
                            
                <div className="py-2 px-5 mb-4 bg-gray-100 rounded-lg overflow-hidden hover:bg-gray-300 hover:shadow-md">
                                        <Link href="/product/digital-maps" passHref>
                                        <a>
                                        <div className="flex items-center" >
                                            <span className="flex items-center justify-center w-8 h-8 mr-8 bg-transparent rounded-lg">
                                            <Image src="/assets/icons/Maps.png" height={30} width={30} alt="Digital Maps"/>
                                            </span>
                                            <p className="card-subheading text-black hover:underline hover:shadow-sm ">Digital Maps</p>
                                        </div>
                                        </a>
                                        </Link>
                                        </div>

                                        <div className="py-2 px-5 mb-4 bg-gray-100 rounded-lg overflow-hidden hover:shadow-md hover:bg-gray-300 ">
                                        <Link href="/product/digital-labs" passHref>
                                        <a>
                                        <div className="flex items-center">
                                            <span className="flex items-center justify-center w-8 h-8 mr-8 bg-transparent rounded-lg">
                                            <Image src="/assets/icons/labs.png" height={30} width={30} alt="Digital Labs"/>
                                            </span>
                                            <p className="card-subheading  text-black hover:underline hover:shadow-sm">Digital Labs</p>
                                        </div>
                                        </a>
                                        </Link>
                                        </div>
                                        <div className="py-2 px-5 mb-4 bg-gray-100 rounded-lg overflow-hidden hover:shadow-md hover:bg-gray-300">
                                        <Link href="/product/digital-projects" passHref>
                                        <a>
                                        <div className="flex items-center">
                                            <span className="flex items-center justify-center w-8 h-8 mr-8 bg-transparent rounded-lg">
                                            <Image src="/assets/icons/projects.png" height={30} width={30} alt="Digital Projects"/>
                                            </span>
                                            <p className="card-subheading  text-black hover:shadow-sm hover:underline">Digital Projects</p>
                                        </div>
                                        </a>
                                        </Link>
                                        </div>





                                        
                            </div>

                        </div>
                    </div>
                    <div className="w-full mb-10  ">
                        <div className="relative h-full ml-5 mr-0 sm:mr-10">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-800 rounded-lg"></span>
                            <div className="relative h-full p-5 bg-white border-2 border-black rounded-lg">
                                <div className="flex items-center -mt-1">
                                 <h3 className="my-2 ml-0 card-subheading  text-gray-800 uppercase">Industry</h3>
                                 
                                </div>
                                <p className="mt-0 mb-1 card-subheading  text-gray-800">HVAC space</p>
                                <div className="flex items-center -mt-1">
                                 <h3 className="my-2 ml-0  card-subheading text-gray-800 uppercase">Headquarters</h3>
                                 
                                </div>
                                <p className="mt-0 mb-1  card-subheading text-gray-800">USA</p>
                            </div>

                        </div>
                    </div>
                    <div className="w-full mb-10  ">
                        <div className="relative h-full ml-5 mr-0 sm:mr-10">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-800 rounded-lg"></span>
                            <div className="relative h-full p-5 bg-white border-2 border-black rounded-lg">
                                <div className="flex items-center -mt-1">
                                 <h3 className="my-2 ml-0 card-heading  text-gray-800 ">Challenges</h3>
                                 
                                </div>
                               

                                <ul className="list-disc ml-4 hyperlink  text-black lg:">
                            <li className="pb-2 card-subheading" >Massive growth in the recent years making their current ECC processes obsolete</li>
                           <li className="pb-2 card-subheading">Multiple interfaces without seamless integration</li>
                           <li className="pb-4 card-subheading">No real-time data availability</li>
                           </ul>
                            </div>

                        </div>
                    </div>
                    <div className="w-full mb-10  ">
                        <div className="relative h-full ml-5 mr-0 sm:mr-10">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-800 rounded-lg"></span>
                            <div className="relative h-full p-5 bg-white border-2 border-black rounded-lg">
                                <div className="flex items-center -mt-1">
                                 <h3 className="my-2 ml-0 card-heading  text-gray-800 ">Solution</h3>
                                 
                                </div>
                               

                                <ul className="list-disc ml-4 hyperlink  text-black lg:">
                            <li className="pb-2 card-subheading" >Identified and determined a roadmap from ECC to S/4HANA</li>
                           <li className="pb-2 card-subheading">Assess the existing processes and identify pain points and improvement opportunities enabled through S/4HANA</li>
                           <li className="pb-4 card-subheading">Identify all the necessary pre-requisites for the SAP S/4HANA transformation</li>
                           </ul>
                            </div>

                        </div>
                    </div>
                                    

                    
                </div>
                </div>
                    
                
                 <div className="w-full md:w-2/3 md:px-10 px-4 mb-4 md:mb-0">
                 <div className="w-full mb-10 md:mt-10 xl:mt-20    md:mr-10 ">
                        <div className="relative h-full ml-2 mr-0 sm:mr-10">
                            <span className="absolute top-0 md:left-0 w-full h-full mt-1 md:ml-1  rounded-lg"></span>
                            <div className="relative h-full md:p-5 bg-white rounded-lg">
                               
                            <div className="grid grid-cols-3 gap-5 sm:grid-cols-12 md:grid-cols-12">
            <div className="max-w-xs col-span-4 font-sans border-0 border-gray-200 text-gray-50">
                <div className="box-border flex flex-col sm:mx-auto items-center h-full px-2 py-8 md:mx-4 leading-6 text-center border-solid sm:items-start ">
                    <span className="flex-shrink-0 md:p-5 font-sans border-0 border-gray-200 rounded-full bg-white text-gray-50">
                    <svg className="w-10 h-10" viewBox="0 -66 512.001 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m322.285156 335.644531c-7.441406 0-13.898437-5.53125-14.863281-13.105469-1.042969-8.21875 4.769531-15.726562 12.984375-16.773437 47.398438-6.039063 89.84375-18.882813 119.515625-36.171875 27.136719-15.808594 42.078125-34.394531 42.078125-52.332031 0-19.769531-17.484375-35.945313-32.15625-46.039063-6.824219-4.695312-8.550781-14.03125-3.855469-20.859375 4.695313-6.824219 14.035157-8.550781 20.859375-3.855469 29.539063 20.320313 45.152344 44.785157 45.152344 70.757813 0 29.476563-19.699219 56.535156-56.972656 78.25-33.550782 19.546875-78.789063 33.382813-130.828125 40.011719-.644531.078125-1.285157.117187-1.914063.117187zm0 0"/><path d="m252.34375 314.15625-40-40c-5.859375-5.859375-15.355469-5.859375-21.214844 0-5.855468 5.855469-5.855468 15.355469 0 21.210938l11.6875 11.6875c-44.8125-4.628907-85.523437-15.0625-117.046875-30.222657-35.441406-17.042969-55.769531-38.757812-55.769531-59.570312 0-17.652344 14.554688-36 40.980469-51.664063 7.128906-4.222656 9.480469-13.425781 5.257812-20.550781-4.226562-7.128906-13.429687-9.480469-20.554687-5.257813-46.023438 27.28125-55.683594 57.1875-55.683594 77.472657 0 33.28125 25.84375 64.039062 72.769531 86.609375 36.421875 17.511718 83.535157 29.242187 134.863281 33.78125l-16.503906 16.503906c-5.855468 5.855469-5.855468 15.355469 0 21.214844 2.929688 2.925781 6.769532 4.390625 10.609375 4.390625 3.835938 0 7.675781-1.464844 10.605469-4.390625l40-40c5.855469-5.859375 5.855469-15.359375 0-21.214844zm0 0"/><path d="m157.097656 187.222656v-3.609375c0-12.730469-7.792968-15.199219-18.242187-15.199219-6.460938 0-8.550781-5.699218-8.550781-11.398437 0-5.703125 2.089843-11.402344 8.550781-11.402344 7.21875 0 14.820312-.949219 14.820312-16.339843 0-11.019532-6.269531-13.679688-14.0625-13.679688-9.308593 0-14.058593 2.28125-14.058593 9.691406 0 6.457032-2.851563 10.828125-13.871094 10.828125-13.679688 0-15.386719-2.851562-15.386719-11.972656 0-14.816406 10.636719-34.007813 43.316406-34.007813 24.132813 0 42.371094 8.738282 42.371094 34.390626 0 13.867187-5.128906 26.789062-14.628906 31.160156 11.210937 4.179687 19.378906 12.539062 19.378906 27.929687v3.609375c0 31.160156-21.46875 42.941406-48.070313 42.941406-32.679687 0-45.21875-19.949218-45.21875-35.910156 0-8.550781 3.609376-10.832031 14.058594-10.832031 12.160156 0 15.199219 2.660156 15.199219 9.882813 0 8.929687 8.363281 11.019531 16.910156 11.019531 12.921875 0 17.484375-4.75 17.484375-17.101563zm0 0"/><path d="m302.066406 183.613281v1.710938c0 32.679687-20.332031 44.839843-46.550781 44.839843s-46.742187-12.160156-46.742187-44.839843v-50.351563c0-32.679687 21.089843-44.839844 48.453124-44.839844 32.109376 0 44.839844 19.949219 44.839844 35.71875 0 9.121094-4.371094 11.96875-13.871094 11.96875-8.167968 0-15.390624-2.089843-15.390624-10.828124 0-7.21875-7.597657-11.019532-16.527344-11.019532-11.210938 0-17.863282 5.890625-17.863282 19v17.097656c6.082032-6.648437 14.632813-8.359374 23.753907-8.359374 21.65625 0 39.898437 9.5 39.898437 39.902343zm-63.652344 3.800781c0 13.109376 6.460938 18.808594 17.101563 18.808594s16.910156-5.699218 16.910156-18.808594v-1.710937c0-13.871094-6.269531-19.191406-17.101562-19.191406-10.257813 0-16.910157 4.941406-16.910157 17.480469zm0 0"/><path d="m325.054688 185.324219v-50.351563c0-32.679687 20.328124-44.839844 46.550781-44.839844 26.21875 0 46.738281 12.160157 46.738281 44.839844v50.351563c0 32.679687-20.519531 44.839843-46.738281 44.839843-26.222657 0-46.550781-12.160156-46.550781-44.839843zm63.648437-50.351563c0-13.109375-6.457031-19-17.097656-19s-16.910157 5.890625-16.910157 19v50.351563c0 13.109375 6.269532 19 16.910157 19s17.097656-5.890625 17.097656-19zm0 0"/><path d="m454.351562 90c-24.816406 0-45-20.1875-45-45s20.183594-45 45-45c24.8125 0 45 20.1875 45 45s-20.1875 45-45 45zm0-60c-8.273437 0-15 6.730469-15 15 0 8.273438 6.726563 15 15 15 8.269532 0 15-6.726562 15-15 0-8.269531-6.730468-15-15-15zm0 0"/></svg>                    </span>
                    <div className="mt-6 font-sans text-center border-0 border-gray-200 sm:text-left text-gray-50">
                        <span className="box-border hyperlink    text-black">360 degree Automation</span>
                        <p className="box-border mx-0 mt-2 mb-0 font-normal leading-snug text-center text-gray-300 border-solid sm:text-left"></p>
                    </div>
                </div>
            </div>
            <div className="max-w-xs col-span-4 font-sans border-0 border-gray-200 text-gray-50">
                <div className="box-border flex flex-col sm:mx-auto items-center h-full px-2 py-8 md:mx-4 leading-6 text-center border-solid sm:items-start ">
                <span className="flex-shrink-0 md:p-5 font-sans border-0 border-gray-200 rounded-full bg-white text-gray-50">
                <svg id="Capa_1" className="w-10 h-10" enableBackground="new 0 0 443.294 443.294" viewBox="0 0 443.294 443.294" xmlns="http://www.w3.org/2000/svg"><path d="m221.647 0c-122.214 0-221.647 99.433-221.647 221.647s99.433 221.647 221.647 221.647 221.647-99.433 221.647-221.647-99.433-221.647-221.647-221.647zm0 415.588c-106.941 0-193.941-87-193.941-193.941s87-193.941 193.941-193.941 193.941 87 193.941 193.941-87 193.941-193.941 193.941z"/><path d="m235.5 83.118h-27.706v144.265l87.176 87.176 19.589-19.589-79.059-79.059z"/></svg>
                </span>
                     <div className="mt-6 font-sans text-center border-0 border-gray-200 sm:text-left text-gray-50">
                        <span className="box-border hyperlink    text-black">20+ Hours Saved</span>
                        <p className="box-border mx-0 mt-2 mb-0   leading-snug text-center text-black border-solid sm:text-left"></p>
                    </div>
                </div>
            </div>

            <div className="max-w-xs col-span-4 font-sans border-0 border-gray-200 text-gray-50">
                <div className="box-border flex flex-col sm:mx-auto items-center h-full px-2 py-8 md:mx-4 leading-6 text-center border-solid sm:items-start ">
                <span className="flex-shrink-0 md:p-5 font-sans border-0 border-gray-200 rounded-full bg-white text-gray-50">
<svg className="w-10 h-10" viewBox="-29 0 487 487.71902" width="487pt" xmlns="http://www.w3.org/2000/svg"><path d="m220.867188 266.175781c-.902344-.195312-1.828126-.230469-2.742188-.09375-9.160156-1.066406-16.070312-8.816406-16.085938-18.035156 0-4.417969-3.582031-8-8-8-4.417968 0-8 3.582031-8 8 .023438 15.394531 10.320313 28.878906 25.164063 32.953125v8c0 4.417969 3.582031 8 8 8s8-3.582031 8-8v-7.515625c17.132813-3.585937 28.777344-19.542969 26.976563-36.953125-1.804688-17.410156-16.472657-30.640625-33.976563-30.644531-10.03125 0-18.164063-8.132813-18.164063-18.164063s8.132813-18.164062 18.164063-18.164062 18.164063 8.132812 18.164063 18.164062c0 4.417969 3.582031 8 8 8 4.417968 0 8-3.582031 8-8-.023438-16.164062-11.347657-30.105468-27.164063-33.441406v-7.28125c0-4.417969-3.582031-8-8-8s-8 3.582031-8 8v7.769531c-16.507813 4.507813-27.132813 20.535157-24.859375 37.496094s16.746094 29.621094 33.859375 29.617187c9.898437 0 17.972656 7.925782 18.152344 17.820313.183593 9.894531-7.597657 18.113281-17.488281 18.472656zm0 0"/><path d="m104.195312 222.5c0 64.070312 51.9375 116.007812 116.007813 116.007812s116.007813-51.9375 116.007813-116.007812-51.9375-116.007812-116.007813-116.007812c-64.039063.070312-115.933594 51.96875-116.007813 116.007812zm116.007813-100.007812c55.234375 0 100.007813 44.773437 100.007813 100.007812s-44.773438 100.007812-100.007813 100.007812-100.007813-44.773437-100.007813-100.007812c.0625-55.207031 44.800782-99.945312 100.007813-100.007812zm0 0"/><path d="m375.648438 358.230469-62.667969 29.609375c-8.652344-16.09375-25.25-26.335938-43.515625-26.851563l-57.851563-1.589843c-9.160156-.261719-18.148437-2.582032-26.292969-6.789063l-5.886718-3.050781c-30.140625-15.710938-66.066406-15.671875-96.175782.101562l.367188-13.335937c.121094-4.417969-3.359375-8.097657-7.777344-8.21875l-63.4375-1.746094c-4.417968-.121094-8.09375 3.359375-8.214844 7.777344l-3.832031 139.210937c-.121093 4.417969 3.359375 8.097656 7.777344 8.21875l63.4375 1.746094h.21875c4.335937 0 7.882813-3.449219 8-7.78125l.183594-6.660156 16.480469-8.824219c6.46875-3.480469 14.03125-4.308594 21.097656-2.308594l98.414062 27.621094c.171875.050781.34375.089844.519532.128906 7.113281 1.488281 14.363281 2.234375 21.628906 2.230469 15.390625.007812 30.601562-3.308594 44.589844-9.730469.34375-.15625.675781-.339843.992187-.546875l142.691406-92.296875c3.554688-2.300781 4.703125-6.96875 2.621094-10.65625-10.59375-18.796875-34.089844-25.957031-53.367187-16.257812zm-359.070313 107.5625 3.390625-123.21875 47.441406 1.304687-3.390625 123.222656zm258.925781-2.09375c-17.378906 7.84375-36.789062 10.007812-55.46875 6.191406l-98.148437-27.550781c-11.046875-3.121094-22.871094-1.828125-32.976563 3.605468l-8.421875 4.511719 2.253907-81.925781c26.6875-17.75 60.914062-19.574219 89.335937-4.765625l5.886719 3.050781c10.289062 5.3125 21.636718 8.242188 33.210937 8.578125l57.855469 1.589844c16.25.46875 30.050781 12.039063 33.347656 27.960937l-86.175781-2.378906c-4.417969-.121094-8.09375 3.363282-8.21875 7.777344-.121094 4.417969 3.363281 8.097656 7.777344 8.21875l95.101562 2.617188h.222657c4.332031-.003907 7.875-3.453126 7.992187-7.78125.097656-3.476563-.160156-6.957032-.773437-10.378907l64.277343-30.371093c.0625-.027344.125-.058594.1875-.089844 9.117188-4.613282 20.140625-3.070313 27.640625 3.871094zm0 0"/><path d="m228.203125 84v-76c0-4.417969-3.582031-8-8-8s-8 3.582031-8 8v76c0 4.417969 3.582031 8 8 8s8-3.582031 8-8zm0 0"/><path d="m288.203125 84v-36c0-4.417969-3.582031-8-8-8s-8 3.582031-8 8v36c0 4.417969 3.582031 8 8 8s8-3.582031 8-8zm0 0"/><path d="m168.203125 84v-36c0-4.417969-3.582031-8-8-8s-8 3.582031-8 8v36c0 4.417969 3.582031 8 8 8s8-3.582031 8-8zm0 0"/></svg></span>                    <div className="mt-6 font-sans text-center border-0 border-gray-200 sm:text-left text-gray-50">
                        <span className="box-border  hyperlink   text-black">1 Million dollars Saved</span>
                        <p className="box-border mx-0 mt-2 mb-0 font-normal leading-snug text-center text-gray-300 border-solid sm:text-left"></p>
                    </div>
                </div>
            </div>

                        
        </div>

                                
                            </div>

                        </div>
                    </div>
            <div className="max-w-full ml-2">
          <section id="section-1">
        <h1 className=" card-heading mb-6 text-left  text-black "> The Company </h1>
        <p className="mb-6  card-subheading  text-black">The Company is a leading provider/marketer of technologically advanced innovative products, systems, and solutions in the HVAC space. They provide solutions capable of cooling and heating any application from a home to a large commercial building. The company predominantly caters to the United States, Caribbean and the Central American markets. They have grown to a revenue level of approximately $1 Billion, from a modest $50 Million USD in a short time span.

</p>
        </section>
        <div id="section-2">
        <h1 className=" card-heading mb-6 text-left  text-black"> Business Situation and Challenges </h1>
        <p className="mb-6  card-subheading text-black">The customer was using SAP ECC 6.0 as part of a shared instance with six other subsidiaries. Their existing SAP ECC system was implemented about two decades ago to cater to the operations when they were only one-twentieth of their current size. The increase in volume and the rapid scaling of business outgrew their implemented SAP processes. Some of the current business pain areas of their SAP Landscape include:</p>
        </div>
        <div id="section-3">
        <h1 className=" card-heading mb-6 text-left  text-black"> Solution provided by KTern </h1>
        <p className="mb-6  card-subheading text-black">KTern is an SAP certified SaaS product built for SAP Digital Transformations. It’s unique automation, governance and collaboration capabilities helps ECC customers migrate to S/4HANA. It has several inbuilt modules and an AI & RPA driven “S/4HANAPEDIA” rule engine to cover the entire lifecycle of a S/4HANA project.

Our customer used KTern to assess their current SAP ECC system to determine the implications of the move to S/4HANA and the impact on current functionalities and associated system data.

</p>
        </div>
      </div>
                 </div>
            </div>
            </section>
             </Layout>
            </>
    )
}

// Return a list of possible value for id
export const getStaticPaths = async () => {
  // dynamic route array values must be acquired here from strapi
    const data=[{id:'comprehensive-sap-s4-hana-readiness-assessment-tech-advance-solution'},{id:'sap-s4-hana-assessment-ktern-asm'},{id:'digital-projects'},{id:'digital-maps'},{id:'digital-labs'}]
    
    const paths = data.map(index => {
        return ({
            params:{id:index.id}
        })
    })
    return {
        paths,
        fallback:false
    }
}
// Fetch necessary data for the blog post using params.id
export const getStaticProps = async (context) => {
    const id = context.params.id;
    // strapi data to be fetched
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
    return {
        props:{data:data,url:id}
    }
}
export default Customer_Success_Story_Landing;