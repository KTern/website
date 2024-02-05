export default function ScheduleDemo({ h_data, f_data }) {
  return (
    <>
      <div className="flex justify-center px-2 items-center">
        <iframe
          style={{
            height: 'calc(130vh)',
            width: 'calc(130vw)',
          }}
          src="https://outlook.office365.com/owa/calendar/DigitalTransformationExpertSession@kaartech.com/bookings/"
          title="Calender book"
          frameBorder="0"
          scrolling="yes"
          allow="accelerometer;loop; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
export const getStaticProps = async () => {
  // data url from strapi
  let res = await fetch('https://strapi.ktern.com/pricing', {
    method: 'get',
  });
  let data = await res.json();
  // console.log(data);
  const res1 = await fetch('https://strapi.ktern.com/header', {
    method: 'get',
  });
  const h_data = await res1.json();
  const res2 = await fetch('https://strapi.ktern.com/footer', {
    method: 'get',
  });
  const f_data = await res2.json();

  return {
    props: {
      data: data,
      h_data: h_data,
      f_data: f_data,
    },
  };
};
