export default function Fifth({data,stream}){
    return(
        <a href={data.Resource[1].CTAUrl} target="_blank" rel="noreferrer">
										<div className="relative mx-auto rounded h-64 sm:h-48">
											<div className={`absolute inset-0 bg-${stream} rounded`}></div>
											<div className="absolute inset-0 p-6 flex flex-col items-start bg-resourcesBg sm:px-8 sm:text-center sm:items-center sm:justify-center sm:p-2">
												<span
													className={`p-2 text-xs rounded tag-${stream} text-white font-semibold inline-block py-px px-2 mb-4 text-xs leading-5 uppercase rounded-full shadow-sm`}
												>
													{data.Resource[1].Tag}
												</span>
												<p className="pt-2 text-xl lg:text-2xl text-black font-bold">
													{data.Resource[1].ResourceTitle}
												</p>
											</div>
										</div>
									</a>
    )
}