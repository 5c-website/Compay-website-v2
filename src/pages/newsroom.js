import React from 'react'
import { useState } from 'react'
import '../styles/global.css'
import Navbar from '../Utils/Navbar'
import Navbarmd from '../Utils/Navbarmd'
import {  graphql } from 'gatsby'
import Pagination from '../Utils/pagination'
import Footer from '../Utils/Footer';
import tablogo from '../Assets/Homepage/favicon.ico'
import { Helmet } from "react-helmet";


function Newsroom({ data }) {
  // const strapiContent = data.news.nodes;
  const strapiContent = data.news.nodes.sort((a, b) => new Date(b.current_date) - new Date(a.current_date));


  const blogsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);


  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = strapiContent.slice(indexOfFirstBlog, indexOfLastBlog);


  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };



  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Newsroom</title>
        <meta name="description" content="View the latest news, announcements and media resources from 5C Network" />
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
        <div>
          <div className='max-w-full justify-center flex ml-auto mr-auto' style={{ marginBottom: '60px' }}>
            <div className='max-w-full relative mt-20' style={{ width: '1000px' }}>
              <div className='mt-20 block relative overflow-hidden'>
                <div className=' relative block'>
                  <div>
                    <div className='mb-0'>
                      <div>
                        {currentBlogs?.map((news, index) => (
                          <div key={index} className='blogitems'>
                            <a href={news.Url} rel="noreferrer" target='_blank' className='w-full max-w-full inline-block text-lg' style={{ lineHeight: '26px' }}>
                              <div className='w-full max-w-full pl-5 pr-5' style={{ marginBottom: '60px' }}>
                                <img alt='Feature_image' className='blog-img' src={news.featured_image.localFile.url}></img>
                                <div className='blog-content'>
                                  <div className=' uppercase text-base leading-4 font-use' style={{ letterSpacing: '1px', color: '#00d4ff' }}>{news.tag}</div>
                                  <h2 className='uppercase mt-0 mb-0 text-[40px] sm:text-[28px] text-[#fff] font-use   footer-hover' style={{ letterSpacing: 0, lineHeight: '120%' }}>
                                    {news.title}
                                  </h2>
                                  <div className='mt-0 flex text-lg' style={{ lineHeight: '26px', color: 'rgba(255, 255, 255, .5)' }}>
                                    <div className='3px'>{news.duration}</div> &nbsp;
                                    {/* <div className='3px'>min read</div> */}
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(strapiContent.length / blogsPerPage)}
            onPageChange={handlePageChange}
          />
        </div>

        {/* footer section */}
        <Footer data={data.allStrapiFooter.nodes[0]} />
      </div>
    </>
  )
}

export default Newsroom

export const pageQuery = graphql`
query  {
    news:allStrapiNewsroom {
        nodes {
          seo {
            metaTitle
            metaDescription {
              data {
                metaDescription
              }
            }
          }
          current_date
          featured_image {
            localFile {
              url
            }
          }
          tag
          title
          duration
          Url
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
