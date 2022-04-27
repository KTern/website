/* eslint-disable react/prop-types */

export default function ImageCard({ stream, data }) {
  return (
    <section className="box-border relative w-full font-sans leading-6 text-gray-700 bg-white border-0 border-gray-200 border-solid">
      <div className="box-border flex flex-col items-center p-6 mx-auto leading-6 border-solid max-w-7xl xl:px-16 md:items-stretch md:justify-center md:py-10">
        <div className="relative pb-10 text-center">
          <div className="sm:text-center pb-4">
            <span
              className={`p-1 mt-4 text-xs uppercase rounded tag-${stream} text-white font-semibold`}
            >
              {data.Tag}
            </span>
          </div>
          <h2 className="text-4xl ibm-plex font-bold text-transparent font-heading bg-clip-text bg-gradient-to-br from-gray-500 via-gray-700 to-gray-400">
            {data.Heading}
          </h2>
          <p className="w-full max-w-xl mx-0 mx-auto mt-4 mb-0 font-sans text-sm font-medium leading-relaxed text-center text-gray-400 border-0 border-gray-200 lg:text-lg md:text-base">
            {data.SubHeading}
          </p>
        </div>
        <div className="flex flex-wrap -mx-4 text-center md:text-left items-center justify-center">
          {data.ImageFeatureCard.map((dt) => (
            <div
              key="dt"
              className="m-4 md:h-72 w-1/3 sm:w-full hover:bg-white rounded-md hover:shadow-xl transition duration-200 sm:flow-root sm:items-center sm:justify-center text-gray-700 bg-bg rounded-r-3xl hyperlink rounded-b-3xl hover:bg-white border border-transparent hover:border-gray-900 hover:border-4"
            >
              <a
                href={dt.LandingPageURL}
                target={dt.OpenNewTab ? '_blank' : '_self'}
                rel="noreferrer"
              >
                <div className="box-border flex flex-wrap items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left cursor-pointer">
                  <div className="flex-shrink-0 p-3 font-sans text-gray-700 border border-gray-200 rounded-r-xl hyperlink rounded-b-xl h-16">
                    <img src={dt.ImageURL} alt="" width={92} height={45} />
                  </div>
                  <div className="mt-4 font-sans text-left text-gray-700 border-0 border-gray-200 sm:mt-2 sm:ml-4">
                    <h6 className="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid">
                      {dt.Title}
                    </h6>
                    <p className="mt-4 text-md font-medium text-gray-800 ">
                      {dt.Description}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
