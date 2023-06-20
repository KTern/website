/* eslint-disable camelcase */
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Event from '../../component/page_event';
/* eslint-disable react/prop-types */

import CtaBar from '../../component/ctaBar';
import FaqNew from '../../component/faqNew';
import FeaturedResourcesComponent from '../../component/featuredResources1';
import Hero from '../../component/hero';
import Layout from '../../component/Layout';
import SEO from '../../component/seo';
import StreamFeatures from '../../component/streamFeatures';
import ValuePoints from '../../component/valuePoints';
import TabSet from '../../component/tabset';
import Statistics from '../../component/statistics';
import TestimonialSingle from '../../component/testimonialSingle';

// eslint-disable-next-line camelcase
export default function Feature_Landing({
  pageData,
  headerData,
  footerData,
  background,
}) {
  const router = useRouter();
  // console.log(pageData.ProductsDevAttributes.Stream);
  useEffect(() => {
    if (pageData === undefined) router.push('/404');
  }, []);
  const breadcrumb = [];
  // eslint-disable-next-line array-callback-return
  pageData.PageSEO.BreadCrumb.map((dt) => {
    breadcrumb.push({
      position: dt.position,
      name: dt.name,
      item: dt.item,
    });
  });
  // Amplitude Tracking onClick
  // eslint-disable-next-line no-unused-vars
  function onClick(data) {
    Event(data);
  }
  return (
    <>
      <SEO data={pageData.PageSEO} />
      <Layout h_data={headerData} f_data={footerData}>
        <Hero
          data={pageData.ProductsBanner}
          stream={pageData.ProductsDevAttributes.Stream}
          breadcrumb={pageData.PageSEO.BreadCrumb}
          background={background}
          pageSEODet={pageData.pageSEO}
          // eslint-disable-next-line react/jsx-boolean-value
          feature={true}
          index={false}
        />
        <TestimonialSingle
          data={pageData.CustomerTestimonial}
          stream={pageData.ProductsDevAttributes.Stream}
        />
        <ValuePoints
          data={pageData.ValuePropositions}
          stream={pageData.ProductsDevAttributes.Stream}
          background={'bg'}
        />

        <StreamFeatures
          data={pageData.StreamFeatures}
          source={pageData.PageSEO.PageTitle}
          stream={pageData.ProductsDevAttributes.Stream}
          background={'banner'}
          button={true}
        />
        <Statistics
          stream={pageData.ProductsDevAttributes.Stream}
          data={pageData.Statistics}
        />
        <TabSet
          stream={pageData.ProductsDevAttributes.Stream}
          data={pageData.OtherFeatures}
        />
        <FaqNew
          data={pageData.FAQ}
          title={pageData.FAQ.SectionTitle}
          stream={pageData.ProductsDevAttributes.Stream}
        />
        <FeaturedResourcesComponent
          resources={pageData.ResourcesComponent}
          stream={pageData.ProductsDevAttributes.Stream}
          articles={pageData.Articles}
          news={pageData.News}
        />
        <CtaBar
          data={pageData.CTABar}
          stream={pageData.ProductsDevAttributes.Stream}
        />
      </Layout>
    </>
  );
}

export const getStaticPaths = async () => {
  // dynamic route array values must be acquired here from strapi
  const data = [
    {
      product: 'digital-maps',
      feature: 'business-process-mining',
    },
    {
      product: 'digital-maps',
      feature: 'custom-code-analysis',
    },
    {
      product: 'digital-maps',
      feature: 'timeline-effort-estimation',
    },
    {
      product: 'digital-maps',
      feature: 'landscape-assessment',
    },
    {
      product: 'digital-maps',
      feature: 'transformation-insights',
    },
    {
      product: 'digital-projects',
      feature: 'digital-workspace',
    },
    {
      product: 'digital-projects',
      feature: 'sap-activate-cockpit',
    },
    {
      product: 'digital-projects',
      feature: 'social-collaboration',
    },
    {
      product: 'digital-projects',
      feature: 'signoffs-workflows',
    },
    {
      product: 'digital-projects',
      feature: 'project-reporting',
    },
    {
      product: 'digital-process',
      feature: 'process-orchestration',
    },
    {
      product: 'digital-process',
      feature: 'sap-scope-item-cockpit',
    },
    {
      product: 'digital-process',
      feature: 'process-modelling',
    },
    {
      product: 'digital-process',
      feature: 'process-dashboards',
    },
    {
      product: 'digital-process',
      feature: 'custom-process-adaptation',
    },
    {
      product: 'digital-labs',
      feature: 'test-repository',
    },
    {
      product: 'digital-labs',
      feature: 'test-scripts-evidences-defects',
    },
    {
      product: 'digital-labs',
      feature: 'test-reporting',
    },
    {
      product: 'digital-labs',
      feature: 'test-scenario-recommendations',
    },
    {
      product: 'digital-labs',
      feature: 'uat-signoffs',
    },
    {
      product: 'digital-mines',
      feature: 'change-impact-mining',
    },
    {
      product: 'digital-mines',
      feature: 'test-fit-gaps',
    },
    {
      product: 'digital-mines',
      feature: 'process-impact',
    },
    {
      product: 'digital-mines',
      feature: 'change-impact-orchestration',
    },
    {
      product: 'digital-mines',
      feature: 'release-impact-analytics',
    },
  ];

  const paths = data.map((index) => ({
    params: {
      product: index.product,
      feature: index.feature,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const streamslug = ctx.params.product;
  const featureslug = ctx.params.feature;

  const res = await fetch(
    `https://api.ktern.com/capabilities?StreamSlug=${streamslug}&slug=${featureslug}`,
    {
      method: 'get',
    }
  );

  const data = await res.json();
  if (data[0] === undefined) {
    ctx.res.setHeader('Location', '/404');
    ctx.res.statusCode = 302;
    ctx.res.end();
  }
  const res1 = await fetch('https://api.ktern.com/header', {
    method: 'get',
  });
  // eslint-disable-next-line camelcase
  const h_data = await res1.json();
  const res2 = await fetch('https://api.ktern.com/footer', {
    method: 'get',
  });
  const f_data = await res2.json();
  return {
    props: {
      pageData: data[0],
      headerData: h_data,
      footerData: f_data,
      background: 'texture',
    },
  };
};
