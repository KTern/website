export default function AppBanner({stream}) {
	return (
		<>
			<section className={`relative bg-gray-800 overflow-hidden ${stream}-card`}>
				{/* <div className="absolute bottom-0 inset-x-0 h-3/5 w-2full -ml-64 -mb-12 bg-gradient-zospace-2 transform -rotate-6"></div> */}
				<div className="relative container px-4 pt-12 md:pt-20 mx-auto">
					<div className="hidden lg:block absolute bottom-0 w-3/5 mb-8 h-2"></div>
					<div className="relative flex flex-wrap -mx-4 items-start">
						<div className="w-1/2 lg:w-1/2 2xl:w-2/5 px-4 mb-8 mb:mb-0">
							<span
								className={`text-xs rounded tag-maps text-white font-semibold inline-block py-px px-2 mb-4 text-xs leading-5 uppercase rounded-full shadow-sm`}
							>
								ACCOLADES
							</span>
							<h2 className="mb-4 text-black text-3xl md:text-5xl leading-tight font-bold tracking-tighter">
								Get perfect app for your project
							</h2>
							<p className="mb-8 lg:mb-8 text-lg text-black opacity-90">
								Discover how it works and start for free.
							</p>
							<div className="flex flex-wrap">
								<a className="mb-3 sm:mb-0 mr-4" href="#">
									<img
										className="h-16 xl:h-14"
										src="https://images.squarespace-cdn.com/content/v1/5b55cf033917eed698779277/1613654676284-6L5Q8M2C5X2ITXB7VRB3/Available-on-SAP-Store-White-BG-Wallet.png"
										alt=""
									/>
								</a>
								<a href="#">
									<img
										className="h-16 xl:h-14"
										src="https://storage.googleapis.com/ktern-public-files/website/icons/g2-crowd.svg"
										alt=""
									/>
								</a>
							</div>
						</div>
						{/* <div className="w-1/2 lg:w-1/2 2xl:w-3/5 px-4">
							<div className="relative flex flex-wrap -mx-4 items-center">
								<img
									className="w-64 h-64 object-contain"
									src="https://my.g2.com/assets/product-badges/users-love-us-4fca521cb6d80c30d02e3df6bd0013f5395fb3ae22e81b3e3608e258d8feba63.svg"
									alt=""
								/>
							</div>
							<div className="relative flex flex-wrap -mx-4 items-center">
								<img
									className="w-64 h-64 object-contain"
									src="https://my.g2.com/assets/product-badges/users-love-us-4fca521cb6d80c30d02e3df6bd0013f5395fb3ae22e81b3e3608e258d8feba63.svg"
									alt=""
								/>
							</div>
						</div> */}
						<div className="w-full md:w-1/2 lg:w-1/4 px-4 text-center mb-10 lg:mb-0">
							<div className="p-4 h-40 flex flex-wrap items-center justify-center card-maps">
								<img
									src="https://my.g2.com/assets/product-badges/users-love-us-4fca521cb6d80c30d02e3df6bd0013f5395fb3ae22e81b3e3608e258d8feba63.svg"
									alt=""
								/>
							</div>
						</div>
						<div className="w-full md:w-1/2 lg:w-1/4 px-4 text-center mb-10 md:mb-0">
							<div className="p-4 h-40 flex flex-wrap items-center justify-center card-maps">
								<img
									src="https://my.g2.com/assets/product-badges/users-love-us-4fca521cb6d80c30d02e3df6bd0013f5395fb3ae22e81b3e3608e258d8feba63.svg"
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
