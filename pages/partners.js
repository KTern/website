import Image from "next/image";
import Link from "next/link";
import Layout from "../component/Layout";
import { NextSeo } from "next-seo";
import { BreadcrumbJsonLd } from "next-seo";
import { LogoJsonLd } from "next-seo";
import { SocialProfileJsonLd } from "next-seo";
import { FAQPageJsonLd } from "next-seo";
import Carousel from 'react-multi-carousel';
const responsive = {
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
export default function Partners({ data,h_data,f_data }) {
  let breadcrumb = [];
  data.PageSEO.BreadCrumb.map((dt) => {
    breadcrumb.push({ position: dt.position, name: dt.name, item: dt.item });
  });
  return (
    <>
    	  <LogoJsonLd
        logo={process.env.LOGO}
        url={process.env.URL}
      />
      <NextSeo
        title={data.PageSEO.PageTitle}
        description={data.PageSEO.PageDescription}
        canonical='https://www.canonical.ie/'
        openGraph={{
          url:`${data.PageSEO.CanonicalTag}`,
          title:`${data.PageSEO.PageTitle}`,
          description:`${data.PageSEO.PageDescription}`,
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
					handle: `${process.env.TWITTER_HANDLE}`,
					site: `${process.env.TWITTER_SITE}`,
					cardType: `${process.env.CARD_TYPE}`,
				}}
				facebook={{
					handle: `${process.env.FACEBOOK_HANDLE}`,
					site: `${process.env.FACEBOOK_SITE}`,
					cardType: `${process.env.CARD_TYPE}`,
					appId: `${process.env.FB_APPID}`,
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
            content: "Nivedha",
          },
          {
            name: "application-name",
            content: "KTern.AI",
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
        itemListElements={breadcrumb}
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
      <Layout h_data={h_data} f_data={f_data}>
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

        <section className='relative mx-auto max-w-5xl w-full bg-white'>
          <div className=' w-full px-5 py-10 mx-auto  md:px-10  '>
            <h5 className='mb-3 section-heading'>{data.PartnershipOpportunities.SectionTitle}</h5>
            <p className=' mb-5 text-gray-600 section-subheading'>
              <span className='section-subheading mb-10'>{data.PartnershipOpportunities.SectionDescription}</span>
            </p>
            <div className='container grid   h-auto md:grid-cols-2 gap-4 sm:mt-16 '>
              {data.PartnershipOpportunities.PartnerCard.map((dt) => (
                <Link key="dt" href={dt.PageURL} passHref>
                  <a className='bg-black relative border-2 border-black shadow-md flex flex-col items-start h-50 overflow-hidden rounded-xl group '>
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
        <div className="px-4 py-5">
						<div className=" px-4 mx-auto">
							<h2 className=" text-center  text-gray-500 card-heading sm:text-xl">
								{data.previouslyseenontitle}
							</h2>
							{/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. ab repudiandae et.</p> */}
						</div>
						   <Carousel className='bots flex p-6  z-10' responsive={responsive}>
            {data.TrustedByLogos.map((dt) => (
              <div key='dt' className='p-3 bots-card flex-row'>
                <Image
                  className=' w-auto lg:w-100'
                  src={dt.imageURL}
                  alt={dt.imageDescription}
                  width={dt.width}
                  height={dt.height}
                />
              </div>
            ))}
          </Carousel>
					</div>

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
        <section className="pt-5 pb-0 2xl:py-20 py-5 bg-black overflow-hidden">
            <div className="px-14 md:mx-auto ">
                <div className="mb-10 md:max-w-4xl  md:mx-auto sm:mb-24 text-center">
                            <span className="section-heading  text-white">{data.PartnershipSteps.Title}</span>
                <h2 className="mt-4 section-subheading text-white">{data.PartnershipSteps.Description}</h2>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-1 gap-3 mb-10">
                {data.PartnershipSteps.Steps.map((dt,index)=>(<div key="index" className="w-full  md:px-10 md:mt-20 md:mb-20 lg:mb-0">
                    <div className="relative flex-col space-y-3">
                    
                    <div className="md:mr-8">
                        <span className="flex justify-center items-center w-14 h-14 text-black bg-white card-heading  rounded-full">{index+1}</span>
                    </div>
                    <div className="max-w-xs">
                        <h3 className="mb-2 card-heading text-white">{dt.StepTitle}</h3>
                        <p className="card-subheading text-gray-200">{dt.StepDescription}</p>
                    </div>
                    </div>
                </div>))}
                
                </div>
                
            </div>
            </section>

        {/* <!-- Footer CTA --> */}
        <section className="bg-white">
                <div className="md:px-8 py-8 mx-auto sm:py-10 lg:py-20 max-w-7xl">
                <div className="relative py-6 overflow-hidden  background lg:py-12 md:px-6 lg:p-16 lg:flex lg:items-center lg:justify-between md:shadow-xl md:bg-purple-1000">
                <div className="absolute top-0 right-0 hidden w-full -mt-20 transform rotate-45 translate-x-1/2 bg-white sm:block h-96 opacity-5"></div>
                <div className="absolute top-0 left-0 hidden w-full -mt-20 transform rotate-45 -translate-x-1/2 bg-white sm:block h-96 opacity-5"></div>
                <div className="relative p-6 max-w-xl md:p-0 md:pb-4">
                <h2 className="card-heading   tracking-tight text-white sm:text-4xl sm:leading-10">{data.ctacard.CTATitle}</h2>
                <p className="w-full mt-5 card-subheading text-white ">{data.ctacard.CTADescription}</p>
                </div>
                <div className="relative flex flex-col items-center w-full px-6 space-y-5 md:space-x-5 md:space-y-0 md:flex-row md:w-auto lg:flex-shrink-0 md:px-0">
                <Link  href={data.ctacard.PrimaryCTA.linkURL} passHref><a className="border-3 border-white  inline-block py-3 px-10 bg-black hover:bg-gray-300 hover:text-black shadow   text-white  rounded-r-xl rounded-b-xl transition duration-200 button border-2 border-black">{data.ctacard.PrimaryCTA.buttonTitle}</a></Link>
                <Link  href={data.ctacard.SecondaryCTA.linkURL} passHref><a className="  inline-block py-3 px-10 bg-white hover:bg-gray-50 hover:text-black shadow  text-black  rounded-r-xl rounded-b-xl transition duration-200  border-2 border-black button">{data.ctacard.SecondaryCTA.buttonTitle}</a></Link>
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
      data: data,
      h_data: h_data,
      f_data:f_data
    },
  };
};
