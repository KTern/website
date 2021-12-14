import Head from "next/head"
import Layout from "../component/Layout";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from 'next-seo';
import { BreadcrumbJsonLd } from 'next-seo';
import { LogoJsonLd } from 'next-seo';
import { SocialProfileJsonLd } from 'next-seo';
import { FAQPageJsonLd } from 'next-seo';
import Carousel from 'react-multi-carousel';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BreadCrumb from "../component/breadcrumb";
import FAQ from "../component/faq";
import Markdown from "markdown-to-jsx";
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
export default function Consultingpartner({data,h_data,f_data}){
    let breadcrumb = [];
  data.PageSEO.BreadCrumb.map((dt) => {
    breadcrumb.push({ position: dt.position, name: dt.name, item: dt.item });
  });
    return (
        <>
            <Head><link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/></Head>
            
            <NextSeo
					title={data.PageSEO.PageTitle}
          description={data.PageSEO.PageDescription}
          canonical={data.PageSEO.CanonicalTag}
          openGraph={{
            url: `${data.PageSEO.PageURL}`,
            title: `${data.PageSEO.PageTitle}`,
            description: `${data.PageSEO.PageDescription}`,
            images: [
              {
                url:`${data.PageSEO.ThumbnailImageURL}`,
                width: 1920,
                height: 1080,
                alt: `${data.PageSEO.PageTitle}`,
                type: 'image/png',
              }
            ],
            site_name: `${process.env.SITE_TITLE}`,
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
          // languageAlternates={[
          //   {
          //     hrefLang: `${h_data.OtherSEO.languageAlternates.hrefLang}`,
          //     href: `${h_data.OtherSEO.languageAlternates.href}`,
          //   },
          // ]}
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
              rel: 'icon',
              href: 'https://storage.googleapis.com/ktern-public-files/website/icons/favicon.ico',
            },
            {
              rel: 'apple-touch-icon',
              href: 'https://storage.googleapis.com/ktern-public-files/website/icons/apple-touch-icon-76x76.png',
              sizes: '76x76',
            },
            {
              rel: 'manifest',
              href: '/manifest.json',
            },
          ]}
			/>
<BreadcrumbJsonLd
      itemListElements={breadcrumb}
    />
	  <LogoJsonLd
        logo={process.env.LOGO}
        url={process.env.URL}
      />

             <FAQPageJsonLd
      mainEntity={[
        {
          questionName: 'How long is the delivery time?',
          acceptedAnswerText: '3-5 business days.',
        },
        {
          questionName: 'Where can I find information about product recalls?',
          acceptedAnswerText: 'Read more on under information.',
        },
      ]}
    />
        <Layout h_data={h_data} f_data={f_data}>                
            {/* <!-- Header Section --> */}
                <section className="w-full py-12 bg-secondary">
            <div className="flex flex-col items-center px-4 mx-auto max-w-7xl lg:flex-row">
                <div className="relative z-20 flex flex-col items-start justify-center w-full h-full lg:w-1/2">
                  <BreadCrumb color="black" b_data={breadcrumb}/>
                    <p className="max-w-max mt-4 px-2 py-1 mb-5 font-medium hyperlink tracking-wider text-gray-900 uppercase bg-gray-200 rounded-full ">
                    {data.PageHeader.Tag}
                </p>
                <h5 className="mb-3 heading font-bold leading-none sm:text-4xl ">
                    {data.PageHeader.header}
                </h5>
                <p className=" mb-5 text-gray-600 subheading">
                    {data.PageHeader.subHeading}                </p>
                 <div className="md:flex md:items-center md:space-x-4 sm:space-y-6">
                   <Link  href={data.PageHeader.primaryCTA.linkURL} passHref><a className="lg:inline-block py-4 px-6 bg-black hover:bg-gray-300 hover:text-black shadow uppercase text-white  rounded-r-xl hyperlink rounded-b-xl transition duration-200 button ">{data.PageHeader.primaryCTA.buttonTitle}</a></Link>
                    <Link href={data.PageHeader.secondaryCTA.linkURL}  passHref>
                        <a className=" inline-block sm:mb-4  md:mr-4  shadow-md py-3 px-6 hover:text-white   hover:bg-gray-300   text-black   rounded-r-xl bg-white rounded-b-xl transition duration-200 uppercase  button">{data.PageHeader.secondaryCTA.buttonTitle}
                        <svg className="inline-block w-2 ml-2" fill="currentColor" viewBox="0 0 12 12">
                            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z">
                            </path>
                        </svg>
                        </a>
                    </Link>
                </div>
                </div>
               <div className="hidden lg:block relative z-10 w-full h-full my-16 lg:my-0 lg:w-1/2">
                    <Image className="relative z-40 w-full h-full" src={data.PageHeader.ImageURL} alt="hero image" width={data.PageHeader.ImageWidth} height={data.PageHeader.ImageHeight }/>
                     </div>   </div>
            </section>
         {/* <!-- Why Become KTern Consulting Partner--> */}
         <section className="relative w-full md:px-8  leading-6 bg-gray-800 border-0 border-gray-200 border-solid text-black">
            <div className="flex flex-col items-center max-w-6xl px-8 py-20 mx-auto leading-6 border-solid md:items-stretch md:justify-center md:py-24">
                <h2 className="w-full m-0 section-heading text-center border-0 border-gray-200 sm:text-3xl text-white">{data.WhySectionTitle}</h2>
               
                <div className="grid grid-cols-3 md:gap-5 mt-10 sm:grid-cols-1 lg:grid-cols-12">
                   {data.WhyConsultingPartner.map((data)=>( <div key="data" className="max-w-xs col-span-4  border-0 border-gray-200 text-gray-50">
                    <div className="box-border flex flex-col  h-full px-2 py-8 mx-4 leading-6 border-solid sm:items-start sm:text-left">
                            <p className="max-w-max p-3 mb-2  font-medium hyperlink tracking-wider text-gray-900 uppercase bg-gray-200 rounded-full ">
                                        <Image src={data.Icon.imageURL} height={data.Icon.height} width={data.Icon.width} alt=""></Image>
                                        
              </p>
                        <div className="mt-6   border-0 border-gray-200 sm:text-left text-gray-50">
                            <span className="box-border card-heading  border-solid sm:text-left text-gray-50">{data.CardTitle}</span>
                            <p className="box-border mx-0 mt-2 mb-0 card-subheading  text-gray-300 border-solid sm:text-left">{data.CardDescription}</p>
                        </div>
                    </div>
                    </div>))}             
                </div>
            </div>
            </section>
            {/* <!-- Partners --> */}
            <div className="px-4 py-5">
						<div className=" px-4 mx-auto">
							<h2 className=" text-center mb-7 text-gray-500 section-heading sm:text-xl">
								{data.PartnerLogoTitle}
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
           
        {/* <!--Detailed Look at Partnership Benefits--> */}
        <section className="relative w-full md:px-8 py-10 pb-20 leading-6 bg-white border-0 border-gray-200 border-solid text-black">
            <div className="flex flex-col items-center max-w-6xl px-8  mx-auto leading-6 border-solid md:items-stretch md:justify-center ">
                <h2 className="w-full m-0 section-heading text-center border-0 border-gray-200 sm:text-3xl">{data.PartnerBenefitTitle}</h2>
               
                <div className="grid grid-cols-4  mt-10 sm:grid-cols-1 ">
                   {data.PartnershipBenefits.map((data)=>( <div key="data" className="shadow-lg   border-gray-200 text-gray-50">
                    <div className="box-border flex flex-col  h-full px-2 py-8 mx-4 leading-6 border-solid sm:items-start sm:text-left">
                            <p className="max-w-max p-3 mb-2  font-medium hyperlink tracking-wider text-gray-900 uppercase rounded-full ">
                                        <Image src={data.Icon.imageURL} height={data.Icon.height} width={data.Icon.width} alt={data.Icon.imageDescription}></Image>
                                        
              </p>
                        <div className="mt-6   border-0 border-gray-200 sm:text-left text-black">
                            <span className="box-border card-heading  border-solid sm:text-left text-black">{data.Heading }</span>
                            <p className="box-border mx-0 mt-2 mb-0 card-subheading  text-gray-800 border-solid sm:text-left">{data.BenefitContent}</p>
                        </div>
                    </div>
                    </div>))}             
                </div>
            </div>
            </section>
            {/* <!--KTern Customer Testimonials--> */}
       
            {/* <!--Steps to join KTern--> */}
            <section className="pt-10 pb-5 2xl:py-20 py-5 bg-black overflow-hidden">
            <div className="px-14 md:mx-auto ">
                <div className="mb-10 md:max-w-4xl  md:mx-auto sm:mb-24 text-center">
                            <span className="section-heading  text-white">{data.PartnershipSteps.Title}</span>
                <h2 className="mt-4 section-subheading text-white">{data.PartnershipSteps.Description}</h2>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-1 gap-3 mb-10">
                {data.PartnershipSteps.Steps.map((dt,index)=>(<div key="index" className="w-full  md:px-10  md:mb-20 lg:mb-0">
                    <div className="relative flex-col space-y-3">
                    
                    <div className="md:mr-8">
                        <span className="flex justify-center items-center w-14 h-14 text-black bg-white card-heading  rounded-full">{index+1}</span>
                    </div>
                    <div className="max-w-xs">
                        <h3 className="mb-2 card-heading text-white">{dt.StepTitle}</h3>
                        <p className="card-subheading text-gray-200"> <Markdown
                              options={{
                                overrides: {
                                  p: {
                                    props: {
                                      className:
                                        "text-md text-justify ",
                                    },
                                  },
                                  strong: {
                                    props: {
                                      className: "",
                                    },
                                  },
                                  a:{
                                    props:{
                                      className:"text-blue-900 hover:underline "
                                    }
                                  }
                                },
                              }}
                              className=""
                            >{dt.StepDescription}</Markdown></p>
                    </div>
                    </div>
                </div>))}
                
                </div>
                
            </div>
            </section>
               {/* <!--KTern FAQ--> */}

               
                            
                      <FAQ data={data.FAQSection} title={data.FAQTitle}/>
                             
                         
                            
                      
{/* <!-- Footer CTA --> */}
<section className="bg-white">
                <div className="md:px-8 py-8 mx-auto sm:py-10 lg:py-20 max-w-7xl">
                <div className="relative py-6 overflow-hidden  background lg:py-12 md:px-6 lg:p-16 lg:flex lg:items-center lg:justify-between md:shadow-xl md:bg-purple-1000">
                <div className="absolute top-0 right-0 hidden w-full -mt-20 transform rotate-45 translate-x-1/2 bg-white sm:block h-96 opacity-5"></div>
                <div className="absolute top-0 left-0 hidden w-full -mt-20 transform rotate-45 -translate-x-1/2 bg-white sm:block h-96 opacity-5"></div>
            <div className="relative p-6 max-w-xl md:p-0 md:pb-4">
                <h2 className="card-heading   tracking-tight text-white sm:text-4xl sm:leading-10">{data.CTA.CTATitle}</h2>
                <p className="w-full mt-5 card-subheading text-white ">{data.CTA.CTADescription}</p>
                </div>
                <div className="relative flex flex-col items-center w-full px-6 space-y-5 md:space-x-5 md:space-y-0 md:flex-row md:w-auto lg:flex-shrink-0 md:px-0">
                <Link  href={data.CTA.PrimaryCTA.linkURL} passHref><a className="border-3 sm:px-16 border-white  inline-block py-3 px-10 bg-black hover:bg-gray-300 hover:text-black shadow   text-white  rounded-r-xl rounded-b-xl transition duration-200 button border-2 border-black">{data.CTA.PrimaryCTA.buttonTitle}</a></Link>
                <Link  href={data.CTA.SecondaryCTA.linkURL} passHref><a className="  inline-block py-3 px-10 bg-white hover:bg-gray-50 hover:text-black shadow  text-black  rounded-r-xl rounded-b-xl transition duration-200  border-2 border-black button">{data.CTA.SecondaryCTA.buttonTitle}</a></Link>
                </div>
                </div>
                </div>
            </section> 
            </Layout>
            </>
    )
}
export const getServerSideProps = async () => {
   
//    fetch strapi data
    const res = await fetch(`https://api.ktern.com/consulting-partner`, {
		method: 'get',
	});
	const data = await res.json();
	// console.log('data1', data);
  	const res1 = await fetch('https://api.ktern.com/header', {
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
}