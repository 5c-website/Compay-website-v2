import React from "react";
import { Fragment, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { Dialog, Transition } from "@headlessui/react";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import iso2019 from "../../public/img/iso/iso_2019.jpg";
import iso2022 from "../../public/img/iso/iso_2022.jpg";
import iso2015 from "../../public/img/iso/iso_2024.jpeg";

function Complianceregulatory() {
  const cancelButtonRef = useRef(null);
  const [openIso2, setopenIso2] = useState(false);
  const [openIso3, setopenIso3] = useState(false);
  const [openIso4, setopenIso4] = useState(false);

  function openIso4Modal() {
    setopenIso4(true);
  }

  function openIso2Modal() {
    setopenIso2(true);
  }
  function openIso3Modal() {
    setopenIso3(true);
  }

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Compliance Regulatory</title>
      </Helmet>
      <div className=" bg-white Homepage border-2 border-black overflow-x-hidden">
        <a
          href="https://play.google.com/store/apps/details?id=db.com.a5c"
          class="outer inline-block ml-6  text-base align-top absolute uppercase cursor-pointer top-0 bottom-auto left-auto right-0 z-[1] mobile-screen-signin"
        >
          <span class="inner"></span>
          <span class="inner"></span>
          <span class="inner"></span>
          <span class="inner"></span>
          Sign In
        </a>

        <Navbar />

        {/* mobile-responsive */}
        {/* <Navbarmd /> */}

        <div className=" flex flex-col justify-start items-center bg-no-repeat privacy-policy">
          <div className="max-w-4xl mt-[5rem] sm:mt-[6rem] sm:ml-[10px] mx-4">
            <h1 className="max-w-full font-bold  tracking-[2px] text-4xl mb-6">
              Compliance and Regulatory
            </h1>
            <div className="max-w-full">
              <p className="mb-6 text-[12px] md:text-[20px]">
                Welcome to the Compliance Hub of 5C Network, Ensuring Precision
                and Quality in Tele-Radiology Services
                <p>&zwj;</p>
                At 5C Network, we prioritise compliance, accuracy, and
                innovation in our tele-radiology solutions. Our commitment to
                regulatory standards, quality assurance, and process excellence
                is embedded in every aspect of our operations.
                <p>&zwj;</p>
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-full flex justify-center items-center">
          <div className=" max-w-4xl pb-[120px] mx-4">
            <div className="mt-0 privacy-content">
              {/* <p>&zwj;</p> */}
              <h2 className="max-w-full font-bold text-4xl">
                Our Certifications:
              </h2>
              <p>&zwj;</p>
              <ul>
                <li className=" w-full max-w-full items-start mb-8 pl-0 flex">
                  <div className="bullet-line-css"></div>
                  <p className=" mt-0 mb-0 text-[12px] md:text-[20px]">
                    <label className=" underline footer-hover cursor-pointer">
                      <div onClick={openIso3Modal}>
                        ISO 9001:2015 for Quality Management Services:
                      </div>
                    </label>
                    This certification underlines our dedication to maintaining
                    high-quality services, ensuring customer satisfaction, and
                    continuous improvement in our processes.
                  </p>
                </li>
                <li className=" w-full max-w-full items-start mb-8 pl-0 flex">
                  <div className="bullet-line-css"></div>
                  <p className=" mt-0 mb-0 text-[12px] md:text-[20px]">
                    <label className=" underline cursor-pointer footer-hover`">
                      <div onClick={() => openIso4Modal()}>
                        ISO 27701:2019 for Privacy Information Management:{" "}
                      </div>
                    </label>
                    Highlights our commitment to managing privacy information,
                    ensuring compliance with data privacy regulations and
                    protecting individuals' rights.
                  </p>
                </li>

                <li className=" w-full max-w-full items-start mb-8 pl-0 flex">
                  <div className="bullet-line-css"></div>
                  <p className=" mt-0 mb-0 text-[12px] md:text-[20px]">
                    <label className=" underline footer-hover cursor-pointer">
                      {" "}
                      <div onClick={openIso2Modal}>
                        ISO 27001:2022 for Information Security Management:
                      </div>
                    </label>
                    Demonstrates our robust information security practices,
                    ensuring the confidentiality, integrity, and availability of
                    information assets
                  </p>
                </li>
              </ul>

              <h2 className="max-w-full font-bold  tracking-[2px] text-4xl">
                Compliance Assurance in Tele-Radiology:
              </h2>
              <p>&zwj;</p>
              <ul>
                <li className=" w-full max-w-full items-start mb-8 pl-0 flex">
                  <div className="bullet-line-css"></div>
                  <p className=" mt-0 mb-0 text-[12px] md:text-[20px]">
                    <label className=" font-bold">Regulatory Adherence: </label>
                    5C Network adheres to industry regulations and standards,
                    guaranteeing compliance with stringent requirements to
                    ensure the highest quality, security, and ethical standards.
                  </p>
                </li>
                <li className=" w-full max-w-full items-start mb-8 pl-0 flex">
                  <div className="bullet-line-css"></div>
                  <p className=" mt-0 mb-0 text-[12px] md:text-[20px]">
                    <label className=" font-bold">
                      Advanced Data Security Measures:
                    </label>
                    Our stringent data security protocols exceed industry
                    compliance standards, ensuring the utmost confidentiality
                    and integrity of patient information.
                  </p>
                </li>
                <li className=" w-full max-w-full items-start mb-8 pl-0 flex">
                  <div className="bullet-line-css"></div>
                  <p className=" mt-0 mb-0 text-[12px] md:text-[20px]">
                    <label className=" font-bold">
                      Continuous Quality Improvement:{" "}
                    </label>
                    We employ a culture of continuous improvement, regularly
                    reviewing and enhancing our processes to maintain accuracy
                    and provide actionable insights.
                  </p>
                </li>
                <li className=" w-full max-w-full items-start mb-8 pl-0 flex">
                  <div className="bullet-line-css"></div>
                  <p className=" mt-0 mb-0 text-[12px] md:text-[20px]">
                    <label className=" font-bold">
                      Expert Clinical Oversight:{" "}
                    </label>
                    Our tele-radiology services undergo expert clinical
                    oversight, ensuring accuracy and reliability in diagnoses
                    while complying with industry best practices.
                  </p>
                </li>
                <li className=" w-full max-w-full items-start mb-8 pl-0 flex">
                  <div className="bullet-line-css"></div>
                  <p className=" mt-0 mb-0 text-[12px] md:text-[20px]">
                    <label className=" font-bold">Unmatched Compliance: </label>
                    Our commitment to regulatory compliance ensures peace of
                    mind for our clients and partners, guaranteeing adherence to
                    the strictest industry standards.
                  </p>
                </li>
                <li className=" w-full max-w-full items-start mb-8 pl-0 flex">
                  <div className="bullet-line-css"></div>
                  <p className=" mt-0 mb-0 text-[12px] md:text-[20px]">
                    <label className=" font-bold">
                      Innovation and Expertise:{" "}
                    </label>
                    Our cutting-edge technology, combined with the expertise of
                    our professionals, delivers tele-radiology solutions that
                    lead in innovation and precision.
                  </p>
                </li>
                <li className=" w-full max-w-full items-start mb-8 pl-0 flex">
                  <div className="bullet-line-css"></div>
                  <p className=" mt-0 mb-0 text-[12px] md:text-[20px]">
                    <label className=" font-bold">Tailored Solutions: </label>
                    We offer personalised solutions to meet the unique needs of
                    each client while upholding the highest standards of
                    compliance and quality.
                  </p>
                </li>
              </ul>

              <h2 className="max-w-full font-bold  tracking-[2px] text-4xl">
                Contact Us Today
              </h2>
              <p>&zwj;</p>
              <ul>
                <li className=" w-full max-w-full items-start pl-0 flex">
                  <p className=" mt-0 mb-0 text-[12px] md:text-[20px]">
                    Ready to experience tele-radiology services that excel in
                    compliance, quality, and innovation? Contact 5C Network
                    today at
                    <label className=" text-[#00d4ff] font-italic">
                      <a href="mailto:compliance@5cnetwork.com">
                        {" "}
                        compliance@5cnetwork.com
                      </a>
                    </label>{" "}
                    to learn more about how we can elevate your radiologist
                    experience.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Transition.Root show={openIso2} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            initialFocus={cancelButtonRef}
            onClose={setopenIso2}
          >
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
              <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0 md:my-28">
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
          <Dialog
            as="div"
            className="relative z-10"
            initialFocus={cancelButtonRef}
            onClose={setopenIso3}
          >
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
              <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0 md:my-28">
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
          <Dialog
            as="div"
            className="relative z-10"
            initialFocus={cancelButtonRef}
            onClose={setopenIso4}
          >
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
              <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0 md:my-28">
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

        {/* <img src={iso2019}></img> */}
        {/* <Transition.Root show={openIso4} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            initialFocus={cancelButtonRef}
            onClose={setopenIso4}
          >
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
        </Transition.Root> */}
        <Footer />
      </div>
    </>
  );
}

export default Complianceregulatory;
