export default function AppBanner({ data, stream }) {
	return (
		<>
			<section className={`relative bg-gray-800 overflow-hidden banner-${stream} sm:item-center pb-4 sm:p-6`}>
				<div className="relative container py-12 pb-6 mx-auto">
					<div className="hidden lg:block absolute bottom-0 w-3/5 mb-8 h-2"></div>
					<div className="relative flex flex-wrap -mx-4 items-start">
						<div className="w-1/2 lg:w-1/2 2xl:w-2/5 px-4 sm:w-full sm:text-center">
							<span
								className={`text-xs rounded tag-${stream} text-white font-semibold inline-block py-px px-2 mb-4 text-xs leading-5 uppercase rounded-full shadow-sm`}
							>
								{data.Tag}
							</span>
							<h2 className="mb-8 mr-4 text-black text-3xl md:text-4xl leading-tight font-bold ibm-plex">
								{data.SectionTitle}
							</h2>
							<div className="flex flex-wrap sm:items-center sm:justify-center">
								{data.LeftImages.map((dt) => (
									<div key="dt" className="sm:px-8 pr-8 transform transition duration-500 hover:scale-110">
										<a className="mb-4 sm:mb-4" href={dt.LinkURL}>
											<img className="h-16 xl:h-14 mr-4 sm:m-4 -ml-2" src={dt.LinkText} alt={dt.LinkText} />
										</a>
									</div>
								))}
							</div>
						</div>
						{data.RightImages.map((dt) => (
							<div key="dt" className="w-full md:w-1/2 lg:w-1/4 px-4 text-center mb-10 lg:mb-0 sm:hidden">
								<div
									className={` p-2 h-40 flex flex-wrap items-center justify-center card-${stream} transform transition duration-500 hover:scale-110`}
								>
									<a href={dt.LinkURL} target="_blank" rel="noreferrer">
										<img src={dt.LinkText} alt={dt.LinkText} width="210px" height="210px" />
									</a>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
