import React from "react";
import { Link, graphql } from "gatsby";
import Navbar from "../Utils/Navbar";
import Navbarmd from "../Utils/Navbarmd";
import Footer from "../Utils/Footer";
import "../styles/global.css";
import tablogo from "../Assets/Homepage/favicon.ico";
import { Helmet } from "react-helmet";

function Solutions({ data }) {
  const strapiContent = data.allStrapiSolution.nodes[0];


  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Features</title>
        <meta
          name="description"
          content='Discover 5C Network, where cutting-edge features help deliver highly precise radiology reports. We ensure that our platform is constantly updated, regularly revisiting and refreshing its features. This ensures that healthcare professionals always have the latest information at their fingertips, empowering them to make informed decisions and deliver optimal care to patients'
        />
                  <meta name="google-site-verification" content="google3324f12ef9a97f3e" />

        <link rel="icon" href={tablogo} type="image/x-icon" />
        {/* <meta name="author" content={author} /> */}
      </Helmet>
      <div className=" bg-black Homepage">
        {/* navbar */}

        <a
          href="https://play.google.com/store/apps/details?id=db.com.a5c"
          class="outer inline-block ml-6 text-base align-top absolute uppercase cursor-pointer top-0 bottom-auto left-auto right-0 z-[1] mobile-screen-signin"
        >
          <span class="inner"></span>
          <span class="inner"></span>
          <span class="inner"></span>
          <span class="inner"></span>
          Sign In
        </a>
        <Navbar />
        {/* Mobile responsive */}

        <Navbarmd />
        {/* hero section */}
        <div
          className=" h-screen justify-start flex flex-col items-center bg-no-repeat homepage-solution"
          style={{
            backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/kronos-6c72a.appspot.com/o/238a8476-ec33-4a56-a9a0-54b603df830a.jpg?alt=media&token=e996a287-7cb3-4756-a5bf-bd3d1a468ba1')`,
          }}
        >
          <div className="max-w-full ml-auto mr-auto">
            <div className="max-w-full relative w-[1200px] mt-[234px] sm:h-auto sm:mt-0 hero-section-solution">
              <h1 className="max-w-full uppercase mt-0 mb-0 font-normal text-[#fff] tracking-[2px] text-[80px] leading-[100px] font-use solution-title">
                Features
              </h1>
              <div className="max-w-full mt-8 w-[500px] ml-[100px] content-solution-container">
                <p className="mb-0 mt-0 font-use-one text-xl text-[#ffffffd6] content-solution">
                Discover 5C Network, where cutting-edge features help deliver highly precise radiology reports. We ensure that our platform is constantly updated, regularly revisiting and refreshing its features. This ensures that healthcare professionals always have the latest information at their fingertips, empowering them to make informed decisions and deliver optimal care to patient </p>              </div>
              <div className="relative flex w-full max-w-full justify-around  solutions-home-container">
                <Link
                  to="/urgentflow"
                  className=" font-medium uppercase text-lg  font-use text-[#fff] tracking-[2px] leading-[21px] bg-[#ffffff0] solution-items"
                  style={{ transition: "all .25s ease-in" }}
                >
                  <span className="action-underline underline-closing">
                    Urgentflow
                  </span>
                </Link>
                <Link
                  to="/comparativestudy"
                  className=" font-medium uppercase text-lg  font-use text-[#fff] tracking-[2px] leading-[21px] bg-[#ffffff0] solution-items"
                  style={{ transition: "all .25s ease-in" }}
                >
                  <span className="action-underline underline-closing">
                    Comparative Study
                  </span>
                </Link>
                <Link
                  to="/mergestudy"
                  className=" font-medium uppercase text-lg  font-use text-[#fff] tracking-[2px] leading-[21px] bg-[#ffffff0] solution-items"
                  style={{ transition: "all .25s ease-in" }}
                >
                  <span className="action-underline underline-closing">
                   mergestudy
                  </span>
                </Link>

              </div>
            </div>
          </div>
        </div>

        {/* footer section */}
        <Footer data={data.allStrapiFooter.nodes[0]} />
      </div>
    </>
  );
}

export default Solutions;

export const pageQuery = graphql`
  query MyQuery {
    allStrapiSolution {
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
        content {
          data {
            content
          }
        }
        menuItems {
          items
        }

        solutionHomepage {
          localFile {
            url
          }
        }
        git
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
