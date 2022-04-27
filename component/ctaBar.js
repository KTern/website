import Email from './pattern';
import React, { useEffect, useState } from 'react';

export default function CtaBar({ stream, data }) {
  const formData = data.Form;
  return (
    <section className={`bg-${stream} py-16 px-28 sm:py-4 sm:px-4`}>
      <div className="container sm:px-0 sm:mx-0">
        <div className={`p-12 rounded overflow-hidden card-${stream} `}>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 sm:text-center">
              <h3 className="mb-4 text-4xl heading ">
                <span className="text-white font-bold  mr-2 ibm-plex">
                  {data.SectionHeading}
                </span>
              </h3>
              {/* {data.CTAButton.map((dt) => (
                <span key="dt">
                {dt.openNewTab ? (
                <span className="mr-2">
                  <a
                  className= {"sm:m-2 mr-2 inline-block 
                  p-4 w-full md:w-auto text-base 
                  leading-4 text-white bg-gray-600 hover:bg-gray-400
                   font-large text-center focus:ring-2 focus:ring-orange-500 
                   focus:ring-opacity-50 rounded-r-xl 
                   rounded-b-xl transition duration-200 shadow`}	
                  href={dt.linkURL}
													target="_blank"
													rel="noreferrer"
												>
													{' '}
													{dt.buttonTitle}
												</a>
											</span>
										) : (
											<span className="mr-2">
												<a
													className={` sm:m-2 mr-2 inline-block 
                          p-4 w-full md:w-auto text-base leading-4 
                          text-white bg-gray-600 hover:bg-gray-400
                           font-large text-center focus:ring-2 
                           focus:ring-orange-500 focus:ring-opacity-50
                            rounded-r-xl rounded-b-xl transition duration-200 shadow`}
													href={dt.linkURL}
												>
													{' '}
													{dt.buttonTitle}
												</a>
											</span>
										)}
									</span>
								))} */}
              <div className="relative flex items-center max-w-md leading-6 text-center lg:mx-0 py-2">
                <form
                  method="POST"
                  id="zcampaignOptinForm"
                  action="https://maillist-manage.in/weboptin.zc"
                  target="_zcSignup"
                  className="w-full"
                >
                  <Email
                    name={'CONTACT_EMAIL'}
                    class_name={
                      'w-full py-4 pr-0 m-0 overflow-visible font-medium duration-300 border-2 border-gray-200 rounded-r-xl rounded-b-xl  outline-none sm:py-5 sm:pr-8 cursor-text pl-7 focus:outline-none focus-within:border-black-700 hover:border-gray-400'
                    }
                  ></Email>
                  <button
                    className={`my-2 sm:relative absolute right-0 h-12 px-8 mr-3 text-white tag-${stream} rounded-r-xl rounded-b-xl `}
                    name="SIGNUP_SUBMIT_BUTTON"
                    id="zcWebOptin"
                    value="SIGN UP"
                    type="submit"
                  >
                    {formData.ButtonPlaceholder}
                  </button>
                  <input type="hidden" id="fieldBorder" value="" />
                  <input
                    type="hidden"
                    id="submitType"
                    name="submitType"
                    value="optinCustomView"
                  />
                  <input
                    type="hidden"
                    id="emailReportId"
                    name="emailReportId"
                    value=""
                  />
                  <input
                    type="hidden"
                    id="formType"
                    name="formType"
                    value="QuickForm"
                  />
                  <input
                    type="hidden"
                    name="zx"
                    id="cmpZuid"
                    value="1df8f43af3"
                  />
                  <input type="hidden" name="zcvers" value="2.0" />
                  <input
                    type="hidden"
                    name="oldListIds"
                    id="allCheckedListIds"
                    value=""
                  />
                  <input
                    type="hidden"
                    id="mode"
                    name="mode"
                    value="OptinCreateView"
                  />
                  <input
                    type="hidden"
                    id="zcld"
                    name="zcld"
                    value="1fedd54b7401843"
                  />
                  <input
                    type="hidden"
                    id="zctd"
                    name="zctd"
                    value="1fedd54b6e5caf9"
                  />
                  <input type="hidden" id="document_domain" value="" />
                  <input
                    type="hidden"
                    id="zc_Url"
                    value="kter.maillist-manage.in"
                  />
                  <input type="hidden" id="new_optin_response_in" value="0" />
                  <input
                    type="hidden"
                    id="duplicate_optin_response_in"
                    value="0"
                  />
                  <input
                    type="hidden"
                    name="zc_trackCode"
                    id="zc_trackCode"
                    value="ZCFORMVIEW"
                  />
                  <input
                    type="hidden"
                    id="zc_formIx"
                    name="zc_formIx"
                    value="3z13da2e47015176d36361403bc42cbd81b821e4ba984741f553eed14728964985"
                  />
                  <input type="hidden" id="viewFrom" value="URL_ACTION" />
                  <input
                    type="hidden"
                    id="scriptless"
                    name="scriptless"
                    value="yes"
                  />
                </form>
              </div>
            </div>
            <div className="relative w-full md:w-1/2 px-4 hidden md:block">
              <img
                className="md:absolute top-0 right-0 md:-mt-12 h-72 object-cover"
                src="https://shuffle.dev/artemis-assets/images/saly-group.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
