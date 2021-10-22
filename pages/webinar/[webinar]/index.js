import Layout from "../../../component/Layout"
import WebinarLayout from "../../../component/webinar_Layout";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from 'next-seo';
import { BreadcrumbJsonLd } from 'next-seo';
import { LogoJsonLd } from 'next-seo';
import { SocialProfileJsonLd } from 'next-seo';
import { EventJsonLd } from 'next-seo';
export default function WebinarLanding ({ webinar_data }) {

    const data = {
        title: webinar_data,
        type: "ON-DEMAND WEBINAR",
        date: "1st September 2021",
        time: "11 am to Noon",
        zone: "Pacific Time",
        cost: "Free",
        about: "Manual testing  increases the required costs and timelines during SAP Digital Transformation. However, considering today’s complex landscapes, integrated processes, and future innovations, automation of the SAP testing lifecycle is just the first step.Auto-detecting process changes to execute autonomous testing based on business process criticality is the path forward.",
        category: "Digital Maps",
        learnlist: [ "Auto-generation of test scripts based on business process criticality.", "No-code API testing bots and screen-based testing bots.", "Orchestrating remote UAT and go-lives through a Digital Workplace Platform." ],
        panellist: [ { name: "Ratnakumar", designation: "CEO & Founder", image: "/webinar/ratna.webp" } ],
        class: 'absolute inset-0 bg-gradient-to-b from-labs-primary to-labs-secondary opacity-30',
        categoryStyle: 'bg-labs-secondary',
        redirect_url:"/thanks/"+webinar_data
    }
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
            <WebinarLayout data={data}/>
            </Layout>
            </>
    )
}


// Return a list of possible value for webinar
export const getStaticPaths = async () => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/users');
    // const data = await res.json();
    const data=[{webinar:'transforming-s4hana-upgrade-journey'},{webinar:'reimagining-sap-s4hana-conversion'},{webinar:'democratizing-sap-digital-transformation-as-a-service-dxaas'},{webinar:'manage-digital-transformation-effectively'},{webinar:'reimagining-sap-testing'}]
    // console.log(data)
    const paths = data.map(webinar => {
        return ({
            params:{webinar:webinar.webinar}
        })
    })
    return {
        paths,
        fallback:false
    }
}
// Fetch necessary data for the blog post using params.webinar
export const getStaticProps = async (context) => {
    const webinar = context.params.webinar;
    // const response = await fetch('https://api.ktern.com/webinars',{method:'get',headers:new Headers({'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDFhNDMzMjQwMDM0Mjg5ZTM2MzYxYSIsImlhdCI6MTYzMjEzMTM4MiwiZXhwIjoxNjM0NzIzMzgyfQ.473sxX5je4A7ddg6udNV7aArOoNdPum2GNvxSQ1A7g8'})});
    // const data = await response.json();
    return {
        props:{webinar_data:webinar}
    }
}
