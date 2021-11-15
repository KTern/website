import Layout from "../../../component/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { BreadcrumbJsonLd } from "next-seo";
import { LogoJsonLd } from "next-seo";
import { SocialProfileJsonLd } from "next-seo";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Markdown from "markdown-to-jsx";
const Customer_Success_Story_Landing = ({ data,h_data }) => {
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
            {
              url: "https://www.example.ie/og-image-03.jpg",
            },
            {
              url: "https://www.example.ie/og-image-04.jpg",
            },
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
      <LogoJsonLd
        logo="http://www.your-site.com/images/logo.jpg"
        url="http://www.your-site.com"
      />
      <SocialProfileJsonLd
        type="Person"
        name="your name"
        url="http://www.your-site.com"
        sameAs={[
          "http://www.facebook.com/your-profile",
          "http://instagram.com/yourProfile",
          "http://www.linkedin.com/in/yourprofile",
          "http://plus.google.com/your_profile",
        ]}
      />
      <Head>
        <script
          type="text/javascript"
          src="https://platform-api.sharethis.com/js/sharethis.js#property=60f91fc57c9b910013246b36&product=inline-share-buttons"
          async="async"
        ></script>
      </Head>
      <Layout h_data={h_data}>
        <section id="features" className="w-full py-20  pt-32 bg-herogradient">
          <div className="flex flex-col items-center px-12 mx-auto lg:flex-row">
            <div className="relative z-20 flex flex-col  w-full h-full ">
              <p className="max-w-max px-2 py-1 mb-5  hyperlink text-gray-900 uppercase bg-gray-200 rounded-full ">
                {data.PageHeader.Tag}
              </p>
              <h1 className="heading text-white ">{data.PageHeader.header}</h1>
              <p className="subheading text-gray-100 pb-7 pt-2">
                {data.PageHeader.subHeading}
              </p>
              <div className="flex flex-row">
                <Link href={data.PageHeader.primaryCTA.linkURL}>
                  <a className=" inline-block py-3 px-10 bg-black button  hover:bg-gray-300 hover:text-black shadow   text-white  rounded-r-xl rounded-b-xl transition duration-200 uppercase hyperlink">
                    {data.PageHeader.primaryCTA.buttonTitle}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-wrap md:px-10  overflow-hidden ">
            <div className="w-full md:w-1/3 md:px-10 mb-4 md:mb-0">
              <div className="flex flex-col mt-10 w-full mb-10 ">
                <div className="w-full md:mb-20 lg:mb-10  ">
                  <div className="relative h-full ml-5 mr-0 sm:mr-10">
                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1  rounded-lg"></span>
                    <div className="relative w-full h-full p-5 bg-white  rounded-lg">
                      <div className=" lg:block justify-end w-full pl-0 overflow-hidden ">
                        <Image
                          width={500}
                          height={400}
                          alt="hero"
                          src={data.CustomerLogoURL}
                          className="object-cover w-full h-full transform translate-x-0 md:translate-x-0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full mb-10  ">
                  <div className="relative h-full ml-5 mr-0 sm:mr-10">
                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-800 rounded-lg"></span>
                    <div className="relative h-full p-5 bg-white border-2 border-black rounded-lg">
                      <div className="flex items-center -mt-1">
                        <h3 className="my-2 ml-0 card-heading  text-gray-800 ">
                          KTern&apos;s Value
                        </h3>
                      </div>

                      {data.ProductUsed.map((dt) => (
                        <div
                          key="dt"
                          className="py-2 px-5 mb-4 bg-gray-100 rounded-lg overflow-hidden hover:bg-gray-300 hover:shadow-md"
                        >
                          <Link href={dt.redirectURL} passHref>
                            <a>
                              <div className="flex items-center">
                                <span className="flex items-center justify-center w-8 h-8 mr-8 bg-transparent rounded-lg">
                                  <Image
                                    src={dt.ListImageURL}
                                    height={dt.height}
                                    width={dt.width}
                                    alt="Digital Maps"
                                  />
                                </span>
                                <p className="card-subheading text-black hover:underline hover:shadow-sm ">
                                  {dt.ListText}
                                </p>
                              </div>
                            </a>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-full mb-10  ">
                  <div className="relative h-full ml-5 mr-0 sm:mr-10">
                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-800 rounded-lg"></span>
                    <div className="relative h-full p-5 bg-white border-2 border-black rounded-lg">
                      <div className="flex-col items-center -mt-1">
                        {data.CompanyInformation.map((dt) => (
                          <h3
                            key="dt"
                            className="my-2 ml-0 card-subheading  text-gray-800 uppercase"
                          >
                            {dt.EntityName}
                          </h3>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/3 md:px-10 px-4 mb-2 ">
              <div className="w-full mb-2 md:mt-10 xl:mt-20    md:mr-10 ">
                <div className="relative h-full ml-2 mr-0 sm:mr-10">
                  <span className="absolute top-0 md:left-0 w-full h-full mt-1 md:ml-1  rounded-lg"></span>
                  <div className="relative h-full md:p-1 bg-white rounded-lg">
                    <div className="grid grid-cols-3 gap-5 sm:grid-cols-12 md:grid-cols-12">
                      {data.ValuesDelivered.map((dt) => (
                        <div
                          key="dt"
                          className="max-w-xs col-span-4 font-sans border-0 border-gray-200 text-gray-50"
                        >
                          <div className="box-border flex flex-col sm:mx-auto items-center h-full px-2 py-8 md:mx-4 leading-6 text-center border-solid sm:items-start ">
                            <h1 className="text-black text-2xl">
                              {dt.ListImageURL}
                            </h1>
                            <div className="mt-6 font-sans text-center border-0 border-gray-200 sm:text-left text-gray-50">
                              <span className="box-border hyperlink    text-black">
                                {dt.ListText}
                              </span>
                              <p className="box-border mx-0 mt-2 mb-0 font-normal leading-snug text-center text-gray-300 border-solid sm:text-left"></p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-full ">
                <section className="mb-20">
                  <Markdown
                    options={{
                      overrides: {
                        h3: {
                          props: {
                            className: "text-2xl mb-4",
                          },
                        },
                         h1: {
                          props: {
                            className: "text-2xl mb-4",
                          },
                        },
                        li: {
                          props: {
                            className: "text-justify list-decimal ml-3 mb-1",
                          }
                            },
                            p: {
                                props: {
                                className:"mb-3"
                            }
                            },
                            ol: {
                                props: {
                                    className:"mb-4"
                                }
                            }
                      },
                    }}
                    className=""
                  >
                    {data.CustomerSuccessStory}
                  </Markdown>
                </section>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

// Return a list of possible value for id
// export const getStaticPaths = async () => {
//   // dynamic route array values must be acquired here from strapi
//     const data=[{id:'comprehensive-sap-s4-hana-readiness-assessment-tech-advance-solution'},{id:'sap-s4-hana-assessment-ktern-asm'},{id:'digital-projects'},{id:'digital-maps'},{id:'digital-labs'}]

//     const paths = data.map(index => {
//         return ({
//             params:{id:index.id}
//         })
//     })
//     return {
//         paths,
//         fallback:true
//     }
// }
// Fetch necessary data for the blog post using params.id
export const getServerSideProps = async (context) => {
  const id = context.params.id;
  // strapi data to be fetched
  const res = await fetch(
    `https://api.ktern.com/customer-success-stories?slug=${id}`
  );
  const data = await res.json();
  // console.log(data[0]);
  	const res1 = await fetch('https://api.ktern.com/navbar', {
		method: 'get',
	});
	const h_data = await res1.json();
  return {
    props: { data: data[0],h_data:h_data },
  };
};
export default Customer_Success_Story_Landing;