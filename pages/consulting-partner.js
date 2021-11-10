import Layout from "../component/Layout";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from 'next-seo';
import { BreadcrumbJsonLd } from 'next-seo';
import { LogoJsonLd } from 'next-seo';
import { SocialProfileJsonLd } from 'next-seo';
import { FAQPageJsonLd } from 'next-seo';
export default function Consultingpartner({data}){
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
        <Layout>                
            {/* <!-- Header Section --> */}
                <section className="w-full py-28 bg-secondary">
            <div className="flex flex-col items-center px-4 mx-auto max-w-7xl lg:flex-row">
                <div className="relative z-20 flex flex-col items-start justify-center w-full h-full lg:w-1/2">
                    <p className="max-w-max px-2 py-1 mb-5 font-medium hyperlink tracking-wider text-gray-900 uppercase bg-gray-200 rounded-full ">
                    {data.PageHeader.Tag}
                </p>
                <h5 className="mb-3 heading font-bold leading-none sm:text-4xl ">
                    {data.PageHeader.header}
                </h5>
                <p className=" mb-5 text-gray-600 subheading">
                    {data.PageHeader.subHeading}                </p>
                 <div className="md:flex md:items-center md:space-x-4 sm:space-y-6">
                   <Link  href={data.PageHeader.primaryCTA.linkURL} passHref><a className="lg:inline-block py-4 px-6 bg-black hover:bg-gray-300 hover:text-black shadow uppercase text-white  rounded-r-xl hyperlink rounded-b-xl transition duration-200 button ">{data.PageHeader.primaryCTA.buttonTitle}</a></Link>
                    <Link href={data.PageHeader.secondaryCTA.linkURL}  passHref>
                        <a className=" inline-block sm:mb-4  md:mr-4  shadow-md py-3 px-6 hover:text-white   hover:bg-gray-300   text-black   rounded-r-xl bg-white rounded-b-xl transition duration-200 uppercase  button">{data.PageHeader.secondaryCTA.buttonTitle}
                        <svg className="inline-block w-2 ml-2" fill="currentColor" viewBox="0 0 12 12">
                            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z">
                            </path>
                        </svg>
                        </a>
                    </Link>
                </div>
                </div>
               <div className="hidden lg:block relative z-10 w-full h-full my-16 lg:my-0 lg:w-1/2">
                    <Image className="relative z-40 w-full h-full" src={data.PageHeader.ImageURL} alt="hero image" width={600 } height={420 }/>
                     </div>   </div>
            </section>
         {/* <!-- Why Become KTern Consulting Partner--> */}
              <section className="relative w-full md:px-8 font-sans leading-6 bg-gray-800 border-0 border-gray-200 border-solid text-black">
            <div className="flex flex-col items-center max-w-6xl px-8 py-20 mx-auto leading-6 border-solid md:items-stretch md:justify-center md:py-24">
                <h2 className="w-full m-0 section-heading text-center border-0 border-gray-200 sm:text-3xl text-white">Why Become a KTern ISV Partner?</h2>
               
                <div className="grid grid-cols-3 md:gap-5 mt-10 sm:grid-cols-1 lg:grid-cols-12">
                   {data.WhyConsultingPartner.map((data)=>( <div key="data" className="max-w-xs col-span-4  border-0 border-gray-200 text-gray-50">
                    <div className="box-border flex flex-col items-center h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:items-start sm:text-left">
                            <span className="flex-shrink-0 p-5 font-sans border-0 border-gray-200 rounded-full bg-gray-50 text-gray-50">
                                        <Image src={data.Icon.imageURL} height="15" width="15" alt=""></Image>
                                        
              </span>
                        <div className="mt-6 font-sans text-center border-0 border-gray-200 sm:text-left text-gray-50">
                            <span className="box-border card-heading text-center border-solid sm:text-left text-gray-50">{data.CardTitle}</span>
                            <p className="box-border mx-0 mt-2 mb-0 card-subheading text-center text-gray-300 border-solid sm:text-left">{data.CardDescription}</p>
                        </div>
                    </div>
                    </div>))}             
                </div>
            </div>
            </section>
            {/* <!-- Partners --> */}
              <section className="w-full py-10 pb-16 bg-secondary">
                <div className="flex flex-col items-center max-w-6xl px-10 mx-auto xl:px-0">
                    <p className="card-heading text-gray-400 uppercase">Featured and Previously Seen On</p>
                    <div className="flex flex flex-wrap justify-center sm:flex-row space-x-16">
{data.TrustedByLogos.map((data)=>(<div key="data"><Image  src={data.imageURL} height={data.height} width={data.width} alt={data.imageDescription}></Image></div>))}
                    </div>
                </div>
                </section>
           
        {/* <!--Detailed Look at Partnership Benefits--> */}
            <section className="relative py-0 2xl:py-10">
            <div className="container md:px-20 mx-auto">
                <div className="mb-20 text-center">
                
                <h2 className="mt-8 section-heading">Detailed Look at Partnership Benefits</h2>
                </div>
                <div>
                            {data.PartnerBenefits.map((dt) => (
                                <div key="dt" className="mb-16 overflow-x-auto overflow-y-hidden">
                    <table className="table-auto w-full mb-10">
                    <thead className="bg-gray-100">
                        <tr className="text-lg text-left ">
                        <th className="pl-16 py-5 card-heading">{dt.mainHeader}</th>
                        <th className="px-4 py-5">
                            <div className="flex items-center card-heading">
                            
                            {dt.secondary1}
                            </div>
                        </th>
                        <th className="px-4 py-5">
                            <div className="flex items-center card-heading">
                            
                           {dt.secondary2}
                            </div>
                        </th>
                        <th className="px-4 py-5">
                            <div className="flex items-center card-heading">
                            
                           {dt.secondary3}
                            </div>
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                                            {dt.tableContent.map((dt1) => (
                                                <tr key="dt" className="text-lg text-center border-b border-gray-50">
                        <td className="pl-16 py-6 text-left card-subheading uppercase">{dt1.BenefitTitle}</td>
                        <td className="pl-10">
                                                        {dt1.Registered && <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="18" cy="18.4595" r="18" fill="#111827" fillOpacity="0.1"></circle>
                                                            <g clipPath="url(#clip0)">
                                                                <path d="M15.135 24.797L9 18.662L9.81024 17.8517L15.135 23.1765L26.1898 12.1218L27 12.9321L15.135 24.797Z" fill="#000000"></path>
                                                            </g>
                                                        </svg>}
                        </td>
                       <td className="pl-10">
                                                        {dt1.Authorized && <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="18" cy="18.4595" r="18" fill="#111827" fillOpacity="0.1"></circle>
                                                            <g clipPath="url(#clip0)">
                                                                <path d="M15.135 24.797L9 18.662L9.81024 17.8517L15.135 23.1765L26.1898 12.1218L27 12.9321L15.135 24.797Z" fill="#000000"></path>
                                                            </g>
                                                        </svg>}
                        </td>
                        <td className="pl-10">
                                                        {dt1.Preferred && <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="18" cy="18.4595" r="18" fill="#111827" fillOpacity="0.1"></circle>
                                                            <g clipPath="url(#clip0)">
                                                                <path d="M15.135 24.797L9 18.662L9.81024 17.8517L15.135 23.1765L26.1898 12.1218L27 12.9321L15.135 24.797Z" fill="#000000"></path>
                                                            </g>
                                                        </svg>}
                        </td>
                        </tr>))}
                       
                    </tbody>
                    </table>
                </div>))}
                
                </div>
            </div>
            </section>
            {/* <!--KTern Customer Testimonials--> */}
           <section className="sm:px-4 relative py-10 md:py-15 bg-black overflow-x-hidden">
               {/* <Image width="10%" height="10%" className="absolute h-24 md:h-auto top-0 left-0 right-0" src="/atis-assets/elements/line-top.svg" alt=""/> */}
               
                    <h2 className="mb-10 lg:mb-10   section-heading text-center  text-white  ">What Customers Say</h2>  
                <div className="flex flex-wrap lg:flex-nowrap justify-center">
    <div className="hidden lg:block  opacity-50 flex-shrink-0 w-full max-w-md px-3">
      </div>
    <div className="flex-shrink-0  w-full lg:max-w-md px-3 lg:mt-20 mb-6 lg:mb-0">
      <div className="px-6 py-12 bg-black   border border-white">
        <div className="relative px-4 mx-auto">
         <div className="absolute top-0 left-0"><Image width="10%" height="10%"  src="/atis-assets/elements/quote-grey.svg" alt=""/></div>
                       <div className="absolute top-0 right-0"><Image width="10%" height="10%"  src="/atis-assets/elements/quote-grey.svg" alt=""/></div>
          <div className="px-4 md:px-10">
            <h3 className="mb-8 card-subheading text-white">Helloo Tonight I had interdum at ante porta, eleifend feugiat nunc. In semper euismod me a accumsan. Thanks! 👏💥</h3>
            <div className="flex flex-wrap items-center">
             <div className="w-16 h-16 mb-4 md:mb-0 mr-6 rounded-full"><Image width="60%" height="60%" className="w-16 h-16 mb-4 md:mb-0 mr-6 rounded-full" src="data:image/jpeg;base64,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" alt=""/></div>
              <p className="mb-4 md:mb-0 text-gray-300 hyperlink">TIA O’Halleran, NYC</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex-shrink-0 w-full lg:max-w-md px-3 mb-6 lg:mb-0">
      <div className="px-6 py-12   bg-black border border-white">
        <div className="relative px-4 mx-auto">
         <div className="absolute top-0 left-0"><Image width="10%" height="10%"  src="/atis-assets/elements/quote-grey.svg" alt=""/></div>
                       <div className="absolute top-0 right-0"><Image width="10%" height="10%"  src="/atis-assets/elements/quote-grey.svg" alt=""/></div>
          <div className="px-4 md:px-10">
            <h3 className="mb-8 card-subheading text-white">Helloo 2 Thanks, feugiat tellus a sad tincidunt ultrices. Phasellus non libero tempus odio vestibulum ultricies.</h3>
            <div className="flex flex-wrap items-center">
              <div className="w-16 h-16 mb-4 md:mb-0 mr-6 rounded-full"><Image width="60%" height="60%" className="w-16 h-16 mb-4 md:mb-0 mr-6 rounded-full" src="data:image/jpeg;base64,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" alt=""/></div>
              <p className="mb-4 md:mb-0 text-gray-300 hyperlink">Alice Kenowski, NYC</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex-shrink-0 w-full lg:max-w-md px-3 lg:mt-20 mb-6 lg:mb-0">
      <div className="px-6 py-12   bg-black border border-white">
        <div className="relative px-4 mx-auto">
        <div className="absolute top-0 left-0"><Image width="10%" height="10%"  src="/atis-assets/elements/quote-grey.svg" alt=""/></div>
                       <div className="absolute top-0 right-0"><Image width="10%" height="10%"  src="/atis-assets/elements/quote-grey.svg" alt=""/></div>
          <div className="px-4 md:px-10">
            <h3 className="mb-8 card-subheading text-white">Hellooo This time ut augue ut magna rutrum ultricies nec nec leo. Proin tempor, mauris sad senne lorem.</h3>
            <div className="flex flex-wrap items-center">
             <div className="w-16 h-16 mb-4 md:mb-0 mr-6 rounded-full"><Image width="60%" height="60%" className="w-16 h-16 mb-4 md:mb-0 mr-6 rounded-full" src="data:image/jpeg;base64,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" alt=""/></div>
              <p className="mb-4 md:mb-0 text-gray-300 hyperlink">Lea Diamse, NYC</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="hidden lg:block opacity-50 flex-shrink-0 w-full max-w-md px-3">
        </div>
  </div>
            </section>
          
            {/* <!--KTern FAQ--> */}

            <section className="py-10 bg-projects-white">
                    <h2 className="mb-2 section-heading  text-center">Frequently Asked Questions</h2>
                    <div className="flex space-x-10 p-10">
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
                            
                            {data.FAQSection.map((data) => (
                                <details key="data" className="relative overflow-hidden border-2 border-gray-200  select-none hover:bg-white">
                                    <summary  className=" flex items-center justify-between   text-gray-700 cursor-pointer sm: px-6 py-6 hover:text-gray-800" style={{ listStyle: 'none' }}>
                                        <span className="card-subheading">{data.Question}</span>
                                        <svg className=" w-6 h-6 transition-all duration-200 ease-out transform rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                                            </summary>
                                            <hr/>
                                    <div className="p-4 hyperlink">
                                          {data.Answer}
                                    </div>
                            </details>))}
                             
                         
                            
                            </div>
                    </div>
                </section>
   



            {/* <!--Steps to join KTern--> */}
        <section className="pt-5 pb-0 2xl:py-20 bg-black overflow-hidden">
            <div className="container px-14 mx-auto">
                <div className="mb-10 max-w-xl mx-auto sm:mb-24 text-center">
                            <span className="section-heading  text-white">{data.PartnershipSteps.Title}</span>
                <h2 className="mt-4 section-subheading text-white">{data.PartnershipSteps.Description}</h2>
                </div>
                <div className="relative flex flex-wrap justify-center -mx-10 mb-5">
                        <div className="hidden lg:block absolute inset-y-0 -mr-80 -mt-18"><Image width={200} height={100} src="/partner/dots-gray.svg" alt="" /></div>
                        <div  className="hidden lg:block absolute top-0 left-0 ml-72 -mt-18"><Image src="/partner/dots-gray.svg" width={200} height={100}  alt=""/></div>
                <div className="w-full lg:w-1/3 px-10 md:mt-20 md:mb-20 lg:mb-0">
                    <div className="relative flex">
                    
                    <div className="mr-8">
                        <span className="flex justify-center items-center w-14 h-14 text-black bg-white card-heading  rounded-full">1</span>
                    </div>
                    <div className="max-w-xs">
                        <h3 className="mb-6 card-heading text-white">{data.PartnershipSteps.Steps[0].StepTitle}</h3>
                        <p className="card-subheading text-gray-200">{data.PartnershipSteps.Steps[0].StepDescription}</p>
                    </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/3 mt-20 px-10 md:mb-20 lg:mb-0">
                    <div className="flex">
                    <div className="mr-8">
                        <span className="flex justify-center items-center w-14 h-14 text-black bg-white card-heading  rounded-full">2</span>
                    </div>
                    <div className="max-w-xs">
                         <h3 className="mb-6 card-heading text-white">{data.PartnershipSteps.Steps[1].StepTitle}</h3>
                        <p className="card-subheading text-gray-200">{data.PartnershipSteps.Steps[1].StepDescription}</p>
                    </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/3 mt-20 px-10">
                    <div className="flex">
                    <div className="mr-8">
                        <span className="flex justify-center items-center w-14 h-14 text-black bg-white card-heading  rounded-full">3</span>
                    </div>
                    <div className="max-w-xs">
                       <h3 className="mb-6 card-heading text-white">{data.PartnershipSteps.Steps[2].StepTitle}</h3>
                        <p className="card-subheading text-gray-200">{data.PartnershipSteps.Steps[2].StepDescription}</p>
                    </div>
                    </div>
                </div>
                </div>
                
            </div>
            </section>
{/* <!-- Footer CTA --> */}
            <section className="bg-white">
                <div className="md:px-8 py-8 mx-auto sm:py-10 lg:py-20 max-w-7xl">
                <div className="relative py-6 overflow-hidden  bg-gradient-to-r from-black to-secondary lg:py-12 md:px-6 lg:p-16 lg:flex lg:items-center lg:justify-between md:shadow-xl md:bg-purple-1000">
                <div className="absolute top-0 right-0 hidden w-full -mt-20 transform rotate-45 translate-x-1/2 bg-white sm:block h-96 opacity-5"></div>
                <div className="absolute top-0 left-0 hidden w-full -mt-20 transform rotate-45 -translate-x-1/2 bg-white sm:block h-96 opacity-5"></div>
                <div className="relative p-6  md:p-0 md:pb-4">
                <h2 className="card-heading   tracking-tight text-white sm:text-4xl sm:leading-10">{data.CTA.CTATitle}</h2>
                <p className="w-full mt-5 card-subheading text-white ">{data.CTA.CTADescription}</p>
                </div>
                <div className="relative flex flex-col items-center w-full px-6 space-y-5 md:space-x-5 md:space-y-0 md:flex-row md:w-auto lg:flex-shrink-0 md:px-0">
                <Link  href={data.CTA.PrimaryCTA.linkURL} passHref><a className="  inline-block py-3 px-10 bg-black hover:bg-gray-300 hover:text-black shadow   text-white  rounded-r-xl rounded-b-xl transition duration-200 button border-2 border-black">{data.CTA.PrimaryCTA.buttonTitle}</a></Link>
                <Link  href={data.CTA.SecondaryCTA.linkURL} passHref><a className="  inline-block py-3 px-10 bg-white hover:bg-gray-50 hover:text-black shadow  text-black  rounded-r-xl rounded-b-xl transition duration-200  border-2 border-black button">{data.CTA.SecondaryCTA.buttonTitle}</a></Link>
                </div>
                </div>
                </div>
            </section> 
            </Layout>
            </>
    )
}
export const getServerSideProps = async () => {
   
//    fetch strapi data
    const res = await fetch(`https://api.ktern.com/consulting-partner`, {
		method: 'get',
	});
	const data = await res.json();
	console.log('data1', data);
	return {
		props: {
			data: data,
		},
	};
}