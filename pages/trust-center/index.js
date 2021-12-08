import Layout from "../../component/Layout";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { NextSeo } from "next-seo";
import { BreadcrumbJsonLd } from "next-seo";
import { LogoJsonLd } from "next-seo";
import { SocialProfileJsonLd } from "next-seo";
export default function TrustCenter({ data, h_data, f_data }) {
  let breadcrumb = [];
  data.PageSEO.BreadCrumb.map((dt) => {
    breadcrumb.push({ position: dt.position, name: dt.name, item: dt.item });
  });
  const [isCustomerVisible, setIsCustomerVisible] = useState(true);
  const [isPartnerVisible, setIsPartnerVisible] = useState(false);
  return (
    <>
      <LogoJsonLd logo={process.env.LOGO} url={process.env.URL} />
      <NextSeo
        title={data.PageSEO.PageTitle}
        description={data.PageSEO.PageDescription}
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "https://www.url.ie/a",
          title: "Open Graph Title",
          description: "Open Graph Description",
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
          site_name: "KTern.AI",
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
        {/* Header Section */}
        <section
          className="py-32 bg-background bg-no-repeat bg-cover w-full bg-dxaas-primary"
          style={{ backgroundPosition: "100% 50%", backgroundSize: "auto" }}
        >
          <h2 className="heading text-center text-white">
            {data.PageHeader.header}
          </h2>
        </section>
        <section>
          <p className="subheading px-10 py-10 text-center">
            {data.PageHeader.subHeading}
          </p>
        </section>
        <section className="py-10 px-20 mx-auto grid grid-cols-3 gap-10">
          {data.TrustCenterCard.map((dt) => (
           <div key="dt" className=" relative flex   px-2  group overflow-hidden false transition transform hover:-translate-y-1 duration-500 ">
                <span
                  className={`absolute rounded-lg top-0 left-0 h-full mt-1 ml-1 bg-secondary  group-hover:bg-dxaas-secondary `}
                  style={{ height: "750px", width: "442px" }}
                ></span>
                <div
                  className={`relative  rounded-lg shadow w-full bg-white flex-col p-6   group overflow-hidden false border border-black hover:border-dxaas-primary `}
                >
                  <div className=" bg-white mr-12 w-full text-black">
                    <div>
                      <Image src={dt.IconURL} width="50" height="50" alt="Sample " />
                    </div>
                    <div className="h-50">
                      <h3 className="my-2  card-heading mb-5 text-gray-800">
                        {dt.Title}
                      </h3>
                    </div>
                    {dt.Points.map((val)=>(
                    <div key="val">
                         <Link href={val.PageUrl} passHref>
                              <a className='w-full inline-flex items-center pb-1  text-dxaas-primary hover:border-blue-400 group '>
                                <span className='card-subheading hover:text-gray-400'>{val.listItem}</span>
                                <svg
                                  className='w-5 h-6 mt-1 ml-2 hover:text-gray-400'
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
                    </div>))}
                  </div>
                </div>
              </div>
          ))}
        </section>
      </Layout>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("https://api.ktern.com/trust-center", {
    method: "get",
  });
  const data = await res.json();
  // console.log("data", data);
  const res1 = await fetch("https://api.ktern.com/navbar", {
    method: "get",
  });
  const h_data = await res1.json();
  const res2 = await fetch("https://api.ktern.com/footer", {
    method: "get",
  });
  const f_data = await res2.json();
  return {
    props: {
      data: data,
      h_data: h_data,
      f_data: f_data,
    },
  };
};
