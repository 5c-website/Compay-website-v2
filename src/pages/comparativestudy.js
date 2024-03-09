import React from 'react'
import { Link, graphql, navigate } from 'gatsby'
import ReachUs from './get-in-touch'
import '../styles/global.css'
import Navbar from '../Utils/Navbar'
import Navbarmd from '../Utils/Navbarmd'
import star from '../Assets/Solution/star.svg'
import tablogo from '../Assets/Homepage/favicon.ico'
import Footer from '../Utils/Footer';
import { Helmet } from "react-helmet";
import { useState } from 'react'
import Actionbutton from '../components/Actionbutton'


function Urgentflow({ data }) {
    const Content = data.allStrapiUrgentflow.nodes[0];

    return (
        <>
            <Helmet>
                <html lang="en" />
                <title>urgentflow</title>
                <meta name="description" content="urgentflow" />
                <link rel="icon" href={tablogo}
                    type="image/x-icon" />
                {/* <meta name="author" content={author} /> */}
            </Helmet>
            <div className=' bg-black Homepage'>

                <a href='https://play.google.com/store/apps/details?id=db.com.a5c' class="outer inline-block ml-6 text-base align-top absolute uppercase cursor-pointer top-0 bottom-auto left-auto right-0 z-[1] mobile-screen-signin">
                    <span class="inner"></span>
                    <span class="inner"></span>
                    <span class="inner"></span>
                    <span class="inner"></span>
                    Sign In
                </a>
                <Navbar />

                {/* Mobile responsive */}

                <Navbarmd />
                <div className=' flex items-center flex-col  sm:pt-0 '>
                    <section className=' min-h-[888px] text-center relative block'>
                        <div className=' comparative-container'>
                            <div className=' pt-0 pr-[80px] pb-0 pl-[80px] justify-center flex flex-col relative flex-1 max-w-full sm:pr-[10px] sm:pl-[50px] sm:mt-[8rem] sm:mb-[4rem]'>
                                <h1 className=' font-bold text-[2.25rem] mt-0 mr-[634px] mb-0 ml-0 relative leading-[1.1] p-0 text-[#ffffff] break-words flex-shrink-0 sm:text-[1.875rem] sm:mr-[54px]'>Unlock Superior Patient Care with "Compare With"
                                </h1>
                                <p className=' mt-[18px] mr-[770px] mb-0 ml-0 relative text-[#ffffff] flex-shrink-0 p-0 sm:mr-[80px]'>
                                    Your Gateway to Comprehensive Comparative Reports
                                </p>
                                <p className=' mt-[18px] mr-[770px] mb-0 ml-0 relative text-[#ffffff] flex-shrink-0 p-0  sm:mr-[80px]'>
                                    In the world of healthcare, where follow-ups are crucial, "Compare With" offers a seamless way to generate comparative reports by linking to previous studies </p>
                                <p className=' mt-[18px] mr-[770px] mb-0 ml-0 relative text-[#ffffff] flex-shrink-0 p-0  sm:mr-[80px]'>
                                    This feature is your key to building a stronger rapport and trust with your consulting physician, ultimately enhancing patient care </p>
                            </div>
                        </div>
                        <div className=' w-[912px] mt-[-43px] mr-auto ml-auto mb-[57px] flex flex-col relative sm:w-[340px] '>
                            <div className='  flex-1 min-h-[362px] grid gap-0 grid-cols-2 sm:grid-cols-1 '>
                                <div className=' mt-0 mb-0 bg-none text-[#ffffff] bg-[#19191a] flex relative text-left'>
                                    <div className=' p-[30px] relative flex-1 max-w-full'>
                                        <span className=' w-[64px] h-[64px] bg-none mt-0 mr-auto ml-0 mb-0 p-[10px] text-[#ffffff] bg-[#19191a] relative block leading-0 rounded-[10px]'>
                                        <img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/accuracy--v1.png" alt="accuracy--v1"/>
                                        </span>
                                        <h1 className=' uppercase tracking-[1px] mt-[-64px] mr-0 mb-0 ml-[91px] p-0 relative text-[1.25rem] leading-[1.2] '>Improved Diagnostic Accuracy</h1>
                                        <p className=' font-normal mt-[18px] mr-0 mb-0 ml-[91px] text-[#ffffff] relative p-0 sm:text-[10px] '>By comparing current and past studies, physicians can detect subtle changes, leading to more accurate diagnoses</p>
                                    </div>
                                </div>
                                <div className=' mt-0 mb-0 bg-none text-[#ffffff] bg-[#19191a] flex relative text-left'>
                                    <div className=' p-[30px] relative flex-1 max-w-full'>
                                        <span className=' w-[64px] h-[64px] bg-none mt-0 mr-auto ml-0 mb-0 p-[10px] text-[#ffffff] bg-[#19191a] relative block leading-0 rounded-[10px]'>
                                        <img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/trust--v1.png" alt="trust--v1"/>                                        </span>
                                        <h1 className=' uppercase tracking-[1px] mt-[-64px] mr-0 mb-0 ml-[91px] p-0 relative text-[1.25rem] leading-[1.2]'>Enhanced Patient Trust</h1>
                                        <p className=' font-normal mt-[18px] mr-0 mb-0 ml-[91px] text-[#ffffff relative p-0 '>Transparent sharing of comparative reports fosters trust between patients and healthcare providers</p>
                                    </div>
                                </div>
                                <div className=' mt-0 mb-0 bg-none text-[#ffffff] bg-[#19191a] flex relative text-left'>
                                    <div className=' p-[30px] relative flex-1 max-w-full'>
                                        <span className=' w-[64px] h-[64px] bg-none mt-0 mr-auto ml-0 mb-0 p-[10px] text-[#ffffff] bg-[#19191a] relative block leading-0 rounded-[10px]'>
                                        <img width="32" height="32" src="https://img.icons8.com/external-solidglyph-m-oki-orlando/32/FFFFFF/external-follow-up-email-marketing-solid-solidglyph-m-oki-orlando.png" alt="external-follow-up-email-marketing-solid-solidglyph-m-oki-orlando"/>                                        </span>
                                        <h1 className=' uppercase tracking-[1px] mt-[-64px] mr-0 mb-0 ml-[91px] p-0 relative text-[1.25rem] leading-[1.2]'>Streamlined Follow-Ups</h1>
                                        <p className=' font-normal mt-[18px] mr-0 mb-0 ml-[91px] text-[#ffffff relative p-0 '>Simplifies the process of follow-up consultations, making them more efficient and effective</p>
                                    </div>
                                </div>
                                <div className=' mt-0 mb-0 bg-none text-[#ffffff] bg-[#19191a] flex relative text-left'>
                                    <div className=' p-[30px] relative flex-1 max-w-full'>
                                        <span className=' w-[64px] h-[64px] bg-none mt-0 mr-auto ml-0 mb-0 p-[10px] text-[#ffffff] bg-[#19191a] relative block leading-0 rounded-[10px]'>
                                        <img width="64" height="64" src="https://img.icons8.com/external-glyph-geotatah/64/FFFFFF/external-consequence-conflict-resolution-glyph-glyph-geotatah.png" alt="external-consequence-conflict-resolution-glyph-glyph-geotatah"/>                                        </span>
                                        <h1 className=' uppercase tracking-[1px] mt-[-64px] mr-0 mb-0 ml-[91px] p-0 relative text-[1.25rem] leading-[1.2]'>Better Patient Outcomes</h1>
                                        <p className=' font-normal mt-[18px] mr-0 mb-0 ml-[91px] text-[#ffffff relative p-0 '>Enables targeted treatment plans by providing a clearer picture of the patient's progress over time</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className=' bg-black text-center relative block'>
                        <div className=' min-h-[606px] w-[1200px] justify-center flex flex-col relative mt-0 mr-auto ml-auto mb-0 sm:w-[340px]'>
                            <h2 className=' ml-auto mr-auto mb-0 text-[#ffffff] text-[3rem] leading-[1.1]  p-0 relative flex-shrink-0 table align-self-start'> Use Cases</h2>
                            <div className=' mt-[40px] mb-[60px] flex flex-col  flex-shrink-0 !w-full !ml-0 !mr-0 relative'>
                                <div className=' flex-grow-1 flex-shrink-1 basis-auto grid-cols-3 min-h-[294px] gap-0 grid sm:grid-cols-1'>
                                    <div className=' bg-none  opacity-[1] text-[#ffffff] bg-[#19191a] flex relative text-left'>
                                        <div className=' pt-[30px] pb-[30px] pl-[40px] pr-[40px] opacity-1 justify-start flex flex-col relative flex-1 max-w-full'>
                                            <h4 className=' font-bold text-left  mt-0 mr-auto mb-0 ml-0 p-0  relative table align-self-start text-[1.5rem] leading-[1.2] text-[#ffffff]'>Chronic Disease Management:</h4>
                                                <div className=' w-[190px] transform origin-left-center origin-0 text-left mt-[12px] mr-auto mb-0 ml-0 stroke-none border-right-0 border-left-0 border-bottom-0 border-[#ffffff] border-[1px] border-solid relative flex-shrink-0'></div>
                                                <p className=' text-left mt-[18px] mr-0 mb-0 ml-0 text-[1.125rem] leading-[1.6] text-[#ffffff] relative '>Regularly compare studies to monitor disease progression or remission</p>
                                          </div>
                                    </div>
                                    <div className=' bg-none opacity-1 text-[#ffffff] bg-[#414346] flex relative text-left'>
                                        <div className=' pt-[30px] pb-[30px] pl-[40px] pr-[40px] opacity-1 justify-start flex flex-col relative flex-1 max-w-full'>
                                            <h4 className=' font-bold text-left  mt-0 mr-auto mb-0 ml-0 p-0  relative table align-self-start text-[1.5rem] leading-[1.2] text-[#ffffff]'>Post-Surgery Follow-up</h4>
                                                <div className=' w-[190px] transform origin-left-center origin-0 text-left mt-[12px] mr-auto mb-0 ml-0 stroke-none border-right-0 border-left-0 border-bottom-0 border-[#ffffff] border-[1px] border-solid relative flex-shrink-0'></div>
                                                <p className=' text-left mt-[18px] mr-0 mb-0 ml-0 text-[1.125rem] leading-[1.6] text-[#ffffff] relative '>Assess healing and recovery post-surgery by comparing pre and post-operative studies</p>
                                          </div>
                                    </div>
                                    <div className=' bg-none  opacity-1 text-[#ffffff] bg-[#19191a] flex relative text-left'>
                                        <div className=' pt-[30px] pb-[30px] pl-[40px] pr-[40px] opacity-1 justify-start flex flex-col relative flex-1 max-w-full'>
                                            <h4 className=' font-bold text-left  mt-0 mr-auto mb-0 ml-0 p-0  relative table align-self-start text-[1.5rem] leading-[1.2] text-[#ffffff]'>Treatment Efficacy Evaluation</h4>
                                                <div className=' w-[190px] transform origin-left-center origin-0 text-left mt-[12px] mr-auto mb-0 ml-0 stroke-none border-right-0 border-left-0 border-bottom-0 border-[#ffffff] border-[1px] border-solid relative flex-shrink-0'></div>
                                                <p className=' text-left mt-[18px] mr-0 mb-0 ml-0 text-[1.125rem] leading-[1.6] text-[#ffffff] relative '>Evaluate the effectiveness of treatment plans over time through comparative analysis, especially in cancer cases  </p>
                                          </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className=' testimonial-container'>
                        <div className=' pointer-events-none min-h-[540px] relative mt-0 mb-0 ml-auto mr-auto'>
                            <div className=' mt-[30px] mr-auto ml-0 mb-[-342px] w-full relative'>
                                <div>
                                    <div className=' flex flex-row flex-wrap max-w-full min-h-fit sm:flex-col'>
                                        <div className=' min-h-[506px] text-left max-w-[65%] min-w-[65%] relative flex max-h-full sm:max-w-full'>
                                            <div className=' p-[30px] justify-center flex flex-col relative flex-1 max-w-full sm:p-[15px]'>
                                                {/* <h4 className=' text-[2.25rem] mt-0 mr-auto mb-0 ml-0 p-0   text-[#ffffff] relative flex-shrink-0 table align-self-start w-fit sm:text-justify'>What People say</h4> */}
                                                <span className=' h-[150px] w-[150px] mt-[20px] mr-auto ml-0 mb-0 opacity-[0.45] text-[#ffffff]  rounded-[50%] block leading-[0] relative flex-shrink-0'>
                                                <img width="80" height="80" src="https://img.icons8.com/glyph-neue/64/FFFFFF/quote-right.png" alt="quote-right"/>
                                                </span>
                                                <h2 className='leading-[1.6] text-[1.5rem] font-[300]  mt-[-90px] mr-[51px] ml-0 mb-0 p-0 text-[#ffffff] relative flex-shrink-0 sm:mr-0'>Since incorporating 'Compare With' into our practice, we've seen a significant improvement in patient satisfaction. Our ability to show concrete comparisons has greatly enhanced the trust patients have in our care.</h2>
                                                <h6 className=' font-bold mt-[40px] mr-auto ml-0 mb-0 text-[#ffffff] relative flex-shrink-0 table align-self-start text-[1.125rem] leading-[1.2]'>Dr. Suman Sudhanshu, General Practitioner</h6>
                                            </div>
                                        </div>
                                        <div className=' testimonial-image-wrapper sm:min-h-[306px] sm:max-w-full'>
                                            <div className=' relative flex-1 max-w-full p-[30px]'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className='features max-w-full w-full mt-[4rem] flex justify-around bg-[#19191a] sm:flex-col sm:gap-[5rem] sm:mt-[24rem]'>
                <div  className=' contents'>
                  <div className='text-[16px] font-medium tracking-[1.5px] font-use flex flex-col w-[70%] items-center sm:w-full sm:p-6 sm:text-justify' style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                    <h3 className=' text-[3.4rem]'>Contact Us</h3>
                    <h6 className=' text-[1rem]'>Ready to elevate your patient care with "Compare With"? Contact us today.</h6>
                    <div className=' !mt-0'>
                    <Link to='/reachus' className='flex sm:ml-0 mb-[2rem]'>
                  <Actionbutton label="Get in touch" />
                  </Link>
                    </div>
                  </div>
                </div>
            </div>
                </div>

                <Footer data={data.allStrapiFooter.nodes[0]} />
            </div>
        </>
    )
}

export default Urgentflow

export const pageQuery = graphql`
query MyQuery {
  allStrapiUrgentflow {
    nodes {
      title
      subcopy
      feature {
        iconURL
        featureContent
      }
      feedback {
        logo
        title
        feedbackContent {
          data {
            feedbackContent
          }
        }
      }
      services {
        logo
        title
        content {
          data {
            content
          }
        }
      }
    }
  }
    allStrapiOsteocheck {
          nodes {
            title
            top {
              localFile {
                url
              }
            }
            center {
              localFile {
                url
              }
            }
            bottom {
              localFile {
                url
              }
            }
            contenttitle
            bodycontent  {
              bodycontent {
                data {
                  bodycontent
                }
              }
            }
            seo {
              metaTitle
              metaDescription {
                data {
                  metaDescription
                }
              }
            }
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

`

