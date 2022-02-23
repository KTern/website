import Image from 'next/image';

import Breadcrumbs from './breadcrumb-new';

export default function Hero({ data, stream, breadcrumb }) {
	let form = data.ProductsBannerForm;
	return (
		<>
			<section className={`relative overflow-hidden section-${stream}`}>
				<div className="flex flex-wrap -mx-4 pb-10">
					<div className="w-full lg:w-1/2 pt-12 pb-6 px-4 flex justify-center">
						<div className="px-16 pl-24 sm:p-8 sm:py-0">
							<div className="ml-auto max-w-xl mb-8 lg:mb-8 m-4">
								<div className="mb-4">
									{' '}
									<Breadcrumbs breadcrumb={breadcrumb} />
								</div>
								<span className={`p-1 text-xs uppercase rounded tag-${stream} text-white font-semibold`}>
									{data.DigitalStreamTitle}
								</span>
								<h1 className="heading mt-4 mb-4 text-4xl lg:text-5xl font-semibold ease-in sm:text-center">
									{data.BannerHeadline}
								</h1>
								<p className="text-lg text-gray-500 sm:text-center">{data.BannerSubHeadline}</p>
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
								<span className="pl-3">{data.ReviewStatement}</span>
							</div>
							<div className="flex flex-wrap items-center justify-center -mx-2 -mb-12 mt-5">
								{data.ReviewImages.map((dt) => (
									<div key="dt" className="w-1/2 md:w-1/3 lg:w-1/5 px-2 mb-12">
										<Image
											priority
											className={`mx-auto lg:mx-0 h-5`}
											// layout="fill"
											src={dt.imageURL}
											alt={dt.imageDescription}
											width={dt.height}
											height={dt.width}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="w-full lg:w-1/2 p-8 pr-24 pt-32">
						<div className="relative h-full px-4 pt-8 bg-white rounded-md shadow-md">
							<div className="relative mx-auto md:mr-0 max-w-max">
								<Image
									priority
									className={`relative rounded-5xl`}
									layout="fill"
									src={data.BannerImage.imageURL}
									alt={data.BannerImage.imageDescription}
									// width={data.BannerImage.width}
									// height={data.BannerImage.height}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
