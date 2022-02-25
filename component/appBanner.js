export default function AppBanner({}) {
	return (
		<>
			<section className="relative bg-gray-800 overflow-hidden bg-gradient-zospace-1">
				{/* <div className="absolute bottom-0 inset-x-0 h-3/5 w-2full -ml-64 -mb-12 bg-gradient-zospace-2 transform -rotate-6"></div> */}
				<div className="relative container px-4 pt-12 md:pt-20 mx-auto">
					<div className="hidden lg:block absolute bottom-0 w-3/5 mb-8 h-2"></div>
					<div className="relative flex flex-wrap -mx-4 items-start">
						<div className="w-full lg:w-1/2 2xl:w-2/5 px-4 mb-8 mb:mb-0">
							<span
								className={`text-xs rounded tag-maps text-white font-semibold inline-block py-px px-2 mb-4 text-xs leading-5 uppercase rounded-full shadow-sm`}
							>
								QUESTIONS
							</span>
							<h2 className="mb-4 text-white text-3xl md:text-5xl leading-tight font-bold tracking-tighter">
								Get perfect app for your project
							</h2>
							<p className="mb-8 lg:mb-8 text-lg text-white opacity-90">
								Discover how it works and start for free.
							</p>
							{/* <div className="flex flex-wrap">
								<a className="mb-3 sm:mb-0 mr-4" href="#">
									<img
										className="h-16 xl:h-20"
										src="https://shuffle.dev/zospace-assets/buttons/apple-button.svg"
										alt=""
									/>
								</a>
								<a href="#">
									<img
										className="h-16 xl:h-20"
										src="https://shuffle.dev/zospace-assets/buttons/google-button.svg"
										alt=""
									/>
								</a>
							</div> */}
						</div>
						{/* <div className="w-full lg:w-1/2 2xl:w-3/5 px-4">
							<img
								className="w-full h-full object-contain"
								src="https://shuffle.dev/zospace-assets/images/two-phones2.png"
								alt=""
							/>
						</div> */}
					</div>
				</div>
			</section>
		</>
	);
}
