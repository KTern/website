import Layout from "../../component/Layout";
import Image from "next/image";
import Link from "next/link";
export default function TrustCenter () {
    return (
        <Layout>
            {/* Header Section */}
            {/* KTern Trust Center */}
            <section className="p-20  bg-secondary">
        <div className="max-w-screen pl-20  mx-auto">
        <div className="mb-6 flex flex-row">
             <input className="block w-full bg-white px-6 py-2 font-bold placeholder-gray-900 border border-gray-50 rounded-full focus:outline-none mr-2" type="text" name="field-name" placeholder="Search in Trust Center" />
             <Link href="#" passHref><a className="lg:inline-block py-2 uppercase items-center px-5 bg-black hover:bg-gray-300 hover:text-black shadow text-base text-white font-bold rounded-l-xl rounded-t-xl transition duration-200 text-center" >Search</a></Link>


        </div>
          <hr className="bg-black h-1"/>
            <div className="grid grid-cols-1 mt-16 sm:grid-cols-2 md:grid-cols-3 gap-x-20 lg:gap-x-20 gap-y-20">
                <div>
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
                    <h3 className="mt-4 mb-2 text-base font-semibold leading-tight text-gray-900 lg:text-lg">Cloud services</h3>
                    
                        <ul className="list-disc text-sm text-gray-500 lg:text-lg">
                            <li className="pb-2" >Gain Insights on service availability worldwide</li>
                           <li className="pb-2">Access Cloud service Performance history</li>
                           <li className="pb-4">View Personalized Dashboard</li>
                           <Link href="/trust-center/landing"  passHref>
                                <a className="inline-flex items-center pt-5 font-medium text-black hover:border-blue-500 group ">
                                <span className="tiny-heading group-hover:text-gray-400">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>                         
                             </ul>
                          
                   
                </div>
    
                <div>
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    <h3 className="mt-4 mb-2 text-base font-semibold leading-tight text-gray-900 lg:text-lg">SAP Security</h3>
                    <ul className="list-disc text-sm text-gray-500 lg:text-lg">
                        <li className="pb-2" >Gain Insights on service availability worldwide</li>
                       <li className="pb-2">Access Cloud service Performance history</li>
                       <li className="pb-4">View Personalized Dashboard</li>
                       <Link href="/trust-center/landing"  passHref>
                                <a className="inline-flex items-center pt-5 font-medium text-black hover:border-blue-500 group ">
                                <span className="tiny-heading group-hover:text-gray-400">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>                     
                             </ul>
                </div>
    
                <div>
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    <h3 className="mt-4 mb-2 text-base font-semibold leading-tight text-gray-900 lg:text-lg">Privacy</h3>
                    <ul className="list-disc text-sm text-gray-500 lg:text-lg">
                        <li className="pb-2" >Gain Insights on service availability worldwide</li>
                       <li className="pb-2">Access Cloud service Performance history</li>
                       <li className="pb-4">View Personalized Dashboard</li>
                       <Link href="/trust-center/landing"  passHref>
                                <a className="inline-flex items-center pt-5 font-medium text-black hover:border-blue-500 group ">
                                <span className="tiny-heading group-hover:text-gray-400">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>                    
                              </ul>
                </div>
                
                <div>
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    <h3 className="mt-4 mb-2 text-base font-semibold leading-tight text-gray-900 lg:text-lg">Privacy</h3>
                    <ul className="list-disc text-sm text-gray-500 lg:text-lg">
                        <li className="pb-2" >Gain Insights on service availability worldwide</li>
                       <li className="pb-2">Access Cloud service Performance history</li>
                       <li className="pb-4">View Personalized Dashboard</li>
                       <Link href="/trust-center/landing"  passHref>
                                <a className="inline-flex items-center pt-5 font-medium text-black hover:border-blue-500 group ">
                                <span className="tiny-heading group-hover:text-gray-400">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>                    
                              </ul>
                </div>
                <div>
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    <h3 className="mt-4 mb-2 text-base font-semibold leading-tight text-gray-900 lg:text-lg">Privacy</h3>
                    <ul className="list-disc text-sm text-gray-500 lg:text-lg">
                        <li className="pb-2" >Gain Insights on service availability worldwide</li>
                       <li className="pb-2">Access Cloud service Performance history</li>
                       <li className="pb-4">View Personalized Dashboard</li>
                       <Link href="/trust-center/landing"  passHref>
                                <a className="inline-flex items-center pt-5 font-medium text-black hover:border-blue-500 group ">
                                <span className="tiny-heading group-hover:text-gray-400">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>                   
                               </ul>
                </div>
                <div>
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    <h3 className="mt-4 mb-2 text-base font-semibold leading-tight text-gray-900 lg:text-lg">Privacy</h3>
                    <ul className="list-disc text-sm text-gray-500 lg:text-lg">
                        <li className="pb-2" >Gain Insights on service availability worldwide</li>
                       <li className="pb-2">Access Cloud service Performance history</li>
                       <li className="pb-4">View Personalized Dashboard</li>
                       <Link href="/trust-center/landing"  passHref>
                                <a className="inline-flex items-center pt-5 font-medium text-black hover:border-blue-500 group ">
                                <span className="tiny-heading group-hover:text-gray-400">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>                   
                               </ul>
                </div>
            </div>
        </div>
    </section>
    {/*

 {/* <!--Different Roles--> */}
         <section className="text-black body-font bg-white">
                <div className="px-5 pt-10 pb-0  mx-auto flex flex-wrap flex-col">
                    <h2 className="mb-5 card-heading font-bold text-center md:text-4xl">Find Information Specific to your Role</h2>
                <div className="flex w-1/2 mx-auto flex-wrap mb-5 text-center items-center justify-center">
                            <Link href="" passHref>
                                <a className="sm:px-6 py-3 w-1/4 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg><span className="tiny-subheading">Customer</span>
                        </a>
                    </Link>
                            <Link href="" passHref>
                                <a className="sm:px-6 py-3 w-1/4 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg><span className="tiny-subheading">Partner</span>
                        </a>
                    </Link>
                    
                            
                            
                </div>
                <section className="pt-20 pb-32 bg-white">
    <div className="px-20 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-16 lg:gap-x-24 gap-y-20">
            <div>
            <div className=" block w-60 h-60 relative ">
                <Image layout="fill" className="mx-auto  mb-6 object-cover border-2 border-black" src="/trust-center/cloud.png" alt=""/>
                     </div>
                <h3 className="mb-2 text-base font-semibold leading-tight text-gray-900 lg:text-lg">Cloud Agreement</h3>
                <p className="text-sm text-gray-500 lg:text-base">Faster processing to help you build your applications quicker and with more efficiency.</p>
                <Link href="#_"  passHref>
                                <a className="inline-flex items-center pt-5 font-medium text-black hover:border-blue-500 group ">
                                <span className="tiny-heading group-hover:text-gray-400">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>
            
            </div>

            <div>
            <div className=" block w-60 h-60 relative ">
                <Image layout="fill" className="mx-auto  mb-6 object-cover border-2 border-black" src="/trust-center/customer.png" alt=""/>
                     </div>
                <h3 className="mb-2 text-base font-semibold leading-tight text-gray-900 lg:text-lg">Customer Agreement</h3>
                <p className="text-sm text-gray-500 lg:text-base">Faster processing to help you build your applications quicker and with more efficiency.</p>
                <Link href="#_"  passHref>
                                <a className="inline-flex items-center pt-5 font-medium text-black hover:border-blue-500 group ">
                                <span className="tiny-heading group-hover:text-gray-400">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>
            
            </div>



            <div>
            <div className=" block w-60 h-60 relative ">
                <Image layout="fill" className="mx-auto  mb-6 object-cover border-2 border-black" src="/trust-center/eula.png" alt=""/>
                     </div>
                <h3 className="mb-2 text-base font-semibold leading-tight text-gray-900 lg:text-lg">Eula Agreement</h3>
                <p className="text-sm text-gray-500 lg:text-base">Faster processing to help you build your applications quicker and with more efficiency.</p>
                <Link href="#_"  passHref>
                                <a className="inline-flex items-center pt-5 font-medium text-black hover:border-blue-500 group ">
                                <span className="tiny-heading group-hover:text-gray-400">Learn More</span>
                                <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                                </a>
                            </Link>
            
            </div>

            

        </div>
    </div>
</section>
                </div>
                
            </section>
             
            
              </Layout>


        
    )
}