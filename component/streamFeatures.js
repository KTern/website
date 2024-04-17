import Image from 'next/image';
import Link from 'next/link';
import Event from '../component/page_event';

export default function StreamFeatures({ data, source, stream, button }) {
	// Amplitude Tracking onClick
	function onClick(data) {
		Event(data);
	}
	return <>
        <section className="py-6 md:py-8 bg-white overflow-hidden ">
            {data.map((dt, index) => {
                return index % 2 == 0 ? (
                    <div className="container px-8 py-16 mx-auto sm:py-8 animated mx-auto fadeIn">
                        <div className="flex flex-wrap lg:items-center -mx-4">
                            <div className="sm:p-8 sm:text-justify px-4 mb-16 sm:mb-4 md:mb-0 sm:text-center sm:w-full lg:w-1/2">
                                <span
                                    className={`inline-block py-px px-2 mb-4 text-xs leading-5 text-white tag-${stream} font-medium uppercase rounded-full shadow-sm `}
                                >
                                    {dt.Tag}
                                </span>
                                <h1 className="mb-4 text-3xl md:text-5xl leading-tight font-bold ibm-plex">{dt.Title}</h1>
                                <p className="mb-6 text-lg md:text-xl text-coolGray-500 font-medium">{dt.Description}</p>
                                {button ? ((<Link
                                    href={dt.CTAUrl}
                                    passHref
                                    onClick={() => {
                                        onClick({
                                            stream_score: resolve_stream_score(stream),
                                            event_name: 'Link Click',
                                            section_name: 'Features Section',
                                            page_source: `${source}`,
                                            label: `${dt.Title}-${dt.CTAText}`,
                                        });
                                    }}
                                    className={`sm:w-3/5 inline-block p-4 w-full md:w-auto text-base leading-4 text-white tag-${stream} hover:bg-gray-600 font-medium text-center focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 rounded-r-xl rounded-b-xl transition duration-200 shadow`}>

                                    {dt.CTAText}

                                </Link>)) : ('')}
                            </div>

                            <div className=" w-full lg:w-1/2 px-8 flex items-center justify-center sm:hidden">
                                <div className="relative" style={{ zIndex: 0 }}>
                                    <div className="h-128 w-full relative">
                                        <img
                                            className="rounded-3xl md:rounded-tl-none bg-white"
                                            src={dt.ImageURL}
                                            alt={dt.Title}
                                        />
                                    </div>
                                    <div
                                        className="animate-pulse hidden md:block absolute w-60 h-40"
                                        style={{ bottom: '2.5rem', right: '-4.5rem', zIndex: -1 }}
                                    >
                                        <Image priority layout="fill" src="/bullets-gray-left.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    index % 2 != 0 && (
                        <div className="container px-8 py-16 mx-auto sm:py-8 animated mx-auto fadeIn sm:bg-bg sm:w-full">
                            <div className="flex flex-wrap p-4 lg:items-center -mx-4">
                                <div className="sm:w-full lg:w-1/2 sm:block sm:hidden w-full lg:w-1/2 px-8 flex items-center justify-center">
                                    <div className="relative" style={{ zIndex: 0 }}>
                                        <div className="h-128 w-full relative">
                                            <img
                                                className="rounded-3xl md:rounded-tl-none bg-white"
                                                src={dt.ImageURL}
                                                alt={dt.Title}
                                            />
                                        </div>
                                        <div
                                            className="animate-pulse hidden md:block absolute w-60 h-40"
                                            style={{ top: '3rem', left: '-8rem', zIndex: -1 }}
                                        >
                                            <Image priority layout="fill" src="/bullets-gray-right.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:p-8 sm:text-justify px-4 mb-16 sm:mb-4 md:mb-0 sm:text-center sm:w-full lg:w-1/2">
                                    <span
                                        className={`inline-block py-px px-2 mb-4 text-xs leading-5 text-white tag-${stream} font-medium uppercase rounded-full shadow-sm`}
                                    >
                                        {dt.Tag}
                                    </span>
                                    <h1 className="mb-4 text-3xl md:text-5xl leading-tight font-bold ibm-plex">{dt.Title}</h1>
                                    <p className="mb-6 text-lg md:text-xl text-coolGray-500 font-medium">{dt.Description}</p>
                                    {button ? ((<Link
                                        href={dt.CTAUrl}
                                        passHref
                                        onClick={() => {
                                            onClick({
                                                stream_score: resolve_stream_score(stream),
                                                event_name: 'Link Click',
                                                section_name: 'Features Section',
                                                page_source: `${source}`,
                                                label: `${dt.Title}-${dt.CTAText}`,
                                            });
                                        }}
                                        className={`sm:w-3/5 inline-block p-4 w-full md:w-auto text-base leading-4 text-white tag-${stream} hover:bg-gray-600 font-medium text-center focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 rounded-r-xl rounded-b-xl transition duration-200 shadow`}>

                                        {dt.CTAText}

                                    </Link>)) : ('')}
                                </div>
                            </div>
                        </div>
                    )
                );
            })}
        </section>
    </>;
}
