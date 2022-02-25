export default function FeaturedResources({ data, stream }) {
  return (
		<>
			<div className="py-12 bg-white radius-for-skewed">
				<div className="container mx-auto px-4">
					<div className="mb-16 text-center">
						<span
							className={`p-1 text-xs rounded tag-${stream} text-white font-semibold inline-block py-px px-2 mb-4 text-xs leading-5 uppercase rounded-full shadow-sm`}
						>
							{data.Tag}
						</span>
						<h3 className="mb-4 text-3xl md:text-5xl leading-tight font-bold tracking-tighter">
							{data.SectionTitle}
						</h3>
					</div>
					<div className="flex flex-wrap justify-center -mx-3">
						<div className="flex flex-wrap w-full lg:w-1/2">
							{/* Large Card */}
							<div className="w-full px-3 mb-5">
								<a href={data.Resource[0].CTAUrl}>
									<div className="relative h-64 mx-auto rounded">
										<div className={`absolute inset-0 maps-card rounded`}></div>
										<div className="absolute inset-0 p-6 flex flex-col items-start">
											<p className="text-xl lg:text-2xl pt-20 text-black font-bold">
												<span
													className={`p-1 text-xs rounded tag-${stream} text-white font-semibold inline-block py-px px-2 mb-4 text-xs leading-5 uppercase rounded-full shadow-sm`}
												>
													{data.Resource[0].Tag}
												</span>
												<br />
												{data.Resource[0].ResourceTitle}
											</p>
										</div>
									</div>
								</a>
							</div>
							{/* / Large Card */}
							{/* Small Card */}
							<div className="w-full lg:w-1/2 px-3 mb-5">
								<a href={data.Resource[1].CTAUrl}>
									<div className="relative mx-auto rounded h-64">
										<div className={`absolute inset-0 bg-${stream} rounded`}></div>
										<div
											className="absolute inset-0 p-6 flex flex-col items-start bg-resourcesBg"
											style={{
												backgroundImage: `url(/dots-left.svg)`,
												backgroundPosition: 'bottom left',
												backgroundRepeat: 'no-repeat',
											}}
										>
											<span
												className={`p-2 text-xs rounded tag-${stream} text-white font-semibold inline-block py-px px-2 mb-4 text-xs leading-5 uppercase rounded-full shadow-sm`}
											>
												{data.Resource[1].Tag}
											</span>
											<p className="pt-4 text-xl lg:text-2xl text-black font-bold">
												{data.Resource[1].ResourceTitle}
											</p>
										</div>
									</div>
								</a>
							</div>
							<div className="w-full lg:w-1/2 px-3 mb-5">
								<a href={data.Resource[2].CTAUrl}>
									<div className="relative mx-auto rounded h-64">
										<div className={`absolute inset-0 bg-${stream} rounded`}></div>
										<div
											className="absolute inset-0 p-6 flex flex-col items-start bg-resorcesBg"
											style={{
												backgroundImage: `url(/dots-left.svg)`,
												backgroundPosition: 'bottom left',
												backgroundRepeat: 'no-repeat',
											}}
										>
											<span
												className={`p-2 text-xs rounded tag-${stream} text-white font-semibold inline-block py-px px-2 mb-4 text-xs leading-5 uppercase rounded-full shadow-sm`}
											>
												{data.Resource[2].Tag}
											</span>
											<p className="pt-4 text-xl lg:text-2xl text-black font-bold">
												{data.Resource[2].ResourceTitle}
											</p>
										</div>
									</div>
								</a>
							</div>
							{/* Small Card */}
						</div>
						<div className="flex flex-wrap w-full lg:w-1/2">
							{/* Small Card */}
							<div className="w-full lg:w-1/2 px-3 mb-5">
								<a href={data.Resource[3].CTAUrl}>
									<div className="relative mx-auto rounded h-64">
										<div className={`absolute inset-0 bg-${stream} rounded`}></div>
										<div
											className="absolute inset-0 p-6 flex flex-col items-start bg-resourcesBg"
											style={{
												backgroundImage: `url(/dots-left.svg)`,
												backgroundPosition: 'bottom left',
												backgroundRepeat: 'no-repeat',
											}}
										>
											<p className="text-xl lg:text-2xl text-black font-bold">
												<span
													className={`p-1 text-xs rounded tag-${stream} text-white font-semibold inline-block py-px px-2 mb-4 text-xs leading-5 uppercase rounded-full shadow-sm`}
												>
													{data.Resource[3].Tag}
												</span>
												<br />
												{data.Resource[3].ResourceTitle}
											</p>
										</div>
									</div>
								</a>
							</div>
							<div className="w-full lg:w-1/2 px-3 mb-5">
								<a href={data.Resource[4].CTAUrl}>
									<div className="relative mx-auto rounded h-64">
										<div className={`absolute inset-0 bg-${stream} rounded`}></div>
										{/* <Image priority layout="fill" src="/bullets-gray-left.svg" alt="" /> */}
										<div
											className="absolute inset-0 p-6 flex flex-col items-start bg-resourcesBg"
											style={{
												backgroundImage: `url(/dots-left.svg)`,
												backgroundPosition: 'bottom left',
												backgroundRepeat: 'no-repeat',
											}}
										>
											<p className="text-xl lg:text-2xl text-black font-bold">
												<span
													className={`p-1 text-xs rounded tag-${stream} text-white font-semibold inline-block py-px px-2 mb-4 text-xs leading-5 uppercase rounded-full shadow-sm`}
												>
													{data.Resource[4].Tag}
												</span>
												<br />
												{data.Resource[4].ResourceTitle}
											</p>
										</div>
									</div>
								</a>
							</div>
							{/* Small Card */}
							{/* Large Card */}
							<div className="w-full px-3 mb-5">
								<a href={data.Resource[5].CTAUrl}>
									<div className="relative h-64 mx-auto rounded">
										<div className={`absolute inset-0 maps-card rounded`}></div>
										<div className="absolute inset-0 p-6 flex flex-col items-start">
											<p className="text-xl lg:text-2xl pt-20 text-black font-bold">
												<span
													className={`p-1 text-xs rounded tag-${stream} text-white font-semibold inline-block py-px px-2 mb-4 text-xs leading-5 uppercase rounded-full shadow-sm`}
												>
													{data.Resource[5].Tag}
												</span>
												<br />
												{data.Resource[5].ResourceTitle}
											</p>
										</div>
									</div>
								</a>
							</div>
							{/* / Large Card */}
						</div>
					</div>
				</div>
			</div>
		</>
  );
}