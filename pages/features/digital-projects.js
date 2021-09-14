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
                    <h1 className="heading">The Ultimate Design Collection</h1>
                    <p className="subheading text-gray-500 pb-7">We&apos;ve handcrafted the ultimate design collection that we think you are going to love.</p>
                    <div className="flex flex items-center  w-full sm:w-auto sm:flex-row space-x-10">
                       <Link  href="#" passHref><a className="inline-block py-3 px-10 bg-black hover:bg-gray-300 hover:text-black shadow text-lg text-white font-bold rounded-l-xl rounded-t-xl transition duration-200 card-subheading">Get Started</a></Link>
                        <Link href="" passHref>
                        <a  className="flex py-3 px-8 bg-white hover:bg-gray-300 hover:text-black shadow text-lg font-bold rounded-l-xl rounded-t-xl transition duration-200 card-subheading">        
                                        <Image className=" w-6 h-6" src="/save-file.svg" alt="save file" width={15 } height={20 }/>
                                <span>&nbsp;Download Datasheet</span>
                        </a>
                        </Link>
                    </div>
                </div>

                <div className="hidden lg:block relative z-10 w-full h-full my-16 lg:my-0 lg:w-1/2">
                    <Image className="relative z-40 w-full h-full" src="https://cdn.devdojo.com/images/june2021/home-hero.png" alt="hero image" width={600 } height={420 }/>
                    <div className="box-content absolute inset-0 z-30 hidden scale-150 translate-x-40 translate-y-10 rounded-full w-80 lg:block h-80 xl:w-96 xl:h-96 bg-pink-50"></div>
                    <div className="absolute bottom-0 left-0 z-20 hidden -translate-x-3 -translate-y-12 rounded-full opacity-50 w-72 lg:block h-72 bg-yellow-50"></div>
                    <div className="absolute top-0 left-0 z-20 hidden -translate-x-12 -translate-y-12 rounded-full opacity-50 w-72 lg:block h-72 bg-blue-50"></div>
                </div>
            </div>
            </section>
            {/* <!-- Criss Cross Features--> */}
            <section className="py-10 bg-white">
            <div className="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
                <div className="relative">
                    <h2 className="w-full card-heading font-bold text-center sm:text-4xl md:text-5xl"> Level Up Your Designs</h2>
                    <p className="w-full py-8 mx-auto -mt-2 card-subheading text-center text-gray-700 intro sm:max-w-3xl">Add some nice touches to your interface with our latest designs, components, and templates. We&apos;ve crafted a beautiful user experience that your visitors will love. </p>
                </div>
                <div className="flex mb-8 animated fadeIn space-x-20">
                    <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 w-1/2 sm:pr-16">
                        <p className="mb-2 tiny-subheading font-semibold leading-none text-left text-indigo-600 uppercase">Drag-n-drop design</p>
                        <h3 className="mt-2 card-heading sm:text-left md:text-4xl">Design Made Easy</h3>
                        <p className="mt-5 card-subheading text-gray-700 text md:text-left">Crafting your user experience has never been easier, with our intuitive drag&apos;n drop interface you will be creating beatiful designs in no time.</p>
                    </div>
                     <div className="flex items-center mb-8 w-1/2 sm:order-last">
                        <div className="relative" style={{zIndex: 0}}>
                            <div className="rounded-lg shadow-xl"><Image  src="https://cdn.devdojo.com/images/december2020/dashboard-011.png" alt="" width={500} height={400}  /></div>
                            <div className="hidden md:block absolute" style={{top:'2rem', right: '-3rem', zIndex: -1}}><Image  src="/features/bullets-gray-left.svg" alt="" layout="fixed" width={170 } height={140 }/></div>
                            <div className="hidden md:block absolute" style={{bottom:'2.5rem', left: '-5.5rem', zIndex: -1}}><Image  src="/features/bullets-green-right.svg" alt="" width={170 } height={140 }/></div>

                        </div>
                    </div>    
                </div>
                <div className="flex space-x-20 mb-8 animated fadeIn sm:flex-row">
                    <div className="relative flex items-center mb-8 w-1/2" >
                        <div className="absolute top-0 -left-16 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl"></div>
                        <div className="absolute top-0 -right-3 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl"></div>
                        <div className="absolute -bottom-16 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl"></div>
                                <div className=" relative rounded-lg shadow-xl">
                        <Image  src="https://cdn.devdojo.com/images/december2020/dashboard-04.png" alt="" width={500} height={400} />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 w-1/2 sm:pl-16">
                        <p className="mb-2 tiny-subheading font-semibold leading-none text-left text-indigo-600 uppercase">know your data</p>
                        <h3 className="mt-2 card-heading sm:text-left md:text-4xl">Optimized For Conversions</h3>
                        <p className="mt-5 card-subheading text-gray-700 text md:text-left">Backed by data, these templates have been crafted for ultimate optimization. Now, converting your visitors into customers is easier than ever before.</p>
                    </div>
                </div>
                <div className="flex space-x-20 mb-8 animated fadeIn sm:flex-row">
                 
                    <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 w-1/2 sm:pr-16">
                        <p className="mb-2 tiny-subheading font-semibold leading-none text-left text-indigo-600 uppercase">Easy to customize</p>
                        <h3 className="mt-2 card-heading sm:text-left md:text-4xl">Make It Your Own</h3>
                        <p className="mt-5 card-subheading text-gray-700 text md:text-left">All templates and components are fully customizable. You can use these templates to tell your personal story and convey your message.</p>
                    </div>
                    <div className="flex items-center mb-8 w-1/2">
                        <Image className="rounded-lg shadow-xl" src="https://cdn.devdojo.com/images/december2020/dashboard-03.png" alt="" width={500} height={400}/>
                    </div>
                </div>
            </div>
            </section>
            {/* <!--Different Roles--> */}
            <section className="text-black body-font bg-project-secondary">
                <div className="px-5 py-10 mx-auto flex flex-wrap flex-col">
                    <h2 className="mb-5 card-heading font-bold text-center md:text-4xl">Find Information Specific to your Role</h2>
                <div className="flex w-1/2 mx-auto flex-wrap mb-5">
                            <Link href="" passHref>
                                <a className="sm:px-6 py-3 w-1/4 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg><span className="tiny-subheading">Project Manager</span>
                        </a>
                    </Link>
                            <Link href="" passHref>
                                <a className="sm:px-6 py-3 w-1/4 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg><span className="tiny-subheading">Consultant</span>
                        </a>
                    </Link>
                            <Link href="" passHref>
                                <a className="sm:px-6 py-3 w-1/4 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                            <circle cx="12" cy="5" r="3"></circle>
                            <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                        </svg><span className="tiny-subheading">CEO</span>
                        </a>
                    </Link>
                            <Link href="" passHref>
                                <a className="sm:px-6 py-3 w-1/4 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg><span className="tiny-subheading">Basis Consultant</span>
                        </a>
                    </Link>
                </div>
                <div className="w-1/3 block mx-auto mb-5 object-cover object-center rounded">
                        <Image  alt="hero" src="https://dummyimage.com/720x600" width={500} height={400} />
                </div>
                <div className="flex flex-col text-center w-full">
                    <h1 className="tiny-heading title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed tiny-subheading">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven&apos;t heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                </div>
                </div>
            </section>
            {/* <!-- Customer Stats--> */}
            <section className="py-5 2xl:py-10 bg-black">
                <div className="container px-4 mx-auto">
                <div>
                    <div className="flex flex-wrap ">
                    <div className="w-full md:w-1/2 lg:w-1/4 px-6 lg:px-14 mb-16 lg:mb-0">
                        <div className="relative flex items-center justify-center mb-10 w-20 h-20">
                        <div className="absolute inset-0 w-full h-full"><Image  src="/features/circle-chart.svg" alt="" width={115 } height={120 }/></div>
                        <p className="text-2xl font-bold text-white">
                            <span>8</span>
                            <span className="text-base">%</span>
                        </p>
                        </div>
                        <div className="py-px mb-2 bg-gray-400"></div>
                        <h3 className=" mb-8 card-heading font-bold  text-white">New tools</h3>
                        <p className="card-subheading text-gray-200">The brown me quam, sagittis porttitor lorem vel, commodo fringilla nisl.</p>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 px-6 lg:px-14 mb-16 lg:mb-0">
                        <div className="relative flex items-center justify-center mb-10 w-20 h-20">
                        <div className="absolute inset-0 w-full h-full"><Image  src="/features/circle-chart-purple.svg" alt="" width={115 } height={120 }/></div>
                        <p className="text-2xl font-bold text-white">
                            <span>45</span>
                            <span className="text-base">%</span>
                        </p>
                        </div>
                        <div className="py-px mb-2  bg-gray-400"></div>
                        <h3 className=" mb-8 card-heading font-bold  text-white">Workshops</h3>
                        <p className="card-subheading text-gray-200">It’s over, maecenas tincidunt malesuada dolor sit amet malesuada.</p>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 px-6 lg:px-14 mb-16 md:mb-0">
                        <div className="relative flex items-center justify-center mb-10 w-20 h-20">
                        <div className="absolute inset-0 w-full h-full"><Image  src="/features/circle-chart-green.svg" alt="" width={115 } height={120 }/></div>
                        <p className="text-2xl font-bold text-white">
                            <span>5</span>
                            <span className="text-base">/6</span>
                        </p>
                        </div>
                        <div className="py-px mb-2 bg-gray-400"></div>
                        <h3 className="mb-8 card-heading font-bold  text-white">Meetings</h3>
                        <p className="card-subheading text-gray-200">The time, this accumsan augue, posuere posuere elit lorem.</p>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 px-6 lg:px-14">
                        <div className="relative flex items-center justify-center mb-10 w-20 h-20">
                        <div className="absolute inset-0 w-full h-full"><Image  src="/features/circle-chart-pink.svg" alt="" width={115 } height={120 }/></div>
                        <p className="text-2xl font-bold text-white">
                            <span>79</span>
                            <span className="text-base">%</span>
                        </p>
                        </div>
                        <div className="py-px mb-2 bg-gray-400"></div>
                        <h3 className="mb-8 card-heading font-bold  text-white">Webinars</h3>
                        <p className="card-subheading text-gray-200">Again and again vehicula libero at nibh volutpat lacinia non sed you see.</p>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            {/* <!-- What do you Get from KTern.AI Section --> */}
            <section className="py-10 bg-project-secondary">
                <div className="container items-center max-w-6xl px-4 px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
                <div className="flex flex-wrap items-center -mx-3">
                    <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
                    <div className="w-full lg:max-w-md">
                        <h2 className="mb-4 card-heading ">Jam-packed with all the tools you need to succeed!</h2>
                        <p className="mb-4 card-subheading  text-gray-400 xl:mb-6">It&apos;s never been easier to build a business of your own. Our tools will help you with the following:</p>
                        <ul>
                        <li className="flex items-center py-2 space-x-4 xl:py-3">
                            <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                            <span className="tiny-heading text-gray-500">Faster Processing and Delivery</span>
                        </li>
                        <li className="flex items-center py-2 space-x-4 xl:py-3">
                            <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                            <span className="tiny-heading text-gray-500">Out of the Box Tracking and Monitoring</span>
                        </li>
                        <li className="flex items-center py-2 space-x-4 xl:py-3">
                            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                            <span className="tiny-heading text-gray-500">100% Protection and Security for Your App</span>
                        </li>
                        </ul>
                    </div>
                    </div>
                            <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
                                <Image className="mx-auto sm:max-w-sm lg:max-w-full" src="https://cdn.devdojo.com/images/november2020/feature-graphic.png" alt="feature image" width={415 } height={320 } layout="responsive"/></div>
                </div>
                </div>
            </section> 

            {/* <!--Faq Section--> */}
            <section className="py-20">
                    <div className="container mx-auto w-1/2 flex-col space-y-4">
                        <h2 className="mb-2 card-heading font-bold text-center md:text-3xl mb-10">Frequently Asked Questions</h2>
                    <details className="relative overflow-hidden border-2 border-gray-200 rounded-lg select-none hover:bg-white">
                        <summary  className="font-bold flex items-center justify-between text-lg font-medium text-gray-700 cursor-pointer sm:text-xl px-6 py-6 hover:text-gray-800" style={{ listStyle: 'none' }}>
                            <span className="card-subheading">Where do I upgrade my account?</span>
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
                        <summary  className="font-bold flex items-center justify-between text-lg font-medium text-gray-700 cursor-pointer sm:text-xl px-6 py-6 hover:text-gray-800" style={{ listStyle: 'none' }}>
                            <span className="card-subheading">Where do I upgrade my account?</span>
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
                        <summary  className="font-bold flex items-center justify-between text-lg font-medium text-gray-700 cursor-pointer sm:text-xl px-6 py-6 hover:text-gray-800" style={{ listStyle: 'none' }}>
                            <span className="card-subheading">Where do I upgrade my account?</span>
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
    
         {/* <!-- Related Resources  --> */ }
            <section className="w-full py-8 bg-white sm:py-12 md:py-16">
            <div className="px-10 mx-auto max-w-7xl">
                <div className="flex items-center justify-between w-full pb-5 mb-8 border-b border-gray-200">
                    <h2 className="card-heading font-bold text-gray-800">Related Resources</h2>
                            <Link href="#_" passHref>
                                <a className="flex items-center text-base font-semibold text-blue-400 hover:text-blue-500 group">
                        <span className="tiny-heading">View More Posts</span>
                        <svg className="w-4 h-4 mt-0.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        </a>
                    </Link>
                </div>

                <div className="grid grid-cols-12 gap-6">
                    <div className="relative col-span-12 mb-10 space-y-4 md:col-span-6 lg:col-span-4">
                        <Link href="#_" passHref>
                        <a className="relative block w-full h-64 overflow-hidden rounded">        
                            <Image className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105"  src="https://cdn.devdojo.com/images/may2021/blog-image-01.jpg" alt="resource" layout="fill"/>
                        </a>    
                        </Link>
                        <p className="tiny-subheading font-bold text-gray-400 uppercase">Resources</p>
                        <Link href="#_" passHref><a className="block card-subheading  font-semibold leading-tight text-gray-700 hover:text-gray-900">4 Simple Tips for Leveraging the Power of Social Media</a></Link>
                    </div>

                    <div className="relative col-span-12 mb-10 space-y-4 md:col-span-6 lg:col-span-4">
                        <Link href="#_" passHref>
                            <a  className="relative block w-full h-64 overflow-hidden rounded">
                                    <Image className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="https://cdn.devdojo.com/images/may2021/blog-image-02.png" alt="resource" layout="fill"/>
                            </a>
                        </Link>
                        <p className="tiny-subheading font-bold text-gray-400 uppercase">Resources</p>
                        <Link href="#_" passHref ><a className="block card-subheading  font-semibold leading-tight text-gray-700 hover:text-gray-900">The Best Tips for Creating Engaging and Compelling Photos</a></Link>
                    </div>

                    <div className="relative col-span-12 mb-10 space-y-4 md:col-span-6 lg:col-span-4">
                        <Link href="#_" passHref>
                            <a  className="relative block w-full h-64 overflow-hidden rounded">
                                    <Image className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="https://cdn.devdojo.com/images/may2021/blog-image-03.jpg" alt="resource" layout="fill"/>
                            </a>
                        </Link>
                        <p className="tiny-subheading font-bold text-gray-400 uppercase">Resources</p>
                        <Link href="#_" passHref><a className="block card-subheading  font-semibold leading-tight text-gray-700 hover:text-gray-900">How to Get the Most Engagement from your Online Resources</a></Link>
                    </div>
                </div>
                </div>
                </section>
            {/* <!-- Footer CTA Features Page --> */}
             <section className="bg-white">
                <div className="px-8 py-8 mx-auto sm:py-10 lg:py-20 max-w-7xl">
                <div className="relative py-6 overflow-hidden rounded-lg bg-gradient-to-r from-black to-project-400 lg:py-12 md:px-6 lg:p-16 lg:flex lg:items-center lg:justify-between md:shadow-xl md:bg-purple-1000">
                <div className="absolute top-0 right-0 hidden w-full -mt-20 transform rotate-45 translate-x-1/2 bg-white sm:block h-96 opacity-5"></div>
                <div className="absolute top-0 left-0 hidden w-full -mt-20 transform rotate-45 -translate-x-1/2 bg-white sm:block h-96 opacity-5"></div>
                <div className="relative p-6 rounded-lg md:p-0 md:pb-4">
                <h2 className="card-heading  font-bold leading-9 tracking-tight text-white sm:text-4xl sm:leading-10">Get started with your DXaaS Journey</h2>
                <p className="w-full mt-5 card-subheading text-white ">Start your 15-day free trial. No credit card required. No strings attached.</p>
                </div>
                <div className="relative flex flex-col items-center w-full px-6 space-y-5 md:space-x-5 md:space-y-0 md:flex-row md:w-auto lg:flex-shrink-0 md:px-0">
                <Link  href="/pricing" passHref><a className="  inline-block py-3 px-10 bg-black hover:bg-gray-100 hover:text-black shadow tiny-heading  uppercase text-white font-bold rounded-l-xl rounded-t-xl transition duration-200 ">See Pricing</a></Link>
                <Link  href="#" passHref><a className="  inline-block py-3 px-10 bg-white hover:bg-gray-50 hover:text-black shadow tiny-heading uppercase text-black font-bold rounded-l-xl rounded-t-xl transition duration-200 ">Try it free</a></Link>
                </div>
                </div>
                </div>
            </section> 
            </Layout>
            </>
    )
}