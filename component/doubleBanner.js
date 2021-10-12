import Link from "next/link"
import Image from "next/image"
export default function DoubleBanner ({ data }) {
    return (
          <div className="p-6 flex space-x-10">
            <div className="w-full">
                   <div className="grid grid-cols-6  gap-6 mb-6 ">
                    <Link href={data.url1} >
                        <a className="relative group  border-2 hover:border-black space-y-3 col-span-3 md:col-span-5 lg:col-span-2 shadow-lg hover:shadow-xl  p-4">
                            <div className="">
                           <div className="relative block w-full h-44 overflow-hidden rounded"> 
                            <Image className="bg-secondary object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src={data.image1} alt="resource" layout="fill"/>
                           </div>
                            </div>
                            <div className="px-4">
                        
                            <span className="block card-subheading font-semibold leading-tight text-gray-700 mb-4 hover:text-gray-900 ">{data.title1}</span>
                        <Link href={data.url1}  passHref>
                                        <a className="inline-flex items-center   text-black hover:text-gray-400 group ">
                                        <span className="hyperlink group-hover:text-gray-300">Read more</span>
                                        <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                        </a>
                                    </Link>
                            </div>
                            </a>
                    </Link>
                     <Link href={data.url2} >
                        <a className="relative group  border-2 hover:border-black space-y-3 col-span-3 md:col-span-5 lg:col-span-2 shadow-lg hover:shadow-xl  p-4">
                            <div className="">
                           <div className="relative block w-full h-44 overflow-hidden rounded"> 
                            <Image className="bg-secondary object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src={data.image2} alt="resource" layout="fill"/>
                           </div>
                            </div>
                            <div className="px-4">
                        
                            <span className="block card-subheading font-semibold leading-tight text-gray-700 mb-4 hover:text-gray-900 ">{data.title2}</span>
                        <Link href={data.url2}  passHref>
                                        <a className="inline-flex items-center   text-black hover:text-gray-400 group ">
                                        <span className="hyperlink group-hover:text-gray-300">Read more</span>
                                        <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                        </a>
                                    </Link>
                            </div>
                            </a>
                    </Link>
                     <Link href={data.url3} >
                        <a className="relative group  border-2 hover:border-black space-y-3 col-span-3 md:col-span-5 lg:col-span-2 shadow-lg hover:shadow-xl  p-4">
                            <div className="">
                           <div className="relative block w-full h-44 overflow-hidden rounded"> 
                            <Image className="bg-secondary object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src={data.image3} alt="resource" layout="fill"/>
                           </div>
                            </div>
                            <div className="px-4">
                        
                            <span className="block card-subheading font-semibold leading-tight text-gray-700 mb-4 hover:text-gray-900 ">{data.title3}</span>
                        <Link href={data.url3}  passHref>
                                        <a className="inline-flex items-center   text-black hover:text-gray-400 group ">
                                        <span className="hyperlink group-hover:text-gray-300">Read more</span>
                                        <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                        </a>
                                    </Link>
                            </div>
                            </a>
                    </Link>
</div>
             </div>
            
         </div>
                                           
    )
}