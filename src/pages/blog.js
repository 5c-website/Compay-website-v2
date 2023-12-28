import React from 'react'
import '../styles/global.css'
import Navbar from '../Utils/Navbar'
import { Link, graphql } from 'gatsby'
import Navbarmd from '../Utils/Navbarmd'
import Footer from '../Utils/Footer'
import logo from '../Assets/Homepage/2-01.png'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Helmet } from "react-helmet";
import tablogo from '../Assets/Homepage/favicon.ico'
import iso2015 from '../Assets/Homepage/iso-2015.jpg'
import iso2019 from '../Assets/Homepage/iso-2019.jpg'
import iso2022 from '../Assets/Homepage/iso-2022.jpg'


function Post({ data, location }) {
  const blogTitle = location.state?.blogTitle || 'Default Title';



  
  const content = data.blogPosts.nodes.find((post) => post.Title === blogTitle);

  if (!content) {
    return <div>Content not found.</div>;
  }




  return (
    <>
    <Helmet>
      <html lang="en" />
      <title>{content.seo.metaTitle}</title>
      <meta name="description" content={content.seo.metaDescription.data.metaDescription} />
      <link rel="icon" href= {tablogo}
        type="image/x-icon"/>
      {/* <meta name="author" content={author} /> */}
    </Helmet>
    <div className='bg-black Homepage'>
    <Navbar />
      {/* mobile-responsive */}
      <Navbarmd/>
      <div className='blog-section sm:pt-[7rem] sm:p-[1rem]'>
        <div className='max-w-full flex justify-center ml-auto mr-auto mb-[165px]  sm:mt-0 '>
          <div className='blog-wrapper w-[1200px] max-w-full flex flex-col justify-center items-center'>
            <h1 className=' w-full  tracking-[0] mb-[16px] text-[56px] leading-[120%] mt-[6rem] sm:mt-0 sm:text-[30px] text-[#fff]'>
              {content.Title}
            </h1>

            <img src={content.Heroimage.localFile.url} className=' w-full max-w-full mt-[40px] mb-[80px] pt-0 pb-0 align-middle'></img>

            <div className=' w-[1200px] max-w-full flex flex-col justify-center items-center'>
              <div className='blog_content text-[16px] leading-[150%]' style={{ color: 'rgba(255,255,255,0.8)' }}>
                <p className='mb-[12px] texxt-[18px] leading-[170%] font-use' style={{ color: 'rgba(255,255,255,0.8)' }}>
                <div className='font-use' dangerouslySetInnerHTML={{ __html: content.Blog_content.data.Blog_content }}></div>
                  {/* <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{content.Blog_content.data.Blog_content}</ReactMarkdown> */}
                  {/* {ReactHtmlParser(content.Blog_content.data.Blog_content)} */}
                </p>
                <div className=''>
                  <img src={content.content_image.localFile.url} className=' w-full max-w-full mt-[40px] mb-[80px] pt-0 pb-0 align-middle ml-auto mr-auto'></img>
                </div>
                <div className='flex'>
                  <p className='mb-[12px] text-[18px] leading-[170%] font-use' style={{ color: 'rgba(255,255,255,0.8)' }}>
                  <div className='font-use' dangerouslySetInnerHTML={{ __html: content.content.data.content}}></div>
                    {/* <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{content.content.data.content}</ReactMarkdown> */}
                  </p>
                </div>
               
                <div className=' flex gap-[8rem] justify-between mt-[20rem] sm:mt-[5rem] sm:flex-col'>
                <a href={content.Recent_post_url}>
                  <div className=' flex flex-col '>
                    <img src={content.Recent_post_image.localFile.url} className=' w-full h-auto'></img>
                    <label className=' mt-[8px] w-fit'>{content.Recent_post_title}</label>
                  </div>
                  </a>
                  <a href={content.CTA_Url}>
                    <div className=' flex flex-col '>
                    <img src={content.CTA_image.localFile.url} className=' w-full h-auto'></img>
                    <label className=' mt-[8px] w-fit'>{content.CTA_title}</label>
                  </div></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer data={data.allStrapiFooter.nodes[0]}/>
    </div>
    </>
  )
}

export default Post

export const pageQuery = graphql`
query {
  blogPosts: allStrapiBlogPost  {
    nodes {
      seo {
        metaTitle
        metaDescription {
          data {
            metaDescription
          }
        }
      }
      strapi_id
      Recent_post_url
      CTA_Url
      Heroimage {
        localFile {
          url
        }
      }
      
      Title
      Blog_content {
        data {
          Blog_content
        }
      }
      content_image {
        localFile {
          url
        }
        strapi_id
      }
      content {
        data {
          content
        }
      }
      Recent_post_image {
        localFile {
          url
        }
      }
      Recent_post_title
      CTA_image {
        localFile {
          url
        }
      }
      CTA_title
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

