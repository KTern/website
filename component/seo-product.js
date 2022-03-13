import { ProductJsonLd, SoftwareAppJsonLd } from 'next-seo';

export default function SEOProduct({product, seo, slogan, testimonials, ratingValue, reviewCount}) {
	return (
		<>
			{/* START: Product JSON LD */}
			<ProductJsonLd
				productName={product}
				images={[seo.ThumbnailImageURL]}
				description={seo.PageDescription}
				brand="KTern.AI"
				color="#f28900"
				slogan={slogan}
				disambiguatingDescription={seo.PageDescription}
				reviews={[
					{
						author: {
							type: 'Person',
							name: `${testimonials[0].author}`,
						},
						reviewBody: `${testimonials[0].statement}`,
						name: `${testimonials[1].statement}`,
						reviewRating: {
							bestRating: '5',
							ratingValue: '5',
							worstRating: '1',
						},
						publisher: {
							type: 'Organization',
							name: 'G2',
						},
					},
				]}
				aggregateRating={{
					ratingValue: ratingValue,
					reviewCount: reviewCount,
				}}
			/>
			{/* END: Product JSON LD  */}
			{/* START: Software JSON LD  */}
			<SoftwareAppJsonLd
				name={product}
				price="0"
				priceCurrency="USD"
				aggregateRating={{
					ratingValue: `${ratingValue}`,
					reviewCount: `${reviewCount}`,
				}}
				operatingSystem="Windows 10, Windows 11"
				applicationCategory="BusinessApplication"
			/>
			{/* END: Software JSON LD  */}
		</>
	);
}
