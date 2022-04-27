export default function ValuePoints({ data, stream, background }) {
  return (
    <>
      <section className={`bg-${background} py-12 bg-white overflow-hidden `}>
        <div className="container px-4 mx-auto">
          <div className="text-center">
            <span
              className={`p-1 text-xs rounded tag-${stream} text-white font-semibold inline-block py-px px-2 mb-4 text-xs leading-5 uppercase rounded-full shadow-sm`}
            >
              {data.Tag}
            </span>
            <h2 className="mb-4 text-3xl md:text-5xl leading-tight font-bold ibm-plex">
              {data.Title}
            </h2>
            <p className="m-6 mb-12 section-subheading md:text-1xl text-center text-black px-12 text-lg md:text-xl font-medium">
              {data.Description}
            </p>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0 sm:hidden">
              <div className="relative mx-auto md:ml-0 max-w-max">
                <img
                  className="absolute z-10 -right-8 -top-8 w-28 md:w-auto"
                  src={data.TopImageURL}
                  alt=""
                />
                <img
                  className="absolute z-10 -left-10 -bottom-8 w-28 md:w-auto"
                  src={data.BottomImageURL}
                  alt=""
                />
                <img src={data.BaseImageURL} alt="" />
              </div>
            </div>
            <div className="sm:w-full lg:w-1/2 px-4 sm:w-full">
              <div className="flex flex-wrap -mx-4 text-center md:text-left">
                {data.ValuePoints.map((dt, index) => (
                  <div
                    key="dt"
                    className="w-full md:w-1/2 p-8 mb-4 hover:bg-white rounded-md hover:shadow-xl transition duration-200 sm:flow-root sm:items-center sm:justify-center"
                  >
                    <div
                      className={`inline-flex text-white items-center justify-center mb-4 w-12 h-12 text-xl tag-${stream} font-semibold rounded-full`}
                    >
                      {index + 1}
                    </div>
                    <h3 className="mb-2 text-xl font-bold sm:px-4 ibm-plex">
                      {dt.Title}
                    </h3>
                    <p className="text-coolGray-500 group-hover:text-coolGray-600 font-medium transition duration-200 sm:px-8">
                      {dt.Description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
