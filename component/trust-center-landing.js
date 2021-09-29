import Image from "next/image";
import Link from "next/link";
export default function TrustCenterLayout ({ data }) {
    return (
        <div>
             <section className="w-full py-28 bg-herogradient" >
            <div className="flex flex-col items-center px-12 mx-auto lg:flex-row">
                <div className="relative z-20 flex flex-col  w-full h-full ">
                 <p className="w-60 inline-block px-2 py-1 mb-5  hyperlink text-gray-900 uppercase bg-gray-200 rounded-full ">
                    {data.tag}
                </p>
                    <h1 className="heading text-white mb-5"  >{data.heading} </h1>
                    <p className="subheading text-gray-100 pb-7">{data.subheading}</p>
                    
                </div>

               
            </div>
            </section>



            <section>
            <div className="flex flex-wrap mx-20">
            <div className="w-full md:w-2/3  mb-4 md:mb-0">
            <div className="max-w-full ">
            <div className="text-left mb-10">
                        <p className="text-black hyperlink  mt-10">{data.time}</p>
                                        </div>
                                        {data.contentList.map(content => (
                    <section id="section-1" key="content">
                    <h1 className=" card-heading mb-6 text-left  text-black "> {content.contentHeading} </h1>
                    <p className="mb-6 text-justify card-subheading  text-black">{content.contentSubHeading}</p>
                                        </section>
                                        ))}
                </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0 ">
            
            </div>
            </div>
            </section>


        </div>
    )
}