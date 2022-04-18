import Link from "next/link";

export default function Fiftheenth({data,stream}){
    return(
        <Link href={data.Resource[5].CTAUrl} target="_blank" rel="noreferrer">
        <div className="relative h-64 mx-auto rounded sm:h-48">
            <div className={`absolute inset-0 banner-${stream} rounded `}></div>
            <div className="absolute inset-0 p-6 flex flex-col items-start sm:text-center sm:p-2">
                <p className="text-xl lg:text-2xl pt-20 sm:p-4 text-black font-bold">
                    <span
                        className={`p-1 text-xs rounded tag-${stream} text-white font-semibold inline-block py-px px-2 mb-4 text-xs leading-5 uppercase rounded-full shadow-sm`}
                    >
                        {data.Resource[5].Tag}
                    </span>
                    <br />
                    {data.Resource[5].ResourceTitle}
                </p>
            </div>
        </div>
    </Link>
    )
}