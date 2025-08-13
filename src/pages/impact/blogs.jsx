import React from "react";
import Navbar from "../../components/Navbar";
import CompanyBanner from "../../components/CompanyBanner";
import BannerImg from "../../../public/img/impact/blog_banner.png";
import Footer from "../../components/Footer";
import ContentGridComponent from "../../components/ContentGridComponent";
import { useStrapiContent } from "../../hooks/use-strapi";
import { COLLECTION_TYPES } from "../../services/strapi";
import { extractCategories } from "../../utils/contentUtils";

function Blogs() {
  const {
    data: strapiBlogs,
    loading,
    error,
  } = useStrapiContent(COLLECTION_TYPES.ARTICLES, {
    filters: {
      category: {
        name: {
          $eq: "blogs",
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

  const categoriesToShow = extractCategories(strapiBlogs, true);

  return (
    <>
      <div>
        <header>
          <Navbar />
        </header>
      </div>
      <div className="w-[100%] flex flex-col justify-center items-center pt-[90px]">
        {/* <div className="w-[100%] px-4 md:px-10">
          <CompanyBanner
            img={BannerImg}
            heading={"Blogs"}
            containerClassName={"items-center md:items-start"}
            contentClassName={"flex items-center"}
          />
        </div> */}
        <div className="w-[100%]">
          <ContentGridComponent
            section={"Blogs"}
            comInformation={strapiBlogs || []}
            comCategories={categoriesToShow}
            isNewsRoom={false}
            loading={loading}
            error={error}
            useStrapiData={true}
            showCategories={true}
          />
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Blogs;
