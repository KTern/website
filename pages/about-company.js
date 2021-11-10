import Layout from "../component/Layout";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { BreadcrumbJsonLd } from "next-seo";
import { LogoJsonLd } from "next-seo";
import { SocialProfileJsonLd } from "next-seo";

export default function About({ data }) {
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
      <Layout>
        <section className='relative flex flex-col items-center justify-center w-full px-6 py-32 bg-secondary bg-cover  min-w-screen'>
          <div className='flex flex-col items-center justify-center md:mx-auto  xl:p-8 lg:flex-row lg:max-w-6xl lg:p-0'>
            <div className='container relative z-20 flex flex-col w-full px-5 pb-1 pr-12 mb-16 text-2xl text-gray-700 lg:w-1/2 sm:pr-0 md:pr-6 md:pl-0 lg:pl-5 xl:pr-10 sm:items-center lg:items-start lg:mb-0'>
              <h1 className='relative z-20   leading-none text-black heading  sm:text-center lg:text-left'>
                {data.PageHeader.header}
                <br />
                <span className='mt-1 text-gray-400 heading lg:mt-0'>{data.PageHeader.header2}</span>
              </h1>
              <p className='relative z-20 block mt-6 subheading text-black  sm:text-center lg:text-left'>
                {data.PageHeader.subHeading}
              </p>
            </div>
            <div className='relative w-full px-5 rounded-lg cursor-pointer text-white lg:w-1/2 group xl:px-0'>
              <div className='absolute top-0 left-0 w-11/12 -mt-20 opacity-50'>
                <svg className='w-full h-full ml-4 text-gray-400' viewBox='0 0 200 200' xmlns=''>
                  <path
                    fill='currentColor'
                    d='M45,-78C58.3,-70.3,69,-58.2,75.2,-44.4C81.3,-30.7,82.9,-15.3,83.5,0.4C84.2,16,83.8,32.1,76.5,43.9C69.2,55.7,55.1,63.3,41.2,69.4C27.3,75.4,13.6,80,-0.7,81.2C-15.1,82.5,-30.1,80.3,-41.2,72.6C-52.2,64.9,-59.2,51.6,-67.1,38.5C-75.1,25.5,-83.9,12.8,-83.8,0C-83.8,-12.7,-74.9,-25.4,-65.8,-36.4C-56.7,-47.4,-47.4,-56.7,-36.4,-65.7C-25.4,-74.7,-12.7,-83.5,1.6,-86.2C15.9,-89,31.8,-85.7,45,-78Z'
                    transform='translate(100 100)'
                  ></path>
                </svg>
              </div>
              <div className='z-10 object-cover w-100 h-80 '>
                <Image width={600} height={360} src={data.PageHeader.ImageURL} alt='' />
              </div>
              <div className='absolute inset-0 flex items-center justify-center sm:mb-40'>
                <Link href='/video' passHref>
                  <a className='flex items-center justify-center hover:bg-white bg-black rounded-full  '>
                    <span className='flex items-center justify-center w-20 h-20 bg-black rounded-full group-hover:text-black shadow-2xl group-hover:bg-white '>
                      <svg className='w-auto h-8 ml-1   fill-current' viewBox='0 0 52 66' xmlns=''>
                        <path
                          d='M50 30.7L4.1.6C2.6-.4.8.9.8 2.9v60.3c0 2 1.8 3.3 3.3 2.3L50 35.3c1.5-1 1.5-3.6 0-4.6z'
                          fillRule='nonzero'
                        ></path>
                      </svg>
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Our Vision--> */}
        <section className='w-full px-8 py-20 xl:px-0 bg-white'>
          <div className='max-w-6xl mx-auto'>
            <p className='mb-5 section-heading text-black '>{data.vision.title}</p>
            <div className='flex flex-col md:flex-row'>
              <div className='w-full pr-5 md:w-6/12 xl:pr-12'>
                <p className='section-subheading leading-normal text-gray-700 '>{data.vision.statement1}</p>
              </div>

              <div className='w-full mt-5 md:mt-0 md:w-8/12 md:pl-2'>
                <h3 className='mb-5 -mt-1 card-heading  '>{data.vision.statement2}</h3>
                <Link href={data.vision.ctaurl} passHref>
                  <a className='inline-flex items-center pb-1  text-black hover:border-blue-500 group '>
                    <span className='hyperlink group-hover:text-gray-400'>{data.vision.ctatext}</span>
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
            </div>
          </div>
        </section>
        {/* <!--Our Values--> */}
        <section className='relative leading-7  text-gray-900 py-10 bg-white border-solid'>
          <div className='box-border mx-auto border-solid lg:pl-8 max-w-7xl'>
            <div className='flex flex-col items-center leading-7 text-gray-900 border-0 border-gray-200 lg:flex-row'>
              <div className='box-border flex flex-col justify-center w-full h-full p-8 text-gray-900 border-solid lg:w-1/2 md:p-16 lg:p-0 lg:pl-10 lg:pr-20'>
                <h2 className='m-0 section-heading    text-left text-black '>{data.Values.Title}</h2>
                <p className='mt-5 section-subheading text-left border-0 border-gray-200 '>{data.Values.Description}</p>
                <div className='grid gap-4 mt-8 leading-7 border-0 border-gray-200 sm:mt-10 sm:gap-6 lg:mt-12 lg:gap-8'>
                  {data.Values.Steps.map((dt) => (
                    <div key='dt' className='box-border flex items-start text-gray-900 border-solid'>
                      <div className='flex items-center justify-center w-12 h-12 leading-7 bg-black border-0 border-gray-200 rounded-full'>
                        <p className='box-border m-0 text-xl text-white border-solid'>
                          <svg
                            className='w-6 h-6'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns={dt.stepicon}
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
                            ></path>
                          </svg>
                        </p>
                      </div>
                      <div className='flex-1 ml-6 leading-7 border-0 border-gray-200'>
                        <h3 className='box-border m-0 card-heading text-black border-solid sm:text-xl '>
                          {dt.StepTitle}
                        </h3>
                        <p className='box-border mt-2 card-subheading text-gray-900 border-solid'>
                          {dt.StepDescription}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className='hidden md:block w-full h-full overflow-hidden leading-7 text-gray-900 border-0 border-gray-200 lg:w-1/2'>
                <div className='object-cover relative'>
                  <Image width={600} height={700} src={data.valueimageurl} alt='' />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--What We do--> */}
        <section className='bg-black overflow-hidden'>
          <div className='relative px-16 pt-10 pb-12 mx-auto max-w-7xl xl:px-16'>
            <svg
              className='relative z-10 w-16 mb-8 text-yellow-300 transform opacity-100 fill-current sm:w-20 -rotate-0 rotate rotate-3'
              xmlns={data.WhatWeDo.icon}
              viewBox='0 0 50 46'
            >
              <defs></defs>
              <g fillRule='nonzero'>
                <path d='M46.651 2.666c1.892-.812 1.06-1.401-1.337-1.81A4.827 4.827 0 0044.323 0a3.914 3.914 0 00-.614.64C34.376-.395 11.639.36 8.676 1.976 6.99 1.437 1.364 9.542.344 13.552c-.436.1-.436.632-.12 1.487a.84.84 0 00.1.28v-.05a2.8 2.8 0 00.247.668h.06c2.814 5.749 14.356 19.796 15 20.673l-.149-.158c2.418 2.587 3.963 5.547 6.291 8.17 2.626 2.213 3.478 1.437 3.399-.065 2.784-1.171 3.289-3.73 4.775-5.655 5.608-7.904 14.742-14.651 19.498-22.763a2.347 2.347 0 00-.09-.575c1.725-2.429-.296-9.018-2.704-12.898zM38.25 24.093c-4.38 5.863-12.355 11.432-13.693 18.15-.33-.903-.903-1.75-1.684-2.493C15.987 31.616 10.4 22.828 3.088 14.931c3.101-1.997 3.636-6.021 5.469-8.615l-.09.187.199-.41-.06.13.08-.151c.31-1.051.463-2.123.455-3.198.876.312 1.796.553 2.745.719 10.333-.633 20.805-.144 31.129-.417.198 1.71 1.387 3.514 1.982 5.094 0-.057 0-.122-.08-.18 1.11 2.243.803 4.937 2.616 6.92-2.953 1.337-8.342 8.048-9.283 9.083zM7.5 14.505v-.01.01z'></path>
                <path d='M9.567 12.925c-.022.243.175.468.486.556 0 .065.05.13.08.094l.139-.05h.069c-1.015.233-1.858.754-2.341 1.445.908.243 1.84.436 2.787.578.208.5.484.985.824 1.445v.094-.036c.387.607.763 1.214 1.16 1.814v-.072c.516.816.992 1.64 1.548 2.457.555.817 1.13 1.9 1.736 2.782a.241.241 0 01-.05-.08c1.587 2.169 2.599 4.59 4.444 6.635 3.482 2.002-.536-3.874-1.2-4.777-1.101-1.662-2.232-3.324-3.294-5-.892-1.446-1.845-2.892-2.787-4.337-.149-.354-.298-.65-.446-.925 2.975-.152 5.951-.455 8.927-.513 3.849-.145 7.737 0 11.606 0-.466 1.604-.526 4.025-.992 4.85-.387 3.403-3.968 7.096-2.46 10.37.605-.477 1.029-1.06 1.23-1.692 1.21-4.43 3.918-8.99 3.75-13.535 2.579.03 5.159-.045 7.727-.224 3.65-.853 3.134-2.32-.546-2.349h.218c-2.55.05-5.098.058-7.648.05a27.367 27.367 0 00-3.095-5.181.511.511 0 01-.089-.13c-1.408 1.257.308 3.714 1.597 5.304-4.85 0-9.7 0-14.551.217h.218c-2.113.333-5.168.116-7.53.564.165-.11.255-.265.249-.427a.376.376 0 000-.151c2.48-2.212 7.241-8.166 3.115-6.367l-4.88 6.59zm3.68 3.526a.19.19 0 010 .065.285.285 0 010-.08v.015zM11.5 17.505v-.01z'></path>
                <path d='M14.499 21.55v-.1a.54.54 0 010 .1zM41.874 10c.462-1.423-.366-2.884-2.197-3.876A.87.87 0 0139.522 6c-1.373.757.287 2.644 1.266 3.49.303.209.671.382 1.086.51zM40.5 9.505v-.01z'></path>
              </g>
            </svg>
            <div className='relative z-20'>
              <h3 className='section-heading text-left text-white '>{data.WhatWeDo.Title}</h3>
              <div className='flex flex space-x-5 mt-4 sm:flex-row items-center'>
                <p className='section-subheading text-left text-yellow-300'>{data.WhatWeDo.Description}</p>
                <div className='flex mt-5 space-x-1 sm:mt-1 sm:ml-3 items-center my-auto'>
                  <div className='w-10 h-2 bg-yellow-300 rounded-full opacity-100'></div>
                  <div className='w-8 h-2 bg-yellow-300 rounded-full opacity-75'></div>
                  <div className='w-4 h-2 bg-yellow-300 rounded-full opacity-50'></div>
                  <div className='w-3 h-2 bg-yellow-300 rounded-full opacity-25'></div>
                  <div className='w-2 h-2 bg-yellow-300 rounded-full opacity-10'></div>
                  <div className='w-2 h-2 bg-yellow-300 rounded-full opacity-5'></div>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-1 mt-10 gap-14 lg:grid-cols-3'>
              {data.WhatWeDo.Steps.map((dt) => (
                <div key="dt" className='flex text-white'>
                  <svg
                    xmlns={dt.stepicon}
                    className='hidden md:block flex-shrink-0 w-20 h-20 mr-8 text-yellow-300 stroke-current'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M19 11v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2'></path>
                    <path d='M13 13l9 3l-4 2l-2 4l-3 -9'></path>
                    <line x1='3' y1='3' x2='3' y2='3.01'></line>
                    <line x1='7' y1='3' x2='7' y2='3.01'></line>
                    <line x1='11' y1='3' x2='11' y2='3.01'></line>
                    <line x1='15' y1='3' x2='15' y2='3.01'></line>
                    <line x1='3' y1='7' x2='3' y2='7.01'></line>
                    <line x1='3' y1='11' x2='3' y2='11.01'></line>
                    <line x1='3' y1='15' x2='3' y2='15.01'></line>
                  </svg>
                  <div className='relative space-y-2'>
                    <h4 className='card-heading'>{dt.StepTitle}</h4>
                    <p className='card-subheading text-gray-300'>{dt.StepDescription}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* <!-- Our Customers--> */}
        <section className='w-full py-10 pb-16 bg-secondary'>
          <div className='flex flex-col items-center max-w-6xl px-10 mx-auto xl:px-0'>
            <p className='card-heading text-gray-400 uppercase'>{data.ourcustomerstitle}</p>
            <div className='flex flex flex-wrap justify-center sm:flex-row space-x-16'>
              {data.TrustedByLogos.map((dt) => (
                <svg
                  key='dt'
                  className='w-auto h-12 mt-8 text-black fill-current'
                  viewBox='0 0 2418 2428'
                  xmlns={dt.imageURL}
                >
                  <g stroke='none' strokeWidth='1' fillRule='evenodd'>
                    <g fillRule='nonzero'>
                      <path d='M1209 .77C541.628.77.62 543.968.62 1214c0 670.044 541.02 1213.244 1208.38 1213.244 667.346 0 1208.38-543.2 1208.38-1213.244C2417.38 543.969 1876.346.77 1209 .77zM615.504 1565.493v-100.425c-50.842 57.845-108.778 96.391-194.119 95.924-201.926-1.102-365.644-164.379-365.644-367.122 0-202.743 163.718-367.096 365.644-367.096 201.94 0 377.602 163.069 377.602 365.838l.207 371.597-183.69 1.284zm602.6 5.771c-201.938 0-377.601-163.069-377.601-365.838l-.207-617.685h183.418l.246 345.216c50.868-57.832 108.79-96.391 194.145-95.924 201.887 1.128 365.63 164.379 365.63 367.122 0 202.756-163.743 367.11-365.63 367.11zm786.215-8.625c-201.94 0-365.657-164.353-365.657-367.096s163.718-367.096 365.657-367.096c176.233 0 323.894 129.179 358.497 295.827l-183.885-.61c-28.17-66.859-94.381-112.032-171.266-112.032-102.487 0-185.584 83.395-185.584 186.297 0 102.916 83.084 186.35 185.584 186.35 76.885 0 143.913-44.68 172.083-111.566l183.86-.856c-34.111 167.271-182.602 290.782-359.29 290.782h.001z'></path>
                      <path d='M1213.397 1008.027c-102.487 0-185.598 83.422-185.598 186.324 0 102.902 83.11 186.35 185.598 186.35 102.487 0 185.597-83.448 185.597-186.35s-83.11-186.324-185.597-186.324zm-789.742 0c-102.487 0-185.598 83.422-185.598 186.324 0 102.902 83.11 186.35 185.598 186.35 102.487 0 185.597-83.448 185.597-186.35s-83.11-186.324-185.597-186.324z'></path>
                    </g>
                  </g>
                </svg>
              ))}
            </div>
          </div>
        </section>
        {/* <!--Resources About the Company--> */}
        <section className='w-full pt-8 bg-white sm:pt-12 md:pt-16'>
          <div className='px-2 mx-auto max-w-7xl'>
            <div className='flex justify-center w-full pb-5 mb-4 border-gray-200'>
              <h2 className='section-heading  text-gray-800 '>{data.relatedresourcestitle}</h2>
            </div>

            <div className='grid grid-cols-12 gap-6 mb-6'>
              {data.RelatedResources.map((dt) => (
                <div key="dt" className='relative col-span-12 space-y-3 md:col-span-5 lg:col-span-3 shadow-lg hover:shadow-xl rounded p-4'>
                  <div className=''>
                    <Link href={dt.CTAUrl} passHref>
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
                    <p className='hyperlink text-gray-400  uppercase mb-4'>{dt.Tag}</p>
                    <span className='block card-subheading font-semibold leading-tight text-gray-700 mb-4 hover:text-gray-900 '>
                      {dt.CardTitle}
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
              <Link href={data.viewallresources.ctaurl} passHref>
                <a className='inline-flex items-center   text-black hover:text-gray-400 group '>
                  <span className='hyperlink group-hover:text-gray-300'>{data.viewallresources.title}</span>
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
        </section>{" "}
        {/* / Resources Setion */}
        {/* <!-- Footer CTA Features Page --> */}
        <section className='bg-white'>
          <div className='md:px-8 py-8 mx-auto sm:py-10 lg:py-20 max-w-7xl'>
            <div className='relative py-6 overflow-hidden  bg-gradient-to-r from-black to-secondary lg:py-12 md:px-6 lg:p-16 lg:flex lg:items-center lg:justify-between md:shadow-xl md:bg-purple-1000'>
              <div className='absolute top-0 right-0 hidden w-full -mt-20 transform rotate-45 translate-x-1/2 bg-white sm:block h-96 opacity-5'></div>
              <div className='absolute top-0 left-0 hidden w-full -mt-20 transform rotate-45 -translate-x-1/2 bg-white sm:block h-96 opacity-5'></div>
              <div className='relative p-6  md:p-0 md:pb-4'>
                <h2 className='card-heading   tracking-tight text-white sm:text-4xl sm:leading-10'>
                  {data.ctacard.CTATitle}
                </h2>
                <p className='w-full mt-5 card-subheading text-white '>{data.ctacard.CTADescription}</p>
              </div>
              <div className='relative flex flex-col items-center w-full px-6 space-y-5 md:space-x-5 md:space-y-0 md:flex-row md:w-auto lg:flex-shrink-0 md:px-0'>
                <Link href={data.ctacard.PrimaryCTA.linkURL} passHref>
                  <a className='  inline-block py-3 px-10 bg-black hover:bg-gray-300 hover:text-black shadow   text-white  rounded-r-xl rounded-b-xl transition duration-200 button border-2 border-black'>
                    {data.ctacard.PrimaryCTA.buttonTitle}
                  </a>
                </Link>
                <Link href={data.ctacard.SecondaryCTA.linkURL} passHref>
                  <a className='  inline-block py-3 px-10 bg-white hover:bg-gray-50 hover:text-black shadow  text-black  rounded-r-xl rounded-b-xl transition duration-200  border-2 border-black button'>
                    {data.ctacard.SecondaryCTA.buttonTitle}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`https://api.ktern.com/about-company`, {
    method: "get",
  });

  const data = await res.json();

  // console.log(data);

  return {
    props: {
      data: data,
    },
  };
};
