export default function TestimonialSingle({ data, stream}) {
	return (
		<>
			<section className="bg-maps py-8">
				<div className="container px-4 mx-auto text-center">
					<span
						className={`p-1 text-xs rounded tag-${stream} text-white font-semibold inline-block py-px px-2 mb-4 text-xs leading-5 uppercase rounded-full shadow-sm`}
					>
						{data.Tag}
					</span>
					<h2 className="mb-4 text-3xl md:text-5xl leading-tight font-bold ibm-plex">{data.Title}</h2>
					<section>
						<div className="container p-8 px-4 mx-auto">
							<div className="lg:flex items-center justify-center md:space-x-8">
								<div className="flex w-full flex-wrap bg-white shadow rounded">
									<div className="py-10 px-4 text-center w-full lg:w-1/3 border-r">
										<span className="text-2xl lg:text-2xl font-bold mx-8">{data.LeftSectionTitle}</span>
										<a href={data.LeftSectionImage.LinkURL} target="_blank" rel="noreferrer">
											<img
												className="my-4 block mx-auto"
												src={data.LeftSectionImage.LinkText}
												alt={data.LeftSectionTitle}
												data-removed="true"
												width={150}
											/>
										</a>
									</div>
									<div className="pt-12 px-8 w-full lg:w-2/3">
										<p className="mb-6 text-lg md:text-xl text-coolGray-500 font-medium">
											{data.Testimonial.TestimonialStatement}
										</p>
										<h4 className="text-xl font-bold font-heading text-center">
											{data.Testimonial.AuthorName}
										</h4>
										<p className="text-gray-500 text-center">{data.Testimonial.AuthorDescription}</p>
										<div className="flex flex-wrap p-4">
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
