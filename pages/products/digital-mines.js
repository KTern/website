import Layout from "../../component/Layout";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4
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
export default function Digital_Projects () {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative py-10 pb-auto pb-72">
            <img className="hidden lg:block absolute inset-0 w-full" src="/atis-assets/background/lines.svg" alt="" />

            <div className="relative pt-12 md:pt-16 pb-32 md:pb-64 bg-project-secondary border-b-4 border-project-primary">
                <div className="relative container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center mb-12 md:mb-20">
                        <h2 className="mb-3 text-4xl lg:text-5xl font-bold custom-heading">Digital Mines</h2>
                        <span className="mb-3 text-1xl text-black custom-subheading">Run your Processes better to run your Business better</span> 
                            <div><br />
                                <a className="hidden  lg:inline-block py-3 px-10 bg-project-primary hover:bg-gray-100 hover:text-black shadow text-lg text-white font-bold rounded-l-xl rounded-t-xl transition duration-200 custom-card-subheading" href="#">Contact Sales</a>
                            </div>
                    </div>
                </div>
                <div className="absolute inset-x-0  max-w-2xl mx-auto px-4">
                <img className="rounded-3xl md:rounded-6xl md:rounded-br-none" src="https://images.unsplash.com/photo-1572521165329-b197f9ea3da6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt="" />
                <div className="absolute inset-0 flex items-center justify-center ">
                    <a href="/video" className="flex items-center justify-center hover:bg-black rounded-full bg-white animate-pulse">
                    <svg className="w-16 h-16 hover:text-project-secondary text-project-primary  transition duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                    </svg>
                    </a >
                </div>
                </div>
            </div>
            <div className="hidden navbar-menu relative z-50">
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                <div className="flex items-center mb-8">
                    <a className="mr-auto text-3xl font-bold leading-none" href="#">
                    <img className="h-10" src="/atis-assets/logo/atis/atis-mono-black.svg" alt="" width="auto" />
                    </a>
                    <button className="navbar-close">
                    <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    </button>
                </div>
                <div>
                    <ul>
                    <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded" href="#">Start</a></li>
                    <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded" href="#">About Us</a></li>
                    <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded" href="#">Services</a></li>
                    <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded" href="#">Platform</a></li>
                    <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded" href="#">Testimonials</a></li>
                    </ul>
                </div>
                <div className="mt-auto">
                    <div className="pt-6"><a className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-l-xl rounded-t-xl" href="#">Sign In</a><a className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-green-600 hover:bg-green-700 rounded-l-xl rounded-t-xl" href="#">Sign Up</a></div>
                    <p className="my-4 text-xs text-center text-gray-400">
                    <span>© 2020 All rights reserved.</span>
                    </p>
                    <div className="text-center">
                    <a className="inline-block px-1" href="#">
                        <img src="/atis-assets/social/facebook.svg" alt="" />
                    </a>
                    <a className="inline-block px-1" href="#">
                        <img src="/atis-assets/social/twitter.svg" alt="" />
                    </a>
                    <a className="inline-block px-1" href="#">
                        <img src="/atis-assets/social/instagram.svg" alt="" />
                    </a>
                    </div>
                </div>
                </nav>
            </div>
            </section>    
            {/* /Hero Section */}
            {/* Streams Content Section */}
            <section className="px-4 md:px-28 pb-10 relative overflow-hidden ">
                {/* <img className="hidden lg:block absolute inset-0 w-full" src="/atis-assets/background/lines.svg" alt=""/> */}
                <div className="relative bg-project-secondary pt-20 rounded-t-3xl pb-12 lg:pb-24">
                    <div className="w-full md:container mx-auto px-4">
                        <div className="flex flex-wrap -mx-4">
                            <div className="hidden sm:block w-full lg:w-1/2 px-4 flex items-center justify-center">
                                <div className="relative" style={{zIndex: 0}}>
                                    <img className="h-128 w-full max-w-lg object-cover rounded-3xl md:rounded-br-none" src="https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt=""/>
                                    <img className="animate-pulse hidden md:block absolute" style={{top:'-2rem', right: '3rem', zIndex: -1}} src="/atis-assets/elements/purple-up.svg" alt=""/>
                                    <img className="animate-pulse hidden md:block absolute" style={{bottom:'-2rem',right: '-2rem', zIndex: -1}} src="/atis-assets/elements/wing-yellow-down.svg" alt=""/>
                                    <img className="animate-pulse hidden md:block absolute" style={{bottom:'2.5rem', right: '-4.5rem', zIndex: -1}} src="/atis-assets/elements/bullets-gray-left.svg" alt=""/>
                                    <img className="animate-pulse hidden md:block absolute" style={{ top: '3rem', left: '-3rem', zIndex: -1 }} src="/atis-assets/elements/bullets-gray-right.svg" alt="" />
                                   
                                </div>
                            </div>                           
                            <div className="w-full lg:w-1/2 md:px-20 lg:mb-12 lg:mb-20 lg:mb-0 flex items-center">
                                <div className="w-full text-center lg:text-left">
                                    <div className="max-w-md mx-auto lg:mx-0">
                                    <h2 className="mb-3 text-xl lg:text-5xl font-bold font-heading">
                                        <span className="md:custom-heading">Process Mining  </span>
                                        
                                    </h2>
                                    </div>
                                    <div className="max-w-sm mx-auto lg:mx-0">
                                    <p className="mb-6 text-gray-400 leading-loose custom-card-subheading">Unlock your Organization's Full Potential by Uncovering and Eliminating Process Complexity.</p>
                                
                                    <div className="my-12"></div>
                                
                                    </div>
                                </div>
                            </div>
                            <div className="invisible lg:visible w-full lg:w-1/2 px-4 flex items-center justify-center">
                            <div className="absolute mr-4" style={{zIndex: 0}}>
                                <img className="h-128 w-full max-w-lg object-cover rounded-3xl md:rounded-br-none" src="https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt=""/>
                                <img className="animate-pulse hidden md:block absolute" style={{top:'-2rem', right: '3rem', zIndex: -1}} src="/atis-assets/elements/purple-up.svg" alt=""/>
                                <img className="animate-pulse hidden md:block absolute" style={{bottom:'-2rem',right: '-2rem', zIndex: -1}} src="/atis-assets/elements/wing-yellow-down.svg" alt=""/>
                                <img className="animate-pulse hidden md:block absolute" style={{top:'3rem', right: '-3rem', zIndex: -1}} src="/atis-assets/elements/bullets-gray-right.svg" alt=""/>
                                <img className="animate-pulse hidden md:block absolute" style={{bottom:'2.5rem', left: '-4.5rem', zIndex: -1}} src="/atis-assets/elements/bullets-gray-left.svg" alt=""/>
                            </div>
                            </div>
                       </div>
                        </div>
                </div>
                <div className="relative bg-project-secondary pt-2  rounded-t-3xl lg:pb-24 pb-12 lg:pb-24">
                    <div className="container mx-auto px-20">
                        <div className="flex flex-wrap -mx-20">
                            <div className="w-full lg:w-1/2 px-4 flex items-center justify-center">
                                <div className="relative" style={{zIndex: 0}}>
                                    <img className="h-128 w-full max-w-lg object-cover rounded-3xl md:rounded-br-none" src="https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt=""/>
                                    <img className="animate-pulse hidden md:block absolute" style={{top:'-2rem', right: '3rem', zIndex: -1}} src="/atis-assets/elements/purple-up.svg" alt=""/>
                                    <img className="animate-pulse hidden md:block absolute" style={{bottom:'-2rem',right: '-2rem', zIndex: -1}} src="/atis-assets/elements/wing-yellow-down.svg" alt=""/>
                                    <img className="animate-pulse hidden md:block absolute" style={{bottom:'2.5rem', right: '-4.5rem', zIndex: -1}} src="/atis-assets/elements/bullets-gray-left.svg" alt=""/>
                                    <img className="animate-pulse hidden md:block absolute" style={{ top: '3rem', left: '-3rem', zIndex: -1 }} src="/atis-assets/elements/bullets-gray-right.svg" alt="" />
                                   
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 md:px-20  lg:mb-20 lg:mb-0 flex items-center">
                                <div className="w-full text-center lg:text-left">
                                    <div className="max-w-md mx-auto lg:mx-0">
                                    <h2 className="mb-3 text-xl lg:text-5xl font-bold font-heading">
                                        <span className="md:custom-heading">Optimizations</span>
                                        
                                    </h2>
                                    </div>
                                    <div className="max-w-sm mx-auto lg:mx-0">
                                    <p className="mb-6 text-gray-400 leading-loose custom-card-subheading">To unlock the full potential of process mining and to improve business outcomes for organizations, the transparency and insights gained with process mining must be turned into actions by taking optimization steps.</p>
                                
                                    <div className="my-12"></div>
                                
                                </div>

                                </div>
                        </div>
                           
                        </div>
                        </div>
                </div>   
                <div className="relative bg-project-secondary pt-20 rounded-t-3xl pb-12 lg:pb-24">
                    <div className="w-full md:container mx-auto px-4">
                        <div className="flex flex-wrap -mx-4">
                            <div className="hidden sm:block w-full lg:w-1/2 px-4 flex items-center justify-center">
                                <div className="relative" style={{zIndex: 0}}>
                                    <img className="h-128 w-full max-w-lg object-cover rounded-3xl md:rounded-br-none" src="https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt=""/>
                                    <img className="animate-pulse hidden md:block absolute" style={{top:'-2rem', right: '3rem', zIndex: -1}} src="/atis-assets/elements/purple-up.svg" alt=""/>
                                    <img className="animate-pulse hidden md:block absolute" style={{bottom:'-2rem',right: '-2rem', zIndex: -1}} src="/atis-assets/elements/wing-yellow-down.svg" alt=""/>
                                    <img className="animate-pulse hidden md:block absolute" style={{bottom:'2.5rem', right: '-4.5rem', zIndex: -1}} src="/atis-assets/elements/bullets-gray-left.svg" alt=""/>
                                    <img className="animate-pulse hidden md:block absolute" style={{ top: '3rem', left: '-3rem', zIndex: -1 }} src="/atis-assets/elements/bullets-gray-right.svg" alt="" />
                                   
                                </div>
                            </div>                           
                            <div className="w-full lg:w-1/2 md:px-20 lg:mb-12 lg:mb-20 lg:mb-0 flex items-center">
                                <div className="w-full text-center lg:text-left">
                                    <div className="max-w-md mx-auto lg:mx-0">
                                    <h2 className="mb-3 text-xl lg:text-5xl font-bold font-heading">
                                        <span className="md:custom-heading">Process Monitoring</span>
                                       
                                    </h2>
                                    </div>
                                    <div className="max-w-sm mx-auto lg:mx-0">
                                    <p className="mb-6 text-gray-400 leading-loose custom-card-subheading">KTern's Anomoly detectors ensure your Processes are running smooth and ensures any anomolies are alerted and rectified earliest. KTern's proprietery VVV approach ensures high risk anomolies are attended to first followed by the low risk ensuring smooth flow of business processes.</p>
                                
                                    <div className="my-12"></div>
                                
                                    </div>
                                </div>
                            </div>
                            <div className="invisible lg:visible w-full lg:w-1/2 px-4 flex items-center justify-center">
                            <div className="absolute mr-4" style={{zIndex: 0}}>
                                <img className="h-128 w-full max-w-lg object-cover rounded-3xl md:rounded-br-none" src="https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt=""/>
                                <img className="animate-pulse hidden md:block absolute" style={{top:'-2rem', right: '3rem', zIndex: -1}} src="/atis-assets/elements/purple-up.svg" alt=""/>
                                <img className="animate-pulse hidden md:block absolute" style={{bottom:'-2rem',right: '-2rem', zIndex: -1}} src="/atis-assets/elements/wing-yellow-down.svg" alt=""/>
                                <img className="animate-pulse hidden md:block absolute" style={{top:'3rem', right: '-3rem', zIndex: -1}} src="/atis-assets/elements/bullets-gray-right.svg" alt=""/>
                                <img className="animate-pulse hidden md:block absolute" style={{bottom:'2.5rem', left: '-4.5rem', zIndex: -1}} src="/atis-assets/elements/bullets-gray-left.svg" alt=""/>
                            </div>
                            </div>
                       </div>
                        </div>
                </div>
                <div className="relative bg-project-secondary pt-2  rounded-t-3xl lg:pb-24 pb-12 lg:pb-24">
                    <div className="container mx-auto px-20">
                        <div className="flex flex-wrap -mx-20">
                            <div className="w-full lg:w-1/2 px-4 flex items-center justify-center">
                                <div className="relative" style={{zIndex: 0}}>
                                    <img className="h-128 w-full max-w-lg object-cover rounded-3xl md:rounded-br-none" src="https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt=""/>
                                    <img className="animate-pulse hidden md:block absolute" style={{top:'-2rem', right: '3rem', zIndex: -1}} src="/atis-assets/elements/purple-up.svg" alt=""/>
                                    <img className="animate-pulse hidden md:block absolute" style={{bottom:'-2rem',right: '-2rem', zIndex: -1}} src="/atis-assets/elements/wing-yellow-down.svg" alt=""/>
                                    <img className="animate-pulse hidden md:block absolute" style={{bottom:'2.5rem', right: '-4.5rem', zIndex: -1}} src="/atis-assets/elements/bullets-gray-left.svg" alt=""/>
                                    <img className="animate-pulse hidden md:block absolute" style={{ top: '3rem', left: '-3rem', zIndex: -1 }} src="/atis-assets/elements/bullets-gray-right.svg" alt="" />
                                   
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 md:px-20  lg:mb-20 lg:mb-0 flex items-center">
                                <div className="w-full text-center lg:text-left">
                                    <div className="max-w-md mx-auto lg:mx-0">
                                    <h2 className="mb-3 text-xl lg:text-5xl font-bold font-heading">
                                       
                                        <span className=" md:custom-heading">ROI Estimation</span>
                                    </h2>
                                    </div>
                                    <div className="max-w-sm mx-auto lg:mx-0">
                                    <p className="mb-6 text-gray-400 leading-loose custom-card-subheading">The Insights from Process Mining is used to Derive ROI of your SAP Transformation</p>
                                
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
            <div>
                <Carousel className="bots flex p-10 bg-black" responsive={responsive}>
                    <div className="p-3 bots-card flex-row justify-center items-center shadow-lg border-2 border-black text-center">
                        <div className="h-1/3 w-1/3 mb-2 mx-auto">
                            <img className="w-auto" src="https://cdn1.iconfinder.com/data/icons/robots-avatars-set/354/Robot_chatbot___robot_robo_chatbot_digital_chat_bot-512.png" />
                        </div>
                        <p className="custom-card-heading">DX Process Orchestrator Bot</p>
                        <p className="custom-card-subheading">Orchestrate Process Lifecycle with a Digital footprint</p>
                    </div>
                    <div className="p-3 bots-card flex-row justify-center items-center shadow-lg border-2 border-black text-center">
                        <div className="h-1/3 w-1/3 mb-2 mx-auto">
                            <img className="w-auto" src="https://cdn1.iconfinder.com/data/icons/robots-avatars-set/354/Robot_chatbot___robot_robo_chatbot_digital_chat_bot-512.png" />
                        </div>
                        <p className="custom-card-heading">DX Release Orchestrator Bot</p>
                        <p className="custom-card-subheading">Orchestrate the SAP TR Releases</p>
                    </div>
                    <div className="p-3 bots-card flex-row justify-center items-center shadow-lg border-2 border-black text-center">
                        <div className="h-1/3 w-1/3 mb-2 mx-auto">
                            <img className="w-auto" src="https://cdn1.iconfinder.com/data/icons/robots-avatars-set/354/Robot_chatbot___robot_robo_chatbot_digital_chat_bot-512.png" />
                        </div>
                        <p className="custom-card-heading">DX Event Orchestrator Bot</p>
                        <p className="custom-card-subheading">Event Orchestrations for swift collaborations</p>
                    </div>
                    <div className="p-3 bots-card flex-row justify-center items-center shadow-lg border-2 border-black text-center">
                        <div className="h-1/3 w-1/3 mb-2 mx-auto">
                            <img className="w-auto" src="https://cdn1.iconfinder.com/data/icons/robots-avatars-set/354/Robot_chatbot___robot_robo_chatbot_digital_chat_bot-512.png" />
                        </div>
                        <p className="custom-card-heading">DX Change Management Orchestrator Bot</p>
                        <p className="custom-card-subheading">Orchestrate the Change management</p>
                    </div>
                     <div className="p-3 bots-card flex-row justify-center items-center shadow-lg border-2 border-black text-center">
                        <div className="h-1/3 w-1/3 mb-2 mx-auto">
                            <img className="w-auto" src="https://cdn1.iconfinder.com/data/icons/robots-avatars-set/354/Robot_chatbot___robot_robo_chatbot_digital_chat_bot-512.png" />
                        </div>
                        <p className="custom-card-heading">DX  Security Impact Simulation Bot</p>
                        <p className="custom-card-subheading">Simulate the Security Impact - Helping to mitigate Security and Compliance Risk</p>
                    </div>
                     <div className="p-3 bots-card flex-row justify-center items-center shadow-lg border-2 border-black text-center">
                        <div className="h-1/3 w-1/3 mb-2 mx-auto">
                            <img className="w-auto" src="https://cdn1.iconfinder.com/data/icons/robots-avatars-set/354/Robot_chatbot___robot_robo_chatbot_digital_chat_bot-512.png" />
                        </div>
                        <p className="custom-card-heading">Bot Name</p>
                        <p className="custom-card-subheading">Bot description</p>
                    </div>
                    <div className="p-3 bots-card flex-row justify-center items-center shadow-lg border-2 border-black text-center">
                        <div className="h-1/3 w-1/3 mb-2 mx-auto">
                            <img className="w-auto" src="https://cdn1.iconfinder.com/data/icons/robots-avatars-set/354/Robot_chatbot___robot_robo_chatbot_digital_chat_bot-512.png" />
                        </div>
                        <p className="custom-card-heading">Bot Name</p>
                        <p className="custom-card-subheading">Bot description</p>
                    </div>   
                </Carousel>
            </div>
            {/* /Bots Section */}
            {/* Testimonial Section */}
            <section >
                <div className="p-10 md:p-20 bg-secondary radius-for-skewed">
                    <div className="container px-4 mx-auto">
                    <div className="lg:flex items-center justify-center md:space-x-8">
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
                            <span className="text-5xl lg:text-6xl font-bold">4.7</span>
                            <div className="mb-6 lg:mb-12 flex text-green-600 justify-center">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            </div>
                            <div>
                                <a href="https://www.g2.com/products/ktern/reviews" target="_blank">
                            <img className="block mx-auto w-20 h-20" src="/assets/g2logo.png" alt=""/>
                            </a>
                            </div>
                        </div>
                        <div className="md:py-10 px-6 w-full lg:w-2/3">
                            <img className="mb-10 w-10 h-10 " src="/atis-assets/elements/left-quote.png" alt=""/>
                            <p className="mb-10 lg:text-2xl leading-loose text-gray-500">Detailed Evaluation of ECC environment's custom objects/code</p>
                            <h4 className="text-2xl font-bold custom-card-heading">Jim W</h4>
                            <p className="text-gray-400">Partner</p>
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
            <section className="w-full py-8 bg-white sm:py-12 md:py-16">
                <div className="px-10 mx-auto max-w-7xl">
                    <div className="flex items-center justify-between w-full pb-5 mb-8 border-b border-gray-200">
                        <h2 className="custom-card-heading font-bold text-gray-800">Related Resources</h2>
                        <a href="#_" className="flex items-center text-base font-semibold text-blue-400 hover:text-blue-500 group">
                        <span>View More Posts</span>
                        <svg className="w-4 h-4 mt-0.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        </a>
                    </div>
                    
                    <div className="grid grid-cols-12 gap-6">
                    <div className="relative col-span-12 mb-10 space-y-4 md:col-span-6 lg:col-span-4">
                        <a href="#_" className="relative block w-full h-64 overflow-hidden rounded">
                        <img className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="https://cdn.devdojo.com/images/may2021/blog-image-01.jpg"/>
                        </a>
                        <p className="text-xs font-bold text-gray-400 uppercase">Resources</p>
                        <a href="#_" className="block text-xl font-medium leading-tight text-gray-700 hover:text-gray-900">Realizing and Delivering Business Outcomes from Existing Processes</a>
                    </div>
                    
                    <div className="relative col-span-12 mb-10 space-y-4 md:col-span-6 lg:col-span-4">
                    <a href="#_" className="relative block w-full h-64 overflow-hidden rounded">
                    <img className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="https://cdn.devdojo.com/images/may2021/blog-image-02.png"/>
                    </a>
                    <p className="text-xs font-bold text-gray-400 uppercase">Resources</p>
                    <a href="#_" className="block text-xl font-medium leading-tight text-gray-700 hover:text-gray-900">Monitor, Optimize and Measure your processes: Ensuring 100% ROI in 2021</a>
                    </div>
                    
                    <div className="relative col-span-12 mb-10 space-y-4 md:col-span-6 lg:col-span-4">
                    <a href="#_" className="relative block w-full h-64 overflow-hidden rounded">
                    <img className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="https://cdn.devdojo.com/images/may2021/blog-image-03.jpg"/>
                    </a>
                    <p className="text-xs font-bold text-gray-400 uppercase">Resources</p>
                    <a href="#_" className="block text-xl font-medium leading-tight text-gray-700 hover:text-gray-900">KTern's Ultimate Guide to Process Mining:2021 </a>
                    </div>
                    </div>
                </div>
            </section>
            {/* / Resources Setion */}
            {/* Cta Section */}
            <section className="bg-white">
            <div className="px-8 py-8 mx-auto sm:py-10 lg:py-20 max-w-7xl">
            <div className="relative py-6 overflow-hidden rounded-lg bg-gradient-to-r from-black to-project-400 lg:py-12 md:px-6 lg:p-16 lg:flex lg:items-center lg:justify-between md:shadow-xl md:bg-purple-1000">
            <div className="absolute top-0 right-0 hidden w-full -mt-20 transform rotate-45 translate-x-1/2 bg-white sm:block h-96 opacity-5"></div>
            <div className="absolute top-0 left-0 hidden w-full -mt-20 transform rotate-45 -translate-x-1/2 bg-white sm:block h-96 opacity-5"></div>
            <div className="relative p-6 rounded-lg md:p-0 md:pb-4">
            <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-white sm:text-4xl sm:leading-10">Remove Barriers and unlock your Enterprise's Full Potential</h2>
            <p className="w-full mt-5 text-lg leading-6 text-white ">Start your 15-day free trial. No credit card required. No strings attached.</p>
            </div>
            <div className="relative flex flex-col items-center w-full px-6 space-y-5 md:space-x-5 md:space-y-0 md:flex-row md:w-auto lg:flex-shrink-0 md:px-0">
            <a className="  inline-block py-3 px-10 bg-black hover:bg-gray-100 hover:text-black shadow text-lg text-white font-bold rounded-l-xl rounded-t-xl transition duration-200 custom-card-subheading" href="#">See Pricing</a>
           <a className="  inline-block py-3 px-10 bg-white hover:bg-gray-50 hover:text-black shadow text-lg text-black font-bold rounded-l-xl rounded-t-xl transition duration-200 custom-card-subheading" href="#">Try it free</a>
            </div>
            </div>
            </div>
            </section> 
            {/* /Cta Section */}
        </Layout>
    )
}