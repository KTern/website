import Link from "next/link"
import Image from "next/image"
export default function FeatureCard ({ data }) {
    return (
          <div className="p-6 flex space-x-10">
             <div className="w-1/2">
                 <h3 className="navbar-h text-black text-bold mb-2 uppercase">{data.title}</h3>
                 <p className="mb-4 navbar-s">{data.description}</p>
                  <Link href={data.url}  passHref>
                 <a className="inline-flex items-center pb-1 text-black hover:border-blue-500 group hyperlink group-hover:text-gray-400">Learn More
                 <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                 </svg>
                 </a>
             </Link> 
             </div>
             <div className="w-1/2">
                 <Image className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src={data.image.imageURL} alt={data.image.imageDescription}  width={data.image.width} height={data.image.height}/>
             </div>
         </div>
                                           
    )
}