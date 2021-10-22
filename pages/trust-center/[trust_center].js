import Layout from "../../component/Layout";
import Link from "next/link"
import { NextSeo } from 'next-seo';
import { BreadcrumbJsonLd } from 'next-seo';
import { LogoJsonLd } from 'next-seo';
import { SocialProfileJsonLd } from 'next-seo';
export default function TrustCenter ({trust_center}) {
    return (
        <>
            <NextSeo
                title="Simple Usage Example"
                description="A short description goes here."
                canonical="https://www.canonical.ie/"
                openGraph={{
                    url: 'https://www.url.ie/a',
                    title: 'Open Graph Title',
                                description: 'Open Graph Description',
                    images: [
                    {
                        url: 'https://www.example.ie/og-image-01.jpg',
                        width: 800,
                        height: 600,
                        alt: 'Og Image Alt',
                        type: 'image/jpeg',
                    },
                    {
                        url: 'https://www.example.ie/og-image-02.jpg',
                        width: 900,
                        height: 800,
                        alt: 'Og Image Alt Second',
                        type: 'image/jpeg',
                    },
                    { url: 'https://www.example.ie/og-image-03.jpg' },
                    { url: 'https://www.example.ie/og-image-04.jpg' },
                    ],
                    site_name: 'SiteName',
                }}
                twitter={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                }}
                facebook={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                    appId: '1234567890',
                }}
                languageAlternates={[{
                    hrefLang: 'de',
                    href: 'https://www.canonical.ie/de',
                } ]}
                additionalMetaTags={[{
                    property: 'dc:creator',
                    content: 'Jane Doe'
                    }, {
                    name: 'application-name',
                    content: 'NextSeo'
                    }, {
                    httpEquiv: 'x-ua-compatible',
                    content: 'IE=edge; chrome=1'
                    } ]}
                additionalLinkTags={[
                    {
                        rel: 'icon',
                        href: 'https://www.test.ie/favicon.ico',
                    },
                    {
                        rel: 'apple-touch-icon',
                        href: 'https://www.test.ie/touch-icon-ipad.jpg',
                        sizes: '76x76'
                    },
                    {
                        rel: 'manifest',
                        href: '/manifest.json'
                    }
                ]}
                 
    />
<BreadcrumbJsonLd
      itemListElements={[
        {
          position: 1,
          name: 'Books',
          item: 'https://example.com/books',
        },
        {
          position: 2,
          name: 'Authors',
          item: 'https://example.com/books/authors',
        },
        {
          position: 3,
          name: 'Ann Leckie',
          item: 'https://example.com/books/authors/annleckie',
        },
        {
          position: 4,
          name: 'Ancillary Justice',
          item: 'https://example.com/books/authors/ancillaryjustice',
        },
      ]}
    />
 <LogoJsonLd
      logo="http://www.your-site.com/images/logo.jpg"
      url="http://www.your-site.com"
    />
<SocialProfileJsonLd
      type="Person"
      name="your name"
      url="http://www.your-site.com"
      sameAs={[
        'http://www.facebook.com/your-profile',
        'http://instagram.com/yourProfile',
        'http://www.linkedin.com/in/yourprofile',
        'http://plus.google.com/your_profile',
      ]}
    />
        <Layout>
            {/* Header Section */}
          <section className="w-full py-28 bg-herogradient" >
            <div className="flex flex-col items-center px-12 mx-auto lg:flex-row">
                <div className="relative z-20 flex flex-col  w-full h-full ">
                 <p className="max-w-max px-2 py-1 mb-5  hyperlink text-gray-900 uppercase bg-gray-200 rounded-full ">
                    Trust Center Document
                </p>
                    <h1 className="heading text-white mb-5"  >Cloud Policy </h1>
                    <p className="subheading text-gray-100 pb-7">Find the information you need on cloud performance, security, privacy, and compliance.</p>
                    
                </div>

               
            </div>
            </section>



<section>
<div className="flex flex-wrap  px-16 ">
  <div className="w-full md:w-2/3 pr-10 mb-4 md:mb-0">
  <div className="max-w-full ">
  <div className="text-left mb-10">
            <p className="text-black hyperlink  mt-10">With Effect from 20 april, 8:30 am</p>
                            </div>
                             <h1 id="physical_security" className="anchor card-heading mb-6 text-left  text-black "> Physical Security </h1>
      
       
        <p className="mb-6 text-justify card-subheading  text-black">The KTern development center in Chennai is under 24x7 security protection, at both premises level and floor level to ensure only authorized individuals have access to the building and the KTern office. At the premises level, the building’s perimeter is secured by barriers and guards. At the floor level, security guards and smartcard readers are present to authorize individuals before entry. Employees are granted access to the office only after authorization using smart cards. Critical locations in the office are accessible only to authorized individuals.

Important documents are stored in cabinets that can only be accessed by pre-authorized individuals. The office is equipped with surveillance cameras and their footage is monitored periodically by authorized individuals. Fire alarms and water sprinklers are in place to detect and mitigate damage in the unlikely event of a fire. A policy has been implemented to approve and regulate visitor access to the building. The office is provided with 24x7 power supply, supported by an alternative uninterrupted power supply system to ensure smooth functioning in the event of power failure.

KTern hosts its application and data in industry-leading Google Cloud Platform, whose data centers have been thoroughly tested for security, availability and business continuity. For more details, please read the GCP Whitepaper, GCP Trust & Security and the Forrester Report on Data Security Portfolio Vendors.</p>
                            
                              <h1 id="application_security" className="anchor  card-heading mb-6 text-left  text-black"> Application Security </h1>
    
      
        <p className="mb-6 text-justify card-subheading text-black">All KTern products are hosted in Google Cloud Platform. The infrastructure for databases and application servers is managed and maintained by the cloud service provider.

At KTern, we take a multifaceted approach to application security, to ensure everything from engineering to deployment, including architecture and quality assurance processes complies with our highest standards of security.</p>
                            
                             <h1  id="application_architecture" className="anchor  card-heading mb-6 text-left  text-black"> Application Architecture </h1>
    
       
        <p className="mb-6 text-justify card-subheading text-black">The application is initially protected by GCP’s firewall which is equipped to counter regular DDoS attacks and other network related intrusions. The second layer of protection is KTern’s own application firewall which monitors against offending IPs, users and spam. While the application can be accessed only by users with valid credentials, it should be noted that security in cloud-based products is a shared responsibility between the company and the businesses who own those accounts on the cloud. It should be noted that all account passwords that are stored in the application are one-way hashed and salted.

KTern uses a multi-tenant data model to host all its applications. Each application is serviced from an individual virtual private cloud and each customer is uniquely identified by a tenant ID. The application is engineered and verified to ensure that it always fetches data only for the logged-in tenant. Per this design, no customer has access to another customer’s data. Access to the application by the KTern development team is also controlled, managed and audited. Access to the application and the infrastructure are logged for subsequent audits.

</p>
        
      </div>
  </div>
                    <div className="w-full md:w-1/3  my-28 ">
                        <div className="flex sm:space-x-2 md:space-x-10 justify-center items-center  sm:py-5 md:p-5 bg-white border-2  sticky z-10 md:top-16 sm:top-10 ">
                            <ul>
                                <li><Link href="#physical_security" passHref><a className="hyperlink uppercase">Physical Security</a></Link></li>
                                <li><Link href="#application_security" passHref><a className="hyperlink uppercase">Application Security</a></Link></li>
                                <li><Link href="#application_architecture" passHref><a className="hyperlink uppercase">Application Architecture</a></Link></li>
   </ul>
   </div>
  </div>
</div>
</section>


            
             
            
              </Layout>
</>

        
    )
}
// Return a list of possible value for trust_center
export const getStaticPaths = async () => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/users');
    // const data = await res.json();
    const data=[{trust_center:'eula'},{trust_center:'consulting-partner-agreement'},{trust_center:'security'},{trust_center:'privacy'},{trust_center:'gdpr'}]
    // console.log(data)
    const paths = data.map(trust_center => {
        return ({
            params:{trust_center:trust_center.trust_center}
        })
    })
    return {
        paths,
        fallback:false
    }
}
// Fetch necessary data for the blog post using params.trust_center
export const getStaticProps = async (context) => {
    const trust_center = context.params.trust_center;
    // const res = await fetch('https://jsonplaceholder.typicode.com/users/' + trust_center);
    // const data = await res.json();
    return {
        props:{data:trust_center}
    }
}