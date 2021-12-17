import Image from "next/image";
import Link from "next/link";
export default function FeatureCard({ data, border, color, type,space }) {
  return (
    <div className="flex-col " id="tag">
      <div id="tag" className={` gap-y-${space} grid grid-${type}-2  gap-x-8`}>
        {data.map((dt) => (
          <div id="tag" key="dt">
          {dt.OpenInNewTab &&
            <Link
           
            id="tag"
            href={dt.redirectURL} passHref
          >
            <a id="tag" target="_blank" className={`flex space-x-3 rounded-md ${border} hover:${color} p-2 w-full`}>
              <div id="tag">
            {dt.Icon != undefined && (
              <Link id="tag" href={dt.redirectURL} passHref>
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
            <a id="tag" className={`flex space-x-3 rounded-md ${border} hover:${color} p-2 w-full`}>
              <div id="tag">
            {dt.Icon != undefined && (
              <Link id="tag" href={dt.redirectURL} passHref>
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
