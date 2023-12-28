import React from 'react'
import '../styles/style.css'
import Navbar from '../Utils/Navbar'
import Navbarmd from '../Utils/Navbarmd'
import { Link, graphql } from 'gatsby'
import Footer from '../Utils/Footer';
import logo from '../Assets/Homepage/2-01.png'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import hospital from '../Assets/Homepage/2.png'
import Pagination from '../Utils/pagination'
import radiologist from '../Assets/Homepage/doc.png';
import iso2015 from '../Assets/Homepage/iso-2015.jpg'
import iso2019 from '../Assets/Homepage/iso-2019.jpg'
import iso2022 from '../Assets/Homepage/iso-2022.jpg'
import Case from '../Assets/privacypolicy/case.png'

function Blogs({ data }) {
    // const strapiContent = data.casestudy.nodes;
    const strapiContent = data.casestudy.nodes.sort((a, b) => new Date(b.date) - new Date(a.date));
   

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
            <div className='sm:pt-[7rem]'>
                
                    <div class="container sm:!h-full sm:flex-col">
                    {currentBlogs?.map((blog, index) => (
                        <div key={index}  className="rounded-[10px] post" >
                            <Link to={`/casestudy/${blog.slug}`} state={{ blogTitle: blog.title }}>
                            <div class="header_post">
                                <img src={blog.featured_image.localFile.url} alt="" />
                            </div>

                            <div class="body_post">
                                <div class="post_content sm:!h-[88%]">

                                    <h1 className=' font-use sm:!text-[18px]'>{blog.title}</h1>
                                    <p className='font-use-one mt-[0.3rem] sm:!leading-[1.5rem]'>{blog.content.data.content}</p>

                                    <div class="container_infos">
                                        <div class="postedBy">
                                            <span className=' font-use'>Date</span>
                                            {blog.date}
                                        </div>

                                        <div class="container_tags">
                                            <span className=' font-use'>tags</span>
                                            <div class="tags font-use">
                                                <ul className=' font-use'>
                                                    <li>{blog.tag}</li>

                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                        ))}
                    </div>
                



            </div>
           
            {/* footer section */}
            <Footer data={data.allStrapiFooter.nodes[0]}/>
        </div>
    )
}

export default Blogs
export const pageQuery = graphql`
 query  {
    casestudy: allStrapiCasestudy {
        nodes {
          slug
          featured_image {
            localFile {
              url
            }
          }
          content{
            data{
                content
            }
          }
          title
          
          tag
          date
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