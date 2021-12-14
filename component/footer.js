import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Footer({ f_data }) {
  return (
    <>
      <section className="px-4 py-5 md:py-10 md:px-10 bg-black ">
        <div className=" divide-y md:px-10 mx-auto ">
          <div className="flex   lg:mb-2 lg:mb-0 ">
            <div className="w-full  lg:w-1/3 lg:mb-2 md:mb-0">
              <Link className="  text-white   " href="#" passHref>
                <Image
                  src={f_data.WhiteLogoUrl}
                  alt=""
                  width={150}
                  height={80}
                />
              </Link>
            </div>
            <div className="hidden md:block w-full md:w-2/3 pt-0 ">
              <div className="md:flex  justify-end pt-4 sm:pt-10  xl:pt-4">
                <div className="w-full lg:w-1/2">
                  <div className="flex lg:justify-end mb-6 lg:mb-10">
                    {f_data.SocialMediaLinks.map((dt) => (
                      <Link key="dt" href={dt.Url}>
                        <a
                          title={dt.Title}
                          target="_blank"
                          className="flex justify-center items-center w-10 h-10 mr-4 bg-white rounded-full"
                        >
                          <Image
                            src={dt.ImageUrl}
                            width="20"
                            height="30"
                            alt=""
                          />
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className=" flex lg:justify-end items-center ">
                {/* <div className="relative pt-2">
                            <select className=" appearance-none w-auto h-auto p-3 px-20   bg-white border-2 border-white rounded outline-none" name="field-name">
                                        <option>English</option>
                                        <option>German</option>
                                        <option>French</option>
                                        <option>Spanish</option>
                                    </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 mt-2 text-gray-700">
                                <svg className="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                                </svg>
                            </div>
                        </div> */}
              </div>
            </div>
          </div>
          <div className=" flex flex-wrap -mx-4 border-t pt-10 border-b border-gray-500 ">
            <div className="w-full grid grid-cols-2 sm:grid-cols-1 sm:px-8 gap-y-4 gap-6">
              <div className="  text-white">
                <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mb-10 gap-5 ">
                  {f_data.FooterStreamsSection.map((dt) => (
                    <Link key="dt" href={dt.PageURL}>
                      <a className="px-2 space-y-2 ">
                        <div className="text-gray-400 hyperlink uppercase">
                          {dt.DXStatement}
                        </div>
                        <div className="card-subheading ">
                          {dt.OneLineStatement}
                        </div>
                        <div>
                          <Image
                            src={dt.DigitalStreamsLogo.imageURL}
                            alt={dt.DigitalStreamsLogo.imageDescription}
                            width={dt.DigitalStreamsLogo.width}
                            height={dt.DigitalStreamsLogo.height}
                          />
                        </div>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 ">
                {f_data.FooterColumn.map((dt) => (
                  <div key="dt" className="md:w-1/2 lg:w-full  mb-12">
                    {dt.Title != "" && (
                      <h3 className="mb-8 lg:mb-2  text-white  text-md font-semibold">
                        {dt.Title}
                      </h3>
                    )}
                    <ul className="">
                      {dt.NavItems.map((dt) => (
                        <li key="dt" className="mb-2 w-full ">
                          {dt.openNewTab && (
                            <Link href={dt.linkURL}>
                              <a
                                target="_blank"
                                className=" text-gray-200 hover:text-gray-100 w-full"
                                style={{ fontWeight: 300, fontSize: "15px" }}
                              >
                                {dt.buttonTitle}
                              </a>
                            </Link>
                          )}
                          {!dt.openNewTab && (
                            <Link href={dt.linkURL}>
                              <a
                                className=" text-gray-200 hover:text-gray-100 "
                                style={{ fontWeight: 300, fontSize: "15px" }}
                              >
                                {dt.buttonTitle}
                              </a>
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="flex mb-4">
                {f_data.ImageButton.map((dt) => (
                  <Link key="dt" href={dt.Url}>
                    <a target="_blank" className="" title={dt.Title}>
                      <div className=" ">
                        <Image
                          width={150}
                          src={dt.ImageUrl}
                          className="sm:w-20 mb-6 h-auto text-white "
                          alt="Available on SAP Store"
                          height="50%"
                        />
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-full  lg:mb-2 lg:mb-0 ">
            <div className="md:flex  items-center w-full items-center lg:w-1/2 lg:mb-2 md:mb-0">
              <pre
                className="py-0 hidden lg:block text-white leading-snug"
                style={{ fontWeight: 300, fontSize: "15px" }}
              >
                {f_data.CopyrightStatement}
              </pre>
            </div>

            <div className="md:flex  items-center w-full lg:w-1/2 justify-end">
              <p className="py-10   space-x-3 lg:block  text-gray-200 ">
                {f_data.LegalLinks.map((dt) => (
                  <span key="dt" className=" ">
                    {dt.openNewTab && (
                      <Link href={dt.linkURL}>
                        <a
                          target="_blank"
                          style={{ fontWeight: 300, fontSize: "13px" }}
                        >
                          {dt.buttonTitle}
                        </a>
                      </Link>
                    )}
                    {!dt.openNewTab && (
                      <Link href={dt.linkURL}>
                        <a style={{ fontWeight: 300, fontSize: "13px" }}>
                          {dt.buttonTitle}
                        </a>
                      </Link>
                    )}
                  </span>
                ))}
              </p>
            </div>
          </div>
          <p className="lg:hidden  text-white ">
            <pre className="py-0 hidden lg:block hyperlink text-white ">
              {f_data.CopyrightStatement}
            </pre>
          </p>
        </div>
      </section>
    </>
  );
}
