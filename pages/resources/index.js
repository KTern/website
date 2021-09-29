import Layout from "../../component/Layout";
import Image from "next/image";
import Link from "next/link";
export default function Resources () {
    return (
    <Layout>
            <section className="w-full py-20 bg-herogradient" >
            <div className="flex flex-col items-center px-12 mx-auto lg:flex-row">
                <div className="relative z-20 flex flex-col text-center items-center justify-center w-full h-full ">
                <p className="inline-block px-2 py-1 mb-5 font-medium hyperlink tracking-wider text-gray-900 uppercase bg-gray-200 rounded-full ">
                     Resources
                </p>
                    <h1 className="heading text-white "  >DXaaS Resource Center</h1>
                    <p className="subheading text-gray-100 pb-7">Digital Transformation is what we do. Get insights on DXaaS and SAP Transformations with our Transformation Success Stories, Videos, E-Books, Datasheets, Infographics and more.   </p>
                    <div className="flex flex-row">
                    
                    <Link   rel="noopener noreferrer" href="https://app.ktern.com"><a target="_blank" className=" inline-block mx-5   shadow-md py-3 px-14 bg-white  hover:bg-gray-300   text-black   rounded-r-xl rounded-b-xl transition duration-200 uppercase">Free Trial</a></Link>
                    <Link  href="/contact"><a className=" inline-block py-3 px-10 bg-black hover:bg-gray-300 hover:text-black shadow   text-white  rounded-r-xl rounded-b-xl transition duration-200 uppercase hyperlink">Contact Sales</a></Link>
                    </div>
                </div>

               
            </div>
            </section>
         
           <section className="container md:p-10 ">
               
                <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0 px-10">
                    {/* <!-- On demand Filter Options--> */}
                <div className="w-full md:w-1/5 px-4 mb-4  md:mb-0">
                    <form action="#" method="post" className="">
                            <div className="mb-6">
                                <h1 className="text-2xl mt-2 mb-2 leading-tight card-heading">Streams</h1>
                                <hr className="mb-2"/>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                <label htmlFor="vehicle1"> Digital Maps</label><br/>
                            
                            </div>
                            <div className="mb-6">
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                <label htmlFor="vehicle1"> Digital Process</label><br/>
                            </div>
                            <div className="mb-6">
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                <label htmlFor="vehicle1"> Digital Projects</label><br/>
                            </div>
                            <div className="mb-6">
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                <label htmlFor="vehicle1"> Digital Labs</label><br/>
                            </div>
                            <div className="mb-6">
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                <label htmlFor="vehicle1"> Digital Mines</label><br/>
                            </div>
                        </form>          
                    <form action="#" method="post" className="">
                            <div className="mb-6">
                                <h1 className="text-2xl mt-2 mb-2 leading-tight card-heading">Role</h1>
                                <hr className="mb-2"/>
                                <label>
                                <input type="checkbox" name="field-name" value="example value" />
                                <span className="ml-1">Project Manager</span>
                                </label>
                            </div>
                            <div className="mb-6">
                                <label>
                                <input type="checkbox" name="field-name" value="example value" />
                                <span className="ml-1">Test Manager</span>
                                </label>
                            </div>
                            <div className="mb-6">
                                <label>
                                <input type="checkbox" name="field-name" value="example value" />
                                <span className="ml-1">Tester</span>
                                </label>
                            </div>
                            <div className="mb-6">
                                <label>
                                <input type="checkbox" name="field-name" value="example value" />
                                <span className="ml-1">CEO/CIO/CXO/CTO</span>
                                </label>
                            </div>
                            <div className="mb-6">
                                <label>
                                <input type="checkbox" name="field-name" value="example value" />
                                <span className="ml-1">Consultant</span>
                                </label>
                            </div>
                        </form>  
                    </div>
                {/* <!-- On demand Webinar Card Display--> */}
           
                    <div className="w-full md:w-4/5 pl-20 mb-4 md:mb-0">
                        {/* Chips Section */}
                        <section className=" flex pb-10 items-center justify-end">
                          <input id="demo-2" type="search" placeholder="Search"/>
                        </section>
                        <section className="pb-10 ">
                            <div className="click-chip outline-green mr-3">E-books</div>
                            <div className="click-chip outline-green mr-3">White paper</div>
                            <div className="click-chip outline-green mr-3">Customer Success Story</div>
                            <div className="click-chip outline-green mr-3">Infographics</div>
                            <div className="click-chip outline-green mr-3">Datasheets</div>
                            <div className="click-chip outline-green mr-3">Product tour</div>
                            <div className="click-chip outline-green mr-3">Analyst Report</div>
                            <div className="click-chip outline-green mr-3">Best Practice guides</div>
                            <div className="click-chip outline-green mr-3">Presentations</div>
                        </section>
                        <div className="container mx-auto space-y-10">
                            <div className="grid grid-cols-12 col-span-12 gap-7">
                                <Link href="/resources/landing" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden shadow border rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black font-bold uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div className="block  w-80 h-60 relative transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/product/maps/maps_1.svg"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className="hyperlink mb-2 mt-2 font-bold text-gray-400 uppercase">White paper</p>
                                        <h2 className=" font-bold hyperlink">Landscape Assessment</h2>
                                        <p className="mb-2 hyperlink text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/resources/landing" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden shadow border rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black font-bold uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/product/maps/maps_3.svg"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className="hyperlink mb-2 mt-2 font-bold text-gray-400 uppercase">White paper</p>
                                        <h2 className=" font-bold hyperlink">Landscape Assessment</h2>
                                        <p className="mb-2 hyperlink text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/resources/landing" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden shadow border rounded-xl md:col-span-6 lg:col-span-4">
                                        <div className="z-20 bg-project-secondary text-black font-bold hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                            <span>Digital Projects</span>
                                        </div>
                                        <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                            <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/product/projects/project_scrum.svg"/>
                                        </div>
                                        <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                            <p className="hyperlink mb-2 mt-2 font-bold text-gray-400 uppercase">White paper</p>
                                            <h2 className=" font-bold hyperlink">Landscape Assessment</h2>
                                            <p className="mb-2 hyperlink text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                        </div>
                                    </a>
                                </Link>
                                <Link href="/resources/landing" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden shadow border rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-mines-secondary text-black font-bold hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Mines</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/product/mines/mines_1.svg"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className="hyperlink mb-2 mt-2 font-bold text-gray-400 uppercase">White paper</p>
                                        <h2 className=" font-bold hyperlink">Landscape Assessment</h2>
                                        <p className="mb-2 hyperlink text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/resources/landing" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden shadow border rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-labs-secondary text-black font-bold hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Labs</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/product/labs/labs_1.svg"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className="hyperlink mb-2 mt-2 font-bold text-gray-400 uppercase">White paper</p>
                                        <h2 className=" font-bold hyperlink">Landscape Assessment</h2>
                                        <p className="mb-2 hyperlink text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/resources/landing" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden shadow border rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-process-secondary text-black font-bold hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Process</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/product/process/process_1.svg"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className="hyperlink mb-2 mt-2 font-bold text-gray-400 uppercase">White paper</p>
                                        <h2 className=" font-bold hyperlink">Landscape Assessment</h2>
                                        <p className="mb-2 hyperlink text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                            </div>
                            <hr/>
                            <div className="grid grid-cols-12 col-span-12 gap-7">
                                <Link href="/resources/landing" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black font-bold uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/product/maps/maps_1.svg"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className=" ont-bold text-gray-400 uppercase">E-book</p>
                                        <h2 className=" font-bold hyperlink">Landscape Assessment</h2>
                                        <p className="mb-2 hyperlink text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/resources/landing" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black font-bold uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/product/maps/maps_3.svg"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className=" ont-bold text-gray-400 uppercase">E-book</p>
                                        <h2 className=" font-bold hyperlink">Landscape Assessment</h2>
                                        <p className="mb-2 hyperlink text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/resources/landing" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black font-bold uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/assets/icons/articles.png"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className=" ont-bold text-gray-400 uppercase">E-book</p>
                                        <h2 className=" font-bold hyperlink">Landscape Assessment</h2>
                                        <p className="mb-2 hyperlink text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/resources/landing" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black font-bold uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/assets/icons/articles.png"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className=" ont-bold text-gray-400 uppercase">E-book</p>
                                        <h2 className=" font-bold hyperlink">Landscape Assessment</h2>
                                        <p className="mb-2 hyperlink text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/resources/landing" passHref>
                                    <a  className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black font-bold uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/assets/icons/articles.png"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className=" ont-bold text-gray-400 uppercase">E-book</p>
                                        <h2 className=" font-bold hyperlink">Landscape Assessment</h2>
                                        <p className="mb-2 hyperlink text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/resources/landing" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black font-bold uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/assets/icons/articles.png"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className=" ont-bold text-gray-400 uppercase">E-book</p>
                                        <h2 className=" font-bold hyperlink">Landscape Assessment</h2>
                                        <p className="mb-2 hyperlink text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/resources/landing" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black font-bold uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/assets/icons/articles.png"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className=" ont-bold text-gray-400 uppercase">E-book</p>
                                        <h2 className=" font-bold hyperlink">Landscape Assessment</h2>
                                        <p className="mb-2 hyperlink text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/resources/landing" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black font-bold uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/assets/icons/articles.png"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className=" ont-bold text-gray-400 uppercase">E-book</p>
                                        <h2 className=" font-bold hyperlink">Landscape Assessment</h2>
                                        <p className="mb-2 hyperlink text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                        
                            </div>
                            <hr />
                            <div className="grid grid-cols-12 col-span-12 gap-7">
                                <Link href="/resources/landing" passHref>
                                    <a  className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black font-bold uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/assets/icons/articles.png"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className=" ont-bold text-gray-400 uppercase">Datasheets</p>
                                        <h2 className=" font-bold hyperlink">Landscape Assessment</h2>
                                        <p className="mb-2 hyperlink text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/resources/landing" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black font-bold uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/assets/icons/articles.png"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className=" ont-bold text-gray-400 uppercase">Datasheets</p>
                                        <h2 className=" font-bold hyperlink">Landscape Assessment</h2>
                                        <p className="mb-2 hyperlink text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/resources/landing" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black font-bold uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/assets/icons/articles.png"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className=" ont-bold text-gray-400 uppercase">Datasheets</p>
                                        <h2 className=" font-bold hyperlink">Landscape Assessment</h2>
                                        <p className="mb-2 hyperlink text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/resources/landing" passHref >
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black font-bold uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/assets/icons/articles.png"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className=" ont-bold text-gray-400 uppercase">Datasheets</p>
                                        <h2 className=" font-bold hyperlink">Landscape Assessment</h2>
                                        <p className="mb-2 hyperlink text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/resources/landing" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black font-bold uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/assets/icons/articles.png"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className=" ont-bold text-gray-400 uppercase">Datasheets</p>
                                        <h2 className=" font-bold hyperlink">Landscape Assessment</h2>
                                        <p className="mb-2 hyperlink text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/resources/landing" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black font-bold uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/assets/icons/articles.png"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className=" ont-bold text-gray-400 uppercase">Datasheets</p>
                                        <h2 className=" font-bold hyperlink">Landscape Assessment</h2>
                                        <p className="mb-2 hyperlink text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/resources/landing" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black font-bold uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/assets/icons/articles.png"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className=" ont-bold text-gray-400 uppercase">Datasheets</p>
                                        <h2 className=" font-bold hyperlink">Landscape Assessment</h2>
                                        <p className="mb-2 hyperlink text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/resources/landing" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black font-bold uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/assets/icons/articles.png"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className=" ont-bold text-gray-400 uppercase">Datasheets</p>
                                        <h2 className=" font-bold hyperlink">Landscape Assessment</h2>
                                        <p className="mb-2 hyperlink text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/resources/landing" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black font-bold uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/assets/icons/articles.png"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className=" ont-bold text-gray-400 uppercase">Datasheets</p>
                                        <h2 className=" font-bold hyperlink">Landscape Assessment</h2>
                                        <p className="mb-2 hyperlink text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                            
                            </div>
                            <hr />
                            <div className="grid grid-cols-12 col-span-12 gap-7">
                               <Link href="/resources/landing" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black font-bold uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/assets/icons/articles.png"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className=" ont-bold text-gray-400 uppercase">Datasheets</p>
                                        <h2 className=" font-bold hyperlink">Landscape Assessment</h2>
                                        <p className="mb-2 hyperlink text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/resources/landing" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black font-bold uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/assets/icons/articles.png"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className=" ont-bold text-gray-400 uppercase">Datasheets</p>
                                        <h2 className=" font-bold hyperlink">Landscape Assessment</h2>
                                        <p className="mb-2 hyperlink text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                                <Link href="/resources/landing" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black font-bold uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/assets/icons/articles.png"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className=" ont-bold text-gray-400 uppercase">Datasheets</p>
                                        <h2 className=" font-bold hyperlink">Landscape Assessment</h2>
                                        <p className="mb-2 hyperlink text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                               <Link href="/resources/landing" passHref>
                                    <a className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-maps-secondary text-black font-bold uppercase hyperlink absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-md   uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <div  className="block w-80 h-60 relative  transition duration-200 ease-out transform hover:scale-110">
                                        <Image layout="fill" alt="Articles" className="object-cover w-full shadow-sm max-h-56" src="/assets/icons/articles.png"/>
                                    </div>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className=" ont-bold text-gray-400 uppercase">Datasheets</p>
                                        <h2 className=" font-bold hyperlink">Landscape Assessment</h2>
                                        <p className="mb-2 hyperlink text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </Layout>
    )
}