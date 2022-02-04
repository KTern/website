import Layout from "../component/Layout";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ViewSlider from "react-view-slider";
import ReactSlider from "react-slider";
import { data } from "autoprefixer";
import Head from "next/head"
let question = [
  {
    type:'content',
    key:0,
    question:"Question 4",
    answer:"Answer 4"
  },
  {
    type:'slider',
    key: 1,
    question: "Question 1",
    answer: "Answer 1",
  },
  {
    type:'text',
    key: 2,
    question: "Question 2",
    answer: "Answer 2",
  },
  {
    type:'select',
    key: 3,
    question: "Question 3",
    answer: "Answer 3",
  },
  {
    type:'multi-select',
    key: 4,
    question: "Question 3",
    answer: "Answer 3",
  }
];
export default function ValueAssesment({ h_data, f_data }) {
  const [keyValue, setKey] = useState(0);
  let key = 0;
  useEffect(() => {
    document.getElementById('button_field').addEventListener("click", changeSlide);

    return () => {
      document.getElementById('button_field').removeEventListener("click", changeSlide);
    };
  }, []);
  // Change Slide
  function changeSlide() {
    key += 1;
    setKey(key);
    console.log(document.getElementById('field').value)
  }

  // This function renders the view at the given index.
  const renderView = ({ index, active, transitionState }) => {
    data = question[index];
    switch (data.type) {
      case "text":
        return ( <div className=" text-white flex flex-col   items-center justify-center "  >
                <h1 className="text-4xl text-center mb-20" style={{width:'100vh'}}> Assess Your Customer Service Maturity</h1>
                <input type="text" id="field" name="text_field" className="bg-opacity-20 text-xl bg-white  mb-10 rounded-xl p-4 focus:outline-none focus:bg-opacity-40" style={{width:'70vh'}}/>
              </div>)
      case "slider":
        return ( <div className=" text-white flex flex-col  items-center justify-center "   >
                <h1 className="heading text-center mb-10" style={{width:'100vh'}}> Assess Your Customer Service Maturity</h1>
                <input id="field" type="range" className="bg-opacity-20 text-xl bg-white  mb-10 rounded-xl p-4 focus:outline-none focus:bg-opacity-40" style={{width:'70vh'}} defaultValue={50}  />
               
              </div>)
      case "select":
        return ( <div className=" text-white flex flex-col  items-center justify-center "   >
                <h1 className="heading w-3/5 text-center mb-10" style={{width:'100vh'}}> Assess Your Customer Service Maturity</h1>
                <select  className="bg-opacity-20 text-xl bg-white mx-4 pr-4 mb-10 rounded-xl p-4 focus:outline-none focus:bg-opacity-40" style={{width:'70vh'}} name="cars" id="cars">
                  <option  className="bg-opacity-20 text-xl text-black mb-10   p-4 focus:outline-none hover:bg-opacity-40" style={{width:'70vh'}} value="volvo">Volvo</option>
                  <option  className="bg-opacity-20 text-xl text-black mb-10  p-4 focus:outline-none hover:bg-opacity-40" style={{width:'70vh'}} value="saab">Saab</option>
                  <option  className="bg-opacity-20 text-xl text-black mb-10  p-4 focus:outline-none hover:bg-opacity-40" style={{width:'70vh'}} value="opel">Opel</option>
                  <option  className="bg-opacity-20 text-xl text-black mb-10  p-4 focus:outline-none hover:bg-opacity-40" style={{width:'70vh'}} value="audi">Audi</option>
                </select>
              
              </div>)
      case "multi-select":
        return ( <div className=" text-white flex flex-col  items-center justify-center "   >
                <h1 className="heading text-center mb-10" style={{width:'100vh'}}> Assess Your Customer Service Maturity</h1>
              <div className="flex mb-2 space-y-4 flex-col">
              <div className="pretty p-primary p-default p-round p-fill p-info p-jelly" >
                <input type="checkbox" />
                <div className="state">
                  <label>Option 1</label>
                </div>
              </div>
              <div className="pretty p-primary p-default p-round p-fill p-info p-jelly" >
                <input type="checkbox" />
                <div className="state">
                  <label>Option 2</label>
                </div>
              </div>
              <div className="pretty p-primary p-default p-round p-fill p-info p-jelly" >
                <input type="checkbox" />
                <div className="state">
                  <label>Option 3</label>
                </div>
              </div> 
              </div>                
              </div>)
      default:
        return (
              <div className=" text-white flex flex-col  items-center justify-center "   >
                <h1 className="heading w-2/4 text-center mb-10"> Assess Your Customer Service Maturity</h1>
                <p className="subheading w-2/4 text-center">
                  Find out if your processes still need to be optimized, if you’re using
                  the latest customer service technology, and most importantly - if you
                  are delivering memorable customer experiences.
                </p>
              
              </div>
        );
    }
  };
  return (
    <>
    <Head><meta name="viewport" content="width=device-width, initial-scale=1"/></Head>
    <Layout h_data={h_data} f_data={f_data}>
      <div
        className="bg-valueBg bg-cover text-white flex flex-col space-y-16 items-center justify-center overflow-hidden"
        style={{ height: "100vh" }}
      >
         <ViewSlider className="mx-auto text-white flex flex-col items-center justify-center "
        renderView={renderView}
        numViews={4}
        activeView={keyValue}
        animateHeight
        onSlideTransitionEnd={()=>{
          console.log("Hello1")
        }}
      />
       <button id="button_field" className=" bg-opacity-40 hover:bg-opacity-40 sm:mb-4 border-2 border-white  inline-block py-3 px-2 md:px-10 bg-black hover:bg-gray-300 hover:text-black shadow   text-white  rounded-r-xl rounded-b-xl transition duration-200 button ">
                    Start Quiz
                </button>
      </div>
     
    </Layout>
    </>
  );
}
export const getStaticProps = async () => {
  //    fetch strapi data
  const res = await fetch(`https://api.ktern.com/technology-partners`, {
    method: "get",
  });
  const data = await res.json();
  // console.log('data1', data);
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
