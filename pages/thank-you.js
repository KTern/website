import Layout from "../component/Layout"
export default function ThankYou ()
{
    return (
        <Layout>
            
    <section className="relative py-10 2xl:py-20 bg-gray-800 overflow-hidden flex justify-center ">
      <img className="block absolute bottom-0 left-0 h-40 -mb-8" src="/thank-you/five-stars.svg" alt=""/>
  
     
      <div className="container px-3 mx-auto">
        <div className="max-w-3xl mx-auto pb-10  text-center">
          
          <h2 className="my-10 text-5xl lg:text-4xl font-bold font-heading text-white">Thank You for Registering for the Webinar</h2>
          <div className="max-w-md mx-auto">
            <p className="mb-10 text-lg text-gray-200">We look forward to you joining our Webinar</p>
            
           <a className="  inline-block py-3 px-10 bg-white hover:bg-gray-50 hover:text-black shadow text-lg text-black font-bold rounded-l-xl rounded-t-xl transition duration-200 custom-card-subheading" href="#">Return Home</a>
            
          </div>
          
        </div>
        <section className="w-full py-4 bg-gray-800 ">
          <div className="px-10 mx-auto max-w-7xl">
              <div className="flex items-center justify-between w-full pb-5 mb-8 border-b border-gray-200">
                  <h2 className="text-3xl font-bold text-white">Similar Resources</h2>
                  <a href="#_" className="flex items-center text-base font-semibold text-blue-400 hover:text-blue-500 group">
                      <span>View More Posts</span>
                      <svg className="w-4 h-4 mt-0.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </a>
              </div>
      
              <div className="grid grid-cols-12 gap-4">
                  <div className="relative col-span-4 mb-10 space-y-4 ">
                      <a href="#_" className="relative block w-30 h-30 overflow-hidden rounded">
                          <img className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="https://cdn.devdojo.com/images/may2021/blog-image-01.jpg"/>
                      </a>
                      <p className="text-xs font-bold text-gray-400 uppercase">Resources</p>
                      <a href="#_" className="block text-md font-medium leading-tight text-white hover:text-gray-300">4 Simple Tips for Leveraging the Power of Social Media</a>
                  </div>
      
                  <div className="relative col-span-4 mb-10 space-y-4 ">
                      <a href="#_" className="relative block w-30 h-30 overflow-hidden rounded">
                          <img className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="https://cdn.devdojo.com/images/may2021/blog-image-02.png"/>
                      </a>
                      <p className="text-xs font-bold text-gray-400 uppercase">Resources</p>
                      <a href="#_" className="block text-md font-medium leading-tight text-white hover:text-gray-300">The Best Tips for Creating Engaging and Compelling Photos</a>
                  </div>
      
                  <div className="relative col-span-4 mb-10 space-y-4 ">
                      <a href="#_" className="relative block w-30 h-30 overflow-hidden rounded">
                          <img className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="https://cdn.devdojo.com/images/may2021/blog-image-03.jpg"/>
                      </a>
                      <p className="text-xs font-bold text-gray-400 uppercase">Resources</p>
                      <a href="#_" className="block text-md font-medium leading-tight text-white hover:text-gray-300">How to Get the Most Engagement from your Online Resources</a>
                  </div>
              </div>
      
      
             
      
              
          </div>
      </section>
      
      </div>
    </section>
        </Layout>
    )
}