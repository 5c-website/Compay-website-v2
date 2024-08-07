import React from 'react'
import Navbar from '../Utils/Navbar'
import Navbarmd from '../Utils/Navbarmd'
import Footer from '../Utils/Footer';
import { Helmet } from "react-helmet";
import {  graphql } from 'gatsby'
import tablogo from '../Assets/Homepage/favicon.ico'



function Privacypolicy({ data }) {
  const strapicontent = data.allStrapiPrivacypolicy.nodes[0];


  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{strapicontent.seo.metaTitle}</title>
        <meta name="google-site-verification" content="google3324f12ef9a97f3e" />

        <meta name="description" content={strapicontent.seo.metaDescription.data.metaDescription} />
        <link rel="icon" href={tablogo}
          type="image/x-icon" />
        {/* <meta name="author" content={author} /> */}
      </Helmet>
      <div className='bg-black homepage'>


        <a href='https://play.google.com/store/apps/details?id=db.com.a5c' class="outer inline-block ml-6  text-base align-top absolute uppercase cursor-pointer top-0 bottom-auto left-auto right-0 z-[1] mobile-screen-signin">
          <span class="inner"></span>
          <span class="inner"></span>
          <span class="inner"></span>
          <span class="inner"></span>
          Sign In
        </a>

        <Navbar />

        {/* mobile-responsive */}
        <Navbarmd />

        <div className=' flex flex-col justify-start items-center bg-no-repeat privacy-policy sm:h-[80vh] sm:p-[1rem] ' >
          <div className=' max-w-full ml-auto mr-auto'>
            <div className='max-w-full relative w-[1200px] mt-[234px] sm:mt-[6rem] sm:ml-[10px]'>
              <h1 className='max-w-full uppercase mt-0 mb-0 font-medium font-use text-[#fff] tracking-[2px] leading-[100px] text-[80px] sm:text-[2.5rem]'>Privacy Policy</h1>
              <div className='max-w-full mt-10 text-[#fff]  ml-[100px] sm:ml-[10px] sm:mt-0  sm:w-[85%]'>
                <p className='mb-0 text-xl mt-0 leading-8  font-use sm:text-base'>
                  This is the Privacy Policy <b>"Policy"</b> of <b>5C Network (India) Private Limited</b>,
                  a company incorporated under the Companies Act, 2013, and having its registered office at No.313, Mico Employees
                  Gruha Nirmana Sangha, BTM 2nd Stage, Rashtrakavi Kuvempu Nagara, Bengaluru, Karnataka 560076 (hereinafter
                  referred to as <b>“Company”</b>, which expression includes the Company’s successors-in-interest and
                  assignees).
                  <p>&zwj;</p>
                  The Company provides teleradiology and tele-diagnostics services and solutions <b>(“Services”)</b>.
                  As an individual <b>(“Patient”)</b>, if you undergo a radiology test like an x-ray, MRI or CT at one
                  of the Company’s radiology/diagnostic partners <b>(“Diagnostic Partner”)</b>, either directly or
                  through certain third-party diagnostic aggregators of the Company <b>(“Aggregators”)</b>, or give any
                  blood sample or other lab sample or any radiology imaging or scans <b>(“Diagnostic Material”)</b>,
                  the Company receives your Diagnostic Material from that Diagnostic Partner and makes them available to a
                  qualified radiologist or other diagnostician <b>(“Diagnostician”)</b>. The Diagnostician prepares a{' '}
                  <b>“Report”</b> based on the Diagnostic Material and the Company then sends back the Report to the
                  Diagnostic Partner.
                  <p>&zwj;</p>
                  The Company receives Personal Information (as defined below) from you as a person submitting yourself to a diagnostic procedure. The Company may also collect Personal Information from you if you are a representative of a Diagnostic Partner or a Diagnostician who visits the Company’s website for the purpose of availing a demo of the Company’s Services.
                  <p>&zwj;</p>
                  This Policy gives details of the Personal Information about you that the Company receives and the purpose for which and the manner in which the Company uses the Personal Information.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='max-w-full flex justify-center items-center ml-auto mr-auto'>
          <div className=' w-[1200px] max-w-full pt-[120px] pb-[120px] relative'>
            <div className='sm:mt-[68rem] p-[1rem] privacy-content'>
              <p>&zwj;</p>
              <h2 className='text-[36px] leading-[1.4] text-[#fff] tracking-[2px] uppercase mt-0 mb-0 font-use font-semibold underline sm:text-[20px]'>Your Personal Information</h2>
              <p>&zwj;</p>
              <ul className='ml-[2rem] sm:ml-0'>
                <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                  <div className='bullet-line-css'></div>
                  <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                    The Company may receive your “Personal Information” such as: name, sex,
                    age, date of birth, email address, phone numbers (if required), location, IP
                    address, preferences, medical documents, medical history and health status.
                  </p>
                </li>
                <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                  <div className='bullet-line-css'></div>
                  <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                    By accepting this Policy, you authorize the Company to collect, receive, store
                    and process your Personal Information for enabling the Company to provide the
                    Services or a demo and other information related to the Services.
                  </p>
                </li>
              </ul>

              <p>&zwj;</p>
              <h2 className='text-[36px] leading-[1.4] text-[#fff] tracking-[2px] uppercase mt-0 mb-0 font-use font-semibold underline sm:text-[20px]'>How We Receive Your Personal Information</h2>
              <p>&zwj;</p>
              <ul className='ml-[2rem] sm:ml-0'>
                <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                  <div className='bullet-line-css'></div>
                  <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                    We receive your Personal Information through the Diagnostic Partner, for
                    which you have consented to the further sharing of such Personal Information by
                    the Diagnostic Partner with us in relation to the Services.
                  </p>
                </li>
                <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                  <div className='bullet-line-css'></div>
                  <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                    We may also receive your Personal Information through the Aggregators, for
                    which you have consented to the further sharing of such Personal Information by
                    the Aggregators with us in relation to the Services.
                  </p>
                </li>
                <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                  <div className='bullet-line-css'></div>
                  <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                    The Personal Information we receive is usually in the form of metadata tagged
                    with the Diagnostic Material. We may also receive your Personal Information as
                    part of a case-sheet or other document or information made available to us along
                    with the Diagnostic Material.
                  </p>
                </li>
                <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                  <div className='bullet-line-css'></div>
                  <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                    We may collect your Personal Information on our website and applications if
                    you are a representative of a Diagnostic Partner or if you are a Diagnostician.
                  </p>
                </li>
              </ul>

              <p>&zwj;</p>
              <h2 className='text-[36px] leading-[1.4] text-[#fff] tracking-[2px] uppercase mt-0 mb-0 font-use font-semibold underline sm:text-[20px]'>How We Use The Information We Collect</h2>
              <p>&zwj;</p>
              <p className=' mb-0 font-use-one text-[20px] leading-8 mt-0' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                The Company receives and uses your Personal Information for the following purposes:
              </p>
              <p>&zwj;</p>
              <ul className='ml-[2rem] sm:ml-0'>
                <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                  <div className='bullet-line-css'></div>
                  <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                    To connect you with the nearest Diagnostic Partner,
                  </p>
                </li>
                <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                  <div className='bullet-line-css'></div>
                  <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                    For providing the Services indirectly to you through Aggregators, the Diagnostic Partners and/or Diagnosticians,
                  </p>
                </li>
                <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                  <div className='bullet-line-css'></div>
                  <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                    For identifying patients and facilitating consultation and follow-up consultations with a physician,

                  </p>
                </li>
                <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                  <div className='bullet-line-css'></div>
                  <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                    To improve diagnostic accuracy by clinically correlating diagnostic results and patient symptomatic information,
                  </p>
                </li>
                <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                  <div className='bullet-line-css'></div>
                  <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                    To improve patient experience,
                  </p>
                </li>
                <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                  <div className='bullet-line-css'></div>
                  <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                    For providing a demo to you if you are a prospective Diagnostic Partner or a Diagnostician,

                  </p>
                </li>
                <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                  <div className='bullet-line-css'></div>
                  <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                    To train certain tools and machine learning algorithms (either in-house or third-party developed), to enhance, develop, and improve its Services.
                  </p>
                </li>

              </ul>
              <p className=' mb-0 font-use-one text-[20px] leading-8 mt-0' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                The Company may also share your Personal Information with the Company’s successors-in-interest, assignees and any other entities consequent upon a corporate restructuring of the Company including by way of merger, amalgamation, acquisition, sale of assets and so on.',
                'At all times the Company shall use your Personal Information for lawful purposes only.
              </p>
              <p>&zwj;</p>
              <h2 className='text-[36px] leading-[1.4] text-[#fff] tracking-[2px] uppercase mt-0 mb-0 font-use font-semibold underline sm:text-[20px]'>Consent To Share Your Personal Information</h2>
              <p>&zwj;</p>
              <ul className='ml-[2rem] sm:ml-0'>
                <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                  <div className='bullet-line-css'></div>
                  <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                    In order to provide Services, you authorize and provide consent to the
                    Company to share and transfer your Personal Information with Diagnosticians,
                    Diagnostic Partners, Aggregators and third-party sub-processors of the Company
                    for the purposes set forth above in paragraph 3, to enable the Company to
                    provide Services
                  </p>
                </li>
                <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                  <div className='bullet-line-css'></div>
                  <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                    We may share your Personal Information with certain government agencies
                    mandated by the applicable law to obtain personal information, for the purposes
                    of verification of identity, or for prevention, detection, investigation including
                    cyber incidents, prosecution, and punishment of offences
                  </p>
                </li>
              </ul>
              <p>&zwj;</p>
              <h2 className='text-[36px] leading-[1.4] text-[#fff] tracking-[2px] uppercase mt-0 mb-0 font-use font-semibold underline sm:text-[20px]'> Term Of Storage Of Personal Information</h2>
              <p>&zwj;</p>
              <ul className='ml-[2rem] sm:ml-0'>
                <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                  <div className='bullet-line-css'></div>
                  <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                    The Company shall store your Personal Information for as long as it deems
                    sufficient for purposes of providing Services and to fulfil legal and regulatory
                    mandates applicable to the Company.
                  </p>
                </li>
                <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                  <div className='bullet-line-css'></div>
                  <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                    As long as your Personal Information is deemed useful as evidence, the
                    Company shall retain a copy of the same
                  </p>
                </li>
                <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                  <div className='bullet-line-css'></div>
                  <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                    A copy of your Personal Information may always exist as a backup or archival
                    media to enable the Company to comply with legal and regulatory requirements
                  </p>
                </li>
                <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                  <div className='bullet-line-css'></div>
                  <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                    Your Personal Information is stored on the Company’s servers in India
                  </p>
                </li>
              </ul>

              <p>&zwj;</p>
              <h2 className='text-[36px] leading-[1.4] text-[#fff] tracking-[2px] uppercase mt-0 mb-0 font-use font-semibold underline sm:text-[20px]'>Security</h2>
              <p>&zwj;</p>
              <ul className='ml-[2rem] sm:ml-0'>
                <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                  <div className='bullet-line-css'></div>
                  <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                    To ensure the security and integrity of your Personal Information, the
                    Company complies with the technical and organizational measures, specifically
                    applicable to the Company, under the Electronic Health Record (EHR) Standards -
                    2016   and   as   applicable   from   time   to   time.   We've   established   a   dedicated
                    department within 5C that is responsible for promptly addressing all security and
                    cyber-related matters. Users have the convenience of directly engaging with the
                    5C-CyberSecurity Department by expressing their concerns through the email
                    address<label htmlFor='5C Network' className=' text-[#00d4ff] font-italic'> <a href='mailto:cybersafe@5cnetwork.com'>cybersafe@5cnetwork.com</a></label>
                  </p>
                </li>
              </ul>

              <p>&zwj;</p>
              <h2 className='text-[36px] leading-[1.4] text-[#fff] tracking-[2px] uppercase mt-0 mb-0 font-use font-semibold underline sm:text-[20px]'>Your Rights</h2>
              <p>&zwj;</p>
              <ul className='ml-[2rem] sm:ml-0'>
                <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                  <div className='bullet-line-css'></div>
                  <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                    You have the right to not consent to us receiving your Personal Information. In
                    such cases, you agree and acknowledge that the Company will not be obligated
                    to provide Services
                  </p>
                </li>
                <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                  <div className='bullet-line-css'></div>
                  <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                    You have the right to withdraw consent from enabling the Company to
                    process your Personal Information. Upon request, we will remove your Personal
                    Information from the Company’s database. However, such withdrawal of consent
                    and removal of your Personal Information from the Company’s database may
                    make you ineligible to avail the Services
                  </p>
                </li>
                <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                  <div className='bullet-line-css'></div>
                  <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                    Upon written request, you may review, access and/or request that any
                    erroneous Personal Information about you be corrected or amended
                  </p>
                </li>
              </ul>

              <p>&zwj;</p>
              <h2 className='text-[36px] leading-[1.4] text-[#fff] tracking-[2px] uppercase mt-0 mb-0 font-use font-semibold underline sm:text-[20px]'>Security</h2>
              <p>&zwj;</p>
              <ul className='ml-[2rem] sm:ml-0'>
                <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                  <div className='bullet-line-css'></div>
                  <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                    Notwithstanding anything to the contrary in this Policy or any other terms of
                    service or use applicable as between Company and you, Company’s aggregate
                    liability hereunder towards direct damages shall be limited to Rs.1000 only or
                    such   other   maximum   permissible   amount   under   applicable   law.   Company’s
                    liability   shall   not   extend   to   any   indirect   or   remote   damages   whatsoever,
                    including   but   not   limited   to   special,   incidental,   consequential,   or   punitive
                    damages or loss of profits.
                  </p>
                </li>
              </ul>

              <p>&zwj;</p>
              <h2 className='text-[36px] leading-[1.4] text-[#fff] tracking-[2px] uppercase mt-0 mb-0 font-use font-semibold underline sm:text-[20px]'>Contact Us</h2>
              <p>&zwj;</p>
              <ul className='ml-[2rem] sm:ml-0'>
                <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                  <div className='bullet-line-css'></div>
                  <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                    Please   feel   free   to   contact   our   Privacy and security Officer   at &nbsp;
                    <a href='mailto:cybersafe@5cnetwork.com' className=' text-[#00d4ff] font-italic'>cybersafe@5cnetwork.com </a>for
                  </p>
                </li>
                <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                  <div className='bullet-line-css'></div>
                  <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                    Accessing, reviewing, updating your Personal Information or withdrawing
                    your consent; and/or
                  </p>
                </li>
                <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                  <div className='bullet-line-css'></div>
                  <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                    In case of any discrepancy or grievances with this Policy or with respect to
                    your Personal Information
                  </p>
                </li>
                <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                  <div className='bullet-line-css'></div>
                  <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                    The Privacy Grievance Officer shall address your concerns as soon as
                    possible and no later than 1 (one) month from the date of receipt of your
                    grievance
                  </p>
                </li>
              </ul>

              <p>&zwj;</p>
              <h2 className='text-[36px] leading-[1.4] text-[#fff] tracking-[2px] uppercase mt-0 mb-0 font-use font-semibold underline sm:text-[20px]'>Where We Store Your Personal Information</h2>
              <p>&zwj;</p>
              <ul className='ml-[2rem] sm:ml-0'>
                <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                  <div className='bullet-line-css'></div>
                  <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                    The Personal Information we receive and process is stored in India
                  </p>
                </li>
              </ul>

              <p>&zwj;</p>
              <h2 className='text-[36px] leading-[1.4] text-[#fff] tracking-[2px] uppercase mt-0 mb-0 font-use font-semibold underline sm:text-[20px]'>Compliance</h2>
              <p>&zwj;</p>
              <ul className='ml-[2rem] sm:ml-0'>
                <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                  <div className='bullet-line-css'></div>
                  <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                    The Company shall always cooperate with regulatory authorities and
                    investigating agencies in India in the matter of treatment of your Personal
                    Information.
                  </p>
                </li>
              </ul>

              <p>&zwj;</p>
              <h2 className='text-[36px] leading-[1.4] text-[#fff] tracking-[2px] uppercase mt-0 mb-0 font-use font-semibold underline sm:text-[20px]'>Severability</h2>
              <p>&zwj;</p>
              <ul className='ml-[2rem] sm:ml-0'>
                <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                  <div className='bullet-line-css'></div>
                  <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                    In the event that any part of this Policy shall be held by a court of competent
                    jurisdiction to be unlawful or otherwise unenforceable, the remainder of this
                    Policy shall remain in full force and effect to the maximum extent possible, and
                    an attempt shall be made to substitute the unenforceable provision with an
                    enforceable provision of similar intent
                  </p>
                </li>
              </ul>

              <p>&zwj;</p>
              <h2 className='text-[36px] leading-[1.4] text-[#fff] tracking-[2px] uppercase mt-0 mb-0 font-use font-semibold underline sm:text-[20px]'>Assignment</h2>
              <p>&zwj;</p>
              <ul className='ml-[2rem] sm:ml-0'>
                <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                  <div className='bullet-line-css'></div>
                  <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                    The Company may, at any time, assign this Policy and/or its rights and under
                    this Policy to any entity, in its sole discretion
                  </p>
                </li>
              </ul>

              <p>&zwj;</p>
              <h2 className='text-[36px] leading-[1.4] text-[#fff] tracking-[2px] uppercase mt-0 mb-0 font-use font-semibold underline sm:text-[20px]'>Amendments</h2>
              <p>&zwj;</p>
              <ul className='ml-[2rem] sm:ml-0'>
                <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                  <div className='bullet-line-css'></div>
                  <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                    The Company may modify this Policy in its sole discretion at any time. While
                    the Company shall make best efforts to notify you of any such modification, it
                    shall be your responsibility to read and understand the Policy as prevalent from
                    time to time.
                  </p>
                </li>
              </ul>

              <p>&zwj;</p>
              <h2 className='text-[36px] leading-[1.4] text-[#fff] tracking-[2px] uppercase mt-0 mb-0 font-use font-semibold underline sm:text-[20px]'>Refund Policy</h2>
              <p>&zwj;</p>
              <ul className='ml-[2rem] sm:ml-0'>
                <li className=' w-full max-w-full items-start mb-8 pl-0 flex'>
                  <div className='bullet-line-css'></div>
                  <p className=' mt-0 mb-0 leading-8 text-xl  font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                  Please be aware that because our services are customized to each client and based on specific agreements,
                   refund policies may vary according to the terms of the contract.
                  </p>
                </li>
              </ul>

            </div>

          </div>
        </div>

        <Footer data={data.allStrapiFooter.nodes[0]} />
      </div>
    </>
  )
}

export default Privacypolicy

export const pageQuery = graphql`
query MyQuery {
  allStrapiPrivacypolicy {
    nodes {
      seo {
        metaTitle
        metaDescription {
          data {
            metaDescription
          }
        }
      }
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
  }`