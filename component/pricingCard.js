export default function PricingCard({ stream, tag, title, data }) {
  return (
		<>
			<section className="w-full bg-black">
				<div className="p-6 pt-12 text-center">
					<span
						className={`p-1 text-xs rounded tag-${stream} text-white font-semibold inline-block py-px px-2 mb-4 text-xs leading-5 uppercase rounded-full shadow-sm`}
					>
						{tag}
					</span>
					<h2 className="text-4xl ibm-plex font-bold  font-heading text-white mb-8">{title}</h2>
				</div>
				<div className="flex flex-col p-4  md:flex-row items-center justify-center">
					{data.map((dt) => (
						<div key="dt" className="w-full md:w-1/3">
							<div className="max-w-3xl px-10 mx-auto">
								<div className="m-4 relative flex flex-col overflow-hidden bg-gray-900 rounded-r-3xl hyperlink rounded-b-3xl ">
									<div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 to-purple-500"></div>
									<div className="flex flex-col items-center p-10 md:flex-row">
										<div className="w-full text-white md:w-2/3">
											<div className="flex items-center">
												<p className="flex items-start text-lg font-bold leading-none text-transparent text-7xl bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
													<span className="mt-2 text-4xl">$</span>
													{dt.Amount}
												</p>
												<div className="flex flex-wrap ml-4">
													<p className="text-base font-medium leading-tight text-gray-200">
														{dt.CardTitleLargeText}
													</p>
													<p className="flex-shrink-0 text-xs text-gray-400">{dt.CardTitleSmallText}</p>
												</div>
											</div>
										</div>
									</div>
									<div className="px-10 py-8 bg-gray-900 border-t border-gray-700 bg-gradient-to-b from-gray-800 to-gray-900">
										<h3 className="text-xl font-medium leading-tight text-gray-200">{dt.BodyTitle}</h3>
										<p className="my-1 text-gray-400">{dt.BodyDescription}</p>
										<ul className="w-full py-2 my-6 space-y-5 text-xl text-gray-300">
											{dt.PricingListComponent.map((data) => (
												<li key="data" className="flex items-center">
													<div className="flex items-center justify-center w-6 h-6 mr-3 text-white bg-gray-700 rounded-full">
														<svg
															className="w-3 h-3 text-green-400"
															fill="currentColor"
															viewBox="0 0 20 20"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																fillRule="evenodd"
																d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
																clipRule="evenodd"
															></path>
														</svg>
													</div>
													<span className="font-normal text-base">{data.ListItem}</span>
												</li>
											))}
										</ul>
										<div className="items-center justify-center text-center">
											<a
												href="#_"
												className="text-center my-8 w-full p-3 text-xl font-semibold text-center text-white rounded-r-xl hyperlink rounded-b-xl  bg-gradient-to-br from-purple-500 to-pink-500 md:w-auto"
											>
												Join Today
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
  );
}