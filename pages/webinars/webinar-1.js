import Layout from "../../component/Layout"
import WebinarLayout from "../../component/webinar_Layout";
import Image from "next/image";
import Link from "next/link";
export default function WebinarLanding () {
    const data = {
        title: "Reimagining SAP Testing with Digital Labs ",
        type: " ON-DEMAND WEBINAR",
        date: "1st September 2021",
        time: "11 am to Noon",
        zone: "Pacific Time",
        cost: "Free",
        about: "Manual testing  increases the required costs and timelines during SAP Digital Transformation.However, considering today’s complex landscapes, integrated processes, and future innovations, automation of the SAP testing lifecycle is just the first step.Auto-detecting process changes to execute autonomous testing based on business process criticality is the path forward.",
        category: "Digital Maps",
        learnlist: [ "Auto-generation of test scripts based on business process criticality.", "No-code API testing bots and screen-based testing bots.", "Orchestrating remote UAT and go-lives through a Digital Workplace Platform." ],
        panellist:[{name:"Ratna Kumar",designation:"CEO & Founder",image:'https://ktern.com/img/people/ratna.png'},{name:"Edson Frainlar",designation:"Product Developer",image:"https://ktern.com/img/people/edson-frainlar.jfif"}]
    }
    return (
        <Layout>
            <WebinarLayout data={data}/>
        </Layout>
    )
}