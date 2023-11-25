import React from 'react'
import { Link, graphql } from 'gatsby'
import '../styles/global.css'
import star from '../Assets/Solution/star.svg'
import leftdown from '../Assets/Solution/downarrow.svg'
import logo from '../Assets/Homepage/2-01.png'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import hospital from '../Assets/Homepage/CT scan.gif'
import radiologist from '../Assets/Homepage/Doctor.gif'

function Contact({ data }) {
    const strapiContent = data.allStrapiContact.nodes[0];
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
      <li><Link to="/Contact" target="_blank">contact</Link></li>
      {/* <li><div onClick={openSignInModal}>SignIn</div></li> */}
    </ul>
  </div>
</nav>
            <div className='Contact-page sm:p-[1rem]' style={{ backgroundImage: `url(${strapiContent.contactimg.localFile.url})` }}>
                <div className='max-w-full ml-auto mr-auto sm:w-full'>
                    <div className='max-w-full relative mt-[234px] w-[1200px] sm:w-full sm:mt-28'>
                        <h1 className=' uppercase max-w-full mt-0 mb-0  font-use text-[#fff] tracking-[2px] leading-[100px] sm:ml-1 text-[80px] sm:text-[2.5rem]'>{strapiContent.title}</h1>
                        <div className=' max-w-full mt-8 text-[#fff] w-[500px] ml-[100px] sm:ml-[10px] sm:mt-0  sm:w-full'>
                            <p className=' mt-0 mb-0 leading-8 font-use-one font-medium sm:text-xl text-[20px] sm:w-[98%]' style={{color: 'rgba(255, 255, 255, .85)' }}>{strapiContent.titlecontent.data.titlecontent}</p>
                        </div>
                        <button className="btn btn-2 hover-slide-up sm:w-[100%] mt-[2rem] ml-[6rem] sm:hidden">
                            <Link to='/Contact'><span>{strapiContent.getintouch}</span></Link>
                            </button>
                    </div>
                </div>
            </div>
            <div className='relative sm:p-[1rem]'>
                <div className='flex flex-col relative items-start ml-auto mr-auto' style={{ zIndex: '1', maxWidth: '1200px' }} >
                <div className='absolute top-0 bottom-auto left-auto right-[310px] star-embed-up sm:hidden '>
                              <img src={star} alt='effect'></img>
                            </div>
                            <div className='absolute top-0 bottom-auto left-auto right-0 star-embed-up sm:hidden '>
                              <img src={star} alt='effect'></img>
                            </div>
                            <div className='absolute top-auto bottom-[-387px] left-auto right-0 star-embed-up sm:hidden '>
                              <img src={leftdown} alt='effect'></img>
                            </div>
                            <div className='absolute top-auto bottom-[-115px] left-auto right-0 star-embed-up sm:hidden '>
                              <img src={leftdown} alt='effect'></img>
                            </div>
                            
                    <h2 className='uppercase mt-0 mb-0   font-use text-[#fff] tracking-[2px] text-[50px] leading-[60px] sm:ml-[10px] sm:leading-10 sm:text-[22px] sm:tracking-[1px]'>{strapiContent.sectitle}</h2>
                    <h2 className='max-w-full uppercase mt-0 mb-0  font-use text-[#fff] tracking-[2px] text-[80px] leading-[100px] sm:leading-10 sm:ml-[10px] sm:text-[28px] sm:tracking-[1px]'>{strapiContent.secsubtitle}</h2>
                    <div className='contact-link'>
                        <Link to='/ReachUs' className='flex max-w-full uppercase text-lg items-center justify-center w-[460px] h-[142px] sm:w-[85%] sm:h-[9vh]  buttons-1' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, .04)', border: '1px solid #333' }}>   
                            <span className='flex pt-[2rem] rounded-effect sm:pt-[1rem] sm:justify-center'>
                            <img src={strapiContent.helpimg[0].localFile.url} className='max-w-full inline-block align-middle mr-[30px] sm:mr-[20px] sm:h-[40px] sm:w-[40px] ml-[60px] sm:ml-0'></img>
                            <div>
                                <div className=' leading-9 uppercase font-use  text-[30px] sm:text-[15px]' style={{ lineHeight: '36px', letterSpacing: '3px' }}>{strapiContent.help[0].title}</div>
                            </div>
                            </span>
                        </Link>
                        <Link to='/ReachForms'  className='flex max-w-full uppercase text-lg items-center justify-center w-[460px] h-[142px] sm:w-[85%] sm:h-[9vh] buttons-1' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, .04)', border: '1px solid #333' }}>
                        <span className='flex pt-[2.5rem] pl-[2rem] rounded-effect justify-center sm:justify-center sm:pt-[20px] sm:pl-0'>
                            <img src={strapiContent.helpimg[2].localFile.url} className='max-w-full inline-block align-middle mr-[30px] sm:mr-[20px] sm:h-[40px] sm:w-[40px]'></img>
                            <div>
                                <div className=' leading-9 uppercase font-use  text-[30px] sm:text-[15px]' style={{lineHeight: '36px', letterSpacing: '3px' }}>{strapiContent.help[1].title}</div>
                            </div>
                            </span>
                        </Link>
                        {/* <Link className='flex max-w-full uppercase text-lg items-center justify-center w-[460px] h-[142px] sm:w-[85%] sm:h-[9vh]' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, .04)', border: '1px solid #333' }}>
                            <img src={strapiContent.helpimg[4].localFile.url} className='max-w-full inline-block align-middle mr-[30px] sm:mr-[20px] sm:h-[40px] sm:w-[40px]'></img>
                            <div>
                                <div className=' leading-9 uppercase font-use  text-[30px] sm:text-[20px]' style={{  lineHeight: '36px', letterSpacing: '3px' }}>{strapiContent.help[2].title}</div>
                            </div>
                        </Link> */}
                        <Link to='/Carrers' className='flex max-w-full uppercase text-lg items-center justify-center w-[460px] h-[142px] sm:w-[85%] sm:h-[9vh] buttons-1' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, .04)', border: '1px solid #333' }}>
                        <span className='flex pt-[3rem] pl-[5rem] rounded-effect sm:justify-center sm:pt-[20px] sm:pl-0'>
                            <img src={strapiContent.helpimg[3].localFile.url} className='max-w-full inline-block align-middle mr-[30px] sm:mr-[20px] sm:h-[40px] sm:w-[40px]'></img>
                            <div>
                                <div className=' leading-9 uppercase font-use  text-[30px] sm:text-[15px]' style={{  lineHeight: '36px', letterSpacing: '3px' }}>{strapiContent.help[3].title}</div>
                            </div>
                            </span>
                        </Link>
                        {/* <Link className='flex max-w-full uppercase text-lg items-center justify-center w-[460px] h-[142px] sm:w-[85%] sm:h-[9vh]' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, .04)', border: '1px solid #333' }}>
                            <img src={strapiContent.helpimg[1].localFile.url} className='max-w-full inline-block align-middle mr-[30px] sm:mr-[20px] sm:h-[40px] sm:w-[40px]'></img>
                            <div>
                                <div className=' leading-9 uppercase font-use  text-[30px] sm:text-[20px]' style={{ lineHeight: '36px', letterSpacing: '3px' }}>{strapiContent.help[4].title}</div>
                            </div>
                        </Link> */}
                    </div>
                </div>
            </div>
            <div className='mt-[220px] mb-[200px] sm:mt-[5rem] sm:max-w-full sm:w-full sm:p-[1rem] sm:mb-0' >
                <div className='relative flex flex-col items-start ml-auto mr-auto max-w-[1200px] z-[1] sm:max-w-full sm:w-full'>
                    <h2 className='uppercase mt-0 mb-0   font-use text-[#fff] tracking-[2px] text-[50px] leading-[60px] sm:ml-[10px] sm:text-[22px] sm:tracking-[1px]'>{strapiContent.loctitle}</h2>
                    <h2 className='max-w-full uppercase mt-0 mb-0  font-use text-[#fff] text-[80px] tracking-[2px] leading-[100px] sm:tracking-[1px] sm:text-[38px] sm:leading-[50px] sm:ml-[10px]'>{strapiContent.locsubtitle}</h2>
                    <div className='flex mt-20 justify-between  sm:flex-col  sm:w-full'>
                      <a href='https://www.google.com/maps/search/5c+network/@12.9155616,77.595932,14z/data=!3m1!4b1?entry=ttu' className='cursor-pointer  hover:border-[#fff] hover:underline' target='_blank'>
                        <div className='w-auto flex sm:mb-14 sm:max-w-[98%] sm:w-full'>            
                            <div>
                                <img src={strapiContent.locationlogo.localFile.url} className='max-w-full inline-block align-middle' style={{ width: '50px', height: '50px' }}></img>
                            </div>                
                            <div className='w-auto max-w-full'>
                                <div className='uppercase text-[40px] sm:text-[20px]' style={{ letterSpacing: '2px', lineHeight: '48px', color: '#fff' }}>{strapiContent.locations[0].country}</div>
                                <p className=' mt-3 mb-0 leading-8 font-use-one text-[20px] sm:text-[18px]' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                                <label className='text-[#fff] font-bold  w-[65%]'> RadHouse</label>
                                    <div dangerouslySetInnerHTML={{ __html: strapiContent.locations[0].address.data.address }}></div>
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
                                    <div dangerouslySetInnerHTML={{ __html: strapiContent.locations[1].address.data.address }}></div>
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
                                    <div dangerouslySetInnerHTML={{ __html: strapiContent.locations[2].address.data.address }}></div>
                                </p>
                            </div>
                            
                        </div>
                        </a>
                    </div>
                </div>
            </div>
            {/* footer section */}
            <div className='footer section pl-0 pr-0'>
                <div className='relative ml-auto mr-auto max-w-[1200px]'>
                    <div className='flex justify-between items-start pb-0 pl-4 pr-4 mb-8 mt-[101px] sm:flex-col sm:mt-50px ' style={{border: '1px #7c4c4c', borderBottomColor: 'rgba(255, 255, 255, .5)' }}>
                        <div className='flex flex-col items-start'>
                            <div className='uppercase  font-use leading-[48px] text-[40px]' style={{ color: 'rgba(255, 255, 255, .85) '}}>{strapiContent.footertitle}</div>
                            <p className=' text-xl leading-8 font-use-one w-[441px] mt-[30px] mb-[30px] sm:w-[100%] sm:text-lg' style={{ color: 'rgba(255, 255, 255, .85)'}}>{strapiContent.footercontent}</p>
                            {/* getintouchbutton */}
                            <button className="btn btn-2 hover-slide-up sm:w-[100%]">
                            <Link to='/Contact'><span>{strapiContent.getintouch}</span></Link>
                            </button>
                            <div className='social-platform font-use sm:w-[100%]'>
                                <Link to="https://www.facebook.com/5cnetwork" target='_blank' className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                    <img src={strapiContent.socialplatform[1].localFile.url} alt='facebook' className='mr-0 max-w-full inline-block align-middle'></img>
                                </Link>
                                <Link to="https://www.linkedin.com/company/5c-network?trk=top_nav_home" target='_blank' className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                    <img src={strapiContent.socialplatform[3].localFile.url} alt='Linkedin' className='mr-0 max-w-full inline-block align-middle'></img>
                                </Link>
                                <Link to="https://twitter.com/5c_network" target='_blank' className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                    <img src={strapiContent.socialplatform[2].localFile.url} alt='Twitter' className='mr-0 max-w-full inline-block align-middle'></img>
                                </Link>
                                <Link to="https://www.instagram.com/5cnetwork/" target='_blank' className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                    <img src={strapiContent.socialplatform[0].localFile.url} alt='Medium' className='mr-0 max-w-full inline-block align-middle'></img>
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
                        <source src={strapiContent.footervideo.localFile.url} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
}

export default Contact

export const pageQuery = graphql`
query MyQuery {
    allStrapiContact {
      nodes {
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
        footertitle
        footercontent
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
        locationlogo {
          localFile {
            url
          }
        }
        getintouch
      }
    }
  }
`