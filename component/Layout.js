import Navbar from "./navbar";
import Footer from "./footer";
export default function Layout({ children, h_data, f_data }) {
  //  console.log("Layout",h_data)
  return (
    <div className="relative ">
      <Navbar h_data={h_data} />
      <br />
      <div>{children}</div>

      <Footer f_data={f_data} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://strapi.ktern.com/header", {
    method: "get",
  });
  const data = await res.json();
  // console.log('data', data);
  return {
    props: {
      h_data: data,
    },
  };
};
