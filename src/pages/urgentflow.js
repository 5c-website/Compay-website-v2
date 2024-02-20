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
        <div className=' flex items-center flex-col sm:p-[1rem]'>
          <div className=' max-w-full flex flex-col justify-center items-center relative ml-auto mr-auto'>
            <div className=' title flex flex-col mt-[5.5rem] '>
              <div className=' text-[34px] font-black leading-[4.5rem] tracking-[2px] font-use-one sm:text-[17px] sm:leading-[2.2rem] sm:text-center' style={{ color: 'rgba(255, 255, 255, 0.85)' }}>{Content.title}</div>
              <div className=' text-[16px] font-medium tracking-[1.5px] font-use text-center sm:text-[12px]' style={{ color: 'rgba(255, 255, 255, 0.85)' }}>{Content.subcopy}</div>

            </div>
            <div className='features max-w-full w-full mt-[4rem] flex justify-around bg-[#19191a] p-10 sm:flex-col sm:gap-[5rem]'>
              {Content.feature.map((item, index) => (
                <div key={index} className='flex gap-3'>
                  <div><img width="64" height="64" src={item.iconURL} alt={item.alt} /></div>
                  <div className='text-[16px] font-medium tracking-[1.5px] font-use flex w-[70%] items-center' style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                    {item.featureContent}
                  </div>
                </div>
              ))}
            </div>

            <div className='review-card flex mt-[9rem] justify-around pl-[9rem] w-[86%] sm:flex-col sm:p-0 sm:w-full sm:gap-[10rem]'>
              {Content.feedback.map((feedback, index) => (
                <div key={index} className='min-h-[304px] text-center relative flex max-h-full max-w-[50%] min-w-[50%] flex-grow-0 flex-shrink-0 basis-[50%] sm:max-w-full sm:min-w-[148%]'>
                  <div className='flex flex-col relative flex-1 max-w-full justify-end p-[30px] sm:p-0'>
                    <div className='min-h-[375px] mt-0 mb-0 h-auto bg-[#f2f2f2] text-[#111111] rounded-[50px] text-center flex flex-shrink-0 !ml-0 !mr-0 !w-[70%] relative'>
                      <div className='relative flex-1 max-w-full pt-0 pr-[30px] pl-[30px] pb-[30px] rounded-[50px]'>
                        <div className='review-logo-container' style={{ backgroundImage: `url(${feedback.logo})` }}></div>
                        <h5 className='font-bold relative p-0 break-words text-[1.5rem] leading-[1.2] uppercase mt-[16px] mr-[40px] mb-0 ml-[40px] font-use-one'>{feedback.title}</h5>
                        <p className='relative text-[1.125rem] mt-[12px] mr-0 mb-[-74px] ml-0 break-words p-0 font-use'>{feedback.feedbackContent.data.feedbackContent}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className=' ml-auto mr-auto relative flex-shrink-0 w-full sm:mt-[3rem]'>
              <div className=' p-[5rem] sm:p-0 sm:flex'>
                <div className='flex flex-col min-h-full'>
                  <div className=' max-w-full min-h-fit flex-grow-[30] flex-shrink-0 basis-[50%]'>
                    <div className='flex flex-row flex-wrap min-h-full max-w-full flex-grow-1 flex-shrink-1 basis-[100%] sm:flex sm:flex-col'>
                      {Content.services.slice(0,3).map((service, index) => (
                        <div key={index} className='features-content min-h-[308px] text-left border-[10px] border-solid border-transparent max-w-[33%] bg-transparent opacity-100 relative flex max-h-full flex-grow-0 flex-shrink-0 basis-[33.33%] sm:max-w-full'>
                          <div className='pt-[30px] pr-[20px] pb-[30px] pl-[20px] justify-start flex flex-col relative flex-1 max-w-full sm:pr-0 sm:pl-0'>
                            <span className='h-[50px] w-[50px] my-[0] mr-auto ml-0 rounded-[50%] block leading-0 border-0 flex-shrink-0 relative'>
                              <img width="64" height="64" src={service.logo} alt={service.alt} />
                            </span>
                            <h4 className='uppercase text-[1.5rem] font-bold p-0 break-words relative flex-shrink-0 leading-[1.2] mt-[30px] ml-0 mr-0 mb-0 text-[#fff] tracking-[2px] font-use-one'>{service.title}</h4>
                            <p className='mt-[20px] ml-0 mr-0 mb-0 break-words relative flex-shrink-0 p-0 font-use' style={{ color: 'rgba(255, 255, 255, 0.85)' }}>{service.content.data.content}</p>
                          </div>
                        </div>
                      ))}
                      {Content.services.length >= 5 && (
                        <div className='flex justify-around sm:flex-col'>
                          <div className='features-content min-h-[308px] text-left border-[10px] border-solid border-transparent max-w-[33%] bg-transparent opacity-100 relative flex max-h-full flex-grow-0 flex-shrink-0 basis-[33.33%] sm:max-w-full'>
                            <div className='pt-[30px] pr-[20px] pb-[30px] pl-[20px] justify-start flex flex-col relative flex-1 max-w-full sm:pr-0 sm:pl-0'>
                              <span className='h-[50px] w-[50px] my-[0] mr-auto ml-0 rounded-[50%] block leading-0 border-0 flex-shrink-0 relative'>
                                <img width="50" height="50" src={Content.services[3].logo} alt={Content.services[3].alt} />
                              </span>
                              <h4 className='uppercase text-[1.5rem] font-bold p-0 break-words relative flex-shrink-0 leading-[1.2] mt-[30px] ml-0 mr-0 mb-0 text-[#fff] tracking-[2px] font-use-one'>{Content.services[3].title}</h4>
                              <p className='mt-[20px] ml-0 mr-0 mb-0 break-words relative flex-shrink-0 p-0 font-use' style={{ color: 'rgba(255, 255, 255, 0.85)' }}>{Content.services[3].content.data.content}</p>
                            </div>
                          </div>
                          <div className='features-content min-h-[308px] text-left border-[10px] border-solid border-transparent max-w-[33%] bg-transparent opacity-100 relative flex max-h-full flex-grow-0 flex-shrink-0 basis-[33.33%] sm:max-w-full'>
                            <div className='pt-[30px] pr-[20px] pb-[30px] pl-[20px] justify-start flex flex-col relative flex-1 max-w-full sm:pr-0 sm:pl-0'>
                              <span className='h-[50px] w-[50px] my-[0] mr-auto ml-0 rounded-[50%] block leading-0 border-0 flex-shrink-0 relative'>
                                <img width="50" height="50" src={Content.services[4].logo} alt={Content.services[4].alt} />
                              </span>
                              <h4 className='uppercase text-[1.5rem] font-bold p-0 break-words relative flex-shrink-0 leading-[1.2] mt-[30px] ml-0 mr-0 mb-0 text-[#fff] tracking-[2px] font-use-one'>{Content.services[4].title}</h4>
                              <p className='mt-[20px] ml-0 mr-0 mb-0 break-words relative flex-shrink-0 p-0 font-use' style={{ color: 'rgba(255, 255, 255, 0.85)' }}>{Content.services[4].content.data.content}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                  </div>
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

