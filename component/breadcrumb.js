import Link from 'next/link';
/* eslint-disable react/prop-types */

export default function BreadCrumb({ b_data, color }) {
  return (
    <section className="flex flex-wrap">
      {b_data.map((dt, index) => (
        <div className="" key="dt">
          {index < b_data.length - 1 && (
            <Link href={dt.item} passHref>
              <a className={`hyperlink mr-3 text-${color} opacity-70 `}>
                {dt.name}&nbsp;&nbsp;{index < b_data.length - 1 && '/'}
              </a>
            </Link>
          )}

          {index >= b_data.length - 1 && (
            <p className={`hyperlink text-${color}`}>
              {dt.name} {index < b_data.length - 1 && '/'}
            </p>
          )}
        </div>
      ))}
    </section>
  );
}
