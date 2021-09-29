import Layout from "../component/Layout";
import Image from "next/image";
import Link from "next/link";
export default function PartnerContact () {
    return(
        <Layout>
            <div className="py-20 w-full min-h-screen bg-white flex justify-center ">      
            <div className="w-1/3 py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
                <div>
                <h1 className="  text-center mb-4 cursor-pointer heading">Become a Partner</h1>
                <p className=" text-center  mb-8  subheading text-gray-700 cursor-pointer">For General queries <Link href="/contact" passhref><a className="font-bold hover:text-gray-200">Contact us</a></Link > </p>
                </div>
                <div className="space-y-8">
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
                <label className="absolute px-2 ml-2 -mt-3 card-subheading text-gray-600 bg-white">Company</label>
                <input type="text" className="block w-full px-4 py-4 mt-2  placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="Company Name"/>
            </div>
            <div className="relative">
                <label className="absolute px-2 ml-2 -mt-3 card-subheading text-gray-600 bg-white">Phone</label>
                <input type="number" className="block w-full px-4 py-4 mt-2  placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="Phone Number"/>
            </div>
            <div className="relative">
                <label className="absolute px-2 ml-2 -mt-3 card-subheading text-gray-600 bg-white">Country</label>
                <input type="text" className="block w-full px-4 py-4 mt-2  placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="Country"/>
            </div>
            <div className="relative">
            <span className="mr-4  text-gray-600 card-subheading">Partnership Type:</span>
            <label className="mr-4">
                <input className="mr-1" type="radio" name="department" value="1" checked=""/>
                <span className=" text-gray-600">VAR</span>
            </label>
            <label>
                <input className="mr-1" type="radio" name="department" value="2"/>
                <span className=" text-gray-600">ISV</span>
            </label>
            </div>
            </div>
            <div className="relative text-center mt-8">
            
                <Link href="" passHref>
                                            <a className="inline-block w-full px-5 py-4  button text-center text-white transition duration-200 bg-black 
                                            rounded-r-xl rounded-b-xl transition duration-200 hover:bg-gray-500 ease">Submit</a>
                                        </Link>
            </div>
            
            </div>
            
            </div>
        </Layout>
    )
}