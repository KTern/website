import Layout from "../../component/Layout"
import Head from "next/head"
import Image from "next/image";
import Link from "next/link";
{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/alpinejs/2.8.0/alpine.js"></script> */}
export default function Digital_Projects () {
    return (
        <>
        <Head>
        <script async src="https://cdnjs.cloudflare.com/ajax/libs/alpinejs/2.8.0/alpine.js"></script>
        </Head>
        <Layout>
            <section className="w-full py-20 bg-project-secondary" >
            <div className="flex flex-col items-center px-12 mx-auto lg:flex-row">
                <div className="relative z-20 flex flex-col items-start justify-center w-full h-full lg:w-1/2">
                <p className="inline-block px-2 py-1 mb-5 font-medium tiny-heading tracking-wider text-gray-900 uppercase bg-gray-200 rounded-full ">
                    Custom Code Remediation
                </p>
                    <h1 className="heading">Analyse and Remediate your Custom Code Smoothly</h1>
                    <p className="text-lg text-gray-500 pb-7">KTern Digital Workplace enables you to analyse the syntatical change impact of all custom Z tables, Z programs and Z objects passing it to AI-Powered Remediation Engine which comes up with the remediation recommendations.   </p>
                    <div className="flex flex items-center  w-full sm:w-auto sm:flex-row space-x-10">
                       <Link  href="#" passHref><a className="button inline-block py-3 px-10 bg-black hover:bg-gray-300 hover:text-black shadow text-white  rounded-l-xl rounded-t-xl transition duration-200">Get Started</a></Link>
                        <Link href="" passHref>
                        <a  className="flex py-3 px-8 bg-white hover:bg-gray-300 hover:text-black shadow  rounded-l-xl rounded-t-xl transition duration-200 button inline-block">        
                                        <Image className=" w-6 h-6" src="/save-file.svg" alt="save file" width={15 } height={20 }/>
                                <span className="button">&nbsp;&nbsp;Download Datasheet</span>
                        </a>
                        </Link>
                    </div>
                </div>

                <div className="hidden lg:block relative z-10 w-full h-full my-16 lg:my-0 lg:w-1/2">
                    <Image className="relative z-40 w-full h-full" src="/features/custom-code-hero.svg" alt="hero image" width={600 } height={420 }/>
                    </div>
            </div>
            </section>
            {/* <!-- Criss Cross Features--> */}
            <section className="py-10 bg-white">
            <div className="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
                <div className="relative">
                    <h2 className="w-full card-heading  text-center"> Custom Code Information Wizard</h2>
                    <p className="w-full py-8 mx-auto -mt-2 card-subheading text-center text-gray-700  sm:max-w-3xl">Each custom object object and program has its own Custom Code information wizard. The Information Wizard Allows you to leverage the Custom Code Center, Custom Code Lab, AI-Powered Remediation Engine</p>
                </div>
                <div className="flex mb-8 animated fadeIn space-x-20">
                    <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 w-1/2 sm:pr-16">
                        <p className=" tiny-subheading font-semibold  text-left text-project-primary uppercase">Custom Code Remediation</p>
                        <h3 className=" card-heading sm:text-left">Custom Code Center</h3>
                        <p className="mt-2 card-subheading text-gray-700  md:text-left">Gain Information on each custom program in the Custom code center. KTern assigns a Impact, Optimization and a Security Score based on the Custom program. </p>
                    </div>
                     <div className="flex items-center mb-8 w-1/2 sm:order-last">
                        <div className="relative" style={{zIndex: 0}}>
                            <div className="rounded-lg "><Image  src="/features/custom-code-center.png" alt="" width={500} height={400}  /></div>
                            <div  className="animate-pulse hidden md:block absolute w-60 h-40" style={{top:'-2rem', right: '3rem', zIndex: -1}}><Image layout="fill" src="/atis-assets/elements/purple-up.svg" alt=""/></div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{bottom:'-2rem',right: '-2rem', zIndex: -1}}><Image layout="fill" src="/atis-assets/elements/wing-yellow-down.svg" alt=""/></div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{bottom:'2.5rem', right: '-4.5rem', zIndex: -1}}><Image layout="fill" src="/atis-assets/elements/bullets-gray-left.svg" alt=""/></div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{ top: '3rem', left: '-8rem', zIndex: -1 }} ><Image layout="fill" src="/atis-assets/elements/bullets-gray-right.svg" alt="" /></div>                                   

                        </div>
                    </div>    
                </div>
                <div className="flex space-x-20 mb-8 animated fadeIn sm:flex-row">
                            <div className="relative flex items-center mb-8 w-1/2" >
                    <div className="relative" style={{zIndex: 0}}>            
                                    <div className=" relative rounded-lg"><Image src="/features/custom-code-lab.png" alt="" width={500} height={400} /></div>
                                     <div  className="animate-pulse hidden md:block absolute w-60 h-40" style={{top:'-2rem', right: '3rem', zIndex: -1}}><Image layout="fill" src="/atis-assets/elements/purple-up.svg" alt=""/></div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{bottom:'-2rem',right: '-2rem', zIndex: -1}}><Image layout="fill" src="/atis-assets/elements/wing-yellow-down.svg" alt=""/></div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{bottom:'2.5rem', right: '-4.5rem', zIndex: -1}}><Image layout="fill" src="/atis-assets/elements/bullets-gray-left.svg" alt=""/></div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{ top: '3rem', left: '-8rem', zIndex: -1 }} ><Image layout="fill" src="/atis-assets/elements/bullets-gray-right.svg" alt="" /></div>                                   

                    </div>
                    </div>
                    <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 w-1/2 sm:pl-16">
                        <p className=" tiny-subheading font-semibold text-left text-project-primary uppercase">Custom Code Remediation</p>
                        <h3 className=" card-heading sm:text-left">Custom Code Lab</h3>
                        <p className="mt-2 card-subheading text-gray-700">Gain AI-based custom code insights from Custom Code Lab, with access to a development environment to edit the code manually.</p>
                    </div>
                </div>
                 <div className="flex mb-8 animated fadeIn space-x-20">
                    <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 w-1/2 sm:pr-16">
                        <p className=" tiny-subheading font-semibold  text-left text-project-primary uppercase">Custom Code Remediation</p>
                        <h3 className=" card-heading sm:text-left">AI Powered Remediation Engine</h3>
                        <p className="mt-2 card-subheading text-gray-700 md:text-left">Auto Recommended Remediation Suggestions that can be applied at the click of a button recording as an transport request in your SAP System.</p>
                    </div>
                     <div className="flex items-center mb-8 w-1/2 sm:order-last">
                        <div className="relative" style={{zIndex: 0}}>
                            <div className="rounded-lg "><Image className="rounded-lg shadow-xl" src="/features/ai-powered-remediation.png" alt="" width={500} height={400} /></div>
                            <div  className="animate-pulse hidden md:block absolute w-60 h-40" style={{top:'-2rem', right: '3rem', zIndex: -1}}><Image layout="fill" src="/atis-assets/elements/purple-up.svg" alt=""/></div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{bottom:'-2rem',right: '-2rem', zIndex: -1}}><Image layout="fill" src="/atis-assets/elements/wing-yellow-down.svg" alt=""/></div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{bottom:'2.5rem', right: '-4.5rem', zIndex: -1}}><Image layout="fill" src="/atis-assets/elements/bullets-gray-left.svg" alt=""/></div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{ top: '3rem', left: '-8rem', zIndex: -1 }} ><Image layout="fill" src="/atis-assets/elements/bullets-gray-right.svg" alt="" /></div>                                   

                        </div>
                    </div>    
                </div>
                </div>
            </section>
           {/* <!-- Criss Cross Features End --> */}
            
           <section className="box-border relative w-full font-sans leading-6 text-gray-700 bg-white border-0 border-gray-200 border-solid bg-blue-50">
    <div className="box-border flex flex-col items-center px-8 py-20 mx-auto leading-6 border-solid max-w-7xl xl:px-16 md:items-stretch md:justify-center md:py-24">
        <div className="relative pb-10">
            <h2 className="w-full m-0 font-sans text-4xl font-black leading-loose tracking-wide text-center text-gray-700 border-0 border-gray-200 sm:text-5xl">
                Smoother Remediation
            </h2>
            <p className="w-full max-w-xl mx-0 mx-auto mt-4 mb-0 font-sans text-sm font-medium leading-relaxed text-center text-gray-400 border-0 border-gray-200 lg:text-lg md:text-base">
               Automate your Custom Code Discovery, Management, Remediation and Transport Request Generation .
            </p>
        </div>

        <div className="z-10 grid gap-5 md:grid-cols-6 lg:grid-cols-9">
            
            <div className="col-span-3 font-sans text-gray-700 bg-white rounded-3xl">
                <div className="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
                    <div className="flex-shrink-0 p-3 font-sans text-gray-700 border border-gray-200 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="leading-6 text-center text-gray-700 align-middle stroke-current w-7 h-7" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M0 0h24v24H0z" stroke="none"></path>
                            <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3M12 12l8-4.5M12 12v9M12 12L4 7.5M16 5.25l-8 4.5"></path></svg>
                    </div>
                    <div className="mt-4 font-sans text-left text-gray-700 border-0 border-gray-200 sm:mt-2 sm:ml-4">
                        <h6 className="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid">Bulk Remediate</h6>
                        <p className="box-border mx-0 mt-1 mb-0 font-medium leading-loose text-gray-400 border-solid sm:mt-4">
                            Choose and Remediate Multiple Custom programs in-one-go. 
                        </p>
                    </div>
                </div>
            </div>
           
            <div className="col-span-3 font-sans text-gray-700 bg-white rounded-3xl">
                <div className="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
                    <div className="flex-shrink-0 p-3 font-sans text-gray-700 border border-gray-200 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="leading-6 text-center text-gray-700 align-middle stroke-current w-7 h-7" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M0 0h24v24H0z" stroke="none"></path>
                            <path d="M7 12l5 5L22 7M2 12l5 5m5-5l5-5"></path></svg>

                    </div>
                    <div className="mt-4 font-sans text-left text-gray-700 border-0 border-gray-200 sm:mt-2 sm:ml-4">
                        <h6 className="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid">Assign Stakeholders</h6>
                        <p className="box-border mx-0 mt-1 mb-0 font-medium leading-loose text-gray-400 border-solid sm:mt-4">
                        Stakeholders can be assigned to perform the remediation from the Custom Code Center.
                        </p>
                    </div>
                </div>
            </div>
           
            <div className="col-span-3 font-sans text-gray-700 bg-white rounded-3xl">
                <div className="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
                    <div className="flex-shrink-0 p-3 font-sans text-gray-700 border border-gray-200 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="leading-6 text-center text-gray-700 align-middle stroke-current w-7 h-7" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M0 0h24v24H0z" stroke="none"></path>
                            <path d="M9 4.55a8 8 0 016 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"></path></svg>
                    </div>
                    <div className="mt-4 font-sans text-left text-gray-700 border-0 border-gray-200 sm:mt-2 sm:ml-4">
                        <h6 className="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid">Code Diagnostic Checks</h6>
                        <p className="box-border mx-0 mt-1 mb-0 font-medium leading-loose text-gray-400 border-solid sm:mt-4">
                            Gain custom code optimization Recommendations in Adaptation, Performance, SAP HANA Optimization, Security Audit.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="col-span-3 font-sans text-gray-700 bg-white rounded-3xl">
                <div className="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
                    <div className="flex-shrink-0 p-3 font-sans text-gray-700 border border-gray-200 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="leading-6 text-center text-gray-700 align-middle stroke-current w-7 h-7" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M0 0h24v24H0z" stroke="none"></path>
                            <path d="M3 12h3M12 3v3M7.8 7.8L5.6 5.6M16.2 7.8l2.2-2.2M7.8 16.2l-2.2 2.2M12 12l9 3-4 2-2 4-3-9"></path></svg>
                    </div>
                    <div className="mt-4 font-sans text-left text-gray-700 border-0 border-gray-200 sm:mt-2 sm:ml-4">
                        <h6 className="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid">Custom Code Dashboard</h6>
                        <p className="box-border mx-0 mt-1 mb-0 font-medium leading-loose text-gray-400 border-solid sm:mt-4">
                            Gain an Analytical Edge with an Overview of the different custom objects present in your SAP System.
                        </p>
                    </div>
                </div>
            </div>
           
            <div className="col-span-3 font-sans text-gray-700 bg-white rounded-3xl">
                <div className="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
                    <div className="flex-shrink-0 p-3 font-sans text-gray-700 border border-gray-200 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="leading-6 text-center text-gray-700 align-middle stroke-current w-7 h-7" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M0 0h24v24H0z" stroke="none"></path>
                            <path d="M13 3v7h6l-8 11v-7H5l8-11"></path></svg>
                    </div>
                    <div className="mt-4 font-sans text-left text-gray-700 border-0 border-gray-200 sm:mt-2 sm:ml-4">
                        <h6 className="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid">Custom Code Sign-Off Wizard</h6>
                        <p className="box-border mx-0 mt-1 mb-0 font-medium leading-loose text-gray-400 border-solid sm:mt-4">
                         Find out whether the stream of custom object operations (in modules, business processes) are completed or not.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="col-span-3 font-sans text-gray-700 border-0 bg-white rounded-3xl">
                <div className="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
                    <div className="flex-shrink-0 p-3 font-sans text-gray-700 border border-gray-200 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="leading-6 text-center text-gray-700 align-middle stroke-current w-7 h-7" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M0 0h24v24H0z" stroke="none"></path>
                            <rect x="3" y="4" width="18" height="8" rx="3"></rect>
                            <rect x="3" y="12" width="18" height="8" rx="3"></rect>
                            <path d="M7 8v.01M7 16v.01"></path></svg>

                    </div>
                    <div className="mt-4 font-sans text-left text-gray-700 border-0 border-gray-200 sm:mt-2 sm:ml-4">
                        <h6 className="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid">Project Management</h6>
                        <p className="box-border mx-0 mt-1 mb-0 font-medium leading-loose text-gray-400 border-solid sm:mt-4">
                           The Resource Utilization Table allows to track the resource utilization and progress of the custom code remediation
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
    <div className="absolute top-0 left-0 -ml-56 opacity-25 w-96 h-96">
        <svg className="text-blue-500 opacity-50 fill-current w-88 h-88" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.5,-24.7C35.8,-15.2,48.9,-7.6,50.6,1.7C52.3,11,42.6,22,32.3,31.2C22,40.4,11,47.8,-1.9,49.8C-14.9,51.7,-29.7,48.1,-41.1,38.9C-52.5,29.7,-60.5,14.9,-60.3,0.3C-60,-14.3,-51.5,-28.6,-40,-38.1C-28.6,-47.6,-14.3,-52.3,-3.4,-48.9C7.6,-45.5,15.2,-34.2,25.5,-24.7Z" transform="translate(100 100)"></path>
        </svg>
    </div>
    
    <div className="absolute top-0 right-0 -mb-56 opacity-25 w-96 h-96 -mr-72">
        <svg className="w-full h-full text-blue-800 opacity-50 fill-current" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M44.3,-48.3C55.3,-33.4,60.4,-16.7,62.2,1.8C64,20.3,62.5,40.6,51.6,55.3C40.6,70,20.3,79,2.3,76.7C-15.7,74.4,-31.4,60.7,-46.7,46C-62,31.4,-76.9,15.7,-78.5,-1.6C-80,-18.8,-68.2,-37.6,-52.9,-52.5C-37.6,-67.5,-18.8,-78.5,-1.1,-77.5C16.7,-76.4,33.4,-63.3,44.3,-48.3Z" transform="translate(100 100)"></path>
        </svg>
    </div>

</section>
             {/* <!-- Customer Stats--> */}
             <section className="pb-20 pt-10 bg-blue-50">
  <div className="container px-4 mx-auto">
    <div className="p-16 bg-white">
      <div className="flex flex-wrap items-center -mx-10 -mb-10">
        <div className="w-full md:w-1/2 lg:w-1/4 px-10 mb-10 text-center">
          <span>
            <svg className="mx-auto mb-6 text-blue-800 h-8 w-8" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 -0.0533447L0 15.7333L16 31.52L32 15.7333L16 -0.0533447ZM3.7708 15.7333L16 3.66718L21.172 8.77022L19.2864 10.6307L16 7.38888L7.5428 15.7333L10.828 18.9759L8.9424 20.8364L3.7708 15.7333ZM20.6876 15.7333L16 20.3596L11.3136 15.7333L16 11.1094L20.6876 15.7333ZM10.828 22.6968L12.7136 20.8364L16 24.0778L24.4584 15.7333L21.172 12.4907L23.0576 10.6303L28.2292 15.7333L16 27.7995L10.828 22.6968Z"></path>
            </svg>
          </span>
          <h3 className="mb-3 text-3xl font-bold font-heading text-blue-800">2 Million</h3>
          <p className="text-sm uppercase text-gray-500">Lines of Custom code Analyzed</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-10 mb-10 text-center">
          <span>
            <svg className="mx-auto mb-6 text-blue-800 h-8 w-8" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.3332 0V2.64111C24.0732 3.30415 29.3332 8.93644 29.3332 15.7867C29.3332 22.6357 24.0732 28.2676 17.3332 28.9306V31.5733C25.5456 30.9016 32 24.0952 32 15.7867C32 7.47696 25.5456 0.673301 17.3332 0Z"></path>
              <path d="M14.6668 28.9306C7.9296 28.2676 2.6668 22.6357 2.6668 15.7867C2.6668 8.93683 7.9296 3.30415 14.6668 2.64111V0C6.456 0.673301 0 7.47696 0 15.7867C0 24.0952 6.456 30.9016 14.6668 31.5733V28.9306Z"></path>
              <path d="M8.12 14.4712C8.7552 10.7389 12.0364 7.89333 16 7.89333C19.9636 7.89333 23.2448 10.7389 23.88 14.4712H26.574C25.918 9.28098 21.4404 5.26208 16 5.26208C10.5624 5.26208 6.0832 9.28098 5.4256 14.4712H8.12Z"></path>
              <path d="M23.88 17.1021C23.2448 20.8329 19.9636 23.68 16 23.68C12.0364 23.68 8.75519 20.8329 8.11999 17.1021H5.42599C6.08319 22.2923 10.5624 26.3112 16 26.3112C21.4404 26.3112 25.918 22.2923 26.5744 17.1021H23.88Z"></path>
              <path d="M16 10.5246C13.0548 10.5246 10.6668 12.8807 10.6668 15.7867C10.6668 18.6926 13.0548 21.0488 16 21.0488C18.9464 21.0488 21.3332 18.6926 21.3332 15.7867C21.3332 12.8807 18.9464 10.5246 16 10.5246ZM16 18.4179C14.5272 18.4179 13.3332 17.2398 13.3332 15.7867C13.3332 14.3335 14.5272 13.1554 16 13.1554C17.474 13.1554 18.6668 14.3335 18.6668 15.7867C18.6668 17.2398 17.474 18.4179 16 18.4179Z"></path>
            </svg>
          </span>
          <h3 className="mb-4 text-3xl font-bold font-heading text-blue-800">500,000</h3>
          <p className="text-sm uppercase text-gray-500">Custom Code recommendations</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-10 mb-10 text-center">
          <span>
            <svg className="mx-auto mb-6 text-blue-800 h-8 w-8" viewBox="0 0 30 31" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 0.404449H0.333336V15.2667C0.333336 23.4743 6.90034 30.1289 15 30.1289H29.6667V15.2667C29.6667 7.05901 23.0997 0.404449 15 0.404449ZM27.2221 27.6517H15C8.26104 27.6517 2.7779 22.0955 2.7779 15.2667V2.88161H15C21.739 2.88161 27.2221 8.43822 27.2221 15.2667V27.6517Z"></path>
              <path d="M15 5.3584C9.60011 5.3584 5.22211 9.79477 5.22211 15.2667C5.22211 20.7386 9.60011 25.1749 15 25.1749C20.3999 25.1749 24.7779 20.7386 24.7779 15.2667C24.7779 9.79477 20.3999 5.3584 15 5.3584ZM15 22.6978C10.9491 22.6978 7.66668 19.3705 7.66668 15.2667C7.66668 11.1628 10.9491 7.83556 15 7.83556C19.0498 7.83556 22.3333 11.1628 22.3333 15.2667C22.3333 19.3705 19.0498 22.6978 15 22.6978Z"></path>
              <path d="M15 10.3127C12.3002 10.3127 10.1112 12.5309 10.1112 15.2667C10.1112 18.0024 12.3002 20.2206 15 20.2206C17.6998 20.2206 19.8888 18.0024 19.8888 15.2667C19.8888 12.5309 17.6998 10.3127 15 10.3127ZM15 17.7438C13.6499 17.7438 12.5554 16.6347 12.5554 15.2667C12.5554 13.8986 13.6499 12.7895 15 12.7895C16.3501 12.7895 17.4446 13.8986 17.4446 15.2667C17.4446 16.6347 16.3501 17.7438 15 17.7438Z"></path>
            </svg>
          </span>
          <h3 className="mb-4 text-3xl font-bold font-heading text-blue-800">200,000</h3>
          <p className="text-sm uppercase text-gray-500">Transport Requests</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-10 mb-10 text-center">
          <span>
            <svg className="mx-auto mb-6 text-blue-800 h-8 w-8" viewBox="0 0 29 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.5394 1.16466C25.5171 -0.955363 20.1089 1.11443 14.3336 5.83846C8.55651 1.11443 3.14832 -0.954263 1.12707 1.16466C-0.896976 3.28468 1.07912 8.9492 5.58677 15.0002C1.08017 21.0515 -0.896976 26.7171 1.12707 28.8357C3.14937 30.9553 8.55896 28.8848 14.334 24.1619C20.1089 28.8848 25.5175 30.9553 27.5398 28.8357C29.5638 26.7157 27.5867 21.0501 23.0783 15.0002C27.5877 8.9492 29.5638 3.28358 27.5394 1.16466ZM25.2585 2.77649C25.6862 2.77649 25.8671 2.86962 25.8899 2.89346C26.0075 3.01629 26.3116 4.40336 24.8493 7.59439C24.0562 9.32539 22.9338 11.1818 21.5667 13.062C20.7606 12.0852 19.8951 11.1088 18.9718 10.1419C18.0499 9.17763 17.1175 8.27051 16.1869 7.42646C20.0302 4.36413 23.4077 2.77649 25.2585 2.77649ZM20.0746 14.9994C19.2199 16.0507 18.3036 17.1015 17.3205 18.1314C16.3178 19.1834 15.3171 20.1404 14.3347 21.0145C13.3309 20.1206 12.3281 19.1607 11.3457 18.1314C10.3415 17.0802 9.42696 16.0316 8.59256 15.0031C9.44586 13.9501 10.3611 12.9011 11.3432 11.8715C12.3484 10.8199 13.3487 9.86035 14.3312 8.98623C15.3364 9.88161 16.3395 10.8415 17.3212 11.8704C18.3257 12.9223 19.2406 13.9691 20.0746 14.9994ZM2.66532 3.55454C2.66532 3.10832 2.75422 2.91729 2.77662 2.89346C2.89282 2.77173 4.21722 2.45163 7.26396 3.98463C8.91631 4.81548 10.687 5.99136 12.4832 7.42243C11.5508 8.26758 10.6166 9.17469 9.69366 10.1416C8.77281 11.1074 7.90691 12.0841 7.10261 13.0594C4.18082 9.03133 2.66532 5.49307 2.66532 3.55454ZM3.40802 27.2242C2.98067 27.2242 2.79867 27.13 2.77662 27.1076C2.65937 26.9844 2.35487 25.5974 3.81822 22.4063C4.61132 20.6757 5.73272 18.8193 7.09981 16.9391C7.90656 17.9155 8.77246 18.8934 9.69541 19.8602C10.6163 20.8264 11.5483 21.732 12.4807 22.5761C8.63596 25.6366 5.25847 27.2242 3.40802 27.2242ZM26.0015 26.4458C26.0015 26.8928 25.9116 27.0834 25.8899 27.1062C25.7726 27.2294 24.4486 27.5491 21.4025 26.0161C19.7516 25.1852 17.9796 24.0094 16.1848 22.5772C17.1158 21.7328 18.0492 20.826 18.9707 19.8599C19.893 18.8941 20.7585 17.9177 21.5646 16.9413C24.486 20.969 26.0015 24.5058 26.0015 26.4458Z"></path>
            </svg>
          </span>
          <h3 className="mb-4 text-3xl font-bold font-heading text-blue-800">200000</h3>
          <p className="text-sm uppercase text-gray-500">Man Hours Saved</p>
        </div>
      </div>
    </div>
  </div>
</section>



 {/* <!--Faq Section--> */}
 <section className="py-10 bg-project-white">
                    <div className="container mx-auto w-1/2 flex-col space-y-4">
                        <h2 className="mb-2 card-heading  text-center md:text-3xl mb-10">Frequently Asked Questions</h2>
                    <details className="relative overflow-hidden border-2 border-gray-200 rounded-lg select-none hover:bg-white">
                        <summary  className=" flex items-center justify-between text-lg font-medium text-gray-700 cursor-pointer sm:text-xl px-6 py-6 hover:text-gray-800" style={{ listStyle: 'none' }}>
                            <span className="card-subheading">How does KTern Connect to my SAP System?</span>
                            <svg className=" w-6 h-6 transition-all duration-200 ease-out transform rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                                </summary>
                                <hr/>
                        <div className="p-4 tiny-subheading">
                                CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem
                                de marcação como HTML. O CSS separa o conteúdo da representação visual do site. É ele que é responsável pela
                                aparência do seu site. USando o CSS é possível alterar a cor do texto, fonte, imagem entre outros.
                                Também pode criar tabelas, usar variações de layouts, ajustar imagens para suas respectivas telas e assim por
                                diante.
                        </div>
                </details>
                    <details className="relative overflow-hidden border-2 border-gray-200 rounded-lg select-none hover:bg-white">
                        <summary  className=" flex items-center justify-between text-lg font-medium text-gray-700 cursor-pointer sm:text-xl px-6 py-6 hover:text-gray-800" style={{ listStyle: 'none' }}>
                            <span className="card-subheading">Which SAP System&apos;s are supported by KTern?</span>
                            <svg className=" w-6 h-6 transition-all duration-200 ease-out transform rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                                </summary>
                                <hr/>
                        <div className="p-4 tiny-subheading">
                                CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem
                                de marcação como HTML. O CSS separa o conteúdo da representação visual do site. É ele que é responsável pela
                                aparência do seu site. USando o CSS é possível alterar a cor do texto, fonte, imagem entre outros.
                                Também pode criar tabelas, usar variações de layouts, ajustar imagens para suas respectivas telas e assim por
                                diante.
                        </div>
                </details>
                    <details className="relative overflow-hidden border-2 border-gray-200 rounded-lg select-none hover:bg-white">
                        <summary  className=" flex items-center justify-between text-lg font-medium text-gray-700 cursor-pointer sm:text-xl px-6 py-6 hover:text-gray-800" style={{ listStyle: 'none' }}>
                            <span className="card-subheading">Does KTern Offer Enablement Session for System Integrators? </span>
                            <svg className=" w-6 h-6 transition-all duration-200 ease-out transform rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                                </summary>
                                <hr/>
                        <div className="p-4 tiny-subheading">
                                CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem
                                de marcação como HTML. O CSS separa o conteúdo da representação visual do site. É ele que é responsável pela
                                aparência do seu site. USando o CSS é possível alterar a cor do texto, fonte, imagem entre outros.
                                Também pode criar tabelas, usar variações de layouts, ajustar imagens para suas respectivas telas e assim por
                                diante.
                        </div>
                </details>

                
                </div>
            </section>
   

            {/* <!-- What do you Get from KTern.AI Section --> */}
            <section className="py-10 bg-white">
                <div className="container items-center max-w-6xl px-4 px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
                <div className="flex flex-wrap items-center -mx-3">
                    <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
                    <div className="w-full lg:max-w-md">
                        <h2 className="mb-2 card-heading ">Manage your Custom Code Better</h2>
                        <p className="mb-4 card-subheading text-gray-400 xl:mb-6"> KTern can be used in the entire lifecycle of custom code remediation. the key benefits of using KTern for custom code remediation include:</p>
                        <ul>
                        <li className="flex items-center py-2 space-x-4 xl:py-3">
                            <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                            <span className="tiny-heading text-gray-500">Reduction in Development effort and Project Cost.</span>
                        </li>
                        <li className="flex items-center py-2 space-x-4 xl:py-3">
                            <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                            <span className="tiny-heading text-gray-500">Improved application performance by remediating SQL statements ​</span>
                        </li>
                        <li className="flex items-center py-2 space-x-4 xl:py-3">
                            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                            <span className="tiny-heading text-gray-500">Automated code fixes eliminating the risks of new errors being introduced by manual modifications</span>
                        </li>
                        </ul>
                    </div>
                    </div>
                            <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
                                <Image className="mx-auto sm:max-w-sm lg:max-w-full" src="/features/ktern-footer-cta.png" alt="feature image" width={415 } height={320 } layout="responsive"/></div>
                </div>
                </div>
            </section> 

            {/* <!--Resources Section--> */}
            <section className="w-full pt-8 bg-project-secondary sm:pt-12 md:pt-16">
            <div className="px-10 mx-auto max-w-7xl">
                <div className="flex justify-center w-full pb-5 mb-8  border-gray-200">
                    <h2 className="card-heading font-bold text-gray-800 ">Related Resources</h2>
                            
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
                  <div className="text-center"><Link  href="#" passHref><a className="inline-block py-4 px-12 border border-gray-200 hover:border-gray-50 hover:bg-gray-100 rounded-full font-bold text-black"> View All</a></Link></div>
                </div>
                </section>
         


          {/* <!-- Footer CTA Features Page --> */}
             <section className="bg-project-secondary">
                <div className="px-8 py-8 mx-auto sm:py-10 lg:py-20 max-w-7xl">
                <div className="relative py-6 overflow-hidden rounded-lg bg-gradient-to-r from-black to-project-400 lg:py-12 md:px-6 lg:p-16 lg:flex lg:items-center lg:justify-between md:shadow-xl md:bg-purple-1000">
                <div className="absolute top-0 right-0 hidden w-full -mt-20 transform rotate-45 translate-x-1/2 bg-white sm:block h-96 opacity-5"></div>
                <div className="absolute top-0 left-0 hidden w-full -mt-20 transform rotate-45 -translate-x-1/2 bg-white sm:block h-96 opacity-5"></div>
                <div className="relative p-6 rounded-lg md:p-0 md:pb-4">
                <h2 className="card-heading   leading-9 text-white ">Get started with your DXaaS Journey</h2>
                <p className="w-full mt-5 card-subheading text-white ">Start your 15-day free trial. No credit card required. No strings attached.</p>
                </div>
                <div className="relative flex flex-col items-center w-full px-6 space-y-5 md:space-x-5 md:space-y-0 md:flex-row md:w-auto lg:flex-shrink-0 md:px-0">
                <Link  href="/pricing" passHref><a className=" button inline-block py-3 px-10 bg-black hover:bg-gray-100 hover:text-black shadow  text-white  rounded-l-xl rounded-t-xl transition duration-200 ">See Pricing</a></Link>
                <Link  href="#" passHref><a className="button  inline-block py-3 px-10 bg-white hover:bg-gray-50 hover:text-black shadow text-black  rounded-l-xl rounded-t-xl transition duration-200 ">Try it free</a></Link>
                </div>
                </div>
                </div>
            </section> 
            </Layout>
            </>
    )
}