import Link from "next/link"
export default function BreadCrumb({b_data}){
    return (
        <section className="flex">
{b_data.map((dt)=>(<Link href={dt.item} key="dt"><a>{dt.name}</a></Link>))}
        </section>
    )
}