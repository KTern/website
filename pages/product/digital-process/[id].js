import Layout from "../../../component/Layout"
import Head from "next/head"
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from 'nextjs-breadcrumbs';
const Feature_Landing = ({data}) => {
    return (
        <>
          {data}
         </>
    )
}

// Return a list of possible value for id
export const getStaticPaths = async () => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/users');
    // const data = await res.json();
    // Must contain page names /custom-cde-rememdiation
    const data=[{id:'digital-maps'},{id:'digital-process'},{id:'digital-projects'},{id:'digital-maps'},{id:'digital-labs'}]
    // console.log(data)
    const paths = data.map(feature => {
        return ({
            params:{id:feature.id}
        })
    })
    return {
        paths,
        fallback:false
    }
}
// Fetch necessary data for the blog post using params.id
export const getStaticProps = async (context) => {
    const id = context.params.id;
    // const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    // const data = await res.json();
    return {
        props:{data:id}
    }
}
export default Feature_Landing;