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
        <title>Merge Study</title>
        <meta name="description" content="You receive an RTA case and do CT Brain, CT Face and CT Thorax. Now, you want all the reports from the same Radiologist to maintain context across the reports" />
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
        <section className=' min-h-[632px] relative'>
          <div className=' w-full ml-0 mt-0 mr-auto mb-0 '>
            <div>
              <div className=' flex  flex-row min-h-full flex-wrap flex-grow-1 flex-shrink-1 basis-full sm:flex-col'>
                <div className=' min-h-[632px] max-w-[50%] text-[#ffffff] opacity-[1] bg-transparent text-center relative flex max-h-full sm:max-w-full'>
                  <div className=' p-[30px] justify-center flex flex-col relative flex-1 max-w-full sm:p-[10px] sm:pt-[3rem]'>
                    <h2 className=' text-[3rem] font-normal leading-[1.1] relative break-words mt-[40px] mr-0 mb-0 ml-0 text-[#ffffff] font-use-one sm:text-left sm:text-[2rem] '>Get Consistent Radiology Reports for Multiple Studies</h2>
                    <p className='mt-[20px] mr-[58px] mb-0 ml-[58px] relative break-words font-use text-[16px] sm:ml-[10px] sm:mr-[10px] sm:text-left'>
                      You receive an RTA case and do CT Brain, CT Face and CT Thorax. Now, you want all the reports from the same Radiologist to maintain context across the reports. <br></br><br/>
                      So, how can you get a comprehensive report across all these studies? The report should incorporate the findings across the studies and should be able to answer the clinical questions that made the referring Clinician order these scans.<br></br><br/>
                      5C Network introduces the "Merge Study" feature, designed to ensure that you receive consistent, detailed patient reports from the same radiologist across multiple studies.
                    </p>
                  </div>
                </div>
                <div className=' mergestudy-hero'>
                  <div className=' p-[30px] relative flex-1 max-w-full'></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=' text-center relative block'>
          <div className=' min-h-[1082px]  relative mt-0 mr-auto mb-0 ml-0'>
            <h2 className=' font-bold w-[609px] text-[2.25rem] leading-[1.1] p-0 relative break-words mt-[8rem] mr-auto mb-0 ml-auto text-[#ffffff] sm:text-left sm:text-[1.5rem] sm:p-[10px]'>Why Choose Merge Study?</h2>
            <div className=' w-[846px] relative mt-[61px] mr-auto mb-[60px] ml-auto sm:w-full sm:p-[10px]'>
              <div className=' m-[-15px]'>
                  <div className=' flex flex-col gap-[2rem] sm:gap-[3rem] sm:p-[10px]'>
                    <div className=' flex-grow-[30] shrink-0 basis-auto min-h-fit max-w-full flex'>
                      <div className=' flex flex-row max-w-full gap-[2rem] sm:flex-col  '>
                        <div className=' border-[15px] border-transparent border-solid min-h-[416px] max-w-[50%] min-w-[50%] flex relative max-h-full flex-grow-0 shrink-0 basis-full bg-[#19191a] sm:max-h-[50%] sm:min-h-[262px] sm:max-w-full'>
                          <div className=' flex pt-[30px] pb-[30px] pl-[20px] pr-[20px] justify-center flex-col relative flex-1 max-w-full '>
                            <span className=' h-[78px] w-[78px] p-[18px] mt-0 mr-auto mb-0 ml-auto text-[#ffffff] bg-[#3d9ef9] rounded-[50%] block leading-0  relative shrink-0'>
                            <img width="64" height="64" src="https://img.icons8.com/external-icongeek26-glyph-icongeek26/64/FFFFFF/external-report-pregnancy-amp-maternity-icongeek26-glyph-icongeek26-1.png" alt="external-report-pregnancy-amp-maternity-icongeek26-glyph-icongeek26-1"/>
                            </span>
                            <h5 className=' uppercase font-bold tracking-[2px] p-0 relative break-words shrink-0  text-[1.25rem] leading-[1.2] mt-[20px] mr-0 mb-0 ml-0  text-[#ffffff] font-use-one '>Contextual Reports</h5>
                            <p className=' font-normal mt-[20px] mr-[9px] mb-0 ml-[9px] text-[#ffffff] break-words relative shrink-0 p-0 font-use '>Receive all your case reports from a single radiologist, maintaining coherence and context</p>
                          </div>
                        </div>
                        <div className=' border-[15px] border-transparent border-solid min-h-[416px] max-w-[50%] min-w-[50%] flex relative max-h-full flex-grow-0 shrink-0 basis-full bg-[#19191a] sm:max-h-[50%] sm:min-h-[262px] sm:max-w-full'>
                          <div className=' flex pt-[30px] pb-[30px] pl-[20px] pr-[20px] justify-center flex-col relative flex-1 max-w-full '>
                            <span className=' h-[78px] w-[78px] p-[18px] mt-0 mr-auto mb-0 ml-auto text-[#ffffff] bg-[#3d9ef9] rounded-[50%] block leading-0  relative shrink-0'>
                            <img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/customer-insights-manager.png" alt="customer-insights-manager"/>                            </span>
                            <h5 className=' uppercase font-bold tracking-[2px] p-0 relative break-words shrink-0  text-[1.25rem] leading-[1.2] mt-[20px] mr-0 mb-0 ml-0 text-[#ffffff] font-use-one '>Comprehensive Insights</h5>
                            <p className=' font-normal mt-[20px] mr-[9px] mb-0 ml-[9px] text-[#ffffff] break-words relative shrink-0 p-0 font-use'>Get a comprehensive report to have a complete understanding of the patient's health status</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=' flex-grow-[30] shrink-0 basis-auto min-h-fit max-w-full flex'>
                      <div className=' flex flex-row max-w-full gap-[2rem] w-full justify-around sm:flex-col  '>
                        <div className=' border-[15px] border-transparent border-solid min-h-[416px] max-w-[50%] min-w-[50%] flex relative max-h-full flex-grow-0 shrink-0 basis-full bg-[#19191a] sm:max-h-[50%] sm:min-h-[321px] sm:max-w-full'>
                          <div className=' flex pt-[30px] pb-[30px] pl-[20px] pr-[20px] justify-center flex-col relative flex-1 max-w-full '>
                            <span className=' h-[78px] w-[78px] p-[18px] mt-0 mr-auto mb-0 ml-auto text-[#ffffff] bg-[#3d9ef9] rounded-[50%] block leading-0  relative shrink-0'>
                            <img width="68" height="68" src="https://img.icons8.com/external-icons-smashing-stocks/68/FFFFFF/external-Efficiency-stock-market-icons-smashing-stocks.png" alt="external-Efficiency-stock-market-icons-smashing-stocks"/>                            </span>
                            <h5 className=' uppercase font-bold tracking-[2px] p-0 relative break-words shrink-0  text-[1.25rem] leading-[1.2] mt-[20px] mr-0 mb-0 ml-0  text-[#ffffff] font-use-one '>Efficiency and Convenience</h5>
                            <p className=' font-normal mt-[20px] mr-[9px] mb-0 ml-[9px] text-[#ffffff] break-words relative shrink-0 p-0 font-use'>Streamline the reporting process, saving valuable time and reducing complexity</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </section>
        <div className='features max-w-full w-full flex justify-around bg-[#19191a] p-10 sm:flex-col sm:gap-[2rem] sm:mt-[2rem]'>
               <div  className='flex gap-3'>
                  <img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/request-service.png" alt="request-service"/>
                  <div className='text-[16px] font-medium tracking-[1.5px] font-use flex w-fukk items-center' style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                  Comprehensive RTA Case Management
                  </div>
                </div>
                <div  className='flex gap-3'>
                  <div><img width="64" height="64" src="https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/64/FFFFFF/external-evaluate-market-research-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png" alt="" /></div>
                  <div className='text-[16px] font-medium tracking-[1.5px] font-use flex w-[70%] items-center' style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                  Follow-Up Evaluation for Ongoing Treatment (Eg: Onco)
                  </div>
                </div>

            </div>
        <div className=' flex items-center flex-col  sm:pt-0 mt-[2rem] '>

          <div className='features max-w-full w-full mt-[4rem] flex justify-around  sm:flex-col sm:gap-[5rem] sm:mt-[2rem]'>
            <div className=' contents'>
              <div className='text-[16px] font-medium tracking-[1.5px] font-use flex flex-col w-[70%] items-center sm:w-full sm:p-6 sm:text-justify' style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                <h3 className=' text-[2.5rem] sm:text-[1.5rem]'>Ready to Take Your Reporting Process to the Next Level?</h3>
                {/* <h6 className=' text-[1rem]'>Ready to elevate your patient care with "Compare With"? Contact us today.</h6> */}
                <div className=' !mt-0'>
                  <Link to='/reachus' className='flex sm:ml-0 mb-[2rem]'>
                    <Actionbutton label="Schedule a demo now" />
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

