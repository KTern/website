import Layout from "../../component/Layout";
import Image from "next/image";
import Link from "next/link";
import digitalmaps from "/public/features/digital-maps-screenshot.png"
import digitallabs from "/public/features/digital-labs-screenshot.png"
import digitalprojects from "/public/features/digital-projects-screenshot.png"
import digitalprocess from "/public/features/digital-process-screenshot.png"
import digitalmines from "/public/features/digital-mines-screenshot.png"


export default function Features () {
    return (
        <Layout>
             <section className="w-full py-20 bg-herogradient" >
            <div className="flex flex-col items-center px-12 mx-auto lg:flex-row">
                <div className="relative z-20 flex flex-col text-center items-center justify-center w-full h-full ">
                    <h1 className="heading text-white "  >Transform your DX Experience</h1>
                    <p className="subheading text-gray-100 pb-7 pt-2">KTern&apos;s Digital Workplace takes care of your entire DX Transformation from Initial Assessment until your SAP System Goes Live and Beyond Offering Continuous, Constant, Automated Transformation</p>
                    <div className="flex flex-row">
                    
                    <Link   rel="noopener noreferrer" href="https://app.ktern.com"><a target="_blank" className=" inline-block mx-5   shadow-md py-3 px-14 bg-white  hover:bg-gray-300   text-black   rounded-l-xl rounded-t-xl transition duration-200">Free Trial</a></Link>
                    <Link  href="/contact"><a className=" inline-block py-3 px-10 bg-black hover:bg-gray-300 hover:text-black shadow   text-white  rounded-l-xl rounded-t-xl transition duration-200 uppercase tiny-heading">Contact Sales</a></Link>
                    </div>
                </div>

               
            </div>
            </section>

             <section className="relative w-full py-12 overflow-hidden bg-white md:py-20  xl:pt-32 xl:pb-40">
                <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0">
                    <h2 className="mb-1 card-heading font-bold leading-tight text-gray-900">Digital Maps</h2>
                    <p className="mb-12 card-subheading text-md text-gray-500">KTern&apos;s Digital Maps connects to an ECC system and <br />assess the entire landscape</p>

                    <div className="flex w-full h-full">

                        <div className="w-full lg:w-2/3">

                            {/* <!-- Feature blocks first column --> */}
                            <div className="flex flex-row w-full mb-10 sm:flex-col">
                                <Link href="/features/digital-projects"  passHref>
                                    <a className="w-full mb-10 md:mb-0 md:w-1/2   ">
                                    <div className="relative h-full ml-0 mr-0 md:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-maps-secondary rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-maps-primary rounded-lg">
                                                <div className="flex items-center -mt-1">
                                                    <div className="relative w-8 h-8">
                                                        <Image src="/assets/icons/Maps.png"  layout="fill" alt="Digital Maps Icon"/>
                                                    </div>
                                                <h3 className="my-2 ml-3 card-subheading font-bold text-gray-800">Landscape <br /> Assessment</h3>
                                            </div>
                                            <p className="mt-3 mb-1 tiny-subheading font-bold text-maps-primary uppercase">Digital maps</p>
                                            <p className="mb-2 text-md text-gray-600">Gain detailed information about your SAP System. 

                                            </p>
                                           <div className="icon-link transition-opacity duration-200 group-hover:opacity-50 icon-link--black">
                                                    <Link href="/features/digital-projects"  passHref>
                                <a className="absolute inline-flex items-center pb-1 font-medium text-black hover:border-blue-500 group bottom-0 ">
                                <span className="tiny-heading group-hover:text-gray-400">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>                                                                            
                                            </div>
                                           
                                        </div>

                                    </div>
                                    </a>
                                </Link>

                                <Link href="/features/digital-projects"  passHref>
                                    <a className="w-full md:w-1/2 ">
                                    <div className="relative h-full ml-0 md:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-maps-secondary rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-maps-primary rounded-lg">
                                            <div className="flex items-center -mt-1">
                                            <div className="relative w-8 h-8">
                                                        <Image src="/assets/icons/Maps.png"  layout="fill" alt="Digital Maps Icon"/>
                                                    </div>
                                            <h3 className="my-2 ml-3 card-subheading font-bold text-gray-800">Business Process Assessment</h3>
                                            </div>
                                            <p className="mt-3 mb-1 tiny-subheading font-bold text-maps-primary uppercase">Digital maps</p>                                         
                                               <p className="mb-2 text-md text-gray-600">Understand how each process in your current system is getting affected.</p>
                                            <div className="icon-link transition-opacity duration-200 group-hover:opacity-50 icon-link--black">
                                                    <Link href="/features/digital-projects"  passHref>
                                <a className="absolute inline-flex items-center pb-1 font-medium text-black hover:border-blue-500 group bottom-0 ">
                                <span className="tiny-heading group-hover:text-gray-400">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>                                                                            
                                            </div>
                                           
                                        </div>
                                        

                                    </div>
                                    </a>
                                </Link>
                            </div>

                            {/* <!-- Feature blocks second column --> */}
                            <div className="flex flex-row w-full mb-5 sm:flex-col">
                                <Link href="/features/digital-projects" passHref>
                                    <a className="w-full mb-10 md:mb-0 md:w-1/2">
                                    <div className="relative h-full ml-0 mr-0 md:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-maps-secondary rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-maps-primary rounded-lg">
                                            <div className="flex items-center -mt-1">
                                            <div className="relative w-8 h-8">
                                                        <Image src="/assets/icons/Maps.png"  layout="fill" alt="Digital Maps Icon"/>
                                                    </div>
                                                <h3 className="my-2 ml-3 card-subheading font-bold text-gray-800">Custom Object Assessment</h3>
                                            </div>
                                            <p className="mt-3 mb-1 tiny-subheading font-bold text-maps-primary uppercase">Digital maps</p>                                           
                                             <p className="mb-2 text-md text-gray-600">Automate the entire process of SAP Custom Object Analytics.</p>
                                             <div className="icon-link transition-opacity duration-200 group-hover:opacity-50 icon-link--black">
                                                    <Link href="/features/digital-projects"  passHref>
                                <a className="absolute inline-flex items-center pb-1 font-medium text-black hover:border-blue-500 group bottom-0 p">
                                <span className="tiny-heading group-hover:text-gray-400">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>                                                                            
                                            </div>
                                           
                                        
                                        </div>

                                    </div>
                                    </a>
                                </Link>

                                <Link href="/features/digital-projects" passHref>
                                    <a className="w-full md:w-1/2">
                                        <div className="relative h-full ml-0 md:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-maps-secondary rounded-lg"></span>
                                            <div className="relative h-full p-5 bg-white border-2 border-maps-primary rounded-lg">
                                                <div className="flex items-center -mt-1">
                                                <div className="relative w-8 h-8">
                                                        <Image src="/assets/icons/Maps.png"  layout="fill" alt="Digital Maps Icon"/>
                                                    </div>

                                                <h3 className="my-2 ml-3 card-subheading font-bold text-gray-800"> Transformation <br /> Assessment</h3>
                                                </div>
                                                <p className="mt-3 mb-1 tiny-subheading font-bold text-maps-primary uppercase">Digital maps</p>                                              
                                                  <p className="mb-2 text-md text-gray-600">Get Complete Business Process Mapping at upto 6 Granular Levels</p>
                                                <div className="icon-link transition-opacity duration-200 group-hover:opacity-50 icon-link--black">
                                                    <Link href="/features/digital-projects"  passHref>
                                <a className="absolute inline-flex items-center pb-1 font-medium text-black hover:border-blue-500 group bottom-0 ">
                                <span className="tiny-heading group-hover:text-gray-400">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>                                                                            
                                            </div>
                                           
                                            </div>

                                        </div>
                                    </a>
                                </Link>
                            </div>

                        </div>

                        


                        <div className="hidden w-1/3  lg:block">
                <div className="absolute w-full max-w-4xl pl-12  -mt-25 ">
                    <div className="absolute top-0 left-0 w-full h-full mt-2 ml-10 bg-gray-900 rounded-2xl"></div>
                    <div className="relative overflow-hidden border-2 border-black rounded-2xl">
                  
  <Image
    src={digitalmaps}
    alt="KTern Hero Image"
    width={1000}
    height={600}
    objectFit="cover" 
  />


                    </div>
                </div>
            </div>

                    </div>
                </div>

            </section>
              <section className="relative w-full py-12 overflow-hidden bg-white md:py-20 xl:pt-32 xl:pb-40">
                <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0">
                    <h2 className="mb-1 card-heading font-bold leading-tight text-gray-900">Digital Projects</h2>
                    <p className="mb-12 card-subheading text-md text-gray-500">KTern&apos;s Digital Projects Provides you with <br />Automated Enterprise Project Execution</p>

                    <div className="flex w-full h-full">

                        <div className="w-full lg:w-2/3">

                            {/* <!-- Feature blocks first column --> */}
                            <div className="flex flex-row w-full mb-10 sm:flex-col">
                                <Link href="/features/digital-projects"  passHref>
                                    <a className="w-full mb-10 md:mb-0 md:w-1/2   ">
                                    <div className="relative h-full ml-0 mr-0 md:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-project-secondary rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-project-primary rounded-lg">
                                                <div className="flex items-center -mt-1">
                                                <div className="w-8 h-8 relative" >
                                            <Image src="/assets/icons/Projects.png" alt="Projects" layout="fill"/>
                                            </div>
                                                <h3 className="my-2 ml-3 card-subheading font-bold text-gray-800">Cutover Orchestrator</h3>
                                            </div>
                                            <p className="mt-3 mb-1 tiny-subheading font-bold text-project-primary uppercase">Digital Projects</p>
                                            <p className="mb-2 text-md text-gray-600">Risk-free, Transparent Go-Live with KTern&apos;s Cutover Orchestration.

                                            </p>
                                           <div className="icon-link transition-opacity duration-200 group-hover:opacity-50 icon-link--black">
                                                    <Link href="/features/digital-projects"  passHref>
                                <a className="absolute inline-flex items-center pb-1 font-medium text-black hover:border-blue-500 group bottom-0 ">
                                <span className="tiny-heading group-hover:text-gray-400">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>                                                                            
                                            </div>
                                           
                                        </div>

                                    </div>
                                    </a>
                                </Link>

                                <Link href="/features/digital-projects"  passHref>
                                    <a className="w-full md:w-1/2 ">
                                    <div className="relative h-full ml-0 md:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-project-secondary rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-project-primary rounded-lg">
                                            <div className="flex items-center -mt-1">
                                            <div className="w-8 h-8 relative" >
                                            <Image src="/assets/icons/Projects.png" alt="Projects" layout="fill"/>
                                            </div>
                                            <h3 className="my-2 ml-3 card-subheading font-bold text-gray-800">Workflow Wizard</h3>
                                            </div>
                                            <p className="mt-3 mb-1 tiny-subheading font-bold text-project-primary uppercase">Digital Projects</p>                     
                                                                   <p className="mb-2 text-md text-gray-600">Customize your own Workflow using KTern&apos;s Digitally Special Bots.</p>
                                            <div className="icon-link transition-opacity duration-200 group-hover:opacity-50 icon-link--black">
                                                    <Link href="/features/digital-projects"  passHref>
                                <a className="absolute inline-flex items-center pb-1 font-medium text-black hover:border-blue-500 group bottom-0 ">
                                <span className="tiny-heading group-hover:text-gray-400">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>                                                                            
                                            </div>
                                           
                                        </div>
                                        

                                    </div>
                                    </a>
                                </Link>
                            </div>

                            {/* <!-- Feature blocks second column --> */}
                            <div className="flex flex-row w-full mb-5 sm:flex-col">
                                <Link href="/features/digital-projects" passHref>
                                    <a className="w-full mb-10 md:mb-0 md:w-1/2">
                                    <div className="relative h-full ml-0 mr-0 md:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-project-secondary rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-project-primary rounded-lg">
                                            <div className="flex items-center -mt-1">
                                                <div className="w-8 h-8 relative" >
                                            <Image src="/assets/icons/Projects.png" alt="Projects" layout="fill"/>
                                            </div>
                                                <h3 className="my-2 ml-3 card-subheading font-bold text-gray-800">Timeline Simulator</h3>
                                            </div>
                                            <p className="mt-3 mb-1 tiny-subheading font-bold text-project-primary uppercase">Digital Projects</p>                                          
                                              <p className="mb-2 text-md text-gray-600">Set, Simulate, Auto-Track and Gain Insights on your Project Timeline. </p>
                                             <div className="icon-link transition-opacity duration-200 group-hover:opacity-50 icon-link--black">
                                                    <Link href="/features/digital-projects"  passHref>
                                <a className="absolute inline-flex items-center pb-1 font-medium text-black hover:border-blue-500 group bottom-0 p">
                                <span className="tiny-heading group-hover:text-gray-400">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>                                                                            
                                            </div>
                                           
                                        
                                        </div>

                                    </div>
                                    </a>
                                </Link>

                                <Link href="/features/digital-projects" passHref>
                                    <a className="w-full md:w-1/2">
                                        <div className="relative h-full ml-0 md:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-project-secondary rounded-lg"></span>
                                            <div className="relative h-full p-5 bg-white border-2 border-project-primary rounded-lg">
                                                <div className="flex items-center -mt-1">
                                                <div className="w-8 h-8 relative" >
                                            <Image src="/assets/icons/Projects.png" alt="Projects" layout="fill"/>
                                            </div>

                                                <h3 className="my-2 ml-3 card-subheading font-bold text-gray-800">Collaboration Forum</h3>
                                                </div>
                                                <p className="mt-3 mb-1 tiny-subheading font-bold text-project-primary uppercase">Digital Projects</p>                                               
                                                 <p className="mb-2 text-md text-gray-600">Organized Management of your SAP Project Files, Documents, Communication .</p>
                                                <div className="icon-link transition-opacity duration-200 group-hover:opacity-50 icon-link--black">
                                                    <Link href="/features/digital-projects"  passHref>
                                <a className="absolute inline-flex items-center pb-1 font-medium text-black hover:border-blue-500 group bottom-0 ">
                                <span className="tiny-heading group-hover:text-gray-400">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>                                                                            
                                            </div>
                                           
                                            </div>

                                        </div>
                                    </a>
                                </Link>
                            </div>

                        </div>

                        


                        <div className="hidden w-1/3  lg:block">
                <div className="absolute w-full max-w-4xl pl-12  -mt-25 ">
                    <div className="absolute top-0 left-0 w-full h-full mt-2 ml-10 bg-gray-900 rounded-2xl"></div>
                    <div className="relative overflow-hidden border-2 border-black rounded-2xl">
                  
                  <Image
                    src={digitalprojects}
                    alt="KTern Hero Image"
                    width={1000}
                    height={600}
                    objectFit="cover" 
                  />
                
                
                                    </div>
                </div>
            </div>

                    </div>
                </div>

            </section>
           <section className="relative w-full py-12 overflow-hidden bg-white md:py-20 xl:pt-32 xl:pb-40">
                <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0">
                    <h2 className="mb-1 card-heading font-bold leading-tight text-gray-900">Digital Process</h2>
                    <p className="mb-12 card-subheading text-md text-gray-500">Using KTern&apos;s Digital Process  Manage <br />all your Business Processes Better.</p>

                    <div className="flex w-full h-full">

                        <div className="w-full lg:w-2/3">

                            {/* <!-- Feature blocks first column --> */}
                            <div className="flex flex-row w-full mb-10 sm:flex-col">
                                <Link href="/features/digital-projects"  passHref>
                                    <a className="w-full mb-10 md:mb-0 md:w-1/2   ">
                                    <div className="relative h-full ml-0 mr-0 md:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-process-secondary rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-process-primary rounded-lg">
                                                <div className="flex items-center -mt-1">
                                                <div className="w-8 h-8 relative">
                                            <Image src="/assets/icons/Process.svg" alt="Process" layout="fill"/>
                                            </div>
                                                <h3 className="my-2 ml-3 card-subheading font-bold text-gray-800">Process Orchestrator</h3>
                                            </div>
                                            <p className="mt-3 mb-1 tiny-subheading font-bold text-process-primary uppercase">Digital Process</p>
                                            <p className="mb-2 text-md text-gray-600">Model, implement, integrate, and monitor custom process applications and integration scenarios

                                            </p>
                                           <div className="icon-link transition-opacity duration-200 group-hover:opacity-50 icon-link--black">
                                                    <Link href="/features/digital-projects"  passHref>
                                <a className="absolute inline-flex items-center pb-1 font-medium text-black hover:border-blue-500 group bottom-0 ">
                                <span className="tiny-heading group-hover:text-gray-400">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>                                                                            
                                            </div>
                                           
                                        </div>

                                    </div>
                                    </a>
                                </Link>

                                <Link href="/features/digital-projects"  passHref>
                                    <a className="w-full md:w-1/2 ">
                                    <div className="relative h-full ml-0 md:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-process-secondary rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-process-primary rounded-lg">
                                            <div className="flex items-center -mt-1">
                                            <div className="w-8 h-8 relative">
                                            <Image src="/assets/icons/Process.svg" alt="Process" layout="fill"/>
                                            </div>
                                            <h3 className="my-2 ml-3 card-subheading font-bold text-gray-800">Custom Code Remediation</h3>
                                            </div>
                                            <p className="mt-3 mb-1 tiny-subheading font-bold text-process-primary uppercase">Digital Process</p>                                    
                                                    <p className="mb-2 text-md text-gray-600">Automated Analysis and Remediation of your Custom Code </p>
                                            <div className="icon-link transition-opacity duration-200 group-hover:opacity-50 icon-link--black">
                                                    <Link href="/features/digital-projects"  passHref>
                                <a className="absolute inline-flex items-center pb-1 font-medium text-black hover:border-blue-500 group bottom-0 ">
                                <span className="tiny-heading group-hover:text-gray-400">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>                                                                            
                                            </div>
                                           
                                        </div>
                                        

                                    </div>
                                    </a>
                                </Link>
                            </div>

                            {/* <!-- Feature blocks second column --> */}
                            <div className="flex flex-row w-full mb-5 sm:flex-col">
                                <Link href="/features/digital-projects" passHref>
                                    <a className="w-full mb-10 md:mb-0 md:w-1/2">
                                    <div className="relative h-full ml-0 mr-0 md:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-process-secondary rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-process-primary rounded-lg">
                                            <div className="flex items-center -mt-1">
                                            <div className="w-8 h-8 relative">
                                            <Image src="/assets/icons/Process.svg" alt="Process" layout="fill"/>
                                            </div>
                                                <h3 className="my-2 ml-3 card-subheading font-bold text-gray-800">BPML Wizard</h3>
                                            </div>
                                            <p className="mt-3 mb-1 tiny-subheading font-bold text-process-primary uppercase">Digital Process</p>                                    
                                                    <p className="mb-2 text-md text-gray-600">Map your Complex Business Processes, Process Groups and Process Steps </p>
                                             <div className="icon-link transition-opacity duration-200 group-hover:opacity-50 icon-link--black">
                                                    <Link href="/features/digital-projects"  passHref>
                                <a className="absolute inline-flex items-center pb-1 font-medium text-black hover:border-blue-500 group bottom-0 p">
                                <span className="tiny-heading group-hover:text-gray-400">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>                                                                            
                                            </div>
                                           
                                        
                                        </div>

                                    </div>
                                    </a>
                                </Link>

                                <Link href="/features/digital-projects" passHref>
                                    <a className="w-full md:w-1/2">
                                        <div className="relative h-full ml-0 md:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-process-secondary rounded-lg"></span>
                                            <div className="relative h-full p-5 bg-white border-2 border-process-primary rounded-lg">
                                                <div className="flex items-center -mt-1">
                                                <div className="w-8 h-8 relative">
                                            <Image src="/assets/icons/Process.svg" alt="Process" layout="fill"/>
                                            </div>

                                                <h3 className="my-2 ml-3 card-subheading font-bold text-gray-800">Training Academy</h3>
                                                </div>
                                                <p className="mt-3 mb-1 tiny-subheading font-bold text-process-primary uppercase">Digital Process</p>                                               
                                                 <p className="mb-2 text-md text-gray-600">Automatic Training Scenario Recommendations based on changes made to Business Processes</p>
                                                <div className="icon-link transition-opacity duration-200 group-hover:opacity-50 icon-link--black">
                                                    <Link href="/features/digital-projects"  passHref>
                                <a className="absolute inline-flex items-center pb-1 font-medium text-black hover:border-blue-500 group bottom-0 ">
                                <span className="tiny-heading group-hover:text-gray-400">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>                                                                            
                                            </div>
                                           
                                            </div>

                                        </div>
                                    </a>
                                </Link>
                            </div>

                        </div>

                        


                        <div className="hidden w-1/3  lg:block">
                <div className="absolute w-full max-w-4xl pl-12  -mt-25 ">
                    <div className="absolute top-0 left-0 w-full h-full mt-2 ml-10 bg-gray-900 rounded-2xl"></div>
                    <div className="relative overflow-hidden border-2 border-black rounded-2xl">
                  
                  <Image
                    src={digitalprocess}
                    alt="KTern Hero Image"
                    width={1000}
                    height={600}
                    objectFit="cover" 
                  />
                
                
                                    </div>
                </div>
            </div>

                    </div>
                </div>

            </section>
           <section className="relative w-full py-12 overflow-hidden bg-white md:py-20 xl:pt-32 xl:pb-40">
                <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0">
                    <h2 className="mb-1 card-heading font-bold leading-tight text-gray-900">Digital Labs</h2>
                    <p className="mb-12 card-subheading text-md text-gray-500">KTern&apos;s Digital Labs Automates and enables  <br /> Continous SAP Enterprise Testing. </p>

                    <div className="flex w-full h-full">

                        <div className="w-full lg:w-2/3">

                            {/* <!-- Feature blocks first column --> */}
                            <div className="flex flex-row w-full mb-10 sm:flex-col">
                                <Link href="/features/digital-projects"  passHref>
                                    <a className="w-full mb-10 md:mb-0 md:w-1/2   ">
                                    <div className="relative h-full ml-0 mr-0 md:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-labs-secondary rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-labs-primary rounded-lg">
                                                <div className="flex items-center -mt-1">
                                                    <div className="relative w-8 h-8">
                                                        <Image src="/assets/icons/labs.png" alt="labs"  layout="fill"/>
                                                    </div>
                                                <h3 className="my-2 ml-3 card-subheading font-bold text-gray-800">SAP Test Case Finder</h3>
                                            </div>
                                            <p className="mt-3 mb-1 tiny-subheading font-bold text-labs-primary uppercase">Digital Labs</p>
                                            <p className="mb-2 text-md text-gray-600"> Automated, Continuous Test case Generator for Modern Enterprises  

                                            </p>
                                           <div className="icon-link transition-opacity duration-200 group-hover:opacity-50 icon-link--black">
                                                    <Link href="/features/digital-projects"  passHref>
                                <a className="absolute inline-flex items-center pb-1 font-medium text-black hover:border-blue-500 group bottom-0 ">
                                <span className="tiny-heading group-hover:text-gray-400">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>                                                                            
                                            </div>
                                           
                                        </div>

                                    </div>
                                    </a>
                                </Link>

                                <Link href="/features/digital-projects"  passHref>
                                    <a className="w-full md:w-1/2 ">
                                    <div className="relative h-full ml-0 md:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-labs-secondary rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-labs-primary rounded-lg">
                                            <div className="flex items-center -mt-1">
                                            <div className="w-8 h-8 relative">
                                            <Image src="/assets/icons/labs.png" alt="labs" layout="fill"/>
                                            </div>
                                            <h3 className="my-2 ml-3 card-subheading font-bold text-gray-800">Autonomous Test Console</h3>
                                            </div>
                                            <p className="mt-3 mb-1 tiny-subheading font-bold text-labs-primary uppercase">Digital Labs</p>                                       
                                                 <p className="mb-2 text-md text-gray-600">Customize and Drive your Enterprise&apos;s Automated SAP Testing Workflow driven by our Digitally Special Bots.</p>
                                            <div className="icon-link transition-opacity duration-200 group-hover:opacity-50 icon-link--black">
                                                    <Link href="/features/digital-projects"  passHref>
                                <a className="absolute inline-flex items-center pb-1 font-medium text-black hover:border-blue-500 group bottom-0 ">
                                <span className="tiny-heading group-hover:text-gray-400">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>                                                                            
                                            </div>
                                           
                                        </div>
                                        

                                    </div>
                                    </a>
                                </Link>
                            </div>

                            {/* <!-- Feature blocks second column --> */}
                            <div className="flex flex-row w-full mb-5 sm:flex-col">
                                <Link href="/features/digital-projects" passHref>
                                    <a className="w-full mb-10 md:mb-0 md:w-1/2">
                                    <div className="relative h-full ml-0 mr-0 md:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-labs-secondary rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-labs-primary rounded-lg">
                                            <div className="flex items-center -mt-1">
                                                <div className="w-8 h-8 relative" >
                                            <Image src="/assets/icons/labs.png" alt="labs" layout="fill"/>
                                            </div>
                                                <h3 className="my-2 ml-3 card-subheading font-bold text-gray-800">Defect Wizards</h3>
                                            </div>
                                            <p className="mt-3 mb-1 tiny-subheading font-bold text-labs-primary uppercase">Digital Labs</p>                                         
                                            
                                               <p className="mb-2 text-md text-gray-600">Raise and Manage Defects and Issues that Might Raise during your Testing.  </p>
                                             <div className="icon-link transition-opacity duration-200 group-hover:opacity-50 icon-link--black">
                                                    <Link href="/features/digital-projects"  passHref>
                                <a className="absolute inline-flex items-center pb-1 font-medium text-black hover:border-blue-500 group bottom-0 p">
                                <span className="tiny-heading group-hover:text-gray-400">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>                                                                            
                                            </div>
                                           
                                        
                                        </div>

                                    </div>
                                    </a>
                                </Link>

                                <Link href="/features/digital-projects" passHref>
                                    <a className="w-full md:w-1/2">
                                        <div className="relative h-full ml-0 md:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-labs-secondary rounded-lg"></span>
                                            <div className="relative h-full p-5 bg-white border-2 border-labs-primary rounded-lg">
                                                <div className="flex items-center -mt-1">
                                                    <div className="w-8 h-8 relative">
                                                <Image src="/assets/icons/labs.png"  alt="labs" layout="fill"/>
                                                </div>

                                                <h3 className="my-2 ml-3 card-subheading font-bold text-gray-800">Intelligent Reports</h3>
                                                </div>
                                                <p className="mt-3 mb-1 tiny-subheading font-bold text-labs-primary uppercase">Digital Labs</p>                                               
                                                 <p className="mb-2 text-md text-gray-600">Generate,Customize and Share Detailed Testing Analysis Reports.</p>
                                                <div className="icon-link transition-opacity duration-200 group-hover:opacity-50 icon-link--black">
                                                    <Link href="/features/digital-projects"  passHref>
                                <a className="absolute inline-flex items-center pb-1 font-medium text-black hover:border-blue-500 group bottom-0 ">
                                <span className="tiny-heading group-hover:text-gray-400">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>                                                                            
                                            </div>
                                           
                                            </div>

                                        </div>
                                    </a>
                                </Link>
                            </div>

                        </div>

                        


                        <div className="hidden w-1/3  lg:block">
                <div className="absolute w-full max-w-4xl pl-12  -mt-25 ">
                    <div className="absolute top-0 left-0 w-full h-full mt-2 ml-10 bg-gray-900 rounded-2xl"></div>
                    <div className="relative overflow-hidden border-2 border-black rounded-2xl">
                  
                  <Image
                    src={digitallabs}
                    alt="KTern Hero Image"
                    width={1000}
                    height={600}
                    objectFit="cover" 
                  />
                
                
                                    </div>
                </div>
            </div>

                    </div>
                </div>

            </section>
           <section className="relative w-full py-12 overflow-hidden bg-white md:py-20 xl:pt-32 xl:pb-40">
                <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0">
                    <h2 className="mb-1 card-heading font-bold leading-tight text-gray-900">Digital Mines</h2>
                    <p className="mb-12 card-subheading text-md text-gray-500">KTern&apos;s Digital Maps connects to an ECC system and <br />assess the entire landscape</p>

                    <div className="flex w-full h-full">

                        <div className="w-full lg:w-2/3">

                            {/* <!-- Feature blocks first column --> */}
                            <div className="flex flex-row w-full mb-10 sm:flex-col">
                                <Link href="/features/digital-projects"  passHref>
                                    <a className="w-full mb-10 md:mb-0 md:w-1/2   ">
                                    <div className="relative h-full ml-0 mr-0 md:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-mines-secondary rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-mines-primary rounded-lg">
                                                <div className="flex items-center -mt-1">
                                                    <div className="relative w-8 h-8">
                                                        <Image src="/assets/icons/mines.png" alt="mines" layout="fill"/>
                                                    </div>
                                                <h3 className="my-2 ml-3 card-subheading font-bold text-gray-800">Process Mining Wizards</h3>
                                            </div>
                                            <p className="mt-3 mb-1 tiny-subheading font-bold text-mines-primary uppercase">Digital Mines</p>
                                            <p className="mb-2 text-md text-gray-600">Discover and Improve Hidden Potential in your existing Business Processes.

                                            </p>
                                           <div className="icon-link transition-opacity duration-200 group-hover:opacity-50 icon-link--black">
                                                    <Link href="/features/digital-projects"  passHref>
                                <a className="absolute inline-flex items-center pb-1 font-medium text-black hover:border-blue-500 group bottom-0 ">
                                <span className="tiny-heading group-hover:text-gray-400">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>                                                                            
                                            </div>
                                           
                                        </div>

                                    </div>
                                    </a>
                                </Link>

                                <Link href="/features/digital-projects"  passHref>
                                    <a className="w-full md:w-1/2 ">
                                    <div className="relative h-full ml-0 md:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-mines-secondary rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-mines-primary rounded-lg">
                                            <div className="flex items-center -mt-1">
                                            <div className="w-8 h-8 relative">
                                            <Image src="/assets/icons/mines.png" alt="mines" layout="fill"/>
                                            </div>
                                            <h3 className="my-2 ml-3 card-subheading font-bold text-gray-800">Process Optimizer</h3>
                                            </div>
                                            <p className="mt-3 mb-1 tiny-subheading font-bold text-mines-primary uppercase">Digital mines</p>                                          
                                              <p className="mb-2 text-md text-gray-600">Run your Processes aligned to Best practices, continuously Improving with Changing Demands.</p>
                                            <div className="icon-link transition-opacity duration-200 group-hover:opacity-50 icon-link--black">
                                                    <Link href="/features/digital-projects"  passHref>
                                <a className="absolute inline-flex items-center pb-1 font-medium text-black hover:border-blue-500 group bottom-0 ">
                                <span className="tiny-heading group-hover:text-gray-400">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>                                                                            
                                            </div>
                                           
                                        </div>
                                        

                                    </div>
                                    </a>
                                </Link>
                            </div>

                            {/* <!-- Feature blocks second column --> */}
                            <div className="flex flex-row w-full mb-5 sm:flex-col">
                                <Link href="/features/digital-projects" passHref>
                                    <a className="w-full mb-10 md:mb-0 md:w-1/2">
                                    <div className="relative h-full ml-0 mr-0 md:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-mines-secondary rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-mines-primary rounded-lg">
                                            <div className="flex items-center -mt-1">
                                                <div className="w-8 h-8 relative" >
                                            <Image src="/assets/icons/mines.png" alt="mines" layout="fill"/>
                                            </div>
                                                <h3 className="my-2 ml-3 card-subheading font-bold text-gray-800">ROI Estimator</h3>
                                            </div>
                                            <p className="mt-3 mb-1 tiny-subheading font-bold text-mines-primary uppercase">Digital mines</p>                                        
                                                <p className="mb-2 text-md text-gray-600">Recieve an Estimate how much Savings and ROI your Company could generate from your Transformation Investment.</p>
                                             <div className="icon-link transition-opacity duration-200 group-hover:opacity-50 icon-link--black">
                                                    <Link href="/features/digital-projects"  passHref>
                                <a className="absolute inline-flex items-center pb-1 font-medium text-black hover:border-blue-500 group bottom-0 p">
                                <span className="tiny-heading group-hover:text-gray-400">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>                                                                            
                                            </div>
                                           
                                        
                                        </div>

                                    </div>
                                    </a>
                                </Link>

                                <Link href="/features/digital-projects" passHref>
                                    <a className="w-full md:w-1/2">
                                        <div className="relative h-full ml-0 md:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-mines-secondary rounded-lg"></span>
                                            <div className="relative h-full p-5 bg-white border-2 border-mines-primary rounded-lg">
                                                <div className="flex items-center -mt-1">
                                                    <div className="w-8 h-8 relative">
                                                <Image src="/assets/icons/Mines.png"  alt="Mines" layout="fill"/>
                                                </div>

                                                <h3 className="my-2 ml-3 card-subheading font-bold text-gray-800">SAP Business-Ops Cockpit</h3>
                                                </div>
                                                <p className="mt-3 mb-1 tiny-subheading font-bold text-mines-primary uppercase">Digital mines</p>                                              
                                                  <p className="mb-2 text-md text-gray-600">Gain real time Business Intelligence and Respond quickly.</p>
                                                <div className="icon-link transition-opacity duration-200 group-hover:opacity-50 icon-link--black">
                                                    <Link href="/features/digital-projects"  passHref>
                                <a className="absolute inline-flex items-center pb-1 font-medium text-black hover:border-blue-500 group bottom-0 ">
                                <span className="tiny-heading group-hover:text-gray-400">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>                                                                            
                                            </div>
                                           
                                            </div>

                                        </div>
                                    </a>
                                </Link>
                            </div>

                        </div>

                        


                        <div className="hidden w-1/3  lg:block">
                <div className="absolute w-full max-w-4xl pl-12  -mt-25 ">
                    <div className="absolute top-0 left-0 w-full h-full mt-2 ml-10 bg-gray-900 rounded-2xl"></div>
                    <div className="relative overflow-hidden border-2 border-black rounded-2xl">
                  
                  <Image
                    src={digitalmines}
                    alt="Ktern Hero Image"
                    width={1000}
                    height={600}
                    objectFit="cover" 
                />


                    </div>
                </div>
            </div>

                    </div>
                </div>

            </section>
                   
        </Layout>
    )
}