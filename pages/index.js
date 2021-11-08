import Head from 'next/head'
import Image from "next/image";
import Link from "next/link";
import Layout from "../component/Layout";
import amplitude from 'amplitude-js';
import { NextSeo } from 'next-seo';
import { BreadcrumbJsonLd } from 'next-seo';
import { LogoJsonLd } from 'next-seo';
import { SocialProfileJsonLd } from 'next-seo';
import Carousel from 'react-multi-carousel';

import { SoftwareAppJsonLd } from 'next-seo';
import * as Amplitude from '@amplitude/node';
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
export default function Home ({ data }) {
    var options = {};
    var instance = amplitude.getInstance("instance").init("fc34969fbb47436070b100efc94f9efa", null, options);
    var userId = "12345";
    amplitude.getInstance().init("fc34969fbb47436070b100efc94f9efa", userId);
    amplitude.getInstance().init('fc34969fbb47436070b100efc94f9efa', null, {
  serverZone: 'EU',
  serverZoneBasedApi: true,
    });
    var event = "Button Clicked";
amplitude.getInstance().logEvent(event);
    const client = Amplitude.init('fc34969fbb47436070b100efc94f9efa');
    client.logEvent({
  event_type: 'Node.js Event',
  user_id: 'iedsonfrainlar@ktern.com',
  location_lat: 37.77,
  location_lng: -122.39,
  ip: '127.0.0.1',
  event_properties: {
    keyString: 'valueString',
    keyInt: 11,
    keyBool: true
  }
});
    return (
        <>
             
            <NextSeo
                title={data.pageSEO.PageTitle}
                description={data.pageSEO.PageDescription}
                canonical={data.pageSEO.CanonicalTag}
                openGraph={{
                    url: `${data.pageSEO.ThumbnailImageURL}`,
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
             <SoftwareAppJsonLd
      name="Angry Birds"
      price="1.00"
      priceCurrency="USD"
      aggregateRating={{ ratingValue: '4.6', reviewCount: '8864' }}
      operatingSystem="ANDROID"
      applicationCategory="GameApplication"
    />
        <div >
            {/* <h1>{locale}</h1> */}
            {/* {data.map(item => (
                <h2 key="item">{item.phone}</h2>
            ))} */}
            <Layout>
                {/* <!-- Hero Section --> */}
                <section className=" pt-32  relative overflow-hidden bg-white">

                    <div className=" bg-white  h-full" >
                      
                        <div className="xl:pb-80  bg-contain bg-no-repeat bg-bottom text-center xl:bg-hero bg-50% " >
                            <h2 className="mt-4 top-0 mb-2  leading-normal sm:sm-heading heading">{data.pageHeaderDetails.header}</h2>
                            <p className="p-6 mb-6 max-w-2xl mx-auto mb-12 pr-10 sm:sm-subheading subheading ">{data.pageHeaderDetails.subHeading}</p>

                            <Link   rel="noopener noreferrer" href={data.pageHeaderDetails.primaryCTA.linkURL}><a target="_blank" className="sm:mb-5 sm:sm-button inline-block py-3 px-14 border-2 border-black   bg-black hover:bg-gray-300 hover:text-black shadow  text-white  rounded-r-xl rounded-b-xl transition duration-200 uppercase header button">{data.pageHeaderDetails.primaryCTA.buttonTitle}</a></Link>
                            <Link  href={data.pageHeaderDetails.secondaryCTA.linkURL}><a className="mb-4 inline-block mx-5   shadow-md bg-white-500 py-3 px-10 hover:bg-gray-300  sm:sm-button text-black   rounded-r-xl rounded-b-xl transition duration-200 uppercase header button border-2 border-black">{data.pageHeaderDetails.secondaryCTA.buttonTitle}</a></Link>
                          <p className=" mx-auto   card-subheading text-gray-400 xl:mb-60 uppercase">{data.heroNote}</p>
                        </div>
                        
                    </div>
                </section>
                {/* <!--/ Hero Section --> */}
                {/* <!-- Customer logos Section --> */}

                    <div className="px-4 py-10">
                <div className="container px-4 mx-auto">
                            <h2 className=" text-center  text-gray-500 section-heading sm:sm-section-heading">{data.TrustedByStatement}</h2>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. ab repudiandae et.</p> */}
                </div>
                <Carousel className="bots flex p-10  z-10" responsive={responsive}>
                            {data.TrustedByLogos.map((data) => (
                                <div key="data" className="p-3 bots-card flex-row">

                                <Image className=" w-auto lg:w-100" src={data.imageURL}
                                    alt={data.imageDescription} width={250} height={250} layout="responsive"/>

                                </div>
                            ))}
                           
                           
                </Carousel>
            </div>
                {/* <!-- /Customer logos Section --> */}
                {/* <!-- Streams Section --> */}
              <section className="relative items-center overflow-hidden w-full py-12 bg-white sm:py-16 md:py-20">
                    <svg className="absolute -mt-32 text-gray-300 transform scale-150 fill-current top-1/2" viewBox="0 0 197 31" xmlns="http://www.w3.org/2000/svg"><path d="M4.83 30.3c.945-.18 1.9-.307 2.86-.38.49-.07 1.07-.17 1.65-.28.58-.11 1.15-.18 1.61-.23.9-.11 1.8-.22 2.7-.3.9-.08 1.8-.19 2.71-.22 5.13-.26 10.31-.11 15.5.13l5.14.29h.54c2.35.14 4.72.27 7.09.35 1.34 0 4.64.13 4.94.14.5.06 3.49 0 4 0 .51 0 4.25-.17 5.24-.28 1.16 0 2.32-.09 3.47-.16 1.15-.07 2.61-.19 4.18-.36a41.33 41.33 0 004.21-.73c.84-.19 1.69-.32 2.53-.54l.35-.07c.55-.11 1.17-.28 1.8-.46a47.28 47.28 0 0019.46-10.06c1.84-1.69 3.61-3.24 5.6-3 .987.133 1.95.406 2.86.81l3.09 1.29 6.24 2.64c2 .81 3.34 1.23 6 2.33 1.17.46 3.39 1.3 4.59 1.64a57.05 57.05 0 005.65 1.29 39.75 39.75 0 0015.52-.14l2-.47c.66-.2 1.34-.36 2-.59a18 18 0 005.72-2.89 37.76 37.76 0 004.35-4c2.42-2.58 4.14-5.52 6.35-7.89A12.69 12.69 0 01177.65 4c.35.09.7.16 1.05.27l1 .38c.69.22 1.35.56 2 .8A23.72 23.72 0 01186.46 8c1.49 1 2.9 2.12 4.45 3.36 1.26 1 4.45 3.36 5.11 3.38.39 0 .3-.52.68-.55.85 0-.24-2.56-2-4a59 59 0 00-5.92-4.38 33.42 33.42 0 00-6.89-3.6A23.9 23.9 0 00175.75 1a17.23 17.23 0 00-6.69 1 20.69 20.69 0 00-2.39 1.1 13.51 13.51 0 00-2.16 1.59 28.46 28.46 0 00-3.5 3.83c-2.31 2.9-4.26 5.92-6.9 8.08a22.73 22.73 0 01-9.19 4.47 36.08 36.08 0 01-13.17.74c-6-.8-11.89-2.93-17.66-5.27l-8.7-3.54a15.35 15.35 0 00-4.92-1.38 6.78 6.78 0 00-2.83.48c-.83.341-1.61.792-2.32 1.34-1.37 1-2.45 2.11-3.65 3A40.1 40.1 0 0187.96 19a38.51 38.51 0 01-10.25 4.61l-.6.15h-.1c-1.85.51-4 1.07-5.87 1.48a79.21 79.21 0 01-11.79 1.41c-4.55.21-9.19.32-13.68.16-8.49-.29-17-1-25.65-.9a91.5 91.5 0 00-14.28.63 17.59 17.59 0 00-3.46.91 17.08 17.08 0 00-1.68.67.67.67 0 00-.35.9 2.6 2.6 0 001.62 1.13c.96.29 1.976.34 2.96.15z" fillRule="nonzero"></path></svg>
                    <div className="px-10 mx-auto text-left max-w-7xl md:text-center pb-14 xl:px-0">
                        <h2 className="mx-auto section-heading sm:sm-section-heading ">KTern Digital Streams</h2>
                        <p className="max-w-lg mt-5 section-subheading text-gray-600 md:mx-auto sm:sm-section-subheading">Our Digital Workplace Comes with 5 Streams to make your Digital Transformation Clean and Simple</p>
                    </div>
                    <div className="relative grid gap-8 px-10 mx-auto md:grid-cols-2 xl:grid-cols-5 max-w-full">

                        <svg className="absolute hidden w-12 h-auto -mt-8 -ml-0 text-black fill-current xl:block" viewBox="0 0 39 50" height="50" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M34.31 6.86a19.81 19.81 0 001-1.92l.11-.24.06-.13c0-.09.07-.19.09-.28.02-.09.17-.42 0-.51a21.26 21.26 0 00-3.48-.57l-4.22-.42a26.55 26.55 0 00-3.65-.21 2.28 2.28 0 00-.76.13c-.18 0-.14.24-.11.35.022.115.052.23.09.34l.31.79c.28.68.6 1.45 1.2 2.78.16.42 1.36 3.14 1.58 3.53.204.4.449.78.73 1.13.26.34.6.58.83.91.23.33.58 1 .77 1.19a.2.2 0 010 .11.28.28 0 00-.06.09 1.58 1.58 0 00-.3 1.12.4.4 0 01-.33.49 1.78 1.78 0 01-1.22-.31 6.74 6.74 0 01-2.08-2.42 40.45 40.45 0 01-2.34-5.11c-.35-.87-.67-1.7-.96-2.7l-.21-.71a11.26 11.26 0 01-.3-1.21 3 3 0 010-1.15 3.21 3.21 0 01.24-.45l.07-.12v-.05a1.53 1.53 0 01.18-.18 3.45 3.45 0 01.66-.35 5.54 5.54 0 011.5-.27H24.8c.59 0 1.17 0 1.74.05 1.15.06 2.28.17 3.4.3 1.12.13 2.25.29 3.38.47.56.1 1.13.2 1.7.32l.57.14c.237.05.47.113.7.19a2.88 2.88 0 011.14.64 2 2 0 01.35 1.11 4.31 4.31 0 01-.31 1.3 6.27 6.27 0 01-.27.63L37 6l-.37.76a36.55 36.55 0 01-3.83 5.82 10.57 10.57 0 01-2.15 2.18 3 3 0 01-1.28.54c-.41.06-.85-.13-.88-.44a5.73 5.73 0 00.5-1.15 14 14 0 01.51-1.43A5 5 0 0130.67 11c1.22-.41 2.15-1.85 3-3.13.22-.32.43-.66.64-1.01zM17.31 39.86a19.81 19.81 0 001-1.92l.11-.24.06-.13c0-.09.07-.19.09-.28.02-.09.17-.42 0-.51a21.26 21.26 0 00-3.48-.57l-4.22-.42a26.55 26.55 0 00-3.65-.21 2.28 2.28 0 00-.76.13c-.18 0-.14.24-.11.35.022.115.052.23.09.34l.31.79c.28.68.6 1.45 1.2 2.78.16.42 1.36 3.14 1.58 3.53.204.4.449.78.73 1.13.26.34.6.58.83.91.23.33.58 1 .77 1.19a.2.2 0 010 .11.28.28 0 00-.06.09 1.58 1.58 0 00-.3 1.12.4.4 0 01-.33.49 1.78 1.78 0 01-1.22-.31 6.74 6.74 0 01-2.08-2.42 40.45 40.45 0 01-2.34-5.11c-.35-.87-.67-1.7-.96-2.7l-.21-.71a11.26 11.26 0 01-.3-1.21 3 3 0 010-1.15 3.21 3.21 0 01.24-.45l.07-.12v-.05a1.53 1.53 0 01.18-.18 3.45 3.45 0 01.66-.35 5.54 5.54 0 011.5-.27H7.8c.59 0 1.17 0 1.74.05 1.15.06 2.28.17 3.4.3 1.12.13 2.25.29 3.38.47.56.1 1.13.2 1.7.32l.57.14c.237.05.47.113.7.19a2.88 2.88 0 011.14.64 2 2 0 01.35 1.11 4.31 4.31 0 01-.31 1.3 6.27 6.27 0 01-.27.63L20 39l-.37.76a36.55 36.55 0 01-3.83 5.82 10.57 10.57 0 01-2.15 2.18 3 3 0 01-1.28.54c-.41.06-.85-.13-.88-.44a5.73 5.73 0 00.5-1.15 14 14 0 01.51-1.43A5 5 0 0113.67 44c1.22-.41 2.15-1.85 3-3.13.22-.32.43-.66.64-1.01zM13.874 23.203c.718.071 1.44.103 2.162.095l.264-.002h.143c.082-.038.202-.017.292-.037.09-.02.453-.023.462-.216a21.26 21.26 0 00-.954-3.394l-1.402-4.003a26.55 26.55 0 00-1.353-3.396 2.28 2.28 0 00-.439-.634c-.076-.163-.276-.026-.363.048a2.37 2.37 0 00-.27.225l-.585.615a81.727 81.727 0 00-2.013 2.263c-.313.322-2.27 2.56-2.531 2.923a6.62 6.62 0 00-.716 1.14c-.198.379-.272.788-.474 1.136-.202.348-.661.949-.753 1.201a.2.2 0 01-.1.047.28.28 0 00-.107-.017 1.58 1.58 0 00-1.142.202.4.4 0 01-.583-.092 1.78 1.78 0 01-.235-1.237 6.74 6.74 0 011.315-2.908 40.45 40.45 0 013.642-4.28c.64-.685 1.257-1.326 2.041-2.011l.555-.49c.308-.28.632-.541.97-.784a3 3 0 011.042-.486c.17-.004.34.005.51.027l.138.013.045-.021c.082.022.162.051.24.087.214.128.413.28.595.45.35.373.645.792.879 1.246l.16.344.3.643c.25.535.495 1.06.69 1.599.432 1.067.81 2.138 1.166 3.208.355 1.07.688 2.162 1.002 3.262.146.55.296 1.108.428 1.676l.114.576c.056.235.097.474.124.714a2.88 2.88 0 01-.098 1.304 2 2 0 01-.858.786 4.31 4.31 0 01-1.31.269 6.27 6.27 0 01-.685.021l-.392-.037-.845-.015a36.55 36.55 0 01-6.894-1.011 10.57 10.57 0 01-2.884-1.027 3 3 0 01-1.03-.932c-.228-.346-.242-.825.026-.984a5.73 5.73 0 001.254-.033 14 14 0 011.512-.142 5 5 0 011.654.52c.887.932 2.585 1.167 4.105 1.396.383.064.78.11 1.186.153z"></path></g></svg>
                        <svg className="absolute right-0 hidden w-12 h-auto -mt-6 -mr-0 text-black fill-current xl:block" viewBox="0 0 38 47" height="47" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M6.962 14.533c1.88.249 9.32-10.256 8.596-11.156-.724-.899-12.772-2.782-13.94-1.902-.71.544 3.662 12.87 5.344 13.058zM29.801 33.433c-.904-1.667-13.775-1.511-14.077-.397-.302 1.114 5.256 11.968 6.654 12.395.857.255 8.26-10.526 7.423-11.998zM29.995 23.637c1.306-1.374-2.82-13.568-3.972-13.511-1.153.057-9.758 8.697-9.733 10.16.023.893 12.564 4.601 13.705 3.351z"></path></g></svg>

                        {/* <!-- Digital Maps --> */}
                        <div className="relative">
                            <div className="relative z-20 flex flex-col p-5 bg-white border-2 border-gray-800">
                            <span className="flex  w-8 h-8 mb-3 mr-8 bg-transparent rounded-lg">
                                            <Image src={data.DigitalStreamsCards[0].StreamLogo.imageURL} alt="Digital maps" height={30} width={30}/>
                            </span>
                            <h3 className="card-heading font-bold sm:sm-card-heading">{data.DigitalStreamsCards[0].StreamTitle}</h3>
                                <p className="mt-4 card-subheading text-gray-700 sm:sm-card-subheading">{data.DigitalStreamsCards[0].StreamDescription}</p>
                                <div className="h-0.5 w-full border-b border-gray-200 my-8"></div>
                                <ul  className="space-y-2 h-100">
                                    {data.DigitalStreamsCards[0].FeaturePoints.map((feature) => (
                                    <li key="feature" className="flex items-center text-gray-700 card-subheading sm:sm-card-subheading">
                                        <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        <span>{ feature.listItem}</span>
                                    </li> 
                                ))}
                                </ul>
                                <div className="h-0.5 w-full border-b border-gray-200 my-8"></div>
                                <p className="mb-5 text-gray-600">{data.DigitalStreamsCards[0].StreamValuePoint}</p>
                                <Link href={data.DigitalStreamsCards[0].LandingPageURL}  passHref>
                                <a className="inline-flex items-center pb-1  text-maps-primary hover:border-blue-500 group ">
                                <span className="hyperlink sm:sm-hyperlink group-hover:text-maps-300">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-maps-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>
                                
                            </div>
                            <div className="absolute inset-0 z-10 w-full h-full mt-2 ml-2 bg-maps-secondary border-2 border-gray-800"></div>
                        </div>

                    {/* <!-- Digital Projects --> */}
                        <div className="relative">
                            <div className="relative z-20 flex flex-col p-5 bg-white border-2 border-gray-800">
                            <span className="flex  w-8 h-8 mb-3 mr-8 bg-transparent rounded-lg">
                                            <Image src={data.DigitalStreamsCards[1].StreamLogo.imageURL}alt="Digital Projects" height={30} width={30}/>
                                            </span>
                            <h3 className="card-heading font-bold">{data.DigitalStreamsCards[1].StreamTitle}</h3>
                                <p className="mt-4 card-subheading text-gray-700">{data.DigitalStreamsCards[1].StreamDescription}</p>
                                <div className="h-0.5 w-full border-b border-gray-200 my-8"></div>
                                <ul  className="space-y-2 h-100">
                                    {data.DigitalStreamsCards[1].FeaturePoints.map((feature) => (
                                    <li key="feature" className="flex items-center text-gray-700 card-subheading sm:sm-card-subheading">
                                        <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        <span>{ feature.listItem}</span>
                                    </li> 
                                ))}
                                </ul>
                                <div className="h-0.5 w-full border-b border-gray-200 my-8"></div>
                                
                                <p className="mb-5 text-gray-600">{data.DigitalStreamsCards[1].StreamValuePoint}</p>
                                <Link href={data.DigitalStreamsCards[1].LandingPageURL}  passHref>
                                <a className="inline-flex items-center pb-1  text-project-primary hover:border-blue-500 group ">
                                <span className="hyperlink group-hover:text-project-300">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-project-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>
                                
                            </div>
                            <div className="absolute inset-0 z-10 w-full h-full mt-2 ml-2 bg-project-secondary border-2 border-gray-800"></div>
                        </div>

                        {/* <!-- Digital Process  --> */}
                        <div className="relative">
                            <div className="relative z-20 flex flex-col p-5 bg-white border-2 border-gray-800">
                            <span className="flex  w-8 h-8 mb-3 mr-8 bg-transparent rounded-lg">
                                            <Image src={data.DigitalStreamsCards[2].StreamLogo.imageURL}alt="Digital Process" height={30} width={30}/>
                                            </span>
                            <h3 className="card-heading font-bold">{data.DigitalStreamsCards[2].StreamTitle}</h3>
                                <p className="mt-4 card-subheading text-gray-700">{data.DigitalStreamsCards[2].StreamDescription}</p>
                                <div className="h-0.5 w-full border-b border-gray-200 my-8"></div>
                                <ul  className="space-y-2 h-100">
                                    {data.DigitalStreamsCards[2].FeaturePoints.map((feature) => (
                                    <li key="feature" className="flex items-center text-gray-700 card-subheading sm:sm-card-subheading">
                                        <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        <span>{ feature.listItem}</span>
                                    </li> 
                                ))}
                                </ul>
                                <div className="h-0.5 w-full border-b border-gray-200 my-8"></div>
                                <p className="mb-5 text-gray-600">{data.DigitalStreamsCards[2].StreamValuePoint}</p>
                                <Link href={data.DigitalStreamsCards[2].LandingPageURL}   passHref>
                                <a className="inline-flex items-center pb-1  text-process-primary hover:border-blue-500 group ">
                                <span className="hyperlink group-hover:text-process-300">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-process-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>            </div>
                            <div className="absolute inset-0 z-10 w-full h-full mt-2 ml-2 bg-process-secondary border-2 border-gray-800"></div>
                        </div>

                        {/*<!-- Digital Labs --> */}
                        <div className="relative">
                            <div className="relative z-20 flex flex-col p-5 bg-white border-2 border-gray-800">
                            <span className="flex  w-8 h-8 mb-3 mr-8 bg-transparent rounded-lg">
                                            <Image src={data.DigitalStreamsCards[3].StreamLogo.imageURL}alt="Digital Lab" height={30} width={30}/>
                                            </span>
                            <h3 className="card-heading font-bold">{data.DigitalStreamsCards[3].StreamTitle}</h3>
                                <p className="mt-4 card-subheading text-gray-700">{data.DigitalStreamsCards[3].StreamDescription}</p>
                                <div className="h-0.5 w-full border-b border-gray-200 my-8"></div>
                                 <ul  className="space-y-2 h-100">
                                    {data.DigitalStreamsCards[3].FeaturePoints.map((feature) => (
                                    <li key="feature" className="flex items-center text-gray-700 card-subheading sm:sm-card-subheading">
                                        <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        <span>{ feature.listItem}</span>
                                    </li> 
                                ))}
                                </ul>
                                <div className="h-0.5 w-full border-b border-gray-200 my-8"></div>
                            
                                <p className="mb-5 text-gray-600">{data.DigitalStreamsCards[3].StreamValuePoint}</p>
                                <Link href={data.DigitalStreamsCards[3].LandingPageURL}   passHref>
                                <a className="inline-flex items-center pb-1  text-labs-primary hover:border-blue-500 group ">
                                <span className="hyperlink group-hover:text-labs-300">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-labs-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>
                                
                            </div>
                            <div className="absolute inset-0 z-10 w-full h-full mt-2 ml-2 bg-labs-secondary border-2 border-gray-800"></div>
                        </div>
                    
                    {/*<!-- Digital Mines --> */}
                        <div className="relative">
                            <div className="relative z-20 flex flex-col p-5 bg-white border-2 border-gray-800">
                            <span className="flex  w-8 h-8 mb-3 mr-8 bg-transparent rounded-lg">
                                            <Image src={data.DigitalStreamsCards[0].StreamLogo.imageURL}alt="Digital Mines" height={30} width={30}/>
                                            </span>
                            <h3 className="card-heading font-bold">{data.DigitalStreamsCards[4].StreamTitle}</h3>
                                <p className="mt-4 card-subheading text-gray-700">{data.DigitalStreamsCards[4].StreamDescription}</p>
                                <div className="h-0.5 w-full border-b border-gray-200 my-8"></div>
                               <ul  className="space-y-2 h-100">
                                    {data.DigitalStreamsCards[4].FeaturePoints.map((feature) => (
                                    <li key="feature" className="flex items-center text-gray-700 card-subheading sm:sm-card-subheading">
                                        <svg className="w-5 h-5 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        <span>{ feature.listItem}</span>
                                    </li> 
                                ))}
                                </ul>
                                <div className="h-0.5 w-full border-b border-gray-200 my-8"></div>
                                
                                <p className="mb-5 text-gray-600">{data.DigitalStreamsCards[4].StreamValuePoint}</p>
                                <Link href={data.DigitalStreamsCards[4].LandingPageURL}   passHref>
                                <a className="inline-flex items-center pb-1  text-mines-primary hover:border-blue-500 group ">
                                <span className="hyperlink group-hover:text-mines-300">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-mines-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>
                                
                            </div>
                            <div className="absolute inset-0 z-10 w-full h-full mt-2 ml-2 bg-mines-secondary border-2 border-gray-800"></div>
                        </div>

                    </div>
                </section>
                  {/* <!-- /Streams Section --> */}
                {/* <!-- Why Ktern --> */}
                <section className="md:px-20">
                        <div className="flex justify-center items-center   mx-auto space-x-10 ">
                            <div className="flex flex-wrap ">
                                {data.ProductUVP.map((product) => (
                                    <div key="product" className="p-6 w-full md:w-1/2 lg:w-1/4  md:mb-8 mt-8">
                                        <span className="flex items-center justify-center w-14 h-14 mb-8  rounded-full">
                                            <Image src={product.Icon.imageURL} alt={product.Icon.imageDescription} width={150} height={150} />
                                        </span>
                                        <h3 className="mb-4  card-heading">{product.CardTitle}</h3>
                                        <p className="card-subheading text-gray-500">{product.CardDescription}</p>
                                    </div>
                                ))}
                        </div>
                    </div>
                </section>
                {/* <!-- /Why Ktern --> */}
                {/* <!-- Customer Success Story --> */}
                <section className="py-10 sm:mx-4 bg-black text-white ">
                    <div className=" mx-auto ">
                        <div className=" md:divide-x flex flex-wrap justify-center space-x-10  rounded-lg  ">
                                {data.CustomerSuccessStories.map((data) => (
                                    <div key="data" className=" py-4 w-full md:w-1/4 lg:w-1/4 p-10 md:py-10  ">
                                <span className="flex  justify-center w-14 h-14  rounded-full">
                                    <Image src={data.Icon.imageURL} alt={data.Icon.imageDescription} width={250} height={250} />
                                </span>
                                <span className="card-heading">{data.CardTitle}</span>
                                <h3 className="mb-4 card-subheading">{data.CardDescription}</h3>
                               
                                    <Link href={data.CTAUrl}  passHref>
                                <a className="inline-flex items-center pb-1  text-white hover:border-blue-500 group ">
                                <span className="hyperlink group-hover:text-gray-400">{data.CTAText}</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>
                                
                            </div>))}
                            
                        </div>
                    </div>
                </section>
                {/* <!-- /Customer Success Story --> */}
               
                 {/* <!-- Redirect content Section --> */}
                <section className="xl:px-20">
                    <div className="p-4 md:p-24 flex flex-wrap mx-auto">
                        <div className="flex flex-col w-full  mb-5 md:w-1/2 md:mb-0">
                            <Link  href={data.QuickLinks[0].CTAUrl}>
                                 <a className="relative shadow flex flex-col flex-auto px-5 py-8  overflow-hidden  md:px-8 group border-2 hover:border-black  bg-gray-50" >
                                    <div className="-ml-5 md:-ml-8">
                                        <div style={{width: "240px"}}>
                                    <div className="Image__GatsbyObjectFitWrapper-sc-11886c9-0 gjizgk max-w-[200px] mx-0 mr-auto md:max-w-none transform transition-transform group-hover:scale-105 duration-700  mx-auto w-full">
                                    <Image className="mr-auto" src={data.QuickLinks[0].Icon.imageURL} alt={data.QuickLinks[0].Icon.imageDescription} draggable="false" width={200} height={200} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start justify-end flex-auto ">
                                            <h3 className="card-heading">{data.QuickLinks[0].CardTitle}</h3>
                                        <p className="mt-2 mb-4 card-subheading">{data.QuickLinks[0].CardDescription}</p>
                                        <div className="icon-link transition-opacity duration-200 group-hover:opacity-50 icon-link--black">
                                            
                                            <Link href={data.QuickLinks[0].CTAUrl}  passHref>
                                <a className="inline-flex items-center pb-1  text-black hover:border-blue-500 group ">
                                <span className="hyperlink group-hover:text-gray-400">{data.QuickLinks[0].CTAText}</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <div className="p-1 md:px-8 space-y-5 flex flex-col w-full  md:w-1/2">
                            <Link  href={data.QuickLinks[1].CTAUrl}>
                                <a className="relative shadow flex flex-auto p-5  group overflow-hidden md:p-8 false border-2 hover:border-black">
                                <div className="relative flex flex-col justify-between flex-1 mr-12 text-black">
                                    <div>
                                        <h3 className="mt-3 card-heading">{data.QuickLinks[1].CardTitle}</h3>
                                        <p className="mt-3 card-subheading">{data.QuickLinks[1].CardDescription}</p>
                                    </div>
                                    <div className="mt-20">
                                        <div className="icon-link transition-opacity duration-200 group-hover:opacity-50 icon-link--black">
                                          
                                                <Link href={data.QuickLinks[1].CTAUrl}  passHref>
                                <a className="inline-flex items-center pb-1  text-black hover:border-blue-500 group ">
                                <span className="hyperlink group-hover:text-gray-400">{data.QuickLinks[1].CTAText}</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>
                                    
                                          
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end -mr-4 justify-end md:hidden lg:flex w-6/12 mt-auto false ">
                                    <div className="Image__GatsbyObjectFitWrapper-sc-11886c9-0 gjizgk transition-transform duration-700 transform group-hover:scale-105  mx-auto w-full">
                                        <Image className="object-contain w-full ml-auto max-h-[150px] max-w-[150px] md:max-w-[250px] md:max-h-[250px] -mr-4" src={data.QuickLinks[1].Icon.imageURL} alt={data.QuickLinks[1].Icon.imageDescription} draggable="false" width={200} height={200} />
                                    </div>
                                </div>
                            </a>
                            </Link>
                            <Link  href={data.QuickLinks[2].CTAUrl}>
                                 <a className="relative shadow flex flex-auto p-5  group overflow-hidden md:p-8 false border-2 hover:border-black">
                                    <div className="relative flex flex-col justify-between flex-1 mr-12 text-black">
                                        <div>
                                            <h3 className="mt-3 card-heading">{data.QuickLinks[2].CardTitle}</h3>
                                            <p className="mt-3 card-subheading">{data.QuickLinks[2].CardDescription}</p>
                                        </div>
                                        <div className="mt-20">
                                            <div className="icon-link transition-opacity duration-200 group-hover:opacity-50 icon-link--black">
                                              
                                                   <Link href={data.QuickLinks[2].CTAUrl}  passHref>
                                <a className="inline-flex items-center pb-1  text-black hover:border-blue-500 group ">
                                <span className="hyperlink group-hover:text-gray-400">{data.QuickLinks[2].CTAText}</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>
                                        
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end -mr-4 justify-end md:hidden lg:flex w-6/12 mt-auto false ">
                                    <div className="Image__GatsbyObjectFitWrapper-sc-11886c9-0 gjizgk transition-transform duration-700 transform group-hover:scale-105  mx-auto w-full">
                                            <Image className="object-contain w-full h-auto ml-auto max-h-[150px] max-w-[150px] md:max-w-[250px] md:max-h-[250px] -mr-4" src={data.QuickLinks[2].Icon.imageURL} draggable="false" width={200} height={200} alt={data.QuickLinks[2].Icon.imageDescription}/>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                </section>
                {/* <!-- /Redirect content Section --> */}
                {/* <!-- CTA Section --> */}
                <section className="relative py-5 2xl:py-10 bg-gray-700 overflow-hidden bg-no-repeat md:bg-cta" style={{ backgroundColor: '#EAEDF2',backgroundPosition: 'bottom right' }}>
                    <div className="py-5 container px-3 mx-auto">
                        <div className="max-w-3xl mx-auto text-center">
                                <h2 className="my-5  card-heading ">{data.CTASection.CTATitle}</h2>
                                <p className="card-subheading">{data.CTASection.CTADescription}</p>
                            <div className="max-w-md mx-auto pb-10">
                                <p className="mb-5  card-subheading text-gray-800">{}</p>
                                <Link  href={data.CTASection.CTAButtonLink}><a className="mb-1 inline-block py-2 px-10  border-2 border-black bg-black hover:bg-gray-300 hover:text-black shadow text-white  rounded-r-xl rounded-b-xl transition duration-200 uppercase hyperlink">{data.CTASection.CTAButtonText}</a></Link>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
            </div>
            </>
    )
}

export const getServerSideProps = async () => {
   
  
  
    // data url from strapi)
    const res = await fetch('https://api.ktern.com/index',{method:'get'});
    const data = await res.json();
    console.log("data",data)
    return {
        props: {
            data:data
        }
    }
}