import Layout from "../component/Layout"
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from 'next-seo';
import { BreadcrumbJsonLd } from 'next-seo';
import { LogoJsonLd } from 'next-seo';
import { SocialProfileJsonLd } from 'next-seo';

export default function About () {
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
             <section className="relative flex flex-col items-center justify-center w-full px-6 py-32 bg-secondary bg-cover  min-w-screen">
                <div className="flex flex-col items-center justify-center md:mx-auto  xl:p-8 lg:flex-row lg:max-w-6xl lg:p-0">
                    <div className="container relative z-20 flex flex-col w-full px-5 pb-1 pr-12 mb-16 text-2xl text-gray-700 lg:w-1/2 sm:pr-0 md:pr-6 md:pl-0 lg:pl-5 xl:pr-10 sm:items-center lg:items-start lg:mb-0">
                        <h1 className="relative z-20   leading-none text-black heading  sm:text-center lg:text-left">
                            Unlock Digital<br/>
                            <span className="mt-1 text-gray-400 heading lg:mt-0">Transformation Success</span>
                        </h1>
                        <p className="relative z-20 block mt-6 subheading text-black  sm:text-center lg:text-left">We aim to make Digital Transformation simple and easier</p>
                        
                    </div>
                    <div  className="relative w-full px-5 rounded-lg cursor-pointer text-white lg:w-1/2 group xl:px-0">
                    <div className="absolute top-0 left-0 w-11/12 -mt-20 opacity-50">
                            <svg className="w-full h-full ml-4 text-gray-400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M45,-78C58.3,-70.3,69,-58.2,75.2,-44.4C81.3,-30.7,82.9,-15.3,83.5,0.4C84.2,16,83.8,32.1,76.5,43.9C69.2,55.7,55.1,63.3,41.2,69.4C27.3,75.4,13.6,80,-0.7,81.2C-15.1,82.5,-30.1,80.3,-41.2,72.6C-52.2,64.9,-59.2,51.6,-67.1,38.5C-75.1,25.5,-83.9,12.8,-83.8,0C-83.8,-12.7,-74.9,-25.4,-65.8,-36.4C-56.7,-47.4,-47.4,-56.7,-36.4,-65.7C-25.4,-74.7,-12.7,-83.5,1.6,-86.2C15.9,-89,31.8,-85.7,45,-78Z" transform="translate(100 100)"></path></svg>
                        </div>
                        <div className="z-10 object-cover w-100 h-80 "><Image  width={600} height={360} src="https://images.unsplash.com/photo-1493857671505-72967e2e2760?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2850&amp;h=1603&amp;q=80"  alt=""/></div>
                            <div className="absolute inset-0 flex items-center justify-center sm:mb-40">
                                <Link href="/video"  passHref>
                                            <a className="flex items-center justify-center hover:bg-white bg-black rounded-full  ">
                                             <span className="flex items-center justify-center w-20 h-20 bg-black rounded-full group-hover:text-black shadow-2xl group-hover:bg-white ">
                                                <svg className="w-auto h-8 ml-1   fill-current" viewBox="0 0 52 66" xmlns="http://www.w3.org/2000/svg"><path d="M50 30.7L4.1.6C2.6-.4.8.9.8 2.9v60.3c0 2 1.8 3.3 3.3 2.3L50 35.3c1.5-1 1.5-3.6 0-4.6z" fillRule="nonzero"></path></svg>
                                            </span>
                                        </a>
                                </Link >
                        </div>
                        
                        </div>                        
                    </div>
            </section>

                {/* <!-- Our Vision--> */}
                <section className="w-full px-8 py-20 xl:px-0 bg-white">
                <div className="max-w-6xl mx-auto">
                    <p className="mb-5 section-heading text-black ">Our Vision</p>
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full pr-5 md:w-6/12 xl:pr-12">
                            <p className="section-subheading leading-normal text-gray-700 ">
                                With technology at our core, we automate and manage your SAP investments and drive business productivity for the complete SAP ecosystem. 
                            </p>

                        </div>

                        <div className="w-full mt-5 md:mt-0 md:w-8/12 md:pl-2">
                            <h3 className="mb-5 -mt-1 card-heading  ">To inspire and Democratize SAP Digital Transformation through our product offerings </h3>
                            <Link href="#_"  passHref>
                                <a className="inline-flex items-center pb-1  text-black hover:border-blue-500 group ">
                                <span className="hyperlink group-hover:text-gray-400">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                </section>

                {/* <!--Our Values--> */}
                <section className="relative leading-7  text-gray-900 py-10 bg-white border-solid">
                <div className="box-border mx-auto border-solid lg:pl-8 max-w-7xl">
                    <div className="flex flex-col items-center leading-7 text-gray-900 border-0 border-gray-200 lg:flex-row">
                    <div className="box-border flex flex-col justify-center w-full h-full p-8 text-gray-900 border-solid lg:w-1/2 md:p-16 lg:p-0 lg:pl-10 lg:pr-20">
                        <h2 className="m-0 section-heading    text-left text-black ">Our Values</h2>
                        <p className="mt-5 section-subheading text-left border-0 border-gray-200 ">At the very heart of KTern&apos;s philosophy, is the core value of excellence, which is embedded in all systems and processes across the organization.
                        </p>
                        <div className="grid gap-4 mt-8 leading-7 border-0 border-gray-200 sm:mt-10 sm:gap-6 lg:mt-12 lg:gap-8">
                        <div className="box-border flex items-start text-gray-900 border-solid">
                            <div className="flex items-center justify-center w-12 h-12 leading-7 bg-black border-0 border-gray-200 rounded-full">
                            <p className="box-border m-0 text-xl text-white border-solid">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
                            </p>
                            </div>
                            <div className="flex-1 ml-6 leading-7 border-0 border-gray-200">
                            <h3 className="box-border m-0 card-heading text-black border-solid sm:text-xl ">Aspiring</h3>
                            <p className="box-border mt-2 card-subheading text-gray-900 border-solid">No more wasting time on manual tasks, you can leverage our automated tasks to make your life easier.</p>
                            </div>
                        </div>
                        <div className="box-border flex items-start text-gray-900 border-solid">
                            <div className="flex items-center justify-center w-12 h-12 leading-7 bg-black border-0 border-gray-200 rounded-full">
                            <p className="box-border m-0 text-xl text-white border-solid">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path></svg>
                            </p>
                            </div>
                            <div className="flex-1 ml-6 leading-7 border-0 border-gray-200">
                            <h3 className="box-border m-0 card-heading text-black border-solid sm:text-xl ">Teamwork</h3>
                            <p className="box-border mt-2 card-subheading text-gray-900 border-solid">Utilize our email campaigns to send your users up-to-date information about your product and services.</p>
                            </div>
                        </div>
                        <div className="box-border flex items-start text-gray-900 border-solid">
                            <div className="flex items-center justify-center w-12 h-12 leading-7 bg-black border-0 border-gray-200 rounded-full">
                            <p className="box-border m-0 text-xl text-white border-solid">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                            </p>
                            </div>
                            <div className="flex-1 ml-6 leading-7 border-0 border-gray-200">
                            <h3 className="box-border m-0 card-heading text-black border-solid sm:text-xl ">Great Support</h3>
                            <p className="box-border mt-2 card-subheading text-gray-900 border-solid">We offer some of the best support available. Contact us anytime of the day and we&apos;ll help you out ASAP.</p>
                            </div>
                        </div>
                        <div className="box-border flex items-start text-gray-900 border-solid">
                            <div className="flex items-center justify-center w-12 h-12 leading-7 bg-black border-0 border-gray-200 rounded-full">
                            <p className="box-border m-0 text-xl text-white border-solid">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path></svg>
                            </p>
                            </div>
                            <div className="flex-1 ml-6 leading-7 border-0 border-gray-200">
                            <h3 className="box-border m-0 card-heading text-black border-solid sm:text-xl ">Stay Humble</h3>
                            <p className="box-border mt-2 card-subheading text-gray-900 border-solid">Utilize our email campaigns to send your users up-to-date information about your product and services.</p>
                            </div>
                        </div>
                        <div className="box-border flex items-start text-gray-900 border-solid">
                            <div className="flex items-center justify-center w-12 h-12 leading-7 bg-black border-0 border-gray-200 rounded-full">
                            <p className="box-border m-0 text-xl text-white border-solid">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path></svg>
                            </p>
                            </div>
                            <div className="flex-1 ml-6 leading-7 border-0 border-gray-200">
                            <h3 className="box-border m-0 card-heading text-black border-solid sm:text-xl ">Diversity</h3>
                            <p className="box-border mt-2 card-subheading text-gray-900 border-solid">Utilize our email campaigns to send your users up-to-date information about your product and services.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="hidden md:block w-full h-full overflow-hidden leading-7 text-gray-900 border-0 border-gray-200 lg:w-1/2">
                        <div className="object-cover relative"><Image width={600} height={700} src="https://images.unsplash.com/photo-1553484771-047a44eee27a?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1234&amp;h=1600&amp;q=80" alt="" /></div>
                    </div>
                    </div>
                </div>
                </section>

                {/* <!--What We do--> */}
                <section className="bg-black overflow-hidden">
                <div className="relative px-16 pt-10 pb-12 mx-auto max-w-7xl xl:px-16">
                    <svg className="relative z-10 w-16 mb-8 text-yellow-300 transform opacity-100 fill-current sm:w-20 -rotate-0 rotate rotate-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 46"><defs></defs><g fillRule="nonzero"><path d="M46.651 2.666c1.892-.812 1.06-1.401-1.337-1.81A4.827 4.827 0 0044.323 0a3.914 3.914 0 00-.614.64C34.376-.395 11.639.36 8.676 1.976 6.99 1.437 1.364 9.542.344 13.552c-.436.1-.436.632-.12 1.487a.84.84 0 00.1.28v-.05a2.8 2.8 0 00.247.668h.06c2.814 5.749 14.356 19.796 15 20.673l-.149-.158c2.418 2.587 3.963 5.547 6.291 8.17 2.626 2.213 3.478 1.437 3.399-.065 2.784-1.171 3.289-3.73 4.775-5.655 5.608-7.904 14.742-14.651 19.498-22.763a2.347 2.347 0 00-.09-.575c1.725-2.429-.296-9.018-2.704-12.898zM38.25 24.093c-4.38 5.863-12.355 11.432-13.693 18.15-.33-.903-.903-1.75-1.684-2.493C15.987 31.616 10.4 22.828 3.088 14.931c3.101-1.997 3.636-6.021 5.469-8.615l-.09.187.199-.41-.06.13.08-.151c.31-1.051.463-2.123.455-3.198.876.312 1.796.553 2.745.719 10.333-.633 20.805-.144 31.129-.417.198 1.71 1.387 3.514 1.982 5.094 0-.057 0-.122-.08-.18 1.11 2.243.803 4.937 2.616 6.92-2.953 1.337-8.342 8.048-9.283 9.083zM7.5 14.505v-.01.01z"></path><path d="M9.567 12.925c-.022.243.175.468.486.556 0 .065.05.13.08.094l.139-.05h.069c-1.015.233-1.858.754-2.341 1.445.908.243 1.84.436 2.787.578.208.5.484.985.824 1.445v.094-.036c.387.607.763 1.214 1.16 1.814v-.072c.516.816.992 1.64 1.548 2.457.555.817 1.13 1.9 1.736 2.782a.241.241 0 01-.05-.08c1.587 2.169 2.599 4.59 4.444 6.635 3.482 2.002-.536-3.874-1.2-4.777-1.101-1.662-2.232-3.324-3.294-5-.892-1.446-1.845-2.892-2.787-4.337-.149-.354-.298-.65-.446-.925 2.975-.152 5.951-.455 8.927-.513 3.849-.145 7.737 0 11.606 0-.466 1.604-.526 4.025-.992 4.85-.387 3.403-3.968 7.096-2.46 10.37.605-.477 1.029-1.06 1.23-1.692 1.21-4.43 3.918-8.99 3.75-13.535 2.579.03 5.159-.045 7.727-.224 3.65-.853 3.134-2.32-.546-2.349h.218c-2.55.05-5.098.058-7.648.05a27.367 27.367 0 00-3.095-5.181.511.511 0 01-.089-.13c-1.408 1.257.308 3.714 1.597 5.304-4.85 0-9.7 0-14.551.217h.218c-2.113.333-5.168.116-7.53.564.165-.11.255-.265.249-.427a.376.376 0 000-.151c2.48-2.212 7.241-8.166 3.115-6.367l-4.88 6.59zm3.68 3.526a.19.19 0 010 .065.285.285 0 010-.08v.015zM11.5 17.505v-.01z"></path><path d="M14.499 21.55v-.1a.54.54 0 010 .1zM41.874 10c.462-1.423-.366-2.884-2.197-3.876A.87.87 0 0139.522 6c-1.373.757.287 2.644 1.266 3.49.303.209.671.382 1.086.51zM40.5 9.505v-.01z"></path></g></svg>
                    <div className="relative z-20">
                        <h3 className="section-heading text-left text-white ">What we do</h3>
                        <div className="flex flex space-x-5 mt-4 sm:flex-row items-center">
                            <p className="section-subheading text-left text-yellow-300">We help automate and Govern Digital Transformations</p>
                            <div className="flex mt-5 space-x-1 sm:mt-1 sm:ml-3 items-center my-auto">
                                <div className="w-10 h-2 bg-yellow-300 rounded-full opacity-100"></div>
                                <div className="w-8 h-2 bg-yellow-300 rounded-full opacity-75"></div>
                                <div className="w-4 h-2 bg-yellow-300 rounded-full opacity-50"></div>
                                <div className="w-3 h-2 bg-yellow-300 rounded-full opacity-25"></div>
                                <div className="w-2 h-2 bg-yellow-300 rounded-full opacity-10"></div>
                                <div className="w-2 h-2 bg-yellow-300 rounded-full opacity-5"></div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 mt-10 gap-14 lg:grid-cols-3">
                        <div className="flex text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="hidden md:block flex-shrink-0 w-20 h-20 mr-8 text-yellow-300 stroke-current" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M19 11v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path><path d="M13 13l9 3l-4 2l-2 4l-3 -9"></path><line x1="3" y1="3" x2="3" y2="3.01"></line><line x1="7" y1="3" x2="7" y2="3.01"></line><line x1="11" y1="3" x2="11" y2="3.01"></line><line x1="15" y1="3" x2="15" y2="3.01"></line><line x1="3" y1="7" x2="3" y2="7.01"></line><line x1="3" y1="11" x2="3" y2="11.01"></line><line x1="3" y1="15" x2="3" y2="15.01"></line></svg>
                            <div className="relative space-y-2">
                                <h4 className="card-heading">ERP Transformations</h4>
                                <p className="card-subheading text-gray-300">With KTern&apos;s DXaaS&#8482; Platform , you could manage your entire ERP Transformation right from your Home .
                            </p></div>
                        </div>

                        <div className="flex text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 hidden md:block w-20 h-20 mr-8 text-yellow-300 stroke-current" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 13.5v-7.5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-6m-8 -10h16m-10 -6v11.5m-8 3.5h7m-3 -3l3 3l-3 3"></path></svg>
                            <div className="relative space-y-2">
                                <h4 className="card-heading">Enterprise Release Impact</h4>
                                <p className="card-subheading text-gray-300">Simulate and forecast the release impact with the use of digital bots for impact mining
                            </p></div>
                        </div>

                        <div className="flex text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-20 h-20 mr-8 hidden md:block  text-yellow-300 stroke-current" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2"></path><path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9"></path><path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12"></path><line x1="17" y1="17" x2="17" y2="17.01"></line></svg>
                            <div className="relative space-y-2">
                                <h4 className="card-heading">Automated Testing</h4>
                                <p className="card-subheading text-gray-300">Identify Test gaps and automatically updates your Test Plan
                            </p></div>
                        </div>
                    </div>
                </div>
                </section>
                {/* <!-- Our Customers--> */}
                <section className="w-full py-10 pb-16 bg-secondary">
                <div className="flex flex-col items-center max-w-6xl px-10 mx-auto xl:px-0">
                    <p className="card-heading text-gray-400 uppercase">Our customers</p>
                    <div className="flex flex flex-wrap justify-center sm:flex-row space-x-16">
                        <svg className="w-auto h-12 mt-8 text-black fill-current" viewBox="0 0 2418 2428" xmlns="http://www.w3.org/2000/svg"><g stroke="none" strokeWidth="1" fillRule="evenodd"><g fillRule="nonzero"><path d="M1209 .77C541.628.77.62 543.968.62 1214c0 670.044 541.02 1213.244 1208.38 1213.244 667.346 0 1208.38-543.2 1208.38-1213.244C2417.38 543.969 1876.346.77 1209 .77zM615.504 1565.493v-100.425c-50.842 57.845-108.778 96.391-194.119 95.924-201.926-1.102-365.644-164.379-365.644-367.122 0-202.743 163.718-367.096 365.644-367.096 201.94 0 377.602 163.069 377.602 365.838l.207 371.597-183.69 1.284zm602.6 5.771c-201.938 0-377.601-163.069-377.601-365.838l-.207-617.685h183.418l.246 345.216c50.868-57.832 108.79-96.391 194.145-95.924 201.887 1.128 365.63 164.379 365.63 367.122 0 202.756-163.743 367.11-365.63 367.11zm786.215-8.625c-201.94 0-365.657-164.353-365.657-367.096s163.718-367.096 365.657-367.096c176.233 0 323.894 129.179 358.497 295.827l-183.885-.61c-28.17-66.859-94.381-112.032-171.266-112.032-102.487 0-185.584 83.395-185.584 186.297 0 102.916 83.084 186.35 185.584 186.35 76.885 0 143.913-44.68 172.083-111.566l183.86-.856c-34.111 167.271-182.602 290.782-359.29 290.782h.001z"></path><path d="M1213.397 1008.027c-102.487 0-185.598 83.422-185.598 186.324 0 102.902 83.11 186.35 185.598 186.35 102.487 0 185.597-83.448 185.597-186.35s-83.11-186.324-185.597-186.324zm-789.742 0c-102.487 0-185.598 83.422-185.598 186.324 0 102.902 83.11 186.35 185.598 186.35 102.487 0 185.597-83.448 185.597-186.35s-83.11-186.324-185.597-186.324z"></path></g></g></svg>
                        <svg className="w-auto h-12 mt-8 text-black fill-current" viewBox="0 0 2280 670" xmlns="http://www.w3.org/2000/svg"><g stroke="none" strokeWidth="1" fillRule="evenodd"><g fillRule="nonzero"><path d="M.295.16h467.378v669.68H.295V.16zM67.66 602.424h332.415V67.602H67.66v534.822zM778.13 300.617h-28.909c-37.975-53.643-75.64-106.949-113.252-167.193h-.272v167.193h-31.958V67.5h28.936c37.975 53.266 75.587 106.196 112.85 166.13h.661V67.498h31.958v233.118h-.013zm75.965-92.267c9.273-30.647 18.611-58.947 26.95-94.925h.675c9.312 35.978 17.652 64.29 26.303 94.925h-53.928zM869.373 67.5L788.83 300.617h34.629l20.259-63.63h70.309l18.3 63.63h44.655L902.693 67.5h-33.32zm145.21 233.118V98.77h-61.296v-31.27h162.498v31.27h-61.243v201.848h-39.96zM1128.742 67.5h39.687v233.118h-39.688V67.5zm162.9 203.768c-41.672 0-56.315-45.952-56.315-90.581 0-42.943 16.64-83.915 56.314-83.915 39.623 0 56.211 40.972 56.211 83.915 0 44.629-14.616 90.58-56.21 90.58zm0 33.293c60.918 0 98.868-54.253 98.868-123.887 0-65.251-41.892-117.195-98.869-117.195-56.924 0-98.998 51.944-98.998 117.195.013 69.647 38.028 123.887 98.998 123.887zm297.669-3.943h-28.949c-38.001-53.643-75.64-106.949-113.226-167.193h-.324v167.193h-31.919V67.5h28.949c37.923 53.266 75.562 106.196 112.798 166.13h.687V67.498h31.997v233.118h-.013zm75.925-92.267c9.35-30.647 18.624-58.947 27.003-94.925h.661c9.325 35.978 17.626 64.29 26.264 94.925h-53.928zM1680.593 67.5l-80.581 233.118h34.655l20.259-63.63h70.296l18.313 63.63h44.603L1713.86 67.5h-33.267zm119.153 0h39.7v201.796h78.883v31.322h-118.583V67.5zM753.566 495.605v96.21c-21.335 8.365-43.656 14.318-66.237 14.318-68.623 0-111.903-53.28-111.903-121.89 0-63.63 43.28-119.218 113.213-119.218 21.608 0 43.267 8.028 56.6 18.002l-12.995 27.639c-10.636-6.602-27.328-12.27-42.62-12.27-42.592 0-71.592 33.644-71.592 86.6 0 55.238 33.32 87.844 67.624 87.844 10.61 0 19.65-1.271 28.015-5.642v-71.593h39.895zm142.927-95.211h-66.678v63.902h65.264v31.309h-65.264v75.211H908.4v31.348h-118.57V369.033h106.664v31.36zm123.2 172.433c-41.672 0-56.341-45.913-56.341-90.568 0-42.917 16.653-83.876 56.34-83.876 39.597 0 56.211 40.959 56.211 83.876 0 44.655-14.681 90.568-56.21 90.568zm0 33.306c60.905 0 98.842-54.279 98.842-123.887 0-65.251-41.931-117.234-98.843-117.234-57.015 0-98.92 51.983-98.92 117.234-.013 69.621 37.885 123.887 98.92 123.887zm290.626-110.528v96.21c-21.335 8.365-43.591 14.318-66.263 14.318-68.57 0-111.89-53.28-111.89-121.89 0-63.63 43.32-119.218 113.252-119.218 21.66 0 43.267 8.028 56.561 18.002l-12.995 27.639c-10.661-6.602-27.21-12.27-42.554-12.27-42.684 0-71.658 33.644-71.658 86.6 0 55.238 33.332 87.844 67.637 87.844 10.687 0 19.636-1.271 27.989-5.642v-71.593h39.921zm76.677-95.211h17.6c23.58 0 36.938 13.592 36.938 37.599 0 31.27-18.949 45.238-37.95 46.237-4.007.402-13.345.74-16.588 1.025v-84.861zm101.203 201.77l-47.041-96.534c25.641-13.618 40.375-41.334 40.375-69.31 0-45.33-27.69-67.287-72.32-67.287h-62.267v233.131h40.05v-87.909h17.963l37.56 87.91h45.68zm65.913-92.254c9.299-30.686 18.624-58.96 26.977-94.925h.661c9.325 35.965 17.626 64.239 26.29 94.925h-53.928zm15.291-140.877l-80.607 233.131h34.63l20.336-63.63h70.296l18.21 63.63h44.706l-74.304-233.131h-33.267zm182.472 0h-62.268v233.131h39.973v-87.909h17.937c47.65 0 76.651-38.637 76.651-77.935 0-45.342-27.664-67.287-72.293-67.287zm-5.603 115.21c-4.15.376-13.904.687-16.692.96v-84.81h17.937c23.306 0 36.678 13.593 36.678 37.6 0 31.27-18.923 45.251-37.923 46.25zm263.014 117.921h-39.947V489.976h-82.98v112.188h-39.52V369.033h39.52v89.582h82.98v-88.92h39.947v232.47zm38.26-233.131h39.714v233.131h-39.714V369.033zm219.462 42.32c-9.676-6.005-25.59-12.97-40.985-12.97-40.686 0-70.218 33.644-70.218 86.6 0 55.238 32.606 87.844 71.256 87.844a75.406 75.406 0 0039.947-11.673l11.024 29c-12.062 8.314-33.306 15.979-52.592 15.979-68.623 0-111.942-53.28-111.942-121.89 0-63.63 42.942-119.218 112.525-119.218 20.7 0 39.947 8.716 53.682 18.002l-12.697 28.326z"></path></g></g></svg>
                        <svg className="w-auto h-12 mt-8 text-black fill-current" viewBox="0 0 2500 1079" xmlns="http://www.w3.org/2000/svg"><g stroke="none" strokeWidth="1" fillRule="evenodd"><g fillRule="nonzero"><path d="M2500.015 1076.902h-341.838c-3.144 0-8.884-13.806-10.523-16.675-47.018-84.88-94.037-170.166-140.78-254.908-50.027 90.209-98.684 181.921-148.572 272.267-111.94.272-222.926-.547-333.91-.274 12.574-23.509 25.97-46.471 39.365-69.57 93.352-161.282 185.338-324.752 278.827-486.17-99.366-173.585-200.236-345.801-300.15-518.975-.273 0-.956-1.094-.273-.957h343.477c42.233 76.814 83.375 154.585 124.924 231.946 43.193-76.677 84.88-154.858 127.66-231.946h331.995c.272 1.367-.683 2.87-1.366 3.964-96.907 170.303-196.136 341.153-292.907 511.73 107.57 186.705 217.187 373.273 324.071 559.568z"></path><path d="M1670.094 418.924c8.747 35.537 13.804 74.628 13.804 115.768 0 128.342-37.175 223.472-88.842 300.833-8.746 13.123-17.63 25.696-27.198 37.725-28.019 35.537-61.916 67.929-99.776 94.855-25.424 18.042-51.939 34.443-81.325 48.248-58.499 27.473-129.164 48.931-210.625 48.931-127.385 0-221.422-38.817-297.551-92.122-76.132-53.442-135.451-124.105-175.772-213.22-27.063-59.73-44.831-128.617-46.881-212.538-.957-41.551 4.237-82.555 11.754-118.092 19.135-89.662 56.722-159.916 104.288-220.465 47.564-60.412 107.84-107.704 180.69-143.377 28.566-13.942 60.55-25.833 95.404-34.444 34.854-8.61 73.396-14.488 115.083-14.488h.684c40.732-1.913 83.921 4.647 117.818 12.165 35.263 7.79 67.93 19.682 97.043 32.803 90.209 40.73 157.455 101.69 211.58 177.82 35.674 49.889 62.463 109.755 79.822 179.598zm-410.04 356.189c3.28-13.122 2.323-29.932 2.323-47.292V332.816c0-16.948-1.913-30.07-6.834-42.37-4.51-11.209-11.481-21.46-19.682-29.797-15.991-16.265-40.047-30.89-70.252-28.566-14.625 1.093-26.79 5.74-37.45 12.438-19.819 12.574-34.854 31.846-41.004 57.405-3.144 12.985-3.007 29.523-3.007 46.608V743.54c0 8.474-.41 16.675.683 23.919 2.872 20.775 12.165 37.45 24.33 49.888 15.717 15.991 40.048 29.386 71.484 25.969 40.591-4.374 70.389-31.3 79.409-68.203zM669.869 294.956H306.71c-1.503 45.104-.273 94.992-.683 140.37 98.136.82 197.776.137 296.595.273v294.273c-99.503.273-199.826-.41-298.782.273.136 116.723.683 231.263.683 347.987 0 .41-.138.547-.273.684H1.503c-.546.138-.546-.274-.956-.274C-.137 720.167-.137 359.47.41.957c0-.41 0-.957.272-.957H649.23c.412 0 .547 0 .684.273 6.834 98.137 13.396 196.41 19.955 294.683z"></path></g></g></svg>
                        <svg className="w-auto h-12 mt-8 text-black fill-current" viewBox="0 0 2428 2390" xmlns="http://www.w3.org/2000/svg"><g stroke="none" strokeWidth="1" fillRule="evenodd"><g fillRule="nonzero"><path d="M256.17 1370.766c-141.06 0-255.414-114.224-255.414-255.115 0-140.89 114.355-255.128 255.414-255.128 51.516 0 99.478 15.24 139.606 41.451l695.815 468.792H256.17zm70.594-574.093c-118.167-76.704-151.759-234.623-75.017-352.74 76.742-118.102 234.753-151.68 352.908-74.977A253.792 253.792 0 01699.023 479.6l355.592 810.571-727.85-493.5zm1844.457 574.34c141.396 0 256.023-114.329 256.023-255.375s-114.627-255.375-256.023-255.375c-51.62 0-99.686 15.253-139.905 41.49l-697.423 469.273h837.328v-.013zm-70.582-574.353c118.427-76.768 152.096-234.857 75.186-353.076-76.91-118.22-235.259-151.824-353.686-75.043a254.026 254.026 0 00-94.588 110.761l-356.396 811.337 729.484-493.98zM1315.19 316.662c-18.235 14.124-68.22 21.802-57.378 110.8l107.96 755.061 360.067-823.061c57.56-128.894-.584-279.9-129.828-337.279-129.27-57.391-280.73.57-338.277 129.464a253.78 253.78 0 00-20.544 132.824l67.858-.117c38.455 1.906 58.7 12.127 10.142 32.308zm-613.82 43.007c-57.43-128.776.584-279.654 129.568-336.98 128.997-57.326 280.134.584 337.564 129.36a253.714 253.714 0 0118.91 144.302l-126.728 885.653L701.37 359.67zm1563.414 1996.358c-41.36 16.835-102.85 33.89-159.839 33.89-260.485 0-471.671-199.98-471.671-446.652 0-246.685 211.186-446.653 471.671-446.653 56.055 0 117.532 13.657 159.84 33.06v170.76a290.004 290.004 0 00-159.84-47.742c-160.8 0-291.184 130.087-291.184 290.562 0 160.462 130.385 290.548 291.184 290.548 58.74 0 114.095-17.353 159.84-47.223v169.45zM697.596 1525.794h173.16v853.423l-533.071-486.833v468.157h-173.16v-853.203l533.07 486.833v-468.377zm753.413 388.665c52.865-39.169 98.895-76.548 98.467-175.13-.584-129.75-105.561-214.34-235.764-214.34H970.104v836.369h385.41c136.506 0 240.368-103.55 240.368-239.63 0-136.052-112.474-195.44-144.873-207.27zm-306.812-263.027l128.712.013c60.257 0 109.101 48.688 109.101 108.751 0 60.05-48.844 108.752-109.101 108.752h-128.712v-217.516zm156.7 584.379h-156.674v-241.912l156.687-.714c67.184 0 121.644 54.318 121.644 121.32 0 67.001-54.473 121.306-121.657 121.306z"></path></g></g></svg>
                        <svg className="w-auto h-12 mt-8 text-black fill-current" viewBox="0 0 2500 1281" xmlns="http://www.w3.org/2000/svg"><g stroke="none" strokeWidth="1" fillRule="evenodd"><g fillRule="nonzero"><path d="M0 606.656v659.566h220.466v-236.49H422.1v236.49h220.404V606.656H422.1v232.713H220.466V606.656H0zm1033.161-14.077c-52.137 0-100.322 8.629-144.601 25.9-44.277 17.27-82.75 41.31-115.41 72.085-32.662 30.775-58.134 67.175-76.352 109.258-18.22 42.084-27.3 87.623-27.3 136.617v1.89c0 50.873 9.542 97.336 28.702 139.42 19.158 42.083 45.552 78.192 79.153 108.342 33.602 30.152 72.877 53.44 117.788 69.772 44.911 16.331 93.096 24.496 144.601 24.496 60.302 0 114.982-9.142 163.976-27.36 48.994-18.22 91.366-42.08 127.175-71.6V876.174h-319.427v141.31h113.097v65.931c-8.78 5.023-18.856 8.763-30.164 11.273-11.31 2.511-26.373 3.779-45.215 3.779-23.232 0-44.396-3.74-63.554-11.273-19.16-7.533-35.66-18.232-49.48-32.053-13.821-13.82-24.69-30.43-32.54-49.907-7.849-19.474-11.76-40.87-11.76-64.104v-1.827c0-22.619 3.628-43.372 10.847-62.214 7.215-18.843 17.392-35.173 30.589-48.993s28.892-24.63 47.102-32.48c18.21-7.848 37.999-11.82 59.352-11.82 27.64 0 53.401 5.068 77.267 15.112 23.863 10.044 46.81 24.183 68.795 42.411l123.394-148.926c-35.807-31.398-76.459-55.84-121.992-73.427-45.535-17.588-96.886-26.387-154.045-26.387h.002zm299.315 14.077v186.585h181.643v472.98h206.338v-472.98H1902.1V606.656h-569.625z"></path><path d="M1753.783 606.656l267.568 664.257h211.08L2500 606.656h-243.073L2128.78 976.96l-128.148-370.304h-246.85zM872.067 0L12.38 562.927l1706.193 2.964L872.067 0z"></path></g></g></svg>
                        <svg className="w-auto h-12 mt-8 text-black fill-current" viewBox="0 0 2501 1523" xmlns="http://www.w3.org/2000/svg"><g stroke="none" strokeWidth="1" fillRule="evenodd"><g transform="translate(.391 .4)" fillRule="nonzero"><path d="M.734.883C285.664.776 570.486.67 855.416.992c97.281 101.527 195.109 202.513 292.938 303.498 96.95-101.74 195.437-202.187 292.607-303.605 286.468-.109 573.044-.109 859.399 0 .109 208.446-.11 416.785.109 625.34-.658 9.493 2.084 20.067-2.633 28.916-71.066 114.256-132.704 234.448-178.986 360.465-5.922 13.596-11.406 29.24-24.786 37.548-11.406 4.747-28.186 2.697-34.327-9.171-8.117-14.997-7.677-32.477-9.98-48.876-7.457-63.548-14.258-127.42-24.896-190.644-6.36-32.26-13.6-67.11-38.057-91.386-22.922-22.009-58.017-24.167-87.849-17.046-27.418 5.934-53.19 22.01-67.009 46.501-17.985 30.318-17.768 67.11-11.297 100.663 11.297 58.802 31.476 115.445 52.096 171.657 40.798 105.95 82.145 211.899 123.052 317.741 10.2 27.08 26.323 55.024 54.509 67.217 24.235 10.034 51.656 9.925 77.318 6.258 22.266-3.346 41.457-17.91 52.534-36.792 20.618-34.526 28.624-74.337 40.798-112.207 24.348-77.25 47.707-155.148 79.075-230.026.644 164.86 0 329.825.22 494.684-178.768.109-357.646 0-536.521.109-7.239-61.284-12.504-123.105-9.214-184.711.768-60.204 3.291-120.084 2.632-180.287 1.865-87.285-9.651-173.815-14.696-260.884-5.703-67.54 1.755-135.512-4.386-203.051 50.777-31.29 103.75-58.801 154.857-89.55 34.329-20.931 71.179-38.95 100.57-66.785 16.234-15.537 28.846-39.274 19.085-61.498-20.618-41.216-74.908-63.55-118.667-45.423-35.862 16.184-57.14 51.464-89.823 71.963-40.798 24.815-81.926 49.198-123.82 72.396-31.696-16.292-69.752-21.688-103.97-11.114-18.645 5.934-35.863 18.45-43.32 36.685-8.775 20.066-1.427 42.077-5.376 62.684-2.522 12.732-12.612 21.795-23.579 27.836-46.282 26.973-93.002 53.298-139.176 80.487-47.488 27.296-93.551 58.694-146.961 73.906-32.463 9.387-70.52 20.177-86.203 52.76-15.025 31.72 2.741 68.186 27.857 89.335 21.605 20.283 54.616 24.599 82.253 14.996 36.084-11.652 65.806-36.252 95.746-58.262 37.29-28.052 75.455-54.808 113.621-81.675 20.618-13.916 41.347-29.129 65.584-36.574 16.452-6.041 37.18.971 44.09 17.37 16.342 36.037 11.185 76.82 11.955 115.228.985 128.176-10.968 255.92-15.466 383.988-.327 60.095-.876 120.083 1.976 180.18-47.38-.216-94.649.431-142.028-.431.44-141.772.33-283.649.11-425.418-89.932 74.337-179.755 148.998-269.575 223.335-90.043-74.229-179.756-148.89-269.577-223.12-.221 141.77-.11 283.756 0 425.527-292.61.214-585.326.107-877.825 0C.734 1014.744.734 507.869.734.885V.883z"></path><path d="M935.807 1.1c86.752 37.008 172.955 74.77 259.596 111.884 13.162 5.394 21.606 17.047 31.477 26.542-25.774 27.836-52.972 54.377-78.747 82.32-70.628-73.689-142.245-146.408-212.326-220.745zM2358.159.13c47.486 28.051 95.087 55.887 142.245 84.262-.33 103.252-.11 206.613-.11 309.975-50.56 54.7-97.828 112.421-141.916 172.41-.549-188.81-.11-377.73-.22-566.648h.001zm10.747 882.015c38.825-71.316 82.256-140.476 131.169-205.535.22 281.707 0 563.412.108 845.01-47.377.107-94.757.107-142.136 0-.109-202.082.112-404.271-.109-606.46-1.097-11.976 5.483-22.657 10.967-33.017l.001.002zM936.245 1218.767c39.263 32.045 77.868 65.166 117.57 96.671.767 68.728.22 137.454.329 206.29h-117.9c0-100.986-.11-202.081 0-302.961zm297.106 104.764c41.785-34.742 83.679-69.375 125.576-104.008-.33 27.943.438 55.888-.549 83.616-8.774 6.796-17.328 13.593-25.773 20.608-33.232.107-66.134.431-99.254-.216z"></path></g></g></svg>
                    </div>
                </div>
                </section>


                {/* <!--Resources About the Company--> */}
               <section className="w-full pt-8 bg-white sm:pt-12 md:pt-16">
                    <div className="px-2 mx-auto max-w-7xl">
                    <div className="flex justify-center w-full pb-5 mb-4 border-gray-200">
                    <h2 className="section-heading  text-gray-800 ">Related Resources</h2>
                    
                    </div>
                    
                    <div className="grid grid-cols-12 gap-6 mb-6">
                   <div className="relative col-span-12 space-y-3 md:col-span-5 lg:col-span-3 shadow-lg hover:shadow-xl rounded p-4" >
                    <div className="">
                    <Link href="#_" passHref>
                    <a className="relative block w-full h-44 overflow-hidden rounded"> 
                    <Image className="bg-secondary object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="/product/projects/project_team_3.svg" alt="resource" layout="fill"/>
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

  
                    <div className="relative col-span-12 space-y-3 md:col-span-5 lg:col-span-3 shadow-lg hover:shadow-xl rounded p-4" >
                    <div className="">
                    <Link href="#_" passHref>
                    <a className="relative block w-full h-44 overflow-hidden rounded"> 
                    <Image className="bg-secondary object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="/product/projects/project_team_3.svg" alt="resource" layout="fill"/>
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


                    <div className="relative col-span-12 space-y-3 md:col-span-5 lg:col-span-3 shadow-lg hover:shadow-xl rounded p-4" >
                    <div className="">
                    <Link href="#_" passHref>
                    <a className="relative block w-full h-44 overflow-hidden rounded"> 
                    <Image className="object-cover bg-secondary object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="/product/projects/project_team_3.svg" alt="resource" layout="fill"/>
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

                    <div className="relative col-span-12 space-y-3 md:col-span-5 lg:col-span-3 shadow-lg hover:shadow-xl rounded p-4" >
                                    <div className="">
                                    <Link href="#_" passHref>
                                    <a className="relative block w-full h-44 overflow-hidden rounded"> 
                                    <Image className="bg-secondary object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="/product/projects/project_team_3.svg" alt="resource" layout="fill"/>
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
           
  {/* <!-- Footer CTA Features Page --> */}
                <section className="bg-white">
                <div className="md:px-8 py-8 mx-auto sm:py-10 lg:py-20 max-w-7xl">
                <div className="relative py-6 overflow-hidden  bg-gradient-to-r from-black to-secondary lg:py-12 md:px-6 lg:p-16 lg:flex lg:items-center lg:justify-between md:shadow-xl md:bg-purple-1000">
                <div className="absolute top-0 right-0 hidden w-full -mt-20 transform rotate-45 translate-x-1/2 bg-white sm:block h-96 opacity-5"></div>
                <div className="absolute top-0 left-0 hidden w-full -mt-20 transform rotate-45 -translate-x-1/2 bg-white sm:block h-96 opacity-5"></div>
                <div className="relative p-6  md:p-0 md:pb-4">
                <h2 className="card-heading   tracking-tight text-white sm:text-4xl sm:leading-10">Get started with your DXaaS Journey</h2>
                <p className="w-full mt-5 card-subheading text-white ">Start your 15-day free trial. No credit card required. No strings attached.</p>
                </div>
                <div className="relative flex flex-col items-center w-full px-6 space-y-5 md:space-x-5 md:space-y-0 md:flex-row md:w-auto lg:flex-shrink-0 md:px-0">
                <Link  href="/pricing" passHref><a className="  inline-block py-3 px-10 bg-black hover:bg-gray-300 hover:text-black shadow   text-white  rounded-r-xl rounded-b-xl transition duration-200 button border-2 border-black">See Pricing</a></Link>
                <Link  href="#" passHref><a className="  inline-block py-3 px-10 bg-white hover:bg-gray-50 hover:text-black shadow  text-black  rounded-r-xl rounded-b-xl transition duration-200  border-2 border-black button">Try it free</a></Link>
                </div>
                </div>
                </div>
            </section> 
            </Layout>
            </>
    )
    
}