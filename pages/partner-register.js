import Layout from "../component/Layout";
import Image from "next/image";

import { NextSeo } from 'next-seo';
import { BreadcrumbJsonLd } from 'next-seo';
import { LogoJsonLd } from 'next-seo';
import { SocialProfileJsonLd } from 'next-seo';
import Link from "next/link";
export default function PartnerContact ({data}) {
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
            <div className="py-20 w-full min-h-screen bg-white flex justify-center ">      
            <div className="w-full p-4 md:w-1/3 py-12 md:px-12 bg-white rounded-2xl md:shadow-xl z-20">
                <div>
                <h1 className="  text-center mb-4 cursor-pointer section-heading">Become a Partner</h1>
                <p className=" text-center  mb-8  section-subheading text-gray-700 cursor-pointer">For General queries <Link href="/contact" passhref><a className="font-bold hover:text-gray-200">Contact us</a></Link > </p>
                </div>
                <div className="space-y-8">
                <div className="relative">
                <label className="absolute px-2 ml-2 -mt-3 hyperlink text-gray-600 bg-white">First Name</label>
                <input type="text" className="block w-full px-4 py-4 mt-2  placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="John"/>
            </div>
            <div className="relative">
                <label className="absolute px-2 ml-2 -mt-3 hyperlink text-gray-600 bg-white">Last Name</label>
                <input type="text" className="block w-full px-4 py-4 mt-2  placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="Doe"/>
            </div>
            <div className="relative">
                <label className="absolute px-2 ml-2 -mt-3 hyperlink text-gray-600 bg-white">Email Address</label>
                <input type="text" className="block w-full px-4 py-4 mt-2  placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="janedoe@email.com"/>
            </div>
            <div className="relative">
                <label className="absolute px-2 ml-2 -mt-3 hyperlink text-gray-600 bg-white">Company</label>
                <input type="text" className="block w-full px-4 py-4 mt-2  placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="Company Name"/>
            </div>
            <div className="relative">
                <label className="absolute px-2 ml-2 -mt-3 hyperlink text-gray-600 bg-white">Phone</label>
                <input type="number" className="block w-full px-4 py-4 mt-2  placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="Phone Number"/>
            </div>
            <div className="relative">
                <label className="absolute px-2 ml-2 -mt-3 hyperlink text-gray-600 bg-white">Country</label>
                <input type="text" className="block w-full px-4 py-4 mt-2  placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="Country"/>
            </div>
            <div className="relative">
            <span className="mr-4  text-gray-600 hyperlink">Partnership Type:</span>
            <label className="mr-4">
                <input className="mr-1" type="radio" name="department" value="1" checked=""/>
                <span className=" text-gray-600">VAR</span>
            </label>
            <label>
                <input className="mr-1" type="radio" name="department" value="2"/>
                <span className=" text-gray-600">ISV</span>
            </label>
            </div>
            </div>
            <div className="relative text-center mt-8">
            
                <Link href="" passHref>
                                            <a className="inline-block w-full px-5 py-4  button text-center text-white transition duration-200 bg-black 
                                            rounded-r-xl rounded-b-xl transition duration-200 hover:bg-gray-500 ease">Submit</a>
                                        </Link>
            </div>
            
            </div>
            
            </div>
            </Layout>
            </>
    )
}
export const getStaticProps = async () => {
    // data url from strapi
    let data={a:'ab'}
    
    return {
        props: {
            data:data
        }
    }
}