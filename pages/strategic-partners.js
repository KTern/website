import CTABar1 from "../component/ctaBar1";
import Features from "../component/features";
import ImageCard from "../component/imageCard";
import Layout from "../component/Layout";
import SEO from "../component/seo";
import SimpleHero from "../component/simplehero";

export default function StrategicPartnersLandingPage({
  pageData,
  headerData,
  footerData,
  stream,
}) {
  return (
    <>
      <Layout h_data={headerData} f_data={footerData}>
        <SEO data={pageData.PageSEO}></SEO>
        <SimpleHero
          data={pageData.PageSimpleHeader}
          breadcrumb={pageData.PageSEO.BreadCrumb}
          stream={stream}
        ></SimpleHero>
        <Features
          stream={stream}
          data={pageData.ValuePropsWithoutImage}
        ></Features>
        <ImageCard
          stream={stream}
          data={pageData.StrategicPartners}
        ></ImageCard>
        <CTABar1 stream={stream} data={pageData.CTACard}></CTABar1>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  //    fetch strapi data
  const res = await fetch(`https://strapi.ktern.com/strategic-partners`, {
    method: "get",
  });
  const data = await res.json();
  // console.log('data1', data);
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
      pageData: data,
      headerData: h_data,
      footerData: f_data,
      stream: "dxaas",
    },
  };
};
