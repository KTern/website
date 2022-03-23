export default function Testimonial({ data, stream }) {
	return (
		<>
			<section
				className={`pt-12 pb-8 overflow-x-hidden sm:bg-bg texture-${stream}`}
			>
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
							<div className="flex flex-col h-full p-8 bg-white shadow-md rounded-md">
								<div className="py-2">
									<svg
										width="26"
										height="18"
										viewBox="0 0 26 18"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M20.5469 17.2673C19.7188 17.2673 18.9531 17.1345 18.25 16.8689C17.5625 16.6033 16.9688 16.2205 16.4688 15.7205C15.9688 15.2048 15.5781 14.5876 15.2969 13.8689C15.0156 13.1501 14.875 12.3376 14.875 11.4314C14.875 9.38452 15.5703 7.4314 16.9609 5.57202C18.3672 3.69702 20.4062 2.03296 23.0781 0.579834L25.6562 4.25952C24.9531 4.63452 24.3281 5.00171 23.7812 5.36108C23.25 5.72046 22.7812 6.08765 22.375 6.46265C21.9844 6.83765 21.6406 7.22827 21.3438 7.63452C21.0625 8.02515 20.8047 8.44702 20.5703 8.90015C21.3359 8.90015 22.0234 9.00952 22.6328 9.22827C23.2578 9.44702 23.7891 9.75171 24.2266 10.1423C24.6797 10.5173 25.0234 10.9626 25.2578 11.4783C25.5078 11.9783 25.6328 12.5173 25.6328 13.0955C25.6328 13.6736 25.5078 14.2205 25.2578 14.7361C25.0234 15.2361 24.6797 15.6736 24.2266 16.0486C23.7891 16.4236 23.2578 16.7205 22.6328 16.9392C22.0078 17.158 21.3125 17.2673 20.5469 17.2673ZM5.96875 17.2673C5.14062 17.2673 4.375 17.1345 3.67188 16.8689C2.98438 16.6033 2.39062 16.2205 1.89062 15.7205C1.39062 15.2048 1 14.5876 0.71875 13.8689C0.4375 13.1501 0.296875 12.3376 0.296875 11.4314C0.296875 9.38452 0.992188 7.4314 2.38281 5.57202C3.78906 3.69702 5.82812 2.03296 8.5 0.579834L11.0781 4.25952C10.375 4.63452 9.75 5.00171 9.20312 5.36108C8.67188 5.72046 8.20312 6.08765 7.79688 6.46265C7.40625 6.83765 7.0625 7.22827 6.76562 7.63452C6.48438 8.02515 6.22656 8.44702 5.99219 8.90015C6.75781 8.90015 7.44531 9.00952 8.05469 9.22827C8.67969 9.44702 9.21094 9.75171 9.64844 10.1423C10.1016 10.5173 10.4453 10.9626 10.6797 11.4783C10.9297 11.9783 11.0547 12.5173 11.0547 13.0955C11.0547 13.6736 10.9297 14.2205 10.6797 14.7361C10.4453 15.2361 10.1016 15.6736 9.64844 16.0486C9.21094 16.4236 8.67969 16.7205 8.05469 16.9392C7.42969 17.158 6.73438 17.2673 5.96875 17.2673Z"
											fill="#0b1320"
											data-path="0.1.0.0.0.0.0.0"
										/>
									</svg>
								</div>
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
