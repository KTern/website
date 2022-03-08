export default function CtaBar({ stream, data }) {
	return (
		<>
			<section className={`bg-${stream} py-16 px-28 sm:py-4 sm:px-4`}>
				<div className="container sm:px-0 sm:mx-0">
					<div className={`p-12 rounded overflow-hidden card-${stream} `}>
						<div className="flex flex-wrap -mx-4">
							<div className="w-full md:w-1/2 px-4 sm:text-center">
								<h3 className="mb-4 text-4xl heading ">
									<span className="text-white font-bold  mr-2 ibm-plex">{data.SectionHeading}</span>
								</h3>
								{data.CTAButton.map((dt) => (
									<a
										key="dt"
										className={`sm:m-2 mr-2 inline-block p-4 w-full md:w-auto text-base leading-4 text-white bg-gray-600 hover:bg-gray-400 font-large text-center focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 rounded-r-xl rounded-b-xl transition duration-200 shadow`}
										href={dt.linkURL}
									>
										{dt.buttonTitle}
									</a>
								))}
							</div>
							<div className="relative w-full md:w-1/2 px-4 hidden md:block">
								<img
									className="md:absolute top-0 right-0 md:-mt-12 h-72 object-cover"
									src="https://shuffle.dev/artemis-assets/images/saly-group.png"
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
