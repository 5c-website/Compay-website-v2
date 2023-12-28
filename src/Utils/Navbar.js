import React from 'react';
import '../styles/global.css'
import { Link } from 'gatsby';
import logo from '../Assets/Homepage/2-01.png'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import hospital from '../Assets/Homepage/2.png'
import radiologist from '../Assets/Homepage/doc.png'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef(null)
  function openSignInModal() {
    setOpen(true);
  }
  return (
    <>
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
                        <a href='https://client.5cnetwork.com/' rel="noreferrer" target="_blank" className='sign-wrapper'>
                          <div className=' flex flex-col items-center'>
                            <img alt='Hospital/Diagnostic centre' src={hospital} className='w-[50%]'></img>
                            <label htmlFor='Hospital/Diagnostic centre' className='justify-center font-use mt-[1.3rem] tracking-[1px] text-[18px] uppercase font-semibold'>Hospital/Diagnostic centre</label>
                          </div>
                        </a>
                        <a href='https://rads.5cnetwork.com/' rel="noreferrer" target="_blank" className='sign-wrapper'>
                          <div className=' flex flex-col items-center'>
                            <img alt='radiologist' src={radiologist} className='w-[50%]'></img>
                            <label htmlFor='Radiologist' className='justify-center font-use mt-[1.3rem] tracking-[1px] text-[18px] uppercase font-semibold'>Radiologist</label>
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
        <div className='w-full max-w-full pt-3 pb-3 ml-auto mr-auto' style={{ width: '86%' }}>
          <nav className=' w-full max-w-full justify-around items-center flex relative float-right font-use nav-md'>
          <div className='DropdDown'>
              <div className='DropDowntoggle'>
                <div className=' inline-block ml-6 mr-6 text-base align-top relative uppercase ' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>AI Tools</div>
              </div>
              <nav className='navbartoggle'>
              <Link to='/rxpert' className='navlinks hover-under '>RXpert</Link>
                <Link to='/osteocheck' className='navlinks  hover-under-1'>OsteoCheck</Link>
                <Link to='/protocall' className='navlinks  hover-under-1'>ProtoCALL</Link>
              </nav>
            </div>
            <Link to='/solutions' className=' inline-block ml-6 mr-6 text-base align-top relative uppercase  hover-effect' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Solutions</Link>
            <Link to='/technology' className=' inline-block ml-6 mr-6 text-base align-top relative uppercase  hover-effect' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Technology</Link>
            <Link to='/about' className=' inline-block ml-6 mr-6 text-base align-top relative uppercase  hover-effect' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>about</Link>
            {/* <Link to='/Partners' className=' inline-block ml-6 mr-6 text-base align-top relative uppercase  hover-effect' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Partners</Link> */}
            <Link to='/' className=' inline-block ml-6 mr-6 text-base align-top relative uppercase  hover-effect' style={{ maxWidth: '102px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}><img src={logo} alt='5C Network'></img></Link>
            <Link to='/careers' className=' inline-block ml-6 mr-6 text-base align-top relative uppercase  hover-effect' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Careers</Link>
            <div className='DropdDown'>
              <div className='DropDowntoggle'>
                <div className=' inline-block ml-6 mr-6 text-base align-top relative uppercase ' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Resources</div>
              </div>
              <nav className='navbartoggle'>
              <Link to='/blogs' className='navlinks hover-under '>Blogs</Link>
                <Link to='/newsroom' className='navlinks  hover-under-1'>Newsroom</Link>
                <Link to='/casestudies' className='navlinks  hover-under-1'>Case Study</Link>
              </nav>
            </div>
            <Link to='/contact' className=' inline-block ml-6 mr-6 text-base align-top relative uppercase  hover-effect' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Contact</Link>
            <div onClick={openSignInModal}  class="outer inline-block ml-6 mr-6 text-base align-top relative uppercase cursor-pointer  sm:hidden">
          <span class="inner"></span>
          <span class="inner"></span>
          <span class="inner"></span>
          <span class="inner"></span>
          Sign In
        </div>
          </nav>
        </div>
      </div>
      </>
  );
};

export default Navbar;
