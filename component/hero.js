import Image from 'next/image';
import Breadcrumbs from './breadcrumb-new';

export default function Hero({ data, stream, breadcrumb }) {
	let form = data.ProductsBannerForm;
	return (
		<>
			<section className={`relative section-${stream} overflow-hidden`}>
				<div className="flex flex-wrap pb-4">
					<div className="w-full lg:w-1/2 pt-12 pb-6 flex justify-center">
						<div className="px-12 pl-24 sm:p-8 sm:py-0">
							<div className="ml-auto mb-8 lg:mb-8 m-4">
								<div className="mb-4">
									{' '}
									<Breadcrumbs breadcrumb={breadcrumb} />
								</div>
								<span className={`p-1 text-xs uppercase rounded tag-${stream} text-white font-semibold`}>
									{data.DigitalStreamTitle}
								</span>
								<h1 className="heading mt-4 mb-4 text-4xl lg:text-5xl font-semibold ease-in sm:text-center">
									{data.BannerHeadline}
								</h1>
								<p className="text-lg text-gray-500 sm:text-center text-lg md:text-xl font-medium ibm-plex">
									{data.BannerSubHeadline}
								</p>
							</div>
							<div>
								<form
									className="relative flex flex-wrap"
									method="POST"
									id="zcampaignOptinForm"
									action="https://maillist-manage.in/weboptin.zc"
									target="_zcSignup"
								>
									<input
										className="relative mb-2 md:mb-0 w-full md:w-2/3 py-4 pl-4 text-sm border rounded"
										type="text"
										placeholder={form.EmailPlaceholder}
										changeitem="SIGNUP_FORM_FIELD"
										name="CONTACT_EMAIL"
										id="EMBED_FORM_EMAIL_LABEL"
									/>
									<button
										className={`ml-4 inline-block p-4 w-full md:w-auto text-base leading-4 text-white tag-${stream} hover:bg-gray-600 font-medium text-center focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 rounded-r-xl rounded-b-xl transition duration-200 shadow`}
										name="SIGNUP_SUBMIT_BUTTON"
										id="zcWebOptin"
										value="SIGN UP"
									>
										{form.ButtonPlaceholder}
									</button>
									<input type="hidden" id="fieldBorder" value="" />
									<input type="hidden" id="submitType" name="submitType" value="optinCustomView" />
									<input type="hidden" id="emailReportId" name="emailReportId" value="" />
									<input type="hidden" id="formType" name="formType" value="QuickForm" />
									<input type="hidden" name="zx" id="cmpZuid" value="1df8f43af3" />
									<input type="hidden" name="zcvers" value="2.0" />
									<input type="hidden" name="oldListIds" id="allCheckedListIds" value="" />
									<input type="hidden" id="mode" name="mode" value="OptinCreateView" />
									<input type="hidden" id="zcld" name="zcld" value="1fedd54b7401843" />
									<input type="hidden" id="zctd" name="zctd" value="1fedd54b6e5caf9" />
									<input type="hidden" id="document_domain" value="" />
									<input type="hidden" id="zc_Url" value="kter.maillist-manage.in" />
									<input type="hidden" id="new_optin_response_in" value="0" />
									<input type="hidden" id="duplicate_optin_response_in" value="0" />
									<input type="hidden" name="zc_trackCode" id="zc_trackCode" value="ZCFORMVIEW" />
									<input
										type="hidden"
										id="zc_formIx"
										name="zc_formIx"
										value="3z13da2e47015176d36361403bc42cbd81b821e4ba984741f553eed14728964985"
									/>
									<input type="hidden" id="viewFrom" value="URL_ACTION" />
									<input type="hidden" id="scriptless" name="scriptless" value="yes"></input>
								</form>
							</div>
							<div className="rating pt-5 sm:hidden">
								<div className="rating-star"></div>
								<div className="rating-star"></div>
								<div className="rating-star"></div>
								<div className="rating-star"></div>
								<div className="rating-star"></div>
								<span className="pl-3 ibm-plex text-gray-600">{data.ReviewStatement}</span>
							</div>
							<div className="flex flex-wrap items-center justify-center -mx-2 mb-6 mt-5 sm:hidden">
								{data.ReviewImages.map((dt) => (
									<div key="dt" className="w-1/4 md:w-1/4 lg:w-1/4">
										<Image
											priority
											className={`mx-auto lg:mx-0 h-5`}
											layout="responsive"
											src={dt.imageURL}
											alt={dt.imageDescription}
											width={dt.width}
											height={dt.height}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="w-full lg:w-1/2 pr-12 pt-24 sm:hidden">
						<div className="relative h-full items-center justify-center">
							<div className="relative mx-auto md:mr-0 max-w-max mb-8 p-8">
								<img
									src={data.BannerImage.imageURL}
									alt={data.BannerImage.imageDescription}
									width={data.BannerImage.width}
									height={data.BannerImage.height}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
