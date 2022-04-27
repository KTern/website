export default function Certificate() {
	return (
		<>
			<section className="relative pb-24">
				<div className="absolute top-0 right-0 flex w-full h-3/4 md:h-2/3 bg-purple-200">
					<img
						className="absolute bottom-0 left-0 right-0 w-full -mb-4"
						src="https://shuffle.dev/nigodo-assets/background/background-purple-top.svg"
						alt=""
					/>
				</div>
				<div className="container px-4 mx-auto relative">
					<div className="max-w-5xl mx-auto text-center">
						<span className="text-xl md:text-2xl font-extrabold text-purple-500">Section label</span>
						<h1 className="max-w-4xl mx-auto text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading mt-1 mb-6">
							A small business is only as good as its tools.
						</h1>
						<p className="text-xl md:text-2xl font-extrabold leading-8 mb-12">
							We’re different. Nogodo is the only SaaS business platform that lets you run your business on one
							platform, seamlessly across all digital channels.
						</p>
						<div className="flex flex-wrap mb-20 justify-center">
							<a
								className="inline-block w-full md:w-auto mb-2 md:mb-0 md:mr-4 py-4 px-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
								href="#"
							>
								Request a demo
							</a>
							<a
								className="inline-block w-full md:w-auto py-4 px-6 text-center leading-6 text-lg hover:text-white font-extrabold bg-white border-3 border-indigo-900 hover:bg-indigo-800 shadow rounded transition duration-200"
								href="#"
							>
								Learn More
							</a>
						</div>
						<img
							className="block w-full h-128 lg:h-140 object-cover border-3 border-indigo-900 rounded-2xl shadow-lg"
							src="https://shuffle.dev/nigodo-assets/headers/office-laptop.jpg"
							alt=""
						/>
					</div>
				</div>
				<div className="hidden navbar-menu relative z-50">
					<div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
					<nav className="fixed top-0 left-0 bottom-0 flex flex-col w-full md:w-5/6 max-w-sm py-8 px-8 bg-purple-200 border-r overflow-y-auto">
						<div className="flex items-center mb-8">
							<a className="mr-auto text-2xl font-bold leading-none" href="#">
								<img
									className="h-6"
									src="https://shuffle.dev/nigodo-assets/logo-nigodo.svg"
									alt=""
									width="auto"
								/>
							</a>
							<button className="navbar-close">
								<svg
									className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									></path>
								</svg>
							</button>
						</div>
						<div className="my-auto">
							<ul className="py-10">
								<li className="mb-1">
									<a className="block p-4 text-lg font-extrabold hover:bg-purple-300 rounded" href="#">
										Product
									</a>
								</li>
								<li className="mb-1">
									<a className="block p-4 text-lg font-extrabold hover:bg-purple-300 rounded" href="#">
										Features
									</a>
								</li>
								<li className="mb-1">
									<a className="block p-4 text-lg font-extrabold hover:bg-purple-300 rounded" href="#">
										Pricing
									</a>
								</li>
								<li className="mb-1">
									<a className="block p-4 text-lg font-extrabold hover:bg-purple-300 rounded" href="#">
										Resources
									</a>
								</li>
							</ul>
						</div>
						<div>
							<a
								className="block mb-6 text-center leading-6 text-lg font-extrabold hover:text-indigo-800"
								href="#"
							>
								Log In
							</a>
							<a
								className="block py-4 px-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
								href="#"
							>
								Sign Up
							</a>
						</div>
					</nav>
				</div>
			</section>
		</>
	);
}
