import React from 'react'
import { Link, graphql } from 'gatsby'
import leftdown from '../Assets/Solution/leftdown.svg'
import twoStar from '../Assets/Solution/two_star.svg'
import logo from '../Assets/Homepage/2-01.png'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import hospital from '../Assets/Homepage/2.png'
import radiologist from '../Assets/Homepage/1.png'


function Carrers({ data }) {
    const strapiContent = data.allStrapiCarrer.nodes[0];
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
{/* <nav role="navigation" className='mobile-nav'>
  <div id="menuToggle">
    <input type="checkbox"/>
    <span></span>
    <span></span>
    <span></span>
    <ul id="menu">
      <li><Link to="/Solutions">Solutions</Link></li>
      <li><Link to="/Technology">Technology</Link></li>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/About">About</Link></li>
      
            <li><Link to="/Blogs">Blogs</Link></li>
            <li><Link to="/Newsroom">Newsroom</Link></li>
          
      <li><Link to="/Carrers">Careers</Link></li>
      <li><Link to="/Contact" >Contact</Link></li>
    </ul>
  </div>
</nav> */}
<div className=' bg-transparent p-[15px] flex justify-between items-center absolute z-[1] w-[65%] navbar-mb  '>
      <nav role="navigation" className='mobile-nav'>
        <div id="menuToggle" className='absolute m-[1rem] z-[99]'>
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <li><Link to="/Solutions" className='font-use'>Solutions</Link></li>
            <li><Link to="/Technology">Technology</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>

            <li><Link to="/Blogs">Blogs</Link></li>
            <li><Link to="/Newsroom">Newsroom</Link></li>

            <li><Link to="/Carrers">Careers</Link></li>
            <li><Link to="/Contact" >Contact</Link></li>
          </ul>
        </div>
      </nav>
      <img src={logo} alt='5C Network' className='w-[50%]'></img>
    
    
  </div>
            <div className='carrers-home sm:p-[1rem]' style={{ backgroundImage: `url(${strapiContent.homeimg.localFile.url})` }}>
                <div className='max-w-full ml-auto mr-auto'>
                    <div className=' max-w-full relative w-[1200px] mt-[234px] sm:mt-[112px]'>
                        <h1 className='max-w-full uppercase mt-0 mb-0   font-use text-[#fff] tracking-[2px] leading-[100px] sm:ml-1 text-[80px] sm:text-[2.5rem]'>{strapiContent.title}</h1>
                        <div className='max-w-full mt-8 text-[#fff] w-[500px] ml-[100px] sm:ml-[10px] sm:mt-0  sm:w-[85%]'>
                            <p className='mb-0 mt-0 leading-8  font-use  sm:text-xl text-[20px]' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                                {strapiContent.titlecontent.data.titlecontent}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sm:p-[1rem] mt-[120px] sm:mt-[60px]' >
                <div className='flex relative flex-col ml-auto mr-auto items-start' style={{ zIndex: '1', maxWidth: '1200px' }}>
                    <h2 className=' uppercase mt-0 mb-0  font-use text-[#fff] tracking-[2px] text-[50px] leading-[60px] sm:ml-[10px] sm:text-[22px] sm:tracking-[1px]'>{strapiContent.sectitle}</h2>
                    <h2 className=' uppercase max-w-full mt-0 mb-0  font-use text-[#fff] text-[80px] tracking-[2px] leading-[100px] sm:text-[34px] sm:leading-[50px] sm:ml-[10px]'>{strapiContent.secsubtitle}</h2>
                    <div className=' absolute z-[-1] top-0 bottom-auto left-auto right-[2%] star-embed-down sm:hidden'>
                        <img src={leftdown}></img>
                    </div>

                    <div className=' mt-8 w-[800px] sm:ml-[10px] sm:w-[94%]'>
                        <p className=' mb-6 leading-8 mt-0 text-xl font-use' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                            {strapiContent.content.data.content}
                        </p>
                        <div>
                            <div>
                                <div>
                                    <div className=' text-left  font-openings'>
                                        <h2 className='m-0 uppercase   font-use' style={{ borderBottom: '1px solid #a0a0a0', paddingBottom: '9px', color: '#fff', fontSize: '19px', letterSpacing: '2px', lineHeight: '60px' }}>{strapiContent.openpositiontitle}</h2>
                                        <ul className=' list-none m-0 text-xs' style={{ padding: '10px 0 0 0' }}>
                                            <li className=' clear-both m-0 list-none' style={{ color: '#686868' }}>
                                                <div className=' text-base  font-use' style={{ color: '#fff' }}>{strapiContent.openposition[0].title}</div>
                                                <ul className=' text-xs mt-0' style={{ padding: '2px 20px 12px 20px', borderBottom: '1px solid #d7d7d7', marginBottom: '10px' }}>
                                                    <li className=' list-none m-0 clear-both' style={{ color: '#686868' }}>
                                                        <Link to='/CareersContact' className=' openings-position'>{strapiContent.openposition[0].position}</Link>
                                                        <span className='float-right font-use' style={{ paddingTop: '9px', color: '#fff' }}>{strapiContent.openposition[0].location}</span>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className=' clear-both m-0 list-none' style={{ color: '#686868' }}>
                                                <div className=' text-base  font-use' style={{ color: '#fff' }}>{strapiContent.openposition[1].title}</div>
                                                <ul className=' text-xs mt-0' style={{ padding: '2px 20px 12px 20px', borderBottom: '1px solid #d7d7d7', marginBottom: '10px' }}>
                                                    <li className=' list-none m-0 clear-both' style={{ color: '#686868' }}>
                                                    <Link to='/CareersContact' className=' openings-position'>{strapiContent.openposition[1].position}</Link>
                                                        <span className='float-right font-use' style={{ paddingTop: '9px', color: '#fff' }}>{strapiContent.openposition[1].location}</span>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className=' clear-both m-0 list-none' style={{ color: '#686868' }}>
                                                <div className=' text-base  font-use' style={{ color: '#fff' }}>{strapiContent.openposition[2].title}</div>
                                                <ul className=' text-xs mt-0' style={{ padding: '2px 20px 12px 20px', borderBottom: '1px solid #d7d7d7', marginBottom: '10px' }}>
                                                    <li className=' list-none m-0 clear-both' style={{ color: '#686868' }}>
                                                    <Link to='/CareersContact' className=' openings-position'>{strapiContent.openposition[3].position}</Link>
                                                        <span className='float-right font-use' style={{ paddingTop: '9px', color: '#fff' }}>{strapiContent.openposition[3].location}</span>
                                                    </li>
                                                    <li className=' list-none m-0 clear-both' style={{ color: '#686868' }}>
                                                    <Link to='/CareersContact' className=' openings-position'>{strapiContent.openposition[2].position}</Link>
                                                        <span className='float-right font-use' style={{ paddingTop: '9px', color: '#fff' }}>{strapiContent.openposition[2].location}</span>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className=' clear-both m-0 list-none' style={{ color: '#686868' }}>
                                                <div className=' text-base  font-use' style={{ color: '#fff' }}>{strapiContent.openposition[4].title}</div>
                                                <ul className=' text-xs mt-0' style={{ padding: '2px 20px 12px 20px', borderBottom: '1px solid #d7d7d7', marginBottom: '10px' }}>
                                                    <li className=' list-none m-0 clear-both' style={{ color: '#686868' }}>
                                                    <Link to='/CareersContact' className=' openings-position'>{strapiContent.openposition[4].position}</Link>
                                                        <span className='float-right font-use' style={{ paddingTop: '9px', color: '#fff' }}>{strapiContent.openposition[4].location}</span>
                                                    </li>
                                                    <li className=' list-none m-0 clear-both' style={{ color: '#686868' }}>
                                                    <Link to='/CareersContact' className=' openings-position'>{strapiContent.openposition[5].position}</Link>
                                                        <span className='float-right font-use' style={{ paddingTop: '9px', color: '#fff' }}>{strapiContent.openposition[5].location}</span>
                                                    </li>
                                                    {/* <li className=' list-none m-0 clear-both' style={{color:'#686868'}}>
                                                    <a className=' openings-position'>SENSORS SPECIALIST (EO/IR)</a>
                                                    <span className='float-right font-use' style={{paddingTop:'9px',color:'#fff'}}>Bangalore,KA</span>
                                                </li> */}
                                                </ul>
                                            </li>
                                            <li className=' clear-both m-0 list-none' style={{ color: '#686868' }}>
                                                <div className=' text-base  font-use' style={{ color: '#fff' }}>{strapiContent.openposition[6].title}</div>
                                                <ul className=' text-xs mt-0' style={{ padding: '2px 20px 12px 20px', borderBottom: '1px solid #d7d7d7', marginBottom: '10px' }}>
                                                    <li className=' list-none m-0 clear-both' style={{ color: '#686868' }}>
                                                    <Link to='/CareersContact' className=' openings-position'>{strapiContent.openposition[6].position}</Link>
                                                        <span className='float-right font-use' style={{ paddingTop: '9px', color: '#fff' }}>{strapiContent.openposition[6].location}</span>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className=' clear-both m-0 list-none' style={{ color: '#686868' }}>
                                                <div className=' text-base  font-use' style={{ color: '#fff' }}>{strapiContent.openposition[7].title}</div>
                                                <ul className=' text-xs mt-0' style={{ padding: '2px 20px 12px 20px', borderBottom: '1px solid #d7d7d7', marginBottom: '10px' }}>
                                                    <li className=' list-none m-0 clear-both' style={{ color: '#686868' }}>
                                                    <Link to='/CareersContact' className=' openings-position'>{strapiContent.openposition[7].position}</Link>
                                                        <span className='float-right font-use' style={{ paddingTop: '9px', color: '#fff' }}>{strapiContent.openposition[7].location}</span>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className=' clear-both m-0 list-none' style={{ color: '#686868' }}>
                                                <div className=' text-base  font-use' style={{ color: '#fff' }}>{strapiContent.openposition[8].title}</div>
                                                <ul className=' text-xs mt-0' style={{ padding: '2px 20px 12px 20px', borderBottom: '1px solid #d7d7d7', marginBottom: '10px' }}>
                                                    <li className=' list-none m-0 clear-both' style={{ color: '#686868' }}>
                                                    <Link to='/CareersContact' className=' openings-position'>{strapiContent.openposition[8].position}</Link>
                                                        <span className='float-right font-use' style={{ paddingTop: '9px', color: '#fff' }}>{strapiContent.openposition[8].location}</span>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' overflow-hidden pr-4 pl-4 sm:pl-2 sm:pr-2 mt-[240px] sm:mt-28 sm:p-[1rem]'>
                <div className=' relative flex flex-col items-start ml-auto mr-auto' style={{ zIndex: '1', maxWidth: '1200px' }}>
                <div className='absolute z-[-1] w-[342px] flex top-0 bottom-auto left-auto right-[2%] sm:hidden'>
                <img src={twoStar} alt='effects'></img>
                <img src={twoStar} alt='effects'></img>
            </div>
                <div className=' absolute z-[-1] top-[11%] bottom-auto left-auto right-0 star-embed-down sm:hidden'>
                        <img src={leftdown}></img>
                    </div>
                    <div>
                        <h1 className='uppercase mt-0 mb-0   font-use text-[#fff] tracking-[2px] text-[50px] leading-[60px] sm:ml-[10px] sm:text-[22px] sm:tracking-[1px]'>{strapiContent.buildtitle}</h1>
                        <h1 className='max-w-full uppercase mt-0 mb-0   font-use text-[#fff] text-[80px] tracking-[2px] leading-[100px] sm:text-[34px] sm:leading-[20px] sm:ml-[10px]' >{strapiContent.buildsubtitle}</h1>
                    </div>
                    <div className='flex flex-col items-start mt-8 w-[800px] sm:ml-[10px] sm:w-[96%]'>
                        <p className=' mb-0 leading-8 mt-0 text-xl font-use' style={{ color: 'rgba(255, 255, 255, .85)' }}>{strapiContent.buildpara.data.buildpara}</p>
                    </div>
                    <div className='carrer-grid sm:mb-0'>
                        <div className=' w-full max-w-full justify-start flex items-start' style={{ height: '179px' }}>
                            <img src={strapiContent.buildimg[0].localFile.url} className='max-w-full inline-block align-middle mr-6' style={{ width: '70px', height: '70px' }}></img>
                            <div className='w-full max-w-full'>
                                <div className=' uppercase text-2xl  leading-7 font-use' style={{ letterSpacing: '3px', color: '#fff' }}>{strapiContent.build[0].title}</div>
                                <p className=' w-full mb-0 text-xl leading-8  font-use' style={{ maxWidth: '450px', color: 'rgba(255, 255, 255, .95)', marginTop: '22px' }}>
                                    {strapiContent.build[0].content.data.content}
                                </p>
                            </div>
                        </div>
                        <div className=' w-full max-w-full justify-start flex items-start' style={{ height: '179px' }}>
                            <img src={strapiContent.buildimg[1].localFile.url} className='max-w-full inline-block align-middle mr-6' style={{ width: '70px', height: '70px' }}></img>
                            <div className='w-full max-w-full'>
                                <div className=' uppercase text-2xl  leading-7 font-use' style={{ letterSpacing: '3px', color: '#fff' }}>{strapiContent.build[1].title}</div>
                                <p className=' w-full mb-0 text-xl leading-8  font-use' style={{ maxWidth: '450px', color: 'rgba(255, 255, 255, .95)', marginTop: '22px' }}>
                                    {strapiContent.build[1].content.data.content}
                                </p>
                            </div>
                        </div>
                        <div className=' w-full max-w-full justify-start flex items-start' style={{ height: '179px' }}>
                            <img src={strapiContent.buildimg[2].localFile.url} className='max-w-full inline-block align-middle mr-6' style={{ width: '70px', height: '70px' }}></img>
                            <div className='w-full max-w-full'>
                                <div className=' uppercase text-2xl  leading-7 font-use' style={{ letterSpacing: '3px', color: '#fff' }}>{strapiContent.build[2].title}</div>
                                <p className=' w-full mb-0 text-xl leading-8  font-use' style={{ maxWidth: '450px', color: 'rgba(255, 255, 255, .95)', marginTop: '22px' }}>
                                    {strapiContent.build[2].content.data.content}
                                </p>
                            </div>
                        </div>
                        <div className=' w-full max-w-full justify-start flex items-start' style={{ height: '179px' }}>
                            <img src={strapiContent.buildimg[3].localFile.url} className='max-w-full inline-block align-middle mr-6' style={{ width: '70px', height: '70px' }}></img>
                            <div className='w-full max-w-full'>
                                <div className=' uppercase text-2xl  leading-7 font-use' style={{ letterSpacing: '3px', color: '#fff' }}>{strapiContent.build[3].title}</div>
                                <p className=' w-full mb-0 text-xl leading-8  font-use' style={{ maxWidth: '450px', color: 'rgba(255, 255, 255, .95)', marginTop: '22px' }}>
                                    {strapiContent.build[3].content.data.content}
                                </p>
                            </div>
                        </div>
                        <div className=' w-full max-w-full justify-start flex items-start' style={{ height: '179px' }}>
                            <img src={strapiContent.buildimg[4].localFile.url} className='max-w-full inline-block align-middle mr-6' style={{ width: '70px', height: '70px' }}></img>
                            <div className='w-full max-w-full'>
                                <div className=' uppercase text-2xl  leading-7 font-use' style={{ letterSpacing: '3px', color: '#fff' }}>{strapiContent.build[4].title}</div>
                                <p className=' w-full mb-0 text-xl leading-8  font-use' style={{ maxWidth: '450px', color: 'rgba(255, 255, 255, .95)', marginTop: '22px' }}>
                                    {strapiContent.build[4].content.data.content}
                                </p>
                            </div>
                        </div>
                        <div className=' w-full max-w-full justify-start flex items-start' style={{ height: '179px' }}>
                            <img src={strapiContent.buildimg[5].localFile.url} className='max-w-full inline-block align-middle mr-6' style={{ width: '70px', height: '70px' }}></img>
                            <div className='w-full max-w-full'>
                                <div className=' uppercase text-2xl  leading-7 font-use' style={{ letterSpacing: '3px', color: '#fff' }}>{strapiContent.build[5].title}</div>
                                <p className=' w-full mb-0 text-xl leading-8  font-use' style={{ maxWidth: '450px', color: 'rgba(255, 255, 255, .95)', marginTop: '22px' }}>
                                    {strapiContent.build[5].content.data.content}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer section pl-0 pr-0'>
                <div className='relative ml-auto mr-auto max-w-[1200px]'>
                    <div className='flex justify-between items-start pb-0 pl-4 pr-4 mb-8 mt-[101px] sm:flex-col sm:mt-50px ' style={{border: '1px #7c4c4c', borderBottomColor: 'rgba(255, 255, 255, .5)' }}>
                        <div className='flex flex-col items-start'>
                            <a href='https://open.spotify.com/show/6IAeIuksZiw6T3FkCjAbsP?si=ZhB_Sr8uT3-kr0tqeh25Kw' className='uppercase  font-use leading-[48px] text-[40px]' style={{ color: 'rgba(255, 255, 255, .85) '}}>{strapiContent.footertitle}</a>
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
                            <a href='https://borderlessradiology.com/' target='_blank' className='uppercase mb-4 text-sm leading-5 footer-hover  ' style={{  letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Borderless Radiology - For Radiologist </a>
                <a href='https://play.google.com/store/apps/details?id=db.com.a5c&pcampaignid=web_share' target='_blank' className='uppercase mb-4 text-sm leading-5 footer-hover ' style={{ letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>ProtoCALL - for Radiographers</a>
                <a href='https://ai.5cnetwork.com/' target='_blank' className='uppercase mb-4 text-sm leading-5 footer-hover ' style={{  letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Pixel Predict - AI Newsletter </a>
                {/* <Link to="#" className='uppercase mb-4 text-sm leading-5 ' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>media</Link> */}
                <a href='https://osteocheck.5cnetwork.com/' target='_blank' className='uppercase mb-4 text-sm leading-5 footer-hover  ' style={{  letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Osteocheck</a>
                <a href='https://chat.whatsapp.com/EXOCBtpLcpqB3JUSK3ifFl' target='_blank' className='uppercase mb-4 text-sm leading-5 footer-hover  ' style={{  letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Radiographer - Community </a>
                <a href='https://open.spotify.com/show/6IAeIuksZiw6T3FkCjAbsP' target='_blank' className='uppercase mb-4 text-sm leading-5 footer-hover ' style={{  letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Podcast</a>

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
                        <source src={strapiContent.footervideo[0].localFile.url} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
}

export default Carrers

export const pageQuery = graphql`
query MyQuery {
    allStrapiCarrer {
      nodes {
        title
        titlecontent {
          data {
            titlecontent
          }
        }
        homeimg {
          localFile {
            url
          }
        }
        sectitle
        secsubtitle
        content {
          data {
            content
          }
        }
        openpositiontitle
        openposition {
          title
          position
          location
        }
        buildtitle
        buildsubtitle
        buildpara {
          data {
            buildpara
          }
        }
        build {
          title
          content {
            data {
              content
            }
          }
        }
        buildimg {
          localFile {
            url
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
        getintouch
      }
    }
  }
`