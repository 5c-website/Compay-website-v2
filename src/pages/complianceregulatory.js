import React from 'react'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import hospital from '../Assets/Homepage/2.png'
import radiologist from '../Assets/Homepage/doc.png'
import logo from '../Assets/Homepage/2-01.png'
import { Link,graphql } from 'gatsby'
import { Helmet } from "react-helmet";
import iso2019 from '../Assets/Homepage/iso-2019.jpg'
import tablogo from '../Assets/Homepage/favicon.ico'
import iso2022 from '../Assets/Homepage/iso-2022.jpg'
import iso2015 from '../Assets/Homepage/iso-2015.jpg'


function Complianceregulatory({data}) {
    const strapiContent = data.allStrapiSolution.nodes[0];
    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null)
    const [openIso,setopenIso]=useState(false)
    const [openIso2,setopenIso2]=useState(false)
    const [openIso3,setopenIso3]=useState(false)
    const [openIso4, setopenIso4] = useState(false)

    function openIsoModal(){
        setopenIso(true);
      }
    
      function openIso2Modal(){
        setopenIso2(true);
      }
      function openIso3Modal(){
        setopenIso3(true);
      }
      function openIso4Modal() {
        setopenIso4(true);
      }
    
    
      function openSignInModal() {
        setOpen(true);
      }

  return (
    <>
    <Helmet>
      <html lang="en" />
      <title>Compliance &regulatory</title>
      <meta name="description" content="Welcome to the Compliance Hub of 5C Network, Ensuring Precision and Quality in Tele-Radiology Services" />
      <link rel="icon" href= {tablogo}
        type="image/x-icon"/>
      {/* <meta name="author" content={author} /> */}
    </Helmet>
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
      
      <a href='https://play.google.com/store/apps/details?id=db.com.a5c' class="outer inline-block ml-6  text-base align-top absolute uppercase cursor-pointer top-0 bottom-auto left-auto right-0 z-[1] mobile-screen-signin">
        <span class="inner"></span>
        <span class="inner"></span>
        <span class="inner"></span>
        <span class="inner"></span>
        Sign In
      </a>

      <div className='absolute w-full max-w-full flex flex-col items-center bg-transparent nav-division' style={{ zIndex: '2', color: 'rgba(255, 255, 255, 0)', top: '0' }}>
        <div className='w-full max-w-full pt-3 pb-3 ml-auto mr-auto' style={{ width: '79%' }}>
          <nav className=' w-full max-w-full justify-around items-center flex relative  font-use  nav-md'>
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
                <Link to='/blogs' className='navlinks '>Blogs</Link>
                <Link to='/newsroom' className='navlinks'>Newsroom</Link>
              </nav>
            </div>
            <Link to='/contact' className=' inline-block ml-6 mr-6 text-base align-top relative uppercase  hover-effect' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>contact</Link>
            {/* <Link to='/contact' className=' inline-block ml-6 mr-6 text-base align-top relative uppercase  hover-effect' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>SignIn</Link> */}



          </nav>


        </div>

      </div>

      {/* mobile-responsive */}
      <div className=' bg-transparent p-[15px] flex justify-between items-center absolute z-[1] w-[65%] navbar-mb  '>
      <nav role="navigation" className='mobile-nav'>
        <div id="menuToggle" className='absolute m-[1rem] z-[99]'>
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <li><Link to="/solutions" className='font-use'>Solutions</Link></li>
            <li><Link to="/technology">Technology</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>

            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/newsroom">Newsroom</Link></li>

            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact" >Contact</Link></li>
          </ul>
        </div>
      </nav>
      <img src={logo} alt='5C Network' className='w-[50%]'></img>
  </div>

  <div className=' flex flex-col justify-start items-center bg-no-repeat privacy-policy sm:h-[80vh] sm:p-[1rem] ' >
        <div className=' max-w-full ml-auto mr-auto'>
          <div className='max-w-full relative w-[1200px] mt-[10rem] sm:mt-[6rem] sm:ml-[10px]'>
            <h1 className='max-w-full uppercase mt-0 mb-0 font-medium font-use text-[#fff] tracking-[2px] leading-[100px] text-[40px] sm:text-[2.5rem]'>Compliance and Regulatory</h1>
            <div className='max-w-full mt-10 text-[#fff]  ml-[100px] sm:ml-[10px] sm:mt-0  sm:w-[85%]'>
              <p className='mb-0 text-xl mt-0 leading-8  font-use sm:text-base'>
              Welcome to the Compliance Hub of 5C Network, Ensuring Precision and Quality in Tele-Radiology Services
        <p>&zwj;</p>
        At 5C Network, we prioritise compliance, accuracy, and innovation in our tele-radiology solutions. Our commitment to regulatory standards, quality assurance, and process excellence is embedded in every aspect of our operations.
        <p>&zwj;</p>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-full flex justify-center items-center ml-auto mr-auto'>
        <div className=' w-[1200px] max-w-full pt-[4rem] pb-[120px] relative'>
            <div className='sm:mt-[68rem] p-[1rem] privacy-content'>
            <p>&zwj;</p>
                <h2 className='text-[36px] leading-[1.4] text-[#fff] tracking-[2px] uppercase mt-0 mb-0 font-use font-semibold sm:text-[20px]'>Our Certifications:</h2>
                <p>&zwj;</p>
                <ul className='ml-[2rem] sm:ml-0'>
                <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                                        <div className='bullet-line-css'></div>
                                        <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{color:'rgba(255, 255, 255, .85)'}}>
                                            <label className=' underline footer-hover cursor-pointer'><div onClick={openIso3Modal}>ISO 9001:2015 for Quality Management Services:</div></label>
                                        This certification underlines our dedication to maintaining high-quality services, ensuring customer satisfaction, and continuous improvement in our processes.
                                        </p>
                                    </li>
                                    <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                                        <div className='bullet-line-css'></div>
                                        <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{color:'rgba(255, 255, 255, .85)'}}>
                                        <label className=' underline cursor-pointer footer-hover`'><div onClick={openIsoModal}>ISO 27701:2019 for Privacy Information Management: </div></label>
                                        Highlights our commitment to managing privacy information, ensuring compliance with data privacy regulations and protecting individuals' rights.
                                        </p>
                                    </li>
                
                                    <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                                        <div className='bullet-line-css'></div>
                                        <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{color:'rgba(255, 255, 255, .85)'}}>
                                        <label className=' underline footer-hover cursor-pointer'> <div onClick={openIso2Modal}>ISO 27001:2022 for Information Security Management:</div></label>
                                        Demonstrates our robust information security practices, ensuring the confidentiality, integrity, and availability of information assets
                                        </p>
                                    </li>
                                    </ul> 

                <h2 className='text-[36px] leading-[1.4] text-[#fff] tracking-[2px] uppercase mt-0 mb-0 font-use font-semibold sm:text-[20px]'>Compliance Assurance in Tele-Radiology:</h2>
                <p>&zwj;</p>
                <ul className='ml-[2rem] sm:ml-0'>
                <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                                        <div className='bullet-line-css'></div>
                                        <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{color:'rgba(255, 255, 255, .85)'}}>
                                            <label className=' font-bold'>Regulatory Adherence: </label>
                                            5C Network adheres to industry regulations and standards, guaranteeing compliance with stringent requirements to ensure the highest quality, security, and ethical standards.
                                        </p>
                                    </li>
                                    <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                                        <div className='bullet-line-css'></div>
                                        <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{color:'rgba(255, 255, 255, .85)'}}>
                                        <label className=' font-bold'>Advanced Data Security Measures:</label>
                                        Our stringent data security protocols exceed industry compliance standards, ensuring the utmost confidentiality and integrity of patient information.
                                        </p>
                                    </li>
                                    <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                                        <div className='bullet-line-css'></div>
                                        <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{color:'rgba(255, 255, 255, .85)'}}>
                                        <label className=' font-bold'>Continuous Quality Improvement: </label>
                                        We employ a culture of continuous improvement, regularly reviewing and enhancing our processes to maintain accuracy and provide actionable insights.                                   
                                             </p>
                                    </li>
                                    <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                                        <div className='bullet-line-css'></div>
                                        <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{color:'rgba(255, 255, 255, .85)'}}>
                                        <label className=' font-bold'>Expert Clinical Oversight: </label>
                                        Our tele-radiology services undergo expert clinical oversight, ensuring accuracy and reliability in diagnoses while complying with industry best practices.
                                             </p>
                                    </li>
                                    <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                                        <div className='bullet-line-css'></div>
                                        <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{color:'rgba(255, 255, 255, .85)'}}>
                                        <label className=' font-bold'>Unmatched Compliance:  </label>
                                        Our commitment to regulatory compliance ensures peace of mind for our clients and partners, guaranteeing adherence to the strictest industry standards.

                                      </p>
                                    </li>
                                    <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                                        <div className='bullet-line-css'></div>
                                        <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{color:'rgba(255, 255, 255, .85)'}}>
                                        <label className=' font-bold'>Innovation and Expertise:  </label>
                                        Our cutting-edge technology, combined with the expertise of our professionals, delivers tele-radiology solutions that lead in innovation and precision.
                                    </p>
                                    </li>
                                    <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                                        <div className='bullet-line-css'></div>
                                        <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{color:'rgba(255, 255, 255, .85)'}}>
                                        <label className=' font-bold'>Tailored Solutions: </label>
                                        We offer personalised solutions to meet the unique needs of each client while upholding the highest standards of compliance and quality.
                                    </p>
                                    </li>
                </ul>

                <h2 className='text-[36px] leading-[1.4] text-[#fff] tracking-[2px] uppercase mt-0 mb-0 font-use font-semibold sm:text-[20px]'>Contact Us Today</h2>
                <p>&zwj;</p>
                <ul className='ml-[2rem] sm:ml-0'>
                <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                                        
                                        <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{color:'rgba(255, 255, 255, .85)'}}>
                                            Ready to experience tele-radiology services that excel in compliance, quality, and innovation? Contact 5C Network today at
                                            <label className=' text-[#00d4ff] font-italic'><a href='mailto:compliance@5cnetwork.com'> compliance@5cnetwork.com</a></label> to learn more about how we can elevate your radiologist experience.
                                        </p>
                                    </li>
                                    
                </ul>
            </div>
            </div>
            </div>
            <Transition.Root show={openIso} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setopenIso}>
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
                  <img src={iso2019}></img>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <Transition.Root show={openIso2} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setopenIso2}>
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
                  <img src={iso2022}></img>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <Transition.Root show={openIso3} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setopenIso3}>
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
                  <img src={iso2015}></img>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <Transition.Root show={openIso4} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setopenIso4}>
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
                <Dialog.Panel className="relative  flex flex-col gap-[1rem] transform overflow-hidden rounded-lg  text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <img src={iso2015}></img>
                  <img src={iso2019}></img>
                  <img src={iso2022}></img>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    <div className='footer section pl-0 pr-0'>
                <div className='relative ml-auto mr-auto max-w-[1200px]'>
                    <div className='flex justify-between items-start pb-0 pl-4 pr-4 mb-8 mt-[101px] sm:flex-col sm:mt-50px ' style={{border: '1px #7c4c4c', borderBottomColor: 'rgba(255, 255, 255, .5)' }}>
                        <div className='flex flex-col items-start'>
                            <a href='https://open.spotify.com/show/6IAeIuksZiw6T3FkCjAbsP?si=ZhB_Sr8uT3-kr0tqeh25Kw' className='uppercase  font-use leading-[48px] text-[40px]' style={{ color: 'rgba(255, 255, 255, .85) '}}>{strapiContent.footerlefttitle}</a>
                            <p className=' text-xl leading-8 font-use-one w-[441px] mt-[30px] mb-[30px] sm:w-[100%] sm:text-lg' style={{ color: 'rgba(255, 255, 255, .85)'}}>{strapiContent.footercontent.data.footercontent}</p>
                            {/* getintouchbutton */}
                            <button className="btn btn-2 hover-slide-up sm:w-[100%]">
                            <Link to='/contact'> <span>{strapiContent.git}</span></Link>
                            </button>
                            <div className='social-platform font-use sm:w-[100%]'>
                                <Link to="https://www.facebook.com/5cnetwork" target='_blank' className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                    <img src={strapiContent.facebook.localFile.url} alt='facebook' className='mr-0 max-w-full inline-block align-middle'></img>
                                </Link>
                                <Link to="https://www.linkedin.com/company/5c-network?trk=top_nav_home" target='_blank' className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                    <img src={strapiContent.linkedin.localFile.url} alt='Linkedin' className='mr-0 max-w-full inline-block align-middle'></img>
                                </Link>
                                <Link to="https://twitter.com/5c_network" target='_blank' className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                    <img src={strapiContent.twitter.localFile.url} alt='Twitter' className='mr-0 max-w-full inline-block align-middle'></img>
                                </Link>
                                <Link to="https://www.instagram.com/5cnetwork/" target='_blank' className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                    <img src={strapiContent.medium.localFile.url} alt='Medium' className='mr-0 max-w-full inline-block align-middle'></img>
                                </Link>
                            </div>
                        </div>
                        <div className='flex sm:mt-[65px] sm:w-[100%] sm:justify-between ml-[13rem] sm:ml-0'>
                            <div className='flex flex-col font-use ml-[60px] sm:ml-[5px]'>
                            <a href='https://borderlessradiology.com/' target='_blank' className='uppercase mb-4 text-sm leading-5  footer-hover ' style={{  letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Borderless Radiology - For Radiologists </a>
                <a href='https://play.google.com/store/apps/details?id=db.com.a5c&pcampaignid=web_share' target='_blank' className='uppercase mb-4 text-sm leading-5  footer-hover ' style={{  letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>ProtoCALL - for Radiographers</a>
                <a href='https://ai.5cnetwork.com/'target='_blank' className='uppercase mb-4 text-sm leading-5  footer-hover ' style={{  letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Pixel Predict - AI Newsletter </a>
                {/* <Link to="#" className='uppercase mb-4 text-sm leading-5  footer-hover ' style={{  letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>media</Link> */}
                <a href='https://osteocheck.5cnetwork.com/' className='uppercase mb-4 text-sm leading-5  footer-hover ' style={{  letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Osteocheck</a>
                <a href='https://chat.whatsapp.com/EXOCBtpLcpqB3JUSK3ifFl' target='_blank' className='uppercase mb-4 text-sm leading-5  footer-hover ' style={{  letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Radiographers - Community </a>
                <a href='https://open.spotify.com/show/6IAeIuksZiw6T3FkCjAbsP' target='_blank' className='uppercase mb-4 text-sm leading-5  footer-hover ' style={{  letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Podcast</a>
                {/* <Link to="/privacy-policy" className='uppercase mb-4 text-sm leading-5  footer-hover ' style={{  letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Privacy policy</Link> */}


                            </div>
                            <div className='flex flex-col font-use ml-[60px]'>
                            <Link to="/privacy-policy" className='uppercase mb-4 text-sm leading-5  footer-hover ' style={{  letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Privacy policy</Link>
                            <Link  className='uppercase mb-4 text-sm leading-5 cursor-pointer  footer-hover ' style={{  letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}><div onClick={openIso4Modal}>Certifications</div></Link>
                <Link to='/complianceregulatory' className='uppercase mb-4 text-sm leading-5  footer-hover ' style={{  letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>compliance & regulatory</Link>
                                {/* <Link to="#" className='uppercase mb-4 text-sm leading-5  footer-hover ' style={{  letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>privacy policy</Link> */}
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
    </>
  )
}

export default Complianceregulatory

export const pageQuery = graphql`
query MyQuery {
    allStrapiSolution {
      nodes {
        title
        content {
          data {
            content
          }
        }
        menuItems {
          items
        }
        footerlefttitle
        footercontent {
          data {
            footercontent
          }
        }
        facebook {
          localFile {
            url
          }
        }
        twitter {
          localFile {
            url
          }
        }
        linkedin {
          localFile {
            url
          }
        }
        medium {
          localFile {
            url
          }
        }
        footervideo {
          localFile {
            url
          }
        }
        solutionHomepage {
          localFile {
            url
          }
        }
        git
      }
    }
  }`
