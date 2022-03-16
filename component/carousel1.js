import Carousel from 'react-multi-carousel';
const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};
export default function MultiCardCarousel({ data, stream }) {
	return (
		<>
			<div className={`md:px-20 py-10  bg-zinc`}>
				<div className="px-20 text-center">
					<span
						className={`p-1 text-xs rounded tag-${stream} text-white font-semibold inline-block py-px px-2 mb-4 text-xs leading-5 uppercase rounded-full shadow-sm`}
					>
						{data.Tag}
					</span>
					<h2 className="text-4xl ibm-plex font-bold text-transparent font-heading bg-clip-text bg-gradient-to-br from-gray-500 via-gray-700 to-gray-400 mb-8">
						{data.Title}
					</h2>
				</div>
				<Carousel className="flex p-12 mb-0" responsive={responsive}>
					{data.ProductOfferingList.map((dt) => (
						<div key="dt" className="w-full md:w-1/2 lg:w-1/1" style={{ width: '340px', height: '300px' }}>
							<div className="group h-full">
								<a href={dt.LandingPageURL}>
									<div
										className={`group border border-black relative h-full px-8 pt-16 pb-8 light-${dt.Stream} group-hover:bg-white rounded-r-3xl hyperlink rounded-b-3xl shadow-md hover:shadow-xl transition duration-200 `}
									>
										<div className="absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 inline-flex h-16 w-16 items-center justify-center bg-white rounded-full transition duration-200">
											<div
												className={`inline-flex items-center justify-center w-12 h-12 text-white tag-${dt.Stream} rounded-full`}
											>
												<img src={dt.LogoURL} className="p-2" />
											</div>
										</div>
										<div className="text-center">
											<span
												className={`p-1 text-xs rounded tag-${dt.Stream} text-white font-semibold inline-block py-px px-2 mb-4 text-xs leading-5 uppercase rounded-full shadow-sm`}
											>
												Digital {dt.Stream}
											</span>

											<h3 className={`mb-4 text-xl leading-7 text-coolGray-900 font-bold max-w-xs ibm-plex`}>
												{dt.Title}
											</h3>
										</div>
										<p className="text-coolGray-500 group-hover:text-coolGray-600 font-medium transition duration-200">
											{dt.Description}
										</p>
									</div>
								</a>
							</div>
						</div>
					))}
				</Carousel>
			</div>
		</>
	);
}
