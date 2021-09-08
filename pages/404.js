export default function Error () {
    return (
         <section className="relative py-20 2xl:py-40 bg-black overflow-hidden h-screen">
        <img className="absolute top-0 right-0 md:-mr-96 md:-mt-112" src="/404/circle.svg" alt=""/>
        <img className="absolute top-0 right-0 h-40 lg:h-80 lg:mr-64 lg:mt-24" src="/404/five-stars.svg" alt=""/>
        <img className="hidden lg:block absolute top-0 left-0 h-64 -ml-10" src="/404/blue-double-circle.svg" alt=""/>
        <img className="absolute bottom-0 left-0 h-80" src="/404/half-double-circle.svg" alt=""/>
        <div className="relative container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <a className="inline-block text-white text-xl font-bold" href="#">
              <img className="h-7" src="/404/kternlogo.png" alt="" width="auto"/>
            </a>
            <img className="mx-auto mb-8" src="/404/error-404.svg" alt=""/>
            <div className="max-w-md mx-auto text-center">
              <h2 className="mb-20 text-2xl text-white font-bold font-heading">Sorry, we can&apos;t find that page or something has gone wrong...</h2>
            <a className="  inline-block py-3 px-10 bg-white hover:bg-gray-50 hover:text-black shadow text-lg text-black font-bold rounded-l-xl rounded-t-xl transition duration-200 custom-card-subheading" href="#">Return to Home</a>
            </div>
          </div>
        </div>
      </section>
    )
}