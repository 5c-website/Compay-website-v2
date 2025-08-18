import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import bannerImg from "../../../public/img/impact/classroom_bg.jpg";
import CompanyBanner from "../../components/CompanyBanner";
import PROne from "../../../public/img/classroom/class_2.png";
import PRTwo from "../../../public/img/classroom/class_3.png";
import PRThree from "../../../public/img/classroom/class_4.webp";
import PRFour from "../../../public/img/classroom/class_5.jpg";
import PRFive from "../../../public/img/classroom/class_6.png";
import BlogGridComponent from "../../components/BlogGridComponent";
import { useStrapiContent } from "../../hooks/use-strapi";
import { COLLECTION_TYPES } from "../../services/strapi";
import { extractCategories } from "../../utils/contentUtils";
import ContentGridComponent from "../../components/ContentGridComponent";

function Newsroom() {
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
    {
      category: "Press Release",
      title: "SPONSORSHIP, 5C NETWORK, AMERICAN GAMBITS",
      imageUrl: PRFive,
      redirectionURL:
        "https://www.linkedin.com/posts/kalyansivasailam_ok-heres-a-huge-announcement-thats-very-activity-7243864271225307137-iPH7?utm_source=share&utm_medium=member_ios",
    },
  ];

  const PRCategories = ["Latest", "Press Release", "Authored Article"];

  const {
    data: strapiNewsroom,
    loading,
    error,
  } = useStrapiContent(COLLECTION_TYPES.ARTICLES, {
    filters: {
      category: {
        name: {
          $eq: "newsroom",
        },
      },
    },
    populate: {
      category: true,
      cover: true,
      author: true,
    },
    sort: ["publishedAt:desc"],
  });

  const categoriesToShow = extractCategories(strapiNewsroom, true);

  const renderStaticNewsroom = () => (
    <BlogGridComponent
      section={"Newsroom"}
      comInformation={PRData}
      comCategories={PRCategories}
      isNewsRoom={true}
    />
  );

  const renderStrapiNewsroom = () => (
    <ContentGridComponent
      section={"Newsroom"}
      comInformation={strapiNewsroom ?? []}
      comCategories={categoriesToShow}
      isNewsRoom={false}
      loading={loading}
      error={error}
      useStrapiData={true}
      showCategories={true}
    />
  );
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
          {loading ? (
            <div className="w-[100%] flex flex-col justify-center items-center h-[50vh]">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1B3366]"></div>
            </div>
          ) : (
            <div className="w-[100%]">
              {Boolean(strapiNewsroom?.length)
                ? renderStrapiNewsroom()
                : renderStaticNewsroom()}
            </div>
          )}
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Newsroom;
