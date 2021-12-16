import Image from "next/image";
import Link from "next/link";
export default function FeatureCard({ data, border, color, type }) {
  return (
    <div className="flex-col space-y-6 ">
      <div id="tag" className={` gap-y-4 grid grid-${type}-2  gap-x-8`}>
        {data.map((dt) => (
          <div id="tag" key="dt">
          {dt.OpenInNewTab &&
            <Link
           
            id="tag"
            href={dt.redirectURL} passHref
          >
            <a target="_blank" className={`flex space-x-3 rounded-md ${border} hover:${color} p-4 w-full`}>
              <div>
            {dt.Icon != undefined && (
              <Link href={dt.redirectURL} passHref>
                <a target="_blank" id="tag">
                  <Image
                    id="tag"
                    src={dt.Icon.logoUrl}
                    width={dt.Icon.width}
                    height={dt.Icon.width}
                    alt={dt.Icon.altText}
                  />
                </a>
              </Link>
            )}
            <Link id="tag" href={dt.redirectURL}>
              <a target="_blank" id="tag">
                <p id="tag">{dt.Title}</p>
                <p id="tag" className="text-gray-400">
                  {dt.Description}
                </p>
              </a>
            </Link>
            </div>
            </a>
          </Link>}
          {!dt.OpenInNewTab &&
            <Link
           
            id="tag"
            href={dt.redirectURL} passHref
          >
            <a className={`flex space-x-3 rounded-md ${border} hover:${color} p-4 w-full`}>
              <div>
            {dt.Icon != undefined && (
              <Link href={dt.redirectURL} passHref>
                <a id="tag">
                  <Image
                    id="tag"
                    src={dt.Icon.logoUrl}
                    width={dt.Icon.width}
                    height={dt.Icon.width}
                    alt={dt.Icon.altText}
                  />
                </a>
              </Link>
            )}
            <Link id="tag" href={dt.redirectURL}>
              <a id="tag">
                <p id="tag">{dt.Title}</p>
                <p id="tag" className="text-gray-400">
                  {dt.Description}
                </p>
              </a>
            </Link>
            </div>
            </a>
          </Link>}
          </div>
        ))}
      </div>
    </div>
  );
}
