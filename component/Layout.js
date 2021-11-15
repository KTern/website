import Header from "./header";
import Footer from "./footer";
export default function Layout ({ children ,h_data}) {
    // console.log("Layout",h_data)
    return (
        <div className="relative ">
            
            <Header h_data={h_data} />
            <br/>
            <div>
                 {children}
            </div>
           
            <Footer/>
        </div>
    )
}

export const getServerSideProps = async () => {
	const res = await fetch('https://api.ktern.com/navbar', {
		method: 'get',
	});
	const data = await res.json();
	console.log('data', data);
	return {
		props: {
			h_data: data,
		},
	};
};