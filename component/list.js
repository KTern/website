/* eslint-disable react/prop-types */
export default function List({ stream, data }) {
  const list = data.OfferingsList;
  const images = data.ImagesList;
  return (
    <section className="pt-16 pb-20 sm:pt-24 sm:pb-32">
      <div className="items-center max-w-6xl px-12 mx-auto sm:px-20 md:px-5">
        <div className="flex flex-wrap items-center -mx-3">
          <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
            <div className="w-full max-w-md xl:max-w-xl">
              <div className="items-center justify-center pb-4">
                <span
                  className={`p-1 mt-4 text-xs uppercase rounded tag-${stream} text-white font-semibold`}
                >
                  {data.Tag}
                </span>
              </div>
              <h2 className="text-4xl ibm-plex font-bold text-transparent font-heading bg-clip-text bg-gradient-to-br from-gray-500 via-gray-700 to-gray-400 mb-8">
                {data.Title}
              </h2>
              <ul>
                {list.map((dt) => (
                  <li
                    key="dt"
                    className="flex items-center py-2 space-x-4 xl:py-3"
                  >
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-300 rounded-full">
                      <span className="text-sm font-normal">✓</span>
                    </span>
                    <span className="font-medium font-bold text-gray-700">
                      {dt.ListItem}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative w-full px-3 mb-12 lg:-ml-20 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
            <img
              className="absolute top-0 right-0 z-10 hidden mx-auto -mt-32 rounded-lg shadow-2xl opacity-100 xl:-mr-12 sm:max-w-xs lg:max-w-sm lg:block"
              src={images[0].ListItem}
              alt=""
            />
            <img
              className="relative z-20 w-full mx-auto mt-3 rounded-lg shadow-2xl sm:max-w-none lg:-ml-10 lg:max-w-sm"
              src={images[1].ListItem}
              alt=""
            />
            <img
              className="absolute bottom-0 right-0 z-10 hidden mx-auto -mb-48 rounded-lg shadow-2xl xl:-mr-12 sm:max-w-xs lg:max-w-sm lg:block"
              src={images[2].ListItem}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
