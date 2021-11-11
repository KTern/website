import { FAQPageJsonLd } from "next-seo";
import Layout from "../../component/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { BreadcrumbJsonLd } from "next-seo";
import { LogoJsonLd } from "next-seo";
import { SocialProfileJsonLd } from "next-seo";
// import Breadcrumbs from 'nextjs-breadcrumbs';
{
  /* <script src="https://cdnjs.cloudflare.com/ajax/libs/alpinejs/2.8.0/alpine.js"></script> */
}
export default function Feature_Landing({ feature_data }) {
  return (
    <>
      <NextSeo
        title={feature_data.PageSEO.PageTitle}
        description={feature_data.PageSEO.PageDescription}
        canonical='https://www.canonical.ie/'
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
      <LogoJsonLd logo='http://www.your-site.com/images/logo.jpg' url='http://www.your-site.com' />
      <SocialProfileJsonLd
        type='Person'
        name='your name'
        url='http://www.your-site.com'
        sameAs={[
          "http://www.facebook.com/your-profile",
          "http://instagram.com/yourProfile",
          "http://www.linkedin.com/in/yourprofile",
          "http://plus.google.com/your_profile",
        ]}
      />
      <FAQPageJsonLd
        mainEntity={[
          {
            questionName: "How long is the delivery time?",
            acceptedAnswerText: "3-5 business days.",
          },
          {
            questionName: "Where can I find information about product recalls?",
            acceptedAnswerText: "Read more on under information.",
          },
        ]}
      />
      <Head>
        <script async src='https://cdnjs.cloudflare.com/ajax/libs/alpinejs/2.8.0/alpine.js'></script>
      </Head>
      <Layout>
        <section className={`w-full py-20 bg-gradient-to-r from-${feature_data.cssStreamTag}-primary to-${feature_data.cssStreamTag}-secondary`}>
          <div className='flex flex-col items-center px-12 mx-auto lg:flex-row'>
            <div className='relative z-20 flex flex-col items-start justify-center w-full h-full lg:w-1/2'>
              {/* <div className="flex hyperlink mb-5 breadcrumb">
                    <Breadcrumbs   rootLabel="Home" activeItemClassName="text-gray-600"   inactiveItemClassName="text-gray-400 " listClassName="flex space-x-1 "  replaceCharacterList={[{ from: '-', to: ' ' }]} />
                    </div> */}
              <p className={`max-w-max px-2 py-1 mb-5  hyperlink text-gray-900 uppercase bg-white rounded-full `}>
                {feature_data.PageHeader.Tag}
              </p>
              <h1 className='heading'>{feature_data.PageHeader.header}</h1>
              <p className=' text-gray-600 pb-7 subheading'>{feature_data.PageHeader.subHeading}</p>
              <div className='md:flex md:flex-row  w-full sm:w-auto sm:flex-row md:space-x-10'>
                <Link href={feature_data.PageHeader.primaryCTA.linkURL} passHref>
                  <a className='sm:mb-4 button inline-block py-3 px-10 bg-black hover:bg-gray-300 hover:text-black shadow text-white  rounded-r-xl rounded-b-xl transition duration-200'>
                    {feature_data.PageHeader.primaryCTA.buttonTitle}
                  </a>
                </Link>
                <Link href={feature_data.PageHeader.secondaryCTA.linkURL} passHref>
                  <a className='flex py-3 px-8 bg-white hover:bg-gray-300 hover:text-black shadow button border-2 border-black rounded-r-xl rounded-b-xl transition duration-200 button inline-block'>
                    <Image className=' w-6 h-6' src='/save-file.svg' alt='save file' width={15} height={20} />
                    <span className='button'>&nbsp;&nbsp;{feature_data.PageHeader.secondaryCTA.buttonTitle}</span>
                  </a>
                </Link>
              </div>
            </div>

            <div className='hidden lg:block relative z-10 w-full h-full my-16 lg:my-0 lg:w-1/2'>
              <Image
                className='relative z-40 w-full h-full'
                src={feature_data.PageHeader.ImageURL}
                alt='hero image'
                width={600}
                height={420}
              />
            </div>
          </div>
        </section>
        {/* <!-- Why Ktern --> */}
        <section className='md:px-20'>
          <h2 className='section-heading text-center mt-10 mb-3'>{feature_data.WhySectionTitle}</h2>
          <p className='section-subheading text-center'>{feature_data.WhySectionDescription}</p>
          <div className='flex justify-center items-center   mx-auto space-x-10 '>
            <div className='flex flex-wrap justify-center items-center'>
              {feature_data.WhyFeaturePoints.map((dt) => (
                <div key='dt' className='p-6 w-full md:w-1/2 lg:w-1/4  md:mb-8 md:mt-8 justify-center items-center '>
                  <span className='flex items-center justify-center w-14 h-14 mb-8  rounded-full'>
                    <Image src={dt.Icon.imageURL} alt='' width={150} height={150} />
                  </span>
                  <h3 className='mb-4  card-heading'>{dt.CardTitle}</h3>
                  <p className='card-subheading text-gray-500'>{dt.CardDescription}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* <!-- /Why Ktern --> */}
        {/* <!-- Criss Cross Features--> */}
        <section className='px-10 py-10 bg-white'>
          <div className='relative'>
            <h2 className='w-full section-heading  text-center'> {feature_data.FeatureTitle}</h2>
            <p className='w-full py-8 mx-auto -mt-2 section-subheading text-center text-gray-700  sm:max-w-3xl'>
              {feature_data.FeatureDefinition}
            </p>
          </div>

          <div className='flex flex-col md:p-20  md:mx-auto md:space-y-12  '>
            {feature_data.SubFeatures.map((dt, index) => {
              return index % 2 == 0 ? (
                <div key = "dt" className='flex mb-8 animated mx-auto fadeIn md:space-x-32'>
                  <div className='flex flex-col justify-center mt-5 md:mb-8 md:mt-0 sm:w-full md:w-1/2 '>
                    <p className=' hyperlink  text-left text-project-primary uppercase'>{dt.Tag}</p>
                    <h3 className=' card-heading sm:text-left'>{dt.CardTitle}</h3>
                    <p className='mt-2 card-subheading text-gray-700  md:text-left'>{dt.CardDescription}</p>
                  </div>
                  <div className='hidden md:block flex items-center mb-8 w-1/2 sm:order-last'>
                    <div className='relative' style={{ zIndex: 0 }}>
                      <div className=' '>
                        <Image src={dt.Icon.imageURL} alt='' width={dt.Icon.width} height={dt.Icon.height} />
                      </div>
                      <div
                        className='animate-pulse hidden md:block absolute w-60 h-40'
                        style={{ top: "-2rem", right: "3rem", zIndex: -1 }}
                      >
                      <svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0 49V0H49H50L49.99 0.00980377C76.595 0.537064 98 22.2688 98 49C98 76.062 76.062 98 49 98C21.938 98 0 76.062 0 49Z" fill={feature_data.topWing}/>
</svg>

                      </div>
                      <div
                        className='animate-pulse hidden md:block absolute w-60 h-40'
                        style={{ bottom: "-2rem", right: "-2rem", zIndex: -1 }}
                      >
                      <svg width="166" height="165" viewBox="0 0 166 165" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M82.9727 164.999C82.8152 165 82.6577 165 82.5 165C36.9365 165 0 128.063 0 82.5C0 36.9365 36.9365 0 82.5 0C128.063 0 165 36.9365 165 82.5C165 83.2975 164.989 84.0924 164.966 84.8844L165.21 165H82.9714L82.9727 164.999Z" fill={feature_data.bottomWing}/>
</svg>

                      </div>
                      <div
                        className='animate-pulse hidden md:block absolute w-60 h-40'
                        style={{ bottom: "2.5rem", right: "-4.5rem", zIndex: -1 }}
                      >
                        <Image layout='fill' src='/atis-assets/elements/bullets-gray-left.svg' alt='' />
                      </div>
                      <div
                        className='animate-pulse hidden md:block absolute w-60 h-40'
                        style={{ top: "3rem", left: "-8rem", zIndex: -1 }}
                      >
                        <Image layout='fill' src='/atis-assets/elements/bullets-gray-right.svg' alt='' />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div key = "dt" className='flex mb-8 animated mx-auto fadeIn md:space-x-32'>
                  <div className='hidden md:block relative flex items-center mb-8 w-1/2'>
                    <div className='relative' style={{ zIndex: 0 }}>
                      <div className=' relative '>
                        <Image src={dt.Icon.imageURL} alt=''  width={dt.Icon.width} height={dt.Icon.height}/>
                      </div>
                      <div
                        className='animate-pulse hidden md:block absolute w-60 h-40'
                        style={{ top: "-2rem", right: "3rem", zIndex: -1 }}
                      >
                        <svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0 49V0H49H50L49.99 0.00980377C76.595 0.537064 98 22.2688 98 49C98 76.062 76.062 98 49 98C21.938 98 0 76.062 0 49Z" fill={feature_data.topWing}/>
</svg>
                      </div>
                      <div
                        className='animate-pulse hidden md:block absolute w-60 h-40'
                        style={{ bottom: "-2rem", right: "-2rem", zIndex: -1 }}
                      >
                         <svg width="166" height="165" viewBox="0 0 166 165" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M82.9727 164.999C82.8152 165 82.6577 165 82.5 165C36.9365 165 0 128.063 0 82.5C0 36.9365 36.9365 0 82.5 0C128.063 0 165 36.9365 165 82.5C165 83.2975 164.989 84.0924 164.966 84.8844L165.21 165H82.9714L82.9727 164.999Z" fill={feature_data.bottomWing}/>
</svg>
                      </div>
                      <div
                        className='animate-pulse hidden md:block absolute w-60 h-40'
                        style={{ bottom: "2.5rem", right: "-4.5rem", zIndex: -1 }}
                      >
                        <Image layout='fill' src='/atis-assets/elements/bullets-gray-left.svg' alt='' />
                      </div>
                      <div
                        className='animate-pulse hidden md:block absolute w-60 h-40'
                        style={{ top: "3rem", left: "-8rem", zIndex: -1 }}
                      >
                        <Image layout='fill' src='/atis-assets/elements/bullets-gray-right.svg' alt='' />
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col justify-center mt-5 md:mb-8 md:mt-0 sm:w-full md:w-1/2 '>
                    <p className={` hyperlink  text-left text-${dt.cssStreamTag}-primary uppercase`}>{dt.Tag}</p>
                    <h3 className=' card-heading sm:text-left'>{dt.CardTitle}</h3>
                    <p className='mt-2 card-subheading text-gray-700'>{dt.CardDescription}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        {/* <!-- Criss Cross Features End --> */}
        <section className={`box-border overflow-hidden relative w-full font-sans leading-6 text-gray-700 bg-white border-0 border-gray-200 border-solid bg-${feature_data.cssStreamTag}-secondary`}>
          <div className='box-border flex flex-col items-center px-8 py-20 mx-auto leading-6 border-solid max-w-7xl xl:px-16 md:items-stretch md:justify-center md:py-24'>
            <div className='relative pb-10'>
              <h2 className='w-full m-0 section-heading font-black leading-loose tracking-wide text-center text-gray-700 border-0 border-gray-200 '>
                {feature_data.OtherFeaturesTitle}
              </h2>
              <p className='w-full max-w-xl section-subheading mx-0 mx-auto mt-4 mb-0 font-sans   leading-relaxed text-center text-gray-400 border-0 border-gray-200 lg: md:'>
                {feature_data.OtherFeaturesDescription}
              </p>
            </div>

            <div className='z-10 grid gap-5 md:grid-cols-6 lg:grid-cols-9'>
              {feature_data.OtherFeaturesCard.map((dt) => (
                <div key = "dt" className='col-span-3 font-sans text-gray-700 bg-white '>
                  <div className='box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left'>
                    <div className='flex-shrink-0 p-3 font-sans text-gray-700 border border-gray-200 rounded-full'>
                      <svg
                        xmlns={dt.Icon.imageURL}
                        className='leading-6 text-center text-gray-700 align-middle stroke-current w-7 h-7'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='#2c3e50'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <path d='M0 0h24v24H0z' stroke='none'></path>
                        <path d='M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3M12 12l8-4.5M12 12v9M12 12L4 7.5M16 5.25l-8 4.5'></path>
                      </svg>
                    </div>
                    <div className='mt-4 font-sans text-left text-gray-700 border-0 border-gray-200 sm:mt-2 sm:ml-4'>
                      <h6 className='box-border card-heading mb-4  leading-none tracking-wide text-left border-solid'>
                        {dt.CardTitle}
                      </h6>
                      <p className='box-border mx-0 mt-1 mb-0 card-subheading  leading-loose text-gray-400 border-solid sm:mt-4'>
                        {dt.CardDescription}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='absolute top-0 left-0 -ml-56 opacity-25 w-96 h-96'>
            <svg
              className={`text-${feature_data.cssStreamTag}-primary opacity-100 fill-current w-88 h-88`}
              viewBox='0 0 200 200'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M25.5,-24.7C35.8,-15.2,48.9,-7.6,50.6,1.7C52.3,11,42.6,22,32.3,31.2C22,40.4,11,47.8,-1.9,49.8C-14.9,51.7,-29.7,48.1,-41.1,38.9C-52.5,29.7,-60.5,14.9,-60.3,0.3C-60,-14.3,-51.5,-28.6,-40,-38.1C-28.6,-47.6,-14.3,-52.3,-3.4,-48.9C7.6,-45.5,15.2,-34.2,25.5,-24.7Z'
                transform='translate(100 100)'
              ></path>
            </svg>
          </div>

          <div className='absolute top-0 right-0 -mb-56 opacity-25 w-96 h-96 -mr-72'>
            <svg
              className={`w-full h-full text-${feature_data.cssStreamTag}-primary opacity-100 fill-current`}
              viewBox='0 0 200 200'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M44.3,-48.3C55.3,-33.4,60.4,-16.7,62.2,1.8C64,20.3,62.5,40.6,51.6,55.3C40.6,70,20.3,79,2.3,76.7C-15.7,74.4,-31.4,60.7,-46.7,46C-62,31.4,-76.9,15.7,-78.5,-1.6C-80,-18.8,-68.2,-37.6,-52.9,-52.5C-37.6,-67.5,-18.8,-78.5,-1.1,-77.5C16.7,-76.4,33.4,-63.3,44.3,-48.3Z'
                transform='translate(100 100)'
              ></path>
            </svg>
          </div>
        </section>
        {/* <!-- Customer Stats--> */}
        <section className='pb-10 pt-5 bg-black'>
          <div className='container px-4 mx-auto'>
            <div className='p-16 bg-black'>
              <div className='flex flex-wrap items-center -mx-10 -mb-10'>
                {feature_data.Statistics.map((dt) => (
                  <div key = "dt" className='w-full md:w-1/2 lg:w-1/4 px-10 mb-10 text-center'>
                    <span>
                      <svg
                        className='mx-auto mb-6 text-blue-800 h-8 w-8'
                        viewBox='0 0 32 32'
                        fill='currentColor'
                        xmlns={dt.Icon.imageURL}
                      >
                        <path d='M16 -0.0533447L0 15.7333L16 31.52L32 15.7333L16 -0.0533447ZM3.7708 15.7333L16 3.66718L21.172 8.77022L19.2864 10.6307L16 7.38888L7.5428 15.7333L10.828 18.9759L8.9424 20.8364L3.7708 15.7333ZM20.6876 15.7333L16 20.3596L11.3136 15.7333L16 11.1094L20.6876 15.7333ZM10.828 22.6968L12.7136 20.8364L16 24.0778L24.4584 15.7333L21.172 12.4907L23.0576 10.6303L28.2292 15.7333L16 27.7995L10.828 22.6968Z'></path>
                      </svg>
                    </span>
                    <h3 className='mb-3   card-heading text-white'>{dt.CardTitle}</h3>
                    <p className=' card-subheading text-gray-500'>{dt.CardDescription}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* <!--Faq Section--> */}
        <section className='py-10 bg-project-white'>
          <h2 className='mb-2 section-heading  text-center'>{feature_data.FAQSectionTitle}</h2>
          <div className='flex space-x-10 p-10'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4 mx-auto'>
              {feature_data.FAQ.map((dt) => (
                <details key = "dt" className='relative overflow-hidden border-2 border-gray-200  select-none hover:bg-white'>
                  <summary
                    className=' flex items-center justify-between   text-gray-700 cursor-pointer sm: px-6 py-6 hover:text-gray-800'
                    style={{ listStyle: "none" }}
                  >
                    <span className='card-subheading'>{dt.Question}</span>
                    <svg
                      className=' w-6 h-6 transition-all duration-200 ease-out transform rotate-0'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                      ></path>
                    </svg>
                  </summary>
                  <hr />
                  <div className='p-4 hyperlink'>{dt.Answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
        {/* <!--Resources Section--> */}
        <section className='w-full pt-8 bg-white sm:pt-12 md:pt-16'>
          <div className='px-2 mx-auto max-w-7xl'>
            <div className='flex justify-center w-full pb-5 mb-4 border-gray-200'>
              <h2 className='section-heading  text-gray-800 '>{feature_data.RelatedResourcesSectionTitle}</h2>
            </div>

            <div className='grid grid-cols-12 gap-6 mb-6'>
              {feature_data.RelatedResourcesList.map((dt) => (
                <div key = "dt" className='relative col-span-12 space-y-3 md:col-span-5 lg:col-span-3 shadow-lg hover:shadow-xl  p-4'>
                  <div className=''>
                    <Link href='#_' passHref>
                      <a className='relative block w-full h-44 overflow-hidden rounded'>
                        <Image
                          className='bg-secondary object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105'
                          src={dt.Icon.imageURL}
                          alt='resource'
                          layout='fill'
                        />
                      </a>
                    </Link>
                  </div>
                  <div className=''>
                    <p className='hyperlink text-gray-400  uppercase mb-4'>{dt.CardTitle}</p>
                    <span className='block card-subheading font-semibold leading-tight text-gray-700 mb-4 hover:text-gray-900 '>
                      {dt.CardDescription}
                    </span>
                    <Link href={dt.CTAUrl} passHref>
                      <a className='inline-flex items-center   text-black hover:text-gray-400 group '>
                        <span className='hyperlink group-hover:text-gray-300'>{dt.CTAText}</span>
                        <svg
                          className='w-5 h-6 mt-1 ml-2 group-hover:text-gray-300'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns={dt.Icon.imageURL}
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
                  </div>
                </div>
              ))}
            </div>
            <div className='text-center'>
              <Link href={feature_data.ViewAllResourcesURL} passHref>
                <a className='inline-flex items-center   text-black hover:text-gray-400 group '>
                  <span className='hyperlink group-hover:text-gray-300'>{feature_data.ViewAllResourcesText}</span>
                  <svg
                    className='w-5 h-6 mt-1 ml-2 group-hover:text-gray-300'
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
            </div>
          </div>
        </section>{" "}
        {/* / Resources Setion */}
        {/* <!-- Footer CTA Features Page --> */}
        <section className='bg-white'>
          <div className='md:px-8 md:py-8 mx-auto  sm:py-10 lg:py-20 max-w-7xl'>
            <div className={`relative py-6 overflow-hidden  bg-gradient-to-r from-black to-${stream_data.cssstreamtag}-400 lg:py-12 md:px-6 lg:p-16 lg:flex lg:items-center lg:justify-between md:shadow-xl md:bg-purple-1000`}>
              <div className='absolute top-0 right-0 hidden w-full -mt-20 transform rotate-45 translate-x-1/2 bg-white sm:block h-96 opacity-5'></div>
              <div className='absolute top-0 left-0 hidden w-full -mt-20 transform rotate-45 -translate-x-1/2 bg-white sm:block h-96 opacity-5'></div>
              <div className='relative p-6  md:p-0 md:pb-4'>
                <h2 className='card-heading  leading-9 tracking-tight text-white  sm:leading-10'>
                  {feature_data.FinalCTASection.CTATitle}
                </h2>
                <p className='w-full mt-5 card-subheading text-white '>{feature_data.FinalCTASection.CTADescription}</p>
              </div>
              <div className='relative flex flex-col items-center w-full px-6 space-y-5 md:space-x-5 md:space-y-0 md:flex-row md:w-auto lg:flex-shrink-0 md:px-0'>
                <Link href={feature_data.FinalCTASection.PrimaryCTA.linkURL} passHref>
                  <a className='  inline-block py-3 px-10 bg-black hover:bg-gray-300 hover:text-black shadow  button  text-white rounded-r-xl rounded-b-xl transition duration-200 border-2 border-black'>
                    {feature_data.FinalCTASection.PrimaryCTA.buttonTitle}
                  </a>
                </Link>
                <Link rel='noopener noreferrer' href='{feature_data.FinalCTASection.SecondaryCTA.linkURL}' passHref>
                  <a
                    target='_blank'
                    className='  inline-block py-3 px-10 bg-white button hover:bg-gray-50 hover:text-black shadow hyperlink  text-black rounded-r-xl rounded-b-xl transition duration-200 border-2 border-black'
                  >
                    {feature_data.FinalCTASection.SecondaryCTA.buttonTitle}
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
export const getStaticPaths = async () => {
  // dynamic route array values must be acquired here from strapi
  const data = [
    { product: "digital-maps", feature: "business-process-assessment" },
    // { product: "digital-maps", feature: "landscape-assessment" },
    // { product: "digital-maps", feature: "custom-objects-assessment" },
    // { product: "digital-maps", feature: "business-transformation-assessment" },
    // { product: "digital-maps", feature: "timeline-effort-estimation" },
  ];

  const paths = data.map((index) => {
    return {
      params: { product: index.product, feature: index.feature },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const streamslug = params.product;
  const featureslug = params.feature;

  const res = await fetch(`https://api.ktern.com/features?streamslug=${streamslug}&featureslug=${featureslug}`, {
    method: "get",
  });

  const data = await res.json();
  // console.log(data[0]);

  return {
    props: {
      feature_data: data[0],
    },
  };
};
