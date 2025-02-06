import React, { useEffect, useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Navbar from "../components/Navbar";
import MarqueeCom from "../components/Marquee";
import Footer from "../components/Footer";
import { navigate } from "gatsby";
import TestimonialCarousel from "../components/TestimonialCarousel";
import StatsSection from "../components/StatsSection";
import { useInView } from "react-intersection-observer";
import QualitySection from "../components/QualitySection";
import DeliverySection from "../components/DeliverySection";
import ConfigureSection from "../components/ConfigureSection";
import desktopHeroImage from "../../public/img/homepage/hero.png";
import mobileHeroImage from "../../public/img/homepage/mb_hero.png";
import EnhanceImg from "../../public/img/homepage/bionic_svg.svg";
import EnhanceSection from "../components/EnhanceSection";
import NewMockImg from "../../public/img/new_mockup_bg.svg";
import VideoModal from "../components/video_modal";
import AmericanGambits from "../../public/videos/5c_Network_American_Gambit.mp4";
// Lazy load images
const LazyImage = lazy(() => import("../components/LazyLoad"));

const IndexPage = () => {
  const [renderCookie, setRenderCookie] = useState(true);
  const [validCookies, setValidCookies] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const isMobileDevice = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth <= 768;
    }
    return false;
  };
  const closeModal = () => setIsModalOpen(false);

  const checkAndSetCookie = () => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("cookieInfo") === null) {
        localStorage.setItem("cookieInfo", "Enable");
        setValidCookies("Enable");
      } else {
        setValidCookies(localStorage.getItem("cookieInfo"));
      }
    }
  };

  const getCookiesOff = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cookieInfo", "Disable");
      setRenderCookie(false);
    }
  };

  useEffect(() => {
    checkAndSetCookie();
  }, []);

  const heroImg = isMobileDevice() ? mobileHeroImage : desktopHeroImage;
  const checkCooky = validCookies === "Enable";

  const renderCookies = () => {
    return (
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-0 w-full bg-[#1C3363] text-white p-4 z-[999]"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm md:w-4/5">
            We use cookies to provide you with a better browsing experience,
            personalize content, serve targeted advertisements, and analyze site
            traffic. By clicking "Accept", you consent to our use of cookies. If
            you do not wish to allow cookies, you can disable them by clicking
            "Disable Cookies".
          </p>
          <div className="mt-3 md:mt-0 flex space-x-2">
            <button
              onClick={getCookiesOff}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Accept
            </button>
            <button
              onClick={getCookiesOff}
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Disable Cookies
            </button>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <header>
        {/* <div className="fixed top-0 left-0 right-0 z-40 flex items-center justify-center font-['Poppins'] bg-[#A4317F] p-3 gap-1 md:gap-3">
          <p className="text-white text-[0.8rem] md:text-md">
            5C Network partners with American Gambits, marking a new era in
            healthcare
          </p>
          <button
            className="bg-white text-black rounded-full px-3 md:px-6 py-1 text-[0.7rem] md:text-xs font-['Poppins'] min-w-[5.5rem]"
            onClick={openModal}
          >
            Watch Now
          </button>
        </div> */}
        {/* <NvidiaSummitModal /> */}
        {/* <div className="fixed top-0 left-0 right-0 z-40 flex items-center justify-center font-['Poppins'] bg-[linear-gradient(90deg,#FFD452_0%,#FCC219_73%,#FBBC04_100%)] p-3 gap-1 md:gap-3">
          <p className="text-black text-[0.6rem] md:text-sm">
            Meet us at AOCR 2025! Find us at Booth 26, Chennai Trade Center,
            Nandambakkam.
          </p>
          <button
            className="bg-white text-black rounded-full px-3 md:px-6 py-1 text-[0.6rem] md:text-sm font-['Poppins'] min-w-[8rem]"
            onClick={() =>
              window.open(
                "https://calendly.com/5caocr-5cnetwork/meet-with-5c-network-aocr-2025-booth-no-26",
                "_blank"
              )
            }
          >
            Book a meeting now
          </button>
        </div> */}
        <Navbar />
        {/* topClassName={"lg:top-[50px] top-[60px]"} */}
      </header>

      <main className="pt-[80px]">
        <section className="relative h-56 md:h-[60vh] lg:h-[70vh] overflow-hidden bg-gray-100 flex items-center justify-center">
          <div className="absolute left-0 top-10 md:left-5 md:top-[110px] lg:top-[115px] xl:left-[70px] xl:top-[145px] z-30 text-white w-full max-w-2xl">
            <div className="mx-auto px-6 md:px-8 md:py-4 flex flex-col items-center md:flex-row md:items-center">
              <motion.div
                className="w-full flex flex-col justify-center"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h1 className="hidden md:block text-xl md:text-2xl lg:text-4xl font-bold mb-4 md:text-left">
                  Building
                  <span className="text-red-500"> Multi-Modal AI </span> Systems
                </h1>
                <h1 className="block md:hidden text-xl md:text-2xl lg:text-4xl font-bold md:text-left">
                  Building
                  <span className="text-red-500"> Multi-Modal AI </span>
                  <br /> Systems for
                </h1>
                <div className="flex flex-col md:flex-row justify-center md:justify-start items-start md:items-center">
                  <div className="hidden md:block mb-[68px] p-0">
                    <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
                      for
                    </h1>
                  </div>
                  <div className="h-20 mb-3 text-center md:text-left">
                    <TypeAnimation
                      sequence={[
                        "Autonomous Diagnosis",
                        1500,
                        "Reduced Physician Burnout",
                        1500,
                        "Reliable Diagnosis",
                        1500,
                        "Saving Lives",
                        1500,
                        "Personalized Medicine",
                        1500,
                      ]}
                      wrapper="p"
                      speed={50}
                      className="text-xl sm:text-[20px] md:text-[22px] lg:text-[34px] xl:text-[36px] font-semibold text-[#F04444]  md:pl-2 inline-block"
                      repeat={Infinity}
                      cursor={false}
                    />
                  </div>
                </div>

                <div className="relative top-[-60px] md:top-[-30px]">
                  <p className="text-xs md:text-[18px] lg:text-[22px] mt-3 mb-3 md:mb-6 md:text-left">
                    Elevating Diagnosis Capabilities Through Advanced AI
                  </p>
                  <motion.button
                    className="text-white px-2 py-2 md:px-6 md:py-3 rounded-md text-[14px] md:text-lg transition-colors duration-300 hover:bg-gradient-to-br hover:from-[#CC0000] hover:to-[#EA4335] bg-gradient-to-br from-[#CC0000] to-[#EA4335]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                      window.open("https://youtu.be/znA_KNNRKK8", "_blank")
                    }
                  >
                    Experience the Magic
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>

          <Suspense
            fallback={<div className="w-full h-full bg-gray-200"></div>}
          >
            <LazyImage
              src="./img/homepage/hero_panel.png"
              alt="hero_panel_img"
              className="hidden md:block absolute bottom-0 left-0 w-[75%] h-[70vh] z-20"
              initial={{ x: "-100px", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </Suspense>

          <Suspense
            fallback={<div className="w-full h-full bg-gray-200"></div>}
          >
            <LazyImage
              src={heroImg}
              alt="hero_img"
              className="absolute top-0 right-0 w-[100%] md:w-[60%] h-[100%] z-0"
              initial={{ x: "100px", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </Suspense>
        </section>
        <section className="h-[10vh] md:h-[15vh] bg-[#E8F2FE] flex flex-column justify-center items-center">
          <MarqueeCom />
        </section>

        <section
          ref={ref}
          className="h-[10vh] md:h-[20vh] bg-[#0D5192] flex flex-row justify-around items-center"
        >
          <motion.h1
            className="text-[#fff] font-bold text-[12px] md:text-[24px] lg:text-[34px] lg:mr-8"
            style={{ wordSpacing: "0.1em", letterSpacing: "0.01em" }}
            initial={{ x: "100vw", opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ type: "tween", duration: 0.6 }}
          >
            Findout how one of the world's largest health <br /> systems is
            using 5C AI to get better outcomes
          </motion.h1>

          <motion.img
            src="./img/cta.png"
            onClick={() => navigate(`/contact-us/`)}
            className="h-[44%] md:h-[50%] lg:h-[60%] cursor-pointer"
            alt="img"
            initial={{ x: "-100vw", opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ type: "tween", duration: 0.6, delay: 0.2 }}
          />
        </section>

        <EnhanceSection bionicLogoImg={EnhanceImg} />
        <div className="block md:hidden">
          <section className="min-h-[10vh] md:h-[18vh] bg-[#fff] flex flex-row justify-center items-center">
            <p className="relative text-[#1B3363] font-normal text-[14px] text-center mt-2 pt-6">
              Trusted by the largest health system globally, renowned for its
              unparalleled scale and reach in providing top-tier healthcare
              services. Our cutting-edge AI solutions help in delivering
              consistent, accurate, and efficient patient care.
            </p>
          </section>
        </div>

        <div className="hidden md:block">
          <section className="lg:h-[33vh] bg-[#fff] flex flex-row justify-between items-center lg:my-4 my-8">
            <p
              className="text-[#000] md:text-[15px]  lg:text-[18px] md:w-[50%] lg:w-[42%] md:pl-[40px] lg:pl-[100px] text-justify"
              style={{ wordSpacing: "0.1em", letterSpacing: "0.01em" }}
            >
              Trusted by the largest health system globally, renowned for its
              unparalleled scale and reach in providing top-tier healthcare
              services. Our cutting-edge AI solutions help in delivering
              consistent, accurate, and efficient patient care.
            </p>
            <Suspense
              fallback={<div className="w-[44%] h-full bg-gray-200"></div>}
            >
              <LazyImage
                src="./img/map_img.png"
                className="lg:h-[100%] lg:w-[44%] md:h-[80%] md:w-[40%]"
                alt="img"
              />
            </Suspense>
          </section>
        </div>

        <div className="w-[100%] bg-[#E8F1FE] h-[10vh] py-[10px] md:py-[0px] px-[10px] md:px-0 md:h-[15vh] flex flex-col justify-center items-center my-[20px]">
          <h1 className="text-[#1B3363] font-bold text-[16px] text-center md:text-[24px] lg:text-[32px]">
            Reinventing Radiology Reporting with CV and LLM, Because Precision
            is Everything
          </h1>
        </div>

        <ConfigureSection />
        <StatsSection />
        <section className="min-h-[10vh] md:h-[18vh] bg-[#fff] flex flex-row justify-center items-center">
          <h1 className="text-[#1B3363] font-bold text-[16px] text-center md:text-[24px] lg:text-[28px]">
            Built with the world’s largest training set for Medical Imaging
          </h1>
        </section>
        <DeliverySection />

        <div className="md:min-h-[50vh] md:mt-[40px] flex flex-col justify-center items-center">
          <div className="w-[90%] h-[100%] mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-[44%] h-[100%] flex flex-col justify-center items-center md:items-start md:gap-6">
              <h1
                className="text-[16px] md:text-[28px] lg:text-[32px] md:text-left font-bold bg-clip-text text-transparent text-center"
                style={{
                  backgroundImage: "linear-gradient(180deg, #EA4335, #CC0000)",
                }}
              >
                How Bionic Aligns with Radiology <br /> Reporting Standards?{" "}
              </h1>
              <p className="text-[#000] text-[14px] md:text-left md:text-[20px] lg:text-[24px] text-center md:mt-0 mt-2">
                Bionic is built on a Detection-Analysis-Synthesis (D-A-S)
                workflow, closely mirroring how radiologists interpret medical
                scans:
              </p>
            </div>
            <div className="md:w-[44%] h-[100%] flex items-center my-[30px] md:my-[0px]">
              <div className="w-[100%] flex flex-col justify-center items-center gap-4">
                <div className="flex flex-row justify-center items-center gap-8">
                  <div className="px-8 py-[20px] bg-[#F3F7FF] rounded-full">
                    <h1 className="font-bold text-[28px]"> D </h1>
                  </div>
                  <div className="flex flex-col justify-start items-start w-[60%]">
                    <h1 className="text-[#000] text-[16px] md:text-[18px] lg:text-[24px] font-bold">
                      {" "}
                      Detection{" "}
                    </h1>
                    <p className="text-[#000] text-[14px] md:text-[16px] lg:text-[18px]">
                      CV technology identifies pathologies, such as lesions or
                      masses, in imaging studies.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row justify-center items-center gap-8">
                  <div className="px-8 py-[20px] bg-[#F3F7FF] rounded-full">
                    <h1 className="font-bold text-[28px]"> A </h1>
                  </div>
                  <div className="flex flex-col justify-start items-start w-[60%]">
                    <h1 className="text-[#000]  text-[16px] md:text-[18px] lg:text-[24px] font-bold">
                      {" "}
                      Analysis{" "}
                    </h1>
                    <p className="text-[#000] text-[14px] md:text-[16px] lg:text-[18px]">
                      Bionic measures and evaluates abnormalities to aid in
                      disease assessment and treatment planning.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row justify-center items-center gap-8">
                  <div className="px-8 py-[20px] bg-[#F3F7FF] rounded-full">
                    <h1 className="font-bold text-[28px]"> S </h1>
                  </div>
                  <div className="flex flex-col justify-start items-start w-[60%]">
                    <h1 className="text-[#000] text-[16px] md:text-[18px] lg:text-[24px] font-bold">
                      {" "}
                      Synthesis{" "}
                    </h1>
                    <p className="text-[#000] text-[14px] md:text-[16px] lg:text-[18px]">
                      AI-generated reports provide clear, actionable next steps,
                      facilitating accurate diagnosis and treatment decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <QualitySection />
        <section className="bg-[#fff] flex flex-row justify-center items-center md:my-8">
          <div
            className="flex flex-col justify-center gap-4 md:gap-8 items-start my-4 md:my-8 h-[140px] h-[320px] md:h-[580px] w-[100%] bg-cover bg-center bg-no-repeat pl-6 md:pl-20 pb-5 md:pb-[60px] 2xl:pl-[100px] 2xl:pb-[120px]"
            style={{
              backgroundImage: `url(${NewMockImg})`,
            }}
          >
            <div>
              <h1 className="text-red-500  text-[14px] text-left md:text-[20px] lg:text-[30px] font-bold my-[20px] mb-0">
                {" "}
                A Whole Product Ecosystem to <br /> Help You Get Most of AI{" "}
              </h1>
              <ul className="list-disc pl-4">
                <li className="text-[#000] text-[14px] md:text-[18px] text-left lg:text-[22px]">
                  {" "}
                  AI Dashboard{" "}
                </li>
                <li className="text-[#000] text-[14px] md:text-[18px] text-left lg:text-[22px]">
                  {" "}
                  Web and Mobile Platform{" "}
                </li>
                <li className="text-[#000] text-[14px] md:text-[18px] text-left lg:text-[22px]">
                  {" "}
                  Custom Alerts{" "}
                </li>
              </ul>
            </div>

            <motion.button
              className="text-white px-[6px] py-[2px] md:px-6 md:py-3 text-[12px] md:text-[14px] rounded-md md:text-lg transition-colors duration-300 hover:bg-gradient-to-br hover:from-[#CC0000] hover:to-[#EA4335] bg-gradient-to-br from-[#CC0000] to-[#EA4335]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                (window.location.href =
                  "https://play.google.com/store/apps/details?id=db.com.a5c&hl=en_IN")
              }
            >
              Open App
            </motion.button>
          </div>
        </section>
        <section className="bg-[#fff] flex flex-col justify-center items-center my-8">
          <div className="flex">
            <h1 className="text-[#1B3363] font-bold text-[24px] md:text-[28px] lg:text-[34px] my-4">
              Testimonials
            </h1>
            <div className="h-[6px] w-[6px] bg-red-500 relative top-[36px] md:top-[41px] lg:top-[48px] left-2 md:block hidden"></div>
          </div>
          <div className="w-[90%] md:w-[100%]">
            <TestimonialCarousel />
          </div>
        </section>
        {checkCooky && renderCookie && renderCookies()}
      </main>
      <footer>
        <Footer />
      </footer>
      <VideoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        videoSrc={AmericanGambits}
      />
    </div>
  );
};

export default IndexPage;
