import Layout from "../../component/Layout";
import React from "react";
// import useDynTabs from "react-dyn-tabs";

export default function Videos({ h_data, f_data, data }) {
  let Tabs = [];
  data.tabs.forEach((ele) => {
    let tab = {};
    let subtabs = [];
    tab["id"] = ele.tabId;
    tab["title"] = ele.tabName;
    ele.subTabs.forEach((ele1) => {
      let videoList = [];
      let subtab = {};
      subtab["id"] = ele1.tabId;
      subtab["title"] = ele1.tabName;
      subtab["closable"] = false;
      data.videosList.forEach((video) => {
        if (video.tabId == ele.tabId && video.subTabId == ele1.tabId) {
          videoList = video.videos;
        }
      });
      // console.log(videoList[0])
      // console.log("Videos",ele.tabName,ele1.tabName,videoList)
      subtab["panelComponent"] = (porps) => {
        return (
          <div>
            {videoList.map((dt) => (
              <p key="dt">{dt.title}</p>
            ))}
          </div>
        );
      };
      subtabs.push(subtab);
    });
    tab["panelComponent"] = (porps) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [TabList2, PanelList2, ready2] = useDynTabs({
        tabs: subtabs,
        selectedTabID: subtabs[0].id,
      });
      return (
        <>
          <TabList2></TabList2>
          <PanelList2></PanelList2>
        </>
      );
    };
    tab["closable"] = false;
    Tabs.push(tab);
  });
  // console.log("Tbas",Tabs[0].panelComponent);

  const [TabList1, PanelList1, ready1] = useDynTabs({
    tabs: Tabs,
    selectedTabID: data.selectedTab,
  });
  return (
    <Layout h_data={h_data} f_data={f_data}>
      <div className="bg-bg">
        <section className="py-10  flex flex-col items-center justify-center">
          <h2 className="section-heading mb-4">{data.filterSection.heading}</h2>
          <p className="section-subheading text-gray-10">
            {data.filterSection.subheading}
          </p>
        </section>
        <section className="py-5 px-20 mx-auto flex flex-col items-center justify-center">
          <TabList1></TabList1>
          <div className="px-20">
            <PanelList1></PanelList1>
          </div>
        </section>
      </div>
    </Layout>
  );
}
export const getStaticProps = async () => {
  const res = await fetch("https://strapi.ktern.com/videos-library", {
    methos: "get",
  });
  const data = await res.json();
  // console.log("data",data);
  const res1 = await fetch("https://strapi.ktern.com/header", {
    method: "get",
  });
  const h_data = await res1.json();
  const res2 = await fetch("https://strapi.ktern.com/footer", {
    method: "get",
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
