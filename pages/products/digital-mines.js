import Layout from "../../component/Layout";
import Carousel from 'react-multi-carousel';

import Image from "next/image";
import Link from "next/link";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
function next(id, token, last) {
  let elem = document.getElementById(id);
  const styles = window.getComputedStyle(elem);
  const amount = styles.getPropertyValue("--amount");
  const gapV = styles.getPropertyValue("--gap-v");
  const gapM = amount * gapV;
  const tokElem = document.getElementById(token);
  const tokStyles = window.getComputedStyle(tokElem);
  const iWidth = parseFloat(tokStyles.width);
  document.getElementById(id).scrollBy({left: (iWidth * amount) + gapM, behavior: "smooth"});
}

function prev(id, token, last) {
  let elem = document.getElementById(id);
  const styles = window.getComputedStyle(elem);
  const amount = styles.getPropertyValue("--amount");
  const gapV = styles.getPropertyValue("--gap-v");
  const gapM = amount * gapV;
  const tokElem = document.getElementById(token);
  const tokStyles = window.getComputedStyle(tokElem);
  const iWidth = parseFloat(tokStyles.width);
  document.getElementById(id).scrollBy({left: -((iWidth * amount) + gapM), behavior: "smooth"}); 
}
export default function Digital_Mines () {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative py-10 pb-auto pb-72">
                <div className="hidden lg:block absolute inset-0 w-full relative">
            <Image  src="/atis-assets/background/lines.svg" alt="" layout="fill"/>
            </div>

            <div className="relative pt-12 md:pt-16 pb-40  bg-mines-secondary border-b-4 border-mines-primary">
                <div className="relative container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center mb-12 md:mb-20">
                        <h2 className="mb-3   heading">Digital Mines</h2>
                        <span className="mb-3  text-black subheading">Run your Processes better to run your Business better </span> 
                            <div><br />
                                <Link  href="#" passHref><a className="hidden  lg:inline-block py-3 px-10 bg-mines-primary hover:bg-gray-100 hover:text-black shadow text-white  rounded-r-xl rounded-b-xl transition duration-200 uppercase hyperlink">Contact Sales</a></Link>
                            </div>
                    </div>
                </div>
                <div className="absolute inset-x-0  max-w-2xl mx-auto px-4 bg-mines-secondary shadow-2xl rounded-2xl ">
                <div className="rounded-3xl  md:rounded-6xl md:rounded-tl-none h-80 w-100 relative"><Image className="rounded-3xl md:rounded-6xl" layout="fill" src="/product/mines/mines_1.svg" alt="" /></div>
                <div className="absolute inset-0 flex items-center justify-center ">
                    <Link href="/video"  passHref>
                                <a className="flex items-center justify-center hover:bg-black rounded-full bg-white animate-pulse">
                                <svg className="w-16 h-16 hover:text-mines-secondary text-mines-primary  transition duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                                </svg>
                               </a>
                    </Link >
                </div>
                </div>
            </div>
            </section>    
            {/* /Hero Section */}
               {/* {Customer Logos} */}
                            <section className="p-0 " >
                    <div className="container px-4 mx-auto ">

                        <p className=" text-center  text-gray-500 section-heading ">Trusted by brand all over the world</p>
                        <div className="p-8 md:p-4 flex flex-wrap -m-4 justify-center items-center ">
                            <div className=" w-full md:w-1/3 lg:w-1/6 lg:p-4">

                                <Image className=" w-auto lg:w-100" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAAB4eHipqal1dXVxcXHLy8uAgICtra2np6f29vbT09Nvb29ZWVnz8/Pb29udnZ3i4uLAwMCGhoaOjo61tbXr6+tISEiXl5doaGgaGhqRkZFeXl5CQkI1NTXExMQQEBBMTEwpKSkxMTE8PDwjIyMUFBRLS0vE7kYLAAAKjklEQVR4nO2bCVerOhCAJxD2LSyh0AVKF/3///BlEuiu9nq9+vDMd45KKdR8JJlMAgUgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgiG+kCOwn8W8IfrroT/LKPk3402V/juHXG6o6XK7Yyy82XOjC2qxcX5Q9+X2GbNcmrN+eCj8cTpvbYeaGG1PadcWajvGp8jy2nzwW6wdyMzRUWJ1wGWvNCz7+VdLtvdtMDdmxHF7B0ZvL1Z4fTW1ai7ea6fwMXwSLKmYH26Wqyhep9w1J8PpW3JmfIQotRM1iwTZMWEdfN93+8FZHnKUhWwYLDqvYZvFaeuq13EUb51cZsor14gDhUO7cuCo3/WvW/TJDNdyvZbrooczLLBZemR/K32FYddqO4++2KSGWICDK4ixqg/kbJg3rNuwICSYw2YL1g+eX0CtDqMOiUoYblQPEyWGYqyFWYcKaNbOBbdqjX7Am4lkDEECW5rVnW9UQMG+3mWUdnhPQcs+cI4OcdesShgpEndfqgDx007XLRefdttL0p8v+HK/dIlkjyWKzD9h+zVrYD1UJ2VrZ6UPq0M4Gub8bFmdi6PEL4jiuWLtkddbWsobAOEjIM+uuBudpqHDiJrECFoF0ITOHRNDUvc/uQupsDK0zaOgHbQNrN68w0GBHVKISrMgtmJynoXVN3EgvX7UheJDV4NZpCA30WQVxXvjHQs2VZ27oFJnj5L2flxIikeaQu2EKTtgIq04i4XnFsD3M2jAuoMyKNgDZR691mKhwmgaQhoeMr+NIpeFlU04LALM05E0fxylYfdXm0Fq7CKpe9cUhdSMmF4dXm0XHodr5czV0uOOCrAS3oI5V2AG+qi2wC0hhIVeYsi52rBOsszbJLA2dPnBirDzhrSyecqtta2DrViU+oZ9ty+Y02d8smbOdoWEcSRt8h/tcRI4VOxLaRmzhUEY97CtHbL3redTsDLnfxF60ijEJcHBH65XgbnYMXJZ54c5b8X3bztfQUZ0P2qji1rQnrv1WyiBjifCBrXi7tPJuO1tDJ/fbsnQycU5xuBAy5XGxbBiLVDrOdvsdj+Zr6Jeuip/ORQ7HRdxAU5Rx3DWCFSXfLVu2c4p5GvJq5VTiMkVV+6ASVuzKeM0c6Aqmph24pNrt2hkaxo7rOvxa0FJzKQjjWO1Xc/sl+KNYxBbzMyxDx3GsG7gInEaWgNPGVcDWXW764JaV8zO0bicYxjDyIh4LnDQOauK/YNMkeDPOL+Zk+BAnLkEEJcdZ45LJJLdPMcb6FYY8sFRi0xccJ8aJapwCjtdLNXM3dOrGb3iM4UdVIgvZ7tjBrzK04jhPeTAaqviZFxfz+19hqPDKWsdYFU4ZS2Tr/zJDrjKc2Gxx68g6tpmea/glhlzAeVs1U1+y/fYJw2xtQ7T2/6ZQtZQRQK5/3+L6fl9f70pl4U7bRSFv7ja810pdfjZUGc2iy55ppeqdGn/+wlDlvmreHTAW374zLmgOVztVKvI6bmaYfj1tyM95DkZTBSRPGHK2hfXd//lTw1gb8ps3evy/e6YS5RvDZNwM2d0do3daqV9d1CE3cRT2HxrqZeS/qcF3DAfGPPUny98yBJVSNs8aOpl/MVnkB5WSRkxWTxhKX443BPI8x54zvYTs9Fat+pOsx2NC/J2dth8Yjr1PXWb36h+5Z8M0x3tlzR8YXk8WVW7KmHiiH4ZjS8bLjG0GdDo7YMHzbjqxHh8VxArZ61Iv9RlqV/bAcBylWtX6z7VlPnhZT4a2/jgVL4qnDa+arHkgrMs/NFSXWfQ7U1Jt2G/UYKpGGkjVn0ZuMQjhxziY3Ub6Hq0y7LTh8qGhEtzJlQp16MIWYw9QtZVgi5oM1VElYKS4CcBPG5qcNNp+YCh0KxkuDLE5aRcVrATAcTTcTi3qY0MdmTM0BH0DrBn3vuh/F3yV4f3jbQ8NTe0trg2x7TRgmu6FYaHL9KGhCqAHGA0hwofR1Etw1RRH702+2DBYvm9o9t8aqtqyxkB+bVg9YajqaX0y1J81ClW65W+/2LDk7xqOGreGqpBWemcodbP90LDR4//JUI/6KQYWY8i+uZXqPnNnWI6ttL7th1If+76hr3OYs6Fp7q4OnTnGsO81XOhoPZjRIp0MdaQ5aKGjHi20IYQ4hpjR4jB10tzUEj8b5vpTslNqpoT2eu9RH7P62lj6oaEKCy99hpmPI6QSXYe+9Be6FjDlCgoVjFcBRvlAiCAQAbb6TeGr3ese29+x9G1Vlf5FLE3wCFXhe3WKEHiCFwh8uKdtdDG+yHB4zlAHAizoeFBtcuU91pa4+4gLjlev1PB5kXnfP3yHJ5hr7k6ZtzEcrrIexIqdJ4jjuHvSEPKqtVQNRMJqeRCCtDyv6s1btS9cNZwEl1+9kWEq4niVQeG1TpNBv3JaT6clme9PhXWFra5UJy/OU4e4pacfiKltfGUMC9++yYnd51DTrttvBfmfe+qLjV3zT3F1RH0HcZeR/muKToDfXc6ESzetvXNIfBo3yNKs033zMVLmKWZbDybM/xJmZsLnmp4ex8neOekhYwjo3vtXyPpzBf00ngpwzmXLykvsy8kfC0LRYjZcvn2Aj9OC5Te3UUU4/tzu+9RnfXTihwf8W3Jf+B/0kYJzFXBdedpRy6J45/j/FeHYj951bHAaJPV8wYBJwd+thXwfuMi63H7wTLGK9TaO8ad+i3OYmXxNNTeVUb/f5rQhiGq6DHrh8o/HlZ+huF72DOuHbc8YnlmxZXVKm9LabJxOTc1WWk8XZHwnzH9iIT667FCR/t7xIsMMOcPZ1Yva2ZuM0Mbc3BsPPDJ87gPH+FyvEJWQ6zz00ENkpjmljwuceolLj7RSLyWwTf6oEP8WXFcbxypVlONqg6WZDLc6oXzxNmhYnAxzPMYsrGHxNyzCC1UlOGcu9Q6dAzA9acHFm61KuNXL4Ufik1mfw+pQOc5OT4eLC0O9EGFa6dmwwRa60dHJrHWATo98NKz0FFRNKHszxQ7HPEliaMoe3Ar4BlaomGg3eWeoJ7G3hjvM0cwagFmvsnU7CEZDiTcPxmVW1NbzyLWuvpdPZvZ/SYgtS4xLFTeGsS7wtWGufTI9eBjDFqvs0tA5GZZjTr7UVT6YZYLvx8ebQqaT3BiudaO7NhT4/eMk0TMtY3jQQg8NLf0aYKtrL/lEav8l6CUb02FuDC0zEl4Znu//9OdV1eINw5VestOLWen0+3vxsdXoeeGgG5+OFGsti4ZSd9ErQxWRhjzLsgp7mDG09C01/5Fhr9ek9JVz8aIdv1sQa29nVlTwDssKF3IKLOZCCh1GcWyLnEvDafjXq2zGUE3xmSeODwxDDC6JbPJafwV2bLLfyfTAJmZtOgdfYiHSce92Gk1GQ51576Zogddl1Objqc0YkVttqMcQ8wECzGOT3psl+XdkUohxLUpaZZbZgSp/aHtWGZj5hiytEttyHth67SnwxwWL3rajaWfhla7ajiCygwzfClTU8m2dncuqwgWoNCjFz4QZgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiCIz/AfqKWmvcGYxMwAAAAASUVORK5CYII="
                                    alt="" width={250} height={250} layout="responsive"/>

                            </div>
                            <div className="w-full md:w-1/3 lg:w-1/6 lg:p-4">

                                <Image className="w-auto lg:w-100" src="data:image/png;base64,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"
                                    alt=""width={250} height={250} />

                            </div>
                            <div className="w-full md:w-1/3 lg:w-1/6 lg:p-4">

                                <Image className="w-auto lg:w-100" src="data:image/png;base64,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"
                                    alt="" width={250} height={250}/>

                            </div>
                            <div className="w-full md:w-1/3 lg:w-1/6 lg:p-4">

                                <Image className="w-auto lg:w-100" src="data:image/png;base64,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"
                                    alt="" width={250} height={250}/>

                            </div>
                            <div className="w-full md:w-1/3 lg:w-1/6 lg:p-4">

                                <Image className="w-auto lg:w-100" src="data:image/png;base64,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"
                                    alt="" width={250} height={250}/>

                            </div>
                            <div className="w-full md:w-1/3 lg:w-1/6 lg:p-4">

                                <Image className="w-auto lg:w-100" src="data:image/png;base64,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"
                                    alt="" width={250} height={250}/>

                            </div>
                        </div>
                    </div>
                </section>

            {/* Customer Logos */}
            {/* Streams Content Section */}
            <section className="px-5 pb-10 relative overflow-hidden ">
                {/* <Image className="hidden lg:block absolute inset-0 w-full" src="/atis-assets/background/lines.svg" alt=""/> */}
                <div className="relative bg-white pt-20 rounded-t-3xl pb-12 lg:pb-24">
                    <div className="w-full md:container mx-auto px-4">
                        <div className="flex flex-wrap -mx-4">
                            <div className="hidden sm:block w-full lg:w-1/2 px-4 flex items-center justify-center">
                                <div className="relative" style={{zIndex: 0}}>
                                    <div className="h-128 w-full relative"><Image className="rounded-3xl bg-gray-100 md:rounded-tl-none" width={500} height={400}  src="/product/mines/mines_2.svg" alt=""/></div>
                                     <div  className="animate-pulse hidden md:block absolute w-60 h-40" style={{top:'-2rem', right: '3rem', zIndex: -1}}><svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0 49V0H49H50L49.99 0.00980377C76.595 0.537064 98 22.2688 98 49C98 76.062 76.062 98 49 98C21.938 98 0 76.062 0 49Z" fill="#AA2A32"/>
</svg>
</div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{bottom:'-2rem',right: '-2rem', zIndex: -1}}><svg width="166" height="165" viewBox="0 0 166 165" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M82.9727 164.999C82.8152 165 82.6577 165 82.5 165C36.9365 165 0 128.063 0 82.5C0 36.9365 36.9365 0 82.5 0C128.063 0 165 36.9365 165 82.5C165 83.2975 164.989 84.0924 164.966 84.8844L165.21 165H82.9714L82.9727 164.999Z" fill="#CD838C"/>
</svg>
</div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{bottom:'2.5rem', right: '-4.5rem', zIndex: -1}}><Image layout="fill" src="/atis-assets/elements/bullets-gray-left.svg" alt=""/></div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{ top: '3rem', left: '-8rem', zIndex: -1 }} ><Image layout="fill" src="/atis-assets/elements/bullets-gray-right.svg" alt="" /></div>                                   
                                </div>
                            </div>                           
                            <div className="w-full lg:w-1/2 md:px-20 lg:mb-12 lg:mb-20 lg:mb-0 flex items-center">
                                <div className="w-full text-center lg:text-left">
                                    <div className="max-w-md mx-auto lg:mx-0">
                                    <h2 className="mb-3  card-heading">
                                        <span className="card-heading">Process Mining   </span>        
                                    </h2>
                                    </div>
                                    <div className="max-w-sm mx-auto lg:mx-0">
                                    <p className="mb-6 text-black  card-subheading">Unlock your Organization&apos;s Full Potential by Uncovering and Eliminating Process Complexity. </p>
                                <Link href="/features/digital-mines"  passHref>
                                                        <a className="inline-flex items-center pb-1  text-black hover:border-blue-500 group ">
                                                        <span className="hyperlink group-hover:text-gray-400">Learn More</span>
                                                        <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                                        </svg>
                                                        </a>
                                                    </Link>
                                      <div className="my-12"></div>
                                
                                    </div>
                                </div>
                            </div>
                            <div className="invisible lg:visible w-full lg:w-1/2 px-4 flex items-center justify-center">
                            <div className="absolute mr-4 " style={{zIndex: 0}}>
                                <div className="" ><Image width={500} height={400} className="bg-gray-100 rounded-3xl md:rounded-tl-none" src="/product/mines/mines_2.svg" alt=""/></div>
                                    <div  className="animate-pulse hidden md:block absolute w-60 h-40" style={{top:'-2rem', right: '3rem', zIndex: -1}}><svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0 49V0H49H50L49.99 0.00980377C76.595 0.537064 98 22.2688 98 49C98 76.062 76.062 98 49 98C21.938 98 0 76.062 0 49Z" fill="#AA2A32"/>
</svg>
</div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{bottom:'-2rem',right: '-2rem', zIndex: -1}}><svg width="166" height="165" viewBox="0 0 166 165" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M82.9727 164.999C82.8152 165 82.6577 165 82.5 165C36.9365 165 0 128.063 0 82.5C0 36.9365 36.9365 0 82.5 0C128.063 0 165 36.9365 165 82.5C165 83.2975 164.989 84.0924 164.966 84.8844L165.21 165H82.9714L82.9727 164.999Z" fill="#CD838C"/>
</svg>
</div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{bottom:'2.5rem', right: '-4.5rem', zIndex: -1}}><Image layout="fill" src="/atis-assets/elements/bullets-gray-left.svg" alt=""/></div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{ top: '3rem', left: '-8rem', zIndex: -1 }} ><Image layout="fill" src="/atis-assets/elements/bullets-gray-right.svg" alt="" /></div>
                                   
                            </div>
                            </div>
                       </div>
                        </div>
                </div>
                <div className="relative  pt-2  lg:pb-24 pb-12 lg:pb-24">
                    <div className="container mx-auto px-20">
                        <div className="flex flex-wrap -mx-20">
                            <div className="w-full lg:w-1/2 px-4 flex items-center justify-center">
                                <div className="relative" style={{zIndex: 0}}>
                                    <div className="h-128 w-full relative"><Image className="rounded-3xl bg-gray-100 md:rounded-tl-none" width={500} height={400}  src="/product/mines/mines_2.svg" alt=""/></div>
                                    <div  className="animate-pulse hidden md:block absolute w-60 h-40" style={{top:'-2rem', right: '3rem', zIndex: -1}}><svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0 49V0H49H50L49.99 0.00980377C76.595 0.537064 98 22.2688 98 49C98 76.062 76.062 98 49 98C21.938 98 0 76.062 0 49Z" fill="#AA2A32"/>
</svg>
</div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{bottom:'-2rem',right: '-2rem', zIndex: -1}}><svg width="166" height="165" viewBox="0 0 166 165" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M82.9727 164.999C82.8152 165 82.6577 165 82.5 165C36.9365 165 0 128.063 0 82.5C0 36.9365 36.9365 0 82.5 0C128.063 0 165 36.9365 165 82.5C165 83.2975 164.989 84.0924 164.966 84.8844L165.21 165H82.9714L82.9727 164.999Z" fill="#CD838C"/>
</svg>
</div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{bottom:'2.5rem', right: '-4.5rem', zIndex: -1}}><Image layout="fill" src="/atis-assets/elements/bullets-gray-left.svg" alt=""/></div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{ top: '3rem', left: '-8rem', zIndex: -1 }} ><Image layout="fill" src="/atis-assets/elements/bullets-gray-right.svg" alt="" /></div>                                   
                                   
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 md:px-20  lg:mb-20 lg:mb-0 flex items-center">
                                <div className="w-full text-center lg:text-left">
                                    <div className="max-w-md mx-auto lg:mx-0">
                                    <h2 className="mb-3   card-heading">
                                        <span className="card-heading">Optimizations</span>
                                        
                                    </h2>
                                    </div>
                                    <div className="max-w-sm mx-auto lg:mx-0">
                                    <p className="mb-6 text-black  card-subheading">To unlock the full potential of process mining and to improve business outcomes for organizations, the transparency and insights gained with process mining must be turned into actions by taking optimization steps.</p>
                                <Link href="/features/digital-mines"  passHref>
                                                        <a className="inline-flex items-center pb-1  text-black hover:border-blue-500 group ">
                                                        <span className="hyperlink group-hover:text-gray-400">Learn More</span>
                                                        <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                                        </svg>
                                                        </a>
                                                    </Link>
                                    <div className="my-12"></div>
                                
                                </div>

                                </div>
                        </div>
                           
                        </div>
                        </div>
                </div>   
                 <div className="relative  pt-20  pb-12 lg:pb-24">
                    <div className="w-full md:container mx-auto px-4">
                        <div className="flex flex-wrap -mx-4">
                            <div className="hidden sm:block w-full lg:w-1/2 px-4 flex items-center justify-center">
                                <div className="relative" style={{zIndex: 0}}>
                                    <div className="h-128 w-full relative"><Image className="rounded-3xl bg-gray-100 md:rounded-tl-none" width={500} height={400}  src="/product/mines/mines_2.svg" alt=""/></div>
                                     <div  className="animate-pulse hidden md:block absolute w-60 h-40" style={{top:'-2rem', right: '3rem', zIndex: -1}}><svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0 49V0H49H50L49.99 0.00980377C76.595 0.537064 98 22.2688 98 49C98 76.062 76.062 98 49 98C21.938 98 0 76.062 0 49Z" fill="#AA2A32"/>
</svg>
</div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{bottom:'-2rem',right: '-2rem', zIndex: -1}}><svg width="166" height="165" viewBox="0 0 166 165" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M82.9727 164.999C82.8152 165 82.6577 165 82.5 165C36.9365 165 0 128.063 0 82.5C0 36.9365 36.9365 0 82.5 0C128.063 0 165 36.9365 165 82.5C165 83.2975 164.989 84.0924 164.966 84.8844L165.21 165H82.9714L82.9727 164.999Z" fill="#CD838C"/>
</svg>
</div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{bottom:'2.5rem', right: '-4.5rem', zIndex: -1}}><Image layout="fill" src="/atis-assets/elements/bullets-gray-left.svg" alt=""/></div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{ top: '3rem', left: '-8rem', zIndex: -1 }} ><Image layout="fill" src="/atis-assets/elements/bullets-gray-right.svg" alt="" /></div>                                   
                                </div>
                            </div>                           
                             <div className="w-full lg:w-1/2 md:px-20 lg:mb-12 lg:mb-20 lg:mb-0 flex items-center">
                                <div className="w-full text-center lg:text-left">
                                    <div className="max-w-md mx-auto lg:mx-0">
                                    <h2 className="mb-3 card-heading">
                                        <span className="card-heading">Process Monitoring </span>        
                                    </h2>
                                    </div>
                                    <div className="max-w-sm mx-auto lg:mx-0">
                                    <p className="mb-6 text-black  card-subheading">KTern&apos;s Anomaly detectors ensure your Processes are running smooth and ensures any anomolies are alerted and rectified earliest. KTern&apos;s proprietery VVV approach ensures high risk anomolies are attended to first followed by the low risk ensuring smooth flow of business processes. </p>
                                <Link href="/features/digital-mines"  passHref>
                                                        <a className="inline-flex items-center pb-1  text-black hover:border-blue-500 group ">
                                                        <span className="hyperlink group-hover:text-gray-400">Learn More</span>
                                                        <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                                        </svg>
                                                        </a>
                                                    </Link>
                                    <div className="my-12"></div>
                                
                                    </div>
                                </div>
                            </div>
                            <div className="invisible lg:visible w-full lg:w-1/2 px-4 flex items-center justify-center">
                            <div className="absolute mr-4" style={{zIndex: 0}}>
                                <div className="h-100 w-100 relative "><Image width={500} height={400}  className="rounded-3xl bg-gray-100 md:rounded-tl-none" src="/product/mines/mines_2.svg" alt=""/></div>
                                    <div  className="animate-pulse hidden md:block absolute w-60 h-40" style={{top:'-2rem', right: '3rem', zIndex: -1}}><svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0 49V0H49H50L49.99 0.00980377C76.595 0.537064 98 22.2688 98 49C98 76.062 76.062 98 49 98C21.938 98 0 76.062 0 49Z" fill="#AA2A32"/>
</svg>
</div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{bottom:'-2rem',right: '-2rem', zIndex: -1}}><svg width="166" height="165" viewBox="0 0 166 165" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M82.9727 164.999C82.8152 165 82.6577 165 82.5 165C36.9365 165 0 128.063 0 82.5C0 36.9365 36.9365 0 82.5 0C128.063 0 165 36.9365 165 82.5C165 83.2975 164.989 84.0924 164.966 84.8844L165.21 165H82.9714L82.9727 164.999Z" fill="#CD838C"/>
</svg>
</div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{bottom:'2.5rem', right: '-4.5rem', zIndex: -1}}><Image layout="fill" src="/atis-assets/elements/bullets-gray-left.svg" alt=""/></div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{ top: '3rem', left: '-8rem', zIndex: -1 }} ><Image layout="fill" src="/atis-assets/elements/bullets-gray-right.svg" alt="" /></div>
                                   
                            </div>
                            </div>
                       </div>
                        </div>
                </div>
                <div className="relative  pt-2  rounded-b-3xl lg:pb-24 pb-12 lg:pb-24">
                    <div className="container mx-auto px-20">
                        <div className="flex flex-wrap -mx-20">
                            <div className="w-full lg:w-1/2 px-4 flex items-center justify-center">
                                <div className="relative" style={{zIndex: 0}}>
                                    <div className="h-128 w-full relative"><Image className="rounded-3xl bg-gray-100 md:rounded-tl-none" width={500} height={400}  src="/product/mines/mines_2.svg" alt=""/></div>
                                    <div  className="animate-pulse hidden md:block absolute w-60 h-40" style={{top:'-2rem', right: '3rem', zIndex: -1}}><svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0 49V0H49H50L49.99 0.00980377C76.595 0.537064 98 22.2688 98 49C98 76.062 76.062 98 49 98C21.938 98 0 76.062 0 49Z" fill="#AA2A32"/>
</svg>
</div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{bottom:'-2rem',right: '-2rem', zIndex: -1}}><svg width="166" height="165" viewBox="0 0 166 165" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M82.9727 164.999C82.8152 165 82.6577 165 82.5 165C36.9365 165 0 128.063 0 82.5C0 36.9365 36.9365 0 82.5 0C128.063 0 165 36.9365 165 82.5C165 83.2975 164.989 84.0924 164.966 84.8844L165.21 165H82.9714L82.9727 164.999Z" fill="#CD838C"/>
</svg>
</div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{bottom:'2.5rem', right: '-4.5rem', zIndex: -1}}><Image layout="fill" src="/atis-assets/elements/bullets-gray-left.svg" alt=""/></div>
                                    <div className="animate-pulse hidden md:block absolute w-60 h-40" style={{ top: '3rem', left: '-8rem', zIndex: -1 }} ><Image layout="fill" src="/atis-assets/elements/bullets-gray-right.svg" alt="" /></div>                                   
                                   
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 md:px-20  lg:mb-20 lg:mb-0 flex items-center">
                                <div className="w-full text-center lg:text-left">
                                    <div className="max-w-md mx-auto lg:mx-0">
                                    <h2 className="mb-3   card-heading">
                                       
                                        <span className=" card-heading">ROI Estimation</span>
                                    </h2>
                                    </div>
                                    <div className="max-w-sm mx-auto lg:mx-0">
                                    <p className="mb-6 text-black leading-loose card-subheading">The Insights from Process Mining is used to Derive ROI of your SAP Transformation</p>
                                <Link href="/features/digital-mines"  passHref>
                                                        <a className="inline-flex items-center pb-1  text-black hover:border-blue-500 group ">
                                                        <span className="hyperlink group-hover:text-gray-400">Learn More</span>
                                                        <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                                        </svg>
                                                        </a>
                                                    </Link>
                                    <div className="my-12"></div>
                                
                                </div>

                                </div>
                        </div>
                           
                        </div>
                        </div>
                </div>   
                </section>
            {/*/ Streams Content Section */}
            {/* Bots Section */}
          <div className="px-20 py-10">
                <div className="px-10">
                <h2 className="section-heading text-center mb-4">Digital Mines Bots</h2>
               
                </div>
                <Carousel className="bots flex p-10  " responsive={responsive}>
                    <div className="p-3 bots-card flex-row justify-center items-center shadow-xl  border-2 border-mines-400 text-center ">
                        
                        <p className="text-lg font-bold mt-7 mb-4">DX Process Orchestrator Bot</p>
                        <p className="text-md ">Orchestrate Process Lifecycle with a Digital footprint</p>
                    </div>
                    <div className="p-3 bots-card flex-row justify-center items-center shadow-xl  border-2 border-mines-400 text-center ">
                        
                        <p className="text-lg font-bold mt-7 mb-4">DX Release Orchestrator Bot</p>
                        <p className="text-md ">Orchestrate the SAP TR Releases</p>
                    </div>
                    <div className="p-3 bots-card flex-row justify-center items-center shadow-xl  border-2 border-mines-400 text-center ">
                        
                        <p className="text-lg font-bold mt-7 mb-4">DX Event Orchestrator Bot</p>
                        <p className="text-md ">Event Orchestrations for swift collaborations</p>
                    </div>
                    <div className="p-3 bots-card flex-row justify-center items-center shadow-xl  border-2 border-mines-400 text-center ">
                        
                        <p className="text-lg font-bold mt-7 mb-4">DX Change Management Orchestrator Bot</p>
                        <p className="text-md ">Orchestrate the Change management</p>
                    </div>
                     <div className="p-3 bots-card flex-row justify-center items-center shadow-xl  border-2 border-mines-400 text-center ">
                        
                        <p className="text-lg font-bold mt-7 mb-4">DX  Security Impact Simulation Bot</p>
                        <p className="text-md ">Simulate the Security Impact - Helping to mitigate Security and Compliance Risk</p>
                    </div>
                     <div className="p-3 bots-card flex-row justify-center items-center shadow-xl  border-2 border-mines-400 text-center ">
                        
                        <p className="text-lg font-bold mt-7 mb-4">Bot Name</p>
                        <p className="text-md ">Bot description</p>
                    </div>
                    <div className="p-3 bots-card flex-row justify-center items-center shadow-xl  border-2 border-mines-400 text-center ">
                        
                        <p className="text-lg font-bold mt-7 mb-4">Bot Name</p>
                        <p className="text-md ">Bot description</p>
                    </div>   
                </Carousel>
            </div>
            {/* /Bots Section */}
           {/* Testimonial Section */}
           <section className="relative py-10 md:py-15 bg-black overflow-x-hidden">
               {/* <Image width="10%" height="10%" className="absolute h-24 md:h-auto top-0 left-0 right-0" src="/atis-assets/elements/line-top.svg" alt=""/> */}
               
                    <h2 className="mb-10 lg:mb-10   section-heading text-center  text-white  ">What Customers Say</h2>  
                <div className="flex flex-wrap lg:flex-nowrap justify-center">
    <div className="hidden lg:block  opacity-50 flex-shrink-0 w-full max-w-md px-3">
      </div>
    <div className="flex-shrink-0  w-full lg:max-w-md px-3 lg:mt-20 mb-6 lg:mb-0">
      <div className="px-6 py-12 bg-black   border border-white">
        <div className="relative px-4 mx-auto">
         <div className="absolute top-0 left-0"><Image width="10%" height="10%"  src="/atis-assets/elements/quote-grey.svg" alt=""/></div>
                       <div className="absolute top-0 right-0"><Image width="10%" height="10%"  src="/atis-assets/elements/quote-grey.svg" alt=""/></div>
          <div className="px-4 md:px-10">
            <h3 className="mb-8 card-subheading text-white">Helloo Tonight I had interdum at ante porta, eleifend feugiat nunc. In semper euismod me a accumsan. Thanks! 👏💥</h3>
            <div className="flex flex-wrap items-center">
             <div className="w-16 h-16 mb-4 md:mb-0 mr-6 rounded-full"><Image width="60%" height="60%" className="w-16 h-16 mb-4 md:mb-0 mr-6 rounded-full" src="data:image/jpeg;base64,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" alt=""/></div>
              <p className="mb-4 md:mb-0 text-gray-300 hyperlink">TIA O’Halleran, NYC</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex-shrink-0 w-full lg:max-w-md px-3 mb-6 lg:mb-0">
      <div className="px-6 py-12   bg-black border border-white">
        <div className="relative px-4 mx-auto">
         <div className="absolute top-0 left-0"><Image width="10%" height="10%"  src="/atis-assets/elements/quote-grey.svg" alt=""/></div>
                       <div className="absolute top-0 right-0"><Image width="10%" height="10%"  src="/atis-assets/elements/quote-grey.svg" alt=""/></div>
          <div className="px-4 md:px-10">
            <h3 className="mb-8 card-subheading text-white">Helloo 2 Thanks, feugiat tellus a sad tincidunt ultrices. Phasellus non libero tempus odio vestibulum ultricies.</h3>
            <div className="flex flex-wrap items-center">
              <div className="w-16 h-16 mb-4 md:mb-0 mr-6 rounded-full"><Image width="60%" height="60%" className="w-16 h-16 mb-4 md:mb-0 mr-6 rounded-full" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxARDhAOEBAPEBERDxERDhUPDxAVEA8RFxEXGBYSExYYHSggGBolHRMTIjEhJykrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAwUGBAECB//EADsQAAIBAQQFCgQEBgMAAAAAAAABAgMEBRExEiEiQVEGE2FxgZGhscHRMkJSsmJyguEjJHOSotJDY/D/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/cQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEdavCCxnKMV0tIrq1/UV8OlPqWC8QLUGeqco38tNL80n6IhfKGtujTXZL3A04MuuUNb6af8AbL3JqfKOXzU4vqk16MDRAqKPKCk/iU4dmK8NfgWNntVOeuE4y6nr7gJgAAAAAAAAAAAAAAAAAAAAAAAACmvW+lDGFPCUsm/lj7sCxtdtp0ljOWHBb31IoLbf1SWKprm1xzn7IqqlRyblJuTebeZ8gezm5PGTbfFttngAAAAAAACeDxWp7sMwALOx33VhgpfxI/i+LsfuaCw3jTq/C8Jb4vVJe5jBFtPFPBrJrNAb4FBdd+ZQrdSn/t7l8mB6AAAAAAAAAAAAAAAAAU1/XloLmoPaktpr5Y+7Agvq986VJ9E5L7Y+5QgAAAAAAAAAAAAAAAAAC2ua9nTapzexuf0fsVIA3qe89M9yfvLBqhN6v+Nvd+H2NCAAAAAAAAAAAAAAc9vtSpU5VHuyXF7kYupUcpOUni28Wy15R2vSqKmsoZ/mfsvUqAAAAAAAASUKMpy0YrF+S4vggIwXtluOK11G5PhHVHvzfgd8LDSWVOHbFN+IGTBrZWOk86cP7UcVpuSD1wbg++PuBnwTWqyzpy0ZrDg9z6mQgAAAAABPflwNhc9t52km/ijsz6+PaY877ltfN1li9mezL0feBrwAAAAAAAAAAI7RVUISm8oxbJCq5R1sKGj9ckuxa/RAZec3JuTzbbfW8zwAAAAAAAks9FzkoRzfcuLfQamx2WNKOjH9T3yfFnByfs+EHVecnhH8qz8fItgAAAAACOvRjOLhJYp+D4rpMtbbK6U3B698XxXE1pX31Z9Ok5b4bS6t67vIDNgAAAAAAA2l12jnKMJ78MJfmWpnUUXJets1KfBqS7Vg/JF6AAAAAAAAAM9ypntU49En4pejNCZjlO/40V/1r7pAVAAAAAAAANbYIYUaa/AvFY+pOQ2KWNKm/wAEfImAAAAAAB5KOKa4prvPQ3qx4AYtrcBJ4tviwAAAAAAWvJueFdr6oSXc0/c1JkLif8zT/V9jNeAAAAAAAAAMxymX8eP9NfdI05neVMNunLjGS7mvcCjAAAAAAABobhr6VPQ3wf8Ai9a9SzMjYrS6U1NdTXFb0auhWjOKlF4p/wDsH0gfYAAAAAcd7V9CjLjLZj25+GJ1zmknJtJJYtvcjL3nbOdnitUY6oLo4vrA5AAAAAAAAd9xL+Zp/q+xmvMrychjaMfphJ+S9TVAAAAAAAAACo5S0saKl9E13PV54FuQ2yjp05w+qLXbu8QMOA008Hqa1PoYAAAAAAB0WO2zpPGL1P4k8mR0KE5vCEXJ9G7re4s6VxSaxlNRe5JY97A7rLe1Keb0Hwll2PI7otPJp9RmLRdlWHy6S4w1+GZy61xXegNk3hnqOO03nSh8yk+ENb78kZjFve33s6aF3VZ5QaXGWyvED23XhOrqezFZRXm+JyFxK4ZaOqonLenF4dj/AGK202WdN4Ti1weafUwIQAAAAAAAX/JalqqVOqK835ovziuez6FCCebWlLrev2O0AAAAAAAAAAAMpygsuhW0l8NTa/V8y9e0rDZ3pY+dpOHzLXB8JGMkmm09TTwae5gAAALW7rocsJ1MYx3L5pLp4Imue7dSq1F0wi/uZcgfNKnGK0YpRXBI+gAAaAA8SPQAB5KKaaaTTzTWKZ6AKW8LmzlS7Y/6v0KVm0Ky9rt005wW2s0vn/cDPAAAdd1WXna0Y4bK2p9S3dupHIay4rFzdPFrbng30LcgLJAAAAAAAAAAAAABQcobuzrwX9RL7vcvzxoDBFhc1i5yelJbMP8AKW5E98XS4PTppuDetLOD9i2sVnVOnGHBa+mW8CcAAAAAAAAAAAAAAAFFftiwfPRWpvCfQ/q7SoNjWpqUXF5STTKGwXRKdRqeKhCWEn9XRH3AkuG7tOXOyWxF7P4pL0Rpz5pwUUopYJLBJbkfQAAAAAAAAAAAAAAAAHmBHOnvRKAOUHRKCZDKDQHyAAAAAAAAAAAPqMGyWNNLpA+IU+JKkegAAAAAAAAAAAAAAAAAAAAAAAAD5cEz4dLpJQBA6TPObfA6ABz82+B6qTJwBEqXSfagkfQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/9k=" alt=""/></div>
              <p className="mb-4 md:mb-0 text-gray-300 hyperlink">Alice Kenowski, NYC</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex-shrink-0 w-full lg:max-w-md px-3 lg:mt-20 mb-6 lg:mb-0">
      <div className="px-6 py-12   bg-black border border-white">
        <div className="relative px-4 mx-auto">
        <div className="absolute top-0 left-0"><Image width="10%" height="10%"  src="/atis-assets/elements/quote-grey.svg" alt=""/></div>
                       <div className="absolute top-0 right-0"><Image width="10%" height="10%"  src="/atis-assets/elements/quote-grey.svg" alt=""/></div>
          <div className="px-4 md:px-10">
            <h3 className="mb-8 card-subheading text-white">Hellooo This time ut augue ut magna rutrum ultricies nec nec leo. Proin tempor, mauris sad senne lorem.</h3>
            <div className="flex flex-wrap items-center">
             <div className="w-16 h-16 mb-4 md:mb-0 mr-6 rounded-full"><Image width="60%" height="60%" className="w-16 h-16 mb-4 md:mb-0 mr-6 rounded-full" src="data:image/jpeg;base64,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" alt=""/></div>
              <p className="mb-4 md:mb-0 text-gray-300 hyperlink">Lea Diamse, NYC</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="hidden lg:block opacity-50 flex-shrink-0 w-full max-w-md px-3">
        </div>
  </div>
            </section>
            {/* /Testimonial Section */}
            {/* Resources Section */}
            <section className="w-full pt-8 bg-white sm:pt-12 md:pt-16">
                            <div className="px-2 mx-auto max-w-7xl">
                            <div className="flex justify-center w-full pb-5 mb-4 border-gray-200">
                            <h2 className="section-heading  text-gray-800 ">Related Resources</h2>
                            
                            </div>
                            
                            <div className="grid grid-cols-12 gap-6 mb-6">
                        <div className="relative col-span-12 space-y-3 md:col-span-5 lg:col-span-3 shadow-lg hover:shadow-xl p-4" >
                            <div className="">
                            <Link href="#_" passHref>
                            <a className="relative block w-full h-44 overflow-hidden rounded"> 
                            <Image className="bg-secondary object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="/product/mines/mines_3.svg" alt="resource" layout="fill"/>
                            </a> 
                            </Link>
                            </div>
                            <div className="">
                            <p className="hyperlink text-gray-400  uppercase mb-4">Resources</p>
                            <span className="block card-subheading font-semibold leading-tight text-gray-700 mb-4 hover:text-gray-900 ">SAP Activate – The Heart of KTern and S/4HANA Migration </span>
                        <Link href="#_"  passHref>
                                        <a className="inline-flex items-center   text-black hover:text-gray-400 group ">
                                        <span className="hyperlink group-hover:text-gray-300">Read more</span>
                                        <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                        </a>
                                    </Link>
                            </div>
                            </div>

        
                            <div className="relative col-span-12 space-y-3 md:col-span-5 lg:col-span-3 shadow-lg hover:shadow-xl p-4" >
                            <div className="">
                            <Link href="#_" passHref>
                            <a className="relative block w-full h-44 overflow-hidden rounded"> 
                            <Image className="bg-secondary object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="/product/mines/mines_3.svg" alt="resource" layout="fill"/>
                            </a> 
                            </Link>
                            </div>
                            <div className="">
                            <p className="hyperlink text-gray-400  uppercase mb-4">Resources</p>
                            <span className="block card-subheading font-semibold leading-tight text-gray-700 mb-4 hover:text-gray-900 ">SAP Activate – The Heart of KTern and S/4HANA Migration </span>
                        <Link href="#_"  passHref>
                                        <a className="inline-flex items-center   text-black hover:text-gray-400 group ">
                                        <span className="hyperlink group-hover:text-gray-300">Read more</span>
                                        <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                        </a>
                                    </Link>
                            </div>
                            </div>


                            <div className="relative col-span-12 space-y-3 md:col-span-5 lg:col-span-3 shadow-lg hover:shadow-xl p-4" >
                            <div className="">
                            <Link href="#_" passHref>
                            <a className="relative block w-full h-44 overflow-hidden rounded"> 
                            <Image className="object-cover bg-secondary object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="/product/mines/mines_3.svg" alt="resource" layout="fill"/>
                            </a> 
                            </Link>
                            </div>
                            <div className="">
                            <p className="hyperlink text-gray-400  uppercase mb-4">Resources</p>
                            <span className="block card-subheading font-semibold leading-tight text-gray-700 mb-4 hover:text-gray-900 ">SAP Activate – The Heart of KTern and S/4HANA Migration </span>
                        <Link href="#_"  passHref>
                                        <a className="inline-flex items-center   text-black hover:text-gray-400 group ">
                                        <span className="hyperlink group-hover:text-gray-300">Read more</span>
                                        <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                        </a>
                                    </Link>
                            </div>
                            </div>

                            <div className="relative col-span-12 space-y-3 md:col-span-5 lg:col-span-3 shadow-lg hover:shadow-xl p-4" >
                                            <div className="">
                                            <Link href="#_" passHref>
                                            <a className="relative block w-full h-44 overflow-hidden rounded"> 
                                            <Image className="bg-secondary object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="/product/mines/mines_3.svg" alt="resource" layout="fill"/>
                                            </a> 
                                            </Link>
                                            </div>
                                            <div className="">
                                            <p className="hyperlink text-gray-400  uppercase mb-4">Resources</p>
                                            <span className="block card-subheading font-semibold leading-tight text-gray-700 mb-4 hover:text-gray-900 ">SAP Activate – The Heart of KTern and S/4HANA Migration </span>
                                        <Link href="#_"  passHref>
                                                        <a className="inline-flex items-center   text-black hover:text-gray-400 group ">
                                                        <span className="hyperlink group-hover:text-gray-300">Read more</span>
                                                        <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                                        </svg>
                                                        </a>
                                                    </Link>
                                            </div>
                                            </div>

                            </div>
                            <div className="text-center">
                                <Link href="#_"  passHref>
                                        <a className="inline-flex items-center   text-black hover:text-gray-400 group ">
                                        <span className="hyperlink group-hover:text-gray-300">View All Resources</span>
                                        <svg className="w-5 h-6 mt-1 ml-2 group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                        </a>
                                    </Link>
                            </div>
                            </div>
                    </section>  {/* / Resources Setion */}
                {/* Cta Section */}
            <section className="bg-white">
                <div className="px-8 py-8 mx-auto sm:py-10 lg:py-20 max-w-7xl">
                <div className="relative py-6 overflow-hidden  bg-gradient-to-r from-black to-mines-400 lg:py-12 md:px-6 lg:p-16 lg:flex lg:items-center lg:justify-between md:shadow-xl md:bg-purple-1000">
                <div className="absolute top-0 right-0 hidden w-full -mt-20 transform rotate-45 translate-x-1/2 bg-white sm:block h-96 opacity-5"></div>
                <div className="absolute top-0 left-0 hidden w-full -mt-20 transform rotate-45 -translate-x-1/2 bg-white sm:block h-96 opacity-5"></div>
                <div className="relative p-6  md:p-0 md:pb-4">
                <h2 className="card-heading   leading-9 tracking-tight text-white sm:leading-10">Get started with your DXaaS Journey</h2>
                <p className="w-full mt-5 card-subheading text-white ">Start your 15-day free trial. No credit card required. No strings attached.</p>
                </div>
                <div className="relative flex flex-col items-center w-full px-6 space-y-5 md:space-x-5 md:space-y-0 md:flex-row md:w-auto lg:flex-shrink-0 md:px-0">
                <Link  href="/pricing" passHref><a className="button  inline-block py-3 px-10 bg-black hover:bg-gray-300 hover:text-black shadow button  uppercase text-white  rounded-r-xl rounded-b-xl transition duration-200 border-2 border-black">See Pricing</a></Link>
                  <Link  rel="noopener noreferrer" href="https://app.ktern.com" passHref><a target="_blank" className="button  inline-block py-3 px-10 bg-white hover:bg-gray-50 hover:text-black shadow button uppercase text-black  rounded-r-xl rounded-b-xl transition duration-200  border-2 border-black">Try it free</a></Link>
                </div>
                </div>
                </div>
            </section> 
              {/* /Cta Section */}
        </Layout>
    )
}