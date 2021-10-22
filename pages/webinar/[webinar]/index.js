import Layout from "../../../component/Layout"
import WebinarLayout from "../../../component/webinar_Layout";
import Image from "next/image";
import Link from "next/link";
export default function WebinarLanding ({ webinar_data }) {
    
    const data = {
        title: webinar_data,
        type: "ON-DEMAND WEBINAR",
        date: "1st September 2021",
        time: "11 am to Noon",
        zone: "Pacific Time",
        cost: "Free",
        about: "Manual testing  increases the required costs and timelines during SAP Digital Transformation. However, considering today’s complex landscapes, integrated processes, and future innovations, automation of the SAP testing lifecycle is just the first step.Auto-detecting process changes to execute autonomous testing based on business process criticality is the path forward.",
        category: "Digital Maps",
        learnlist: [ "Auto-generation of test scripts based on business process criticality.", "No-code API testing bots and screen-based testing bots.", "Orchestrating remote UAT and go-lives through a Digital Workplace Platform." ],
        panellist: [ { name: "Ratnakumar", designation: "CEO & Founder", image: "/webinar/ratna.webp" } ],
        class: 'absolute inset-0 bg-gradient-to-b from-labs-primary to-labs-secondary opacity-30',
        categoryStyle: 'bg-labs-secondary',
        redirect_url:webinar_data+"/thank-you"
    }
    return (
        <Layout>
            <WebinarLayout data={data}/>
        </Layout>
    )
}


// Return a list of possible value for webinar
export const getStaticPaths = async () => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/users');
    // const data = await res.json();
    const data=[{webinar:'transforming-s4hana-upgrade-journey'},{webinar:'reimagining-sap-s4hana-conversion'},{webinar:'democratizing-sap-digital-transformation-as-a-service-dxaas'},{webinar:'manage-digital-transformation-effectively'},{webinar:'reimagining-sap-testing'}]
    // console.log(data)
    const paths = data.map(webinar => {
        return ({
            params:{webinar:webinar.webinar}
        })
    })
    return {
        paths,
        fallback:false
    }
}
// Fetch necessary data for the blog post using params.webinar
export const getStaticProps = async (context) => {
    const webinar = context.params.webinar;
    // const response = await fetch('https://api.ktern.com/webinars',{method:'get',headers:new Headers({'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDFhNDMzMjQwMDM0Mjg5ZTM2MzYxYSIsImlhdCI6MTYzMjEzMTM4MiwiZXhwIjoxNjM0NzIzMzgyfQ.473sxX5je4A7ddg6udNV7aArOoNdPum2GNvxSQ1A7g8'})});
    // const data = await response.json();
    return {
        props:{webinar_data:webinar}
    }
}
