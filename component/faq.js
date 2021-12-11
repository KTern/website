import Markdown from "markdown-to-jsx";
export default function FAQ({data,title}){
    return (
        <>
  <section className="py-5 bg-white faq-gradient">
                    <h2 className="pb-8 section-heading  text-center ">{title}</h2>
                    <div className="grid grid-cols-3   ">
                    <div className="col-span-2 mx-20">
                       
                            
                            {data.map((data) => (
                                <details key="data" className="relative overflow-hidden border-b border-gray-300  select-none hover:bg-white">
                                    <summary  className="items-center grid grid-cols-12 py-5 px-6 cursor-pointer" style={{ listStyle: 'none' }}>
                                    <svg className="col-span-1 w-7 h-7 transition-all duration-200 ease-out transform rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                                        <span className="col-span-11 text-lg font-bold">{data.Question}</span>
                                        
                                            </summary>
                                            <div className="pb-3 px-4 mx-16  text-lg" style={{color:'#374151'}}>
                                            <Markdown
                    options={{
                      overrides: {
                        h3: {
                          props: {
                            className: " text-lg  text-justify",
                          },
                        },
                         h1: {
                          props: {
                            className: " text-lg  text-justify",
                          },
                        },
                        li: {
                          props: {
                            className: "text-justify list-decimal ml-3 mb-1 flex-col",
                          }
                            },
                            p: {
                                props: {
                                className:"text-justify "
                            }
                            },
                            ol: {
                                props: {
                                    className:" text-justify"
                                }
                            },
                            strong: {
                              props: {
                                className: "",
                              },
                            },
                            a:{
                              props:{
                                className:"text-blue-900 hover:underline "
                              }
                            }
                      },
                    }}
                    className=""
                  >
                     {data.Answer}
                  </Markdown>
                                    </div>
                                            {/* <hr/> */}
                                    
                            </details>))}
                    </div>
                    <div className="col-span-1 h-full  "> 
                   
                    </div>
                    </div>
                </section>
    </>
    )
}