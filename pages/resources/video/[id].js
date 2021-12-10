import { VideoJsonLd } from "next-seo";
import Layout from "../../../component/Layout"
import Head from "next/head"
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from 'next-seo';
import { BreadcrumbJsonLd } from 'next-seo';
import { LogoJsonLd } from 'next-seo';
import { SocialProfileJsonLd } from 'next-seo';
import Markdown from "markdown-to-jsx";
import BreadCrumb from "../../../component/breadcrumb";
export default function Video({ data,h_data,f_data,v_data }){
  let breadcrumb = [];
  data.PageSEO.BreadCrumb.map((dt) => {
    breadcrumb.push({ position: dt.position, name: dt.name, item: dt.item });
  });
    return (
      <>
      <Head>
      <script type='text/javascript' src='https://platform-api.sharethis.com/js/sharethis.js#property=60fa43c683fc3c00121c8da1&product=inline-share-buttons' async='async'></script>
      </Head>
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
					handle: '@handle',
					site: '@site',
					cardType: 'summary_large_image',
				}}
				facebook={{
					handle: '@handle',
					site: '@site',
					cardType: 'summary_large_image',
					appId: '1234567890',
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
<BreadcrumbJsonLd
      itemListElements={breadcrumb}
    />
	  <LogoJsonLd
        logo={process.env.LOGO}
        url={process.env.URL}
      />
<SocialProfileJsonLd
      type="Person"
      name="your name"
      url="http://www.your-site.com"
      sameAs={[
        'http://www.facebook.com/your-profile',
        'http://instagram.com/yourProfile',
        'http://www.linkedin.com/in/yourprofile',
        'http://plus.google.com/your_profile',
      ]}
    />
     <VideoJsonLd
        name='How to make a Party Coffee Cake'
        description='This is how you make a Party Coffee Cake.'
        contentUrl='http://www.example.com/video123.mp4'
        embedUrl='http://www.example.com/videoplayer?video=123'
        uploadDate='2018-02-05T08:00:00+08:00'
      
        thumbnailUrls={[
          "https://example.com/photos/1x1/photo.jpg",
          "https://example.com/photos/4x3/photo.jpg",
          "https://example.com/photos/16x9/photo.jpg",
        ]}
      />
        <Layout h_data={h_data} f_data={f_data}>
        
          <section className={`py-28 px-20 bg-${data.VideoLandingPage.DigitalStream}-secondary `}>
          <BreadCrumb color="black" b_data={breadcrumb}/>   
        <div className="space-x-10 flex items-center justify-center text-center">
          <div className="w-1/2">
        
          <p className={`max-w-max mt-4 px-2 py-1 mb-5 ${data.VideoLandingPage.DigitalStream} hyperlink text-white uppercase  rounded-full `}>
               { data.Tag}
              </p>
            <h2 className=" section-heading mb-5 text-justify">{data.VideoLandingPage.PageHeader}</h2>
            <p className=" section-subheading text-justify"> <Markdown
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
                   {data.VideoLandingPage.Description}
                  </Markdown>
</p>
<div className="sharethis-inline-share-buttons  space-x-4"></div>
        </div>
        <div className="w-1/2">
        <h2 className="md:px-20 p-4 mx-auto max-w-7xl">
                  <iframe width="560" height="315" src={data.VideoLandingPage.VideoEmbedUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </h2>
        </div>
        </div>
            </section>
      {/* Related Resources Section */}
      <section className='w-full pt-8 bg-white sm:pt-12 md:pt-16'>
          <div className='px-2 mx-auto max-w-7xl'>
            <div className='flex justify-center w-full pb-5 mb-4 border-gray-200'>
              <h2 className='section-heading  text-gray-800 '>{data.VideoLandingPage.RelatedResources}</h2>
            </div>

            <div className='grid grid-cols-4 gap-6 mb-6'>
              {v_data.map((dt) => (
              <div key="dt" className="relative flex  px-2  group overflow-hidden false transition transform hover:-translate-y-1 duration-500" >
              <span className={`absolute top-0 left-0 h-full mt-1 ml-1 bg-secondary  group-hover:bg-${dt.VideoLandingPage.DigitalStream}-secondary `} style={{height:'400px',width:'345px'}}></span>
                              <div  className={`relative shadow bg-white flex-col p-5 px-5  group overflow-hidden false border border-black hover:border-${dt.VideoLandingPage.DigitalStream}-primary `}>   
                            <div className="bg-white">
                            <Link href={dt.PageSEO.PageURL} passHref>
                                    <a className="relative h-3/5 w-full block w-full h-44 overflow-hidden rounded">
                                    
                            <Image className="bg-secondary  object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src={dt.PageSEO.ThumbnailImageURL} alt={dt.VideoLandingPage.PageHeader} width="550" height="300"/>
                            </a> 
                            </Link>
                            </div>
              <Link href={dt.PageSEO.PageURL} passHref>
              <a className="bg-white">
                            <span className="bg-white block card-subheading h-1/5 font-semibold leading-tight text-gray-700 mb-4 hover:text-gray-900 ">{dt.VideoTitle}</span>
                        <Link href={dt.PageSEO.PageURL}  passHref>
                                        <a className="flex bg-white w-full inline-flex h-1/5 items-center   text-black hover:text-gray-400 group ">
                                        <span className="hyperlink group-hover:text-gray-300">{dt.LatestVideoCTA}</span>
                                        <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                        </a>
                                    </Link>
                                    </a>
                            </Link>
                            </div>
                        </div>
              ))}
            </div>
        
          </div>
        </section>
        </Layout>
        </>
    )
}

export const getServerSideProps = async ({params}) => {
    // strapi dt to be acquired
    const res = await fetch(`https://api.ktern.com/videos?slug=${params.id}`, {
      method: 'get',
  });
    const data = await res.json();
    // console.log(data)
        const res1 = await fetch('https://api.ktern.com/header', {
          method: 'get',
      });
    const h_data = await res1.json();
    const res2 = await fetch('https://api.ktern.com/footer', {
          method: 'get',
      });
      const f_data = await res2.json();
      const videos=await fetch(`https://api.ktern.com/videos?_sort=updatedAt:desc&slug_nin=${params.id}&_limit=4`)
      const v_data=await videos.json()
      console.log(v_data,v_data.length)
    return {
      props: {
        data: data[0],
        h_data: h_data,
      f_data:f_data,
      v_data:v_data
    },
    };
  };