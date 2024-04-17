/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable quotes */
import Link from 'next/link';
import { BreadcrumbJsonLd } from 'next-seo';
import React from 'react';
/* eslint-disable react/prop-types */

export default function Breadcrumbs({ breadcrumb }) {
  // Breadcrumb JSON LD
  const breadcrumbs = [];
  // eslint-disable-next-line array-callback-return
  breadcrumb.map((dt) => {
    breadcrumbs.push({ position: dt.position, name: dt.name, item: dt.item });
  });

  return <>
    {/* START: Breadcrumbs JSON LD  */}
    <BreadcrumbJsonLd itemListElements={breadcrumbs} />
    {/* END: Breadcrumbs JSON LD  */}
    {/* START: Breadcrumbs  */}
    <section className="flex flex-wrap text-gray-400">
      {breadcrumbs.map((dt, index) => (
        <div className="" key="dt">
          {index < breadcrumbs.length - 1 && (
            (<Link href={dt.item} passHref className={`hyperlink mr-3 opacity-70 `}>

              {dt.name}&nbsp;&nbsp;{index < breadcrumbs.length - 1 && '/'}

            </Link>)
          )}
          {index >= breadcrumbs.length - 1 && (
            <p className={`hyperlink`}>
              {dt.name} {index < breadcrumbs.length - 1 && '/'}
            </p>
          )}
        </div>
      ))}
    </section>
    {/* END: Breadcrumbs  */}
  </>;
}
