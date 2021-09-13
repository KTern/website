import Layout from "../component/Layout"
import Image from "next/image";
import Link from "next/link";
export default function ThankYou ()
{
    return (
        <Layout>
            
    <section className="relative py-10 2xl:py-20 bg-gray-800 overflow-hidden flex justify-center ">
     
  <div className="absolute top-0 right-0 h-40 lg:h-80 lg:mr-34 lg:mt-24"><Image  src="/404/five-stars.svg" alt="" width={400} height={300}/></div>
     
      <div className="container px-3 mx-auto">
        <div className="max-w-3xl mx-auto pb-10  text-center">
           
          <h2 className="my-10 text-5xl lg:text-4xl font-bold font-heading text-white">Thank You for Registering for the Webinar</h2>
                        <div className="max-w-md mx-auto">
                           
            <p className="mb-10 text-lg text-gray-200">We look forward to you joining our Webinar</p>
            
                            <Link  href="/" passHref>
                                <a className="  inline-block py-3 px-10 bg-white hover:bg-gray-50 hover:text-black shadow text-lg text-black font-bold rounded-l-xl rounded-t-xl transition duration-200 custom-card-subheading">Return Home</a>
                                </Link>
            
          </div>
          
        </div>
       <section className="w-full py-8 bg-white sm:py-12 md:py-8">
            <div className="px-10 mx-auto max-w-7xl">
                <div className="flex items-center justify-between w-full pb-5 mb-8 border-b border-gray-200">
                    <h2 className="card-heading font-bold text-gray-800">Related Resources</h2>
                            <Link href="#_" passHref>
                                <a className="flex items-center text-base font-semibold text-blue-400 hover:text-blue-500 group">
                        <span className="tiny-heading">View More Posts</span>
                        <svg className="w-4 h-4 mt-0.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        </a>
                    </Link>
                </div>

                <div className="grid grid-cols-12 gap-6">
                    <div className="relative col-span-12 mb-10 space-y-4 md:col-span-6 lg:col-span-4">
                        <Link href="#_" passHref>
                        <a className="relative block w-full h-64 overflow-hidden rounded">        
                            <Image className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105"  src="https://cdn.devdojo.com/images/may2021/blog-image-01.jpg" alt="resource" layout="fill"/>
                        </a>    
                        </Link>
                        <p className="tiny-subheading font-bold text-gray-400 uppercase">Resources</p>
                        <Link href="#_" passHref><a className="block card-subheading  font-semibold leading-tight text-gray-700 hover:text-gray-900">4 Simple Tips for Leveraging the Power of Social Media</a></Link>
                    </div>

                    <div className="relative col-span-12 mb-10 space-y-4 md:col-span-6 lg:col-span-4">
                        <Link href="#_" passHref>
                            <a  className="relative block w-full h-64 overflow-hidden rounded">
                                    <Image className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="https://cdn.devdojo.com/images/may2021/blog-image-02.png" alt="resource" layout="fill"/>
                            </a>
                        </Link>
                        <p className="tiny-subheading font-bold text-gray-400 uppercase">Resources</p>
                        <Link href="#_" passHref ><a className="block card-subheading  font-semibold leading-tight text-gray-700 hover:text-gray-900">The Best Tips for Creating Engaging and Compelling Photos</a></Link>
                    </div>

                    <div className="relative col-span-12 mb-10 space-y-4 md:col-span-6 lg:col-span-4">
                        <Link href="#_" passHref>
                            <a  className="relative block w-full h-64 overflow-hidden rounded">
                                    <Image className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="https://cdn.devdojo.com/images/may2021/blog-image-03.jpg" alt="resource" layout="fill"/>
                            </a>
                        </Link>
                        <p className="tiny-subheading font-bold text-gray-400 uppercase">Resources</p>
                        <Link href="#_" passHref><a className="block card-subheading  font-semibold leading-tight text-gray-700 hover:text-gray-900">How to Get the Most Engagement from your Online Resources</a></Link>
                    </div>
                </div>
                </div>
                </section>
           
      </div>
    </section>
        </Layout>
    )
}