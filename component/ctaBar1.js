/* eslint-disable react/prop-types */
export default function CTABar1({ stream, data }) {
  return (
    <section className="bg-bg">
      <div className="px-8 py-8 mx-auto sm:py-10 lg:py-20 max-w-7xl">
        <div className="overflow-hidden bg-gray-900 border-2 border-white-600 rounded-r-3xl hyperlink rounded-b-3xl md:py-6 lg:py-12 md:px-6 lg:p-16 lg:flex lg:items-center lg:justify-between hover:shadow-2xl">
          <div className="p-6 rounded-lg md:p-0 md:pb-4 bg-purple-1000">
            <h2
              className={`ibm-plex text-3xl font-extrabold leading-9 tracking-tight text-${stream} sm:text-4xl sm:leading-10 `}
            >
              {data.CTATitle}
            </h2>
            <p
              className={'w-full mt-5 text-base leading-6 text-white md:w-3/4 '}
            >
              {data.CTADescription}
            </p>
          </div>
          <div className="flex w-full md:w-auto lg:flex-shrink-0">
            <a
              href={data.PrimaryCTA.linkURL}
              target="_blank"
              rel="noreferrer"
              className={`mr-4 block w-full px-5 py-3 text-base font-medium leading-6 text-center text-white transition duration-150 ease-in-out tag-${stream} md:inline-flexmd:shadow md:w-auto hover:bg-gray-400 focus:outline-none focus:shadow-outline rounded-r-xl hyperlink rounded-b-xl`}
            >
              {data.PrimaryCTA.buttonTitle}
            </a>
            <a
              href={data.SecondaryCTA.linkURL}
              target="_blank"
              rel="noreferrer"
              className="block w-full px-5 py-3 text-base font-medium leading-6 text-center text-white transition duration-150 ease-in-out bg-gray-600 md:inline-flex md:shadow md:w-auto hover:bg-gray-400 focus:outline-none focus:shadow-outline rounded-r-xl hyperlink rounded-b-xl"
            >
              {data.SecondaryCTA.buttonTitle}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
