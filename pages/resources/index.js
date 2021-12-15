import Layout from "../../component/Layout";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { BreadcrumbJsonLd } from "next-seo";
import { LogoJsonLd } from "next-seo";
import { SocialProfileJsonLd } from "next-seo";
import { useState,useEffect } from "react";
import Dropdown from 'react-dropdown';
import _ from 'lodash';
import {useRouter} from "next/router";
export default function Resources({ data,h_data,f_data }) {
  let breadcrumb = [];
  data.PageSEO.BreadCrumb.map((dt) => {
    breadcrumb.push({ position: dt.position, name: dt.name, item: dt.item });
  });
 const router=useRouter();
 
  function colorChange () {
    if (typeof process.browser)
      document.getElementById('option').style.backgroundColor="#00000"
}
  const [ isFilters, setFilters ] = useState([]);

  // Drop Down
  // console.log(data.StreamsFilter)

  let streamOptions = [];
  let topicOptions = [];
  let resourceTypeOptions = [];
  let roleOptions = [];
  function filterData (data) {
    let filter = []
     let val = {}
    
    
    data.map(item => {
      val = {}
      val[ 'label' ] = item.Label;
      val[ 'value' ] = item.Value;
      filter.push(val) 
    })
    
    // console.log(filter,data)
    return filter
  }
  streamOptions = filterData(data.StreamsFilter);
  topicOptions = filterData(data.TopicsFilter);
  resourceTypeOptions = filterData(data.ResourceTypeFilters);
  roleOptions = filterData(data.RolesFilter);
  const [ResourceList,setResourceList]=useState(data.ResourcesList)
  let filter = []
  
  
    let Labels=['type','stream','topic','role']
  function handleChange (event) {
    let filterArray = {}
    if (document.getElementById('stream').value!= 'allStreams')
      filterArray.DigitalStream = document.getElementById('stream').value
    if (document.getElementById('type').value!= 'allTypes')
      filterArray.ResourceType = document.getElementById('type').value
    if (document.getElementById('topic').value!= 'allTopics')
      filterArray.RelatedTopic = document.getElementById('topic').value
    if (document.getElementById('role').value!= 'allRoles')
        filterArray.RelatedRole=document.getElementById('role').value
   
// console.log(filterArray)
   
      filter=_.filter(data.ResourcesList,filterArray)
  
       setResourceList(filter);
   
  }
  let video="Video";
  useEffect(() => {
  if(router.query.type){
    let filterArray = {}
    filterArray.ResourceType = router.query.type
      
// console.log(filterArray)
   
filter=_.filter(data.ResourcesList,filterArray)
// console.log(filter)
  setResourceList(filter);
  if(process.browser)
  document.getElementById('type').value=router.query.type;
   }
   if(router.query.stream){
    let filterArray = {}
    filterArray.DigitalStream = router.query.stream
   }  
// console.log(filterArray)
   
filter=_.filter(data.ResourcesList,filterArray)
// console.log(filter)
  setResourceList(filter);
  if(process.browser)
  document.getElementById('type').value=router.query.type;
   
  },[])
  function handleFilter (element) {
    filter=[]
    data.ResourcesList.map(item => {
      if (filterArray.includes(item.ResourceType))
        filter.push(item)
    }
    )
    
    setResourceList(filter);
  }
  return (
    <>
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
               url:`${data.PageSEO.ThumbnailImageURL}`,
               width: 1920,
               height: 1080,
               alt: `${data.PageSEO.PageTitle}`,
               type: 'image/png',
             }
           ],
           site_name: `${process.env.SITE_TITLE}`,
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
             rel: 'icon',
             href: 'https://storage.googleapis.com/ktern-public-files/website/icons/favicon.ico',
           },
           {
             rel: 'apple-touch-icon',
             href: 'https://storage.googleapis.com/ktern-public-files/website/icons/apple-touch-icon-76x76.png',
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
    
      
      <Layout h_data={h_data} f_data={f_data}>
        <section className="w-full py-24 background overflow-hidden">
          <div className="flex flex-col items-center md:px-12 mx-auto lg:flex-row">
            <div className="relative z-20 flex flex-col sm:px-4 md:w-2/3 h-full ">
              <p className="max-w-max px-2 py-1 mb-5 font-medium hyperlink  text-gray-900 uppercase bg-gray-200 rounded-full ">
                {data.ResourcesTranslations.Resources}
              </p>
              <h1 className="heading  text-white ">{data.PageHeader.header}</h1>
              <p className="subheading text-gray-100 pb-7">
                {data.PageHeader.subHeading}
              </p>
              <div className="md:flex md:flex-row md:space-x-4 sm:space-y-4">
                <Link
                  rel="noopener noreferrer"
                  href={data.PageHeader.primaryCTA.linkURL}
                >
                  <a
                    target="_blank"
                    className=" inline-block py-3 px-16 border-2 border-white bg-black hover:bg-gray-300 hover:text-black shadow   text-white  rounded-r-xl rounded-b-xl transition duration-200 button"
                  >
                    {data.PageHeader.primaryCTA.buttonTitle}
                  </a>
                </Link>
                <Link href={data.PageHeader.secondaryCTA.linkURL}>
                  <a className=" sm:mb-4 inline-block  mr-4 border-2 border-black shadow-md py-3 px-14 bg-white  hover:bg-gray-300   text-black   rounded-r-xl rounded-b-xl transition duration-200 uppercase border-2 border-black button ">
                    {data.PageHeader.secondaryCTA.buttonTitle}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Filter Section */}
        <section className="sm:hidden block  bg-black flex items-center justify-center p-5 sticky z-30 md:top-16 sm:top-10">
                <h1 className="w-1/6 uppercase text-white navbar-h ">Filter By:</h1>
                <form onChange={handleChange} className="w-5.5/6 grid grid-cols-4 gap-7">
                  <select name="stream" id="stream" className="p-2 pr-4 text-black bg-white  w-90" style={{ webkitAppearance: 'none',
   mozAppearance: 'none',
   appearance: 'none',
    background: "url('/assets/icons/down-arrow.png') 92% / 8% no-repeat #fff"
     }}>
                    {streamOptions.map((item)=>(
                      <option id="option"  style={{appearance:'none'}} onMouseEnter={colorChange} key="item" value={item.value}>{item.label}</option>))}
                  </select>
                  <select name="topic" id="topic" className="p-2 pr-4 text-black bg-white  w-90" style={{ webkitAppearance: 'none',
   mozAppearance: 'none',
   appearance: 'none',
    background: "url('/assets/icons/down-arrow.png') 92% / 8% no-repeat #fff"
     }}>
                    {topicOptions.map((item)=>(
                      <option id="option"  style={{appearance:'none'}} onMouseEnter={colorChange} key="item" value={item.value}>{item.label}</option>))}
                  </select>
                  <select name="role" id="role" className="p-2 pr-4 text-black bg-white  w-90" style={{ webkitAppearance: 'none',
   mozAppearance: 'none',
   appearance: 'none',
    background: "url('/assets/icons/down-arrow.png') 92% / 8% no-repeat #fff"
     }}>
                    {roleOptions.map((item)=>(
                      <option id="option"  style={{appearance:'none'}} onMouseEnter={colorChange} key="item" value={item.value}>{item.label}</option>))}
                  </select>
                  <select name="type" id="type" className="p-2 pr-4 text-black bg-white  w-90" style={{ webkitAppearance: 'none',
   mozAppearance: 'none',
   appearance: 'none',
    background: "url('/assets/icons/down-arrow.png') 92% / 8% no-repeat #fff"
     }}>
                    {resourceTypeOptions.map((item)=>(
                      <option id="option"  style={{appearance:'none'}} onMouseEnter={colorChange} key="item" value={item.value}>{item.label}</option>))}
                 </select>
</form>
              </section>
        <section className="w-full lg:p-10 ">
          
          <div className="flex flex-wrap md:-mx-4 -mb-4 md:mb-0 px-2 md:px-10">
            
          
            <div className="w-full   md:pl-20 mb-4 md:mb-0  mt-10">
            
              <div className="xl:gap-6 gap-3 grid sm:grid-cols-1 w-full grid-cols-2 xl:grid-cols-3 p-3 mx-auto xl:p-6">
                {ResourceList.slice(0).reverse().map((dt) =>        (
                   <div
                    key="dt"
                    className="relative flex  px-2  group overflow-hidden false transition transform hover:-translate-y-1 duration-500"
                    >
                       <span className={`absolute top-0 left-0 h-full mt-1 ml-1 bg-secondary  group-hover:bg-${dt.DigitalStream}-secondary `} style={{height:'400px',width:'345px'}}></span>
                   <div className={`relative shadow bg-white flex-col p-5 px-5  group overflow-hidden false border border-black hover:border-${dt.DigitalStream}-primary `}>
                      <div className="">
                      <Link href={dt.ResourceURL} passHref>
                        <a className="relative block w-full h-44 overflow-hidden rounded">
                          <div
                            className={`z-20 ${dt.DigitalStream} absolute hyperlink top:0 mx-2 mt-2 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md uppercase text-gray-200 opacity-60 inline-block`}
                          >
                            <span>Digital {dt.DigitalStream}</span>
                          </div>

                        { dt.ResourceType==video ?
                         ( <div>
                           <div className="absolute inset-0 z-10 flex items-center justify-center mb-6">
                          
                                        <span className="flex text-white items-center justify-center w-12 h-12 bg-black rounded-full group-hover:text-black shadow-2xl group-hover:bg-white opacity-60">
                                           <svg className="w-auto h-6 ml-1   fill-current" viewBox="0 0 52 66" xmlns="http://www.w3.org/2000/svg"><path d="M50 30.7L4.1.6C2.6-.4.8.9.8 2.9v60.3c0 2 1.8 3.3 3.3 2.3L50 35.3c1.5-1 1.5-3.6 0-4.6z" fillRule="nonzero"></path></svg>
                                       </span>
                                
                   </div> <Image
                            className="bg-secondary object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105"
                            src={dt.ImageURL}
                            alt="resource"
                            width="550"
                            height="300"
                          />
                          </div>):(
                            <Image
                            className="bg-secondary object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105"
                            src={dt.ImageURL}
                            alt="resource"
                            width="550"
                            height="300"
                          />
                          )}
                        </a>
                      </Link>
                    </div>
                    <Link href={dt.ResourceURL} passHref>
                      <a>
                        <p className="hyperlink text-gray-400  uppercase mb-4">
                          {dt.ResourceTypeName} 
                        </p>
                        <span className="block card-subheading font-semibold leading-tight text-gray-700 mb-4 hover:text-gray-900 ">
                          {dt.ResourceTitle}
                        </span>
                        <Link href={dt.ResourceURL} passHref>
                          <a className="inline-flex items-center   text-black hover:text-gray-400 group ">
                            <span className="hyperlink group-hover:text-gray-300">
                              {dt.CTAText}
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
                      </a>
                    </Link>
                 </div>  
                 </div>
              ))}
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Footer--> */}
        <section className="bg-white">
          <div className="md:px-8 md:py-8 mx-auto  sm:py-10 lg:py-20 max-w-7xl">
            <div className="relative py-6 overflow-hidden  background lg:py-12 md:px-6 lg:p-16 lg:flex lg:items-center lg:justify-between md:shadow-xl md:bg-purple-1000">
              <div className="absolute top-0 right-0 hidden w-full -mt-20 transform rotate-45 translate-x-1/2 bg-white sm:block h-96 opacity-5"></div>
              <div className="absolute top-0 left-0 hidden w-full -mt-20 transform rotate-45 -translate-x-1/2 bg-white sm:block h-96 opacity-5"></div>
              <div className="relative p-6  md:p-0 md:pb-4">
                <h2 className="card-heading  leading-9 tracking-tight text-white  sm:leading-10">
                  Get started with your DXaaS Journey
                </h2>
                <p className="w-full mt-5 card-subheading text-white ">
                  Start your 15-day free trial. No credit card required. No
                  strings attached.
                </p>
              </div>
              <div className="relative flex flex-col items-center w-full px-6 space-y-5 md:space-x-5 md:space-y-0 md:flex-row md:w-auto lg:flex-shrink-0 md:px-0">
                <Link href="/pricing" passHref>
                  <a className="  inline-block py-3 px-10 bg-black border-2 border-white hover:bg-gray-300 hover:text-black shadow  button  text-white rounded-r-xl rounded-b-xl transition duration-200 border-2 border-black">
                    See Pricing
                  </a>
                </Link>
                <Link
                  rel="noopener noreferrer"
                  href="https://app.ktern.com"
                  passHref
                >
                  <a
                    target="_blank"
                    className="  inline-block py-3 px-10 bg-white button hover:bg-gray-50 hover:text-black shadow hyperlink  text-black rounded-r-xl rounded-b-xl transition duration-200 border-2 border-black"
                  >
                    Try it free
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

export const getServerSideProps = async ({params}) => {
  // console.log(params);
  // strapi data to be acquired
  const res = await fetch("https://api.ktern.com/resources");
  const data = await res.json();
  	const res1 = await fetch('https://api.ktern.com/header', {
		method: 'get',
	});
  const h_data = await res1.json();
  const res2 = await fetch('https://api.ktern.com/footer', {
		method: 'get',
	});
	const f_data = await res2.json();
  return {
    props: {
      data: data,
      h_data: h_data,
    f_data:f_data},
  };
};
