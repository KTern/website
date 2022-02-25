import Image from 'next/image';
import Link from 'next/link';
import Event from '../component/page_event';

export default function StreamFeatures({ data, source, stream }) {
	// Amplitude Tracking onClick
	function onClick(data) {
		Event(data);
  }
	return (
		<>
			<section className="py-6 md:py-8 bg-white overflow-hidden">
				{data.map((dt, index) => {
					return index % 2 == 0 ? (
						<div className="container px-8 py-16 mx-auto">
							<div className="flex flex-wrap lg:items-center -mx-4">
								<div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
									<span
										className={`inline-block py-px px-2 mb-4 text-xs leading-5 text-white tag-${stream} font-medium uppercase rounded-full shadow-sm`}
									>
										{dt.Tag}
									</span>
									<h1 className="mb-4 text-3xl md:text-5xl leading-tight font-bold tracking-tighter">
										{dt.Title}
									</h1>
									<p className="mb-6 text-lg md:text-xl text-coolGray-500 font-medium">{dt.Description}</p>
									<Link href={dt.CTAUrl} passHref>
										<a
											onClick={() => {
												onClick({
													stream_score: resolve_stream_score(stream),
													event_name: 'Link Click',
													section_name: 'Features Section',
													page_source: `${source}`,
													label: `${dt.Title}-${dt.CTAText}`,
												});
											}}
											className={`inline-block py-4 px-5 w-full md:w-auto text-base leading-4 text-white tag-${stream} hover:bg-amber-600 font-medium text-center focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 rounded-r-xl rounded-b-xl transition duration-200 shadow`}
										>
											{dt.CTAText}
										</a>
									</Link>
								</div>

								<div className="sm:block sm:hidden w-full lg:w-1/2 px-8 flex items-center justify-center">
									<div className="relative" style={{ zIndex: 0 }}>
										<div className="h-128 w-full relative">
											<Image
												priority
												className="rounded-3xl md:rounded-tl-none bg-white"
												layout="fill"
												src={dt.ImageURL}
												alt={dt.Title}
											/>
										</div>
										<div
											className="animate-pulse hidden md:block absolute w-60 h-40"
											style={{ bottom: '2.5rem', right: '-4.5rem', zIndex: -1 }}
										>
											<Image priority layout="fill" src="/bullets-gray-left.svg" alt="" />
										</div>
									</div>
								</div>
							</div>
						</div>
					) : (
						index % 2 != 0 && (
							<div className="container px-8 py-16 mx-auto">
								<div className="flex flex-wrap p-4 lg:items-center -mx-4">
									<div className="sm:block sm:hidden w-full lg:w-1/2 px-8 flex items-center justify-center">
										<div className="relative" style={{ zIndex: 0 }}>
											<div className="h-128 w-full relative">
												<Image
													priority
													className="rounded-3xl md:rounded-tl-none bg-white"
													layout="fill"
													src={dt.ImageURL}
													alt={dt.Title}
												/>
											</div>
											<div
												className="animate-pulse hidden md:block absolute w-60 h-40"
												style={{ top: '3rem', left: '-8rem', zIndex: -1 }}
											>
												<Image priority layout="fill" src="/bullets-gray-right.svg" alt="" />
											</div>
										</div>
									</div>

									<div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
										<span
											className={`inline-block py-px px-2 mb-4 text-xs leading-5 text-white tag-${stream} font-medium uppercase rounded-full shadow-sm`}
										>
											{dt.Tag}
										</span>
										<h1 className="mb-4 text-3xl md:text-5xl leading-tight font-bold tracking-tighter">
											{dt.Title}
										</h1>
										<p className="mb-6 text-lg md:text-xl text-coolGray-500 font-medium">{dt.Description}</p>
										<Link href={dt.CTAUrl} passHref>
											<a
												onClick={() => {
													onClick({
														stream_score: resolve_stream_score(stream),
														event_name: 'Link Click',
														section_name: 'Features Section',
														page_source: `${source}`,
														label: `${dt.Title}-${dt.CTAText}`,
													});
												}}
												className={`inline-block py-4 px-5 w-full md:w-auto text-base leading-4 text-white tag-${stream} hover:bg-amber-600 font-medium text-center focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 rounded-r-xl rounded-b-xl transition duration-200 shadow`}
											>
												{dt.CTAText}
											</a>
										</Link>
									</div>
								</div>
							</div>
						)
					);
				})}
			</section>
		</>
	);
}
