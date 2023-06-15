import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from './breadcrumb-new';
import Email from './pattern';
import Event, { resolve_stream_score } from '../component/page_event';
/* eslint-disable react/prop-types */

export default function Hero({
  data,
  pageSEODet,
  stream,
  breadcrumb,
  background,
  feature,
  index,
}) {
  function onClick(data) {
    Event(data);
  }
  const form = data.ProductsBannerForm;
  return (
    <section className={'relative  overflow-hidden'}>
      <div className={` flex flex-wrap pb-4  ${background}-${stream}`}>
        <div className="w-full lg:w-1/2 pt-12 pb-6 flex justify-center">
          <div className="px-12 pl-24 sm:p-8 sm:py-0">
            <div className="ml-auto mb-8 lg:mb-8 m-4">
              <div className="mb-4">
                {' '}
                {index === true ? '' : <Breadcrumbs breadcrumb={breadcrumb} />}
              </div>
              {index === true ? (
                ''
              ) : (
                <div className="sm:text-center">
                  <span
                    className={`p-1 text-xs uppercase rounded tag-${stream} text-white font-semibold`}
                  >
                    {data.DigitalStreamTitle}
                  </span>
                </div>
              )}

              {index === true ? (
                <div>
                  <h1 className="heading mt-4 mb-4 text-2xl lg:text-5xl font-semibold ease-in sm:text-center  ibm-plex">
                    {data.BannerHeadline}
                  </h1>
                  <p className="text-lg text-gray-500 sm:text-center text-lg md:text-xl font-medium">
                    {data.BannerSubHeadline}
                  </p>
                </div>
              ) : (
                <div>
                  <h1 className="heading mt-4 mb-4 text-4xl lg:text-5xl font-semibold ease-in sm:text-center  ibm-plex">
                    {data.BannerHeadline}
                  </h1>
                  <p className="text-lg text-gray-500 sm:text-center text-lg md:text-xl font-medium">
                    {data.BannerSubHeadline}
                  </p>
                </div>
              )}
            </div>
            {index === true ? (
              <div className='sm:text-center'>
                <Link rel="noopener noreferrer" href={data.primaryCTA.linkURL}>
                  <a
                    target="_blank"
                    className="sm:mb-5 md:px-14 lg:px-14 sm:sm-button inline-block py-3 px-2 border-2 border-black   bg-black hover:bg-gray-300 hover:text-black shadow  text-white  rounded-r-xl rounded-b-xl transition duration-200 uppercase header button"
                    onClick={() => {
                      onClick({
                        stream_score: resolve_stream_score('none'),
                        event_name: 'Button Click',
                        section_name: 'Hero',
                        page_source: `${pageSEODet.PageTitle}`,
                        label: `${data.primaryCTA.buttonTitle}`,
                      });
                    }}
                  >
                    {data.primaryCTA.buttonTitle}
                  </a>
                </Link>
                <Link href={data.secondaryCTA.linkURL}>
                  <a
                    onClick={() => {
                      onClick({
                        stream_score: resolve_stream_score('none'),
                        event_name: 'Button Click',
                        section_name: 'Hero',
                        page_source: `${pageSEODet.PageTitle}`,
                        label: `${data.secondaryCTA.buttonTitle}`,
                      });
                    }}
                    className="mb-4 inline-block mx-5   shadow-md bg-white-500 py-3 px-2 md:px-14 lg:px-14 hover:bg-gray-300  sm:sm-button text-black   rounded-r-xl rounded-b-xl transition duration-200 uppercase header button border-2 border-black"
                  >
                    {data.secondaryCTA.buttonTitle}
                  </a>
                </Link>
              </div>
            ) : (
              <div>
                <form
                  className="relative flex flex-wrap sm:items-center sm:justify-center"
                  method="POST"
                  id="zcampaignOptinForm"
                  action="https://maillist-manage.in/weboptin.zc"
                  target="_zcSignup"
                >
                  <Email
                    name={'Email'}
                    class_name={
                      'relative mb-2 md:mb-0 w-full md:w-2/3 py-4 pl-4 text-sm border rounded'
                    }
                  ></Email>
                  <button
                    className={`ml-4 sm:ml-0 sm:uppercase sm:w-3/4 sm:mt-1 inline-block p-4 w-full md:w-auto text-base leading-4 text-white tag-${stream} hover:bg-gray-600 font-medium text-center focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 rounded-r-xl rounded-b-xl transition duration-200 shadow`}
                    name="SIGNUP_SUBMIT_BUTTON"
                    id="zcWebOptin"
                    value="SIGN UP"
                    type="submit"
                  >
                    {form.ButtonPlaceholder}
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
            )}
            {index === true ? (
              <div>
                {feature ? (
                  <div>
                    {/* <div className="flex flex-wrap items-center justify-center -mx-2 mb-6 mt-5">
                      {data.ReviewImages.map((dt) => (
                        <div key="dt" className="w-1/4 md:w-1/4 lg:w-1/4">
                          <div style={{ maxHeight: '50px' }}>
                          <Image
                            priority
                            className={'mx-auto lg:mx-0 h-5'}
                            layout="responsive"
                            src={dt.imageURL}
                            alt={dt.imageDescription}
                            width={dt.width}
                            height={dt.height}
                          />
                          </div>
                        </div>
                      ))}
                    </div> */}
                    <div className="flex flex-wrap items-center justify-center -mx-2 mb-6 mt-5">
                      {data.ReviewImages.map((dt) => (
                        <div key={dt} className="w-1/4 md:w-1/4 lg:w-1/4">
                          <div style={{ maxHeight: '100px' }}>
                            <img
                              src={dt.imageURL}
                              alt={dt.imageDescription}
                              style={{
                                maxHeight: '60px',
                                maxWidth: '100%',
                                width: 'auto',
                                height: 'auto',
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="rating pt-5 sm:hidden">
                      <div className="rating-star" />
                      <div className="rating-star" />
                      <div className="rating-star" />
                      <div className="rating-star" />
                      <div className="rating-star" />
                      <span className="pl-3 text-gray-600">
                        {data.ReviewStatement}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center justify-center -mx-2 mb-6 mt-5 sm:hidden">
                      {data.ReviewImages.map((dt) => (
                        <div key="dt" className="w-1/4 md:w-1/4 lg:w-1/4">
                          <Image
                            priority
                            className={'mx-auto lg:mx-0 h-5'}
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
                )}
              </div>
            ) : (
              <div>
                {feature ? (
                  ''
                ) : (
                  <div>
                    <div className="rating pt-5 sm:hidden">
                      <div className="rating-star" />
                      <div className="rating-star" />
                      <div className="rating-star" />
                      <div className="rating-star" />
                      <div className="rating-star" />
                      <span className="pl-3 text-gray-600">
                        {data.ReviewStatement}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center justify-center -mx-2 mb-6 mt-5 sm:hidden">
                      {data.ReviewImages.map((dt) => (
                        <div key="dt" className="w-1/4 md:w-1/4 lg:w-1/4">
                          <Image
                            priority
                            className={'mx-auto lg:mx-0 h-5'}
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
                )}
              </div>
            )}
          </div>
        </div>
        {index === true ? (
          <div
            className="w-full lg:w-1/2 pr-12 pt-24 sm:hidden"
            style={{
              backgroundColor: '#FFFFFF',
            }}
          >
            <div className="relative h-full items-center justify-center">
              <div className={'relative mx-auto md:mr-0 max-w-max mb-8  p-8 '}>
                <img
                  src={data.BannerImage.imageURL}
                  alt={data.BannerImage.imageDescription}
                  width={data.BannerImage.width}
                  height={data.BannerImage.height}
                  className="relative z-10 p-0 mt-10 transform rounded-xl lg:scale-110"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full lg:w-1/2 pr-12 pt-24 sm:hidden">
            <div className="relative h-full items-center justify-center">
              <div className={'relative mx-auto md:mr-0 max-w-max mb-8  p-8 '}>
                <img
                  src={data.BannerImage.imageURL}
                  alt={data.BannerImage.imageDescription}
                  width={data.BannerImage.width}
                  height={data.BannerImage.height}
                  className="relative z-10 p-0 mt-10 transform rounded-xl lg:scale-110"
                />
                {feature ? (
                  <div className="absolute top-0 right-0 w-full h-full mt-4 -mr-5 transform scale-125 rotate-135">
                    <svg
                      className="absolute top-0 w-full h-full transform fill-current lg:scale-x-150 text-purple-50"
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M43.5,-76.5C55.9,-68.2,65.2,-55.6,71.9,-42.1C78.5,-28.6,82.7,-14.3,81.3,-0.8C79.8,12.7,72.8,25.3,64.7,36.3C56.5,47.2,47.2,56.3,36.2,63.3C25.2,70.2,12.6,75,-1.1,76.9C-14.8,78.9,-29.7,78,-43.7,72.8C-57.7,67.6,-70.9,58.1,-79.3,45.2C-87.7,32.4,-91.2,16.2,-90.7,0.3C-90.3,-15.7,-85.9,-31.4,-76.4,-42.3C-66.9,-53.1,-52.3,-59.2,-38.7,-66.9C-25.1,-74.5,-12.6,-83.7,1.5,-86.3C15.6,-88.8,31.1,-84.8,43.5,-76.5Z"
                        transform="translate(100 100)"
                      />
                    </svg>
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
