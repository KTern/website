import Image from "next/image";
import Link from "next/link";
import Layout from "../component/Layout"





export default function Pricing () {
    return (
        <Layout>
             {/* <!-- Main Pricing Section-->         */}
            <section className="overflow-hidden text-gray-700 bg-secondary" >
                <div className="container px-5 pt-20 pb-24 mx-auto">
            
                    <div className="flex flex-col w-full mb-20 text-center">

                        <div className="relative z-10 max-w-3xl px-12 mx-auto space-y-5 text-center lg:px-0">
                            <h1 className="heading">Get Started With KTern</h1>
                            <p className="mx-auto subheading lg:w-2/3">Digital Transformation made simple</p>
                        </div>

                    
            
            
                    </div>
              <div className="flex flex-row">    
                    <div className="w-3/5  mr-10">                    
                    <div className="flex flex-wrap">
                    
                   
                    
                    
                    <div className="w-full mb-3">
                        
                        <div className="relative flex flex-col justify-between h-full p-6 overflow-hidden border border-blue-600 rounded-lg">
                            
                            <span className="absolute top-0 right-0 px-3 py-0 text-xs tracking-widest text-white bg-blue-600 rounded-bl">Selected</span>   
                            <details className="">
                            <summary className="">                     
                            <div className="flex flex-col w-full">
                                <div className="flex flex-row justify-between" >
                                    <div className=" flex flex-row ">
                                    <span className="flex  w-10 h-8  mb-3 mr-0 bg-transparent rounded-lg">
                                            <Image src="/assets/icons/maps.png"alt="Digital maps" height={40} width={30}/>
                                            </span>
                                            <h2 className="mb-1 pr-2 card-heading">Digital Maps</h2>
                                    </div>
                                    
                                    <div className="flex flex-arrow ">
                                    <button id="hey" className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"> 
                                        Unselect   
                                    </button>
                                    <div id="arrow" className="mt-2">
                                    </div>
                                    
                                   
                                    </div>
                                    </div>
                                    <h1 className="flex items-center pb-0 card-heading text-gray-900  border-gray-200"><span>$3000</span><span className="ml-1 text-lg font-normal text-gray-500">/MO</span></h1>
                                    <p className="mt-3 card-subheading  pb-4   text-gray-500">Build your Business Case for your SAP Digital Transformation with KTern&apos;s Digital Maps</p>
                                    </div>
                                
                                    </summary>
                                    
                                    <div className="flex flex-row justify-between pt-6 border-t" >
                                <h2 className="mb-3 card-heading  ">Key Features</h2>
                                    <div className="">
                                        <Link href="#_" passHref>
                                    <a  className="inline-flex text-xs items-center pb-1 font-medium text-blue-500 border-b-2 border-gray-200 hover:border-blue-500 group">
                    <span>Detailed View</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </a>
                </Link>
                                    </div>
                                    </div>
                                   
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>Landscape Assessment</p>
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>Business Assessment</p>
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>Custom Assessment</p>
                                    <p className="flex items-center mb-6 pb-2 text-gray-600 border-b"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>Scope Assessment</p>
                                
                                <div className="border-b mb-6 pb-2">
                                <div className="flex flex-row justify-between" >
                                <h2 className="mb-3 card-heading  ">Bots</h2>
                                    <div className="">
                                        <Link href="#_" passHref>
                                    <a  className="inline-flex text-xs items-center pb-1 font-medium text-blue-500 border-b-2 border-gray-200 hover:border-blue-500 group">
                    <span>Detailed View</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </a>
                </Link>
                                    </div>
                                    </div>
                                
  <div
    className="sm:w-1/2 md:w-1/3 xl:w-1/4 inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-bell-off mr-2"
    >
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
      <path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path>
      <path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path>
      <path d="M18 8a6 6 0 0 0-9.33-5"></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
    StakeHolder Impact Simulation
  </div>
  <div
    className="sm:w-1/2 md:w-1/3 xl:w-1/4 inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-bell-off mr-2"
    >
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
      <path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path>
      <path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path>
      <path d="M18 8a6 6 0 0 0-9.33-5"></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
    Process Impact Simulation
  </div>
  <div
    className="sm:w-1/2 md:w-1/3 xl:w-1/4 inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-bell-off mr-2"
    >
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
      <path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path>
      <path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path>
      <path d="M18 8a6 6 0 0 0-9.33-5"></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
    Project Impact Simulation
  </div>
  <div
    className="sm:w-1/2 md:w-1/3 xl:w-1/4 inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-bell-off mr-2"
    >
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
      <path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path>
      <path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path>
      <path d="M18 8a6 6 0 0 0-9.33-5"></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
    Task Impact Simulation
  </div>

  </div>
                                <div className="">
                                <div className="flex flex-row justify-between" >
                                <h2 className="mb-1 card-heading ">Users</h2>
                                    <div className="">
                                        <Link href="#_" passHref>
                                    <a  className="inline-flex items-center text-xs pb-1 font-medium text-blue-500 border-b-2 border-gray-200 hover:border-blue-500 group">
                    <span>Detailed View</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </a>
                </Link>
                                    </div>
                                    </div>
                                
                                <p className="flex items-center mb-2 text-gray-600 card-subheading "><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-white rounded-full">
                                <Image src="https://static.thenounproject.com/png/925249-200.png" alt="" width={150} height={150}/>
                                    </span>No.of SAP Customers : Infinite</p>
                                            <p className="flex items-center mb-6 pb-2 text-gray-600 border-b"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-white rounded-full">
                                            <Image src="https://static.thenounproject.com/png/925249-200.png" alt="" width={150} height={150}/></span>No.of SAP Partners : Infinite</p>  
                                </div>







                                <div className="w-full">
                                <button className="inline-flex items-center justify-center w-full px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"> 
                                        View All Features
                                        <div className="w-4 h-4 ml-2 relative"><Image layout="fill" src="/pricing/down-arrow-svgrepo-com.svg"  alt="down arrow"/></div>
                                    </button>
                                    
                                    <p className="mt-3 text-xs text-center text-gray-500">All plans include a free onboarding call.</p>
                                
                                </div>
                                </details>
                            </div>
                        </div>
                        <div className="w-full mb-3">
                        
                        <div className="relative flex flex-col justify-between h-full p-6 overflow-hidden border border-blue-600 rounded-lg">
                            
                            <span className="absolute top-0 right-0 px-3 py-0 text-xs tracking-widest text-white bg-blue-600 rounded-bl">Selected</span>   
                            <details className="">
                            <summary className="">                     
                            <div className="flex flex-col w-full">
                                <div className="flex flex-row justify-between" >
                                    <div className=" flex flex-row ">
                                    <span className="flex  w-10 h-8  mb-3 mr-0 bg-transparent rounded-lg">
                                            <Image src="/assets/icons/projects.png"alt="Digital Projects" height={40} width={30}/>
                                            </span>
                                            <h2 className="mb-1 pr-2 card-heading">Digital Projects</h2>
                                    </div>
                                    
                                    <div className="flex flex-arrow ">
                                    <button id="hey" className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"> 
                                        Unselect   
                                    </button>
                                    <div id="arrow" className="mt-2">
                                    </div>
                                    
                                   
                                    </div>
                                    </div>
                                    <h1 className="flex items-center pb-0 card-heading text-gray-900  border-gray-200"><span>$3000</span><span className="ml-1 text-lg font-normal text-gray-500">/MO</span></h1>
                                    <p className="mt-3 card-subheading  pb-4   text-gray-500">Gain ultimate control of your SAP projects and teams with KTern&apos;s Digital projects</p>
                                    </div>
                                
                                    </summary>
                                    
                                    <div className="flex flex-row justify-between pt-6 border-t" >
                                <h2 className="mb-3 card-heading  ">Key Features</h2>
                                    <div className="">
                                        <Link href="#_" passHref>
                                    <a  className="inline-flex text-xs items-center pb-1 font-medium text-blue-500 border-b-2 border-gray-200 hover:border-blue-500 group">
                    <span>Detailed View</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </a>
                </Link>
                                    </div>
                                    </div>
                                   
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>Plan Transformation</p>
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>Team Collaboration</p>
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>Organized Transformation</p>
                                    <p className="flex items-center mb-6 pb-2 text-gray-600 border-b"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>Customizable Dashboards</p>
                                
                                <div className="border-b mb-6 pb-2">
                                <div className="flex flex-row justify-between" >
                                <h2 className="mb-3 card-heading  ">Bots</h2>
                                    <div className="">
                                        <Link href="#_" passHref>
                                    <a  className="inline-flex text-xs items-center pb-1 font-medium text-blue-500 border-b-2 border-gray-200 hover:border-blue-500 group">
                    <span>Detailed View</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </a>
                </Link>
                                    </div>
                                    </div>
                                
  <div
    className="sm:w-1/2 md:w-1/3 xl:w-1/4 inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-bell-off mr-2"
    >
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
      <path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path>
      <path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path>
      <path d="M18 8a6 6 0 0 0-9.33-5"></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
    StakeHolder Impact Simulation
  </div>
  <div
    className="sm:w-1/2 md:w-1/3 xl:w-1/4 inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-bell-off mr-2"
    >
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
      <path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path>
      <path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path>
      <path d="M18 8a6 6 0 0 0-9.33-5"></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
    Process Impact Simulation
  </div>
  <div
    className="sm:w-1/2 md:w-1/3 xl:w-1/4 inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-bell-off mr-2"
    >
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
      <path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path>
      <path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path>
      <path d="M18 8a6 6 0 0 0-9.33-5"></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
    Project Impact Simulation
  </div>
  <div
    className="sm:w-1/2 md:w-1/3 xl:w-1/4 inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-bell-off mr-2"
    >
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
      <path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path>
      <path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path>
      <path d="M18 8a6 6 0 0 0-9.33-5"></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
    Task Impact Simulation
  </div>

  </div>
                                <div className="">
                                <div className="flex flex-row justify-between" >
                                <h2 className="mb-1 card-heading ">Users</h2>
                                    <div className="">
                                        <Link href="#_" passHref>
                                    <a  className="inline-flex items-center text-xs pb-1 font-medium text-blue-500 border-b-2 border-gray-200 hover:border-blue-500 group">
                    <span>Detailed View</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </a>
                </Link>
                                    </div>
                                    </div>
                                
                                <p className="flex items-center mb-2 text-gray-600 card-subheading "><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-white rounded-full">
                                <Image src="https://static.thenounproject.com/png/925249-200.png" alt="" width={150} height={150}/>
                                    </span>No.of SAP Customers : Infinite</p>
                                            <p className="flex items-center mb-6 pb-2 text-gray-600 border-b"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-white rounded-full">
                                            <Image src="https://static.thenounproject.com/png/925249-200.png" alt="" width={150} height={150}/></span>No.of SAP Partners : Infinite</p>  
                                </div>







                                <div className="w-full">
                                <button className="inline-flex items-center justify-center w-full px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"> 
                                        View All Features
                                        <div className="w-4 h-4 ml-2 relative"><Image layout="fill" src="/pricing/down-arrow-svgrepo-com.svg"  alt="down arrow"/></div>
                                    </button>
                                    
                                    <p className="mt-3 text-xs text-center text-gray-500">All plans include a free onboarding call.</p>
                                
                                </div>
                                </details>
                            </div>
                        </div>
                        <div className="w-full mb-3">
                        
                        <div className="relative flex flex-col justify-between h-full p-6 overflow-hidden border border-blue-600 rounded-lg">
                            
                            <span className="absolute top-0 right-0 px-3 py-0 text-xs tracking-widest text-white bg-blue-600 rounded-bl">Selected</span>   
                            <details className="">
                            <summary className="">                     
                            <div className="flex flex-col w-full">
                                <div className="flex flex-row justify-between" >
                                    <div className=" flex flex-row ">
                                    <span className="flex  w-10 h-8  mb-3 mr-0 bg-transparent rounded-lg">
                                            <Image src="/assets/icons/process.svg"alt="Digital process" height={40} width={30}/>
                                            </span>
                                            <h2 className="mb-1 pr-2 card-heading">Digital Process</h2>
                                    </div>
                                    
                                    <div className="flex flex-arrow ">
                                    <button id="hey" className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"> 
                                        Unselect   
                                    </button>
                                    <div id="arrow" className="mt-2">
                                    </div>
                                    
                                   
                                    </div>
                                    </div>
                                    <h1 className="flex items-center pb-0 card-heading text-gray-900  border-gray-200"><span>$3000</span><span className="ml-1 text-lg font-normal text-gray-500">/MO</span></h1>
                                    <p className="mt-3 card-subheading  pb-4   text-gray-500">Create a Digital Footprint and optimize your processes with KTern&apos;s Digital Process</p>
                                    </div>
                                
                                    </summary>
                                    
                                    <div className="flex flex-row justify-between pt-6 border-t" >
                                <h2 className="mb-3 card-heading  ">Key Features</h2>
                                    <div className="">
                                        <Link href="#_" passHref>
                                    <a  className="inline-flex text-xs items-center pb-1 font-medium text-blue-500 border-b-2 border-gray-200 hover:border-blue-500 group">
                    <span>Detailed View</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </a>
                </Link>
                                    </div>
                                    </div>
                                   
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>Landscape Assessment</p>
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>Business Assessment</p>
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>Custom Assessment</p>
                                    <p className="flex items-center mb-6 pb-2 text-gray-600 border-b"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>Scope Assessment</p>
                                
                                <div className="border-b mb-6 pb-2">
                                <div className="flex flex-row justify-between" >
                                <h2 className="mb-3 card-heading  ">Bots</h2>
                                    <div className="">
                                        <Link href="#_" passHref>
                                    <a  className="inline-flex text-xs items-center pb-1 font-medium text-blue-500 border-b-2 border-gray-200 hover:border-blue-500 group">
                    <span>Detailed View</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </a>
                </Link>
                                    </div>
                                    </div>
                                
  <div
    className="sm:w-1/2 md:w-1/3 xl:w-1/4 inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-bell-off mr-2"
    >
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
      <path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path>
      <path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path>
      <path d="M18 8a6 6 0 0 0-9.33-5"></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
    StakeHolder Impact Simulation
  </div>
  <div
    className="sm:w-1/2 md:w-1/3 xl:w-1/4 inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-bell-off mr-2"
    >
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
      <path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path>
      <path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path>
      <path d="M18 8a6 6 0 0 0-9.33-5"></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
    Process Impact Simulation
  </div>
  <div
    className="sm:w-1/2 md:w-1/3 xl:w-1/4 inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-bell-off mr-2"
    >
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
      <path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path>
      <path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path>
      <path d="M18 8a6 6 0 0 0-9.33-5"></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
    Project Impact Simulation
  </div>
  <div
    className="sm:w-1/2 md:w-1/3 xl:w-1/4 inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-bell-off mr-2"
    >
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
      <path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path>
      <path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path>
      <path d="M18 8a6 6 0 0 0-9.33-5"></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
    Task Impact Simulation
  </div>

  </div>
                                <div className="">
                                <div className="flex flex-row justify-between" >
                                <h2 className="mb-1 card-heading ">Users</h2>
                                    <div className="">
                                        <Link href="#_" passHref>
                                    <a  className="inline-flex items-center text-xs pb-1 font-medium text-blue-500 border-b-2 border-gray-200 hover:border-blue-500 group">
                    <span>Detailed View</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </a>
                </Link>
                                    </div>
                                    </div>
                                
                                <p className="flex items-center mb-2 text-gray-600 card-subheading "><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-white rounded-full">
                                <Image src="https://static.thenounproject.com/png/925249-200.png" alt="" width={150} height={150}/>
                                    </span>No.of SAP Customers : Infinite</p>
                                            <p className="flex items-center mb-6 pb-2 text-gray-600 border-b"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-white rounded-full">
                                            <Image src="https://static.thenounproject.com/png/925249-200.png" alt="" width={150} height={150}/></span>No.of SAP Partners : Infinite</p>  
                                </div>







                                <div className="w-full">
                                <button className="inline-flex items-center justify-center w-full px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"> 
                                        View All Features
                                        <div className="w-4 h-4 ml-2 relative"><Image layout="fill" src="/pricing/down-arrow-svgrepo-com.svg"  alt="down arrow"/></div>
                                    </button>
                                    
                                    <p className="mt-3 text-xs text-center text-gray-500">All plans include a free onboarding call.</p>
                                
                                </div>
                                </details>
                            </div>
                        </div>
                        <div className="w-full mb-3">
                        
                        <div className="relative flex flex-col justify-between h-full p-6 overflow-hidden border border-blue-600 rounded-lg">
                            
                            <span className="absolute top-0 right-0 px-3 py-0 text-xs tracking-widest text-white bg-blue-600 rounded-bl">Selected</span>   
                            <details className="">
                            <summary className="">                     
                            <div className="flex flex-col w-full">
                                <div className="flex flex-row justify-between" >
                                    <div className=" flex flex-row ">
                                    <span className="flex  w-10 h-8  mb-3 mr-0 bg-transparent rounded-lg">
                                            <Image src="/assets/icons/labs.png"alt="Digital Labs" height={40} width={30}/>
                                            </span>
                                            <h2 className="mb-1 pr-2 card-heading">Digital Labs</h2>
                                    </div>
                                    
                                    <div className="flex flex-arrow ">
                                    <button id="hey" className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"> 
                                        Unselect   
                                    </button>
                                    <div id="arrow" className="mt-2">
                                    </div>
                                    
                                   
                                    </div>
                                    </div>
                                    <h1 className="flex items-center pb-0 card-heading text-gray-900  border-gray-200"><span>$3000</span><span className="ml-1 text-lg font-normal text-gray-500">/MO</span></h1>
                                    <p className="mt-3 card-subheading  pb-4   text-gray-500">Automate your Testing for modern Enterprises with KTern&apos;s AI driven Digital Maps</p>
                                    </div>
                                
                                    </summary>
                                    
                                    <div className="flex flex-row justify-between pt-6 border-t" >
                                <h2 className="mb-3 card-heading  ">Key Features</h2>
                                    <div className="">
                                        <Link href="#_" passHref>
                                    <a  className="inline-flex text-xs items-center pb-1 font-medium text-blue-500 border-b-2 border-gray-200 hover:border-blue-500 group">
                    <span>Detailed View</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </a>
                </Link>
                                    </div>
                                    </div>
                                   
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>Auto Recommendation</p>
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>Sign-Off Management</p>
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>Auto Execution</p>
                                    <p className="flex items-center mb-6 pb-2 text-gray-600 border-b"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>TestCase Management</p>
                                
                                <div className="border-b mb-6 pb-2">
                                <div className="flex flex-row justify-between" >
                                <h2 className="mb-3 card-heading  ">Bots</h2>
                                    <div className="">
                                        <Link href="#_" passHref>
                                    <a  className="inline-flex text-xs items-center pb-1 font-medium text-blue-500 border-b-2 border-gray-200 hover:border-blue-500 group">
                    <span>Detailed View</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </a>
                </Link>
                                    </div>
                                    </div>
                                
  <div
    className="sm:w-1/2 md:w-1/3 xl:w-1/4 inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-bell-off mr-2"
    >
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
      <path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path>
      <path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path>
      <path d="M18 8a6 6 0 0 0-9.33-5"></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
    StakeHolder Impact Simulation
  </div>
  <div
    className="sm:w-1/2 md:w-1/3 xl:w-1/4 inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-bell-off mr-2"
    >
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
      <path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path>
      <path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path>
      <path d="M18 8a6 6 0 0 0-9.33-5"></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
    Process Impact Simulation
  </div>
  <div
    className="sm:w-1/2 md:w-1/3 xl:w-1/4 inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-bell-off mr-2"
    >
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
      <path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path>
      <path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path>
      <path d="M18 8a6 6 0 0 0-9.33-5"></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
    Project Impact Simulation
  </div>
  <div
    className="sm:w-1/2 md:w-1/3 xl:w-1/4 inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-bell-off mr-2"
    >
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
      <path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path>
      <path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path>
      <path d="M18 8a6 6 0 0 0-9.33-5"></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
    Task Impact Simulation
  </div>

  </div>
                                <div className="">
                                <div className="flex flex-row justify-between" >
                                <h2 className="mb-1 card-heading ">Users</h2>
                                    <div className="">
                                        <Link href="#_" passHref>
                                    <a  className="inline-flex items-center text-xs pb-1 font-medium text-blue-500 border-b-2 border-gray-200 hover:border-blue-500 group">
                    <span>Detailed View</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </a>
                </Link>
                                    </div>
                                    </div>
                                
                                <p className="flex items-center mb-2 text-gray-600 card-subheading "><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-white rounded-full">
                                <Image src="https://static.thenounproject.com/png/925249-200.png" alt="" width={150} height={150}/>
                                    </span>No.of SAP Customers : Infinite</p>
                                            <p className="flex items-center mb-6 pb-2 text-gray-600 border-b"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-white rounded-full">
                                            <Image src="https://static.thenounproject.com/png/925249-200.png" alt="" width={150} height={150}/></span>No.of SAP Partners : Infinite</p>  
                                </div>







                                <div className="w-full">
                                <button className="inline-flex items-center justify-center w-full px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"> 
                                        View All Features
                                        <div className="w-4 h-4 ml-2 relative"><Image layout="fill" src="/pricing/down-arrow-svgrepo-com.svg"  alt="down arrow"/></div>
                                    </button>
                                    
                                    <p className="mt-3 text-xs text-center text-gray-500">All plans include a free onboarding call.</p>
                                
                                </div>
                                </details>
                            </div>
                        </div>
                        <div className="w-full mb-3">
                        
                        <div className="relative flex flex-col justify-between h-full p-6 overflow-hidden border border-blue-600 rounded-lg">
                            
                            <span className="absolute top-0 right-0 px-3 py-0 text-xs tracking-widest text-white bg-blue-600 rounded-bl">Selected</span>   
                            <details className="">
                            <summary className="">                     
                            <div className="flex flex-col w-full">
                                <div className="flex flex-row justify-between" >
                                    <div className=" flex flex-row ">
                                    <span className="flex  w-10 h-8  mb-3 mr-0 bg-transparent rounded-lg">
                                            <Image src="/assets/icons/mines.png"alt="Digital mines" height={40} width={30}/>
                                            </span>
                                            <h2 className="mb-1 pr-2 card-heading">Digital Mines</h2>
                                    </div>
                                    
                                    <div className="flex flex-arrow ">
                                    <button id="hey" className="inline-flex items-center justify-center mr-2 px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"> 
                                        Unselect   
                                    </button>
                                    <div id="arrow" className="mt-2">
                                    </div>
                                    
                                   
                                    </div>
                                    </div>
                                    <h1 className="flex items-center pb-0 card-heading text-gray-900  border-gray-200"><span>$3000</span><span className="ml-1 text-lg font-normal text-gray-500">/MO</span></h1>
                                    <p className="mt-3 card-subheading  pb-4   text-gray-500">Run all your Processes better to run your Business better with KTern&apos;s Digital Mines</p>
                                    </div>
                                
                                    </summary>
                                    
                                    <div className="flex flex-row justify-between pt-6 border-t" >
                                <h2 className="mb-3 card-heading  ">Key Features</h2>
                                    <div className="">
                                        <Link href="#_" passHref>
                                    <a  className="inline-flex text-xs items-center pb-1 font-medium text-blue-500 border-b-2 border-gray-200 hover:border-blue-500 group">
                    <span>Detailed View</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </a>
                </Link>
                                    </div>
                                    </div>
                                   
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>Process Mining</p>
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>Optimize Processes</p>
                                    <p className="flex items-center mb-2 text-gray-600 card-subheading"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>Process Monitoring</p>
                                    <p className="flex items-center mb-6 pb-2 text-gray-600 border-b"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>ROI Estimation</p>
                                
                                <div className="border-b mb-6 pb-2">
                                <div className="flex flex-row justify-between" >
                                <h2 className="mb-3 card-heading  ">Bots</h2>
                                    <div className="">
                                        <Link href="#_" passHref>
                                    <a  className="inline-flex text-xs items-center pb-1 font-medium text-blue-500 border-b-2 border-gray-200 hover:border-blue-500 group">
                    <span>Detailed View</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </a>
                </Link>
                                    </div>
                                    </div>
                                
  <div
    className="sm:w-1/2 md:w-1/3 xl:w-1/4 inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-bell-off mr-2"
    >
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
      <path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path>
      <path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path>
      <path d="M18 8a6 6 0 0 0-9.33-5"></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
    StakeHolder Impact Simulation
  </div>
  <div
    className="sm:w-1/2 md:w-1/3 xl:w-1/4 inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-bell-off mr-2"
    >
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
      <path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path>
      <path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path>
      <path d="M18 8a6 6 0 0 0-9.33-5"></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
    Process Impact Simulation
  </div>
  <div
    className="sm:w-1/2 md:w-1/3 xl:w-1/4 inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-bell-off mr-2"
    >
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
      <path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path>
      <path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path>
      <path d="M18 8a6 6 0 0 0-9.33-5"></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
    Project Impact Simulation
  </div>
  <div
    className="sm:w-1/2 md:w-1/3 xl:w-1/4 inline-flex items-center mb-2 mr-2 card-subheading   px-3 py-1 bg-white text-black rounded-full"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-bell-off mr-2"
    >
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
      <path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path>
      <path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path>
      <path d="M18 8a6 6 0 0 0-9.33-5"></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
    Task Impact Simulation
  </div>

  </div>
                                <div className="">
                                <div className="flex flex-row justify-between" >
                                <h2 className="mb-1 card-heading ">Users</h2>
                                    <div className="">
                                        <Link href="#_" passHref>
                                    <a  className="inline-flex items-center text-xs pb-1 font-medium text-blue-500 border-b-2 border-gray-200 hover:border-blue-500 group">
                    <span>Detailed View</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </a>
                </Link>
                                    </div>
                                    </div>
                                
                                <p className="flex items-center mb-2 text-gray-600 card-subheading "><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-white rounded-full">
                                <Image src="https://static.thenounproject.com/png/925249-200.png" alt="" width={150} height={150}/>
                                    </span>No.of SAP Customers : Infinite</p>
                                            <p className="flex items-center mb-6 pb-2 text-gray-600 border-b"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-white rounded-full">
                                            <Image src="https://static.thenounproject.com/png/925249-200.png" alt="" width={150} height={150}/></span>No.of SAP Partners : Infinite</p>  
                                </div>







                                <div className="w-full">
                                <button className="inline-flex items-center justify-center w-full px-4 py-1 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"> 
                                        View All Features
                                        <div className="w-4 h-4 ml-2 relative"><Image layout="fill" src="/pricing/down-arrow-svgrepo-com.svg"  alt="down arrow"/></div>
                                    </button>
                                    
                                    <p className="mt-3 text-xs text-center text-gray-500">All plans include a free onboarding call.</p>
                                
                                </div>
                                </details>
                            </div>
                        </div>
                          
                   
                   
                   
                       
                  
                        
                         </div>
                
                </div>
                    <div className="w-2/5">
                    <div className="w-full p-2">
                            

                            <div className="relative flex flex-col  justify-between h-full p-6 overflow-hidden border border-gray-600 bg-gray-100 rounded-lg">
    
                                <div className="flex flex-col w-full">
                                    <h2 className="mb-1 card-heading">Overall</h2>
                                    <h1 className="flex items-center pb-4 mb-4 card-heading text-gray-900 border-b border-gray-200"><span>$10000</span><span className="ml-1 text-lg font-normal text-gray-500">/MO</span></h1>
                                    
                                    <div className="flex py-2 pl-5 pr-0 mb-4 bg-white rounded-lg overflow-hidden flex-row justify-between ">
                                            <div className="flex items-center">
                                                <span className="flex items-center justify-center w-8 h-8 mr-8 bg-transparent rounded-lg">
                                                <Image src="/assets/icons/maps.png" alt="Digital Maps" height={30} width={30}/>
                                                </span>
                                                <h2 className="mb-1 pr-2 card-subheading ">Digital Maps</h2>
                                            </div>
                                            <div>
                                            <button id="hey" className="inline-flex  items-center justify-between mr-2 px-1  py-1 text-xs font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
                                        Unselect   
                                        
                                    </button>
                                            </div>
                                            
                                            </div>
    
                                            <div className="flex py-2 pl-5 pr-0 mb-4 bg-white rounded-lg overflow-hidden flex-row justify-between ">
                                            <div className="flex items-center">
                                                <span className="flex items-center justify-center w-8 h-8 mr-8 bg-transparent rounded-lg">
                                                <Image src="/assets/icons/projects.png" alt="Digital Projects" height={30} width={30}/>
                                                </span>
                                                <h2 className="mb-1 pr-2 card-subheading ">Digital Projects</h2>
                                            </div>
                                            <div>
                                            <button id="hey" className="inline-flex  items-center justify-between mr-2 px-1  py-1 text-xs font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
                                        Unselect   
                                        
                                    </button>
                                            </div>
                                            
                                            </div>
    
                                            <div className="flex py-2 pl-5 pr-0 mb-4 bg-white rounded-lg overflow-hidden flex-row justify-between ">
                                            <div className="flex items-center">
                                                <span className="flex items-center justify-center w-8 h-8 mr-8 bg-transparent rounded-lg">
                                                <Image src="/assets/icons/process.svg" alt="Digital Process" height={30} width={30}/>
                                                </span>
                                                <h2 className="mb-1 pr-2 card-subheading ">Digital Process</h2>
                                            </div>
                                            <div>
                                            <button id="hey" className="inline-flex  items-center justify-between mr-2 px-1  py-1 text-xs font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
                                        Unselect   
                                        
                                    </button>
                                            </div>
                                            
                                            </div>
                                            <div className="flex py-2 pl-5 pr-0 mb-4 bg-white rounded-lg overflow-hidden flex-row justify-between ">
                                            <div className="flex items-center">
                                                <span className="flex items-center justify-center w-8 h-8 mr-8 bg-transparent rounded-lg">
                                                <Image src="/assets/icons/Labs.png" alt="Digital Labs" height={30} width={30}/>
                                                </span>
                                                <h2 className="mb-1 pr-2 card-subheading ">Digital Labs</h2>
                                            </div>
                                            <div>
                                            <button id="hey" className="inline-flex  items-center justify-between mr-2 px-1  py-1 text-xs font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
                                        Unselect   
                                        
                                    </button>
                                            </div>
                                            
                                            </div>
                                            <div className="flex py-2 pl-5 pr-0 mb-4 bg-white rounded-lg overflow-hidden flex-row justify-between ">
                                            <div className="flex items-center">
                                                <span className="flex items-center justify-center w-8 h-8 mr-8 bg-transparent rounded-lg">
                                                <Image src="/assets/icons/Mines.png" alt="Digital Mines" height={30} width={30}/>
                                                </span>
                                                <h2 className="mb-1 pr-2 card-subheading ">Digital Mines</h2>
                                            </div>
                                            <div>
                                            <button id="hey" className="inline-flex  items-center justify-between mr-2 px-1  py-1 text-xs font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
                                        Unselect 
                                        
                                    </button>
                                            </div>
                                            
                                            </div>
                                </div>
                                
                                <div className="w-full">
                                    <button className="inline-flex items-center button  justify-center w-full px-4 py-3 hyperlink text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"> 
                                        Contact Sales
                                        <div className="w-4 h-4 ml-2 relative"><Image layout="fill" src="/pricing/down-arrow-svgrepo-com.svg"  alt="down arrow"/></div>
                                    </button>
                                    <Link href="" passHref>
                        <a  className="flex flex-row justify-center text-center mt-2 py-3 px-8 rounded-r-xl rounded-b-xl  button  ">        
                        <span className="flex items-center justify-center w-5 h-5 bg-transparent rounded-lg ">
                                                <Image src="/assets/icons/upload.png" alt="Digital Mines" height={30} width={30}/>
                                                </span>        
                                <span className="button ">&nbsp;&nbsp;Share Price</span>
                        </a>
                        </Link>
                                
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
                </div>
                
            </section>
           </Layout>
    )
}