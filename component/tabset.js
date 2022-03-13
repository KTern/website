import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default function TabSet({ stream, data }) {
	return (
		<>
			<section className="bg-streamsBg py-6 bg-white overflow-hidden">
				<div className="container mx-auto">
					<div className="text-center">
						<span
							className={`p-1 text-xs rounded tag-${stream} text-white font-semibold inline-block py-px px-2 mb-4 text-xs leading-5 uppercase rounded-full shadow-sm`}
						>
							{data.Tag}
						</span>
						<h2 className="mb-4 text-3xl md:text-5xl leading-tight font-bold ibm-plex">{data.Title}</h2>
						<p className="m-6 mb-12 section-subheading md:text-1xl text-center text-black px-12 text-lg md:text-xl font-medium">
							{data.Content}
						</p>
					</div>

					<Tabs>
						<TabList>
							{data.TabPanel.map((dt) => (
								<Tab key="dt">
									<div className="pl-2">
										<h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold ibm-plex">
											{dt.SideTitle}
										</h3>
										<p className="text-coolGray-500 font-medium">{dt.SideDescription}</p>
									</div>
								</Tab>
							))}
						</TabList>
						{data.TabPanel.map((dt1) => (
							<TabPanel key="dt1">
								<div className="pt-4 pl-12 panel-content">
									<section className=" bg-white">
										<div className="container mx-auto">
											<div className="text-center">
												<span
													className={`p-1 text-xs rounded tag-${stream} text-white font-semibold inline-block py-px px-2 mb-4 text-xs leading-5 uppercase rounded-full shadow-sm`}
												>
													{dt1.SideTitle}
												</span>
												<h3 className="mb-10 mx-auto text-3xl md:text-4xl leading-tight text-coolGray-900 font-bold tracking-tighter ibm-plex max-w-5xl">
													{dt1.MainTitle}
												</h3>
												<p className="relative text-coolGray-500 font-medium pb-4">{dt1.MainContent}</p>
												<div className="relative mb-10 mx-auto max-w-max">
													<img
														className="absolute top-1/2 transform -translate-y-1/2 w-1/2 md:w-auto text-yellow-400"
														src="https://shuffle.dev/flex-ui-assets/elements/circle1-blue.svg"
														alt=""
													/>
													<img
														className="absolute top-1/2 right-0 transform -translate-y-1/2 w-1/4 md:w-auto text-blue-500"
														src="https://shuffle.dev/flex-ui-assets/elements/dots1-violet.svg"
														alt=""
													/>
													<img
														className="absolute p-7 -mt-1 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10/12 z-20"
														src={dt1.ImageURL}
														alt={dt1.SideTitle}
														width="731"
														height="470"
													/>
													<img
														className="relative z-10"
														src="https://shuffle.dev/flex-ui-assets/elements/applications/macbook.png"
														alt=""
													/>
												</div>
											</div>
										</div>
									</section>
								</div>
							</TabPanel>
						))}
					</Tabs>
				</div>
			</section>
		</>
	);
}
