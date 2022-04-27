/* eslint-disable camelcase */
import Layout from '../../../component/Layout';
/* eslint-disable react/prop-types */

export default function Certificate({
  heroData,
  candidateData,
  candidate,
  headerData,
  footerData,
}) {
  const certificateData = candidateData[candidate];
  return (
    <Layout h_data={headerData} f_data={footerData}>
      <section className="relative  overflow-hidden pt-24 bg-gradient-to-b from-purple-900 via-blue-900 to-purple-500">
        <div className="relative top-0 left-0 z-0 h-full mx-auto opacity-25">
          <div className="relative opacity-50">
            <div className="absolute left-0 w-full h-56 -mt-20 -mt-48 -ml-48 transform -rotate-45 bg-purple-200 rounded-l-lg opacity-25 sm:-ml-56" />
            <div className="absolute w-full h-64 min-w-full -mt-2 -ml-6 transform -rotate-45 bg-indigo-200 rounded-l-lg opacity-25 sm:-ml-32 sm:mt-20" />
            <div className="absolute left-0 w-full h-64 mt-24 ml-64 transform -rotate-45 bg-blue-200 rounded-lg rounded-l-lg opacity-25 third" />
          </div>
        </div>
        <div className="relative z-10 max-w-3xl px-12 mx-auto space-y-6 text-center lg:px-0">
          <div className="sm:text-center">
            <span
              className={
                'p-1 text-xs uppercase rounded tag-dxaas text-white font-semibold'
              }
            >
              {heroData.Tag}
            </span>
          </div>
          <h1 className="text-5xl font-black text-white ibm-plex">
            {heroData.Heading}
          </h1>
          <p className="text-lg font-medium text-gray-200">
            {heroData.SubHeading}
          </p>
          <p className="text-gray-200">
            <strong>Name:</strong> {certificateData.Name} <br />
            <strong>Role:</strong>
            {certificateData.Role}
          </p>
        </div>
        <div className="relative z-30 max-w-4xl px-4 mx-auto mt-16 lg:px-0">
          <img
            className="rounded-t-lg shadow-2xl"
            src={certificateData.CertificateImageURL}
            alt=""
          />
        </div>
      </section>
    </Layout>
  );
}

export const getServerSideProps = async (ctx) => {
  const { event } = ctx.params;
  let candidate = ctx.params.id;
  candidate -= 1;
  const res = await fetch(`https://api.ktern.com/certifcates?slug=${event}`, {
    method: 'get',
  });
  const data = await res.json();
  if (data[0] === undefined) {
    ctx.res.setHeader('Location', '/404');
    ctx.res.statusCode = 302;
    ctx.res.end();
  }
  const res1 = await fetch('https://api.ktern.com/header', {
    method: 'get',
  });
  const h_data = await res1.json();
  const res2 = await fetch('https://api.ktern.com/footer', {
    method: 'get',
  });
  const f_data = await res2.json();

  return {
    props: {
      pageData: data[0],
      heroData: data[0].NoImageHero,
      candidateData: data[0].CertificateCandidates,
      candidate,
      headerData: h_data,
      footerData: f_data,
    },
  };
};
