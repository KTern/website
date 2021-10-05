import Card from "./card1"       
import Image from "next/image";
import Link from "next/link";
import Card1 from "./card"
import FeatureCard from "./featureCard";
import React, { useState } from 'react';
function openNav () {
    if (process.browser) {
                    console.log("Clicked")
            document.getElementById("navbar-menu").style.display = 'block';
            
        }
    }
function closeNav () {
    if (process.browser) {
        console.log("Clicked as well")
        document.getElementById("navbar-menu").style.display = 'none';
    }
}


export default function Header () {
    // const [ headerNew, changeHeader ] = useState(false);
    const [ isProjectShown, setIsProjectShown ] = useState(true);
    const [ isProcessShown, setIsProcessShown ] = useState(false);
    const [ isMapsShown, setIsMapsShown ] = useState(false);
    const [ isMinesShown, setIsMinesShown ] = useState(false);
    const [ isLabsShown, setIsLabsShown ] = useState(false);
    const [ isWebinarsShown, setIsWebinarsShown ] = useState(true);
    const [ isArticlesShown, setIsArticlesShown ] = useState(false);
    const [ isEbooksShown, setIsEbooksShown ] = useState(false);
    const [ isCaseShown, setIsCaseShown ] = useState(false);
    const [ isTrustShown, setIsTrustShown ] = useState(false);
     const [ isPartnersShown, setIsPartnersShown ] = useState(true);
    const [ isConsultingShown, setIsConsultingShown ] = useState(false);
    const [ isTechnologyShown, setIsTechnologyShown ] = useState(false);
    const [ isBecomeAPartnerShown, setIsBecomeAPartnerShown ] = useState(false);
    const [ isPortalShown, setIsPortalShown ] = useState(false);
    return (
       <section className="container z-50 w-full">      
        {/* <!-- Desktop --> */}
        <nav className="p-0 bg-white  w-full   fixed z-1 shadow-md">
            <div className="flex flex-wrap justify-between items-center">
                    <Link href="/" passHref>
                        <a>
                    <Image className="text-lg font-medium xl:mx-20 " width="148" height="40" src="/assets/KternLogo.png" alt="Ktern Logo"/></a>
                </Link>
                <div className="lg:hidden py-2">
                    <button className="navbar-burger flex items-center p-2 hover:bg-gray-50 rounded" onClick={openNav}>
                          <svg className="block h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                          </svg>
                        </button>
                </div>
                <div className="hidden lg:flex p-0">
                        <ul className=" flex space-x-2 xl:space-x-10">
                        <li className="toggleable  hover:bg-secondary" >    
                            {/* <li className="toggleable hover:bg-secondary " onMouseLeave={() => { setIsLabsShown(false); setIsMinesShown(false); setIsMapsShown(false); setIsProcessShown(false); setIsProjectShown(true) }}> */}
                        <input type="checkbox" value="selected" id="toggle-one" className="toggle-input"/>
                            <label htmlFor="toggle-one"  className="block cursor-pointer py-3 px-2 lg:p-5 header uppercase " onMouseEnter={() => { setIsLabsShown(false); setIsMinesShown(false); setIsMapsShown(false); setIsProcessShown(false); setIsProjectShown(true) }}>Products</label>
                            <div role="toggle" className="p-6  mega-menu mb-16 sm:mb-0 shadow-2xl bg-white  border-2 border-gray-300">
                                <div className=" container mx-auto w-full flex flex-wrap justify-between   mx-2">
                                   <ul className="bg-white px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-300  pb-6 pt-6 lg:pt-3" >
                                        <h3 className="navbar-h text-black text-bold mb-2 uppercase">Streams</h3>
                                        <div >
                                        <li>
                                                    <Link href="/products/digital-projects"    ><a onMouseEnter={() => { setIsLabsShown(false);setIsMinesShown(false);setIsMapsShown(false);setIsProcessShown(false);setIsProjectShown(true)}}
                                         className="navbar-s block p-2 hover:bg-gray-50 text-black ">Digital Projects</a></Link>
                                        </li>
                                        <li>
                                                    <Link href="/products/digital-process"    ><a onMouseEnter={() => { setIsLabsShown(false);setIsMinesShown(false);setIsMapsShown(false);setIsProcessShown(true);setIsProjectShown(false)}}
                                         className="navbar-s block p-2 hover:bg-gray-50 text-black ">Digital Process</a></Link>
                                        </li>
                                        <li>
                                                    <Link href="/products/digital-maps"    ><a onMouseEnter={() => { setIsLabsShown(false);setIsMinesShown(false);setIsMapsShown(true);setIsProcessShown(false);setIsProjectShown(false)}}
                                         className="navbar-s block p-2 hover:bg-gray-50 text-black ">Digital Maps</a></Link>
                                        </li>
                                        <li>
                                                    <Link href="/products/digital-mines"   ><a onMouseEnter={() => { setIsLabsShown(false);setIsMinesShown(true);setIsMapsShown(false);setIsProcessShown(false);setIsProjectShown(false)}}
                                                        className="navbar-s block p-2 hover:bg-gray-50 text-black ">Digital Mines</a></Link>
                                        </li>
                                        <li>
                                        <Link href="/products/digital-labs"   ><a  onMouseEnter={() => { setIsLabsShown(true);setIsMinesShown(false);setIsMapsShown(false);setIsProcessShown(false);setIsProjectShown(false)}}
className="navbar-s block p-2 hover:bg-gray-50 text-black ">Digital Labs</a></Link>
                                        </li>
                                        </div>
                                    </ul>
                                            {isProjectShown && (
                                            <Card data={{title:'Digital Projects',feature1:'Cutover Orchestrator',feature2:'Workflow Wizard',feature3:'Timeline Simulator',feature4:'Collaboration Forum',feature5:'Smart Dashboards',url:'/features/custom-code-remediation',feature_url:'/features/custom-code-remediation',icon:'/assets/icons/Projects.png',class:'bg-project-secondary px-4 w-full sm:w-1/2 lg:w-2/4  pb-6 pt-6 lg:pt-3',feature1_desc:'Cutover orchestration description',feature2_desc:'Feature2 desc',feature3_desc:'Feature3 desc',feature4_desc:'Feature4 desc',feature5_desc:'Feature5 desc',image:'/product/projects/project_team_3.svg'} }/>
                                            )}
                                            {isProcessShown && (
                                            <Card data={{title:'Digital Process',feature1:'Process Orchestrator',feature2:'Custom Code Remediation',feature3:'Materiality Engine',feature4:'Customization Console',feature5:'Training Academy',url:'/features/custom-code-remediation',feature_url:'/features/custom-code-remediation',icon:'/assets/icons/Process.svg',class:'bg-process-secondary px-4 w-full sm:w-1/2 lg:w-2/4  pb-6 pt-6 lg:pt-3',feature1_desc:'Cutover orchestration description',feature2_desc:'Feature2 desc',feature3_desc:'Feature3 desc',feature4_desc:'Feature4 desc',feature5_desc:'Feature5 desc',image:'/product/process/process_1.svg'} }/>  )}
                                             {isMapsShown && (
                                            <Card data={{title:'Digital Maps',feature1:'Fit-Gap Wizards',feature2:'TCO Estimator',feature3:'Roadmap Simulator',feature4:'Risk Predictor',feature5:'Business Case Generator',url:'/features/custom-code-remediation',feature_url:'/features/custom-code-remediation',icon:'/assets/icons/Maps.png',class:'bg-maps-secondary px-4 w-full sm:w-1/2 lg:w-2/4  pb-6 pt-6 lg:pt-3',feature1_desc:'Cutover orchestration description',feature2_desc:'Feature2 desc',feature3_desc:'Feature3 desc',feature4_desc:'Feature4 desc',feature5_desc:'Feature5 desc',image:'/product/maps/maps_1.svg'} }/>  )}
                                             {isMinesShown && (
                                            <Card data={{title:'Digital Mines',feature1:'Process Mining Wizard',feature2:'Process Optimizer',feature3:'ROI Estimator',feature4:'Digital Twin Builder',feature5:'SAP Business-Ops Cockpit',url:'/features/custom-code-remediation',feature_url:'/features/custom-code-remediation',icon:'/assets/icons/Mines.png',class:'bg-mines-secondary px-4 w-full sm:w-1/2 lg:w-2/4  pb-6 pt-6 lg:pt-3',feature1_desc:'Cutover orchestration description',feature2_desc:'Feature2 desc',feature3_desc:'Feature3 desc',feature4_desc:'Feature4 desc',feature5_desc:'Feature5 desc',image:'/product/mines/mines_1.svg'} }/>  )}
                                             {isLabsShown && (
                                            <Card data={{title:'Digital Labs',feature1:'SAP Test Case Finder',feature2:'Test Run Bots',feature3:'Defect Wizards',feature4:'Intelligent Reports',feature5:'Autonomous Test Console',url:'/features/custom-code-remediation',feature_url:'/features/custom-code-remediation',icon:'/assets/icons/Labs.png',class:'bg-labs-secondary px-4 w-full sm:w-1/2 lg:w-2/4  pb-6 pt-6 lg:pt-3',feature1_desc:'Cutover orchestration description',feature2_desc:'Feature2 desc',feature3_desc:'Feature3 desc',feature4_desc:'Feature4 desc',feature5_desc:'Feature5 desc',image:'/product/labs/labs_1.svg'} }/> )}
                                   
                                               </div>
                            </div>
                        </li>
                            <li className="toggleable hover:bg-secondary " >
                                 <input type="checkbox" value="selected" id="toggle-resources" className="toggle-input"/>
                            <label htmlFor="toggle-resources" className="block cursor-pointer py-3 px-2 lg:p-5 header uppercase " onMouseLeave={()=>{setIsArticlesShown(false);setIsTrustShown(false);setIsEbooksShown(false);setIsCaseShown(false);setIsWebinarsShown(true)}}>Resources</label>
                            <div role="toggle" className="p-2  mega-menu mb-16 sm:mb-0 shadow-2xl bg-white  border-2 border-gray-300">
                                <div className=" container mx-auto w-full flex flex-wrap justify-between   mx-2">
                                   <ul className="bg-white px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-300  pb-6 pt-6 lg:pt-3" >
                                        <h3 className="navbar-h uppercase text-black text-bold mb-2">Resources</h3>
                                        <div >
                                        <li>
                                                    <Link href="/webinars"    ><a onMouseEnter={()=>{setIsArticlesShown(false);setIsTrustShown(false);setIsEbooksShown(false);setIsCaseShown(false);setIsWebinarsShown(true)}}
                                         className="navbar-s block p-2 hover:bg-gray-50 text-black ">Webinars</a></Link>
                                        </li>
                                        <li>
                                                    <Link href="/"    ><a onMouseEnter={()=>{setIsArticlesShown(true);setIsTrustShown(false);setIsEbooksShown(false);setIsCaseShown(false);setIsWebinarsShown(false)}}
                                         className="navbar-s block p-2 hover:bg-gray-50 text-black ">Articles</a></Link>
                                        </li>
                                        <li>
                                                    <Link href="/resources/ebook"    ><a onMouseEnter={()=>{setIsArticlesShown(false);setIsTrustShown(false);setIsEbooksShown(true);setIsCaseShown(false);setIsWebinarsShown(false)}}
                                         className="navbar-s block p-2 hover:bg-gray-50 text-black ">Ebooks</a></Link>
                                        </li>
                                        <li>
                                                    <Link href="/resources/case-study"   ><a onMouseEnter={()=>{setIsArticlesShown(false);setIsTrustShown(false);setIsEbooksShown(false);setIsCaseShown(true);setIsWebinarsShown(false)}}
                                                        className="navbar-s block p-2 hover:bg-gray-50 text-black ">Case study</a></Link>
                                        </li>
                                        <li>
                                        <Link href="/trust-center"   ><a onMouseEnter={()=>{setIsArticlesShown(false);setIsTrustShown(true);setIsEbooksShown(false);setIsCaseShown(false);setIsWebinarsShown(false)}} 
className="navbar-s block p-2 hover:bg-gray-50 text-black ">Trust Center</a></Link>
                                                </li>
                                                 <li className="mt-4 mx-2">
                        <Link href='/resources' passHref>
                 <a className="inline-flex items-center pb-1  text-black hover:border-blue-500 group ">
                 <span className="hyperlink group-hover:text-gray-400">See All Resources</span>
                 <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                 </svg>
                 </a>
             </Link> </li> 
                                        </div>
                                        </ul>
                                        <div className="w-2/3">
                                            {isWebinarsShown && (
                                            <FeatureCard data={{title:'Webinar',description:'Webinar 1 desc',url:'/webinars/webinar-1',image:'/product/projects/project_team_3.svg'} }/>
                                            )}
                                            {isArticlesShown && (
                                            <FeatureCard data={{title:'Article',description:'Article 1 desc',url:'',image:'/product/process/process_1.svg'} }/>  )}
                                             {isEbooksShown && (
                                            <FeatureCard data={{title:'Ebook',description:'Ebook 1 desc',url:'/resources/ebook',image:'/product/maps/maps_1.svg'} }/>  )}
                                             {isCaseShown && (
                                            <FeatureCard data={{title:'Case Study',description:'Case Study 1 desc',url:'/resources/case-study',image:'/product/mines/mines_1.svg'} }/>  )}
                                             {isTrustShown && (
                                            <FeatureCard data={{title:'Trust Center',description:'Trust Center 1 desc',url:'/trust-center',image:'/product/labs/labs_1.svg'} }/> )}
                                        </div>
                                </div>
                            </div>
                        </li>
                      
                            <li className="toggleable hover:bg-secondary " >
                                 <input type="checkbox" value="selected" id="toggle-partners" className="toggle-input"/>
                            <label htmlFor="toggle-partners" className="block cursor-pointer py-3 px-2 lg:p-5 header uppercase " onMouseLeave={()=>{setIsConsultingShown(false);setIsPortalShown(false);setIsTechnologyShown(false);setIsBecomeAPartnerShown(false);setIsPartnersShown(true)}}>Partners</label>
                            <div role="toggle" className="p-2  mega-menu mb-16 sm:mb-0 shadow-2xl bg-white  border-2 border-gray-300">
                                <div className=" container mx-auto w-full flex flex-wrap justify-between   mx-2">
                                   <ul className="bg-white px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-300  pb-6 pt-6 lg:pt-3" >
                                        <h3 className="navbar-h  uppercase text-black text-bold mb-2">Partners</h3>
                                        <div >
                                        <li>
                                                    <Link href="/partners"    ><a onMouseEnter={()=>{setIsConsultingShown(false);setIsPortalShown(false);setIsTechnologyShown(false);setIsBecomeAPartnerShown(false);setIsPartnersShown(true)}}
                                         className="navbar-s block p-2 hover:bg-gray-50 text-black ">Partners</a></Link>
                                        </li>
                                        <li>
                                                    <Link href="/consulting-partner"    ><a onMouseEnter={()=>{setIsConsultingShown(true);setIsPortalShown(false);setIsTechnologyShown(false);setIsBecomeAPartnerShown(false);setIsPartnersShown(false)}}
                                         className="navbar-s block p-2 hover:bg-gray-50 text-black ">Consulting Partners</a></Link>
                                        </li>
                                        <li>
                                                    <Link href="/technology-partner"    ><a onMouseEnter={()=>{setIsConsultingShown(false);setIsPortalShown(false);setIsTechnologyShown(true);setIsBecomeAPartnerShown(false);setIsPartnersShown(false)}}
                                         className="navbar-s block p-2 hover:bg-gray-50 text-black ">Technology Partners</a></Link>
                                        </li>
                                        <li>
                                                    <Link href="/become-a-partner"   ><a onMouseEnter={()=>{setIsConsultingShown(false);setIsPortalShown(false);setIsTechnologyShown(false);setIsBecomeAPartnerShown(true);setIsPartnersShown(false)}}
                                                        className="navbar-s block p-2 hover:bg-gray-50 text-black ">Become A Partner</a></Link>
                                        </li>
                                        <li>
                                        <Link href="/"   ><a onMouseEnter={()=>{setIsConsultingShown(false);setIsPortalShown(true);setIsTechnologyShown(false);setIsBecomeAPartnerShown(false);setIsPartnersShown(false)}} 
className="navbar-s block p-2 hover:bg-gray-50 text-black ">Partner Portal</a></Link>
                                                </li>
                                                 <li className="mt-4 mx-2">
                         </li> 
                                        </div>
                                        </ul>
                                        <div className="w-2/3">
                                            {isPartnersShown && (
                                            <FeatureCard data={{title:'Partner',description:'Partner 1 desc',url:'/partners',image:'/partner/partner-hand.jpg'} }/>
                                            )}
                                            {isConsultingShown && (
                                            <FeatureCard data={{title:'Consulting Partner',description:'Consulting Partner desc',url:'/consulting-partner',image:'/partner/partner-hand.jpg'} }/>  )}
                                             {isTechnologyShown && (
                                            <FeatureCard data={{title:'Technology Parter',description:'Technology Parter desc',url:'/technology-partner',image:'/partner/partner-hand.jpg'} }/>  )}
                                             {isBecomeAPartnerShown && (
                                            <FeatureCard data={{title:'Become a Partner',description:'Become a Partner desc',url:'/become-a-partner',image:'/partner/partner-hand.jpg'} }/>  )}
                                             {isPortalShown && (
                                            <FeatureCard data={{title:'Partner Portal',description:'Partner Portal desc',url:'/',image:'/partner/partner-hand.jpg'} }/> )}
                                        </div>
                                               </div>
                            </div>
                        </li>
                     
                        <li className="toggleable hover:bg-secondary ">
                        <Link href="/about" ><a className="block cursor-pointer py-3 px-4 lg:p-5 header uppercase ">Company</a></Link>
                        </li>
                    </ul>
               </div>
                <div className=" hidden lg:block flex-end xl:mx-20 lg:my-auto mr-4">
                    <Link  href="/contact"><a className="hidden mb-1 lg:inline-block py-2 px-6 bg-black hover:bg-gray-300 hover:text-black shadow  text-white  rounded-r-xl button rounded-b-xl transition duration-200 ">Contact Sales</a></Link>
                </div>
            </div>
        </nav>

        {/* <!-- Mobile --> */}
        <div id="navbar-menu" className="py-20 z-50 hidden relative bg-black">
            <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
            <nav  className="py-5  nav fixed top-0 left-0 bottom-0 flex flex-col w-full max-w-sm  px-6 bg-white border-r overflow-y-auto">
                <div className="flex items-center justify-between mb-8">
                        <Link  href="/" passHref>
                            <a className="mr-auto text-2xl font-medium leading-none cursor-pointer">
                        <Image  src="/assets/kternLogo.png" alt="Ktern Logo" width="100%" height="30%"/>
                        </a>
                    </Link>
                    <button className="navbar-close" onClick={closeNav}>
                        <svg className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div>
                    <ul>
                    <li className="toggleable hover:bg-secondary ">
                        <input type="checkbox" value="selected" id="toggle-one" className="toggle-input "/>
                            <label htmlFor="toggle-one" className="block cursor-pointer py-6 px-4 lg:p-6 header " onMouseEnter={() => setIsProjectShown(true)}>Products</label>
                            <div role="toggle" className="p-6  mega-menu mb-16 sm:mb-0 shadow-2xl bg-white  border-2 border-gray-300">
                                <div className=" container mx-auto w-full flex flex-wrap justify-between bg-secondary  mx-2"> 
                                    <ul className="bg-white px-4 w-full  lg:w-1/4 border-gray-300 lg:border-b lg:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                        <h3 className="navbar-h uppercase text-black text-bold mb-2">Digital Streams</h3>
                                              <li className="hover:bg-secondary ">
                                                <input type="checkbox" value="selected" id="toggle-two" className="toggle-input "/>
                                                    <label htmlFor="toggle-two" className="block cursor-pointer py-2 lg:p-6  " onMouseEnter={() => setIsProjectShown(true)}>Digital Maps</label>
                                                    <div role="toggle" className="p-6  mega-menu mb-16 sm:mb-0 shadow-2xl bg-white  border-2 border-gray-300">
                                                        <div className=" container mx-auto w-full flex flex-wrap justify-between bg-secondary  mx-2"> 
                                                            <Card1 data={{ title: 'Digital Maps', feature1: 'Feature 1', feature2: 'Feature 2', feature3: 'Feature 3', feature4: 'Feature 4', feature5: 'Feature 5', url: '/features/custom-code-remediation' }} />       
                                                        </div>
                                                    </div>
                                                </li>
                     
                                            <li className=" hover:bg-secondary ">
                                                <input type="checkbox" value="selected" id="toggle-three" className="toggle-input "/>
                                                    <label htmlFor="toggle-three" className="block cursor-pointer py-2 lg:p-6  " onMouseEnter={() => setIsProjectShown(true)}>Digital Labs</label>
                                                    <div role="toggle" className="p-6  mega-menu mb-16 sm:mb-0 shadow-2xl bg-white  border-2 border-gray-300">
                                                        <div className=" container mx-auto w-full flex flex-wrap justify-between bg-secondary  mx-2"> 
                                                            <Card1 data={{ title: 'Digital Labs', feature1: 'Feature 1', feature2: 'Feature 2', feature3: 'Feature 3', feature4: 'Feature 4', feature5: 'Feature 5', url: '/features/custom-code-remediation' }} />       
                                                        </div>
                                                    </div>
                                                </li>
                                        <li className="hover:bg-secondary ">
                                                <input type="checkbox" value="selected" id="toggle-four" className="toggle-input "/>
                                                    <label htmlFor="toggle-four" className="block cursor-pointer py-2 lg:p-6  " onMouseEnter={() => setIsProjectShown(true)}>Digital Projects</label>
                                                    <div role="toggle" className="p-6  mega-menu mb-16 sm:mb-0 shadow-2xl bg-white  border-2 border-gray-300">
                                                        <div className=" container mx-auto w-full flex flex-wrap justify-between bg-secondary  mx-2"> 
                                                            <Card1 data={{ title: 'Digital Projects', feature1: 'Feature 1', feature2: 'Feature 2', feature3: 'Feature 3', feature4: 'Feature 4', feature5: 'Feature 5', url: '/features/custom-code-remediation' }} />       
                                                        </div>
                                                    </div>
                                                </li>
                                        <li className=" hover:bg-secondary ">
                                                <input type="checkbox" value="selected" id="toggle-five" className="toggle-input "/>
                                                    <label htmlFor="toggle-five" className="block cursor-pointer py-2 lg:p-6  " onMouseEnter={() => setIsProjectShown(true)}>Digital Process</label>
                                                    <div role="toggle" className="p-6  mega-menu mb-16 sm:mb-0 shadow-2xl bg-white  border-2 border-gray-300">
                                                        <div className=" container mx-auto w-full flex flex-wrap justify-between bg-secondary  mx-2"> 
                                                            <Card1 data={{ title: 'Digital Process', feature1: 'Feature 1', feature2: 'Feature 2', feature3: 'Feature 3', feature4: 'Feature 4', feature5: 'Feature 5', url: '/features/custom-code-remediation' }} />       
                                                        </div>
                                                    </div>
                                                </li>
                                        <li className="toggleable hover:bg-secondary ">
                                                <input type="checkbox" value="selected" id="toggle-six" className="toggle-input "/>
                                                    <label htmlFor="toggle-six" className="block cursor-pointer py-2 lg:p-6  " onMouseEnter={() => setIsProjectShown(true)}>Digital Mines</label>
                                                    <div role="toggle" className="p-6  mega-menu mb-16 sm:mb-0 shadow-2xl bg-white  border-2 border-gray-300">
                                                        <div className=" container mx-auto w-full flex flex-wrap justify-between bg-secondary  mx-2"> 
                                                            <Card1 data={{ title: 'Digital Mines', feature1: 'Feature 1', feature2: 'Feature 2', feature3: 'Feature 3', feature4: 'Feature 4', feature5: 'Feature 5', url: '/features/custom-code-remediation' }} />       
                                                        </div>
                                                    </div>
                                                </li>   
                                    </ul>
                                    
                                        {isProjectShown && (
                                            <div role="toggle" className="p-6  mega-menu mb-16 sm:mb-0 shadow-2xl bg-white  border-2 border-gray-300">
                                <div className=" container mx-auto w-full flex flex-wrap justify-between bg-secondary  mx-2"> 
                                                    <Card1 data={{ title: 'Digital Projects', feature1: 'Feature 1', feature2: 'Feature 2', feature3: 'Feature 3', feature4: 'Feature 4', feature5: 'Feature 5', url: '/features/custom-code-remediation' }} />
                                                    </div>
                                                    </div>
                                            )}
                                        {isProcessShown && (
                                            <div role="toggle" className="p-6  mega-menu mb-16 sm:mb-0 shadow-2xl bg-white  border-2 border-gray-300">
                                <div className=" container mx-auto w-full flex flex-wrap justify-between bg-secondary  mx-2"> 
                                                    <Card1 data={{ title: 'Digital Process', feature1: 'Feature 1', feature2: 'Feature 2', feature3: 'Feature 3', feature4: 'Feature 4', feature5: 'Feature 5', url: '/features/custom-code-remediation' }} />  
                                            </div></div>)}
                                             {isMapsShown && (
                                            <Card1 data={{title:'Digital Maps',feature1:'Feature 1',feature2:'Feature 2',feature3:'Feature 3',feature4:'Feature 4',feature5:'Feature 5',url:'/features/custom-code-remediation'} }/>  )}
                                             {isMinesShown && (
                                            <Card1 data={{title:'Digital Mines',feature1:'Feature 1',feature2:'Feature 2',feature3:'Feature 3',feature4:'Feature 4',feature5:'Feature 5',url:'/features/custom-code-remediation'} }/>  )}
                                             {isLabsShown && (
                                            <Card1 data={{title:'Digital Labs',feature1:'Feature 1',feature2:'Feature 2',feature3:'Feature 3',feature4:'Feature 4',feature5:'Feature 5',url:'/features/custom-code-remediation'} }/> )}
                                   
                                </div>
                            </div>
                        </li>
                        <li className="hoverable hover:bg-secondary ">
                         <Link htmlFor="toggle-one" href="/resources" ><a className="block cursor-pointer py-6 px-4 lg:p-6 hyperlink ">Resources</a></Link>
                        </li>
                        <li className="hoverable hover:bg-secondary ">
                        <Link htmlFor="toggle-one" href="/resources" ><a className="block cursor-pointer py-6 px-4 lg:p-6 hyperlink ">Partners</a></Link>
                        </li>
                        <li className="hoverable hover:bg-secondary ">
                        <Link htmlFor="toggle-one" href="/partners" ><a className="block cursor-pointer py-6 px-4 lg:p-6 hyperlink ">Company</a></Link>
                        </li>
                     </ul>
                </div>
                <div className="pt-6 flex-col space-y-6">
                 
                    <Link  href="/contact"><a className="inline-block py-2 px-6 bg-black hover:bg-gray-300 hover:text-black shadow text-sm text-white  rounded-r-xl rounded-b-xl transition duration-200 uppercase">Contact Sales</a></Link>
                </div>
                <div className="mt-auto">

                    <p className="mt-6 mb-4 text-sm text-center text-gray-500">
                        <span>© 2021 All rights reserved.</span>
                    </p>
                </div>
            </nav>
        </div>
    </section>
)
 
}
  