export default function PricingTerms({ stream, data }) {
  return (
		<>
			<section className="w-full bg-white py-12">
				<div className="box-border flex flex-col items-center content-center px-6 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl">
					<div className="box-border w-full text-black border-solid md:w-3/4 md:pl-6">
						<div className="sm:text-center pb-4">
							<span className={`p-1 mt-4 text-xs uppercase rounded tag-${stream} text-white font-semibold`}>
								{data.Tag}
							</span>
						</div>
						<h2 className="text-4xl ibm-plex font-bold text-transparent font-heading bg-clip-text bg-gradient-to-br from-gray-500 via-gray-700 to-gray-400">
							{data.Title}
						</h2>
						<p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
							{data.Description}
						</p>
						<ul className="p-0 m-0 leading-6 border-0 border-gray-300">
							{data.Terms.map((dt) => (
								<li key="dt" className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
									<span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-300 rounded-full">
										<span className="text-sm font-normal">✓</span>
									</span>{' '}
									{dt.ListItem}
								</li>
							))}
						</ul>
					</div>

					<div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/4">
						<img src="https://cdn.devdojo.com/images/december2020/designs3d.png" className="p-2" />
					</div>
				</div>
			</section>
		</>
  );
}