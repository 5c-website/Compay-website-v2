import React, { useEffect, useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Analytics } from "@vercel/analytics/react";
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
        <section className="relative h-56 md:h-[60vh] lg:h-[60vh] overflow-hidden bg-gray-100 flex items-center justify-center">
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

        {/* 5C in the Media Section */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="container mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                In the News
              </motion.h1>
              <motion.p 
                className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                See what the world is saying about our mission to redefine the future of radiology.
              </motion.p>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Article 1: Large Main Article */}
              <motion.div 
                className="md:col-span-2 lg:col-span-2 lg:row-span-2 rounded-3xl overflow-hidden group bento-item border border-gray-200/80 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                onClick={() => window.open("https://www.expresshealthcare.in/radiology/5c-network-launches-bionic-report-explainer/450232/", "_blank")}
              >
                <div className="aspect-w-16 aspect-h-6">
                  <img 
                    src="/impact/news/express_health_care.jpg"
                    alt="5C Network Launches Bionic Report Explainer" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 md:p-6 flex flex-col h-[55%]">
                  <div className="flex items-center mb-2">
                    <img 
                      src="https://www.expresshealthcare.in/wp-content/uploads/2024/01/express-healthcare-logo.png" 
                      alt="Express Healthcare Logo" 
                      className="h-5 w-5 rounded-full mr-2"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://placehold.co/40x40/000000/ffffff?text=EH";
                      }}
                    />
                    <p className="text-sm font-semibold text-blue-600">Express Healthcare</p>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 flex-grow">
                    5C Network Launches Bionic Report Explainer
                  </h2>
                  <p className="text-sm text-gray-600 mb-3">
                    The Bionic Report leverages cutting-edge AI technology to transform how radiologists interpret medical scans. By combining Computer Vision (CV) and Large Language Models (LLMs), it provides unprecedented accuracy in detecting abnormalities and generating comprehensive medical reports.
                  </p>
                  <button className="inline-flex items-center mt-auto text-sm font-semibold text-gray-800 group-hover:text-teal-600">
                    Read Article
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </motion.div>

              {/* Article 2: Small Top-Right */}
              <motion.div 
                className="rounded-3xl overflow-hidden group bento-item border border-gray-200/80 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                onClick={() => window.open("https://www.expresshealthcare.in/news/the-diagnostic-arena-demands-precision-ai-delivers-it-at-scale/450290/", "_blank")}
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img 
                    src="/impact/news/express_health_care_2.jpg"
                    alt="AI Delivers Precision at Scale" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col h-[50%]">
                  <div className="flex items-center mb-2">
                    <img 
                      src="https://www.expresshealthcare.in/wp-content/uploads/2024/01/express-healthcare-logo.png" 
                      alt="Express Healthcare Logo" 
                      className="h-5 w-5 rounded-md mr-2"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://placehold.co/40x40/cccccc/000000?text=EH";
                      }}
                    />
                    <p className="text-sm font-semibold text-teal-600">Express Healthcare</p>
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 flex-grow mb-2">
                    The Diagnostic Arena Demands Precision: AI Delivers It at Scale
                  </h2>
                  <button className="inline-flex items-center mt-3 text-sm font-semibold text-gray-800 group-hover:text-teal-600">
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>

              {/* Article 3: Small Top-Right */}
              <motion.div 
                className="rounded-3xl overflow-hidden group bento-item border border-gray-200/80 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                onClick={() => window.open("https://yourstory.com/2025/07/5c-network-ai-radiology-platform-india", "_blank")}
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img 
                    src="/impact/news/yourstory.jpg"
                    alt="5C Network AI Radiology Platform" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col h-[50%]">
                  <div className="flex items-center mb-2">
                    <img 
                      src="https://yourstory.com/wp-content/uploads/2020/01/yourstory-logo.png" 
                      alt="YourStory Logo" 
                      className="h-5 w-5 rounded-md mr-2"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://placehold.co/40x40/cccccc/000000?text=YS";
                      }}
                    />
                    <p className="text-sm font-semibold text-pink-600">YourStory</p>
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 flex-grow mb-2">
                    5C Network: Revolutionizing Radiology with AI Platform in India
                  </h2>
                  <button className="inline-flex items-center mt-3 text-sm font-semibold text-gray-800 group-hover:text-teal-600">
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>

              {/* Article 4: Medium Bottom-Right */}
              <motion.div 
                className="md:col-span-1 lg:col-span-2 rounded-3xl overflow-hidden group bento-item border border-gray-200/80 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                onClick={() => window.open("https://www.news18.com/india/indians-move-from-lipid-profile-to-advanced-screening-tests-amid-rising-heart-attack-risk-ws-el-9515955.html", "_blank")}
              >
                <div className="h-24 md:h-28">
                  <img 
                    src="/impact/news/new18.jpg"
                    alt="Advanced Heart Health Screening" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col h-[30%]">
                  <div className="flex items-center mb-2">
                    <img 
                      src="https://www.news18.com/static/images/logo.png" 
                      alt="News18 Logo" 
                      className="h-6 w-6 rounded-full mr-3"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://placehold.co/40x40/cccccc/000000?text=N18";
                      }}
                    />
                    <p className="text-sm font-semibold text-purple-600">News18</p>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 flex-grow mb-2">
                    Indians Move from Lipid Profile to Advanced Screening Tests Amid Rising Heart Attack Risk
                  </h2>
                  <button className="inline-flex items-center mt-3 font-semibold text-gray-800 group-hover:text-purple-600">
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <EnhanceSection bionicLogoImg={EnhanceImg} />

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
      <Analytics />
    </div>
  );
};

export default IndexPage;
