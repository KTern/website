import Breadcrumbs from "./breadcrumb-new";

export default function Hero2({ data, stream, breadcrumb }) {
  return (
		<>
			<section>
				<div className="relative pt-24 pb-2 bg-gray-900 border-b-4 border-purple-600 overflow-hidden">
					<div className="container mx-auto px-4">
						<div className="text-left">
							{' '}
							<Breadcrumbs breadcrumb={breadcrumb} />
						</div>
						<div className="max-w-2xl mx-auto text-center mb-10 md:mb-10">
							<img
								className="hidden lg:block absolute inset-0 w-full"
								src="https://shuffle.dev/atis-assets/background/lines.svg"
								alt=""
							/>

							<div className="sm:text-center">
								<span
									className={`p-1 m-2 mb-4 text-xs uppercase rounded tag-${stream} text-white font-semibold`}
								>
									{data.Tag}
								</span>
							</div>
							<h2 className="ibm-plex my-6 text-4xl lg:text-5xl text-gray-50 font-bold">{data.Heading}</h2>
							<p className="max-w-md mx-auto mb-6 text-gray-300 text-lg leading-loose">{data.SubHeading}</p>

							{/* <div className="flex items-center justify-center p-2 sm:flex-row sm:pt-4">
								<a
									href={data.CTAButtons[0].linkURL}
									className={`cursor-pointer	mr-8 sm:ml-0 sm:uppercase sm:w-3/4 sm:mt-1 inline-block p-4 w-full md:w-auto  text-white tag-${stream} hover:bg-gray-600 font-medium text-center rounded-r-xl rounded-b-xl`}
								>
									{data.CTAButtons[0].buttonTitle}
								</a>
								<a
									href={data.CTAButtons[1].linkURL}
									className={`cursor-pointer	sm:hidden mr-8 border border-white sm:ml-0 sm:uppercase sm:w-3/4 sm:mt-1 inline-block p-4 w-full md:w-auto text-base leading-4 text-white bg-gray-700  hover:bg-deep-purple-accent-700 rounded-r-xl rounded-b-xl transition duration-200 shadow`}
								>
									{data.CTAButtons[1].buttonTitle}
								</a>
							</div> */}
							<div className="pb-2 pt-6">
								<div className="flex flex-wrap  items-center justify-center">
									<div className="mb-4 w-full md:w-1/2 lg:w-1/4  sm:hidden px-2">
										<div className="p-8 bg-gray-50 rounded-r-2xl rounded-b-2xl">
											<a href="#">
												<img
													className="mx-auto"
													src="https://storage.googleapis.com/ktern-public-files/website/Brand%20Elements/ktern-logo.png"
													alt=""
												/>
											</a>
										</div>
									</div>
									<div className="mb-4 w-full md:w-1/2 lg:w-1/4 px-2 sm:hidden">
										<div className="p-8">
											<span
												className={`p-4 text-2xl rounded-2xl tag-${stream} text-white font-semibold animate-pulse`}
											>
												+
											</span>
										</div>
									</div>
									<div className="mb-4 w-full md:w-1/2 lg:w-1/4 sm:hidden px-2">
										<div className="p-6 bg-gray-50 rounded-r-2xl rounded-b-2xl">
											<a href="#">
												<img className="mx-auto" src={data.PartnerLogoURL} alt="" />
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
  );
}