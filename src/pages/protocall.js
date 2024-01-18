import React from 'react'
import { graphql } from 'gatsby'
import '../styles/global.css'
import Navbar from '../Utils/Navbar'
import Navbarmd from '../Utils/Navbarmd'
import star from '../Assets/Solution/star.svg'
import tablogo from '../Assets/Homepage/favicon.ico'
import Footer from '../Utils/Footer';
import { Helmet } from "react-helmet";
import Actionbutton from '../components/Actionbutton'


function Osteocheck({ data }) {
  const Content = data.allStrapiProtocall.nodes[0];


  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{Content.seo.metaTitle}</title>
        <meta name="description" content={Content.seo.metaDescription.data.metaDescription} />
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
            <div className=' w-full max-w-full flex flex-col items-center pt-[100px] relative'>
              <div className=' w-full max-w-full mb-20'>
                <h1 className=' max-w-full text-[#fff] tracking-[2px] uppercase mt-0 mb-0 text-[80px]  leading-[100px] font-use sm:text-[40px] sm:leading-[40px] sm:tracking-[1px]'>{Content.title}</h1>
              </div>
              <div className=' h-auto max-w-full justify-between items-center flex relative ml-[100px] mb-[140px] w-[1100px] sm:flex-col sm:w-full sm:ml-0'>
                <div className=' w-[541px] h-[580px] max-w-full items-center mr-0 flex relative px-[50px] py-[47px] sm:h-[284px] sm:mb-0 sm:p-5'>
                  <img alt="radiologist" className=' z-[1] w-[200px] h-[200px] object-cover absolute top-0 bottom-auto left-0 right-auto sm:w-[95px] sm:h-[95px] sm:left-[8px]' src={Content.top.localFile.url}></img>
                  <img alt="radiologist" className=' w-[440px] h-[440px] object-cover bg-[rgba(0, 212, 255, 0)] relative max-w-full sm:w-full sm:h-full' style={{ filter: 'grayscale(1)' }} src={Content.center.localFile.url}></img>
                  <img alt="radiologist" className=' z-[1] w-[200px] h-[200px] object-cover absolute top-auto bottom-0 left-auto right-0 sm:w-[95px] sm:h-[95px] sm:right-[8px]' src={Content.bottom.localFile.url}></img>
                </div>
                <div className=' h-auto w-[520px] max-h-full max-w-full flex flex-col items-start justify-center sm:w-full'>
                  <div className=' w-[528px] max-w-full sm:w-full sm:ml-4'>
                    <h2 className=' mb-10 text-[40px] leading-[54px] text-[#fff] tracking-[2px] uppercase mt-0  font-use sm:text-[24px]  sm:leading-[36px] sm:mb-[20px] '>
                      {Content.contenttitle}
                    </h2>
                  </div>
                  <ul className='w-full h-full max-h-none max-w-full flex flex-col relative pl-0 mb-0 mt-0 justify-between'>
  {Content.bodycontent .map((point, index) => (
    <li key={index} className='w-full max-w-full items-start mb-8 pl-0 flex'>
      <div className='bullet-line-css'></div>
      <p className='mt-0 mb-0 leading-8 text-xl text-[#fff] font-use-one'>
        {point.bodycontent.data.bodycontent}
      </p>
    </li>
  ))}
</ul>

                  <div className=' w-full max-w-full  flex sm:justify-center'>
                      <a href='https://play.google.com/store/apps/details?id=db.com.a5c&pcampaignid=web_share' rel="noreferrer" target='_blank'>
                        <Actionbutton label="Install ProtoCALL Now!"/>
                      </a>
                  </div>
                </div>

              </div>
              <div className='absolute top-auto bottom-0 left-0 right-auto sm:bottom-[-139px] '>
                <img src={star} alt='effect'></img>
              </div>
            </div>
          </div>
        </div>

        <Footer data={data.allStrapiFooter.nodes[0]} />
      </div>
    </>
  )
}

export default Osteocheck

export const pageQuery = graphql`
query MyQuery {
    allStrapiProtocall {
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

