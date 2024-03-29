import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
export default function WebinarLayout ({ data }) {
    const router = useRouter();
    // console.log("Hello",data.learnlist[2])
    const handleSearch = (event) => {
        // console.log("clicked" +data.type+event)
       
            router.push({
              pathname:"thanks/"+`${data.title}`,
               state:`${ data.type}`
            });
      
    }
    return (
        <>
            <section className="relative sm:mb-20" >
            <div className={`absolute inset-0 bg-gradient-to-b ${data.class} opacity-30`}></div>
        
            <div className="relative z-20 px-4 py-24 mx-auto text-center text-white max-w-7xl lg:py-32 ">
                <div className="flex flex-wrap text-white">
                    <div className="relative w-full px-4 mx-auto text-center xl:flex-grow-0 xl:flex-shrink-0">        
                            <h1 className="mt-0 mb-2 heading  text-black ">{ data.title}</h1>
                        <p className="mt-0 mb-4  text-black subheading">
                            {data.type}
                        </p>
        
                    </div>
                </div>
            </div>
        
            <div className="relative z-30  md:px-10 bg-white sm:h-0 ">
                <div className="flex flex-row  items-center sm:h-26 max-w-lg md:p-6 mx-auto space-y-3 overflow-hidden transform -translate-y-12 bg-white rounded-lg shadow-md lg:h-24 lg:max-w-6xl lg:flex-row lg:space-y-0 lg:space-x-3">
                        <div className="mb-8  mt-10 flex sm:flex-col items-center lg:justify-center w-1/3 px-4">
                            <div className="block  sm:h-6 w-10 h-10 md:mr-4 relative">
                            <Image priority layout="fill" className=" w-full shadow-sm max-h-20" src="/webinar/calendar.png" alt="Calendar"/>
                            </div>
                            <div>
                            <h3 className="sm:text-center hyperlink  lg:">{data.date}</h3>
                            
                            </div>
                        </div>
                        <div className="mb-8 flex sm:flex-col items-center lg:justify-center w-1/3 px-4">
                        <div className="block  sm:h-6 w-10 h-10 md:mr-4 relative">
                            <Image priority layout="fill" className=" w-full shadow-sm max-h-20" src="/webinar/clock.png" alt="Calendar"/>
                            </div>
                            <div>
                            <h3 className="sm:text-center hyperlink">{data.time}</h3>
                            <p className="sm:text-center hyperlink">{data.zone}</p>
                            
                            </div>
                        </div>
                        <div className="mb-8  flex sm:flex-col items-center lg:justify-center w-1/3 px-4">
                        <div className="block  sm:h-6 w-10 h-10 md:mr-4 relative ">
                            <Image priority layout="fill" className=" w-full shadow-sm max-h-20" src="/webinar/tickets.png" alt="Calendar"/>
                            </div>
                            <div>
                            <h3 className="sm:text-center  hyperlink sm:mb-10">{data.cost}</h3>
                            
                            </div>
                        </div>
                        </div>
            </div>
            </section>
            <section className="w-full px-8 pt-20 py-10 bg-white xl:px-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex flex-col items-start md:flex-row">

                            <div className="w-full space-y-5 md:w-3/5 md:pr-16">
                                <p className={`inline-block py-1 pl-4 pr-4 mb-0 -ml-0 hyperlink  leading-5 text-black transform -translate-y-2  rounded ${data.categoryStyle}`} >
                                <Link href="#_"  rel="category">
                                   <a className="text-black hyperlink uppercase" > {data.category}</a>
                                </Link>
                            </p>
                            <h2 className=" card-heading  text-black sm: md:">
                                About
                            </h2>
                            <p className=" text-gray-600 card-subheading md:pr-16">{ data.about}</p>
                                <h2 className=" card-heading  text-black sm: md:">
                                You&apos;ll Learn
                                </h2>
                                <ul className="w-full rounded-lg mt-2 mb-3 text-black">
                                {data.learnlist.map((content) => (
                                    <li className="mb-2" key="content">
                                        <div className="w-fill flex  text-gray-600 md:pr-16">
                                            <div className=" block w-4 h-4 relative flex-none">
                                                <svg className="w-5 h-5 mr-1 text-black mt-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                            </div>
                                            <span className="ml-2 card-subheading" title="Point 1" >{content.listItem}</span>
                                        </div>
                                    </li>
                                ))}
                                 </ul>
                                    <h2 className="card-heading   text-black sm: md:">
                                    Your Panelists
                                </h2>
                                    <div className="flex items-center  p-5 rounded-xl">
                                {data.panellist.map(member => (
                                    <div className="text-center pr-6 " key={member} >
                                            <div className=" block w-40 h-40 relative ">
                                                <Image priority layout="fill" className="mx-auto rounded-full mb-6 object-cover border-2 border-black" src={member.image} alt=""/>
                                            </div>
                                            <h3 className="mb-1   card-heading">{member.name}</h3>
                                            <p className="text-gray-500 card-subheading">{member.designation}</p>
                                    </div>
                                ))}

                    

                                    </div>
                            </div>

                            <div className="w-full mt-16 md:mt-0 md:w-2/5">
                                <div className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                                    <h3 className="mb-6 card-heading  text-center">Register for the Webinar</h3>
                                    <div className="relative w-full mt-6 space-y-8">
                                    <div className="relative">
                                        <label className="absolute px-2 ml-2 -mt-3 card-subheading text-gray-600 bg-white">First Name</label>
                                        <input type="text" className="block w-full px-4 py-4 mt-2  placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="John"/>
                                    </div>
                                    <div className="relative">
                                        <label className="absolute px-2 ml-2 -mt-3 card-subheading text-gray-600 bg-white">Last Name</label>
                                        <input type="text" className="block w-full px-4 py-4 mt-2  placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="Doe"/>
                                    </div>
                                    <div className="relative">
                                        <label className="absolute px-2 ml-2 -mt-3 card-subheading text-gray-600 bg-white">Email Address</label>
                                        <input type="text" className="block w-full px-4 py-4 mt-2  placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="janedoe@email.com"/>
                                    </div>
                                    <div className="relative">
                                        <label className="absolute px-2 ml-2 -mt-3  text-gray-600 card-subheading bg-white">Phone</label>
                                        <input type="number" className="block w-full px-4 py-4 mt-2  placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="Phone Number"/>
                                    </div>
                                    <div className="relative  text-center">
                                    
                                        {/* <Link href={data.redirect_url} onClick={()=>{handleSearch(event)}} forwardHref>
                                            <a className="inline-block w-full px-5 py-4 button  text-center text-white transition duration-200 bg-black 
                                            rounded-r-xl rounded-b-xl button transition duration-200 hover:bg-gray-500 ease">Submit</a>
                                        </Link> */}
<button onClick={()=>handleSearch(event)} className="inline-block w-full px-5 py-4 button  text-center text-white transition duration-200 bg-black 
                                            rounded-r-xl rounded-b-xl button transition duration-200 hover:bg-gray-500 ease">Submit</button>
                                    </div>
                                    </div>

                                </div>
                        </div>

                    </div>
                </div>
            </section>
            </>
    )
}