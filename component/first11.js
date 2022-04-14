export default function Twelveth({data,stream}){
    return(
        <a href={data.Resource[3].CTAUrl}>
										<div className="relative mx-auto rounded h-64 sm:h-48">
											<div className={`absolute inset-0 bg-${stream} rounded`}></div>
											<div
												className="absolute inset-0 p-6 flex flex-col items-start bg-resourcesBg sm:text-center sm:p-2"
												style={{
													backgroundImage: `url(https://storage.googleapis.com/ktern-public-files/website/patterns/circle-${stream}.svg)`,
													backgroundPosition: 'bottom left',
													backgroundRepeat: 'no-repeat',
												}}
											>
												<span
													className={`p-2 text-xs rounded tag-${stream} text-white font-semibold inline-block py-px px-2 mb-4 text-xs leading-5 uppercase rounded-full shadow-sm`}
												>
													{data.Resource[3].Tag}
												</span>
												<p className="pt-4 text-xl lg:text-2xl text-black font-bold">
													{data.Resource[3].ResourceTitle}
												</p>
											</div>
										</div>
									</a>
    )
}