import Image from "next/image";
import Layout from "../component/Layout";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { BreadcrumbJsonLd, LogoJsonLd } from "next-seo";
import { CorporateContactJsonLd } from "next-seo";
import Head from "next/head";
import Markdown from "markdown-to-jsx";
import { useRouter } from "next/router";
import BreadCrumb from "../component/breadcrumb";
import Event, {
  resolve_interest_score,
  resolve_stream_score,
} from "../component/page_event";


export default function Contact({ data, h_data, f_data }) {
  const router = useRouter();
  if (router.query.message == "thanks") {
    if (process.browser)
      document.getElementById("thanks_container").style.display = "block";
  }
  let breadcrumb = [];
  data.PageSEO.BreadCrumb.map((dt) => {
    breadcrumb.push({ position: dt.position, name: dt.name, item: dt.item });
  });
  // Amplitude Tracking onClick
  function onClick(data) {
    Event(data);
  }
  function onFormClick(data) {
    if (process.browser) {
      localStorage.setItem(
        "name",
        document.getElementById("First_Name").value +
          " " +
          document.getElementById("Last_Name").value
      );
      localStorage.setItem("email", document.getElementById("Email").value);
    }
    //  console.log(localStorage.getItem('email'),localStorage.getItem('name'))
    Event(data);
  }
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
        //   {
        //     hrefLang: `${h_data.OtherSEO.languageAlternates.hrefLang}`,
        //     href: `${h_data.OtherSEO.languageAlternates.href}`,
        //   },
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
      <LogoJsonLd
        logo={process.env.NEXT_PUBLIC_LOGO}
        url={process.env.NEXT_PUBLIC_URL}
      />
      <CorporateContactJsonLd
        url={process.env.NEXT_PUBLIC_url}
        logo={process.env.NEXT_PUBLIC_logo}
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
        <section className="relative  bg-white pt-10 md:m-10 ">
          <div className="flex flex-col items-center justify-between  md:mx-auto  xl:px-5 lg:flex-row">
            <div className="flex flex-col  items-center md:space-x-20 px-4 mx-20 w-full pt-0  lg:pt-0 lg:flex-row">
              <div className="relative md:w-1/2">
                <div className="relative flex flex-col items-center  w-full h-full ">
                  <div className="relative ">
                    <div className="pb-16 mb-8 border-b border-gray-400">
                      <BreadCrumb color="black" b_data={breadcrumb} />
                      <h2 className="mt-5 mb-10 sm:text-center  heading text-black">
                        {data.PageTitle}
                      </h2>
                      <div className="py-2  mb-4  rounded-lg">
                        <div className="flex items-center">
                          <p className=" section-subheading text-black">
                            <Markdown
                              options={{
                                overrides: {
                                  h3: {
                                    props: {
                                      className: "text-2xl mb-4 text-justify",
                                    },
                                  },
                                  h1: {
                                    props: {
                                      className: "text-2xl mb-4 text-justify",
                                    },
                                  },
                                  li: {
                                    props: {
                                      className:
                                        "text-justify list-decimal ml-4 mb-1 flex-col",
                                    },
                                  },
                                  p: {
                                    props: {
                                      className: "text-justify mb-3 leading-7",
                                    },
                                  },
                                  ol: {
                                    props: {
                                      className: "mb-4  text-justify",
                                    },
                                  },
                                  strong: {
                                    props: {
                                      className: "font-semibold",
                                    },
                                  },
                                },
                              }}
                              className=""
                            >
                              {data.ContactMessage}
                            </Markdown>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative md:w-1/2 z-10 mt-20 lg:mt-0 ">
                <div
                  id="crmWebToEntityForm"
                  className="zcwf_lblLeft crmWebToEntityForm relative z-10 flex flex-col items-start justify-start md:p-4 md:p-10 bg-white md:shadow-2xl rounded-xl"
                >
                  <h4 className="w-full card-heading   text-center ">
                    {data.ContactFormFields.FormTitle}
                  </h4>
                  <div
                    id="thanks_container"
                    className="w-full hidden mt-2 mb-5 bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
                    role="alert"
                  >
                    <div className="flex ">
                      <div className="py-1 pr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold card-subheading">
                          {data.ContactFormFields.ThanksMsg}
                        </p>
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
                        <input
                          type="checkbox"
                          id="privacy"
                          value="true"
                          required
                        />
                        <label>
                          {" "}
                          <Markdown
                            options={{
                              overrides: {
                                p: {
                                  props: {
                                    className: "card-subheading text-justify",
                                  },
                                },
                                strong: {
                                  props: {
                                    className: "",
                                  },
                                },
                              },
                            }}
                            className=""
                          >
                            {data.ContactFormFields.PrivacyStatement}
                          </Markdown>
                        </label>
                      </div>
                    </div>
                    <div className="zcwf_row">
                      <div className="zcwf_col_lab"></div>
                      <div className="zcwf_col_fld">
                        <input
                          onClick={() => {
                            onFormClick({
                              stream_score: resolve_stream_score("none"),
                              event_name: "Form Click",
                              section_name: "Contact Form Section",
                              page_source: `${data.PageSEO.PageTitle}`,
                              label: `Submit`,
                            });
                          }}
                          type="submit"
                          id="formsubmit"
                          className="formsubmit cursor-pointer inline-block w-full button px-5 py-4 uppercase hyperlink text-center text-white transition duration-200 bg-black 
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
        <section className="px-4 md:px-36 pb-10">
          <div className="md:grid-cols-3 grid gap-5">
            <div className="py-2 px-5 mb-4 bg-black rounded-lg">
              <div className="flex items-center">
                <p className="p-10 px-10 text-white">
                  <Markdown
                    options={{
                      overrides: {
                        h3: {
                          props: {
                            className: "text-2xl mb-4 text-justify",
                          },
                        },

                        h1: {
                          props: {
                            className: "text-2xl mb-4 text-justify",
                          },
                        },
                        li: {
                          props: {
                            className:
                              "text-justify list-decimal ml-3 mb-1 flex-col",
                          },
                        },
                        p: {
                          props: {
                            className: "text-justify mb-3",
                          },
                        },
                        ol: {
                          props: {
                            className: "mb-4 text-justify",
                          },
                        },
                      },
                    }}
                    className=""
                  >
                    {data.PhoneNumber}
                  </Markdown>
                </p>
              </div>
            </div>
            <div className="py-2 px-5 mb-4 bg-black rounded-lg">
              <div className="flex items-center">
                <p className="p-10 px-10  text-white">
                  <Markdown
                    options={{
                      overrides: {
                        h3: {
                          props: {
                            className: "text-2xl mb-4 ",
                          },
                        },

                        h1: {
                          props: {
                            className: "text-2xl mb-4 ",
                          },
                        },
                        li: {
                          props: {
                            className: " list-decimal ml-3 mb-1 flex-col",
                          },
                        },
                        p: {
                          props: {
                            className: " mb-3",
                          },
                        },
                        ol: {
                          props: {
                            className: "mb-4 ",
                          },
                        },
                      },
                    }}
                  >
                    {data.Email}
                  </Markdown>
                </p>
              </div>
            </div>
            <div className="py-2 px-5 mb-4 bg-black rounded-lg">
              <div className="flex items-center">
                <p className="p-10 px-10   text-white">
                  <Markdown
                    options={{
                      overrides: {
                        h3: {
                          props: {
                            className: " mb-4 text-justify",
                          },
                        },

                        h1: {
                          props: {
                            className: "text-2xl mb-4 text-justify",
                          },
                        },
                        li: {
                          props: {
                            className:
                              "text-justify list-decimal ml-3 mb-1 flex-col",
                          },
                        },
                        p: {
                          props: {
                            className: "text-justify mb-3",
                          },
                        },
                        ol: {
                          props: {
                            className: "mb-4 text-justify",
                          },
                        },
                      },
                    }}
                    className=""
                  >
                    {data.Address}
                  </Markdown>
                </p>
              </div>
            </div>
          </div>
          <div>
            <h5 className="mt-5 mb-10 sm:text-center  heading text-black">
              Our Locations
            </h5>
          </div>
          <div>
            <div className="w-full">
              <Image
                className="relative z-40 w-full h-full"
                src={data.LocationsImage.imageURL}
                alt={data.LocationsImage.imageDescription}
                width={data.LocationsImage.width}
                height={data.LocationsImage.height}
              />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
export const getStaticProps = async () => {
  // data url from strapi

  const res = await fetch("https://api.ktern.com/contact", {
    method: "get",
  });
  const data = await res.json();
  // console.log(data)
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
      data: data,
      h_data: h_data,
      f_data: f_data,
    },
  };
};
