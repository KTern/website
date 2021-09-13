import Layout from "../../component/Layout";
import Image from "next/image";
import Link from "next/link";
export default function Features () {
    return (
        <Layout>
               <section className="w-full py-20 bg-secondary">
            <div className="flex flex-col items-center px-4 mx-auto max-w-7xl lg:flex-row">
                <div className="relative z-20 flex flex-col items-start justify-center w-full h-full lg:w-1/2">
                    <p className="inline-block px-2 py-1 mb-5 font-medium tiny-heading tracking-wider text-gray-900 uppercase bg-gray-200 rounded-full ">
                    KTERN PARTNER PROGRAM
                </p>
                <h5 className="mb-3 heading font-bold leading-none sm:text-4xl ">
                    Become a <br/>KTern Partner
                </h5>
                <p className="py-5 mb-5 text-gray-600 subheading">
                    <span className="font-bold subheading">Leverage KTern&apos;s Cognitive Workplace</span> to deliver SAP Digital Transformation Success to your customers through our Proprietery  <span className="font-bold">#DXaaS</span> Approach
                </p>
                <div className="flex items-center space-x-4">
                   <Link  href="#" passHref><a className="hidden mb-1 lg:inline-block py-2 px-6 bg-black hover:bg-gray-300 hover:text-black shadow uppercase text-white font-bold rounded-l-xl tiny-heading rounded-t-xl transition duration-200 ">Become a Partner</a></Link>
                    <Link href=""  passHref>
                        <a className="inline-flex items-center tiny-heading uppercase text-gray-400 underline transition-colors duration-200 ">Partner Portal
                        <svg className="inline-block w-2 ml-2" fill="currentColor" viewBox="0 0 12 12">
                            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z">
                            </path>
                        </svg>
                        </a>
                    </Link>
                </div>
                </div>
               <div className="hidden lg:block relative z-10 w-full h-full my-16 lg:my-0 lg:w-1/2">
                    <Image className="relative z-40 w-full h-full" src="https://cdn.devdojo.com/images/june2021/home-hero.png" alt="hero image" width={600 } height={420 }/>
                    <div className="box-content absolute inset-0 z-30 hidden scale-150 translate-x-40 translate-y-10 rounded-full w-80 lg:block h-80 xl:w-96 xl:h-96 bg-pink-50"></div>
                    <div className="absolute bottom-0 left-0 z-20 hidden -translate-x-3 -translate-y-12 rounded-full opacity-50 w-72 lg:block h-72 bg-yellow-50"></div>
                    <div className="absolute top-0 left-0 z-20 hidden -translate-x-12 -translate-y-12 rounded-full opacity-50 w-72 lg:block h-72 bg-blue-50"></div>
                </div>   </div>
            </section>
        
             <section className="relative w-full py-12 overflow-hidden bg-white md:py-20 xl:pt-32 xl:pb-40">
                <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0">
                    <h2 className="mb-1 card-heading font-bold leading-tight text-gray-900">Digital Maps</h2>
                    <p className="mb-12 card-subheading text-gray-500">KTern’s Digital Maps connects to an ECC system and assess the entire landscape</p>

                    <div className="flex w-full h-full">

                        <div className="w-full lg:w-2/3">

                            {/* <!-- Feature blocks first column --> */}
                            <div className="flex flex-col w-full mb-10 sm:flex-row">
                                <Link href="#"  passHref>
                                    <a className="w-full mb-10 sm:mb-0 sm:w-1/2   ">
                                    <div className="relative h-full ml-0 mr-0 sm:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-500 rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-yellow-500 rounded-lg">
                                                <div className="flex items-center -mt-1">
                                                    <div className="relative w-8 h-8">
                                                        <Image src="/assets/icons/Maps.png"  layout="fill"/>
                                                    </div>
                                                <h3 className="my-2 ml-3 card-subheading font-bold text-gray-800">Landscape Assessment</h3>
                                            </div>
                                            <p className="mt-3 mb-1 tiny-subheading font-bold text-indigo-500 uppercase">Digital maps</p>
                                            <p className="mb-2 text-md text-gray-600">Landscape Assessment gives detailed information of the type of SAP system connected to KTern. 

                                            </p>
                                            <span className="absolute flex items-center tiny-subheading font-bold text-black hover:text-gray-400 bottom-1">
                                                Learn More
                                                {/* <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> */}
                                            </span>
                                        </div>

                                    </div>
                                    </a>
                                </Link>

                                <Link href="#"  passHref>
                                    <a className="w-full sm:w-1/2 ">
                                    <div className="relative h-full ml-0 md:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-800 rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-gray-800 rounded-lg">
                                            <div className="flex items-center -mt-1">
                                            <div className="w-8 h-8 relative">
                                            <Image src="/assets/icons/Process.svg" alt="Process" layout="fill"/>
                                            </div>
                                            <h3 className="my-2 ml-3 card-subheading font-bold text-gray-800">Business Assessment</h3>
                                            </div>
                                            <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">Digital Maps</p>
                                            <p className="mb-2 text-md text-gray-600">Business Process Assessment gives you a proper understanding of each process is getting affected</p>
                                            <span className="absolute flex items-center tiny-subheading font-bold text-black hover:text-gray-400 bottom-1 ">
                                                Learn More
                                                {/* <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> */}
                                            </span>
                                        </div>
                                        

                                    </div>
                                    </a>
                                </Link>
                            </div>

                            {/* <!-- Feature blocks second column --> */}
                            <div className="flex flex-col w-full mb-5 sm:flex-row">
                                <Link href="#" passHref>
                                    <a className="w-full mb-10 sm:mb-0 sm:w-1/2">
                                    <div className="relative h-full ml-0 mr-0 sm:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                                            <div className="flex items-center -mt-1">
                                                <div className="w-8 h-8 relative" >
                                            <Image src="/assets/icons/Projects.png" alt="Projects" layout="fill"/>
                                            </div>
                                                <h3 className="my-2 ml-3 card-subheading font-bold text-gray-800">Business  Assessment</h3>
                                            </div>
                                            <p className="mt-3 mb-1 text-xs font-medium text-black uppercase">Digital Maps</p>
                                            <p className="mb-2 text-md text-gray-600">Collaborating with members of your team couldn&apos;t be easier.</p>
                                            <span className="absolute flex items-center tiny-subheading font-bold text-black hover:text-gray-400 bottom-1">
                                                Learn More
                                                {/* <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> */}
                                            </span>
                                        
                                        </div>

                                    </div>
                                    </a>
                                </Link>

                                <Link href="#" passHref>
                                    <a className="w-full sm:w-1/2">
                                        <div className="relative h-full ml-0 md:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-800 rounded-lg"></span>
                                            <div className="relative h-full p-5 bg-white border-2 border-gray-500 rounded-lg">
                                                <div className="flex items-center -mt-1">
                                                    <div className="w-8 h-8 relative">
                                                <Image src="/assets/icons/Mines.png"  alt="Mines" layout="fill"/>
                                                </div>

                                                <h3 className="my-2 ml-3 card-subheading font-bold text-gray-800">Custom Assessment</h3>
                                                </div>
                                                <p className="mt-3 mb-1 text-xs font-medium text-gray-800 uppercase">Digital Maps</p>
                                                <p className="mb-2 text-md text-gray-600">Our automation tools will help you build and grow your marketing empire.</p>
                                                <span className="absolute flex items-center tiny-subheading font-bold text-black hover:text-gray-400 bottom-1">
                                                    Learn More
                                                    {/* <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> */}
                                                </span>
                                            </div>

                                        </div>
                                    </a>
                                </Link>
                            </div>

                        </div>

                        <div className="hidden w-1/3 lg:block">
                            <div className="absolute w-full max-w-4xl pl-12 -mt-20 xl:-mt-32">
                                <div className="absolute top-0 left-0 w-full h-full mt-2 ml-10 bg-gray-900 rounded-2xl"></div>
                                <div className="relative overflow-hidden border-2 border-black rounded-2xl">
                                
                                <div className="w-100 h-80 relative">
                                    <Image src="/features/kternhero.png" alt="Kternhero" layout="fill"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

            <section className="relative w-full py-12 overflow-hidden bg-white md:py-20 xl:pt-32 xl:pb-40">
                <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0">
                    <h2 className="mb-1 card-heading font-bold leading-tight text-gray-900">Digital Processes</h2>
                    <p className="mb-12 card-subheading text-gray-500">KTern’s Digital Maps connects to an ECC system and assess the entire landscape</p>

                    <div className="flex w-full h-full">

                        <div className="w-full lg:w-2/3">

                            {/* <!-- Feature blocks first column --> */}
                            <div className="flex flex-col w-full mb-10 sm:flex-row">
                                <Link href="#" passHref>
                                    <a className="w-full mb-10 sm:mb-0 sm:w-1/2   ">
                                    <div className="relative h-full ml-0 mr-0 sm:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-500 rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-yellow-500 rounded-lg">
                                            <div className="flex items-center -mt-1">
                                                <div className="w-8 h-8 relative" >
                                            <Image src="/assets/icons/Maps.png" alt="Maps" layout="fill" />
                                            </div>
                                                <h3 className="my-2 ml-3 card-subheading font-bold text-gray-800">Landscape Assessment</h3>
                                            </div>
                                            <p className="mt-3 mb-1 tiny-subheading font-bold text-indigo-500 uppercase">Digital maps</p>
                                            <p className="mb-2 text-md text-gray-600">Landscape Assessment gives detailed information of the type of SAP system connected to KTern. 

                                            </p>
                                            <span className="absolute flex items-center tiny-subheading font-bold text-black hover:text-gray-400 bottom-1">
                                                Learn More
                                                {/* <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> */}
                                            </span>
                                        </div>

                                    </div>
                                    </a>
                                </Link>

                                <Link href="#" passHref>
                                    <a className="w-full sm:w-1/2 ">
                                    <div className="relative h-full ml-0 md:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-800 rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-gray-800 rounded-lg">
                                            <div className="flex items-center -mt-1">
                                            <div className="w-8 h-8 relative">
                                            <Image src="/assets/icons/Process.svg" alt="Process" layout="fill"/>
                                            </div>
                                            <h3 className="my-2 ml-3 card-subheading font-bold text-gray-800">Business Assessment</h3>
                                            </div>
                                            <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">Digital Maps</p>
                                            <p className="mb-2 text-md text-gray-600">Business Process Assessment gives you a proper understanding of each process is getting affected</p>
                                            <span className="absolute flex items-center tiny-subheading font-bold text-black hover:text-gray-400 bottom-1 ">
                                                Learn More
                                                {/* <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> */}
                                            </span>
                                        </div>
                                        

                                    </div>
                                    </a>
                                </Link>
                            </div>

                            {/* <!-- Feature blocks second column --> */}
                            <div className="flex flex-col w-full mb-5 sm:flex-row">
                                <Link href="#" passHref>
                                    <a className="w-full mb-10 sm:mb-0 sm:w-1/2">
                                    <div className="relative h-full ml-0 mr-0 sm:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                                            <div className="flex items-center -mt-1">
                                                <div className="w-8 h-8 relative" >
                                            <Image src="/assets/icons/Projects.png" alt="Projects" layout="fill"/>
                                            </div>
                                                <h3 className="my-2 ml-3 card-subheading font-bold text-gray-800">Business  Assessment</h3>
                                            </div>
                                            <p className="mt-3 mb-1 text-xs font-medium text-black uppercase">Digital Maps</p>
                                            <p className="mb-2 text-md text-gray-600">Collaborating with members of your team couldn&apos;t be easier.</p>
                                            <span className="absolute flex items-center tiny-subheading font-bold text-black hover:text-gray-400 bottom-1">
                                                Learn More
                                                {/* <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> */}
                                            </span>
                                        
                                        </div>

                                    </div>
                                    </a>
                                </Link>

                                <Link href="#" passHref>
                                    <a className="w-full sm:w-1/2">
                                    <div className="relative h-full ml-0 md:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-800 rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-gray-500 rounded-lg">
                                            <div className="flex items-center -mt-1">
                                                <div className="w-8 h-8 relative">
                                            <Image src="/assets/icons/Mines.png"  alt="Mines" layout="fill"/>
                                            </div>

                                            <h3 className="my-2 ml-3 card-subheading font-bold text-gray-800">Custom Assessment</h3>
                                            </div>
                                            <p className="mt-3 mb-1 text-xs font-medium text-gray-800 uppercase">Digital Maps</p>
                                            <p className="mb-2 text-md text-gray-600">Our automation tools will help you build and grow your marketing empire.</p>
                                            <span className="absolute flex items-center tiny-subheading font-bold text-black hover:text-gray-400 bottom-1">
                                                Learn More
                                                {/* <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> */}
                                            </span>
                                        </div>

                                    </div>
                                    </a>
                                </Link>
                            </div>

                        </div>

                        <div className="hidden w-1/3 lg:block">
                            <div className="absolute w-full max-w-4xl pl-12 -mt-20 xl:-mt-32">
                                <div className="absolute top-0 left-0 w-full h-full mt-2 ml-10 bg-gray-900 rounded-2xl"></div>
                                <div className="relative overflow-hidden border-2 border-black rounded-2xl">
                                     <div className="w-100 h-80 relative">
                                    <Image src="/features/kternhero.png" alt="Kternhero" layout="fill"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

            <section className="relative w-full py-12 overflow-hidden bg-white md:py-20 xl:pt-32 xl:pb-40">
                <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0">
                    <h2 className="mb-1 card-heading font-bold leading-tight text-gray-900">Digital Projects</h2>
                    <p className="mb-12 card-subheading text-gray-500">KTern’s Digital Maps connects to an ECC system and assess the entire landscape</p>

                    <div className="flex w-full h-full">

                        <div className="w-full lg:w-2/3">

                            {/* <!-- Feature blocks first column --> */}
                            <div className="flex flex-col w-full mb-10 sm:flex-row">
                                <Link href="#" passHref>
                                    <a className="w-full mb-10 sm:mb-0 sm:w-1/2   ">
                                    <div className="relative h-full ml-0 mr-0 sm:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-500 rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-yellow-500 rounded-lg">
                                            <div className="flex items-center -mt-1">
                                                <div className="w-8 h-8 relative" >
                                            <Image src="/assets/icons/Maps.png" alt="Maps" layout="fill" />
                                            </div>
                                                <h3 className="my-2 ml-3 card-subheading font-bold text-gray-800">Landscape Assessment</h3>
                                            </div>
                                            <p className="mt-3 mb-1 tiny-subheading font-bold text-indigo-500 uppercase">Digital maps</p>
                                            <p className="mb-2 text-md text-gray-600">Landscape Assessment gives detailed information of the type of SAP system connected to KTern. 

                                            </p>
                                            <span className="absolute flex items-center tiny-subheading font-bold text-black hover:text-gray-400 bottom-1">
                                                Learn More
                                                {/* <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> */}
                                            </span>
                                        </div>

                                    </div>
                                    </a>
                                </Link>

                                <Link href="#" passHref>
                                    <a className="w-full sm:w-1/2 ">
                                    <div className="relative h-full ml-0 md:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-800 rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-gray-800 rounded-lg">
                                            <div className="flex items-center -mt-1">
                                            <div className="w-8 h-8 relative">
                                            <Image src="/assets/icons/Process.svg" alt="Process" layout="fill"/>
                                            </div>
                                            <h3 className="my-2 ml-3 card-subheading font-bold text-gray-800">Business Assessment</h3>
                                            </div>
                                            <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">Digital Maps</p>
                                            <p className="mb-2 text-md text-gray-600">Business Process Assessment gives you a proper understanding of each process is getting affected</p>
                                            <span className="absolute flex items-center tiny-subheading font-bold text-black hover:text-gray-400 bottom-1 ">
                                                Learn More
                                                {/* <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> */}
                                            </span>
                                        </div>
                                        

                                    </div>
                                    </a>
                                </Link>
                            </div>

                            {/* <!-- Feature blocks second column --> */}
                            <div className="flex flex-col w-full mb-5 sm:flex-row">
                                <Link href="#" passHref>
                                    <a className="w-full mb-10 sm:mb-0 sm:w-1/2">
                                    <div className="relative h-full ml-0 mr-0 sm:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                                            <div className="flex items-center -mt-1">
                                                <div className="w-8 h-8 relative" >
                                            <Image src="/assets/icons/Projects.png" alt="Projects" layout="fill"/>
                                            </div>
                                                <h3 className="my-2 ml-3 card-subheading font-bold text-gray-800">Business  Assessment</h3>
                                            </div>
                                            <p className="mt-3 mb-1 text-xs font-medium text-black uppercase">Digital Maps</p>
                                            <p className="mb-2 text-md text-gray-600">Collaborating with members of your team couldn&apos;t be easier.</p>
                                            <span className="absolute flex items-center tiny-subheading font-bold text-black hover:text-gray-400 bottom-1">
                                                Learn More
                                                {/* <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> */}
                                            </span>
                                        
                                        </div>

                                    </div>
                                    </a>
                                </Link>

                                <Link href="#" passHref>
                                    <a className="w-full sm:w-1/2">
                                    <div className="relative h-full ml-0 md:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-800 rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-gray-500 rounded-lg">
                                            <div className="flex items-center -mt-1">
                                                <div className="w-8 h-8 relative">
                                            <Image src="/assets/icons/Mines.png"  alt="Mines" layout="fill"/>
                                            </div>

                                            <h3 className="my-2 ml-3 card-subheading font-bold text-gray-800">Custom Assessment</h3>
                                            </div>
                                            <p className="mt-3 mb-1 text-xs font-medium text-gray-800 uppercase">Digital Maps</p>
                                            <p className="mb-2 text-md text-gray-600">Our automation tools will help you build and grow your marketing empire.</p>
                                            <span className="absolute flex items-center tiny-subheading font-bold text-black hover:text-gray-400 bottom-1">
                                                Learn More
                                                {/* <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> */}
                                            </span>
                                        </div>

                                    </div>
                                    </a>
                                </Link>
                            </div>

                        </div>

                        <div className="hidden w-1/3 lg:block">
                            <div className="absolute w-full max-w-4xl pl-12 -mt-20 xl:-mt-32">
                                <div className="absolute top-0 left-0 w-full h-full mt-2 ml-10 bg-gray-900 rounded-2xl"></div>
                                <div className="relative overflow-hidden border-2 border-black rounded-2xl">
                                     <div className="w-100 h-80 relative">
                                    <Image src="/features/kternhero.png" alt="Kternhero" layout="fill"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

            <section className="relative w-full py-12 overflow-hidden bg-white md:py-20 xl:pt-32 xl:pb-40">
                <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0">
                    <h2 className="mb-1 card-heading font-bold leading-tight text-gray-900">Digital Labs</h2>
                    <p className="mb-12 card-subheading text-gray-500">KTern’s Digital Maps connects to an ECC system and assess the entire landscape</p>

                    <div className="flex w-full h-full">

                        <div className="w-full lg:w-2/3">

                            {/* <!-- Feature blocks first column --> */}
                            <div className="flex flex-col w-full mb-10 sm:flex-row">
                                <Link href="#" passHref>
                                    <a className="w-full mb-10 sm:mb-0 sm:w-1/2   ">
                                    <div className="relative h-full ml-0 mr-0 sm:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-500 rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-yellow-500 rounded-lg">
                                            <div className="flex items-center -mt-1">
                                                <div className="w-8 h-8 relative" >
                                            <Image src="/assets/icons/Maps.png" alt="Maps" layout="fill" />
                                            </div>
                                                <h3 className="my-2 ml-3 card-subheading font-bold text-gray-800">Landscape Assessment</h3>
                                            </div>
                                            <p className="mt-3 mb-1 tiny-subheading font-bold text-indigo-500 uppercase">Digital maps</p>
                                            <p className="mb-2 text-md text-gray-600">Landscape Assessment gives detailed information of the type of SAP system connected to KTern. 

                                            </p>
                                            <span className="absolute flex items-center tiny-subheading font-bold text-black hover:text-gray-400 bottom-1">
                                                Learn More
                                                {/* <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> */}
                                            </span>
                                        </div>

                                    </div>
                                    </a>
                                </Link>

                                <Link href="#" passHref>
                                    <a className="w-full sm:w-1/2 ">
                                    <div className="relative h-full ml-0 md:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-800 rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-gray-800 rounded-lg">
                                            <div className="flex items-center -mt-1">
                                            <div className="w-8 h-8 relative">
                                            <Image src="/assets/icons/Process.svg" alt="Process" layout="fill"/>
                                            </div>
                                            <h3 className="my-2 ml-3 card-subheading font-bold text-gray-800">Business Assessment</h3>
                                            </div>
                                            <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">Digital Maps</p>
                                            <p className="mb-2 text-md text-gray-600">Business Process Assessment gives you a proper understanding of each process is getting affected</p>
                                            <span className="absolute flex items-center tiny-subheading font-bold text-black hover:text-gray-400 bottom-1 ">
                                                Learn More
                                                {/* <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> */}
                                            </span>
                                        </div>
                                        

                                    </div>
                                    </a>
                                </Link>
                            </div>

                            {/* <!-- Feature blocks second column --> */}
                            <div className="flex flex-col w-full mb-5 sm:flex-row">
                                <Link href="#" passHref>
                                    <a className="w-full mb-10 sm:mb-0 sm:w-1/2">
                                    <div className="relative h-full ml-0 mr-0 sm:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                                            <div className="flex items-center -mt-1">
                                                <div className="w-8 h-8 relative" >
                                            <Image src="/assets/icons/Projects.png" alt="Projects" layout="fill"/>
                                            </div>
                                                <h3 className="my-2 ml-3 card-subheading font-bold text-gray-800">Business  Assessment</h3>
                                            </div>
                                            <p className="mt-3 mb-1 text-xs font-medium text-black uppercase">Digital Maps</p>
                                            <p className="mb-2 text-md text-gray-600">Collaborating with members of your team couldn&apos;t be easier.</p>
                                            <span className="absolute flex items-center tiny-subheading font-bold text-black hover:text-gray-400 bottom-1">
                                                Learn More
                                                {/* <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> */}
                                            </span>
                                        
                                        </div>

                                    </div>
                                    </a>
                                </Link>

                                <Link href="#" passHref>
                                    <a className="w-full sm:w-1/2">
                                    <div className="relative h-full ml-0 md:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-800 rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-gray-500 rounded-lg">
                                            <div className="flex items-center -mt-1">
                                                <div className="w-8 h-8 relative">
                                            <Image src="/assets/icons/Mines.png"  alt="Mines" layout="fill"/>
                                            </div>

                                            <h3 className="my-2 ml-3 card-subheading font-bold text-gray-800">Custom Assessment</h3>
                                            </div>
                                            <p className="mt-3 mb-1 text-xs font-medium text-gray-800 uppercase">Digital Maps</p>
                                            <p className="mb-2 text-md text-gray-600">Our automation tools will help you build and grow your marketing empire.</p>
                                            <span className="absolute flex items-center tiny-subheading font-bold text-black hover:text-gray-400 bottom-1">
                                                Learn More
                                                {/* <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> */}
                                            </span>
                                        </div>

                                    </div>
                                    </a>
                                </Link>
                            </div>

                        </div>

                        <div className="hidden w-1/3 lg:block">
                            <div className="absolute w-full max-w-4xl pl-12 -mt-20 xl:-mt-32">
                                <div className="absolute top-0 left-0 w-full h-full mt-2 ml-10 bg-gray-900 rounded-2xl"></div>
                                <div className="relative overflow-hidden border-2 border-black rounded-2xl">
                                     <div className="w-100 h-80 relative">
                                    <Image src="/features/kternhero.png" alt="Kternhero" layout="fill"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

            <section className="relative w-full py-12 overflow-hidden bg-white md:py-20 xl:pt-32 xl:pb-40">
                <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0">
                    <h2 className="mb-1 card-heading font-bold leading-tight text-gray-900">Digital Mines</h2>
                    <p className="mb-12 card-subheading text-gray-500">KTern’s Digital Maps connects to an ECC system and assess the entire landscape</p>

                    <div className="flex w-full h-full">

                        <div className="w-full lg:w-2/3">

                            {/* <!-- Feature blocks first column --> */}
                            <div className="flex flex-col w-full mb-10 sm:flex-row">
                                <Link href="#" passHref>
                                    <a className="w-full mb-10 sm:mb-0 sm:w-1/2   ">
                                    <div className="relative h-full ml-0 mr-0 sm:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-500 rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-yellow-500 rounded-lg">
                                            <div className="flex items-center -mt-1">
                                                <div className="w-8 h-8 relative" >
                                            <Image src="/assets/icons/Maps.png" alt="Maps" layout="fill" />
                                            </div>
                                                <h3 className="my-2 ml-3 card-subheading font-bold text-gray-800">Landscape Assessment</h3>
                                            </div>
                                            <p className="mt-3 mb-1 tiny-subheading font-bold text-indigo-500 uppercase">Digital maps</p>
                                            <p className="mb-2 text-md text-gray-600">Landscape Assessment gives detailed information of the type of SAP system connected to KTern. 

                                            </p>
                                            <span className="absolute flex items-center tiny-subheading font-bold text-black hover:text-gray-400 bottom-1">
                                                Learn More
                                                {/* <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> */}
                                            </span>
                                        </div>

                                    </div>
                                    </a>
                                </Link>

                                <Link href="#" passHref>
                                    <a className="w-full sm:w-1/2 ">
                                    <div className="relative h-full ml-0 md:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-800 rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-gray-800 rounded-lg">
                                            <div className="flex items-center -mt-1">
                                            <div className="w-8 h-8 relative">
                                            <Image src="/assets/icons/Process.svg" alt="Process" layout="fill"/>
                                            </div>
                                            <h3 className="my-2 ml-3 card-subheading font-bold text-gray-800">Business Assessment</h3>
                                            </div>
                                            <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">Digital Maps</p>
                                            <p className="mb-2 text-md text-gray-600">Business Process Assessment gives you a proper understanding of each process is getting affected</p>
                                            <span className="absolute flex items-center tiny-subheading font-bold text-black hover:text-gray-400 bottom-1 ">
                                                Learn More
                                                {/* <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> */}
                                            </span>
                                        </div>
                                        

                                    </div>
                                    </a>
                                </Link>
                            </div>

                            {/* <!-- Feature blocks second column --> */}
                            <div className="flex flex-col w-full mb-5 sm:flex-row">
                                <Link href="#" passHref>
                                    <a className="w-full mb-10 sm:mb-0 sm:w-1/2">
                                    <div className="relative h-full ml-0 mr-0 sm:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                                            <div className="flex items-center -mt-1">
                                                <div className="w-8 h-8 relative" >
                                            <Image src="/assets/icons/Projects.png" alt="Projects" layout="fill"/>
                                            </div>
                                                <h3 className="my-2 ml-3 card-subheading font-bold text-gray-800">Business  Assessment</h3>
                                            </div>
                                            <p className="mt-3 mb-1 text-xs font-medium text-black uppercase">Digital Maps</p>
                                            <p className="mb-2 text-md text-gray-600">Collaborating with members of your team couldn&apos;t be easier.</p>
                                            <span className="absolute flex items-center tiny-subheading font-bold text-black hover:text-gray-400 bottom-1">
                                                Learn More
                                                {/* <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> */}
                                            </span>
                                        
                                        </div>

                                    </div>
                                    </a>
                                </Link>

                                <Link href="#" passHref>
                                    <a className="w-full sm:w-1/2">
                                    <div className="relative h-full ml-0 md:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-800 rounded-lg"></span>
                                        <div className="relative h-full p-5 bg-white border-2 border-gray-500 rounded-lg">
                                            <div className="flex items-center -mt-1">
                                                <div className="w-8 h-8 relative">
                                            <Image src="/assets/icons/Mines.png"  alt="Mines" layout="fill"/>
                                            </div>

                                            <h3 className="my-2 ml-3 card-subheading font-bold text-gray-800">Custom Assessment</h3>
                                            </div>
                                            <p className="mt-3 mb-1 text-xs font-medium text-gray-800 uppercase">Digital Maps</p>
                                            <p className="mb-2 text-md text-gray-600">Our automation tools will help you build and grow your marketing empire.</p>
                                            <span className="absolute flex items-center tiny-subheading font-bold text-black hover:text-gray-400 bottom-1">
                                                Learn More
                                                {/* <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> */}
                                            </span>
                                        </div>

                                    </div>
                                    </a>
                                </Link>
                            </div>

                        </div>

                        <div className="hidden w-1/3 lg:block">
                            <div className="absolute w-full max-w-4xl pl-12 -mt-20 xl:-mt-32">
                                <div className="absolute top-0 left-0 w-full h-full mt-2 ml-10 bg-gray-900 rounded-2xl"></div>
                                <div className="relative overflow-hidden border-2 border-black rounded-2xl">
                                     <div className="w-100 h-80 relative">
                                    <Image src="/features/kternhero.png" alt="Kternhero" layout="fill"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

        </Layout>
    )
}