import Link from 'next/link';
/* eslint-disable react/prop-types */

export default function ListCard({ cardData }) {
  let cols = 0;

  if (cardData.length <= 3) {
    cols = cardData.length;
  } else {
    // eslint-disable-next-line no-unused-vars
    cols = cardData.length / 2 + 4;
  }
  return (
    <div className={' flex space-x-2 pb-20 '}>
      {cardData.map((data) => (
        <div key="index" className="  hover:bg-bg hover:scale-x-110 transform">
          <h2 className="sticky top-0 bg-white h-14 font-bold mb-2 p-2 border-b">
            {data.heading}
          </h2>
          <div className="flex flex-col ">
            {data.list.map((dt, index) => (
              // eslint-disable-next-line react/no-array-index-key
              (<Link
                key={index}
                href={dt.url}
                target={dt.openNewTab ? '_blank' : '_self'}
                className="p-1 pl-4 pr-6   text-black  hover:text-sky-400  justify-center">

                {dt.value}

              </Link>)
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
