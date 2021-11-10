import Head from "next/head"
import Image from "next/image";
import Link from "next/link";
export default function Footer ({footer_data}) {
    return (
        <>
           
    <section className="px-4 py-4 md:py-10 md:px-10 bg-black">
        <div className="md:px-10 mx-auto ">
            <div className="flex flex-wrap -mx-4  border-b border-gray-500 p">
                <div className="w-full  px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-1/2 lg:w-1/4 px-4 mb-12">
                            <h3 className="mb-8 lg:mb-2  text-white  navbar-h">Company</h3>
                            <ul className="">
                                <li className="mb-2"><Link  href="/about-company"><a className="navbar-s text-gray-200 hover:text-gray-100 ">About us</a></Link></li>
                                <li className="mb-2"><Link  href="/pricing"><a className="navbar-s text-gray-200 hover:text-gray-100 ">Pricing</a></Link></li>
                                <li className="mb-2"><Link  href="/"><a className="navbar-s text-gray-200 hover:text-gray-100 ">Newsroom</a></Link></li>
                                <li className="mb-2"><Link  href="/trust-center"><a className="navbar-s text-gray-200 hover:text-gray-100 ">Trust Center</a></Link></li>
                                
                            </ul>
                        </div>
                        <div className="w-1/2 lg:w-1/4 px-4 mb-12">
                            <h3 className="mb-8 lg:mb-2 navbar-h text-white">Products</h3>
                            <ul className="">
                                <li className="mb-2"><Link  href="/digital-maps"><a className="navbar-s text-gray-200 hover:text-gray-100 ">Digital Maps</a></Link></li>
                                    <li className="mb-2"><Link href="/digital-projects"><a className="navbar-s text-gray-200 hover:text-gray-100 ">Digital Projects</a></Link></li>
                                     <li className="mb-2"><Link  href="/digital-process"><a className="navbar-s text-gray-200 hover:text-gray-100 ">Digital Process</a></Link></li>
                                <li className="mb-2"><Link  href="/digital-labs"><a className="navbar-s text-gray-200 hover:text-gray-100 ">Digital Labs</a></Link></li>
                                <li className="mb-2"><Link  href="/digital-mines"><a className="navbar-s text-gray-200 hover:text-gray-100 ">Digital Mines</a></Link></li>
                            </ul>
                        </div>
                             <div className="w-1/2 lg:w-1/4 px-4 mb-12">
                            <h3 className="mb-8 lg:mb-2 navbar-h text-white">Resources</h3>
                                <ul className="">
                                    <li className="mb-2"><Link  href="/resources" passHref><a className="navbar-s text-gray-200 hover:text-gray-100 ">Resource Library</a></Link></li>
                                <li className="mb-2"><Link  href="/webinars" passHref><a className="navbar-s text-gray-200 hover:text-gray-100 ">Webinars</a></Link></li>
                                <li className="mb-2"><Link  href="/article" passHref><a target="_blank" className="navbar-s text-gray-200 hover:text-gray-100 ">Articles</a></Link></li>
                                <li className="mb-2"><Link  href="/resources" passHref><a className="navbar-s text-gray-200 hover:text-gray-100 ">E-Books</a></Link></li>
                                    <li className="mb-2"><Link href="/resources" passHref><a className="navbar-s text-gray-200 hover:text-gray-100 ">Customer Success Stories </a></Link></li>
                                    <li className="mb-2"><Link href="/trust-center" passHref><a className="navbar-s text-gray-200 hover:text-gray-100 ">Trust Center</a></Link></li>
                                    <li className="mb-2"><Link href="/pricing" passHref><a className="navbar-s text-gray-200 hover:text-gray-100 ">Pricing</a></Link></li>
                                    <li className="mb-2"><Link href="/docs" passHref><a target="_blank" className="navbar-s text-gray-200 hover:text-gray-100 ">Documentation</a></Link></li>
                                    
                                <li className="mb-2"><Link  href="https://live.ktern.com" passHref><a target="_blank" className="navbar-s text-gray-200 hover:text-gray-100 ">Cloud Live Status</a></Link></li>
                               
                            </ul>
                        </div>
                        <div className="w-1/2 lg:w-1/4 px-4 mb-12">
                            <h3 className="mb-8 lg:mb-2 navbar-h text-white">Partner</h3>
                            <ul className="">
                                <li className="mb-2"><Link  href="/partners"><a className="navbar-s text-gray-200 hover:text-gray-100 ">Partners</a></Link></li>
                                <li className="mb-2"><Link  href="/consulting-partner"><a className="navbar-s text-gray-200 hover:text-gray-100 ">Consulting Partner</a></Link></li>
                                <li className="mb-2"><Link  href="/technology-partner"><a className="navbar-s text-gray-200 hover:text-gray-100 ">Technology Partner</a></Link></li>
                                    <li className="mb-2"><Link href="/partner-register"><a className="navbar-s text-gray-200 hover:text-gray-100 ">Become a Partner</a></Link></li>
                                    <li className="mb-2"><Link  href="/"><a className="navbar-s text-gray-200 hover:text-gray-100 ">Partner Portal</a></Link></li>
                                
                            </ul>
                        </div>
                        </div>
                            <div className="flex">
                                <Link href="https://store.sap.com/dcp/en/product/display-0000059068_live_v1/KTern.AI%20for%20SAP%20Digital%20Transformation%20Workplace">
                                    <a className="">
                    <div className=" ">
                        <Image width={150} src="https://images.squarespace-cdn.com/content/v1/5b55cf033917eed698779277/1613654676284-6L5Q8M2C5X2ITXB7VRB3/Available-on-SAP-Store-White-BG-Wallet.png" className="sm:w-20 mb-6 h-auto text-white " alt="Available on SAP Store"  height="50%"/>
                        </div></a>
                        </Link>
                    
                                <Link href="https://www.g2.com/products/ktern/reviews"><a target="_blank" className="mb-4 x-g2-link-home" title="G2"> <Image width="150px" height="50%" src="/g2.svg" alt="G2" /></a></Link>
                    

        </div>
                </div>

            </div>
            <div className="flex flex-wrap   lg:mb-2 lg:mb-0 ">
                <div className="w-full  lg:w-1/2 lg:mb-2 md:mb-0">
                    <div className="md:flex  items-center ">
                        <Link className="  text-white   " href="#" passHref>
                            <Image  src="/assets/WhiteKTern-01.svg" alt="" width={150} height={150} />
                            </Link>
                            
                        <span className="hidden md:inline-block mx-8 w-px h-8 bg-gray-500"></span>
                        
                        <p className="navbar-h space-x-3 lg:block  text-white ">
                            <span className="text-xs"><Link href="/trust-center"><a >Privacy Policy</a></Link></span>
                            <span className="text-xs"><Link href="/trust-center"><a >Cookies Policy</a></Link></span>
                                    <span className="text-xs"><Link href="/trust-center"><a >Terms of Service</a></Link></span>
                                     <span className="text-xs"><Link href="/trust-center"><a >GDPR Compliance</a></Link></span>
                        </p>

                    </div>
                    <p className="py-0 hidden lg:block  text-white ">
                        <span className="text-xs">© 2021 KTern All rights reserved.</span><br/>
                        <span className="text-xs text-gray-200">KTern is a registered trademark of Kaar Technologies  Pvt. Ltd.</span>
                    </p>
                </div>
                <div className="w-full md:w-1/2 ">

                    <div className="md:flex items-center justify-end pt-4 sm:pt-10 xl:pt-14">
                        <div className="w-full lg:w-1/2">
                            <div className="flex lg:justify-end mb-6 lg:mb-10">
                               {/* <Link className="flex justify-center items-center w-10 h-10 mr-4 bg-white rounded-full" href="#">
                                    <svg className="text-black" width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path fillRule="evenodd" clip-rule="evenodd" d="M4.0898 11.8182V6.51068H5.90537L6.17776 4.44164H4.0898V3.12086C4.0898 2.52201 4.25864 2.1139 5.13515 2.1139L6.25125 2.11345V0.26283C6.05824 0.238228 5.39569 0.181824 4.62456 0.181824C3.01431 0.181824 1.9119 1.14588 1.9119 2.91594V4.44164H0.0908203V6.51068H1.9119V11.8182H4.0898Z" fill="currentColor"></path>
                                    </svg>
                                </Link>  */}
                                    <Link  href="#" passHref>
                                        <a className="flex justify-center items-center w-10 h-10 mr-4 bg-white rounded-full">
                                    <svg className="text-black" width="20" height="auto" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path fillRule="evenodd" clipRule="evenodd" d="M12.5455 2.09728C12.0904 2.29892 11.6022 2.43566 11.0892 2.49671C11.613 2.18304 12.014 1.6855 12.204 1.09447C11.7127 1.38496 11.1703 1.59589 10.5924 1.71023C10.1296 1.21655 9.47138 0.909058 8.74128 0.909058C7.34059 0.909058 6.20489 2.04475 6.20489 3.44467C6.20489 3.64322 6.2273 3.83714 6.27057 4.02257C4.16298 3.91671 2.29411 2.90696 1.0433 1.37259C0.824652 1.74653 0.700269 2.18225 0.700269 2.64736C0.700269 3.52734 1.14837 4.30379 1.82825 4.75805C1.41259 4.74415 1.02166 4.62981 0.67942 4.43975V4.47142C0.67942 5.69983 1.55399 6.72504 2.71362 6.95837C2.50116 7.01554 2.27712 7.04722 2.04534 7.04722C1.88156 7.04722 1.72318 7.031 1.56788 7.00009C1.89081 8.00831 2.8272 8.74148 3.93663 8.76158C3.06902 9.44146 1.97504 9.84552 0.786814 9.84552C0.582087 9.84552 0.38043 9.83316 0.181885 9.81076C1.30445 10.5316 2.63716 10.9519 4.06952 10.9519C8.73514 10.9519 11.2854 7.0874 11.2854 3.73595L11.2769 3.4076C11.7752 3.05219 12.2063 2.60564 12.5455 2.09728Z" fill="currentColor"></path>
                                    </svg>
                                    </a>
                                </Link>
                               {/* <Link className="flex justify-center items-center w-10 h-10 mr-4 bg-white rounded-full" href="#">
                                    <svg className="text-black" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path fillRule="evenodd" clip-rule="evenodd" d="M4.06713 0.454529H9.9328C11.9249 0.454529 13.5456 2.07519 13.5455 4.06715V9.93282C13.5455 11.9248 11.9249 13.5454 9.9328 13.5454H4.06713C2.07518 13.5454 0.45459 11.9249 0.45459 9.93282V4.06715C0.45459 2.07519 2.07518 0.454529 4.06713 0.454529ZM9.9329 12.3839C11.2845 12.3839 12.3841 11.2844 12.3841 9.93282H12.384V4.06714C12.384 2.71563 11.2844 1.61601 9.93282 1.61601H4.06715C2.71564 1.61601 1.61609 2.71563 1.61609 4.06714V9.93282C1.61609 11.2844 2.71564 12.384 4.06715 12.3839H9.9329ZM3.57148 7.00005C3.57148 5.10947 5.10951 3.5714 7.00005 3.5714C8.8906 3.5714 10.4286 5.10947 10.4286 7.00005C10.4286 8.89056 8.8906 10.4285 7.00005 10.4285C5.10951 10.4285 3.57148 8.89056 3.57148 7.00005ZM4.75203 6.99998C4.75203 8.23951 5.76054 9.24788 7.00004 9.24788C8.23955 9.24788 9.24806 8.23951 9.24806 6.99998C9.24806 5.76036 8.23963 4.75191 7.00004 4.75191C5.76046 4.75191 4.75203 5.76036 4.75203 6.99998Z" fill="currentColor"></path>
                                    </svg>
                                </Link>  */}
                                    <Link  href="#" passHref>
                                        <a className="flex justify-center items-center w-10 h-10 mr-4 bg-white rounded-full">
                                    <svg className="text-black" width="16" height="auto" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M10.8 0H1.2C0.54 0 0 0.54 0 1.2V10.8C0 11.46 0.54 12 1.2 12H10.8C11.46 12 12 11.46 12 10.8V1.2C12 0.54 11.46 0 10.8 0ZM3.6 10.2H1.8V4.8H3.6V10.2ZM2.7 3.78C2.1 3.78 1.62 3.3 1.62 2.7C1.62 2.1 2.1 1.62 2.7 1.62C3.3 1.62 3.78 2.1 3.78 2.7C3.78 3.3 3.3 3.78 2.7 3.78ZM10.2 10.2H8.4V7.02C8.4 6.54002 7.98 6.12 7.5 6.12C7.02 6.12 6.6 6.54002 6.6 7.02V10.2H4.8V4.8H6.6V5.52C6.9 5.04 7.56 4.68 8.1 4.68C9.24 4.68 10.2 5.64 10.2 6.78V10.2Z" fill="currentColor"></path>
                                    </svg>
                                    </a>
                                </Link>
                                    <Link  href="#" passHref>
                                        <a className="flex justify-center items-center w-10 h-10 mr-4 bg-white rounded-full">
                                    <svg className="text-black" width="22" height="auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="20" clipRule="evenodd"><path d="M14.862 4.463c-.407-.702-.848-.831-1.747-.88-.898-.059-3.157-.083-5.113-.083-1.96 0-4.22.024-5.117.083-.897.05-1.339.178-1.75.88C.716 5.165.5 6.372.5 8.498v.008c0 2.117.216 3.333.635 4.026.41.701.852.829 1.75.888.897.05 3.156.08 5.117.08 1.956 0 4.215-.03 5.114-.08.899-.059 1.34-.187 1.747-.888.424-.694.638-1.91.638-4.026v-.005-.003c-.001-2.126-.214-3.333-.639-4.035z"/><path d="M6.5 11V6l4 2.5z"/></g></svg>
                                    </a>
                                </Link>
                                    <Link  href="#" passHref>
                                        <a className="flex justify-center items-center w-10 h-10 mr-4 bg-white rounded-full">
                                    <Image className="w-5" src="/assets/icons/xing.png" alt="Xing" width={30} height={15}/>
                                    </a>
                                </Link>
                            </div>

                        </div>
                    </div>
                    <div className=" flex lg:justify-end items-center pb-10">

                        {/* <div className="relative pt-2">
                            <select className=" appearance-none w-auto h-auto p-3 px-20   bg-white border-2 border-white rounded outline-none" name="field-name">
                                        <option>English</option>
                                        <option>German</option>
                                        <option>French</option>
                                        <option>Spanish</option>
                                    </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 mt-2 text-gray-700">
                                <svg className="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                                </svg>
                            </div>
                        </div> */}
                    </div>
                </div>


            </div>
            <p className="lg:hidden  text-white ">
                <span>© 2021 KTern All rights reserved.</span>
                <span className="navbar-s text-gray-200">©2001-2021 All Rights Reserved. KTern is a registered trademark of Kaar Technologies  Pvt. Ltd.</span>
                </p>
                   
        </div>
            </section>
            </>
    )
}

export const getServerSideProps = async () => {
    // data url from strapi
    let data={a:'ab'}
    
    return {
        props: {
            footer_data:data
        }
    }
}