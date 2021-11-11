import Layout from "../component/Layout"
import Link from "next/link";
import { NextSeo } from 'next-seo';
import { BreadcrumbJsonLd } from 'next-seo';
import { LogoJsonLd } from 'next-seo';
import { SocialProfileJsonLd } from 'next-seo';
import { CorporateContactJsonLd } from 'next-seo';
export default function Contact ({data}) {
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
            <CorporateContactJsonLd
      url="http://www.your-company-site.com"
      logo="http://www.example.com/logo.png"
      contactPoint={[
        {
          telephone: '+1-401-555-1212',
          contactType: 'customer service',
          areaServed: 'US',
          availableLanguage: ['English', 'Spanish', 'French'],
        },
        {
          telephone: '+1-877-746-0909',
          contactType: 'customer service',
          contactOption: 'TollFree',
          availableLanguage: 'English',
        },
        {
          telephone: '+1-877-453-1304',
          contactType: 'technical support',
          contactOption: 'TollFree',
          areaServed: ['US', 'CA'],
          availableLanguage: ['English', 'French'],
        },
      ]}
    />
        <Layout>
            <section className="relative py-0 bg-white md:m-10 lg:py-10">
                <div className="flex flex-col items-center justify-between p-4 md:px-10 mx-auto max-w-7xl xl:px-5 lg:flex-row">
                    <div className="flex flex-col items-center w-full md:px-10 pt-5 pb-20 lg:pt-20 lg:flex-row">
                        <div className="relative w-full max-w-md bg-cover lg:max-w-2xl lg:w-7/12">
                            <div className="relative flex flex-col items-center justify-center w-full h-full lg:pr-10">
                                <div className="relative max-w-md">
                                    <div className="pb-16 mb-8 border-b border-gray-400">
                                    <h2 className="mt-10 mb-16   heading text-black">Have a Question?</h2>
                                    <div className="py-2 px-5 mb-4 bg-black rounded-lg">
                                        <div className="flex items-center">
                                        <span className="flex items-center justify-center w-12 h-12 mr-5 bg-black rounded-lg">
                                            <svg className="w-4 h-4" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.9347 13.3167C17.811 12.6058 17.2022 12.0401 16.4551 11.94L12.3077 11.3855C11.555 11.2832 10.8101 11.6825 10.4984 12.3528C10.4185 12.5237 10.3521 12.7014 10.2981 12.8848C9.13582 12.4 8.09277 11.7004 7.19375 10.8018C6.29473 9.90315 5.59374 8.86053 5.10992 7.6987C5.29332 7.64471 5.4711 7.57835 5.64213 7.4985C6.31274 7.18695 6.70993 6.44351 6.60866 5.69108L6.05394 1.54536C5.9538 0.797426 5.38784 0.188953 4.66434 0.0641091C4.40105 0.0202451 4.18164 0 3.97348 0C2.61201 0 1.32368 0.71982 0.612565 1.87716C-0.157059 3.13122 -0.0501675 4.73507 0.128736 5.9925C0.533802 8.84029 1.99766 11.7038 4.14451 13.8498C5.74002 15.4446 7.71246 16.6402 9.84693 17.306C10.9339 17.6457 12.2942 18 13.605 18C14.5851 18 15.537 17.802 16.3235 17.2498C17.3733 16.5109 18 15.3052 18 14.0196C18 13.8115 17.9797 13.5911 17.9347 13.3167Z" fill="white"></path>
                                            </svg>
                                        </span>
                                        <p className="subheading  text-white">+1 123456789</p>
                                        </div>
                                    </div>
                                    <div className="py-2 px-5 mb-4 bg-black rounded-lg">
                                        <div className="flex items-center">
                                        <span className="flex items-center justify-center w-12 h-12 mr-5 bg-black rounded-lg">
                                            <svg className="w-5 h-4" width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.8109 0H2.1878C0.981688 0 0 0.980499 0 2.18676V11.8119C0 13.0182 0.981688 14 2.1878 14H18.8122C20.0183 14 21 13.0182 21 11.8119V2.18676C20.9987 0.980499 20.017 0 18.8109 0ZM19.2492 4.73317L11.716 8.67092C11.3393 8.86387 10.9193 8.96887 10.4993 8.96887C10.0794 8.96887 9.66858 8.86387 9.28273 8.67092L1.74945 4.73317V2.75511L10.0872 7.11288C10.3405 7.24414 10.6555 7.24414 10.9101 7.11288L19.2479 2.75511V4.73317H19.2492Z" fill="white"></path>
                                            </svg>
                                        </span>
                                        <p className="  text-white">support@ktern.com</p>
                                        </div>
                                    </div>
                                    <div className="py-2 px-5 mb-4 bg-black rounded-lg">
                                        <div className="flex items-center">
                                        <span className="flex items-center justify-center w-12 h-12 mr-5 bg-black rounded-lg">
                                            <svg className="w-5 h-5" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.5 11C16.0185 11 14 13.0962 14 15.6729C14 19.2285 17.8951 22.6871 18.0612 22.8339C18.3123 23.0554 18.6877 23.0554 18.9388 22.8339C19.1049 22.6885 23 19.2298 23 15.6729C23 13.0962 20.9815 11 18.5 11ZM18.5 17.4618C17.5077 17.4618 16.7003 16.6338 16.7003 15.6161C16.7003 14.5985 17.5077 13.7705 18.5 13.7705C19.4923 13.7705 20.2997 14.5985 20.2997 15.6161C20.2997 16.6338 19.4923 17.4618 18.5 17.4618Z" fill="white"></path>
                                            <path d="M9.01758 0C4.04824 0 0 4.04035 0 9C0 13.9597 4.04824 18 9.01758 18C9.90081 18 10.7583 17.8745 11.5604 17.6315C10.1794 14.5374 10.8571 11.7539 12.7236 9.9193C12.6912 9.9193 12.2597 9.73436 12.2272 9.72086C8.69567 8.37903 5.3927 12.6232 8.35888 16.156C6.02299 15.94 4.00361 14.6171 2.84987 12.7096C4.09829 12.4153 5.00721 11.3057 5.02344 9.9922C5.04373 9.16199 5.60505 8.59232 6.30433 8.43573C9.41794 7.77021 9.7128 3.90535 8.51307 1.83051C9.34355 1.78461 10.0442 1.80756 11.0383 2.10049C10.7881 4.61407 12.1501 7.66087 15.1596 7.37468L16.0158 7.27614C16.0875 7.57312 16.1335 7.87011 16.1605 8.18464C16.7272 8.08745 17.4468 8.06855 18 8.17519C17.5739 3.60027 13.7056 0 9.01758 0Z" fill="white"></path>
                                            </svg>
                                        </span>
                                        <p className=" subheading text-white">Texas, United States</p>
                                        </div>
                                    </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
            
                        {/* <div className="relative z-10 w-full max-w-2xl mt-20 lg:mt-0 lg:w-5/12">
                            <div className="relative z-10 flex flex-col items-start justify-start p-4 md:p-10 bg-white md:shadow-2xl rounded-xl">
                                <h4 className="w-full card-heading  text-4xl  leading-snug">Contact us</h4>
                                <div className="relative w-full mt-6 space-y-8">
                                    <div className="relative">
                                        <label className="absolute px-2 ml-2 -mt-3 card-subheading text-black bg-white">First Name</label>
                                        <input type="text" className="block w-full px-4 py-4 mt-2  placeholder-gray-400 bg-white border-2 border-gray-400 rounded-md focus:outline-none focus:border-black" placeholder="John"/>
                                    </div>
                                    <div className="relative">
                                        <label className="absolute px-2 ml-2 card-subheading -mt-3  text-black bg-white">Last Name</label>
                                        <input type="text" className="block w-full px-4 py-4 mt-2  placeholder-gray-400 bg-white border-2 border-gray-400 rounded-md focus:outline-none focus:border-black" placeholder="Doe"/>
                                    </div>
                                    <div className="relative">
                                        <label className="absolute px-2 ml-2 -mt-3 card-subheading text-black bg-white">Email Address</label>
                                        <input type="text" className="block w-full px-4 py-4 mt-2  placeholder-gray-400 bg-white border-2 border-gray-400 rounded-md focus:outline-none focus:border-black" placeholder="janedoe@email.com"/>
                                    </div>
                                    <div className="relative">
                                        <label className="absolute px-2 ml-2 -mt-3 card-subheading text-black bg-white">Phone</label>
                                        <input type="number" className="block w-full px-4 py-4 mt-2  placeholder-gray-400 bg-white border-2 border-gray-400 rounded-md focus:outline-none focus:border-black" placeholder="Phone Number"/>
                                    </div>
                                    <div className="relative">
                                        <Link href="" passHref>
                                            <a className="inline-block w-full button px-5 py-4 uppercase hyperlink text-center text-white transition duration-200 bg-black 
                                            rounded-r-xl rounded-b-xl transition duration-200 hover:bg-gray-500 ease">Submit</a>
                                        </Link>
                                    </div>            
                                </div>
            
                            </div>
                            <svg className="hidden md:block absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-gray-50 fill-current" viewBox="0 0 91 91" xmlns="http://www.w3.org/2000/svg"><g stroke="none" strokeWidth="1" fillRule="evenodd"><g fillRule="nonzero"><g><g><circle cx="3.261" cy="3.445" r="2.72"></circle><circle cx="15.296" cy="3.445" r="2.719"></circle><circle cx="27.333" cy="3.445" r="2.72"></circle><circle cx="39.369" cy="3.445" r="2.72"></circle><circle cx="51.405" cy="3.445" r="2.72"></circle><circle cx="63.441" cy="3.445" r="2.72"></circle><circle cx="75.479" cy="3.445" r="2.72"></circle><circle cx="87.514" cy="3.445" r="2.719"></circle></g><g transform="translate(0 12)"><circle cx="3.261" cy="3.525" r="2.72"></circle><circle cx="15.296" cy="3.525" r="2.719"></circle><circle cx="27.333" cy="3.525" r="2.72"></circle><circle cx="39.369" cy="3.525" r="2.72"></circle><circle cx="51.405" cy="3.525" r="2.72"></circle><circle cx="63.441" cy="3.525" r="2.72"></circle><circle cx="75.479" cy="3.525" r="2.72"></circle><circle cx="87.514" cy="3.525" r="2.719"></circle></g><g transform="translate(0 24)"><circle cx="3.261" cy="3.605" r="2.72"></circle><circle cx="15.296" cy="3.605" r="2.719"></circle><circle cx="27.333" cy="3.605" r="2.72"></circle><circle cx="39.369" cy="3.605" r="2.72"></circle><circle cx="51.405" cy="3.605" r="2.72"></circle><circle cx="63.441" cy="3.605" r="2.72"></circle><circle cx="75.479" cy="3.605" r="2.72"></circle><circle cx="87.514" cy="3.605" r="2.719"></circle></g><g transform="translate(0 36)"><circle cx="3.261" cy="3.686" r="2.72"></circle><circle cx="15.296" cy="3.686" r="2.719"></circle><circle cx="27.333" cy="3.686" r="2.72"></circle><circle cx="39.369" cy="3.686" r="2.72"></circle><circle cx="51.405" cy="3.686" r="2.72"></circle><circle cx="63.441" cy="3.686" r="2.72"></circle><circle cx="75.479" cy="3.686" r="2.72"></circle><circle cx="87.514" cy="3.686" r="2.719"></circle></g><g transform="translate(0 49)"><circle cx="3.261" cy="2.767" r="2.72"></circle><circle cx="15.296" cy="2.767" r="2.719"></circle><circle cx="27.333" cy="2.767" r="2.72"></circle><circle cx="39.369" cy="2.767" r="2.72"></circle><circle cx="51.405" cy="2.767" r="2.72"></circle><circle cx="63.441" cy="2.767" r="2.72"></circle><circle cx="75.479" cy="2.767" r="2.72"></circle><circle cx="87.514" cy="2.767" r="2.719"></circle></g><g transform="translate(0 61)"><circle cx="3.261" cy="2.846" r="2.72"></circle><circle cx="15.296" cy="2.846" r="2.719"></circle><circle cx="27.333" cy="2.846" r="2.72"></circle><circle cx="39.369" cy="2.846" r="2.72"></circle><circle cx="51.405" cy="2.846" r="2.72"></circle><circle cx="63.441" cy="2.846" r="2.72"></circle><circle cx="75.479" cy="2.846" r="2.72"></circle><circle cx="87.514" cy="2.846" r="2.719"></circle></g><g transform="translate(0 73)"><circle cx="3.261" cy="2.926" r="2.72"></circle><circle cx="15.296" cy="2.926" r="2.719"></circle><circle cx="27.333" cy="2.926" r="2.72"></circle><circle cx="39.369" cy="2.926" r="2.72"></circle><circle cx="51.405" cy="2.926" r="2.72"></circle><circle cx="63.441" cy="2.926" r="2.72"></circle><circle cx="75.479" cy="2.926" r="2.72"></circle><circle cx="87.514" cy="2.926" r="2.719"></circle></g><g transform="translate(0 85)"><circle cx="3.261" cy="3.006" r="2.72"></circle><circle cx="15.296" cy="3.006" r="2.719"></circle><circle cx="27.333" cy="3.006" r="2.72"></circle><circle cx="39.369" cy="3.006" r="2.72"></circle><circle cx="51.405" cy="3.006" r="2.72"></circle><circle cx="63.441" cy="3.006" r="2.72"></circle><circle cx="75.479" cy="3.006" r="2.72"></circle><circle cx="87.514" cy="3.006" r="2.719"></circle></g></g></g></g></svg>
                            <svg className="absolute hidden md:block bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-gray-50 fill-current" viewBox="0 0 91 91" xmlns="http://www.w3.org/2000/svg"><g stroke="none" strokeWidth="1" fillRule="evenodd"><g fillRule="nonzero"><g><g><circle cx="3.261" cy="3.445" r="2.72"></circle><circle cx="15.296" cy="3.445" r="2.719"></circle><circle cx="27.333" cy="3.445" r="2.72"></circle><circle cx="39.369" cy="3.445" r="2.72"></circle><circle cx="51.405" cy="3.445" r="2.72"></circle><circle cx="63.441" cy="3.445" r="2.72"></circle><circle cx="75.479" cy="3.445" r="2.72"></circle><circle cx="87.514" cy="3.445" r="2.719"></circle></g><g transform="translate(0 12)"><circle cx="3.261" cy="3.525" r="2.72"></circle><circle cx="15.296" cy="3.525" r="2.719"></circle><circle cx="27.333" cy="3.525" r="2.72"></circle><circle cx="39.369" cy="3.525" r="2.72"></circle><circle cx="51.405" cy="3.525" r="2.72"></circle><circle cx="63.441" cy="3.525" r="2.72"></circle><circle cx="75.479" cy="3.525" r="2.72"></circle><circle cx="87.514" cy="3.525" r="2.719"></circle></g><g transform="translate(0 24)"><circle cx="3.261" cy="3.605" r="2.72"></circle><circle cx="15.296" cy="3.605" r="2.719"></circle><circle cx="27.333" cy="3.605" r="2.72"></circle><circle cx="39.369" cy="3.605" r="2.72"></circle><circle cx="51.405" cy="3.605" r="2.72"></circle><circle cx="63.441" cy="3.605" r="2.72"></circle><circle cx="75.479" cy="3.605" r="2.72"></circle><circle cx="87.514" cy="3.605" r="2.719"></circle></g><g transform="translate(0 36)"><circle cx="3.261" cy="3.686" r="2.72"></circle><circle cx="15.296" cy="3.686" r="2.719"></circle><circle cx="27.333" cy="3.686" r="2.72"></circle><circle cx="39.369" cy="3.686" r="2.72"></circle><circle cx="51.405" cy="3.686" r="2.72"></circle><circle cx="63.441" cy="3.686" r="2.72"></circle><circle cx="75.479" cy="3.686" r="2.72"></circle><circle cx="87.514" cy="3.686" r="2.719"></circle></g><g transform="translate(0 49)"><circle cx="3.261" cy="2.767" r="2.72"></circle><circle cx="15.296" cy="2.767" r="2.719"></circle><circle cx="27.333" cy="2.767" r="2.72"></circle><circle cx="39.369" cy="2.767" r="2.72"></circle><circle cx="51.405" cy="2.767" r="2.72"></circle><circle cx="63.441" cy="2.767" r="2.72"></circle><circle cx="75.479" cy="2.767" r="2.72"></circle><circle cx="87.514" cy="2.767" r="2.719"></circle></g><g transform="translate(0 61)"><circle cx="3.261" cy="2.846" r="2.72"></circle><circle cx="15.296" cy="2.846" r="2.719"></circle><circle cx="27.333" cy="2.846" r="2.72"></circle><circle cx="39.369" cy="2.846" r="2.72"></circle><circle cx="51.405" cy="2.846" r="2.72"></circle><circle cx="63.441" cy="2.846" r="2.72"></circle><circle cx="75.479" cy="2.846" r="2.72"></circle><circle cx="87.514" cy="2.846" r="2.719"></circle></g><g transform="translate(0 73)"><circle cx="3.261" cy="2.926" r="2.72"></circle><circle cx="15.296" cy="2.926" r="2.719"></circle><circle cx="27.333" cy="2.926" r="2.72"></circle><circle cx="39.369" cy="2.926" r="2.72"></circle><circle cx="51.405" cy="2.926" r="2.72"></circle><circle cx="63.441" cy="2.926" r="2.72"></circle><circle cx="75.479" cy="2.926" r="2.72"></circle><circle cx="87.514" cy="2.926" r="2.719"></circle></g><g transform="translate(0 85)"><circle cx="3.261" cy="3.006" r="2.72"></circle><circle cx="15.296" cy="3.006" r="2.719"></circle><circle cx="27.333" cy="3.006" r="2.72"></circle><circle cx="39.369" cy="3.006" r="2.72"></circle><circle cx="51.405" cy="3.006" r="2.72"></circle><circle cx="63.441" cy="3.006" r="2.72"></circle><circle cx="75.479" cy="3.006" r="2.72"></circle><circle cx="87.514" cy="3.006" r="2.719"></circle></g></g></g></g></svg>
                        </div> */}
                           <iframe width='1010px' height='1040px' src='https://crm.zoho.in/crm/WebFormServeServlet?rid=d282bac1d91514c46c75683473f967a1a3b4bb6d9aad4d5291e64a29ca618cd0giddb887390625950606c3528f7d8a1164e437cac61a532b2d3cf089f26bcebb04c'/>
                </div>
    
        </div>
            </section>
            </Layout>
            </>
    )
}
export const getServerSideProps = async () => {
    // data url from strapi
    let data={a:'ab'}
    
    return {
        props: {
            data:data
        }
    }
}