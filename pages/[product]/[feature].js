import { FAQPageJsonLd } from 'next-seo';
import Layout from "../../component/Layout"
import Head from "next/head"
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from 'next-seo';
import { BreadcrumbJsonLd } from 'next-seo';
import { LogoJsonLd } from 'next-seo';
import { SocialProfileJsonLd } from 'next-seo';
// import Breadcrumbs from 'nextjs-breadcrumbs';
{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/alpinejs/2.8.0/alpine.js"></script> */}
export default function Feature_Landing ({feature_data}) {
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
             <FAQPageJsonLd
      mainEntity={[
        {
          questionName: 'How long is the delivery time?',
          acceptedAnswerText: '3-5 business days.',
        },
        {
          questionName: 'Where can I find information about product recalls?',
          acceptedAnswerText: 'Read more on under information.',
        },
      ]}
    />
        <Head>
        <script async src="https://cdnjs.cloudflare.com/ajax/libs/alpinejs/2.8.0/alpine.js"></script>
        </Head>
            <Layout>
               
                <section className="w-full py-20 bg-project-secondary" >
                   
            <div className="flex flex-col items-center px-12 mx-auto lg:flex-row">
                        <div className="relative z-20 flex flex-col items-start justify-center w-full h-full lg:w-1/2">
                              {/* <div className="flex hyperlink mb-5 breadcrumb">
                    <Breadcrumbs   rootLabel="Home" activeItemClassName="text-gray-600"   inactiveItemClassName="text-gray-400 " listClassName="flex space-x-1 "  replaceCharacterList={[{ from: '-', to: ' ' }]} />
                    </div> */}
                <p className="max-w-max px-2 py-1 mb-5  hyperlink text-gray-900 uppercase bg-gray-200 rounded-full ">
                    Custom Code Remediation
                </p>
                    <h1 className="heading">Analyse and Remediate your Custom Code Smoothly</h1>
                    <p className=" text-gray-500 pb-7 subheading">KTern Digital Workplace enables you to analyse the syntatical change impact of all custom Z tables, Z programs and Z objects passing it to AI-Powered Remediation Engine which comes up with the remediation recommendations.   </p>
                    <div className="md:flex md:flex-row  w-full sm:w-auto sm:flex-row md:space-x-10">
                       <Link  href="#" passHref><a className="sm:mb-4 button inline-block py-3 px-10 bg-black hover:bg-gray-300 hover:text-black shadow text-white  rounded-r-xl rounded-b-xl transition duration-200">Get Started</a></Link>
                        <Link href="" passHref>
                        <a  className="flex py-3 px-8 bg-white hover:bg-gray-300 hover:text-black shadow button border-2 border-black rounded-r-xl rounded-b-xl transition duration-200 button inline-block">        
                                        <Image className=" w-6 h-6" src="/save-file.svg" alt="save file" width={15 } height={20 }/>
                                <span className="button">&nbsp;&nbsp;Download Datasheet</span>
                        </a>
                        </Link>
                    </div>
                </div>

                <div className="hfeatureden lg:block relative z-10 w-full h-full my-16 lg:my-0 lg:w-1/2">
                    <Image className="relative z-40 w-full h-full" src="/features/custom-code-hero.svg" alt="hero image" width={600 } height={420 }/>
                    </div>
            </div>
                </section>
                 {/* <!-- Why Ktern --> */}
                <section className="md:px-20">
                    <h2 className="section-heading text-center mt-10 mb-3">Uncomplicate customer support with a consumer-grade solution that’s fast to launch and scale.</h2>
                    <p className="section-subheading text-center">Everything you need to empower your teams with more meaningful conversations and deliver effortless customer support.</p>
                    <div className="flex justify-center items-center   mx-auto space-x-10 ">
                        <div className="flex flex-wrap justify-center items-center">
                            <div className="p-6 w-full md:w-1/2 lg:w-1/4  md:mb-8 mt-8 justify-center items-center ">
                                <span className="flex items-center justify-center w-14 h-14 mb-8  rounded-full">
                                    <Image src="https://static.thenounproject.com/png/925249-200.png" alt="" width={150} height={150}/>
                                </span>
                                <h3 className="mb-4  card-heading">One Workspace for All SAP Initiatives </h3>
                                <p className="card-subheading text-gray-500">Simplify your IT Landscape by eliminating disparate applications which you might use for project management, collaboration, testing and process optimization  </p>
                            </div>
                            <div className="p-6 w-full md:w-1/2 lg:w-1/4  md:mb-8 md:mt-8 justify-center items-center ">
                                <span className="flex items-center justify-center w-14 h-14 mb-8 rounded-full">
                                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPlFtvMeuE65QVk7aARCnGZ6IrKur4L5D8cVk4gJCwkCGw6NbYt59RknTDlUe40zsIISA&usqp=CAU" alt="" width={150} height={150} />
                                </span>
                                <h3 className="mb-4 card-heading  ">Reduce Testing Efforts by 85% </h3>
                                <p className="card-subheading text-gray-500">Leverage new-gen screen-based testing and RPA-based testing bots built on SAP Business APIs to reduce manual effort and accelerate SAP releases </p>
                            </div>
                            <div className="p-6 w-full md:w-1/2 lg:w-1/4  md:mb-8 md:mt-8 justify-center items-center ">
                                <span className="flex items-center justify-center w-14 h-14 mb-8 rounded-full">
                                    <Image src="https://cdn0.iconfinder.com/data/icons/business-and-finance-9-3/68/438-512.png" width={150} height={150} alt="" />
                                </span>
                                <h3 className="mb-4 card-heading  ">Run efficient SAP investments  </h3>
                                <p className="card-subheading text-gray-500">Plan, execute, collaborate and govern each SAP investment from strategy building to task execution for streamlined and successful business operations  </p>
                            </div>
                            <div className="p-6 w-full md:w-1/2 lg:w-1/4  md:mb-8 md:mt-8 justify-center items-center">
                                <span className="flex items-center justify-center w-14 h-14 mb-8 rounded-full">
                                    <Image src="/assets/cloud.png" alt=""  width={150} height={150}/>
                                </span>
                                <h3 className="mb-4 card-heading  ">Optimize your SAP Business Processes </h3>
                                <p className="card-subheading text-gray-500">Mine and optimize your existing business processes with the inbuilt SAP Tribal Knowledge Base engine which encompasses decades worth of SAP business expertise </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- /Why Ktern --> */}
            {/* <!-- Criss Cross Features--> */}
                <section className="px-10 py-10 bg-white">
                     <div className="relative">
                    <h2 className="w-full section-heading  text-center"> Custom Code Information Wizard</h2>
                    <p className="w-full py-8 mx-auto -mt-2 section-subheading text-center text-gray-700  sm:max-w-3xl">Each custom object object and program has its own Custom Code information wizard. The Information Wizard Allows you to leverage the Custom Code Center, Custom Code Lab, AI-Powered Remediation Engine</p>
                </div>
                
            <div className="flex flex-col md:p-20  md:mx-auto md:space-y-12  ">
               <div className="flex mb-8 animated mx-auto fadeIn md:space-x-20">
                    <div className="flex flex-col justify-center mt-5 md:mb-8 md:mt-0 sm:w-full md:w-1/2 ">
                        <p className=" hyperlink  text-left text-project-primary uppercase">Custom Code Remediation</p>
                        <h3 className=" card-heading sm:text-left">Custom Code Center</h3>
                        <p className="mt-2 card-subheading text-gray-700  md:text-left">Gain Information on each custom program in the Custom code center. KTern assigns a Impact, Optimization and a Security Score based on the Custom program. </p>
                    </div>
                     <div className="hfeatureden md:block flex items-center mb-8 w-1/2 sm:order-last">
                        <div className="relative" style={{zIndex: 0}}>
                            <div className=" "><Image  src="/features/custom-code-center.png" alt="" width={500} height={400}  /></div>
                            <div  className="animate-pulse hfeatureden md:block absolute w-60 h-40" style={{top:'-2rem', right: '3rem', zIndex: -1}}><Image layout="fill" src="/atis-assets/elements/purple-up.svg" alt=""/></div>
                                    <div className="animate-pulse hfeatureden md:block absolute w-60 h-40" style={{bottom:'-2rem',right: '-2rem', zIndex: -1}}><Image layout="fill" src="/atis-assets/elements/wing-yellow-down.svg" alt=""/></div>
                                    <div className="animate-pulse hfeatureden md:block absolute w-60 h-40" style={{bottom:'2.5rem', right: '-4.5rem', zIndex: -1}}><Image layout="fill" src="/atis-assets/elements/bullets-gray-left.svg" alt=""/></div>
                                    <div className="animate-pulse hfeatureden md:block absolute w-60 h-40" style={{ top: '3rem', left: '-8rem', zIndex: -1 }} ><Image layout="fill" src="/atis-assets/elements/bullets-gray-right.svg" alt="" /></div>                                   

                        </div>
                    </div>    
                </div>
                <div className="flex mb-8 animated mx-auto fadeIn md:space-x-20">
                            <div className="hfeatureden md:block relative flex items-center mb-8 w-1/2" >
                    <div className="relative" style={{zIndex: 0}}>            
                                    <div className=" relative "><Image src="/features/custom-code-lab.png" alt="" width={500} height={400} /></div>
                                     <div  className="animate-pulse hfeatureden md:block absolute w-60 h-40" style={{top:'-2rem', right: '3rem', zIndex: -1}}><Image layout="fill" src="/atis-assets/elements/purple-up.svg" alt=""/></div>
                                    <div className="animate-pulse hfeatureden md:block absolute w-60 h-40" style={{bottom:'-2rem',right: '-2rem', zIndex: -1}}><Image layout="fill" src="/atis-assets/elements/wing-yellow-down.svg" alt=""/></div>
                                    <div className="animate-pulse hfeatureden md:block absolute w-60 h-40" style={{bottom:'2.5rem', right: '-4.5rem', zIndex: -1}}><Image layout="fill" src="/atis-assets/elements/bullets-gray-left.svg" alt=""/></div>
                                    <div className="animate-pulse hfeatureden md:block absolute w-60 h-40" style={{ top: '3rem', left: '-8rem', zIndex: -1 }} ><Image layout="fill" src="/atis-assets/elements/bullets-gray-right.svg" alt="" /></div>                                   

                    </div>
                    </div>
                 <div className="flex flex-col justify-center mt-5 md:mb-8 md:mt-0 sm:w-full md:w-1/2 ">
                        <p className=" hyperlink  text-left text-project-primary uppercase">Custom Code Remediation</p>
                        <h3 className=" card-heading sm:text-left">Custom Code Lab</h3>
                        <p className="mt-2 card-subheading text-gray-700">Gain AI-based custom code insights from Custom Code Lab, with access to a development environment to edit the code manually.</p>
                    </div>
                </div>
                 <div className="flex mb-8 animated mx-auto fadeIn md:space-x-20">
                   <div className="flex flex-col justify-center mt-5 md:mb-8 md:mt-0 sm:w-full md:w-1/2 ">
                        <p className=" hyperlink   text-left text-project-primary uppercase">Custom Code Remediation</p>
                        <h3 className=" card-heading sm:text-left">AI Powered Remediation Engine</h3>
                        <p className="mt-2 card-subheading text-gray-700 md:text-left">Auto Recommended Remediation Suggestions that can be applied at the click of a button recording as an transport request in your SAP System.</p>
                    </div>
                     <div className="hfeatureden md:block flex items-center mb-8 w-1/2 sm:order-last">
                        <div className="relative" style={{zIndex: 0}}>
                            <div className=" "><Image className=" shadow-xl" src="/features/ai-powered-remediation.png" alt="" width={500} height={400} /></div>
                            <div  className="animate-pulse hfeatureden md:block absolute w-60 h-40" style={{top:'-2rem', right: '3rem', zIndex: -1}}><Image layout="fill" src="/atis-assets/elements/purple-up.svg" alt=""/></div>
                                    <div className="animate-pulse hfeatureden md:block absolute w-60 h-40" style={{bottom:'-2rem',right: '-2rem', zIndex: -1}}><Image layout="fill" src="/atis-assets/elements/wing-yellow-down.svg" alt=""/></div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{bottom:'2.5rem', right: '-4.5rem', zIndex: -1}}><Image layout="fill" src="/atis-assets/elements/bullets-gray-left.svg" alt=""/></div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{ top: '3rem', left: '-8rem', zIndex: -1 }} ><Image layout="fill" src="/atis-assets/elements/bullets-gray-right.svg" alt="" /></div>                                   

                        </div>
                    </div>    
                </div>
            </div>
            </section>
           {/* <!-- Criss Cross Features End --> */}
            
           <section className="box-border overflow-hidden relative w-full font-sans leading-6 text-gray-700 bg-white border-0 border-gray-200 border-solid bg-blue-50">
    <div className="box-border flex flex-col items-center px-8 py-20 mx-auto leading-6 border-solid max-w-7xl xl:px-16 md:items-stretch md:justify-center md:py-24">
        <div className="relative pb-10">
            <h2 className="w-full m-0 section-heading font-black leading-loose tracking-wide text-center text-gray-700 border-0 border-gray-200 ">
                Smoother Remediation
            </h2>
            <p className="w-full max-w-xl section-subheading mx-0 mx-auto mt-4 mb-0 font-sans   leading-relaxed text-center text-gray-400 border-0 border-gray-200 lg: md:">
               Automate your Custom Code Discovery, Management, Remediation and Transport Request Generation .
            </p>
        </div>

        <div className="z-10 grid gap-5 md:grid-cols-6 lg:grid-cols-9">
            
            <div className="col-span-3 font-sans text-gray-700 bg-white ">
                <div className="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
                    <div className="flex-shrink-0 p-3 font-sans text-gray-700 border border-gray-200 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="leading-6 text-center text-gray-700 align-middle stroke-current w-7 h-7" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M0 0h24v24H0z" stroke="none"></path>
                            <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3M12 12l8-4.5M12 12v9M12 12L4 7.5M16 5.25l-8 4.5"></path></svg>
                    </div>
                    <div className="mt-4 font-sans text-left text-gray-700 border-0 border-gray-200 sm:mt-2 sm:ml-4">
                        <h6 className="box-border card-heading mb-4  leading-none tracking-wide text-left border-solid">Bulk Remediate</h6>
                        <p className="box-border mx-0 mt-1 mb-0 card-subheading  leading-loose text-gray-400 border-solid sm:mt-4">
                            Choose and Remediate Multiple Custom programs in-one-go. 
                        </p>
                    </div>
                </div>
            </div>
           
            <div className="col-span-3 font-sans text-gray-700 bg-white ">
                <div className="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
                    <div className="flex-shrink-0 p-3 font-sans text-gray-700 border border-gray-200 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="leading-6 text-center text-gray-700 align-middle stroke-current w-7 h-7" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M0 0h24v24H0z" stroke="none"></path>
                            <path d="M7 12l5 5L22 7M2 12l5 5m5-5l5-5"></path></svg>

                    </div>
                    <div className="mt-4 font-sans text-left text-gray-700 border-0 border-gray-200 sm:mt-2 sm:ml-4">
                        <h6 className="box-border card-heading mb-4  leading-none tracking-wide text-left border-solid">Assign Stakeholders</h6>
                        <p className="box-border card-subheading mx-0 mt-1 mb-0  leading-loose text-gray-400 border-solid sm:mt-4">
                        Stakeholders can be assigned to perform the remediation from the Custom Code Center.
                        </p>
                    </div>
                </div>
            </div>
           
            <div className="col-span-3 font-sans text-gray-700 bg-white ">
                <div className="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
                    <div className="flex-shrink-0 p-3 font-sans text-gray-700 border border-gray-200 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="leading-6 text-center text-gray-700 align-middle stroke-current w-7 h-7" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M0 0h24v24H0z" stroke="none"></path>
                            <path d="M9 4.55a8 8 0 016 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"></path></svg>
                    </div>
                    <div className="mt-4 font-sans text-left text-gray-700 border-0 border-gray-200 sm:mt-2 sm:ml-4">
                        <h6 className="box-border  card-heading mb-4 leading-none tracking-wide text-left border-solid">Code Diagnostic Checks</h6>
                        <p className="box-border card-subheading mx-0 mt-1 mb-0  leading-loose text-gray-400 border-solid sm:mt-4">
                            Gain custom code optimization Recommendations in Adaptation, Performance, SAP HANA Optimization, Security Audit.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="col-span-3 font-sans text-gray-700 bg-white ">
                <div className="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
                    <div className="flex-shrink-0 p-3 font-sans text-gray-700 border border-gray-200 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="leading-6 text-center text-gray-700 align-middle stroke-current w-7 h-7" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M0 0h24v24H0z" stroke="none"></path>
                            <path d="M3 12h3M12 3v3M7.8 7.8L5.6 5.6M16.2 7.8l2.2-2.2M7.8 16.2l-2.2 2.2M12 12l9 3-4 2-2 4-3-9"></path></svg>
                    </div>
                    <div className="mt-4 font-sans text-left text-gray-700 border-0 border-gray-200 sm:mt-2 sm:ml-4">
                        <h6 className="box-border card-heading mb-4  leading-none tracking-wide text-left border-solid">Custom Code Dashboard</h6>
                        <p className="box-border card-subheading mx-0 mt-1 mb-0  leading-loose text-gray-400 border-solid sm:mt-4">
                            Gain an Analytical Edge with an Overview of the different custom objects present in your SAP System.
                        </p>
                    </div>
                </div>
            </div>
           
            <div className="col-span-3 font-sans text-gray-700 bg-white ">
                <div className="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
                    <div className="flex-shrink-0 p-3 font-sans text-gray-700 border border-gray-200 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="leading-6 text-center text-gray-700 align-middle stroke-current w-7 h-7" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M0 0h24v24H0z" stroke="none"></path>
                            <path d="M13 3v7h6l-8 11v-7H5l8-11"></path></svg>
                    </div>
                    <div className="mt-4 font-sans text-left text-gray-700 border-0 border-gray-200 sm:mt-2 sm:ml-4">
                        <h6 className="box-border  card-heading mb-4 leading-none tracking-wide text-left border-solid">Custom Code Sign-Off </h6>
                        <p className="box-border card-subheading mx-0 mt-1 mb-0  leading-loose text-gray-400 border-solid sm:mt-4">
                         Find out whether the stream of custom object operations (in modules, business processes) are completed or not.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="col-span-3 font-sans text-gray-700 border-0 bg-white ">
                <div className="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
                    <div className="flex-shrink-0 p-3 font-sans text-gray-700 border border-gray-200 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="leading-6 text-center text-gray-700 align-middle stroke-current w-7 h-7" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M0 0h24v24H0z" stroke="none"></path>
                            <rect x="3" y="4" width="18" height="8" rx="3"></rect>
                            <rect x="3" y="12" width="18" height="8" rx="3"></rect>
                            <path d="M7 8v.01M7 16v.01"></path></svg>

                    </div>
                    <div className="mt-4 font-sans text-left text-gray-700 border-0 border-gray-200 sm:mt-2 sm:ml-4">
                        <h6 className="box-border  card-heading mb-4 leading-none tracking-wide text-left border-solid">Project Management</h6>
                        <p className="box-border card-subheading mx-0 mt-1 mb-0  leading-loose text-gray-400 border-solid sm:mt-4">
                           The Resource Utilization Table allows to track the resource utilization and progress of the custom code remediation
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
    <div className="absolute top-0 left-0 -ml-56 opacity-25 w-96 h-96">
        <svg className="text-blue-500 opacity-50 fill-current w-88 h-88" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.5,-24.7C35.8,-15.2,48.9,-7.6,50.6,1.7C52.3,11,42.6,22,32.3,31.2C22,40.4,11,47.8,-1.9,49.8C-14.9,51.7,-29.7,48.1,-41.1,38.9C-52.5,29.7,-60.5,14.9,-60.3,0.3C-60,-14.3,-51.5,-28.6,-40,-38.1C-28.6,-47.6,-14.3,-52.3,-3.4,-48.9C7.6,-45.5,15.2,-34.2,25.5,-24.7Z" transform="translate(100 100)"></path>
        </svg>
    </div>
    
    <div className="absolute top-0 right-0 -mb-56 opacity-25 w-96 h-96 -mr-72">
        <svg className="w-full h-full text-blue-800 opacity-50 fill-current" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M44.3,-48.3C55.3,-33.4,60.4,-16.7,62.2,1.8C64,20.3,62.5,40.6,51.6,55.3C40.6,70,20.3,79,2.3,76.7C-15.7,74.4,-31.4,60.7,-46.7,46C-62,31.4,-76.9,15.7,-78.5,-1.6C-80,-18.8,-68.2,-37.6,-52.9,-52.5C-37.6,-67.5,-18.8,-78.5,-1.1,-77.5C16.7,-76.4,33.4,-63.3,44.3,-48.3Z" transform="translate(100 100)"></path>
        </svg>
    </div>

</section>
             {/* <!-- Customer Stats--> */}
             <section className="pb-10 pt-5 bg-black">
  <div className="container px-4 mx-auto">
    <div className="p-16 bg-black">
      <div className="flex flex-wrap items-center -mx-10 -mb-10">
        <div className="w-full md:w-1/2 lg:w-1/4 px-10 mb-10 text-center">
          <span>
            <svg className="mx-auto mb-6 text-blue-800 h-8 w-8" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 -0.0533447L0 15.7333L16 31.52L32 15.7333L16 -0.0533447ZM3.7708 15.7333L16 3.66718L21.172 8.77022L19.2864 10.6307L16 7.38888L7.5428 15.7333L10.828 18.9759L8.9424 20.8364L3.7708 15.7333ZM20.6876 15.7333L16 20.3596L11.3136 15.7333L16 11.1094L20.6876 15.7333ZM10.828 22.6968L12.7136 20.8364L16 24.0778L24.4584 15.7333L21.172 12.4907L23.0576 10.6303L28.2292 15.7333L16 27.7995L10.828 22.6968Z"></path>
            </svg>
          </span>
          <h3 className="mb-3   card-heading text-white">2 Million</h3>
          <p className=" card-subheading text-gray-500">Lines of Custom code Analyzed</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-10 mb-10 text-center">
          <span>
            <svg className="mx-auto mb-6 text-blue-800 h-8 w-8" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.3332 0V2.64111C24.0732 3.30415 29.3332 8.93644 29.3332 15.7867C29.3332 22.6357 24.0732 28.2676 17.3332 28.9306V31.5733C25.5456 30.9016 32 24.0952 32 15.7867C32 7.47696 25.5456 0.673301 17.3332 0Z"></path>
              <path d="M14.6668 28.9306C7.9296 28.2676 2.6668 22.6357 2.6668 15.7867C2.6668 8.93683 7.9296 3.30415 14.6668 2.64111V0C6.456 0.673301 0 7.47696 0 15.7867C0 24.0952 6.456 30.9016 14.6668 31.5733V28.9306Z"></path>
              <path d="M8.12 14.4712C8.7552 10.7389 12.0364 7.89333 16 7.89333C19.9636 7.89333 23.2448 10.7389 23.88 14.4712H26.574C25.918 9.28098 21.4404 5.26208 16 5.26208C10.5624 5.26208 6.0832 9.28098 5.4256 14.4712H8.12Z"></path>
              <path d="M23.88 17.1021C23.2448 20.8329 19.9636 23.68 16 23.68C12.0364 23.68 8.75519 20.8329 8.11999 17.1021H5.42599C6.08319 22.2923 10.5624 26.3112 16 26.3112C21.4404 26.3112 25.918 22.2923 26.5744 17.1021H23.88Z"></path>
              <path d="M16 10.5246C13.0548 10.5246 10.6668 12.8807 10.6668 15.7867C10.6668 18.6926 13.0548 21.0488 16 21.0488C18.9464 21.0488 21.3332 18.6926 21.3332 15.7867C21.3332 12.8807 18.9464 10.5246 16 10.5246ZM16 18.4179C14.5272 18.4179 13.3332 17.2398 13.3332 15.7867C13.3332 14.3335 14.5272 13.1554 16 13.1554C17.474 13.1554 18.6668 14.3335 18.6668 15.7867C18.6668 17.2398 17.474 18.4179 16 18.4179Z"></path>
            </svg>
          </span>
          <h3 className="mb-4   card-heading text-white">500,000</h3>
          <p className=" card-subheading text-gray-500">Custom Code recommendations</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-10 mb-10 text-center">
          <span>
            <svg className="mx-auto mb-6 text-blue-800 h-8 w-8" viewBox="0 0 30 31" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 0.404449H0.333336V15.2667C0.333336 23.4743 6.90034 30.1289 15 30.1289H29.6667V15.2667C29.6667 7.05901 23.0997 0.404449 15 0.404449ZM27.2221 27.6517H15C8.26104 27.6517 2.7779 22.0955 2.7779 15.2667V2.88161H15C21.739 2.88161 27.2221 8.43822 27.2221 15.2667V27.6517Z"></path>
              <path d="M15 5.3584C9.60011 5.3584 5.22211 9.79477 5.22211 15.2667C5.22211 20.7386 9.60011 25.1749 15 25.1749C20.3999 25.1749 24.7779 20.7386 24.7779 15.2667C24.7779 9.79477 20.3999 5.3584 15 5.3584ZM15 22.6978C10.9491 22.6978 7.66668 19.3705 7.66668 15.2667C7.66668 11.1628 10.9491 7.83556 15 7.83556C19.0498 7.83556 22.3333 11.1628 22.3333 15.2667C22.3333 19.3705 19.0498 22.6978 15 22.6978Z"></path>
              <path d="M15 10.3127C12.3002 10.3127 10.1112 12.5309 10.1112 15.2667C10.1112 18.0024 12.3002 20.2206 15 20.2206C17.6998 20.2206 19.8888 18.0024 19.8888 15.2667C19.8888 12.5309 17.6998 10.3127 15 10.3127ZM15 17.7438C13.6499 17.7438 12.5554 16.6347 12.5554 15.2667C12.5554 13.8986 13.6499 12.7895 15 12.7895C16.3501 12.7895 17.4446 13.8986 17.4446 15.2667C17.4446 16.6347 16.3501 17.7438 15 17.7438Z"></path>
            </svg>
          </span>
          <h3 className="mb-4   card-heading text-white">200,000</h3>
          <p className=" card-subheading text-gray-500">Transport Requests</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-10 mb-10 text-center">
          <span>
            <svg className="mx-auto mb-6 text-blue-800 h-8 w-8" viewBox="0 0 29 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.5394 1.16466C25.5171 -0.955363 20.1089 1.11443 14.3336 5.83846C8.55651 1.11443 3.14832 -0.954263 1.12707 1.16466C-0.896976 3.28468 1.07912 8.9492 5.58677 15.0002C1.08017 21.0515 -0.896976 26.7171 1.12707 28.8357C3.14937 30.9553 8.55896 28.8848 14.334 24.1619C20.1089 28.8848 25.5175 30.9553 27.5398 28.8357C29.5638 26.7157 27.5867 21.0501 23.0783 15.0002C27.5877 8.9492 29.5638 3.28358 27.5394 1.16466ZM25.2585 2.77649C25.6862 2.77649 25.8671 2.86962 25.8899 2.89346C26.0075 3.01629 26.3116 4.40336 24.8493 7.59439C24.0562 9.32539 22.9338 11.1818 21.5667 13.062C20.7606 12.0852 19.8951 11.1088 18.9718 10.1419C18.0499 9.17763 17.1175 8.27051 16.1869 7.42646C20.0302 4.36413 23.4077 2.77649 25.2585 2.77649ZM20.0746 14.9994C19.2199 16.0507 18.3036 17.1015 17.3205 18.1314C16.3178 19.1834 15.3171 20.1404 14.3347 21.0145C13.3309 20.1206 12.3281 19.1607 11.3457 18.1314C10.3415 17.0802 9.42696 16.0316 8.59256 15.0031C9.44586 13.9501 10.3611 12.9011 11.3432 11.8715C12.3484 10.8199 13.3487 9.86035 14.3312 8.98623C15.3364 9.88161 16.3395 10.8415 17.3212 11.8704C18.3257 12.9223 19.2406 13.9691 20.0746 14.9994ZM2.66532 3.55454C2.66532 3.10832 2.75422 2.91729 2.77662 2.89346C2.89282 2.77173 4.21722 2.45163 7.26396 3.98463C8.91631 4.81548 10.687 5.99136 12.4832 7.42243C11.5508 8.26758 10.6166 9.17469 9.69366 10.1416C8.77281 11.1074 7.90691 12.0841 7.10261 13.0594C4.18082 9.03133 2.66532 5.49307 2.66532 3.55454ZM3.40802 27.2242C2.98067 27.2242 2.79867 27.13 2.77662 27.1076C2.65937 26.9844 2.35487 25.5974 3.81822 22.4063C4.61132 20.6757 5.73272 18.8193 7.09981 16.9391C7.90656 17.9155 8.77246 18.8934 9.69541 19.8602C10.6163 20.8264 11.5483 21.732 12.4807 22.5761C8.63596 25.6366 5.25847 27.2242 3.40802 27.2242ZM26.0015 26.4458C26.0015 26.8928 25.9116 27.0834 25.8899 27.1062C25.7726 27.2294 24.4486 27.5491 21.4025 26.0161C19.7516 25.1852 17.9796 24.0094 16.1848 22.5772C17.1158 21.7328 18.0492 20.826 18.9707 19.8599C19.893 18.8941 20.7585 17.9177 21.5646 16.9413C24.486 20.969 26.0015 24.5058 26.0015 26.4458Z"></path>
            </svg>
          </span>
          <h3 className="mb-4   card-heading text-white">200000</h3>
          <p className=" card-subheading text-gray-500">Man Hours Saved</p>
        </div>
      </div>
    </div>
  </div>
</section>



 {/* <!--Faq Section--> */}
                
 <section className="py-10 bg-project-white">
                    <h2 className="mb-2 section-heading  text-center">Frequently Asked Questions</h2>
                    <div className="flex space-x-10 p-10">
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
                            
                                <details className="relative overflow-hidden border-2 border-gray-200  select-none hover:bg-white">
                                    <summary  className=" flex items-center justify-between   text-gray-700 cursor-pointer sm: px-6 py-6 hover:text-gray-800" style={{ listStyle: 'none' }}>
                                        <span className="card-subheading">How does KTern Connect to my SAP System?</span>
                                        <svg className=" w-6 h-6 transition-all duration-200 ease-out transform rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                                            </summary>
                                            <hr/>
                                    <div className="p-4 hyperlink">
                                            CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem
                                            de marcação como HTML. O CSS separa o conteúdo da representação visual do site. É ele que é responsável pela
                                            aparência do seu site. USando o CSS é possível alterar a cor do texto, fonte, imagem entre outros.
                                            Também pode criar tabelas, usar variações de layouts, ajustar imagens para suas respectivas telas e assim por
                                            diante.
                                    </div>
                            </details>
                                <details className="relative overflow-hidden border-2 border-gray-200  select-none hover:bg-white">
                                    <summary  className=" flex items-center justify-between   text-gray-700 cursor-pointer sm: px-6 py-6 hover:text-gray-800" style={{ listStyle: 'none' }}>
                                        <span className="card-subheading">Which SAP System&apos;s are supported by KTern?</span>
                                        <svg className=" w-6 h-6 transition-all duration-200 ease-out transform rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                                            </summary>
                                            <hr/>
                                    <div className="p-4 hyperlink">
                                            CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem
                                            de marcação como HTML. O CSS separa o conteúdo da representação visual do site. É ele que é responsável pela
                                            aparência do seu site. USando o CSS é possível alterar a cor do texto, fonte, imagem entre outros.
                                            Também pode criar tabelas, usar variações de layouts, ajustar imagens para suas respectivas telas e assim por
                                            diante.
                                    </div>
                            </details>
                                <details className="relative overflow-hidden border-2 border-gray-200  select-none hover:bg-white">
                                    <summary  className=" flex items-center justify-between   text-gray-700 cursor-pointer sm: px-6 py-6 hover:text-gray-800" style={{ listStyle: 'none' }}>
                                        <span className="card-subheading">Does KTern Offer Enablement Session for System Integrators? </span>
                                        <svg className=" w-6 h-6 transition-all duration-200 ease-out transform rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                                            </summary>
                                            <hr/>
                                    <div className="p-4 hyperlink">
                                            CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem
                                            de marcação como HTML. O CSS separa o conteúdo da representação visual do site. É ele que é responsável pela
                                            aparência do seu site. USando o CSS é possível alterar a cor do texto, fonte, imagem entre outros.
                                            Também pode criar tabelas, usar variações de layouts, ajustar imagens para suas respectivas telas e assim por
                                            diante.
                                    </div>
                            </details>

                            
                       
                                <details className="relative overflow-hidden border-2 border-gray-200  select-none hover:bg-white">
                                    <summary  className=" flex items-center justify-between   text-gray-700 cursor-pointer sm: px-6 py-6 hover:text-gray-800" style={{ listStyle: 'none' }}>
                                        <span className="card-subheading">How does KTern Connect to my SAP System?</span>
                                        <svg className=" w-6 h-6 transition-all duration-200 ease-out transform rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                                            </summary>
                                            <hr/>
                                    <div className="p-4 hyperlink">
                                            CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem
                                            de marcação como HTML. O CSS separa o conteúdo da representação visual do site. É ele que é responsável pela
                                            aparência do seu site. USando o CSS é possível alterar a cor do texto, fonte, imagem entre outros.
                                            Também pode criar tabelas, usar variações de layouts, ajustar imagens para suas respectivas telas e assim por
                                            diante.
                                    </div>
                            </details>
                                <details className="relative overflow-hidden border-2 border-gray-200  select-none hover:bg-white">
                                    <summary  className=" flex items-center justify-between   text-gray-700 cursor-pointer sm: px-6 py-6 hover:text-gray-800" style={{ listStyle: 'none' }}>
                                        <span className="card-subheading">Which SAP System&apos;s are supported by KTern?</span>
                                        <svg className=" w-6 h-6 transition-all duration-200 ease-out transform rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                                            </summary>
                                            <hr/>
                                    <div className="p-4 hyperlink">
                                            CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem
                                            de marcação como HTML. O CSS separa o conteúdo da representação visual do site. É ele que é responsável pela
                                            aparência do seu site. USando o CSS é possível alterar a cor do texto, fonte, imagem entre outros.
                                            Também pode criar tabelas, usar variações de layouts, ajustar imagens para suas respectivas telas e assim por
                                            diante.
                                    </div>
                            </details>
                                <details className="relative overflow-hidden border-2 border-gray-200  select-none hover:bg-white">
                                    <summary  className=" flex items-center justify-between   text-gray-700 cursor-pointer sm: px-6 py-6 hover:text-gray-800" style={{ listStyle: 'none' }}>
                                        <span className="card-subheading">Does KTern Offer Enablement Session for System Integrators? </span>
                                        <svg className=" w-6 h-6 transition-all duration-200 ease-out transform rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                                            </summary>
                                            <hr/>
                                    <div className="p-4 hyperlink">
                                            CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem
                                            de marcação como HTML. O CSS separa o conteúdo da representação visual do site. É ele que é responsável pela
                                            aparência do seu site. USando o CSS é possível alterar a cor do texto, fonte, imagem entre outros.
                                            Também pode criar tabelas, usar variações de layouts, ajustar imagens para suas respectivas telas e assim por
                                            diante.
                                    </div>
                            </details>
             <details className="relative overflow-hidden border-2 border-gray-200  select-none hover:bg-white">
                                    <summary  className=" flex items-center justify-between   text-gray-700 cursor-pointer sm: px-6 py-6 hover:text-gray-800" style={{ listStyle: 'none' }}>
                                        <span className="card-subheading">Does KTern Offer Enablement Session for System Integrators? </span>
                                        <svg className=" w-6 h-6 transition-all duration-200 ease-out transform rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                                            </summary>
                                            <hr/>
                                    <div className="p-4 hyperlink">
                                            CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem
                                            de marcação como HTML. O CSS separa o conteúdo da representação visual do site. É ele que é responsável pela
                                            aparência do seu site. USando o CSS é possível alterar a cor do texto, fonte, imagem entre outros.
                                            Também pode criar tabelas, usar variações de layouts, ajustar imagens para suas respectivas telas e assim por
                                            diante.
                                    </div>
                            </details>

                            
                       
                                <details className="relative overflow-hidden border-2 border-gray-200  select-none hover:bg-white">
                                    <summary  className=" flex items-center justify-between   text-gray-700 cursor-pointer sm: px-6 py-6 hover:text-gray-800" style={{ listStyle: 'none' }}>
                                        <span className="card-subheading">How does KTern Connect to my SAP System?</span>
                                        <svg className=" w-6 h-6 transition-all duration-200 ease-out transform rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                                            </summary>
                                            <hr/>
                                    <div className="p-4 hyperlink">
                                            CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem
                                            de marcação como HTML. O CSS separa o conteúdo da representação visual do site. É ele que é responsável pela
                                            aparência do seu site. USando o CSS é possível alterar a cor do texto, fonte, imagem entre outros.
                                            Também pode criar tabelas, usar variações de layouts, ajustar imagens para suas respectivas telas e assim por
                                            diante.
                                    </div>
                            </details>
                                <details className="relative overflow-hidden border-2 border-gray-200  select-none hover:bg-white">
                                    <summary  className=" flex items-center justify-between   text-gray-700 cursor-pointer sm: px-6 py-6 hover:text-gray-800" style={{ listStyle: 'none' }}>
                                        <span className="card-subheading">Which SAP System&apos;s are supported by KTern?</span>
                                        <svg className=" w-6 h-6 transition-all duration-200 ease-out transform rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                                            </summary>
                                            <hr/>
                                    <div className="p-4 hyperlink">
                                            CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem
                                            de marcação como HTML. O CSS separa o conteúdo da representação visual do site. É ele que é responsável pela
                                            aparência do seu site. USando o CSS é possível alterar a cor do texto, fonte, imagem entre outros.
                                            Também pode criar tabelas, usar variações de layouts, ajustar imagens para suas respectivas telas e assim por
                                            diante.
                                    </div>
                            </details>
                                <details className="relative overflow-hidden border-2 border-gray-200  select-none hover:bg-white">
                                    <summary  className=" flex items-center justify-between   text-gray-700 cursor-pointer sm: px-6 py-6 hover:text-gray-800" style={{ listStyle: 'none' }}>
                                        <span className="card-subheading">Does KTern Offer Enablement Session for System Integrators? </span>
                                        <svg className=" w-6 h-6 transition-all duration-200 ease-out transform rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                                            </summary>
                                            <hr/>
                                    <div className="p-4 hyperlink">
                                            CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem
                                            de marcação como HTML. O CSS separa o conteúdo da representação visual do site. É ele que é responsável pela
                                            aparência do seu site. USando o CSS é possível alterar a cor do texto, fonte, imagem entre outros.
                                            Também pode criar tabelas, usar variações de layouts, ajustar imagens para suas respectivas telas e assim por
                                            diante.
                                    </div>
                            </details>
                            
                            </div>
                    </div>
                </section>
            {/* <!--Resources Section--> */}
         <section className="w-full pt-8 bg-white sm:pt-12 md:pt-16">
                    <div className="px-2 mx-auto max-w-7xl">
                    <div className="flex justify-center w-full pb-5 mb-4 border-gray-200">
                    <h2 className="section-heading  text-gray-800 ">Related Resources</h2>
                    
                    </div>
                    
                    <div className="grid grid-cols-12 gap-6 mb-6">
                   <div className="relative col-span-12 space-y-3 md:col-span-5 lg:col-span-3 shadow-lg hover:shadow-xl  p-4" >
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

  
                    <div className="relative col-span-12 space-y-3 md:col-span-5 lg:col-span-3 shadow-lg hover:shadow-xl  p-4" >
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


                    <div className="relative col-span-12 space-y-3 md:col-span-5 lg:col-span-3 shadow-lg hover:shadow-xl  p-4" >
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

                    <div className="relative col-span-12 space-y-3 md:col-span-5 lg:col-span-3 shadow-lg hover:shadow-xl  p-4" >
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
                <div className="md:px-8 md:py-8 mx-auto  sm:py-10 lg:py-20 max-w-7xl">
                <div className="relative py-6 overflow-hidden  bg-gradient-to-r from-black to-project-400 lg:py-12 md:px-6 lg:p-16 lg:flex lg:items-center lg:justify-between md:shadow-xl md:bg-purple-1000">
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
export const getStaticPaths = async () => {
    // dynamic route array values must be acquired here from strapi
    const data=[{product:'digital-maps',feature:'business-process-assessment'},{product:'digital-maps',feature:'landscape-assessment'},{product:'digital-maps',feature:'custom-objects-assessment'},{product:'digital-maps',feature:'business-transformation-assessment'},{product:'digital-maps',feature:'timeline-effort-estimation'}]
    
    const paths = data.map(index => {
        return ({
            params:{product:index.product,feature:index.feature}
        })
    })
    return {
        paths,
        fallback:false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.feature;
    // data url from strapi
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    
    return {
        props: {
            
            feature_data:data
        }
    }
}