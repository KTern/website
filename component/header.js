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


import React, { useState } from 'react';
export default function Header () {
    // const [ headerNew, changeHeader ] = useState(false);
    const [ isProjectShown, setIsProjectShown ] = useState(false);
    const [ isProcessShown, setIsProcessShown ] = useState(false);
    const [ isMapsShown, setIsMapsShown ] = useState(false);
    const [ isMinesShown, setIsMinesShown ] = useState(false);
    const [ isLabsShown, setIsLabsShown ] = useState(false);
    return (
        <section className="container  w-full">      
        {/* <!-- Desktop --> */}
        <nav className="p-0 bg-white  w-full   fixed z-50 shadow-md">
            <div className="flex flex-wrap justify-between items-center">
                <a className="text-lg font-medium xl:mx-20 " href="#">
                    <img width="148px" height="40px" src="/assets/KternLogo.png"/>
                </a>
                <div className="lg:hidden ">
                    <button className="navbar-burger flex items-center p-3 hover:bg-gray-50 rounded" onClick={openNav}>
                          <svg className="block h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                          </svg>
                        </button>
                </div>
                <div className="hidden lg:flex p-0">
                    <ul className=" flex space-x-2 xl:space-x-10">
                        <li className="hoverable hover:bg-secondary ">
                            <label htmlFor="toggle-one" className="block cursor-pointer py-6 px-2 lg:p-6 custom-card-subheading font-bold" onMouseEnter={() => setIsProjectShown(true)}>Products</label>
                            <div role="toggle" className="p-2  mega-menu mb-16 sm:mb-0 shadow-2xl bg-white  border-2 border-gray-300">
                                <div className=" container mx-auto w-full flex flex-wrap justify-between bg-secondary  mx-2">
                                    <ul className="bg-white px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-100 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                        <h3 className="custom-card-heading text-black text-bold mb-2">Platform</h3>
                                        <li>
                                            <a href="#" className="custom-card-subheading block p-3 hover:bg-gray-300 text-black hover:text-gray-400">Overview</a>
                                        </li>
                                        <li>
                                        <a href="#" className="custom-card-subheading block p-3 hover:bg-gray-300 text-black hover:text-gray-400">How it Works</a>
                                        </li>
                                        <li>
                                        <a href="#" className="custom-card-subheading block p-3 hover:bg-gray-300 text-black hover:text-gray-400">Pricing</a>
                                        </li>
                                        <li>
                                        <a href="#" className="custom-card-subheading block p-3 hover:bg-gray-300 text-black hover:text-gray-400">Cloud Status</a>
                                        </li>
                                        {/* <li>
                                        <a href="#" className="custom-card-subheading block p-3 hover:bg-gray-300 text-black hover:text-gray-400">Admiral Gial Ackbar</a>
                                        </li> */}
                                    </ul>
                                    <ul className="bg-white px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-300  pb-6 pt-6 lg:pt-3">
                                        <h3 className="custom-card-heading text-black text-bold mb-2">Streams</h3>
                                        <li>
                                        <a href="#" className="custom-card-subheading block p-3 hover:bg-gray-300 text-black hover:text-gray-400"   onMouseEnter={() => setIsProjectShown(true)}
                                        onMouseLeave={() => setIsProjectShown(false)}>Digital Projects</a>
                                        </li>
                                        <li>
                                        <a href="#" className="custom-card-subheading block p-3 hover:bg-gray-300 text-black hover:text-gray-400"   onMouseEnter={() => setIsProcessShown(true)}
                                        onMouseLeave={() => setIsProcessShown(false)}>Digital Process</a>
                                        </li>
                                        <li>
                                        <a href="#" className="custom-card-subheading block p-3 hover:bg-gray-300 text-black hover:text-gray-400"   onMouseEnter={() => setIsMapsShown(true)}
                                        onMouseLeave={() => setIsMapsShown(false)}>Digital Maps</a>
                                        </li>
                                        <li>
                                        <a href="#" className="custom-card-subheading block p-3 hover:bg-gray-300 text-black hover:text-gray-400"   onMouseEnter={() => setIsMinesShown(true)}
                                        onMouseLeave={() => setIsMinesShown(false)}>Digital Mines</a>
                                        </li>
                                        <li>
                                        <a href="#" className="custom-card-subheading block p-3 hover:bg-gray-300 text-black hover:text-gray-400"   onMouseEnter={() => setIsLabsShown(true)}
                onMouseLeave={() => setIsLabsShown(false)}>Digital Labs</a>
                                        </li>
                                    </ul>
                                    <ul className="bg-secondary px-4 w-full sm:w-1/2 lg:w-2/4  pb-6 pt-6 lg:pt-3">
                                            {isProjectShown && (
                                                <div className="p-6 flex space-x-10">
                                                    <div className="w-1/2">
                                                        <h3 className="mb-4 custom-card-heading">Digital Projects</h3>
                                                        <p className="mb-4 custom-card-subheading">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro perspiciatis eos aut enim autem ducimus dolor rem eaque excepturi delectus, dolore a, vero neque? 
                                                            Vitae libero delectus obcaecati.</p>
                                                        <a className="hidden mb-1 lg:inline-block py-2 px-6 bg-black hover:bg-gray-300 hover:text-black shadow  text-white font-bold rounded-l-xl custom-card-subheading rounded-t-xl transition duration-200 " href="#">Read More</a>
                                                    </div>
                                                    <div className="w-1/2">
                                                        <img className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="https://cdn.devdojo.com/images/may2021/blog-image-01.jpg" />
                                                    </div>
                                                   
                                                </div>
                                            )}
                                            {isProcessShown && (
                                           <div className="p-6 flex space-x-10">
                                                    <div className="w-1/2">
                                                        <h3 className="mb-4 custom-card-heading">Digital Process</h3>
                                                        <p className="mb-4 custom-card-subheading">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro perspiciatis eos aut enim autem ducimus dolor rem eaque excepturi delectus, dolore a, vero neque? 
                                                            Vitae libero delectus obcaecati.</p>
                                                        <a className="hidden mb-1 lg:inline-block py-2 px-6 bg-black hover:bg-gray-300 hover:text-black shadow  text-white font-bold rounded-l-xl custom-card-subheading rounded-t-xl transition duration-200 " href="#">Read More</a>
                                                    </div>
                                                    <div className="w-1/2">
                                                        <img className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="https://cdn.devdojo.com/images/may2021/blog-image-01.jpg" />
                                                    </div>
                                                   
                                                </div>
                                            )}
                                             {isMapsShown && (
                                           <div className="p-6 flex space-x-10">
                                                    <div className="w-1/2">
                                                        <h3 className="mb-4 custom-card-heading">Digital Maps</h3>
                                                        <p className="mb-4 custom-card-subheading">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro perspiciatis eos aut enim autem ducimus dolor rem eaque excepturi delectus, dolore a, vero neque? 
                                                            Vitae libero delectus obcaecati.</p>
                                                        <a className="hidden mb-1 lg:inline-block py-2 px-6 bg-black hover:bg-gray-300 hover:text-black shadow  text-white font-bold rounded-l-xl custom-card-subheading rounded-t-xl transition duration-200 " href="#">Read More</a>
                                                    </div>
                                                    <div className="w-1/2">
                                                        <img className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="https://cdn.devdojo.com/images/may2021/blog-image-01.jpg" />
                                                    </div>
                                                   
                                                </div>
                                            )}
                                             {isMinesShown && (
                                               <div className="p-6 flex space-x-10">
                                                    <div className="w-1/2">
                                                        <h3 className="mb-4 custom-card-heading">Digital Mines</h3>
                                                        <p className="mb-4 custom-card-subheading">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro perspiciatis eos aut enim autem ducimus dolor rem eaque excepturi delectus, dolore a, vero neque? 
                                                            Vitae libero delectus obcaecati.</p>
                                                        <a className="hidden mb-1 lg:inline-block py-2 px-6 bg-black hover:bg-gray-300 hover:text-black shadow  text-white font-bold rounded-l-xl custom-card-subheading rounded-t-xl transition duration-200 " href="#">Read More</a>
                                                    </div>
                                                    <div className="w-1/2">
                                                        <img className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="https://cdn.devdojo.com/images/may2021/blog-image-01.jpg" />
                                                    </div>
                                                   
                                                </div>
                                            )}
                                             {isLabsShown && (
                                               <div className="p-6 flex space-x-10">
                                                    <div className="w-1/2">
                                                        <h3 className="mb-4 custom-card-heading">Digital Labs</h3>
                                                        <p className="mb-4 custom-card-subheading">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro perspiciatis eos aut enim autem ducimus dolor rem eaque excepturi delectus, dolore a, vero neque? 
                                                            Vitae libero delectus obcaecati.</p>
                                                        <a className="hidden mb-1 lg:inline-block py-2 px-6 bg-black hover:bg-gray-300 hover:text-black shadow  text-white font-bold rounded-l-xl custom-card-subheading rounded-t-xl transition duration-200 " href="#">Read More</a>
                                                    </div>
                                                    <div className="w-1/2">
                                                        <img className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="https://cdn.devdojo.com/images/may2021/blog-image-01.jpg" />
                                                    </div>
                                                   
                                                </div>
                                            )}
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="hoverable hover:bg-secondary ">
                        <label htmlFor="toggle-one" className="block cursor-pointer py-6 px-4 lg:p-6 custom-card-subheading font-bold">Solutions</label>
                        </li>
                        <li className="hoverable hover:bg-secondary ">
                    
                            <a href="/resources"  className="block cursor-pointer py-6 px-4 lg:p-6 custom-card-subheading font-bold">Resources</a>
                       
                        </li>
                        <li className="hoverable hover:bg-secondary ">
                        <a href="/partners" className="block cursor-pointer py-6 px-4 lg:p-6 custom-card-subheading font-bold">Partners</a>
                        </li>
                    </ul>
               </div>
                <div className=" hidden lg:block flex-end xl:mx-20 lg:my-auto mr-4">
                    <a className="hidden mb-1 lg:inline-block py-2 px-6 bg-black hover:bg-gray-300 hover:text-black shadow  text-white font-bold rounded-l-xl custom-card-subheading rounded-t-xl transition duration-200 " href="/contact">Contact Sales</a>
                </div>
            </div>
        </nav>

        {/* <!-- Mobile --> */}
        <div id="navbar-menu" className="z-50 hidden relative bg-black">
            <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
            <nav  className="nav fixed top-0 left-0 bottom-0 flex flex-col w-full max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                <div className="flex items-center mb-8">
                    <a className="mr-auto text-2xl font-medium leading-none" href="#">
                        <img className="h-12" src="/assets/kternLogo.png" alt="Ktern Logo" width="auto"/>
                    </a>
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
                            <label htmlFor="toggle-one" className="block cursor-pointer py-6 px-4 lg:p-6 custom-card-subheading font-bold" onMouseEnter={() => setIsProjectShown(true)}>Products</label>
                            <div role="toggle" className="p-6  mega-menu mb-16 sm:mb-0 shadow-2xl bg-white  border-2 border-gray-300">
                                <div className=" container mx-auto w-full flex flex-wrap justify-between bg-secondary  mx-2">
                                    <ul className="bg-white px-4 w-full  lg:w-1/4 border-gray-100 lg:border-b lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                        <h3 className="custom-card-heading text-black text-bold mb-2">Platform</h3>
                                        <li>
                                            <a href="#" className="custom-card-subheading block p-3 hover:bg-gray-300 text-black hover:text-gray-400">Overview</a>
                                        </li>
                                        <li>
                                        <a href="#" className="custom-card-subheading block p-3 hover:bg-gray-300 text-black hover:text-gray-400">How it Works</a>
                                        </li>
                                        <li>
                                        <a href="#" className="custom-card-subheading block p-3 hover:bg-gray-300 text-black hover:text-gray-400">Pricing</a>
                                        </li>
                                        <li>
                                        <a href="#" className="custom-card-subheading block p-3 hover:bg-gray-300 text-black hover:text-gray-400">Cloud Status</a>
                                        </li>
                                        {/* <li>
                                        <a href="#" className="custom-card-subheading block p-3 hover:bg-gray-300 text-black hover:text-gray-400">Admiral Gial Ackbar</a>
                                        </li> */}
                                    </ul>
                                    <ul className="bg-white px-4 w-full  lg:w-1/4 border-gray-300 lg:border-b lg:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                        <h3 className="custom-card-heading text-black text-bold mb-2">Streams</h3>
                                        <li>
                                        <a href="#" className="custom-card-subheading block p-3 hover:bg-gray-300 text-black hover:text-gray-400"   onMouseEnter={() => setIsProjectShown(true)}
                                        onMouseLeave={() => setIsProjectShown(false)}>Digital Projects</a>
                                        </li>
                                        <li>
                                        <a href="#" className="custom-card-subheading block p-3 hover:bg-gray-300 text-black hover:text-gray-400"   onMouseEnter={() => setIsProcessShown(true)}
                                        onMouseLeave={() => setIsProcessShown(false)}>Digital Process</a>
                                        </li>
                                        <li>
                                        <a href="#" className="custom-card-subheading block p-3 hover:bg-gray-300 text-black hover:text-gray-400"   onMouseEnter={() => setIsMapsShown(true)}
                                        onMouseLeave={() => setIsMapsShown(false)}>Digital Maps</a>
                                        </li>
                                        <li>
                                        <a href="#" className="custom-card-subheading block p-3 hover:bg-gray-300 text-black hover:text-gray-400"   onMouseEnter={() => setIsMinesShown(true)}
                                        onMouseLeave={() => setIsMinesShown(false)}>Digital Mines</a>
                                        </li>
                                        <li>
                                        <a href="#" className="custom-card-subheading block p-3 hover:bg-gray-300 text-black hover:text-gray-400"   onMouseEnter={() => setIsLabsShown(true)}
                onMouseLeave={() => setIsLabsShown(false)}>Digital Labs</a>
                                        </li>
                                    </ul>
                                    <ul className="bg-secondary px-4 w-full  lg:w-2/4  pb-6 pt-6 lg:pt-3">
                                            {isProjectShown && (
                                                <div className="p-6 w-full relative lg:flex lg:space-x-10 ">
                                                    <div className="w-full lg:w-1/2 mb-4">
                                                        <h3 className="mb-4 custom-card-heading">Digital Projects</h3>
                                                        <p className="mb-4 custom-card-subheading">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro perspiciatis eos aut enim autem ducimus dolor rem eaque excepturi delectus, dolore a, vero neque? 
                                                            Vitae libero delectus obcaecati.</p>
                                                        <a className=" mb-2 lg:inline-block py-2 px-6 bg-black hover:bg-gray-300 hover:text-black shadow  text-white font-bold rounded-l-xl custom-card-subheading rounded-t-xl transition duration-200 " href="#">Read More</a>
                                                    </div>
                                                    <div className="w-full lg:w-1/2">
                                                        <img className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="https://cdn.devdojo.com/images/may2021/blog-image-01.jpg" />
                                                    </div>
                                                   
                                                </div>
                                            )}
                                            {isProcessShown && (
                                           <div className="p-6 w-full relative lg:flex lg:space-x-10 ">
                                                    <div className="w-full lg:w-1/2 mb-4">
                                                        <h3 className="mb-4 custom-card-heading">Digital Process</h3>
                                                        <p className="mb-4 custom-card-subheading">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro perspiciatis eos aut enim autem ducimus dolor rem eaque excepturi delectus, dolore a, vero neque? 
                                                            Vitae libero delectus obcaecati.</p>
                                                        <a className=" mb-2 lg:inline-block py-2 px-6 bg-black hover:bg-gray-300 hover:text-black shadow  text-white font-bold rounded-l-xl custom-card-subheading rounded-t-xl transition duration-200 " href="#">Read More</a>
                                                    </div>
                                                    <div className="w-full lg:w-1/2">
                                                        <img className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="https://cdn.devdojo.com/images/may2021/blog-image-01.jpg" />
                                                    </div>
                                                   
                                                </div>
                                            )}
                                             {isMapsShown && (
                                           <div className="p-6 w-full relative lg:flex lg:space-x-10 ">
                                                    <div className="w-full lg:w-1/2 mb-4">
                                                        <h3 className="mb-4 custom-card-heading">Digital Maps</h3>
                                                        <p className="mb-4 custom-card-subheading">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro perspiciatis eos aut enim autem ducimus dolor rem eaque excepturi delectus, dolore a, vero neque? 
                                                            Vitae libero delectus obcaecati.</p>
                                                        <a className=" mb-2 lg:inline-block py-2 px-6 bg-black hover:bg-gray-300 hover:text-black shadow  text-white font-bold rounded-l-xl custom-card-subheading rounded-t-xl transition duration-200 " href="#">Read More</a>
                                                    </div>
                                                    <div className="w-full lg:w-1/2">
                                                        <img className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="https://cdn.devdojo.com/images/may2021/blog-image-01.jpg" />
                                                    </div>
                                                   
                                                </div>
                                            )}
                                             {isMinesShown && (
                                                <div className="p-6 w-full relative lg:flex lg:space-x-10 ">
                                                    <div className="w-full lg:w-1/2 mb-4">
                                                        <h3 className="mb-4 custom-card-heading">Digital Mines</h3>
                                                        <p className="mb-4 custom-card-subheading">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro perspiciatis eos aut enim autem ducimus dolor rem eaque excepturi delectus, dolore a, vero neque? 
                                                            Vitae libero delectus obcaecati.</p>
                                                        <a className=" mb-2 lg:inline-block py-2 px-6 bg-black hover:bg-gray-300 hover:text-black shadow  text-white font-bold rounded-l-xl custom-card-subheading rounded-t-xl transition duration-200 " href="#">Read More</a>
                                                    </div>
                                                    <div className="w-full lg:w-1/2">
                                                        <img className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="https://cdn.devdojo.com/images/may2021/blog-image-01.jpg" />
                                                    </div>
                                                   
                                                </div>
                                            )}
                                             {isLabsShown && (
                                               <div className="p-6 w-full relative lg:flex lg:space-x-10 ">
                                                    <div className="w-full lg:w-1/2 mb-4">
                                                        <h3 className="mb-4 custom-card-heading">Digital Labs</h3>
                                                        <p className="mb-4 custom-card-subheading">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro perspiciatis eos aut enim autem ducimus dolor rem eaque excepturi delectus, dolore a, vero neque? 
                                                            Vitae libero delectus obcaecati.</p>
                                                        <a className=" mb-2 lg:inline-block py-2 px-6 bg-black hover:bg-gray-300 hover:text-black shadow  text-white font-bold rounded-l-xl custom-card-subheading rounded-t-xl transition duration-200 " href="#">Read More</a>
                                                    </div>
                                                    <div className="w-full lg:w-1/2">
                                                        <img className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="https://cdn.devdojo.com/images/may2021/blog-image-01.jpg" />
                                                    </div>
                                                   
                                                </div>
                                            )}
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="hoverable hover:bg-secondary ">
                        <label htmlFor="toggle-one" className="block cursor-pointer py-6 px-4 lg:p-6 custom-card-subheading font-bold">Solutions</label>
                        </li>
                        <li className="hoverable hover:bg-secondary ">
                        <a href="/resources" className="block cursor-pointer py-6 px-4 lg:p-6 custom-card-subheading font-bold">Resources</a>
                        </li>
                        <li className="hoverable hover:bg-secondary ">
                        <a href="/partners" className="block cursor-pointer py-6 px-4 lg:p-6 custom-card-subheading font-bold">Partners</a>
                        </li>
                     </ul>
                </div>
                <div className="pt-6 flex-col space-y-6">
                 
                    <a className="inline-block py-2 px-6 bg-black hover:bg-gray-300 hover:text-black shadow text-sm text-white font-bold rounded-l-xl rounded-t-xl transition duration-200" href="/contact">Contact Sales</a>
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
  