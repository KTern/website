import Link from "next/link";

export default function Eighth({data,stream}){
    return(
        <Link href={data.Resource[2].CTAUrl}>
										<div className="relative mx-auto rounded h-64 sm:h-48">
											<div className={`absolute inset-0 bg-${stream} rounded`}></div>
											<div
												className="absolute inset-0 p-6 flex flex-col items-start bg-resorcesBg sm:text-center sm:p-2"
												style={{
													backgroundImage: `url(https://storage.googleapis.com/ktern-public-files/website/patterns/dots-${stream}.svg)`,
													backgroundPosition: 'bottom right',
													backgroundRepeat: 'no-repeat',
												}}
											>
												<span
													className={`p-2 text-xs rounded tag-${stream} text-white font-semibold inline-block py-px px-2 mb-4 text-xs leading-5 uppercase rounded-full shadow-sm`}
												>
													{data.Resource[2].Tag}
												</span>
												<p className="pt-4 text-xl lg:text-2xl text-black font-bold">
													{data.Resource[2].ResourceTitle}
												</p>
											</div>
										</div>
									</Link>
    )
                                            }