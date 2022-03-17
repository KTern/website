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
import {
  NextSeo,
  BreadcrumbJsonLd,
  LogoJsonLd,
  SocialProfileJsonLd,
  SoftwareAppJsonLd,
} from "next-seo";
import BreadCrumb from "../../component/breadcrumb";
import Event, { resolve_stream_score } from '../../component/page_event';
let form_data = {};
let checkBoxData = [];
let valid = false;
let score = 0;
export default function ValueAssesment({ h_data, f_data, data }) {
  function onClick(data){
    Event(data)
    }
  const [keyValue, setKey] = useState(-1);
  const router = useRouter()
  let key = -1;
  let breadcrumb = [];
  data.PageSEO.BreadCrumb.map((dt) => {
    breadcrumb.push({ position: dt.position, name: dt.name, item: dt.item });
  });
  useEffect(() => {
   console.log(keyValue)
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
        data.Quiz[key].QuizValues.map((dt) => {
          if (dt.Value == value) score += dt.Score;
        });
        break;
      }
      case "MultipleChoice": {
        data.Quiz[key].QuizValues.map((dt) => {
          if (value.includes(dt.Value)) score += dt.Score;
        });
        break;
      }
      case "Slider": {
        // console.log(value, score);
            // console.log(operator(dt.Factor, dt.Operation, value));
            score += Number(operator(data.Quiz[key].SliderChoices[0].Factor, data.Quiz[key].SliderChoices[0].Operation, value));
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
    console.log(key,keyValue)
    if (key >= 0 && data.Quiz[key].QuestionType == "Slider") {
      if (data.Quiz[key].QuestionType == "Slider")
       { 
      if(document.getElementById("slider").innerHTML<=0){
        toast.warn("Please fill all required fields.");
        setTimeout(toast.hideAll, 2000);
        valid = false;
      }
      else{
       
        document.getElementById("button_field").disabled = false;
        valid = true;
      }
          }
    }
    else{
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
    }
   }
   if (key == -1) valid = true;
  
   if (valid ) {
     let value;
     if (key != -1 && key < data.Quiz.length) {
       if (data.Quiz[key].QuestionType == "MultipleChoice")
         {let val='';
           checkBoxData.map((dt)=>{
           val+=','+dt;
         })
           value = val;}
      else if(data.Quiz[key].QuestionType=="Slider"){
         value=String(document.getElementById("slider").innerHTML)}
       else value = document.getElementById("form").text_field.value;
     }
  
     if (value != undefined) {
       form_data[data.Quiz[key].Question] = value;
       scoreCalculator(value);
     }
     changeSlide();
   }
  }
  // Change Slide
  function changeSlide() {
    console.log(form_data)
    checkBoxData = [];
    key += 1;
    setKey(key);
    console.log(key,keyValue)
    if(key==(data.Quiz.length)){
      PostData()
    }
  }
  async function PostData(){
    let form_value=[]
    data.Quiz.map((dt)=>{
      let value={}
      value["Question"]=dt.Question;
      value["Answer"]=form_data[dt.Question]
      form_value.push(value)
    })
    let  val={
      "Userdata":form_value,
      "email":form_value[data.Quiz.length-1].Answer,
      "tool":data.PageSEO.PageURL
    }

   console.log(JSON.stringify(val))
   await fetch(`https://api.ktern.com/tools-reports`, {
    method: "post",
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(val)
    
    
  }).then((res)=>{
    // console.log(res)
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
              defaultValue={0}
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
            <select
              className="bg-opacity-20 text-xl bg-white sm:w-2/3 w-1/4 pr-4 mb-10 rounded-xl p-4 focus:outline-none focus:bg-opacity-40"
             
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
              className="heading text-center mb-10 w-full md:w-1/2"
            
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
      <Layout h_data={h_data} f_data={f_data}>
      
        <form
          id="form"
          className="bg-valueBg events py-20 bg-cover text-white flex flex-col space-y-16 overflow-hidden"
          // style={{ height: "96vh" }}
          onSubmit={(e) => {
            
            e.preventDefault();
console.log(e.target)
            key += 1;
           
          }}
        >
         <div className="mx-10">
         <BreadCrumb  color={"white"} b_data={breadcrumb} />
         </div>
          <ToastContainer position="top-right" />
          {keyValue == -1 && (
            <div className=" text-white flex flex-col events  items-center justify-center ">
              <h1 className="heading md:w-2/4 text-center mb-10">
                {data.QuizTitle}
              </h1>
              <p className="subheading md:w-2/4 text-center">
                {data.QuizDescription}
              </p>
            </div>
          )}
          {keyValue < data.Quiz.length && (
            <ViewSlider
              className=" "
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
                    <div className="flex flex-col space-y-6">
                      <p className="heading text-center mb-4">
                        Level &nbsp; {dt.LevelNumber} &nbsp;| &nbsp;
                        {dt.LevelName}
                      </p>
                      <div className=" mx-auto text-center">
                        <Markdown
                          options={{
                            overrides: {
                              h3: {
                                props: {
                                  className: "text-xl mb-4   text-center",
                                },
                              },
                              h1: {
                                props: {
                                  className: "text-lg mb-4   text-center",
                                },
                              },
                              li: {
                                props: {
                                  className: " list-decimal ml-6 mb-1 flex-col",
                                },
                              },
                              p: {
                                props: {
                                  className:
                                    "mb-3 text-md sm:text-sm text-center",
                                },
                              },
                              ol: {
                                props: {
                                  className: "mb-4 ",
                                },
                              },
                              a: {
                                props: {
                                  className: "text-blue-800",
                                },
                              },
                            },
                          }}
                          className=" text-center"
                        >
                          {dt.Recommendations}
                        </Markdown>
                      </div>
                      <button
                   name="restart"  
              id="button_field"
              type="button"
              className="mx-auto py-3 bg-opacity-40 hover:bg-opacity-40 sm:mb-4 text-sm border border-white  inline-block  px-2  bg-black hover:bg-gray-300 hover:text-black shadow   text-white px-16  rounded-r-xl rounded-b-xl transition duration-200 uppercase "
             onClick={(e)=>{
              router.reload(window.location.pathname)        
             }
               
             }
            >
            <p>{data.Buttons[1].buttonTitle}</p>
            </button>
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
              className="mx-auto justify-center items-center bg-opacity-40 hover:bg-opacity-40 sm:mb-4 border border-white  inline-block py-3 px-2  bg-black hover:bg-gray-300 hover:text-black shadow   text-white px-16  rounded-r-xl rounded-b-xl transition duration-200 uppercase text-md "
              onClick={()=>{onClick({stream_score:resolve_stream_score('none'),event_name:"Button Click",section_name:"Form Section",page_source:`${data.PageSEO.PageTitle}`,label:`${data.Buttons[2].buttonTitle}`})}} 
           >
              {keyValue == -1 && <p>{data.Buttons[0].buttonTitle}</p>}
              {keyValue >= 0 && keyValue <(data.Quiz.length-1) && <p>{data.Buttons[2].buttonTitle}</p>}
              {keyValue ==(data.Quiz.length-1)  && <p>{data.Buttons[3].buttonTitle}</p>}
            </button>
          )}
        </form>
      </Layout>
    </>
  );
}
export const getServerSideProps = async (ctx) => {
  //    fetch strapi data
  
  const res = await fetch(`https://api.ktern.com/tools?QuizSlug=${ctx.params.tool}`, {
    method: "get",
  });
  
  const data = await res.json();
  // console.log(data[0].Quiz)
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
      data: data[0],
      h_data: h_data,
      f_data: f_data,
    },
  };
};
