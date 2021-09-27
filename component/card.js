import Link from "next/link";
import Image from "next/image";
export default function Card1 ({data}) {
    return (
         <ul className="bg-white px-4 w-full  border-gray-300  pb-6 pt-6 lg:pt-3" onMouseEnter={() => {setIsFeature1Shown(true)}}>
            <h3 className="navbar-h text-black text-bold mb-2">{data.title}</h3>
            <div >
                <li>
                <Link href="#"    ><a 
                className="navbar-s block p-2 hover:bg-gray-50 text-black hover:text-gray-400">{data.feature1}</a></Link>
                </li>
                <li>
                <Link href="#"    ><a 
                className="navbar-s block p-2 hover:bg-gray-50 text-black hover:text-gray-400">{data.feature2}</a></Link>
                </li>
                <li>
                <Link href="#"    ><a 
                className="navbar-s block p-2 hover:bg-gray-50 text-black hover:text-gray-400">{data.feature3}</a></Link>
                </li>
                <li>
                <Link href="#"   ><a 
                className="navbar-s block p-2 hover:bg-gray-50 text-black hover:text-gray-400">{data.feature4}</a></Link>
                </li>
                <li>
                <Link href="#"   ><a  
                className="navbar-s block p-2 hover:bg-gray-50 text-black hover:text-gray-400">{data.feature5}</a></Link>
                </li>
                    <li className="mt-4 mx-2">
                        <Link href={data.url} passHref>
                 <a className="inline-flex items-center pb-1 font-medium text-black hover:border-blue-500 group ">
                 <span className="hyperlink group-hover:text-gray-400">See All Features</span>
                 <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                 </svg>
                 </a>
             </Link> </li>    
            </div>
         
            </ul>
    )
}