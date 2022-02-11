import Layout from "../../component/Layout";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ViewSlider from "react-view-slider";
import ReactSlider from "react-slider";
import { data } from "autoprefixer";
import Head from "next/head";
import Markdown from "markdown-to-jsx";
import { ToastContainer, toast } from "react-toast";
import { NextSeo, BreadcrumbJsonLd, LogoJsonLd, SocialProfileJsonLd, SoftwareAppJsonLd } from 'next-seo';
import BreadCrumb from "../../component/breadcrumb";
let form_data = {};
let checkBoxData = [];
let valid = false;
let score = 0;
export default function ValueAssesment({ h_data, f_data, data }) {
  const [keyValue, setKey] = useState(-1);
  let key = -1;
  let breadcrumb = [];
	data.PageSEO.BreadCrumb.map((dt) => {
	  breadcrumb.push({ position: dt.position, name: dt.name, item: dt.item });
	});
  useEffect(() => {
    document
      .getElementById("button_field")
      .addEventListener("click", validateForm);

   
  }, []);

  function operator(factor, opp, value) {
    switch (opp) {
      case "Add":
        return Number(value) + Number(factor);
      case "Multiply":
        return Number(value) * Number(factor);
      case "Subtract":
        return Number(value) - Number(factor);
      case "Divide":
        return Number(value) / Number(factor);
    }
  }
  function scoreCalculator(value) {
    switch (data.Quiz[key].QuestionType) {
      case "SingleChoice": {
        // console.log(value);
        data.Quiz[key].QuizValues.map((dt) => {
          if (dt.Value == value) score += dt.Score;
        });
        break;
      }
      case "MultipleChoice": {
        // console.log(value);
        data.Quiz[key].QuizValues.map((dt) => {
          if (value.includes(dt.Value)) score += dt.Score;
        });
        break;
      }
      case "Slider": {
        // console.log(value, score);
        data.Quiz[key].SliderChoices.map((dt) => {
          if (value >= dt.StartLimit && value < dt.EndLimit) {
            // console.log(operator(dt.Factor, dt.Operation, value));
            score += Number(operator(dt.Factor, dt.Operation, value));
          }
        });
        break;
      }
    }
  }
  function checkBox(e) {
    if (!checkBoxData.includes(e.target.value))
      checkBoxData.push(e.target.value);
    else checkBoxData.splice(checkBoxData.indexOf(e.target.value), 1);
  }

  function validateForm(e) {
    if (document.getElementById("form").text_field != undefined) {
      if (document.getElementById("form").text_field.value != 0) {
        if (document.getElementById("text_field").type == "email") {
          if (
            String(document.getElementById("form").text_field.value)
              .toLowerCase()
              .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              )
          ) {
            document.getElementById("button_field").disabled = false;
            valid = true;
          } else {
            toast.warn("Please enter valid Email.");
            setTimeout(toast.hideAll, 2000);
            valid = false;
          }
        } else {
          document.getElementById("button_field").disabled = false;
          valid = true;
        }
      } else {
        if (document.getElementById("text_field").type == "checkbox") {
          if (checkBoxData.length > 0) {
            document.getElementById("button_field").disabled = false;
            valid = true;
          } else {
            toast.warn("Please fill all required fields.");
            setTimeout(toast.hideAll, 2000);
            valid = false;
          }
        } else {
          toast.warn("Please fill all required fields.");
          setTimeout(toast.hideAll, 2000);
          valid = false;
        }
      }
    } else {
      if (key == -1) valid = true;
    }
    if (valid) {
      let value;
      if (key != -1 && key < data.Quiz.length) {
        if (data.Quiz[key].QuestionType == "MultipleChoice")
          value = checkBoxData;
        else value = document.getElementById("form").text_field.value;
      }
      // console.log("KEY", form_data, key);
      if (value != undefined) {
        form_data[data.Quiz[key].Question] = value;
        scoreCalculator(value);
      }
      changeSlide();
    }
  }
  // Change Slide
  function changeSlide() {
    checkBoxData = [];
    key += 1;
    setKey(key);
  }
  // This function renders the view at the given index.
  const renderView = ({ index, active, transitionState }) => {
    let data1 = data.Quiz[index];
    switch (data1.QuestionType) {
      case "Textbox":
        return (
          <div className=" text-white flex flex-col events   items-center justify-center ">
            <h1
              className="text-4xl text-center mb-20"
              style={{ width: "100vh" }}
              htmlFor="text_field"
            >
              {data1.Question}
            </h1>
            <input
              required
              type="text"
              id="text_field"
              name="text_field"
              className="bg-opacity-20 text-xl bg-white  mb-10 rounded-xl p-4 focus:outline-none focus:bg-opacity-40"
              style={{ width: "70vh" }}
            />
          </div>
        );
      case "Email":
        return (
          <div className=" text-white flex flex-col events   items-center justify-center ">
            <h1
              className="text-4xl text-center mb-20"
              style={{ width: "100vh" }}
              htmlFor="text_field"
            >
              {data1.Question}
            </h1>
            <input
              required
              type="email"
              id="text_field"
              name="text_field"
              className="bg-opacity-20 text-xl bg-white  mb-10 rounded-xl p-4 focus:outline-none focus:bg-opacity-40"
              style={{ width: "70vh" }}
            />
          </div>
        );
      case "Slider":
        return (
          <div className=" text-white flex flex-col events  items-center justify-center ">
            <h1
              className="heading text-center mb-10"
              style={{ width: "100vh" }}
              htmlFor="text_field"
            >
              {data1.Question}
            </h1>
            <input
              required
              id="text_field"
              type="range"
              name="text_field"
              min={0}
              max={10}
              className="bg-opacity-20 text-xl bg-white  mb-10 rounded-xl p-4 focus:outline-none focus:bg-opacity-40"
              style={{ width: "70vh" }}
              defaultValue={0}
            />
          </div>
        );
      case "SingleChoice":
        return (
          <div className=" text-white flex flex-col events  items-center justify-center ">
            <h1
              className="heading w-3/5 text-center mb-10"
              style={{ width: "100vh" }}
              htmlFor="text_field"
            >
              {data1.Question}
            </h1>
            <select
              className="bg-opacity-20 text-xl bg-white mx-4 pr-4 mb-10 rounded-xl p-4 focus:outline-none focus:bg-opacity-40"
              style={{ width: "70vh" }}
              name="text_field"
              id="text_field"
              required
            >
              {data1.QuizValues.map((dt) => (
                <option
                  key="dt"
                  className="bg-opacity-20 text-xl text-black mb-10   p-4 focus:outline-none hover:bg-opacity-40"
                  style={{ width: "70vh" }}
                  value={dt.Value}
                >
                  {dt.Value}
                </option>
              ))}
            </select>
          </div>
        );
      case "MultipleChoice":
        return (
          <div className=" text-white flex flex-col events  items-center justify-center ">
            <h1
              className="heading text-center mb-10"
              style={{ width: "100vh" }}
            >
              {data1.Question}
            </h1>
            <div className="flex mb-2 space-y-4 flex-col">
              {data1.QuizValues.map((dt) => (
                <div key="dt" className="">
                  <input
                    type="checkbox"
                    value={dt.Value}
                    id="text_field"
                    name="text_field"
                    onClick={checkBox}
                    className="mr-4 rounded-full"
                  />
                  <label>{dt.Value}</label>
                </div>
              ))}
            </div>
          </div>
        );
    }
  };

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
				// 	{
				// 		hrefLang: `${h_data.OtherSEO.languageAlternates.hrefLang}`,
				// 		href: `${h_data.OtherSEO.languageAlternates.href}`,
				// 	},
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
		
			  <LogoJsonLd
        logo={process.env.NEXT_PUBLIC_LOGO}
        url={process.env.NEXT_PUBLIC_URL}
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout h_data={h_data} f_data={f_data}>
        <form
          id="form"
          className="bg-valueBg events py-20 bg-cover text-white flex flex-col space-y-16 items-center justify-center overflow-hidden"
          // style={{ height: "96vh" }}
        >
           <BreadCrumb
                      color={"white"}
                      b_data={breadcrumb}
                    />
          <ToastContainer />
          {keyValue == -1 && (
            <div className=" text-white flex flex-col events  items-center justify-center ">
              <h1 className="heading w-2/4 text-center mb-10">
                {data.QuizTitle}
              </h1>
              <p className="subheading w-2/4 text-center">
                {data.QuizDescription}
              </p>
            </div>
          )}
          {keyValue < data.Quiz.length && (
            <ViewSlider
              className="mx-auto text-white flex flex-col items-center justify-center "
              renderView={renderView}
              numViews={4}
              activeView={keyValue}
              animateHeight
            />
          )}

          {keyValue >= data.Quiz.length && (
            <div className="text-white heading text-center ">
             <p className="heading text-center mb-4"> Score:&nbsp;{score}</p>
              {data.QuizRecommendations.map((dt) => (
                <p key="dt mt-5">
                  {score >= dt.ScoreFrom && score <= dt.ScoreTill && (
                    <div className="flex flex-col space-y-6 flex-wrap ">
                      <p className="heading text-center mb-4">
                       Level &nbsp; {dt.LevelNumber} &nbsp;| &nbsp;{dt.LevelName}
                      </p>
                      <div className="mx-20 text-center">
                    <Markdown
                      options={{
                        overrides: {
                          h3: {
                            props: {
                              className: "text-2xl mb-4   text-center",
                            },
                          },
                          h1: {
                            props: {
                              className: "text-2xl mb-4   text-center",
                            },
                          },
                          li: {
                            props: {
                              className:
                                " list-decimal ml-6 mb-1 flex-col",
                            },
                          },
                          p: {
                            props: {
                              className: "mb-3 card-subheading  text-center",
                            },
                          },
                          ol: {
                            props: {
                              className: "mb-4 ",
                            },
                          },
                          a:{
                            props:{
                              className:"text-blue-800"
                            }
                      }
                        },
                      }}
                      className="mx-20 text-center"
                    >
                      {dt.Recommendations}
                    </Markdown>
                    </div>
                    </div>
                  )}
                </p>
              ))}{" "}
            </div>
          )}
          {keyValue < data.Quiz.length && (
            <button
              id="button_field"
              type="button"
              className=" bg-opacity-40 hover:bg-opacity-40 sm:mb-4 border border-white  inline-block py-3 px-2  bg-black hover:bg-gray-300 hover:text-black shadow   text-white px-16  rounded-r-xl rounded-b-xl transition duration-200 uppercase text-md "
            >
              {keyValue == -1 && <p>{data.Buttons[0].buttonTitle}</p>}
              {keyValue >= 0 && <p>{data.Buttons[2].buttonTitle}</p>}
            </button>
          )}
        </form>
      </Layout>
    </>
  );
}
export const getStaticProps = async () => {
  //    fetch strapi data
  const res = await fetch(`https://api.ktern.com/value-assessment-roi`, {
    method: "get",
  });
  const data = await res.json();
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
