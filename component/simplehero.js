import Breadcrumbs from "./breadcrumb-new";

export default function SimpleHero({ data, breadcrumb, stream}) {
  return (
		<>
			<section className="relative flex flex-col-reverse w-full px-6 py-16 bg-gray-900 lg:pt-0 lg:flex-col lg:pb-0">
				<div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
					<svg
						className="absolute left-0 hidden h-full text-gray-900 transform -translate-x-1/2 lg:block"
						viewBox="0 0 100 100"
						fill="currentColor"
						preserveAspectRatio="none slice"
					>
						<path d="M50 0H80L50 120H0L50 0Z"></path>
					</svg>
					<img
						className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
						src={data.BannerImage.imageURL}
						alt={data.BannerImage.imageDescription}
					/>
				</div>
				<div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
					<div className="mb-16 lg:my-16 lg:max-w-lg lg:pr-5">
						<div className="my-4">
							{' '}
							<Breadcrumbs breadcrumb={breadcrumb} />
						</div>
						<div className="sm:text-center">
							<span className={`p-1 my-4 text-xs uppercase rounded tag-${stream} text-white font-semibold`}>
								{data.Tag}
							</span>
						</div>
						<h1 className="my-4 font-sans ibm-plex text-4xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
							{data.Header}
							<br className="hidden md:block" />
							<span className="inline-block text-purple-500 ibm-plex">{data.HighlightTextHeader}</span>
						</h1>
						<p className="mb-5 text-base text-gray-300 sm:pr-10 md:text-lg">{data.SubHeading}</p>
						<div className="flex items-center pt-2 sm:flex-row sm:pt-4">
							<button
								className={`mr-8 sm:ml-0 sm:uppercase sm:w-3/4 sm:mt-1 inline-block p-4 w-full md:w-auto text-base leading-4 text-white tag-${stream} hover:bg-gray-600 font-medium text-center focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 rounded-r-xl rounded-b-xl transition duration-200 shadow`}
							>
								{data.CTAButtons[0].buttonTitle}
							</button>
							<button
								className={`mr-8 sm:ml-0 sm:uppercase sm:w-3/4 sm:mt-1 inline-block p-4 w-full md:w-auto text-base leading-4 text-white bg-gray-700  hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none rounded-r-xl rounded-b-xl transition duration-200 shadow`}
							>
								{data.CTAButtons[1].buttonTitle}
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
  );
}