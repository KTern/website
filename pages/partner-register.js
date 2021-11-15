import Layout from "../component/Layout";
import Image from "next/image";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { BreadcrumbJsonLd } from "next-seo";
import { LogoJsonLd } from "next-seo";
import { SocialProfileJsonLd } from "next-seo";
import Link from "next/link";
export default function PartnerContact({ data,h_data }) {
  return (
    <>
      <Head>
        <script
          async
          id="wf_anal"
          src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=d282bac1d91514c46c75683473f967a121858ebbdbfb6e6b202f66f955b01cfegiddb887390625950606c3528f7d8a1164e437cac61a532b2d3cf089f26bcebb04cgid34012eca3464f95361fd8f71572f880aae345de7c6bd763484fe9bc1e9d54b4fgid4ee3a7e9ace6ab1be7c541b329164307"
        ></script>
      </Head>
      <NextSeo
        title="Simple Usage Example"
        description="A short description goes here."
        canonical="https://www.canonical.ie/"
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
      <LogoJsonLd
        logo="http://www.your-site.com/images/logo.jpg"
        url="http://www.your-site.com"
      />
      <SocialProfileJsonLd
        type="Person"
        name="your name"
        url="http://www.your-site.com"
        sameAs={[
          "http://www.facebook.com/your-profile",
          "http://instagram.com/yourProfile",
          "http://www.linkedin.com/in/yourprofile",
          "http://plus.google.com/your_profile",
        ]}
      />
      <Layout h_data={h_data}>
        <div className="py-20 w-full min-h-screen bg-white flex justify-center ">
          <div className=" zcwf_lblLeft crmWebToEntityForm w-full p-4 md:w-1/3 py-12 md:px-12 bg-white rounded-2xl md:shadow-xl z-20">
            <div>
              <h1 className="  text-center mb-4 cursor-pointer section-heading">
                Become a Partner
              </h1>
              <p className=" text-center  mb-8  section-subheading text-gray-700 cursor-pointer">
                For General queries{" "}
                <Link href="/contact" passhref>
                  <a className="font-bold hover:text-gray-200">Contact us</a>
                </Link>{" "}
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
                value="https&#x3a;&#x2f;&#x2f;web.ktern.com&#x2f;partner-register&#x2f;resources"
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
                    First Name
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
                    Last Name
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
                    Email
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
                <div
                  className="zcwf_col_lab"
                  style={{ fontSize: "12px", fontFamily: "Arial" }}
                >
                  <label
                    className="absolute px-2 ml-2 -mt-3 card-subheading font-bold text-black bg-white"
                    htmlFor="Account_Name"
                  >
                    Account Name
                  </label>
                </div>
                <div className="zcwf_col_fld">
                  <input
                  required
                    className="block w-full px-4 py-4 mt-2  placeholder-gray-400 bg-white border-2 border-gray-400 rounded-md focus:outline-none focus:border-black"
                    type="text"
                    id="Account_Name"
                    name="Account Name"
                    maxLength="100"
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
                    htmlFor="Phone"
                  >
                    Phone
                  </label>
                </div>
                <div className="zcwf_col_fld">
                  <input
                  required
                    className="block w-full px-4 py-4 mt-2  placeholder-gray-400 bg-white border-2 border-gray-400 rounded-md focus:outline-none focus:border-black"
                    type="text"
                    id="Phone"
                    name="Phone"
                    maxLength="50"
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
                    htmlFor="Mailing_Country"
                  >
                    Mailing Country
                  </label>
                </div>
                <div className="zcwf_col_fld">
                  <input
                  required
                    className="block w-full px-4 py-4 mt-2  placeholder-gray-400 bg-white border-2 border-gray-400 rounded-md focus:outline-none focus:border-black"
                    type="text"
                    id="Mailing_Country"
                    name="Mailing Country"
                    maxLength="100"
                  />
                  <div className="zcwf_col_help"></div>
                </div>
              </div>
              <div className="zcwf_row wfrm_fld_dpNn">
                <div
                  className="zcwf_col_lab"
                  style={{ fontSize: "12px", fontFamily: "Arial" }}
                >
                  <label htmlFor="Lead_Source">Lead Source</label>
                </div>
                <div className="zcwf_col_fld">
                  <select
                    className="zcwf_col_fld_slt"
                    id="Lead_Source"
                    name="Lead Source"
                  >
                    <option value="-None-">-None-</option>
                    <option value="Advertisement">Advertisement</option>
                    <option selected value="Partner&#x20;Registration">
                      Partner Registration
                    </option>
                    <option value="Webinars">Webinars</option>
                    <option value="Website&#x20;Contact">
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
                    <option value="Seminar-Internal">Seminar-Internal</option>
                    <option value="Trade&#x20;Show">Trade Show</option>
                    <option value="Web&#x20;Download">Web Download</option>
                    <option value="Web&#x20;Research">Web Research</option>
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
                  <label htmlFor="CONTACTCF6">Lead Source Form</label>
                </div>
                <div className="zcwf_col_fld">
                  <input
                    type="text"
                    id="CONTACTCF6"
                    name="CONTACTCF6"
                    maxLength="255"
                    value="partner-registration-form"
                  />
                  <div className="zcwf_col_help"></div>
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
                    value="Submit"
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
  let data = { a: "ab" };
	const res1 = await fetch('https://api.ktern.com/navbar', {
		method: 'get',
	});
	const h_data = await res1.json();
  return {
    props: {
      data: data,
      h_data:h_data
    },
  };
};
