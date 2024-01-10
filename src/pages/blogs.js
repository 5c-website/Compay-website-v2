import React from 'react'
import { Link, graphql } from 'gatsby'
import Navbar from '../Utils/Navbar'

import { Fragment, useRef, useState } from 'react'
import Navbarmd from '../Utils/Navbarmd'
import Footer from '../Utils/Footer';
import Pagination from '../Utils/pagination'
import { Dialog, Transition } from '@headlessui/react'


function Blogs({ data }) {
    // const strapiContent = data.blogs.nodes;
    const strapiContent = data.blogs.nodes.sort((a, b) => new Date(b.current_date) - new Date(a.current_date));


    const blogsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);


    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = strapiContent.slice(indexOfFirstBlog, indexOfLastBlog);


    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };




    return (
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
            <Navbarmd/>
            <div>
                <div className='max-w-full justify-center flex ml-auto mr-auto' style={{ marginBottom: '60px' }}>
                    <div className='max-w-full relative mt-20' style={{ width: '1000px' }}>
                        <div className='mt-20 block relative overflow-hidden'>
                            <div className=' relative block'>
                                <div>
                                    <div className='mb-0'>
                                        <div>
                                            {currentBlogs?.map((blog,index) => (
                                                <div key={index} className='blogitems'>
                                                    <Link to={`/blog/${blog.slug}`} state={{ blogTitle: blog.title }} className='w-full max-w-full inline-block text-lg' style={{ lineHeight: '26px' }}>
                                                        <div className='w-full max-w-full pl-5 pr-5' style={{ marginBottom: '60px' }}>
                                                            <img className='blog-img' src={blog.featured_image.localFile.url} alt='sample'></img>
                                                            <div className='blog-content'>
                                                                <div className=' uppercase text-base leading-4 font-use' style={{ letterSpacing: '1px', color: '#00d4ff' }}>
                                                                    {blog.tag}
                                                                </div>
                                                                <h2
                                                                    className='uppercase mt-0 mb-0 text-[40px] text-[#fff] sm:text-[28px] font-use footer-hover'
                                                                    style={{ letterSpacing: 0, lineHeight: '120%' }}
                                                                >
                                                                    {blog.title}
                                                                </h2>
                                                                <div className='mt-0 flex text-lg' style={{ lineHeight: '26px', color: 'rgba(255, 255, 255, .5)' }}>
                                                                    <div className='3px'>{blog.duration}</div>&nbsp;
                                                                    {/* <div className='3px'>min read</div> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
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
            <Footer data={data.allStrapiFooter.nodes[0]}/>
        </div>
    )
}

export default Blogs
export const pageQuery = graphql`
 query  {
    blogs:allStrapiBlog {
        nodes {
            current_date
            slug
          featured_image {
            localFile {
              url
            }
          }
          tag
          title
          duration
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