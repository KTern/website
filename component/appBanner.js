export default function AppBanner({ data, stream }) {
	return (
		<>
			<section className={`relative bg-gray-800 overflow-hidden banner-${stream}`}>
				<div className="relative container py-12 pb-6 mx-auto">
					<div className="hidden lg:block absolute bottom-0 w-3/5 mb-8 h-2"></div>
					<div className="relative flex flex-wrap -mx-4 items-start">
						<div className="w-1/2 lg:w-1/2 2xl:w-2/5 px-4">
							<span
								className={`text-xs rounded tag-${stream} text-white font-semibold inline-block py-px px-2 mb-4 text-xs leading-5 uppercase rounded-full shadow-sm`}
							>
								{data.Tag}
							</span>
							<h2 className="mb-8 mr-4 text-black text-3xl md:text-4xl leading-tight font-bold">
								{data.SectionTitle}
							</h2>
							<div className="flex flex-wrap">
								{data.LeftImages.map((dt) => (
									<div key="dt">
										<a className="mb-3 sm:mb-0" href={dt.LinkURL}>
											<img className="h-16 xl:h-14 mr-4 -ml-2" src={dt.LinkText} alt={dt.LinkText} />
										</a>
									</div>
								))}
							</div>
						</div>
						{data.RightImages.map((dt) => (
							<div key="dt" className="w-full md:w-1/2 lg:w-1/4 px-4 text-center mb-10 lg:mb-0">
								<div className={` p-4 h-40 flex flex-wrap items-center justify-center card-${stream} `}>
									<img src={dt.LinkText} alt={dt.LinkText} width="180px" height="180px" />
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
