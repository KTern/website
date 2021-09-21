import Layout from "../../component/Layout"
import WebinarLayout from "../../component/webinar_Layout";
import Image from "next/image";
import Link from "next/link";
export default function WebinarLanding ({ pageProps }) {
    console.log(pageProps.data)
    const data = {
        title: pageProps.data[0].title,
        type: " ON-DEMAND WEBINAR",
        date: "1st September 2021",
        time: "11 am to Noon",
        zone: "Pacific Time",
        cost: "Free",
        about: "Manual testing  increases the required costs and timelines during SAP Digital Transformation. However, considering today’s complex landscapes, integrated processes, and future innovations, automation of the SAP testing lifecycle is just the first step.Auto-detecting process changes to execute autonomous testing based on business process criticality is the path forward.",
        category: "Digital Maps",
        learnlist: [ "Auto-generation of test scripts based on business process criticality.", "No-code API testing bots and screen-based testing bots.", "Orchestrating remote UAT and go-lives through a Digital Workplace Platform." ],
        panellist:[{name:"Ratnakumar",designation:"CEO & Founder",image:"/webinar/ratna.webp"}]
    }
    return (
        <Layout>
            <WebinarLayout data={data}/>
        </Layout>
    )
}
WebinarLanding.getInitialProps=async ()=>{
    const response = await fetch('http://104.154.73.71:1337/webinars',{method:'get',headers:new Headers({'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDFhNDMzMjQwMDM0Mjg5ZTM2MzYxYSIsImlhdCI6MTYzMjEzMTM4MiwiZXhwIjoxNjM0NzIzMzgyfQ.473sxX5je4A7ddg6udNV7aArOoNdPum2GNvxSQ1A7g8'})});
    const data = await response.json();
    return {pageProps:{data}};
}