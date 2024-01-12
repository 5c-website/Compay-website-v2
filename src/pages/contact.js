import React from 'react'
import { Link, graphql } from 'gatsby'
import '../styles/global.css'
import Navbar from '../Utils/Navbar'
import Navbarmd from '../Utils/Navbarmd'
import star from '../Assets/Solution/star.svg'
import Footer from '../Utils/Footer';
import leftdown from '../Assets/Solution/downarrow.svg'
import { Helmet } from "react-helmet";
import tablogo from '../Assets/Homepage/favicon.ico'


function Contact({ data }) {
  const strapiContent = data.allStrapiContact.nodes[0];

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


        <Navbarmd />
        <div className='Contact-page sm:p-[1rem]' style={{ backgroundImage: `url(${strapiContent.contactimg.localFile.url})` }}>
          <div className='max-w-full ml-auto mr-auto sm:w-full'>
            <div className='max-w-full relative mt-[234px] w-[1200px] sm:w-full sm:mt-28'>
              <h1 className=' uppercase max-w-full mt-0 mb-0  font-use text-[#fff] tracking-[2px] leading-[100px] sm:ml-1 text-[80px] sm:text-[2.5rem]'>{strapiContent.title}</h1>
              <div className=' max-w-full mt-8 text-[#fff] w-[500px] ml-[100px] sm:ml-[10px] sm:mt-0  sm:w-full'>
                <p className=' mt-0 mb-0 leading-8 font-use-one font-medium sm:text-xl text-[20px] sm:w-[98%]' style={{ color: 'rgba(255, 255, 255, .85)' }}>{strapiContent.titlecontent.data.titlecontent}</p>
              </div>
              <div className=' max-w-full mt-[0.5rem] text-[#fff] w-[500px] ml-[100px] sm:ml-[10px] sm:mt-[1.5rem]  sm:w-full'>
                <p className=' mt-0 mb-0 leading-8 font-use-one font-medium sm:text-xl text-[20px] sm:w-[98%]' style={{ color: 'rgba(255, 255, 255, .85)' }}>

                   <label className=' inline-block mb-[-5px]'><img width="25" height="48" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1"/></label> &nbsp; or &nbsp; <label className=' inline-block mb-[-5px]'><img width="25" height="64" src="https://img.icons8.com/glyph-neue/64/4293fe/phone.png" alt="phone"/></label> &nbsp; 5C-Shanaya <label className='text-[#00d4ff]'>+91-9587274858</label> <br/> email <label className='text-[#00d4ff]'>helpline@5cnetwork.com</label>
                  </p>
              </div>
              <button className="btn btn-2 hover-slide-up sm:w-[100%] mt-[2rem] ml-[6rem] sm:hidden">
                <Link to='/reachus'><span>{strapiContent.getintouch}</span></Link>
              </button>
            </div>
          </div>
        </div>
        <div className='relative sm:p-[1rem]'>
          <div className='flex flex-col relative items-start ml-auto mr-auto' style={{ zIndex: '1', maxWidth: '1200px' }} >
            {/* <div className='absolute top-0 bottom-auto left-auto right-[310px] star-embed-up sm:hidden '>
              <img src={star} alt='effect'></img>
            </div>
            <div className='absolute top-0 bottom-auto left-auto right-0 star-embed-up sm:hidden '>
              <img src={star} alt='effect'></img>
            </div> */}
            <div className='absolute top-auto bottom-[-387px] left-auto right-0 star-embed-up sm:hidden '>
              <img src={leftdown} alt='effect'></img>
            </div>
            <div className='absolute top-auto bottom-[-115px] left-auto right-0 star-embed-up sm:hidden '>
              <img src={leftdown} alt='effect'></img>
            </div>

            {/* <h2 className='uppercase mt-0 mb-0   font-use text-[#fff] tracking-[2px] text-[50px] leading-[60px] sm:ml-[10px] sm:leading-10 sm:text-[22px] sm:tracking-[1px]'>{strapiContent.sectitle}</h2> */}
            {/* <h2 className='max-w-full uppercase mt-0 mb-0  font-use text-[#fff] tracking-[2px] text-[80px] leading-[100px] sm:leading-10 sm:ml-[10px] sm:text-[28px] sm:tracking-[1px]'>{strapiContent.secsubtitle}</h2> */}

            <div className='contact-link'>
              <Link to='/reachus' className='flex max-w-full uppercase text-lg items-center justify-center w-[460px] h-[142px] sm:w-[85%] sm:h-[9vh]  buttons-1' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, .04)', border: '1px solid #333' }}>
                <span className='flex pt-[2rem] rounded-effect sm:pt-[1rem] sm:justify-center'>
                  <img src={strapiContent.helpimg[0].localFile.url} className='max-w-full inline-block align-middle mr-[30px] sm:mr-[20px] sm:h-[40px] sm:w-[40px] ml-[60px] sm:ml-0'></img>
                  <div>
                    <div className=' leading-9 uppercase font-use  text-[30px] sm:text-[15px]' style={{ lineHeight: '36px', letterSpacing: '3px' }}>{strapiContent.help[0].title}</div>
                  </div>
                </span>
              </Link>
              <Link to='/reachform' className='flex max-w-full uppercase text-lg items-center justify-center w-[460px] h-[142px] sm:w-[85%] sm:h-[9vh] buttons-1' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, .04)', border: '1px solid #333' }}>
                <span className='flex pt-[2.5rem] pl-[2rem] rounded-effect justify-center sm:justify-center sm:pt-[20px] sm:pl-0'>
                  <img src={strapiContent.helpimg[2].localFile.url} className='max-w-full inline-block align-middle mr-[30px] sm:mr-[20px] sm:h-[40px] sm:w-[40px]'></img>
                  <div>
                    <div className=' leading-9 uppercase font-use  text-[30px] sm:text-[15px]' style={{ lineHeight: '36px', letterSpacing: '3px' }}>{strapiContent.help[1].title}</div>
                  </div>
                </span>
              </Link>

              <Link to='/careers' className='flex max-w-full uppercase text-lg items-center justify-center w-[460px] h-[142px] sm:w-[85%] sm:h-[9vh] buttons-1' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, .04)', border: '1px solid #333' }}>
                <span className='flex pt-[3rem] pl-[5rem] rounded-effect sm:justify-center sm:pt-[20px] sm:pl-0'>
                  <img src={strapiContent.helpimg[3].localFile.url} className='max-w-full inline-block align-middle mr-[30px] sm:mr-[20px] sm:h-[40px] sm:w-[40px]'></img>
                  <div>
                    <div className=' leading-9 uppercase font-use  text-[30px] sm:text-[15px]' style={{ lineHeight: '36px', letterSpacing: '3px' }}>{strapiContent.help[3].title}</div>
                  </div>
                </span>
              </Link>

            </div>
          </div>
        </div>
        <div className='mt-[220px] mb-[200px] sm:mt-[5rem] sm:max-w-full sm:w-full sm:p-[1rem] sm:mb-0' >
          <div className='relative flex flex-col items-start ml-auto mr-auto max-w-[1200px] z-[1] sm:max-w-full sm:w-full'>
            <h2 className='uppercase mt-0 mb-0   font-use text-[#fff] tracking-[2px] text-[50px] leading-[60px] sm:ml-[10px] sm:text-[22px] sm:tracking-[1px]'>{strapiContent.loctitle}</h2>
            <h2 className='max-w-full uppercase mt-0 mb-0  font-use text-[#fff] text-[80px] tracking-[2px] leading-[100px] sm:tracking-[1px] sm:text-[38px] sm:leading-[50px] sm:ml-[10px]'>{strapiContent.locsubtitle}</h2>
            <div className='flex mt-20 justify-between  sm:flex-col  sm:w-full'>
              <a href='https://www.google.com/maps/search/5c+network/@12.9155616,77.595932,14z/data=!3m1!4b1?entry=ttu' className='cursor-pointer  ' target='_blank'>
                <div className='w-auto flex sm:mb-14 sm:max-w-[98%] sm:w-full'>
                  <div>
                    <img src={strapiContent.locationlogo.localFile.url} className='max-w-full inline-block align-middle' style={{ width: '50px', height: '50px' }}></img>
                  </div>
                  <div className='w-auto max-w-full'>
                    <div className='uppercase text-[40px] sm:text-[20px]' style={{ letterSpacing: '2px', lineHeight: '48px', color: '#fff' }}>{strapiContent.locations[0].country}</div>
                    <p className=' mt-3 mb-0 leading-8 font-use-one text-[20px] sm:text-[18px]' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                      <label className='text-[#fff] font-bold  w-[65%]'> RadHouse</label>
                      <div dangerouslySetInnerHTML={{ __html: strapiContent.locations[0].address.data.address }} className='footer-hover'></div>
                    </p>
                  </div>

                </div>
              </a>
              <a href='https://maps.app.goo.gl/mn1BzVHbv9JKVLxf6' className='cursor-pointer  hover:border-[#fff] hover:underline' target='_blank'>
                <div className=' flex w-[362px] sm:w-full'>
                  <div>
                    <img src={strapiContent.locationlogo.localFile.url} className='max-w-full inline-block align-middle' style={{ width: '40px', height: '50px' }}></img>
                  </div>
                  <div className='w-auto sm:mb-14 max-w-full'>
                    <div className='uppercase text-[40px] sm:text-[20px]' style={{ letterSpacing: '2px', lineHeight: '48px', color: '#fff' }}>{strapiContent.locations[1].country}</div>
                    <p className=' mt-3 mb-0 leading-8 font-use-one text-[20px] sm:text-[18px]' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                      <label className='text-[#fff] font-bold  w-[65%]'> Cerebrum</label>
                      <div dangerouslySetInnerHTML={{ __html: strapiContent.locations[1].address.data.address }} className='footer-hover'></div>
                    </p>
                  </div>
                </div>
              </a>
              <a href='https://maps.app.goo.gl/c6feCEK7eisaFwsV6' className='cursor-pointer  hover:border-[#fff] hover:underline ' target='_blank'>
                <div className='w-auto flex sm:mb-14 sm:max-w-[98%] sm:w-full'>
                  <div>
                    <img src={strapiContent.locationlogo.localFile.url} className='max-w-full inline-block align-middle w-[50px] sm:w-[70px]' style={{ height: '50px' }}></img>
                  </div>
                  <div className='w-auto max-w-full'>
                    <div className='uppercase text-[40px] sm:text-[20px]' style={{ letterSpacing: '2px', lineHeight: '48px', color: '#fff' }}>{strapiContent.locations[2].country}</div>
                    <p className=' mt-3 mb-0 leading-8 font-use-one text-[20px] sm:text-[18px]' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                      <label className='text-[#fff] font-bold  w-[65%]'> Neocortex</label>
                      <div dangerouslySetInnerHTML={{ __html: strapiContent.locations[2].address.data.address }} className='footer-hover'></div>
                    </p>
                  </div>

                </div>
              </a>
            </div>
          </div>
        </div>

        {/* footer section */}
        <Footer data={data.allStrapiFooter.nodes[0]} />
      </div>
    </>
  )
}

export default Contact

export const pageQuery = graphql`
query MyQuery {
    allStrapiContact {
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
        contactimg {
          localFile {
            url
          }
        }
        titlecontent {
          data {
            titlecontent
          }
        }
        sectitle
        secsubtitle
        help {
          title
        }
        helpimg {
          localFile {
            url
          }
        }
        loctitle
        locsubtitle
        locations {
          country
          address {
            data {
              address
            }
          }
        }
        locationlogo {
          localFile {
            url
          }
        }
        getintouch
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