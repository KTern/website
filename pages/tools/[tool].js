import Layout from "../../component/Layout";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ViewSlider from "react-view-slider";
import ReactSlider from "react-slider";
import { data } from "autoprefixer";
import Head from "next/head";
import Markdown from "markdown-to-jsx";
import { ToastContainer, toast } from "react-toast";
import { pattern } from "../../component/pattern";

import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";
import Confetti from "react-confetti";
import {
  NextSeo,
  BreadcrumbJsonLd,
  LogoJsonLd,
  SocialProfileJsonLd,
  SoftwareAppJsonLd,
} from "next-seo";
import BreadCrumb from "../../component/breadcrumb";
import Event, { resolve_stream_score } from "../../component/page_event";
let form_data = {};
let checkBoxData = [];

let valid = false;
let score = 0;
export default function ValueAssesment({ h_data, f_data, data }) {
  function onClick(data) {
    Event(data);
  }
  const [width, height] = useWindowSize();
  const [keyValue, setKey] = useState(-1);
  const router = useRouter();
  const [radioButtonData, setRadioButtonData] = useState("");
  let key = -1;
  let breadcrumb = [];
  data.PageSEO.BreadCrumb.map((dt) => {
    breadcrumb.push({ position: dt.position, name: dt.name, item: dt.item });
  });
  useEffect(() => {}, []);
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
    // console.log(value);
    switch (data.Quiz[keyValue].QuestionType) {
      case "SingleChoice": {
        data.Quiz[keyValue].QuizValues.map((dt) => {
          if (dt.Value == value) score += dt.Score;
        });
        break;
      }
      case "MultipleChoice": {
        data.Quiz[keyValue].QuizValues.map((dt) => {
          if (value.includes(dt.Value)) score += dt.Score;
        });
        break;
      }
      case "Slider": {
        score += Number(
          operator(
            data.Quiz[keyValue].SliderChoices[0].Factor,
            data.Quiz[keyValue].SliderChoices[0].Operation,
            value
          )
        );
        break;
      }
    }
  }
  function checkBox(e, value, type) {
    if (type == "multiple") {
      if (!checkBoxData.includes(value)) {
        document.getElementById(value).checked = true;

        document.getElementById(value).parentElement.className =
          " bg-opacity-60 text-primary border-black border rounded-md bg-white w-full px-20 py-3 cursor-pointer  hover:bg-opacity-60  ";

        checkBoxData.push(value);
      } else {
        document.getElementById(value).checked = false;
        checkBoxData.splice(checkBoxData.indexOf(value), 1);
        document.getElementById(value).parentElement.className =
          " bg-white rounded-md bg-opacity-20 w-full px-20 py-3 cursor-pointer  hover:bg-opacity-60  ";
      }
    } else {
      if (radioButtonData != value) {
        document.getElementById(value).checked = true;
        setRadioButtonData(value);
      }
    }
  }
  function throwError(msg) {
    toast.warn(msg);
    setTimeout(toast.hideAll, 2000);
    valid = false;
  }
  function validateForm(e) {
    if (keyValue >= 0) {
      if (data.Quiz[keyValue].QuestionType == "SingleChoice") {
        if (radioButtonData != "") {
          document.getElementById("button_field").disabled = false;
          valid = true;
        } else throwError("Please fill all required fields.");
      } else if (data.Quiz[keyValue].QuestionType == "MultipleChoice") {
        if (checkBoxData.length > 0) {
          document.getElementById("button_field").disabled = false;
          valid = true;
        } else throwError("Please fill all required fields.");
      } else if (data.Quiz[keyValue].QuestionType == "Email") {
        if (
          String(document.getElementById("form").text_field.value).match(
            pattern.pattern
          )
        ) {
          valid = true;
          document.getElementById("button_field").disabled = false;
        } else throwError("Please enter valid business email.");
      } else if (data.Quiz[keyValue].QuestionType == "Textbox") {
        if (document.getElementById("form").text_field.value != "") {
          valid = true;
          document.getElementById("button_field").disabled = false;
        } else throwError("Please fill all required fields.");
      }
    }
    if (keyValue == -1) valid = true;

    if (valid) {
      let value;
      if (keyValue != -1 && keyValue < data.Quiz.length) {
        if (data.Quiz[keyValue].QuestionType == "MultipleChoice") {
          let val = "";
          checkBoxData.map((dt) => {
            val += "," + dt;
          });
          value = val;
        } else if (data.Quiz[keyValue].QuestionType == "Slider") {
          value = String(document.getElementById("slider").innerHTML);
        } else if (data.Quiz[keyValue].QuestionType == "SingleChoice") {
          value = radioButtonData;
        } else {
          value = document.getElementById("form").text_field.value;
        }
      }

      if (value != undefined) {
        form_data[data.Quiz[keyValue].Question] = value;
        scoreCalculator(value);
      }
      changeSlide("next");
    }
  }
  // Change Slide
  function changeSlide(value) {
    if (value == "next") {
      checkBoxData = [];
      key = keyValue + 1;
      setKey(key);

      if (keyValue == data.Quiz.length - 1) {
        PostData();
      }
    } else {
      key = keyValue - 1;
      setKey(key);
    }
  }
  async function PostData() {
    let form_value = [];

    data.Quiz.map((dt) => {
      let value = {};
      value["Question"] = dt.Question;
      value["Answer"] = form_data[dt.Question];
      form_value.push(value);
    });
    let val = {
      Userdata: form_value,
      email: form_value[data.Quiz.length - 1].Answer,
      tool: data.PageSEO.PageURL,
    };
    // console.log(val);
    await fetch(`https://api.ktern.com/tools-reports`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(val),
    }).then((res) => {
      //  console.log(res)
    });
  }
  // This function renders the view at the given index.
  const renderView = ({ index, active, transitionState }) => {
    let data1 = data.Quiz[index];
    switch (data1.QuestionType) {
      case "Textbox":
        return (
          <div className=" text-white flex flex-col events   items-center justify-center ">
            <h1
              className="text-4xl text-center mb-20 mx-2"
              htmlFor="text_field"
            >
              {data1.Question}
            </h1>
            <input
              required
              type="text"
              id="text_field"
              name="text_field"
              className="bg-opacity-20 text-xl bg-white sm:w-2/3  mb-10 rounded-xl p-4 focus:outline-none focus:bg-opacity-40"
            />
          </div>
        );
      case "Email":
        return (
          <div className=" text-white flex flex-col events   items-center justify-center ">
            <h1
              className="text-4xl text-center mb-20 mx-2"
              htmlFor="text_field"
            >
              {data1.Question}
            </h1>
            <input
              required
              type="email"
              id="text_field"
              name="text_field"
              className="bg-opacity-20 text-xl bg-white w-1/4 sm:w-2/3 mb-10 rounded-xl p-4 focus:outline-none focus:bg-opacity-40"
            />
          </div>
        );
      case "Slider":
        return (
          <div className=" text-white flex flex-col events  items-center justify-center ">
            <h1
              className="heading text-center mb-10 w-full md:w-1/2"
              htmlFor="text_field"
            >
              {data1.Question}
            </h1>
            <ReactSlider
              id="text_field"
              name="text_field"
              className="horizontal-slider sm:w-2/3 rounded-full mb-5 cursor-pointer "
              defaultValue={1}
              min={`${data1.SliderChoices[0].StartLimit}`}
              max={data1.SliderChoices[0].EndLimit}
              renderThumb={(props, state) => (
                <div className="" {...props}>
                  <span
                    id="slider"
                    className="bg-black p-1  cursor-pointer rounded-t-doublefull"
                  >
                    {state.valueNow}
                  </span>
                </div>
              )}
            />
          </div>
        );
      case "SingleChoice":
        return (
          <div className=" text-white flex flex-col events  items-center justify-center ">
            <h1
              className="sm:subheading heading text-center mb-10 w-full md:w-1/2"
              htmlFor="text_field"
            >
              {data1.Question}
            </h1>

            <div
              id="radio"
              className="flex mb-2 space-y-4 flex-col cursor-pointer"
            >
              {data1.QuizValues.map((dt) => (
                <div
                  key="dt"
                  className={`${
                    radioButtonData == dt.Value
                      ? "bg-opacity-60 text-primary border-black border"
                      : ""
                  } bg-white  rounded-md bg-opacity-20 w-full px-20 py-3 cursor-pointer  hover:bg-opacity-60  `}
                  onClick={(e) => {
                    checkBox(e, dt.Value, "single");
                  }}
                >
                  <input
                    type="radio"
                    value={dt.Value}
                    name={dt.Value}
                    id={dt.Value}
                    className="hidden "
                  />
                  <label className="cursor-pointer text-lg">{dt.Value}</label>
                </div>
              ))}
            </div>
          </div>
        );
      case "MultipleChoice":
        return (
          <div className=" text-white flex flex-col events  items-center justify-center ">
            <h1 className="heading text-center mb-10 w-full md:w-1/2">
              {data1.Question}
            </h1>
            <div className="flex mb-2 space-y-4 flex-col cursor-pointer">
              {data1.QuizValues.map((dt) => (
                <div
                  key="dt"
                  onClick={(e) => {
                    checkBox(e, dt.Value, "multiple");
                  }}
                  className={` bg-white rounded-md bg-opacity-20 w-full px-20 py-3 cursor-pointer  hover:bg-opacity-60  `}
                >
                  <input
                    type="checkbox"
                    value={dt.Value}
                    name={dt.Value}
                    id={dt.Value}
                    className="hidden "
                  />
                  <label className="cursor-pointer text-lg">{dt.Value}</label>
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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout h_data={h_data} f_data={f_data} className="overflow-x-hidden">
        <form
          id="form"
          className="  events py-20 bg-cover text-white flex flex-col space-y-4 overflow-hidden"
          style={{
            backgroundImage: `url(${data.backgroundImage})`,
            backgroundRepeat: "no-repeat",
          }}
          onSubmit={(e) => {
            e.preventDefault();
            key += 1;
          }}
        >
          
          <div className="mx-10">
            <BreadCrumb color={"white"} b_data={breadcrumb} />
          </div>
          {keyValue>-1 && keyValue< data.Quiz.length &&
           <div className="flex items-center justify-center py-4">
           <div className={`w-${data.Quiz.length*8}  absolute h-1 bg-bg rounded-full  `}></div>
           <div className="flex items-center z-0 justify-center space-x-2 ">
             {data.Quiz.map((key, index) => (
               <span
               onClick={(e) => {
                changeSlide("prev");
                onClick({
                  stream_score: resolve_stream_score("none"),
                  event_name: "Button Click",
                  section_name: "Form Section",
                  page_source: `${data.PageSEO.PageTitle}`,
                  label: `${data.Buttons[2].buttonTitle}`,
                });
              }}
                 key="index"
                 className={`${
                   keyValue == index
                     ? "bg-primary text-secondary border-2 border-bg"
                     : "bg-secondary text-primary"
                 } w-8 h-8 flex items-center justify-center  rounded-full `}
               >
                 {index + 1}
               </span>
             ))}
           </div>
         </div> }
          <ToastContainer className="" position="bottom-right" />
          {keyValue == -1 && (
            <div className="mx-4 py-20 text-white flex flex-col events  items-center justify-center ">
              <h1 className="heading md:w-2/4 text-center mb-10">
                {data.QuizTitle}
              </h1>
              <p className="subheading md:w-2/4 text-center">
                {data.QuizDescription}
              </p>
            </div>
          )}
          {keyValue != -1 && keyValue < data.Quiz.length && (
            <div className="flex mx-4 flex-col space-y-3 py-5">
             
              <ViewSlider
                className=" "
                renderView={renderView}
                numViews={4}
                activeView={keyValue}
                animateHeight
              />
            </div>
          )}

          {keyValue >= data.Quiz.length && (
            <div className="text-white mx-4 ">
              <Confetti
                // numberOfPieces={50}
                width={width}
                height={height}
                tweenDuration={100}
                recycle={false}
              />
              <p className="heading text-center mb-4"> Score:&nbsp;{score}</p>
              {data.QuizRecommendations.map((dt) => (
                <p key="dt mt-5">
                  {score >= dt.ScoreFrom && score <= dt.ScoreTill && (
                    <div className="flex flex-col space-y-6 ">
                      <p className="section-heading text-center mb-4">
                        Level &nbsp; {dt.LevelNumber} &nbsp;| &nbsp;
                        {dt.LevelName}
                      </p>
                      <div className="mx-auto bg-black shadow-2xl  bg-opacity-80 card p-6">
                        <Markdown
                          options={{
                            overrides: {
                              h3: {
                                props: {
                                  className: "section-heading mb-2   ",
                                },
                              },
                              h1: {
                                props: {
                                  className: "text-lg mb-4   ",
                                },
                              },
                              li: {
                                props: {
                                  className: " p-1 section-subheading",
                                },
                              },
                              p: {
                                props: {
                                  className:
                                    "mb-4 section-subheading sm:text-sm",
                                },
                              },
                              ol: {
                                props: {
                                  className: "mb-4 list-decimal ",
                                },
                              },
                              ul: {
                                props: {
                                  className:
                                    "mb-4 flex flex-col justify-center list-disc ",
                                },
                              },
                              a: {
                                props: {
                                  className: "text-blue-200  border-b ",
                                },
                              },
                            },
                          }}
                          className="p-4  "
                        >
                          {dt.Recommendations}
                        </Markdown>
                      </div>
                      <a
                        name="restart"
                        id="button_field"
                        type="button"
                        className="mx-auto py-3 bg-opacity-40 hover:bg-opacity-40 sm:mb-4 text-sm border border-white  inline-block  px-2  bg-black hover:bg-gray-300 hover:text-black shadow   text-white px-16  rounded-r-xl rounded-b-xl transition duration-200 uppercase "
                        href={data.Buttons[1].linkURL}
                      >
                        <p>{data.Buttons[1].buttonTitle}</p>
                      </a>
                    </div>
                  )}
                </p>
              ))}{" "}
            </div>
          )}
          {keyValue == -1 && (
            <button
              id="button_field"
              type="button"
              className="mx-auto justify-center items-center bg-opacity-40 hover:bg-opacity-40 sm:mb-4 border border-white  inline-block py-3 px-2  bg-black hover:bg-gray-300 hover:text-black shadow   text-white px-16  rounded-r-xl rounded-b-xl transition duration-200 uppercase text-md "
              onClick={() => {
                changeSlide("next");
                onClick({
                  stream_score: resolve_stream_score("none"),
                  event_name: "Button Click",
                  section_name: "Form Section",
                  page_source: `${data.PageSEO.PageTitle}`,
                  label: `${data.Buttons[2].buttonTitle}`,
                });
              }}
            >
              <p>{data.Buttons[0].buttonTitle}</p>
            </button>
          )}
          {keyValue >= 0 && keyValue < data.Quiz.length - 1 && (
            <div className="flex  mx-auto sm:space-x-4 md:space-x-20 items-center justify-center">
              <button
                id="button_field"
                type="button"
                className=" bg-opacity-40 hover:bg-opacity-40 sm:mb-4 border border-white  inline-block py-3 px-2  bg-black hover:bg-gray-300 hover:text-black shadow   text-white px-16  rounded-r-xl rounded-b-xl transition duration-200 uppercase text-md "
                onClick={(e) => {
                  changeSlide("prev");
                  onClick({
                    stream_score: resolve_stream_score("none"),
                    event_name: "Button Click",
                    section_name: "Form Section",
                    page_source: `${data.PageSEO.PageTitle}`,
                    label: `${data.Buttons[2].buttonTitle}`,
                  });
                }}
              >
                <p>Prev</p>
              </button>
              <button
                id="button_field"
                type="button"
                className="mx-auto justify-center items-center bg-opacity-40 hover:bg-opacity-40 sm:mb-4 border border-white  inline-block py-3 px-2  bg-black hover:bg-gray-300 hover:text-black shadow   text-white px-16  rounded-r-xl rounded-b-xl transition duration-200 uppercase text-md "
                onClick={(e) => {
                  validateForm();
                  onClick({
                    stream_score: resolve_stream_score("none"),
                    event_name: "Button Click",
                    section_name: "Form Section",
                    page_source: `${data.PageSEO.PageTitle}`,
                    label: `${data.Buttons[2].buttonTitle}`,
                  });
                }}
              >
                <p>Next</p>
              </button>
            </div>
          )}
          {keyValue == data.Quiz.length - 1 && (
            <button
              id="button_field"
              type="submit"
              className="mx-auto justify-center items-center bg-opacity-40 hover:bg-opacity-40 sm:mb-4 border border-white  inline-block py-3 px-2  bg-black hover:bg-gray-300 hover:text-black shadow   text-white px-16  rounded-r-xl rounded-b-xl transition duration-200 uppercase text-md "
              onClick={() => {
                validateForm();
                onClick({
                  stream_score: resolve_stream_score("none"),
                  event_name: "Button Click",
                  section_name: "Form Section",
                  page_source: `${data.PageSEO.PageTitle}`,
                  label: `${data.Buttons[2].buttonTitle}`,
                });
              }}
            >
              <p>{data.Buttons[3].buttonTitle}</p>
            </button>
          )}
        </form>
      </Layout>
    </>
  );
}
export const getServerSideProps = async (ctx) => {
  //    fetch strapi data

  const res = await fetch(
    `https://api.ktern.com/tools?QuizSlug=${ctx.params.tool}`,
    {
      method: "get",
    }
  );

  const data = await res.json();
  // console.log(data[0].Quiz)
  if (data[0] == undefined) {
    ctx.res.setHeader("Location", "/404");
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
      data: data[0],
      h_data: h_data,
      f_data: f_data,
    },
  };
};
