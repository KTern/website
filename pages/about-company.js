import Layout from "../component/Layout";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { BreadcrumbJsonLd } from "next-seo";
import { LogoJsonLd } from "next-seo";
import { SocialProfileJsonLd } from "next-seo";
import Markdown from "markdown-to-jsx";
import BreadCrumb from "../component/breadcrumb"; 
 import Event,{resolve_interest_score,resolve_stream_score} from "../component/page_event";
export default function About({ data,h_data,f_data ,n_data}) {
// Amplitude Tracking onClick
function onClick(data){
  Event(data)
  }
  let breadcrumb = [];
  data.PageSEO.BreadCrumb.map((dt) => {
    breadcrumb.push({ position: dt.position, name: dt.name, item: dt.item });
  });
  return (
    <>
    	  <LogoJsonLd
        logo={process.env.NEXT_PUBLIC_LOGO}
        url={process.env.NEXT_PUBLIC_URL}
      />
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
           site_name: `${process.env.NEXT_PUBLIC_SITE_TITLE}`,
         }}
         twitter={{
           handle: `${process.env.NEXT_PUBLIC_TWITTER_HANDLE}`,
           site: `${process.env.NEXT_PUBLIC_TWITTER_SITE}`,
           cardType: `${process.env.NEXT_PUBLIC_CARD_TYPE}`,
         }}
         facebook={{
           handle: `${process.env.NEXT_PUBLIC_FACEBOOK_HANDLE}`,
           site: `${process.env.NEXT_PUBLIC_FACEBOOK_SITE}`,
           cardType: `${process.env.NEXT_PUBLIC_CARD_TYPE}`,
           appId: `${process.env.NEXT_PUBLIC_FB_APPID}`,
         }}
        //  languageAlternates={[
        //    {
        //      hrefLang: `${h_data.OtherSEO.languageAlternates.hrefLang}`,
        //      href: `${h_data.OtherSEO.languageAlternates.href}`,
        //    },
        //  ]}
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
     
      
      <Layout h_data={h_data} f_data={f_data}>
      <div className="background bg-cover pt-10 "> <div className="px-10 pt-10"><BreadCrumb color="white" b_data={breadcrumb}/></div>
        <section className='  relative  flex flex-col items-center justify-center w-full   py-4   min-w-screen'>
     
          <div className='flex flex-col space-x-10 items-center justify-center md:mx-auto  xl:p-8 lg:flex-row lg:max-w-7xl lg:p-0'>
            
            <div className='container space-y-5 relative z-20 flex flex-col w-full px-5 pb-1 pr-12 mb-16 text-2xl text-white lg:w-1/2 sm:pr-0 md:pr-6 md:pl-0 lg:pl-5 xl:pr-10 sm:items-center lg:items-start lg:mb-0'>
        
              <h1 className='relative z-20   leading-none text-white heading  sm:text-center lg:text-left'>
                {data.PageHeader.header}
                <br />
                <span className=' text-gray-400 heading '>{data.PageHeader.header2}</span>
              </h1>
              <p className='relative z-20 block mt-6 subheading text-white  sm:text-center lg:text-left'>
                {data.PageHeader.subHeading}
              </p>
               <div className="md:flex md:flex-row space-x-4 ">
                <Link
                  rel="noopener noreferrer"
                  href={data.PageHeader.primaryCTA.linkURL}
                >
                  <a
                  target={data.PageHeader.primaryCTA.openNewTab?'_blank':'_self'}
                     onClick={()=>{onClick({stream_score:resolve_stream_score('none'),event_name:"Button Click",section_name:"Hero Section",page_source:`${data.PageSEO.PageTitle}`,label:`${data.PageHeader.primaryCTA.buttonTitle}`})}}
                    className=" inline-block py-3 px-16 border-2 border-white bg-black hover:bg-gray-300 hover:text-black shadow   text-white  rounded-r-xl rounded-b-xl transition duration-200 button"
                  >
                    {data.PageHeader.primaryCTA.buttonTitle}
                  </a>
                </Link>
                {/* <Link href={data.PageHeader.secondaryCTA.linkURL}>
                  <a className=" sm:mb-4 inline-block  mr-4 border-2 border-black shadow-md py-3 px-14 bg-white  hover:bg-gray-300   text-black   rounded-r-xl rounded-b-xl transition duration-200 uppercase border-2 border-black button ">
                    {data.PageHeader.secondaryCTA.buttonTitle}
                  </a>
                </Link> */}
              </div>
            </div>
            <div className='relative w-full  px-5 rounded-lg cursor-pointer text-white lg:w-1/2 group xl:px-0'>
              {/* <div className='absolute top-0 left-0 w-11/12 -mt-20 opacity-50'>
                <svg className='w-full h-full ml-4 text-gray-400' viewBox='0 0 200 200' xmlns=''>
                  <path
                    fill='currentColor'
                    d='M45,-78C58.3,-70.3,69,-58.2,75.2,-44.4C81.3,-30.7,82.9,-15.3,83.5,0.4C84.2,16,83.8,32.1,76.5,43.9C69.2,55.7,55.1,63.3,41.2,69.4C27.3,75.4,13.6,80,-0.7,81.2C-15.1,82.5,-30.1,80.3,-41.2,72.6C-52.2,64.9,-59.2,51.6,-67.1,38.5C-75.1,25.5,-83.9,12.8,-83.8,0C-83.8,-12.7,-74.9,-25.4,-65.8,-36.4C-56.7,-47.4,-47.4,-56.7,-36.4,-65.7C-25.4,-74.7,-12.7,-83.5,1.6,-86.2C15.9,-89,31.8,-85.7,45,-78Z'
                    transform='translate(100 100)'
                  ></path>
                </svg>
              </div> */}
              <div className='z-10 object-cover w-full md:px-10'>
                <Image priority width={500} height={400} src={data.PageHeader.ImageURL} alt='' />
              </div>
             
            </div>
          </div>
        </section>
        </div>
        {/* <!-- Our Vision--> */}
        <section id="mission" className='anchor  lg:max-w-7xl text-justify px-12 relative w-full md:mx-auto  md:py-5 px-4 bg-white flex flex-col md:flex-row'>
          
          <div className=' w-full mx-auto flex-col justify-center items-center text-center w-full py-4'>
            <p className='mb-4 section-heading text-black '>{data.vision.title}</p>
            <div className=' mb-10'>
              <div className='w-full mt-5 md:mt-0  '>
                <h3 className='mb-5 -mt-1 section-subheading  '>  
                <Markdown
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
                            >
                             {data.vision.Statement}
                            </Markdown></h3>   
              </div>
            </div>
            <div className="w-40 h-0.5 mx-auto bg-gray-100 divide-x-8 "></div>
          </div>
          
        </section>
        {/* <!--Our Vision--> */}
        {/* About Company */}
        <section className=' lg:max-w-7xl text-justify px-12 relative w-full md:mx-auto  md:py-2 px-4 bg-white flex flex-col md:flex-row'>
          
          <div className='w-full mx-auto flex-col justify-center items-center text-center w-full py-4'>
            <p className='mb-4 section-heading text-black '>{data.AboutKTern.Title}</p>
            <div className='mb-10'>
              <div className='w-full mt-5 md:mt-0  '>
                <h3 className='mb-5 -mt-1 section-subheading  '>  <Markdown
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
                            >
                             {data.AboutKTern.Description}
                            </Markdown></h3>   
              </div>
            </div>
            <div className="w-40 h-0.5 mx-auto bg-gray-100 divide-x-8 "></div>
          </div>
          
        </section>
        {/* /About Company */}
        {/* Values */}
        <div className="flex flex-wrap mx-auto bg-black text-white md:p-20  md:px-24 ">
          <div className="w-full md:w-1/4  ">
                        <div className="flex sm:space-x-2 sm:px-20 px-0 md:space-x-10 py-10  sm:py-5 text-center   sticky z-10 md:top-16 sm:top-10 section-heading">
                         {data.Values.Title}
   </div>
  </div>
  <div className="w-full md:w-3/4 pr-10 mb-4 md:mb-0 flex ">
  <div className="w-full ">{data.Values.Steps.map((dt,index)=>(
  <div className="w-full  flex  px-20" key="dt">
            
      {index % 2 == 0 && <div className=" md:text-left  md:w-full"><span className="  md:flex-col "><div className="text-7xl  md:bg-values_gradient bg-no-repeat  md:pl-8 " style={{backgroundSize:'26%',backgroundPosition:'-10% 0%'}} >{index + 1}</div><div className="card-heading">{dt.StepTitle}</div><div className="card-subheading ">{ dt.StepDescription}</div></span></div>}
      {index%2!=0 && <div className=" md:text-right md:w-full"><span className=" md:flex-col "><div className="text-7xl  md:bg-values_gradient bg-no-repeat  md:pr-8 " style={{backgroundSize:'26%',backgroundPosition:'110% 0%'}} >{index + 1}</div><div className="card-heading">{dt.StepTitle}</div><div className="card-subheading ">{ dt.StepDescription}</div></span></div>}
                                
                            </div>        ))}
      </div>
  </div>
	
        </div>
        {/* /Values */}
       
        <section className="md:flex md:space-x-16 py-10 px-10 ">
         {/* DX Innovation Hub */}
        <section className='md:w-1/2 sm:w-full text-justify   bg-white '>
        <div className="hidden md:block">
                <Image priority src={data.AcademicAlliance.Images.imageURL} alt={data.AcademicAlliance.Images.imageDescription} height={data.AcademicAlliance.Images.height} width={data.AcademicAlliance.Images.width}/>
              </div>
            <p className='mb-5 card-heading text-black sm:text-center '>{data.AcademicAlliance.Title}</p>
           
              <div className='w-full mt-5 md:mt-0  '>
                <h3 className='mb-5 card-subheading  '> <Markdown
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
                            >
                             {data.AcademicAlliance.Description}
                            </Markdown></h3>   
              </div>
          
        
           {/* <div className="hidden md:block">
                <Image priority src={data.AcademicAlliance.Images.imageURL} alt={data.AcademicAlliance.Images.imageDescription} height={300} width={500}/>
              </div> */}
        </section>
        {/* /DX Innovation Hub */}
        {/* Digital Dhaanam */}
        <section className=' md:w-1/2 sm:w-full text-justify bg-white '>
        <div className="hidden md:block">
                <Image priority src={data.DigitalDhaanam.Images.imageURL} alt={data.DigitalDhaanam.Images.imageDescription} height={data.DigitalDhaanam.Images.height} width={data.DigitalDhaanam.Images.width}/>
              </div>
            <p className='mb-5 card-heading text-black sm:text-center '>{data.DigitalDhaanam.Title}</p>
         
              <div className='w-full mt-5 md:mt-0  '>
                <h3 className='mb-5 -mt-1 card-subheading  '> <Markdown
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
                            >
                             {data.DigitalDhaanam.Description}
                            </Markdown></h3>   
              </div>
           
          
           {/* <div className="hidden md:block">
                <Image priority src={data.DigitalDhaanam.Images.imageURL} alt={data.DigitalDhaanam.Images.imageDescription} height={data.DigitalDhaanam.Images.height} width={data.DigitalDhaanam.Images.width}/>
              </div> */}
        </section>
        {/* /Digital Dhaanam */}
        </section>
        
        <section className="bg-black overflow-hidden">
                <div className="relative px-16 pt-10 pb-12 mx-auto max-w-7xl xl:px-16">
                    <svg className="relative z-10 w-16 mb-8 text-gray-100 transform opacity-100 fill-current sm:w-20 -rotate-0 rotate rotate-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 46"><defs></defs><g fillRule="nonzero"><path d="M46.651 2.666c1.892-.812 1.06-1.401-1.337-1.81A4.827 4.827 0 0044.323 0a3.914 3.914 0 00-.614.64C34.376-.395 11.639.36 8.676 1.976 6.99 1.437 1.364 9.542.344 13.552c-.436.1-.436.632-.12 1.487a.84.84 0 00.1.28v-.05a2.8 2.8 0 00.247.668h.06c2.814 5.749 14.356 19.796 15 20.673l-.149-.158c2.418 2.587 3.963 5.547 6.291 8.17 2.626 2.213 3.478 1.437 3.399-.065 2.784-1.171 3.289-3.73 4.775-5.655 5.608-7.904 14.742-14.651 19.498-22.763a2.347 2.347 0 00-.09-.575c1.725-2.429-.296-9.018-2.704-12.898zM38.25 24.093c-4.38 5.863-12.355 11.432-13.693 18.15-.33-.903-.903-1.75-1.684-2.493C15.987 31.616 10.4 22.828 3.088 14.931c3.101-1.997 3.636-6.021 5.469-8.615l-.09.187.199-.41-.06.13.08-.151c.31-1.051.463-2.123.455-3.198.876.312 1.796.553 2.745.719 10.333-.633 20.805-.144 31.129-.417.198 1.71 1.387 3.514 1.982 5.094 0-.057 0-.122-.08-.18 1.11 2.243.803 4.937 2.616 6.92-2.953 1.337-8.342 8.048-9.283 9.083zM7.5 14.505v-.01.01z"></path><path d="M9.567 12.925c-.022.243.175.468.486.556 0 .065.05.13.08.094l.139-.05h.069c-1.015.233-1.858.754-2.341 1.445.908.243 1.84.436 2.787.578.208.5.484.985.824 1.445v.094-.036c.387.607.763 1.214 1.16 1.814v-.072c.516.816.992 1.64 1.548 2.457.555.817 1.13 1.9 1.736 2.782a.241.241 0 01-.05-.08c1.587 2.169 2.599 4.59 4.444 6.635 3.482 2.002-.536-3.874-1.2-4.777-1.101-1.662-2.232-3.324-3.294-5-.892-1.446-1.845-2.892-2.787-4.337-.149-.354-.298-.65-.446-.925 2.975-.152 5.951-.455 8.927-.513 3.849-.145 7.737 0 11.606 0-.466 1.604-.526 4.025-.992 4.85-.387 3.403-3.968 7.096-2.46 10.37.605-.477 1.029-1.06 1.23-1.692 1.21-4.43 3.918-8.99 3.75-13.535 2.579.03 5.159-.045 7.727-.224 3.65-.853 3.134-2.32-.546-2.349h.218c-2.55.05-5.098.058-7.648.05a27.367 27.367 0 00-3.095-5.181.511.511 0 01-.089-.13c-1.408 1.257.308 3.714 1.597 5.304-4.85 0-9.7 0-14.551.217h.218c-2.113.333-5.168.116-7.53.564.165-.11.255-.265.249-.427a.376.376 0 000-.151c2.48-2.212 7.241-8.166 3.115-6.367l-4.88 6.59zm3.68 3.526a.19.19 0 010 .065.285.285 0 010-.08v.015zM11.5 17.505v-.01z"></path><path d="M14.499 21.55v-.1a.54.54 0 010 .1zM41.874 10c.462-1.423-.366-2.884-2.197-3.876A.87.87 0 0139.522 6c-1.373.757.287 2.644 1.266 3.49.303.209.671.382 1.086.51zM40.5 9.505v-.01z"></path></g></svg>
                    <div className="relative z-20">
                        <h3 className="section-heading text-left text-white ">{data.FastFacts.Title}</h3>
                        <div className="md:flex  md:space-x-5 mt-4 sm:flex-row items-center">
                            <p className="section-subheading text-left text-gray-100">{data.FastFacts.Description}</p>
                            <div className="flex mt-5 space-x-1 sm:mt-1 sm:ml-3 items-center my-auto">
                                <div className="w-10 h-2 bg-gray-400 rounded-full opacity-100"></div>
                                <div className="w-8 h-2 bg-gray-400 rounded-full opacity-75"></div>
                                <div className="w-4 h-2 bg-gray-400 rounded-full opacity-50"></div>
                                <div className="w-3 h-2 bg-gray-400 rounded-full opacity-25"></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full opacity-10"></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full opacity-5"></div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 mt-10 gap-14 lg:grid-cols-3">
                        {data.FastFacts.Steps.map((dt)=>(<div key="dt" className="flex text-white">
                            <div className="pr-5"><Image priority src={dt.stepicon} height={40} width={40} alt=""/></div>
                            <div className="relative space-y-2">
                                <h4 className="card-heading">{dt.StepTitle}</h4>
                                <p className="card-subheading text-gray-300">{dt.StepDescription}
                            </p></div>
                        </div>))}

                      
                    </div>
                </div>
        </section>
        {/* <!-- Our Customers--> */}
        <section className="w-full py-10 pb-16 bg-secondary">
                <div className="flex flex-col items-center max-w-6xl px-10 mx-auto xl:px-0">
                    <p className="card-heading text-gray-400 uppercase">{data.ourcustomerstitle}</p>
                    <div className="flex flex flex-wrap justify-center sm:flex-row space-x-16">
                        {data.TrustedByLogos.map((dt)=>(<div key="dt">
                          <Image priority src={dt.imageURL} height={dt.height} width={dt.width} alt={dt.imageDescription}/>
                        </div>))}
                    </div>
                </div>
        </section>
        {/* <!--Resources About the Company--> */}
        <section className='w-full pt-8 bg-white sm:pt-12 md:pt-16'>
          <div className='px-2 mx-auto max-w-7xl'>
            <div className='flex justify-center w-full pb-5 mb-4 border-gray-200'>
              <h2 className='section-heading  text-gray-800 '>{data.LatestNewsSectionTitle}</h2>
            </div>

            <div className='grid md:grid-cols-4 gap-6 mb-6'>
              {n_data.map((dt) => (
             <Link key="dt" href={dt.PageSEO.PageURL} >
             <a
               onClick={()=>{onClick({stream_score:resolve_stream_score('none'),event_name:"Card Click",section_name:"Related News Section",page_source:`${data.PageSEO.PageTitle}`,label:`${dt.PageHeader.header}`})}}
             className=" relative flex   px-2  group overflow-hidden false transition transform hover:-translate-y-1 duration-500 ">   
             <span className={`absolute rounded-lg top-0 left-0 h-full mt-1 ml-1 bg-secondary  group-hover:bg-secondary `} style={{height:'250px',width:'600px'}}></span>
             <div 
               className={`relative  rounded-lg shadow bg-white flex-col p-5 px-5  group overflow-hidden false border border-black hover:border-primary `}
             >
               <div className=" bg-white grid-rows-2 gap-3  mr-12 text-black">
                                           
                                          <div className="h-50">
                                           <h3 className="my-2  header mb-5 text-gray-800">{dt.PageHeader.header}</h3>       
                                          <div className="bg-dxaas-primary mb-4 h-0.5 w-20"></div>
                                          </div>
                                           <div className="h-1/2 navbar-s">{dt.date}</div>
                               </div>
             </div>
             </a>
             </Link>
              ))}
            </div>
        
          </div>
        </section>
        {/* / Resources Setion */}
        {/* <!-- Footer CTA Features Page --> */}
        <section className=' lg:max-w-7xl text-justify px-12 relative bg-white'>
          <div className=' py-8 mx-auto sm:py-10 lg:py-20 max-w-7xl'>
            <div className='relative py-6 overflow-hidden  background lg:py-12 md:px-6 lg:p-16 lg:flex lg:items-center lg:justify-between md:shadow-xl md:bg-purple-1000'>
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
                  <a
                   target={data.ctacard.PrimaryCTA.openNewTab?'_blank':'_self'}
                        onClick={()=>{onClick({stream_score:resolve_stream_score('none'),event_name:"Button Click",section_name:"CTA Section",page_source:`${data.PageSEO.PageTitle}`,label:`${data.ctacard.PrimaryCTA.buttonTitle}`})}}
                  className='  inline-block py-3 border-2 border-white px-10 bg-black hover:bg-gray-300 hover:text-black shadow   text-white  rounded-r-xl rounded-b-xl transition duration-200 button border-2 border-black'>
                    {data.ctacard.PrimaryCTA.buttonTitle}
                  </a>
                </Link>
                <Link href={data.ctacard.SecondaryCTA.linkURL} passHref>
                  <a
                   target={data.PageHeader.secondaryCTA.openNewTab?'_blank':'_self'}
                  onClick={()=>{onClick({stream_score:resolve_stream_score('none'),event_name:"Button Click",section_name:"CTA Section",page_source:`${data.PageSEO.PageTitle}`,label:`${data.ctacard.SecondaryCTA.buttonTitle}`})}}
                  className='  inline-block py-3 px-10 bg-white hover:bg-gray-50 hover:text-black shadow  text-black  rounded-r-xl rounded-b-xl transition duration-200  border-2 border-black button'>
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

export const getStaticProps = async ({params}) => {
  const res = await fetch(`https://api.ktern.com/about-company`, {
    method: "get",
  });

  const data = await res.json();

  // console.log(data);
	const res1 = await fetch('https://api.ktern.com/header', {
		method: 'get',
	});
  const h_data = await res1.json();
  const res2 = await fetch('https://api.ktern.com/footer', {
		method: 'get',
	});
	const f_data = await res2.json();
  const news=await fetch(`https://api.ktern.com/news-center-pages?_sort=updatedAt:desc&_limit=4`)
  const n_data=await news.json()
  // console.log(n_data)
  return {
    props: {
      data: data,
      h_data: h_data,
      f_data:f_data,
      n_data:n_data
    },
  };
};
