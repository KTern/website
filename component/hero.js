import Image from 'next/image';

import BreadCrumb from '../component/breadcrumb';

export default function Hero({ banner_data, stream, breadcrumb }) {
	let form = banner_data.ProductsBannerForm;
	return (
		<>
			<section className={`relative overflow-hidden section-${stream}`}>
				<div className="flex flex-wrap -mx-4 pb-10">
					<div className="w-full lg:w-1/2 pt-12 pb-6 px-4 flex justify-center">
						<div className="px-16 pl-24 sm:p-8 sm:py-0">
							<div className="ml-auto max-w-xl mb-8 lg:mb-8 m-4">
								<div className="mb-4">
									{' '}
									<BreadCrumb color="black" b_data={breadcrumb} />
								</div>
								<span className={`p-1 text-xs uppercase rounded tag-${stream} text-white font-semibold`}>
									{banner_data.DigitalStreamTitle}
								</span>
								<h1 className="heading mt-6 mb-4 lg:mb-6 text-4xl lg:text-5xl font-semibold ease-in sm:text-center">
									{banner_data.BannerHeadline}
								</h1>
								<p className="text-lg text-gray-500 sm:text-center">{banner_data.BannerSubHeadline}</p>
							</div>
							<div className="relative flex flex-wrap">
								<input
									className="relative mb-2 md:mb-0 w-full md:w-2/3 py-4 pl-4 text-sm border rounded"
									type="text"
									placeholder={form.EmailPlaceholder}
								/>
								<button className="w-full md:w-auto py-3 px-6 md:ml-2 text-sm text-white font-medium leading-normal border-2 border-black bg-black hover:bg-gray-300 hover:text-black shadow text-white  rounded-r-xl rounded-b-xl transition duration-200">
									{form.ButtonPlaceholder}
								</button>
							</div>
							<div className="rating pt-5">
								<div className="rating-star"></div>
								<div className="rating-star"></div>
								<div className="rating-star"></div>
								<div className="rating-star"></div>
								<div className="rating-star"></div>
								<span className="pl-3">{banner_data.ReviewStatement}</span>
							</div>
							<div className="flex flex-wrap items-center justify-center -mx-2 -mb-12 mt-5">
								{banner_data.ReviewImages.map((dt) => {
									<div key="dt" className="w-1/2 md:w-1/3 lg:w-1/5 px-2 mb-12">
										<Image
											priority
											className={`mx-auto lg:mx-0 h-5`}
											layout="fill"
											src={`dt.imageURL`}
											alt={`dt.imageDescription`}
											width={`dt.width`}
											height={`dt.height`}
										/>
									</div>;
								})}
							</div>
						</div>
					</div>
					<div className="w-full md:w-1/2 p-16 pt-32">
						<div className="relative h-full px-4 pt-8 bg-white rounded-md shadow-md">
							<div className="relative mx-auto md:mr-0 max-w-max">
								<Image
									priority
									className={`relative rounded-5xl`}
									layout="fill"
									src={`banner_data.BannerImage.imageURL`}
									alt={`banner_data.BannerImage.imageDescription`}
									width={`banner_data.BannerImage.width`}
									height={`banner_data.BannerImage.height`}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
