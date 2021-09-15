import Card from "./card1"       
import Image from "next/image";
import Link from "next/link";
import Card1 from "./card"
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
    
    return (
       <section className="container z-50 w-full">      
        {/* <!-- Desktop --> */}
        <nav className="p-0 bg-white  w-full   fixed z-1 shadow-md">
            <div className="flex flex-wrap justify-between items-center">
                <Link  href="/" passHref>
                    <Image className="text-lg font-medium xl:mx-20 " width="148" height="40" src="/assets/KternLogo.png" alt="Ktern Logo"/>
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
                        <li className="hoverable hover:bg-secondary " onMouseLeave={()=>{setIsLabsShown(false);setIsMinesShown(false);setIsMapsShown(false);setIsProcessShown(false);setIsProjectShown(true)}}>
                            <label htmlFor="toggle-one" className="block cursor-pointer py-6 px-2 lg:p-6 header uppercase font-bold" >Products</label>
                            <div role="toggle" className="p-2  mega-menu mb-16 sm:mb-0 shadow-2xl bg-white  border-2 border-gray-300">
                                <div className=" container mx-auto w-full flex flex-wrap justify-between bg-secondary  mx-2">
                                   <ul className="bg-white px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-300  pb-6 pt-6 lg:pt-3" >
                                        <h3 className="navbar-h text-black text-bold mb-2">Streams</h3>
                                        <div >
                                        <li>
                                                    <Link href="/products/digital-projects"    ><a onMouseEnter={() => { setIsLabsShown(false);setIsMinesShown(false);setIsMapsShown(false);setIsProcessShown(false);setIsProjectShown(true)}}
                                         className="navbar-s block p-2 hover:bg-gray-300 text-black hover:text-gray-400">Digital Projects</a></Link>
                                        </li>
                                        <li>
                                                    <Link href="/products/digital-process"    ><a onMouseEnter={() => { setIsLabsShown(false);setIsMinesShown(false);setIsMapsShown(false);setIsProcessShown(true);setIsProjectShown(false)}}
                                         className="navbar-s block p-2 hover:bg-gray-300 text-black hover:text-gray-400">Digital Process</a></Link>
                                        </li>
                                        <li>
                                                    <Link href="/products/digital-maps"    ><a onMouseEnter={() => { setIsLabsShown(false);setIsMinesShown(false);setIsMapsShown(true);setIsProcessShown(false);setIsProjectShown(false)}}
                                         className="navbar-s block p-2 hover:bg-gray-300 text-black hover:text-gray-400">Digital Maps</a></Link>
                                        </li>
                                        <li>
                                                    <Link href="/products/digital-mines"   ><a onMouseEnter={() => { setIsLabsShown(false);setIsMinesShown(true);setIsMapsShown(false);setIsProcessShown(false);setIsProjectShown(false)}}
                                                        className="navbar-s block p-2 hover:bg-gray-300 text-black hover:text-gray-400">Digital Mines</a></Link>
                                        </li>
                                        <li>
                                        <Link href="/products/digital-labs"   ><a  onMouseEnter={() => { setIsLabsShown(true);setIsMinesShown(false);setIsMapsShown(false);setIsProcessShown(false);setIsProjectShown(false)}}
className="navbar-s block p-2 hover:bg-gray-300 text-black hover:text-gray-400">Digital Labs</a></Link>
                                        </li>
                                        </div>
                                    </ul>
                                            {isProjectShown && (
                                            <Card data={{title:'Digital Projects',feature1:'Feature 1',feature2:'Feature 2',feature3:'Feature 3',feature4:'Feature 4',feature5:'Feature 5',url:'/features/digital-projects',feature_url:'/features/digital-projects'} }/>
                                            )}
                                            {isProcessShown && (
                                            <Card data={{title:'Digital Process',feature1:'Feature 1',feature2:'Feature 2',feature3:'Feature 3',feature4:'Feature 4',feature5:'Feature 5',url:'/features/digital-projects',feature_url:'/features/digital-projects'} }/>  )}
                                             {isMapsShown && (
                                            <Card data={{title:'Digital Maps',feature1:'Feature 1',feature2:'Feature 2',feature3:'Feature 3',feature4:'Feature 4',feature5:'Feature 5',url:'/features/digital-projects',feature_url:'/features/digital-projects'} }/>  )}
                                             {isMinesShown && (
                                            <Card data={{title:'Digital Mines',feature1:'Feature 1',feature2:'Feature 2',feature3:'Feature 3',feature4:'Feature 4',feature5:'Feature 5',url:'/features/digital-projects',feature_url:'/features/digital-projects'} }/>  )}
                                             {isLabsShown && (
                                            <Card data={{title:'Digital Labs',feature1:'Feature 1',feature2:'Feature 2',feature3:'Feature 3',feature4:'Feature 4',feature5:'Feature 5',url:'/features/digital-projects',feature_url:'/features/digital-projects'} }/> )}
                                   
                                               </div>
                            </div>
                        </li>
                        <li className="hoverable hover:bg-secondary ">
                        <label htmlFor="toggle-one" className="block cursor-pointer py-6 px-4 lg:p-6 header uppercase font-bold">Solutions</label>
                        </li>
                        <li className="hoverable hover:bg-secondary ">
                    
                            <Link href="/resources"  ><a className="block cursor-pointer py-6 px-4 lg:p-6 header uppercase font-bold">Resources</a></Link>
                       
                        </li>
                        <li className="hoverable hover:bg-secondary ">
                        <Link href="/partners" ><a className="block cursor-pointer py-6 px-4 lg:p-6 header uppercase font-bold">Partners</a></Link>
                        </li>
                    </ul>
               </div>
                <div className=" hidden lg:block flex-end xl:mx-20 lg:my-auto mr-4">
                    <Link  href="/contact"><a className="hidden mb-1 lg:inline-block py-2 px-6 bg-black hover:bg-gray-300 hover:text-black shadow  text-white font-bold rounded-l-xl uppercase header rounded-t-xl transition duration-200 ">Contact Sales</a></Link>
                </div>
            </div>
        </nav>

        {/* <!-- Mobile --> */}
        <div id="navbar-menu" className="py-20 z-50 hidden relative bg-black">
            <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
            <nav  className="py-5  nav fixed top-0 left-0 bottom-0 flex flex-col w-full max-w-sm  px-6 bg-white border-r overflow-y-auto">
                <div className="flex items-center justify-between mb-8">
                    <Link className="mr-auto text-2xl font-medium leading-none" href="#" passHref>
                        <Image  src="/assets/kternLogo.png" alt="Ktern Logo" width="100%" height="30%"/>
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
                            <label htmlFor="toggle-one" className="block cursor-pointer py-6 px-4 lg:p-6 tiny-heading font-bold" onMouseEnter={() => setIsProjectShown(true)}>Products</label>
                            <div role="toggle" className="p-6  mega-menu mb-16 sm:mb-0 shadow-2xl bg-white  border-2 border-gray-300">
                                <div className=" container mx-auto w-full flex flex-wrap justify-between bg-secondary  mx-2"> 
                                    <ul className="bg-white px-4 w-full  lg:w-1/4 border-gray-300 lg:border-b lg:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                        <h3 className="navbar-h text-black text-bold mb-2">Digital Streams</h3>
                                              <li className="hover:bg-secondary ">
                                                <input type="checkbox" value="selected" id="toggle-two" className="toggle-input "/>
                                                    <label htmlFor="toggle-two" className="block cursor-pointer py-2 lg:p-6  " onMouseEnter={() => setIsProjectShown(true)}>Digital Maps</label>
                                                    <div role="toggle" className="p-6  mega-menu mb-16 sm:mb-0 shadow-2xl bg-white  border-2 border-gray-300">
                                                        <div className=" container mx-auto w-full flex flex-wrap justify-between bg-secondary  mx-2"> 
                                                            <Card1 data={{ title: 'Digital Maps', feature1: 'Feature 1', feature2: 'Feature 2', feature3: 'Feature 3', feature4: 'Feature 4', feature5: 'Feature 5', url: '/features/digital-projects' }} />       
                                                        </div>
                                                    </div>
                                                </li>
                     
                                            <li className=" hover:bg-secondary ">
                                                <input type="checkbox" value="selected" id="toggle-three" className="toggle-input "/>
                                                    <label htmlFor="toggle-three" className="block cursor-pointer py-2 lg:p-6  " onMouseEnter={() => setIsProjectShown(true)}>Digital Labs</label>
                                                    <div role="toggle" className="p-6  mega-menu mb-16 sm:mb-0 shadow-2xl bg-white  border-2 border-gray-300">
                                                        <div className=" container mx-auto w-full flex flex-wrap justify-between bg-secondary  mx-2"> 
                                                            <Card1 data={{ title: 'Digital Labs', feature1: 'Feature 1', feature2: 'Feature 2', feature3: 'Feature 3', feature4: 'Feature 4', feature5: 'Feature 5', url: '/features/digital-projects' }} />       
                                                        </div>
                                                    </div>
                                                </li>
                                        <li className="hover:bg-secondary ">
                                                <input type="checkbox" value="selected" id="toggle-four" className="toggle-input "/>
                                                    <label htmlFor="toggle-four" className="block cursor-pointer py-2 lg:p-6  " onMouseEnter={() => setIsProjectShown(true)}>Digital Projects</label>
                                                    <div role="toggle" className="p-6  mega-menu mb-16 sm:mb-0 shadow-2xl bg-white  border-2 border-gray-300">
                                                        <div className=" container mx-auto w-full flex flex-wrap justify-between bg-secondary  mx-2"> 
                                                            <Card1 data={{ title: 'Digital Projects', feature1: 'Feature 1', feature2: 'Feature 2', feature3: 'Feature 3', feature4: 'Feature 4', feature5: 'Feature 5', url: '/features/digital-projects' }} />       
                                                        </div>
                                                    </div>
                                                </li>
                                        <li className=" hover:bg-secondary ">
                                                <input type="checkbox" value="selected" id="toggle-five" className="toggle-input "/>
                                                    <label htmlFor="toggle-five" className="block cursor-pointer py-2 lg:p-6  " onMouseEnter={() => setIsProjectShown(true)}>Digital Process</label>
                                                    <div role="toggle" className="p-6  mega-menu mb-16 sm:mb-0 shadow-2xl bg-white  border-2 border-gray-300">
                                                        <div className=" container mx-auto w-full flex flex-wrap justify-between bg-secondary  mx-2"> 
                                                            <Card1 data={{ title: 'Digital Process', feature1: 'Feature 1', feature2: 'Feature 2', feature3: 'Feature 3', feature4: 'Feature 4', feature5: 'Feature 5', url: '/features/digital-projects' }} />       
                                                        </div>
                                                    </div>
                                                </li>
                                        <li className="toggleable hover:bg-secondary ">
                                                <input type="checkbox" value="selected" id="toggle-six" className="toggle-input "/>
                                                    <label htmlFor="toggle-six" className="block cursor-pointer py-2 lg:p-6  " onMouseEnter={() => setIsProjectShown(true)}>Digital Mines</label>
                                                    <div role="toggle" className="p-6  mega-menu mb-16 sm:mb-0 shadow-2xl bg-white  border-2 border-gray-300">
                                                        <div className=" container mx-auto w-full flex flex-wrap justify-between bg-secondary  mx-2"> 
                                                            <Card1 data={{ title: 'Digital Mines', feature1: 'Feature 1', feature2: 'Feature 2', feature3: 'Feature 3', feature4: 'Feature 4', feature5: 'Feature 5', url: '/features/digital-projects' }} />       
                                                        </div>
                                                    </div>
                                                </li>   
                                    </ul>
                                    
                                        {isProjectShown && (
                                            <div role="toggle" className="p-6  mega-menu mb-16 sm:mb-0 shadow-2xl bg-white  border-2 border-gray-300">
                                <div className=" container mx-auto w-full flex flex-wrap justify-between bg-secondary  mx-2"> 
                                                    <Card1 data={{ title: 'Digital Projects', feature1: 'Feature 1', feature2: 'Feature 2', feature3: 'Feature 3', feature4: 'Feature 4', feature5: 'Feature 5', url: '/features/digital-projects' }} />
                                                    </div>
                                                    </div>
                                            )}
                                        {isProcessShown && (
                                            <div role="toggle" className="p-6  mega-menu mb-16 sm:mb-0 shadow-2xl bg-white  border-2 border-gray-300">
                                <div className=" container mx-auto w-full flex flex-wrap justify-between bg-secondary  mx-2"> 
                                                    <Card1 data={{ title: 'Digital Process', feature1: 'Feature 1', feature2: 'Feature 2', feature3: 'Feature 3', feature4: 'Feature 4', feature5: 'Feature 5', url: '/features/digital-projects' }} />  
                                            </div></div>)}
                                             {isMapsShown && (
                                            <Card1 data={{title:'Digital Maps',feature1:'Feature 1',feature2:'Feature 2',feature3:'Feature 3',feature4:'Feature 4',feature5:'Feature 5',url:'/features/digital-projects'} }/>  )}
                                             {isMinesShown && (
                                            <Card1 data={{title:'Digital Mines',feature1:'Feature 1',feature2:'Feature 2',feature3:'Feature 3',feature4:'Feature 4',feature5:'Feature 5',url:'/features/digital-projects'} }/>  )}
                                             {isLabsShown && (
                                            <Card1 data={{title:'Digital Labs',feature1:'Feature 1',feature2:'Feature 2',feature3:'Feature 3',feature4:'Feature 4',feature5:'Feature 5',url:'/features/digital-projects'} }/> )}
                                   
                                </div>
                            </div>
                        </li>
                        <li className="hoverable hover:bg-secondary ">
                         <Link htmlFor="toggle-one" href="/resources" ><a className="block cursor-pointer py-6 px-4 lg:p-6 tiny-subheading font-bold">Resources</a></Link>
                        </li>
                        <li className="hoverable hover:bg-secondary ">
                        <Link htmlFor="toggle-one" href="/resources" ><a className="block cursor-pointer py-6 px-4 lg:p-6 tiny-subheading font-bold">Partners</a></Link>
                        </li>
                        <li className="hoverable hover:bg-secondary ">
                        <Link htmlFor="toggle-one" href="/partners" ><a className="block cursor-pointer py-6 px-4 lg:p-6 tiny-subheading font-bold">Company</a></Link>
                        </li>
                     </ul>
                </div>
                <div className="pt-6 flex-col space-y-6">
                 
                    <Link  href="/contact"><a className="inline-block py-2 px-6 bg-black hover:bg-gray-300 hover:text-black shadow text-sm text-white font-bold rounded-l-xl rounded-t-xl transition duration-200 uppercase">Contact Sales</a></Link>
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
  