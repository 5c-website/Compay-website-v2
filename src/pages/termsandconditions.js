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
        <title>Terms and Conditions</title>
        <meta name="google-site-verification" content="google3324f12ef9a97f3e" />

        <meta name="description" content="Read our comprehensive terms and conditions to understand your rights and obligations when using our services. Stay informed about privacy policies, usage guidelines, and legal requirements. Your agreement is essential for accessing our platform. Explore our terms now!" />
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
        <div className='max-w-full flex justify-center items-center ml-auto mr-auto'>
          <div className=' w-[1200px] max-w-full pt-[120px] pb-[120px] relative sm:pt-[60px] sm:pb-0'>
            <div className=' p-[1rem] privacy-content'>
              <p>&zwj;</p>
              <h2 className='text-[36px] leading-[1.4] text-[#fff] tracking-[2px] uppercase mt-0 mb-0 font-use font-semibold underline sm:text-[20px]'>Terms of Use</h2>
              <p>&zwj;</p>
              <ul className='ml-[2rem] sm:ml-0'>
                <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                  <div className='bullet-line-css'></div>
                  <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                  By accessing and utilizing this website, you agree to adhere to the following terms and conditions. Should you disagree with any of these terms, you are not permitted to use or access this site. 5C Network retains the right to amend, modify, or update these Terms of Use at its discretion without prior notification. Your ongoing usage of the website subsequent to any alterations constitutes acknowledgment and acceptance of said modifications.
                  </p>
                </li>
              </ul>

              <p>&zwj;</p>
              <h2 className='text-[36px] leading-[1.4] text-[#fff] tracking-[2px] uppercase mt-0 mb-0 font-use font-semibold underline sm:text-[20px]'>Accuracy of Information</h2>
              <p>&zwj;</p>
              <ul className='ml-[2rem] sm:ml-0'>
                <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                  <div className='bullet-line-css'></div>
                  <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                  While 5C Network endeavors to furnish accurate, up-to-date, and pertinent information on this website, it should be noted that any images presented may serve illustrative purposes only and might not precisely depict reality. Furthermore, we cannot warrant the accuracy, completeness, or timeliness of the content accessible
                   via <label htmlFor='5C Network' className=' text-[#00d4ff] font-italic'> <a href='https://www.5cnetwork.com/' target='_blank'>www.5cnetwork.com</a></label> Patients and referring physicians are cautioned against solely relying on the educational information provided regarding medical imaging for patient treatments.
                    It is important to note that all information on this site is subject to change without prior notification.
                  </p>
                </li>

              </ul>
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

