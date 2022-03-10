export default function Statistics({ stream, data }) {
	return (
		<>
			<section className={`py-10 bg-bg`}>
				<div className="container px-4 pb-4 mx-auto">
					<div className="text-center">
						<span
							className={`p-1 text-xs rounded tag-${stream} text-white font-semibold inline-block py-px px-2 mb-4 text-xs leading-5 uppercase rounded-full shadow-sm`}
						>
							{data.SectionTitle}
						</span>
						<h2 className="mb-4 text-3xl md:text-5xl leading-tight font-bold ibm-plex">{data.Heading}</h2>
						<p className="m-6 mb-12 section-subheading md:text-1xl text-center text-black px-12 text-lg md:text-xl font-medium">
							{data.SubHeading}
						</p>
					</div>
					<div className="flex flex-wrap lg:flex-nowrap bg-white shadow rounded">
						{data.StatisticsCard.map((dt) => (
							<div
								key="dt"
								className="w-full md:w-1/2 lg:w-1/4 px-4 py-6 text-center border-b lg:border-b-0 md:border-r"
							>
								<p className="text-md lg:text-base text-blueGray-400">
									<span>{dt.Title}</span>
									{dt.IsIncreasing ? (
										<span className="text-xs py-1 px-2 ml-1 font-semibold text-green-600 bg-green-100 rounded-full">
											{dt.Percentage}
										</span>
									) : (
										<span className="text-xs py-1 px-2 ml-1 font-semibold text-red-600 bg-red-100 rounded-full">
											{dt.Percentage}
										</span>
									)}
								</p>
								<p className="my-1 text-3xl lg:text-4xl font-bold font-heading">{dt.StatisticsPoint}</p>
								<span className="text-xs lg:text-base text-blueGray-500">{dt.MetaInformation}</span>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
