import Link from "next/link"
import Image from "next/image"
export default function DoubleBanner ({ data }) {
    return (
          <div className="items-center justify-center  flex ">
            <div className="w-full">
                   <div className="w-full grid grid-cols-3  gap-6 mb-6 ">
                    {data.map((dt)=>(<Link key="dt" href={dt.CTALink} >
                        <a className=" group w-100 h-auto border-2 hover:border-black space-y-3  shadow-lg hover:shadow-xl  p-4">
                            <div className="">
                           <div className="relative block w-full h-28 overflow-hidden rounded"> 
                            <Image className="bg-secondary object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src={dt.ImageURL} alt="resource" layout="fill"/>
                           </div>
                            </div>
                            <div className="px-4">
                        
                                <span className="block card-subheading font-semibold leading-tight text-gray-700 mb-4 hover:text-gray-900 ">{dt.Title}</span>
                        <Link href={dt.CTALink}  passHref>
                                        <a className="inline-flex items-center   text-black hover:text-gray-400 group ">
                                        <span className="hyperlink group-hover:text-gray-300">{dt.CTAText}</span>
                                        <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                        </a>
                                    </Link>
                            </div>
                            </a>
                    </Link>))}
                   
</div>
             </div>
            
         </div>
                                           
    )
}