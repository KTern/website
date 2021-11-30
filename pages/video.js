import Layout from "../component/Layout";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from 'next-seo';
import { BreadcrumbJsonLd } from 'next-seo';
import { LogoJsonLd } from 'next-seo';
import { SocialProfileJsonLd } from 'next-seo';

export default function Webinar ({data,h_data,f_data}) {
    return (
        <>
        </>
    )}

    
export const getServerSideProps = async () => {
    // data url from strapi
    
    
    // data url from strapi)
    const res = await fetch("https://api.ktern.com/all-webinars",{method:'get'});
    const data = await res.json();
    // console.log("data", data)
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
            f_data:f_data
        }
    }
}