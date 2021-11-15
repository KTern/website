import Layout from "../../component/Layout";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { NextSeo } from "next-seo";
import { BreadcrumbJsonLd } from "next-seo";
import { LogoJsonLd } from "next-seo";
import { SocialProfileJsonLd } from "next-seo";
export default function TrustCenter({ data ,h_data}) {
  const [isCustomerVisible, setIsCustomerVisible] = useState(true);
  const [isPartnerVisible, setIsPartnerVisible] = useState(false);
  return (
    <>
      <NextSeo
        title={data.PageSEO.PageTitle}
        description={data.PageSEO.PageDescription}
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
      <Layout h_data={h_data}>
        {/* Header Section */}

        <section className='w-full py-28 bg-herogradient'>
          <div className='flex flex-col items-center px-12 mx-auto lg:flex-row'>
            <div className='relative z-20 flex flex-col  w-full h-full '>
              <p className='max-w-max px-2 py-1 mb-5  hyperlink text-gray-900 uppercase bg-gray-200 rounded-full '>
                {data.PageHeader.Tag}
              </p>
              <h1 className='heading text-white mb-5'>{data.PageHeader.header}</h1>
              <p className='subheading text-gray-100 pb-7'>{data.PageHeader.subHeading}</p>
            </div>
          </div>
        </section>

        {/* KTern Trust Center */}
        <section className='md:p-20 p-10 '>
          <div className='max-w-screen md:pl-20  mx-auto'>
            
            {/* <hr className="bg-black "/> */}
            <div className='grid grid-cols-1 mt-16 md:grid-cols-3 gap-x-20 lg:gap-x-20 gap-y-20'>
              {data.TrustCenterCard.map((dt) => (
                <div key='dt'>
                  <svg
                    className='w-10 h-10 text-blue-600'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='{dt.IconURL}'></path>
                  </svg>
                  <h3 className='mt-4 mb-2 card-heading  text-gray-900 lg:'>{dt.Title}</h3>

                  <ul className='list-disc  text-gray-500 lg:'>
                    {dt.Points.map((en) => (
                      <li key='en' className='pb-2 card-subheading'>
                        {en.listItem}
                      </li>
                    ))}

                    <Link href={dt.LearnMore.linkURL} passHref>
                      <a className='inline-flex items-center pt-5  text-black hover:border-blue-500 group '>
                        <span className='hyperlink group-hover:text-gray-400'>{dt.LearnMore.buttonTitle}</span>
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
                  </ul>
                </div>
              ))}

              {/* {
                                trust_center_data.map(data => (
                                    <div key="data">
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
                    <h3 className="mt-4 mb-2 card-heading  text-gray-900 lg:">Cloud services</h3>
                    
                        <ul className="list-disc  text-gray-500 lg:">
                            <li className="pb-2 card-subheading" >Gain Insights on service availability worldwide</li>
                           <li className="pb-2 card-subheading">Access Cloud service Performance history</li>
                           <li className="pb-4 card-subheading">View Personalized Dashboard</li>
                           <Link href="/trust-center/landing"  passHref>
                                <a className="inline-flex items-center pt-5  text-black hover:border-blue-500 group ">
                                <span className="hyperlink group-hover:text-gray-400">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>                         
                             </ul>
                          
                   
                </div>
                                ))} */}
            </div>
          </div>
        </section>
        {/*

        {/* <!--Different Roles--> */}
        <section className='text-black body-font bg-white'>
          <div className='px-5 pt-10 pb-0  mx-auto flex flex-wrap flex-col'>
            <h2 className='mb-5 section-heading  text-center md:'>{data.findinfotitle}</h2>
            <div className='flex md:w-1/2 mx-auto flex-wrap mb-5 text-center items-center justify-center'>
              <button
                onClick={() => {
                  setIsCustomerVisible(true);
                  setIsPartnerVisible(false);
                }}
                className='sm:px-6 py-3 w-1/4 sm:w-auto justify-center sm:justify-start border-b-2 title-font  focus:bg-gray-100 inline-flex items-center leading-none border-gray-200 focus:border-indigo-500 text-gray-900  focus:text-indigo-500 tracking-wider rounded-t'
              >
                <span className='hyperlink'>{data.findinfotab1.title}</span>
              </button>

              <button
                onClick={() => {
                  setIsPartnerVisible(true);
                  setIsCustomerVisible(false);
                }}
                className='sm:px-6 py-3 w-1/4 sm:w-auto justify-center sm:justify-start focus:bg-gray-100 border-b-2 title-font  inline-flex items-center leading-none border-gray-200 text-gray-900 tracking-wider focus:border-indigo-500 focus:text-indigo-500'
              >
                <span className='hyperlink'>{data.findinfotab2.title}</span>
              </button>
            </div>
            {isCustomerVisible && (
              <section className='pt-20 pb-32 bg-white'>
                <div className='md:px-20 p-4 mx-auto max-w-7xl'>
                  <div className='grid grid-cols-1  md:grid-cols-3 gap-x-16 lg:gap-x-24 gap-y-20'>
                    {data.findinfotab1.cards.map((dt) => (
                      <div key="dt">
                        <div className=' block w-60 h-60 relative '>
                          <Image
                            layout='fill'
                            className='mx-auto  mb-6 object-cover border-2 border-black'
                            src={dt.ImageURL}
                            alt=''
                          />
                        </div>
                        <h3 className='mb-2 card-heading  text-gray-900 lg:'>{dt.CardTitle}</h3>
                        <p className=' text-gray-500 card-subheading'>
                          {dt.CardDescription}
                        </p>
                        <Link href={dt.PageURL} passHref>
                          <a className='inline-flex items-center pt-5  text-black hover:border-blue-500 group '>
                            <span className='hyperlink group-hover:text-gray-400'>{dt.PartnerTitle}</span>
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
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}
            {isPartnerVisible && (
              <section className='pt-20 pb-32 bg-white'>
                <div className='md:px-20 p-4 mx-auto max-w-7xl'>
                  <div className='grid grid-cols-1  md:grid-cols-3 gap-x-16 lg:gap-x-24 gap-y-20'>
                    {data.findinfotab2.cards.map((dt) => (
                      <div key="dt">
                        <div className=' block w-60 h-60 relative '>
                          <Image
                            layout='fill'
                            className='mx-auto  mb-6 object-cover border-2 border-black'
                            src={dt.ImageURL}
                            alt=''
                          />
                        </div>
                        <h3 className='mb-2 card-heading  text-gray-900 lg:'>{dt.CardTitle}</h3>
                        <p className=' text-gray-500 card-subheading'>
                        {dt.CardDescription}
                        </p>
                        <Link href={dt.PageURL} passHref>
                          <a className='inline-flex items-center pt-5  text-black hover:border-blue-500 group '>
                            <span className='hyperlink group-hover:text-gray-400'>{dt.PartnerTitle}</span>
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
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </div>
        </section>
      </Layout>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("https://api.ktern.com/trust-center", {
    method: "get",
  });
  const data = await res.json();
  // console.log("data", data);
  	const res1 = await fetch('https://api.ktern.com/navbar', {
		method: 'get',
	});
	const h_data = await res1.json();
  return {
    props: {
      data: data,
      h_data:h_data
    },
  };
};
