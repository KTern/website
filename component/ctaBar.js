export default function CtaBar({}) {
	return (
		<>
			<section className="relative p-12 pb-20">
				<div className="py-12 bg-gray-800 overflow-hidden">
					{/* <img
						className="hidden lg:block absolute top-0 left-0 -ml-64 mt-24"
						src="https://shuffle.dev/zospace-assets/lines/circle.svg"
						alt=""
					/>
					<img className="hidden lg:block absolute top-0 left-0 -ml-12" src="./maps-half-circle.svg" alt="" />
					<img
						className="hidden lg:block absolute top-0 right-0 w-96 h-96 -mt-40 -mr-32"
						src="https://shuffle.dev/zospace-assets/lines/circle.svg"
						alt=""
					/>
					<img
						className="hidden lg:block absolute top-0 right-0"
						src="https://shuffle.dev/zospace-assets/images/stars.svg"
						alt=""
					/> */}
					<div className="container px-8 mx-auto">
						<div className="relative flex flex-wrap items-center -m-4">
							<div className="w-full lg:w-2/5 p-4">
								<h3 className="mb-10 text-5xl text-white font-bold font-heading">Subscribe now!</h3>
								<p className="text-xl text-gray-200">
									Winter is comming, dignissim and accumsan, lacus semper, ipsum fermentum.
								</p>
							</div>
							<div className="w-full lg:w-3/5 p-4">
								<div className="lg:max-w-xl mx-auto">
									<div className="mb-8 sm:flex sm:items-center sm:bg-white sm:rounded-full">
										<span className="hidden sm:inline-block pl-6 lg:pl-10">
											<svg
												width="37"
												height="37"
												viewBox="0 0 37 37"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<circle cx="18.5" cy="18.5" r="9.5" fill="#1F40FF" fill-opacity="0.15"></circle>
												<circle cx="18.5" cy="18.5" r="18.5" fill="#1F40FF" fill-opacity="0.06"></circle>
												<circle cx="18.5" cy="18.5" r="2.5" fill="#282C36"></circle>
											</svg>
										</span>
										<input
											className="w-full sm:w-auto mb-4 sm:mb-0 pl-8 sm:pl-4 py-5 rounded-full placeholder-gray-900 font-bold focus:outline-none"
											type="email"
											placeholder="Drop your Email"
										/>
										<button className="w-full sm:w-auto ml-auto px-10 py-5 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200">
											Subscribe
										</button>
									</div>
									<p className="text-gray-300">
										<span>The brown fox jumps over</span>
										<span className="text-white">the lazy dog.</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
