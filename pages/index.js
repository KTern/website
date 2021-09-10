import Head from 'next/head'
import Image from "next/image";
import Link from "next/link";
import Card from "../component/card"
import Layout from "../component/Layout";

export default function Home () {
    return (
        <div >
            <Layout>
                {/* <!-- Hero Section --> */}
                <section className=" pt-20  relative overflow-hidden bg-white">

                    <div className=" bg-white  h-full" >
                      
                        <div className="xl:pb-80  bg-contain bg-no-repeat bg-bottom text-center xl:bg-hero bg-50% " >
                            <h2 className="mt-4 top-0 mb-2 font-bold  heading">All-in-one digital workplace for your SAP Digital Transformations</h2>
                            <p className="p-6 mb-6 max-w-2xl mx-auto mb-12 pr-10  subheading ">Powered by SAP Tribal Knowledge you can accelerate, optimize, manage and govern all your SAP Projects</p>

                            <Link className="mb-4 inline-block mx-5   shadow-md py-3 px-14 bg-white-500  hover:bg-gray-300   text-black  font-semibold rounded-l-xl rounded-t-xl transition duration-200 uppercase tiny-heading" target="_blank" rel="noopener noreferrer" href="https://app.ktern.com">Free Trial</Link>
                            <Link className="xl:mb-60 inline-block py-3 px-10 bg-black hover:bg-gray-300 hover:text-black shadow  text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200 uppercase tiny-heading" href="/contact">Contact Sales</Link>
                          
                        </div>
                      
                    </div>
                </section>
                {/* <!--/ Hero Section --> */}
                {/* <!-- Customer logos Section --> */}
                <section className="p-0 " >
                    <div className="container px-4 mx-auto ">

                        <p className=" text-center font-bold text-xl text-gray-500 uppercase card-heading">Trusted by brand all over the world</p>
                        <div className="p-8 md:p-4 flex flex-wrap -m-4 justify-center items-center ">
                            <div className=" w-full md:w-1/3 lg:w-1/6 lg:p-4">

                                <Image className=" w-auto lg:w-100" src="data:image/png;base64,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"
                                    alt="" width={150} height={150} />

                            </div>
                            <div className="w-full md:w-1/3 lg:w-1/6 lg:p-4">

                                <Image className="w-auto lg:w-100" src="data:image/png;base64,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"
                                    alt=""width={150} height={150} />

                            </div>
                            <div className="w-full md:w-1/3 lg:w-1/6 lg:p-4">

                                <Image className="w-auto lg:w-100" src="data:image/png;base64,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"
                                    alt="" width={150} height={150}/>

                            </div>
                            <div className="w-full md:w-1/3 lg:w-1/6 lg:p-4">

                                <Image className="w-auto lg:w-100" src="data:image/png;base64,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"
                                    alt="" width={150} height={150}/>

                            </div>
                            <div className="w-full md:w-1/3 lg:w-1/6 lg:p-4">

                                <Image className="w-auto lg:w-100" src="data:image/png;base64,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"
                                    alt="" width={150} height={150}/>

                            </div>
                            <div className="w-full md:w-1/3 lg:w-1/6 lg:p-4">

                                <Image className="w-auto lg:w-100" src="data:image/png;base64,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"
                                    alt="" width={150} height={150}/>

                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- /Customer logos Section --> */}
                {/* <!-- Streams Section --> */}
                <section className="pt-10 px-10 bg-white">
                    <div className="flex my-10 mx-10 ">
                        <div className="flex-row flex-wrap w-full xl:w-1/3  ">
                            <div className=" w-full lg:mx-10 group p-2 mb-4">
                                <div className="flex flex-wrap w-full ">
                                    <div className=" h-10 h-full lg:h-20 w-20 mx-4 my-auto">
                                        <Image className="w-full h-full object-cover " src="/assets/icons/projects.png" alt="" width={150} height={150}/>
                                    </div>
                                    <div className="relative  xl:w-2/3 shadow-md p-2 bg-project-secondary rounded-2xl">
                                        <h2 className="tiny-heading">Digital Projects</h2>
                                        <p className=" leading-relaxed tiny-subheading">Gain control of your SAP projects </p>
                                        <div className="icon-link transition-opacity duration-200 group-hover:opacity-50 icon-link--black">
                                            <Link href="/products/digital-projects" className="icon-link__link">
                                                <div className="icon-link__label">
                                                    <span className="font-bold tiny-subheading">Learn more&nbsp;</span>
                                            
                                                </div>
                                
                                            </Link>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className=" w-full lg:mx-10 group p-2  mb-4">
                                <div className=" flex flex-wrap ">

                                    <div className="h-10 h-full lg:h-20 w-20 mx-4 my-auto">
                                        <Image className="w-full h-full object-cover " src="/assets/icons/process.svg" alt="" width={150} height={150}/>
                                    </div>
                                    <div className=" xl:w-2/3 shadow p-2 bg-process-secondary rounded-2xl">
                                        <h2 className="tiny-heading">Digital Process</h2>
                                        <p className="tiny-subheading leading-relaxed">Ensure process control and governance</p>
                                        <div className="icon-link transition-opacity duration-200 group-hover:opacity-50 icon-link--black">
                                            <Link href="/products/digital-projects" className="icon-link__link">
                                                <div className="icon-link__label">
                                                    <span className="font-bold tiny-subheading">Learn more&nbsp;</span>
                                            
                                                </div>
                                
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" w-full lg:mx-10 group p-2 mb-4">
                                <div className=" flex flex-wrap ">

                                    <div className="h-10 h-full lg:h-20 w-20 mx-4 my-auto ">
                                        <Image className="w-full h-full object-cover " src="/assets/icons/labs.png" alt="" width={150} height={150} />
                                    </div>

                                    <div className="xl:w-2/3 shadow p-2 bg-labs-secondary rounded-2xl">
                                        <h2 className="tiny-heading">Digital Labs</h2>
                                        <p className="tiny-subheading leading-relaxed">Streamline Functional Testing Cycles
                                        </p>
                                        <div className="icon-link transition-opacity duration-200 group-hover:opacity-50 icon-link--black">
                                            <Link href="/products/digital-projects" className="icon-link__link">
                                                <div className="icon-link__label">
                                                    <span className="font-bold tiny-subheading">Learn more&nbsp;</span>
                                            
                                                </div>
                                
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" w-full lg:mx-10 group p-2 mb-4">
                                <div className=" flex flex-wrap ">

                                    <div className="h-10 h-full lg:h-20 w-20 mx-4 my-auto">
                                        <Image className="w-full h-full object-cover " src="/assets/icons/maps.png" alt="" width={150} height={150}/>
                                    </div>

                                    <div className=" xl:w-2/3 shadow p-2 bg-maps-secondary rounded-2xl">
                                        <h2 className="tiny-heading">Digital Maps</h2>
                                        <p className="tiny-subheading leading-relaxed">Analyse SAP landscape </p>
                                        <div className="icon-link transition-opacity duration-200 group-hover:opacity-50 icon-link--black">
                                            <Link href="/products/digital-projects" className="icon-link__link">
                                                <div className="icon-link__label">
                                                    <span className="font-bold tiny-subheading">Learn more&nbsp;</span>
                                            
                                                </div>
                                
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" w-full lg:mx-10  group p-2 mb-4">
                                <div className=" flex flex-wrap ">

                                    <div className="h-full lg:h-20 w-20 mx-4 my-auto">
                                        <Image className="w-full h-full object-cover " src="/assets/icons/mines.png" alt="" width={150} height={150}/>
                                    </div>

                                    <div className=" xl:w-2/3 shadow p-2 bg-mines-secondary rounded-2xl">
                                        <h2 className="tiny-heading">Digital mines</h2>
                                        <p className="tiny-subheading leading-relaxed">Ensure ROI on SAP S/4HANA investment </p>
                                        <div className="icon-link transition-opacity duration-200 group-hover:opacity-50 icon-link--black">
                                            <Link href="/products/digital-projects" className="icon-link__link">
                                                <div className="icon-link__label">
                                                    <span className="font-bold tiny-subheadng">Learn more&nbsp;</span>
                                            
                                                </div>
                                
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Image className="hidden xl:block my-auto h-full w-2/3" src="/assets/right-stream.svg" alt="" width={150} height={150}/>
                    </div>
                </section>
                {/* <!-- /Streams Section --> */}
                {/* <!-- Redirect content Section --> */}
                <section className="xl:px-20">
                    <div className="p-4 md:p-24 flex flex-wrap mx-auto">
                        <div className="flex flex-col w-full  mb-5 md:w-1/2 md:mb-0">
                            <Link  href="/pricing">
                                <Card data={{image:'https://a.storyblok.com/f/111801/x/a0151334d0/pricing.svg',heading:'Pricing Plans', description:'Find a plan that works for you.',class:"relative shadow flex flex-col flex-auto px-5 py-8  overflow-hidden  md:px-8 group border-2 hover:border-black  bg-gray-50"}}/>
                               
                            </Link>
                        </div>
                        <div className="p-1 md:px-8 space-y-5 flex flex-col w-full  md:w-1/2">
                            <Link  href="">
                                <Card data={{image:'https://a.storyblok.com/f/111801/x/ea0d65cc0b/features.svg',heading:'Features', description:'Get to know more up close.',class:"relative shadow flex flex-auto p-5  group overflow-hidden md:p-8 false border-2 hover:border-black"}}/>
                            </Link>
                            <Link  href="/resources">
                                <Card data={{ image: 'https://a.storyblok.com/f/111801/x/c0b79e9d11/integrations.svg', heading: 'Resources', description: 'Get to know more up close.', class:"relative shadow flex flex-auto p-5  group overflow-hidden md:p-8 false border-2 hover:border-black"}}/>
                            </Link>
                        </div>
                    </div>

                </section>
                {/* <!-- /Redirect content Section --> */}
                {/* <!-- Customer Success Story --> */}
                <section className="py-10 bg-black text-white">
                    <div className=" mx-auto ">
                        <div className=" md:divide-x flex flex-wrap justify-center space-x-10  rounded-lg  ">
                            <div className=" py-4 w-full md:w-1/4 lg:w-1/4 p-10 md:py-10  ">
                                <span className="flex  justify-center w-14 h-14  rounded-full">
                                    <Image src="/assets/logo.png" alt="" width={150} height={150} />
                                </span>
                                <span className="card-heading">$33,261</span>
                                <h3 className="mb-4 card-subheading">saved in SAP migration costs</h3>
                                <Link href="/products/digital-projects" className="icon-link__link">
                                    <div className="icon-link__label">
                                        <span className="font-bold text-white tiny-heading">Learn more&nbsp;</span>
                                            
                                    </div>
                                
                                </Link>
                            </div>
                            <div className=" py-4 w-full md:w-1/4 lg:w-1/4 md:p-10   ">
                                <span className="flex  justify-center w-14 h-14  rounded-full">
                                    <Image src="/assets/logo.png" alt="" width={150} height={150}/>
                                </span>
                                <span className="card-heading">$33,261</span>
                                <h3 className="mb-4 card-subheading">saved in SAP migration costs</h3>
                                <Link href="/products/digital-projects" className="icon-link__link">
                                    <div className="icon-link__label">
                                        <span className="font-bold text-white tiny-heading">Learn more&nbsp;</span>       
                                    </div>
                                </Link>
                            </div>
                            <div className="py-4 w-full md:w-1/4 lg:w-1/4 md:p-10   ">
                                <span className="flex  justify-center w-14 h-14  rounded-full">
                                    <Image src="/assets/logo.png" alt="" width={150} height={150}/>
                                </span>
                                <span className="card-heading">$33,261</span>
                                <h3 className="mb-4 card-subheading">saved in SAP migration costs</h3>
                                <Link href="/products/digital-projects" className="icon-link__link">
                                    <div className="icon-link__label">
                                        <span className="font-bold text-white tiny-heading">Learn more&nbsp;</span>
                                            
                                    </div>
                                
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- /Customer Success Story --> */}
                {/* <!-- Why Ktern --> */}
                <section className="md:px-20">
                    <div className="flex justify-center items-center   mx-auto space-x-10 ">
                        <div className="flex flex-wrap justify-center items-center">
                            <div className="p-6 w-full md:w-1/2 lg:w-1/4  md:mb-8 mt-8 justify-center items-center ">
                                <span className="flex items-center justify-center w-14 h-14 mb-8  rounded-full">
                                    <Image src="https://static.thenounproject.com/png/925249-200.png" alt="" width={150} height={150}/>
                                </span>
                                <h3 className="mb-4 custom-card-heading">One Workspace for All SAP Initiatives </h3>
                                <p className="custom-card-subheading text-gray-500">Simplify your IT Landscape by eliminating disparate applications which you might use for project management, collaboration, testing and process optimization  </p>
                            </div>
                            <div className="p-6 w-full md:w-1/2 lg:w-1/4  md:mb-8 md:mt-8 justify-center items-center ">
                                <span className="flex items-center justify-center w-14 h-14 mb-8 rounded-full">
                                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPlFtvMeuE65QVk7aARCnGZ6IrKur4L5D8cVk4gJCwkCGw6NbYt59RknTDlUe40zsIISA&usqp=CAU" alt="" width={150} height={150} />
                                </span>
                                <h3 className="mb-4 custom-card-heading">Reduce Testing Efforts by 85% </h3>
                                <p className="custom-card-subheading text-gray-500">Leverage new-gen screen-based testing and RPA-based testing bots built on SAP Business APIs to reduce manual effort and accelerate SAP releases </p>
                            </div>
                            <div className="p-6 w-full md:w-1/2 lg:w-1/4  md:mb-8 md:mt-8 justify-center items-center ">
                                <span className="flex items-center justify-center w-14 h-14 mb-8 rounded-full">
                                    <Image src="https://cdn0.iconfinder.com/data/icons/business-and-finance-9-3/68/438-512.png" width={150} height={150} alt="" />
                                </span>
                                <h3 className="mb-4 custom-card-heading">Run efficient SAP investments designed for success </h3>
                                <p className="custom-card-subheading text-gray-500">Plan, execute, collaborate and govern each SAP investment from strategy building to task execution for streamlined and successful business operations  </p>
                            </div>
                            <div className="p-6 w-full md:w-1/2 lg:w-1/4  md:mb-8 md:mt-8 justify-center items-center">
                                <span className="flex items-center justify-center w-14 h-14 mb-8 rounded-full">
                                    <Image src="/assets/cloud.png" alt=""  width={150} height={150}/>
                                </span>
                                <h3 className="mb-4 custom-card-heading">Continuously optimize your SAP Business Processes </h3>
                                <p className="custom-card-subheading text-gray-500">Mine your existing business processes and optimize them with the inbuilt SAP Tribal Knowledge Base engine which encompasses decades worth of SAP business expertise </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- /Why Ktern --> */}
                {/* <!-- CTA Section --> */}
                <section className="relative py-5 2xl:py-5 bg-gray-700 overflow-hidden" style={{ backgroundColor: '#EAEDF2' }}>
                    {/* <Image className="hidden lg:block absolute top-0 right-0 left-50  h-100 w-100 -mt-32 -mr-72" src="/assets/circle.svg" alt="" /> */}
                    {/* <Image className="hidden lg:block absolute left-0 -mb-8 lg:ml-24" src="/assets/full-circle.svg" alt="" /> */}
                    <Image className="block absolute bottom-0 left-0 h-24 md:h-32 lg:h-72 lg:ml-24 -mb-8" src="/assets/five-stars.svg" alt="" width={150} height={150} />
                    {/* <Image className="block absolute bottom-0 left-0 h-128 w-128 -mb-96 -ml-24" src="/assets/circle.svg" alt="" /> */}
                    <div className="container px-3 mx-auto">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="my-10 text-4xl md:custom-heading ">Experience the Digital Workplace built for SAP Projects and Releases </h2>
                            <div className="max-w-md mx-auto pb-10">
                                <p className="mb-5 text-xl md:custom-subheading text-gray-800">Manage your entire SAP Digital Transformation from a single place</p>
                                <Link className="hidden mb-1 lg:inline-block py-2 px-10 bg-black hover:bg-gray-300 hover:text-black shadow text-white font-bold rounded-l-xl rounded-t-xl transition duration-200 uppercase tiny-heading" href="/contact">Start 14-day Free Trial</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}
