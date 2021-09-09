import Layout from "../component/Layout"
export default function Pricing () {
    return (
        <Layout>
             {/* <!-- Main Pricing Section-->         */}
            <section className="overflow-hidden text-gray-700 bg-secondary" >
                <div className="container px-5 pt-20 pb-24 mx-auto">
            
                    <div className="flex flex-col w-full mb-20 text-center">

                        <div className="relative z-10 max-w-3xl px-12 mx-auto space-y-5 text-center lg:px-0">
                            <h1 className="text-6xl font-black text-black lg:text-6xl">Get Started With KTern.AI</h1>
                            <p className="mx-auto text-lg leading-relaxed text-gray-500 lg:w-2/3">Digital Transformation made simple</p>
                        </div>

                     {/* <div className="flex justify-center mt-6">
                            <nav className="relative inline-flex overflow-hidden text-sm border border-gray-300 rounded-lg">
                                <div className="absolute w-1/2 h-full transition-all duration-150 ease-out bg-black" :className="{ 'left-0' : billing == 'Monthly', 'left-1/2' : billing == 'Yearly' }"></div>
                                <button @click="billing='Monthly'" className="relative z-20 px-5 py-3 font-bold focus:outline-none" :className="{ 'text-white' : billing == 'Monthly', 'text-gray-600 hover:text-gray-700' : billing == 'Yearly' }">
                                    Basic Plan
                                </button>
                                <button @click="billing='Yearly'" className="relative z-20 px-6 py-3 font-bold focus:outline-none" :className="{ 'text-white' : billing == 'Yearly', 'text-gray-600 hover:text-gray-700' : billing == 'Monthly' }">
                                    Pro Plan
                                </button>
                            </nav>
                        </div> */}
            
            
                    </div>
                    
                    <div className="flex flex-wrap">
                        <div className="w-full p-2 xl:w-1/6 md:w-1/2">
                        <div className="relative flex flex-col justify-between h-full p-6 overflow-hidden border border-blue-600 rounded-lg">
                            <span className="absolute top-0 right-0 px-3 py-0 text-xs tracking-widest text-white bg-blue-600 rounded-bl">Selected</span>                           
                            <div className="flex flex-col w-full">
                                    <h2 className="mb-1 text-sm font-medium tracking-widest uppercase">Digital Maps</h2>
                                    <h1 className="flex items-center pb-4 mb-4 text-4xl leading-none text-gray-900 border-b border-gray-200"><span>$3000</span><span className="ml-1 text-lg font-normal text-gray-500">/MO</span></h1>
                                    <p className="flex items-center mb-2 text-gray-600"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>Everything in Basic</p>
                                    <p className="flex items-center mb-2 text-gray-600"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>Monthly Consultations</p>
                                    <p className="flex items-center mb-2 text-gray-600"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>Unlimited Admin Accounts</p>
                                    <p className="flex items-center mb-2 text-gray-600"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>Faster Build Times</p>
                                    <p className="flex items-center mb-6 text-gray-600"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>Premium Support</p>
                                </div>
                                <div className="w-full">
                                    <button className="inline-flex items-center justify-center w-full px-4 py-3 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
                                        View Details
                                        <img src="/pricing/down-arrow-svgrepo-com.svg" className="w-4 h-4 ml-2" />
                                    </button>
                                    <p className="mt-3 text-xs text-center text-gray-500">All plans include a free onboarding call.</p>
                                
                                </div>
                            </div>
                        </div>
                         <div className="w-full p-2 xl:w-1/6 md:w-1/2">
                        <div className="relative flex flex-col justify-between h-full p-6 overflow-hidden border border-blue-600 rounded-lg">
                            <span className="absolute top-0 right-0 px-3 py-0 text-xs tracking-widest text-white bg-blue-600 rounded-bl">Selected</span>                           
                            <div className="flex flex-col w-full">
                                    <h2 className="mb-1 text-sm font-medium tracking-widest uppercase">Digital Projects</h2>
                                    <h1 className="flex items-center pb-4 mb-4 text-4xl leading-none text-gray-900 border-b border-gray-200"><span>$3000</span><span className="ml-1 text-lg font-normal text-gray-500">/MO</span></h1>
                                    <p className="flex items-center mb-2 text-gray-600"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>Everything in Basic</p>
                                    <p className="flex items-center mb-2 text-gray-600"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>Monthly Consultations</p>
                                    <p className="flex items-center mb-2 text-gray-600"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>Unlimited Admin Accounts</p>
                                    <p className="flex items-center mb-2 text-gray-600"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>Faster Build Times</p>
                                    <p className="flex items-center mb-6 text-gray-600"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>Premium Support</p>
                                </div>
                                <div className="w-full">
                                    <button className="inline-flex items-center justify-center w-full px-4 py-3 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
                                        View Details
                                        <img src="/pricing/down-arrow-svgrepo-com.svg" className="w-4 h-4 ml-2" />
                                    </button>
                                    <p className="mt-3 text-xs text-center text-gray-500">All plans include a free onboarding call.</p>
                                
                                </div>
                            </div>
                        </div>
                      
                        <div className="w-full p-2 xl:w-1/6 md:w-1/2">
                        <div className="relative flex flex-col justify-between h-full p-6 overflow-hidden border border-blue-600 rounded-lg">
                            <span className="absolute top-0 right-0 px-3 py-0 text-xs tracking-widest text-white bg-blue-600 rounded-bl">Selected</span>                           
                            <div className="flex flex-col w-full">
                                    <h2 className="mb-1 text-sm font-medium tracking-widest uppercase">Digital Process</h2>
                                    <h1 className="flex items-center pb-4 mb-4 text-4xl leading-none text-gray-900 border-b border-gray-200"><span>$3000</span><span className="ml-1 text-lg font-normal text-gray-500">/MO</span></h1>
                                    <p className="flex items-center mb-2 text-gray-600"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>Everything in Basic</p>
                                    <p className="flex items-center mb-2 text-gray-600"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>Monthly Consultations</p>
                                    <p className="flex items-center mb-2 text-gray-600"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>Unlimited Admin Accounts</p>
                                    <p className="flex items-center mb-2 text-gray-600"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>Faster Build Times</p>
                                    <p className="flex items-center mb-6 text-gray-600"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>Premium Support</p>
                                </div>
                                <div className="w-full">
                                    <button className="inline-flex items-center justify-center w-full px-4 py-3 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
                                        View Details
                                        <img src="/pricing/down-arrow-svgrepo-com.svg" className="w-4 h-4 ml-2" />
                                    </button>
                                    <p className="mt-3 text-xs text-center text-gray-500">All plans include a free onboarding call.</p>
                                
                                </div>
                            </div>
                        </div>
                         <div className="w-full p-2 xl:w-1/6 md:w-1/2">
                        <div className="relative flex flex-col justify-between h-full p-6 overflow-hidden border border-blue-600 rounded-lg">
                            <span className="absolute top-0 right-0 px-3 py-0 text-xs tracking-widest text-white bg-blue-600 rounded-bl">Selected</span>                           
                            <div className="flex flex-col w-full">
                                    <h2 className="mb-1 text-sm font-medium tracking-widest uppercase">Digital Labs</h2>
                                    <h1 className="flex items-center pb-4 mb-4 text-4xl leading-none text-gray-900 border-b border-gray-200"><span>$3000</span><span className="ml-1 text-lg font-normal text-gray-500">/MO</span></h1>
                                    <p className="flex items-center mb-2 text-gray-600"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>Everything in Basic</p>
                                    <p className="flex items-center mb-2 text-gray-600"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>Monthly Consultations</p>
                                    <p className="flex items-center mb-2 text-gray-600"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>Unlimited Admin Accounts</p>
                                    <p className="flex items-center mb-2 text-gray-600"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>Faster Build Times</p>
                                    <p className="flex items-center mb-6 text-gray-600"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>Premium Support</p>
                                </div>
                                <div className="w-full">
                                    <button className="inline-flex items-center justify-center w-full px-4 py-3 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
                                        View Details
                                        <img src="/pricing/down-arrow-svgrepo-com.svg" className="w-4 h-4 ml-2" />
                                    </button>
                                    <p className="mt-3 text-xs text-center text-gray-500">All plans include a free onboarding call.</p>
                                
                                </div>
                            </div>
                        </div>
                         <div className="w-full p-2 xl:w-1/6 md:w-1/2">
                        <div className="relative flex flex-col justify-between h-full p-6 overflow-hidden border border-blue-600 rounded-lg">
                            <span className="absolute top-0 right-0 px-3 py-0 text-xs tracking-widest text-white bg-blue-600 rounded-bl">Selected</span>                           
                            <div className="flex flex-col w-full">
                                    <h2 className="mb-1 text-sm font-medium tracking-widest uppercase">Digital Mines</h2>
                                    <h1 className="flex items-center pb-4 mb-4 text-4xl leading-none text-gray-900 border-b border-gray-200"><span>$3000</span><span className="ml-1 text-lg font-normal text-gray-500">/MO</span></h1>
                                    <p className="flex items-center mb-2 text-gray-600"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>Everything in Basic</p>
                                    <p className="flex items-center mb-2 text-gray-600"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>Monthly Consultations</p>
                                    <p className="flex items-center mb-2 text-gray-600"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>Unlimited Admin Accounts</p>
                                    <p className="flex items-center mb-2 text-gray-600"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>Faster Build Times</p>
                                    <p className="flex items-center mb-6 text-gray-600"><span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg></span>Premium Support</p>
                                </div>
                                <div className="w-full">
                                    <button className="inline-flex items-center justify-center w-full px-4 py-3 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
                                        View Details
                                        <img src="/pricing/down-arrow-svgrepo-com.svg" className="w-4 h-4 ml-2" />
                                    </button>
                                    <p className="mt-3 text-xs text-center text-gray-500">All plans include a free onboarding call.</p>
                                
                                </div>
                            </div>
                        </div>
                        <div className="w-full p-2 xl:w-1/6 md:w-1/2">
                            

                        <div className="relative flex flex-col justify-between h-full p-6 overflow-hidden border border-gray-600 bg-gray-100 rounded-lg">

                            <div className="flex flex-col w-full">
                                <h2 className="mb-1 text-sm font-extrabold tracking-widest uppercase">Overall</h2>
                                <h1 className="flex items-center pb-4 mb-4 text-3xl leading-none text-gray-900 border-b border-gray-200"><span>$10000</span><span className="ml-1 text-lg font-normal text-gray-500">/MO</span></h1>
                                
                                        <div className="py-2 px-5 mb-4 bg-white rounded-lg overflow-hidden">
                                        <div className="flex items-center">
                                            <span className="flex items-center justify-center w-8 h-8 mr-8 bg-transparent rounded-lg">
                                            <img src="/assets/icons/Maps.png"/>
                                            </span>
                                            <p className="text-xs font-bold text-black">Digital Maps</p>
                                        </div>
                                        </div>

                                        <div className="py-2 px-5 mb-4 bg-white rounded-lg overflow-hidden">
                                        <div className="flex items-center">
                                            <span className="flex items-center justify-center w-8 h-8 mr-8 bg-transparent rounded-lg">
                                            <img src="/assets/icons/Process.svg"/>
                                            </span>
                                            <p className="text-xs font-bold text-black ">Digital Process</p>
                                        </div>
                                        </div>

                                        <div className="py-2 px-5 mb-4 bg-white rounded-lg overflow-hidden">
                                        <div className="flex items-center">
                                            <span className="flex items-center justify-center w-8 h-8 mr-8 bg-transparent rounded-lg">
                                            <img src="/assets/icons/Projects.png"/>
                                            </span>
                                            <p className="text-xs font-bold text-black">Digital Projects</p>
                                        </div>
                                        </div>
                                        <div className="py-2 px-5 mb-4 bg-white rounded-lg overflow-hidden">
                                        <div className="flex items-center">
                                            <span className="flex items-center justify-center w-8 h-8 mr-8 bg-transparent rounded-lg">
                                            <img src="/assets/icons/Labs.png"/>
                                            </span>
                                            <p className="text-xs font-bold text-black">Digital Labs</p>
                                        </div>
                                        </div>
                                        <div className="py-2 px-5 mb-4 bg-white rounded-lg overflow-hidden">
                                        <div className="flex items-center">
                                            <span className="flex items-center justify-center w-8 h-8 mr-8 bg-transparent rounded-lg">
                                            <img src="/assets/icons/Mines.png"/>
                                            </span>
                                            <p className="text-xs font-bold text-black">Digital Mines</p>
                                            
                                        </div>
                                        </div>
                            </div>
                            
                            <div className="w-full">
                                <button className="inline-flex items-center justify-center w-full px-4 py-3 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
                                    Contact Sales
                                    <img src="/pricing/down-arrow-svgrepo-com.svg" className="w-4 h-4 ml-2" />
                                </button>
                                <p className="mt-3 text-xs text-center text-gray-500">All plans include a free onboarding call.</p>
                            
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            {/* <!-- Logos Customer --> */}
            <section className="relative pb-12 overflow-x-hidden bg-white border-t border-b border-gray-100 pt-7 text-center">
                <p className="w-full text-xs font-bold tracking-wider text-center text-black uppercase pb-7 upercase">Trusted by these leading companies</p>
                <div className="px-8 mx-auto max-w-7xl-xl">
                    <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                                <svg className="w-auto h-12 text-black fill-current" viewBox="0 0 2428 1004" xmlns="http://www.w3.org/2000/svg"><path d="M1221.47 109.639a73.59 73.59 0 0144.76 17.898c17.016 16.108 21.477 42.969 13.423 64.46-31.31 64.446-105.768 107.493-156.649 121.734-30.44 7.16-68.921 7.16-96.676-3.58-13.437 8.054-24.773 34.085-41.18 23.268-23.747-18.547-3.19-47.573-16.9-68.17-2.827-4.24-9.947-4.551-13.527-11.49-18.806-41.18 4.475-80.568 30.427-111.89 43.268-48.274 167.401-102.06 236.323-32.23zm-144.12 32.217c-24.175 4.474-51.476 14.993-66.236 32.23-14.773 17.223-24.163 34.02-15.214 51.917 31.335-23.267 46.549-55.497 81.464-75.185-.013-3.593 5.356-6.278-.013-8.962zm145.923 8.962c-61.775-5.383-108.323 41.179-152.187 85.924-2.685 7.16-18.793 15.214-6.264 23.268 59.09 5.37 115.483-11.62 158.451-51.023 12.542-11.634 21.465-26.847 15.227-42.969-2.685-6.251-9.001-12.516-15.227-15.2zm535.276 266.749c28.65 69.829 52.812 179.916 0 247.06-14.32 16.11-39.377 30.96-55.485 18.794-59.09-47.43-84.135-115.47-120.84-176.35-5.369-2.685-5.369 4.488-8.054 7.172-13.423 61.762 11.634 142.33-30.427 190.656-16.108 2.685-31.179-5.603-36.704-21.478-20.596-63.552.869-129.801 6.238-193.353 12.542-32.23 17.912-69.816 45.667-93.992 44.759 17.898 66.236 68.04 92.176 104.744 18.82 27.742 34.02 59.077 55.498 84.135 18.793-8.055 9.545-32.62 8.962-47.444-7.186-58.182-23.294-111.89-38.52-167.388-.87-14.318-8.924-38.494 6.264-47.443 40.336 17.911 57.313 59.972 75.225 94.887zm-270.33-21.491c0 13.437-10.738 30.22-19.713 32.23-85.925 13.424-181.707 5.37-262.262 32.217-2.685 9.844 8.95 11.634 15.214 14.318 68.908 10.74 141.435 13.424 208.58 30.44 35.498 9.014 48.35 51.036 51.035 85.938 1.648 27.522-8.936 60.867-35.81 79.673-66.223 42.074-167.374 40.271-234.531 1.803-25.668-14.396-50.129-37.586-51.918-66.237.155-22.748 9.857-40.66 25.965-49.233 64.46-25.965 144.12-11.62 199.63 21.478 3.554 17.911-15.822 16.939-25.096 23.28-61.775 35.81-108.31-40.257-165.598-12.54-8.054 5.369-13.877 20.349-4.474 25.07 70.71 31.335 149.49 8.949 219.305-10.74 8.055-2.684 17.912-10.738 18.794-18.792-2.685-28.65-34.902-34.902-55.498-42.956-60.867-15.214-127.999-15.214-193.353-21.478-12.529-2.685-28.495-11.414-32.217-21.478-7.16-21.478-7.16-51.023 8.949-68.921 83.24-73.41 209.449-67.132 315.075-47.444 7.172 2.633 15.226 5.318 17.924 13.372zm-391.167 34.02c8.054 85.924 12.528 165.61 10.739 256.01-1.79 11.62-15.214 14.318-24.163 18.793-14.319 2.685-32.827-.363-38.494-8.054-20.583-33.138-13.424-77.87-15.214-118.155 2.685-63.539 1.79-132.473 19.701-191.563 3.424-8.586 13.424-16.109 21.478-10.752 21.478 10.752 25.058 32.243 25.953 53.72zm994.521-12.53c4.306 7.238 8.807 18.418 0 23.269-40.284 17.898-94.874 9.844-141.435 15.213-12.529 10.74-22.386 28.637-17.924 44.759 4.5 2.685 8.508 6.77 13.45 6.251 28.624 1.803 71.605-13.423 90.425 13.424 4.59 7.99-.623 37.82-13.424 38.494-34.928 4.5-92.358-4.384-109.232 4.5-21.477 14.32-19.7 42.062-27.755 64.46 15.227 9.844 31.167-.233 49.22-2.697 33.151-5.37 69.856-15.214 102.954-8.055 6.265 11.634 15.227 24.176 8.95 38.495-56.432 44.758-129.218 90.632-206.764 58.182-29.105-13.047-42.074-57.287-32.217-94.86 6.251-26.861 33.993-52.814 17.003-81.464-2.685-12.542 4.488-23.268 15.227-25.952 29.532 0 23.254-36.705 38.48-53.721-17.003-18.793-59.958-17.898-55.484-55.498 20.596-10.739 45.667-7.159 68.909-10.739 52.812-10.752 111.89-17.016 165.636-10.752 10.7 2.153 25.032 23.268 33.981 36.692zM813.286 213.476c82.605 67.52 189.774 182.614 176.35 315.087-16.121 104.744-127.117 183.51-221.109 208.58-91.307 26.847-205.882 24.163-298.992 2.685-6.264 17.016-12.528 37.586-32.216 44.758-12.53 4.475-28.65 1.79-38.495-6.264-27.742-25.966-5.37-76.094-45.653-92.19-78.779-33.124-163.821-98.479-204.092-179.034-5.37-16.108.894-32.217 10.739-44.746 61.774-49.233 139.645-68.92 217.528-84.147 4.475 1.79 2.685-4.475 6.265-6.265 4.474-53.708 6.264-108.323 23.268-156.662 3.878-6.783 13.423-8.949 19.7-4.474 49.234 37.586 25.953 108.323 47.444 159.333 93.992 4.475 187.984 8.95 262.275 61.775 25.07 20.583 31.179 59.895 23.267 82.358-7.898 22.425-34.006 38.495-58.182 40.259-16.121 0-46.548 1.569-44.759-10.726 1.79-12.309 54.759-32.45 38.495-49.247-23.385-24.136-140.385-38.494-212.9-47.443-8.948-1.79-17.158.895-17.158 10.739-1.79 68.026-7.16 143.212 4.474 208.58.895 4.487 6.265 9.857 10.752 10.726 127.999 20.596 263.17 8.949 363.426-64.447 46.549-37.573 61.775-90.425 53.708-148.595-40.284-162.018-209.462-259.602-348.212-322.26-135.158-59.077-284.66-89.517-444.89-81.45-25.51 1.868-65.937 10.675-66.236 19.702-.298 9.026 45.797 6.186 40.271 23.267-5.512 17.068-52.359 6.94-66.236 2.685-13.878-4.254-12.529-24.176-8.95-36.704C38.084 7.593 135.513 2.599 179.519.433c243.469-6.277 478.91 86.444 633.768 213.042zM374.662 453.376c-61.775.895-127.117 7.16-184.404 28.638-11.634 4.474-25.966 17.003-17.017 32.23 23.268 31.321 56.548 57.04 87.728 75.185 31.179 18.119 72.514 41.18 110.113 46.562 8.95-58.196 8.95-115.483 8.054-175.455-3.592-1.79-.013-5.37-4.474-7.16zm1850.266-81.463c-2.684 77.87-75.211 126.222-75.211 204.092 2.684 2.685 4.5 6.265 8.054 4.501 58.208-63.565 115.483-153.977 200.525-180.824 22.412-1.79 42.658 17.677 51.036 32.23 29.546 59.077 22.412 142.33-18.78 196.037-42.502 52.722-116.39 105.626-200.5 96.664-34.901 85.938-59.116 176.35-72.54 270.342-7.159 18.793-24.149 1.79-34.888-1.79-72.5-57.287-12.97-208.943-8.054-228.294 4.915-19.299 24.318-64.823 38.507-102.94-34.02-60.855-12.542-134.277 15.2-190.67 21.479-37.599 51.05-75.198 85.951-103.835 4.436.013 8.016.908 10.7 4.487zm144.146 96.677c-10.739-1.79-15.226 12.542-24.162 15.226-41.166 46.549-82.358 93.097-102.954 148.595 27.768 3.58 51.023-14.319 75.211-24.163 41.166-25.965 67.132-68.908 64.447-118.154-1.803-8.08-8.962-14.345-12.542-21.504z" fillRule="nonzero"></path></svg>
                            </div>
                            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                                <svg className="h-10 text-black fill-current" viewBox="0 0 2499 1037" xmlns="http://www.w3.org/2000/svg"><path d="M261.062 466.768c-53.833-19.912-83.335-35.399-83.335-59.735 0-20.652 16.963-32.45 47.201-32.45 55.31 0 112.09 21.388 151.178 40.559l22.124-136.427c-30.973-14.752-94.397-39.088-182.151-39.088-61.947 0-113.573 16.223-150.443 46.46-38.352 31.71-58.263 77.434-58.263 132.744 0 100.293 61.211 143.07 160.769 179.203 64.159 22.86 85.547 39.088 85.547 64.16 0 24.336-20.652 38.346-58.263 38.346-46.46 0-123.153-22.86-173.302-52.356L0 786.087c42.771 24.337 122.417 49.409 205.017 49.409 65.63 0 120.204-15.487 157.08-44.984 41.293-32.45 62.682-80.381 62.682-142.328 0-102.511-62.683-145.282-163.717-181.416zm523.877-80.387l22.124-135.692H690.265V85.966l-157.035 25.84-22.677 138.883-55.232 8.96-20.675 126.732h75.68v266.227c0 69.32 17.7 117.257 53.833 146.754 30.238 24.336 73.745 36.134 134.956 36.134 47.196 0 75.957-8.109 95.868-13.275V678.416c-11.062 2.953-36.133 8.114-53.097 8.114-36.134 0-51.62-18.435-51.62-60.47V386.38h94.673zm350.752-143.618c-51.62 0-92.92 27.102-109.142 75.775l-11.062-67.849H855.459v573.745h182.887V452.017c22.865-28.026 55.31-38.159 99.558-38.159 9.59 0 19.911 0 32.45 2.213V247.188c-12.539-2.948-23.6-4.425-34.663-4.425zm171.095-48.86c53.098 0 95.869-43.507 95.869-96.604 0-53.839-42.771-96.61-95.869-96.61-53.838 0-96.609 42.771-96.609 96.61 0 53.097 42.771 96.604 96.61 96.604zm-92.184 56.786h183.628v573.745h-183.628V250.689zm703.999 51.62c-32.45-42.035-77.434-62.682-134.956-62.682-53.097 0-99.558 22.124-143.07 68.584l-9.585-57.522h-160.769v786.134l182.893-30.232V822.22c28.02 8.85 56.78 13.275 82.594 13.275 45.725 0 112.096-11.798 163.717-67.843 49.408-53.839 74.485-137.168 74.485-247.052 0-97.345-18.44-171.09-55.31-218.291zm-151.92 353.983c-14.75 28.025-37.61 42.777-64.159 42.777-18.435 0-34.662-3.69-49.408-11.062V415.142c30.973-32.445 58.993-36.134 69.32-36.134 46.46 0 69.32 50.15 69.32 148.23 0 56.045-8.11 99.557-25.073 129.054zm731.566-123.894c0-91.443-19.912-163.717-59-214.602-39.822-51.62-99.557-78.169-175.514-78.169-155.608 0-252.212 115.044-252.212 299.408 0 103.247 25.808 180.68 76.692 230.089 45.725 44.248 111.361 66.372 196.168 66.372 78.169 0 150.442-18.435 196.167-48.673l-19.912-125.365c-44.989 24.336-97.345 37.61-156.344 37.61-35.398 0-59.734-7.378-77.434-22.864-19.175-16.223-30.237-42.771-33.921-80.382h303.097c.736-8.85 2.213-50.15 2.213-63.424zm-306.787-48.672c5.16-81.859 27.284-120.205 69.32-120.205 41.3 0 62.688 39.087 65.636 120.205H2191.46z" fillRule="nonzero"></path></svg>
                            </div>
                            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                                <svg className="h-10 text-black fill-current" viewBox="0 0 2500 829" xmlns="http://www.w3.org/2000/svg"><path d="M235.978 764.863L129.39 700.954l-64.695-64.62L0 571.714V0h271.862l64.446 64.41 64.444 64.409h291.49c287.02 0 291.506-.034 292.67-2.205.77-1.443 1.179-23.71 1.179-64.41V0h485.617l.295 64.124.294 64.125 63.84.57 63.84.57.301 33.915c.167 18.653.668 33.914 1.115 33.914.447 0 16.234-15.39 35.081-34.2l34.268-34.199h143.507l64.446-64.41L1943.142 0h270.72v62.205c0 40.699.408 62.966 1.18 64.41 1.15 2.146 3.229 2.204 78.95 2.204h77.767l64.12 64.128L2500 257.076v428.76l-106.874 71.49-106.874 71.49-71.487-.022-71.486-.02-.333-34.108c-.183-18.757-.698-34.47-1.143-34.915-.444-.444-22.818 14.904-49.717 34.107l-48.905 34.915h-129.136v-34.2c0-26.69-.315-34.2-1.432-34.2-.788 0-16.815 15.39-35.618 34.2l-34.185 34.2h-229.167l-34.73-34.744c-19.102-19.11-35.13-34.347-35.618-33.858-.487.487-3.7 14.968-7.137 32.179-3.438 17.211-6.526 32.447-6.863 33.857l-.61 2.565h-200.04l-34.185-34.2c-18.802-18.81-34.83-34.2-35.618-34.2-1.117 0-1.432 7.511-1.432 34.2v34.2h-100.32c-55.175 0-100.318-.151-100.318-.338 0-1.795-13.816-68.576-14.285-69.044-.342-.344-16.381 15.128-35.641 34.379l-35.017 35.004H599.65l-34.216-13.68c-18.818-7.523-34.725-13.68-35.347-13.68-.686 0-1.132 5.386-1.132 13.68v13.68H342.567l-106.589-63.91zm106.59-200.568v-78.089l-63.84-.57-63.84-.57V343.707l63.84-.57 63.84-.57V186.39l-63.84-.57-63.84-.57-.57-63.84-.57-63.84H57.57l-.288 242.786-.288 242.785 49.866 49.914 49.867 49.915 92.92-.292 92.92-.292v-78.09zm593.67 28.751l49.861-49.909-.288-178.374-.289-178.374-78.37-.293-78.37-.293-.29 149.631-.289 149.632h-55.86l-.57-149.339-.57-149.338-78.369-.293-78.37-.293-.29 149.631-.289 149.632h-55.86l-.57-149.339-.57-149.338-78.374-.293-78.374-.293v457.152h486.241l49.86-49.909zm263.602-178.66V186.39l-78.374-.293-78.374-.293V642.97l78.374-.293 78.374-.293V414.387zm342.568 149.919v-78.65l-63.555-.295-63.554-.294V343.707l63.554-.294 63.555-.295v-157.28l-63.555-.295-63.554-.294-.57-63.84-.57-63.84h-156.18l-.286 242.81-.289 242.812 49.873 49.882 49.872 49.882h185.259v-78.65zm400.136-.012v-78.66h-92.217c-83.038 0-92.285-.178-92.91-1.801-.903-2.357-.903-136.537 0-138.894.625-1.623 9.872-1.803 92.91-1.803h92.217V185.816h-243.358l-49.32 49.32-49.319 49.32v259.859l49.32 49.32 49.32 49.318h243.357v-78.66zm214.6-70.964l.289-149.624h127.679l.57 149.339.57 149.339h156.178l.289-178.375.288-178.374-49.86-49.909-49.86-49.909h-91.933c-75.52 0-92.159-.273-93.202-1.53-.89-1.074-1.357-20.206-1.564-64.124l-.295-62.595h-156.179l-.292 291.268c-.16 160.197-.049 291.91.249 292.693.426 1.12 17.214 1.425 78.662 1.425h78.122l.288-149.624zM1199.84 92.907v-35.34h-156.178l-.302 34.189c-.167 18.801-.054 34.837.251 35.631.443 1.152 16.374 1.386 78.392 1.153l77.837-.293v-35.34z" fillRule="nonzero"></path></svg>
                            </div>
                            <div className="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
                                <svg className="h-10 text-black fill-current" viewBox="0 0 704 335" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M407.451 27v54.605H476v19.574h-68.549v161.219c0 16.487 2.658 29.1 7.994 37.858 5.326 8.758 14.51 13.132 27.58 13.132 6.185 0 11.511-.34 15.978-1.028 4.466-.68 8.244-1.548 11.341-2.577l2.578 18.545c-8.244 3.775-19.245 5.672-32.985 5.672-11.342 0-20.705-1.897-28.09-5.672-7.394-3.775-13.23-9.008-17.526-15.709-4.297-6.7-7.305-14.76-9.023-24.207-1.729-9.437-2.578-19.653-2.578-30.648V101.18H342V81.605h40.72V36.267L407.45 27zm108.272 55.01l56.592 153.35c4.797 12.012 9.086 23.335 12.856 33.96 3.77 10.635 7.37 21.1 10.802 31.386H597a1724.777 1724.777 0 0111.061-31.136c3.94-10.805 8.318-22.208 13.116-34.22L678.277 82H704l-98.263 247h-21.095L490 82.01h25.723zM150.117 29.041C172.077.14 202.607 0 202.607 0s4.544 27.176-17.277 53.345c-23.289 27.954-49.763 23.376-49.763 23.376s-4.974-21.98 14.55-47.68zm-11.275 67.5C150.16 96.54 171.165 81 198.515 81c47.075 0 65.588 33.449 65.588 33.449s-36.216 18.488-36.216 63.36c0 50.618 45.113 68.057 45.113 68.057s-31.533 88.644-74.134 88.644c-19.565 0-34.776-13.171-55.39-13.171-21.006 0-41.862 13.661-55.431 13.661C49.146 335.01 0 250.913 0 183.326 0 116.817 41.6 81.929 80.61 81.929c25.368 0 45.052 14.611 58.232 14.611z"></path></g></svg>
                            </div>
                            <div className="flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-1">
                                <svg className="text-black fill-current h-7" viewBox="0 0 2500 494" xmlns="http://www.w3.org/2000/svg"><path d="M1262.684 438.349c0 8.684 0 10.658 5.855 15.987l32.797 32.368v1.382H1155.92v-62.172c-14.638 40.974-53.349 68.073-96.428 67.5-74.756 0-129.02-59.21-129.02-168.157 0-102.04 58.553-170.132 140.731-170.132 36.428-2.316 70.329 18.901 84.52 52.895V70.855a17.066 17.066 0 00-6.638-16.579l-31.23-30.394V22.5l144.828-17.171v433.02zm-106.763-19.737V213.94a54.224 54.224 0 00-43.335-20.527c-35.33 0-69.487 32.369-69.487 128.487 0 90 29.473 121.777 66.17 121.777a58.382 58.382 0 0046.645-25.066h.007zm203.19 69.474V211.77a18.671 18.671 0 00-5.854-16.58l-32.211-33.552v-1.381h145.421V440.52c0 8.684 0 10.658 5.855 15.987l32.014 30.394v1.382l-145.224-.197zm-5.269-428.882c0-32.697 26.217-59.204 58.553-59.204 32.335 0 58.559 26.513 58.559 59.21 0 32.698-26.217 59.211-58.553 59.211-32.335 0-58.559-26.513-58.559-59.21v-.007zm504.954 378.553c0 8.684 0 11.25 5.855 16.579l32.796 32.368v1.382H1751.25V417.23c-13.316 44.803-53.875 75.658-100.132 76.184-64.802 0-99.546-47.763-99.546-138.157 0-43.619 0-91.382 1.362-145.066a16.875 16.875 0 00-5.855-15.987l-32.204-32.566v-1.381h144.243v180.197c0 59.21 8.593 98.684 45.283 98.684a58.487 58.487 0 0047.237-29.802V211.967a18.671 18.671 0 00-5.855-16.579l-32.401-33.75v-1.381h145.414v277.5zm495.007 50.329c0-10.658 1.954-146.448 1.954-177.632 0-59.21-9.178-100.066-50.362-100.066a65.204 65.204 0 00-51.724 28.421 243.53 243.53 0 015.855 56.25c0 41.053-1.368 93.355-1.954 145.658a16.875 16.875 0 005.856 15.987l32.796 30.395v1.381H2149.44c0-9.868 1.947-146.447 1.947-177.631 0-60.198-9.17-100.066-49.77-100.066a58.46 58.46 0 00-48.407 29.21V441.31c0 8.684 0 10.658 5.855 15.987l32.013 30.395v1.381h-145.224V212.757a18.671 18.671 0 00-5.855-16.58l-32.21-34.539v-1.381h145.42v70.263c13.487-46.382 56.448-77.553 104.23-75.592 48.409 0 81.198 27.236 95.06 78.947 15.395-47.69 59.697-79.69 109.303-78.947 64.802 0 101.5 48.355 101.5 139.736 0 43.619-1.362 93.356-1.948 145.658a15.868 15.868 0 006.632 15.987L2500 486.704v1.382h-146.197zm-1826.79-43.027l43.138 41.645v1.382H351.342v-1.382l43.921-41.645a16.875 16.875 0 005.855-15.987v-266.25c0-11.25 0-26.447 1.948-39.473L255.5 493.42h-1.75l-152.836-340.46c-3.322-8.487-4.296-9.08-6.447-14.803v223.224a78.322 78.322 0 007.23 43.618l61.48 81.71v1.382H0v-1.381l61.487-81.908a78.526 78.526 0 007.217-43.421v-246.71a48.132 48.132 0 00-10.145-33.75l-43.526-57.04V22.5h156.151l130.777 288.355L417.125 22.5h152.829v1.382l-42.94 48.355a17.066 17.066 0 00-6.639 16.579v340.263a15.868 15.868 0 006.645 15.987l-.007-.007zm171.184-133.42v1.38c0 84.474 43.139 118.422 93.691 118.422 42.21 1.454 81.283-22.48 99.546-60.987h1.369c-17.566 83.487-68.71 122.96-145.224 122.96-82.566 0-160.447-50.328-160.447-166.973 0-122.566 78.079-171.513 164.348-171.513 69.494 0 143.467 33.158 143.467 139.736v16.974h-196.75zm0-16.975h96.23v-17.17c0-86.843-17.763-109.935-44.506-109.935-32.401 0-52.112 34.54-52.112 127.105h.388z" fillRule="nonzero"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Five Streams of KTern.AI--> */}
            <section className="pt-8 pb-16 sm:pt-10 sm:pb-20 md:pt-12 md:pb-24" style={{backgroundColor:'#f5f6f7'}}>
                <div className="px-5 mx-auto max-w-7xl md:px-8 lg:px-16">
                    <svg className="w-40 h-40 sm:w-48 sm:h-48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 41"><defs></defs><defs><linearGradient x1="50%" x2="108.006%" y1="44.344%" y2="62.397%"><stop offset="0%" stopColor="#FDC530"></stop><stop offset="100%" stopColor="#FF42E9"></stop></linearGradient><linearGradient x1="50%" x2="108.006%" y1="48.828%" y2="52.569%"><stop offset="0%" stopColor="#FDC530"></stop><stop offset="100%" stopColor="#FF42E9"></stop></linearGradient><linearGradient x1="50%" x2="108.006%" y1="48.935%" y2="52.335%"><stop offset="0%" stopColor="#FDC530"></stop><stop offset="100%" stopColor="#FF42E9"></stop></linearGradient></defs><g fill="none" fillRule="nonzero"><path fill="url(#a)" d="M42.82.11c11.81.69 23.5 6.44 30.55 16.05A480.23 480.23 0 012.31 23.9C8.54 8 26.24-1.12 42.82.11z"></path><path fill="url(#b)" d="M78.73 26.87c-13.7 1.8-27.46 3-41.23 4.1-12.44.65-24.87 1.42-37.33 1.33A33 33 0 01.71 29c11.86-.44 23.66-1.65 35.47-2.67C49.5 24.54 62.84 23 76 20.28"></path><path fill="url(#c)" d="M80 38.27C53.57 41.54 26.83 41.13.24 40.44 0 39.75.2 38.91 0 38.29v-2c26.56-.52 79.11-8.39 79.35-6.85"></path></g></svg>

                    <div className="relative w-full">
                        <h2 className="text-4xl font-bold text-transparent sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading bg-clip-text bg-gradient-to-br from-black via-gray-750 to-white">
                            KTern&apos;s Digital Streams
                        </h2>
                        <p className="mt-3 text-base leading-6 text-gray-600 sm:text-lg md:text-xl">
                            The Cognitive Digital Workplace for SAP Transformation&apos;s
                        </p>
                    </div>
                    <div className="grid mt-16 gap-y-10 sm:grid-cols-2 sm:gap-x-8 md:gap-x-12 lg:grid-cols-3 lg:gap-20">
                        <div>
                            
                            <img src="/pricing/Digital Processes.jpg"/>
                            <h3 className="mt-6 text-base font-black leading-6 text-gray-700">
                                Digital Maps
                            </h3>
                            <p className="mt-2 text-sm leading-5 text-gray-800">
                                Fully loaded authentication, email verification, and password reset. Authentication in a snap!
                            </p>
                        </div>
                        <div>
                            <img src="/pricing/Digital Projects.jpg"/>
                            <h3 className="mt-6 text-base font-black leading-6 text-gray-700">
                                Digital Processes
                            </h3>
                            <p className="mt-2 text-sm leading-5 text-gray-800">
                                Customizable user profiles. Allow your users to enter data and easily customize their user profiles.
                            </p>
                        </div>
                        <div>
                            <img src="/pricing/digital maps.jpg"/>
                            <h3 className="mt-6 text-base font-black leading-6 text-gray-700">
                                Digital Projects
                            </h3>
                            <p className="mt-2 text-base leading-5 text-gray-800">
                                Grant user permissions based on roles, you can then assign a role to a specific plan.
                            </p>
                        </div>
                        <div>
                            <img src="/pricing/Digital Labs.jpg"/>
                            <h3 className="mt-6 text-base font-black leading-6 text-gray-700">
                                Digital Labs
                            </h3>
                            <p className="mt-2 text-base leading-5 text-gray-800">
                                Allow users to pay for your service and signup for a subscription using Stripe or Braintree Payments.
                            </p>
                        </div>
                        <div>
                        <img src="/pricing/Digital Mines.jpg"/>
                            <h3 className="mt-6 text-base font-black text-gray-700">
                                Digital Mines
                            </h3>
                            <p className="mt-2 text-sm leading-5 text-gray-800">
                                Ready-to-use Notification System which integrates with the default Laravel notification feature.
                            </p>
                        </div>
                        <div>
                        <img src="/pricing/Digital Mines.jpg"/>
                        <h3 className="mt-6 text-base font-black text-gray-700">
                            Digital Workplace
                        </h3>
                        <p className="mt-2 text-sm leading-5 text-gray-800">
                            Ready-to-use Notification System which integrates with the default Laravel notification feature.
                        </p>
                    </div>

                        
                    </div>
                </div>
            </section>
            {/* <!-- Customer Case Studies 2--> */}
            <section className="relative py-20 2xl:py-40 bg-gray-800 overflow-hidden">
            <img className="hidden lg:block absolute inset-x-0 bottom-0 mb-96" src="/pricing/line-two-montain.svg" alt=""/>
            <div className="relative container px-4 mx-auto">
                <div className="max-w-4xl mx-auto">
                <h2 className="mb-24 text-center text-5xl font-bold font-heading text-white">Case Studies</h2>
                <div className="flex flex-wrap justify-center -mx-10 mb-20">
                    <div className="w-full lg:w-1/3 px-10 mb-20 lg:mb-0">
                    <div>
                        <img className="mb-8 w-full h-112 lg:h-80 object-cover object-top" src="/pricing/mitsubishi.png" alt=""/>
                        <a className="inline-block w-full p-10 bg-white hover:bg-gray-100 rounded-lg transition duration-200" href="#">
                        <h3 className="mb-2 text-2xl text-black font-bold font-heading">70% SAP Cost Saved</h3>
                        <p className="mb-4 text-xs text-black font-bold">SAP ERP Transformation</p>
                        <div className="flex justify-end">
                            <svg width="27" height="15" viewBox="0 0 27 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.2042 7.78599L19.5171 14.4731L18.6812 13.6372L24.3611 7.95734L0.709572 7.96153L0.709572 6.78292L24.3611 6.77874L19.0992 1.51681L19.9351 0.680916L26.2042 6.9501C26.4351 7.18093 26.4351 7.55515 26.2042 7.78599Z" fill="black"></path>
                            </svg>
                        </div>
                        </a>
                    </div>
                    </div>
                    <div className="w-full lg:w-1/3 px-10 mb-20 lg:mb-0">
                    <div className="lg:mt-24">
                        <img className="mb-8 w-full h-112 lg:h-80 object-cover object-top" src="/pricing/asmnew.png" alt=""/>
                        <a className="inline-block w-full p-10 bg-white hover:bg-gray-100 rounded-lg transition duration-200" href="#">
                        <h3 className="mb-2 text-2xl text-gray-600 font-bold font-heading">30% Automated Results</h3>
                        <p className="mb-4 text-xs text-black font-bold">SAP Assessment</p>
                        <div className="flex justify-end">
                            <svg width="27" height="15" viewBox="0 0 27 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.2042 7.78599L19.5171 14.4731L18.6812 13.6372L24.3611 7.95734L0.709572 7.96153L0.709572 6.78292L24.3611 6.77874L19.0992 1.51681L19.9351 0.680916L26.2042 6.9501C26.4351 7.18093 26.4351 7.55515 26.2042 7.78599Z" fill="black"></path>
                            </svg>
                        </div>
                        </a>
                    </div>
                    </div>
                    <div className="w-full lg:w-1/3 px-10">
                    <div>
                        <img className="mb-8 w-full h-112 lg:h-80 object-cover object-top" src="/pricing/aramconew.png" alt=""/>
                        <a className="inline-block w-full p-10 bg-white hover:bg-gray-100 rounded-lg transition duration-200" href="#">
                        <h3 className="mb-2 text-2xl text-black font-bold font-heading">20% Automated Testing</h3>
                        <p className="mb-4 text-xs text-gray-600 font-bold">SAP Testing</p>
                        <div className="flex justify-end">
                            <svg width="27" height="15" viewBox="0 0 27 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.2042 7.78599L19.5171 14.4731L18.6812 13.6372L24.3611 7.95734L0.709572 7.96153L0.709572 6.78292L24.3611 6.77874L19.0992 1.51681L19.9351 0.680916L26.2042 6.9501C26.4351 7.18093 26.4351 7.55515 26.2042 7.78599Z" fill="black"></path>
                            </svg>
                        </div>
                        </a>
                    </div>
                    </div>
                </div>
                <div className="text-center"><a className="inline-block py-4 px-12 border border-gray-200 hover:border-gray-50 rounded-full font-bold text-white" href="#"> All Case Studies</a></div>
                </div>
            </div>
            </section>
            {/* <!-- Detailed Tabular Column Section--> */}
            <section className="relative py-20 2xl:py-40" style={{backgroundColor:'#f5f6f7'}}>
                <div className="container px-4 pb-20 mx-auto border-b border-gray-100">
                <div className="mb-14 text-center">
                    <span className="text-lg text-Black font-bold">Detailed Pricing</span>
                    <h2 className="mt-8 text-5xl font-bold text-gray-300 font-heading">See all features</h2>
                </div>
                <div className="pt-20 border-t border-gray-100 ">
                    <table className="table-auto w-full mb-10">
                    <thead>
                        <tr className="text-lg text-left font-bold ">
                            <th className="sticky top-0 pb-20"> 
                            
                                </th>
                            <th className=" sticky top-16 pb-6 pr-8 bg-gray-100">
                                <div className="top-0 absolute w-full h-2 bg-gradient-to-r from-black to-white"></div>
                                <div>
                                <div className="flex items-center justify-between text-gray-200 py-10">
                
                                    <div className="relative justif-self-end mr-2 ">
                                        <h2 className="text-lg font-black text-black">Digital</h2>
                                        <p className="text-xs font-medium text-black uppercase">Maps</p>
                                    </div>
                                    <div className="flex items-center">
                                        <h3 className="text-3xl text-black">$3000</h3>
                                        
                                    </div>
                                    
                                    
                                </div>
                                <div className="w-full absolute bottom-0 ">
                                    <button className="inline-flex items-center justify-center  px-4 py-2  text-xs font-medium  text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
                                        Contact Sales
                                        <img src="/pricing/down-arrow-svgrepo-com.svg" className="w-4 h-4 ml-2" />
                                    </button>
                                    
                                
                                </div>
                                </div>
                            </th>
                            <th className="sticky top-16 pb-6 pr-8 bg-gray-100"> 
                                <div className="top-0 absolute w-full h-2 bg-gradient-to-r from-black to-white"></div>
                                <div>
                                <div className="flex items-center justify-between text-gray-200">
                
                                    <div className="relative justif-self-end mr-2">
                                        <h2 className="text-lg font-black text-black">Digital</h2>
                                        <p className="text-xs font-medium text-black uppercase">Processes</p>
                                    </div>
                                    <div className="flex items-center">
                                        <h3 className="text-3xl text-black">$3000</h3>
                                        
                                    </div>
                                    
                                    
                                </div>
                                <div className="w-full absolute bottom-0">
                                    <button className="inline-flex items-center justify-center  px-4 py-2  text-xs font-medium  text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
                                        Contact Sales
                                        <img src="/pricing/down-arrow-svgrepo-com.svg" className="w-4 h-4 ml-2" />
                                    </button>
                                    
                                
                                </div>
                                </div>
                            </th>
                            <th className="sticky top-16 pb-6 pr-8 bg-gray-100"> <div className="top-0 absolute w-full h-2 bg-gradient-to-r from-black to-white"></div>
                                <div>
                                <div className="flex items-center justify-between text-gray-200">
                
                                    <div className="relative justif-self-end mr-2">
                                        <h2 className="text-lg font-black text-black">Digital</h2>
                                        <p className="text-xs font-medium text-black uppercase">Projects</p>
                                    </div>
                                    <div className="flex items-center">
                                        <h3 className="text-3xl text-black">$3000</h3>
                                        
                                    </div>
                                    
                                    
                                </div>
                                <div className="w-full absolute bottom-0">
                                    <button className="inline-flex items-center justify-center  px-4 py-2  text-xs font-medium  text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
                                        Contact Sales
                                        <img src="/pricing/down-arrow-svgrepo-com.svg" className="w-4 h-4 ml-2" />
                                    </button>
                                    
                                
                                </div>
                                </div></th>
                            <th className="sticky top-16 pb-6 pr-8 bg-gray-100"> <div className="top-0 absolute w-full h-2 bg-gradient-to-r from-black to-white"></div>
                                <div>
                                <div className="flex items-center justify-between text-gray-200">
                
                                    <div className="relative justif-self-end mr-2">
                                        <h2 className="text-lg font-black text-black">Digital</h2>
                                        <p className="text-xs font-medium text-black uppercase">Labs</p>
                                    </div>
                                    <div className="flex items-center">
                                        <h3 className="text-3xl text-black">$3000</h3>
                                        
                                    </div>
                                    
                                    
                                </div>
                                <div className="w-full absolute bottom-0">
                                    <button className="inline-flex items-center justify-center  px-4 py-2  text-xs font-medium  text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
                                        Contact Sales
                                        <img src="/pricing/down-arrow-svgrepo-com.svg" className="w-4 h-4 ml-2" />
                                    </button>
                                    
                                
                                </div>
                                </div></th>
                            <th className="sticky top-16 pb-6 pr-8 bg-gray-100"> <div className="top-0 absolute w-full h-2 bg-gradient-to-r from-black to-white"></div>
                                <div>
                                <div className="flex items-center justify-between text-gray-200">
                
                                    <div className="relative justif-self-end mr-2">
                                        <h2 className="text-lg font-black text-black">Digital</h2>
                                        <p className="text-xs font-medium text-black uppercase">Mines</p>
                                    </div>
                                    <div className="flex items-center">
                                        <h3 className="text-3xl text-black">$3000</h3>
                                        
                                    </div>
                                    
                                    
                                </div>
                                <div className="w-full absolute bottom-0">
                                    <button className="inline-flex items-center justify-center  px-4 py-2  text-xs font-medium  text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
                                        Contact Sales
                                        <img src="/pricing/down-arrow-svgrepo-com.svg" className="w-4 h-4 ml-2" />
                                    </button>
                                    
                                
                                </div>
                                </div></th> 
                        
                        
                        
                        
                        
                        
                        </tr>
                    </thead>
                    <tbody className="overflow-x-auto overflow-y-hidden">
                        <tr className="text-xl bg-gray-50">
                        <td className="py-5 pl-10 text-left">Number of Team Members</td>
                        <td>5</td>
                        <td>20</td>
                        <td>200+</td>
                        <td>Unlimited</td>
                        <td>Unlimited</td>
                        </tr>
                        <tr className="text-xl">
                        <td className="py-5 pl-10 text-left">Users</td>
                        <td>3</td>
                        <td>10</td>
                        <td>50+</td>
                        <td>100+</td>
                        <td>Unlimited</td>
                        </tr>
                        <tr className="text-xl bg-gray-50">
                        <td className="py-5 pl-10 text-left">Projects</td>
                        <td>3/mo</td>
                        <td>Unlimited</td>
                        <td>Unlimited</td>
                        <td>Unlimited</td>
                        <td>Unlimited</td>
                        </tr>
                        <tr className="text-xl">
                        <td className="py-5 pl-10 text-left">Video chat</td>
                        <td>
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="#1F40FF"></path>
                            </svg>
                        </td>
                        <td>
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="#1F40FF"></path>
                            </svg>
                        </td>
                        <td>
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="#1F40FF"></path>
                            </svg>
                        </td>
                        <td>
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="#1F40FF"></path>
                            </svg>
                        </td>
                        <td>
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="#1F40FF"></path>
                            </svg>
                        </td>
                        </tr>
                        <tr className="text-xl bg-gray-50">
                        <td className="py-5 pl-10 text-left">Realt-Time Collaboration</td>
                        <td>
                            <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1.35" x2="16" y2="1.35" stroke="#1F40FF" strokeWidth="1.3"></line></svg>
                        </td>
                        <td>
                            <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1.35" x2="16" y2="1.35" stroke="#1F40FF" strokeWidth="1.3"></line></svg>
                        </td>
                        <td>
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="#1F40FF"></path>
                            </svg>
                        </td>
                        <td>
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="#1F40FF"></path>
                            </svg>
                        </td>
                        <td>
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="#1F40FF"></path>
                            </svg>
                        </td>
                        </tr>
                        <tr className="text-xl">
                        <td className="py-5 pl-10 text-left">Support</td>
                        <td>
                            <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1.35" x2="16" y2="1.35" stroke="#1F40FF" strokeWidth="1.3"></line></svg>
                        </td>
                        <td>
                            <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1.35" x2="16" y2="1.35" stroke="#1F40FF" strokeWidth="1.3"></line></svg>
                        </td>
                        <td>
                            <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1.35" x2="16" y2="1.35" stroke="#1F40FF" strokeWidth="1.3"></line></svg>
                        </td>
                        <td>
                            <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1.35" x2="16" y2="1.35" stroke="#1F40FF" strokeWidth="1.3"></line></svg>
                        </td>
                        <td>
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="#1F40FF"></path>
                            </svg>
                        </td>
                        </tr>
                        <tr className="text-xl">
                            <td className="py-5 pl-10 text-left">Support</td>
                            <td>
                            <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1.35" x2="16" y2="1.35" stroke="#1F40FF" strokeWidth="1.3"></line></svg>
                            </td>
                            <td>
                            <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1.35" x2="16" y2="1.35" stroke="#1F40FF" strokeWidth="1.3"></line></svg>
                            </td>
                            <td>
                            <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1.35" x2="16" y2="1.35" stroke="#1F40FF" strokeWidth="1.3"></line></svg>
                            </td>
                            <td>
                            <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1.35" x2="16" y2="1.35" stroke="#1F40FF" strokeWidth="1.3"></line></svg>
                            </td>
                            <td>
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="#1F40FF"></path>
                            </svg>
                            </td>
                        </tr>
                        <tr className="text-xl">
                            <td className="py-5 pl-10 text-left">Support</td>
                            <td>
                            <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1.35" x2="16" y2="1.35" stroke="#1F40FF" strokeWidth="1.3"></line></svg>
                            </td>
                            <td>
                            <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1.35" x2="16" y2="1.35" stroke="#1F40FF" strokeWidth="1.3"></line></svg>
                            </td>
                            <td>
                            <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1.35" x2="16" y2="1.35" stroke="#1F40FF" strokeWidth="1.3"></line></svg>
                            </td>
                            <td>
                            <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1.35" x2="16" y2="1.35" stroke="#1F40FF" strokeWidth="1.3"></line></svg>
                            </td>
                            <td>
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="#1F40FF"></path>
                            </svg>
                            </td>
                        </tr>
                        <tr className="text-xl bg-gray-50">
                            <td className="py-5 pl-10 text-left">Number of Team Members</td>
                            <td>5</td>
                            <td>20</td>
                            <td>200+</td>
                            <td>Unlimited</td>
                            <td>Unlimited</td>
                        </tr>
                        <tr className="text-xl">
                            <td className="py-5 pl-10 text-left">Users</td>
                            <td>3</td>
                            <td>10</td>
                            <td>50+</td>
                            <td>100+</td>
                            <td>Unlimited</td>
                        </tr>
                        <tr className="text-xl bg-gray-50">
                            <td className="py-5 pl-10 text-left">Projects</td>
                            <td>3/mo</td>
                            <td>Unlimited</td>
                            <td>Unlimited</td>
                            <td>Unlimited</td>
                            <td>Unlimited</td>
                        </tr>
                        <tr className="text-xl">
                            <td className="py-5 pl-10 text-left">Video chat</td>
                            <td>
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="#1F40FF"></path>
                            </svg>
                            </td>
                            <td>
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="#1F40FF"></path>
                            </svg>
                            </td>
                            <td>
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="#1F40FF"></path>
                            </svg>
                            </td>
                            <td>
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="#1F40FF"></path>
                            </svg>
                            </td>
                            <td>
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="#1F40FF"></path>
                            </svg>
                            </td>
                        </tr>
                        <tr className="text-xl bg-gray-50">
                            <td className="py-5 pl-10 text-left">Realt-Time Collaboration</td>
                            <td>
                            <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1.35" x2="16" y2="1.35" stroke="#1F40FF" strokeWidth="1.3"></line></svg>
                            </td>
                            <td>
                            <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1.35" x2="16" y2="1.35" stroke="#1F40FF" strokeWidth="1.3"></line></svg>
                            </td>
                            <td>
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="#1F40FF"></path>
                            </svg>
                            </td>
                            <td>
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="#1F40FF"></path>
                            </svg>
                            </td>
                            <td>
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="#1F40FF"></path>
                            </svg>
                            </td>
                        </tr>
                        <tr className="text-xl">
                            <td className="py-5 pl-10 text-left">Support</td>
                            <td>
                            <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1.35" x2="16" y2="1.35" stroke="#1F40FF" strokeWidth="1.3"></line></svg>
                            </td>
                            <td>
                            <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1.35" x2="16" y2="1.35" stroke="#1F40FF" strokeWidth="1.3"></line></svg>
                            </td>
                            <td>
                            <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1.35" x2="16" y2="1.35" stroke="#1F40FF" strokeWidth="1.3"></line></svg>
                            </td>
                            <td>
                            <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1.35" x2="16" y2="1.35" stroke="#1F40FF" strokeWidth="1.3"></line></svg>
                            </td>
                            <td>
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="#1F40FF"></path>
                            </svg>
                            </td>
                        </tr>
                        <tr className="text-xl">
                            <td className="py-5 pl-10 text-left">Support</td>
                            <td>
                                <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1.35" x2="16" y2="1.35" stroke="#1F40FF" strokeWidth="1.3"></line></svg>
                            </td>
                            <td>
                                <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1.35" x2="16" y2="1.35" stroke="#1F40FF" strokeWidth="1.3"></line></svg>
                            </td>
                            <td>
                                <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1.35" x2="16" y2="1.35" stroke="#1F40FF" strokeWidth="1.3"></line></svg>
                            </td>
                            <td>
                                <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1.35" x2="16" y2="1.35" stroke="#1F40FF" strokeWidth="1.3"></line></svg>
                            </td>
                            <td>
                                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="#1F40FF"></path>
                                </svg>
                            </td>
                            </tr>
                    </tbody>
                    </table>
                    <div className="flex justify-end">
                    <div className="max-w-xs mr-8 flex items-center">
                        <p className="mr-6 text-5xl font-bold text-black">
                        8%
                        
                        </p>
                        <p className="text-lg">The tell condimentum turpis lorem</p>
                    </div>
                    <div className="max-w-xs flex items-center">
                        <p className="mr-6 text-5xl font-bold text-black">20</p>
                        <p className="text-lg">A sad laoreet sit amet nec purus</p>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </Layout>
    )
}