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
        <title>AI Tools</title>
        <meta
          name="description"
          content='5C Network uses different AI models to make accurate radiology reports. But it not just about the reports Our platform augments radiologists capabilities to do their jobs better so they are faster and more accurate in radiology reporting'
        />
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
            backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/kronos-6c72a.appspot.com/o/26e069a8-db74-4abb-80f0-8fa0e1d2b708.jpg?alt=media&token=4e09981e-f946-48ad-94df-5673493cf721')`,
          }}
        >
          <div className="max-w-full ml-auto mr-auto">
            <div className="max-w-full relative w-[1200px] mt-[234px] sm:h-auto sm:mt-0 hero-section-solution">
              <h1 className="max-w-full uppercase mt-0 mb-0 font-normal text-[#fff] tracking-[2px] text-[80px] leading-[100px] font-use solution-title">
                Ai Tools
              </h1>
              <div className="max-w-full mt-8 w-[500px] ml-[100px] content-solution-container">
                <p className="mb-0 mt-0 font-use-one text-xl text-[#ffffffd6] content-solution">
                5C Network uses different AI models to make accurate radiology reports. But it's not just about the reports. Our platform augments radiologists' capabilities to do their jobs better so they are faster and more accurate in radiology reporting                </p>
              </div>
              <div className="relative flex w-full max-w-full justify-around  solutions-home-container">
                {/* <Link
                  to="/rxpert"
                  className=" font-medium uppercase text-lg  font-use text-[#fff] tracking-[2px] leading-[21px] bg-[#ffffff0] solution-items"
                  style={{ transition: "all .25s ease-in" }}
                >
                  <span className="action-underline underline-closing">
                    Rxpert
                  </span>
                </Link> */}
                <Link
                  to="/osteocheck"
                  className=" font-medium uppercase text-lg  font-use text-[#fff] tracking-[2px] leading-[21px] bg-[#ffffff0] solution-items"
                  style={{ transition: "all .25s ease-in" }}
                >
                  <span className="action-underline underline-closing">
                    osteocheck
                  </span>
                </Link>
                <Link
                  to="/protocall"
                  className=" font-medium uppercase text-lg  font-use text-[#fff] tracking-[2px] leading-[21px] bg-[#ffffff0] solution-items"
                  style={{ transition: "all .25s ease-in" }}
                >
                  <span className="action-underline underline-closing">
                   protocall
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
