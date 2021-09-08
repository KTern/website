import Layout from "../component/Layout"
export default function Resources () {
    return (
    <Layout>
        <section className="w-full py-20 bg-white" style={{backgroundImage:'url(/pattern.svg)', backgroundRepeat: 'no-repeat', backgroundPosition:'center bottom' }}>
            <div className="flex flex-col items-center px-12 mx-auto lg:flex-row">
                <div className="relative z-20 flex flex-col items-start justify-center w-full h-full lg:w-1/2">
                    <h1 className="custom-heading">The Ultimate Design Collection</h1>
                    <p className="custom-subheading text-gray-500 pb-7">We&apos;ve handcrafted the ultimate design collection that we think you are going to love.</p>
                    <div className="flex flex items-center justify-center w-full sm:w-auto sm:flex-row space-x-10">
                       <a className="inline-block py-3 px-10 bg-black hover:bg-gray-300 hover:text-black shadow text-lg text-white font-bold rounded-l-xl rounded-t-xl transition duration-200 custom-card-subheading" href="#">Get Started</a>
                        <a href="#_" className="flex py-3 px-8  hover:bg-gray-300 hover:text-black shadow text-lg font-bold rounded-l-xl rounded-t-xl transition duration-200 custom-card-subheading">
                            <img className=" w-6 h-6" src="/save-file.svg" />
                                <span>&nbsp;Download Datasheet</span>
                        </a>
                    </div>
                </div>

                <div className="hidden lg:block relative z-10 w-full h-full my-16 lg:my-0 lg:w-1/2">
                    <img className="relative z-40 w-full h-full" src="https://cdn.devdojo.com/images/june2021/home-hero.png"/>
                    <div className="box-content absolute inset-0 z-30 hidden scale-150 translate-x-40 translate-y-10 rounded-full w-80 lg:block h-80 xl:w-96 xl:h-96 bg-pink-50"></div>
                    <div className="absolute bottom-0 left-0 z-20 hidden -translate-x-3 -translate-y-12 rounded-full opacity-50 w-72 lg:block h-72 bg-yellow-50"></div>
                    <div className="absolute top-0 left-0 z-20 hidden -translate-x-12 -translate-y-12 rounded-full opacity-50 w-72 lg:block h-72 bg-blue-50"></div>
                </div>
            </div>
            </section>
            <section className="container md:p-10 ">
                {/* <!-- On Demand Webinar Display--> */}
                <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0 px-10">
                    {/* <!-- On demand Filter Options--> */}
                <div className="w-full md:w-1/5 px-4 mb-4  md:mb-0">
                    <form action="#" method="post" className="">
                            <div className="mb-6">
                                <h1 className="text-2xl mt-2 mb-6 leading-tight custom-card-heading">Streams</h1>
                                <hr />
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
                                <h1 className="text-2xl mt-2 mb-6 leading-tight font-heading">Role</h1>
                                <hr/>
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
                        <section className="pb-10">
                            <div className="click-chip outline-green">E-books</div>
                            <div className="click-chip outline-green">White paper</div>
                            <div className="click-chip outline-green">Customer Success Story</div>
                            <div className="click-chip outline-green">Infographics</div>
                            <div className="click-chip outline-green">Datasheets</div>
                            <div className="click-chip outline-green">Product tour</div>
                            <div className="click-chip outline-green">Analyst Report</div>
                            <div className="click-chip outline-green">Best Practice guides</div>
                            <div className="click-chip outline-green">Presentations</div>
                        </section>
                        <div className="container mx-auto space-y-10">
                            <div className="grid grid-cols-12 col-span-12 gap-7">
                                <div className="flex flex-col items-start col-span-12 overflow-hidden shadow border rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-primary text-white absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <a href="#_" className="block transition duration-200 ease-out transform hover:scale-110">
                                        <img className="object-cover w-full shadow-sm max-h-56" src="assets/icons/articles.png"/>
                                    </a>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className="text-xs mb-2 mt-2 font-bold text-gray-400 uppercase">White paper</p>
                                        <h2 className=" font-bold custom-card-heading"><a href="#_">Landscape Assessment</a></h2>
                                        <p className="mb-2 custom-card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start col-span-12 overflow-hidden shadow border rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-primary text-white absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <a href="#_" className="block transition duration-200 ease-out transform hover:scale-110">
                                        <img className="object-cover w-full shadow-sm max-h-56" src="assets/icons/articles.png"/>
                                    </a>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className="text-xs mb-2 mt-2 font-bold text-gray-400 uppercase">White paper</p>
                                        <h2 className=" font-bold custom-card-heading"><a href="#_">Landscape Assessment</a></h2>
                                        <p className="mb-2 custom-card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start col-span-12 overflow-hidden shadow border rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-primary text-white absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-black inline-block">
                                        <span>Digital Projects</span>
                                    </div>
                                    <a href="#_" className="block transition duration-200 ease-out transform hover:scale-110">
                                        <img className="object-cover w-full shadow-sm max-h-56" src="assets/icons/articles.png"/>
                                    </a>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className="text-xs mb-2 mt-2 font-bold text-gray-400 uppercase">White paper</p>
                                        <h2 className=" font-bold custom-card-heading"><a href="#_">Landscape Assessment</a></h2>
                                        <p className="mb-2 custom-card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start col-span-12 overflow-hidden shadow border rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-primary text-white absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-black inline-block">
                                        <span>Digital Mines</span>
                                    </div>
                                    <a href="#_" className="block transition duration-200 ease-out transform hover:scale-110">
                                        <img className="object-cover w-full shadow-sm max-h-56" src="assets/icons/articles.png"/>
                                    </a>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className="text-xs mb-2 mt-2 font-bold text-gray-400 uppercase">White paper</p>
                                        <h2 className=" font-bold custom-card-heading"><a href="#_">Landscape Assessment</a></h2>
                                        <p className="mb-2 custom-card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start col-span-12 overflow-hidden shadow border rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-primary text-white absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-black inline-block">
                                        <span>Digital Labs</span>
                                    </div>
                                    <a href="#_" className="block transition duration-200 ease-out transform hover:scale-110">
                                        <img className="object-cover w-full shadow-sm max-h-56" src="assets/icons/articles.png"/>
                                    </a>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className="text-xs mb-2 mt-2 font-bold text-gray-400 uppercase">White paper</p>
                                        <h2 className=" font-bold custom-card-heading"><a href="#_">Landscape Assessment</a></h2>
                                        <p className="mb-2 custom-card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start col-span-12 overflow-hidden shadow border rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-primary text-white absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-black inline-block">
                                        <span>Digital Process</span>
                                    </div>
                                    <a href="#_" className="block transition duration-200 ease-out transform hover:scale-110">
                                        <img className="object-cover w-full shadow-sm max-h-56" src="assets/icons/articles.png"/>
                                    </a>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className="text-xs mb-2 mt-2 font-bold text-gray-400 uppercase">White paper</p>
                                        <h2 className=" font-bold custom-card-heading"><a href="#_">Landscape Assessment</a></h2>
                                        <p className="mb-2 custom-card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className="grid grid-cols-12 col-span-12 gap-7">
                                <div className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-primary text-white absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <a href="#_" className="block transition duration-200 ease-out transform hover:scale-110">
                                        <img className="object-cover w-full shadow-sm max-h-56" src="assets/icons/articles.png"/>
                                    </a>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className="text-xs mb-2 mt-2 font-bold text-gray-400 uppercase">E-book</p>
                                        <h2 className=" font-bold custom-card-heading"><a href="#_">Landscape Assessment</a></h2>
                                        <p className="mb-2 custom-card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-primary text-white absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <a href="#_" className="block transition duration-200 ease-out transform hover:scale-110">
                                        <img className="object-cover w-full shadow-sm max-h-56" src="assets/icons/articles.png"/>
                                    </a>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className="text-xs mb-2 mt-2 font-bold text-gray-400 uppercase">E-book</p>
                                        <h2 className=" font-bold custom-card-heading"><a href="#_">Landscape Assessment</a></h2>
                                        <p className="mb-2 custom-card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-primary text-white absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <a href="#_" className="block transition duration-200 ease-out transform hover:scale-110">
                                        <img className="object-cover w-full shadow-sm max-h-56" src="assets/icons/articles.png"/>
                                    </a>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className="text-xs mb-2 mt-2 font-bold text-gray-400 uppercase">E-book</p>
                                        <h2 className=" font-bold custom-card-heading"><a href="#_">Landscape Assessment</a></h2>
                                        <p className="mb-2 custom-card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-primary text-white absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <a href="#_" className="block transition duration-200 ease-out transform hover:scale-110">
                                        <img className="object-cover w-full shadow-sm max-h-56" src="assets/icons/articles.png"/>
                                    </a>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className="text-xs mb-2 mt-2 font-bold text-gray-400 uppercase">E-book</p>
                                        <h2 className=" font-bold custom-card-heading"><a href="#_">Landscape Assessment</a></h2>
                                        <p className="mb-2 custom-card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-primary text-white absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <a href="#_" className="block transition duration-200 ease-out transform hover:scale-110">
                                        <img className="object-cover w-full shadow-sm max-h-56" src="assets/icons/articles.png"/>
                                    </a>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className="text-xs mb-2 mt-2 font-bold text-gray-400 uppercase">E-book</p>
                                        <h2 className=" font-bold custom-card-heading"><a href="#_">Landscape Assessment</a></h2>
                                        <p className="mb-2 custom-card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-primary text-white absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <a href="#_" className="block transition duration-200 ease-out transform hover:scale-110">
                                        <img className="object-cover w-full shadow-sm max-h-56" src="assets/icons/articles.png"/>
                                    </a>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className="text-xs mb-2 mt-2 font-bold text-gray-400 uppercase">E-book</p>
                                        <h2 className=" font-bold custom-card-heading"><a href="#_">Landscape Assessment</a></h2>
                                        <p className="mb-2 custom-card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-primary text-white absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <a href="#_" className="block transition duration-200 ease-out transform hover:scale-110">
                                        <img className="object-cover w-full shadow-sm max-h-56" src="assets/icons/articles.png"/>
                                    </a>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className="text-xs mb-2 mt-2 font-bold text-gray-400 uppercase">E-book</p>
                                        <h2 className=" font-bold custom-card-heading"><a href="#_">Landscape Assessment</a></h2>
                                        <p className="mb-2 custom-card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-primary text-white absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <a href="#_" className="block transition duration-200 ease-out transform hover:scale-110">
                                        <img className="object-cover w-full shadow-sm max-h-56" src="assets/icons/articles.png"/>
                                    </a>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className="text-xs mb-2 mt-2 font-bold text-gray-400 uppercase">E-book</p>
                                        <h2 className=" font-bold custom-card-heading"><a href="#_">Landscape Assessment</a></h2>
                                        <p className="mb-2 custom-card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                </div>
                        
                            </div>
                            <hr />
                            <div className="grid grid-cols-12 col-span-12 gap-7">
                                <div className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-primary text-white absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <a href="#_" className="block transition duration-200 ease-out transform hover:scale-110">
                                        <img className="object-cover w-full shadow-sm max-h-56" src="assets/icons/articles.png"/>
                                    </a>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className="text-xs mb-2 mt-2 font-bold text-gray-400 uppercase">Datasheets</p>
                                        <h2 className=" font-bold custom-card-heading"><a href="#_">Landscape Assessment</a></h2>
                                        <p className="mb-2 custom-card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-primary text-white absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <a href="#_" className="block transition duration-200 ease-out transform hover:scale-110">
                                        <img className="object-cover w-full shadow-sm max-h-56" src="assets/icons/articles.png"/>
                                    </a>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className="text-xs mb-2 mt-2 font-bold text-gray-400 uppercase">Datasheets</p>
                                        <h2 className=" font-bold custom-card-heading"><a href="#_">Landscape Assessment</a></h2>
                                        <p className="mb-2 custom-card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-primary text-white absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <a href="#_" className="block transition duration-200 ease-out transform hover:scale-110">
                                        <img className="object-cover w-full shadow-sm max-h-56" src="assets/icons/articles.png"/>
                                    </a>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className="text-xs mb-2 mt-2 font-bold text-gray-400 uppercase">Datasheets</p>
                                        <h2 className=" font-bold custom-card-heading"><a href="#_">Landscape Assessment</a></h2>
                                        <p className="mb-2 custom-card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-primary text-white absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <a href="#_" className="block transition duration-200 ease-out transform hover:scale-110">
                                        <img className="object-cover w-full shadow-sm max-h-56" src="assets/icons/articles.png"/>
                                    </a>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className="text-xs mb-2 mt-2 font-bold text-gray-400 uppercase">Datasheets</p>
                                        <h2 className=" font-bold custom-card-heading"><a href="#_">Landscape Assessment</a></h2>
                                        <p className="mb-2 custom-card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-primary text-white absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <a href="#_" className="block transition duration-200 ease-out transform hover:scale-110">
                                        <img className="object-cover w-full shadow-sm max-h-56" src="assets/icons/articles.png"/>
                                    </a>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className="text-xs mb-2 mt-2 font-bold text-gray-400 uppercase">Datasheets</p>
                                        <h2 className=" font-bold custom-card-heading"><a href="#_">Landscape Assessment</a></h2>
                                        <p className="mb-2 custom-card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-primary text-white absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <a href="#_" className="block transition duration-200 ease-out transform hover:scale-110">
                                        <img className="object-cover w-full shadow-sm max-h-56" src="assets/icons/articles.png"/>
                                    </a>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className="text-xs mb-2 mt-2 font-bold text-gray-400 uppercase">Datasheets</p>
                                        <h2 className=" font-bold custom-card-heading"><a href="#_">Landscape Assessment</a></h2>
                                        <p className="mb-2 custom-card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-primary text-white absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <a href="#_" className="block transition duration-200 ease-out transform hover:scale-110">
                                        <img className="object-cover w-full shadow-sm max-h-56" src="assets/icons/articles.png"/>
                                    </a>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className="text-xs mb-2 mt-2 font-bold text-gray-400 uppercase">Datasheets</p>
                                        <h2 className=" font-bold custom-card-heading"><a href="#_">Landscape Assessment</a></h2>
                                        <p className="mb-2 custom-card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-primary text-white absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <a href="#_" className="block transition duration-200 ease-out transform hover:scale-110">
                                        <img className="object-cover w-full shadow-sm max-h-56" src="assets/icons/articles.png"/>
                                    </a>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className="text-xs mb-2 mt-2 font-bold text-gray-400 uppercase">Datasheets</p>
                                        <h2 className=" font-bold custom-card-heading"><a href="#_">Landscape Assessment</a></h2>
                                        <p className="mb-2 custom-card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                </div>                    
                                <div className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-primary text-white absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <a href="#_" className="block transition duration-200 ease-out transform hover:scale-110">
                                        <img className="object-cover w-full shadow-sm max-h-56" src="assets/icons/articles.png"/>
                                    </a>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className="text-xs mb-2 mt-2 font-bold text-gray-400 uppercase">Datasheets</p>
                                        <h2 className=" font-bold custom-card-heading"><a href="#_">Landscape Assessment</a></h2>
                                        <p className="mb-2 custom-card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                </div>
                            
                            </div>
                            <hr />
                            <div className="grid grid-cols-12 col-span-12 gap-7">
                                <div className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-primary text-white absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <a href="#_" className="block transition duration-200 ease-out transform hover:scale-110">
                                        <img className="object-cover w-full shadow-sm max-h-56" src="assets/icons/articles.png"/>
                                    </a>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className="text-xs mb-2 mt-2 font-bold text-gray-400 uppercase">Analyst reports</p>
                                        <h2 className=" font-bold custom-card-heading"><a href="#_">Landscape Assessment</a></h2>
                                        <p className="mb-2 custom-card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-primary text-white absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <a href="#_" className="block transition duration-200 ease-out transform hover:scale-110">
                                        <img className="object-cover w-full shadow-sm max-h-56" src="assets/icons/articles.png"/>
                                    </a>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className="text-xs mb-2 mt-2 font-bold text-gray-400 uppercase">Analyst reports</p>
                                        <h2 className=" font-bold custom-card-heading"><a href="#_">Landscape Assessment</a></h2>
                                        <p className="mb-2 custom-card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-primary text-white absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <a href="#_" className="block transition duration-200 ease-out transform hover:scale-110">
                                        <img className="object-cover w-full shadow-sm max-h-56" src="assets/icons/articles.png"/>
                                    </a>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className="text-xs mb-2 mt-2 font-bold text-gray-400 uppercase">Analyst reports</p>
                                        <h2 className=" font-bold custom-card-heading"><a href="#_">Landscape Assessment</a></h2>
                                        <p className="mb-2 custom-card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start col-span-12 overflow-hidden border shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                    <div className="z-20 bg-primary text-white absolute top:0 mx-4 mt-5 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-black inline-block">
                                        <span>Digital Maps</span>
                                    </div>
                                    <a href="#_" className="block transition duration-200 ease-out transform hover:scale-110">
                                        <img className="object-cover w-full shadow-sm max-h-56" src="assets/icons/articles.png"/>
                                    </a>
                                    <div className="relative flex flex-col items-start px-6 bg-white border-t rounded-b-2xl">
                                        <p className="text-xs mb-2 mt-2 font-bold text-gray-400 uppercase">Analyst reports</p>
                                        <h2 className=" font-bold custom-card-heading"><a href="#_">Landscape Assessment</a></h2>
                                        <p className="mb-2 custom-card-subheading text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
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