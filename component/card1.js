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
            <ul className="bg-white px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-300  pb-6  md:pt-3" >
            <h3 className="navbar-h text-black text-bold mb-2 uppercase">{data.title}</h3>
            <div >
                <li>
                <Link href={data.url1}    ><a onMouseEnter={() => { setIsFeature1Shown(true);setIsFeature2Shown(false);setIsFeature3Shown(false);setIsFeature4Shown(false);setIsFeature5Shown(false)}}
                className="navbar-s block p-2 hover:bg-gray-50 text-black">{data.feature1}</a></Link>
                </li>
                <li>
                <Link href={data.url2}    ><a onMouseEnter={() => { setIsFeature1Shown(false);setIsFeature2Shown(true);setIsFeature3Shown(false);setIsFeature4Shown(false);setIsFeature5Shown(false)}}
                className="navbar-s block p-2 hover:bg-gray-50 text-black">{data.feature2}</a></Link>
                </li>
                <li>
                <Link href={data.url3}    ><a onMouseEnter={() => { setIsFeature1Shown(false);setIsFeature2Shown(false);setIsFeature3Shown(true);setIsFeature4Shown(false);setIsFeature5Shown(false)}}
                className="navbar-s block p-2 hover:bg-gray-50 text-black">{data.feature3}</a></Link>
                </li>
                <li>
                <Link href={data.url4}   ><a onMouseEnter={() => { setIsFeature1Shown(false);setIsFeature2Shown(false);setIsFeature3Shown(false);setIsFeature4Shown(true);setIsFeature5Shown(false)}}
                className="navbar-s block p-2 hover:bg-gray-50 text-black">{data.feature4}</a></Link>
                </li>
                <li>
                <Link href={data.url5}   ><a  onMouseEnter={() => { setIsFeature1Shown(false);setIsFeature2Shown(false);setIsFeature3Shown(false);setIsFeature4Shown(false);setIsFeature5Shown(true)}}
                className="navbar-s block p-2 hover:bg-gray-50 text-black">{data.feature5}</a></Link>
                </li>
                    <li className="mt-4 mx-2">
                        <Link href={data.features_url} passHref>
                 <a className="inline-flex items-center pb-1  text-black hover:border-blue-500 group   hyperlink group-hover:text-gray-400">See All Features
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
            <Image src={data.icon.imageURL} layout="fill" alt={data.icon.imageDescription} />
            </div>
      
<span className="my-auto navbar-h text-black text-bold mb-2 uppercase">{data.title}</span></div>
        {isFeature1Shown && (
          <FeatureCard  data={{title:data.feature1,description:data.feature1_desc,url:data.url1,image:data.feature1_image }}/>
          )}
        {isFeature2Shown && (
          <FeatureCard  data={{title:data.feature2,description:data.feature2_desc,url:data.url2,image:data.feature2_image }}/>)}
         {isFeature3Shown && (
          <FeatureCard  data={{title:data.feature3,description:data.feature3_desc,url:data.url3,image:data.feature3_image }}/>)}
         {isFeature4Shown && (
          <FeatureCard  data={{title:data.feature4,description:data.feature4_desc,url:data.url4,image:data.feature4_image }}/>)}
         {isFeature5Shown && (
          <FeatureCard  data={{title:data.feature5,description:data.feature5_desc,url:data.url5,image:data.feature5_image }}/>)}
                
</ul>
 </>
    )
}