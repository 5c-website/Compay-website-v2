import React from 'react'
import '../styles/global.css'
import { Link, graphql } from 'gatsby'
import { Fragment, useRef, useState,useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import iso2015 from '../Assets/Homepage/iso-2015.jpg'
import iso2019 from '../Assets/Homepage/iso-2019.jpg'
import iso2022 from '../Assets/Homepage/iso-2022.jpg'
import Actionbutton from '../components/Actionbutton'

function Footer({ data }) {
    const strapiContent = data;
    const cancelButtonRef = useRef(null)
    const [openIso,setopenIso]=useState(false)



    function openIsoModal(){
        setopenIso(true);
      }

  return (
    <>
    {/* <Transition.Root show={openIso} as={Fragment}>
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
                <Dialog.Panel className="relative flex flex-col gap-[1rem] transform overflow-hidden rounded-lg  text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <img src={iso2015}></img>
                  <img src={iso2019}></img>
                  <img src={iso2022}></img>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>     */}

    <div className='footer section pl-0 pr-0'>
                <div className='relative ml-auto mr-auto max-w-[1200px]'>
                    <div className='flex justify-between items-start pb-0 pl-4 pr-4 mb-8 mt-[101px] sm:flex-col sm:mt-50px ' style={{border: '1px #7c4c4c', borderBottomColor: 'rgba(255, 255, 255, .5)' }}>
                        <div className='flex flex-col items-start'>
                            <a href='https://open.spotify.com/show/6IAeIuksZiw6T3FkCjAbsP?si=ZhB_Sr8uT3-kr0tqeh25Kw' className='uppercase  font-use leading-[48px] text-[40px]' style={{ color: 'rgba(255, 255, 255, .85) '}}>{strapiContent.title}</a>
                            <p className=' text-xl leading-8 font-use-one w-[441px] mt-[30px] sm:w-[100%] sm:text-lg' style={{ color: 'rgba(255, 255, 255, .85)'}}>{strapiContent.content}</p>
                            {/* getintouchbutton */}
                            <Link to='/contact' className=' sm:w-full'>
                            <Actionbutton label="Get In Touch"/>
                            </Link>
                            <div className='social-platform font-use sm:w-[100%]'>
                                <a href={strapiContent.facebook_Url} target='_blank' className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                    <img src={strapiContent.facebook.localFile.url} alt='facebook' className='mr-0 max-w-full inline-block align-middle'></img>
                                </a>
                                <a href={strapiContent.linkedin_Url} target='_blank' className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                    <img src={strapiContent.linkedin.localFile.url} alt='Linkedin' className='mr-0 max-w-full inline-block align-middle'></img>
                                </a>
                                <a href={strapiContent.X_Url} target='_blank' className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                    <img src={strapiContent.X.localFile.url} alt='Twitter' className='mr-0 max-w-full inline-block align-middle'></img>
                                </a>
                                <a href={strapiContent.instagram_Url} target='_blank' className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                    <img src={strapiContent.instagram.localFile.url} alt='Medium' className='mr-0 max-w-full inline-block align-middle'></img>
                                </a>
                            </div>
                        </div>
                        <div className='flex sm:mt-[65px] sm:w-[100%] sm:justify-between ml-[13rem] sm:ml-0'>
                            <div className='flex flex-col font-use ml-[60px] sm:ml-[5px]'>
                            <a href='https://borderlessradiology.com/' target='_blank' className='uppercase mb-4 text-sm leading-5  footer-hover ' style={{  letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Borderless Radiology - For Radiologists </a>
                <a href='https://play.google.com/store/apps/details?id=db.com.a5c&pcampaignid=web_share' target='_blank' className='uppercase mb-4 text-sm leading-5  footer-hover ' style={{  letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>ProtoCALL - for Radiographers</a>
                <a href='https://ai.5cnetwork.com/'target='_blank' className='uppercase mb-4 text-sm leading-5  footer-hover ' style={{  letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Pixel Predict - AI Newsletter </a>
                {/* <Link to="#" className='uppercase mb-4 text-sm leading-5  footer-hover ' style={{  letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>media</Link> */}
                {/* <a href='https://osteocheck.5cnetwork.com/' className='uppercase mb-4 text-sm leading-5  footer-hover ' style={{  letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Osteocheck</a> */}
                <a href='https://chat.whatsapp.com/EXOCBtpLcpqB3JUSK3ifFl' target='_blank' className='uppercase mb-4 text-sm leading-5  footer-hover ' style={{  letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Radiographers - Community </a>
                <a href='https://open.spotify.com/show/6IAeIuksZiw6T3FkCjAbsP' target='_blank' className='uppercase mb-4 text-sm leading-5  footer-hover ' style={{  letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Podcast</a>
                {/* <Link to="/privacy-policy" className='uppercase mb-4 text-sm leading-5  footer-hover ' style={{  letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Privacy policy</Link> */}


                            </div>
                            <div className='flex flex-col font-use ml-[60px]'>
                            <Link to="/privacy-policy" className='uppercase mb-4 text-sm leading-5  footer-hover ' style={{  letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>Privacy policy</Link>
                            <Link  className='uppercase mb-4 text-sm leading-5 cursor-pointer  footer-hover ' style={{  letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}><div onClick={openIsoModal}>Certifications</div></Link>
                <Link to='/complianceregulatory' className='uppercase mb-4 text-sm leading-5  footer-hover ' style={{  letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>compliance & regulatory</Link>
                                {/* <Link to="#" className='uppercase mb-4 text-sm leading-5  footer-hover ' style={{  letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>privacy policy</Link> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative flex flex-row items-end mt-0 overflow-hidden' style={{ color: '#fff', height: '400px' }}>
                    <video autoPlay loop muted className=' w-full h-full absolute m-auto object-cover bg-cover inline-block align-baseline ' style={{ backgroundPosition: '50%', top: '-100%', bottom: '-100%', left: '-100%', right: '-100%' }}>
                        <source src={strapiContent.Footer_Video.localFile.url} type="video/mp4" />
                    </video>
                </div>
            </div>
            </>
  )
}

export default Footer

// export const pageQuery = graphql`
// query MyQuery {
//     allStrapiFooter {
//       nodes {
//         Footer_Video {
//           localFile {
//             url
//           }
//         }
//         X {
//           localFile {
//             url
//           }
//         }
//         X_Url
//         facebook {
//           localFile {
//             url
//           }
//         }
//         facebook_Url
//         instagram {
//           localFile {
//             url
//           }
//         }
//         instagram_Url
//         linkedin {
//           localFile {
//             url
//           }
//         }
//         linkedin_Url
//         title
//         content
//       }
//     }
//   }
// `
