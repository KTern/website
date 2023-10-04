import Image from 'next/image';
/* eslint-disable react/prop-types */

export default function LogoBanner({ data, stream }) {
  return (
    <section className="py-10 pt-12 bg-zinc">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-12 mb-8">
            <div className="max-w-md sm:text-center">
              <div className="pb-4">
                <span
                  className={`p-1 text-xs uppercase rounded tag-${stream} text-white font-semibold`}
                >
                  {data.Tag}
                </span>
              </div>
              <h3 className="mb-4 text-3xl md:text-5xl leading-tight font-bold ibm-plex">
                {data.Title}
              </h3>
              <p className="text-lg md:text-xl text-coolGray-500 font-medium">
                {data.Description}
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 sm:px-8">
            <div className="flex flex-wrap items-center justify-center -mx-4">
              {data.Logos.map((dt) => (
                <div key="dt" className="w-full md:w-1/2 px-4 mb-8">
                  <div className="flex items-center h-32 md:h-36 px-4 md:px-8 rounded-md bg-coolGray-50 shadow-md  hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                    <Image
                      priority
                      className="w-auto lg:w-100"
                      src={dt.imageURL}
                      alt={dt.imageDescription}
                      width={dt.width}
                      height={dt.height}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
