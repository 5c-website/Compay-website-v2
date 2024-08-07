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
        <title>{strapiContent.seo.metaTitle}</title>
        <meta
          name="description"
          content={strapiContent.seo.metaDescription.data.metaDescription}
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
            backgroundImage: `url(${strapiContent.solutionHomepage.localFile.url})`,
          }}
        >
          <div className="max-w-full ml-auto mr-auto">
            <div className="max-w-full relative w-[1200px] mt-[234px] sm:h-auto sm:mt-0 hero-section-solution">
              <h1 className="max-w-full uppercase mt-0 mb-0 font-normal text-[#fff] tracking-[2px] text-[80px] leading-[100px] font-use solution-title">
                {strapiContent.title}
              </h1>
              <div className="max-w-full mt-8 w-[500px] ml-[100px] content-solution-container">
                <p className="mb-0 mt-0 font-use-one text-xl text-[#ffffffd6] content-solution">
                  {strapiContent.content.data.content}
                </p>
              </div>
              <div className="relative flex w-full max-w-full justify-around  solutions-home-container">
                <Link
                  to="/radiologists"
                  className=" font-medium uppercase text-lg  font-use text-[#fff] tracking-[2px] leading-[21px] bg-[#ffffff0] solution-items"
                  style={{ transition: "all .25s ease-in" }}
                >
                  <span className="action-underline underline-closing">
                    {strapiContent.menuItems[0].items}
                  </span>
                </Link>
                <Link
                  to="/clinicians"
                  className=" font-medium uppercase text-lg  font-use text-[#fff] tracking-[2px] leading-[21px] bg-[#ffffff0] solution-items"
                  style={{ transition: "all .25s ease-in" }}
                >
                  <span className="action-underline underline-closing">
                    {strapiContent.menuItems[1].items}
                  </span>
                </Link>
                <Link
                  to="/hospitals"
                  className=" font-medium uppercase text-lg  font-use text-[#fff] tracking-[2px] leading-[21px] bg-[#ffffff0] solution-items"
                  style={{ transition: "all .25s ease-in" }}
                >
                  <span className="action-underline underline-closing">
                    {strapiContent.menuItems[2].items}
                  </span>
                </Link>
                <Link
                  to="/diagnosticcenters"
                  className=" font-medium uppercase text-lg  font-use text-[#fff] tracking-[2px] leading-[21px] bg-[#ffffff0] solution-items"
                  style={{ transition: "all .25s ease-in" }}
                >
                  <span className="action-underline underline-closing">
                    {strapiContent.menuItems[3].items}
                  </span>
                </Link>
                <Link
                  to="/healthcareaggregators"
                  className=" font-medium uppercase text-lg  font-use text-[#fff] tracking-[2px] leading-[21px] bg-[#ffffff0] solution-items"
                  style={{ transition: "all .25s ease-in" }}
                >
                  <span className="action-underline underline-closing">
                    {strapiContent.menuItems[4].items}
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
