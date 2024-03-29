import Breadcrumbs from './breadcrumb-new';

export default function NoImageHero({data, breadcrumb, stream}) {
	return (
		<>
			<section className="py-24 relative overflow-hidden bg-bg">
				<div className="container px-4 mx-auto relative z-10">
					<div className="max-w-md lg:max-w-2xl mx-auto text-center">
						{' '}
						<div className="sm:hidden">
							<Breadcrumbs breadcrumb={breadcrumb} />
						</div>
						<div className="p-6">
							<div className="sm:text-center">
								<span className={`p-1 my-4 text-xs uppercase rounded tag-${stream} text-white font-semibold`}>
									{data.Tag}
								</span>
							</div>
							<h1 className="text-5xl font-bold mt-2 mb-6 ibm-plex">{data.Heading}</h1>
							<p className="text-base font-normal leading-none text-gray-700 md:text-lg mb-4">
								{data.SubHeading}
							</p>
						</div>
						<div className="flex flex-wrap -mx-2 -mb-2 justify-center items-center">
							<div className="w-full md:w-auto px-2 mb-2">
								<a
									className={`block rounded-r-xl rounded-b-xl w-full md:w-auto py-3 px-8 text-center tag-${stream} text-white font-bold border border-gray-200 hover:bg-gray-500 hover:text-white transition duration-200`}
									href={data.CTAButtons.linkURL}
								>
									{data.CTAButtons.buttonTitle}
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="absolute bottom-0 left-0 h-full md:flex md:flex-col md:justify-center">
					<div className="hidden md:block mb-8 h-32 lg:h-64 w-32 lg:w-64 bg-gray-100"></div>
					<div className="hidden md:block mb-8 h-32 lg:h-64 w-32 lg:w-64 bg-green-100"></div>
					<div className="h-16 sm:h-32 lg:h-64 w-16 sm:w-32 lg:w-64 bg-red-100"></div>
				</div>
				<div className="absolute top-0 right-0 h-full md:flex md:flex-col md:justify-center">
					<div className="mb-8 h-16 sm:h-32 lg:h-64 w-16 sm:w-32 lg:w-64 bg-pink-100"></div>
					<div className="hidden md:block mb-8 h-32 lg:h-64 w-32 lg:w-64 bg-indigo-100"></div>
					<div className="hidden md:block h-32 lg:h-64 w-32 lg:w-64 bg-blue-100"></div>
				</div>
			</section>
		</>
	);
}
