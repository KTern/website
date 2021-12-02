import Layout from "../component/Layout";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { BreadcrumbJsonLd,LogoJsonLd } from "next-seo";
import { CorporateContactJsonLd } from "next-seo";
import Head from "next/head";
import Markdown from "markdown-to-jsx";
import { useRouter } from 'next/router';
export default function Contact({ data, h_data, f_data }) {
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
        {/* <!-- Do not remove this --- Analytics Tracking code starts --> */}
        <script
          async
          id="wf_anal"
          src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=d282bac1d91514c46c75683473f967a175e22919270e151702cc8d3eb82a033bgiddb887390625950606c3528f7d8a1164e437cac61a532b2d3cf089f26bcebb04cgid34012eca3464f95361fd8f71572f880aae345de7c6bd763484fe9bc1e9d54b4fgid4ee3a7e9ace6ab1be7c541b329164307"
        ></script>
      </Head>
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
              url: `${data.PageSEO.ThumbnailImageURL}`,
              width: 1920,
              height: 1080,
              alt: "Contact Image Alt",
              type: "image/jpeg",
            },
          ],
          site_name: "KTern.AI"
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
      <BreadcrumbJsonLd itemListElements={breadcrumb} />
      <LogoJsonLd
        logo={process.env.LOGO}
        url={process.env.URL}
      />
      <CorporateContactJsonLd
        url={process.env.url}
        logo={process.env.logo}
        contactPoint={[
          {
            telephone: "+1-401-555-1212",
            contactType: "customer service",
            areaServed: "US",
            availableLanguage: ["English", "German"],
          },
          {
            telephone: "+1-877-746-0909",
            contactType: "customer service",
            contactOption: "TollFree",
            availableLanguage: "English",
          },
          {
            telephone: "+1-877-453-1304",
            contactType: "technical support",
            contactOption: "TollFree",
            areaServed: ["US", "IN", "IT"],
            availableLanguage: ["English", "German"],
          },
        ]}
      />
      <Layout h_data={h_data} f_data={f_data}>
        <section className="relative  bg-white md:m-10 lg:py-0">
          <div className="flex flex-col items-center justify-between p-4 md:px-10 mx-auto  xl:px-5 lg:flex-row">
            <div className="flex flex-col items-center w-full md:px-10 pt-0 pb-20 lg:pt-0 lg:flex-row">
              <div className="relative w-full max-w-md bg-cover lg:max-w-2xl lg:w-8/12">
                <div className="relative flex flex-col items-center  w-full h-full lg:pr-10">
                  <div className="relative max-w-md">
                    <div className="pb-16 mb-8 border-b border-gray-400">
                      <h2 className="mt-5 mb-10 sm:text-center  section-heading text-black">
                        {data.PageTitle}
                      </h2>
                      <div className="py-2 px-5 mb-4 background rounded-lg">
                        <div className="flex items-center">
                          <span className="flex items-center justify-center w-12 h-12 mr-5 background rounded-lg">
                            <svg
                              className="w-4 h-4"
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17.9347 13.3167C17.811 12.6058 17.2022 12.0401 16.4551 11.94L12.3077 11.3855C11.555 11.2832 10.8101 11.6825 10.4984 12.3528C10.4185 12.5237 10.3521 12.7014 10.2981 12.8848C9.13582 12.4 8.09277 11.7004 7.19375 10.8018C6.29473 9.90315 5.59374 8.86053 5.10992 7.6987C5.29332 7.64471 5.4711 7.57835 5.64213 7.4985C6.31274 7.18695 6.70993 6.44351 6.60866 5.69108L6.05394 1.54536C5.9538 0.797426 5.38784 0.188953 4.66434 0.0641091C4.40105 0.0202451 4.18164 0 3.97348 0C2.61201 0 1.32368 0.71982 0.612565 1.87716C-0.157059 3.13122 -0.0501675 4.73507 0.128736 5.9925C0.533802 8.84029 1.99766 11.7038 4.14451 13.8498C5.74002 15.4446 7.71246 16.6402 9.84693 17.306C10.9339 17.6457 12.2942 18 13.605 18C14.5851 18 15.537 17.802 16.3235 17.2498C17.3733 16.5109 18 15.3052 18 14.0196C18 13.8115 17.9797 13.5911 17.9347 13.3167Z"
                                fill="white"
                              ></path>
                            </svg>
                          </span>
                          <pre className=" text-white">
                          
                            <Markdown
                              options={{
                                overrides: {
                                  p: {
                                    props: {
                                      className:
                                        "text-sm text-justify leading-5",
                                    },
                                  },
                                  strong: {
                                    props: {
                                      className: "leading-8",
                                    },
                                  },
                                },
                              }}
                              className=""
                            >
                              {data.PhoneNumber}
                            </Markdown>
                          </pre>
                        </div>
                      </div>
                      <div className="py-2 px-5 mb-4 background rounded-lg">
                        <div className="flex items-center">
                          <span className="flex items-center justify-center w-12 h-12 mr-5 background rounded-lg">
                            <svg
                              className="w-5 h-4"
                              width="21"
                              height="14"
                              viewBox="0 0 21 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M18.8109 0H2.1878C0.981688 0 0 0.980499 0 2.18676V11.8119C0 13.0182 0.981688 14 2.1878 14H18.8122C20.0183 14 21 13.0182 21 11.8119V2.18676C20.9987 0.980499 20.017 0 18.8109 0ZM19.2492 4.73317L11.716 8.67092C11.3393 8.86387 10.9193 8.96887 10.4993 8.96887C10.0794 8.96887 9.66858 8.86387 9.28273 8.67092L1.74945 4.73317V2.75511L10.0872 7.11288C10.3405 7.24414 10.6555 7.24414 10.9101 7.11288L19.2479 2.75511V4.73317H19.2492Z"
                                fill="white"
                              ></path>
                            </svg>
                          </span>
                          <pre className="  text-white">
                            <Markdown
                              options={{
                                overrides: {
                                  p: {
                                    props: {
                                      className:
                                        "text-sm text-justify leading-5",
                                    },
                                  },
                                  strong: {
                                    props: {
                                      className: "leading-8",
                                    },
                                  },
                                },
                              }}
                              className=""
                            >
                              {data.Emails}
                            </Markdown>
                          </pre>
                        </div>
                      </div>
                      <div className="py-2 px-5 mb-4 background rounded-lg">
                        <div className="flex items-center">
                          <span className="flex items-center justify-center w-12 h-12 mr-5 background rounded-lg">
                            <svg
                              className="w-5 h-5"
                              width="23"
                              height="23"
                              viewBox="0 0 23 23"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M18.5 11C16.0185 11 14 13.0962 14 15.6729C14 19.2285 17.8951 22.6871 18.0612 22.8339C18.3123 23.0554 18.6877 23.0554 18.9388 22.8339C19.1049 22.6885 23 19.2298 23 15.6729C23 13.0962 20.9815 11 18.5 11ZM18.5 17.4618C17.5077 17.4618 16.7003 16.6338 16.7003 15.6161C16.7003 14.5985 17.5077 13.7705 18.5 13.7705C19.4923 13.7705 20.2997 14.5985 20.2997 15.6161C20.2997 16.6338 19.4923 17.4618 18.5 17.4618Z"
                                fill="white"
                              ></path>
                              <path
                                d="M9.01758 0C4.04824 0 0 4.04035 0 9C0 13.9597 4.04824 18 9.01758 18C9.90081 18 10.7583 17.8745 11.5604 17.6315C10.1794 14.5374 10.8571 11.7539 12.7236 9.9193C12.6912 9.9193 12.2597 9.73436 12.2272 9.72086C8.69567 8.37903 5.3927 12.6232 8.35888 16.156C6.02299 15.94 4.00361 14.6171 2.84987 12.7096C4.09829 12.4153 5.00721 11.3057 5.02344 9.9922C5.04373 9.16199 5.60505 8.59232 6.30433 8.43573C9.41794 7.77021 9.7128 3.90535 8.51307 1.83051C9.34355 1.78461 10.0442 1.80756 11.0383 2.10049C10.7881 4.61407 12.1501 7.66087 15.1596 7.37468L16.0158 7.27614C16.0875 7.57312 16.1335 7.87011 16.1605 8.18464C16.7272 8.08745 17.4468 8.06855 18 8.17519C17.5739 3.60027 13.7056 0 9.01758 0Z"
                                fill="white"
                              ></path>
                            </svg>
                          </span>
                          <pre className=" subheading text-white">
                            <Markdown
                              options={{
                                overrides: {
                                  p: {
                                    props: {
                                      className:
                                        "text-sm text-justify leading-5 ",
                                    },
                                  },
                                  strong: {
                                    props: {
                                      className: "leading-8",
                                    },
                                  },
                                  h3: {
                                    props: {
                                      className: "leading-8 ",
                                    },
                                  },
                                },
                              }}
                              className=""
                            >
                              {data.Address}
                            </Markdown>
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative z-10 w-full  mt-20 lg:mt-0 lg:w-4/12">
                <div
                  id="crmWebToEntityForm"
                  className="zcwf_lblLeft crmWebToEntityForm relative z-10 flex flex-col items-start justify-start p-4 md:p-10 bg-white md:shadow-2xl rounded-xl"
                >
                  <h4 className="w-full card-heading   text-center ">
                    {data.ContactFormFields.FormTitle}
                  </h4>
                  <div id="thanks_container" className="w-full hidden mt-2 mb-5 bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
  <div className="flex ">
    <div className="py-1 pr-4"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
</svg></div>
    <div>
      <p className="font-bold card-subheading">{data.ContactFormFields.ThanksMsg}</p>
     
    </div>
  </div>
</div>
                  <form
                    action="https://crm.zoho.in/crm/WebToContactForm"
                    name="WebToContacts240235000000441179"
                    method="POST"
                    acceptCharset="UTF-8"
                    className="relative w-full mt-2 space-y-5"
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
                      value="d282bac1d91514c46c75683473f967a175e22919270e151702cc8d3eb82a033b"
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
                      value={data.ContactFormFields.redirectURL}
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
                          {data.ContactFormFields.FirstName}
                        </label>
                      </div>
                      <div className="zcwf_col_fld">
                        <input
                          type="text"
                          id="First_Name"
                          name="First Name"
                          maxLength="40"
                          className="block w-full px-4 py-4 mt-2  placeholder-gray-400 bg-white border-2 border-gray-400 rounded-md focus:outline-none focus:border-black"
                          required
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
                         {data.ContactFormFields.LastName}
                        </label>
                      </div>
                      <div className="zcwf_col_fld">
                        <input
                          type="text"
                          id="Last_Name"
                          name="Last Name"
                          maxLength="80"
                          className="block w-full px-4 py-4 mt-2  placeholder-gray-400 bg-white border-2 border-gray-400 rounded-md focus:outline-none focus:border-black"
                          required
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
                         {data.ContactFormFields.Email}
                        </label>
                      </div>
                      <div className="zcwf_col_fld">
                        <input
                          type="email"
                          ftype="email"
                          id="Email"
                          name="Email"
                          maxLength="100"
                          className="block w-full px-4 py-4 mt-2  placeholder-gray-400 bg-white border-2 border-gray-400 rounded-md focus:outline-none focus:border-black"
                          required
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
                          htmlFor="Description"
                        >
                         {data.ContactFormFields.Message}
                        </label>
                      </div>
                      <div className="zcwf_col_fld">
                        <textarea
                          id="Description"
                          name="Description"
                          className="block w-full px-4 py-4 mt-2  placeholder-gray-400 bg-white border-2 border-gray-400 rounded-md focus:outline-none focus:border-black"
                          required
                        ></textarea>
                        <div className="zcwf_col_help"></div>
                      </div>
                    </div>
                    <div className="zcwf_row wfrm_fld_dpNn">
                      <div
                        className="zcwf_col_lab"
                        style={{ fontSize: "12px", fontFamily: "Arial" }}
                      >
                        <label
                          className="absolute px-2 ml-2 -mt-3 card-subheading font-bold text-black bg-white"
                          htmlFor="Lead_Source"
                        >
                          Lead Source
                        </label>
                      </div>
                      <div className="zcwf_col_fld">
                        <select
                          className="zcwf_col_fld_slt"
                          id="Lead_Source"
                          name="Lead Source"
                        >
                          <option value="-None-">-None-</option>
                          <option value="Advertisement">Advertisement</option>
                          <option value="Partner&#x20;Registration">
                            Partner Registration
                          </option>
                          <option value="Webinars">Webinars</option>
                          <option selected value="Website&#x20;Contact">
                            Website Contact
                          </option>
                          <option value="Website&#x20;Resources&#x20;Download">
                            Website Resources Download
                          </option>
                          <option value="Cold&#x20;Call">Cold Call</option>
                          <option value="Employee&#x20;Referral">
                            Employee Referral
                          </option>
                          <option value="External&#x20;Referral">
                            External Referral
                          </option>
                          <option value="OnlineStore">OnlineStore</option>
                          <option value="Partner">Partner</option>
                          <option value="Public&#x20;Relations">
                            Public Relations
                          </option>
                          <option value="Sales&#x20;Mail&#x20;Alias">
                            Sales Mail Alias
                          </option>
                          <option value="Seminar&#x20;Partner">
                            Seminar Partner
                          </option>
                          <option value="Seminar-Internal">
                            Seminar-Internal
                          </option>
                          <option value="Trade&#x20;Show">Trade Show</option>
                          <option value="Web&#x20;Download">
                            Web Download
                          </option>
                          <option value="Web&#x20;Research">
                            Web Research
                          </option>
                          <option value="Web&#x20;Cases">Web Cases</option>
                          <option value="Web&#x20;Mail">Web Mail</option>
                          <option value="Chat">Chat</option>
                          <option value="Twitter">Twitter</option>
                          <option value="Facebook">Facebook</option>
                          <option value="Google&#x2b;">Google&#x2b;</option>
                        </select>
                        <div className="zcwf_col_help"></div>
                      </div>
                    </div>
                    <div className="zcwf_row wfrm_fld_dpNn">
                      <div
                        className="zcwf_col_lab"
                        style={{ fontSize: "12px", fontFamily: "Arial" }}
                      >
                        <label
                          className="absolute px-2 ml-2 -mt-3 card-subheading font-bold text-black bg-white"
                          htmlFor="CONTACTCF6"
                        >
                          Lead Source Form
                        </label>
                      </div>
                      <div className="zcwf_col_fld">
                        <input
                          type="text"
                          id="CONTACTCF6"
                          name="CONTACTCF6"
                          maxLength="255"
                          value="contact-form"
                          className="block w-full px-4 py-4 mt-2  placeholder-gray-400 bg-white border-2 border-gray-400 rounded-md focus:outline-none focus:border-black"
                          required
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
                  >{data.ContactFormFields.PrivacyStatement}</Markdown></label>
                        </div> 
                        </div>                   
                    <div className="zcwf_row">
                      <div className="zcwf_col_lab"></div>
                      <div className="zcwf_col_fld">
                        <input
                          type="submit"
                          id="formsubmit"
                                           className="formsubmit  inline-block w-full button px-5 py-4 uppercase hyperlink text-center text-white transition duration-200 bg-black 
                                            rounded-r-xl rounded-b-xl transition duration-200 hover:bg-gray-500 ease"
                          value="Submit"
                          title="Submit"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
export const getServerSideProps = async () => {
  // data url from strapi

  const res = await fetch("https://api.ktern.com/contact", {
    method: "get",
  });
  const data = await res.json();
  // console.log(data)
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
