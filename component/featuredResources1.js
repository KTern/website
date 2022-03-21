export default function FeaturedResourcesComponent({ resources, stream, articles, news }) {
	return (
		<>
			<section className="w-full bg-black">
				<div className="p-6 pt-12 text-center">
					<span
						className={`p-1 text-xs rounded tag-${stream} text-white font-semibold inline-block py-px px-2 mb-4 text-xs leading-5 uppercase rounded-full shadow-sm`}
					>
						{resources.Tag}
					</span>
					<h2 className="mb-4 text-3xl md:text-5xl leading-tight font-bold ibm-plex text-white">
						{resources.Title}
					</h2>
				</div>
				<div className="max-w-6xl  mx-auto pb-12">
					<div className="flex grid h-full grid-cols-12 gap-10 pb-10 mt-8 sm:mt-16">
						{resources.MajorResourceCards.map((dt) => (
							<div
								key="dt"
								className="relative flex flex-col items-start justify-end h-full col-span-12 sm:col-span-10 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4"
							>
								<a
									href={dt.CTAUrl}
									className={`relative z-20 w-full h-auto py-8 text-white tag-${dt.DigitalStream} border-t-0 border-yellow-200 px-8 hover:bg-gray-500`}
								>
									<h2 className="mb-5 text-3xl font-bold ibm-plex">{dt.Title}</h2>
									<p className="mb-2 text-md font-normal text-purple-100 opacity-100">{dt.Description}</p>
								</a>
							</div>
						))}
					</div>
					<div className="grid grid-cols-12 gap-10 mt-10">
						<div className="col-span-12 md:col-span-8 sm:col-span-10">
							<div className={`relative overflow-hidden border-b-2 border-${stream} `}>
								<h4
									className={`px-3 py-1.5 tag-${stream} text-white uppercase text-sm inline-block font-medium `}
								>
									{articles.Title}
								</h4>
							</div>
							{articles.ResourcesList.map((dt1) => (
								<div key="dt1" className={`flex items-center py-5 border-b border-${stream}`}>
									<a className={`w-1/3 h-40 overflow-hidden bg-gray-400 `} href={dt1.PageURL}>
										<img
											className="w-full h-auto transition duration-300 ease-out transform scale-100 bg-cover hover:scale-105"
											src={dt1.ImageURL}
										/>
									</a>
									<a className="w-2/3 pl-5" href={dt1.PageURL}>
										<h2 className="relative mb-3 text-xl font-bold leading-tight text-white ibm-plex hover:underline">
											{dt1.Title}
										</h2>
										<p className="text-sm text-white opacity-50 hover:opacity-100">{dt1.Description}</p>
										<span className="relative flex mt-3 text-xs text-white opacity-90">
											<span className={`mr-1 font-normal text-xs p-2 border border-coolGray-200 border border-${stream} `}>
												{dt1.Tag}
											</span>
										</span>
									</a>
								</div>
							))}
						</div>

						<div className="col-span-12 md:col-span-4 sm:col-span-10">
							<div className="relative overflow-hidden border-b-2 border-dxaas">
								<h4 className="px-3 py-1.5 tag-dxaas text-white uppercase text-sm inline-block font-medium">
									{news.Title}
								</h4>
							</div>

							{news.ResourcesList.map((dt2) => (
								<div key="dt2">
									<a href={dt2.PageURL} className="relative block w-full h-64 mt-5 overflow-hidden">
										<div className={`absolute inset-0 w-full h-full bg-${stream} opacity-90 `}></div>
										<img
											className="w-full h-full transition duration-300 ease-out transform scale-100 hover:scale-105"
											src={dt2.ImageURL}
											width={300}
											height={300}
										/>
									</a>
									<a className="w-2/3 pl-5" href={dt2.PageURL}>
										<h2 className="relative mt-5 mb-3 text-xl font-bold leading-tight text-white hover:underline">
											{dt2.Title}
										</h2>
										<p className="text-sm text-white opacity-50 hover:opacity-100">{dt2.Description}</p>
										<span className="relative flex mt-3 text-xs text-white opacity-90">
											<span className={`mr-1 font-normal text-xs p-2 border border-coolGray-200 border border-${stream}`}>
												{dt2.Tag}
											</span>
										</span>
									</a>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
