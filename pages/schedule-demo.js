import Head from "next/head"
import Layout from "../component/Layout"
import { InlineWidget } from "react-calendly"
export default function ScheduleDemo({h_data,f_data}){
    return (
        <>
        <Layout h_data={h_data} f_data={f_data}>
          
<InlineWidget


     styles={{height:'850px',marginTop:'50px'}}
     url="https://calendly.com/ktern-jacob/personalized-ktern-demo?month=2022-03"
   />
        </Layout>
        </>
    )
}
export const getStaticProps = async () => {
    // data url from strapi
    let res = await fetch("https://api.ktern.com/pricing", {
      method: "get",
    });
    let data = await res.json();
    // console.log(data);
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
  