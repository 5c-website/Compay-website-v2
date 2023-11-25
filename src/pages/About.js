import React from 'react'
import { Link, graphql } from 'gatsby'
import Marquee from 'react-fast-marquee'
import Img from 'gatsby-image';
import downstar from '../Assets/Solution/downarrow.svg'
import leftdown from '../Assets/Solution/leftdown.svg'
import logo from '../Assets/Homepage/2-01.png'
import mobilestar from '../Assets/Solution/single-mobile.svg'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import hospital from '../Assets/Homepage/2.png'
import radiologist from '../Assets/Homepage/doc.png'

function About({ data }) {
    const strapiContent = data.allStrapiAbout.nodes[0];
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg w-[60%]">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="flex sm:flex sm:items-start m-[1rem] sm:flex-col"> 
                  <a href='https://client.5cnetwork.com/' target="_blank" className='sign-wrapper'> 
                      <div className=' flex flex-col items-center'>
                        <img src={hospital} className='w-[50%]'></img>
                        <label className='justify-center font-use mt-[1.3rem] tracking-[1px] text-[18px] uppercase font-semibold'>Hospital/Diagnostic centre</label>
                      </div>
                      </a>
                      <a href='https://rads.5cnetwork.com/' target="_blank" className='sign-wrapper'> 
                      <div className=' flex flex-col items-center'>
                        <img src={radiologist} className='w-[50%]'></img>
                        <label className='justify-center font-use mt-[1.3rem] tracking-[1px] text-[18px] uppercase font-semibold'>Radiologist</label>
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
        Sign In
      </div>
      <a href='https://play.google.com/store/apps/details?id=db.com.a5c' class="outer inline-block ml-6 mr-6 text-base align-top absolute uppercase cursor-pointer top-0 bottom-auto left-auto right-0 z-[99] mobile-screen-signin">
        <span class="inner"></span>
        <span class="inner"></span>
        <span class="inner"></span>
        <span class="inner"></span>
        Sign In
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
      <li><Link to="/Contact" target="_blank">Contact</Link></li>
      {/* <li><div onClick={openSignInModal}>SignIn</div></li> */}
    </ul>
  </div>
</nav>
            <div className='about-home  sm:h-[90vh] sm:p-[1rem]' style={{ backgroundImage: `url(${strapiContent.abouthomeimg.localFile.url})` }}>
                <div className='max-w-full ml-auto mr-auto sm:ml-[10px]'>
                    <div className='max-w-full relative w-[1200px] mt-[234px] sm:mt-24'>
                        <h1 className=' uppercase max-w-full mt-0 mb-0  font-use text-[#fff] tracking-[2px] leading-[100px] text-[80px] sm:text-[2.5rem]'>{strapiContent.title}</h1>
                        <div className=' max-w-full mt-8 text-[#fff] w-[500px] ml-[100px] sm:ml-[10px] sm:mt-0  sm:w-[85%]'>
                            <p className=' mt-0 mb-0 leading-8 font-use-one sm:text-base text-[20px]' style={{color: 'rgba(255, 255, 255, .85)' }}>
                                {strapiContent.content.data.content}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='passion sm:pt-[3rem] sm:pb-[130px] sm:p-[1rem] ' style={{ backgroundImage: `url(${strapiContent.secimg.localFile.url})` }}>
                <div className='flex flex-col items-start relative ml-auto mr-auto' style={{ zIndex: '1', maxWidth: '1200px' }}>
                    <h1 className=' uppercase mt-0 mb-0  font-use text-[#fff] tracking-[2px] text-[50px] leading-[60px] sm:ml-[10px] sm:text-[22px] sm:tracking-[1px]'>{strapiContent.sectitle}</h1>
                    <h1 className=' uppercase max-w-full mt-0 mb-0  font-use text-[#fff] text-[80px] tracking-[2px] leading-[100px] sm:text-[34px] sm:leading-[50px] sm:ml-[10px]' style={{width: '1000px' }}>{strapiContent.secsubtitle}</h1>
                    <div className='max-w-full ml-[100px] mt-[50px] w-[800px] sm:ml-[10px] sm:w-[96%]'>
                        <p className=' mt-0 mb-0 leading-8 font-use-one' style={{ fontSize: '20px', color: 'rgba(255, 255, 255, .85)' }}>
                            {strapiContent.secpara.data.secpara}
                        </p>
                    </div>
                </div>
            </div>
            <div className='overflow-hidden mt-40 sm:mt-20 sm:p-[1rem]' >
                <div className=' relative flex flex-col items-start ml-auto mr-auto' style={{ zIndex: 1, maxWidth: '1200px' }}>
                    <div className=' absolute z-[-99] top-0 bottom-auto left-auto right-[-6%] star-embed-down '>
                        <img src={downstar}></img>
                    </div>
                    
                    <h1 className=' uppercase mt-0 mb-0  font-use text-[#fff] tracking-[2px] text-[50px] leading-[60px] sm:ml-[10px] sm:text-[22px] sm:tracking-[1px]'>{strapiContent.leadertitle}</h1>
                    <div className='card-layout-container'>
                        <div className=' h-auto object-cover mr-0 flex flex-col relative pb-5 w-[264px] sm:w-[95%]' style={{ border: '1px solid #333', marginBottom: '60px' }}>
                            <div>
                                <img className='card-img' src={strapiContent.leadershipcardsimg[0].localFile.url}></img>
                            </div>
                            <div className=' h-auto pr-4' style={{ paddingLeft: '15px' }}>
                                <div className='flex relative items-end justify-between'>
                                    <div className='flex flex-col'>
                                        <h3 className=' text-2xl leading-8  mb-0 uppercase font-use' style={{  color: '#fff', letterSpacing: '3px' }}>{strapiContent.leadershipcards[0].firstname}</h3>
                                        <h3 className=' text-2xl leading-8  mt-0 mb-0 uppercase font-use' style={{ color: '#fff', letterSpacing: '3px' }}>{strapiContent.leadershipcards[0].lastname}</h3>
                                    </div>
                                    <a href='https://www.linkedin.com/in/kalyan-sivasailam-3925074a/' target='_blank' className=' w-8 h-8 justify-center items-center flex max-w-full uppercase text-lg no-underline' style={{ border: '1px solid #00d4ff', borderRadius: '100px', color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                        <div>
                                            <img src={strapiContent.socialplatform[2].localFile.url}></img>
                                        </div>
                                    </a>
                                </div>
                                <div className='linkedin-separator'></div>
                                <div className=' mt-2'>
                                    <div className='text-lg leading-7 font-use-one' style={{ color: 'rgba(255, 255, 255, .75)' }}>{strapiContent.leadershipcards[0].position}</div>
                                </div>
                            </div>
                        </div>
                        <div className=' h-auto object-cover mr-0 flex flex-col relative pb-5 w-[264px] sm:w-[95%]' style={{ border: '1px solid #333', marginBottom: '60px' }}>
                            <div>
                                <img className='card-img' src={strapiContent.leadershipcardsimg[1].localFile.url}></img>
                            </div>
                            <div className=' h-auto pr-4' style={{ paddingLeft: '15px' }}>
                                <div className='flex relative items-end justify-between'>
                                    <div className='flex flex-col'>
                                        <h3 className=' text-2xl leading-8  mb-0 uppercase font-use' style={{  color: '#fff', letterSpacing: '3px' }}>{strapiContent.leadershipcards[1].firstname}</h3>
                                        <h3 className=' text-2xl leading-8  mt-0 mb-0 uppercase font-use' style={{ color: '#fff', letterSpacing: '3px' }}>{strapiContent.leadershipcards[1].lastname}</h3>
                                    </div>
                                    <a href='https://www.linkedin.com/in/syed-s-ahmed-06553114/' target='_blank' className=' w-8 h-8 justify-center items-center flex max-w-full uppercase text-lg no-underline' style={{ border: '1px solid #00d4ff', borderRadius: '100px', color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                        <div>
                                            <img src={strapiContent.socialplatform[2].localFile.url}></img>
                                        </div>
                                    </a>
                                </div>
                                <div className='linkedin-separator'></div>
                                <div className=' mt-2'>
                                    <div className=' text-lg leading-7 font-use-one' style={{ color: 'rgba(255, 255, 255, .75)' }}>{strapiContent.leadershipcards[1].position} </div>
                                </div>
                            </div>
                        </div>
                        <div className=' h-auto object-cover mr-0 flex flex-col relative pb-5 w-[264px] sm:w-[95%]' style={{ border: '1px solid #333', marginBottom: '60px' }}>
                            <div>
                                <img className='card-img' src={strapiContent.leadershipcardsimg[2].localFile.url}></img>
                            </div>
                            <div className=' h-auto pr-4' style={{ paddingLeft: '15px' }}>
                                <div className='flex relative items-end justify-between'>
                                    <div className='flex flex-col'>
                                        <h3 className=' text-2xl leading-8  mb-0 uppercase font-use' style={{  color: '#fff', letterSpacing: '3px' }}>{strapiContent.leadershipcards[2].firstname}</h3>
                                        <h3 className=' text-2xl leading-8  mt-0 mb-0 uppercase font-use' style={{ color: '#fff', letterSpacing: '3px' }}>{strapiContent.leadershipcards[2].lastname}</h3>
                                    </div>
                                    <a href='https://www.linkedin.com/in/anandriyer/' target='_blank' className=' w-8 h-8 justify-center items-center flex max-w-full uppercase text-lg no-underline' style={{ border: '1px solid #00d4ff', borderRadius: '100px', color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                        <div>
                                            <img src={strapiContent.socialplatform[2].localFile.url}></img>
                                        </div>
                                    </a>
                                </div>
                                <div className='linkedin-separator'></div>
                                <div className=' mt-2'>
                                    <div className=' text-lg leading-7 font-use-one' style={{ color: 'rgba(255, 255, 255, .75)' }}>{strapiContent.leadershipcards[2].position}</div>
                                </div>
                            </div>
                        </div>
                        <div className=' h-auto object-cover mr-0 flex flex-col relative pb-5 w-[264px] sm:w-[95%]' style={{ border: '1px solid #333', marginBottom: '60px' }}>
                            <div>
                                <img className='card-img' src={strapiContent.leadershipcardsimg[3].localFile.url}></img>
                            </div>
                            <div className=' h-auto pr-4' style={{ paddingLeft: '15px' }}>
                                <div className='flex relative items-end justify-between'>
                                    <div className='flex flex-col'>
                                        <h3 className=' text-2xl leading-8  mb-0 uppercase font-use' style={{  color: '#fff', letterSpacing: '3px' }}>{strapiContent.leadershipcards[3].firstname}</h3>
                                        <h3 className=' text-2xl leading-8  mt-0 mb-0 uppercase font-use' style={{ color: '#fff', letterSpacing: '3px' }}>{strapiContent.leadershipcards[3].lastname}</h3>
                                    </div>
                                    <a href='https://www.linkedin.com/in/bargava/' target='_blank' className=' w-8 h-8 justify-center items-center flex max-w-full uppercase text-lg no-underline' style={{ border: '1px solid #00d4ff', borderRadius: '100px', color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                        <div>
                                            <img src={strapiContent.socialplatform[2].localFile.url}></img>
                                        </div>
                                    </a>
                                </div>
                                <div className='linkedin-separator'></div>
                                <div className=' mt-2'>
                                    <div className=' text-lg leading-7 font-use-one' style={{ color: 'rgba(255, 255, 255, .75)' }}>{strapiContent.leadershipcards[3].position}</div>
                                </div>
                            </div>
                        </div>
                        <div className=' h-auto object-cover mr-0 flex flex-col relative pb-5 w-[264px] sm:w-[95%]' style={{ border: '1px solid #333', marginBottom: '60px' }}>
                            <div>
                                <img className='card-img' src={strapiContent.leadershipcardsimg[4].localFile.url}></img>
                            </div>
                            <div className=' h-auto pr-4' style={{ paddingLeft: '15px' }}>
                                <div className='flex relative items-end justify-between'>
                                    <div className='flex flex-col'>
                                        <h3 className=' text-2xl leading-8  mb-0 uppercase font-use' style={{  color: '#fff', letterSpacing: '3px' }}>{strapiContent.leadershipcards[4].firstname}</h3>
                                        <h3 className=' text-2xl leading-8  mt-0 mb-0 uppercase font-use' style={{ color: '#fff', letterSpacing: '3px' }}>{strapiContent.leadershipcards[4].lastname}</h3>
                                    </div>
                                    <a href='https://www.linkedin.com/in/kirthiraj/' target='_blank' className=' w-8 h-8 justify-center items-center flex max-w-full uppercase text-lg no-underline' style={{ border: '1px solid #00d4ff', borderRadius: '100px', color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                        <div>
                                            <img src={strapiContent.socialplatform[2].localFile.url}></img>
                                        </div>
                                    </a>
                                </div>
                                <div className='linkedin-separator'></div>
                                <div className=' mt-2'>
                                    <div className=' text-lg leading-7 font-use-one' style={{ color: 'rgba(255, 255, 255, .75)' }}>{strapiContent.leadershipcards[4].position}</div>
                                </div>
                            </div>
                        </div>
                        <div className=' h-auto object-cover mr-0 flex flex-col relative pb-5 w-[264px] sm:w-[95%]' style={{border: '1px solid #333', marginBottom: '60px' }}>
                            <div>
                                <img className='card-img' src={strapiContent.leadershipcardsimg[5].localFile.url}></img>
                            </div>
                            <div className=' h-auto pr-4' style={{ paddingLeft: '15px' }}>
                                <div className='flex relative items-end justify-between'>
                                    <div className='flex flex-col'>
                                        <h3 className=' text-2xl leading-8  mb-0 uppercase font-use' style={{  color: '#fff', letterSpacing: '3px' }}>{strapiContent.leadershipcards[5].firstname}</h3>
                                        <h3 className=' text-2xl leading-8  mt-0 mb-0 uppercase font-use' style={{ color: '#fff', letterSpacing: '3px' }}>{strapiContent.leadershipcards[5].lastname}</h3>
                                    </div>
                                    <a href='https://www.linkedin.com/in/vamshiavk/' target='_blank' className=' w-8 h-8 justify-center items-center flex max-w-full uppercase text-lg no-underline' style={{ border: '1px solid #00d4ff', borderRadius: '100px', color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                        <div>
                                            <img src={strapiContent.socialplatform[2].localFile.url}></img>
                                        </div>
                                    </a>
                                </div>
                                <div className='linkedin-separator'></div>
                                <div className=' mt-2'>
                                    <div className=' text-lg leading-7 font-use-one' style={{ color: 'rgba(255, 255, 255, .75)' }}>{strapiContent.leadershipcards[5].position}</div>
                                </div>
                            </div>
                        </div>
                        <div className=' h-auto object-cover mr-0 flex flex-col relative pb-5 w-[264px] sm:w-[95%]' style={{border: '1px solid #333', marginBottom: '60px' }}>
                            <div>
                                <img className='card-img' src={strapiContent.leadershipcardsimg[6].localFile.url}></img>
                            </div>
                            <div className=' h-auto pr-4' style={{ paddingLeft: '15px' }}>
                                <div className='flex relative items-end justify-between'>
                                    <div className='flex flex-col'>
                                        <h3 className=' text-2xl leading-8  mb-0 uppercase font-use' style={{  color: '#fff', letterSpacing: '3px' }}>{strapiContent.leadershipcards[6].firstname}</h3>
                                        <h3 className=' text-2xl leading-8  mt-0 mb-0 uppercase font-use' style={{ color: '#fff', letterSpacing: '3px' }}>{strapiContent.leadershipcards[6].lastname}</h3>
                                    </div>
                                    <a href='https://www.linkedin.com/in/prathyusha-mannar-462a147/' target='_blank' className=' w-8 h-8 justify-center items-center flex max-w-full uppercase text-lg no-underline' style={{ border: '1px solid #00d4ff', borderRadius: '100px', color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                        <div>
                                            <img src={strapiContent.socialplatform[2].localFile.url}></img>
                                        </div>
                                    </a>
                                </div>
                                <div className='linkedin-separator'></div>
                                <div className=' mt-2'>
                                    <div className=' text-lg leading-7 font-use-one' style={{ color: 'rgba(255, 255, 255, .75)' }}>{strapiContent.leadershipcards[6].position}</div>
                                </div>
                            </div>
                        </div>
                        {/* <div className=' h-auto object-cover mr-0 flex flex-col relative pb-5 w-[264px] sm:w-[95%]' style={{border: '1px solid #333', marginBottom: '60px' }}>
                            <div>
                                <img className='card-img' src={strapiContent.leadershipcardsimg[6].localFile.url}></img>
                            </div>
                            <div className=' h-auto pr-4' style={{ paddingLeft: '15px' }}>
                                <div className='flex relative items-end justify-between'>
                                    <div className='flex flex-col'>
                                        <h3 className=' text-2xl leading-8  mb-0 uppercase font-use' style={{  color: '#fff', letterSpacing: '3px' }}>{strapiContent.leadershipcards[7].firstname}</h3>
                                        <h3 className=' text-2xl leading-8  mt-0 mb-0 uppercase font-use' style={{ color: '#fff', letterSpacing: '3px' }}>{strapiContent.leadershipcards[7].lastname}</h3>
                                    </div>
                                    <a href='https://www.linkedin.com/in/kalyan-sivasailam-3925074a/' target='_blank' className=' w-8 h-8 justify-center items-center flex max-w-full uppercase text-lg no-underline' style={{ border: '1px solid #00d4ff', borderRadius: '100px', color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                        <div>
                                            <img src={strapiContent.socialplatform[2].localFile.url}></img>
                                        </div>
                                    </a>
                                </div>
                                <div className='linkedin-separator'></div>
                                <div className=' mt-2'>
                                    <div className=' text-lg leading-7 font-use-one' style={{ color: 'rgba(255, 255, 255, .75)' }}>{strapiContent.leadershipcards[7].position}</div>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className=' h-auto object-cover mr-0 flex flex-col relative pb-5 w-[264px] sm:w-[95%]' style={{ border: '1px solid #333', marginBottom: '60px' }}>
                            <div>
                                <img className='card-img' src={strapiContent.leadershipcardsimg[7].localFile.url}></img>
                            </div>
                            <div className=' h-auto pr-4' style={{ paddingLeft: '15px' }}>
                                <div className='flex relative items-end justify-between'>
                                    <div className='flex flex-col'>
                                        <h3 className=' text-2xl leading-8  mb-0 uppercase font-use' style={{  color: '#fff', letterSpacing: '3px' }}>{strapiContent.leadershipcards[8].firstname}</h3>
                                        <h3 className=' text-2xl leading-8  mt-0 mb-0 uppercase font-use' style={{ color: '#fff', letterSpacing: '3px' }}>{strapiContent.leadershipcards[8].lastname}</h3>
                                    </div>
                                    <a href='https://www.linkedin.com/in/kalyan-sivasailam-3925074a/' target='_blank' className=' w-8 h-8 justify-center items-center flex max-w-full uppercase text-lg no-underline' style={{ border: '1px solid #00d4ff', borderRadius: '100px', color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                        <div>
                                            <img src={strapiContent.socialplatform[2].localFile.url}></img>
                                        </div>
                                    </a>
                                </div>
                                <div className='linkedin-separator'></div>
                                <div className=' mt-2'>
                                    <div className=' text-lg leading-7 font-use-one' style={{ color: 'rgba(255, 255, 255, .75)' }}>{strapiContent.leadershipcards[8].position}</div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                {/* <div className=' relative flex flex-col items-start ml-auto mr-auto' style={{ zIndex: 1, maxWidth: '1200px' }}>
                    <h1 className=' uppercase mt-0 mb-0  font-use' style={{ color: '#fff', letterSpacing: '2px', fontSize: '50px', lineHeight: '60px' }}>{strapiContent.advtext}</h1>
                    <div className='card-layout-container sm:mb-8'>
                        <div className=' h-auto object-cover mr-0 flex flex-col relative pb-5 w-[264px] sm:w-[95%]' style={{ border: '1px solid #333', marginBottom: '60px' }}>
                            <div>
                                <img className='card-img' src={strapiContent.advisorcardimg[0].localFile.url}></img>
                            </div>
                            <div className=' h-auto pr-4' style={{ paddingLeft: '15px' }}>
                                <div className='flex relative items-end justify-between'>
                                    <div className='flex flex-col'>
                                        <h3 className=' text-2xl leading-8  mb-0 uppercase font-use' style={{  color: '#fff', letterSpacing: '3px' }}>{strapiContent.advisiorcard[0].firstname}</h3>
                                        <h3 className=' text-2xl leading-8  mt-0 mb-0 uppercase font-use' style={{ color: '#fff', letterSpacing: '3px' }}>{strapiContent.advisiorcard[0].lastname}</h3>
                                    </div>
                                    <a href='https://www.linkedin.com/in/kalyan-sivasailam-3925074a/' target='_blank' className=' w-8 h-8 justify-center items-center flex max-w-full uppercase text-lg no-underline' style={{ border: '1px solid #00d4ff', borderRadius: '100px', color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                        <div>
                                            <img src={strapiContent.socialplatform[2].localFile.url}></img>
                                        </div>
                                    </a>
                                </div>
                                <div className='linkedin-separator'></div>

                            </div>
                        </div>
                        <div className=' h-auto object-cover mr-0 flex flex-col relative pb-5 w-[264px] sm:w-[95%]' style={{border: '1px solid #333', marginBottom: '60px' }}>
                            <div>
                                <img className='card-img' src={strapiContent.advisorcardimg[2].localFile.url}></img>
                            </div>
                            <div className=' h-auto pr-4' style={{ paddingLeft: '15px' }}>
                                <div className='flex relative items-end justify-between'>
                                    <div className='flex flex-col'>
                                        <h3 className=' text-2xl leading-8  mb-0 uppercase font-use' style={{  color: '#fff', letterSpacing: '3px' }}>{strapiContent.advisiorcard[1].firstname}</h3>
                                        <h3 className=' text-2xl leading-8  mt-0 mb-0 uppercase font-use' style={{ color: '#fff', letterSpacing: '3px' }}>{strapiContent.advisiorcard[1].lastname}</h3>
                                    </div>
                                    <a href='https://www.linkedin.com/in/kalyan-sivasailam-3925074a/' target='_blank' className=' w-8 h-8 justify-center items-center flex max-w-full uppercase text-lg no-underline' style={{ border: '1px solid #00d4ff', borderRadius: '100px', color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                        <div>
                                            <img src={strapiContent.socialplatform[2].localFile.url}></img>
                                        </div>
                                    </a>
                                </div>
                                <div className='linkedin-separator'></div>

                            </div>
                        </div>
                        <div className=' h-auto object-cover mr-0 flex flex-col relative pb-5 w-[264px] sm:w-[95%]' style={{ border: '1px solid #333', marginBottom: '60px' }}>
                            <div>
                                <img className='card-img' src={strapiContent.advisorcardimg[1].localFile.url}></img>
                            </div>
                            <div className=' h-auto pr-4' style={{ paddingLeft: '15px' }}>
                                <div className='flex relative items-end justify-between'>
                                    <div className='flex flex-col'>
                                        <h3 className=' text-2xl leading-8  mb-0 uppercase font-use' style={{  color: '#fff', letterSpacing: '3px' }}>{strapiContent.advisiorcard[2].firstname}</h3>
                                        <h3 className=' text-2xl leading-8  mt-0 mb-0 uppercase font-use' style={{ color: '#fff', letterSpacing: '3px' }}>{strapiContent.advisiorcard[2].lastname}</h3>
                                    </div>
                                    <a href='https://www.linkedin.com/in/kalyan-sivasailam-3925074a/' target='_blank' className=' w-8 h-8 justify-center items-center flex max-w-full uppercase text-lg no-underline' style={{ border: '1px solid #00d4ff', borderRadius: '100px', color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                        <div>
                                            <img src={strapiContent.socialplatform[2].localFile.url}></img>
                                        </div>
                                    </a>
                                </div>
                                <div className='linkedin-separator'></div>

                            </div>
                        </div>
                        <div className=' h-auto object-cover mr-0 flex flex-col relative pb-5 w-[264px] sm:w-[95%]' style={{ border: '1px solid #333', marginBottom: '60px' }}>
                            <div>
                                <img className='card-img' src={strapiContent.advisorcardimg[3].localFile.url}></img>
                            </div>
                            <div className=' h-auto pr-4' style={{ paddingLeft: '15px' }}>
                                <div className='flex relative items-end justify-between'>
                                    <div className='flex flex-col'>
                                        <h3 className=' text-2xl leading-8  mb-0 uppercase font-use' style={{  color: '#fff', letterSpacing: '3px' }}>{strapiContent.advisiorcard[3].firstname}</h3>
                                        <h3 className=' text-2xl leading-8  mt-0 mb-0 uppercase font-use' style={{ color: '#fff', letterSpacing: '3px' }}>{strapiContent.advisiorcard[3].lastname}</h3>
                                    </div>
                                    <a href='https://www.linkedin.com/in/kalyan-sivasailam-3925074a/' target='_blank' className=' w-8 h-8 justify-center items-center flex max-w-full uppercase text-lg no-underline' style={{ border: '1px solid #00d4ff', borderRadius: '100px', color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                        <div>
                                            <img src={strapiContent.socialplatform[2].localFile.url}></img>
                                        </div>
                                    </a>
                                </div>
                                <div className='linkedin-separator'></div>

                            </div>
                        </div>
                    </div>
                </div> */}
                <div className='relative flex flex-col items-start ml-auto mr-auto mt-[20px] mb-[180px] sm:mt-0 sm:mb-0 ' style={{ zIndex: '1', maxWidth: '1200px'}}>
                    <div className=' absolute z-[-1] top-[-61%] bottom-auto left-[-11%] right-auto sm:hidden'>
                        <img src={leftdown}></img>
                    </div>
                    <h2 className='max-w-full uppercase mt-0 mb-0   font-use text-[50px] sm:text-xl sm:ml-3' style={{ color: '#fff', letterSpacing: '2px', lineHeight: '100px' }}>{strapiContent.partners}</h2>
                    <div className='w-full ml-[100px] mt-[60px] sm:mt-6 sm:ml-0' style={{ marginTop: '60px', maxWidth: '1000px' }}>
                        <div className=' flex flex-row justify-start items-start overflow-hidden'>
                            <Marquee direction="left" speed={100} delay={2}>
                                <div className="image_wrapper">
                                    <img src={strapiContent.partnersmq[0].localFile.url} alt=""/>
                                </div>
                                <div className="image_wrapper">
                                    <img src={strapiContent.partnersmq[1].localFile.url} alt="" />
                                </div>
                                <div className="image_wrapper">
                                    <img src={strapiContent.partnersmq[2].localFile.url} alt="" />
                                </div>
                                <div className="image_wrapper">
                                    <img src={strapiContent.partnersmq[3].localFile.url} alt="" />
                                </div>
                                <div>
                                    <img src={strapiContent.partnersmq[4].localFile.url} alt="" />
                                </div>
                                <div className="image_wrapper">
                                    <img src={strapiContent.partnersmq[5].localFile.url} alt="" />
                                </div>
                                <div className="image_wrapper">
                                    <img src={strapiContent.partnersmq[6].localFile.url} alt="" />
                                </div>
                                <div className="image_wrapper">
                                    <img src={strapiContent.partnersmq[7].localFile.url} alt="" />
                                </div>
                                <div className="image_wrapper">
                                    <img src={strapiContent.partnersmq[8].localFile.url} alt="" />
                                </div>
                                <div className="image_wrapper">
                                    <img src={strapiContent.partnersmq[9].localFile.url} alt="" />
                                </div>
                                <div className="image_wrapper">
                                    <img src={strapiContent.partnersmq[10].localFile.url} alt="" />
                                </div>
                                <div className="image_wrapper">
                                    <img src={strapiContent.partnersmq[11].localFile.url} alt="" />
                                </div>
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' mb-60 relative flex flex-col items-start ml-auto mr-auto sm:p-[1rem] sm:mb-0' style={{ zIndex: '1', maxWidth: '1200px' }}>
            <div className=' absolute z-[-99] top-auto bottom-[-67%]  left-auto right-[-7%] star-embed-up sm:hidden'>
                        <img src={downstar}></img>
                    </div>
                    <img src={mobilestar} className='sm:w-full sm:mt-[2rem] sm:ml-0 mobile-stars'></img>s
                <h2 className='max-w-full uppercase mt-0 mb-0   font-use text-[50px] sm:text-xl sm:ml-3' style={{ color: '#fff', letterSpacing: '2px', lineHeight: '60px' }}>{strapiContent.investor}</h2>
                <div className='w-full sm:ml-0 max-w-full mt-[60px] ml-[100px] sm:mt-[1rem]' >
                    <div className='logos-container'>
                        <img className='logo-section max-w-full' src={strapiContent.partnerslogo[0].localFile.url}></img>
                        <img className='logo-section max-w-full' src={strapiContent.partnerslogo[1].localFile.url}></img>
                        <img className='logo-section max-w-full' src={strapiContent.partnerslogo[2].localFile.url}></img>
                        <img className='logo-section max-w-full' src={strapiContent.partnerslogo[3].localFile.url}></img>
                        {/* <img className='logo-section max-w-full' src={strapiContent.partnerslogo[4].localFile.url}></img>
                        <img className='logo-section max-w-full' src={strapiContent.partnerslogo[5].localFile.url}></img>
                        <img className='logo-section max-w-full' src={strapiContent.partnerslogo[6].localFile.url}></img>
                        <img className='logo-section max-w-full' src={strapiContent.partnerslogo[7].localFile.url}></img>
                        <img className='logo-section max-w-full' src={strapiContent.partnerslogo[8].localFile.url}></img> */}
                    </div>
                </div>
            </div>
            {/* footer section */}
            <div className='footer section pl-0 pr-0'>
                <div className='relative ml-auto mr-auto max-w-[1200px]'>
                    <div className='flex justify-between items-start pb-0 pl-4 pr-4 mb-8 mt-[101px] sm:flex-col sm:mt-50px ' style={{border: '1px #7c4c4c', borderBottomColor: 'rgba(255, 255, 255, .5)' }}>
                        <div className='flex flex-col items-start'>
                            <a href='https://open.spotify.com/show/6IAeIuksZiw6T3FkCjAbsP?si=ZhB_Sr8uT3-kr0tqeh25Kw' className='uppercase  font-use leading-[48px] text-[40px]' style={{ color: 'rgba(255, 255, 255, .85) '}}>{strapiContent.footertitle}</a>
                            <p className=' text-xl leading-8 font-use-one w-[441px] mt-[30px] mb-[30px] sm:w-[100%] sm:text-lg' style={{ color: 'rgba(255, 255, 255, .85)'}}>{strapiContent.footercontent.data.footercontent}</p>
                            {/* getintouchbutton */}
                            <button className="btn btn-2 hover-slide-up sm:w-[100%]">
                            <Link to='/Contact'><span>{strapiContent.getInTouch}</span></Link>
                            </button>
                            <div className='social-platform font-use sm:w-[100%]'>
                                <Link to="https://www.facebook.com/5cnetwork" target='_blank' className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                    <img src={strapiContent.socialplatform[3].localFile.url} alt='facebook' className='mr-0 max-w-full inline-block align-middle'></img>
                                </Link>
                                <Link to="https://www.linkedin.com/company/5c-network?trk=top_nav_home" target='_blank' className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                    <img src={strapiContent.socialplatform[2].localFile.url} alt='Linkedin' className='mr-0 max-w-full inline-block align-middle'></img>
                                </Link>
                                <Link to="https://twitter.com/5c_network" target='_blank' className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                    <img src={strapiContent.socialplatform[1].localFile.url} alt='Twitter' className='mr-0 max-w-full inline-block align-middle'></img>
                                </Link>
                                <Link to="https://www.instagram.com/5cnetwork/" target='_blank' className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                    <img src={strapiContent.socialplatform[0].localFile.url} alt='Medium' className='mr-0 max-w-full inline-block align-middle'></img>
                                </Link>
                            </div>
                        </div>
                        <div className='flex sm:mt-[65px] sm:w-[100%] sm:justify-between'>
                            <div className='flex flex-col font-use ml-[60px] sm:ml-[5px]'>
                               <a href='https://borderlessradiology.com/' target='_blank' className='uppercase mb-4 text-sm leading-5 ' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Borderless Radiology - For Radiologist </a>
                <a href='https://play.google.com/store/apps/details?id=db.com.a5c&pcampaignid=web_share' target='_blank' className='uppercase mb-4 text-sm leading-5 ' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>ProtoCALL - for Radiographers</a>
                <a href='https://ai.5cnetwork.com/' target='_blank' className='uppercase mb-4 text-sm leading-5 ' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Pixel Predict - AI Newsletter </a>
                {/* <Link to="#" className='uppercase mb-4 text-sm leading-5 ' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>media</Link> */}
                <a href='https://osteocheck.5cnetwork.com/' target='_blank' className='uppercase mb-4 text-sm leading-5 ' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Osteocheck</a>
                <a href='https://chat.whatsapp.com/EXOCBtpLcpqB3JUSK3ifFl' target='_blank' className='uppercase mb-4 text-sm leading-5 ' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Radiographer - Community </a>
                <a href='https://open.spotify.com/show/6IAeIuksZiw6T3FkCjAbsP' target='_blank' className='uppercase mb-4 text-sm leading-5 ' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Podcast</a>

                            </div>
                            {/* <div className='flex flex-col font-use ml-[60px]'>
                                <Link to="#" className='uppercase mb-4 text-sm leading-5 ' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>vision</Link>
                                <Link to="/Carrers" className='uppercase mb-4 text-sm leading-5 ' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>careers</Link>
                                <Link to="/Contact" className='uppercase mb-4 text-sm leading-5 ' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>contact</Link>
                                <Link to="#" className='uppercase mb-4 text-sm leading-5 ' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>privacy policy</Link>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className='relative flex flex-row items-end mt-0 overflow-hidden' style={{ color: '#fff', height: '400px' }}>
                    <video autoPlay loop muted className=' w-full h-full absolute m-auto object-cover bg-cover inline-block align-baseline ' style={{ backgroundPosition: '50%', top: '-100%', bottom: '-100%', left: '-100%', right: '-100%' }}>
                        <source src={strapiContent.footervideo.localFile.url} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
}

export default About

export const pageQuery = graphql`
query MyQuery {
    allStrapiAbout {
      nodes {
        investor
        title
        content {
          data {
            content
          }
        }
        abouthomeimg {
          localFile {
            url
          }
        }
        sectitle
        secsubtitle
        secpara {
          data {
            secpara
          }
        }
        secimg {
          localFile {
            url
          }
        }
        leadertitle
        leadershipcards {
          firstname
          lastname
          position
        }
        advtext
        advisiorcard {
          firstname
          lastname
        }
        partners
        partnersmq {
          localFile {
            url
          }
        }
        partnerslogo {
          localFile {
            url
          }
        }
        footertitle
        footercontent {
          data {
            footercontent
          }
        }
        socialplatform {
          localFile {
            url
          }
        }
        footervideo {
          localFile {
            url
          }
        }
        leadershipcardsimg {
          localFile {
            url
          }
        }
        advisorcardimg {
          localFile {
            url
          }
        }
        getInTouch
      }
    }
  }
`
