export default function ValuePoints({ data, stream }) {
  return (
		<>
			<section className="bg-streamsBg py-12 bg-white overflow-hidden">
				<div className="container px-4 mx-auto">
					<div className="text-center">
						<span
							className={`p-1 text-xs rounded ${stream.cssstreamtag} text-white font-semibold inline-block py-px px-2 mb-4 text-xs leading-5 uppercase rounded-full shadow-sm`}
						>
							{data.Tag}
						</span>
						<h2 className="mb-4 text-3xl md:text-5xl leading-tight font-bold tracking-tighter">
							{data.Title}
						</h2>
						<p className="mb-12 section-subheading md:text-1xl text-center text-black px-12">
							{data.Description}
						</p>
					</div>
					<div className="flex flex-wrap -mx-4">
						<div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
							<div className="relative mx-auto md:ml-0 max-w-max">
								<img
									className="absolute z-10 -right-8 -top-8 w-28 md:w-auto"
									src="https://shuffle.dev/flex-ui-assets/elements/circle3-yellow.svg"
									alt=""
								/>
								<img
									className="absolute z-10 -left-10 -bottom-8 w-28 md:w-auto"
									src="https://shuffle.dev/flex-ui-assets/elements/dots3-blue.svg"
									alt=""
								/>
								<img src="https://shuffle.dev/flex-ui-assets/images/how-it-works/stock.png" alt="" />
							</div>
						</div>
						<div className="w-full md:w-1/2 px-4">
							<div className="flex flex-wrap -mx-4 text-center md:text-left">
								{data.ValuePoints.map((dt, index) => (
									<div
										key="dt"
										className="w-full md:w-1/2 p-8 mb-4 hover:bg-white rounded-md hover:shadow-xl transition duration-200"
									>
										<div
											className={`inline-flex text-white items-center justify-center mb-4 w-12 h-12 text-xl ${stream} font-semibold rounded-full`}
										>
											{index + 1}
										</div>
										<h3 className="mb-2 text-xl font-bold">{dt.Title}</h3>
										<p className="font-medium text-coolGray-500">{dt.Description}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
  );
}