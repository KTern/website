import Layout from "../../../component/Layout";
export default function Video({ data,h_data,f_data }){
    return (
        <Layout h_data={h_data} f_data={f_data}>

        </Layout>
    )
}

export const getServerSideProps = async () => {
    // strapi data to be acquired
    const res = await fetch("https://api.ktern.com/resources");
    const data = await res.json();
        const res1 = await fetch('https://api.ktern.com/navbar', {
          method: 'get',
      });
    const h_data = await res1.json();
    const res2 = await fetch('https://api.ktern.com/footer', {
          method: 'get',
      });
      const f_data = await res2.json();
    return {
      props: {
        data: data,
        h_data: h_data,
      f_data:f_data},
    };
  };