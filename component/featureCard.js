/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import Image from 'next/image';

import Link from 'next/link';

export default function FeatureCard({
  data,
  border,
  color,
  type,
  space,
  bold,
}) {
  return (
    <div className="flex-col " id="tag">
      <div id="tag" className={` gap-y-${space} grid grid-${type}-2  gap-x-8`}>
        {data.map((dt) => (
          <div id="tag" key="dt">
            {dt.OpenInNewTab && (
              <Link id="tag" href={dt.redirectURL} passHref>
                <a
                  id="tag"
                  target="_blank"
                  className={`flex space-x-3 rounded-md ${border} hover:${color} p-2 w-full`}
                >
                  <div id="tag" className="flex space-x-4">
                    {dt.Icon !== undefined && (
                      <Link id="tag" href={dt.redirectURL} passHref>
                        <a target="_blank" id="tag">
                          <Image
                            priority
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
                        <p id="tag" className={`${bold}`}>
                          {dt.Title}
                        </p>
                        {/* <p id="tag" className="navbar-s text-gray-400">
                  {dt.Description}
                </p> */}
                      </a>
                    </Link>
                  </div>
                </a>
              </Link>
            )}
            {!dt.OpenInNewTab && (
              <Link id="tag" href={dt.redirectURL} passHref>
                <a
                  id="tag"
                  className={`flex space-x-3 rounded-md ${border} hover:${color} p-2 w-full`}
                >
                  <div id="tag" className="flex space-x-4">
                    {dt.Icon !== undefined && (
                      <Link id="tag" href={dt.redirectURL} passHref>
                        <a id="tag">
                          <Image
                            priority
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
                        <p id="tag" className={`${bold}`}>
                          {dt.Title}
                        </p>
                        {/* <p id="tag" className="navbar-s text-gray-400">
                  {dt.Description}
                </p> */}
                      </a>
                    </Link>
                  </div>
                </a>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
