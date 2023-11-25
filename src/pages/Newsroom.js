import React from 'react'
import { Link, graphql } from 'gatsby'
import logo from '../Assets/Homepage/2-01.png'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import hospital from '../Assets/Homepage/CT scan.gif'
import radiologist from '../Assets/Homepage/Doctor.gif'


function Newsroom({ data }) {
    const strapiContent = data.allStrapiNewsroom.nodes[0];
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
                  <div className="flex sm:flex sm:items-start m-[1rem] sm:flex-col"> 
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
            <div className='absolute w-full max-w-full flex flex-col items-center bg-transparent ' style={{ zIndex: '2', color: 'rgba(255, 255, 255, 0)', top: '0' }}>
                <div className='w-full max-w-full pt-3 pb-3 ml-auto mr-auto' style={{ width: '79%' }}>
                    <nav className=' w-full max-w-full justify-around items-center flex relative float-right font-use nav-md nav-division'>
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
    <input type="checkbox"/>
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
            <div>
                <div className='max-w-full justify-center flex ml-auto mr-auto' style={{ marginBottom: '60px' }}>
                    <div className='max-w-full relative mt-20' style={{ width: '1000px' }}>
                        <div className='mt-20 block relative overflow-hidden'>
                            <div className=' relative block'>
                                <div>
                                    <div className='mb-0'>
                                        <div>
                                            <div className='blogitems'>
                                                <Link className='w-full max-w-full inline-block text-lg' style={{ lineHeight: '26px' }}>
                                                    <div className='w-full max-w-full pl-5 pr-5' style={{ marginBottom: '60px' }}>
                                                        <img className='blog-img' src={strapiContent.newsimg[0].localFile.url}></img>
                                                        <div className='blog-content'>
                                                            <div className=' uppercase text-base leading-4 font-use' style={{ letterSpacing: '1px', color: '#00d4ff' }}>{strapiContent.news[0].title}</div>
                                                            <h2 className='uppercase mt-0 mb-0  font-use' style={{ letterSpacing: 0, fontSize: '40px', lineHeight: '120%', color: '#fff' }}>
                                                                {strapiContent.news[0].content.data.content}
                                                            </h2>
                                                            <div className='mt-0 flex text-lg' style={{ lineHeight: '26px', color: 'rgba(255, 255, 255, .5)' }}>
                                                                <div className='3px'>{strapiContent.news[0].duration}</div> &nbsp;
                                                                {/* <div className='3px'>min read</div> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className='blogitems'>
                                                <Link className='w-full max-w-full inline-block  text-lg' style={{ lineHeight: '26px' }}>
                                                    <div className='w-full max-w-full pl-5 pr-5' style={{ marginBottom: '60px' }}>
                                                        <img className='blog-img' src={strapiContent.newsimg[1].localFile.url}></img>
                                                        <div className='blog-content'>
                                                            <div className=' uppercase text-base leading-4 font-use' style={{ letterSpacing: '1px', color: '#00d4ff' }}>{strapiContent.news[1].title}</div>
                                                            <h2 className='uppercase mt-0 mb-0  font-use' style={{ letterSpacing: 0, fontSize: '40px', lineHeight: '120%', color: '#fff' }}>
                                                                {strapiContent.news[1].content.data.content}
                                                            </h2>
                                                            <div className='mt-0 flex text-lg' style={{ lineHeight: '26px', color: 'rgba(255, 255, 255, .5)' }}>
                                                                <div className='3px'>{strapiContent.news[1].duration}</div>&nbsp;
                                                                {/* <div className='3px'>min read</div> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className='blogitems'>
                                                <Link className='w-full max-w-full inline-block text-lg' style={{ lineHeight: '26px' }}>
                                                    <div className='w-full max-w-full pl-5 pr-5' style={{ marginBottom: '60px' }}>
                                                        <img className='blog-img' src={strapiContent.newsimg[2].localFile.url}></img>
                                                        <div className='blog-content'>
                                                            <div className=' uppercase text-base leading-4 font-use' style={{ letterSpacing: '1px', color: '#00d4ff' }}>{strapiContent.news[2].title}</div>
                                                            <h2 className='uppercase mt-0 mb-0  font-use' style={{ letterSpacing: 0, fontSize: '40px', lineHeight: '120%', color: '#fff' }}>
                                                                {strapiContent.news[2].content.data.content}
                                                            </h2>
                                                            <div className='mt-0 flex text-lg' style={{ lineHeight: '26px', color: 'rgba(255, 255, 255, .5)' }}>
                                                                <div className='3px'>{strapiContent.news[2].duration}</div>&nbsp;
                                                                {/* <div className='3px'>min read</div> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className='blogitems'>
                                                <Link className='w-full max-w-full inline-block text-lg' style={{ lineHeight: '26px' }}>
                                                    <div className='w-full max-w-full pl-5 pr-5' style={{ marginBottom: '60px' }}>
                                                        <img className='blog-img' src={strapiContent.newsimg[3].localFile.url}></img>
                                                        <div className='blog-content'>
                                                            <div className=' uppercase text-base leading-4 font-use' style={{ letterSpacing: '1px', color: '#00d4ff' }}>{strapiContent.news[3].title}</div>
                                                            <h2 className='uppercase mt-0 mb-0  font-use' style={{ letterSpacing: 0, fontSize: '40px', lineHeight: '120%', color: '#fff' }}>
                                                                {strapiContent.news[3].content.data.content}
                                                            </h2>
                                                            <div className='mt-0 flex text-lg' style={{ lineHeight: '26px', color: 'rgba(255, 255, 255, .5)' }}>
                                                                <div className='3px'>{strapiContent.news[3].duration}</div>&nbsp;
                                                                {/* <div className='3px'>min read</div> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className='blogitems'>
                                                <Link className='w-full max-w-full inline-block text-lg' style={{ lineHeight: '26px' }}>
                                                    <div className='w-full max-w-full pl-5 pr-5' style={{ marginBottom: '60px' }}>
                                                        <img className='blog-img' src={strapiContent.newsimg[4].localFile.url}></img>
                                                        <div className='blog-content'>
                                                            <div className=' uppercase text-base leading-4 font-use' style={{ letterSpacing: '1px', color: '#00d4ff' }}>{strapiContent.news[4].title}</div>
                                                            <h2 className='uppercase mt-0 mb-0  font-use' style={{ letterSpacing: 0, fontSize: '40px', lineHeight: '120%', color: '#fff' }}>
                                                                {strapiContent.news[4].content.data.content}
                                                            </h2>
                                                            <div className='mt-0 flex text-lg' style={{ lineHeight: '26px', color: 'rgba(255, 255, 255, .5)' }}>
                                                                <div className='3px'>{strapiContent.news[4].duration}</div>&nbsp;
                                                                {/* <div className='3px'>min read</div> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className='blogitems'>
                                                <Link className='w-full max-w-full inline-block text-lg' style={{ lineHeight: '26px' }}>
                                                    <div className='w-full max-w-full pl-5 pr-5' style={{ marginBottom: '60px' }}>
                                                        <img className='blog-img' src={strapiContent.newsimg[5].localFile.url}></img>
                                                        <div className='blog-content'>
                                                            <div className=' uppercase text-base leading-4 font-use' style={{ letterSpacing: '1px', color: '#00d4ff' }}>{strapiContent.news[5].title}</div>
                                                            <h2 className='uppercase mt-0 mb-0  font-use' style={{ letterSpacing: 0, fontSize: '40px', lineHeight: '120%', color: '#fff' }}>
                                                                {strapiContent.news[5].content.data.content}
                                                            </h2>
                                                            <div className='mt-0 flex text-lg' style={{ lineHeight: '26px', color: 'rgba(255, 255, 255, .5)' }}>
                                                                <div className='3px'>{strapiContent.news[5].duration}</div>&nbsp;
                                                                {/* <div className='3px'>min read</div> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className='blogitems'>
                                                <Link className='w-full max-w-full inline-block text-lg' style={{ lineHeight: '26px' }}>
                                                    <div className='w-full max-w-full pl-5 pr-5' style={{ marginBottom: '60px' }}>
                                                        <img className='blog-img' src={strapiContent.newsimg[6].localFile.url}></img>
                                                        <div className='blog-content'>
                                                            <div className=' uppercase text-base leading-4 font-use' style={{ letterSpacing: '1px', color: '#00d4ff' }}>{strapiContent.news[6].title}</div>
                                                            <h2 className='uppercase mt-0 mb-0  font-use' style={{ letterSpacing: 0, fontSize: '40px', lineHeight: '120%', color: '#fff' }}>
                                                                {strapiContent.news[6].content.data.content}
                                                            </h2>
                                                            <div className='mt-0 flex text-lg' style={{ lineHeight: '26px', color: 'rgba(255, 255, 255, .5)' }}>
                                                                <div className='3px'>{strapiContent.news[6].duration}</div>&nbsp;
                                                                {/* <div className='3px'>min read</div> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className='blogitems'>
                                                <Link className='w-full max-w-full inline-block text-lg' style={{ lineHeight: '26px' }}>
                                                    <div className='w-full max-w-full pl-5 pr-5' style={{ marginBottom: '60px' }}>
                                                        <img className='blog-img' src={strapiContent.newsimg[7].localFile.url}></img>
                                                        <div className='blog-content'>
                                                            <div className=' uppercase text-base leading-4 font-use' style={{ letterSpacing: '1px', color: '#00d4ff' }}>{strapiContent.news[7].title}</div>
                                                            <h2 className='uppercase mt-0 mb-0  font-use' style={{ letterSpacing: 0, fontSize: '40px', lineHeight: '120%', color: '#fff' }}>
                                                                {strapiContent.news[7].content.data.content}
                                                            </h2>
                                                            <div className='mt-0 flex text-lg' style={{ lineHeight: '26px', color: 'rgba(255, 255, 255, .5)' }}>
                                                                <div className='3px'>{strapiContent.news[7].duration}</div>&nbsp;
                                                                {/* <div className='3px'>min read</div> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer section */}
            <div className='footer section pl-0 pr-0'>
                <div className='relative ml-auto mr-auto max-w-[1200px]'>
                    <div className='flex justify-between items-start pb-0 pl-4 pr-4 mb-8 mt-[101px] sm:flex-col sm:mt-50px ' style={{border: '1px #7c4c4c', borderBottomColor: 'rgba(255, 255, 255, .5)' }}>
                        <div className='flex flex-col items-start'>
                            <div className='uppercase  font-use leading-[48px] text-[40px]' style={{ color: 'rgba(255, 255, 255, .85) '}}>{strapiContent.footertitle}</div>
                            <p className=' text-xl leading-8 font-use-one w-[441px] mt-[30px] mb-[30px] sm:w-[100%] sm:text-lg' style={{ color: 'rgba(255, 255, 255, .85)'}}>{strapiContent.content.data.content}</p>
                            {/* getintouchbutton */}
                            <button className="btn btn-2 hover-slide-up sm:w-[100%]">
                            <Link to='/Contact'><span>{strapiContent.getintouch}</span></Link>
                            </button>
                            <div className='social-platform font-use sm:w-[100%]'>
                                <Link to="https://www.facebook.com/5cnetwork" target='_blank' className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                    <img src={strapiContent.sociallogo[1].localFile.url} alt='facebook' className='mr-0 max-w-full inline-block align-middle'></img>
                                </Link>
                                <Link to="https://www.linkedin.com/company/5c-network?trk=top_nav_home" target='_blank' className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                    <img src={strapiContent.sociallogo[3].localFile.url} alt='Linkedin' className='mr-0 max-w-full inline-block align-middle'></img>
                                </Link>
                                <Link to="https://twitter.com/5c_network" target='_blank' className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                    <img src={strapiContent.sociallogo[2].localFile.url} alt='Twitter' className='mr-0 max-w-full inline-block align-middle'></img>
                                </Link>
                                <Link to="https://www.instagram.com/5cnetwork/" target='_blank' className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                    <img src={strapiContent.sociallogo[0].localFile.url} alt='Medium' className='mr-0 max-w-full inline-block align-middle'></img>
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
                        <source src={strapiContent.footervideo[0].localFile.url} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
}

export default Newsroom

export const pageQuery = graphql`
query MyQuery {
    allStrapiNewsroom {
      nodes {
        newsimg {
          localFile {
            url
          }
        }
        news {
          title
          content {
            data {
              content
            }
          }
          duration
        }
        footertitle
        content {
          data {
            content
          }
        }
        sociallogo {
          localFile {
            url
          }
        }
        footervideo {
          localFile {
            url
          }
        }
        getintouch
      }
    }
  }
`
