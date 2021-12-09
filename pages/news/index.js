import Layout from "../../component/Layout";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from 'next-seo';
import { BreadcrumbJsonLd } from 'next-seo';
import { LogoJsonLd } from 'next-seo';
import { SocialProfileJsonLd } from 'next-seo';
import { FAQPageJsonLd } from 'next-seo';
import BreadCrumb from "../../component/breadcrumb";
export default function News({data,h_data,f_data}){
  let breadcrumb = [];
  data.PageSEO.BreadCrumb.map((dt) => {
    breadcrumb.push({ position: dt.position, name: dt.name, item: dt.item });
  });
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
<BreadcrumbJsonLd
      itemListElements={breadcrumb}
    />
	  <LogoJsonLd
        logo={process.env.LOGO}
        url={process.env.URL}
      />

           
    <Layout h_data={h_data} f_data={f_data}>
    {/* Page Header section */}
    <section className='w-full py-28 background'>
      <div className="ml-10">
      <BreadCrumb color="white" b_data={breadcrumb}/></div>
          <div className='flex flex-col items-center px-12 mx-auto lg:flex-row'>
            <div className='relative z-20 flex flex-col  w-full h-full '>
             
              <h1 className='heading text-white mb-5 text-center'>{data.PageHeader}</h1>
             
            </div>
          </div>
        </section>
         {/*/ Page Header section */}
         {/* News List Section */}
        <section className="py-20 grid grid-cols-3 gap-4 px-10 ">
     {data.NewsCard.slice(0).reverse().map((dt)=>(  
          <Link key="dt" href={dt.PageUrl} >
              <a className=" relative flex   px-2  group overflow-hidden false transition transform hover:-translate-y-1 duration-500 ">   
              <span className={`absolute rounded-lg top-0 left-0 h-full mt-1 ml-1 bg-secondary  group-hover:bg-secondary `} style={{height:'250px',width:'600px'}}></span>
              <div 
                className={`relative  rounded-lg shadow bg-white flex-col p-5 px-5  group overflow-hidden false border border-black hover:border-primary `}
              >
                <div className=" bg-white grid-rows-2 gap-3  mr-12 text-black">
                                            
                                           <div className="h-50">
                                            <h3 className="my-2  header mb-5 text-gray-800">{dt.NewsTitle}</h3>       
                                           <div className="bg-dxaas-primary mb-4 h-0.5 w-20"></div>
                                           </div>
                                            <div className="h-1/2 navbar-s">{dt.Date}</div>
                                </div>
              </div>
              </a>
              </Link>))}
        </section>
         {/* /News List Section */}
         {/* Cta Section */}
        <section className='bg-white'>
          <div className='md:px-2 md:py-8 mx-auto sm:py-10  lg:py-20 max-w-7xl'>
            <div
              className={`relative py-6 overflow-hidden  dxaas lg:py-12 md:px-6 lg:p-16 lg:flex lg:items-center lg:justify-between md:shadow-xl md:bg-purple-1000`}
            >
              <div className='absolute top-0 right-0 hidden w-full -mt-20 transform rotate-45 translate-x-1/2 bg-white sm:block h-96 opacity-5'></div>
              <div className='absolute top-0 left-0 hidden w-full -mt-20 transform rotate-45 -translate-x-1/2 bg-white sm:block h-96 opacity-5'></div>
              <div className='relative w-2/3 p-6  md:p-0 md:pb-4'>
                <h2 className='card-heading  leading-9 tracking-tight text-white sm:text-4xl sm:leading-10'>
                  {data.CTASection.CTATitle}
                </h2>
                <p className='w-full mt-5 card-subheading text-white '>{data.CTASection.CTADescription}</p>
              </div>
              <div className='relative w-1/3 flex flex-col items-center w-full px-6 space-y-5 md:space-x-5 md:space-y-0 md:flex-row md:w-auto lg:flex-shrink-0 md:px-0'>
                <Link href={data.CTASection.PrimaryCTA.linkURL} passHref>
                  <a className={` border-2 inline-block py-3 px-10  hover:bg-gray-300 hover:text-black shadow button bg-primary button  uppercase text-white rounded-r-xl rounded-b-xl transition duration-200 `}>
                    {data.CTASection.PrimaryCTA.buttonTitle}
                  </a>
                </Link>
                <Link rel='noopener noreferrer' href={data.CTASection.SecondaryCTA.linkURL} passHref>
                  <a
                    target='_blank'
                    className={` inline-block py-3 px-10 bg-white hover:bg-gray-50 hover:text-black shadow button uppercase text-black rounded-r-xl rounded-b-xl transition duration-200 border-2 border-black`}
                  >
                    {data.CTASection.SecondaryCTA.buttonTitle}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* /Cta Section */}
    </Layout>
       </>
    )
}
export const getServerSideProps = async () => {
   
    //    fetch strapi data
        const res = await fetch(`https://api.ktern.com/news-center`, {
            method: 'get',
        });

        const data = await res.json();
        // console.log('data1', data);
          const res1 = await fetch('https://api.ktern.com/header', {
            method: 'get',
        });
      const h_data = await res1.json();
      console.log("Header Data",h_data)
      const res2 = await fetch('https://api.ktern.com/footer', {
            method: 'get',
        });
        const f_data = await res2.json();
        return {
            props: {
          data: data,
          h_data: h_data,
          f_data:f_data
            },
        };
    }