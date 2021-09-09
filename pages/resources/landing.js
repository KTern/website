import Layout from "../../component/Layout"
import Head from "next/head"
export default function Landing () {
    return (
        <>
            <Head>
                <script type='text/javascript' src='https://platform-api.sharethis.com/js/sharethis.js#property=60f91fc57c9b910013246b36&product=inline-share-buttons' async='async'></script>
            </Head>
        <Layout>
            <section className="py-20">
                <div className="container mx-auto px-4">     
                    <div className="py-20 rounded-lg" style={{backgroundImage: "url('/public/gradient-background.jpeg')", backgroundRepeat:' no-repeat', backgroundSize: 'cover'}}>
                        <div className="max-w-2xl mx-auto text-center">
                            <p className="inline-block py-0 pl-4 pr-4  -ml-0 text-xs font-medium leading-5 text-white transform -translate-y-2 bg-black rounded">
                                <a href="#_" className="text-white hover:underline " rel="category">
                                    Digital Maps
                                </a>
                            </p>
                            <p className="inline-block pl-4 pr-4   text-xs font-medium leading-5 text-gray-300 transform -translate-y-2  ">
                                <a href="#_" className="text-black hover:underline " rel="category">
                                    24th September 2021
                                </a>
                            </p>
                            <div className="mt-2">
                                <h2 className="mb-6 text-4xl lg:text-5xl text-black font-bold">Digital Transformation</h2>
                                <div className="flex justify-center">
                                <div className="mr-4">
                                    <img className="w-12 h-12 object-cover object-top rounded-full" src="/webinar/edson.jpg" alt=""/>
                                </div>
                                <div className="text-left">
                                    <a href="#">
                                        <h3 className="text-black hover:underline font-bold">Edson Frainlar</h3>
                                    </a>
                                    <a href="#">
                                        <span className="text-xs text-gray-300 font-bold">Author</span>
                                    </a>
                                </div>
                                </div>
                            {/* <!-- ShareThis BEGIN --> */}
                            <div className=" flex sharethis-inline-share-buttons  pt-10  "></div>
                            {/* <!-- ShareThis END --> */}
                            </div>           
                        </div>
                    </div>
                </div>
                <div className="max-w-2xl mx-auto">
                    <p className="mb-6 leading-loose text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo est eget consequat imperdiet. Suspendisse laoreet scelerisque lobortis. Mauris facilisis hendrerit nulla at vehicula. Suspendisse potenti. Ut in nulla a purus bibendum convallis. Suspendisse id nunc maximus, suscipit ante ac, vulputate massa. Sed ut nunc suscipit, bibendum arcu a, interdum elit. Nullam laoreet mollis dictum. Ut suscipit, magna at elementum iaculis, erat erat fermentum justo, sit amet ultrices enim leo sit amet purus. Nulla sed erat molestie, auctor mauris lobortis, iaculis justo.</p>
                    <p className="leading-loose text-gray-500">Duis hendrerit dui in dui ornare luctus. Nullam gravida tincidunt lorem cursus suscipit. Integer scelerisque sem et sem porta, eu volutpat mi tempor. Duis interdum sodales lacus non tempor. Nam mattis, sapien a commodo ultrices, nunc orci tincidunt ante, tempus tempus turpis metus laoreet lacus. Praesent condimentum, arcu ut fringilla tincidunt, augue diam pretium augue, sit amet vestibulum nunc felis vel metus. Duis dolor nulla, pellentesque non ultrices ut, convallis eu felis. Duis luctus tempor arcu, vitae elementum massa porta non. Morbi aliquet, neque ut volutpat sodales, dui enim facilisis enim, ut dictum lacus neque in urna. Nam metus elit, ullamcorper pretium nisi at, aliquet gravida lectus. Nullam id lectus pellentesque, suscipit dolor eget, consequat velit. Pellentesque finibus commodo nisl, id interdum leo. Maecenas aliquam felis justo, ut sagittis nunc maximus ut.</p>
                </div>
        </section>
            </Layout>
            </>
    )
}