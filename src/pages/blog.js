import React from 'react'
import { useState,useEffect } from 'react'
import '../styles/global.css'
import Navbar from '../Utils/Navbar'
import { Link, graphql } from 'gatsby'
import Navbarmd from '../Utils/Navbarmd'
import Footer from '../Utils/Footer'
import { Helmet } from "react-helmet";
import tablogo from '../Assets/Homepage/favicon.ico'
import MobileApp from '../components/mobileapp'
import Bookdemo from '../components/Bookdemo'
import Modal from '../Utils/Modal'



function Post({ data, location }) {
  const [showModal, setShowModal] = useState(false);

  const slugFromUrl = location.pathname.substring('/blog/'.length).replace(/\/$/, '');
  const content = data.blogPosts.nodes.find((post) => post.slug === slugFromUrl);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;

      if (scrollPercentage >= 50) {
        setShowModal(true);
        window.removeEventListener('scroll', handleScroll);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


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
        <Navbarmd />
        <div className='blog-section sm:pt-[7rem] sm:p-[1rem]'>
          <div className='max-w-full flex justify-evenly ml-auto mr-auto mb-[165px]  sm:mt-0 sm:flex sm:flex-col '>
            <div className='flex flex-col w-[25%] mt-[3rem] sm:w-full sm:mt-0 sm:order-3'>
              <MobileApp />
            </div>
            <div className='blog-wrapper w-[40%] max-w-full flex flex-col justify-center text-justify items-center mt-[11rem] sm:w-full sm:mt-0 sm:order-1'>
              <div className=' w-[1200px] max-w-full flex flex-col justify-center items-center'>
                <div className='blog_content text-[16px] leading-[150%]' style={{ color: 'rgba(255,255,255,0.8)' }}>
                  <div className='flex'>
                    <p className='mb-[12px] text-[18px] leading-[170%] font-use' style={{ color: 'rgba(255,255,255,0.8)' }}>
                      <div className='font-use' dangerouslySetInnerHTML={{ __html: content.content.data.content }}></div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Bookdemo/>

          </div>
        </div>
        <Footer data={data.allStrapiFooter.nodes[0]} />
        {showModal && <Modal />}
      </div>

    </>
  )
}

export default Post

export const pageQuery = graphql`
query {
  blogPosts: allStrapiBlogPost  {
    nodes {
      slug
      seo {
        metaTitle
        metaDescription {
          data {
            metaDescription
          }
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

