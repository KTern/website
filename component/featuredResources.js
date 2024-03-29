/* eslint-disable react/prop-types */

export default function FeaturedResources({ data, stream }) {
  return (
    <div className="py-12 bg-white radius-for-skewed">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <span
            className={`p-1 text-xs rounded tag-${stream} text-white font-semibold inline-block py-px px-2 mb-4 text-xs leading-5 uppercase rounded-full shadow-sm`}
          >
            {data.Tag}
          </span>
          <h3 className="mb-4 text-3xl md:text-5xl leading-tight font-bold ibm-plex">
            {data.SectionTitle}
          </h3>
        </div>
        <div className="flex flex-wrap justify-center -mx-3">
          <div className="flex flex-wrap w-full lg:w-1/2">
            {/* Large Card */}
            <div className="w-full px-3 mb-5">
              <a
                href={data.Resource[0].CTAUrl}
                target={data.Resource[0].OpenNewTab ? '_blank' : '_self'}
                rel="noreferrer"
              >
                <div className="relative h-64 mx-auto rounded sm:h-48 hover:text-white">
                  <div
                    className={`absolute inset-0 banner-${stream} rounded `}
                  />
                  <div className="absolute inset-0 p-6 flex flex-col items-start sm:text-center sm:p-2">
                    <p className="text-xl lg:text-2xl pt-20 sm:p-4 text-black font-bold">
                      <span
                        className={`p-1 text-xs rounded tag-${stream} text-white font-semibold inline-block py-px px-2 mb-4 text-xs leading-5 uppercase rounded-full shadow-sm`}
                      >
                        {data.Resource[0].Tag}
                      </span>
                      <br />
                      <span>{data.Resource[0].ResourceTitle}</span>
                    </p>
                  </div>
                </div>
              </a>
            </div>
            {/* / Large Card */}
            {/* Small Card */}
            {/* Card 2 */}
            <div className="w-full lg:w-1/2 px-3 mb-5 sm:hidden">
              <a
                href={data.Resource[1].CTAUrl}
                target={data.Resource[1].OpenNewTab ? '_blank' : '_self'}
                rel="noreferrer"
              >
                <div className="relative mx-auto rounded h-64 sm:h-48">
                  <div className={`absolute inset-0 bg-${stream} rounded`} />
                  <div
                    className="absolute inset-0 p-6 flex flex-col items-start bg-resourcesBg sm:text-center sm:p-2"
                    style={{
                      backgroundImage: `url(https://storage.googleapis.com/ktern-public-files/website/patterns/circle-${stream}.svg)`,
                      backgroundPosition: 'bottom left',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <span
                      className={`p-2 text-xs rounded tag-${stream} text-white font-semibold inline-block py-px px-2 mb-4 text-xs leading-5 uppercase rounded-full shadow-sm`}
                    >
                      {data.Resource[1].Tag}
                    </span>
                    <p className="pt-4 text-xl lg:text-2xl text-black font-bold">
                      {data.Resource[1].ResourceTitle}
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-1/2 lg:w-1/2 px-3 mb-5 md:hidden lg:hidden xl:hidden 2xl:hidden">
              <a
                href={data.Resource[1].CTAUrl}
                target={data.Resource[1].OpenNewTab ? '_blank' : '_self'}
                rel="noreferrer"
              >
                <div className="relative mx-auto rounded h-64 sm:h-48">
                  <div className={`absolute inset-0 bg-${stream} rounded`} />
                  <div className="absolute inset-0 p-6 flex flex-col items-start bg-resourcesBg sm:px-8 sm:text-center sm:items-center sm:justify-center sm:p-2">
                    <span
                      className={`p-2 text-xs rounded tag-${stream} text-white font-semibold inline-block py-px px-2 mb-4 text-xs leading-5 uppercase rounded-full shadow-sm`}
                    >
                      {data.Resource[1].Tag}
                    </span>
                    <p className="pt-2 text-xl lg:text-2xl text-black font-bold">
                      {data.Resource[1].ResourceTitle}
                    </p>
                  </div>
                </div>
              </a>
            </div>
            {/* Card 2  */}
            <div className="w-full lg:w-1/2 px-3 mb-5 sm:hidden">
              <a
                href={data.Resource[2].CTAUrl}
                target={data.Resource[2].OpenNewTab ? '_blank' : '_self'}
                rel="noreferrer"
              >
                <div className="relative mx-auto rounded h-64 sm:h-48">
                  <div className={`absolute inset-0 bg-${stream} rounded`} />
                  <div
                    className="absolute inset-0 p-6 flex flex-col items-start bg-resorcesBg sm:text-center sm:p-2"
                    style={{
                      backgroundImage: `url(https://storage.googleapis.com/ktern-public-files/website/patterns/dots-${stream}.svg)`,
                      backgroundPosition: 'bottom right',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <span
                      className={`p-2 text-xs rounded tag-${stream} text-white font-semibold inline-block py-px px-2 mb-4 text-xs leading-5 uppercase rounded-full shadow-sm`}
                    >
                      {data.Resource[2].Tag}
                    </span>
                    <p className="pt-4 text-xl lg:text-2xl text-black font-bold">
                      {data.Resource[2].ResourceTitle}
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-1/2 lg:w-1/2 px-3 mb-5 md:hidden lg:hidden xl:hidden 2xl:hidden">
              <a
                href={data.Resource[2].CTAUrl}
                target={data.Resource[2].OpenNewTab ? '_blank' : '_self'}
                rel="noreferrer"
              >
                <div className="relative mx-auto rounded h-64 sm:h-48">
                  <div className={`absolute inset-0 bg-${stream} rounded`} />
                  <div className="absolute inset-0 p-6 flex flex-col items-start bg-resorcesBg sm:text-center sm:p-2  items-center justify-center">
                    <span
                      className={`p-2 text-xs rounded tag-${stream} text-white font-semibold inline-block py-px px-2 mb-4 text-xs leading-5 uppercase rounded-full shadow-sm`}
                    >
                      {data.Resource[2].Tag}
                    </span>
                    <p className="pt-4 text-xl lg:text-2xl text-black font-bold">
                      {data.Resource[2].ResourceTitle}
                    </p>
                  </div>
                </div>
              </a>
            </div>
            {/* Small Card */}
          </div>
          <div className="flex flex-wrap w-full lg:w-1/2">
            {/* Small Card */}
            {/* Card 2 */}
            <div className="w-full lg:w-1/2 px-3 mb-5 sm:hidden">
              <a
                href={data.Resource[3].CTAUrl}
                target={data.Resource[3].OpenNewTab ? '_blank' : '_self'}
                rel="noreferrer"
              >
                <div className="relative mx-auto rounded h-64 sm:h-48">
                  <div className={`absolute inset-0 bg-${stream} rounded`} />
                  <div
                    className="absolute inset-0 p-6 flex flex-col items-start bg-resourcesBg sm:text-center sm:p-2"
                    style={{
                      backgroundImage: `url(https://storage.googleapis.com/ktern-public-files/website/patterns/circle-${stream}.svg)`,
                      backgroundPosition: 'bottom left',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <span
                      className={`p-2 text-xs rounded tag-${stream} text-white font-semibold inline-block py-px px-2 mb-4 text-xs leading-5 uppercase rounded-full shadow-sm`}
                    >
                      {data.Resource[3].Tag}
                    </span>
                    <p className="pt-4 text-xl lg:text-2xl text-black font-bold">
                      {data.Resource[3].ResourceTitle}
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-1/2 lg:w-1/2 px-3 mb-5 md:hidden lg:hidden xl:hidden 2xl:hidden">
              <a
                href={data.Resource[3].CTAUrl}
                target={data.Resource[3].OpenNewTab ? '_blank' : '_self'}
                rel="noreferrer"
              >
                <div className="relative mx-auto rounded h-64 sm:h-48">
                  <div className={`absolute inset-0 bg-${stream} rounded`} />
                  <div className="absolute inset-0 p-6 flex flex-col items-start bg-resourcesBg sm:px-8 sm:text-center sm:items-center sm:justify-center sm:p-2">
                    <span
                      className={`p-2 text-xs rounded tag-${stream} text-white font-semibold inline-block py-px px-2 mb-4 text-xs leading-5 uppercase rounded-full shadow-sm`}
                    >
                      {data.Resource[3].Tag}
                    </span>
                    <p className="pt-2 text-xl lg:text-2xl text-black font-bold">
                      {data.Resource[3].ResourceTitle}
                    </p>
                  </div>
                </div>
              </a>
            </div>
            {/* Card 2  */}
            <div className="w-full lg:w-1/2 px-3 mb-5 sm:hidden">
              <a
                href={data.Resource[4].CTAUrl}
                target={data.Resource[4].OpenNewTab ? '_blank' : '_self'}
                rel="noreferrer"
              >
                <div className="relative mx-auto rounded h-64 sm:h-48">
                  <div className={`absolute inset-0 bg-${stream} rounded`} />
                  <div
                    className="absolute inset-0 p-6 flex flex-col items-start bg-resorcesBg sm:text-center sm:p-2"
                    style={{
                      backgroundImage: `url(https://storage.googleapis.com/ktern-public-files/website/patterns/dots-${stream}.svg)`,
                      backgroundPosition: 'bottom right',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <span
                      className={`p-2 text-xs rounded tag-${stream} text-white font-semibold inline-block py-px px-2 mb-4 text-xs leading-5 uppercase rounded-full shadow-sm`}
                    >
                      {data.Resource[4].Tag}
                    </span>
                    <p className="pt-4 text-xl lg:text-2xl text-black font-bold">
                      {data.Resource[4].ResourceTitle}
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-1/2 lg:w-1/2 px-3 mb-5 md:hidden lg:hidden xl:hidden 2xl:hidden">
              <a
                href={data.Resource[4].CTAUrl}
                target={data.Resource[4].OpenNewTab ? '_blank' : '_self'}
                rel="noreferrer"
              >
                <div className="relative mx-auto rounded h-64 sm:h-48">
                  <div className={`absolute inset-0 bg-${stream} rounded`} />
                  <div className="absolute inset-0 p-6 flex flex-col items-start bg-resorcesBg sm:text-center sm:p-2  items-center justify-center">
                    <span
                      className={`p-2 text-xs rounded tag-${stream} text-white font-semibold inline-block py-px px-2 mb-4 text-xs leading-5 uppercase rounded-full shadow-sm`}
                    >
                      {data.Resource[4].Tag}
                    </span>
                    <p className="pt-4 text-xl lg:text-2xl text-black font-bold">
                      {data.Resource[4].ResourceTitle}
                    </p>
                  </div>
                </div>
              </a>
            </div>
            {/* Small Card */}
            {/* Large Card */}
            <div className="w-full px-3 mb-5">
              <a
                href={data.Resource[5].CTAUrl}
                target={data.Resource[5].OpenNewTab ? '_blank' : '_self'}
                rel="noreferrer"
              >
                <div className="relative h-64 mx-auto rounded sm:h-48">
                  <div
                    className={`absolute inset-0 banner-${stream} rounded `}
                  />
                  <div className="absolute inset-0 p-6 flex flex-col items-start sm:text-center sm:p-2">
                    <p className="text-xl lg:text-2xl pt-20 sm:p-4 text-black font-bold">
                      <span
                        className={`p-1 text-xs rounded tag-${stream} text-white font-semibold inline-block py-px px-2 mb-4 text-xs leading-5 uppercase rounded-full shadow-sm`}
                      >
                        {data.Resource[5].Tag}
                      </span>
                      <br />
                      {data.Resource[5].ResourceTitle}
                    </p>
                  </div>
                </div>
              </a>
            </div>
            {/* / Large Card */}
          </div>
        </div>
      </div>
    </div>
  );
}
