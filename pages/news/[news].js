import Layout from "../../component/Layout";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from 'next-seo';
import { BreadcrumbJsonLd } from 'next-seo';
import { LogoJsonLd } from 'next-seo';
import { SocialProfileJsonLd } from 'next-seo';
import { FAQPageJsonLd } from 'next-seo';
import Markdown from "markdown-to-jsx";
import BreadCrumb from "../../component/breadcrumb";
import Event,{resolve_interest_score,resolve_stream_score} from "../../component/page_event";
export default function News_Landing({h_data,f_data,data,n_data}){
  let breadcrumb = [];
  data.PageSEO.BreadCrumb.map((dt) => {
    breadcrumb.push({ position: dt.position, name: dt.name, item: dt.item });
  });
  // Amplitude Tracking onClick
  function onClick(data){
    Event(data)
    }
    return(
        <>
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
				// languageAlternates={[
				// 	{
				// 		hrefLang: `${h_data.OtherSEO.languageAlternates.hrefLang}`,
				// 		href: `${h_data.OtherSEO.languageAlternates.href}`,
				// 	},
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
        logo={process.env.NEXT_PUBLIC_LOGO}
        url={process.env.NEXT_PUBLIC_URL}
      />

            <Layout h_data={h_data} f_data={f_data}>
              
                <section className="pt-24 bg-white space-y-10 mx-4 md:mx-52 flex-col text-center justify-center items-center">
                <BreadCrumb color="black" b_data={breadcrumb}/>
                    <h2 className="text-black heading">{data.PageHeader.header}</h2>
                    <p className=" text-gray-700 subheading ">{data.PageHeader.subHeading}</p>
                    <hr className=" mx-auto"/>
                </section>
             
            <section className="relative py-0 bg-white  ">
                <div className="flex  flex-col items-center justify-between md:px-10 mx-auto  xl:px-5 lg:flex-row">
                    <div className="flex flex-col items-center w-full px-10 pt-5 pb-20 lg:pt-20 lg:flex-row">
                        <div className="relative w-full  bg-cover  ">
                            <div className="relative flex flex-col items-center justify-center w-full h-full ">
                                <div className="relative max-w-4xl">
                                      <div className="pb-16 mb-8 border-b border-gray-400">
                                     
<p className="mt-5 card-subheading text-black text md:text-left">
                          
     <Markdown
                    options={{
                      overrides: {
                        h3: {
                          props: {
                            className: "text-2xl mb-4 text-justify",
                          },
                        },
                         h1: {
                          props: {
                            className: "text-2xl mb-4 text-justify",
                          },
                        },
                        li: {
                          props: {
                            className: "text-justify  list-decimal  ml-3 mb-1 flex-col",
                          }
                            },
                            p: {
                                props: {
                                className:"text-justify mb-3"
                            }
                            },
                            ol: {
                                props: {
                                    className:"mb-4 text-justify"
                                }
                            },
			    ul: {
                                props: {
                                    className:"mb-4 text-justify"
                                }
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
                    {data.NewsContent}
                  </Markdown>

 



</p>



                                    </div>
                                    
                                </div>
                            </div>
                        </div>
            
                        
                </div>
    
        </div>
            </section>
            {/* Related news Section */}
            <section className='w-full pt-8 bg-white sm:pt-12 md:pt-16'>
          <div className='px-2 mx-auto max-w-7xl'>
            <div className='flex justify-center w-full pb-5 mb-4 border-gray-200'>
              <h2 className='section-heading  text-gray-800 '>{data.LatestNewsSectionTitle}</h2>
            </div>

            <div className='grid md:grid-cols-4 gap-6 mb-6'>
              {n_data.map((dt) => (
             <Link key="dt" href={dt.PageSEO.PageURL} >
             <a 
             onClick={()=>{onClick({stream_score:resolve_stream_score('none'),event_name:"Link Click",section_name:"Latest News Section",page_source:`${data.PageSEO.PageTitle}`,label:`${dt.PageHeader.header}`})}}  
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
            </Layout>
        </>
    )
}
export const getServerSideProps = async (ctx) => {
        //fetch strapi data
        const res = await fetch(`https://api.ktern.com/news-center-pages?slug=${ctx.params.news}`, {
            method: 'get',
        });
        const data = await res.json();
        if(data[0]==undefined){
          ctx.res.setHeader('Location', '/404');
          ctx.res.statusCode = 302;
          ctx.res.end();
        }
        // console.log('data1', data);
          const res1 = await fetch('https://api.ktern.com/header', {
            method: 'get',
        });

        const h_data = await res1.json();
        const res2 = await fetch('https://api.ktern.com/footer', {
            method: 'get',
        });
        const f_data = await res2.json();
        const news=await fetch(`https://api.ktern.com/news-center-pages?_sort=updatedAt:desc&slug_nin=${ctx.params.news}&_limit=4`)
        const n_data=await news.json()
        // console.log(n_data)
        return {
            props: {
          data: data[0],
          h_data: h_data,
          f_data:f_data,
          n_data:n_data
            },
        };
    }
