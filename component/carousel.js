import Carousel from 'react-multi-carousel'; /* eslint-disable react/prop-types */

import React from 'react';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export default function MultiCarousel({ data, stream }) {
  return (
    <div className={'md:px-20 py-10 sm:hidden bg-zinc'}>
      <div className="px-20 text-center">
        <span
          className={`p-1 text-xs rounded tag-${stream} text-white font-semibold inline-block py-px px-2 mb-4 text-xs leading-5 uppercase rounded-full shadow-sm`}
        >
          {data.Tag}
        </span>
        <h3 className="mb-4 text-3xl md:text-5xl leading-tight font-bold ibm-plex">
          {data.Title}
        </h3>
      </div>
      <Carousel className="flex p-12 mb-0" responsive={responsive}>
        {data.BotCards.map((dt) => (
          <div
            key="dt"
            className="w-full md:w-1/2 lg:w-1/1"
            style={{ width: '340px', height: '250px' }}
          >
            <div className="group h-full">
              <div className="group border border-black relative h-full px-8 pt-16 pb-8 bg-coolGray-50 group-hover:bg-white rounded-md shadow-md hover:shadow-xl transition duration-200">
                <div className="absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 inline-flex h-16 w-16 items-center justify-center bg-white rounded-full transition duration-200">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 text-white tag-${stream} rounded-full`}
                  >
                    <img
                      src="/bot.png"
                      alt="KTern Bot"
                      width={60}
                      height={60}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3
                    className={
                      'mb-4 text-xl leading-7 text-coolGray-900 font-bold max-w-xs ibm-plex'
                    }
                  >
                    {dt.Title}
                  </h3>
                </div>
                <p className="text-coolGray-500 group-hover:text-coolGray-600 font-medium transition duration-200">
                  {dt.Description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
