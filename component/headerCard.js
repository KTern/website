import Image from "next/image";
import Link from "next/link"
export default function HeaderCard({data}) {
  // console.log(data)
  return (
    <div id="tag" className="flex space-x-3">
      <Link id="tag" href={data.redirectURL} passHref>
      <a id="tag">
        <Image id="tag" src={data.Icon.logoUrl} width={data.Icon.width} height={data.Icon.width} alt={data.Icon.altText} />
        </a>
      </Link>
      <Link id="tag" href={data.redirectURL}>
      <a id="tag">
        <p id="tag" className="navbar-h">{data.StreamTitle}</p>
        <p id="tag" className="navbar-s text-gray-400">{data.StreamDescription}</p>
        </a>
      </Link>
    </div>
  );
}
