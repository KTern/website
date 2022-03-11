export default function Testimonial({ data, stream }) {
  return (
		<>
			<section className="pt-12 pb-8 bg-white overflow-x-hidden sm:bg-bg">
				<div className="-mx-4 px-20">
					<div className="mb-12 text-center">
						<span
							className={`p-1 text-center text-xs rounded tag-${stream} text-white font-semibold inline-block py-px px-2 mb-4 text-xs leading-5 uppercase rounded-full shadow-sm`}
						>
							{data.TagTitle}
						</span>
						<h3 className="mb-4 text-3xl md:text-5xl leading-tight font-bold text-black ibm-plex">
							{data.SectionTitle}
						</h3>
					</div>
				</div>
				<div className="flex flex-wrap -mx-4 px-12">
					{data.Testimonials.map((dt, index) => (
						<div key="dt" className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
							<div className="flex flex-col h-full p-8 bg-coolGray-50 shadow-md rounded-md">
								<h3 className="pb-14 mb-auto text-lg md:text-base font-medium text-coolGray-500 group-hover:text-coolGray-600 font-medium transition duration-200">
									{dt.TestimonialStatement}
								</h3>
								<h4 className="mb-1 text-sm font-semibold">{dt.AuthorName}</h4>
								<p className=" text-coolGray-400">{dt.AuthorDescription}</p>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
  );
}