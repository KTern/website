import Card from "./card1"       
import Image from "next/image";
import Link from "next/link";
import Card1 from "./card"
import FeatureCard from "./featureCard";
import React, { useState, useRef, useEffect } from 'react';
import DoubleBanner from "./doubleBanner"
import { useRouter } from 'next/router'
function openNav () {
    if (process.browser) {
                    // console.log("Clicked")
            document.getElementById("navbar-menu").style.display = 'block';
            
        }
    }
function closeNav () {
    if (process.browser) {
        // console.log("Clicked as well")
        document.getElementById("navbar-menu").style.display = 'none';
    }
}

function useOutsideAlerter (ref) {
    
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside (event) {
            if (ref.current && !ref.current.contains(event.target)) {
             
                document.getElementById('toggle-1').style.display = "none";
                  document.getElementById('toggle-2').style.display = "none";
                 document.getElementById('toggle-3').style.display = "none";
            }
        
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}
function checkAll (a, b) {
    if (document.getElementById(a).style.display == "block") {
         document.getElementById(a).style.display = "none";
    }
     if (document.getElementById(b).style.display == "block") {
         document.getElementById(b).style.display = "none";
    }
}
function useProducts () {
     const ref = useRef();
  const [ready, setReady] = useState(false);

    useEffect(() => {
        function handleClickOutside (event) {
            // console.log(event.target.tagName.toLowerCase() === 'a')
           
            if (ref.current.contains(event.target) && event.target.tagName.toLowerCase() != 'a') {
                
               
                if (document.getElementById('toggle-1').style.display == "block") {
                    document.getElementById('toggle-1').style.display = "none";
                    document.getElementById('toggle-2').style.display = "none";
                    document.getElementById('toggle-3').style.display = "none";
                   
                }
                else {
                    checkAll('toggle-2','toggle-3');
                    document.getElementById('toggle-1').style.display = "block";
                  
                }
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
  }, [ref.current]);

  return [ref, ready];
}
function useResources () {
     const ref = useRef();
  const [ready, setReady] = useState(false);
  useEffect(() => {
    function handleClickOutside (event) {
            if (ref.current.contains(event.target) && event.target.tagName.toLowerCase() != 'a') {
               
               
                if (document.getElementById('toggle-2').style.display == "block") {
                    document.getElementById('toggle-1').style.display = "none";
                    document.getElementById('toggle-2').style.display = "none";
                    document.getElementById('toggle-3').style.display = "none";
                   
                }
                else {
                     checkAll('toggle-1','toggle-3');
                    document.getElementById('toggle-2').style.display = "block";
                  
                }
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
  }, [ref.current]);

  return [ref, ready];
}
function usePartners () {
     const ref = useRef();
  const [ready, setReady] = useState(false);

  useEffect(() => {
     function handleClickOutside (event) {
            if (ref.current.contains(event.target) && event.target.tagName.toLowerCase() != 'a') {
               
               
                if (document.getElementById('toggle-3').style.display == "block") {
                    document.getElementById('toggle-1').style.display = "none";
                    document.getElementById('toggle-2').style.display = "none";
                    document.getElementById('toggle-3').style.display = "none";
                   
                }
                else {
                     checkAll('toggle-1','toggle-2');
                    document.getElementById('toggle-3').style.display = "block";
                  
                }
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
  }, [ref.current]);

  return [ref, ready];
}
export default function Header ({header_data}) {
    const router = useRouter();
   
    const overall = useRef(null);
    useOutsideAlerter(overall)
    const [ products,productReady] = useProducts();
    const [ resources, resourceReady ] = useResources();
    const [ partners, partnersReady ] = usePartners();
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
    const [ isResourceLibraryShown, setIsResourceLibraryShown ] = useState(false);
    const [ isPricingShown, setIsPricingShown ] = useState(false);
    const [ isDocumentationShown, setIsDocumentationShown ] = useState(false);
    const [ isCloudLiveShown, setIsCloudLiveShown ] = useState(false);
    const [ isVisible, setIsVisible ] = useState(true);
    const [ isOpen, setIsOpen ] = useState(true);
    // console.log(router.pathname==='/')
   
    const listenToScroll = () => {
  let heightToHideFrom = 0;
  const winScroll = document.body.scrollTop || 
      document.documentElement.scrollTop;
     
  if (winScroll > heightToHideFrom) { 
     isVisible &&      // to limit setting state only the first time         
          setIsVisible(false);
  } else {
    //   console.log(isOpen)
      if(isOpen)
       setIsVisible(true);
  }  
};
    useEffect(() => {   
  window.addEventListener("scroll", listenToScroll);
  return () => 
     window.removeEventListener("scroll", listenToScroll); 
    }, [])
    
    return (
        
       <section className=" z-50 w-full " ref={overall}>      
            {/* <!-- Desktop --> */}
          
            <nav className="p-0 bg-white  w-full   fixed z-1 shadow-md">
                {isVisible && isOpen && (router.pathname==='/') &&
                    <div className="flex sm:hidden">
                    <div id="banner" className="  w-full h-10 bg-black text-white flex items-center text-center justify-center ">Lorem ipsum dolor sit amet consectetur, adipisicing elit.&nbsp;
                        <Link href="/" passHref>
                    <a className="inline-flex items-center  text-white hover:border-blue-500 group hyperlink group-hover:text-gray-100">Learn More
                    <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </a>
                    </Link>
                     
                    </div>
                    <button className="navbar-close justify-end bg-black pr-5" onClick={()=>setIsOpen(false)}>
                        <svg className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    </div>
                }

            <div className="flex flex-wrap justify-between items-center">
                    <div className="hidden lg:block">
                    <Link href="/" passHref>
                        <a>
                    <Image className="text-lg font-medium xl:mx-20 " width="148" height="40" src="/assets/KternLogo.png" alt="Ktern Logo"/></a>
                    </Link>
                    </div>
                    <div className="hidden sm:block">
                     <Link  href="/" passHref>
                            <a className="mx-6 hidden sm:block mr-auto text-2xl font-medium leading-none cursor-pointer">
                        <Image  src="/assets/kternLogo.png" alt="Ktern Logo" width="100%" height="30%"/>
                        </a>
                    </Link>
                    </div>
                <div className="lg:hidden py-2">
                    <button className="navbar-burger flex items-center mr-5 p-2 hover:bg-gray-50 rounded" onClick={openNav}>
                          <svg className="block h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                          </svg>
                        </button>
                </div>
                <div className="hidden lg:flex p-0">
                        <ul className=" flex space-x-2 xl:space-x-10">
                        <li className="toggleable  hover:bg-secondary  " ref={products}>    
                            {/* <li className="toggleable  " onMouseLeave={() => { setIsLabsShown(false); setIsMinesShown(false); setIsMapsShown(false); setIsProcessShown(false); setIsProjectShown(true) }}> */}
                        <input type="checkbox" value="selected" id="toggle-one" className="toggle-input"/>
                            <label htmlFor="toggle-one" id="label"  className="block cursor-pointer py-3 px-2 lg:p-5 header  " onMouseEnter={() => { setIsLabsShown(false); setIsMinesShown(false); setIsMapsShown(true); setIsProcessShown(false); setIsProjectShown(false) }}>Products</label>
                            <div id="toggle-1" role="toggle" className="p-6  mega-menu mb-16 sm:mb-0 shadow-2xl bg-white  border-2 border-gray-300">
                                <div className=" container mx-auto w-full flex flex-wrap justify-between   mx-2">
                                   <ul className="bg-white px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-300  pb-6 pt-6 lg:pt-3" >
                                        <h3 className="navbar-h text-black text-bold mb-2 uppercase">Streams</h3>
                                            <div >
                                                <li>
                                                    <Link href="/digital-maps"    ><a onMouseEnter={() => { setIsLabsShown(false);setIsMinesShown(false);setIsMapsShown(true);setIsProcessShown(false);setIsProjectShown(false)}}
                                         className="navbar-s block p-2 hover:bg-gray-50 text-black ">Digital Maps</a></Link>
                                        </li>
                                        <li>
                                                    <Link href="/digital-projects"    ><a onMouseEnter={() => { setIsLabsShown(false);setIsMinesShown(false);setIsMapsShown(false);setIsProcessShown(false);setIsProjectShown(true)}}
                                         className="navbar-s block p-2 hover:bg-gray-50 text-black ">Digital Projects</a></Link>
                                        </li>
                                        <li>
                                                    <Link href="/digital-process"    ><a onMouseEnter={() => { setIsLabsShown(false);setIsMinesShown(false);setIsMapsShown(false);setIsProcessShown(true);setIsProjectShown(false)}}
                                         className="navbar-s block p-2 hover:bg-gray-50 text-black ">Digital Process</a></Link>
                                        </li>
                                         <li>
                                        <Link href="/digital-labs"   ><a  onMouseEnter={() => { setIsLabsShown(true);setIsMinesShown(false);setIsMapsShown(false);setIsProcessShown(false);setIsProjectShown(false)}}
className="navbar-s block p-2 hover:bg-gray-50 text-black ">Digital Labs</a></Link>
                                        </li>
                                        <li>
                                                    <Link href="/digital-mines"   ><a onMouseEnter={() => { setIsLabsShown(false);setIsMinesShown(true);setIsMapsShown(false);setIsProcessShown(false);setIsProjectShown(false)}}
                                                        className="navbar-s block p-2 hover:bg-gray-50 text-black ">Digital Mines</a></Link>
                                        </li>
                                       
                                        
                                    <li className="mt-4 mx-2">
                        <Link href='/pricing' passHref>
                 <a className="inline-flex items-center pb-1  text-black hover:border-blue-500 group hyperlink group-hover:text-gray-400">See Pricing
                 <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                 </svg>
                 </a>
             </Link> </li>  
                                            
                                            
                                            
                                            </div>
                                        </ul>
                                        
                                            {isProjectShown && (
                                            <Card id="toggle-1" data={{title:'Digital Projects',feature1:'Cutover Orchestrator',feature2:'Workflow Wizard',feature3:'Timeline Simulator',feature4:'Collaboration Forum',feature5:'Smart Dashboards',url:'/features/custom-code-remediation',feature_url:'/features/custom-code-remediation',icon:'/assets/icons/Projects.png',class:'bg-project-secondary px-4 w-full sm:w-1/2 lg:w-2/4  pb-6 pt-6 lg:pt-3',feature1_desc:'Cutover orchestration description',feature2_desc:'Feature2 desc',feature3_desc:'Feature3 desc',feature4_desc:'Feature4 desc',feature5_desc:'Feature5 desc',image:'/product/projects/project_team_3.svg'} }/>
                                            )}
                                            {isProcessShown && (
                                            <Card id="toggle-1" data={{title:'Digital Process',feature1:'Process Orchestrator',feature2:'Custom Code Remediation',feature3:'Materiality Engine',feature4:'Customization Console',feature5:'Training Academy',url:'/features/custom-code-remediation',feature_url:'/features/custom-code-remediation',icon:'/assets/icons/Process.svg',class:'bg-process-secondary px-4 w-full sm:w-1/2 lg:w-2/4  pb-6 pt-6 lg:pt-3',feature1_desc:'Cutover orchestration description',feature2_desc:'Feature2 desc',feature3_desc:'Feature3 desc',feature4_desc:'Feature4 desc',feature5_desc:'Feature5 desc',image:'/product/process/process_1.svg'} }/>  )}
                                             {isMapsShown && (
                                            <Card id="toggle-1" data={{title:'Digital Maps',feature1:'Fit-Gap Wizards',feature2:'TCO Estimator',feature3:'Roadmap Simulator',feature4:'Risk Predictor',feature5:'Business Case Generator',url:'/features/custom-code-remediation',feature_url:'/features/custom-code-remediation',icon:'/assets/icons/Maps.png',class:'bg-maps-secondary px-4 w-full sm:w-1/2 lg:w-2/4  pb-6 pt-6 lg:pt-3',feature1_desc:'Cutover orchestration description',feature2_desc:'Feature2 desc',feature3_desc:'Feature3 desc',feature4_desc:'Feature4 desc',feature5_desc:'Feature5 desc',image:'/product/maps/maps_1.svg'} }/>  )}
                                             {isMinesShown && (
                                            <Card id="toggle-1" data={{title:'Digital Mines',feature1:'Process Mining Wizard',feature2:'Process Optimizer',feature3:'ROI Estimator',feature4:'Digital Twin Builder',feature5:'SAP Business-Ops Cockpit',url:'/features/custom-code-remediation',feature_url:'/features/custom-code-remediation',icon:'/assets/icons/Mines.png',class:'bg-mines-secondary px-4 w-full sm:w-1/2 lg:w-2/4  pb-6 pt-6 lg:pt-3',feature1_desc:'Cutover orchestration description',feature2_desc:'Feature2 desc',feature3_desc:'Feature3 desc',feature4_desc:'Feature4 desc',feature5_desc:'Feature5 desc',image:'/product/mines/mines_1.svg'} }/>  )}
                                             {isLabsShown && (
                                            <Card id="toggle-1" data={{title:'Digital Labs',feature1:'SAP Test Case Finder',feature2:'Test Run Bots',feature3:'Defect Wizards',feature4:'Intelligent Reports',feature5:'Autonomous Test Console',url:'/features/custom-code-remediation',feature_url:'/features/custom-code-remediation',icon:'/assets/icons/Labs.png',class:'bg-labs-secondary px-4 w-full sm:w-1/2 lg:w-2/4  pb-6 pt-6 lg:pt-3',feature1_desc:'Cutover orchestration description',feature2_desc:'Feature2 desc',feature3_desc:'Feature3 desc',feature4_desc:'Feature4 desc',feature5_desc:'Feature5 desc',image:'/product/labs/labs_1.svg'} }/> )}
                                   
                                </div>
                            </div>
                        </li>
                        <li className="toggleable  hover:bg-secondary" ref={resources} >
                                 <input type="checkbox" value="selected" id="toggle-resources" className="toggle-input"/>
                            <label htmlFor="toggle-resources" className="block cursor-pointer py-3 px-2 lg:p-5 header  " onMouseEnter={()=>{setIsDocumentationShown(false);setIsPricingShown(false); setIsCloudLiveShown(false);setIsResourceLibraryShown(true);setIsArticlesShown(false);setIsTrustShown(false);setIsEbooksShown(false);setIsCaseShown(false);setIsWebinarsShown(false)}}>Resources</label>
                            <div id="toggle-2" role="toggle" className="p-2  mega-menu mb-16 sm:mb-0 shadow-2xl bg-white  border-2 border-gray-300">
                                <div className=" container mx-auto w-full flex flex-wrap justify-between   mx-2">
                                   <ul className="bg-white px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-300  pb-6 pt-6 lg:pt-3" >
                                        <h3 className="navbar-h uppercase text-black text-bold mb-2">Resources</h3>
                                      
                                            <div >
                                                  <li>
                                                    <Link href="/resources"    ><a onMouseEnter={() => {setIsDocumentationShown(false);setIsPricingShown(false); setIsCloudLiveShown(false);setIsResourceLibraryShown(true);setIsArticlesShown(false);setIsTrustShown(false);setIsEbooksShown(false);setIsCaseShown(false);setIsWebinarsShown(false)}}
                                         className="navbar-s block p-2 hover:bg-gray-50 text-black ">Resource Library</a></Link>
                                        </li>
                                        <li>
                                                    <Link href="/webinars"    ><a onMouseEnter={()=>{setIsDocumentationShown(false);setIsPricingShown(false);setIsCloudLiveShown(false); setIsResourceLibraryShown(false);setIsArticlesShown(false);setIsTrustShown(false);setIsEbooksShown(false);setIsCaseShown(false);setIsWebinarsShown(true)}}
                                         className="navbar-s block p-2 hover:bg-gray-50 text-black ">Webinars</a></Link>
                                        </li>
                                        <li>
                                                    <Link href="/article/"   ><a target="_blank"  onMouseEnter={()=>{setIsDocumentationShown(false);setIsPricingShown(false);setIsCloudLiveShown(false);setIsResourceLibraryShown(false);setIsArticlesShown(true);setIsTrustShown(false);setIsEbooksShown(false);setIsCaseShown(false);setIsWebinarsShown(false)}}
                                         className="navbar-s block p-2 hover:bg-gray-50 text-black ">Articles</a></Link>
                                        </li>
                                        <li>
                                                    <Link href="/resources"    ><a onMouseEnter={()=>{setIsDocumentationShown(false);setIsPricingShown(false);setIsCloudLiveShown(false);setIsResourceLibraryShown(false);setIsArticlesShown(false);setIsTrustShown(false);setIsEbooksShown(true);setIsCaseShown(false);setIsWebinarsShown(false)}}
                                         className="navbar-s block p-2 hover:bg-gray-50 text-black ">E-Books</a></Link>
                                        </li>
                                        <li>
                                                    <Link href="/resources"   ><a onMouseEnter={()=>{setIsDocumentationShown(false);setIsPricingShown(false);setIsCloudLiveShown(false);setIsResourceLibraryShown(false);setIsArticlesShown(false);setIsTrustShown(false);setIsEbooksShown(false);setIsCaseShown(true);setIsWebinarsShown(false)}}
                                                        className="navbar-s block p-2 hover:bg-gray-50 text-black ">Customer Success Stories</a></Link>
                                        </li>
                                        <li>
                                        <Link href="/trust-center"   ><a onMouseEnter={()=>{setIsDocumentationShown(false);setIsPricingShown(false);setIsCloudLiveShown(false);setIsResourceLibraryShown(false);setIsArticlesShown(false);setIsTrustShown(true);setIsEbooksShown(false);setIsCaseShown(false);setIsWebinarsShown(false)}} 
className="navbar-s block p-2 hover:bg-gray-50 text-black ">Trust Center</a></Link>
                                                </li>
                                                 <li>
                                                    <Link href="/pricing"   ><a onMouseEnter={() => {setIsDocumentationShown(false);setIsCloudLiveShown(false); setIsPricingShown(true);setIsResourceLibraryShown(false);setIsArticlesShown(false);setIsTrustShown(false);setIsEbooksShown(false);setIsCaseShown(false);setIsWebinarsShown(false)}}
className="navbar-s block p-2 hover:bg-gray-50 text-black ">Pricing</a></Link>
                                                </li>
                                                 <li>
                                                    <Link href="/docs"   ><a target="_blank" onMouseEnter={() => {setIsCloudLiveShown(false); setIsDocumentationShown(true);setIsResourceLibraryShown(false);setIsPricingShown(false);setIsArticlesShown(false);setIsTrustShown(false);setIsEbooksShown(false);setIsCaseShown(false);setIsWebinarsShown(false)}}
className="navbar-s block p-2 hover:bg-gray-50 text-black ">Documentation</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="https://live.ktern.com" passhref   ><a target="_blank" onMouseEnter={() => { setIsCloudLiveShown(true);setIsResourceLibraryShown(false);setIsDocumentationShown(false);setIsPricingShown(false);setIsArticlesShown(false);setIsTrustShown(false);setIsEbooksShown(false);setIsCaseShown(false);setIsWebinarsShown(false)}}
className="navbar-s block p-2 hover:bg-gray-50 text-black ">Cloud Live Status</a></Link>
                                                </li>
                                                 <li className="mt-4 mx-2">
                        <Link href='/resources' passHref>
                 <a className="inline-flex items-center pb-1  text-black hover:border-blue-500 group hyperlink group-hover:text-gray-400">See All Resources
                 <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                 </svg>
                 </a>
             </Link> </li> 
                                        </div>
                                        </ul>
                                        <div className="w-2/3">
                                            {isWebinarsShown && (
                                            <DoubleBanner data={{title1:'Webinar',title2:'Webinar',title3:'Webinar',description:'Webinar 1 desc',url1:'/webinars/webinar-1',url2:'/webinars/webinar-1',url3:'/webinars/webinar-1',image1:'/product/projects/project_team_3.svg',image2:'/product/projects/project_team_3.svg',image3:'/product/projects/project_team_3.svg'} }/>
                                            )}
                                            {isArticlesShown && (
                                            <DoubleBanner data={{title1:'Article',title2:'Article',title3:'Article',description:'Article 1 desc',url1:'',url2:'',url3:'',image1:'/product/process/process_1.svg',image2:'/product/process/process_1.svg',image3:'/product/process/process_1.svg'} }/>  )}
                                             {isEbooksShown && (
                                            <DoubleBanner data={{title1:'Ebook',title2:'Ebook',title3:'Ebook',description:'Ebook 1 desc',url1:'/resources/ebook',url2:'/resources/ebook',url3:'/resources/ebook',image1:'/product/maps/maps_1.svg',image2:'/product/maps/maps_1.svg',image3:'/product/maps/maps_1.svg'} }/>  )}
                                             {isCaseShown && (
                                            <DoubleBanner data={{title1:'Case Study',title2:'Case Study',title3:'Case Study',description:'Case Study 1 desc',url1:'/resources/customer-success-story',url2:'/resources/customer-success-story',url3:'/resources/customer-success-story',image1:'/product/mines/mines_1.svg',image2:'/product/mines/mines_1.svg',image3:'/product/mines/mines_1.svg'} }/>  )}
                                             {isTrustShown && (
                                                <DoubleBanner data={{ title1: 'Trust Center', title2: 'Trust Center', title3: 'Trust Center', description: 'Trust Center 1 desc', url1: '/trust-center', url2: '/trust-center', url3: '/trust-center', image1: '/product/labs/labs_1.svg', image2: '/product/labs/labs_1.svg', image3: '/product/labs/labs_1.svg' }} />)}
                                            {isPricingShown && (
                                                <DoubleBanner data={{ title1: 'Pricing',title2: 'Pricing',title3: 'Pricing', description: 'Pricing 1 desc', url1: '/pricing',url2: '/pricing',url3: '/pricing', image1: '/product/labs/labs_1.svg', image2: '/product/labs/labs_1.svg', image3: '/product/labs/labs_1.svg' }} />)}
                                            {isDocumentationShown && (
                                                <DoubleBanner data={{ title1: 'Documentation',title2: 'Documentation',title3: 'Documentation', description: 'Documentation 1 desc', url1: '/',url2: '/',url3: '/', image1: '/product/labs/labs_1.svg', image2: '/product/labs/labs_1.svg', image3: '/product/labs/labs_1.svg' }} />)}
                                            {isCloudLiveShown && (
                                                <DoubleBanner data={{ title1: 'Cloud Live Status',  title2: 'Cloud Live Status',  title3: 'Cloud Live Status', description: 'Live Status 1 desc', url1: '/',url2: '/',url3: '/', image1: '/product/labs/labs_1.svg', image2: '/product/labs/labs_1.svg', image3: '/product/labs/labs_1.svg' }} />)}
                                            {isResourceLibraryShown && (
                                            <DoubleBanner data={{title1:'Resource Library',title2:'Resource Library',title3:'Resource Library',description:'Resource Library 1 desc',url1:'/resources',url2:'/resources',url3:'/resources',image1:'/product/labs/labs_1.svg',image2:'/product/labs/labs_1.svg',image3:'/product/labs/labs_1.svg'} }/> )}
                                        </div>
                                </div>
                            </div>
                        </li>  
                        <li className="toggleable  hover:bg-secondary" ref={partners}>
                                 <input type="checkbox" value="selected" id="toggle-partners" className="toggle-input"/>
                            <label htmlFor="toggle-partners" className="block cursor-pointer py-3 px-2 lg:p-5 header  " onMouseLeave={()=>{setIsConsultingShown(false);setIsPortalShown(false);setIsTechnologyShown(false);setIsBecomeAPartnerShown(false);setIsPartnersShown(true)}}>Partners</label>
                            <div id="toggle-3" role="toggle" className="p-2  mega-menu mb-16 sm:mb-0 shadow-2xl bg-white  border-2 border-gray-300">
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
                                                    <Link href="/partner-register"   ><a onMouseEnter={()=>{setIsConsultingShown(false);setIsPortalShown(false);setIsTechnologyShown(false);setIsBecomeAPartnerShown(true);setIsPartnersShown(false)}}
                                                        className="navbar-s block p-2 hover:bg-gray-50 text-black ">Become A Partner</a></Link>
                                        </li>
                                        <li>
                                        <Link href="/"   ><a target="_blank" onMouseEnter={()=>{setIsConsultingShown(false);setIsPortalShown(true);setIsTechnologyShown(false);setIsBecomeAPartnerShown(false);setIsPartnersShown(false)}} 
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
                                            <FeatureCard data={{title:'Become a Partner',description:'Become a Partner desc',url:'/partner-register',image:'/partner/partner-hand.jpg'} }/>  )}
                                             {isPortalShown && (
                                            <FeatureCard data={{title:'Partner Portal',description:'Partner Portal desc',url:'/',image:'/partner/partner-hand.jpg'} }/> )}
                                        </div>
                                               </div>
                            </div>
                        </li>
                        <li className="toggleable hover:bg-secondary ">
                        <Link href="/about-company" ><a className="block cursor-pointer py-3 px-4 lg:p-5 header  hover:bg-secondary ">Company</a></Link>
                        </li>
                    </ul>
               </div>
                    <div className=" hidden lg:block flex-end xl:mx-20 lg:my-auto mr-4 space-x-10">
                        <Link href="https://app.ktern.com" passhref><a target="_blank" className="button">Login</a></Link>
                    <Link  href="/contact"><a className="border-2 border-black hidden mb-1 lg:inline-block py-2 px-6 bg-black hover:bg-gray-300 hover:text-black shadow  text-white  rounded-r-xl button rounded-b-xl transition duration-200 ">Contact Sales</a></Link>
                </div>
            </div>
        </nav>

        {/* <!-- Mobile --> */}
        <div id="navbar-menu" className="py-20 z-50 hidden relative bg-white">
            <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
            <nav  className="py-2  nav fixed top-0 left-0 bottom-0 flex flex-col w-full max-w-sm  px-6 bg-white border-r overflow-y-auto">
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
                    <li className="toggleable hover:bg-secondary bg-white " >
                        <input type="checkbox" value="selected" id="toggle-sm-one" className="toggle-input  "/>
                            <label htmlFor="toggle-sm-one" className="block cursor-pointer py-2 px-4 lg:p-6 header bg-white  ">Products</label>
                            <div id="toggle" role="toggle" className="p-6 z-50 mega-menu mb-16 sm:mb-0 shadow-2xl bg-white  border-2 border-gray-300">
                                <div className=" container bg-white mx-auto w-full flex flex-wrap justify-between bg-secondary  mx-2"> 
                                    <ul className="bg-white px-4 w-full z-0  lg:w-1/4 border-gray-300 lg:border-b lg:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                        <h3 className="navbar-h uppercase text-black text-bold mb-2">Digital Streams</h3>
                                              <li className="hover:bg-secondary ">
                                                    <Link href="/digital-maps"><a htmlFor="toggle-sm-two" className="block cursor-pointer navbar-s py-2 lg:p-6  ">Digital Maps</a></Link>        
                                            </li>
                                             <li className="hover:bg-secondary ">
                                              
                                                    <Link href="/digital-projects"><a htmlFor="toggle-sm-two" className="block cursor-pointer navbar-s py-2 lg:p-6  ">Digital Projects</a></Link>
                                                    
                                            </li>
                                             <li className="hover:bg-secondary ">
                                              
                                                    <Link href="/digital-process"><a htmlFor="toggle-sm-two" className="block cursor-pointer navbar-s py-2 lg:p-6  ">Digital Process</a></Link>
                                                    
                                            </li>
                                             <li className="hover:bg-secondary ">
                                              
                                                    <Link href="/digital-labs"><a htmlFor="toggle-sm-two" className="block cursor-pointer navbar-s py-2 lg:p-6  ">Digital Labs</a></Link>
                                                    
                                            </li>
                                             <li className="hover:bg-secondary ">
                                              
                                                    <Link href="/digital-mines"><a htmlFor="toggle-sm-two" className="block cursor-pointer navbar-s py-2 lg:p-6  ">Digital Mines</a></Link>
                                                    
                                                </li>
                                              <li className="mt-4 hover:bg-secondary">
                        <Link href='/pricing' passHref>
                 <a className="inline-flex items-center pb-1  text-black hover:border-blue-500 group hyperlink group-hover:text-gray-400">See Pricing
                 <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                 </svg>
                 </a>
             </Link> </li>  
                                    </ul>
                                </div>
                            </div>
                        </li>
                          <li className="toggleable hover:bg-secondary bg-white ">
                        <input type="checkbox" value="selected" id="toggle-sm-two" className="toggle-input "/>
                            <label htmlFor="toggle-sm-two" className="block cursor-pointer py-2 px-4 lg:p-6 header ">Resources</label>
                            <div id="toggle" role="toggle" className="p-6  mega-menu mb-16 z-50 sm:mb-0 shadow-2xl bg-white  border-2 border-gray-300">
                                <div className=" container mx-auto w-full flex flex-wrap justify-between bg-secondary  mx-2"> 
                                    <ul className="bg-white px-4 w-full  lg:w-1/4 border-gray-300 lg:border-b lg:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                        <h3 className="navbar-h uppercase text-black text-bold mb-2">Resources</h3>
                                              <li className="hover:bg-secondary ">
                                                    <Link href="/resources" passHref><a htmlFor="toggle-sm-two" className="block cursor-pointer navbar-s py-2 lg:p-6  ">Resource Library</a></Link>        
                                            </li>
                                             <li className="hover:bg-secondary ">
                                              
                                                    <Link href="/webinars" passHref><a htmlFor="toggle-sm-two" className="block cursor-pointer navbar-s py-2 lg:p-6  ">Webinars</a></Link>
                                                    
                                            </li>
                                             <li className="hover:bg-secondary ">
                                              
                                                    <Link href="/article" passHref><a htmlFor="toggle-sm-two" className="block cursor-pointer navbar-s py-2 lg:p-6  ">Articles</a></Link>
                                                    
                                            </li>
                                             <li className="hover:bg-secondary ">
                                              
                                                    <Link href="/resources" passHref><a htmlFor="toggle-sm-two" className="block cursor-pointer navbar-s py-2 lg:p-6  ">E-Books</a></Link>
                                                    
                                            </li>
                                             <li className="hover:bg-secondary ">
                                              
                                                    <Link href="/resources" passHref><a htmlFor="toggle-sm-two" className="block cursor-pointer navbar-s py-2 lg:p-6  ">Customer Success Stories</a></Link>
                                                    
                                                </li>
                                             <li className="hover:bg-secondary ">
                                              
                                                    <Link href="/trust-center" passHref><a htmlFor="toggle-sm-two" className="block cursor-pointer navbar-s py-2 lg:p-6  ">Trust Center</a></Link>
                                                    
                                            </li>
                                             <li className="hover:bg-secondary ">
                                              
                                                    <Link href="/pricing" passHref><a htmlFor="toggle-sm-two" className="block cursor-pointer navbar-s py-2 lg:p-6  ">Pricing</a></Link>
                                                    
                                            </li>
                                             <li className="hover:bg-secondary ">
                                              
                                                    <Link href="/docs"  passHref><a htmlFor="toggle-sm-two" className="block cursor-pointer navbar-s py-2 lg:p-6  ">Documentation</a></Link>
                                                    
                                            </li>
                                             <li className="hover:bg-secondary ">
                                              
                                                    <Link href="https://live.ktern.com" passHref><a htmlFor="toggle-sm-two" className="block cursor-pointer navbar-s py-2 lg:p-6  ">Cloud Live Status</a></Link>
                                                    
                                            </li>
                                              <li className="mt-4 hover:bg-secondary">
                        <Link href='/resources' passHref>
                 <a className="inline-flex items-center pb-1  text-black hover:border-blue-500 group hyperlink group-hover:text-gray-400">See All Resources
                 <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                 </svg>
                 </a>
             </Link> </li>  
                                    </ul>
                                </div>
                            </div>
                            </li>
                             <li className="toggleable hover:bg-secondary bg-white ">
                        <input type="checkbox" value="selected" id="toggle-sm-three" className="toggle-input  "/>
                            <label htmlFor="toggle-sm-three" className="block cursor-pointer py-2 px-4 lg:p-6 header bg-white  ">Partners</label>
                            <div id="toggle" role="toggle" className="p-6 z-50 mega-menu mb-16 sm:mb-0 shadow-2xl bg-white  border-2 border-gray-300">
                                <div className=" container bg-white mx-auto w-full flex flex-wrap justify-between bg-secondary  mx-2"> 
                                    <ul className="bg-white px-4 w-full z-0  lg:w-1/4 border-gray-300 lg:border-b lg:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                        <h3 className="navbar-h uppercase text-black text-bold mb-2">Partners</h3>
                                              <li className="hover:bg-secondary ">
                                                    <Link href="/partners"><a htmlFor="toggle-sm-two" className="block cursor-pointer navbar-s py-2 lg:p-6  ">Partners</a></Link>        
                                            </li>
                                             <li className="hover:bg-secondary ">
                                              
                                                    <Link href="/consulting-partner"><a htmlFor="toggle-sm-two" className="block cursor-pointer navbar-s py-2 lg:p-6  ">Consulting Partners</a></Link>
                                                    
                                            </li>
                                             <li className="hover:bg-secondary ">
                                              
                                                    <Link href="/technology-partner"><a htmlFor="toggle-sm-two" className="block cursor-pointer navbar-s py-2 lg:p-6  ">Technology Partners</a></Link>
                                                    
                                            </li>
                                             <li className="hover:bg-secondary ">
                                              
                                                    <Link href="/partner-register"><a htmlFor="toggle-sm-two" className="block cursor-pointer navbar-s py-2 lg:p-6  ">Become A Partner</a></Link>
                                                    
                                            </li>
                                             <li className="hover:bg-secondary ">
                                              
                                                    <Link href="/"><a htmlFor="toggle-sm-two" className="block cursor-pointer navbar-s py-2 lg:p-6  ">Partners Portal</a></Link>
                                                    
                                                </li>
                                            
                                    </ul>
                                </div>
                            </div>
                            </li>
                            <li className="toggleable hover:bg-secondary bg-white px-4">
                               <Link href="/about-company"><a htmlFor="toggle-sm-two" className="block cursor-pointer header py-2 lg:p-6  ">Company</a></Link>        
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


export const getStaticProps = async () => {
    // data url from strapi
    let data={a:'ab'}
    
    return {
        props: {
            header_data:data
        }
    }
}
