import Layout from "../component/Layout";
import Image from "next/image";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { BreadcrumbJsonLd } from "next-seo";
import { LogoJsonLd } from "next-seo";
import { SocialProfileJsonLd } from "next-seo";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import { useRouter } from 'next/router';
export default function PartnerContact({ data,h_data,f_data }) {
  const router=useRouter();
  console.log(router.query.message);
  if(router.query.message=="thanks"){
    if(process.browser)
    document.getElementById('thanks_container').style.display="block"
  }
  let breadcrumb = [];
  data.PageSEO.BreadCrumb.map((dt) => {
    breadcrumb.push({ position: dt.position, name: dt.name, item: dt.item });
  });
  return (
    <>
      <Head>
        <script
          async
          id="wf_anal"
          src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=d282bac1d91514c46c75683473f967a121858ebbdbfb6e6b202f66f955b01cfegiddb887390625950606c3528f7d8a1164e437cac61a532b2d3cf089f26bcebb04cgid34012eca3464f95361fd8f71572f880aae345de7c6bd763484fe9bc1e9d54b4fgid4ee3a7e9ace6ab1be7c541b329164307"
        ></script>
      </Head>
      <LogoJsonLd
        logo={process.env.LOGO}
        url={process.env.URL}
      />
      <NextSeo
        title={`${data.PageSEO.PageTitle}`}
        description={`${data.PageSEO.PageDescription}`}
        canonical={`${data.PageSEO.CanonicalTag}`}
        openGraph={{
          url:`${data.PageSEO.ThumbnailImageURL}`,
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
        <div className="py-20 w-full min-h-screen bg-white flex justify-center ">
      
          <div className=" zcwf_lblLeft crmWebToEntityForm w-full p-4 md:w-1/3 py-12 md:px-12 bg-white rounded-2xl md:shadow-xl z-20">
            <div>
              <h1 className="  text-center mb-4 cursor-pointer section-heading">
                {data.PartnerRegistrationForm.FormTitle}
              </h1>
              <div id="thanks_container" className=" hidden mb-5 bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
  <div className="flex ">
    <div className="py-1 pr-4"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
</svg></div>
    <div>
      <p className="font-bold card-subheading">{data.PartnerRegistrationForm.ThanksMsg}</p>
     
    </div>
  </div>
</div>
              <p className=" text-center  mb-8  section-subheading text-gray-700 cursor-pointer">
               {data.PartnerRegistrationForm.FormSubTitle}
              
              </p>
            </div>
            <form
              className="relative w-full mt-6 space-y-8"
              action="https://crm.zoho.in/crm/WebToContactForm"
              name="WebToContacts240235000000441168"
              method="POST"
              acceptCharset="UTF-8"
            >
              <input
                type="text"
                style={{ display: "none" }}
                name="xnQsjsdp"
                value="db887390625950606c3528f7d8a1164e437cac61a532b2d3cf089f26bcebb04c"
              />
              <input type="hidden" name="zc_gad" id="zc_gad" value="" />
              <input
                type="text"
                style={{ display: "none" }}
                name="xmIwtLD"
                value="d282bac1d91514c46c75683473f967a121858ebbdbfb6e6b202f66f955b01cfe"
              />
              <input
                type="text"
                style={{ display: "none" }}
                name="actionType"
                value="Q29udGFjdHM="
              />
              <input
                type="text"
                style={{ display: "none" }}
                name="returnURL"
                value={data.PartnerRegistrationForm.redirectURL}
              />
              {/* <!-- Do not remove this code. --> */}
              <input
                type="text"
                style={{ display: "none" }}
                id="ldeskuid"
                name="ldeskuid"
              />
              <input
                type="text"
                style={{ display: "none" }}
                id="LDTuvid"
                name="LDTuvid"
              />
              {/* <!-- Do not remove this code. --> */}

              <div className="zcwf_row">
                <div
                  className="zcwf_col_lab"
                  style={{ fontSize: "12px", fontFamily: "Arial" }}
                >
                  <label
                    className="absolute px-2 ml-2 -mt-3 card-subheading font-bold text-black bg-white"
                    htmlFor="First_Name"
                  >
                    {data.PartnerRegistrationForm.FirstName}
                  </label>
                </div>
                <div className="zcwf_col_fld">
                  <input
                  required
                    className="block w-full px-4 py-4 mt-2  placeholder-gray-400 bg-white border-2 border-gray-400 rounded-md focus:outline-none focus:border-black"
                    type="text"
                    id="First_Name"
                    name="First Name"
                    maxLength="40"
                  />
                  <div className="zcwf_col_help"></div>
                </div>
              </div>
              <div className="zcwf_row">
                <div
                  className="zcwf_col_lab"
                  style={{ fontSize: "12px", fontFamily: "Arial" }}
                >
                  <label
                    className="absolute px-2 ml-2 -mt-3 card-subheading font-bold text-black bg-white"
                    htmlFor="Last_Name"
                  >
                    {data.PartnerRegistrationForm.LastName}
                  </label>
                </div>
                <div className="zcwf_col_fld">
                  <input
                  required
                    className="block w-full px-4 py-4 mt-2  placeholder-gray-400 bg-white border-2 border-gray-400 rounded-md focus:outline-none focus:border-black"
                    type="text"
                    id="Last_Name"
                    name="Last Name"
                    maxLength="80"
                  />
                  <div className="zcwf_col_help"></div>
                </div>
              </div>
              <div className="zcwf_row">
                <div
                  className="zcwf_col_lab"
                  style={{ fontSize: "12px", fontFamily: "Arial" }}
                >
                  <label
                    className="absolute px-2 ml-2 -mt-3 card-subheading font-bold text-black bg-white"
                    htmlFor="Email"
                  >
                   {data.PartnerRegistrationForm.Email}
                  </label>
                </div>
                <div className="zcwf_col_fld">
                  <input
                  required
                    className="block w-full px-4 py-4 mt-2  placeholder-gray-400 bg-white border-2 border-gray-400 rounded-md focus:outline-none focus:border-black"
                    type="email"
                    ftype="email"
                    id="Email"
                    name="Email"
                    maxLength="100"
                  />
                  <div className="zcwf_col_help"></div>
                </div>
              </div>
              <div className="zcwf_row">
                      <div className="zcwf_col_lab"></div>
                      <div className="zcwf_col_fld">
                        <input type="checkbox" id="privacy" value="true" required/><label> <Markdown
                    options={{
                      overrides: {
                        p:{
                          props:{
                            className:"text-sm text-justify leading-5"
                          }
                        },
                        strong:{
                          props:{
                            className:"leading-8"
                          }
                        }
                      }}}
                    className=""
                  >{data.PartnerRegistrationForm.PrivacyStatement}</Markdown></label>
                        </div> 
                        </div>   
              <div className="zcwf_row">
                <div className="zcwf_col_lab"></div>
                <div className="zcwf_col_fld">
                  <input
                    className="formsubmit  inline-block w-full button px-5 py-4 uppercase hyperlink text-center text-white transition duration-200 bg-black 
                                            rounded-r-xl rounded-b-xl transition duration-200 hover:bg-gray-500 ease"
                    type="submit"
                    id="formsubmit"
                    value={data.PartnerRegistrationForm.SubmitButton}
                    title="Submit"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
}
export const getServerSideProps = async () => {
  // data url from strapi
  const res = await fetch('https://api.ktern.com/partner-registration', {
		method: 'get',
	});
  const data = await res.json();
	const res1 = await fetch('https://api.ktern.com/navbar', {
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
      f_data:f_data
    },
  };
};
