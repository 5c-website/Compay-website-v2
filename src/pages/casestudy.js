import React from 'react'
import '../styles/global.css'
import {  graphql } from 'gatsby'
import Navbarmd from '../Utils/Navbarmd'
import Footer from '../Utils/Footer';
import Navbar from '../Utils/Navbar'
import tablogo from '../Assets/Homepage/favicon.ico'
import { Helmet } from "react-helmet";
import MobileApp from '../components/mobileapp'
import Bookdemo from '../components/Bookdemo'

function Post({data,location}) {
  // const slugFromUrl = location.pathname.substring('/casestudy/'.length).replace(/\/$/, '');
  // const content = data.casestudyposts.nodes.find((post) => post.slug === slugFromUrl);
  const slugFromUrl = location.pathname.substring('/casestudy/'.length).replace(/\/$/, '');
  const content = data.casestudyposts.nodes.find((post) => post.slug === slugFromUrl);

  console.log("data",content.seo.metaTitle)
  console.log("url",slugFromUrl);
  
  if (!content) {
    return <div>Content not found.</div>;
  }




    return (
      <>
      <Helmet>
        <html lang="en" />
        <title>{content.seo.metaTitle}</title>
        <meta name="description" content={content.seo.metaDescription.data.metaDescription} />
        <link rel="icon" href={tablogo}
          type="image/x-icon" />
      </Helmet>
      
        <div className='bg-black Homepage'>
            <Navbar />
            {/* mobile-responsive */}
            <Navbarmd/>
            <div className='blog-section sm:pt-[7rem] sm:p-[1rem]'>
                <div className='max-w-full flex justify-evenly ml-auto mr-auto mb-[165px]  sm:mt-0 sm:flex sm:flex-col'>
                <div className='flex flex-col w-[25%] mt-[3rem] sm:w-full sm:mt-0 sm:order-3'>
              <MobileApp />
            </div>
                    <div className='blog-wrapper w-[40%] max-w-full flex flex-col justify-center text-justify items-center mt-[11rem] sm:w-full sm:mt-0 sm:order-1'>
                    <h1 className=' w-full  tracking-[0] mb-[16px] text-[56px] mt-[6rem] sm:mt-0 leading-[120%] text-[#fff] sm:text-[36px]'>
                        {content.title}
                        </h1>

                        <img src={content.Heroimage.localFile.url} className=' w-full max-w-full mt-[40px] mb-[80px] pt-0 pb-0 align-middle'></img>

                        <div className=' w-[1200px] max-w-full flex flex-col justify-center items-center'>
                            <div className='blog_content leading-[150%]' style={{color:'rgba(255,255,255,0.8)'}}>
                                <p className='mb-[12px] leading-[170%] font-use-one' style={{color:'rgba(255,255,255,0.8)'}}>
                                <div className='font-use-one' style={{color:'rgba(255,255,255,0.8)'}} dangerouslySetInnerHTML={{ __html: content.case_study_content.data.case_study_content }}></div>
                                </p>
                                <div className=''>
                                <img src={content. content_image.localFile.url}  className=' w-full max-w-full mt-[40px] mb-[80px] pt-0 pb-0 align-middle ml-auto mr-auto'></img>
                                </div>
                                <div className='flex'>
                                <p className='mb-[12px] text-[18px] leading-[170%]' style={{color:'rgba(255,255,255,0.8)'}}>
                                <div dangerouslySetInnerHTML={{ __html: content.content.data.content }}></div>
                                </p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <Bookdemo/>
                </div>
            </div>


      <Footer data={data.allStrapiFooter.nodes[0]}/>
        </div>
        </>
    )
}

export default Post

export const pageQuery=graphql`
query {
  casestudyposts: allStrapiCasestudypost {
    nodes {
      seo {
        metaTitle
        metaDescription {
          data {
            metaDescription
          }
        }
      }
      slug
      Heroimage {
        localFile {
          url
        }
      }
      title
      case_study_content {
        data {
          case_study_content
        }
      }
      content_image {
        localFile {
          url
        }
      }
      content {
        data {
          content
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

