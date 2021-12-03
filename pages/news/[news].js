import Layout from "../../component/Layout";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from 'next-seo';
import { BreadcrumbJsonLd } from 'next-seo';
import { LogoJsonLd } from 'next-seo';
import { SocialProfileJsonLd } from 'next-seo';
import { FAQPageJsonLd } from 'next-seo';
import Markdown from "markdown-to-jsx";
export default function News_Landing({h_data,f_data,data}){
    return(
        <>
         <NextSeo
				title={data.PageSEO.PageTitle}
				description={data.PageSEO.PageDescription}
				canonical={data.PageSEO.CanonicalTag}
				openGraph={{
					url: `${data.PageSEO.ThumbnailImageURL}`,
					title: `${data.PageSEO.PageTitle}`,
					description: `${data.PageSEO.PageDescription}`,
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
						{
							url: 'https://www.example.ie/og-image-03.jpg',
						},
						{
							url: 'https://www.example.ie/og-image-04.jpg',
						},
					],
					site_name: 'SiteName',
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
						hrefLang: 'de',
						href: 'https://www.canonical.ie/de',
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
						rel: 'icon',
						href: 'https://www.test.ie/favicon.ico',
					},
					{
						rel: 'apple-touch-icon',
						href: 'https://www.test.ie/touch-icon-ipad.jpg',
						sizes: '76x76',
					},
					{
						rel: 'manifest',
						href: '/manifest.json',
					},
				]}
			/>
{/* <BreadcrumbJsonLd
      itemListElements={breadcrumb}
    /> */}
	  <LogoJsonLd
        logo={process.env.LOGO}
        url={process.env.URL}
      />

            <Layout h_data={h_data} f_data={f_data}>
                <section className="pt-24 bg-white space-y-10 mx-52 flex-col text-center justify-center items-center">
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
                            className: "text-justify list-decimal ml-3 mb-1 flex-col",
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
            </Layout>
        </>
    )
}
export const getServerSideProps = async ({params}) => {
        //fetch strapi data
        const res = await fetch(`https://api.ktern.com/news-center-pages?slug=${params.news}`, {
            method: 'get',
        });
        const data = await res.json();
        // console.log('data1', data);
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
          data: data[0],
          h_data: h_data,
          f_data:f_data
            },
        };
    }