import Image from "next/image";
export default function Card ({data}) {
    return (
        <div className={data.class} style={{cursor:'pointer'}}>
              
            <div className="flex flex-col items-start justify-end flex-auto p-10 ">
                <h3 className="card-heading">{data.heading}</h3>
                <p className="mt-2 mb-4 card-subheading">{ data.description}</p>
                <div className="icon-link transition-opacity duration-200 group-hover:opacity-50 icon-link--black">
                    <button to="#" className="icon-link__link">
                        <div className="icon-link__label">
                            <span className="tiny-heading font-bold">Learn more&nbsp;</span>
                                                {/* <div className="inline-flex items-center justify-center w-6 h-6 bg-black hover:bg-black rounded-full">
                                            <svg className="w-2 h-2" width="7" height="13" viewBox="0 0 7 13" fill="white" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.152917 0.894235C-0.0509742 0.688658 -0.0509742 0.358375 0.152917 0.15431C0.356808 -0.0497557 0.686228 -0.0505119 0.89012 0.15431L6.84708 6.13116C7.05097 6.33522 7.05097 6.6655 6.84708 6.87108L0.890119 12.8479C0.686227 13.052 0.356807 13.052 0.152916 12.8479C-0.0509753 12.6431 -0.0509753 12.3121 0.152916 12.108L5.5857 6.50074L0.152917 0.894235Z" fill="white"></path>
                                            </svg>
                                        </div> */}
                        </div>
                    </button>
                </div>
            </div>
            <div className="-ml-5 md:-ml-8">
                <div >
                    <div className="   transform transition-transform group-hover:scale-105  ">
                        <Image className="" src={data.image} alt="Pricing" draggable="false" width={200} height={200} />
                    </div>
                </div>
            </div>         
        </div>
    )
}