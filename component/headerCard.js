/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
/* eslint-disable react/prop-types */

import Link from 'next/link';

export default function HeaderCard({ data }) {
  // console.log(data)
  return (
    <div id="tag" className="flex space-x-3">
      <Link id="tag" href={data.redirectURL} passHref>

        <Image
          priority
          id="tag"
          src={data.Icon.logoUrl}
          width={data.Icon.width}
          height={data.Icon.width}
          alt={data.Icon.altText}
        />

      </Link>
      <Link id="tag" href={data.redirectURL}>

        <p id="tag" className="navbar-h">
          {data.StreamTitle}
        </p>
        {/* <p id="tag" className="navbar-s text-gray-400">{data.StreamDescription}</p> */}

      </Link>
    </div>
  );
}
