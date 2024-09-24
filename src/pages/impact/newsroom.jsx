import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import bannerImg from "../../../public/img/impact/classroom_bg.jpg";
import CompanyBanner from "../../components/CompanyBanner";
import GridComponent from "../../components/GridComponent";
import PROne from "../../../public/img/classroom/class_2.png";
import PRTwo from "../../../public/img/classroom/class_3.png";
import PRThree from "../../../public/img/classroom/class_4.webp";
import PRFour from "../../../public/img/classroom/class_5.jpg";

function newsroom() {
  const isMobileDevice = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth <= 768;
    }
    return false;
  };
  const PRData = [
    {
      category: "Press Release",
      title:
        "TATA 1MG-BACKED DIGITAL DIAGNOSTICS STARTUP 5C NETWORK RAISES $4.6 MN",
      imageUrl: PROne,
      redirectionURL:
        "https://inc42.com/buzz/tata-1mg-backed-digital-diagnostics-startup-5c-network-raises-4-6-mn-dollar/",
    },
    {
      category: "Authored Article",
      title: "TATA 1MG-BACKED 5C NETWORK ACQUIRES HEALTHTECH STARTUP KRAYEN",
      imageUrl: PRTwo,
      redirectionURL:
        "https://inc42.com/buzz/tata-1mg-backed-5c-network-acquires-healthtech-startup-krayen/",
    },
    {
      category: "Press Release",
      title: "YOHO, 5C NETWORK, OPTIQ.AI RAISE EARLY-STAGE DEALS",
      imageUrl: PRThree,
      redirectionURL:
        "https://yourstory.com/2022/10/funding-roundup-yoho-5c-network-optiqai-raise-early-stage-deals",
    },
    {
      category: "Authored Article",
      title:
        "AI CAN'T REPLACE A DOCTOR, NOT YET: CAUTIONS OPTIMISM, CONCERN OVER NEW TECH IN INDIAN HEALTHCARE",
      imageUrl: PRFour,
      redirectionURL:
        "https://scroll.in/article/1050076/ai-cant-replace-a-doctor-not-yet-cautious-optimism-concern-over-new-tech-in-indian-healthcaree",
    },
  ];

  const PRCategories = ["Latest", "Press Release", "Authored Article"];

  return (
    <>
      <div>
        <header>
          <Navbar />
        </header>
      </div>
      <div className="w-[100%] flex flex-col justify-center items-center pt-[90px]">
        <div className="w-[100%] px-4 md:px-10">
          <CompanyBanner
            img={bannerImg}
            heading={"Newsroom"}
            containerClassName={"items-center md:items-start"}
            contentClassName={"flex items-center"}
          />
        </div>
        <div className="w-[100%]">
          <GridComponent
            section={"Newsroom"}
            comInformation={PRData}
            comCategories={PRCategories}
            isNewsRoom={true}
          />
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default newsroom;
