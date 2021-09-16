import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react';
import FeatureCard from "./featureCard";
export default function Card ({data }) {
      const [ isFeature1Shown, setIsFeature1Shown ] = useState(true);
    const [ isFeature2Shown, setIsFeature2Shown ] = useState(false);
    const [ isFeature3Shown, setIsFeature3Shown ] = useState(false);
    const [ isFeature4Shown, setIsFeature4Shown ] = useState(false);
    const [ isFeature5Shown, setIsFeature5Shown ] = useState(false);
    return (
<>
            <ul className="bg-white px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-300  pb-6 pt-6 lg:pt-3" >
            <h3 className="navbar-h text-black text-bold mb-2">{data.title}</h3>
            <div >
                <li>
                <Link href="#"    ><a onMouseEnter={() => { setIsFeature1Shown(true);setIsFeature2Shown(false);setIsFeature3Shown(false);setIsFeature4Shown(false);setIsFeature5Shown(false)}}
                className="navbar-s block p-2 hover:bg-gray-50 text-black hover:text-gray-400">{data.feature1}</a></Link>
                </li>
                <li>
                <Link href="#"    ><a onMouseEnter={() => { setIsFeature1Shown(false);setIsFeature2Shown(true);setIsFeature3Shown(false);setIsFeature4Shown(false);setIsFeature5Shown(false)}}
                className="navbar-s block p-2 hover:bg-gray-50 text-black hover:text-gray-400">{data.feature2}</a></Link>
                </li>
                <li>
                <Link href="#"    ><a onMouseEnter={() => { setIsFeature1Shown(false);setIsFeature2Shown(false);setIsFeature3Shown(true);setIsFeature4Shown(false);setIsFeature5Shown(false)}}
                className="navbar-s block p-2 hover:bg-gray-50 text-black hover:text-gray-400">{data.feature3}</a></Link>
                </li>
                <li>
                <Link href="#"   ><a onMouseEnter={() => { setIsFeature1Shown(false);setIsFeature2Shown(false);setIsFeature3Shown(false);setIsFeature4Shown(true);setIsFeature5Shown(false)}}
                className="navbar-s block p-2 hover:bg-gray-50 text-black hover:text-gray-400">{data.feature4}</a></Link>
                </li>
                <li>
                <Link href="#"   ><a  onMouseEnter={() => { setIsFeature1Shown(false);setIsFeature2Shown(false);setIsFeature3Shown(false);setIsFeature4Shown(false);setIsFeature5Shown(true)}}
                className="navbar-s block p-2 hover:bg-gray-50 text-black hover:text-gray-400">{data.feature5}</a></Link>
                </li>
                    <li className="mt-4 mx-2">
                        <Link href={data.url} passHref>
                 <a className="inline-flex items-center pb-1  text-black hover:border-blue-500 group ">
                 <span className="tiny-heading group-hover:text-gray-400">See All Features</span>
                 <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                 </svg>
                 </a>
             </Link> </li>    
            </div>
         
            </ul>
            <ul className={data.class}>
          <div className="flex">  
          <div className=" mx-6 relative w-8 h-8">
            <Image src={data.icon} layout="fill" alt="Digital Maps Icon" />
            </div>
<span className="my-auto"><strong>{data.title}</strong></span></div>
        {isFeature1Shown && (
<<<<<<< HEAD
            <FeatureCard data={ data.feature_data[0]}/>
=======
          <FeatureCard  data={{title:'Feature 1',description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro perspiciatis eos aut enim autem ducimus dolor rem eaque excepturi delectus, dolore a, vero neque? Vitae libero delectus obcaecati',image:'https://cdn.devdojo.com/images/may2021/blog-image-01.jpg',url:data.feature_url}}/>
>>>>>>> c16b5dc594e89e059420c2a260d68bce149dd184
          )}
        {isFeature2Shown && (
            <FeatureCard data={ data.feature_data[1]}/> )}
         {isFeature3Shown && (
            <FeatureCard data={ data.feature_data[2]}/> )}
         {isFeature4Shown && (
            <FeatureCard data={ data.feature_data[3]}/> )}
         {isFeature5Shown && (
                    <FeatureCard data={data.feature_data[4]} />)}
                
</ul>
 </>
    )
}