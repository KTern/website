import Layout from "../../component/Layout";
export default function TrustCenter () {
    return (
        <Layout>
            {/* Header Section */}
          <section className="w-full py-28 bg-herogradient" >
            <div className="flex flex-col items-center px-12 mx-auto lg:flex-row">
                <div className="relative z-20 flex flex-col  w-full h-full ">
                 <p className="w-52 inline-block px-2 py-1 mb-5  hyperlink text-gray-900 uppercase bg-gray-200 rounded-full ">
                    Trust Center Document
                </p>
                    <h1 className="heading text-white mb-5"  >Cloud Policy </h1>
                    <p className="subheading text-gray-100 pb-7">Find the information you need on cloud performance, security, privacy, and compliance.</p>
                    
                </div>

               
            </div>
            </section>



<section>
<div className="flex flex-wrap mx-20">
  <div className="w-full md:w-2/3  mb-4 md:mb-0">
  <div className="max-w-full ">
  <div className="text-left mb-10">
            <p className="text-black hyperlink  mt-10">With Effect from 20 april, 8:30 am</p>
          </div>
          <section id="section-1">
        <h1 className=" card-heading mb-6 text-left  text-black "> Physical Security </h1>
        <p className="mb-6 text-justify card-subheading  text-black">The KTern development center in Chennai is under 24x7 security protection, at both premises level and floor level to ensure only authorized individuals have access to the building and the KTern office. At the premises level, the building’s perimeter is secured by barriers and guards. At the floor level, security guards and smartcard readers are present to authorize individuals before entry. Employees are granted access to the office only after authorization using smart cards. Critical locations in the office are accessible only to authorized individuals.

Important documents are stored in cabinets that can only be accessed by pre-authorized individuals. The office is equipped with surveillance cameras and their footage is monitored periodically by authorized individuals. Fire alarms and water sprinklers are in place to detect and mitigate damage in the unlikely event of a fire. A policy has been implemented to approve and regulate visitor access to the building. The office is provided with 24x7 power supply, supported by an alternative uninterrupted power supply system to ensure smooth functioning in the event of power failure.

KTern hosts its application and data in industry-leading Google Cloud Platform, whose data centers have been thoroughly tested for security, availability and business continuity. For more details, please read the GCP Whitepaper, GCP Trust & Security and the Forrester Report on Data Security Portfolio Vendors.</p>
        </section>
        <div id="section-2">
        <h1 className=" card-heading mb-6 text-left  text-black"> Application Security </h1>
        <p className="mb-6 text-justify card-subheading text-black">All KTern products are hosted in Google Cloud Platform. The infrastructure for databases and application servers is managed and maintained by the cloud service provider.

At KTern, we take a multifaceted approach to application security, to ensure everything from engineering to deployment, including architecture and quality assurance processes complies with our highest standards of security.</p>
        </div>
        <div id="section-3">
        <h1 className=" card-heading mb-6 text-left  text-black"> Application Architecture </h1>
        <p className="mb-6 text-justify card-subheading text-black">The application is initially protected by GCP’s firewall which is equipped to counter regular DDoS attacks and other network related intrusions. The second layer of protection is KTern’s own application firewall which monitors against offending IPs, users and spam. While the application can be accessed only by users with valid credentials, it should be noted that security in cloud-based products is a shared responsibility between the company and the businesses who own those accounts on the cloud. It should be noted that all account passwords that are stored in the application are one-way hashed and salted.

KTern uses a multi-tenant data model to host all its applications. Each application is serviced from an individual virtual private cloud and each customer is uniquely identified by a tenant ID. The application is engineered and verified to ensure that it always fetches data only for the logged-in tenant. Per this design, no customer has access to another customer’s data. Access to the application by the KTern development team is also controlled, managed and audited. Access to the application and the infrastructure are logged for subsequent audits.

</p>
        </div>
      </div>
  </div>
  <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0 ">
   
  </div>
</div>
</section>


            
             
            
              </Layout>


        
    )
}