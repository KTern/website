import Layout from "../../../component/Layout"
import WebinarLayout from "../../../component/webinar_Layout";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from 'next-seo';
import { BreadcrumbJsonLd } from 'next-seo';
import { LogoJsonLd } from 'next-seo';
import { SocialProfileJsonLd } from 'next-seo';
import { EventJsonLd } from 'next-seo';

import { useRouter } from 'next/router';
export default function WebinarLanding ({ webinar_Data }) {
    const date = new Date(webinar_Data.WebinarDate + "T" + webinar_Data.Time)
    const time =date.toLocaleString('en-US', { hour: 'numeric', hour12: true ,minute:'numeric'})
   
    const router = useRouter();
    const handleSearch = (event) => {
        console.log("clicked" +webinar_Data.Type+event, router.query)
       
            router.push({
              pathname:'/webinar'+`${webinar_Data.redirectURL}`,
               state:`${ webinar_Data.IsOnDemandWebinar}`
            });
      
    }
    return (
        <>
       <NextSeo
                title={webinar_Data.PageSEO.PageTitle}
                description={webinar_Data.PageSEO.PageDescription}
                canonical={webinar_Data.PageSEO.CanonicalTag}
                openGraph={{
                    url: `${webinar_Data.PageSEO.ThumbnailImageURL}`,
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
             <EventJsonLd
      name="My Event"
      startDate="2020-01-23T00:00:00.000Z"
      endDate="2020-01-24T00:00:00.000Z"
      location={{
        name: 'My Place',
        sameAs: 'https://example.com/my-place',
        address: {
          streetAddress: '1600 Saratoga Ave',
          addressLocality: 'San Jose',
          addressRegion: 'CA',
          postalCode: '95129',
          addressCountry: 'US',
        },
      }}
      url="https://example.com/my-event"
      images={['https://example.com/photos/photo.jpg']}
      description="My event @ my place"
     
    />      
        <Layout>
                 <section className="relative sm:mb-20" >
            <div className={`absolute inset-0 bg-gradient-to-b bg-${webinar_Data.CssStreamTag}-primary opacity-30`}></div>
        
            <div className="relative z-20 px-4 py-24 mx-auto text-center text-white max-w-7xl lg:py-32 ">
                <div className="flex flex-wrap text-white">
                    <div className="relative w-full px-4 mx-auto text-center xl:flex-grow-0 xl:flex-shrink-0">        
                            <h1 className="mt-0 mb-2 heading  text-black ">{ webinar_Data.WebinarTitle}</h1>
                        <p className="mt-0 mb-4  text-black subheading">
                            {webinar_Data.Type}
                        </p>
        
                    </div>
                </div>
            </div>
        
            <div className="relative z-30  md:px-10 bg-white sm:h-0 ">
                <div className="flex flex-row  items-center sm:h-26 max-w-lg md:p-6 mx-auto space-y-3 overflow-hidden transform -translate-y-12 bg-white rounded-lg shadow-md lg:h-24 lg:max-w-6xl lg:flex-row lg:space-y-0 lg:space-x-3">
                        <div className="mb-8  mt-10 flex sm:flex-col items-center lg:justify-center w-1/3 px-4">
                            <div className="block  sm:h-6 w-10 h-10 md:mr-4 relative">
                            <Image layout="fill" className=" w-full shadow-sm max-h-20" src="/webinar/calendar.png" alt="Calendar"/>
                            </div>
                            <div>
                            <h3 className="sm:text-center hyperlink  lg:">{webinar_Data.WebinarDate}</h3>
                            
                            </div>
                        </div>
                        <div className="mb-8 flex sm:flex-col items-center lg:justify-center w-1/3 px-4">
                        <div className="block  sm:h-6 w-10 h-10 md:mr-4 relative">
                            <Image layout="fill" className=" w-full shadow-sm max-h-20" src="/webinar/clock.png" alt="Calendar"/>
                            </div>
                            <div>
                            <h3 className="sm:text-center hyperlink">{time}</h3>
                            <p className="sm:text-center hyperlink">{webinar_Data.TimeZone}</p>
                            
                            </div>
                        </div>
                        <div className="mb-8  flex sm:flex-col items-center lg:justify-center w-1/3 px-4">
                        <div className="block  sm:h-6 w-10 h-10 md:mr-4 relative ">
                            <Image layout="fill" className=" w-full shadow-sm max-h-20" src="/webinar/tickets.png" alt="Calendar"/>
                            </div>
                            <div>
                            <h3 className="sm:text-center  hyperlink sm:mb-10">{webinar_Data.cost}</h3>
                            
                            </div>
                        </div>
                        </div>
            </div>
            </section>
            <section className="w-full px-3 pt-20 py-10 bg-white xl:px-3">
                    <div className=" mx-auto">
                        <div className="flex flex-col items-start md:flex-row">

                            <div className="w-full space-y-5 md:w-3/5 md:pr-16">
                                <p className={`inline-block py-1 pl-4 pr-4 mb-0 -ml-0 hyperlink  leading-5 text-black transform -translate-y-2  rounded bg-${webinar_Data.CssStreamTag}-primary`} >
                                <Link href="#_"  rel="category">
                                   <a className="text-black hyperlink uppercase" > {webinar_Data.DigitalStream}</a>
                                </Link>
                            </p>
                            <h2 className=" card-heading  text-black sm: md:">
                                About
                            </h2>
                            <p className=" text-gray-600 card-subheading md:pr-16 text-justify">{ webinar_Data.About}</p>
                                <h2 className=" card-heading  text-black sm: md:">
                                You&apos;ll Learn
                                </h2>
                                <ul type="circle" className="w-full rounded-lg mt-2 mb-3 text-black">
                                {webinar_Data.LearningPoints.map((content,index) => (
                                    <li className="mb-2" key="index">
                                        <div className="w-fill flex  text-gray-600 md:pr-16">
                                            {/* <div className=" block w-4 h-4 relative flex-none">
                                                <svg className="w-5 h-5 mr-1 text-black mt-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                            </div> */}
                                            <span className="ml-2 card-subheading" title="Point 1" > <span className="bg-secondary rounded-full px-2 py-1 mr-3"><b>{index +1}</b></span>&nbsp;&nbsp;{content.listItem}</span>
                                        </div>
                                    </li>
                                ))}
                                 </ul>
                                   
                            </div>

                            <div className="w-full mt-16 md:mt-0 md:w-2/5">
                                <div className="mb-14"> <h2 className="card-heading   text-black sm: md:">
                                    Your Panelists
                                </h2>
                                    <div className="flex items-center  p-5 rounded-xl">
                                {webinar_Data.Panelists.map(member => (
                                    <div className="text-center " key={member} >
                                           
                                                <Image width="150" height="150" className="mx-auto rounded-full mb-2  border-3 border-black border-solid" src={member.AvatarURL} alt=""/>
                                           
                                            <h3 className="   card-heading">{member.Name}</h3>
                                            <p className="text-gray-500 card-subheading">{member.Description}</p>
                                    </div>
                                ))}

                    

                                    </div></div>
                                <div className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                                    <h3 className="mb-6 card-heading  text-center">Register for the Webinar</h3>
                                    <div className="relative w-full mt-6 space-y-8">
                                    <div className="relative">
                                        <label className="absolute px-2 ml-2 -mt-3 card-subheading text-gray-600 bg-white">First Name</label>
                                        <input type="text" className="block w-full px-4 py-4 mt-2  placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="John"/>
                                    </div>
                                    <div className="relative">
                                        <label className="absolute px-2 ml-2 -mt-3 card-subheading text-gray-600 bg-white">Last Name</label>
                                        <input type="text" className="block w-full px-4 py-4 mt-2  placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="Doe"/>
                                    </div>
                                    <div className="relative">
                                        <label className="absolute px-2 ml-2 -mt-3 card-subheading text-gray-600 bg-white">Email Address</label>
                                        <input type="text" className="block w-full px-4 py-4 mt-2  placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="janedoe@email.com"/>
                                    </div>
                                    <div className="relative">
                                        <label className="absolute px-2 ml-2 -mt-3  text-gray-600 card-subheading bg-white">Phone</label>
                                        <input type="number" className="block w-full px-4 py-4 mt-2  placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="Phone Number"/>
                                    </div>
                                    <div className="relative  text-center">
                                    
                                        {/* <Link href={webinar_Data.redirect_url} onClick={()=>{handleSearch(event)}} forwardHref>
                                            <a className="inline-block w-full px-5 py-4 button  text-center text-white transition duration-200 bg-black 
                                            rounded-r-xl rounded-b-xl button transition duration-200 hover:bg-gray-500 ease">Submit</a>
                                        </Link> */}
<button onClick={()=>handleSearch()} className="inline-block w-full px-5 py-4 button  text-center text-white transition duration-200 bg-black 
                                            rounded-r-xl rounded-b-xl button transition duration-200 hover:bg-gray-500 ease">Submit</button>
                                    </div>
                                    </div>

                                </div>
                        </div>

                    </div>
                </div>
            </section>
            </Layout>
            </>
    )
}


// Return a list of possible value for webinar
// export const getStaticPaths = async () => {
//   // dynamic route array values must be acquired here from strapi
//     const data=[{webinar:'transforming-s4hana-upgrade-journey'},{webinar:'reimagining-sap-s4hana-conversion'},{webinar:'democratizing-sap-digital-transformation-as-a-service-dxaas'},{webinar:'manage-digital-transformation-effectively'},{webinar:'reimagining-sap-testing'}]
    
//     const paths = data.map(index => {
//         return ({
//             params:{webinar:index.webinar}
//         })
//     })
//     return {
//         paths,
//         fallback:true
//     }
// }
// Fetch necessary data for the blog post using params.webinar
export const getServerSideProps = async ({params}) => {
   
    console.log("in features",params.webinar);
    // data url from strapi)
    const res = await fetch(`https://api.ktern.com/webinars?slug=${params.webinar}`,{method:'get'});
    const data = await res.json();
    console.log("data",data[0])
    return {
        props: {
            webinar_Data:data[0]
        }
    }
}
