import React from "react";
import { Link, graphql } from "gatsby";
import Navbar from "../Utils/Navbar";
import Marquee from "react-fast-marquee";
import Navbarmd from "../Utils/Navbarmd";
import Footer from "../Utils/Footer";
import { Helmet } from "react-helmet";
import downstar from "../Assets/Solution/downarrow.svg";
import tablogo from "../Assets/Homepage/favicon.ico";
import leftdown from "../Assets/Solution/leftdown.svg";
import mobilestar from "../Assets/Solution/single-mobile.svg";


function About({ data }) {
  const strapiContent = data.allStrapiAbout.nodes[0];
  

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{strapiContent.seo.metaTitle}</title>
        <meta
          name="description"
          content={strapiContent.seo.metaDescription.data.metaDescription}
        />
        <link rel="icon" href={tablogo} type="image/x-icon" />
        {/* <meta name="author" content={author} /> */}
      </Helmet>
      <div className=" bg-black Homepage">
        
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
        <div
          className="about-home  sm:h-[90vh] sm:p-[1rem]"
          style={{
            backgroundImage: `url(${strapiContent.abouthomeimg.localFile.url})`,
          }}
        >
          <div className="max-w-full ml-auto mr-auto sm:ml-[10px]">
            <div className="max-w-full relative w-[1200px] mt-[234px] sm:mt-24">
              <h1 className=" uppercase max-w-full mt-0 mb-0  font-use text-[#fff] tracking-[2px] leading-[100px] text-[80px] sm:text-[2.5rem]">
                {strapiContent.title}
              </h1>
              <div className=" max-w-full mt-8 text-[#fff] w-[500px] ml-[100px] sm:ml-[10px] sm:mt-0  sm:w-[85%]">
                <p
                  className=" mt-0 mb-0 leading-8 font-use-one sm:text-base text-[20px]"
                  style={{ color: "rgba(255, 255, 255, .85)" }}
                >
                  {strapiContent.content.data.content}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="passion sm:pt-[3rem] sm:pb-[130px] sm:p-[1rem] "
          style={{
            backgroundImage: `url(${strapiContent.secimg.localFile.url})`,
          }}
        >
          <div
            className="flex flex-col items-start relative ml-auto mr-auto"
            style={{ zIndex: "1", maxWidth: "1200px" }}
          >
            <h1 className=" uppercase mt-0 mb-0  font-use text-[#fff] tracking-[2px] text-[50px] leading-[60px] sm:ml-[10px] sm:text-[22px] sm:tracking-[1px]">
              {strapiContent.sectitle}
            </h1>
            <h1
              className=" uppercase max-w-full mt-0 mb-0  font-use text-[#fff] text-[80px] tracking-[2px] leading-[100px] sm:text-[34px] sm:leading-[50px] sm:ml-[10px]"
              style={{ width: "1000px" }}
            >
              {strapiContent.secsubtitle}
            </h1>
            <div className="max-w-full ml-[100px] mt-[50px] w-[800px] sm:ml-[10px] sm:w-[96%]">
              <p
                className=" mt-0 mb-0 leading-8 font-use-one"
                style={{ fontSize: "20px", color: "rgba(255, 255, 255, .85)" }}
              >
                {strapiContent.secpara.data.secpara}
              </p>
            </div>
          </div>
        </div>
        <div className="overflow-hidden mt-40 sm:mt-20 sm:p-[1rem]">
          <div
            className=" relative flex flex-col items-start ml-auto mr-auto"
            style={{ zIndex: 1, maxWidth: "1200px" }}
          >
            <div className=" absolute z-[-99] top-0 bottom-auto left-auto right-[-6%] star-embed-down ">
              <img src={downstar}></img>
            </div>

            <h1 className=" uppercase mt-0 mb-0  font-use text-[#fff] tracking-[2px] text-[50px] leading-[60px] sm:ml-[10px] sm:text-[22px] sm:tracking-[1px]">
              {strapiContent.leadertitle}
            </h1>
            <div className="card-layout-container">
              {strapiContent.leadershipcards.map((card, index) => (
                <div
                  key={index}
                  className="h-auto object-cover mr-0 flex flex-col relative pb-5 w-[264px] sm:w-[95%]"
                  style={{ border: "1px solid #333", marginBottom: "60px" }}
                >
                  <div>
                    <img
                      className="card-img"
                      src={
                        strapiContent.leadershipcardsimg[index].localFile.url
                      }
                      alt={`Card Image ${index}`}
                    />
                  </div>
                  <div className="h-auto pr-4" style={{ paddingLeft: "15px" }}>
                    <div className="flex relative items-end justify-between">
                      <div className="flex flex-col">
                        <h3
                          className="text-2xl leading-8 mb-0 uppercase font-use"
                          style={{ color: "#fff", letterSpacing: "3px" }}
                        >
                          {card.firstname}
                        </h3>
                        <h3
                          className="text-2xl leading-8 mt-0 mb-0 uppercase font-use"
                          style={{ color: "#fff", letterSpacing: "3px" }}
                        >
                          {card.lastname}
                        </h3>
                      </div>
                      <a
                        href={card.linkedin_Url}
                        target="_blank"
                        className="w-8 h-8 justify-center items-center flex max-w-full uppercase text-lg no-underline"
                        style={{
                          border: "1px solid #00d4ff",
                          borderRadius: "100px",
                          color: "#fff",
                          backgroundColor: "rgba(255, 255, 255, 0)",
                          lineHeight: "26px",
                        }}
                      >
                        <div>
                          <img
                            src="https://img.icons8.com/ios-glyphs/19/FFFFFF/linkedin-2--v1.png"
                            alt={`LinkedIn`}
                          />
                        </div>
                      </a>
                    </div>
                    <div className="linkedin-separator"></div>
                    <div className="mt-2">
                      <div
                        className="text-lg leading-7 font-use-one"
                        style={{ color: "rgba(255, 255, 255, .75)" }}
                      >
                        {card.position}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="relative flex flex-col items-start ml-auto mr-auto mt-[20px] mb-[180px] sm:mt-0 sm:mb-0 "
            style={{ zIndex: "1", maxWidth: "1200px" }}
          >
            <div className=" absolute z-[-1] top-[-61%] bottom-auto left-[-11%] right-auto sm:hidden">
              <img src={leftdown}></img>
            </div>
            <h2
              className="max-w-full uppercase mt-0 mb-0   font-use text-[50px] sm:text-xl sm:ml-3"
              style={{
                color: "#fff",
                letterSpacing: "2px",
                lineHeight: "100px",
              }}
            >
              {strapiContent.partners}
            </h2>
            <div
              className="w-full ml-[100px] mt-[60px] sm:mt-6 sm:ml-0"
              style={{ marginTop: "60px", maxWidth: "1000px" }}
            >
              <div className=" flex flex-row justify-start items-start overflow-hidden">
                <Marquee direction="left" speed={100} delay={2}>
                  {strapiContent.partnersmq.map((partner, index) => (
                    <div key={index} className="image_wrapper">
                      <img
                        src={partner.localFile.url}
                        alt={`Clients Logo ${index}`}
                      />
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
        <div
          className=" mb-60 relative flex flex-col items-start ml-auto mr-auto sm:p-[1rem] sm:mb-0"
          style={{ zIndex: "1", maxWidth: "1200px" }}
        >
          <div className=" absolute z-[-99] top-auto bottom-[-67%]  left-auto right-[-7%] star-embed-up sm:hidden">
            <img src={downstar}></img>
          </div>
          <img
            src={mobilestar}
            className="sm:w-full sm:mt-[2rem] sm:ml-0 mobile-stars"
          ></img>
          s
          <h2
            className="max-w-full uppercase mt-0 mb-0   font-use text-[50px] sm:text-xl sm:ml-3"
            style={{ color: "#fff", letterSpacing: "2px", lineHeight: "60px" }}
          >
            {strapiContent.investor}
          </h2>
          <div className="w-full sm:ml-0 max-w-full mt-[60px] ml-[100px] sm:mt-[1rem]">
            <div className="logos-container">
              {strapiContent.partnerslogo.map((partner, index) => (
                <img
                  key={index}
                  className="logo-section max-w-full"
                  src={partner.localFile.url}
                  alt={`Investor Logo ${index}`}
                />
              ))}
            </div>
          </div>
        </div>

        <Footer data={data.allStrapiFooter.nodes[0]} />
      </div>
    </>
  );
}

export default About;

export const pageQuery = graphql`
  query MyQuery {
    allStrapiAbout {
      nodes {
        seo {
          metaTitle
          metaDescription {
            data {
              metaDescription
            }
          }
        }
        investor
        title
        content {
          data {
            content
          }
        }
        abouthomeimg {
          localFile {
            url
          }
        }
        sectitle
        secsubtitle
        secpara {
          data {
            secpara
          }
        }
        secimg {
          localFile {
            url
          }
        }
        leadertitle
        leadershipcards {
          firstname
          lastname
          linkedin_Url
          position
        }
        advtext
        advisiorcard {
          firstname
          lastname
        }
        partners
        partnersmq {
          localFile {
            url
          }
        }
        partnerslogo {
          localFile {
            url
          }
        }
        
        leadershipcardsimg {
          localFile {
            url
          }
        }
        advisorcardimg {
          localFile {
            url
          }
        }
        getInTouch
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
