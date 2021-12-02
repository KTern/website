import Layout from "../component/Layout";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { BreadcrumbJsonLd } from "next-seo";
import { LogoJsonLd } from "next-seo";
import { SocialProfileJsonLd } from "next-seo";
import Markdown from "markdown-to-jsx";
export default function About({ data,h_data,f_data }) {
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
        canonical={data.PageSEO.CanonicalTag}
        openGraph={{
          url:`${data.PageSEO.ThumbnailImageURL}`,
          title: "Open Graph Title",
          description: "Open Graph Description",
          images: [
            {
              url: `${data.PageSEO.ThumbnailImageURL}`,
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            }
          ],
          site_name: "KTern.AI"
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
     
      
      <Layout h_data={h_data} f_data={f_data}>
        <section className='  relative  flex flex-col items-center justify-center w-full   py-20 bg-secondary bg-cover  min-w-screen'>
          <div className='flex flex-col items-center justify-center md:mx-auto  xl:p-8 lg:flex-row lg:max-w-7xl lg:p-0'>
            <div className='container space-y-5 relative z-20 flex flex-col w-full px-5 pb-1 pr-12 mb-16 text-2xl text-gray-700 lg:w-1/2 sm:pr-0 md:pr-6 md:pl-0 lg:pl-5 xl:pr-10 sm:items-center lg:items-start lg:mb-0'>
              <h1 className='relative z-20   leading-none text-black heading  sm:text-center lg:text-left'>
                {data.PageHeader.header}
                <br />
                <span className=' text-gray-400 heading '>{data.PageHeader.header2}</span>
              </h1>
              <p className='relative z-20 block mt-6 subheading text-black  sm:text-center lg:text-left'>
                {data.PageHeader.subHeading}
              </p>
               <div className="md:flex md:flex-row space-x-4 ">
                <Link
                  rel="noopener noreferrer"
                  href={data.PageHeader.primaryCTA.linkURL}
                >
                  <a
                    target="_blank"
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
                <Image width={600} height={500} src={data.PageHeader.ImageURL} alt='' />
              </div>
             
            </div>
          </div>
        </section>
        {/* <!-- Our Vision--> */}
        <section className=' lg:max-w-7xl text-justify px-12 relative w-full md:mx-auto  md:py-5 px-4 bg-white flex flex-col md:flex-row'>
          
          <div className=' w-full mx-auto'>
            <p className='mb-5 section-heading text-black '>{data.vision.title}</p>
            <div className='flex flex-col md:flex-row'>
              <div className='w-full mt-5 md:mt-0 md:w-8/12 '>
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
                             {data.vision.Statement}
                            </Markdown></h3>   
              </div>
            </div>
          </div>
           <div className=" w-full hidden md:block ">
                <Image src={data.vision.Image.imageURL} alt={data.vision.Image.imageDesscription} height={data.vision.Image.height} width={data.vision.Image.width}/>
              </div>
        </section>
        {/* <!--Our Vision--> */}
        {/* About Company */}
        <section className=' lg:max-w-7xl text-justify px-12 relative w-full md:mx-auto  md:py-5 px-4 bg-white flex flex-col md:flex-row'>
          
          <div className=' w-full mx-auto'>
            <p className='mb-5 section-heading text-black '>{data.AboutKTern.Title}</p>
            <div className='flex flex-col md:flex-row'>
              <div className='w-full mt-5 md:mt-0 md:w-8/12 '>
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
          </div>
           <div className=" w-full hidden md:block ">
                <Image src={data.AboutKTern.Image.imageURL} alt={data.AboutKTern.Image.imageDesscription} height={data.AboutKTern.Image.height} width={data.AboutKTern.Image.width}/>
              </div>
        </section>
        {/* /About Company */}
        {/* Values */}
        <div className="flex flex-wrap mx-auto bg-black text-white md:p-20  md:px-24 ">
          <div className="w-full md:w-1/3  ">
                        <div className="flex sm:space-x-2 sm:px-20 px-0 md:space-x-10 py-10  sm:py-5 text-center   sticky z-10 md:top-16 sm:top-10 section-heading">
                         {data.Values.Title}
   </div>
  </div>
  <div className="w-full md:w-2/3 pr-10 mb-4 md:mb-0 flex ">
  <div className="w-full ">{data.Values.Steps.map((dt,index)=>(
  <div className="w-full mb-10 flex  px-20" key="dt">
            
      {index % 2 == 0 && <div className=" md:text-left  md:w-full"><span className="  md:flex-col md:space-y-4"><div className="text-8xl  md:bg-values_gradient bg-no-repeat md:p-10 md:pl-16 " style={{backgroundSize:'26%',backgroundPosition:'0% 100%'}} >{index + 1}</div><div className="card-heading">{dt.StepTitle}</div><div className="card-subheading">{ dt.StepDescription}</div></span></div>}
      {index%2!=0 && <div className=" md:text-right md:w-full"><span className=" md:flex-col md:space-y-4"><div className="text-8xl  md:bg-values_gradient bg-no-repeat md:p-10 md:pr-12 " style={{backgroundSize:'26%',backgroundPosition:'100% 0%'}} >{index + 1}</div><div className="card-heading">{dt.StepTitle}</div><div className="card-subheading">{ dt.StepDescription}</div></span></div>}
                                
                            </div>        ))}
      </div>
  </div>
	
        </div>
        {/* /Values */}
        {/* DX Innovation Hub */}
        <section className=' lg:max-w-7xl text-justify px-12 relative  mx-auto px-8 py-5  bg-white flex flex-col md:flex-row'>
          <div className='max-w-6xl mx-auto'>
            <p className='mb-5 section-heading text-black sm:text-center '>{data.AcademicAlliance.Title}</p>
            <div className='flex flex-col md:flex-row'>
              <div className='w-full mt-5 md:mt-0 md:w-8/12 '>
                <h3 className='mb-5 -mt-1 section-subheading  '> <Markdown
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
            </div>
          </div>
           <div className="hidden md:block">
                <Image src={data.AcademicAlliance.Images.imageURL} alt={data.AcademicAlliance.Images.imageDescription} height={data.AcademicAlliance.Images.height} width={data.AcademicAlliance.Images.width}/>
              </div>
        </section>
        {/* /DX Innovation Hub */}
        {/* Digital Dhaanam */}
          <section className=' lg:max-w-7xl text-justify px-12 relative  mx-auto px-8 py-5  bg-white flex flex-col md:flex-row'>
          <div className='max-w-6xl mx-auto'>
            <p className='mb-5 section-heading text-black sm:text-center '>{data.DigitalDhaanam.Title}</p>
            <div className='flex flex-col md:flex-row'>
              <div className='w-full mt-5 md:mt-0 md:w-8/12 '>
                <h3 className='mb-5 -mt-1 section-subheading  '> <Markdown
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
            </div>
          </div>
           <div className="hidden md:block">
                <Image src={data.DigitalDhaanam.Images.imageURL} alt={data.DigitalDhaanam.Images.imageDescription} height={data.DigitalDhaanam.Images.height} width={data.DigitalDhaanam.Images.width}/>
              </div>
        </section>
        {/* /Digital Dhaanam */}
       
        {/* <!--Resources About the Company--> */}
        <section className=' lg:max-w-7xl text-justify px-12 relative w-full pt-8 bg-white sm:pt-12 md:pt-16'>
          <div className='px-2 mx-auto max-w-7xl'>
            <div className='flex justify-center w-full pb-5 mb-4 border-gray-200'>
              <h2 className='section-heading  text-gray-800 '>{data.relatedresourcestitle}</h2>
            </div>

            <div className='grid grid-cols-4 gap-6 mb-6'>
              {data.RelatedResources.map((data) => (
              <div key="data" className={`relative w-full h-full bg-white  space-y-3 shadow-lg  p-4  group overflow-hidden transition transform hover:-translate-y-3 duration-500 hover:border-black border-2 `} >
                   
              <div className="bg-white">
              <Link href={data.CTAUrl} passHref>
                      <a className="relative h-3/5 w-full block w-full h-44 overflow-hidden rounded">
                      
              <Image className="bg-secondary  object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src={data.Icon.imageURL} alt={data.Icon.imageDescription} width="550" height="300"/>
              </a> 
              </Link>
              </div>
<Link href={data.CTAUrl} passHref>
<a className="bg-white">
              <span className="bg-white block card-subheading h-1/5 font-semibold leading-tight text-gray-700 mb-4 hover:text-gray-900 ">{data.CardTitle}</span>
          <Link href={data.CTAUrl}  passHref>
                          <a className="flex bg-white w-full inline-flex h-1/5 items-center   text-black hover:text-gray-400 group ">
                          <span className="hyperlink group-hover:text-gray-300">{data.CTAText}</span>
                          <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                          </svg>
                          </a>
                      </Link>
                      </a>
              </Link>
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
                  <a className='  inline-block py-3 border-2 border-white px-10 bg-black hover:bg-gray-300 hover:text-black shadow   text-white  rounded-r-xl rounded-b-xl transition duration-200 button border-2 border-black'>
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
