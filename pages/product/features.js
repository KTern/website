import Layout from "../../component/Layout"
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import digitalmaps from "/public/features/digital-maps-screenshot.png"
import digitallabs from "/public/features/digital-labs-screenshot.png"
import digitalprojects from "/public/features/digital-projects-screenshot.png"
import digitalprocess from "/public/features/digital-process-screenshot.png"
import digitalmines from "/public/features/digital-mines-screenshot.png"

const Feature_index = ({features_Data}) => {
    return (
        <>
          
        <Layout>
            
            {/* HEader */}
            <section id="features" className="w-full py-32 bg-herogradient" >
            <div className=" flex flex-col items-center px-12 mx-auto lg:flex-row">
                <div className="relative z-20 flex flex-col  w-full h-full ">
                <p className="w-40  inline-block px-2 py-1 mb-5  hyperlink text-gray-900 uppercase bg-gray-200 rounded-full ">
                    All Features
                </p>
                    <h1 className="heading text-white "  >Transform your DX Experience</h1>
                    <p className="subheading text-gray-100 pb-7 pt-2">KTern&apos;s Digital Workplace takes care of your entire DX Transformation from Initial Assessment until your SAP System Goes Live and Beyond Offering Continuous, Constant, Automated Transformation</p>
                    
                    <div className="md:flex md:flex-row">
                    
                    <Link   rel="noopener noreferrer" href="https://app.ktern.com"><a target="_blank" className=" inline-block sm:mb-4  md:mr-4  shadow-md py-3 px-14 hover:text-white   hover:bg-gray-300   text-black   rounded-r-xl bg-white rounded-b-xl transition duration-200 uppercase  button">Free Trial</a></Link>
                    <Link  href="/contact"><a className=" inline-block py-3 px-10 bg-black hover:bg-gray-300 hover:text-black shadow   text-white  rounded-r-xl rounded-b-xl transition duration-200 button">Contact Sales</a></Link>
                    </div>
                </div>
            </div>
            </section>
            {/* Header */}
            {/* sticky nav */}
            <section className="flex sm:space-x-2 md:space-x-10 justify-center items-center  sm:py-5 md:p-5 bg-white shadow-2xl  sticky z-10 md:top-16 sm:top-10 border-2">    
                <Link  href="/product/features#digital-maps"><a className="hyperlink  uppercase hover:text-maps-primary">Digital Maps</a></Link>
                <Link href="/product/features#digital-projects"><a  className="hyperlink  uppercase hover:text-project-primary">Digital Projects</a></Link>
                <Link  href="/product/features#digital-process"><a className="hyperlink  uppercase hover:text-process-primary">Digital Process</a></Link>
                <Link  href="/product/features#digital-labs"><a className="hyperlink  uppercase hover:text-labs-primary">Digital Labs</a></Link>
                <Link  href="/product/features#digital-mines"><a className="hyperlink  uppercase hover:text-mines-primary">Digital Mines</a></Link>
            </section>
            {/* Sticky nav */}
            {/* digital Maps */}
            <section id="digital-maps" className="pt-10 relative w-full py-5 overflow-hidden bg-white md:py-10 xl:pt-36 xl:pb-20">
                <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0">
                    <h2 className="mb-1 section-heading  leading-tight text-gray-900">Digital Maps</h2>
                    <p className="mb-12 section-subheading  text-gray-500">KTern&apos;s Digital Maps connects to an ECC system and assess the entire landscape</p>

                    <div className="flex w-full h-full">
        
                        <div className="grid  md:grid-cols-2 md:gap-4 w-2/3 ">
                            {/* <!-- Feature blocks first column --> */}
                            {features_Data.map(feature=>(
                                <div className="mb-10 "  key="feature">
                                 <Link href="/product/features">
                                     
                                    <a className="relative flex flex-auto  px-2  group overflow-hidden false transition transform hover:-translate-y-1 duration-500 ">
                                       <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-secondary  group-hover:bg-project-secondary "></span>
                                        <div className="relative shadow bg-white flex flex-auto p-5 px-5  group overflow-hidden false border-2 border-black hover:border-project-primary">
                                        <div className="relative bg-white flex flex-col justify-between flex-1 mr-12 text-black">
                                            <div className="flex ">
                                    <div className="relative w-8 h-8">
                                    <Image src="/assets/icons/Maps.png"  layout="fill" alt="Digital Maps Icon"/>
                                    </div>
                                    
                                            </div>
                                            <h3 className="my-2 card-heading  text-gray-800">Business Process Assessment</h3>       
                                             <p className="mb-2 card-subheading text-gray-600">Understand how each process in your current system is getting affected.</p>
                                    <div className="mt-2">
                                        <div className="icon-link transition-opacity duration-200 group-hover:opacity-50 icon-link--black">
                                            <button to="#" className="icon-link__link">
                                                <Link href="#_"  passHref>
                                <a className="inline-flex items-center pb-1  text-black group ">
                                <span className="hyperlink group-hover:text-project-primary">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-project-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>
                                    
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                        </div>
                                        
                                         
                            </a>
                            </Link>
                             </div>
                            ))}
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
            {/* /digital maps */}
            {/* digital Projects */}
            <section id="digital-projects" className="pt-10 relative w-full py-5 overflow-hidden bg-white md:py-10 xl:pt-36 xl:pb-20">
                <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0">
                    <h2 className="mb-1 section-heading  leading-tight text-gray-900">Digital Projects</h2>
                    <p className="mb-12 section-subheading  text-gray-500">KTern&apos;s Digital Projects Provides you with Automated Enterprise Project Execution</p>

                    <div className="flex w-full h-full">

                        <div className="grid md:grid-cols-2 md:gap-4 w-2/3 ">
                            {/* <!-- Feature blocks first column --> */}
                            {features_Data.map(feature=>(
                                <div className="mb-10 "  key="feature">
                                 <Link href="/product/features">
                                     
                                    <a className="relative flex flex-auto  px-2  group overflow-hidden false transition transform hover:-translate-y-1 duration-500 ">
                                       <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-secondary  group-hover:bg-project-secondary "></span>
                                        <div className="relative shadow bg-white flex flex-auto p-5 px-5  group overflow-hidden false border-2 border-black hover:border-project-primary">
                                        <div className="relative bg-white flex flex-col justify-between flex-1 mr-12 text-black">
                                            <div className="flex ">
                                    <div className="relative w-8 h-8">
                                    <Image src="/assets/icons/projects.png"  layout="fill" alt="Digital Projects Icon"/>
                                    </div>
                                    
                                            </div>
                                            <h3 className="my-2 card-heading  text-gray-800">Business Process Assessment</h3>       
                                             <p className="mb-2 card-subheading text-gray-600">Understand how each process in your current system is getting affected.</p>
                                    <div className="mt-2">
                                        <div className="icon-link transition-opacity duration-200 group-hover:opacity-50 icon-link--black">
                                            <button to="#" className="icon-link__link">
                                                <Link href="#_"  passHref>
                                <a className="inline-flex items-center pb-1  text-black group ">
                                <span className="hyperlink group-hover:text-project-primary">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-project-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>
                                    
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                        </div>
                                        
                                         
                            </a>
                            </Link>
                             </div>
                            ))}
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
            {/* /Digital Projects */}
            {/* Digital Process */}
            <section id="digital-process" className="pt-10 relative w-full py-5 overflow-hidden bg-white md:py-10 xl:pt-36 xl:pb-20">
                <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0">
                    <h2 className="mb-1 section-heading  leading-tight text-gray-900">Digital Process</h2>
                    <p className="mb-12 section-subheading  text-gray-500">Using KTern&apos;s Digital Process  Manage all your Business Processes Better.</p>

                    <div className="flex w-full h-full">

                      <div className="grid md:grid-cols-2 md:gap-4w-2/3 ">
                            {/* <!-- Feature blocks first column --> */}
                            {features_Data.map(feature=>(
                                <div className="mb-10 "  key="feature">
                                 <Link href="/product/features">
                                     
                                    <a className="relative flex flex-auto  px-2  group overflow-hidden false transition transform hover:-translate-y-1 duration-500 ">
                                       <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-secondary  group-hover:bg-project-secondary "></span>
                                        <div className="relative shadow bg-white flex flex-auto p-5 px-5  group overflow-hidden false border-2 border-black hover:border-project-primary">
                                        <div className="relative bg-white flex flex-col justify-between flex-1 mr-12 text-black">
                                            <div className="flex ">
                                    <div className="relative w-8 h-8">
                                    <Image src="/assets/icons/Process.svg"  layout="fill" alt="Digital Process Icon"/>
                                    </div>
                                    
                                            </div>
                                            <h3 className="my-2 card-heading  text-gray-800">Business Process Assessment</h3>       
                                             <p className="mb-2 card-subheading text-gray-600">Understand how each process in your current system is getting affected.</p>
                                    <div className="mt-2">
                                        <div className="icon-link transition-opacity duration-200 group-hover:opacity-50 icon-link--black">
                                            <button to="#" className="icon-link__link">
                                                <Link href="#_"  passHref>
                                <a className="inline-flex items-center pb-1  text-black group ">
                                <span className="hyperlink group-hover:text-project-primary">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-project-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>
                                    
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                        </div>
                                        
                                         
                            </a>
                            </Link>
                             </div>
                            ))}
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
            {/* /Digital Process */}
            {/* Digital Labs */}
            <section id="digital-labs" className="pt-10 relative w-full py-5 overflow-hidden bg-white md:py-10 xl:pt-36 xl:pb-20">
                <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0">
                    <h2 className="mb-1 section-heading  leading-tight text-gray-900">Digital Labs</h2>
                    <p className="mb-12 section-subheading  text-gray-500">KTern&apos;s Digital Labs Automates and enables Continous SAP Enterprise Testing. </p>

                    <div className="flex w-full h-full">

                        <div className="grid md:grid-cols-2 md:gap-4 w-2/3 ">
                            {/* <!-- Feature blocks first column --> */}
                            {features_Data.map(feature=>(
                                <div className="mb-10 "  key="feature">
                                 <Link href="/product/features">
                                     
                                    <a className="relative flex flex-auto  px-2  group overflow-hidden false transition transform hover:-translate-y-1 duration-500 ">
                                       <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-secondary  group-hover:bg-project-secondary "></span>
                                        <div className="relative shadow bg-white flex flex-auto p-5 px-5  group overflow-hidden false border-2 border-black hover:border-project-primary">
                                        <div className="relative bg-white flex flex-col justify-between flex-1 mr-12 text-black">
                                            <div className="flex ">
                                    <div className="relative w-8 h-8">
                                    <Image src="/assets/icons/Labs.png"  layout="fill" alt="Digital Maps Icon"/>
                                    </div>
                                    
                                            </div>
                                            <h3 className="my-2 card-heading  text-gray-800">Business Process Assessment</h3>       
                                             <p className="mb-2 card-subheading text-gray-600">Understand how each process in your current system is getting affected.</p>
                                    <div className="mt-2">
                                        <div className="icon-link transition-opacity duration-200 group-hover:opacity-50 icon-link--black">
                                            <button to="#" className="icon-link__link">
                                                <Link href="#_"  passHref>
                                <a className="inline-flex items-center pb-1  text-black group ">
                                <span className="hyperlink group-hover:text-project-primary">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-project-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>
                                    
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                        </div>
                                        
                                         
                            </a>
                            </Link>
                             </div>
                            ))}
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
            {/* /Digital Labs */}
            {/* Digital Mines */}
            <section id="digital-mines" className="pt-10 relative w-full py-5 overflow-hidden bg-white md:py-10 xl:pt-36 xl:pb-20">
                <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0">
                    <h2 className="mb-1 section-heading  leading-tight text-gray-900">Digital Mines</h2>
                    <p className="mb-12 section-subheading  text-gray-500">KTern&apos;s Digital Maps connects to an ECC system and assess the entire landscape</p>

                    <div className="flex w-full h-full">

                       <div className="grid md:grid-cols-2 md:gap-4 w-2/3 ">
                            {/* <!-- Feature blocks first column --> */}
                            {features_Data.map(feature=>(
                                <div className="mb-10 "  key="feature">
                                 <Link href="/product/features">
                                     
                                    <a className="relative flex flex-auto  px-2  group overflow-hidden false transition transform hover:-translate-y-1 duration-500 ">
                                       <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-secondary  group-hover:bg-project-secondary "></span>
                                        <div className="relative shadow bg-white flex flex-auto p-5 px-5  group overflow-hidden false border-2 border-black hover:border-project-primary">
                                        <div className="relative bg-white flex flex-col justify-between flex-1 mr-12 text-black">
                                            <div className="flex ">
                                    <div className="relative w-8 h-8">
                                    <Image src="/assets/icons/Mines.png"  layout="fill" alt="Digital Maps Icon"/>
                                    </div>
                                    
                                            </div>
                                            <h3 className="my-2 card-heading  text-gray-800">Business Process Assessment</h3>       
                                             <p className="mb-2 card-subheading text-gray-600">Understand how each process in your current system is getting affected.</p>
                                    <div className="mt-2">
                                        <div className="icon-link transition-opacity duration-200 group-hover:opacity-50 icon-link--black">
                                            <button to="#" className="icon-link__link">
                                                <Link href="#_"  passHref>
                                <a className="inline-flex items-center pb-1  text-black group ">
                                <span className="hyperlink group-hover:text-project-primary">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-project-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>
                                    
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                        </div>
                                        
                                         
                            </a>
                            </Link>
                             </div>
                            ))}
                        </div>
                        


                        <div className="hidden w-1/3  lg:block">
                <div className="absolute w-full max-w-4xl pl-12  -mt-25 ">
                    <div className="absolute top-0 left-0 w-full h-full mt-2 ml-10 bg-gray-900 rounded-2xl"></div>
                    <div className="relative overflow-hidden border-2 border-black rounded-2xl">
                  
  <Image
    src={digitalmines}
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
            {/* /Digital Mines */}
            </Layout>
            </>
    )
}
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
        props:{features_Data:data}
    }
}

 export default Feature_index;