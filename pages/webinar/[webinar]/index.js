import Layout from "../../../component/Layout";
import WebinarLayout from "../../../component/webinar_Layout";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { BreadcrumbJsonLd } from "next-seo";
import { LogoJsonLd } from "next-seo";
import { SocialProfileJsonLd } from "next-seo";
import { EventJsonLd } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";
import { data } from "autoprefixer";
import BreadCrumb from "../../../component/breadcrumb";
import Event,{resolve_interest_score,resolve_stream_score} from "../../../component/page_event";
export default function WebinarLanding({ webinar_Data, h_data, f_data }) {
  let breadcrumb = [];
  webinar_Data.PageSEO.BreadCrumb.map((dt) => {
    breadcrumb.push({ position: dt.position, name: dt.name, item: dt.item });
  });
  // Amplitude Tracking onClick
  function onClick(data){
    Event(data)
    }
  const date = new Date(webinar_Data.WebinarDate + "T" + webinar_Data.Time);
  const time = date.toLocaleString("en-US", {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });
// Event({event_name:"Navigated To",page_source:webinar_Data.PageSEO.PageTitle})
  const router = useRouter();
  const handleSearch = (event) => {
    // console.log("clicked" + webinar_Data.Type + event, router.query);
    if (typeof process.browser) {
      window.open("/webinar" + `${webinar_Data.redirectURL}`);
      return true;
    }
  };
  const dateFormat = new Date(webinar_Data.WebinarDate);

  let formattedDate = dateFormat.toLocaleDateString("en-us", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  function onFormClick(data){
    if(process.browser){
     
      localStorage.setItem('name',document.getElementById('Full_Name').value);
      localStorage.setItem('email',document.getElementById('Email').value)
    }
  //  console.log(localStorage.getItem('email'),localStorage.getItem('name'))
    Event(data);

  }
  return (
    <>
      <LogoJsonLd logo={process.env.NEXT_PUBLIC_LOGO} url={process.env.NEXT_PUBLIC_URL} />
      <NextSeo
       	title={webinar_Data.PageSEO.PageTitle}
         description={webinar_Data.PageSEO.PageDescription}
         canonical={webinar_Data.PageSEO.CanonicalTag}
         openGraph={{
           url: `${webinar_Data.PageSEO.PageURL}`,
           title: `${webinar_Data.PageSEO.PageTitle}`,
           description: `${webinar_Data.PageSEO.PageDescription}`,
           images: [
             {
               url:`${webinar_Data.PageSEO.ThumbnailImageURL}`,
               width: 1920,
               height: 1080,
               alt: `${webinar_Data.PageSEO.PageTitle}`,
               type: 'image/png',
             }
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

      {/* <EventJsonLd
        name="My Event"
        startDate="2020-01-23T00:00:00.000Z"
        endDate="2020-01-24T00:00:00.000Z"
        location={{
          name: "My Place",
          sameAs: "https://example.com/my-place",
          address: {
            streetAddress: "1600 Saratoga Ave",
            addressLocality: "San Jose",
            addressRegion: "CA",
            postalCode: "95129",
            addressCountry: "US",
          },
        }}
        url="https://example.com/my-event"
        images={["https://example.com/photos/photo.jpg"]}
        description="My event @ my place"
      /> */}
      <Layout h_data={h_data} f_data={f_data}>
        <section className="relative sm:mb-20 ">
          <div
            className={`absolute inset-0 bg-gradient-to-b ${webinar_Data.CssStreamTag} `}
          ></div>

          <div className="relative z-20 px-4 py-24 mx-auto text-center text-white max-w-7xl lg:py-32 ">
            <div className="flex flex-wrap text-white">
              <div className="mb-10"><BreadCrumb color="white" b_data={breadcrumb}/></div>
              <div className="relative w-full px-4 mx-auto text-center xl:flex-grow-0 xl:flex-shrink-0">
                <h1 className="mt-0 mb-2 heading  text-white ">
                  {webinar_Data.WebinarTitle}
                </h1>
                <p className="mt-0 mb-4  text-white subheading">
                  {webinar_Data.Type}
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-30  md:px-10 bg-white sm:h-0 ">
            <div className="flex flex-row  items-center sm:h-26 max-w-lg md:p-6 mx-auto space-y-3 overflow-hidden transform -translate-y-12 bg-white rounded-lg shadow-md lg:h-24 lg:max-w-6xl lg:flex-row lg:space-y-0 lg:space-x-3">
              <div className="mb-8  mt-10 flex sm:flex-col items-center lg:justify-center w-1/3 px-4">
                <div className="block  sm:h-8 w-10 h-10 md:mr-4 relative">
                  <Image
                    layout="fill"
                    className=" w-full shadow-sm max-h-20"
                    src="/calendar.png"
                    alt="Calendar"
                  />
                </div>
                <div>
                  <h3 className="sm:text-center hyperlink  lg:">
                    {formattedDate}
                  </h3>
                </div>
              </div>
              <div className="mb-8 flex sm:flex-col items-center lg:justify-center w-1/3 px-4">
                <div className="block  sm:h-8 w-10 h-10 md:mr-4 relative">
                  <Image
                    layout="fill"
                    className=" w-full shadow-sm max-h-20"
                    src="/clock.png"
                    alt="Calendar"
                  />
                </div>
                <div>
                  <h3 className="sm:text-center hyperlink">
                    {time}&nbsp;{webinar_Data.TimeZone}
                  </h3>
                </div>
              </div>
              <div className="mb-8  flex sm:flex-col items-center lg:justify-center w-1/3 px-4">
                <div className="block  sm:h-10 w-10 h-10 md:mr-4 relative ">
                  <Image
                    layout="fill"
                    className=" w-full shadow-sm max-h-20"
                    src="/tickets.png"
                    alt="Calendar"
                  />
                </div>
                <div>
                  <h3 className="sm:text-center  hyperlink sm:mb-10">
                    {webinar_Data.cost}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full px-6 pt-20 py-10 bg-white xl:px-20 ">
          <div className=" mx-auto">
            <div className="flex flex-col items-start md:flex-row">
              <div className="w-full space-y-5 md:w-3/5 md:pr-16">
                <p
                  className={`inline-block py-1 pl-4 pr-4 mb-0 -ml-0 hyperlink  leading-5 text-black transform -translate-y-2  rounded ${webinar_Data.CssStreamTag}`}
                >
                  <Link href={`/digital-${webinar_Data.CssStreamTag}`} rel="category" passHref>
                    <a
                     onClick={()=>{onClick({stream_score:resolve_stream_score(webinar_Data.CssStreamTag),event_name:"Link Click",section_name:"Webinar Content Section",page_source:`${webinar_Data.PageSEO.PageTitle}`,label:`${webinar_Data.DigitalStream}`})}}
                    className="text-white hyperlink uppercase">
                      {webinar_Data.DigitalStream}
                    </a>
                  </Link>
                </p>
                <h2 className=" card-heading  text-black sm: md:">{webinar_Data.AboutTitle}</h2>
                <p className=" text-gray-600 card-subheading md:pr-16 text-justify">
                  {webinar_Data.About}
                </p>
                <h2 className=" card-heading  text-black sm: md:">
                  {webinar_Data.LearningPointsTitle}
                </h2>
                <ul
                  type="circle"
                  className="w-full rounded-lg mt-2 mb-3 text-black"
                >
                  {webinar_Data.LearningPoints.map((content, index) => (
                    <li className="mb-2" key="index">
                      <div className="w-full flex  text-gray-600 md:pr-16">
                        {/* <div className=" block w-4 h-4 relative flex-none">
            <svg className="w-5 h-5 mr-1 text-black mt-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
        </div> */}
                        <span className="ml-2 card-subheading" title="Point 1">
                          <span className="bg-secondary rounded-full px-2 py-1 mr-3">
                            <b>{index + 1}</b>
                          </span>
                          &nbsp;&nbsp;{content.listItem}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full mt-16 md:mt-0 md:w-2/5">
                <div className="mb-10">
                  <h2 className="card-heading   text-black sm: md:">
                    {webinar_Data.PanelistTitle}
                  </h2>
                  <div className="flex items-center  py-5 rounded-xl">
                    {webinar_Data.Panelists.map((member) => (
                      <div className="text-center mr-10" key={member}>
                        <Image
                          width="150"
                          height="150"
                          className="mx-auto rounded-full mb-2  border-3 border-black border-solid"
                          src={member.AvatarURL}
                          alt=""
                        />

                        <h3 className="font-bold   text-lg">{member.Name}</h3>
                        <p className="text-gray-500 hyperlink">
                          {member.Description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className=" relative z-10 h-auto p-8  overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                  <h3 className="mb-6 card-heading  text-center">
                    {webinar_Data.FormFields.FormTitle}
                  </h3>
                  <div className=" relative w-full mt-6 space-y-10">
                    {/* <!--Zoho Campaigns Web-Optin Form Starts Here-->  */}
                    <div
                      id="sf3zd179095996e297a4942da5ad9cf725919b2102257c52886d7ff2da954890cddd"
                      data-type="signupform"
                     
                    >
                      <input
                        type="hidden"
                        id="signupFormType"
                        value="LargeForm_Vertical"
                      />
                      <input type="hidden" id="recapTheme" value="2" />
                      <input
                        type="hidden"
                        id="isRecapIntegDone"
                        value="false"
                      />
                      <div id="customForm">
                        <div
                          name="SIGNUP_PAGE"
                          className="large_form_7_css"
                          id="SIGNUP_PAGE"
                          
                        >
                          <br />
                          <div
                            id="signupMainDiv"
                            name="SIGNUPFORM"
                            changeid="SIGNUPFORM"
                            changename="SIGNUPFORM"
                          
                          >
                           
                              <form
                                method="POST"
                                id="zcampaignOptinForm"
                                action="https://kter.maillist-manage.in/weboptin.zc"
                                target="_blank"
                               className="relative w-full mt-2 space-y-10"
                              >
                                <div
                                  id="SIGNUP_BODY_ALL"
                                  name="SIGNUP_BODY_ALL"
                                >
                                
                                  
                                        <div
                                          name="fieldsdivSf"
                                          className="flex-col space-y-5"
                                        >
                                          <div
                                            className="zcsffield "
                                            fieldid="71738000000000023"
                                          >
                                            <div>
                                            <label
                    className="absolute px-2 ml-2 -mt-3 card-subheading font-bold text-black bg-white"
                    htmlFor="CONTACT_EMAIL"
                  >
                    {webinar_Data.FormFields.Email}
                  </label>
                                              <input
                                              id="Email"
                                                maxLength="100"
                                                placeholder="Business Email"
                                                name="CONTACT_EMAIL"
                                                changeitem="SIGNUP_FORM_FIELD"
                                                type="email"
                                                className="block w-full px-4 py-4 mt-2  placeholder-gray-400 bg-white border-2 border-gray-400 rounded-md focus:outline-none focus:border-black"
                                              />
                                            </div>
                                            <div></div>
                                          </div>
                                          <div
                                            className="zcsffield "
                                            fieldid="71738000000000029"
                                          >
                                            <div>
                                            <label
                    className="absolute px-2 ml-2 -mt-3 card-subheading font-bold text-black bg-white"
                    htmlFor="FIRSTNAME"
                  >
                    {webinar_Data.FormFields.FullName}
                  </label>
                                              <input
                                              id="Full_Name"
                                                maxLength="100"
                                                placeholder="Full Name"
                                                name="FIRSTNAME"
                                                changeitem="SIGNUP_FORM_FIELD"
                                                type="text"
                                                className="block w-full px-4 py-4 mt-2  placeholder-gray-400 bg-white border-2 border-gray-400 rounded-md focus:outline-none focus:border-black"
                                              />
                                            </div>
                                            <div></div>
                                          </div>
                                          <div>
                                          <input
                                            onClick={()=>{onFormClick({stream_score:resolve_stream_score(webinar_Data.CssStreamTag),event_name:"Form Click",section_name:"Register Form Section",page_source:`${webinar_Data.PageSEO.PageTitle}`,label:`${webinar_Data.FormFields.SubmitButton}`})}}
                                            type="submit"
                                            action="Save"
                                            id="zcWebOptin"
                                            name="SIGNUP_SUBMIT_BUTTON"
                                            changetype="SIGNUP_SUBMIT_BUTTON_TEXT"
                                            value={webinar_Data.FormFields.SubmitButton}
                                            className="cursor-pointer  inline-block w-full button px-5 py-4 uppercase hyperlink text-center text-white transition duration-200 bg-black 
                                            rounded-r-xl rounded-b-xl transition duration-200 hover:bg-gray-500 ease"
                                            // onClick={()=>{Event({event_name:"Button Click",page_source:webinar_Data.PageSEO.PageTitle,section_name:"Get Access Form",label:webinar_Data.FormFields.SubmitButton})}}
                                          />
                                        </div>
                                        </div>
                              
                                     
                                      
                                    
                                  {/* <!-- Do not edit the below Zoho Campaigns hidden tags --> 							 */}
                                  <input
                                    type="hidden"
                                    id="fieldBorder"
                                    value=""
                                  />
                                  <input
                                    type="hidden"
                                    name="zc_trackCode"
                                    id="zc_trackCode"
                                    value="ZCFORMVIEW"
                                    onLoad=""
                                  />
                                  <input
                                    type="hidden"
                                    name="viewFrom"
                                    id="viewFrom"
                                    value="URL_ACTION"
                                  />
                                  <input
                                    type="hidden"
                                    id="submitType"
                                    name="submitType"
                                    value="optinCustomView"
                                  />
                                  <input
                                    type="hidden"
                                    id="lD"
                                    name="lD"
                                    value="1fedd54b6f82645"
                                  />
                                  <input
                                    type="hidden"
                                    name="emailReportId"
                                    id="emailReportId"
                                    value=""
                                  />
                                  <input
                                    type="hidden"
                                    name="zx"
                                    id="cmpZuid"
                                    value="1df8ef16d9"
                                  />
                                  <input
                                    type="hidden"
                                    name="zcvers"
                                    value="2.0"
                                  />
                                  <input
                                    type="hidden"
                                    name="oldListIds"
                                    id="allCheckedListIds"
                                    value=""
                                  />
                                  <input
                                    type="hidden"
                                    id="mode"
                                    name="mode"
                                    value="OptinCreateView"
                                  />
                                  <input
                                    type="hidden"
                                    id="zcld"
                                    name="zcld"
                                    value={webinar_Data.FormFields.MailingListId}
                                  />
                                  <input
                                    type="hidden"
                                    id="zctd"
                                    name="zctd"
                                    value=""
                                  />
                                  <input
                                    type="hidden"
                                    id="document_domain"
                                    value=""
                                  />
                                  <input
                                    type="hidden"
                                    id="zc_Url"
                                    value="kter.maillist-manage.in"
                                  />
                                  <input
                                    type="hidden"
                                    id="new_optin_response_in"
                                    value="0"
                                  />
                                  <input
                                    type="hidden"
                                    id="duplicate_optin_response_in"
                                    value="0"
                                  />
                                  <input
                                    type="hidden"
                                    id="zc_formIx"
                                    name="zc_formIx"
                                    value={webinar_Data.FormFields.FormId}
                                  />
                                  {/* <!-- End of the campaigns hidden tags --> */}
                                </div>
                                <input
                                  type="hidden"
                                  id="scriptless"
                                  name="scriptless"
                                  value="yes"
                                />
                              </form>
                           
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

// Return a list of possible value for webinar
// export const getStaticPaths = async () => {
//   // dynamic route array values must be acquired here from strapi
//     const data=[{webinar:'transforming-s4hana-upgrade-journey'},{webinar:'reimagining-sap-s4hana-conversion'},{webinar:'democratizing-sap-digital-transformation-as-a-service-dxaas'},{webinar:'manage-digital-transformation-effectively'},{webinar:'reimagining-sap-testing'}]

//     const paths = data.map(index => {
//         return ({
//             params:{webinar:index.webinar}
//         })
//     })
//     return {
//         paths,
//         fallback:true
//     }
// }
// Fetch necessary data for the blog post using params.webinar
export const getStaticProps = async (ctx) => {
  // console.log("in features", params.webinar);
  // data url from strapi)
  const res = await fetch(
    `https://api.ktern.com/webinars?slug=${ctx.params.webinar}`,
    { method: "get" }
  );
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
      webinar_Data: data[0],
      h_data: h_data,
      f_data: f_data,
    },
  };
};
