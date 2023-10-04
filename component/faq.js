import Markdown from 'markdown-to-jsx';
/* eslint-disable react/prop-types */
export default function FAQ({ data, title, stream }) {
  return (
    <section className="py-12 bg-white bg-bg ">
      <div className="text-center">
        <span
          className={`text-xs rounded ${stream} text-white font-semibold inline-block py-px px-2 mb-4 text-xs leading-5 uppercase rounded-full shadow-sm`}
        >
          QUESTIONS
        </span>
      </div>
      <h2 className="pb-8 section-heading  text-center ">{title}</h2>
      <div className="grid  grid-cols-3   ">
        <div className="col-span-3 md:col-span-2 md:mx-20">
          {data.map((data) => (
            <details
              key="data"
              className="details  relative overflow-hidden border-b border-gray-300  select-none "
            >
              <summary
                className=" items-center grid grid-cols-12 py-5 px-6 cursor-pointer"
                style={{ listStyle: 'none' }}
              >
                <span className="col-span-11 text-lg font-bold">
                  {data.Question}
                </span>
              </summary>
              <div className="pb-3 px-4 mx-16  text-lg   text-gray-1000">
                <Markdown
                  options={{
                    overrides: {
                      h3: {
                        props: {
                          className: ' text-lg  text-justify',
                        },
                      },
                      h1: {
                        props: {
                          className: ' text-lg  text-justify',
                        },
                      },
                      li: {
                        props: {
                          className: ' list-decimal ml-3 mb-1 flex-col',
                        },
                      },
                      p: {
                        props: {
                          className: 'text-justify ',
                        },
                      },
                      ol: {
                        props: {
                          className: ' text-justify',
                        },
                      },
                      strong: {
                        props: {
                          className: ' text-justify',
                        },
                      },
                      a: {
                        props: {
                          className:
                            ' text-justify text-blue-900 hover:underline ',
                        },
                      },
                    },
                  }}
                  className=" text-justify"
                >
                  {data.Answer}
                </Markdown>
              </div>
              {/* <hr/> */}
            </details>
          ))}
        </div>
        <div className="hidden lg:block col-span-1 h-full  " />
      </div>
    </section>
  );
}
