import Image from "next/image";
import Link from "next/link";
export default function Error () {
    return (
        <section className="relative py-10 2xl:py-20 bg-black overflow-hidden h-screen">
          <div className="absolute top-0 right-0 -mr-60 md:-mt-112 "><Image src="/404/circle.svg" alt="" width={500} height={400}/></div>
          <div className="hidden lg:block absolute top-0 right-0 h-40 lg:h-80 lg:mr-44 lg:mt-24"><Image  src="/404/five-stars.svg" alt="" width={400} height={300}/></div>
          <div className="hidden lg:block absolute top-0 left-0 h-64 -ml-10"><Image  src="/404/blue-double-circle.svg" alt="" width={400} height={300}/></div>
          <div className="absolute bottom-0 left-0 h-80"><Image  src="/404/half-double-circle.svg" alt="" width={400} height={300}/></div>
          <div className="relative mt-10  px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <Link  href="/about-company" passHref>
              <a className="inline-block text-white text-xl font-bold">
              <Image  src="/404/kternlogo.png" width={140} height={50} alt="" />
              </a>
            </Link>
            <div className="mx-40 "><Image   src="/404/error-404.svg" alt="" width={400} height={300}/></div>
            <div className="max-w-md mx-auto text-center ">
            <h2 className="mb-4 text-2xl text-white font-bold font-heading ">Sorry, we can&apos;t find that page or something has gone wrong...</h2>
            <Link  href="/"><a className="  inline-block py-3 px-10  bg-white hover:bg-gray-50 hover:text-black shadow text-lg text-black font-bold rounded-r-xl rounded-b-xl transition duration-200 custom-card-subheading">Return to Home</a></Link>
            </div>
          </div>
        </div>
        </section>
    )
}