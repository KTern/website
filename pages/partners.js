import Image from "next/image";
import Link from "next/link";
import Layout from "../component/Layout";
import { NextSeo } from "next-seo";
import { BreadcrumbJsonLd } from "next-seo";
import { LogoJsonLd } from "next-seo";
import { SocialProfileJsonLd } from "next-seo";
import { FAQPageJsonLd } from "next-seo";
export default function Partners({ data }) {
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
      <FAQPageJsonLd
        mainEntity={[
          {
            questionName: "How long is the delivery time?",
            acceptedAnswerText: "3-5 business days.",
          },
          {
            questionName: "Where can I find information about product recalls?",
            acceptedAnswerText: "Read more on under information.",
          },
        ]}
      />
      <Layout>
        {/* <!-- Header Section --> */}
        <section className='w-full py-28 bg-secondary'>
          <div className='flex flex-col items-center px-4 mx-auto max-w-7xl lg:flex-row'>
            <div className='relative z-20 flex flex-col items-start justify-center w-full h-full lg:w-1/2'>
              <p className='max-w-max px-2 py-1 mb-5  hyperlink  text-gray-900 uppercase bg-gray-200 rounded-full '>
                {data.PageHeader.Tag}
              </p>
              <h5 className='mb-3 heading  sm:text-4xl '>{data.PageHeader.header}</h5>
              <p className='py-5 mb-5 text-gray-600 subheading'>
                <span className=' subheading'>{data.PageHeader.subHeading}</span>{" "}
              </p>
              <div className='md:flex md:items-center md:space-x-4 sm:space-y-6'>
                <Link href={data.PageHeader.primaryCTA.linkURL} passHref>
                  <a className='lg:inline-block py-4 px-6 bg-black hover:bg-gray-300 hover:text-black shadow uppercase text-white  rounded-r-xl hyperlink rounded-b-xl transition duration-200 button '>
                    {data.PageHeader.primaryCTA.buttonTitle}
                  </a>
                </Link>
                <Link href={data.PageHeader.secondaryCTA.linkURL} passHref>
                  <a className=' inline-block sm:mb-4  md:mr-4  shadow-md py-3 px-6 hover:text-white   hover:bg-gray-300   text-black   rounded-r-xl bg-white rounded-b-xl transition duration-200 uppercase  button'>
                    {data.PageHeader.secondaryCTA.buttonTitle}
                    <svg className='inline-block w-2 ml-2' fill='currentColor' viewBox='0 0 12 12'>
                      <path d='M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z'></path>
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
            <div className='hidden lg:block relative z-10 w-full h-full my-16 lg:my-0 lg:w-1/2'>
              <Image
                className='relative z-40 w-full h-full'
                src={data.PageHeader.ImageURL}
                alt='hero image'
                width={600}
                height={420}
              />
            </div>
          </div>
        </section>
        {/* <!--KTern Partnership Models--> */}

        <section className='relative w-full bg-white'>
          <div className='relative w-full px-5 py-10 mx-auto  md:px-10  max-w-7xl'>
            <h5 className='mb-3 section-heading'>{data.PartnershipOpportunities.SectionTitle}</h5>
            <p className=' mb-5 text-gray-600 section-subheading'>
              <span className='section-subheading'>{data.PartnershipOpportunities.SectionDescription}</span>
            </p>
            <div className='grid  w-full h-auto md:grid-cols-10 md:gap-24 gap-4 sm:mt-16 '>
              {data.PartnershipOpportunities.PartnerCard.map((dt) => (
                <Link key = "dt" href={dt.PageURL} passHref>
                  <a className='bg-black relative border-2 border-black shadow-md flex flex-col items-start h-50 overflow-hidden rounded-xl group sm:col-span-12 md:col-span-4'>
                    <div
                      className='block bg-white w-full transition duration-300 ease-in-out transform bg-center bg-cover h-60 hover:scale-110'
                      style={{ backgroundImage: "url('/partner/consulting-partner-card.svg')" }}
                    />
                    <div className='relative z-20 w-full h-1/2 py-8 text-white bg-black border-t-0  px-7'>
                      <p className='inline-block text-xs  absolute top-0 -mt-3.5 rounded-md px-4 py-2 uppercase text-black bg-gray-200'>
                        {dt.PartnerTitle}
                      </p>
                      <h2 className='mb-5 md:text-3xl card-heading sm:text-xl '>
                        <p>{dt.CardTitle}</p>
                      </h2>
                      <p className='mb-2 card-subheading  text-white opacity-100'>{dt.CardDescription}</p>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* <!--KTern's Partners --> */}
        <section className='w-full py-10 pb-16 bg-secondary'>
          <div className='flex flex-col items-center max-w-6xl px-10 mx-auto xl:px-0'>
            <p className='card-heading text-gray-400 uppercase'>{data.previouslyseenontitle}</p>
            <div className='flex flex flex-wrap justify-center sm:flex-row space-x-16'>
              {data.TrustedByLogos.map((dt) => (
                <svg key = "dt"
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

        {/* <!--Faq Section--> */}
        <section className='py-10 bg-project-white'>
          <h2 className='mb-2 section-heading  text-center'>{data.faqtitle}</h2>
          <div className='flex space-x-10 p-10'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4 mx-auto'>
              {data.FAQList.map((dt) => (
                <details key = "dt" className='relative overflow-hidden border-2 border-gray-200  select-none hover:bg-white'>
                  <summary
                    className='flex items-center justify-between   text-gray-700 cursor-pointer sm: px-6 py-6 hover:text-gray-800'
                    style={{ listStyle: "none" }}
                  >
                    <span className='card-subheading'>{dt.Question}</span>
                    <svg
                      className=' w-6 h-6 transition-all duration-200 ease-out transform rotate-0'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                      ></path>
                    </svg>
                  </summary>
                  <hr />
                  <div className='p-4 hyperlink'>{dt.Answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* <!--Steps to join KTern--> */}
        <section className='pt-5 pb-0 2xl:py-20 bg-black overflow-hidden'>
          <div className='container px-14 mx-auto'>
            <div className='mb-10 max-w-xl mx-auto sm:mb-24 text-center'>
              <span className='section-heading  text-white'>{data.PartnershipSteps.Title}</span>
              <h2 className='mt-4 section-subheading text-white'>{data.PartnershipSteps.Description} </h2>
            </div>
            <div className='relative flex flex-wrap justify-center -mx-10 mb-5'>
              {data.PartnershipSteps.Steps.map((dt, index) => {
                return index < data.PartnershipSteps.Steps.length - 1 && index % 2 == 0 ? (
                  <div className='hidden lg:block absolute top-0 left-0 ml-72 -mt-18'>
                    <Image width={200} height={100} src='/partner/dots-gray.svg' alt='' />
                  </div>
                ) : (
                  <div className='hidden lg:block absolute inset-y-0 -mr-80 -mt-18'>
                    <Image width={200} height={100} src='/partner/dots-gray.svg' alt='' />
                  </div>
                );
              })}

              {data.PartnershipSteps.Steps.map((dt, index) => (
                <div key = "dt" className='w-full lg:w-1/3 mt-20 px-10 md:mb-20 lg:mb-0'>
                  <div className='flex'>
                    <div className='mr-8'>
                      <span className='flex justify-center items-center w-14 h-14 text-black bg-white card-heading  rounded-full'>
                        {index + 1}
                      </span>
                    </div>
                    <div className='max-w-xs'>
                      <h3 className='mb-6 card-heading text-white'>{dt.StepTitle}</h3>
                      <p className='card-subheading text-gray-200'>{dt.StepDescription}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <!-- Footer CTA --> */}
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
  // data url from strapi

  const res = await fetch("https://api.ktern.com/partner-home", {
    method: "get",
  });
  const data = await res.json();
  // console.log(data.PartnershipSteps.Steps);
  return {
    props: {
      data: data,
    },
  };
};
