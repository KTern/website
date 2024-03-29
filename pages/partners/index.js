import Image from "next/image";
import Link from "next/link";
import Layout from "../../component/Layout";
import { NextSeo } from "next-seo";
import { BreadcrumbJsonLd } from "next-seo";
import { LogoJsonLd } from "next-seo";
import { SocialProfileJsonLd } from "next-seo";
import { FAQPageJsonLd } from "next-seo";
import Carousel from "react-multi-carousel";
import FAQ from "../../component/faq";
import Markdown from "markdown-to-jsx";
import BreadCrumb from "../../component/breadcrumb";
import Event, {
  resolve_interest_score,
  resolve_stream_score,
} from "../../component/page_event";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export default function Partners({ data, h_data, f_data }) {
  let breadcrumb = [];
  data.PageSEO.BreadCrumb.map((dt) => {
    breadcrumb.push({ position: dt.position, name: dt.name, item: dt.item });
  });
  // Amplitude Tracking onClick
  function onClick(data) {
    Event(data);
  }
  let faq = [];
  data.FAQList.map((dt) => {
    faq.push({ questionName: dt.Question, acceptedAnswerText: dt.Answer });
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

      <FAQPageJsonLd mainEntity={faq} />
      <Layout h_data={h_data} f_data={f_data}>
        {/* <!-- Header Section --> */}
        <section className="w-full py-20 md:px-20 bg-secondary">
          <div className="flex flex-col md:space-x-20  items-center px-4 mx-auto  lg:flex-row">
            <div className=" relative z-20 flex flex-col items-start justify-center w-full h-full md:w-2/3">
              <BreadCrumb color="black" b_data={breadcrumb} />
              <p className="max-w-max px-2 mt-4 py-1 mb-5  hyperlink  text-gray-900 uppercase bg-gray-200 rounded-full ">
                {data.PageHeader.Tag}
              </p>
              <h5 className="mb-2 heading  sm:text-4xl ">
                {data.PageHeader.header}
              </h5>
              <p className="py-5 mb-2 text-gray-600 subheading">
                <span className=" subheading">
                  {data.PageHeader.subHeading}
                </span>
              </p>
              <div className="md:flex sm:flex-col md:space-x-4 sm:space-y-10">
                <div>
                  <Link href={data.PageHeader.primaryCTA.linkURL} passHref>
                    <a
                      onClick={() => {
                        onClick({
                          stream_score: resolve_stream_score("none"),
                          event_name: "Button Click",
                          section_name: "Hero Section",
                          page_source: `${data.PageSEO.PageTitle}`,
                          label: `${data.PageHeader.primaryCTA.buttonTitle}`,
                        });
                      }}
                      className="lg:inline-block py-4 px-6 bg-black hover:bg-gray-300 hover:text-black shadow uppercase text-white  rounded-r-xl hyperlink rounded-b-xl transition duration-200 button "
                    >
                      {data.PageHeader.primaryCTA.buttonTitle}
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href={data.PageHeader.secondaryCTA.linkURL} passHref>
                    <a
                      onClick={() => {
                        onClick({
                          stream_score: resolve_stream_score("none"),
                          event_name: "Button Click",
                          section_name: "Hero Section",
                          page_source: `${data.PageSEO.PageTitle}`,
                          label: `${data.PageHeader.secondaryCTA.buttonTitle}`,
                        });
                      }}
                      className="lg:inline-block py-4 px-6 bg-white hover:bg-gray-300 hover:text-black shadow uppercase text-black border-2 border-black  rounded-r-xl hyperlink rounded-b-xl transition duration-200 button "
                    >
                      {data.PageHeader.secondaryCTA.buttonTitle}
                      <svg
                        className="inline-block w-2 ml-2"
                        fill="currentColor"
                        viewBox="0 0 12 12"
                      >
                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className=" hidden lg:block relative ml-10 z-10 w-full h-full my-16 lg:my-0 md:w-1/3">
              <Image
                priority
                className="relative z-40 w-full h-full"
                src={data.PageHeader.ImageURL}
                alt="hero image"
                width={data.PageHeader.ImageWidth}
                height={data.PageHeader.ImageHeight}
              />
            </div>
          </div>
        </section>
        {/* <!--KTern Partnership Models--> */}

        <section className="relative mx-auto max-w-5xl w-full bg-white">
          <div className=" w-full text-center px-5 py-10 mx-auto  md:px-10  ">
            <h5 className="mb-3 section-heading">
              {data.PartnershipOpportunities.SectionTitle}
            </h5>
            <p className=" mb-5 text-gray-600 section-subheading">
              <span className="section-subheading mb-10">
                {data.PartnershipOpportunities.SectionDescription}
              </span>
            </p>
            <div className="container grid   h-auto md:grid-cols-2 gap-4 sm:mt-16 ">
              {data.PartnershipOpportunities.PartnerCard.map((dt) => (
                <div key="dt" className="text-center p-10">
                  <div className="rounded-full mb-2">
                    <Image
                      priority
                      className="rounded-full bg-secondary"
                      src={dt.ImageURL}
                      height={dt.ImageWidth}
                      width={dt.ImageHeight}
                      alt="Partnership models"
                    />
                  </div>
                  <div className="card-heading mb-2">{dt.CardTitle}</div>
                  <div className="card-subheading mb-2 text-center">
                    {dt.CardDescription}
                  </div>
                  <Link href={dt.PageURL} passHref>
                    <a
                      onClick={() => {
                        onClick({
                          stream_score: resolve_stream_score("none"),
                          event_name: "Link Click",
                          section_name: "Partner Models Section",
                          page_source: `${data.PageSEO.PageTitle}`,
                          label: `${dt.CardTitle}-${dt.CTAText}`,
                        });
                      }}
                      className="inline-flex items-center pb-1  text-black hover:border-blue-400 group "
                    >
                      <span className="hyperlink group-hover:text-gray-400">
                        {dt.CTAText}
                      </span>
                      <svg
                        className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400"
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
              ))}
            </div>
          </div>
        </section>

        {/* <!--KTern's Partners --> */}
        <div className="px-4 ">
          <div className=" px-4 mx-auto">
            <h2 className=" text-center mb-20 mt-1 text-gray-500  section-heading sm:text-xl">
              {data.PartnerLogoTitle}
            </h2>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. ab repudiandae et.</p> */}
          </div>
          <Carousel className="bots flex p-6  z-10" responsive={responsive}>
            {data.TrustedByLogos.map((dt) => (
              <div key="dt" className="p-3 bots-card flex-row">
                <Image
                  priority
                  className=" w-auto lg:w-100"
                  src={dt.imageURL}
                  alt={dt.imageDescription}
                  width={dt.width}
                  height={dt.height}
                />
              </div>
            ))}
          </Carousel>
        </div>

        {/* <!--Faq Section--> */}
        <FAQ data={data.FAQList} title={data.faqtitle} />

        {/* <!--Steps to join KTern--> */}
        <section className="py-14  2xl:py-20  bg-black overflow-hidden">
          <div className="px-14 md:mx-auto ">
            <div className="mb-10 md:max-w-4xl  md:mx-auto sm:mb-24 text-center">
              <span className="section-heading  text-white">
                {data.PartnershipSteps.Title}
              </span>
              <h2 className="mt-4 section-subheading text-white">
                {data.PartnershipSteps.Description}
              </h2>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-1 gap-3 ">
              {data.PartnershipSteps.Steps.map((dt, index) => (
                <div key="index" className="w-full  md:px-10 md:mb-10  lg:mb-0">
                  <div className="relative flex-col space-y-3">
                    <div className="md:mr-8">
                      <span className="flex justify-center items-center w-14 h-14 text-black bg-white card-heading  rounded-full">
                        {index + 1}
                      </span>
                    </div>
                    <div className="max-w-xs">
                      <h3 className="mb-2 card-heading text-white">
                        {dt.StepTitle}
                      </h3>
                      <p className="card-subheading text-gray-200">
                        <Markdown
                          options={{
                            overrides: {
                              p: {
                                props: {
                                  className: "text-md text-justify ",
                                },
                              },
                              strong: {
                                props: {
                                  className: "",
                                },
                              },
                              a: {
                                props: {
                                  className: "text-blue-900 hover:underline ",
                                },
                              },
                            },
                          }}
                          className=""
                        >
                          {dt.StepDescription}
                        </Markdown>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <!-- Footer CTA --> */}
        <section className="bg-white">
          <div className="md:px-8 py-8 mx-auto sm:py-10 lg:py-20 max-w-7xl">
            <div className="relative py-6 overflow-hidden  background lg:py-12 md:px-6 lg:p-16 lg:flex lg:items-center lg:justify-between md:shadow-xl md:bg-purple-1000">
              <div className="absolute top-0 right-0 hidden w-full -mt-20 transform rotate-45 translate-x-1/2 bg-white sm:block h-96 opacity-5"></div>
              <div className="absolute top-0 left-0 hidden w-full -mt-20 transform rotate-45 -translate-x-1/2 bg-white sm:block h-96 opacity-5"></div>
              <div className="relative p-6 max-w-xl md:p-0 md:pb-4">
                <h2 className="card-heading   tracking-tight text-white sm:text-4xl sm:leading-10">
                  {data.ctacard.CTATitle}
                </h2>
                <p className="w-full mt-5 card-subheading text-white ">
                  {data.ctacard.CTADescription}
                </p>
              </div>
              <div className="relative flex flex-col items-center w-full px-6 space-y-5 md:space-x-5 md:space-y-0 md:flex-row md:w-auto lg:flex-shrink-0 md:px-0">
                <Link href={data.ctacard.PrimaryCTA.linkURL} passHref>
                  <a
                    onClick={() => {
                      onClick({
                        stream_score: resolve_stream_score("none"),
                        event_name: "Button Click",
                        section_name: "CTA Section",
                        page_source: `${data.PageSEO.PageTitle}`,
                        label: `${data.ctacard.PrimaryCTA.buttonTitle}`,
                      });
                    }}
                    className="border-3 border-white  inline-block py-3 px-10 bg-black hover:bg-gray-300 hover:text-black shadow   text-white  rounded-r-xl rounded-b-xl transition duration-200 button border-2 border-black"
                  >
                    {data.ctacard.PrimaryCTA.buttonTitle}
                  </a>
                </Link>
                <Link href={data.ctacard.SecondaryCTA.linkURL} passHref>
                  <a
                    onClick={() => {
                      onClick({
                        stream_score: resolve_stream_score("none"),
                        event_name: "Button Click",
                        section_name: "CTA Section",
                        page_source: `${data.PageSEO.PageTitle}`,
                        label: `${data.ctacard.SecondaryCTA.buttonTitle}`,
                      });
                    }}
                    className="  inline-block py-3 px-10 bg-white hover:bg-gray-50 hover:text-black shadow  text-black  rounded-r-xl rounded-b-xl transition duration-200  border-2 border-black button"
                  >
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
export const getStaticProps = async () => {
  // data url from strapi

  const res = await fetch("https://strapi.ktern.com/partner-home", {
    method: "get",
  });
  const data = await res.json();
  // console.log(data.PartnershipSteps.Steps);
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
