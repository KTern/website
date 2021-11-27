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
 function handleClickOutside (event) {
         console.log(event)
             
                document.getElementById('toggle-1').style.display = "none";
                  document.getElementById('toggle-2').style.display = "none";
                 document.getElementById('toggle-3').style.display = "none";
           
        
}

function useOutsideAlerter (ref) {
    
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside (event) {
            console.log("outsider",event)
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
        console.log("Resources",event)
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
export default function Header ({h_data}) {
 
// console.log("HEader",h_data)
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
        const [ isProductTourShown, setIsProductTourShown ] = useState(false);
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
        router.events.on('routeChangeComplete',  handleClickOutside)
  return () => {
            window.removeEventListener("scroll", listenToScroll);
        router.events.on('routeChangeComplete',  handleClickOutside)}
    }, [])
    
    return (
        
       <section className=" z-50 w-full " ref={overall}>      
            {/* <!-- Desktop --> */}
          
            <nav className="p-0 bg-white  w-full   fixed z-1 shadow-md">
                {isVisible && isOpen && (router.pathname==='/') && (h_data.TopBar.buttonTitle!="") &&
                    <div className="flex sm:hidden">
                    <div id="banner" className="  w-full h-10 bg-black text-white flex space-x-12 items-center text-center justify-center "><div>{h_data.TopBar.buttonTitle}</div>
                        <Link href={h_data.TopBar.linkURL} passHref>
                    <a target="_blank" className="inline-flex items-center  text-white hover:border-blue-500 group hyperlink group-hover:text-gray-100">&nbsp;Learn More
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

            <div className="flex flex-wrap justify-between  items-center">
                    <div className="hidden lg:block">
                    <Link href="/" passHref>
                        <a className="mx-8">
                                <Image className="text-lg font-medium xl:mx-20 " width="130" height="30" src={h_data.KTernLogoURL} alt="Ktern Logo" />
                            </a>
                    </Link>
                    </div>
                    <div className="hidden sm:block">
                     <Link  href="/" passHref>
                            <a className="mx-6 hidden sm:block mr-auto text-2xl font-medium leading-none cursor-pointer">
                        <Image  src={h_data.KTernLogoURL} alt="Ktern Logo" width="100%" height="30%"/>
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
                                <div className=" px-6 mx-auto w-full flex flex-wrap justify-between   mx-2">
                                   <ul className="bg-white px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-300  pb-6 pt-6 lg:pt-3" >
                                        <h3 className="navbar-h text-black text-bold mb-2 uppercase">{h_data.Streams}</h3>
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
                 <a className="inline-flex items-center pb-1  text-black hover:border-blue-500 group hyperlink group-hover:text-gray-400">{h_data.SeePricing}
                 <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                 </svg>
                 </a>
             </Link> </li>  
                                            
                                            
                                            
                                            </div>
                                        </ul>
                                        
                                            {isProjectShown && (
                                            <Card id="toggle-1" data={{ title: 'Digital Projects', feature1: h_data.DigitalProjects[ 0 ].Title, feature2: h_data.DigitalProjects[ 1 ].Title, feature3: h_data.DigitalProjects[ 2 ].Title, feature4: h_data.DigitalProjects[ 3 ].Title, feature5: h_data.DigitalProjects[ 4 ].Title, url1: h_data.DigitalProjects[ 0 ].CTA.linkURL, url2: h_data.DigitalProjects[ 1 ].CTA.linkURL, url3: h_data.DigitalProjects[ 2 ].CTA.linkURL, url4: h_data.DigitalProjects[ 3 ].CTA.linkURL, url5: h_data.DigitalProjects[ 4 ].CTA.linkURL, features_url: h_data.SeeAllFeatures, icon: h_data.DigitalProjects[ 0 ].StreamsLogoUrl, class: `bg-${h_data.cssStreamTag}-secondary px-4 w-full sm:w-1/2 lg:w-2/4  pb-6 pt-6 lg:pt-3`, feature1_desc: h_data.DigitalProjects[ 0 ].Description, feature2_desc: h_data.DigitalProjects[ 1 ].Description, feature3_desc: h_data.DigitalProjects[ 2 ].Description, feature4_desc: h_data.DigitalProjects[ 3 ].Description, feature5_desc: h_data.DigitalProjects[ 4 ].Description, feature1_image: h_data.DigitalProjects[0].Image, feature2_image: h_data.DigitalProjects[1].Image, feature3_image: h_data.DigitalProjects[2].Image, feature4_image: h_data.DigitalProjects[3].Image, feature5_image: h_data.DigitalProjects[4].Image }}/>
                                            )}
                                            {isProcessShown && (
                                            <Card id="toggle-1" data={{ title: 'Digital Process', feature1: h_data.DigitalProcess[ 0 ].Title, feature2: h_data.DigitalProcess[ 1 ].Title, feature3: h_data.DigitalProcess[ 2 ].Title, feature4: h_data.DigitalProcess[ 3 ].Title, feature5: h_data.DigitalProcess[ 4 ].Title, url1: h_data.DigitalProcess[ 0 ].CTA.linkURL, url2: h_data.DigitalProcess[ 1 ].CTA.linkURL, url3: h_data.DigitalProcess[ 2 ].CTA.linkURL, url4: h_data.DigitalProcess[ 3 ].CTA.linkURL, url5: h_data.DigitalProcess[ 4 ].CTA.linkURL, features_url: h_data.SeeAllFeatures, icon: h_data.DigitalProcess[ 0 ].StreamsLogoUrl, class: `bg-${h_data.cssStreamTag}-secondary px-4 w-full sm:w-1/2 lg:w-2/4  pb-6 pt-6 lg:pt-3`, feature1_desc: h_data.DigitalProcess[ 0 ].Description, feature2_desc: h_data.DigitalProcess[ 1 ].Description, feature3_desc: h_data.DigitalProcess[ 2 ].Description, feature4_desc: h_data.DigitalProcess[ 3 ].Description, feature5_desc: h_data.DigitalProcess[ 4 ].Description, feature1_image: h_data.DigitalProcess[0].Image, feature2_image: h_data.DigitalProcess[1].Image, feature3_image: h_data.DigitalProcess[2].Image, feature4_image: h_data.DigitalProcess[3].Image, feature5_image: h_data.DigitalProcess[4].Image }}/>  )}
                                             {isMapsShown && (
                                            <Card id="toggle-1" data={{ title: 'Digital Maps', feature1: h_data.DigitalMaps[ 0 ].Title, feature2: h_data.DigitalMaps[ 1 ].Title, feature3: h_data.DigitalMaps[ 2 ].Title, feature4: h_data.DigitalMaps[ 3 ].Title, feature5: h_data.DigitalMaps[ 4 ].Title, url1: h_data.DigitalMaps[ 0 ].CTA.linkURL, url2: h_data.DigitalMaps[ 1 ].CTA.linkURL, url3: h_data.DigitalMaps[ 2 ].CTA.linkURL, url4: h_data.DigitalMaps[ 3 ].CTA.linkURL, url5: h_data.DigitalMaps[ 4 ].CTA.linkURL, features_url: h_data.SeeAllFeatures, icon: h_data.DigitalMaps[ 0 ].StreamsLogoUrl, class: `bg-${h_data.cssStreamTag}-secondary px-4 w-full sm:w-1/2 lg:w-2/4  pb-6 pt-6 lg:pt-3`, feature1_desc: h_data.DigitalMaps[ 0 ].Description, feature2_desc: h_data.DigitalMaps[ 1 ].Description, feature3_desc: h_data.DigitalMaps[ 2 ].Description, feature4_desc: h_data.DigitalMaps[ 3 ].Description, feature5_desc: h_data.DigitalMaps[ 4 ].Description, feature1_image: h_data.DigitalMaps[0].Image, feature2_image: h_data.DigitalMaps[1].Image, feature3_image: h_data.DigitalMaps[2].Image, feature4_image: h_data.DigitalMaps[3].Image, feature5_image: h_data.DigitalMaps[4].Image }}/>  )}
                                             {isMinesShown && (
                                            <Card id="toggle-1" data={{ title: 'Digital Mines', feature1: h_data.DigitalMines[ 0 ].Title, feature2: h_data.DigitalMines[ 1 ].Title, feature3: h_data.DigitalMines[ 2 ].Title, feature4: h_data.DigitalMines[ 3 ].Title, feature5: h_data.DigitalMines[ 4 ].Title, url1: h_data.DigitalMines[ 0 ].CTA.linkURL, url2: h_data.DigitalMines[ 1 ].CTA.linkURL, url3: h_data.DigitalMines[ 2 ].CTA.linkURL, url4: h_data.DigitalMines[ 3 ].CTA.linkURL, url5: h_data.DigitalMines[ 4 ].CTA.linkURL, features_url: h_data.SeeAllFeatures, icon: h_data.DigitalMines[ 0 ].StreamsLogoUrl, class: `bg-${h_data.cssStreamTag}-secondary px-4 w-full sm:w-1/2 lg:w-2/4  pb-6 pt-6 lg:pt-3`, feature1_desc: h_data.DigitalMines[ 0 ].Description, feature2_desc: h_data.DigitalMines[ 1 ].Description, feature3_desc: h_data.DigitalMines[ 2 ].Description, feature4_desc: h_data.DigitalMines[ 3 ].Description, feature5_desc: h_data.DigitalMines[ 4 ].Description, feature1_image: h_data.DigitalMines[0].Image, feature2_image: h_data.DigitalMines[1].Image, feature3_image: h_data.DigitalMines[2].Image, feature4_image: h_data.DigitalMines[3].Image, feature5_image: h_data.DigitalMines[4].Image }}/>  )}
                                             {isLabsShown && (
                                            <Card id="toggle-1" data={{ title: 'Digital Labs', feature1: h_data.DigitalLabs[ 0 ].Title, feature2: h_data.DigitalLabs[ 1 ].Title, feature3: h_data.DigitalLabs[ 2 ].Title, feature4: h_data.DigitalLabs[ 3 ].Title, feature5: h_data.DigitalLabs[ 4 ].Title, url1: h_data.DigitalLabs[ 0 ].CTA.linkURL, url2: h_data.DigitalLabs[ 1 ].CTA.linkURL, url3: h_data.DigitalLabs[ 2 ].CTA.linkURL, url4: h_data.DigitalLabs[ 3 ].CTA.linkURL, url5: h_data.DigitalLabs[ 4 ].CTA.linkURL, features_url: h_data.SeeAllFeatures, icon: h_data.DigitalLabs[ 0 ].StreamsLogoUrl, class: `bg-${h_data.cssStreamTag}-secondary px-4 w-full sm:w-1/2 lg:w-2/4  pb-6 pt-6 lg:pt-3`, feature1_desc: h_data.DigitalLabs[ 0 ].Description, feature2_desc: h_data.DigitalLabs[ 1 ].Description, feature3_desc: h_data.DigitalLabs[ 2 ].Description, feature4_desc: h_data.DigitalLabs[ 3 ].Description, feature5_desc: h_data.DigitalLabs[ 4 ].Description, feature1_image: h_data.DigitalLabs[0].Image, feature2_image: h_data.DigitalLabs[1].Image, feature3_image: h_data.DigitalLabs[2].Image, feature4_image: h_data.DigitalLabs[3].Image, feature5_image: h_data.DigitalLabs[4].Image }}/> )}
                                   
                                </div>
                            </div>
                        </li>
                        <li className="toggleable  hover:bg-secondary" ref={resources} >
                                 <input type="checkbox" value="selected" id="toggle-resources" className="toggle-input"/>
                            <label htmlFor="toggle-resources" className="block cursor-pointer py-3 px-2 lg:p-5 header  " onMouseEnter={()=>{setIsProductTourShown(false),setIsDocumentationShown(false);setIsPricingShown(false); setIsCloudLiveShown(false);setIsResourceLibraryShown(true);setIsArticlesShown(false);setIsTrustShown(false);setIsEbooksShown(false);setIsCaseShown(false);setIsWebinarsShown(false)}}>Resources</label>
                            <div id="toggle-2" role="toggle" className="p-6  mega-menu mb-16 sm:mb-0 shadow-2xl bg-white  border-2 border-gray-300">
                                <div className=" px-6 mx-auto w-full flex flex-wrap justify-between   mx-2">
                                   <ul className="bg-white px-4 w-1/4 sm:w-1/2 lg:w-1/4 border-gray-300  pb-6 pt-6 lg:pt-3" >
                                        <h3 className="navbar-h uppercase text-black text-bold mb-2">{h_data.Resources}</h3>
                                      
                                            <div >
                                                  <li>
                                                    <Link href={h_data.Resource[0].PageUrl.linkURL}    ><a onMouseEnter={() => {setIsProductTourShown(false),setIsDocumentationShown(false);setIsPricingShown(false); setIsCloudLiveShown(false);setIsResourceLibraryShown(true);setIsArticlesShown(false);setIsTrustShown(false);setIsEbooksShown(false);setIsCaseShown(false);setIsWebinarsShown(false)}}
                                         className="navbar-s block p-2 hover:bg-gray-50 text-black ">{h_data.Resource[0].Title}</a></Link>
                                        </li>
                                        <li>
                                                    <Link href={h_data.Resource[1].PageUrl.linkURL}    ><a onMouseEnter={()=>{setIsProductTourShown(false),setIsDocumentationShown(false);setIsPricingShown(false);setIsCloudLiveShown(false); setIsResourceLibraryShown(false);setIsArticlesShown(false);setIsTrustShown(false);setIsEbooksShown(false);setIsCaseShown(false);setIsWebinarsShown(true)}}
                                         className="navbar-s block p-2 hover:bg-gray-50 text-black ">{h_data.Resource[1].Title}</a></Link>
                                        </li>
                                        <li>
                                                    <Link href={h_data.Resource[2].PageUrl.linkURL}  ><a   onMouseEnter={()=>{setIsProductTourShown(false),setIsDocumentationShown(false);setIsPricingShown(false);setIsCloudLiveShown(false);setIsResourceLibraryShown(false);setIsArticlesShown(true);setIsTrustShown(false);setIsEbooksShown(false);setIsCaseShown(false);setIsWebinarsShown(false)}}
                                         className="navbar-s block p-2 hover:bg-gray-50 text-black ">{h_data.Resource[2].Title}</a></Link>
                                        </li>
                                        <li>
                                                    <Link href={h_data.Resource[3].PageUrl.linkURL}    ><a onMouseEnter={()=>{setIsProductTourShown(false),setIsDocumentationShown(false);setIsPricingShown(false);setIsCloudLiveShown(false);setIsResourceLibraryShown(false);setIsArticlesShown(false);setIsTrustShown(false);setIsEbooksShown(true);setIsCaseShown(false);setIsWebinarsShown(false)}}
                                         className="navbar-s block p-2 hover:bg-gray-50 text-black ">{h_data.Resource[3].Title}</a></Link>
                                        </li>
                                        <li>
                                                    <Link href={h_data.Resource[4].PageUrl.linkURL}   ><a onMouseEnter={()=>{setIsProductTourShown(false),setIsDocumentationShown(false);setIsPricingShown(false);setIsCloudLiveShown(false);setIsResourceLibraryShown(false);setIsArticlesShown(false);setIsTrustShown(false);setIsEbooksShown(false);setIsCaseShown(true);setIsWebinarsShown(false)}}
                                                        className="navbar-s block p-2 hover:bg-gray-50 text-black ">{h_data.Resource[4].Title}</a></Link>
                                        </li>
                                        <li>
                                        <Link href={h_data.Resource[5].PageUrl.linkURL}   ><a onMouseEnter={()=>{setIsProductTourShown(false),setIsDocumentationShown(false);setIsPricingShown(false);setIsCloudLiveShown(false);setIsResourceLibraryShown(false);setIsArticlesShown(false);setIsTrustShown(true);setIsEbooksShown(false);setIsCaseShown(false);setIsWebinarsShown(false)}} 
className="navbar-s block p-2 hover:bg-gray-50 text-black ">{h_data.Resource[5].Title}</a></Link>
                                                </li>
                                                 <li>
                                                    <Link href={h_data.Resource[6].PageUrl.linkURL}   ><a onMouseEnter={() => {setIsProductTourShown(false),setIsDocumentationShown(false);setIsCloudLiveShown(false); setIsPricingShown(true);setIsResourceLibraryShown(false);setIsArticlesShown(false);setIsTrustShown(false);setIsEbooksShown(false);setIsCaseShown(false);setIsWebinarsShown(false)}}
className="navbar-s block p-2 hover:bg-gray-50 text-black ">{h_data.Resource[6].Title}</a></Link>
                                                </li>
                                                 <li>
                                                    <Link href={h_data.Resource[7].PageUrl.linkURL}   ><a target="_blank" onMouseEnter={() => {setIsProductTourShown(false),setIsCloudLiveShown(false); setIsDocumentationShown(true);setIsResourceLibraryShown(false);setIsPricingShown(false);setIsArticlesShown(false);setIsTrustShown(false);setIsEbooksShown(false);setIsCaseShown(false);setIsWebinarsShown(false)}}
className="navbar-s block p-2 hover:bg-gray-50 text-black ">{h_data.Resource[7].Title}</a></Link>
                                                </li>
                                                <li>
                                                    <Link href={h_data.Resource[8].PageUrl.linkURL} passhref   ><a target="_blank" onMouseEnter={() => {setIsProductTourShown(false), setIsCloudLiveShown(true);setIsResourceLibraryShown(false);setIsDocumentationShown(false);setIsPricingShown(false);setIsArticlesShown(false);setIsTrustShown(false);setIsEbooksShown(false);setIsCaseShown(false);setIsWebinarsShown(false)}}
className="navbar-s block p-2 hover:bg-gray-50 text-black ">{h_data.Resource[8].Title}</a></Link>
                                                </li>
                                                 <li>
                                                    <Link href={h_data.Resource[ 9 ].PageUrl.linkURL} passhref   ><a target="_blank" onMouseEnter={() => { setIsCloudLiveShown(false); setIsResourceLibraryShown(false); setIsDocumentationShown(false); setIsPricingShown(false); setIsArticlesShown(false); setIsTrustShown(false); setIsEbooksShown(false); setIsCaseShown(false); setIsWebinarsShown(false);setIsProductTourShown(true)}}
className="navbar-s block p-2 hover:bg-gray-50 text-black ">{h_data.Resource[9].Title}</a></Link>
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
                                        <div className="w-3/4 flex items-center justify-center ">
                                            {isWebinarsShown && (
                                            <DoubleBanner data={h_data.Resource[1].NavBarCard}/>
                                            )}
                                            {isArticlesShown && (
                                            <DoubleBanner data={h_data.Resource[2].NavBarCard}/>  )}
                                             {isEbooksShown && (
                                            <DoubleBanner data={h_data.Resource[3].NavBarCard}/>  )}
                                             {isCaseShown && (
                                            <DoubleBanner data={h_data.Resource[4].NavBarCard}/>  )}
                                             {isTrustShown && (
                                                <DoubleBanner data={h_data.Resource[5].NavBarCard}/>)}
                                            {isPricingShown && (
                                                <DoubleBanner data={h_data.Resource[6].NavBarCard}/>)}
                                            {isDocumentationShown && (
                                                <DoubleBanner data={h_data.Resource[7].NavBarCard} />)}
                                            {isCloudLiveShown && (
                                                <DoubleBanner data={h_data.Resource[8].NavBarCard}/>)}
                                            {isResourceLibraryShown && (
                                                <DoubleBanner data={h_data.Resource[ 0 ].NavBarCard} />)}
                                            {isProductTourShown && (
                                            <DoubleBanner data={h_data.Resource[9].NavBarCard}/> )}
                                        </div>
                                </div>
                            </div>
                        </li>  
                        <li className="toggleable  hover:bg-secondary" ref={partners}>
                                 <input type="checkbox" value="selected" id="toggle-partners" className="toggle-input"/>
                            <label htmlFor="toggle-partners" className="block cursor-pointer py-3 px-2 lg:p-5 header  " onMouseLeave={()=>{setIsConsultingShown(false);setIsPortalShown(false);setIsTechnologyShown(false);setIsBecomeAPartnerShown(false);setIsPartnersShown(true)}}>{h_data.Partner}</label>
                            <div id="toggle-3" role="toggle" className="p-6  mega-menu mb-16 sm:mb-0 shadow-2xl bg-white  border-2 border-gray-300">
                                <div className=" px-6 mx-auto w-full flex flex-wrap justify-between   mx-2">
                                   <ul className="bg-white px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-300  pb-6 pt-6 lg:pt-3" >
                                        <h3 className="navbar-h  uppercase text-black text-bold mb-2">{h_data.Partner}</h3>
                                        <div >
                                        <li>
                                                    <Link href={h_data.Partners[0].PageUrl.linkURL}    ><a title={h_data.Partners[0].PageUrl.buttonTitle} onMouseEnter={()=>{setIsConsultingShown(false);setIsPortalShown(false);setIsTechnologyShown(false);setIsBecomeAPartnerShown(false);setIsPartnersShown(true)}}
                                         className="navbar-s block p-2 hover:bg-gray-50 text-black ">{h_data.Partners[0].Title}</a></Link>
                                        </li>
                                        <li>
                                                    <Link href={h_data.Partners[1].PageUrl.linkURL}    ><a title={h_data.Partners[1].PageUrl.buttonTitle} onMouseEnter={()=>{setIsConsultingShown(true);setIsPortalShown(false);setIsTechnologyShown(false);setIsBecomeAPartnerShown(false);setIsPartnersShown(false)}}
                                         className="navbar-s block p-2 hover:bg-gray-50 text-black ">{h_data.Partners[1].Title}</a></Link>
                                        </li>
                                        <li>
                                                    <Link href={h_data.Partners[2].PageUrl.linkURL}    ><a title={h_data.Partners[2].PageUrl.buttonTitle} onMouseEnter={()=>{setIsConsultingShown(false);setIsPortalShown(false);setIsTechnologyShown(true);setIsBecomeAPartnerShown(false);setIsPartnersShown(false)}}
                                         className="navbar-s block p-2 hover:bg-gray-50 text-black ">{h_data.Partners[2].Title}</a></Link>
                                        </li>
                                        <li>
                                                    <Link href={h_data.Partners[3].PageUrl.linkURL}   ><a title={h_data.Partners[3].PageUrl.buttonTitle} onMouseEnter={()=>{setIsConsultingShown(false);setIsPortalShown(false);setIsTechnologyShown(false);setIsBecomeAPartnerShown(true);setIsPartnersShown(false)}}
                                                        className="navbar-s block p-2 hover:bg-gray-50 text-black ">{h_data.Partners[3].Title}</a></Link>
                                        </li>
                                        <li>
                                        <Link href={h_data.Partners[4].PageUrl.linkURL}   ><a title={h_data.Partners[4].PageUrl.buttonTitle} target="_blank" onMouseEnter={()=>{setIsConsultingShown(false);setIsPortalShown(true);setIsTechnologyShown(false);setIsBecomeAPartnerShown(false);setIsPartnersShown(false)}} 
className="navbar-s block p-2 hover:bg-gray-50 text-black ">{h_data.Partners[4].Title}</a></Link>
                                                </li>
                                                 <li className="mt-4 mx-2">
                         </li> 
                                        </div>
                                        </ul>
                                        <div className="w-2/3">
                                            {isPartnersShown && (
                                            <FeatureCard data={{title:h_data.Partners[0].Title,description:h_data.Partners[0].NavBarCard[0].Title,url:h_data.Partners[0].NavBarCard[0].CTALink,image:h_data.Partners[0].Image} }/>
                                            )}
                                            {isConsultingShown && (
                                            <FeatureCard data={{title:h_data.Partners[1].Title,description:h_data.Partners[1].NavBarCard[0].Title,url:h_data.Partners[1].NavBarCard[0].CTALink,image:h_data.Partners[1].Image} }/>  )}
                                             {isTechnologyShown && (
                                            <FeatureCard data={{title:h_data.Partners[2].Title,description:h_data.Partners[2].NavBarCard[0].Title,url:h_data.Partners[2].NavBarCard[0].CTALink,image:h_data.Partners[2].Image} }/>  )}
                                             {isBecomeAPartnerShown && (
                                            <FeatureCard data={{title:h_data.Partners[3].Title,description:h_data.Partners[3].NavBarCard[0].Title,url:h_data.Partners[3].NavBarCard[0].CTALink,image:h_data.Partners[3].Image} }/>  )}
                                             {isPortalShown && (
                                            <FeatureCard data={{title:h_data.Partners[4].Title,description:h_data.Partners[4].NavBarCard[0].Title,url:h_data.Partners[4].NavBarCard[0].CTALink,image:h_data.Partners[4].Image} }/> )}
                                        </div>
                                               </div>
                            </div>
                            </li>
                             <li className="toggleable hover:bg-secondary ">
                            <Link href={h_data.Support.linkURL} passhref><a target="_blank" title={h_data.Support.buttonTitle} className="block cursor-pointer py-3 px-4 lg:p-5 header  hover:bg-secondary ">{h_data.Support.buttonTitle}</a></Link>
                            </li>
                        <li className="toggleable hover:bg-secondary ">
                                <Link href={h_data.Company.linkURL} ><a title={h_data.Company.buttonTitle} className="block cursor-pointer py-3 px-4 lg:p-5 header  hover:bg-secondary ">{h_data.Company.buttonTitle}</a></Link>
                                
                            </li>
                           
                    </ul>
               </div>
                    <div className=" hidden lg:block flex-end xl:mx-20 lg:my-auto mr-4 space-x-10">
                        <Link href={h_data.CTA1.linkURL} passhref><a title={h_data.CTA1.buttonTitle}  target="_blank" className="button">{h_data.CTA1.buttonTitle}</a></Link>
                        <Link href={h_data.CTA2.linkURL}><a title={h_data.CTA2.buttonTitle} className="border-2 border-black hidden mb-1 lg:inline-block py-2 px-6 bg-black hover:bg-gray-300 hover:text-black shadow  text-white  rounded-r-xl button rounded-b-xl transition duration-200 ">{h_data.CTA2.buttonTitle}</a></Link>
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
                        <Image  src={h_data.KTernLogoURL} alt="Ktern Logo" width="100%" height="30%"/>
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
                                        <h3 className="navbar-h uppercase text-black text-bold mb-2">{h_data.Streams}</h3>
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
                 <a className="inline-flex items-center pb-1  text-black hover:border-blue-500 group hyperlink group-hover:text-gray-400">{h_data.SeePricing}
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
                            <label htmlFor="toggle-sm-two" className="block cursor-pointer py-2 px-4 lg:p-6 header ">{h_data.Resources}</label>
                            <div id="toggle" role="toggle" className="p-6  mega-menu mb-16 z-50 sm:mb-0 shadow-2xl bg-white  border-2 border-gray-300">
                                <div className=" container mx-auto w-full flex flex-wrap justify-between bg-secondary  mx-2"> 
                                    <ul className="bg-white px-4 w-full  lg:w-1/4 border-gray-300 lg:border-b lg:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                        <h3 className="navbar-h uppercase text-black text-bold mb-2">{h_data.Resources}</h3>
                                              <li className="hover:bg-secondary ">
                                                    <Link href={h_data.Resource[0].PageUrl.linkURL} passHref><a htmlFor="toggle-sm-two" className="block cursor-pointer navbar-s py-2 lg:p-6  ">{h_data.Resource[0].Title}</a></Link>        
                                            </li>
                                             <li className="hover:bg-secondary ">
                                              
                                                    <Link href={h_data.Resource[1].PageUrl.linkURL} passHref><a htmlFor="toggle-sm-two" className="block cursor-pointer navbar-s py-2 lg:p-6  ">{h_data.Resource[1].Title}</a></Link>
                                                    
                                            </li>
                                             <li className="hover:bg-secondary ">
                                              
                                                    <Link href={h_data.Resource[2].PageUrl.linkURL} passHref><a htmlFor="toggle-sm-two" className="block cursor-pointer navbar-s py-2 lg:p-6  ">{h_data.Resource[2].Title}</a></Link>
                                                    
                                            </li>
                                             <li className="hover:bg-secondary ">
                                              
                                                    <Link href={h_data.Resource[3].PageUrl.linkURL} passHref><a htmlFor="toggle-sm-two" className="block cursor-pointer navbar-s py-2 lg:p-6  ">{h_data.Resource[3].Title}</a></Link>
                                                    
                                            </li>
                                             <li className="hover:bg-secondary ">
                                              
                                                    <Link href={h_data.Resource[4].PageUrl.linkURL} passHref><a htmlFor="toggle-sm-two" className="block cursor-pointer navbar-s py-2 lg:p-6  ">{h_data.Resource[4].Title}</a></Link>
                                                    
                                                </li>
                                             <li className="hover:bg-secondary ">
                                              
                                                    <Link href={h_data.Resource[5].PageUrl.linkURL} passHref><a htmlFor="toggle-sm-two" className="block cursor-pointer navbar-s py-2 lg:p-6  ">{h_data.Resource[5].Title}</a></Link>
                                                    
                                            </li>
                                             <li className="hover:bg-secondary ">
                                              
                                                    <Link href={h_data.Resource[6].PageUrl.linkURL} passHref><a htmlFor="toggle-sm-two" className="block cursor-pointer navbar-s py-2 lg:p-6  ">{h_data.Resource[6].Title}</a></Link>
                                                    
                                            </li>
                                             <li className="hover:bg-secondary ">
                                              
                                                    <Link href={h_data.Resource[7].PageUrl.linkURL}  passHref><a htmlFor="toggle-sm-two" className="block cursor-pointer navbar-s py-2 lg:p-6  ">{h_data.Resource[7].Title}</a></Link>
                                                    
                                            </li>
                                             <li className="hover:bg-secondary ">
                                              
                                                    <Link href={h_data.Resource[8].PageUrl.linkURL} passHref><a htmlFor="toggle-sm-two" className="block cursor-pointer navbar-s py-2 lg:p-6  ">{h_data.Resource[8].Title}</a></Link>
                                                    
                                            </li>
                                            <li className="hover:bg-secondary ">
                                              
                                                    <Link href={h_data.Resource[9].PageUrl.linkURL} passHref><a htmlFor="toggle-sm-two" className="block cursor-pointer navbar-s py-2 lg:p-6  ">{h_data.Resource[9].Title}</a></Link>
                                                    
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
                            <label htmlFor="toggle-sm-three" className="block cursor-pointer py-2 px-4 lg:p-6 header bg-white  ">{h_data.Partner}</label>
                            <div id="toggle" role="toggle" className="p-6 z-50 mega-menu mb-16 sm:mb-0 shadow-2xl bg-white  border-2 border-gray-300">
                                <div className=" container bg-white mx-auto w-full flex flex-wrap justify-between bg-secondary  mx-2"> 
                                    <ul className="bg-white px-4 w-full z-0  lg:w-1/4 border-gray-300 lg:border-b lg:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                        <h3 className="navbar-h uppercase text-black text-bold mb-2">{h_data.Partner}</h3>
                                              <li className="hover:bg-secondary ">
                                                    <Link href={h_data.Partners[0].PageUrl.linkURL} ><a title={h_data.Partners[0].PageUrl.buttonTitle} htmlFor="toggle-sm-two" className="block cursor-pointer navbar-s py-2 lg:p-6  ">{h_data.Partners[0].Title}</a></Link>        
                                            </li>
                                             <li className="hover:bg-secondary ">
                                              
                                                    <Link href={h_data.Partners[1].PageUrl.linkURL} ><a title={h_data.Partners[1].PageUrl.buttonTitle} htmlFor="toggle-sm-two" className="block cursor-pointer navbar-s py-2 lg:p-6  ">{h_data.Partners[1].Title}</a></Link>
                                                    
                                            </li>
                                             <li className="hover:bg-secondary ">
                                              
                                                    <Link href={h_data.Partners[2].PageUrl.linkURL} ><a title={h_data.Partners[2].PageUrl.buttonTitle} htmlFor="toggle-sm-two" className="block cursor-pointer navbar-s py-2 lg:p-6  ">{h_data.Partners[2].Title}</a></Link>
                                                    
                                            </li>
                                             <li className="hover:bg-secondary ">
                                              
                                                    <Link href={h_data.Partners[3].PageUrl.linkURL} ><a title={h_data.Partners[3].PageUrl.buttonTitle} htmlFor="toggle-sm-two" className="block cursor-pointer navbar-s py-2 lg:p-6  ">{h_data.Partners[3].Title}</a></Link>
                                                    
                                            </li>
                                             <li className="hover:bg-secondary ">
                                              
                                                    <Link href={h_data.Partners[4].PageUrl.linkURL} ><a title={h_data.Partners[4].PageUrl.buttonTitle} htmlFor="toggle-sm-two" className="block cursor-pointer navbar-s py-2 lg:p-6  ">{h_data.Partners[4].Title}</a></Link>
                                                    
                                                </li>
                                            
                                    </ul>
                                </div>
                            </div>
                            </li>
                            <li className="toggleable hover:bg-secondary bg-white px-4">
                               <Link href={h_data.Support.linkURL} passhref><a title={h_data.Support.buttonTitle} target="_blank" htmlFor="toggle-sm-two" className="block cursor-pointer header py-2 lg:p-6  ">{h_data.Support.buttonTitle}</a></Link>        
                            </li>
                            <li className="toggleable hover:bg-secondary bg-white px-4">
                               <Link href={h_data.Company.linkURL}><a title={h_data.Support.buttonTitle} htmlFor="toggle-sm-two" className="block cursor-pointer header py-2 lg:p-6  ">{h_data.Support.buttonTitle}</a></Link>        
                            </li>
                             
                     </ul>
                </div>
                <div className="pt-6 flex-col space-y-6">
                 
                    <Link  href={h_data.CTA2.linkURL}><a title={h_data.CTA2.buttonTitle} className="inline-block py-2 px-6 bg-black hover:bg-gray-300 hover:text-black shadow text-sm text-white  rounded-r-xl rounded-b-xl transition duration-200 uppercase">{h_data.CTA2.buttonTitle}</a></Link>
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

