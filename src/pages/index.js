import React from 'react'
import '../styles/global.css'
import { useEffect } from 'react';
import Modal from '../Utils/Modal';
import { Helmet } from "react-helmet";
import Navbar from '../Utils/Navbar';
import Navbarmd from '../Utils/Navbarmd';
import { Link, graphql } from 'gatsby'
import star from '../Assets/Solution/star.svg'
import Footer from '../Utils/Footer';
import twoStar from '../Assets/Solution/two_star.svg'
import tablogo from '../Assets/Homepage/favicon.ico'
import mobilestar from '../Assets/Solution/single-mobile.svg'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import hospital from '../Assets/Homepage/2.png'
import radiologist from '../Assets/Homepage/doc.png'
import iso2015 from '../Assets/Homepage/iso-2015.jpg'
import iso2019 from '../Assets/Homepage/iso-2019.jpg'
import iso2022 from '../Assets/Homepage/iso-2022.jpg'
import Carousel from 'better-react-carousel'
import isologo1 from '../Assets/Homepage/iso2015.png'
import isologo2 from '../Assets/Homepage/iso27001.png'
import isologo3 from '../Assets/Homepage/iso2019.jpg'
import Actionbutton from '../components/Actionbutton';
import Newscard from '../components/Newscard';
import Speeddial from '../components/speeddial'


const Index = ({ data }) => {
  const content = data.allStrapiHomepage.nodes[0];
  const [showModal, setShowModal] = useState(false);

  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef(null)
  const [openIso, setopenIso] = useState(false);
  const [openIso2, setopenIso2] = useState(false)
  const [openIso3, setopenIso3] = useState(false)
  const [openIso4, setopenIso4] = useState(false)

  function openSignInModal() {
    setOpen(true);
  }
  function openIsoModal() {
    setopenIso(true);
  }

  function openIso2Modal() {
    setopenIso2(true);
  }
  function openIso3Modal() {
    setopenIso3(true);
  }

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



  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{content.seo.metaTitle}</title>
        <meta name="description" content={content.seo.metaDescription.data.metaDescription} />
        <link rel="icon" href={tablogo}
          type="image/x-icon" />
        {/* <meta name="author" content={author} /> */}
      </Helmet>
      {showModal && <Modal />}

      <div className='bg-black Homepage'>

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

        {/* <div onClick={openSignInModal} class="outer inline-block ml-6 mr-6 text-base align-top absolute uppercase cursor-pointer top-0 bottom-auto left-auto right-0 z-[99] sm:hidden">
          <span class="inner"></span>
          <span class="inner"></span>
          <span class="inner"></span>
          <span class="inner"></span>
          Sign In
        </div> */}

        <a href='https://play.google.com/store/apps/details?id=db.com.a5c' class="outer inline-block ml-6  text-base align-top absolute uppercase cursor-pointer top-0 bottom-auto left-auto right-0 z-[1] mobile-screen-signin">
          <span class="inner"></span>
          <span class="inner"></span>
          <span class="inner"></span>
          <span class="inner"></span>
          Sign In
        </a>





        <Navbar />

        {/* Mobile responsive */}

        <Navbarmd />

        {/* <div className='w-full h-full bg-transparent relative max-w-[1200px] pt-[12px] pb-[12px] ml-auto mr-auto'>
        <div className=' h-full bg-transparent items-center mt-0 top-0 w-full max-h-none max-w-full justify-center flex absolute'>
          <a className=' w-auto h-full ml-0 max-h-none mt-[8px] pl-0 block float-left relative'>
            <div className=' w-auto h-full max-h-[77px] ml-0 mr-0 flex items-center'>
              <img src={logo} className=' h-[50%] W-[50%]'></img>
            </div>
          </a>
        </div>
    </div> */}



        <div className='flex flex-col relative items-center justify-start overflow-hidden h-screen' style={{ zIndex: '0', top: '0' }}>
          <video autoPlay loop muted className=' sm:none w-full h-full m-auto absolute object-cover bg-cover inline-block align-baseline' style={{ backgroundPosition: '50%', top: '-100%', bottom: '-100%', left: '-100%', right: '-100%' }}>
            <source src={content.headervideo.localFile.url} type="video/mp4" />
          </video>
          <video autoPlay loop muted playsInline preload='auto' className=' mobile-resolution-video w-full h-full m-auto absolute object-cover bg-cover inline-block align-baseline' style={{ backgroundPosition: '50%', top: '-100%', bottom: '-100%', left: '-100%', right: '-100%' }}>
            <source src={content.mobileresolutionvideo.localFile.url} type="video/mp4" />
          </video>

        </div>
        <div>

        </div>
        {/* unseen-container */}
        <div className='relative flex flex-col justify-center w-full items-center overflow-hidden unseen-container'>
          <div className='relative mr-auto ml-auto max-w-[1200px] sm:max-w-full sm:w-full'>
            <div className='relative flex flex-col max-w-full z-10   second-content'>
              <div>
                <h2 className='text-slate-50 uppercase text-[50px] mt-0 mb-0  tracking-[2px] leading-[60px] sm:ml-0 sm:text-[22px] sm:leading-[26px] sm:tracking-[1px] '>{content.unseentitle}</h2>
                <h1 className='text-slate-50 uppercase  max-w-full  mt-0 mb-0 text-[70px] tracking-[2px] leading-[80px] sm:text-[34px] sm:leading-[40px] sm:mt-[8px] sm:ml-0'>{content.unseensubtitle}</h1>
              </div>

              <div className='max-w-full flex flex-col justify-center items-start sm:ml-0  secondDivContent '>
                <div className='max-w-full mt-10  container-content'>
                  <p className='text-xl leading-8 mb-0 secondDivParaContent sm:text-lg sm:text-[16px] sm:leading-[28px]'>
                    <div dangerouslySetInnerHTML={{ __html: content.unseencontent.data.unseencontent }}></div>
                  </p>
                </div>
                  <Link to='/about'>
                    <Actionbutton label="About Us"/>
                  </Link>
              </div>
              <div className='absolute z-[1] top-0 bottom-auto left-0 right-auto'>
                <div className='z-[1] w-[342px] h-[264px] relative top-[-191px] right-[158px]'>
                  <div className='absolute z-[-100] h-[176px] opacity-[1] w-[182px] flex top-0 bottom-auto left-auto right-0'>
                    <img src={twoStar} alt='effects'></img>
                  </div>
                </div>
              </div>
              <div className='absolute z-[-1] w-[342px] flex top-auto bottom-[-29%] left-0 right-auto'>
                <img src={twoStar} alt='effects'></img>
                <img src={twoStar} alt='effects'></img>
              </div>
              <div className='flex flex-col justify-around items-center absolute top-0 bottom-0 left-auto right-[-22%] z-[-1] sm:justify-start sm:items-start sm:mt-[33px] sm:relative sm:right-0'>
                <div className='relative'>
                  <img src={content.unseenimg.localFile.url} className=' h-auto inline-block align-middle w-[700px] sm:w-full  rotation-effect' alt='globeimage' />
                  {/* <img src={content.unseenimg.localFile.url} className='max-w-full align-middle object-cover ' style={{ width: '264px', height: '171px', display: 'none', top: '456px', bottom: '0', left: '247px' }}></img> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* about section(third division) */}
        {/* <div className=' mt-25 mb-20'>
        <div className='max-w-full flex justify-center ml-auto mr-auto'>
          <div className='flex max-w-full w-full sm:w-[90%] sm:flex-col third-div-img' style={{ backgroundImage: `url(${content.aboutimg.localFile.url})` }}>
            <div className='flex flex-col items-end sm:items-center sm:w-full sm:ml-0 sm:mt-5'>
              <h1 className='uppercase mt-0 mb-0 font-normal font-barlow text-slate-50 text-[50px] sm:text-[22px] sm:leading-[26px] sm:tracking-[1px]  ' style={{ lineHeight: '60px', letterSpacing: '3px' }}>{content.abouttitle}</h1>
            </div>
            <div className='flex max-w-full flex-col items-start ml-6 justify-center w-[482px] sm:w-full' >
              <div className='max-w-full w-[448px] sm:w-full'>
                <p className='mb-0 mt-0 text-xl leading-8 font-barlow text-slate-50 third-div-content sm:w-[99%]'><div dangerouslySetInnerHTML={{ __html: content.aboutcontent.data.aboutcontent }}></div></p>
              </div>
              <div className=' w-full max-w-full mt-7 flex'>
                <button class="btn btn-2 hover-slide-up uppercase">
                  <Link to='/solutions'><span>{content.LearnMore}</span></Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
        {/* about container(fourth division) */}
        <div className='relative pl-0 pr-0 overflow-hidden sm:mt-[5rem]'>
          <div className='relative flex flex-col items-start ml-auto mr-auto' style={{ zIndex: '1', maxWidth: '1200px' }}>
            <div className='max-w-full relative ml-0 pl-4 pr-4 '>
              <h2 className='uppercase mt-0 mb-0  fourth-div-content text-slate-50 tracking-[2px] text-[50px] leading-[32px] sm:ml-0 sm:text-[22px] sm:leading-[26px] sm:tracking-[1px]'>{content.thirdsectitle}</h2>
              <h1 className='max-w-full uppercase mt-0 mb-0 font-normal text-slate-50 text-[80px] leading-[100px] w-[1074px] tracking-[1px] sm:ml-0 sm:text-[34px] sm:leading-[40px] sm:mt-[8px]'>
                <span>{content.rainbowtext}</span>
                {content.thirdsecsubtitle}
              </h1>
              <div className='max-w-full mt-20 ml-[100px] sm:ml-0 sm:mt-10' >
                <p className='font-normal mb-0 mt-0 text-xl hyper-content text-slate-50 leading-[32px] w-[72%] sm:leading-[28px] sm:text-lg sm:w-full' >
                  <div dangerouslySetInnerHTML={{ __html: content.thirdseccontent.data.thirdseccontent }}></div>
                </p>
                {/* <div className=' mt-20 w-[900px] sm:w-full'>
                <div className='grid icons-grid'>
                  <div className='flex flex-col items-start justify-between'>
                    <div className='flex flex-col items-center'>
                      <img src={content.thirdlogo1.localFile.childrenImageSharp[0].fixed.src} style={{ width: '50%' }} />
                      <div className=' mt-4'></div>
                      <div className='uppercase text-lg logo-content-name'>
                        {content.logo1title}
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col items-start justify-between'>
                    <div className='flex flex-col items-center'>
                      <img src={content.logo2title.localFile.childrenImageSharp[0].fluid.src} style={{ width: '50%' }}></img>
                      <div className=' mt-4'></div>
                      <div className='uppercase text-lg logo-content-name'>
                        {content.logo2content.data.logo2content}
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col items-start justify-between'>
                    <div className='flex flex-col items-center'>
                      <img src={content.logo3.localFile.childrenImageSharp[0].fluid.src} style={{ width: '50%', marginTop: '8px' }}></img>
                      <div className=' mt-4'></div>
                      <div className='uppercase text-lg logo-content-name' style={{ marginTop: '8px' }}>
                        {content.logo3content.data.logo3content}
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col items-start justify-between'>
                    <div className='flex flex-col items-center'>
                      <img src={content.logo4title.localFile.childrenImageSharp[0].fluid.src} style={{ width: '50%' }}></img>
                      <div className=' mt-4'></div>
                      <div className='uppercase text-lg logo-content-name' style={{ marginTop: '-7px' }}>
                        {content.logo4content}
                      </div>
                    </div>
                  </div>

                </div>
              </div> */}
              </div>
            </div>
          </div>
          <img alt='Healthcare' src={content.thirdsecimg.localFile.url} className=' inline-block max-w-full w-full object-cover h-[499px] mt-[-211px] sm:h-[399px]'></img>
        </div>
        <div className='pt-60 pl-4 pr-4 overflow-hidden sm:pt-32'>
          <div className='flex flex-col overflow-hidden items-start ml-auto mr-auto' style={{ maxWidth: '1200px' }}>
            <div className='relative max-w-full' style={{ width: '1200px' }}>
              <h2 className='text-slate-50 uppercase mt-0 mb-0 font-normal tracking-[2px] text-[50px] leading-[60px] sm:ml-0 sm:text-[22px] sm:leading-[26px] sm:tracking-[1px] '>{content.fourthtitle}</h2>
              <h1 className='max-w-full text-slate-50 uppercase mt-0 mb-0 font-normal text-[80px] leading-[100px] w-[1074px] tracking-[1px] sm:ml-0 sm:text-[34px] sm:tracking-[1px] sm:leading-[40px]  sm:mt-[8px]'>
                <span >{content.fourthrainbowtext}&nbsp;</span>
                {content.fourthsubtitle}
              </h1>
            </div>
            <div className='relative flex flex-col items-start mt-20 max-w-full w-[1000px] z-[1] ml-[100px] sm:w-[100%] sm:ml-[10px]'>
              <div className='status-container justify-between grid max-w-full'>
                <div className='w-auto max-w-full flex flex-col' style={{ marginRight: '100px', height: '110px' }}>
                  <h5 className='w-full max-w-full text-slate-50 uppercase mt-0 mb-0  font-use' style={{ letterSpacing: '3px', fontSize: '40px', lineHeight: '48px' }}>{content.fourthcard1title}</h5>
                  <p className='uppercase mt-12px leading-7 font-use-one mb-0' style={{ color: 'rgba(255, 255, 255, .65)', marginTop: '12px', fontSize: '18px' }}>{content.fourthcard1content}</p>
                </div>
                <div className='separator-effect-md'></div>
                <div className='w-auto max-w-full flex flex-col' style={{ marginRight: '100px', height: '110px' }}>
                  <h5 className='w-full max-w-full text-slate-50 uppercase mt-0 mb-0  font-use' style={{ letterSpacing: '3px', fontSize: '40px', lineHeight: '48px' }}>{content.fourthcard2title}</h5>
                  <p className='text-slate-50 uppercase mt-12px leading-7 font-use-one mb-0' style={{ color: 'rgba(255, 255, 255, .65)', marginTop: '12px', fontSize: '18px' }}>{content.fourthcard2content}</p>
                </div>
                <div className='separator-effect-md'></div>
                <div className='w-auto max-w-full flex flex-col' style={{ marginRight: '100px', height: '110px' }}>
                  <h5 className='w-full max-w-full text-slate-50 uppercase mt-0 mb-0  font-use' style={{ letterSpacing: '3px', fontSize: '40px', lineHeight: '48px' }}>{content.fourthcard3title}</h5>
                  <p className='text-slate-50 uppercase mt-12px leading-7 font-use-one mb-0' style={{ color: 'rgba(255, 255, 255, .65)', marginTop: '12px', fontSize: '18px' }}>{content.fourthcard3content}</p>
                </div>
                <div className='separator-effect sm:hidden'></div>
                <div className='separator-effect'></div>
                <div className='separator-effect sm:hidden'></div>

                {/* <div className='separator-effect-md'></div> */}
                {/* <div className='w-auto max-w-full flex flex-col' style={{ marginRight: '100px', height: '110px' }}>
                <h5 className='w-full max-w-full text-slate-50 uppercase mt-0 mb-0  font-use' style={{ letterSpacing: '3px', fontSize: '40px', lineHeight: '48px', letterSpacing: '3px' }}>{content.fourthcard4title}</h5>
                <p className='text-slate-50 uppercase mt-12px leading-7 font-use-one mb-0' style={{ color: 'rgba(255, 255, 255, .65)', marginTop: '12px', fontSize: '18px' }}>{content.fourthcard4content}</p>
              </div> */}
              </div>
              <div className=' max-w-full flex w-[1000px] mt-[50px] sm:w-[90%]'>
                  <Link to='/technology'>
                    <Actionbutton label="More about our technology"/>
                  </Link>
              </div>
              <div className='absolute w-[347px] h-[407px] top-[-94%] bottom-0 left-auto right-[-13%] star-embed '>
                <img src={star} alt='effect'></img>
              </div>
            </div>
            <div className='max-w-full flex' style={{ width: '1000px', marginTop: '50px' }}></div>
            {/* <div className='relative flex w-full justify-center' style={{ marginTop: '60px', height: '459px' }}>
            <img src={content.sateliteimg.localFile.url} className='max-w-full inline-block align-middle' style={{ width: '459px', height: '459px' }}></img>
            <div className='absolute w-[374px] h-[132px] flex top-[50%] bottom-0 left-auto right-0'>
                <img src={twoStar} alt='effects'></img>
                <img src={twoStar} alt='effects'></img>
            </div>
            <div className='absolute w-[374px] h-[132px] flex top-[50%] bottom-0 left-0 right-auto'>
                <img src={twoStar} alt='effects'></img>
                <img src={twoStar} alt='effects'></img>
            </div>
          </div> */}
          </div>
        </div>
        {/* fifth section */}
        <div className='px-[16px] py-[50px] pt-[142px]  sm:py-[50px]'>
          <div className='flex flex-col relative items-start justify-center ml-auto mr-auto' style={{ maxWidth: '1200px' }}>
            <h2 className='uppercase mt-0 mb-0  font-use text-[#fff] tracking-[2px] text-[50px] leading-[60px] sm:ml-0 sm:text-[22px] sm:leading-[26px] sm:tracking-[1px]'>{content.fifthtitle}</h2>
            <div>
              <h1 className='max-w-full uppercase mt-0 mb-0  text-[#fff] font-use tracking-[2px] text-[80px] leading-[100px] sm:leading-10 sm:ml-0 sm:text-[34px] sm:tracking-[1px] sm:mt-[8px'> {content.fifthsubtitle}</h1>
            </div>
            <div className='max-w-full mt-20 relative ml-[100px] w-[1000px] sm:ml-0 sm:mt-10'>
              {/* <div className='mb-10'>
              <p className='text-center text-xl mb-0 mt-0 font-use-one sm:text-lg' style={{ color: 'rgba(255, 255, 255, .85)', lineHeight: '38px' }}>{content.fifthcontent.data.fifthcontent}</p>
            </div> */}
              <div className='image'>
                <img alt='RADIOLOGISTS' src={content.fifthimg.localFile.childrenImageSharp[0].fluid.src} className='h-[553px] ml-[76px] sm:h-[227px] sm:ml-0' ></img>
              </div>
            </div>
          </div>
        </div>
        {/* card hover section */}


        {/* card hover end section */}

        {/* sixth division */}
        <div className=' pl-4 pr-4 py-[240px] sm:py-[3rem]'>
          <div className=' ml-auto mr-auto max-w-[1200px]'>
            <div className='max-w-full flex flex-col relative justify-between'>
              <div className='flex flex-col items-start'>
                <h2 className='uppercase mt-0 mb-0   font-use text-[#fff] tracking-[2px] text-[50px] leading-[60px] sm:ml-0 sm:text-[22px] sm:leading-[26px] sm:tracking-[1px]'>{content.sixthtitle}</h2>
                <h1 className=' max-w-full uppercase  mt-0 mb-0 font-use text-[#fff] font-use tracking-[2px] text-[80px] leading-[60px] sm:leading-10 sm:ml-0 sm:text-[34px] sm:tracking-[1px] sm:mt-[8px'>{content.sixthsubtitle}</h1>
              </div>
              <div className='flex justify-between ml-[100px] mt-[50px] sm:ml-0'>
                <div className='max-w-full flex flex-col items-start' style={{ width: '800px' }}>
                  <div className=' w-full max-w-full' style={{ marginBottom: '30px' }}>
                    <p className=' text-xl mb-0 mt-0 leading-8 font-use-one sm:text-lg' style={{ color: 'rgba(255, 255, 255, .85)' }}>{content.sixthcontent.data.sixthcontent}</p>
                  </div>
                    <Link to='/contact'>
                      <Actionbutton label="Ask Us How"/>
                    </Link>
                </div>
              </div>
              <div className='absolute w-[347px] h-[407px] top-[2%] bottom-auto left-auto right-0 star-embed sm:hidden '>
                <img src={star} alt='effect'></img>
              </div>
              <img src={content.sixthimg.localFile.childrenImageSharp[0].fluid.src} alt='RADIOLOGISTS' className='inline-block mt-20 max-w-full align-middle rounded-sm ml-[100px] sm:ml-0' style={{ width: '900px', border: '0' }}></img>
            </div>
            <img src={mobilestar} alt='effect' className=' sm:mt-[2rem] sm:ml-[1rem] mobile-stars'></img>
          </div>
        </div>
        {/* seventh division */}
        <div className='flex flex-col items-center justify-center m-0 overflow-hidden'>
          <div className='flex flex-col relative w-[900px] sm:max-w-full sm:w-full'>
            <div className='flex pl-0' style={{ borderLeft: '8px #00d4ff' }}>
              <div className='side-line-effects sm:mr-[8px] '></div>
              <div className='quote'>
                <h1 className='max-w-full w-full uppercase mt-0 mb-0 text-left  not-italic  font-quote text-[#fff] tracking-[2px] text-[40px] leading-[46.88px] sm:ml-0 sm:text-[22px] sm:leading-[30px] sm:tracking-[1px]'>{content.quote}</h1>
                <div className='uppercase mt-4 not-italic leading-10 font-use-one text-[#fff] font-use tracking-[2px] text-[24px] sm:leading-10 sm:ml-0 sm:text-[18px] sm:tracking-[1px]'>-{content.author}</div>
              </div>
            </div>
            <div className='max-w-full flex flex-col items-start ml-[140px] sm:ml-3 w-[670px] sm:max-w-full sm:w-[95%] mt-[60px]'>
              <p className=' text-xl leading-8 mb-0 mt-0 font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                <div dangerouslySetInnerHTML={{ __html: content.quotecontent.data.quotecontent }}></div>
              </p>
              <div className=' mt-10 sm:max-w-full sm:w-full'>
                  <Link to='/technology'>
                    <Actionbutton label="see the future with us"/>
                  </Link>
              </div>
            </div>
          </div>
          <div className='vision-img-container'>
            <img src={content.quoteimg.localFile.childrenImageSharp[0].fluid.src} alt='quote' className='object-cover max-w-full inline-block align-middle mt-0 w-screen h-full' style={{ color: '#e4e3e3', zIndex: '-2', border: '0' }}></img>
          </div>
        </div>
        {/* eighth division */}
        <div className='news-recents sm:pt-[6rem] sm:pb-[6rem]'>
          <div className='flex flex-col relative items-start ml-auto mr-auto' style={{ zIndex: '1', maxWidth: '1200px' }}>
            <div className='w-full flex items-end justify-between ml-3' style={{ maxWidth: '1078px' }}>
              <div className=' box-border'>
                <h2 className='uppercase mt-0 mb-0  font-use text-[#fff] tracking-[2px] text-[50px] leading-[60px] sm:ml-0 sm:text-[22px] sm:leading-[26px] sm:tracking-[1px]'>{content.newstitle}</h2>
                <h1 className='max-w-full uppercase mt-0 mb-0   font-use text-[#fff] font-use tracking-[2px] text-[80px] leading-[100px] sm:leading-10 sm:ml-0 sm:text-[34px] sm:tracking-[1px]'>{content.newssubtitle}</h1>
              </div>
              {/* <div className=' mb-5 more-from-news-button sm:hidden'>
                <button class="btn btn-2 hover-slide-up uppercase">
                  <Link to='/newsroom'><span>{content.aboutMedia}</span></Link>
                </button>

              </div> */}

              <Link to='/newsroom' className=' sm:hidden'><Actionbutton label="More from the Media"/></Link>


            </div>
            <div className='flex max-w-full mt-20 justify-between ml-[100px] w-[1000px] sm:ml-[0] sm:flex-col sm:w-full sm:mt-10'>
              <Carousel cols={2} rows={1} gap={10} loop showDots={true}>
                {content.newscards.map((news, index) => (




                        <Carousel.Item >
                          {/* <Link to={news.News_Url} target='_blank' className='inline-block uppercase text-lg max-w-full sm:pl-[8px] sm:pr-[10px] sm:pb-[10px] buttons-1' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px', border: '1px solid #000', textDecoration: 'none' }}>
                      <div className='pt-5 pl-5 pr-5 w-[484px] h-[271px] sm:w-full rounded-effect' style={{ backgroundColor: '#19191a' }}>
                        <div className='flex items-start justify-between mb-10'>
                          <img  src={content.newslogo[index].localFile.url} className='max-w-full inline-block align-middle h-[30px] w-[14rem] sm:h-[20px]' style={{ border: '0' }} alt={`News Logo ${index}`} />
                          <div className='uppercase text-xs font-use-one' style={{ color: 'rgba(255, 255, 255, .8)', lineHeight: '15px' }}>{news.date}</div>
                        </div>
                        <p className='mt-0 mb-0 font-use-one text-[28px] sm:text-[18px] uppercase' style={{ color: 'rgba(255, 255, 255, .95)', lineHeight: '38px' }}>
                          {news.newscontent.data.newscontent}
                        </p>
                      </div>

                    </Link> */}
                          <Newscard homedata={data.allStrapiHomepage.nodes[0]} data={news} indexValue={index}/>

                        </Carousel.Item>




                ))}
              </Carousel>
            </div>

            <div className=' mb-5 mfnb mt-5 ml-3 sm:ml-0 sm:p-[0.5rem] sm:w-full'>
              <Link to="/newsroom">
              <Actionbutton label="More from the media"/>
              </Link>
            </div>
          </div>

        </div>

        <div className='Youtube-videos-section  mt-[5rem]  mb-0 pb-[5rem] sm:mt-0 overflow-hidden'>
          <div class="video-card items-start flex flex-col mr-auto ml-auto relative max-w-[1200px]">
            <div className='w-full flex items-end justify-between ml-3 mb-[5rem] sm:mb-0' style={{ maxWidth: '1078px' }}>
              <div className=' box-border'>
                <h2 className='uppercase mt-0 mb-0  font-use text-[#fff] tracking-[2px] text-left text-[50px] leading-[60px] sm:ml-0 sm:text-[22px] sm:leading-[26px] sm:tracking-[1px]'>Watch about</h2>
                <h1 className='max-w-full uppercase mt-0 mb-0   font-use text-[#fff] font-use tracking-[2px] text-[80px] leading-[100px] sm:leading-10 sm:ml-0 sm:text-[34px] sm:tracking-[1px]'>5C Network</h1>
              </div>
            </div>
            <Carousel cols={2} rows={1} gap={10} loop showDots="true">
              <Carousel.Item>
                <div class="video-card ">
                  <iframe className="w-[560px] h-[315px] sm:w-full" src="https://www.youtube.com/embed/JIpAuvNgxcU?si=jeHgIb2jXUlRs32A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div class="video-card ">
                  <iframe className="w-[560px] h-[315px] sm:w-full" src="https://www.youtube.com/embed/CpCFaIG1VWw?si=xK2AkmbIJKAQzMM0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        </div>
              </Carousel.Item>
              <Carousel.Item>
                <div class="video-card ">
                  <iframe className="w-[560px] h-[315px] sm:w-full" src="https://www.youtube.com/embed/PUpaRmX42vk?si=TTf-bGHuZlNq0Gje" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  {/* <iframe allowfullscreen="" class="YOUTUBE-iframe-video video-card-top" data-thumbnail-src="https://i.ytimg.com/vi/zV0zS1kMF4U/0.jpg" frameborder="0" src="https://www.youtube.com/embed/zV0zS1kMF4U?feature=player_embedded">
          </iframe> */}
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

        <div className=' mb-60 relative flex flex-col mt-[5rem] sm:mt-0 items-start ml-auto mr-auto sm:p-[1rem] sm:mb-[5rem]' style={{ zIndex: '1', maxWidth: '1200px' }}>
          <h2 className='max-w-full uppercase mt-0 mb-0   font-use text-[50px] sm:text-xl sm:ml-3' style={{ color: '#fff', letterSpacing: '2px', lineHeight: '60px' }}>Our Certifications
          </h2>
          <div className='w-full sm:ml-0 max-w-full mt-[60px] ml-[100px] sm:mt-[1rem]' >
            <div className='logos-container sm:gap-[3rem]'>

              <div onClick={openIsoModal} className='flex flex-col cursor-pointer'>
                <img alt='ISO' className='logo-section max-w-full' src={isologo3}></img>
                <label className='text-[#fff] mt-[1rem] text-center'>ISO 27701:2019</label>
              </div>
              <div onClick={openIso3Modal} className=' flex flex-col cursor-pointer'>
                <img alt='ISO' className='logo-section max-w-full' src={isologo1}></img>
              </div>
              <div onClick={openIso2Modal} className='flex flex-col cursor-pointer'>
                <img alt='ISO' className='logo-section max-w-full' src={isologo2}></img>
                <label className='text-[#fff] mt-[1rem] text-center'>ISO 27701:2022</label>
              </div>

            </div>
          </div>
        </div>


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
                    <img alt='ISO' src={iso2015}></img>
                    <img alt='ISO' src={iso2019}></img>
                    <img alt='ISO' src={iso2022}></img>

                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
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
                    <img alt='ISO' src={iso2022}></img>

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
                    <img alt='ISO' src={iso2022}></img>

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
                    <img alt='ISO' src={iso2015}></img>

                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* footer section */}

        <Footer data={data.allStrapiFooter.nodes[0]} />

      </div>
    </>

  )
}

export default Index

export const pageQuery = graphql`
query MyQuery {
    allStrapiHomepage {
      nodes {
        seo {
          metaTitle
          metaDescription {
            data {
              metaDescription
            }
          }
        }
        mobileresolutionvideo {
          localFile {
            url
          }
        }
        headervideo {
          localFile {
            url
          }
        }
        unseentitle
        unseensubtitle
        unseencontent {
          data {
            unseencontent
          }
        }
        unseenimg {
          localFile {
            url
          }
        }
        abouttitle
        aboutcontent {
          data {
            aboutcontent
          }
        }
        aboutimg {
            localFile {
              url
            }
          }
        thirdsectitle
        thirdsecsubtitle
        thirdseccontent {
          data {
            thirdseccontent
          }
        }
        thirdlogo1 {
          localFile {
            childrenImageSharp {
              fixed {
                src
              }
            }
          }
        }
        logo1title
        logo2title {
          localFile {
            childrenImageSharp {
              fluid {
                src
              }
            }
          }
        }
        logo2content {
          data {
            logo2content
          }
        }
        logo3 {
          localFile {
            childrenImageSharp {
              fluid {
                src
              }
            }
          }
        }
        logo3content {
          data {
            logo3content
          }
        }
        logo4title {
          localFile {
            childrenImageSharp {
              fluid {
                src
              }
            }
          }
        }
        logo4content
        thirdsecimg {
          localFile {
            url
          }
        }
        rainbowtext
        fourthtitle
        fourthrainbowtext
        fourthsubtitle
        fourthcard1title
        fourthcard1content
        fourthcard2title
        fourthcard2content
        fourthcard3title
        fourthcard3content
        fourthcard4title
        fourthcard4content
        sateliteimg {
          localFile {
            url
          }
        }
        fifthtitle
        fifthsubtitle
        fifthcontent {
          data {
            fifthcontent
          }
        }
        fifthimg {
          localFile {
            childrenImageSharp {
              fluid {
                src
              }
            }
          }
        }
        sixthtitle
        sixthsubtitle
        sixthcontent {
          data {
            sixthcontent
          }
        }
        sixthimg {
          localFile {
            childrenImageSharp {
              fluid {
                src
              }
            }
          }
        }
        quote
        author
        quotecontent {
          data {
            quotecontent
          }
        }
        quoteimg {
          localFile {
            childrenImageSharp {
              fluid {
                src
              }
            }
          }
        }
        newstitle
        newssubtitle
        newscards {
          date
          News_Url
          newscontent {
            data {
              newscontent
            }
          }
          news_head{
            data{
              news_head
            }
          }
        }

        newslogo {
            localFile {
              url
            }
          }
          moreAboutUs
          LearnMore
          moreAboutTechnology
          askUs
          futureWith
          aboutMedia
          getInTouch
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