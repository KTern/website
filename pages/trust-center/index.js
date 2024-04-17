import Layout from "../../component/Layout";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { NextSeo } from "next-seo";
import { BreadcrumbJsonLd } from "next-seo";
import { LogoJsonLd } from "next-seo";
import { SocialProfileJsonLd } from "next-seo";
import BreadCrumb from "../../component/breadcrumb";
import Event, {
  resolve_interest_score,
  resolve_stream_score,
} from "../../component/page_event";
export default function TrustCenter({ data, h_data, f_data }) {
  let breadcrumb = [];
  data.PageSEO.BreadCrumb.map((dt) => {
    breadcrumb.push({ position: dt.position, name: dt.name, item: dt.item });
  });
  // Amplitude Tracking onClick
  function onClick(data) {
    Event(data);
  }
  const [isCustomerVisible, setIsCustomerVisible] = useState(true);
  const [isPartnerVisible, setIsPartnerVisible] = useState(false);
  return <>
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
            url: `${data.PageSEO.ThumbnailImageURL}`,
            width: 1920,
            height: 1080,
            alt: `${data.PageSEO.PageTitle}`,
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

    <Layout h_data={h_data} f_data={f_data}>
      {/* Header Section */}
      <section
        className="py-32 bg-background bg-no-repeat bg-cover w-full bg-dxaas-primary"
        style={{ backgroundPosition: "100% 50%", backgroundSize: "auto" }}
      >
        <div className="ml-10">
          {" "}
          <BreadCrumb color="white" b_data={breadcrumb} />
        </div>
        <h2 className="heading text-center text-white">
          {data.PageHeader.header}
        </h2>
      </section>
      <section>
        <p className="subheading px-10 py-10 text-center">
          {data.PageHeader.subHeading}
        </p>
      </section>
      <section className="py-10 sm:px-4 md:px-20 mx-auto grid md:grid-cols-3 gap-10">
        {data.TrustCenterCard.map((dt) => (
          <div
            key="dt"
            className=" relative flex   px-2  group overflow-hidden false transition transform hover:-translate-y-1 duration-500 "
          >
            <span
              className={`absolute rounded-lg top-0 left-0 h-full mt-1 ml-1 bg-secondary  group-hover:bg-dxaas-secondary `}
              style={{ height: "750px", width: "442px" }}
            ></span>
            <div
              className={`relative  rounded-lg shadow w-full bg-white flex-col p-6   group overflow-hidden false border border-black hover:border-dxaas-primary `}
            >
              <div className=" bg-white mr-12 w-full text-black">
                <div>
                  <Image
                    priority
                    src={dt.IconURL}
                    width="50"
                    height="50"
                    alt="Sample "
                  />
                </div>
                <div className="h-50">
                  <h3 className="my-2  card-heading mb-5 text-gray-800">
                    {dt.Title}
                  </h3>
                </div>
                {dt.Points.map((val) => (
                  <div key="val">
                    <Link
                      href={val.PageUrl}
                      passHref
                      onClick={() => {
                        onClick({
                          stream_score: resolve_stream_score("none"),
                          event_name: "Card Click",
                          section_name: "Trust Center Section",
                          page_source: `${data.PageSEO.PageTitle}`,
                          label: `${val.listItem}`,
                        });
                      }}
                      className="w-full inline-flex items-center pb-1  text-dxaas-primary hover:border-blue-400 group ">

                      <span className="card-subheading hover:text-gray-400">
                        {val.listItem}
                      </span>
                      <svg
                        className="w-5 h-6 mt-1 ml-2 hover:text-gray-400"
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

                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  </>;
}

export const getStaticProps = async () => {
  const res = await fetch("https://strapi.ktern.com/trust-center", {
    method: "get",
  });
  const data = await res.json();
  // console.log("data", data);
  const res1 = await fetch("https://strapi.ktern.com/header", {
    method: "get",
  });
  const h_data = await res1.json();
  const res2 = await fetch("https://strapi.ktern.com/footer", {
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
