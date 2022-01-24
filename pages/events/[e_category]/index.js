import React, { useEffect,useState } from "react";
import Router from 'next/router'
export default function Events({h_data,f_data,data}) {
  useEffect(() => {
    Router.push('/events/roadshow/digital-roadshow-2022')
})
return (
    <div></div>
)    
}
export const getStaticPaths = async () => {
    // dynamic route array values must be acquired here from strapi
    const data = [
      { e_category: "roadshow" }
    ];
    const paths = data.map((index) => {
      return {
        params: { e_category: index.e_category },
      };
    });
    return {
      paths,
      fallback: false,
    };
};
  
export const getStaticProps = async (ctx) => {

    // const name = params.e_category;
  
    // const res = await fetch(`https://api.ktern.com/digital-streams?slug=${streamname}`, {
    //   method: "get",
    // });
  
    // const data = await res.json();
    //  console.log(data[0])
    //     const res1 = await fetch('https://api.ktern.com/header', {
    //       method: 'get',
    //   });
    // const h_data = await res1.json();
    // const res2 = await fetch('https://api.ktern.com/footer', {
    //       method: 'get',
    //   });
    //   const f_data = await res2.json();
    return {
      props: {
    //     stream_data: data[ 0 ],
    //     h_data: h_data,
    //     f_data:f_data
      }
    };
  };