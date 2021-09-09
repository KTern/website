import Layout from "../component/Layout";
import Image from "next/image";
import Link from "next/link";
export default function VARpartner(){
    return (
        <Layout>                
            {/* <!-- Header Section --> */}
          <section className="w-full py-20 bg-white">
            <div className="flex flex-col items-center px-12 mx-auto max-w-7xl lg:flex-row">
                <div className="relative z-20 flex flex-col items-start justify-center w-full h-full lg:w-5/12">
                    <p className="inline-block px-2 py-1 mb-5 font-medium tracking-wider text-gray-900 uppercase bg-gray-200 rounded-full text-xxs">
                    KTERN VAR PARTNER PROGRAM
                </p>
                <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl lg:text-7xl">
                    Become a <br/>KTern Partner
                </h5>
                <p className="py-5 mb-5 text-gray-600 lg:text-xl">
                    <span className="font-bold">Leverage KTern&apos;s Cognitive Workplace</span> to deliver SAP Digital Transformation Success to your customers through our Proprietery  <span className="font-bold">#DXaaS</span> Approach
                </p>
                <div className="flex items-center space-x-4">
                   <Link className="hidden mb-1 lg:inline-block py-2 px-6 bg-black hover:bg-gray-300 hover:text-black shadow  text-white font-bold rounded-l-xl custom-card-subheading rounded-t-xl transition duration-200 " href="#">Become a Partner</Link>
                    <Link href="" className="inline-flex items-center text-lg text-gray-400 underline transition-colors duration-200 " passHref>
                        Partner Portal
                        <svg className="inline-block w-2 ml-2" fill="currentColor" viewBox="0 0 12 12">
                            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z">
                            </path>
                        </svg>
                    </Link>
                </div>
                </div>

                <div className="relative z-10 w-full h-full my-16 lg:my-0 lg:w-7/12">
                    <Image className="relative z-40 w-full h-full" src="https://cdn.devdojo.com/images/june2021/home-hero.png" alt="Hero image"/>
                    <div className="box-content absolute inset-0 z-30 hidden scale-150 translate-x-40 translate-y-10 rounded-full w-80 lg:block h-80 xl:w-96 xl:h-96 bg-pink-50"></div>
                    <div className="absolute bottom-0 left-0 z-20 hidden -translate-x-3 -translate-y-12 rounded-full opacity-50 w-72 lg:block h-72 bg-yellow-50"></div>
                    <div className="absolute top-0 left-0 z-20 hidden -translate-x-12 -translate-y-12 rounded-full opacity-50 w-72 lg:block h-72 bg-blue-50"></div>
                </div>
            </div>
            </section>
            {/* <!-- Why Become KTern VAR Partner--> */}
            <section className="relative w-full px-8 font-sans leading-6 bg-gray-800 border-0 border-gray-200 border-solid text-black">
            <div className="flex flex-col items-center max-w-6xl px-8 py-20 mx-auto leading-6 border-solid md:items-stretch md:justify-center md:py-24">
                <h2 className="w-full m-0 font-sans text-4xl font-black tracking-wide text-center border-0 border-gray-200 sm:text-3xl text-white">Why Become a KTern VAR Partner?</h2>
                <p className="w-full max-w-3xl mx-0 mx-auto mt-4 mb-0 font-sans text-sm font-medium leading-relaxed text-center text-white border-0 border-gray-200 lg:text-md md:text-base">
                    Check out some of our award-winning features. We have been trusted by over 250 large name brand companies. We strive to make a product that is revolutionary.
                </p>
                <div className="grid grid-cols-3 gap-5 mt-10 sm:grid-cols-8 lg:grid-cols-12">
                    <div className="max-w-xs col-span-4 font-sans border-0 border-gray-200 text-gray-50">
                        <div className="box-border flex flex-col items-center h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:items-start sm:text-left">
                            <span className="flex-shrink-0 p-5 font-sans border-0 border-gray-200 rounded-full bg-gray-50 text-gray-50">
                                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                            </span>
                            <div className="mt-6 font-sans text-center border-0 border-gray-200 sm:text-left text-gray-50">
                                <span className="box-border text-xl font-bold leading-none tracking-wider border-solid text-gray-50">Zero Cost</span>
                                <p className="box-border mx-0 mt-2 mb-0 font-normal leading-snug text-center text-gray-300 border-solid sm:text-left">Becoming a KTern VAR Partner comes at no cost at all.</p>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-xs col-span-4 font-sans border-0 border-gray-200 text-gray-50">
                        <div className="box-border flex flex-col items-center h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:items-start sm:text-left">
                            <span className="flex-shrink-0 p-5 font-sans border-0 border-gray-200 rounded-full bg-gray-50 text-gray-50">
                                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"></path></svg>
                            </span>
                            <div className="mt-6 font-sans text-center border-0 border-gray-200 sm:text-left text-gray-50">
                                <span className="box-border text-xl font-bold leading-none tracking-wider text-center border-solid sm:text-left text-gray-50">Access to Demo Account</span>
                                <p className="box-border mx-0 mt-2 mb-0 font-normal leading-snug text-center text-gray-300 border-solid sm:text-left">Get Exclusive Access to KTern.AI&apos;s Demo account Preloaded with SAP Scenarios </p>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-xs col-span-4 font-sans border-0 border-gray-200 text-gray-50">
                        <div className="box-border flex flex-col items-center h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:items-start sm:text-left">
                            <span className="flex-shrink-0 p-5 font-sans border-0 border-gray-200 rounded-full bg-gray-50 text-gray-50">
                                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                            </span>
                            <div className="mt-6 font-sans text-center border-0 border-gray-200 sm:text-left text-gray-50">
                                <span className="box-border text-xl font-bold leading-none tracking-wider text-center border-solid sm:text-left text-gray-50">Exclusive Partner Team</span>
                                <p className="box-border mx-0 mt-2 mb-0 font-normal leading-snug text-center text-gray-300 border-solid sm:text-left">Apart from a Dedicated Partner Manager, get exclusive access to a Partner team providing 24 x 7 Customer Support</p>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-xs col-span-4 font-sans border-0 border-gray-200 text-gray-50">
                        <div className="box-border flex flex-col items-center h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:items-start sm:text-left">
                            <span className="flex-shrink-0 p-5 font-sans border-0 border-gray-200 rounded-full bg-gray-50 text-gray-50">
                                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                            </span>
                            <div className="mt-6 font-sans text-center border-0 border-gray-200 sm:text-left text-gray-50">
                                <span className="box-border text-xl font-bold leading-none tracking-wider text-center border-solid sm:text-left text-gray-50">Training and Enablement</span>
                                <p className="box-border mx-0 mt-2 mb-0 font-normal leading-snug text-center text-gray-300 border-solid sm:text-left">Training and Enablement Session is conducted free of cost by KTern&apos;s Enablement team and apart from this KTern&apos;s Partner Portal comes along with a free access to KTern Academy&apos;s Certifications and exclusive Partner Resources</p>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-xs col-span-4 font-sans border-0 border-gray-200 text-gray-50">
                        <div className="box-border flex flex-col items-center h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:items-start sm:text-left">
                            <span className="flex-shrink-0 p-5 font-sans border-0 border-gray-200 rounded-full bg-gray-50 text-gray-50">
                                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </span>
                            <div className="mt-6 font-sans text-center border-0 border-gray-200 sm:text-left text-gray-50">
                                <span className="box-border text-xl font-bold leading-none tracking-wider text-center border-solid sm:text-left text-gray-50">Fast and Reliable</span>
                                <p className="box-border mx-0 mt-2 mb-0 font-normal leading-snug text-center text-gray-300 border-solid sm:text-left">Our system has a 99.9% uptime and is extremely fast and reliable.</p>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-xs col-span-4 font-sans border-0 border-gray-200 text-gray-50">
                        <div className="box-border flex flex-col items-center h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:items-start sm:text-left">
                            <span className="flex-shrink-0 p-5 font-sans border-0 border-gray-200 rounded-full bg-gray-50 text-gray-50">
                                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path></svg>
                            </span>
                            <div className="mt-6 font-sans text-center border-0 border-gray-200 sm:text-left text-gray-50">
                                <span className="box-border text-xl font-bold leading-none tracking-wider text-center border-solid sm:text-left text-gray-50">Incentives</span>
                                <p className="box-border mx-0 mt-2 mb-0 font-normal leading-snug text-center text-gray-300 border-solid sm:text-left">Depending upon the tier of Partnership the rewards and incentives just keeps going up</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            {/* <!-- Partners --> */}
            <section className="py-10 bg-gray-100 text-center ">
                  <p className="text-lg font-bold font-medium tracking-wide text-gray-400 uppercase">Trusted By Our Partners</p>
                <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
                    
                <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                    <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                        <svg className="h-12 text-gray-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 266 100"><path fill="none" d="M0 0h266v100H0z"></path><path d="M140.021 49.597c-1.784 0-3.07.585-4.374 1.181v13.486c1.249.119 1.965.119 3.15.119 4.282 0 4.869-1.961 4.869-4.699v-6.441c0-2.022-.671-3.646-3.645-3.646zm-28.438-.736c-2.971 0-3.649 1.631-3.649 3.651v1.135h7.294v-1.135c0-2.02-.678-3.651-3.645-3.651zm-55.09 14.037c0 1.598.754 2.428 2.418 2.428 1.785 0 2.842-.582 4.145-1.18v-3.199h-3.903c-1.848 0-2.66.344-2.66 1.951zm111.191-13.301c-2.976 0-4.007 1.624-4.007 3.646v7.379c0 2.027 1.031 3.656 4.007 3.656 2.968 0 4.007-1.629 4.007-3.656v-7.379c-.001-2.022-1.04-3.646-4.007-3.646zM41.909 71.172h-8.748V49.998H28.79v-7.296h4.372V38.32c0-5.953 2.467-9.492 9.479-9.492h5.838v7.298H44.83c-2.73 0-2.91 1.02-2.91 2.923l-.011 3.652h6.61l-.773 7.296h-5.837v21.175zm29.897.055h-7.291l-.315-1.844c-3.329 1.844-6.3 2.143-8.26 2.143-5.347 0-8.193-3.572-8.193-8.512 0-5.828 3.321-7.908 9.262-7.908h6.047v-1.26c0-2.975-.341-3.848-4.916-3.848h-7.48l.731-7.296h8.176c10.038 0 12.239 3.171 12.239 11.203v17.322zm24.793-20.694c-4.537-.778-5.84-.949-8.023-.949-3.921 0-5.106.865-5.106 4.195v6.299c0 3.33 1.185 4.199 5.106 4.199 2.183 0 3.486-.174 8.023-.955v7.117c-3.974.891-6.563 1.125-8.751 1.125-9.392 0-13.125-4.939-13.125-12.074v-5.111c0-7.141 3.733-12.089 13.125-12.089 2.188 0 4.777.235 8.751 1.13v7.113zm27.376 8.957h-16.042v.588c0 3.33 1.186 4.199 5.106 4.199 3.524 0 5.675-.174 10.204-.955v7.117c-4.368.891-6.644 1.125-10.929 1.125-9.393 0-13.128-4.939-13.128-12.074v-5.844c0-6.243 2.771-11.356 12.396-11.356s12.393 5.054 12.393 11.356v5.844zm28.437.135c0 6.896-1.971 11.926-13.911 11.926-4.312 0-6.841-.379-11.6-1.111V31.02l8.745-1.459V43.35c1.89-.702 4.336-1.059 6.562-1.059 8.746 0 10.203 3.921 10.203 10.222v7.112zm28.033.15c0 5.949-2.456 11.719-12.732 11.719-10.281 0-12.783-5.77-12.783-11.719v-5.744c0-5.952 2.502-11.723 12.783-11.723 10.276 0 12.732 5.771 12.732 11.723v5.744zm28.014 0c0 5.949-2.459 11.719-12.733 11.719-10.281 0-12.783-5.77-12.783-11.719v-5.744c0-5.952 2.502-11.723 12.783-11.723 10.274 0 12.733 5.771 12.733 11.723v5.744zm28.749 11.397h-9.479l-8.017-13.383v13.383h-8.748V31.019l8.748-1.459v25.849l8.017-12.707h9.479l-8.752 13.867 8.752 14.603zm-41.512-21.575c-2.971 0-4.002 1.624-4.002 3.646v7.379c0 2.027 1.031 3.656 4.002 3.656 2.967 0 4.017-1.629 4.017-3.656v-7.379c0-2.022-1.05-3.646-4.017-3.646zm46.505 16.581c1.473 0 2.646 1.201 2.646 2.701 0 1.523-1.174 2.711-2.657 2.711-1.476 0-2.673-1.188-2.673-2.711 0-1.5 1.197-2.701 2.673-2.701h.011zm-.011.42c-1.187 0-2.158 1.021-2.158 2.281 0 1.283.972 2.291 2.169 2.291 1.198.012 2.155-1.008 2.155-2.279s-.957-2.293-2.155-2.293h-.011zm-.503 3.853h-.48v-3.014c.252-.035.492-.07.852-.07.456 0 .754.096.937.227.177.133.272.336.272.623 0 .398-.262.637-.585.734v.023c.263.049.442.287.503.73.07.469.143.648.19.746h-.503c-.071-.098-.144-.373-.204-.77-.07-.383-.264-.527-.648-.527h-.333v1.298zm0-1.668h.348c.394 0 .729-.145.729-.518 0-.264-.19-.527-.729-.527-.157 0-.266.012-.348.023v1.022z"></path></svg>
                    </div>
                    <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                            <svg className="h-10 text-gray-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 316 60">
                                <g transform="translate(9.259 4.552) scale(.4941)">
                                    <path d="M52.1 102.1V82.5c20.8 0 36.8-20.6 28.9-42.4-3-8.1-9.4-14.6-17.5-17.5-21.8-7.9-42.4 8.1-42.4 28.9H1.5c0-33.1 32-58.9 66.7-48.1 15.2 4.7 27.2 16.8 31.9 31.9 10.8 34.8-14.9 66.8-48 66.8z">
                                    </path>
                                    <path d="M32.6 63h19.5v19.5H32.6zm-15 34.5v-15h15v15h-15zM5 70h12.6v12.5H5z" fillRule="evenodd">
                                    </path>
                                    <path d="M181.5 30.2c-5.8-4-13-6.1-21.4-6.1h-18.3v58.1h18.3c8.4 0 15.6-2.1 21.4-6.4 3.2-2.2 5.7-5.4 7.4-9.3s2.6-8.5 2.6-13.7c0-5.1-.9-9.7-2.6-13.6-1.7-3.8-4.2-6.9-7.4-9zm-29 3.8h5.8c6.4 0 11.7 1.3 15.7 3.7 4.4 2.7 6.7 7.8 6.7 15.1 0 7.6-2.3 12.9-6.7 15.8-3.8 2.5-9.1 3.8-15.6 3.8h-5.8V34z">
                                    </path>
                                    <use href="#A"></use>
                                    <path d="M199 41.3h10.3v41H199zm47.8 3.4c-3.1-2.8-6.6-4.4-10.3-4.4-5.7 0-10.4 2-14.1 5.8s-5.5 8.8-5.5 14.7c0 5.8 1.8 10.7 5.5 14.7 3.7 3.8 8.4 5.8 14.1 5.8 4 0 7.4-1.1 10.2-3.3v1c0 3.4-.9 6-2.7 7.9-1.8 1.8-4.3 2.7-7.4 2.7-4.8 0-7.7-1.9-11.4-6.8l-7 6.7.2.3c1.5 2.1 3.8 4.2 6.9 6.2s6.9 3 11.5 3c6.1 0 11.1-1.9 14.7-5.6 3.7-3.7 5.5-8.7 5.5-14.9V41.3h-10.1v3.4zm-2.7 24.2c-1.8 2-4.1 3-7.1 3s-5.3-1-7-3c-1.8-2-2.7-4.7-2.7-8s.9-6.1 2.7-8.1 4.1-3.1 7-3.1c3 0 5.3 1 7.1 3.1 1.8 2 2.7 4.8 2.7 8.1s-1 6-2.7 8zm21.6-27.6H276v41h-10.3z"></path><use href="#A" x="66.7"></use><path d="M298.6 30.3h-10.1v11.1h-5.9v9.4h5.9v17c0 5.3 1.1 9.1 3.2 11.3s5.8 3.3 11.1 3.3c1.7 0 3.4-.1 5-.2h.5v-9.4l-3.5.2c-2.5 0-4.1-.4-4.9-1.3s-1.2-2.7-1.2-5.4V50.7h9.6v-9.4h-9.6v-11zm57.9-6.2h10.3v58.1h-10.3zm114.4 43.5c-1.8 2.1-3.7 3.9-5.2 4.8-1.4.9-3.2 1.4-5.3 1.4-3 0-5.5-1.1-7.5-3.4s-3-5.2-3-8.7 1-6.4 2.9-8.6c2-2.3 4.4-3.4 7.4-3.4 3.3 0 6.8 2.1 9.8 5.6l6.8-6.5c-4.4-5.8-10.1-8.5-16.9-8.5-5.7 0-10.6 2.1-14.6 6.1s-6 9.2-6 15.3 2 11.2 6 15.3 8.9 6.1 14.6 6.1c7.5 0 13.5-3.2 17.5-9.1l-6.5-6.4zM513.2 47c-1.5-2-3.5-3.7-5.9-4.9-2.5-1.2-5.3-1.8-8.5-1.8-5.8 0-10.5 2.1-14 6.3-3.4 4.2-5.2 9.3-5.2 15.4 0 6.2 1.9 11.3 5.7 15.3 3.7 3.9 8.8 5.9 14.9 5.9 6.9 0 12.7-2.8 16.9-8.4l.2-.3-6.7-6.5c-.6.8-1.5 1.6-2.3 2.4-1 1-2 1.7-3 2.2-1.5.8-3.3 1.1-5.2 1.1-2.9 0-5.2-.8-7-2.5-1.7-1.5-2.7-3.6-2.9-6.2h27.3l.1-3.8c0-2.7-.4-5.2-1.1-7.6-.7-2.3-1.8-4.5-3.3-6.6zm-22.5 9.7c.5-2 1.4-3.6 2.7-4.9 1.4-1.4 3.2-2.1 5.4-2.1 2.5 0 4.4.7 5.7 2.1 1.2 1.3 1.9 2.9 2.1 4.8h-15.9zm62.1-12.3c-3.1-2.7-7.4-4-12.8-4-3.4 0-6.6.8-9.5 2.2-2.7 1.4-5.3 3.6-7 6.6l.1.1 6.6 6.3c2.7-4.3 5.7-5.8 9.7-5.8 2.2 0 3.9.6 5.3 1.7s2 2.6 2 4.4v2c-2.6-.8-5.1-1.2-7.6-1.2-5.1 0-9.3 1.2-12.4 3.6s-4.7 5.9-4.7 10.2c0 3.8 1.3 7 4 9.3 2.7 2.2 6 3.4 9.9 3.4s7.6-1.6 10.9-4.3v3.4h10.1V55.9c.2-4.9-1.4-8.8-4.6-11.5zm-18.3 22.2c1.2-.8 2.8-1.2 4.9-1.2 2.5 0 5.1.5 7.8 1.5v4C545 73 542 74 538.3 74c-1.8 0-3.2-.4-4.1-1.2s-1.4-1.7-1.4-3 .6-2.4 1.7-3.2zm62.7-21.4c-2.9-3.2-6.9-4.8-12-4.8-4.1 0-7.4 1.2-9.9 3.5v-2.5h-10.1v41h10.3V59.7c0-3.1.7-5.6 2.2-7.3 1.5-1.8 3.4-2.6 6.1-2.6 2.3 0 4.1.8 5.4 2.3 1.3 1.6 2 3.7 2 6.4v23.7h10.3V58.5c0-5.6-1.4-10.1-4.3-13.3zm-253.6-.8c-3.1-2.7-7.4-4-12.8-4-3.4 0-6.6.8-9.5 2.2-2.7 1.4-5.3 3.6-7 6.6l.1.1 6.6 6.3c2.7-4.3 5.7-5.8 9.7-5.8 2.2 0 3.9.6 5.3 1.7s2 2.6 2 4.4v2c-2.6-.8-5.1-1.2-7.6-1.2-5.1 0-9.3 1.2-12.4 3.6s-4.7 5.9-4.7 10.2c0 3.8 1.3 7 4 9.3 2.7 2.2 6 3.4 9.9 3.4s7.6-1.6 10.9-4.3v3.4h10.1V55.9c.1-4.9-1.5-8.8-4.6-11.5zm-18.3 22.2c1.2-.8 2.8-1.2 4.9-1.2 2.5 0 5.1.5 7.8 1.5v4c-2.2 2.1-5.2 3.1-8.9 3.1-1.8 0-3.2-.4-4.1-1.2s-1.4-1.7-1.4-3 .5-2.4 1.7-3.2zm78.9 16.5c-16.5 0-30-13.4-30-30s13.4-30 30-30c16.5 0 30 13.4 30 30s-13.5 30-30 30zm0-49.3c-10.7 0-19.4 8.7-19.4 19.4s8.7 19.4 19.4 19.4 19.4-8.7 19.4-19.4-8.7-19.4-19.4-19.4z">
                                    </path></g><defs>
                                    <path d="M204.3 23.4c-1.8 0-3.3.6-4.5 1.8s-1.9 2.7-1.9 4.4c0 1.8.6 3.3 1.9 4.5 1.2 1.2 2.7 1.9 4.5 1.9s3.3-.6 4.5-1.9c1.2-1.2 1.9-2.8 1.9-4.5 0-1.8-.6-3.3-1.9-4.4-1.2-1.2-2.8-1.8-4.5-1.8z">
                                </path></defs></svg>
                    </div>
                    <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                        <svg className="h-8 mt-2 text-gray-500 fill-current" viewBox="0 0 398 120" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M247.292 94.106C224.124 111.016 190.526 120 161.608 120c-40.544 0-77.046-14.822-104.673-39.476-2.164-1.936-.235-4.583 2.369-3.082 29.806 17.15 66.66 27.475 104.731 27.475 25.677 0 53.906-5.271 79.884-16.163 3.923-1.646 7.21 2.545 3.373 5.352"></path><path d="M256.533 82.534c-2.965-3.771-19.551-1.787-27.003-.897-2.254.277-2.605-1.692-.57-3.122 13.233-9.265 34.922-6.587 37.447-3.487 2.54 3.13-.666 24.802-13.073 35.147-1.91 1.59-3.718.744-2.877-1.357 2.782-6.952 9.04-22.505 6.076-26.284zM230.05 13.058V4.063c.015-1.378 1.04-2.29 2.291-2.283l40.493-.007c1.295 0 2.335.94 2.335 2.268v7.726c-.015 1.29-1.113 2.983-3.053 5.668l-20.97 29.843c7.78-.182 16.022.985 23.093 4.939 1.596.897 2.027 2.217 2.152 3.516v9.607c0 1.32-1.457 2.86-2.987 2.057-12.458-6.507-29-7.214-42.776.08-1.405.745-2.884-.765-2.884-2.086v-9.133c0-1.459.03-3.961 1.508-6.186l24.302-34.738h-21.162c-1.295 0-2.327-.927-2.342-2.276zM82.354 69.294H70.042c-1.171-.08-2.108-.956-2.203-2.072l.014-63.006c0-1.262 1.062-2.268 2.38-2.268L81.71 1.94c1.2.059 2.159.963 2.232 2.116v8.221h.234C87.163 4.326 92.8.613 100.39.613c7.708 0 12.539 3.713 15.98 11.664C119.361 4.326 126.14.613 133.393.613c5.175 0 10.804 2.123 14.251 6.893 3.916 5.311 3.111 12.993 3.111 19.755l-.015 39.764c0 1.255-1.061 2.262-2.379 2.262h-12.304c-1.23-.08-2.203-1.05-2.203-2.262l-.007-33.41c0-2.648.234-9.28-.344-11.796-.923-4.246-3.675-5.435-7.24-5.435-2.986 0-6.09 1.985-7.356 5.165-1.266 3.188-1.15 8.484-1.15 12.066v33.403c0 1.255-1.06 2.262-2.378 2.262h-12.297c-1.237-.08-2.21-1.051-2.21-2.262l-.015-33.41c0-7.025 1.142-17.362-7.59-17.362-8.858 0-8.506 10.074-8.506 17.362l-.007 33.403c-.022 1.276-1.084 2.283-2.401 2.283zm227.788-55.82c-9.084 0-9.662 12.328-9.662 20.017s-.117 24.131 9.545 24.131c9.545 0 10.006-13.262 10.006-21.345 0-5.303-.234-11.664-1.845-16.705-1.383-4.377-4.143-6.098-8.044-6.098zM310.025.613c18.284 0 28.173 15.647 28.173 35.533 0 19.222-10.92 34.468-28.173 34.468-17.933 0-27.712-15.647-27.712-35.132C282.305 15.86 292.2.612 310.025.612zm51.882 68.681h-12.275c-1.23-.08-2.211-1.05-2.211-2.261l-.015-63.028c.103-1.16 1.12-2.057 2.365-2.057l11.426-.008c1.076.059 1.961.788 2.188 1.766v9.636h.234c3.448-8.622 8.279-12.73 16.785-12.73 5.519 0 10.92 1.992 14.375 7.427C398 13.072 398 21.556 398 27.662v39.64c-.14 1.117-1.142 1.985-2.364 1.985h-12.349c-1.141-.073-2.064-.912-2.188-1.984V33.097c0-6.894.805-16.968-7.708-16.968-2.993 0-5.753 1.984-7.13 5.033-1.72 3.845-1.953 7.69-1.953 11.935v33.928c-.03 1.262-1.091 2.27-2.401 2.27zm-151.715-.16c-.813.73-1.991.78-2.913.284-4.092-3.385-4.824-4.953-7.064-8.177-6.756 6.864-11.543 8.921-20.305 8.921-10.372 0-18.438-6.376-18.438-19.134 0-9.965 5.424-16.742 13.139-20.061 6.683-2.925 16.023-3.458 23.167-4.253v-1.598c0-2.925.234-6.375-1.5-8.9-1.501-2.26-4.378-3.195-6.918-3.195-4.692 0-8.871 2.4-9.904 7.375-.212 1.11-1.024 2.204-2.137 2.262l-11.938-1.291c-1.01-.234-2.13-1.029-1.838-2.568C166.288 4.362 179.37 0 191.087 0c5.995 0 13.827 1.59 18.556 6.113 5.995 5.58 5.416 13.021 5.416 21.126v19.127c0 5.756 2.401 8.28 4.648 11.373.79 1.116.967 2.444-.036 3.26-2.518 2.102-6.983 5.968-9.443 8.15l-.036-.015zm-12.414-29.931v-2.656c-8.908 0-18.322 1.897-18.322 12.35 0 5.319 2.767 8.908 7.488 8.908 3.455 0 6.566-2.123 8.528-5.58 2.423-4.254 2.306-8.237 2.306-13.022zM48.72 69.133c-.813.73-1.991.781-2.913.285-4.092-3.385-4.824-4.953-7.064-8.177-6.763 6.864-11.55 8.921-20.305 8.921C8.06 70.162 0 63.786 0 51.028c0-9.965 5.417-16.742 13.139-20.061 6.683-2.925 16.015-3.458 23.16-4.253v-1.598c0-2.925.233-6.375-1.501-8.9-1.5-2.26-4.377-3.195-6.91-3.195-4.7 0-8.879 2.4-9.904 7.375-.212 1.11-1.024 2.204-2.137 2.262L3.91 21.367c-1.01-.234-2.13-1.029-1.845-2.568C4.81 4.362 17.89.007 29.615.007c5.995 0 13.827 1.59 18.556 6.113 5.995 5.581 5.416 13.022 5.416 21.126v19.128c0 5.755 2.401 8.28 4.648 11.372.79 1.116.967 2.444-.036 3.261-2.518 2.101-6.99 5.967-9.45 8.148l-.03-.021zm-12.422-29.93v-2.656c-8.908 0-18.32 1.897-18.32 12.35 0 5.319 2.766 8.908 7.487 8.908 3.462 0 6.573-2.123 8.528-5.58 2.422-4.254 2.305-8.237 2.305-13.022z"></path></g></svg>
                    </div>
                    <div className="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
                        <svg className="h-5 mt-1 text-gray-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278.7 36.3"><g><path className="st0" d="M238.1 14.4v21.9h7V21.7h25.6v14.6h7V14.4h-39.6m6.2-7.1h27c3.8-.7 6.5-4.1 7.3-7.3H237c.8 3.2 3.6 6.5 7.3 7.3m-27.5 29c3.5-1.5 5.4-4.1 6.2-7.1h-31.5V.1h-7.1v36.2h32.4M131.9 7.2h25c3.8-1.1 6.9-4 7.7-7.1H125v21.4h32.4V29H132c-4 1.1-7.4 3.8-9.1 7.3h41.5V14.4H132l-.1-7.2m-61.6.1h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3m0 14.3h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3m0 14.7h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.6 7.4 7.3M0 .1c.8 3.2 3.6 6.4 7.3 7.2h11.4l.6.2v28.7h7.1V7.5l.6-.2h11.4c3.8-1 6.5-4 7.3-7.2V0L0 .1"></path></g></svg>
                    </div>
                    <div className="flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-1">
                        <svg className="h-8 text-gray-500 fill-current" viewBox="0 0 2270 546" xmlns="http://www.w3.org/2000/svg"><g fillRule="evenodd"><path d="M888.413 394.397l-31.127 144.717h-71.593L903.977 14.642h84.81l111.28 524.472h-72.371l-30.35-144.717H888.413zm100.373-58.364l-24.124-125.3c-7.003-35.797-14.007-82.463-19.441-119.828h-3.126c-5.434 38.13-13.242 86.365-20.22 119.827l-24.902 125.301h91.813zM1373.34.648v441.205c0 28.806 1.556 70.828 3.1 97.274h-63.02l-4.67-45.9h-2.334c-12.451 26.445-41.244 52.138-79.362 52.138-70.037 0-112.837-76.275-112.837-193.755 0-133.848 56.794-196.881 116.728-196.881 30.336 0 54.46 14.02 67.689 42.8h1.556V.648h73.15zm-73.163 304.258c0-6.991 0-15.551-.778-23.359-3.89-34.227-23.345-63.798-49.79-63.798-45.927 0-61.477 63.798-61.477 133.848 0 77.818 20.232 132.278 59.142 132.278 16.342 0 38.118-8.56 50.569-53.681 1.556-6.226 2.334-15.577 2.334-24.111V304.906zm247.399 240.446c-75.471 0-129.957-64.59-129.957-194.52 0-137.752 64.576-196.116 133.835-196.116 74.705 0 128.387 66.924 128.387 194.546 0 150.19-73.927 196.09-131.5 196.09h-.765zm2.321-57.573c45.122 0 55.251-80.153 55.251-137.726 0-56.82-10.116-137.739-56.794-137.739-48.26 0-57.586 80.919-57.586 137.74 0 63.02 10.895 137.725 58.364 137.725h.765zM1723.938.648h73.137V203.74h1.556c19.455-34.227 45.913-49.025 79.375-49.025 64.577 0 105.055 73.15 105.055 189.099 0 135.391-55.25 201.537-117.506 201.537-37.353 0-58.364-20.246-74.719-53.708h-3.086l-3.904 47.47h-63.02c1.556-25.668 3.112-68.468 3.112-97.274V.648zm73.137 404.618c0 8.586.778 17.146 3.113 23.358 11.66 45.926 34.24 55.251 49.012 55.251 43.579 0 59.92-57.572 59.92-135.391 0-72.371-17.106-130.735-60.698-130.735-24.124 0-43.578 28.793-49.025 56.03-1.557 7.781-2.335 17.91-2.335 25.68v105.807h.013zm293.92-40.453c.779 97.273 42.788 121.384 87.145 121.384 26.458 0 49.025-6.213 65.367-14.007l10.895 52.916c-22.568 11.673-56.808 17.912-90.27 17.912-94.925 0-144.73-71.594-144.73-188.321 0-123.732 56.795-199.994 135.392-199.994s115.172 75.484 115.172 170.435c0 18.664-.792 30.35-1.557 40.453l-177.413-.778zm109.712-52.126c.778-66.924-22.567-102.707-51.347-102.707-38.144 0-55.264 55.251-57.586 102.707h108.933z" fillRule="nonzero"></path><path d="M373.462 16.043h218.501v523.07L373.462 16.044zm-153.926 0H.88v523.07l218.657-523.07zm76.976 192.77l139.218 330.3H344.5l-41.633-105.197H200.964l95.548-225.103z"></path></g></svg>
                    </div>
                </div>
            </div>
            </section>
            {/* <!--Detailed Look at Partnership Benefits--> */}
            <section className="relative py-0 2xl:py-10">
            <div className="container px-20 mx-auto">
                <div className="mb-20 text-center">
                
                <h2 className="mt-8 text-4xl font-bold font-heading">Detailed Look at Partnership Benefits</h2>
                </div>
                <div>
                <div className="mb-16 overflow-x-auto overflow-y-hidden">
                    <table className="table-auto w-full mb-10">
                    <thead className="bg-gray-100">
                        <tr className="text-lg text-left font-bold">
                        <th className="pl-16 py-5">Feature 1</th>
                        <th className="px-4 py-5">
                            <div className="flex items-center">
                            
                            1 Year
                            </div>
                        </th>
                        <th className="px-4 py-5">
                            <div className="flex items-center">
                            
                            2 Year
                            </div>
                        </th>
                        <th className="px-4 py-5">
                            <div className="flex items-center">
                            
                            3 Year
                            </div>
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-lg text-center border-b border-gray-50">
                        <td className="pl-16 py-6 text-left">Statistics &amp; Details</td>
                        <td className="pl-10">
                            <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18.4595" r="18" fill="#111827" fillOpacity="0.1"></circle>
                            <g clipPath="url(#clip0)">
                                <path d="M15.135 24.797L9 18.662L9.81024 17.8517L15.135 23.1765L26.1898 12.1218L27 12.9321L15.135 24.797Z" fill="#000000"></path>
                            </g>
                            </svg>
                        </td>
                        <td className="pl-10">
                            <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18.4595" r="18" fill="#111827" fillOpacity="0.1"></circle>
                            <g clipPath="url(#clip0)">
                                <path d="M15.135 24.797L9 18.662L9.81024 17.8517L15.135 23.1765L26.1898 12.1218L27 12.9321L15.135 24.797Z" fill="#000000"></path>
                            </g>
                            </svg>
                        </td>
                        <td className="pl-10">
                            <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18.4595" r="18" fill="#111827" fillOpacity="0.1"></circle>
                            <g clipPath="url(#clip0)">
                                <path d="M15.135 24.797L9 18.662L9.81024 17.8517L15.135 23.1765L26.1898 12.1218L27 12.9321L15.135 24.797Z" fill="#000000"></path>
                            </g>
                            </svg>
                        </td>
                        </tr>
                        <tr className="text-lg text-center border-b border-gray-50">
                        <td className="pl-16 py-6 text-left">Video chat</td>
                        <td></td>
                        <td className="pl-10">
                            <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18.4595" r="18" fill="#111827" fillOpacity="0.1"></circle>
                            <g clipPath="url(#clip0)">
                                <path d="M15.135 24.797L9 18.662L9.81024 17.8517L15.135 23.1765L26.1898 12.1218L27 12.9321L15.135 24.797Z" fill="#000000"></path>
                            </g>
                            </svg>
                        </td>
                        <td className="pl-10">
                            <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18.4595" r="18" fill="#111827" fillOpacity="0.1"></circle>
                            <g clipPath="url(#clip0)">
                                <path d="M15.135 24.797L9 18.662L9.81024 17.8517L15.135 23.1765L26.1898 12.1218L27 12.9321L15.135 24.797Z" fill="#000000"></path>
                            </g>
                            </svg>
                        </td>
                        </tr>
                        <tr className="text-lg text-center border-b border-gray-50">
                        <td className="pl-16 py-6 text-left">Real-Time Collaboration</td>
                        <td></td>
                        <td></td>
                        <td className="pl-10">
                            <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18.4595" r="18" fill="#111827" fillOpacity="0.1"></circle>
                            <g clipPath="url(#clip0)">
                                <path d="M15.135 24.797L9 18.662L9.81024 17.8517L15.135 23.1765L26.1898 12.1218L27 12.9321L15.135 24.797Z" fill="#000000"></path>
                            </g>
                            </svg>
                        </td>
                        </tr>
                        <tr className="text-xl text-center">
                        <td className="pl-16 py-6 text-left">Technical Support</td>
                        <td></td>
                        <td className="pl-10">
                            <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18.4595" r="18" fill="#111827" fillOpacity="0.1"></circle>
                            <g clipPath="url(#clip0)">
                                <path d="M15.135 24.797L9 18.662L9.81024 17.8517L15.135 23.1765L26.1898 12.1218L27 12.9321L15.135 24.797Z" fill="#000000"></path>
                            </g>
                            </svg>
                        </td>
                        <td className="pl-10">
                            <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18.4595" r="18" fill="#111827" fillOpacity="0.1"></circle>
                            <g clipPath="url(#clip0)">
                                <path d="M15.135 24.797L9 18.662L9.81024 17.8517L15.135 23.1765L26.1898 12.1218L27 12.9321L15.135 24.797Z" fill="#000000"></path>
                            </g>
                            </svg>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div className="mb-16 overflow-x-auto overflow-y-hidden">
                    <table className="table-auto w-full mb-10">
                    <thead className="bg-gray-100">
                        <tr className="text-lg text-left font-bold">
                        <th className="pl-16 py-5">Feature 2</th>
                        <th className="px-4 py-5">
                            <div className="flex items-center">
                            
                            1 Year
                            </div>
                        </th>
                        <th className="px-4 py-5">
                            <div className="flex items-center">
                            
                            2 Year
                            </div>
                        </th>
                        <th className="px-4 py-5">
                            <div className="flex items-center">
                            
                            3 Year
                            </div>
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-lg text-center border-b border-gray-50">
                        <td className="pl-16 py-6 text-left">Statistics &amp; Details</td>
                        <td className="pl-10">
                            <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18.4595" r="18" fill="#111827" fillOpacity="0.1"></circle>
                            <g clipPath="url(#clip0)">
                                <path d="M15.135 24.797L9 18.662L9.81024 17.8517L15.135 23.1765L26.1898 12.1218L27 12.9321L15.135 24.797Z" fill="#000000"></path>
                            </g>
                            </svg>
                        </td>
                        <td className="pl-10"></td>
                        <td className="pl-10">
                            <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18.4595" r="18" fill="#111827" fillOpacity="0.1"></circle>
                            <g clipPath="url(#clip0)">
                                <path d="M15.135 24.797L9 18.662L9.81024 17.8517L15.135 23.1765L26.1898 12.1218L27 12.9321L15.135 24.797Z" fill="#000000"></path>
                            </g>
                            </svg>
                        </td>
                        </tr>
                        <tr className="text-lg text-center border-b border-gray-50">
                        <td className="pl-16 py-6 text-left">Video chat</td>
                        <td className="pl-10">
                            <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18.4595" r="18" fill="#111827" fillOpacity="0.1"></circle>
                            <g clipPath="url(#clip0)">
                                <path d="M15.135 24.797L9 18.662L9.81024 17.8517L15.135 23.1765L26.1898 12.1218L27 12.9321L15.135 24.797Z" fill="#000000"></path>
                            </g>
                            </svg>
                        </td>
                        <td className="pl-10">
                            <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18.4595" r="18" fill="#111827" fillOpacity="0.1"></circle>
                            <g clipPath="url(#clip0)">
                                <path d="M15.135 24.797L9 18.662L9.81024 17.8517L15.135 23.1765L26.1898 12.1218L27 12.9321L15.135 24.797Z" fill="#000000"></path>
                            </g>
                            </svg>
                        </td>
                        <td className="pl-10">
                            <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18.4595" r="18" fill="#111827" fillOpacity="0.1"></circle>
                            <g clipPath="url(#clip0)">
                                <path d="M15.135 24.797L9 18.662L9.81024 17.8517L15.135 23.1765L26.1898 12.1218L27 12.9321L15.135 24.797Z" fill="#000000"></path>
                            </g>
                            </svg>
                        </td>
                        </tr>
                        <tr className="text-lg text-center border-b border-gray-50">
                        <td className="pl-16 py-6 text-left">Real-Time Collaboration</td>
                        <td className="pl-10">
                            <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18.4595" r="18" fill="#111827" fillOpacity="0.1"></circle>
                            <g clipPath="url(#clip0)">
                                <path d="M15.135 24.797L9 18.662L9.81024 17.8517L15.135 23.1765L26.1898 12.1218L27 12.9321L15.135 24.797Z" fill="#000000"></path>
                            </g>
                            </svg>
                        </td>
                        <td className="pl-10">
                            <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18.4595" r="18" fill="#111827" fillOpacity="0.1"></circle>
                            <g clipPath="url(#clip0)">
                                <path d="M15.135 24.797L9 18.662L9.81024 17.8517L15.135 23.1765L26.1898 12.1218L27 12.9321L15.135 24.797Z" fill="#000000"></path>
                            </g>
                            </svg>
                        </td>
                        <td className="pl-10">
                            <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18.4595" r="18" fill="#111827" fillOpacity="0.1"></circle>
                            <g clipPath="url(#clip0)">
                                <path d="M15.135 24.797L9 18.662L9.81024 17.8517L15.135 23.1765L26.1898 12.1218L27 12.9321L15.135 24.797Z" fill="#000000"></path>
                            </g>
                            </svg>
                        </td>
                        </tr>
                        <tr className="text-xl text-center">
                        <td className="pl-16 py-6 text-left">Technical Support</td>
                        <td></td>
                        <td></td>
                        <td className="pl-10">
                            <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18.4595" r="18" fill="#111827" fillOpacity="0.1"></circle>
                            <g clipPath="url(#clip0)">
                                <path d="M15.135 24.797L9 18.662L9.81024 17.8517L15.135 23.1765L26.1898 12.1218L27 12.9321L15.135 24.797Z" fill="#000000"></path>
                            </g>
                            </svg>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div className="overflow-x-auto overflow-y-hidden">
                    <table className="table-auto w-full mb-10">
                    <thead className="bg-gray-100">
                        <tr className="text-lg text-left font-bold">
                        <th className="pl-16 py-5">Feature 3</th>
                        <th className="px-4 py-5">
                            <div className="flex items-center">
                            
                            1 Year
                            </div>
                        </th>
                        <th className="px-4 py-5">
                            <div className="flex items-center">
                            
                            2 Year
                            </div>
                        </th>
                        <th className="px-4 py-5">
                            <div className="flex items-center">
                            
                            3 Year
                            </div>
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-lg text-center border-b border-gray-50">
                        <td className="pl-16 py-6 text-left">Statistics &amp; Details</td>
                        <td className="pl-10">
                            <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18.4595" r="18" fill="#111827" fillOpacity="0.1"></circle>
                            <g clipPath="url(#clip0)">
                                <path d="M15.135 24.797L9 18.662L9.81024 17.8517L15.135 23.1765L26.1898 12.1218L27 12.9321L15.135 24.797Z" fill="#000000"></path>
                            </g>
                            </svg>
                        </td>
                        <td className="pl-10">
                            <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18.4595" r="18" fill="#111827" fillOpacity="0.1"></circle>
                            <g clipPath="url(#clip0)">
                                <path d="M15.135 24.797L9 18.662L9.81024 17.8517L15.135 23.1765L26.1898 12.1218L27 12.9321L15.135 24.797Z" fill="#000000"></path>
                            </g>
                            </svg>
                        </td>
                        <td className="pl-10">
                            <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18.4595" r="18" fill="#111827" fillOpacity="0.1"></circle>
                            <g clipPath="url(#clip0)">
                                <path d="M15.135 24.797L9 18.662L9.81024 17.8517L15.135 23.1765L26.1898 12.1218L27 12.9321L15.135 24.797Z" fill="#000000"></path>
                            </g>
                            </svg>
                        </td>
                        </tr>
                        <tr className="text-lg text-center border-b border-gray-50">
                        <td className="pl-16 py-6 text-left">Video chat</td>
                        <td></td>
                        <td></td>
                        <td className="pl-10">
                            <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18.4595" r="18" fill="#111827" fillOpacity="0.1"></circle>
                            <g clipPath="url(#clip0)">
                                <path d="M15.135 24.797L9 18.662L9.81024 17.8517L15.135 23.1765L26.1898 12.1218L27 12.9321L15.135 24.797Z" fill="#000000"></path>
                            </g>
                            </svg>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            </section>
            {/* <!--KTern Customer Testimonials--> */}
            <section className="relative py-20 overflow-hidden bg-gray-100 cursor-pointer sm:py-14 md:py-22">
            <div className="relative max-w-5xl px-16 mx-auto xl:px-0">
                <svg className="absolute top-0 left-0 hidden w-32 h-32 -mt-3 -ml-16 text-black opacity-50 xl:block" stroke="currentColor" fill="none" viewBox="0 0 144 144"><path strokeWidth="2" d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"></path></svg>
                <div className="relative xl:pl-32 lg:flex lg:items-center">
                    <div className="relative">
                        <blockquote className="relative">
                            <div className="font-serif text-xl font-medium leading-9 text-black md:text-2xl">
                                <p>An Awesome tool for the SAP Projects where Activate Methodology and GSI Is integrated seamlessly</p>
                            </div>
                            <div className="mt-4">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0"><Image className="object-cover w-12 h-12 mr-4 rounded-full" src="/technical-partner/edson.jpg" alt=""/> </div>
                                    <div className="ml-4 lg:ml-0">
                                        <div className="text-base font-medium leading-6 text-black">Edson Frainlar - Sr. Developer, KTern.Ai</div>
                                    </div>
                                </div>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
            </section>
            {/* <!--Steps to join KTern--> */}
            <section className="pt-5 pb-0 2xl:py-20 bg-black overflow-hidden">
            <div className="container px-14 mx-auto">
                <div className="mb-10 max-w-xl mx-auto mb-24 text-center">
                <span className="text-lg font-bold text-white">Are you Ready to Join the KTern Ecosystem?</span>
                <h2 className="mt-4 text-4xl lg:text-5xl text-white font-bold font-heading">Follow the Steps Below to become a KTern Partner  </h2>
                </div>
                <div className="relative flex flex-wrap justify-center -mx-10 mb-5">
                <Image className="hidden lg:block absolute inset-y-0 -mr-80 -mt-16" src="/partner/dots-gray.svg" alt=""/>
                <div className="w-full lg:w-1/3 px-10 mb-20 lg:mb-0">
                    <div className="relative flex">
                    <Image className="hidden lg:block absolute top-0 right-0 -mr-20 -mt-16" src="/partner/dots-gray.svg" alt=""/>
                    <div className="mr-8">
                        <span className="flex justify-center items-center w-14 h-14 text-black bg-white text-lg font-bold rounded-full">1</span>
                    </div>
                    <div className="max-w-xs">
                        <h3 className="mb-6 text-lg font-bold font-heading text-white">Send us a Message</h3>
                        <p className="text-md text-gray-200">You can Fill this Form to Let us Know you are Interested . Our Onboarding Team will review your application and reach out to you. </p>
                    </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/3 px-10 mb-20 lg:mb-0">
                    <div className="flex">
                    <div className="mr-8">
                        <span className="flex justify-center items-center w-14 h-14 text-black bg-white text-lg font-bold rounded-full">2</span>
                    </div>
                    <div className="max-w-xs">
                        <h3 className="mb-6 text-lg font-bold font-heading text-white">Onboarding</h3>
                        <p className="text-md text-gray-200">Upon approval of the application, a Partnership agreement is signed.</p>
                    </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/3 px-10">
                    <div className="flex">
                    <div className="mr-8">
                        <span className="flex justify-center items-center w-14 h-14 text-black bg-white text-lg font-bold rounded-full">3</span>
                    </div>
                    <div className="max-w-xs">
                        <h3 className="mb-6 text-lg font-bold font-heading text-white">Leverage KTern</h3>
                        <p className="text-md text-gray-200">A dedicated Partnership Manager will be handling your account,providing you with priority issue resolutions and also gain access to our Exclusive Partner Portal Loaded with Resources, Data, Report, you name them you got them!</p>
                    </div>
                    </div>
                </div>
                </div>
                
            </div>
            </section>
            {/* <!-- Footer CTA --> */}
           <section className="bg-white">
            <div className="px-8 py-8 mx-auto sm:py-10 lg:py-20 max-w-7xl">
            <div className="relative py-6 overflow-hidden rounded-lg bg-gradient-to-r from-black to-purple-100 lg:py-12 md:px-6 lg:p-16 lg:flex lg:items-center lg:justify-between md:shadow-xl md:bg-purple-1000">
            <div className="absolute top-0 right-0 hidden w-full -mt-20 transform rotate-45 translate-x-1/2 bg-white sm:block h-96 opacity-5"></div>
            <div className="absolute top-0 left-0 hidden w-full -mt-20 transform rotate-45 -translate-x-1/2 bg-white sm:block h-96 opacity-5"></div>
            <div className="relative p-6 rounded-lg md:p-0 md:pb-4">
            <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-white sm:text-4xl sm:leading-10">Get started with your DXaaS Journey</h2>
            <p className="w-full mt-5 text-lg leading-6 text-white ">Start your 15-day free trial. No credit card required. No strings attached.</p>
            </div>
            <div className="relative flex flex-col items-center w-full px-6 space-y-5 md:space-x-5 md:space-y-0 md:flex-row md:w-auto lg:flex-shrink-0 md:px-0">
            <Link className="  inline-block py-3 px-10 bg-black hover:bg-gray-100 hover:text-black shadow text-lg text-white font-bold rounded-l-xl rounded-t-xl transition duration-200 custom-card-subheading" href="#">See Pricing</Link>
           <Link className="  inline-block py-3 px-10 bg-white hover:bg-gray-50 hover:text-black shadow text-lg text-black font-bold rounded-l-xl rounded-t-xl transition duration-200 custom-card-subheading" href="#">Try it free</Link>
            </div>
            </div>
            </div>
            </section> 
         </Layout>
    )
}