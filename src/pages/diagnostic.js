import React from 'react'
import { Link,graphql } from 'gatsby'
import star from '../Assets/Solution/star.svg'
import logo from '../Assets/Homepage/2-01.png'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import hospital from '../Assets/Homepage/CT scan.gif'
import radiologist from '../Assets/Homepage/Doctor.gif'

function Radiologist({ data }) {
    const Content = data.allStrapiDiagnostic.nodes[0];
    const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef(null)
 

  function openSignInModal() {
    setOpen(true);
 }


    return (
        <div className=' bg-black Homepage'>
          <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="flex sm:flex sm:items-start m-[1rem] flex-col"> 
                   <a href='https://client.5cnetwork.com/' target="_blank" className='sign-wrapper'> <div className=' flex flex-col items-center'>
                  <img src={hospital} className='w-[50%]'></img>
                  <label className='justify-center font-use mt-[1.3rem] tracking-[1px] text-[18px]'>Hospital/Diagnostic centre</label>
                  </div></a>
                  <a href='https://rads.5cnetwork.com/' target="_blank" className='sign-wrapper'>
                  <div className=' flex flex-col items-center  m-[1rem]'>
                    <img src={radiologist} className='w-[50%]'></img>
                    <label className='justify-center font-use tracking-[1px] text-[18px]'>Radiologist</label> 
                    </div>
                    </a>
                    
                  </div>
                </div>
                
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    <div onClick={openSignInModal} class="outer inline-block ml-6 mr-6 text-base align-top absolute uppercase cursor-pointer top-0 bottom-auto left-auto right-0 z-[99] sm:hidden">
        <span class="inner"></span>
        <span class="inner"></span>
        <span class="inner"></span>
        <span class="inner"></span>
        SignIn
      </div>
      <a href='https://play.google.com/store/apps/details?id=db.com.a5c' class="outer inline-block ml-6 mr-6 text-base align-top absolute uppercase cursor-pointer top-0 bottom-auto left-auto right-0 z-[99] mobile-screen-signin">
        <span class="inner"></span>
        <span class="inner"></span>
        <span class="inner"></span>
        <span class="inner"></span>
        SignIn
      </a>
            <div className='absolute w-full max-w-full flex flex-col items-center bg-transparent nav-division' style={{ zIndex: '2', color: 'rgba(255, 255, 255, 0)', top: '0' }}>
                <div className='w-full max-w-full pt-3 pb-3 ml-auto mr-auto' style={{ width: '79%' }}>
                    <nav className=' w-full max-w-full justify-around items-center flex relative float-right font-use nav-md'>
                        <Link to='/Solutions' className=' inline-block ml-6 mr-6 text-base align-top relative uppercase  hover-effect' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Solutions</Link>
                        <Link to='/Technology' className=' inline-block ml-6 mr-6 text-base align-top relative uppercase  hover-effect' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Technology</Link>
                        <Link to='/About' className=' inline-block ml-6 mr-6 text-base align-top relative uppercase  hover-effect' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>about</Link>
                        {/* <Link to='/Partners' className=' inline-block ml-6 mr-6 text-base align-top relative uppercase  hover-effect' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Partners</Link> */}
                        <Link to='/' className=' inline-block ml-6 mr-6 text-base align-top relative uppercase  hover-effect' style={{ maxWidth: '102px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}><img src={logo} alt='5C Network'></img></Link>
                        <Link to='/Carrers' className=' inline-block ml-6 mr-6 text-base align-top relative uppercase  hover-effect' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Careers</Link>
                        <div className='DropdDown'>
                            <div className='DropDowntoggle'>
                                <div className=' inline-block ml-6 mr-6 text-base align-top relative uppercase ' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Resources</div>
                            </div>
                            <nav className='navbartoggle'>
                            <Link to='/Blogs' className='navlinks hover-under '>Blogs</Link>
                <Link to='/Newsroom' className='navlinks  hover-under-1'>Newsroom</Link>
                            </nav>
                        </div>
                        <Link to='/Contact' className=' inline-block ml-6 mr-6 text-base align-top relative uppercase  hover-effect' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Contact</Link>
                        
                    </nav>
                </div>
            </div>

            {/* Mobile responsive */}
            <nav role="navigation" className='mobile-nav'>
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                        <li><Link to="/Solutions">Solutions</Link></li>
                        <li><Link to="/Technology">Technology</Link></li>
                        {/* <li><Link to="/Partners">Partners</Link></li> */}
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        
                                    <li><Link to="/Blogs">Blogs</Link></li>
                                    <li><Link to="/Newsroom">Newsroom</Link></li>
                                
                        <li><Link to="/Carrers">Careers</Link></li>
                        <li><Link to="/Contact" target="_blank">contact</Link></li>
                        {/* <li><div onClick={openSignInModal}>SignIn</div></li> */}
                    </ul>
                </div>
            </nav>
            <div className=' flex items-center flex-col sm:p-[1rem]'>
                <div className=' max-w-full flex flex-col justify-center items-center relative ml-auto mr-auto'>
                    <div className=' w-full max-w-full flex flex-col items-center pt-[100px] relative'>
                    <div className='absolute top-auto bottom-0 left-auto right-0 star-embed sm:bottom-[-110px] '>
                              <img src={star} alt='effect'></img>
                            </div>
                        <div className=' w-full max-w-full mb-20 sm:mb-14'>
                            <h1 className=' max-w-full text-[#fff] tracking-[2px] uppercase mt-0 mb-0 text-[60px]  leading-[100px] font-use sm:text-[30px] sm:ml-2'>{Content.title}</h1>
                        </div>
                        <div className=' h-auto max-w-full justify-between items-center flex flex-row-reverse relative ml-[100px] mb-[140px] w-[1100px] sm:flex-col sm:w-full sm:ml-0'>
                            <div className=' w-[541px] h-[580px] max-w-full items-center mr-0 flex relative px-[50px] py-[47px] sm:h-[284px] sm:mb-0 sm:p-5'>
                                <img className=' z-[1] w-[200px] h-[200px] object-cover absolute top-0 bottom-auto left-0 right-auto sm:w-[95px] sm:h-[95px] sm:left-[8px]' src={Content.top.localFile.url}></img>
                                <img className=' w-[440px] h-[440px] object-cover bg-[rgba(0, 212, 255, 0)] relative max-w-full sm:w-full sm:h-full' style={{ filter: 'grayscale(1)' }} src={Content.cen.localFile.url}></img>
                                <img className=' z-[1] w-[200px] h-[200px] object-cover absolute top-auto bottom-0 left-auto right-0 sm:w-[95px] sm:h-[95px] sm:right-[8px]' src={Content.bottom.localFile.url}></img>
                            </div>
                            <div className=' h-auto w-[520px] max-h-full max-w-full flex flex-col items-start justify-center sm:w-full'>
                                <div className=' w-[528px] max-w-full sm:w-full '>
                                    <h2 className=' mb-10 text-[40px] leading-[54px] text-[#fff] tracking-[2px] uppercase mt-0  font-use sm:text-[24px]  sm:leading-[36px] sm:mb-[20px] '>
                                    {Content.contentTitle}
                                    </h2>
                                </div>
                                <ul className=' w-full h-full max-h-none max-w-full flex flex-col relative pl-0 mb-0 mt-0 justify-between'>
                                    <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                                        <div className='bullet-line-css'></div>
                                        <p className=' mt-0 mb-0 leading-8 text-xl text-[#fff] font-use-one'>
                                        {Content.point1.data.point1}
                                        </p>
                                    </li>
                                    <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                                        <div className='bullet-line-css'></div>
                                        <p className=' mt-0 mb-0 leading-8 text-xl text-[#fff] font-use-one'>
                                        {Content.point2.data.point2}
                                        </p>
                                    </li>
                                    <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                                        <div className='bullet-line-css'></div>
                                        <p className=' mt-0 mb-0 leading-8 text-xl text-[#fff] font-use-one'>
                                        {Content.point3.data.point3}
                                        </p>
                                    </li>
                                    {/* <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                                        <div className='bullet-line-css'></div>
                                        <p className=' mt-0 mb-0 leading-8 text-xl text-[#fff] font-use-one'>
                                            Cover large areas daily with up-to-date data across the entire season
                                        </p>
                                    </li> */}
                                    {/* <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                                        <div className='bullet-line-css'></div>
                                        <p className=' mt-0 mb-0 leading-8 text-xl text-[#fff] font-use-one'>
                                            Cover large areas daily with up-to-date data across the entire season
                                        </p>
                                    </li> */}
                                </ul>
                                <div className=' w-full max-w-full mt-7 flex sm:justify-center'>
                <button class="btn btn-2 hover-slide-up uppercase">
                  <Link to='/ReachForm'><span>Reach Us</span></Link>
                </button>
              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer section pl-0 pr-0'>
                <div className='relative ml-auto mr-auto max-w-[1200px]'>
                    <div className='flex justify-between items-start pb-0 pl-4 pr-4 mb-8 mt-[101px] sm:flex-col sm:mt-50px ' style={{border: '1px #7c4c4c', borderBottomColor: 'rgba(255, 255, 255, .5)' }}>
                        <div className='flex flex-col items-start'>
                            <div className='uppercase  font-use leading-[48px] text-[40px]' style={{ color: 'rgba(255, 255, 255, .85) '}}>{Content.footerlefttitle}</div>
                            <p className=' text-xl leading-8 font-use-one w-[441px] mt-[30px] mb-[30px] sm:w-[100%] sm:text-lg' style={{ color: 'rgba(255, 255, 255, .85)'}}>{Content.footercontent.data.footercontent}</p>
                            {/* getintouchbutton */}
                            <button className="btn btn-2 hover-slide-up sm:w-[100%]">
                            <Link to='/Contact'><span>{Content.git}</span></Link>
                            </button>
                            <div className='social-platform font-use sm:w-[100%]'>
                                <Link to="https://www.facebook.com/5cnetwork" target='_blank' className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                    <img src={Content.socialPlatforms[1].localFile.url} alt='facebook' className='mr-0 max-w-full inline-block align-middle'></img>
                                </Link>
                                <Link to="https://www.linkedin.com/company/5c-network?trk=top_nav_home" target='_blank' className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                    <img src={Content.socialPlatforms[2].localFile.url} alt='Linkedin' className='mr-0 max-w-full inline-block align-middle'></img>
                                </Link>
                                <Link to="https://twitter.com/5c_network" target='_blank' className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                    <img src={Content.socialPlatforms[3].localFile.url} alt='Twitter' className='mr-0 max-w-full inline-block align-middle'></img>
                                </Link>
                                <Link to="https://www.instagram.com/5cnetwork/" target='_blank' className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                    <img src={Content.socialPlatforms[0].localFile.url} alt='Medium' className='mr-0 max-w-full inline-block align-middle'></img>
                                </Link>
                            </div>
                        </div>
                        <div className='flex sm:mt-[65px] sm:w-[100%] sm:justify-between'>
                            <div className='flex flex-col font-use ml-[60px] sm:ml-[5px]'>
                            <Link to="/About" className='uppercase mb-4 text-sm leading-5 ' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>about</Link>
                                <Link to="/Solutions" className='uppercase mb-4 text-sm leading-5 ' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>solutions</Link>
                                <Link to="/Technology" className='uppercase mb-4 text-sm leading-5 ' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Technology</Link>
                                {/* <Link to="#" className='uppercase mb-4 text-sm leading-5 ' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>media</Link> */}
                                <Link to="/Blogs" className='uppercase mb-4 text-sm leading-5 ' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>blogs</Link>
                                <Link to="/Newsroom" className='uppercase mb-4 text-sm leading-5 ' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>newsroom</Link>
                                {/* <Link to="#" className='uppercase mb-4 text-sm leading-5 ' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>annual returns</Link> */}

                            </div>
                            <div className='flex flex-col font-use ml-[60px]'>
                                {/* <Link to="#" className='uppercase mb-4 text-sm leading-5 ' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>vision</Link> */}
                                <Link to="/Carrers" className='uppercase mb-4 text-sm leading-5 ' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>careers</Link>
                                <Link to="/Contact" className='uppercase mb-4 text-sm leading-5 ' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>contact</Link>
                                {/* <Link to="#" className='uppercase mb-4 text-sm leading-5 ' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>privacy policy</Link> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative flex flex-row items-end mt-0 overflow-hidden' style={{ color: '#fff', height: '400px' }}>
                    <video autoPlay loop muted className=' w-full h-full absolute m-auto object-cover bg-cover inline-block align-baseline ' style={{ backgroundPosition: '50%', top: '-100%', bottom: '-100%', left: '-100%', right: '-100%' }}>
                        <source src={Content.footervideo.localFile.url} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
}

export default Radiologist

export const pageQuery = graphql`
query MyQuery {
    allStrapiDiagnostic {
      nodes {
        title
        top {
          localFile {
            url
          }
        }
        bottom {
          localFile {
            url
          }
        }
        cen {
          localFile {
            url
          }
        }
        contentTitle
        point1 {
          data {
            point1
          }
        }
        point2 {
          data {
            point2
          }
        }
        point3 {
          data {
            point3
          }
        }
        point4 {
          data {
            point4
          }
        }
        point5 {
          data {
            point5
          }
        }
        footertitle
        footercontent {
          data {
            footercontent
          }
        }
        socialPlatforms {
          localFile {
            url
          }
        }
        footervideo {
          localFile {
            url
          }
        }
        git
      }
    }
  }

`

