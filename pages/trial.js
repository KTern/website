import Card from "../component/card1"
import Image from "next/image";
import Link from "next/link";
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

export default function Trial () {
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
                        <li className="hoverable hover:bg-secondary ">
                            <label htmlFor="toggle-one" className="block cursor-pointer py-6 px-2 lg:p-6 header uppercase font-bold">Products</label>
                            <div role="toggle" className="p-2  mega-menu mb-16 sm:mb-0 shadow-2xl bg-white  border-2 border-gray-300">
                                <div className=" container mx-auto w-full flex flex-wrap justify-between bg-secondary  mx-2">
                                   <ul className="bg-white px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-300  pb-6 pt-6 lg:pt-3" >
                                        <h3 className="navbar-h text-black text-bold mb-2">Streams</h3>
                                        <div >
                                        <li>
                                                    <Link href="#"    ><a onMouseEnter={() => { setIsLabsShown(false);setIsMinesShown(false);setIsMapsShown(false);setIsProcessShown(false);setIsProjectShown(true)}}
                                         className="navbar-s block p-2 hover:bg-gray-300 text-black hover:text-gray-400">Digital Projects</a></Link>
                                        </li>
                                        <li>
                                                    <Link href="#"    ><a onMouseEnter={() => { setIsLabsShown(false);setIsMinesShown(false);setIsMapsShown(false);setIsProcessShown(true);setIsProjectShown(false)}}
                                         className="navbar-s block p-2 hover:bg-gray-300 text-black hover:text-gray-400">Digital Process</a></Link>
                                        </li>
                                        <li>
                                                    <Link href="#"    ><a onMouseEnter={() => { setIsLabsShown(false);setIsMinesShown(false);setIsMapsShown(true);setIsProcessShown(false);setIsProjectShown(false)}}
                                         className="navbar-s block p-2 hover:bg-gray-300 text-black hover:text-gray-400">Digital Maps</a></Link>
                                        </li>
                                        <li>
                                                    <Link href="#"   ><a onMouseEnter={() => { setIsLabsShown(false);setIsMinesShown(true);setIsMapsShown(false);setIsProcessShown(false);setIsProjectShown(false)}}
                                                        className="navbar-s block p-2 hover:bg-gray-300 text-black hover:text-gray-400">Digital Mines</a></Link>
                                        </li>
                                        <li>
                                        <Link href="#"   ><a  onMouseEnter={() => { setIsLabsShown(true);setIsMinesShown(false);setIsMapsShown(false);setIsProcessShown(false);setIsProjectShown(false)}}
className="navbar-s block p-2 hover:bg-gray-300 text-black hover:text-gray-400">Digital Labs</a></Link>
                                        </li>
                                        </div>
                                    </ul>
                                    <ul className="bg-secondary px-4 w-full sm:w-1/2 lg:w-2/4  pb-6 pt-6 lg:pt-3">
                                            {isProjectShown && (
                                                <Card ></Card>
                                            )}
                                            {isProcessShown && (
                                           <div className="p-6 flex space-x-10">
                                                    <div className="w-1/2">
                                                        <h3 className="mb-4 navbar-h">Digital Process</h3>
                                                        <p className="mb-4 navbar-s">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro perspiciatis eos aut enim autem ducimus dolor rem eaque excepturi delectus, dolore a, vero neque? 
                                                            Vitae libero delectus obcaecati.</p>
                                                         <Link href="/products/digital-process"  passHref>
                                                        <a className="inline-flex items-center pb-1 font-medium text-black hover:border-blue-500 group ">
                                                        <span className="tiny-heading group-hover:text-gray-400">Learn More</span>
                                                        <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                                        </svg>
                                                        </a>
                                                    </Link> 
                                                    </div>
                                                    <div className="w-1/2">
                                                        <Image className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="https://cdn.devdojo.com/images/may2021/blog-image-01.jpg" alt="Blog Image 1" width='400' height='270'/>
                                                    </div>
                                                   
                                                </div>
                                            )}
                                             {isMapsShown && (
                                           <div className="p-6 flex space-x-10">
                                                    <div className="w-1/2">
                                                        <h3 className="mb-4 navbar-h">Digital Maps</h3>
                                                        <p className="mb-4 navbar-s">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro perspiciatis eos aut enim autem ducimus dolor rem eaque excepturi delectus, dolore a, vero neque? 
                                                            Vitae libero delectus obcaecati.</p>
                                                         <Link href="/products/digital-maps"  passHref>
                                                        <a className="inline-flex items-center pb-1 font-medium text-black hover:border-blue-500 group ">
                                                        <span className="tiny-heading group-hover:text-gray-400">Learn More</span>
                                                        <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                                        </svg>
                                                        </a>
                                                    </Link> 
                                                    </div>
                                                    <div className="w-1/2">
                                                        <Image className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="https://cdn.devdojo.com/images/may2021/blog-image-01.jpg" alt="Blog Image"  width={400} height={270}/>
                                                    </div>
                                                   
                                                </div>
                                            )}
                                             {isMinesShown && (
                                               <div className="p-6 flex space-x-10">
                                                    <div className="w-1/2">
                                                        <h3 className="mb-4 navbar-h">Digital Mines</h3>
                                                        <p className="mb-4 navbar-s">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro perspiciatis eos aut enim autem ducimus dolor rem eaque excepturi delectus, dolore a, vero neque? 
                                                            Vitae libero delectus obcaecati.</p>
                                                         <Link href="/products/digital-mines"  passHref>
                                                        <a className="inline-flex items-center pb-1 font-medium text-black hover:border-blue-500 group ">
                                                        <span className="tiny-heading group-hover:text-gray-400">Learn More</span>
                                                        <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                                        </svg>
                                                        </a>
                                                    </Link> 
                                                    </div>
                                                    <div className="w-1/2">
                                                        <Image className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="https://cdn.devdojo.com/images/may2021/blog-image-01.jpg" alt="Blog Image" width={400} height={ 270}/>
                                                    </div>
                                                   
                                                </div>
                                            )}
                                             {isLabsShown && (
                                               <div className="p-6 flex space-x-10">
                                                    <div className="w-1/2">
                                                        <h3 className="mb-4 navbar-h">Digital Labs</h3>
                                                        <p className="mb-4 navbar-s">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro perspiciatis eos aut enim autem ducimus dolor rem eaque excepturi delectus, dolore a, vero neque? 
                                                            Vitae libero delectus obcaecati.</p>
                                                         <Link href="/products/digital-labs"  passHref>
                                                        <a className="inline-flex items-center pb-1 font-medium text-black hover:border-blue-500 group ">
                                                        <span className="tiny-heading group-hover:text-gray-400">Learn More</span>
                                                        <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                                        </svg>
                                                        </a>
                                                    </Link> 
                                                    </div>
                                                    <div className="w-1/2">
                                                        <Image className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="https://cdn.devdojo.com/images/may2021/blog-image-01.jpg" alt="Blog Image"  width={400} height={270}/>
                                                    </div>
                                                   
                                                </div>
                                            )}
                                    </ul>
                               <ul className="bg-secondary px-4 w-full sm:w-1/2 lg:w-2/4  pb-6 pt-6 lg:pt-3">
                                            {isProjectShown && (
                                                <div className="p-6 flex space-x-10">
                                                    <div className="w-1/2">
                                                        <h3 className="mb-4 navbar-h">Digital Projects</h3>
                                                        <p className="mb-4 navbar-s">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro perspiciatis eos aut enim autem ducimus dolor rem eaque excepturi delectus, dolore a, vero neque? 
                                                            Vitae libero delectus obcaecati.</p>
                                                         <Link href="/products/digital-projects"  passHref>
                                                        <a className="inline-flex items-center pb-1 font-medium text-black hover:border-blue-500 group ">
                                                        <span className="tiny-heading group-hover:text-gray-400">Learn More</span>
                                                        <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                                        </svg>
                                                        </a>
                                                    </Link> 
                                                    </div>
                                                    <div className="w-1/2">
                                                        <Image className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="https://cdn.devdojo.com/images/may2021/blog-image-01.jpg" alt="Blog Image 1"  width='400' height='270'/>
                                                    </div>
                                                   
                                                </div>
                                            )}
                                            {isProcessShown && (
                                           <div className="p-6 flex space-x-10">
                                                    <div className="w-1/2">
                                                        <h3 className="mb-4 navbar-h">Digital Process</h3>
                                                        <p className="mb-4 navbar-s">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro perspiciatis eos aut enim autem ducimus dolor rem eaque excepturi delectus, dolore a, vero neque? 
                                                            Vitae libero delectus obcaecati.</p>
                                                         <Link href="/products/digital-process"  passHref>
                                                        <a className="inline-flex items-center pb-1 font-medium text-black hover:border-blue-500 group ">
                                                        <span className="tiny-heading group-hover:text-gray-400">Learn More</span>
                                                        <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                                        </svg>
                                                        </a>
                                                    </Link> 
                                                    </div>
                                                    <div className="w-1/2">
                                                        <Image className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="https://cdn.devdojo.com/images/may2021/blog-image-01.jpg" alt="Blog Image 1" width='400' height='270'/>
                                                    </div>
                                                   
                                                </div>
                                            )}
                                             {isMapsShown && (
                                           <div className="p-6 flex space-x-10">
                                                    <div className="w-1/2">
                                                        <h3 className="mb-4 navbar-h">Digital Maps</h3>
                                                        <p className="mb-4 navbar-s">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro perspiciatis eos aut enim autem ducimus dolor rem eaque excepturi delectus, dolore a, vero neque? 
                                                            Vitae libero delectus obcaecati.</p>
                                                         <Link href="/products/digital-maps"  passHref>
                                                        <a className="inline-flex items-center pb-1 font-medium text-black hover:border-blue-500 group ">
                                                        <span className="tiny-heading group-hover:text-gray-400">Learn More</span>
                                                        <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                                        </svg>
                                                        </a>
                                                    </Link> 
                                                    </div>
                                                    <div className="w-1/2">
                                                        <Image className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="https://cdn.devdojo.com/images/may2021/blog-image-01.jpg" alt="Blog Image"  width={400} height={270}/>
                                                    </div>
                                                   
                                                </div>
                                            )}
                                             {isMinesShown && (
                                               <div className="p-6 flex space-x-10">
                                                    <div className="w-1/2">
                                                        <h3 className="mb-4 navbar-h">Digital Mines</h3>
                                                        <p className="mb-4 navbar-s">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro perspiciatis eos aut enim autem ducimus dolor rem eaque excepturi delectus, dolore a, vero neque? 
                                                            Vitae libero delectus obcaecati.</p>
                                                         <Link href="/products/digital-mines"  passHref>
                                                        <a className="inline-flex items-center pb-1 font-medium text-black hover:border-blue-500 group ">
                                                        <span className="tiny-heading group-hover:text-gray-400">Learn More</span>
                                                        <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                                        </svg>
                                                        </a>
                                                    </Link> 
                                                    </div>
                                                    <div className="w-1/2">
                                                        <Image className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="https://cdn.devdojo.com/images/may2021/blog-image-01.jpg" alt="Blog Image" width={400} height={ 270}/>
                                                    </div>
                                                   
                                                </div>
                                            )}
                                             {isLabsShown && (
                                               <div className="p-6 flex space-x-10">
                                                    <div className="w-1/2">
                                                        <h3 className="mb-4 navbar-h">Digital Labs</h3>
                                                        <p className="mb-4 navbar-s">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro perspiciatis eos aut enim autem ducimus dolor rem eaque excepturi delectus, dolore a, vero neque? 
                                                            Vitae libero delectus obcaecati.</p>
                                                         <Link href="/products/digital-labs"  passHref>
                                                        <a className="inline-flex items-center pb-1 font-medium text-black hover:border-blue-500 group ">
                                                        <span className="tiny-heading group-hover:text-gray-400">Learn More</span>
                                                        <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                                        </svg>
                                                        </a>
                                                    </Link> 
                                                    </div>
                                                    <div className="w-1/2">
                                                        <Image className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="https://cdn.devdojo.com/images/may2021/blog-image-01.jpg" alt="Blog Image"  width={400} height={270}/>
                                                    </div>
                                                   
                                                </div>
                                            )}
                                    </ul>
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

        
    </section>
)
 
}
  