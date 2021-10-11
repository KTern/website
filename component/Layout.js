import Header from "./header";
// import Footer from "./footer";
export default function Layout ({ children }) {
    return (
        <div className="relative ">
            
            <Header  />
            <br/>
            <div>
                 {children}
            </div>
           
            {/* <Footer/> */}
        </div>
    )
}