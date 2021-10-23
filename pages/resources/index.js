import Layout from "../../component/Layout";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from 'next-seo';
import { BreadcrumbJsonLd } from 'next-seo';
import { LogoJsonLd } from 'next-seo';
import { SocialProfileJsonLd } from 'next-seo';
export default function Resources ({resources_data}) {
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
            <section className="w-full py-32 bg-herogradient" >
            <div className="flex flex-col items-center px-12 mx-auto lg:flex-row">
                <div className="relative z-20 flex flex-col  w-full h-full ">
                <p className="max-w-max px-2 py-1 mb-5 font-medium hyperlink  text-gray-900 uppercase bg-gray-200 rounded-full ">
                     Resources
                </p>
                    <h1 className="heading text-white "  >DXaaS Resource Center</h1>
                    <p className="subheading text-gray-100 pb-7">Digital Transformation is what we do. Get insights on DXaaS and SAP Transformations with our Transformation Success Stories, Videos, E-Books, Datasheets, Infographics and more.   </p>
                    <div className="md:flex md:flex-row">
                    
                    <Link   rel="noopener noreferrer" href="https://app.ktern.com"><a target="_blank" className="sm:mb-4 inline-block  mr-4  shadow-md py-3 px-14 bg-white  hover:bg-gray-300   text-black   rounded-r-xl rounded-b-xl transition duration-200 uppercase border-2 border-black button">Free Trial</a></Link>
                    <Link  href="/contact"><a className=" inline-block py-3 px-10 bg-black hover:bg-gray-300 hover:text-black shadow   text-white  rounded-r-xl rounded-b-xl transition duration-200 button">Contact Sales</a></Link>
                    </div>
                </div>

               
            </div>
            </section>
         
           <section className="container md:p-10 ">
               
                <div className="flex flex-wrap md:-mx-4 -mb-4 md:mb-0 px-2 md:px-10">
                    {/* <!-- On demand Filter Options--> */}
                <div className="hidden md:block w-full md:w-1/5 md:px-4 mb-4  md:mb-0">
                    <form action="#" method="post" className="">
                            <div className="mb-6">
                                <h1 className="text-2xl mt-2 mb-2 card-heading">Streams</h1>
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
                                <h1 className="text-2xl mt-2 mb-2 card-heading">Role</h1>
                                <hr className="mb-2"/>
                                <label>
                                <input type="checkbox" name="field-name" value="example value" />
                                <span className="ml-1 card-subheading">Project Manager</span>
                                </label>
                            </div>
                            <div className="mb-6">
                                <label>
                                <input type="checkbox" name="field-name" value="example value" />
                                <span className="ml-1 card-subheading">Test Manager</span>
                                </label>
                            </div>
                            <div className="mb-6">
                                <label>
                                <input type="checkbox" name="field-name" value="example value" />
                                <span className="ml-1 card-subheading">Tester</span>
                                </label>
                            </div>
                            <div className="mb-6">
                                <label>
                                <input type="checkbox" name="field-name" value="example value" />
                                <span className="ml-1 card-subheading">CEO/CIO/CXO/CTO</span>
                                </label>
                            </div>
                            <div className="mb-6">
                                <label>
                                <input type="checkbox" name="field-name" value="example value" />
                                <span className="ml-1 card-subheading">Consultant</span>
                                </label>
                            </div>
                        </form>  
                    </div>
                {/* <!-- On demand Webinar Card Display--> */}
           
                    <div className="w-full md:w-4/5 md:pl-20 mb-4 md:mb-0">
                        {/* Chips Section */}
                         <section className=" flex sm:pt-5  pb-10 items-center justify-end ">
                          <input id="demo-2" style={{width:'35%'}} type="search" placeholder="Search"/>
                        </section>
                        <section className="pb-10 ">
                            <Link href="/resources#ebooks"><a className="hyperlink click-chip outline-green mr-3">E-books</a></Link>
                            <Link href="/resources#white-papers"><a className=" hyperlink click-chip outline-green mr-3">White paper</a></Link>
                            <Link href="/resources#customer-success-stories"><a className=" hyperlink click-chip outline-green mr-3">Customer Success Story</a></Link>
                            <Link href="/resources#infographics"><a className=" hyperlink click-chip outline-green mr-3">Infographics</a></Link>
                            <Link href="/resources#datasheets"><a className=" hyperlink click-chip outline-green mr-3">Datasheets</a></Link>
                            <Link href="/resources#product-tours"><a className=" hyperlink click-chip outline-green mr-3">Product tour</a></Link>
                            <Link href="/resources#analyst-reports"><a className=" hyperlink click-chip outline-green mr-3">Analyst Report</a></Link>
                            <Link href="/resources#best-practice-guides"><a className=" hyperlink click-chip outline-green mr-3">Best Practice guides</a></Link>
                            <Link href="/resources#presentations"><a className=" hyperlink click-chip outline-green mr-3">Presentations</a></Link>
                        </section>
                        <div className="container mx-auto space-y-10 p-6">
{/* {resources_data.map(resource=>(
    {`absolute inset-0 bg-gradient-to-b ${data.class} opacity-30`}
    <Link href="/webinars/webinar-1" passHref key="resource">
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden shadow border  md:col-span-6 lg:col-span-4">
                                    <div className={`z-20  ${data.secondary}   absolute hyperlink top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md uppercase text-black inline-block`}>
                                        <span>{data.stream}</span>
                                    </div>
                                    <div className="block  w-full h-60 relative transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src={data.image_src}/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className="hyperlink mb-2 mt-2  text-gray-400 uppercase">{data.resource_type}</p>
                                        <h2 className=" card-heading">{data.heading}</h2>
                                        <p className="mb-2 card-subheading text-gray-500">{data.subheading}</p>
                                    </div>
                                    </a>
                                </Link>
))} */}
                            <div id="white-papers" className=" grid grid-cols-12 col-span-12 gap-7">
                                    <Link href="/webinars/webinar-1" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden shadow border  md:col-span-6 lg:col-span-4">
                                    <div className="z-20  bg-maps-secondary   absolute hyperlink top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div className="block  w-full h-60 relative transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/product/maps/maps_3.svg"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className="hyperlink mb-2 mt-2  text-gray-400 uppercase">White Paper</p>
                                        <h2 className=" card-heading">Landscape Assessment</h2>
                                        <p className="mb-2 card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                               
                                <Link href="/resources/landing" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden shadow border  md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black  uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/product/maps/maps_3.svg"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className="hyperlink mb-2 mt-2  text-gray-400 uppercase">White paper</p>
                                        <h2 className="card-heading">Landscape Assessment</h2>
                                        <p className="mb-2 card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/resources/landing" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden shadow border  md:col-span-6 lg:col-span-4">
                                        <div className="z-20 bg-project-secondary text-black  hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                            <span>Digital Projects</span>
                                        </div>
                                        <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                            <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/product/projects/project_scrum.svg"/>
                                        </div>
                                        <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                            <p className="hyperlink mb-2 mt-2  text-gray-400 uppercase">White paper</p>
                                            <h2 className="card-heading">Landscape Assessment</h2>
                                            <p className="mb-2 card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                        </div>
                                    </a>
                                </Link>
                                <Link href="/resources/landing" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden shadow border  md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-mines-secondary text-black  hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Mines</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/product/mines/mines_1.svg"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className="hyperlink mb-2 mt-2  text-gray-400 uppercase">White paper</p>
                                        <h2 className="card-heading">Landscape Assessment</h2>
                                        <p className="mb-2 card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/resources/landing" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden shadow border  md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-labs-secondary text-black  hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Labs</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/product/labs/labs_1.svg"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className="hyperlink mb-2 mt-2  text-gray-400 uppercase">White paper</p>
                                        <h2 className="card-heading">Landscape Assessment</h2>
                                        <p className="mb-2 card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/resources/landing" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden shadow border  md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-process-secondary text-black  hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Process</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/product/process/process_1.svg"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className="hyperlink mb-2 mt-2  text-gray-400 uppercase">White paper</p>
                                        <h2 className="card-heading">Landscape Assessment</h2>
                                        <p className="mb-2 card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                            </div>
                           
                            <div id="ebooks" className=" grid grid-cols-12 col-span-12 gap-7">
                                <Link href="/resources/ebook" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm  md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black  uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/product/maps/maps_1.svg"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className=" ont-bold text-gray-400 uppercase">E-book</p>
                                        <h2 className="card-heading">Landscape Assessment</h2>
                                        <p className="mb-2 card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/resources/ebook" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm  md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black  uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/product/maps/maps_3.svg"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className=" ont-bold text-gray-400 uppercase">E-book</p>
                                        <h2 className="card-heading">Landscape Assessment</h2>
                                        <p className="mb-2 card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/resources/ebook" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm  md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black  uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/assets/icons/articles.png"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className=" ont-bold text-gray-400 uppercase">E-book</p>
                                        <h2 className="card-heading">Landscape Assessment</h2>
                                        <p className="mb-2 card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/resources/ebook" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm  md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black  uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/assets/icons/articles.png"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className=" ont-bold text-gray-400 uppercase">E-book</p>
                                        <h2 className="card-heading">Landscape Assessment</h2>
                                        <p className="mb-2 card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/resources/ebook" passHref>
                                    <a  className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm  md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black  uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/assets/icons/articles.png"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className=" ont-bold text-gray-400 uppercase">E-book</p>
                                        <h2 className="card-heading">Landscape Assessment</h2>
                                        <p className="mb-2 card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/resources/ebook" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm  md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black  uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/assets/icons/articles.png"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className=" ont-bold text-gray-400 uppercase">E-book</p>
                                        <h2 className="card-heading">Landscape Assessment</h2>
                                        <p className="mb-2 card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/resources/ebook" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm  md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black  uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/assets/icons/articles.png"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className=" ont-bold text-gray-400 uppercase">E-book</p>
                                        <h2 className="card-heading">Landscape Assessment</h2>
                                        <p className="mb-2 card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/resources/ebook" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm  md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black  uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/assets/icons/articles.png"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className=" ont-bold text-gray-400 uppercase">E-book</p>
                                        <h2 className="card-heading">Landscape Assessment</h2>
                                        <p className="mb-2 card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                        
                            </div>
                           
                            <div id="datasheets" className=" grid grid-cols-12 col-span-12 gap-7">
                                <Link href="/resources/landing" passHref>
                                    <a  className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm  md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black  uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/assets/icons/articles.png"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className=" ont-bold text-gray-400 uppercase">Datasheets</p>
                                        <h2 className="card-heading">Landscape Assessment</h2>
                                        <p className="mb-2 card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/resources/landing" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm  md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black  uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/assets/icons/articles.png"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className=" ont-bold text-gray-400 uppercase">Datasheets</p>
                                        <h2 className="card-heading">Landscape Assessment</h2>
                                        <p className="mb-2 card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/resources/landing" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm  md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black  uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/assets/icons/articles.png"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className=" ont-bold text-gray-400 uppercase">Datasheets</p>
                                        <h2 className="card-heading">Landscape Assessment</h2>
                                        <p className="mb-2 card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/resources/landing" passHref >
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm  md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black  uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/assets/icons/articles.png"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className=" ont-bold text-gray-400 uppercase">Datasheets</p>
                                        <h2 className="card-heading">Landscape Assessment</h2>
                                        <p className="mb-2 card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/resources/landing" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm  md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black  uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/assets/icons/articles.png"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className=" ont-bold text-gray-400 uppercase">Datasheets</p>
                                        <h2 className="card-heading">Landscape Assessment</h2>
                                        <p className="mb-2 card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/resources/landing" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm  md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black  uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/assets/icons/articles.png"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className=" ont-bold text-gray-400 uppercase">Datasheets</p>
                                        <h2 className="card-heading">Landscape Assessment</h2>
                                        <p className="mb-2 card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/resources/landing" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm  md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black  uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/assets/icons/articles.png"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className=" ont-bold text-gray-400 uppercase">Datasheets</p>
                                        <h2 className="card-heading">Landscape Assessment</h2>
                                        <p className="mb-2 card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/resources/landing" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm  md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black  uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/assets/icons/articles.png"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className=" ont-bold text-gray-400 uppercase">Datasheets</p>
                                        <h2 className="card-heading">Landscape Assessment</h2>
                                        <p className="mb-2 card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/resources/landing" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm  md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black  uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/assets/icons/articles.png"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className=" ont-bold text-gray-400 uppercase">Datasheets</p>
                                        <h2 className="card-heading">Landscape Assessment</h2>
                                        <p className="mb-2 card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                            
                            </div>
                           
                            <div id="customer-success-stories" className=" grid grid-cols-12 col-span-12 gap-7">
                               <Link href="/resources/landing" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm  md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black  uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/assets/icons/articles.png"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className=" ont-bold text-gray-400 uppercase">Datasheets</p>
                                        <h2 className="card-heading">Landscape Assessment</h2>
                                        <p className="mb-2 card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/resources/landing" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm  md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black  uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/assets/icons/articles.png"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className=" ont-bold text-gray-400 uppercase">Datasheets</p>
                                        <h2 className="card-heading">Landscape Assessment</h2>
                                        <p className="mb-2 card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/resources/landing" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm  md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black  uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/assets/icons/articles.png"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className=" ont-bold text-gray-400 uppercase">Datasheets</p>
                                        <h2 className="card-heading">Landscape Assessment</h2>
                                        <p className="mb-2 card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                               <Link href="/resources/landing" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm  md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black  uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/assets/icons/articles.png"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className=" ont-bold text-gray-400 uppercase">Datasheets</p>
                                        <h2 className="card-heading">Landscape Assessment</h2>
                                        <p className="mb-2 card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
            </Layout>
            </>
    )
}


export const getStaticProps = async () => {
    // strapi data to be acquired
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
        props:{resources_data:data}
    }
}

