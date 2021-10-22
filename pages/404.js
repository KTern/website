import Image from "next/image";
import Link from "next/link";
import { NextSeo } from 'next-seo';
import { BreadcrumbJsonLd } from 'next-seo';
import { LogoJsonLd } from 'next-seo';
import { SocialProfileJsonLd } from 'next-seo';

export default function Error () {
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
        <section className="relative py-10 2xl:py-20 bg-black overflow-hidden h-screen">
          <div className="absolute top-0 right-0 -mr-60 md:-mt-112 "><Image src="/404/circle.svg" alt="" width={500} height={400}/></div>
          <div className="hidden lg:block absolute top-0 right-0 h-40 lg:h-80 lg:mr-44 lg:mt-24"><Image  src="/404/five-stars.svg" alt="" width={400} height={300}/></div>
          <div className="hidden lg:block absolute top-0 left-0 h-64 -ml-10"><Image  src="/404/blue-double-circle.svg" alt="" width={400} height={300}/></div>
          <div className="absolute bottom-0 left-0 h-80"><Image  src="/404/half-double-circle.svg" alt="" width={400} height={300}/></div>
          <div className="relative mt-10  px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <Link  href="/about-company" passHref>
              <a className="inline-block text-white text-xl font-bold">
              <Image  src="/404/kternlogo.png" width={140} height={50} alt="" />
              </a>
            </Link>
            <div className="mx-40 "><Image   src="/404/error-404.svg" alt="" width={400} height={300}/></div>
            <div className="max-w-md mx-auto text-center ">
            <h2 className="mb-4 text-2xl text-white font-bold font-heading ">Sorry, we can&apos;t find that page or something has gone wrong...</h2>
            <Link  href="/"><a className="  inline-block py-3 px-10  bg-white hover:bg-gray-50 hover:text-black shadow text-lg text-black font-bold rounded-r-xl rounded-b-xl transition duration-200 custom-card-subheading">Return to Home</a></Link>
            </div>
          </div>
        </div>
      </section>
      </>
    )
}