import Layout from "../../component/Layout";
import Image from "next/image";
import Link from "next/link";
import heroimage from "/public/features/kternhero.png"
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

             <section className="relative w-full py-12 overflow-hidden bg-white md:py-20 xl:pt-32 xl:pb-40">
                <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0">
                    <h2 className="mb-1 card-heading   text-gray-900">Digital Maps</h2>
                    <p className="mb-12 card-subheading text-md text-gray-500">KTern’s Digital Maps connects to an ECC system and <br />assess the entire landscape</p>

                    <div className="flex w-full h-full">

                        <div className="w-full lg:w-2/3">

                            {/* <!-- Feature blocks first column --> */}
                            <div className="flex flex-row w-full mb-10 sm:flex-col">
                                <Link href="/features/digital-projects"  passHref>
                                    <a className="w-full mb-10 md:mb-0 md:w-1/2   ">
                                    <div className="relative h-full ml-0 mr-0 md:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-500 rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-yellow-500 rounded-lg">
                                                <div className="flex items-center -mt-1">
                                                    <div className="relative w-8 h-8">
                                                        <Image src="/assets/icons/Maps.png"  layout="fill" alt="Digital Maps Icon"/>
                                                    </div>
                                                <h3 className="my-2 ml-3 card-subheading  text-gray-800">Landscape Assessment</h3>
                                            </div>
                                            <p className="mt-3 mb-1 tiny-subheading  text-indigo-500 uppercase">Digital maps</p>
                                            <p className="mb-2 text-md text-gray-600">Landscape Assessment gives detailed information of the type of SAP system connected to KTern. 

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
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-800 rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-gray-800 rounded-lg">
                                            <div className="flex items-center -mt-1">
                                            <div className="w-8 h-8 relative">
                                            <Image src="/assets/icons/Process.svg" alt="Process" layout="fill"/>
                                            </div>
                                            <h3 className="my-2 ml-3 card-subheading  text-gray-800">Business Assessment</h3>
                                            </div>
                                            <p className="mt-3 mb-1 tiny-subheading  text-indigo-500 uppercase">Digital maps</p>                                            <p className="mb-2 text-md text-gray-600">Business Process Assessment gives you a proper understanding of each process is getting affected</p>
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
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                                            <div className="flex items-center -mt-1">
                                                <div className="w-8 h-8 relative" >
                                            <Image src="/assets/icons/Projects.png" alt="Projects" layout="fill"/>
                                            </div>
                                                <h3 className="my-2 ml-3 card-subheading  text-gray-800">Business  Assessment</h3>
                                            </div>
                                            <p className="mt-3 mb-1 tiny-subheading  text-indigo-500 uppercase">Digital maps</p>                                            <p className="mb-2 text-md text-gray-600">Collaborating with members of your team couldn&apos;t be easier.</p>
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
                                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-800 rounded-lg"></span>
                                            <div className="relative h-full p-5 bg-white border-2 border-gray-500 rounded-lg">
                                                <div className="flex items-center -mt-1">
                                                    <div className="w-8 h-8 relative">
                                                <Image src="/assets/icons/Mines.png"  alt="Mines" layout="fill"/>
                                                </div>

                                                <h3 className="my-2 ml-3 card-subheading  text-gray-800">Custom Assessment</h3>
                                                </div>
                                                <p className="mt-3 mb-1 tiny-subheading  text-indigo-500 uppercase">Digital maps</p>                                                <p className="mb-2 text-md text-gray-600">Our automation tools will help you build and grow your marketing empire.</p>
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
    src={heroimage}
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
                    <h2 className="mb-1 card-heading   text-gray-900">Digital Maps</h2>
                    <p className="mb-12 card-subheading text-md text-gray-500">KTern’s Digital Maps connects to an ECC system and <br />assess the entire landscape</p>

                    <div className="flex w-full h-full">

                        <div className="w-full lg:w-2/3">

                            {/* <!-- Feature blocks first column --> */}
                            <div className="flex flex-row w-full mb-10 sm:flex-col">
                                <Link href="/features/digital-projects"  passHref>
                                    <a className="w-full mb-10 md:mb-0 md:w-1/2   ">
                                    <div className="relative h-full ml-0 mr-0 md:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-500 rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-yellow-500 rounded-lg">
                                                <div className="flex items-center -mt-1">
                                                    <div className="relative w-8 h-8">
                                                        <Image src="/assets/icons/Maps.png"  layout="fill" alt="Digital Maps Icon"/>
                                                    </div>
                                                <h3 className="my-2 ml-3 card-subheading  text-gray-800">Landscape Assessment</h3>
                                            </div>
                                            <p className="mt-3 mb-1 tiny-subheading  text-indigo-500 uppercase">Digital maps</p>
                                            <p className="mb-2 text-md text-gray-600">Landscape Assessment gives detailed information of the type of SAP system connected to KTern. 

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
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-800 rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-gray-800 rounded-lg">
                                            <div className="flex items-center -mt-1">
                                            <div className="w-8 h-8 relative">
                                            <Image src="/assets/icons/Process.svg" alt="Process" layout="fill"/>
                                            </div>
                                            <h3 className="my-2 ml-3 card-subheading  text-gray-800">Business Assessment</h3>
                                            </div>
                                            <p className="mt-3 mb-1 tiny-subheading  text-indigo-500 uppercase">Digital maps</p>                                            <p className="mb-2 text-md text-gray-600">Business Process Assessment gives you a proper understanding of each process is getting affected</p>
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
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                                            <div className="flex items-center -mt-1">
                                                <div className="w-8 h-8 relative" >
                                            <Image src="/assets/icons/Projects.png" alt="Projects" layout="fill"/>
                                            </div>
                                                <h3 className="my-2 ml-3 card-subheading  text-gray-800">Business  Assessment</h3>
                                            </div>
                                            <p className="mt-3 mb-1 tiny-subheading  text-indigo-500 uppercase">Digital maps</p>                                            <p className="mb-2 text-md text-gray-600">Collaborating with members of your team couldn&apos;t be easier.</p>
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
                                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-800 rounded-lg"></span>
                                            <div className="relative h-full p-5 bg-white border-2 border-gray-500 rounded-lg">
                                                <div className="flex items-center -mt-1">
                                                    <div className="w-8 h-8 relative">
                                                <Image src="/assets/icons/Mines.png"  alt="Mines" layout="fill"/>
                                                </div>

                                                <h3 className="my-2 ml-3 card-subheading  text-gray-800">Custom Assessment</h3>
                                                </div>
                                                <p className="mt-3 mb-1 tiny-subheading  text-indigo-500 uppercase">Digital maps</p>                                                <p className="mb-2 text-md text-gray-600">Our automation tools will help you build and grow your marketing empire.</p>
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
    src={heroimage}
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
                    <h2 className="mb-1 card-heading   text-gray-900">Digital Maps</h2>
                    <p className="mb-12 card-subheading text-md text-gray-500">KTern’s Digital Maps connects to an ECC system and <br />assess the entire landscape</p>

                    <div className="flex w-full h-full">

                        <div className="w-full lg:w-2/3">

                            {/* <!-- Feature blocks first column --> */}
                            <div className="flex flex-row w-full mb-10 sm:flex-col">
                                <Link href="/features/digital-projects"  passHref>
                                    <a className="w-full mb-10 md:mb-0 md:w-1/2   ">
                                    <div className="relative h-full ml-0 mr-0 md:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-500 rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-yellow-500 rounded-lg">
                                                <div className="flex items-center -mt-1">
                                                    <div className="relative w-8 h-8">
                                                        <Image src="/assets/icons/Maps.png"  layout="fill" alt="Digital Maps Icon"/>
                                                    </div>
                                                <h3 className="my-2 ml-3 card-subheading  text-gray-800">Landscape Assessment</h3>
                                            </div>
                                            <p className="mt-3 mb-1 tiny-subheading  text-indigo-500 uppercase">Digital maps</p>
                                            <p className="mb-2 text-md text-gray-600">Landscape Assessment gives detailed information of the type of SAP system connected to KTern. 

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
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-800 rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-gray-800 rounded-lg">
                                            <div className="flex items-center -mt-1">
                                            <div className="w-8 h-8 relative">
                                            <Image src="/assets/icons/Process.svg" alt="Process" layout="fill"/>
                                            </div>
                                            <h3 className="my-2 ml-3 card-subheading  text-gray-800">Business Assessment</h3>
                                            </div>
                                            <p className="mt-3 mb-1 tiny-subheading  text-indigo-500 uppercase">Digital maps</p>                                            <p className="mb-2 text-md text-gray-600">Business Process Assessment gives you a proper understanding of each process is getting affected</p>
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
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                                            <div className="flex items-center -mt-1">
                                                <div className="w-8 h-8 relative" >
                                            <Image src="/assets/icons/Projects.png" alt="Projects" layout="fill"/>
                                            </div>
                                                <h3 className="my-2 ml-3 card-subheading  text-gray-800">Business  Assessment</h3>
                                            </div>
                                            <p className="mt-3 mb-1 tiny-subheading  text-indigo-500 uppercase">Digital maps</p>                                            <p className="mb-2 text-md text-gray-600">Collaborating with members of your team couldn&apos;t be easier.</p>
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
                                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-800 rounded-lg"></span>
                                            <div className="relative h-full p-5 bg-white border-2 border-gray-500 rounded-lg">
                                                <div className="flex items-center -mt-1">
                                                    <div className="w-8 h-8 relative">
                                                <Image src="/assets/icons/Mines.png"  alt="Mines" layout="fill"/>
                                                </div>

                                                <h3 className="my-2 ml-3 card-subheading  text-gray-800">Custom Assessment</h3>
                                                </div>
                                                <p className="mt-3 mb-1 tiny-subheading  text-indigo-500 uppercase">Digital maps</p>                                                <p className="mb-2 text-md text-gray-600">Our automation tools will help you build and grow your marketing empire.</p>
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
    src={heroimage}
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
                    <h2 className="mb-1 card-heading   text-gray-900">Digital Maps</h2>
                    <p className="mb-12 card-subheading text-md text-gray-500">KTern’s Digital Maps connects to an ECC system and <br />assess the entire landscape</p>

                    <div className="flex w-full h-full">

                        <div className="w-full lg:w-2/3">

                            {/* <!-- Feature blocks first column --> */}
                            <div className="flex flex-row w-full mb-10 sm:flex-col">
                                <Link href="/features/digital-projects"  passHref>
                                    <a className="w-full mb-10 md:mb-0 md:w-1/2   ">
                                    <div className="relative h-full ml-0 mr-0 md:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-500 rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-yellow-500 rounded-lg">
                                                <div className="flex items-center -mt-1">
                                                    <div className="relative w-8 h-8">
                                                        <Image src="/assets/icons/Maps.png"  layout="fill" alt="Digital Maps Icon"/>
                                                    </div>
                                                <h3 className="my-2 ml-3 card-subheading  text-gray-800">Landscape Assessment</h3>
                                            </div>
                                            <p className="mt-3 mb-1 tiny-subheading  text-indigo-500 uppercase">Digital maps</p>
                                            <p className="mb-2 text-md text-gray-600">Landscape Assessment gives detailed information of the type of SAP system connected to KTern. 

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
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-800 rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-gray-800 rounded-lg">
                                            <div className="flex items-center -mt-1">
                                            <div className="w-8 h-8 relative">
                                            <Image src="/assets/icons/Process.svg" alt="Process" layout="fill"/>
                                            </div>
                                            <h3 className="my-2 ml-3 card-subheading  text-gray-800">Business Assessment</h3>
                                            </div>
                                            <p className="mt-3 mb-1 tiny-subheading  text-indigo-500 uppercase">Digital maps</p>                                            <p className="mb-2 text-md text-gray-600">Business Process Assessment gives you a proper understanding of each process is getting affected</p>
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
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                                            <div className="flex items-center -mt-1">
                                                <div className="w-8 h-8 relative" >
                                            <Image src="/assets/icons/Projects.png" alt="Projects" layout="fill"/>
                                            </div>
                                                <h3 className="my-2 ml-3 card-subheading  text-gray-800">Business  Assessment</h3>
                                            </div>
                                            <p className="mt-3 mb-1 tiny-subheading  text-indigo-500 uppercase">Digital maps</p>                                            <p className="mb-2 text-md text-gray-600">Collaborating with members of your team couldn&apos;t be easier.</p>
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
                                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-800 rounded-lg"></span>
                                            <div className="relative h-full p-5 bg-white border-2 border-gray-500 rounded-lg">
                                                <div className="flex items-center -mt-1">
                                                    <div className="w-8 h-8 relative">
                                                <Image src="/assets/icons/Mines.png"  alt="Mines" layout="fill"/>
                                                </div>

                                                <h3 className="my-2 ml-3 card-subheading  text-gray-800">Custom Assessment</h3>
                                                </div>
                                                <p className="mt-3 mb-1 tiny-subheading  text-indigo-500 uppercase">Digital maps</p>                                                <p className="mb-2 text-md text-gray-600">Our automation tools will help you build and grow your marketing empire.</p>
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
    src={heroimage}
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
                    <h2 className="mb-1 card-heading   text-gray-900">Digital Maps</h2>
                    <p className="mb-12 card-subheading text-md text-gray-500">KTern’s Digital Maps connects to an ECC system and <br />assess the entire landscape</p>

                    <div className="flex w-full h-full">

                        <div className="w-full lg:w-2/3">

                            {/* <!-- Feature blocks first column --> */}
                            <div className="flex flex-row w-full mb-10 sm:flex-col">
                                <Link href="/features/digital-projects"  passHref>
                                    <a className="w-full mb-10 md:mb-0 md:w-1/2   ">
                                    <div className="relative h-full ml-0 mr-0 md:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-500 rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-yellow-500 rounded-lg">
                                                <div className="flex items-center -mt-1">
                                                    <div className="relative w-8 h-8">
                                                        <Image src="/assets/icons/Maps.png"  layout="fill" alt="Digital Maps Icon"/>
                                                    </div>
                                                <h3 className="my-2 ml-3 card-subheading  text-gray-800">Landscape Assessment</h3>
                                            </div>
                                            <p className="mt-3 mb-1 tiny-subheading  text-indigo-500 uppercase">Digital maps</p>
                                            <p className="mb-2 text-md text-gray-600">Landscape Assessment gives detailed information of the type of SAP system connected to KTern. 

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
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-800 rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-gray-800 rounded-lg">
                                            <div className="flex items-center -mt-1">
                                            <div className="w-8 h-8 relative">
                                            <Image src="/assets/icons/Process.svg" alt="Process" layout="fill"/>
                                            </div>
                                            <h3 className="my-2 ml-3 card-subheading  text-gray-800">Business Assessment</h3>
                                            </div>
                                            <p className="mt-3 mb-1 tiny-subheading  text-indigo-500 uppercase">Digital maps</p>                                            <p className="mb-2 text-md text-gray-600">Business Process Assessment gives you a proper understanding of each process is getting affected</p>
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
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                                            <div className="flex items-center -mt-1">
                                                <div className="w-8 h-8 relative" >
                                            <Image src="/assets/icons/Projects.png" alt="Projects" layout="fill"/>
                                            </div>
                                                <h3 className="my-2 ml-3 card-subheading  text-gray-800">Business  Assessment</h3>
                                            </div>
                                            <p className="mt-3 mb-1 tiny-subheading  text-indigo-500 uppercase">Digital maps</p>                                            <p className="mb-2 text-md text-gray-600">Collaborating with members of your team couldn&apos;t be easier.</p>
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
                                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-800 rounded-lg"></span>
                                            <div className="relative h-full p-5 bg-white border-2 border-gray-500 rounded-lg">
                                                <div className="flex items-center -mt-1">
                                                    <div className="w-8 h-8 relative">
                                                <Image src="/assets/icons/Mines.png"  alt="Mines" layout="fill"/>
                                                </div>

                                                <h3 className="my-2 ml-3 card-subheading  text-gray-800">Custom Assessment</h3>
                                                </div>
                                                <p className="mt-3 mb-1 tiny-subheading  text-indigo-500 uppercase">Digital maps</p>                                                <p className="mb-2 text-md text-gray-600">Our automation tools will help you build and grow your marketing empire.</p>
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
                    src={heroimage}
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
                   
        </Layout>
    )
}