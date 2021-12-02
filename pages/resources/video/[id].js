import Layout from "../../../component/Layout"
import Head from "next/head"
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from 'next-seo';
import { BreadcrumbJsonLd } from 'next-seo';
import { LogoJsonLd } from 'next-seo';
import { SocialProfileJsonLd } from 'next-seo';
import Markdown from "markdown-to-jsx";
export default function Video({ data,h_data,f_data }){
    return (
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
      itemListElements={[
        {
          position: 1,
          name: 'Books',
          item: 'https://example.com/books',
        },
        {
          position: 2,
          name: 'Authors',
          item: 'https://example.com/books/authors',
        },
        {
          position: 3,
          name: 'Ann Leckie',
          item: 'https://example.com/books/authors/annleckie',
        },
        {
          position: 4,
          name: 'Ancillary Justice',
          item: 'https://example.com/books/authors/ancillaryjustice',
        },
      ]}
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
        <Layout h_data={h_data} f_data={f_data}>
          <section className={`py-20 px-5 ${data.VideoLandingPage.DigitalStream} flex items-center justify-center text-center`}>
          <div className="w-1/2">
            <h2 className="text-white section-heading mb-5 text-justify">{data.VideoLandingPage.PageHeader}</h2>
            <p className="text-gray-100 section-subheading"> <Markdown
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
        </div>
        <div className="w-1/2">
        <h2 className="md:px-20 p-4 mx-auto max-w-7xl">
                  <iframe width="560" height="315" src={data.VideoLandingPage.VideoEmbedUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </h2>
        </div>
            </section>
      {/* Related Resources Section */}
            <section className="w-full mb-10 pt-8 bg-white sm:pt-12 md:pt-16">
          <div className="px-2 mx-auto max-w-7xl">
            <div className="flex justify-center w-full pb-5 mb-4 border-gray-200">
              <h2 className="section-heading  text-gray-800 ">
               {data.VideoLandingPage.RelatedResources}
              </h2>
            </div>

            {/* <div className="grid grid-cols-4 gap-6 mb-6">
           {data.RelatedResources.map((data)=>( 
           
             
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
            
            </div> */}
            <div className="text-center">
              <Link href="/resources" passHref>
                <a className="inline-flex items-center   text-white hover:text-gray-400 group ">
                  <span className="hyperlink group-hover:text-gray-300">
                    View All Resources
                  </span>
                  <svg
                    className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </section>
        </Layout>
        </>
    )
}

export const getServerSideProps = async ({params}) => {
    // strapi data to be acquired
    const res = await fetch(`https://api.ktern.com/videos?slug=${params.id}`, {
      method: 'get',
  });
    const data = await res.json();
    console.log(data)
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
      f_data:f_data},
    };
  };