import Layout from '../component/Layout';
import SEO from '../component/seo';
import SimpleHero from '../component/simplehero';

export default function StrategicPartnersLandingPage({ pageData, headerData, footerData, stream }) {
	return (
		<>
			<Layout h_data={headerData} f_data={footerData}>
				<SEO data={pageData.PageSEO}></SEO>
				<SimpleHero
					data={pageData.PageSimpleHeader}
					breadcrumb={pageData.PageSEO.BreadCrumb}
					stream={stream}
				></SimpleHero>
				<section className="pt-8 pb-16 sm:pt-10 sm:pb-20 md:pt-12 md:pb-24 bg-bg">
					<div className="px-5 mx-auto max-w-7xl md:px-8 lg:px-16">
						<div className="relative w-full text-center">
							<h2 className="text-4xl font-bold text-transparent font-heading bg-clip-text bg-gradient-to-br from-purple-500 via-purple-700 to-purple-400">
								Are you ready to take your skills to the next level?
							</h2>
							<p className="mt-3 text-base leading-6 text-gray-600 sm:text-lg md:text-xl">
								Use our software as a service starter kit to build your next great idea. Make it simple, but
								significant.
							</p>
						</div>
						<div className="grid mt-16 gap-y-10 sm:grid-cols-2 sm:gap-x-8 md:gap-x-12 lg:grid-cols-3 lg:gap-20">
							<div>
								<div className="relative w-16 h-16 p-4 overflow-hidden rounded-full bg-gradient-to-br from-purple-500 via-purple-700 to-purple-400">
									<div className="absolute top-0 left-0 w-full h-full mt-10 transform scale-150 -rotate-45 translate-x-1/2 bg-black opacity-5"></div>
									<svg
										className="w-full h-full text-white stroke-current"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
										></path>
									</svg>
								</div>
								<h3 className="mt-6 text-base font-black leading-6 text-gray-700">Authentication</h3>
								<p className="mt-2 text-sm leading-5 text-gray-800">
									Fully loaded authentication, email verification, and password reset. Authentication in a
									snap!
								</p>
							</div>
							<div>
								<div className="relative w-16 h-16 p-4 overflow-hidden rounded-full bg-gradient-to-br from-purple-500 via-purple-700 to-purple-400">
									<div className="absolute top-0 left-0 w-full h-full mt-10 transform scale-150 -rotate-45 translate-x-1/2 bg-black opacity-5"></div>
									<svg
										className="w-full h-full text-white stroke-current"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
										></path>
									</svg>
								</div>
								<h3 className="mt-6 text-base font-black leading-6 text-gray-700">User Profiles</h3>
								<p className="mt-2 text-sm leading-5 text-gray-800">
									Customizable user profiles. Allow your users to enter data and easily customize their user
									profiles.
								</p>
							</div>
							<div>
								<div className="relative w-16 h-16 p-4 overflow-hidden rounded-full bg-gradient-to-br from-purple-500 via-purple-700 to-purple-400">
									<div className="absolute top-0 left-0 w-full h-full mt-10 transform scale-150 -rotate-45 translate-x-1/2 bg-black opacity-5"></div>
									<svg
										className="w-full h-full text-white stroke-current"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
										></path>
									</svg>
								</div>
								<h3 className="mt-6 text-base font-black leading-6 text-gray-700">User Roles</h3>
								<p className="mt-2 text-base leading-5 text-gray-800">
									Grant user permissions based on roles, you can then assign a role to a specific plan.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="box-border relative w-full font-sans leading-6 text-gray-700 bg-white border-0 border-gray-200 border-solid">
					<div className="box-border flex flex-col items-center p-6 mx-auto leading-6 border-solid max-w-7xl xl:px-16 md:items-stretch md:justify-center md:py-10">
						<div className="relative pb-10">
							<h5 className="w-full mx-0 mt-0 mb-4 font-sans font-bold text-center text-purple-700 border-0 border-gray-200">
								Features
							</h5>
							<h2 className="ibm-plex w-full m-0 font-sans text-4xl font-black leading-loose tracking-wide text-center text-gray-700 border-0 border-gray-200 sm:text-5xl">
								Amazing Features
							</h2>
							<p className="w-full max-w-xl mx-0 mx-auto mt-4 mb-0 font-sans text-sm font-medium leading-relaxed text-center text-gray-400 border-0 border-gray-200 lg:text-lg md:text-base">
								Check out our set of awesome features and tools. We are the industry leaders in providing
								quality tools, trusted and used by over 1,200 companies. We kind of rock!
							</p>
						</div>

						<div className="z-10 grid gap-5 md:grid-cols-6 lg:grid-cols-9">
							<div className="col-span-3 font-sans text-gray-700 bg-bg rounded-r-3xl hyperlink rounded-b-3xl p-4 m-2">
								<div className="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
									<div className="flex-shrink-0 p-3 font-sans text-gray-700 border border-gray-200 rounded-r-xl hyperlink rounded-b-xl ">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="leading-6 text-center text-gray-700 align-middle stroke-current w-7 h-7"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="#2c3e50"
											fill="none"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<path d="M0 0h24v24H0z" stroke="none"></path>
											<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3M12 12l8-4.5M12 12v9M12 12L4 7.5M16 5.25l-8 4.5"></path>
										</svg>
									</div>
									<div className="mt-4 font-sans text-left text-gray-700 border-0 border-gray-200 sm:mt-2 sm:ml-4">
										<h6 className="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid">
											Projects
										</h6>
										<p className="box-border mx-0 mt-1 mb-0 font-medium leading-loose text-gray-400 border-solid sm:mt-4">
											Take advantage of our unlimited projects for your tasks and automated workflow.
										</p>
									</div>
								</div>
							</div>
							<div className="col-span-3 font-sans text-gray-700 bg-bg rounded-r-3xl hyperlink rounded-b-3xl  p-4 m-2">
								<div className="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
									<div className="flex-shrink-0 p-3 font-sans text-gray-700 border border-gray-200 rounded-r-xl hyperlink rounded-b-xl ">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="leading-6 text-center text-gray-700 align-middle stroke-current w-7 h-7"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="#2c3e50"
											fill="none"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<path d="M0 0h24v24H0z" stroke="none"></path>
											<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3M12 12l8-4.5M12 12v9M12 12L4 7.5M16 5.25l-8 4.5"></path>
										</svg>
									</div>
									<div className="mt-4 font-sans text-left text-gray-700 border-0 border-gray-200 sm:mt-2 sm:ml-4">
										<h6 className="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid">
											Projects
										</h6>
										<p className="box-border mx-0 mt-1 mb-0 font-medium leading-loose text-gray-400 border-solid sm:mt-4">
											Take advantage of our unlimited projects for your tasks and automated workflow.
										</p>
									</div>
								</div>
							</div>
							<div className="col-span-3 font-sans text-gray-700 bg-bg rounded-r-3xl hyperlink rounded-b-3xl  p-4 m-2">
								<div className="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
									<div className="flex-shrink-0 p-3 font-sans text-gray-700 border border-gray-200 rounded-r-xl hyperlink rounded-b-xl ">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="leading-6 text-center text-gray-700 align-middle stroke-current w-7 h-7"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="#2c3e50"
											fill="none"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<path d="M0 0h24v24H0z" stroke="none"></path>
											<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3M12 12l8-4.5M12 12v9M12 12L4 7.5M16 5.25l-8 4.5"></path>
										</svg>
									</div>
									<div className="mt-4 font-sans text-left text-gray-700 border-0 border-gray-200 sm:mt-2 sm:ml-4">
										<h6 className="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid">
											Projects
										</h6>
										<p className="box-border mx-0 mt-1 mb-0 font-medium leading-loose text-gray-400 border-solid sm:mt-4">
											Take advantage of our unlimited projects for your tasks and automated workflow.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="bg-purple-600">
					<div className="px-8 py-8 mx-auto sm:py-10 lg:py-20 max-w-7xl">
						<div className="overflow-hidden bg-gray-900 border-2 border-white-600 rounded-r-3xl hyperlink rounded-b-3xl md:py-6 lg:py-12 md:px-6 lg:p-16 lg:flex lg:items-center lg:justify-between md:shadow-xl">
							<div className="p-6 rounded-lg md:p-0 md:pb-4 bg-purple-1000">
								<h2 className="ibm-plex text-3xl font-extrabold leading-9 tracking-tight text-purple-100 sm:text-4xl sm:leading-10">
									Ready to get started?
									<br />
									<span className="text-purple-500 ibm-plex">Level-up with our Pro Plan.</span>
								</h2>
								<p className="w-full mt-5 text-base leading-6 text-purple-100 md:w-3/4">
									Our intuitive dragn drop interface will have you designing and building interfaces quicker
									than ever before.
								</p>
							</div>
							<div className="flex w-full md:w-auto lg:flex-shrink-0">
								<a
									href="#_"
									className="block w-full px-5 py-3 text-base font-medium leading-6 text-center text-white transition duration-150 ease-in-out bg-purple-600 md:inline-flex md:rounded-md md:shadow md:w-auto hover:bg-purple-500 focus:outline-none focus:shadow-outline"
								>
									Get Started for $15/mo
								</a>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
}

export const getStaticProps = async () => {
	//    fetch strapi data
	const res = await fetch(`https://api.ktern.com/strategic-partners`, {
		method: 'get',
	});
	const data = await res.json();
	// console.log('data1', data);
	const res1 = await fetch('https://api.ktern.com/header', {
		method: 'get',
	});
	const h_data = await res1.json();
	const res2 = await fetch('https://api.ktern.com/footer', {
		method: 'get',
	});
	const f_data = await res2.json();

	return {
		props: {
			pageData: data,
			headerData: h_data,
			footerData: f_data,
			stream: 'dxaas'
		},
	};
};
