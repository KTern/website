import Image from "next/image";
import Layout from "../../component/Layout";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { BreadcrumbJsonLd } from "next-seo";
import { LogoJsonLd } from "next-seo";
import { SocialProfileJsonLd } from "next-seo";
import Markdown from "markdown-to-jsx";
import BreadCrumb from "../../component/breadcrumb";
import Event,{resolve_interest_score,resolve_stream_score} from "../../component/page_event";
export default function TrustCenter({ data, h_data, f_data }) {
  let breadcrumb = [];
  data.pageSEO.BreadCrumb.map((dt) => {
    breadcrumb.push({ position: dt.position, name: dt.name, item: dt.item });
  });
  // Amplitude Tracking onClick
  function onClick(data){
    Event(data)
    }
  return (
    <>
      <NextSeo
        title={data.pageSEO.PageTitle}
        description={data.pageSEO.PageDescription}
        canonical={data.pageSEO.CanonicalTag}
        openGraph={{
          url: `${data.pageSEO.PageURL}`,
          title: `${data.pageSEO.PageTitle}`,
          description: `${data.pageSEO.PageDescription}`,
          images: [
            {
              url: `${data.pageSEO.ThumbnailImageURL}`,
              width: 1920,
              height: 1080,
              alt: `${data.pageSEO.PageTitle}`,
              type: "image/png",
            },
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
            rel: "icon",
            href: "https://storage.googleapis.com/ktern-public-files/website/icons/favicon.ico",
          },
          {
            rel: "apple-touch-icon",
            href: "https://storage.googleapis.com/ktern-public-files/website/icons/apple-touch-icon-76x76.png",
            sizes: "76x76",
          },
          {
            rel: "manifest",
            href: "/manifest.json",
          },
        ]}
      />
      <BreadcrumbJsonLd itemListElements={breadcrumb} />
      <LogoJsonLd logo={process.env.NEXT_PUBLIC_LOGO} url={process.env.NEXT_PUBLIC_URL} />
    
      <Layout h_data={h_data} f_data={f_data}>
        {/* Header Section */}
        <section
          className="w-full py-28 bg-background bg-dxaas-primary bg-no-repeat"
          style={{ backgroundPosition: "100% 50%", backgroundSize: "auto" }}
        >
          <div className="flex flex-col items-center sm:px-4 md:px-12 mx-auto lg:flex-row">
            <div className="relative z-20 flex flex-col  w-full h-full ">
              <BreadCrumb color="white" b_data={breadcrumb} />
              <p className="max-w-max mt-4 px-2 py-1 mb-5  hyperlink text-gray-900 uppercase bg-gray-200 rounded-full ">
                {data.pageHeader.Tag}
              </p>
              <h1 className="heading text-white mb-5">
                {data.pageHeader.header}
              </h1>
              <p className="subheading text-gray-100 pb-7">
                {data.pageHeader.subHeading}
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-wrap sm:px-6 md:px-16 ">
            <div
              id="top"
              className="anchor hidden sm:block w-full md:w-1/3  my-28 "
            >
              <div className="flex sm:space-x-2 md:space-x-10   sm:py-5 md:p-5 bg-white border-2  sticky z-10 md:top-16 sm:top-10 ">
                <ol>
                  <b className="card-heading text-center">
                    {data.TableOfContentsHeading}
                  </b>
                  {data.idList.map((data) => (
                    <li key="data" className="mt-1 list-decimal mx-5">
                      <Link href={data.idURL} passHref>
                        <a className="card-subheading ">{data.idText}</a>
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="w-full md:w-2/3 md:pr-10 mb-4 md:mb-0">
              <div className="max-w-full ">
                <div className="text-left mb-10">
                  <p className="text-black hyperlink  mt-10">
                    {data.issuedFrom}
                  </p>
                </div>
                {data.trustCenterContent.map((data) => (
                  <div key="data">
                    <h1
                      id={data.tagId}
                      className="anchor card-heading mb-6 text-left  text-black "
                    >
                      {data.heading}
                    </h1>

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
                              className:
                                "text-justify list-decimal ml-6 mb-1 flex-col",
                            },
                          },
                          p: {
                            props: {
                              className: "mb-3 text-justify",
                            },
                          },
                          ol: {
                            props: {
                              className: "mb-4 text-justify",
                            },
                          },
                        },
                      }}
                      className=""
                    >
                      {data.Content}
                    </Markdown>
                  </div>
                ))}
                  <div className="md:hidden block flex justify-center bg-white  text-center items-center  w-full rounded-md  sticky bottom-20">
                <Link href="#top" passHref>
                  <a className=" rounded-full p-2  flex items-center justify-center text-black">
                    <Image
                      className=""
                      src="/up-arrow.png"
                      height="15"
                      width="15"
                      alt="up arrow"
                    />
                    &nbsp;&nbsp;Go To the Top
                  </a>
                </Link>
              </div>
              </div>
            
            </div>
            <div className="hidden md:block w-full md:w-1/3  my-28 ">
              <div className="flex sm:space-x-2 md:space-x-10   sm:py-5 md:p-5 bg-white border-2  sticky z-10 md:top-16 sm:top-10 ">
                <ol>
                  <b className="card-heading text-center">
                    {data.TableOfContentsHeading}
                  </b>
                  {data.idList.map((dt) => (
                    <li key="dt" className="mt-1 list-decimal mx-5">
                      <Link href={dt.idURL} passHref>
                        <a
                          onClick={()=>{onClick({stream_score:resolve_stream_score('none'),event_name:"Link Click",section_name:"Table Of Contents Section",page_source:`${data.pageSEO.PageTitle}`,label:`Content-${dt.idText}`})}}
                           className="card-subheading ">{dt.idText}</a>
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
// Return a list of possible value for trust_center
// export const getStaticPaths = async () => {
//   // dynamic route array values must be acquired here from strapi
//     const data=[{trust_center:'eula'},{trust_center:'consulting-partner-agreement'},{trust_center:'security'},{trust_center:'privacy'},{trust_center:'gdpr'}]

//     const paths = data.map(index => {
//         return ({
//             params:{trust_center:index.trust_center}
//         })
//     })
//     return {
//         paths,
//         fallback:true
//     }
// }
// Fetch necessary data for the blog post using params.trust_center
export const getServerSideProps = async (ctx) => {
  const id = ctx.params.trust_center;
  //    fetch strapi data
  const res = await fetch(`https://api.ktern.com/trustcenters?slug=${id}`, {
    method: "get",
  });
  const data = await res.json();
  if(data[0]==undefined){
    ctx.res.setHeader('Location', '/404');
    ctx.res.statusCode = 302;
    ctx.res.end();
  }
  const res1 = await fetch("https://api.ktern.com/header", {
    method: "get",
  });
  const h_data = await res1.json();
  const res2 = await fetch("https://api.ktern.com/footer", {
    method: "get",
  });
  const f_data = await res2.json();
  return {
    props: {
      data: data[0],
      h_data: h_data,
      f_data: f_data,
    },
  };
};
