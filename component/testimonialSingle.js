export default function TestimonialSingle({ data, stream }) {
	return (
		<>
			<section className={`bg-white py-8 `}>
				<div className="container px-4 mx-auto text-center">
					{/* <span
						className={`p-1 text-xs rounded tag-${stream} text-white font-semibold inline-block py-px px-2 mb-4 text-xs leading-5 uppercase rounded-full shadow-sm`}
					>
						{data.Tag}
					</span> */}
					<h2 className="mb-4 text-3xl md:text-5xl leading-tight font-bold ibm-plex">{data.Title}</h2>
					<section>
						<div className="container p-8 px-4 mx-auto">
							<div className="lg:flex items-center justify-center md:space-x-8">
								<div className="flex w-full flex-wrap bg-white shadow rounded shadow-xl">
									<div className="p-4 text-center w-full lg:w-1/3 border-r relative bg-black overflow-hidden">
										<div className="px-4">
											<div className="lg:max-w-md py-4">
												<span className={`text-lg font-semibold text-${stream}`}>Accolades</span>
												<h2 className="my-4 text-xl text-white uppercase font-heading ibm-plex">
													{data.LeftSectionTitle}
												</h2>
												<div className="rating sm:hidden">
													<div className="rating-star"></div>
													<div className="rating-star"></div>
													<div className="rating-star"></div>
													<div className="rating-star"></div>
													<div className="rating-star"></div>
													<span className="pl-3 text-gray-600">{data.ReviewStatement}</span>
												</div>
												<a href={data.LeftSectionImage.LinkURL} target="_blank" rel="noreferrer">
													<img
														className="my-4 block mx-auto  transform transition duration-500 hover:scale-110"
														src={data.LeftSectionImage.LinkText}
														alt={data.LeftSectionTitle}
														data-removed="true"
														width={150}
													/>
												</a>
											</div>
										</div>
									</div>
									<div className="bg-bg pt-12 px-8 w-full lg:w-2/3">
										<div className="relative max-w-5xl sm:px-6 pb-6 mb-10 mx-auto text-center">
											<img
												className="absolute top-0 left-0"
												src="https://shuffle.dev/flex-ui-assets/elements/testimonials/quote-top-green.svg"
												alt=""
											/>
											<img
												className="absolute bottom-0 right-0"
												src="https://shuffle.dev/flex-ui-assets/elements/testimonials/quote-down-green.svg"
												alt=""
											/>
											<div className="relative">
												<h2 className="pt-4 text-xl  font-semibold tracking-tighter">
													{data.Testimonial.TestimonialStatement}
												</h2>
											</div>
										</div>
										<h4 className="text-xl font-bold font-heading text-center">
											{data.Testimonial.AuthorName}
										</h4>
										<p className="text-gray-500 text-center">{data.Testimonial.AuthorDescription}</p>
										<div className="border-b border-coolGray-100 p-4"></div>
										<div className="flex flex-wrap px-2">
											{data.Logos.map((dt) => (
												<div key="dt" className="w-1/2 md:w-1/3 lg:w-1/3 p-2">
													<div className="py-2 lg:py-4">
														<img className="h-18 mx-auto" src={dt.LinkURL} alt={dt.LinkText} />
													</div>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</section>
		</>
	);
}
