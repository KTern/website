import Layout from "../../component/Layout";
import Carousel from 'react-multi-carousel';

import Image from "next/image";
import Link from "next/link";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
function next(id, token, last) {
  let elem = document.getElementById(id);
  const styles = window.getComputedStyle(elem);
  const amount = styles.getPropertyValue("--amount");
  const gapV = styles.getPropertyValue("--gap-v");
  const gapM = amount * gapV;
  const tokElem = document.getElementById(token);
  const tokStyles = window.getComputedStyle(tokElem);
  const iWidth = parseFloat(tokStyles.width);
  document.getElementById(id).scrollBy({left: (iWidth * amount) + gapM, behavior: "smooth"});
}

function prev(id, token, last) {
  let elem = document.getElementById(id);
  const styles = window.getComputedStyle(elem);
  const amount = styles.getPropertyValue("--amount");
  const gapV = styles.getPropertyValue("--gap-v");
  const gapM = amount * gapV;
  const tokElem = document.getElementById(token);
  const tokStyles = window.getComputedStyle(tokElem);
  const iWidth = parseFloat(tokStyles.width);
  document.getElementById(id).scrollBy({left: -((iWidth * amount) + gapM), behavior: "smooth"}); 
}
export default function Digital_Labs () {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative py-10 pb-auto pb-72">
                <div className="hidden lg:block absolute inset-0 w-full relative">
            <Image  src="/atis-assets/background/lines.svg" alt="" layout="fill"/>
            </div>

            <div className="relative pt-12 md:pt-16 pb-40  bg-labs-secondary border-b-4 border-labs-primary">
                <div className="relative container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center mb-12 md:mb-20">
                        <h2 className="mb-3    heading">Digital Labs</h2>
                        <span className="mb-3  text-black subheading">AI Driven Automated SAP Testing</span> 
                            <div><br />
                                <Link  href="#" passHref><a className="hidden  lg:inline-block py-3 px-10 bg-labs-primary hover:bg-gray-100 hover:text-black shadow text-white  rounded-l-xl rounded-t-xl transition duration-200 uppercase hyperlink">Contact Sales</a></Link>
                            </div>
                    </div>
                </div>
                <div className="absolute inset-x-0  max-w-2xl mx-auto px-4 bg-labs-secondary shadow-2xl rounded-2xl ">
                <div className="rounded-3xl md:rounded-6xl md:rounded-br-none h-80 w-100 relative"><Image className="rounded-3xl md:rounded-6xl" layout="fill" src="/product/labs/labs_1.svg" alt="" /></div>
                <div className="absolute inset-0 flex items-center justify-center ">
                    <Link href="/video"  passHref>
                                <a className="flex items-center justify-center hover:bg-black rounded-full bg-white animate-pulse">
                                <svg className="w-16 h-16 hover:text-labs-secondary text-labs-primary  transition duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                                </svg>
                               </a>
                    </Link >
                </div>
                </div>
            </div>
            </section>    
            {/* /Hero Section */}
            {/* Streams Content Section */}
            <section className="px-5 pb-10 relative overflow-hidden ">
                {/* <Image className="hidden lg:block absolute inset-0 w-full" src="/atis-assets/background/lines.svg" alt=""/> */}
                <div className="relative  pt-20 rounded-t-3xl pb-12 lg:pb-24">
                    <div className="w-full md:container mx-auto px-4">
                        <div className="flex flex-wrap -mx-4">
                            <div className="hidden sm:block w-full lg:w-1/2 px-4 flex items-center justify-center">
                                <div className="relative" style={{zIndex: 0}}>
                                    <div className="h-128 w-full relative"><Image className="rounded-3xl md:rounded-br-none bg-gray-200" width={500} height={400}  src="/product/labs/labs_2.svg" alt=""/></div>
                                     <div  className="animate-pulse hidden md:block absolute w-60 h-40" style={{top:'-2rem', right: '3rem', zIndex: -1}}><svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0 49V0H49H50L49.99 0.00980377C76.595 0.537064 98 22.2688 98 49C98 76.062 76.062 98 49 98C21.938 98 0 76.062 0 49Z" fill="#248232"/>
</svg></div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{bottom:'-2rem',right: '-2rem', zIndex: -1}}><svg width="166" height="165" viewBox="0 0 166 165" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M82.9727 164.999C82.8152 165 82.6577 165 82.5 165C36.9365 165 0 128.063 0 82.5C0 36.9365 36.9365 0 82.5 0C128.063 0 165 36.9365 165 82.5C165 83.2975 164.989 84.0924 164.966 84.8844L165.21 165H82.9714L82.9727 164.999Z" fill="#3CCD60"/>
</svg></div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{bottom:'2.5rem', right: '-4.5rem', zIndex: -1}}><Image layout="fill" src="/atis-assets/elements/bullets-gray-left.svg" alt=""/></div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{ top: '3rem', left: '-8rem', zIndex: -1 }} ><Image layout="fill" src="/atis-assets/elements/bullets-gray-right.svg" alt="" /></div>                                   
                                </div>
                            </div>                           
                            <div className="w-full lg:w-1/2 md:px-20 lg:mb-12 lg:mb-20 lg:mb-0 flex items-center">
                                <div className="w-full text-center lg:text-left">
                                    <div className="max-w-md mx-auto lg:mx-0">
                                    <h2 className="mb-3  card-heading">
                                        <span className="card-heading">Auto Recommendation  </span>        
                                    </h2>
                                    </div>
                                    <div className="max-w-sm mx-auto lg:mx-0">
                                    <p className="mb-6 text-gray-400  card-subheading">KTern&apos;s Intelligent Test Case Recommendation Engine Automatically assess, analyze, recommend test cases for any SAP Transformation labs. </p>
                                <Link href="/features/digital-labs"  passHref>
                                                        <a className="inline-flex items-center pb-1  text-black hover:border-blue-500 group ">
                                                        <span className="hyperlink group-hover:text-gray-400">Learn More</span>
                                                        <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                                        </svg>
                                                        </a>
                                                    </Link>
                                    <div className="my-12"></div>
                                
                                    </div>
                                </div>
                            </div>
                            <div className="invisible lg:visible w-full lg:w-1/2 px-4 flex items-center justify-center">
                            <div className="absolute mr-4" style={{zIndex: 0}}>
                                <div><Image width={500} height={400} className="rounded-3xl md:rounded-br-none bg-gray-200" src="/product/labs/labs_2.svg" alt=""/></div>
                                    <div  className="animate-pulse hidden md:block absolute w-60 h-40" style={{top:'-2rem', right: '3rem', zIndex: -1}}><svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0 49V0H49H50L49.99 0.00980377C76.595 0.537064 98 22.2688 98 49C98 76.062 76.062 98 49 98C21.938 98 0 76.062 0 49Z" fill="#248232"/>
</svg></div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{bottom:'-2rem',right: '-2rem', zIndex: -1}}><svg width="166" height="165" viewBox="0 0 166 165" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M82.9727 164.999C82.8152 165 82.6577 165 82.5 165C36.9365 165 0 128.063 0 82.5C0 36.9365 36.9365 0 82.5 0C128.063 0 165 36.9365 165 82.5C165 83.2975 164.989 84.0924 164.966 84.8844L165.21 165H82.9714L82.9727 164.999Z" fill="#3CCD60"/>
</svg></div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{bottom:'2.5rem', right: '-4.5rem', zIndex: -1}}><Image layout="fill" src="/atis-assets/elements/bullets-gray-left.svg" alt=""/></div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{ top: '3rem', left: '-8rem', zIndex: -1 }} ><Image layout="fill" src="/atis-assets/elements/bullets-gray-right.svg" alt="" /></div>
                                   
                            </div>
                            </div>
                       </div>
                        </div>
                </div>
                <div className="relative bg-labs-secondary pt-2  lg:pb-24 pb-12 lg:pb-24">
                    <div className="container mx-auto px-20">
                        <div className="flex flex-wrap -mx-20">
                            <div className="w-full lg:w-1/2 px-4 flex items-center justify-center">
                                <div className="relative" style={{zIndex: 0}}>
                                    <div className="h-128 w-full relative"><Image className="rounded-3xl md:rounded-br-none bg-gray-200" width={500} height={400}  src="/product/labs/labs_2.svg" alt=""/></div>
                                    <div  className="animate-pulse hidden md:block absolute w-60 h-40" style={{top:'-2rem', right: '3rem', zIndex: -1}}><svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0 49V0H49H50L49.99 0.00980377C76.595 0.537064 98 22.2688 98 49C98 76.062 76.062 98 49 98C21.938 98 0 76.062 0 49Z" fill="#248232"/>
</svg></div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{bottom:'-2rem',right: '-2rem', zIndex: -1}}><svg width="166" height="165" viewBox="0 0 166 165" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M82.9727 164.999C82.8152 165 82.6577 165 82.5 165C36.9365 165 0 128.063 0 82.5C0 36.9365 36.9365 0 82.5 0C128.063 0 165 36.9365 165 82.5C165 83.2975 164.989 84.0924 164.966 84.8844L165.21 165H82.9714L82.9727 164.999Z" fill="#3CCD60"/>
</svg></div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{bottom:'2.5rem', right: '-4.5rem', zIndex: -1}}><Image layout="fill" src="/atis-assets/elements/bullets-gray-left.svg" alt=""/></div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{ top: '3rem', left: '-8rem', zIndex: -1 }} ><Image layout="fill" src="/atis-assets/elements/bullets-gray-right.svg" alt="" /></div>                                   
                                   
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 md:px-20  lg:mb-20 lg:mb-0 flex items-center">
                                <div className="w-full text-center lg:text-left">
                                    <div className="max-w-md mx-auto lg:mx-0">
                                    <h2 className="mb-3   card-heading">
                                        <span className="card-heading">Single Source of Truth</span>
                                        
                                    </h2>
                                    </div>
                                    <div className="max-w-sm mx-auto lg:mx-0">
                                    <p className="mb-6 text-gray-400  card-subheading">The test center gives a 360 degree view of all the information, notes and files pertaining to a test case.</p>
                                <Link href="/features/digital-labs"  passHref>
                                                        <a className="inline-flex items-center pb-1  text-black hover:border-blue-500 group ">
                                                        <span className="hyperlink group-hover:text-gray-400">Learn More</span>
                                                        <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                                        </svg>
                                                        </a>
                                                    </Link>
                                    <div className="my-12"></div>
                                
                                </div>

                                </div>
                        </div>
                           
                        </div>
                        </div>
                </div>   
                 <div className="relative bg-labs-secondary pt-20  pb-12 lg:pb-24">
                    <div className="w-full md:container mx-auto px-4">
                        <div className="flex flex-wrap -mx-4">
                            <div className="hidden sm:block w-full lg:w-1/2 px-4 flex items-center justify-center">
                                <div className="relative" style={{zIndex: 0}}>
                                    <div className="h-128 w-full relative"><Image className="rounded-3xl md:rounded-br-none bg-gray-200" width={500} height={400}  src="/product/labs/labs_2.svg" alt=""/></div>
                                     <div  className="animate-pulse hidden md:block absolute w-60 h-40" style={{top:'-2rem', right: '3rem', zIndex: -1}}><svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0 49V0H49H50L49.99 0.00980377C76.595 0.537064 98 22.2688 98 49C98 76.062 76.062 98 49 98C21.938 98 0 76.062 0 49Z" fill="#248232"/>
</svg></div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{bottom:'-2rem',right: '-2rem', zIndex: -1}}><svg width="166" height="165" viewBox="0 0 166 165" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M82.9727 164.999C82.8152 165 82.6577 165 82.5 165C36.9365 165 0 128.063 0 82.5C0 36.9365 36.9365 0 82.5 0C128.063 0 165 36.9365 165 82.5C165 83.2975 164.989 84.0924 164.966 84.8844L165.21 165H82.9714L82.9727 164.999Z" fill="#3CCD60"/>
</svg></div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{bottom:'2.5rem', right: '-4.5rem', zIndex: -1}}><Image layout="fill" src="/atis-assets/elements/bullets-gray-left.svg" alt=""/></div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{ top: '3rem', left: '-8rem', zIndex: -1 }} ><Image layout="fill" src="/atis-assets/elements/bullets-gray-right.svg" alt="" /></div>                                   
                                </div>
                            </div>                           
                             <div className="w-full lg:w-1/2 md:px-20 lg:mb-12 lg:mb-20 lg:mb-0 flex items-center">
                                <div className="w-full text-center lg:text-left">
                                    <div className="max-w-md mx-auto lg:mx-0">
                                    <h2 className="mb-3  card-heading">
                                        <span className="card-heading">Sign Off </span>        
                                    </h2>
                                    </div>
                                    <div className="max-w-sm mx-auto lg:mx-0">
                                    <p className="mb-6 text-gray-400  card-subheading">KTern&apos;s Sign off wizard allows to create multiple sign-off items and labs multiple test cases under each sign-off item. Stakeholder Hierarchy ensures sign-off items are approved in a hierarchial manner</p>
                                <Link href="/features/digital-labs"  passHref>
                                                        <a className="inline-flex items-center pb-1  text-black hover:border-blue-500 group ">
                                                        <span className="hyperlink group-hover:text-gray-400">Learn More</span>
                                                        <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                                        </svg>
                                                        </a>
                                                    </Link>
                                    <div className="my-12"></div>
                                
                                    </div>
                                </div>
                            </div>
                            <div className="invisible lg:visible w-full lg:w-1/2 px-4 flex items-center justify-center">
                            <div className="absolute mr-4" style={{zIndex: 0}}>
                                <div className="h-100 w-100 relative "><Image width={500} height={400}  className="rounded-3xl md:rounded-br-none bg-gray-200" src="/product/labs/labs_2.svg" alt=""/></div>
                                    <div  className="animate-pulse hidden md:block absolute w-60 h-40" style={{top:'-2rem', right: '3rem', zIndex: -1}}><svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0 49V0H49H50L49.99 0.00980377C76.595 0.537064 98 22.2688 98 49C98 76.062 76.062 98 49 98C21.938 98 0 76.062 0 49Z" fill="#248232"/>
</svg></div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{bottom:'-2rem',right: '-2rem', zIndex: -1}}><svg width="166" height="165" viewBox="0 0 166 165" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M82.9727 164.999C82.8152 165 82.6577 165 82.5 165C36.9365 165 0 128.063 0 82.5C0 36.9365 36.9365 0 82.5 0C128.063 0 165 36.9365 165 82.5C165 83.2975 164.989 84.0924 164.966 84.8844L165.21 165H82.9714L82.9727 164.999Z" fill="#3CCD60"/>
</svg></div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{bottom:'2.5rem', right: '-4.5rem', zIndex: -1}}><Image layout="fill" src="/atis-assets/elements/bullets-gray-left.svg" alt=""/></div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{ top: '3rem', left: '-8rem', zIndex: -1 }} ><Image layout="fill" src="/atis-assets/elements/bullets-gray-right.svg" alt="" /></div>
                                   
                            </div>
                            </div>
                       </div>
                        </div>
                </div>
                <div className="relative bg-labs-secondary pt-2  rounded-b-3xl lg:pb-24 pb-12 lg:pb-24">
                    <div className="container mx-auto px-20">
                        <div className="flex flex-wrap -mx-20">
                            <div className="w-full lg:w-1/2 px-4 flex items-center justify-center">
                                <div className="relative" style={{zIndex: 0}}>
                                    <div className="h-128 w-full relative"><Image className="rounded-3xl md:rounded-br-none bg-gray-200" width={500} height={400}  src="/product/labs/labs_2.svg" alt=""/></div>
                                    <div  className="animate-pulse hidden md:block absolute w-60 h-40" style={{top:'-2rem', right: '3rem', zIndex: -1}}><svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0 49V0H49H50L49.99 0.00980377C76.595 0.537064 98 22.2688 98 49C98 76.062 76.062 98 49 98C21.938 98 0 76.062 0 49Z" fill="#248232"/>
</svg></div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{bottom:'-2rem',right: '-2rem', zIndex: -1}}><svg width="166" height="165" viewBox="0 0 166 165" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M82.9727 164.999C82.8152 165 82.6577 165 82.5 165C36.9365 165 0 128.063 0 82.5C0 36.9365 36.9365 0 82.5 0C128.063 0 165 36.9365 165 82.5C165 83.2975 164.989 84.0924 164.966 84.8844L165.21 165H82.9714L82.9727 164.999Z" fill="#3CCD60"/>
</svg></div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{bottom:'2.5rem', right: '-4.5rem', zIndex: -1}}><Image layout="fill" src="/atis-assets/elements/bullets-gray-left.svg" alt=""/></div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{ top: '3rem', left: '-8rem', zIndex: -1 }} ><Image layout="fill" src="/atis-assets/elements/bullets-gray-right.svg" alt="" /></div>                                   
                                   
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 md:px-20  lg:mb-20 lg:mb-0 flex items-center">
                                <div className="w-full text-center lg:text-left">
                                    <div className="max-w-md mx-auto lg:mx-0">
                                    <h2 className="mb-3   card-heading">
                                       
                                        <span className=" card-heading">Auto Test Execution</span>
                                    </h2>
                                    </div>
                                    <div className="max-w-sm mx-auto lg:mx-0">
                                    <p className="mb-6 text-gray-400 leading-loose card-subheading">KTern automatically executes test cases generating test evidence and recording the outcomes of execution.</p>
                                <Link href="/features/digital-labs"  passHref>
                                                        <a className="inline-flex items-center pb-1  text-black hover:border-blue-500 group ">
                                                        <span className="hyperlink group-hover:text-gray-400">Learn More</span>
                                                        <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                                        </svg>
                                                        </a>
                                                    </Link>
                                    <div className="my-12"></div>
                                
                                </div>

                                </div>
                        </div>
                           
                        </div>
                        </div>
                </div>   
                </section>
            {/*/ Streams Content Section */}
            {/* Bots Section */}
            <div className="px-20 py-10">
                <div className="px-10">
                <h2 className="card-heading mb-4">Digital labs Bots</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. ab repudiandae et.</p>
                </div>
                <Carousel className="bots flex p-10  " responsive={responsive}>
                    <div className="p-3 bots-card flex-row justify-center items-center shadow-xl  border-2 border-labs-400 text-center rounded-3xl">
                        
                        <p className="text-lg font-bold mt-7 mb-7">DX labs Orchestrator Bot</p>
                        <p className="text-md">Orchestrate labs Lifecycle with a Digital footprint</p>
                    </div>
                    <div className="p-3 bots-card flex-row justify-center items-center shadow-xl  border-2 border-labs-400 text-center rounded-3xl">
                        
                        <p className="text-lg font-bold mt-7 mb-7">DX Release Orchestrator Bot</p>
                        <p className="text-md">Orchestrate the SAP TR Releases</p>
                    </div>
                    <div className="p-3 bots-card flex-row justify-center items-center shadow-xl  border-2 border-labs-400 text-center rounded-3xl">
                        
                        <p className="text-lg font-bold mt-7 mb-7">DX Event Orchestrator Bot</p>
                        <p className="text-md">Event Orchestrations for swift collaborations</p>
                    </div>
                    <div className="p-3 bots-card flex-row justify-center items-center shadow-xl  border-2 border-labs-400 text-center rounded-3xl">
                        
                        <p className="text-lg font-bold mt-7 mb-7">DX Change Management Orchestrator Bot</p>
                        <p className="text-md">Orchestrate the Change management</p>
                    </div>
                     <div className="p-3 bots-card flex-row justify-center items-center shadow-xl  border-2 border-labs-400 text-center rounded-3xl">
                        
                        <p className="text-lg font-bold mt-7 mb-7">DX  Security Impact Simulation Bot</p>
                        <p className="text-md">Simulate the Security Impact - Helping to mitigate Security and Compliance Risk</p>
                    </div>
                     <div className="p-3 bots-card flex-row justify-center items-center shadow-xl  border-2 border-labs-400 text-center rounded-3xl">
                        
                        <p className="text-lg font-bold mt-7 mb-7">Bot Name</p>
                        <p className="text-md">Bot description</p>
                    </div>
                    <div className="p-3 bots-card flex-row justify-center items-center shadow-xl  border-2 border-labs-400 text-center rounded-3xl">
                        
                        <p className="text-lg font-bold mt-7 mb-7">Bot Name</p>
                        <p className="text-md">Bot description</p>
                    </div>   
                </Carousel>
            </div>
            {/* /Bots Section */}
          {/* Testimonial Section */}
            <section >
                <div className="p-10 md:p-20 bg-secondary radius-for-skewed">
                    <div className="container  px-4 mx-auto">
                    <div className="lg:flex shadow-2xl bg-white items-center justify-center md:space-x-8">
                        {/* <div className="mb-10 text-center lg:hidden">
                        <button className="mr-6 lg:mr-0 bg-white p-4 rounded-full shadow-md text-green-600 hover:text-green-400 transition duration-200">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                            </svg>
                        </button>
                        <button className="bg-white p-4 rounded-full shadow-md text-green-600 hover:text-green-400 transition duration-200">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </button>
                        </div>
                        <button className="hidden lg:block lg:mr-0 bg-white p-5 rounded-full shadow-md text-green-600 hover:text-green-400 transition duration-200">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                        </svg>
                        </button> */}
                        <div className="flex w-full flex-wrap bg-white shadow rounded">
                        <div className="md:py-10 text-center w-full lg:w-1/3 border-r">
                            <span className="card-heading font-bold">4.7</span>
                            <div className="mb-6 lg:mb-12 flex text-black justify-center">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="gold">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="gold">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="gold">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="gold">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="gold">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            </div>
                            <div>
                            <Link href="https://www.g2.com/products/ktern/reviews" target="_blank" passHref>
                                <a><div className="block mx-auto w-20 h-20 relative"><Image layout="fill" src="/assets/g2logo.png" alt=""/></div></a>
                            </Link>
                            </div>
                        </div>
                        <div className="md:py-10 px-6 w-full lg:w-2/3">
                            <div className="hidden lg:block mb-10 w-12 h-12 relative"><Image layout="fill" src="/product/projects/left-quote.svg" alt=""/></div>
                            <p className="mb-10 card-heading sm:pt-10  leading-loose text-gray-500">Detailed Evaluation of ECC environment&apos;s custom objects/code</p>
                            <h4 className="card-subheading font-bold card-heading">Jim W</h4>
                            <p className="text-gray-400 sm:pb-5">Partner</p>
                        </div>
                        </div>
                        {/* <button className="hidden lg:block bg-white p-5 rounded-full shadow-md text-green-600 hover:text-green-400 transition duration-200">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                        </button> */}
                    </div>
                    </div>
                </div>
           </section>
            {/* /Testimonial Section */}
            {/* Resources Section */}
             <section className="w-full pt-8 bg-labs-secondary sm:pt-12 md:pt-16">
 <div className="px-10 mx-auto max-w-7xl">
 <div className="flex justify-center w-full pb-5 mb-8 border-gray-200">
 <h2 className="card-heading font-bold text-gray-800 ">Related Resources</h2>
 
 </div>
 
 <div className="grid grid-cols-12 gap-6">
 <div className="relative col-span-12 mb-10 pb-10 space-y-4 md:col-span-6 lg:col-span-4 shadow-lg hover:shadow-xl rounded " >
 <Link href="#_" passHref>
 <a className="relative block w-full h-64 overflow-hidden rounded"> 
 <Image className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="/product/labs/labs_2.svg" alt="resource" layout="fill"/>
 </a> 
 </Link>
 <p className="hyperlink font-bold text-gray-400 uppercase pl-4 pr-2">Resources</p>
 <Link href="#_" passHref><a className="block card-subheading font-semibold leading-tight text-gray-700 hover:text-gray-900 pl-4 pr-2">Digital labs: The ultimate guide to KTern’s labs Management Suite </a></Link>
 <Link href="/features/digital-labs" passHref>
 <a className="absolute inline-flex items-center pb-1  text-blue-400 hover:border-blue-500 group bottom-0">
 <span className="hyperlink group-hover:text-blue-500 pl-4">View Article</span>
 <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
 </svg>
 </a>
 </Link> 
 </div>


 
 <div className="relative col-span-12 mb-10 pb-10 space-y-4 md:col-span-6 lg:col-span-4 shadow-lg hover:shadow-xl rounded " >
 <Link href="#_" passHref>
 <a className="relative block w-full h-64 overflow-hidden rounded"> 
 <Image className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="/product/labs/labs_1.svg" alt="resource" layout="fill"/>
 </a> 
 </Link>
 <p className="hyperlink font-bold text-gray-400 uppercase pl-4 pr-2">Resources</p>
 <Link href="#_" passHref><a className="block card-subheading font-semibold leading-tight text-gray-700 hover:text-gray-900 pl-4 pr-2">The Role of a labs Manager in SAP S/4HANA Conversion </a></Link>
 <Link href="/features/digital-labs" passHref>
 <a className="absolute inline-flex items-center pb-1  text-blue-400 hover:border-blue-500 group bottom-0">
 <span className="hyperlink group-hover:text-blue-500 pl-4">View Article</span>
 <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
 </svg>
 </a>
 </Link> 
 </div>
 
 <div className="relative col-span-12 mb-10 pb-10 space-y-4 md:col-span-6 lg:col-span-4 shadow-lg hover:shadow-xl rounded " >
 <Link href="#_" passHref>
 <a className="relative block w-full h-64 overflow-hidden rounded"> 
 <Image className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="/product/labs/labs_3.svg" alt="resource" layout="fill"/>
 </a> 
 </Link>
 <p className="hyperlink font-bold text-gray-400 uppercase pl-4 pr-2">Resources</p>
 <Link href="#_" passHref><a className="block card-subheading font-semibold leading-tight text-gray-700 hover:text-gray-900 pl-4 pr-2">SAP Activate – The Heart of KTern and S/4HANA Migration </a></Link>
 <Link href="/features/digital-labs" passHref>
 <a className="absolute inline-flex items-center pb-1  text-blue-400 hover:border-blue-500 group bottom-0">
 <span className="hyperlink group-hover:text-blue-500 pl-4">View Article</span>
 <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
 </svg>
 </a>
 </Link> 
 </div>














 
 
 </div>
 <div className="text-center"><Link href="#" passHref><a className="inline-block py-4 px-12 border border-gray-200 hover:border-gray-50 hover:bg-gray-100 rounded-full font-bold text-black"> View All</a></Link></div>
 </div>
 </section>  {/* / Resources Setion */}
         


 {/* / Resources Setion */}
            {/* Cta Section */}
            <section className="bg-white">
                <div className="px-8 py-8 mx-auto sm:py-10 lg:py-20 max-w-7xl">
                <div className="relative py-6 overflow-hidden rounded-lg bg-gradient-to-r from-black to-labs-400 lg:py-12 md:px-6 lg:p-16 lg:flex lg:items-center lg:justify-between md:shadow-xl md:bg-purple-1000">
                <div className="absolute top-0 right-0 hidden w-full -mt-20 transform rotate-45 translate-x-1/2 bg-white sm:block h-96 opacity-5"></div>
                <div className="absolute top-0 left-0 hidden w-full -mt-20 transform rotate-45 -translate-x-1/2 bg-white sm:block h-96 opacity-5"></div>
                <div className="relative p-6 rounded-lg md:p-0 md:pb-4">
                <h2 className="card-heading   leading-9 tracking-tight text-white sm:text-4xl sm:leading-10">Get started with your DXaaS Journey</h2>
                <p className="w-full mt-5 card-subheading text-white ">Start your 15-day free trial. No credit card required. No strings attached.</p>
                </div>
                <div className="relative flex flex-col items-center w-full px-6 space-y-5 md:space-x-5 md:space-y-0 md:flex-row md:w-auto lg:flex-shrink-0 md:px-0">
                <Link  href="/pricing" passHref><a className="  inline-block py-3 px-10 bg-black hover:bg-gray-100 hover:text-black shadow hyperlink  uppercase text-white  rounded-l-xl rounded-t-xl transition duration-200 ">See Pricing</a></Link>
                <Link  rel="noopener noreferrer" href="https://app.ktern.com" passHref><a target="_blank" className="  inline-block py-3 px-10 bg-white hover:bg-gray-50 hover:text-black shadow hyperlink uppercase text-black  rounded-l-xl rounded-t-xl transition duration-200 ">Try it free</a></Link>
                </div>
                </div>
                </div>
            </section> 
              {/* /Cta Section */}
        </Layout>
    )
}