import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { BreadcrumbJsonLd } from "next-seo";
import { LogoJsonLd } from "next-seo";
import { SocialProfileJsonLd } from "next-seo";
import Event, {
  resolve_interest_score,
  resolve_stream_score,
} from "../component/page_event";
export default function Error({ data }) {
  // Amplitude Tracking onClick
  function onClick(data) {
    Event(data);
  }
  return (
    <>
      <section className="relative py-10 2xl:py-20  overflow-hidden background ">
       
        {/* <div className="hidden lg:block absolute top-0 right-0 h-40 lg:h-80 lg:mr-44 lg:mt-20">
          <Image priority src="/404/five-stars.svg" alt="" width={400} height={300} />
        </div> */}
        {/* <div className="hidden lg:block absolute top-0 left-0 h-64 -ml-10"><Image priority  src="/404/blue-double-circle.svg" alt="" width={400} height={300}/></div> */}
        {/* <div className="absolute bottom-0 left-0 h-80"><Image priority  src="/404/half-double-circle.svg" alt="" width={400} height={300}/></div> */}
        <div className="justify-center items-center flex-col mt-6  px-4 ">
          <div className=" mx-auto">
            {/* <div className="mx-40 justify-center items-center flex"><Image priority   src="/404/error-404.svg" alt="" width={400} height={300}/></div> */}
            <div className=" m-auto text-center  ">
              <h2 className="mb-6  text-white font-bold section-heading ">
                {data.PageTitle}
              </h2>
              <Link href="/">
                <a className="  max-w-1/2 inline-block py-3 px-10  bg-white hover:bg-gray-50 hover:text-black shadow text-lg text-black font-bold rounded-r-xl rounded-b-xl transition duration-200 custom-card-subheading">
                  {data.ReturnToHome}
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto p-10 xl:px-64 mt-6">
          {data.QuickLinks.map((dt) => 
            (<div
              key="dt"
              className="flex flex-col items-center space-y-4 justify-center shadow-xl border-2 text-center shadow-black rounded-xl bg-white"
           style={{width:"100%",height:"140px"}} >
              <h3 className="text-lg font-bold">{dt.CardTitle}</h3 >
             <Link href={dt.CTAUrl}>
               <a className="text-sm text-dxaas-primary border-b-2 border-dotted border-dxaas-primary">{dt.CTAText}</a>
             </Link>

            </div>
        ))}
        </div>
      </section>
    </>
  );
}

export const getStaticProps = async () => {
  // data url from strapi
  let res = await fetch("https://api.ktern.com/not-found", {
    method: "get",
  });

  let data = await res.json();
  // console.log(data);
  return {
    props: {
      data: data,
    },
  };
};
