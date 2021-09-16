import Layout from "../../component/Layout";
import Image from "next/image";
import Link from "next/link";
export default function Features () {
    return (
        <Layout>
        <section className="relative w-full py-12 overflow-hidden bg-white md:py-20 xl:pt-32 xl:pb-40">
        <div className="container relative flex flex-col justify-between h-full max-w-6xl mx-40  xl:px-0">
            <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Digital Maps</h2>
            <p className="mb-12 text-lg text-gray-500">KTern’s Digital Maps connects to an ECC system and assess the entire landscape</p>

            <div className="flex w-full h-full">

                <div className="w-full lg:w-2/3">

                    {/* <!-- Feature blocks first column --> */}
                    <div className="flex flex w-full  sm:flex-col">
                        <a href="#" className="w-full mb-10 sm:mb-0 sm:w-1/2   ">
                            <div className="relative h-full ml-0 mr-10 sm:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-500 rounded-lg"></span>
                                <div className="relative h-full p-5 bg-white border-2 border-yellow-500 rounded-lg">
                                    <div className="flex items-center -mt-1">
                                    <div className="w-8 h-8 relative"><Image alt="maps logo" src="/assets/icons/Maps.png" layout="fill" /></div>
                                        <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Landscape Assessment</h3>
                                    </div>
                                    <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">Digital maps</p>
                                    <p className="mb-2 text-gray-600">Landscape Assessment gives detailed information of the type of SAP system connected to KTern. 

                                    </p>
                                    <Link href="#_"  passHref>
                                <a className="inline-flex items-center pb-1 font-medium text-maps-primary hover:border-blue-500 group ">
                                <span className="tiny-heading group-hover:text-maps-300">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-maps-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>
                                </div>

                            </div>
                        </a>

                        <a href="#" className="w-full mb-10 sm:mb-0 sm:w-1/2 ">
                            <div className="relative h-full ml-0 mr-10 sm:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-800 rounded-lg"></span>
                                <div className="relative h-full p-5 bg-white border-2 border-gray-800 rounded-lg">
                                    <div className="flex items-center -mt-1">
                                    <div  className="w-8 h-8 relative"><Image alt="" src="/assets/icons/Process.svg" layout='fill' /></div>
                                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Business Assessment</h3>
                                    </div>
                                    <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">Digital Maps</p>
                                    <p className="mb-2 text-gray-600">Business Process Assessment gives you a proper understanding of each process is getting affected</p>
                                    <Link href="#_"  passHref>
                                <a className="inline-flex items-center pb-1 font-medium text-maps-primary hover:border-blue-500 group ">
                                <span className="tiny-heading group-hover:text-maps-300">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-maps-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>
                                </div>
                                

                            </div>
                        </a>
                    </div>

                    {/* <!-- Feature blocks second column --> */}
                    <div className="flex flex w-full mb-5 sm:flex-col">
                        <a href="#" className="w-full mb-10 sm:mb-0 sm:w-1/2">
                            <div className="relative h-full ml-0 mr-10 sm:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                                <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                                    <div className="flex items-center -mt-1">
                                    <div className="w-8 h-8 relative"><Image alt="" src="/assets/icons/Projects.png" layout="fill" /></div>
                                        <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Business  Assessment</h3>
                                    </div>
                                    <p className="mt-3 mb-1 text-xs font-medium text-black uppercase">Digital Maps</p>
                                    <p className="mb-2 text-gray-600">Collaborating with members of your team couldn&apos;t be easier.</p>
                                    <Link href="#_"  passHref>
                                <a className="inline-flex items-center pb-1 font-medium text-maps-primary hover:border-blue-500 group ">
                                <span className="tiny-heading group-hover:text-maps-300">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-maps-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>
                                
                                </div>

                            </div>
                        </a>

                        <a href="#" className="w-full mb-10 sm:mb-0 sm:w-1/2">
                            <div className="relative h-full ml-0 md:mr-10 shadow hover:shadow-xl transition-all duration-500">
                                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-800 rounded-lg"></span>
                                <div className="relative h-full p-5 bg-white border-2 border-gray-500 rounded-lg">
                                    <div className="flex items-center -mt-1">
                                    <div className="w-8 h-8 relative"><Image alt="" src="/assets/icons/Mines.png" layout="fill" /></div>

                                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Custom Assessment</h3>
                                    </div>
                                    <p className="mt-3 mb-1 text-xs font-medium text-gray-800 uppercase">Digital Maps</p>
                                    <p className="mb-2 text-gray-600">Our automation tools will help you build and grow your marketing empire.</p>
                                    <Link href="#_"  passHref>
                                <a className="inline-flex items-center pb-1 font-medium text-maps-primary hover:border-blue-500 group ">
                                <span className="tiny-heading group-hover:text-maps-300">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-maps-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>
                                </div>

                            </div>
                        </a>
                    </div>

                </div>

                <div className=" w-1/3 lg:block">
                    <div className="absolute w-full max-w-4xl pl-12 -mt-20 xl:-mt-32">
                        <div className="absolute top-0 left-0 w-full h-full mt-2 ml-10 bg-gray-900 rounded-2xl"></div>
                        <div className="relative overflow-hidden  border-2 border-black rounded-2xl">
                            <Image src="/features/kternhero.png" className=" w-full h-full transform " width={600} height={500} alt="image"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </section>

        </Layout>
    )
}