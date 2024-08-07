import React from "react";
import { Link, graphql } from "gatsby";
import Navbar from "../Utils/Navbar";
import leftdown from "../Assets/Solution/leftdown.svg";
import Navbarmd from "../Utils/Navbarmd";
import Footer from "../Utils/Footer";
import { Helmet } from "react-helmet";
import twoStar from "../Assets/Solution/two_star.svg";
import tablogo from "../Assets/Homepage/favicon.ico";


function Carrers({ data }) {
  const strapiContent = data.allStrapiCarrer.nodes[0];


  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{strapiContent.seo.metaTitle}</title>
        <meta name="google-site-verification" content="google3324f12ef9a97f3e" />
        <meta
          name="description"
          content={strapiContent.seo.metaDescription.data.metaDescription}
        />
        <link rel="icon" href={tablogo} type="image/x-icon" />
        {/* <meta name="author" content={author} /> */}
      </Helmet>
      <div className=" bg-black Homepage">

        <Navbar />
        {/* Mobile responsive */}

        <Navbarmd />
        <div
          className="carrers-home sm:p-[1rem]"
          style={{
            backgroundImage: `url(${strapiContent.homeimg.localFile.url})`,
          }}
        >
          <div className="max-w-full ml-auto mr-auto">
            <div className=" max-w-full relative w-[1200px] mt-[234px] sm:mt-[112px]">
              <h1 className="max-w-full uppercase mt-0 mb-0   font-use text-[#fff] tracking-[2px] leading-[100px] sm:ml-1 text-[80px] sm:text-[2.5rem]">
                {strapiContent.title}
              </h1>
              <div className="max-w-full mt-8 text-[#fff] w-[500px] ml-[100px] sm:ml-[10px] sm:mt-0  sm:w-[85%]">
                <p
                  className="mb-0 mt-0 leading-8  font-use  sm:text-xl text-[20px]"
                  style={{ color: "rgba(255, 255, 255, .85)" }}
                >
                  {strapiContent.titlecontent.data.titlecontent}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:p-[1rem] mt-[120px] sm:mt-[60px]">
          <div
            className="flex relative flex-col ml-auto mr-auto items-start"
            style={{ zIndex: "1", maxWidth: "1200px" }}
          >
            <h2 className=" uppercase mt-0 mb-0  font-use text-[#fff] tracking-[2px] text-[50px] leading-[60px] sm:ml-[10px] sm:text-[22px] sm:tracking-[1px]">
              {strapiContent.sectitle}
            </h2>
            <h2 className=" uppercase max-w-full mt-0 mb-0  font-use text-[#fff] text-[80px] tracking-[2px] leading-[100px] sm:text-[34px] sm:leading-[50px] sm:ml-[10px]">
              {strapiContent.secsubtitle}
            </h2>
            <div className=" absolute z-[-1] top-0 bottom-auto left-auto right-[2%] star-embed-down sm:hidden">
              <img src={leftdown}></img>
            </div>

            <div className=" mt-8 w-[800px] sm:ml-[10px] sm:w-[94%]">
              <p
                className=" mb-6 leading-8 mt-0 text-xl font-use"
                style={{ color: "rgba(255, 255, 255, .85)" }}
              >
                {strapiContent.content.data.content}
              </p>
              <div>
                <div>
                  <div>
                    <div className=" text-left  font-openings">
                      <h2
                        className="m-0 uppercase   font-use"
                        style={{
                          borderBottom: "1px solid #a0a0a0",
                          paddingBottom: "9px",
                          color: "#fff",
                          fontSize: "19px",
                          letterSpacing: "2px",
                          lineHeight: "60px",
                        }}
                      >
                        {strapiContent.openpositiontitle}
                      </h2>
                      <ul
                        className=" list-none m-0 text-xs"
                        style={{ padding: "10px 0 0 0" }}
                      >
                        <li
                          className=" clear-both m-0 list-none"
                          style={{ color: "#686868" }}
                        >
                          <div
                            className=" text-base  font-use"
                            style={{ color: "#fff" }}
                          >
                            {strapiContent.openposition[4].title}
                          </div>
                          <ul
                            className=" text-xs mt-0"
                            style={{
                              padding: "2px 20px 12px 20px",
                              borderBottom: "1px solid #d7d7d7",
                              marginBottom: "10px",
                            }}
                          >
                            <li
                              className=" list-none m-0 clear-both"
                              style={{ color: "#686868" }}
                            >
                              <Link
                                to="/careerscontact"
                                className=" openings-position"
                              >
                                {strapiContent.openposition[9].position}
                              </Link>
                              <span
                                className="float-right font-use"
                                style={{ paddingTop: "9px", color: "#fff" }}
                              >
                                {strapiContent.openposition[9].location}
                              </span>
                            </li>
                            <li
                              className=" list-none m-0 clear-both"
                              style={{ color: "#686868" }}
                            >
                              <Link
                                to="/careerscontact"
                                className=" openings-position"
                              >
                                {strapiContent.openposition[4].position}
                              </Link>
                              <span
                                className="float-right font-use"
                                style={{ paddingTop: "9px", color: "#fff" }}
                              >
                                {strapiContent.openposition[4].location}
                              </span>
                            </li>
                            <li
                              className=" list-none m-0 clear-both"
                              style={{ color: "#686868" }}
                            >
                              <Link
                                to="/careerscontact"
                                className=" openings-position"
                              >
                                {strapiContent.openposition[5].position}
                              </Link>
                              <span
                                className="float-right font-use"
                                style={{ paddingTop: "9px", color: "#fff" }}
                              >
                                {strapiContent.openposition[5].location}
                              </span>
                            </li>

                          </ul>
                        </li>
                        <li
                          className=" clear-both m-0 list-none"
                          style={{ color: "#686868" }}
                        >
                          <div
                            className=" text-base  font-use"
                            style={{ color: "#fff" }}
                          >
                            {strapiContent.openposition[0].title}
                          </div>
                          <ul
                            className=" text-xs mt-0"
                            style={{
                              padding: "2px 20px 12px 20px",
                              borderBottom: "1px solid #d7d7d7",
                              marginBottom: "10px",
                            }}
                          >
                            <li
                              className=" list-none m-0 clear-both"
                              style={{ color: "#686868" }}
                            >
                              <Link
                                to="/careerscontact"
                                className=" openings-position"
                              >
                                {strapiContent.openposition[0].position}
                              </Link>
                              <span
                                className="float-right font-use"
                                style={{ paddingTop: "9px", color: "#fff" }}
                              >
                                {strapiContent.openposition[0].location}
                              </span>
                            </li>
                          </ul>
                        </li>
                        <li
                          className=" clear-both m-0 list-none"
                          style={{ color: "#686868" }}
                        >
                          <div
                            className=" text-base  font-use"
                            style={{ color: "#fff" }}
                          >
                            {strapiContent.openposition[1].title}
                          </div>
                          <ul
                            className=" text-xs mt-0"
                            style={{
                              padding: "2px 20px 12px 20px",
                              borderBottom: "1px solid #d7d7d7",
                              marginBottom: "10px",
                            }}
                          >
                            <li
                              className=" list-none m-0 clear-both"
                              style={{ color: "#686868" }}
                            >
                              <Link
                                to="/careerscontact"
                                className=" openings-position"
                              >
                                {strapiContent.openposition[1].position}
                              </Link>
                              <span
                                className="float-right font-use"
                                style={{ paddingTop: "9px", color: "#fff" }}
                              >
                                {strapiContent.openposition[1].location}
                              </span>
                            </li>
                          </ul>
                        </li>
                        <li
                          className=" clear-both m-0 list-none"
                          style={{ color: "#686868" }}
                        >
                          <div
                            className=" text-base  font-use"
                            style={{ color: "#fff" }}
                          >
                            {strapiContent.openposition[2].title}
                          </div>
                          <ul
                            className=" text-xs mt-0"
                            style={{
                              padding: "2px 20px 12px 20px",
                              borderBottom: "1px solid #d7d7d7",
                              marginBottom: "10px",
                            }}
                          >
                            <li
                              className=" list-none m-0 clear-both"
                              style={{ color: "#686868" }}
                            >
                              <Link
                                to="/careerscontact"
                                className=" openings-position"
                              >
                                {strapiContent.openposition[3].position}
                              </Link>
                              <span
                                className="float-right font-use"
                                style={{ paddingTop: "9px", color: "#fff" }}
                              >
                                {strapiContent.openposition[3].location}
                              </span>
                            </li>
                            <li
                              className=" list-none m-0 clear-both"
                              style={{ color: "#686868" }}
                            >
                              <Link
                                to="/careerscontact"
                                className=" openings-position"
                              >
                                {strapiContent.openposition[2].position}
                              </Link>
                              <span
                                className="float-right font-use"
                                style={{ paddingTop: "9px", color: "#fff" }}
                              >
                                {strapiContent.openposition[2].location}
                              </span>
                            </li>
                          </ul>
                        </li>

                        <li
                          className=" clear-both m-0 list-none"
                          style={{ color: "#686868" }}
                        >
                          <div
                            className=" text-base  font-use"
                            style={{ color: "#fff" }}
                          >
                            {strapiContent.openposition[6].title}
                          </div>
                          <ul
                            className=" text-xs mt-0"
                            style={{
                              padding: "2px 20px 12px 20px",
                              borderBottom: "1px solid #d7d7d7",
                              marginBottom: "10px",
                            }}
                          >
                            <li
                              className=" list-none m-0 clear-both"
                              style={{ color: "#686868" }}
                            >
                              <Link
                                to="/careerscontact"
                                className=" openings-position"
                              >
                                {strapiContent.openposition[6].position}
                              </Link>
                              <span
                                className="float-right font-use"
                                style={{ paddingTop: "9px", color: "#fff" }}
                              >
                                {strapiContent.openposition[6].location}
                              </span>
                            </li>
                          </ul>
                        </li>
                        <li
                          className=" clear-both m-0 list-none"
                          style={{ color: "#686868" }}
                        >
                          <div
                            className=" text-base  font-use"
                            style={{ color: "#fff" }}
                          >
                            {strapiContent.openposition[7].title}
                          </div>
                          <ul
                            className=" text-xs mt-0"
                            style={{
                              padding: "2px 20px 12px 20px",
                              borderBottom: "1px solid #d7d7d7",
                              marginBottom: "10px",
                            }}
                          >
                            <li
                              className=" list-none m-0 clear-both"
                              style={{ color: "#686868" }}
                            >
                              <Link
                                to="/careerscontact"
                                className=" openings-position"
                              >
                                {strapiContent.openposition[7].position}
                              </Link>
                              <span
                                className="float-right font-use"
                                style={{ paddingTop: "9px", color: "#fff" }}
                              >
                                {strapiContent.openposition[7].location}
                              </span>
                            </li>
                          </ul>
                        </li>
                        <li
                          className=" clear-both m-0 list-none"
                          style={{ color: "#686868" }}
                        >
                          <div
                            className=" text-base  font-use"
                            style={{ color: "#fff" }}
                          >
                            {strapiContent.openposition[8].title}
                          </div>
                          <ul
                            className=" text-xs mt-0"
                            style={{
                              padding: "2px 20px 12px 20px",
                              borderBottom: "1px solid #d7d7d7",
                              marginBottom: "10px",
                            }}
                          >
                            <li
                              className=" list-none m-0 clear-both"
                              style={{ color: "#686868" }}
                            >
                              <Link
                                to="/careerscontact"
                                className=" openings-position"
                              >
                                {strapiContent.openposition[8].position}
                              </Link>
                              <span
                                className="float-right font-use"
                                style={{ paddingTop: "9px", color: "#fff" }}
                              >
                                {strapiContent.openposition[8].location}
                              </span>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" overflow-hidden pr-4 pl-4 sm:pl-2 sm:pr-2 mt-[240px] sm:mt-28 sm:p-[1rem]">
          <div
            className=" relative flex flex-col items-start ml-auto mr-auto"
            style={{ zIndex: "1", maxWidth: "1200px" }}
          >
            <div className="absolute z-[-1] w-[342px] flex top-0 bottom-auto left-auto right-[2%] sm:hidden">
              <img src={twoStar} alt="effects"></img>
              <img src={twoStar} alt="effects"></img>
            </div>
            <div className=" absolute z-[-1] top-[11%] bottom-auto left-auto right-0 star-embed-down sm:hidden">
              <img src={leftdown}></img>
            </div>
            <div>
              <h1 className="uppercase mt-0 mb-0   font-use text-[#fff] tracking-[2px] text-[50px] leading-[60px] sm:ml-[10px] sm:text-[22px] sm:tracking-[1px]">
                {strapiContent.buildtitle}
              </h1>
              <h1 className="max-w-full uppercase mt-0 mb-0   font-use text-[#fff] text-[80px] tracking-[2px] leading-[100px] sm:text-[34px] sm:leading-[20px] sm:ml-[10px]">
                {strapiContent.buildsubtitle}
              </h1>
            </div>
            <div className="flex flex-col items-start mt-8 w-[800px] sm:ml-[10px] sm:w-[96%]">
              <p
                className=" mb-0 leading-8 mt-0 text-xl font-use"
                style={{ color: "rgba(255, 255, 255, .85)" }}
              >
                {strapiContent.buildpara.data.buildpara}
              </p>
            </div>
            <div className="carrer-grid sm:mb-0">
              <div
                className=" w-full max-w-full justify-start flex items-start"
                style={{ height: "179px" }}
              >
                <img
                  src={strapiContent.buildimg[0].localFile.url}
                  className="max-w-full inline-block align-middle mr-6"
                  style={{ width: "70px", height: "70px" }}
                ></img>
                <div className="w-full max-w-full">
                  <div
                    className=" uppercase text-2xl  leading-7 font-use"
                    style={{ letterSpacing: "3px", color: "#fff" }}
                  >
                    {strapiContent.build[0].title}
                  </div>
                  <p
                    className=" w-full mb-0 text-xl leading-8  font-use"
                    style={{
                      maxWidth: "450px",
                      color: "rgba(255, 255, 255, .95)",
                      marginTop: "22px",
                    }}
                  >
                    {strapiContent.build[0].content.data.content}
                  </p>
                </div>
              </div>
              <div
                className=" w-full max-w-full justify-start flex items-start"
                style={{ height: "179px" }}
              >
                <img
                  src={strapiContent.buildimg[1].localFile.url}
                  className="max-w-full inline-block align-middle mr-6"
                  style={{ width: "70px", height: "70px" }}
                ></img>
                <div className="w-full max-w-full">
                  <div
                    className=" uppercase text-2xl  leading-7 font-use"
                    style={{ letterSpacing: "3px", color: "#fff" }}
                  >
                    {strapiContent.build[1].title}
                  </div>
                  <p
                    className=" w-full mb-0 text-xl leading-8  font-use"
                    style={{
                      maxWidth: "450px",
                      color: "rgba(255, 255, 255, .95)",
                      marginTop: "22px",
                    }}
                  >
                    {strapiContent.build[1].content.data.content}
                  </p>
                </div>
              </div>
              <div
                className=" w-full max-w-full justify-start flex items-start"
                style={{ height: "179px" }}
              >
                <img
                  src={strapiContent.buildimg[2].localFile.url}
                  className="max-w-full inline-block align-middle mr-6"
                  style={{ width: "70px", height: "70px" }}
                ></img>
                <div className="w-full max-w-full">
                  <div
                    className=" uppercase text-2xl  leading-7 font-use"
                    style={{ letterSpacing: "3px", color: "#fff" }}
                  >
                    {strapiContent.build[2].title}
                  </div>
                  <p
                    className=" w-full mb-0 text-xl leading-8  font-use"
                    style={{
                      maxWidth: "450px",
                      color: "rgba(255, 255, 255, .95)",
                      marginTop: "22px",
                    }}
                  >
                    {strapiContent.build[2].content.data.content}
                  </p>
                </div>
              </div>
              <div
                className=" w-full max-w-full justify-start flex items-start"
                style={{ height: "179px" }}
              >
                <img
                  src={strapiContent.buildimg[3].localFile.url}
                  className="max-w-full inline-block align-middle mr-6"
                  style={{ width: "70px", height: "70px" }}
                ></img>
                <div className="w-full max-w-full">
                  <div
                    className=" uppercase text-2xl  leading-7 font-use"
                    style={{ letterSpacing: "3px", color: "#fff" }}
                  >
                    {strapiContent.build[3].title}
                  </div>
                  <p
                    className=" w-full mb-0 text-xl leading-8  font-use"
                    style={{
                      maxWidth: "450px",
                      color: "rgba(255, 255, 255, .95)",
                      marginTop: "22px",
                    }}
                  >
                    {strapiContent.build[3].content.data.content}
                  </p>
                </div>
              </div>
              <div
                className=" w-full max-w-full justify-start flex items-start"
                style={{ height: "179px" }}
              >
                <img
                  src={strapiContent.buildimg[4].localFile.url}
                  className="max-w-full inline-block align-middle mr-6"
                  style={{ width: "70px", height: "70px" }}
                ></img>
                <div className="w-full max-w-full">
                  <div
                    className=" uppercase text-2xl  leading-7 font-use"
                    style={{ letterSpacing: "3px", color: "#fff" }}
                  >
                    {strapiContent.build[4].title}
                  </div>
                  <p
                    className=" w-full mb-0 text-xl leading-8  font-use"
                    style={{
                      maxWidth: "450px",
                      color: "rgba(255, 255, 255, .95)",
                      marginTop: "22px",
                    }}
                  >
                    {strapiContent.build[4].content.data.content}
                  </p>
                </div>
              </div>
              <div
                className=" w-full max-w-full justify-start flex items-start"
                style={{ height: "179px" }}
              >
                <img
                  src={strapiContent.buildimg[5].localFile.url}
                  className="max-w-full inline-block align-middle mr-6"
                  style={{ width: "70px", height: "70px" }}
                ></img>
                <div className="w-full max-w-full">
                  <div
                    className=" uppercase text-2xl  leading-7 font-use"
                    style={{ letterSpacing: "3px", color: "#fff" }}
                  >
                    {strapiContent.build[5].title}
                  </div>
                  <p
                    className=" w-full mb-0 text-xl leading-8  font-use"
                    style={{
                      maxWidth: "450px",
                      color: "rgba(255, 255, 255, .95)",
                      marginTop: "22px",
                    }}
                  >
                    {strapiContent.build[5].content.data.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer data={data.allStrapiFooter.nodes[0]} />
      </div>
    </>
  );
}

export default Carrers;

export const pageQuery = graphql`
  query MyQuery {
    allStrapiCarrer {
      nodes {
        seo {
          metaTitle
          metaDescription {
            data {
              metaDescription
            }
          }
        }
        title
        titlecontent {
          data {
            titlecontent
          }
        }
        homeimg {
          localFile {
            url
          }
        }
        sectitle
        secsubtitle
        content {
          data {
            content
          }
        }
        openpositiontitle
        openposition {
          title
          position
          location
        }
        buildtitle
        buildsubtitle
        buildpara {
          data {
            buildpara
          }
        }
        build {
          title
          content {
            data {
              content
            }
          }
        }
        buildimg {
          localFile {
            url
          }
        }
        getintouch
      }
    }
    allStrapiFooter {
      nodes {
        Footer_Video {
          localFile {
            url
          }
        }
        X {
          localFile {
            url
          }
        }
        X_Url
        facebook {
          localFile {
            url
          }
        }
        facebook_Url
        instagram {
          localFile {
            url
          }
        }
        instagram_Url
        linkedin {
          localFile {
            url
          }
        }
        linkedin_Url
        title
        content
      }
    }
  }
`;
