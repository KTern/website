import Link from "next/link";
export default function BreadCrumb({ b_data ,color}) {
  return (
    <section className="flex">
      {b_data.map((dt, index) => (
          <div className="flex space-x-4" key="dt">
        {index<b_data.length-1 && <Link href={dt.item} passHref>
          <a className={`hyperlink mr-3 text-gray-400 `}>{dt.name}&nbsp;&nbsp;{index<(b_data.length-1)&& "/"}</a>
        </Link>}
        {index>=b_data.length-1 && 
          <p className={`hyperlink text-${color}`}>{dt.name} {index<(b_data.length-1)&& "/"}</p>
        }
        </div>
      ))}
    </section>
  );
}
