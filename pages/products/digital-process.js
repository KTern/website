import Layout from "../../component/Layout";
import Carousel from 'react-multi-carousel';

import Image from "next/image";
import Link from "next/link";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6
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
export default function Digital_Process () {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative py-10 pb-auto pb-72">
                <div className="hidden lg:block absolute inset-0 w-full relative">
            <Image  src="/atis-assets/background/lines.svg" alt="" layout="fill"/>
            </div>

            <div className="relative pt-12 md:pt-16 pb-40  bg-process-secondary border-b-4 border-process-primary">
                <div className="relative container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center mb-12 md:mb-20">
                        <h2 className="mb-3   font-bold heading">Digital Process</h2>
                        <span className="mb-3  text-black subheading">Create a Digital Footprint and continuously optimize your processes with Digital Process  </span> 
                            <div><br />
                                <Link  href="#" passHref><a className="hidden  lg:inline-block py-3 px-10 bg-process-primary hover:bg-gray-100 hover:text-black shadow text-white font-bold rounded-l-xl rounded-t-xl transition duration-200 uppercase tiny-heading">Contact Sales</a></Link>
                            </div>
                    </div>
                </div>
                <div className="absolute inset-x-0  max-w-2xl mx-auto px-4">
                <div className="rounded-3xl md:rounded-6xl md:rounded-br-none h-80 w-100 relative"><Image className="rounded-3xl md:rounded-6xl" layout="fill" src="https://images.unsplash.com/photo-1572521165329-b197f9ea3da6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt="" /></div>
                <div className="absolute inset-0 flex items-center justify-center ">
                    <Link href="/video"  passHref>
                                <a className="flex items-center justify-center hover:bg-black rounded-full bg-white animate-pulse">
                                <svg className="w-16 h-16 hover:text-process-secondary text-process-primary  transition duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
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
                <div className="relative bg-process-secondary pt-20 rounded-t-3xl pb-12 lg:pb-24">
                    <div className="w-full md:container mx-auto px-4">
                        <div className="flex flex-wrap -mx-4">
                            <div className="hidden sm:block w-full lg:w-1/2 px-4 flex items-center justify-center">
                                <div className="relative" style={{zIndex: 0}}>
                                    <div className="h-128 w-full relative"><Image className="rounded-3xl md:rounded-br-none" width={500} height={400}  src="https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt=""/></div>
                                     <div  className="animate-pulse hidden md:block absolute w-60 h-40" style={{top:'-2rem', right: '3rem', zIndex: -1}}><svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0 49V0H49H50L49.99 0.00980377C76.595 0.537064 98 22.2688 98 49C98 76.062 76.062 98 49 98C21.938 98 0 76.062 0 49Z" fill="#170C76"/>
</svg>
</div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{bottom:'-2rem',right: '-2rem', zIndex: -1}}><svg width="166" height="165" viewBox="0 0 166 165" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M82.9727 164.999C82.8152 165 82.6577 165 82.5 165C36.9365 165 0 128.063 0 82.5C0 36.9365 36.9365 0 82.5 0C128.063 0 165 36.9365 165 82.5C165 83.2975 164.989 84.0924 164.966 84.8844L165.21 165H82.9714L82.9727 164.999Z" fill="#6758EE"/>
</svg>
</div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{bottom:'2.5rem', right: '-4.5rem', zIndex: -1}}><Image layout="fill" src="/atis-assets/elements/bullets-gray-left.svg" alt=""/></div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{ top: '3rem', left: '-8rem', zIndex: -1 }} ><Image layout="fill" src="/atis-assets/elements/bullets-gray-right.svg" alt="" /></div>                                   
                                </div>
                            </div>                           
                            <div className="w-full lg:w-1/2 md:px-20 lg:mb-12 lg:mb-20 lg:mb-0 flex items-center">
                                <div className="w-full text-center lg:text-left">
                                    <div className="max-w-md mx-auto lg:mx-0">
                                    <h2 className="mb-3 font-bold card-heading">
                                        <span className="card-heading">Tracking, monitoring and orchestration of enterprise operations </span>        
                                    </h2>
                                    </div>
                                    <div className="max-w-sm mx-auto lg:mx-0">
                                    <p className="mb-6 text-gray-400  card-subheading">Manage your Business processes in a holistic way, with KTern you can describe your processes both in a business and from an IT perspective ensuring the Business Documentation and System Reality are always synchronized </p>
                                    <Link href="/features/digital-projects"  passHref>
                                                        <a className="inline-flex items-center pb-1 font-medium text-black hover:border-blue-500 group ">
                                                        <span className="tiny-heading group-hover:text-gray-400">Learn More</span>
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
                                <div><Image width={500} height={400} className="rounded-3xl md:rounded-br-none" src="https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt=""/></div>
                                    <div  className="animate-pulse hidden md:block absolute w-60 h-40" style={{top:'-2rem', right: '3rem', zIndex: -1}}><svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0 49V0H49H50L49.99 0.00980377C76.595 0.537064 98 22.2688 98 49C98 76.062 76.062 98 49 98C21.938 98 0 76.062 0 49Z" fill="#170C76"/>
</svg>
</div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{bottom:'-2rem',right: '-2rem', zIndex: -1}}><svg width="166" height="165" viewBox="0 0 166 165" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M82.9727 164.999C82.8152 165 82.6577 165 82.5 165C36.9365 165 0 128.063 0 82.5C0 36.9365 36.9365 0 82.5 0C128.063 0 165 36.9365 165 82.5C165 83.2975 164.989 84.0924 164.966 84.8844L165.21 165H82.9714L82.9727 164.999Z" fill="#6758EE"/>
</svg>
</div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{bottom:'2.5rem', right: '-4.5rem', zIndex: -1}}><Image layout="fill" src="/atis-assets/elements/bullets-gray-left.svg" alt=""/></div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{ top: '3rem', left: '-8rem', zIndex: -1 }} ><Image layout="fill" src="/atis-assets/elements/bullets-gray-right.svg" alt="" /></div>
                                   
                            </div>
                            </div>
                       </div>
                        </div>
                </div>
                <div className="relative bg-process-secondary pt-2  lg:pb-24 pb-12 lg:pb-24">
                    <div className="container mx-auto px-20">
                        <div className="flex flex-wrap -mx-20">
                            <div className="w-full lg:w-1/2 px-4 flex items-center justify-center">
                                <div className="relative" style={{zIndex: 0}}>
                                    <div className="h-128 w-full relative"><Image className="rounded-3xl md:rounded-br-none" width={500} height={400}  src="https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt=""/></div>
                                    <div  className="animate-pulse hidden md:block absolute w-60 h-40" style={{top:'-2rem', right: '3rem', zIndex: -1}}><svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0 49V0H49H50L49.99 0.00980377C76.595 0.537064 98 22.2688 98 49C98 76.062 76.062 98 49 98C21.938 98 0 76.062 0 49Z" fill="#170C76"/>
</svg>
</div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{bottom:'-2rem',right: '-2rem', zIndex: -1}}><svg width="166" height="165" viewBox="0 0 166 165" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M82.9727 164.999C82.8152 165 82.6577 165 82.5 165C36.9365 165 0 128.063 0 82.5C0 36.9365 36.9365 0 82.5 0C128.063 0 165 36.9365 165 82.5C165 83.2975 164.989 84.0924 164.966 84.8844L165.21 165H82.9714L82.9727 164.999Z" fill="#6758EE"/>
</svg>
</div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{bottom:'2.5rem', right: '-4.5rem', zIndex: -1}}><Image layout="fill" src="/atis-assets/elements/bullets-gray-left.svg" alt=""/></div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{ top: '3rem', left: '-8rem', zIndex: -1 }} ><Image layout="fill" src="/atis-assets/elements/bullets-gray-right.svg" alt="" /></div>                                   
                                   
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 md:px-20  lg:mb-20 lg:mb-0 flex items-center">
                                <div className="w-full text-center lg:text-left">
                                    <div className="max-w-md mx-auto lg:mx-0">
                                    <h2 className="mb-3  font-bold card-heading">
                                        <span className="card-heading">Analytics Wizard</span>
                                        
                                    </h2>
                                    </div>
                                    <div className="max-w-sm mx-auto lg:mx-0">
                                    <p className="mb-6 text-gray-400  card-subheading">KTern&apos;s Analytics Wizard provides a 360 degree bird view acting as a single source of truth for your Custom process Profiling providing insights about your existing processes.</p>
                                    <Link href="/features/digital-projects"  passHref>
                                                        <a className="inline-flex items-center pb-1 font-medium text-black hover:border-blue-500 group ">
                                                        <span className="tiny-heading group-hover:text-gray-400">Learn More</span>
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
                 <div className="relative bg-process-secondary pt-20  pb-12 lg:pb-24">
                    <div className="w-full md:container mx-auto px-4">
                        <div className="flex flex-wrap -mx-4">
                            <div className="hidden sm:block w-full lg:w-1/2 px-4 flex items-center justify-center">
                                <div className="relative" style={{zIndex: 0}}>
                                    <div className="h-128 w-full relative"><Image className="rounded-3xl md:rounded-br-none" width={500} height={400}  src="https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt=""/></div>
                                     <div  className="animate-pulse hidden md:block absolute w-60 h-40" style={{top:'-2rem', right: '3rem', zIndex: -1}}><svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0 49V0H49H50L49.99 0.00980377C76.595 0.537064 98 22.2688 98 49C98 76.062 76.062 98 49 98C21.938 98 0 76.062 0 49Z" fill="#170C76"/>
</svg>
</div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{bottom:'-2rem',right: '-2rem', zIndex: -1}}><svg width="166" height="165" viewBox="0 0 166 165" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M82.9727 164.999C82.8152 165 82.6577 165 82.5 165C36.9365 165 0 128.063 0 82.5C0 36.9365 36.9365 0 82.5 0C128.063 0 165 36.9365 165 82.5C165 83.2975 164.989 84.0924 164.966 84.8844L165.21 165H82.9714L82.9727 164.999Z" fill="#6758EE"/>
</svg>
</div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{bottom:'2.5rem', right: '-4.5rem', zIndex: -1}}><Image layout="fill" src="/atis-assets/elements/bullets-gray-left.svg" alt=""/></div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{ top: '3rem', left: '-8rem', zIndex: -1 }} ><Image layout="fill" src="/atis-assets/elements/bullets-gray-right.svg" alt="" /></div>                                   
                                </div>
                            </div>                           
                             <div className="w-full lg:w-1/2 md:px-20 lg:mb-12 lg:mb-20 lg:mb-0 flex items-center">
                                <div className="w-full text-center lg:text-left">
                                    <div className="max-w-md mx-auto lg:mx-0">
                                    <h2 className="mb-3 font-bold card-heading">
                                        <span className="card-heading">Custom Code Remediation </span>        
                                    </h2>
                                    </div>
                                    <div className="max-w-sm mx-auto lg:mx-0">
                                    <p className="mb-6 text-gray-400  card-subheading">Automated custom code remediation for built upon pre-defined SAP Tribal Simplification Scenarios with auto-learning potential of manual code correction </p>
                                    <Link href="/features/digital-projects"  passHref>
                                                        <a className="inline-flex items-center pb-1 font-medium text-black hover:border-blue-500 group ">
                                                        <span className="tiny-heading group-hover:text-gray-400">Learn More</span>
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
                                <div className="h-100 w-100 relative "><Image width={500} height={400}  className="rounded-3xl md:rounded-br-none" src="https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt=""/></div>
                                    <div  className="animate-pulse hidden md:block absolute w-60 h-40" style={{top:'-2rem', right: '3rem', zIndex: -1}}><svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0 49V0H49H50L49.99 0.00980377C76.595 0.537064 98 22.2688 98 49C98 76.062 76.062 98 49 98C21.938 98 0 76.062 0 49Z" fill="#170C76"/>
</svg>
</div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{bottom:'-2rem',right: '-2rem', zIndex: -1}}><svg width="166" height="165" viewBox="0 0 166 165" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M82.9727 164.999C82.8152 165 82.6577 165 82.5 165C36.9365 165 0 128.063 0 82.5C0 36.9365 36.9365 0 82.5 0C128.063 0 165 36.9365 165 82.5C165 83.2975 164.989 84.0924 164.966 84.8844L165.21 165H82.9714L82.9727 164.999Z" fill="#6758EE"/>
</svg>
</div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{bottom:'2.5rem', right: '-4.5rem', zIndex: -1}}><Image layout="fill" src="/atis-assets/elements/bullets-gray-left.svg" alt=""/></div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{ top: '3rem', left: '-8rem', zIndex: -1 }} ><Image layout="fill" src="/atis-assets/elements/bullets-gray-right.svg" alt="" /></div>
                                   
                            </div>
                            </div>
                       </div>
                        </div>
                </div>
                <div className="relative bg-process-secondary pt-2  rounded-b-3xl lg:pb-24 pb-12 lg:pb-24">
                    <div className="container mx-auto px-20">
                        <div className="flex flex-wrap -mx-20">
                            <div className="w-full lg:w-1/2 px-4 flex items-center justify-center">
                                <div className="relative" style={{zIndex: 0}}>
                                    <div className="h-128 w-full relative"><Image className="rounded-3xl md:rounded-br-none" width={500} height={400}  src="https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt=""/></div>
                                    <div  className="animate-pulse hidden md:block absolute w-60 h-40" style={{top:'-2rem', right: '3rem', zIndex: -1}}><svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0 49V0H49H50L49.99 0.00980377C76.595 0.537064 98 22.2688 98 49C98 76.062 76.062 98 49 98C21.938 98 0 76.062 0 49Z" fill="#170C76"/>
</svg>
</div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{bottom:'-2rem',right: '-2rem', zIndex: -1}}><svg width="166" height="165" viewBox="0 0 166 165" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M82.9727 164.999C82.8152 165 82.6577 165 82.5 165C36.9365 165 0 128.063 0 82.5C0 36.9365 36.9365 0 82.5 0C128.063 0 165 36.9365 165 82.5C165 83.2975 164.989 84.0924 164.966 84.8844L165.21 165H82.9714L82.9727 164.999Z" fill="#6758EE"/>
</svg>
</div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{bottom:'2.5rem', right: '-4.5rem', zIndex: -1}}><Image layout="fill" src="/atis-assets/elements/bullets-gray-left.svg" alt=""/></div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{ top: '3rem', left: '-8rem', zIndex: -1 }} ><Image layout="fill" src="/atis-assets/elements/bullets-gray-right.svg" alt="" /></div>                                   
                                   
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 md:px-20  lg:mb-20 lg:mb-0 flex items-center">
                                <div className="w-full text-center lg:text-left">
                                    <div className="max-w-md mx-auto lg:mx-0">
                                    <h2 className="mb-3  font-bold card-heading">
                                       
                                        <span className=" card-heading">Enablement Advisory</span>
                                    </h2>
                                    </div>
                                    <div className="max-w-sm mx-auto lg:mx-0">
                                    <p className="mb-6 text-gray-400 leading-loose card-subheading">Automated training scenario and stakeholder recommendations in view of the process transformation is Provided based on the Configuration of your current business process as well as KTern&apos;s S4HANAPEDIA Engine&apos;s data empowered intelligence</p>
                                    <Link href="/features/digital-projects"  passHref>
                                                        <a className="inline-flex items-center pb-1 font-medium text-black hover:border-blue-500 group ">
                                                        <span className="tiny-heading group-hover:text-gray-400">Learn More</span>
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
             <div className="py-10">
                <div className="px-10">
                <h2 className="card-heading mb-4">Digital Projects Bots</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. ab repudiandae et.</p>
                </div>
                <Carousel className="bots flex p-10 bg-process-200 " responsive={responsive}>
                    <div className="p-3 bots-card flex-row justify-center items-center shadow-xl  border-2 border-process-400 text-center rounded-3xl">
                        <div className="h-1/3 w-1/3 mb-2 mx-auto">
                            <div className="w-20 h-12 relative"><Image layout="fill" src="https://cdn1.iconfinder.com/data/icons/robots-avatars-set/354/Robot_chatbot___robot_robo_chatbot_digital_chat_bot-512.png" alt="bot" /></div>
                        </div>
                        <p className="tiny-heading">DX Process Orchestrator Bot</p>
                        <p className="tiny-subheading">Orchestrate Process Lifecycle with a Digital footprint</p>
                    </div>
                    <div className="p-3 bots-card flex-row justify-center items-center shadow-xl  border-2 border-process-400 text-center rounded-3xl">
                        <div className="h-1/3 w-1/3 mb-2 mx-auto">
                            <div className="w-20 h-12 relative"><Image layout="fill" src="https://cdn1.iconfinder.com/data/icons/robots-avatars-set/354/Robot_chatbot___robot_robo_chatbot_digital_chat_bot-512.png" alt="bot" /></div>
                        </div>
                        <p className="tiny-heading">DX Release Orchestrator Bot</p>
                        <p className="tiny-subheading">Orchestrate the SAP TR Releases</p>
                    </div>
                    <div className="p-3 bots-card flex-row justify-center items-center shadow-xl  border-2 border-process-400 text-center rounded-3xl">
                        <div className="h-1/3 w-1/3 mb-2 mx-auto">
                             <div className="w-20 h-12 relative"><Image layout="fill" src="https://cdn1.iconfinder.com/data/icons/robots-avatars-set/354/Robot_chatbot___robot_robo_chatbot_digital_chat_bot-512.png" alt="bot" /></div>
                        </div>
                        <p className="tiny-heading">DX Event Orchestrator Bot</p>
                        <p className="tiny-subheading">Event Orchestrations for swift collaborations</p>
                    </div>
                    <div className="p-3 bots-card flex-row justify-center items-center shadow-xl  border-2 border-process-400 text-center rounded-3xl">
                        <div className="h-1/3 w-1/3 mb-2 mx-auto">
                             <div className="w-20 h-12 relative"><Image layout="fill" src="https://cdn1.iconfinder.com/data/icons/robots-avatars-set/354/Robot_chatbot___robot_robo_chatbot_digital_chat_bot-512.png" alt="bot" /></div>
                        </div>
                        <p className="tiny-heading">DX Change Management Orchestrator Bot</p>
                        <p className="tiny-subheading">Orchestrate the Change management</p>
                    </div>
                     <div className="p-3 bots-card flex-row justify-center items-center shadow-xl  border-2 border-process-400 text-center rounded-3xl">
                        <div className="h-1/3 w-1/3 mb-2 mx-auto">
                             <div className="w-20 h-12 relative"><Image layout="fill" src="https://cdn1.iconfinder.com/data/icons/robots-avatars-set/354/Robot_chatbot___robot_robo_chatbot_digital_chat_bot-512.png" alt="bot" /></div>
                        </div>
                        <p className="tiny-heading">DX  Security Impact Simulation Bot</p>
                        <p className="tiny-subheading">Simulate the Security Impact - Helping to mitigate Security and Compliance Risk</p>
                    </div>
                     <div className="p-3 bots-card flex-row justify-center items-center shadow-xl  border-2 border-process-400 text-center rounded-3xl">
                        <div className="h-1/3 w-1/3 mb-2 mx-auto">
                             <div className="w-20 h-12 relative"><Image layout="fill" src="https://cdn1.iconfinder.com/data/icons/robots-avatars-set/354/Robot_chatbot___robot_robo_chatbot_digital_chat_bot-512.png" alt="bot" /></div>
                        </div>
                        <p className="tiny-heading">Bot Name</p>
                        <p className="tiny-subheading">Bot description</p>
                    </div>
                    <div className="p-3 bots-card flex-row justify-center items-center shadow-xl  border-2 border-process-400 text-center rounded-3xl">
                        <div className="h-1/3 w-1/3 mb-2 mx-auto">
                             <div className="w-20 h-12 relative"><Image layout="fill" src="https://cdn1.iconfinder.com/data/icons/robots-avatars-set/354/Robot_chatbot___robot_robo_chatbot_digital_chat_bot-512.png" alt="bot" /></div>
                        </div>
                        <p className="tiny-heading">Bot Name</p>
                        <p className="tiny-subheading">Bot description</p>
                    </div>   
                </Carousel>
            </div>
            {/* /Bots Section */}
            {/* Testimonial Section */}
            <section className="w-full py-8 bg-white sm:py-12 md:py-16">
            <div className="px-10 mx-auto max-w-7xl">
                <div className="flex items-center justify-between w-full pb-5 mb-8 border-b border-gray-200">
                    <h2 className="card-heading font-bold text-gray-800">Related Resources</h2>
                            <Link href="#_" passHref>
                                <a className="flex items-center text-base font-semibold text-blue-400 hover:text-blue-500 group">
                        <span className="tiny-heading">View More Posts</span>
                        <svg className="w-4 h-4 mt-0.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        </a>
                    </Link>
                </div>

                <div className="grid grid-cols-12 gap-6">
                    <div className="relative col-span-12 mb-10 pb-10 space-y-4 md:col-span-6 lg:col-span-4 shadow-lg hover:shadow-xl rounded " >
                        <Link href="#_" passHref>
                        <a className="relative block w-full h-64 overflow-hidden rounded">        
                            <Image className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105"  src="/product/projects/project_scrum.svg" alt="resource" layout="fill"/>
                        </a>    
                        </Link>
                        <p className="tiny-subheading font-bold text-gray-400 uppercase pl-4 pr-2">Resources</p>
                        <Link href="#_" passHref><a className="block card-subheading  font-semibold leading-tight text-gray-700 hover:text-gray-900 pl-4 pr-2">Digital Projects: The ultimate guide to KTern’s Project Management Suite </a></Link>
                        <Link href="/features/digital-projects"  passHref>
                                                        <a className="absolute inline-flex items-center pb-1 font-medium text-blue-400 hover:border-blue-500 group bottom-0">
                                                        <span className="tiny-heading group-hover:text-blue-500 pl-4">View Article</span>
                                                        <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                                        </svg>
                                                        </a>
                                                    </Link>  
                    </div>



                    <div className="relative col-span-12 mb-10 pb-10 space-y-4 md:col-span-6 lg:col-span-4 shadow-lg hover:shadow-xl rounded " >
                        <Link href="#_" passHref>
                        <a className="relative block w-full h-64 overflow-hidden rounded">        
                            <Image className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105"  src="/product/projects/project_1.svg" alt="resource" layout="fill"/>
                        </a>    
                        </Link>
                        <p className="tiny-subheading font-bold text-gray-400 uppercase pl-4 pr-2">Resources</p>
                        <Link href="#_" passHref><a className="block card-subheading  font-semibold leading-tight text-gray-700 hover:text-gray-900 pl-4 pr-2">The Role of a Project Manager in SAP S/4HANA Conversion  </a></Link>
                        <Link href="/features/digital-projects"  passHref>
                                                        <a className="absolute inline-flex items-center pb-1 font-medium text-blue-400 hover:border-blue-500 group bottom-0">
                                                        <span className="tiny-heading group-hover:text-blue-500 pl-4">View Article</span>
                                                        <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                                        </svg>
                                                        </a>
                                                    </Link>  
                    </div>


                    <div className="relative col-span-12 mb-10 pb-10 space-y-4 md:col-span-6 lg:col-span-4 shadow-lg hover:shadow-xl rounded " >
                        <Link href="#_" passHref>
                        <a className="relative block w-full h-64 overflow-hidden rounded">        
                            <Image className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105"  src="/product/projects/project_team_3.svg" alt="resource" layout="fill"/>
                        </a>    
                        </Link>
                        <p className="tiny-subheading font-bold text-gray-400 uppercase pl-4 pr-2">Resources</p>
                        <Link href="#_" passHref><a className="block card-subheading  font-semibold leading-tight text-gray-700 hover:text-gray-900 pl-4 pr-2">SAP Activate – The Heart of KTern and S/4HANA Migration </a></Link>
                        <Link href="/features/digital-projects"  passHref>
                                                        <a className="absolute inline-flex items-center pb-1 font-medium text-blue-400 hover:border-blue-500 group bottom-0">
                                                        <span className="tiny-heading group-hover:text-blue-500 pl-4">View Article</span>
                                                        <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                                        </svg>
                                                        </a>
                                                    </Link>  
                    </div>















                  
                  </div>
                </div>
                </section>
           
            {/* /Testimonial Section */}
            {/* Resources Section */}
            <section className="w-full py-8 bg-white sm:py-12 md:py-16">
            <div className="px-10 mx-auto max-w-7xl">
                <div className="flex items-center justify-between w-full pb-5 mb-8 border-b border-gray-200">
                    <h2 className="card-heading font-bold text-gray-800">Related Resources</h2>
                            <Link href="#_" passHref>
                                <a className="flex items-center text-base font-semibold text-process-primary hover:text-process-secondary group">
                        <span className="tiny-heading">View More Posts</span>
                        <svg className="w-4 h-4 mt-0.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        </a>
                    </Link>
                </div>

                <div className="grid grid-cols-12 gap-6">
                    <div className="relative col-span-12 mb-10 pb-10 space-y-4 md:col-span-6 lg:col-span-4 shadow-lg hover:shadow-xl rounded " >
                        <Link href="#_" passHref>
                        <a className="relative block w-full h-64 overflow-hidden rounded">        
                            <Image className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105"  src="/product/process/process_1.svg" alt="resource" layout="fill"/>
                        </a>    
                        </Link>
                        <p className="tiny-subheading font-bold text-gray-400 uppercase pl-4 pr-2">Resources</p>
                        <Link href="#_" passHref><a className="block card-subheading  font-semibold leading-tight text-gray-700 hover:text-gray-900 pl-4 pr-2">The Ultimate SAP Custom Code Migration Guide using KTern</a></Link>
                        <Link href="/features/digital-projects"  passHref>
                                                        <a className="absolute inline-flex items-center pb-1 font-medium text-process-primary hover:border-blue-500 group bottom-0">
                                                        <span className="tiny-heading group-hover:text-process-secondary pl-4">View Article</span>
                                                        <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-process-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                                        </svg>
                                                        </a>
                                                    </Link>  
                    </div>



                    <div className="relative col-span-12 mb-10 pb-10 space-y-4 md:col-span-6 lg:col-span-4 shadow-lg hover:shadow-xl rounded " >
                        <Link href="#_" passHref>
                        <a className="relative block w-full h-64 overflow-hidden rounded">        
                            <Image className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105"  src="/product/process/process_2.svg" alt="resource" layout="fill"/>
                        </a>    
                        </Link>
                        <p className="tiny-subheading font-bold text-gray-400 uppercase pl-4 pr-2">Resources</p>
                        <Link href="#_" passHref><a className="block card-subheading  font-semibold leading-tight text-gray-700 hover:text-gray-900 pl-4 pr-2">Why is Custom Code Adaptation required for S/4HANA Conversion process? </a></Link>
                        <Link href="/features/digital-projects"  passHref>
                                                        <a className="absolute inline-flex items-center pb-1 font-medium text-process-primary hover:border-blue-500 group bottom-0">
                                                        <span className="tiny-heading group-hover:text-process-secondary pl-4">View Article</span>
                                                        <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-process-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                                        </svg>
                                                        </a>
                                                    </Link>  
                    </div>


                    <div className="relative col-span-12 mb-10 pb-10 space-y-4 md:col-span-6 lg:col-span-4 shadow-lg hover:shadow-xl rounded " >
                        <Link href="#_" passHref>
                        <a className="relative block w-full h-64 overflow-hidden rounded">        
                            <Image className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105"  src="/product/process/process_3.svg" alt="resource" layout="fill"/>
                        </a>    
                        </Link>
                        <p className="tiny-subheading font-bold text-gray-400 uppercase pl-4 pr-2">Resources</p>
                        <Link href="#_" passHref><a className="block card-subheading  font-semibold leading-tight text-gray-700 hover:text-gray-900 pl-4 pr-2">How KTern can alleviate your Custom Code Migration challenges? </a></Link>
                        <Link href="/features/digital-projects"  passHref>
                                                        <a className="absolute inline-flex items-center pb-1 font-medium text-process-primary hover:border-blue-500 group bottom-0">
                                                        <span className="tiny-heading group-hover:text-process-secondary pl-4">View Article</span>
                                                        <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-process-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                                        </svg>
                                                        </a>
                                                    </Link>  
                    </div>















                  
                  </div>
                </div>
                </section>
          



          {/* / Resources Setion */}
            {/* Cta Section */}
            <section className="bg-white">
                <div className="px-8 py-8 mx-auto sm:py-10 lg:py-20 max-w-7xl">
                <div className="relative py-6 overflow-hidden rounded-lg bg-gradient-to-r from-black to-process-400 lg:py-12 md:px-6 lg:p-16 lg:flex lg:items-center lg:justify-between md:shadow-xl md:bg-purple-1000">
                <div className="absolute top-0 right-0 hidden w-full -mt-20 transform rotate-45 translate-x-1/2 bg-white sm:block h-96 opacity-5"></div>
                <div className="absolute top-0 left-0 hidden w-full -mt-20 transform rotate-45 -translate-x-1/2 bg-white sm:block h-96 opacity-5"></div>
                <div className="relative p-6 rounded-lg md:p-0 md:pb-4">
                <h2 className="card-heading  font-bold leading-9 tracking-tight text-white sm:text-4xl sm:leading-10">Get started with your DXaaS Journey</h2>
                <p className="w-full mt-5 card-subheading text-white ">Start your 15-day free trial. No credit card required. No strings attached.</p>
                </div>
                <div className="relative flex flex-col items-center w-full px-6 space-y-5 md:space-x-5 md:space-y-0 md:flex-row md:w-auto lg:flex-shrink-0 md:px-0">
                <Link  href="/pricing" passHref><a className="  inline-block py-3 px-10 bg-black hover:bg-gray-100 hover:text-black shadow tiny-heading  uppercase text-white font-bold rounded-l-xl rounded-t-xl transition duration-200 ">See Pricing</a></Link>
                  <Link  rel="noopener noreferrer" href="https://app.ktern.com" passHref><a target="_blank" className="  inline-block py-3 px-10 bg-white hover:bg-gray-50 hover:text-black shadow tiny-heading uppercase text-black font-bold rounded-l-xl rounded-t-xl transition duration-200 ">Try it free</a></Link>
                </div>
                </div>
                </div>
            </section> 
              {/* /Cta Section */}
        </Layout>
    )
}