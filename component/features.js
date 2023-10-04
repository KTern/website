/* eslint-disable react/prop-types */

export default function Features({ stream, data }) {
  return (
    <section className="pt-8 pb-16 sm:pt-10 sm:pb-20 md:pt-18md:pb-24 bg-bg">
      <div className="px-5 mx-auto max-w-7xl md:px-8 lg:px-16">
        <div className="relative w-full text-center">
          <div className="items-center justify-center pb-4">
            <span
              className={`p-1 mt-4 text-xs uppercase rounded tag-${stream} text-white font-semibold`}
            >
              {data.Tag}
            </span>
          </div>
          <h2 className="text-4xl ibm-plex font-bold text-transparent font-heading bg-clip-text bg-gradient-to-br from-gray-500 via-gray-700 to-gray-400">
            {data.Heading}
          </h2>
          <p className="mt-3 text-base leading-6 text-gray-600 sm:text-lg md:text-xl">
            {data.SubHeading}
          </p>
        </div>
        <div className="grid mt-16 gap-y-10 sm:grid-cols-2 sm:gap-x-8 md:gap-x-12 lg:grid-cols-3 lg:gap-20">
          {data.ImageFeatureCard.map((dt, index) => (
            <div key="dt">
              <div
                className={`inline-flex text-white items-center justify-center mb-4 w-12 h-12 text-xl tag-${stream} font-semibold rounded-full`}
              >
                {index + 1}
              </div>
              <h3 className="mt-6 text-2xl font-black ibm-plex leading-6 text-gray-700">
                {dt.Title}
              </h3>
              <p className="mt-4 font-medium text-gray-800">{dt.Description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
