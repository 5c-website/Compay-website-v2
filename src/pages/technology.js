import React from 'react'
import { graphql } from 'gatsby';
import Navbar from '../Utils/Navbar';
import Navbarmd from '../Utils/Navbarmd';
import star from '../Assets/Solution/star.svg'
import twoStar from '../Assets/Solution/two_star.svg'
import Footer from '../Utils/Footer';
import { Helmet } from "react-helmet";
import tablogo from '../Assets/Homepage/favicon.ico'

function Technology({ data }) {
  const strapiContent = data.allStrapiTechnology.nodes[0];
  

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{strapiContent.seo.metaTitle}</title>
        <meta name="description" content={strapiContent.seo.metaDescription.data.metaDescription} />
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
        <div className=' h-screen flex flex-col justify-start items-center bg-no-repeat technology-hero sm:h-[80vh] sm:p-[1rem]' style={{ backgroundImage: `url(${strapiContent.titleimg.localFile.url})` }}>
          <div className=' max-w-full ml-auto mr-auto'>
            <div className='max-w-full relative w-[1200px] mt-[234px] sm:mt-[6rem] sm:ml-[10px]'>
              <h1 className='max-w-full uppercase mt-0 mb-0 font-medium font-use text-[#fff] tracking-[2px] leading-[100px] text-[80px] sm:text-[2.5rem]'>{strapiContent.title}</h1>
              <div className='max-w-full mt-10 text-[#fff] w-[500px] ml-[100px] sm:ml-[10px] sm:mt-0  sm:w-[85%]'>
                <p className='mb-0 text-xl mt-0 leading-8  font-use-one sm:text-base'>{strapiContent.content.data.content}</p>
              </div>
            </div>
          </div>
        </div>
        <div className=' mt-[4rem] sm:mt-2 sm:p-[1rem]'>
          <div className='max-w-full flex justify-center items-center ml-auto mr-auto'>
            <div className='max-w-full relative w-[1200px]'>
              <h2 className='uppercase mt-0 mb-0   font-use text-[#fff] tracking-[2px] text-[50px] leading-[60px] sm:ml-[10px] sm:text-[22px] sm:tracking-[1px]'>{strapiContent.secondtitle}</h2>
              <h2 className='max-w-full uppercase mt-0 mb-0 font-light font-use-one text-[#fff] text-[80px] tracking-[2px] leading-[100px] sm:text-[2.5rem] sm:leading-[50px] sm:ml-[10px]'> {strapiContent.secondsubtitle}</h2>
              <p className=' mb-0 text-xl leading-8 font-use-one w-[700px] mt-[50px] ml-[100px] sm:ml-[10px] sm:text-base sm:w-[99%]' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                <div dangerouslySetInnerHTML={{ __html: strapiContent.secondcontent.data.secondcontent }}></div>
              </p>
              <div className=' w-full max-w-full justify-center flex relative mt-[104px]'>
                <div className='absolute top-auto bottom-0 left-0 right-auto '>
                  <img  src={star} alt='effect'></img>
                </div>
                <img alt='effect' src={strapiContent.secondimg.localFile.url} className='h-auto object-fill max-w-full inline-block align-middle w-[800px] '></img>
              </div>
              <div className=' w-full justify-between items-center flex relative mt-[60px] sm:mt-[5rem] sm:flex-col'>
                <div className='max-w-full w-[430px] ml-[100px] sm:ml-[5px]'>
                  <ul className='max-w-full flex flex-col pl-0 justify-between mt-0 w-[400px] h-[250px] mb-[10px]'>
                    <li className='w-full max-w-full flex items-start mb-8 pl-0'>
                      <div className='bullet-line-css'></div>
                      <p className='mb-0 text-xl leading-8 mt-0 font-use-one sm:text-base' style={{ color: 'rgba(255, 255, 255, .85)' }}>{strapiContent.secondpoint1.data.secondpoint1}</p>
                    </li>
                    <li className='w-full max-w-full flex items-start mb-8 pl-0'>
                      <div className='bullet-line-css'></div>
                      <p className='mb-0 text-xl leading-8 mt-0 font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>{strapiContent.secondpoint2.data.secondpoint2}</p>
                    </li>
                  </ul>
                </div>
                <div className='sm:mt-20 sm:w-full '>
                  <img alt='Technology' src={strapiContent.secondpointsimg.localFile.url} className='object-cover max-w-full inline-block align-middle w-[617px] h-[345px] sm:object-contain'></img>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=' pl-4 pr-4 mt-80 sm:mt-0  sm:p-[1rem]'>
          <div className='flex flex-col relative items-start  ml-auto mr-auto z-[1] max-w-[1200px]'>
            <div className='absolute top-0 bottom-auto left-auto right-0 star-embed sm:hidden '>
              <img src={star} alt='effect'></img>
            </div>
            <h2 className='uppercase mt-0 mb-0  font-use tracking-[2px] text-[50px] leading-[60px] text-[#fff] sm:text-[22px] sm:leading-10 sm:tracking-[1px] '>{strapiContent.thirdtitle}</h2>
            <h2 className='uppercase mt-0 mb-0  max-w-full  font-use text-[#fff] tracking-[2px] text-[80px] leading-[100px] sm:text-[40px] sm:leading-10'>{strapiContent.thirdsubtitle}</h2>
            <div className='w-[700px] mt-[60px] ml-[100px] sm:ml-0 sm:w-full'>
              <p className='mb-0 leading-8 text-xl mt-0  font-use-one sm:text-[18px]' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                {strapiContent.thirdcontent.data.thirdcontent}
              </p>
            </div>
            <div className='flex relative justify-center'>
              <img alt='Technology' className=' inline-block max-w-full align-middle' src={strapiContent.thirdimg.localFile.url}></img>
            </div>
            <div className='w-full max-w-full'>
              <div className='flex justify-around stats-card'>
                <div className='max-w-full' style={{ width: '351px' }}>
                  <h3 className='  leading-9 text-3xl uppercase mt-0 mb-0 font-use sm:text-[24px]' style={{ letterSpacing: '3px', color: '#fff' }}>{strapiContent.thirdcard1title}</h3>
                  <p className='mb-0 text-xl leading-8 font-use-one sm:text-lg' style={{ color: 'rgba(255, 255, 255, .85)', marginTop: '8px' }}>{strapiContent.thirdcard1content}</p>
                </div>
                <div className=' separator-effect-md'></div>
                {/* <div className=' max-w-full' style={{ width: '400px' }}>
                <h3 className='  leading-9 text-3xl uppercase mt-0 mb-0 font-use sm:text-[24px]' style={{ letterSpacing: '3px', color: '#fff' }}>{strapiContent.thirdcard2title}</h3>
                <p className='mb-0 text-xl leading-8 font-use-one sm:text-lg' style={{ color: 'rgba(255, 255, 255, .85)', marginTop: '8px' }}>{strapiContent.thirdcard2content}</p>
              </div> */}
                {/* <div className=' separator-effect-md'></div> */}
                <div className='max-w-full' style={{ width: '300px' }}>
                  <h3 className='  leading-9 text-3xl uppercase mt-0 mb-0 font-use sm:text-[24px]' style={{ letterSpacing: '3px', color: '#fff' }}>{strapiContent.thirdcard3title}</h3>
                  <p className='mb-0 text-xl leading-8 font-use-one sm:text-lg' style={{ color: 'rgba(255, 255, 255, .85)', marginTop: '8px' }}>{strapiContent.thirdcard3content}</p>
                </div>
              </div>
              <div className='absolute z-[-1] w-[342px] flex top-auto bottom-[-14%] left-0 right-auto'>
                <img src={twoStar} alt='effects'></img>
                <img src={twoStar} alt='effects'></img>
              </div>
            </div>
          </div>
        </div>
        <div className=' overflow-visible mt-[276px] mb-[240px] sm:mt-[140px] sm:p-[1rem] sm:mb-0'>
          <div className=' relative flex flex-col items-start ml-auto mr-auto z-[1] max-w-[1200px] sm:ml-0'>
            <div className='max-w-full w-full overflow-hidden'>
              <h2 className='uppercase mt-0 mb-0   font-use tracking-[2px] text-[#fff] text-[50px] leading-[60px] sm:text-[22px] sm:tracking-[1px]'>{strapiContent.fourthtitle}</h2>
              <h2 className='max-w-full uppercase mt-0 mb-0   font-use tracking-[2px] text-[#fff] text-[80px] leading-[100px] sm:leading-10 sm:text-[34px] sm:tracking-[1px] '> {strapiContent.fourthsubtitle}</h2>
              <div className='absolute z-[-1] flex top-[4%] bottom-auto left-auto right-[-4%] star-embed sm:hidden'>
                <img src={star} alt='effects'></img>
              </div>
              <div className='max-w-full overflow-hidden w-[1100px] mt-[60px] ml-[100px] sm:ml-[10px] sm:mt-[50px]'>
                <div className=' w-[700px] sm:w-[95%]'>
                  <p className='mb-0 text-xl mt-0 leading-8 font-use-one sm:text-lg' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                    {strapiContent.fourthcontent.data.fourthcontent}
                  </p>
                </div>
                <div className=' w-full max-w-full justify-between items-center flex overflow-hidden mt-[60px] sm:items-start sm:flex-col'>
                  <div className='max-w-full flex flex-col justify-center items-center mt-0 w-[400px] h-[370px] sm:w-[96%]'>
                    <ul className=' h-full flex flex-col justify-between pl-0 mt-0' style={{ marginBottom: '10px' }}>
                      <li className='w-full max-w-full items-start pl-0 flex mb-3'>
                        <div className='bullet-line-css'></div>
                        <p className='mb-0 mt-0 leading-8 font-use-one sm:text-lg' style={{ color: 'rgba(255, 255, 255, .85)', fontSize: '16px' }}>{strapiContent.fourthpoint1.data.fourthpoint1}</p>
                      </li>
                      <li className='w-full max-w-full items-start pl-0 flex mb-4'>
                        <div className='bullet-line-css'></div>
                        <p className='mb-0 mt-0 leading-8 font-use-one sm:text-lg' style={{ color: 'rgba(255, 255, 255, .85)', fontSize: '16px' }}>{strapiContent.fourthpoint2.data.fourthpoint2}</p>
                      </li>
                      <li className='w-full max-w-full items-start pl-0 flex mb-4'>
                        <div className='bullet-line-css'></div>
                        <p className='mb-0 mt-0 leading-8 font-use-one sm:text-lg' style={{ color: 'rgba(255, 255, 255, .85)', fontSize: '16px' }}>{strapiContent.fourthpoint3.data.fourthpoint3}</p>
                      </li>
                    </ul>
                  </div>
                  <div className='max-w-full w-[619px] sm:mt-[3rem] sm:w-full'>
                    <img alt='Technology' className=' inline-block max-w-full align-middle ' src={strapiContent.fourthimg.localFile.url}></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* footer section */}
        <Footer data={data.allStrapiFooter.nodes[0]} />
      </div>
    </>
  )
}

export default Technology

export const pageQuery = graphql`
query MyQuery {
    allStrapiTechnology {
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
        titleimg {
          localFile {
            url
          }
        }
        secondtitle
        secondsubtitle
        secondcontent {
          data {
            secondcontent
          }
        }
        secondimg {
          localFile {
            url
          }
        }
        secondpoint1 {
          data {
            secondpoint1
          }
        }
        secondpoint2 {
          data {
            secondpoint2
          }
        }
        secondpointsimg {
          localFile {
            url
          }
        }
        rgbtitle
        rgbsubtitle
        rgbimg {
          localFile {
            url
          }
        }
        thirdtitle
        thirdsubtitle
        thirdcontent {
          data {
            thirdcontent
          }
        }
        thirdimg {
          localFile {
            url
          }
        }
        thirdcard1title
        thirdcard1content
        thirdcard2title
        thirdcard2content
        thirdcard3title
        thirdcard3content
        fourthtitle
        fourthsubtitle
        fourthpoint1 {
          data {
            fourthpoint1
          }
        }
        fourthpoint2 {
          data {
            fourthpoint2
          }
        }
        fourthpoint3 {
          data {
            fourthpoint3
          }
        }
        fourthimg {
          localFile {
            url
          }
        }
        fourthcontent {
          data {
            fourthcontent
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
`
