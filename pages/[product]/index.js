import Layout from "../../component/Layout";
import Carousel from "react-multi-carousel";
import { NextSeo } from "next-seo";
import { BreadcrumbJsonLd } from "next-seo";
import { LogoJsonLd } from "next-seo";
import { SocialProfileJsonLd } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import { ProductJsonLd } from "next-seo";
import { VideoJsonLd } from "next-seo";

import { SoftwareAppJsonLd } from "next-seo";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const responsive_2 = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function next(id, last) {
  let elem = document.getElementById(id);
  const styles = window.getComputedStyle(elem);
  const amount = styles.getPropertyValue("--amount");
  const gapV = styles.getPropertyValue("--gap-v");
  const gapM = amount * gapV;
  const tokElem = document.getElementById(token);
  const tokStyles = window.getComputedStyle(tokElem);
  const iWidth = parseFloat(tokStyles.width);
  document.getElementById(id).scrollBy({ left: iWidth * amount + gapM, behavior: "smooth" });
}

function prev(id, last) {
  let elem = document.getElementById(id);
  const styles = window.getComputedStyle(elem);
  const amount = styles.getPropertyValue("--amount");
  const gapV = styles.getPropertyValue("--gap-v");
  const gapM = amount * gapV;
  const tokElem = document.getElementById(token);
  const tokStyles = window.getComputedStyle(tokElem);
  const iWidth = parseFloat(tokStyles.width);
  document.getElementById(id).scrollBy({ left: -(iWidth * amount + gapM), behavior: "smooth" });
}
export default function DigitalStream({stream_data,h_data,f_data}) {
  return (
    <>
      <NextSeo
        title={stream_data.PageSEO.PageTitle}
        description={stream_data.PageSEO.PageDescription}
        canonical='https://www.canonical.ie/'
        openGraph={{
          url: "https://www.url.ie/a",
          title: "Open Graph Title",
          description: "Open Graph Description",
          images: [
            {
              url: "https://www.example.ie/og-image-01.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
            {
              url: "https://www.example.ie/og-image-02.jpg",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
              type: "image/jpeg",
            },
            { url: "https://www.example.ie/og-image-03.jpg" },
            { url: "https://www.example.ie/og-image-04.jpg" },
          ],
          site_name: "SiteName",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
        facebook={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
          appId: "1234567890",
        }}
        languageAlternates={[
          {
            hrefLang: "de",
            href: "https://www.canonical.ie/de",
          },
        ]}
        additionalMetaTags={[
          {
            property: "dc:creator",
            content: "Jane Doe",
          },
          {
            name: "application-name",
            content: "NextSeo",
          },
          {
            httpEquiv: "x-ua-compatible",
            content: "IE=edge; chrome=1",
          },
        ]}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "https://www.test.ie/favicon.ico",
          },
          {
            rel: "apple-touch-icon",
            href: "https://www.test.ie/touch-icon-ipad.jpg",
            sizes: "76x76",
          },
          {
            rel: "manifest",
            href: "/manifest.json",
          },
        ]}
      />
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: "Books",
            item: "https://example.com/books",
          },
          {
            position: 2,
            name: "Authors",
            item: "https://example.com/books/authors",
          },
          {
            position: 3,
            name: "Ann Leckie",
            item: "https://example.com/books/authors/annleckie",
          },
          {
            position: 4,
            name: "Ancillary Justice",
            item: "https://example.com/books/authors/ancillaryjustice",
          },
        ]}
      />
      <LogoJsonLd logo='http://www.your-site.com/images/logo.jpg' url='http://www.your-site.com' />
      <SocialProfileJsonLd
        type='Person'
        name='your name'
        url='http://www.your-site.com'
        sameAs={[
          "http://www.facebook.com/your-profile",
          "http://instagram.com/yourProfile",
          "http://www.linkedin.com/in/yourprofile",
          "http://plus.google.com/your_profile",
        ]}
      />
      <ProductJsonLd
        productName='Executive Anvil'
        images={[
          "https://example.com/photos/1x1/photo.jpg",
          "https://example.com/photos/4x3/photo.jpg",
          "https://example.com/photos/16x9/photo.jpg",
        ]}
        description="Sleeker than ACME's Classic Anvil, the Executive Anvil is perfect for the business traveler looking for something to drop from a height."
        brand='ACME'
        color='blue'
        manufacturerName='Gary Meehan'
        manufacturerLogo='https://www.example.com/photos/logo.jpg'
        material='steel'
        slogan='For the business traveller looking for something to drop from a height.'
        disambiguatingDescription='Executive Anvil, perfect for the business traveller.'
        releaseDate='2014-02-05T08:00:00+08:00'
        productionDate='2015-02-05T08:00:00+08:00'
        purchaseDate='2015-02-06T08:00:00+08:00'
        award='Best Executive Anvil Award.'
        reviews={[
          {
            author: {
              type: "Person",
              name: "Jim",
            },
            datePublished: "2017-01-06T03:37:40Z",
            reviewBody: "This is my favorite product yet! Thanks Nate for the example products and reviews.",
            name: "So awesome!!!",
            reviewRating: {
              bestRating: "5",
              ratingValue: "5",
              worstRating: "1",
            },
            publisher: {
              type: "Organization",
              name: "TwoVit",
            },
          },
        ]}
        aggregateRating={{
          ratingValue: "4.4",
          reviewCount: "89",
        }}
        offers={[
          {
            price: "119.99",
            priceCurrency: "USD",
            priceValidUntil: "2020-11-05",
            itemCondition: "https://schema.org/UsedCondition",
            availability: "https://schema.org/InStock",
            url: "https://www.example.com/executive-anvil",
            seller: {
              name: "Executive Objects",
            },
          },
          {
            price: "139.99",
            priceCurrency: "CAD",
            priceValidUntil: "2020-09-05",
            itemCondition: "https://schema.org/UsedCondition",
            availability: "https://schema.org/InStock",
            url: "https://www.example.ca/executive-anvil",
            seller: {
              name: "Executive Objects",
            },
          },
        ]}
        mpn='925872'
      />
      <VideoJsonLd
        name='How to make a Party Coffee Cake'
        description='This is how you make a Party Coffee Cake.'
        contentUrl='http://www.example.com/video123.mp4'
        embedUrl='http://www.example.com/videoplayer?video=123'
        uploadDate='2018-02-05T08:00:00+08:00'
        duration='PT1M33S'
        thumbnailUrls={[
          "https://example.com/photos/1x1/photo.jpg",
          "https://example.com/photos/4x3/photo.jpg",
          "https://example.com/photos/16x9/photo.jpg",
        ]}
        expires='2019-02-05T08:00:00+08:00'
        hasPart={{
          name: "Preheat oven",
          startOffset: 30,
          url: "http://www.example.com/example?t=30",
        }}
        watchCount={2347}
        publication={{
          isLiveBroadcast: true,
          startDate: "2020-10-24T14:00:00+00:00",
          endDate: "2020-10-24T14:37:14+00:00",
        }}
        regionsAllowed={["IT", "NL"]}
      />
      <SoftwareAppJsonLd
        name='Angry Birds'
        price='1.00'
        priceCurrency='USD'
        aggregateRating={{ ratingValue: "4.6", reviewCount: "8864" }}
        operatingSystem='ANDROID'
        applicationCategory='GameApplication'
      />
      <Layout h_data={h_data} f_data={f_data}>
        {/* Hero Section */}
        <section className='relative md:py-10 pb-auto pb-72'>
          <div className='hidden lg:block absolute inset-0 w-full relative'>
            <Image src='/atis-assets/background/lines.svg' alt='' layout='fill' />
          </div>

          <div
            className={`relative pt-12 md:pt-16 pb-40  bg-${stream_data.cssstreamtag}-secondary border-b-4 border-${stream_data.cssstreamtag}-primary`}
          >
            <div className='relative container mx-auto px-4'>
              <div className='max-w-2xl mx-auto text-center mb-12 md:mb-20'>
                <h2 className='mb-3   heading'>{stream_data.pageHeader.header}</h2>
                <span className='mb-3  text-black subheading'>{stream_data.pageHeader.subHeading}</span>
                <div>
                  <br />
                  <Link href={stream_data.pageHeader.primaryCTA.linkURL} passHref>
                    <a
                      className={`hidden  lg:inline-block py-3 px-10 bg-${stream_data.cssstreamtag}-primary hover:bg-gray-100 hover:text-black shadow text-white  rounded-r-xl rounded-b-xl transition duration-200 uppercase hyperlink button`}
                    >
                      {stream_data.pageHeader.primaryCTA.buttonTitle}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className={`absolute inset-x-0  max-w-2xl mx-auto px-4 bg-${stream_data.cssstreamtag}-secondary shadow-2xl rounded-2xl `}
            >
              <div className='rounded-3xl md:rounded-6xl md:rounded-tl-none h-80 w-100 relative'>
                <Image
                  className={`rounded-3xl bg-${stream_data.cssstreamtag}-secondary md:rounded-6xl`}
                  layout='fill'
                  src={stream_data.VideoURL}
                  alt=''
                />
              </div>
              <div className='absolute inset-0 flex items-center justify-center '>
                {/* <Link href='/video' passHref>
                  <a className='flex items-center justify-center hover:bg-black rounded-full bg-white animate-pulse'>
                    <svg
                      className={`w-16 h-16 hover:text-${stream_data.cssstreamtag}-secondary text-${stream_data.cssstreamtag}-primary  transition duration-200`}
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </a>
                </Link> */}
              </div>
            </div>
          </div>
        </section>
        {/* /Hero Section */}
        {/* <!-- Customer logos Section --> */}
        <div className='px-4 py-40'>
          <div className='container px-4 mx-auto'>
            <h2 className=' text-center  text-gray-500 section-heading sm:sm-section-heading'>
              {stream_data.LogoHeading}
            </h2>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. ab repudiandae et.</p> */}
          </div>
          <Carousel className='bots flex p-10  z-10' responsive={responsive_2}>
            {stream_data.Logos.map((data) => (
              <div key='data' className='p-3 bots-card flex-row'>
                <Image
                  className=' w-auto lg:w-100'
                  src={data.logoUrl}
                  alt=''
                  width={data.width}
                  height={data.height}
                  layout=''
                />
              </div>
            ))}
          </Carousel>
        </div>
        {/* <!-- /Customer logos Section --> */}
        {/* Streams Content Section */}
        <section className='px-5 pb-10 relative overflow-hidden '>
          {/* <Image className="hidden lg:block absolute inset-0 w-full" src="/atis-assets/background/lines.svg" alt=""/> */}

          {stream_data.FeaturesSection.map((dt, index) => {
            return index % 2 == 0 ? (
              <div key='dt' className='relative pt-20 rounded-t-3xl pb-12 lg:pb-24'>
                <div className='w-full md:container mx-auto px-4'>
                  <div className='flex flex-wrap -mx-4'>
                    <div className='hidden sm:block w-full lg:w-1/2 px-4 flex items-center justify-center'>
                      <div className='relative' style={{ zIndex: 0 }}>
                        <div className='h-128 w-full relative'>
                          <Image
                            className='rounded-3xl md:rounded-tl-none bg-gray-100'
                            width={500}
                            height={400}
                            src={dt.imageurl}
                            alt=''
                          />
                        </div>
                        <div
                          className='animate-pulse hidden md:block absolute w-60 h-40'
                          style={{ top: "-2rem", right: "3rem", zIndex: -1 }}
                        >
                          <svg
                            width='98'
                            height='98'
                            viewBox='0 0 98 98'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M0 49V0H49H50L49.99 0.00980377C76.595 0.537064 98 22.2688 98 49C98 76.062 76.062 98 49 98C21.938 98 0 76.062 0 49Z'
                              fill={dt.topwing}
                            />
                          </svg>
                        </div>
                        <div
                          className='animate-pulse hidden md:block absolute w-60 h-40'
                          style={{ bottom: "-2rem", right: "-2rem", zIndex: -1 }}
                        >
                          <svg
                            width='166'
                            height='165'
                            viewBox='0 0 166 165'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M82.9727 164.999C82.8152 165 82.6577 165 82.5 165C36.9365 165 0 128.063 0 82.5C0 36.9365 36.9365 0 82.5 0C128.063 0 165 36.9365 165 82.5C165 83.2975 164.989 84.0924 164.966 84.8844L165.21 165H82.9714L82.9727 164.999Z'
                              fill={dt.bottomwing}
                            />
                          </svg>
                        </div>
                        <div
                          className='animate-pulse hidden md:block absolute w-60 h-40'
                          style={{ bottom: "2.5rem", right: "-4.5rem", zIndex: -1 }}
                        >
                          <Image layout='fill' src='/atis-assets/elements/bullets-gray-left.svg' alt='' />
                        </div>
                        <div
                          className='animate-pulse hidden md:block absolute w-60 h-40'
                          style={{ top: "3rem", left: "-8rem", zIndex: -1 }}
                        >
                          <Image layout='fill' src='/atis-assets/elements/bullets-gray-right.svg' alt='' />
                        </div>
                      </div>
                    </div>

                    <div className='w-full lg:w-1/2 md:px-20 lg:mb-12 lg:mb-20 lg:mb-0 flex items-center'>
                      <div className='w-full text-center lg:text-left'>
                        <div className='max-w-md mx-auto lg:mx-0'>
                          <h2 className='mb-3 card-heading'>
                            <span className='card-heading'>{dt.Title} </span>
                          </h2>
                        </div>
                        <div className='max-w-sm mx-auto lg:mx-0'>
                          <p className='mb-6 text-black  card-subheading'>{dt.Description}</p>
                          <Link href={dt.CTAUrl} passHref>
                            <a className='inline-flex items-center pb-1  text-black hover:border-blue-500 group '>
                              <span className='hyperlink group-hover:text-gray-400'>{dt.CTAText}</span>
                              <svg
                                className='w-5 h-6 mt-1 ml-2 group-hover:text-gray-400'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  strokeWidth='2'
                                  d='M17 8l4 4m0 0l-4 4m4-4H3'
                                ></path>
                              </svg>
                            </a>
                          </Link>
                          <div className='my-12'></div>
                        </div>
                      </div>
                    </div>
                    <div className='invisible lg:visible w-full lg:w-1/2 px-4 flex items-center justify-center'>
                      <div className='absolute mr-4' style={{ zIndex: 0 }}>
                        <div>
                          <Image
                            width={500}
                            height={400}
                            className='rounded-3xl md:rounded-tl-none bg-gray-100'
                            src={`/product/${stream_data.cssstreamtag}/${stream_data.cssstreamtag}_2.svg`}
                            alt=''
                          />
                        </div>
                        <div
                          className='animate-pulse hidden md:block absolute w-60 h-40'
                          style={{ top: "-2rem", right: "3rem", zIndex: -1 }}
                        >
                          <svg
                            width='98'
                            height='98'
                            viewBox='0 0 98 98'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M0 49V0H49H50L49.99 0.00980377C76.595 0.537064 98 22.2688 98 49C98 76.062 76.062 98 49 98C21.938 98 0 76.062 0 49Z'
                              fill='#F28900'
                            />
                          </svg>
                        </div>
                        <div
                          className='animate-pulse hidden md:block absolute w-60 h-40'
                          style={{ bottom: "-2rem", right: "-2rem", zIndex: -1 }}
                        >
                          <svg
                            width='166'
                            height='165'
                            viewBox='0 0 166 165'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M82.9727 164.999C82.8152 165 82.6577 165 82.5 165C36.9365 165 0 128.063 0 82.5C0 36.9365 36.9365 0 82.5 0C128.063 0 165 36.9365 165 82.5C165 83.2975 164.989 84.0924 164.966 84.8844L165.21 165H82.9714L82.9727 164.999Z'
                              fill='#FF9970'
                            />
                          </svg>
                        </div>
                        <div
                          className='animate-pulse hidden md:block absolute w-60 h-40'
                          style={{ bottom: "2.5rem", right: "-4.5rem", zIndex: -1 }}
                        >
                          <Image layout='fill' src='/atis-assets/elements/bullets-gray-left.svg' alt='' />
                        </div>
                        <div
                          className='animate-pulse hidden md:block absolute w-60 h-40'
                          style={{ top: "3rem", left: "-8rem", zIndex: -1 }}
                        >
                          <Image layout='fill' src='/atis-assets/elements/bullets-gray-right.svg' alt='' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              index % 2 != 0 && (
                <div key='dt' className='relative pt-2  lg:pb-24 pb-12 lg:pb-24'>
                  <div className='container mx-auto px-20'>
                    <div className='flex flex-wrap -mx-20'>
                      <div className='w-full lg:w-1/2 px-4 flex items-center justify-center'>
                        <div className='relative' style={{ zIndex: 0 }}>
                          <div className='h-128 w-full relative'>
                            <Image
                              className='rounded-3xl md:rounded-tl-none bg-gray-100'
                              width={500}
                              height={400}
                              src={dt.imageurl}
                              alt=''
                            />
                          </div>
                          <div
                            className='animate-pulse hidden md:block absolute w-60 h-40'
                            style={{ top: "-2rem", right: "3rem", zIndex: -1 }}
                          >
                            <svg
                              width='98'
                              height='98'
                              viewBox='0 0 98 98'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M0 49V0H49H50L49.99 0.00980377C76.595 0.537064 98 22.2688 98 49C98 76.062 76.062 98 49 98C21.938 98 0 76.062 0 49Z'
                                fill={dt.topwing}
                              />
                            </svg>
                          </div>
                          <div
                            className='animate-pulse hidden md:block absolute w-60 h-40'
                            style={{ bottom: "-2rem", right: "-2rem", zIndex: -1 }}
                          >
                            <svg
                              width='166'
                              height='165'
                              viewBox='0 0 166 165'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M82.9727 164.999C82.8152 165 82.6577 165 82.5 165C36.9365 165 0 128.063 0 82.5C0 36.9365 36.9365 0 82.5 0C128.063 0 165 36.9365 165 82.5C165 83.2975 164.989 84.0924 164.966 84.8844L165.21 165H82.9714L82.9727 164.999Z'
                                fill={dt.bottomwing}
                              />
                            </svg>
                          </div>
                          <div
                            className='animate-pulse hidden md:block absolute w-60 h-40'
                            style={{ bottom: "2.5rem", right: "-4.5rem", zIndex: -1 }}
                          >
                            <Image layout='fill' src='/atis-assets/elements/bullets-gray-left.svg' alt='' />
                          </div>
                          <div
                            className='animate-pulse hidden md:block absolute w-60 h-40'
                            style={{ top: "3rem", left: "-8rem", zIndex: -1 }}
                          >
                            <Image layout='fill' src='/atis-assets/elements/bullets-gray-right.svg' alt='' />
                          </div>
                        </div>
                      </div>
                      <div className='w-full lg:w-1/2 md:px-20  lg:mb-20 lg:mb-0 flex items-center'>
                        <div className='w-full text-center lg:text-left'>
                          <div className='max-w-md mx-auto lg:mx-0'>
                            <h2 className='mb-3  card-heading'>
                              <span className='card-heading'>{dt.Title}</span>
                            </h2>
                          </div>
                          <div className='max-w-sm mx-auto lg:mx-0'>
                            <p className='mb-6 text-black  card-subheading'>{dt.Description}</p>
                            <Link href={dt.CTAUrl} passHref>
                              <a className='inline-flex items-center pb-1  text-black hover:border-blue-500 group '>
                                <span className='hyperlink group-hover:text-gray-400'>{dt.CTAText}</span>
                                <svg
                                  className='w-5 h-6 mt-1 ml-2 group-hover:text-gray-400'
                                  fill='none'
                                  stroke='currentColor'
                                  viewBox='0 0 24 24'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M17 8l4 4m0 0l-4 4m4-4H3'
                                  ></path>
                                </svg>
                              </a>
                            </Link>
                            <div className='my-12'></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            );
          })}
        </section>
        {/*/ Streams Content Section */}
        {/* Bots Section */}
        <div className='md:px-20 py-10'>
          <div className='px-20'>
            <h2 className='section-heading text-center mb-4'>{stream_data.BotsSectionHeading}</h2>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. ab repudiandae et.</p> */}
          </div>
          <Carousel className='bots flex p-10  ' responsive={responsive}>
            {stream_data.BotCards.map((dt) => (
              <div key="dt"
                className={`p-3 bots-card flex-row justify-center items-center shadow-xl  border-2 border-${stream_data.cssstreamtag}-400 text-center `}
              >
                <p className='text-lg font-bold mt-7 mb-4'>{dt.CardTitle}</p>
                <p className='text-md'>{dt.CardDescription}</p>
              </div>
            ))}
          </Carousel>
        </div>
        {/* /Bots Section */}
        {/* Testimonial Section */}
        <section className='sm:px-4 relative py-10 md:py-15 bg-black overflow-x-hidden'>
          {/* <Image width="10%" height="10%" className="absolute h-24 md:h-auto top-0 left-0 right-0" src="/atis-assets/elements/line-top.svg" alt=""/> */}

          <h2 className='mb-10 lg:mb-10   section-heading text-center  text-white  '>
            {stream_data.TestimonialSectionHeading}
          </h2>
          <div className='flex flex-wrap lg:flex-nowrap justify-center'>
            <div className='hidden lg:block  opacity-50 flex-shrink-0 w-full max-w-md px-3'></div>

            {stream_data.TestimonialSection.map((dt, index) => {
              return index % 2 == 0 ? (
                <div key='dt' className='flex-shrink-0  w-full lg:max-w-md px-3 lg:mt-20 mb-6 lg:mb-0'>
                  <div className='px-6 py-12 bg-black   border border-white'>
                    <div className='relative px-4 mx-auto'>
                      <div className='absolute top-0 left-0'>
                        <Image width='10%' height='10%' src='/atis-assets/elements/quote-grey.svg' alt='' />
                      </div>
                      <div className='absolute top-0 right-0'>
                        <Image width='10%' height='10%' src='/atis-assets/elements/quote-grey.svg' alt='' />
                      </div>
                      <div className='px-4 md:px-10'>
                        <h3 className='mb-8 card-subheading text-white'>{dt.TestimonialStatement}</h3>
                        <div className='flex flex-wrap items-center'>
                          <div className='w-16 h-16 mb-4 md:mb-0 mr-6 rounded-full'>
                            <Image
                              width='60%'
                              height='60%'
                              className='w-16 h-16 mb-4 md:mb-0 mr-6 rounded-full'
                              src={dt.AuthorAvatarURL}
                              alt=''
                            />
                          </div>
                          <p className='mb-4 md:mb-0 text-gray-300 hyperlink'>{dt.AuthorName}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                index % 2 != 0 && (
                  <div className='flex-shrink-0 w-full lg:max-w-md px-3 mb-6 lg:mb-0'>
                    <div className='px-6 py-12   bg-black border border-white'>
                      <div className='relative px-4 mx-auto'>
                        <div className='absolute top-0 left-0'>
                          <Image width='10%' height='10%' src='/atis-assets/elements/quote-grey.svg' alt='' />
                        </div>
                        <div className='absolute top-0 right-0'>
                          <Image width='10%' height='10%' src='/atis-assets/elements/quote-grey.svg' alt='' />
                        </div>
                        <div className='px-4 md:px-10'>
                          <h3 className='mb-8 card-subheading text-white'>{dt.TestimonialStatement}</h3>
                          <div className='flex flex-wrap items-center'>
                            <div className='w-16 h-16 mb-4 md:mb-0 mr-6 rounded-full'>
                              <Image
                                width='60%'
                                height='60%'
                                className='w-16 h-16 mb-4 md:mb-0 mr-6 rounded-full'
                                src={dt.AuthorAvatarURL}
                                alt=''
                              />
                            </div>
                            <p className='mb-4 md:mb-0 text-gray-300 hyperlink'>{dt.AuthorName}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              );
            })}

            <div className='hidden lg:block opacity-50 flex-shrink-0 w-full max-w-md px-3'></div>
          </div>
        </section>
        {/* /Testimonial Section */}
        {/* Resources Section */}
        <section className='w-full pt-8 bg-white sm:pt-12 md:pt-16'>
          <div className='px-2 mx-auto max-w-7xl'>
            <div className='flex justify-center w-full pb-5 mb-4 border-gray-200'>
              <h2 className='section-heading  text-gray-800 '>{stream_data.RelatedResourcesSectionHeading}</h2>
            </div>

            <div className='grid grid-cols-12 gap-6 mb-6'>
              {stream_data.Resource.map((dt) => (
                <div
                  key='dt'
                  className='relative col-span-12 space-y-3 md:col-span-5 lg:col-span-3 shadow-lg hover:shadow-xl  p-4'
                >
                  <div className=''>
                    <Link href='#' passHref>
                      <a className='relative block w-full h-44 overflow-hidden rounded'>
                        <Image
                          className='bg-secondary object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105'
                          src={dt.Icon.imageURL}
                          alt='resource'
                          layout='fill'
                        />
                      </a>
                    </Link>
                  </div>
                  <div className=''>
                    <p className='hyperlink text-gray-400  uppercase mb-4'>{dt.CardTitle}</p>
                    <span className='block card-subheading font-semibold leading-tight text-gray-700 mb-4 hover:text-gray-900 '>
                      {dt.CardDescription}
                    </span>
                    <Link href={dt.CTAUrl} passHref>
                      <a className='inline-flex items-center   text-black hover:text-gray-400 group '>
                        <span className='hyperlink group-hover:text-gray-300'>{dt.CTAText}</span>
                        <svg
                          className='w-5 h-6 mt-1 ml-2 group-hover:text-gray-300'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M17 8l4 4m0 0l-4 4m4-4H3'
                          ></path>
                        </svg>
                      </a>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className='text-center'>
              <Link href={stream_data.ViewAllResources.LinkURL} passHref>
                <a className='inline-flex items-center   text-black hover:text-gray-400 group '>
                  <span className='hyperlink group-hover:text-gray-300'>{stream_data.ViewAllResources.LinkText}</span>
                  <svg
                    className='w-5 h-6 mt-1 ml-2 group-hover:text-gray-300'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M17 8l4 4m0 0l-4 4m4-4H3'
                    ></path>
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </section>
        {/* / Resources Setion */}
        {/* / Resources Setion */}
        {/* Cta Section */}
        <section className='bg-white'>
          <div className='md:px-8 md:py-8 mx-auto sm:py-10  lg:py-20 max-w-7xl'>
            <div
              className={`relative py-6 overflow-hidden  bg-gradient-to-r from-black to-${stream_data.cssstreamtag}-400 lg:py-12 md:px-6 lg:p-16 lg:flex lg:items-center lg:justify-between md:shadow-xl md:bg-purple-1000`}
            >
              <div className='absolute top-0 right-0 hidden w-full -mt-20 transform rotate-45 translate-x-1/2 bg-white sm:block h-96 opacity-5'></div>
              <div className='absolute top-0 left-0 hidden w-full -mt-20 transform rotate-45 -translate-x-1/2 bg-white sm:block h-96 opacity-5'></div>
              <div className='relative p-6  md:p-0 md:pb-4'>
                <h2 className='card-heading  leading-9 tracking-tight text-white sm:text-4xl sm:leading-10'>
                  {stream_data.FinalCTASection.CTATitle}
                </h2>
                <p className='w-full mt-5 card-subheading text-white '>{stream_data.FinalCTASection.CTADescription}</p>
              </div>
              <div className='relative flex flex-col items-center w-full px-6 space-y-5 md:space-x-5 md:space-y-0 md:flex-row md:w-auto lg:flex-shrink-0 md:px-0'>
                <Link href={stream_data.FinalCTASection.PrimaryCTA.linkURL} passHref>
                  <a className=' border-2 border-black inline-block py-3 px-10 bg-black hover:bg-gray-300 hover:text-black shadow button  uppercase text-white rounded-r-xl rounded-b-xl transition duration-200 '>
                    {stream_data.FinalCTASection.PrimaryCTA.buttonTitle}
                  </a>
                </Link>
                <Link rel='noopener noreferrer' href='{stream_data.FinalCTASection.SecondaryCTA.linkURL}' passHref>
                  <a
                    target='_blank'
                    className='  inline-block py-3 px-10 bg-white hover:bg-gray-50 hover:text-black shadow button uppercase text-black rounded-r-xl rounded-b-xl transition duration-200 border-2 border-black'
                  >
                    {stream_data.FinalCTASection.SecondaryCTA.buttonTitle}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* /Cta Section */}
      </Layout>
    </>
  );
}

export const getStaticPaths = async () => {
  // dynamic route array values must be acquired here from strapi
  const data = [
    { product: "digital-maps" },
    // { product: "digital-projects" },
    // { product: "digital-process" },
    // { product: "digital-labs" },
    // { product: "digital-mines" },
  ];

  const paths = data.map((index) => {
    return {
      params: { product: index.product },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const streamname = params.product;

  const res = await fetch(`https://api.ktern.com/digital-streams?slug=${streamname}`, {
    method: "get",
  });

  const data = await res.json();
  //  console.log(data[0])
  	const res1 = await fetch('https://api.ktern.com/navbar', {
		method: 'get',
	});
  const h_data = await res1.json();
  const res2 = await fetch('https://api.ktern.com/footer', {
		method: 'get',
	});
	const f_data = await res2.json();
  return {
    props: {
      stream_data: data[ 0 ],
      h_data: h_data,
      f_data:f_data
    }
  };
};
