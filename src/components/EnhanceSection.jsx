import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { navigate } from "gatsby";
import pointsImg from "../../public/img/homepage/mb_points.svg";
import mbSampleImg from "../../public/img/homepage/mb_sample.png";

const EnhanceSection = ({ bionicLogoImg }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 768);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const leftContainerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const rightContainerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const middleImageVariants = {
    hidden: { rotate: 180 },
    visible: { rotate: 0, transition: { duration: 0.8 } },
  };

  const handleNavigation = () => {
    navigate("/ai-products/bionic-suite");
  };

  return (
    <div className="w-full px-4 flex flex-col justify-center items-center md:my-8">
      <div className="flex items-center">
        <h1
          className="text-[#1B3363] font-bold text-2xl md:text-2xl lg:text-3xl my-4 text-center cursor-pointer"
          onClick={handleNavigation}
        >
          Enhancing Radiologist Workflow with Bionic
        </h1>
        <div className="h-1.5 w-1.5 bg-red-500 relative top-9 left-1 md:top-1 lg:top-3 md:left-2 md:block hidden"></div>
      </div>

      {isMobile ? (
        <div className="md:hidden">
          <div className="h-[600px] w-[90vw] flex flex-col justify-center items-center">
            <img src={mbSampleImg} className="h-[100%] w-[100%]" alt="img" />
          </div>
        </div>
      ) : (
        <motion.div
          className="md:h-[60vh] w-full flex flex-col md:flex-row justify-between items-center my-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="flex flex-col justify-between items-center h-full"
            variants={leftContainerVariants}
          >
            <div className="md:h-[18vh] md:w-[28vw] lg:w-[31vw]  rounded-2xl flex flex-col justify-around items-center md:items-end py-2 lg:px-5 mb-5 md:mb-0 md:ml-4">
              <h1 className="text-[#0070C0] font-bold text-lg md:text-xl lg:text-2xl">
                Segment
              </h1>
              <p className="text-black text-sm md:text-base text-center md:text-right md:w-[100%] lg:w-[80%]">
                Segments key organs and provides radiologists with precise
                measurements, reducing analysis time.
              </p>
            </div>
            <div className="md:h-[18vh] md:w-[28vw] lg:w-[31vw] rounded-2xl flex flex-col justify-around items-center md:items-end py-2 lg:px-5 md:mr-4">
              <p className="text-black text-sm md:text-base text-center md:text-right md:w-[100%] lg:w-[80%]">
                AI-powered analysis replaces traditional DEXA scans for
                osteoporosis detection by analyzing knee X-rays.
              </p>
              <h1 className="text-[#E86A8A] font-bold text-lg md:text-xl lg:text-2xl">
                Analyze
              </h1>
            </div>
          </motion.div>

          <motion.div
            className="md:block hidden"
            variants={middleImageVariants}
          >
            <div
              className="bg-cover bg-center md:h-[64vh] md:w-[35vw] lg:h-[84vh] lg:w-[35vw] flex flex-col justify-center items-center cursor-pointer"
              style={{
                backgroundImage: `url(${bionicLogoImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              onClick={handleNavigation}
            ></div>
          </motion.div>

          <motion.div
            className="flex flex-col justify-between items-center h-full"
            variants={rightContainerVariants}
          >
            <div className="md:h-[18vh] md:w-[28vw] lg:w-[31vw] rounded-2xl flex flex-col justify-around items-center md:items-start py-2 lg:px-5 mb-5 md:mb-0 md:mr-4">
              <h1 className="text-[#A6A6A6] font-bold text-lg md:text-xl lg:text-2xl">
                Detect
              </h1>
              <p className="text-black text-sm md:text-base text-center md:text-left md:w-[100%] lg:w-[80%]">
                Autonomously detects pathologies, generating preliminary reports
                for critical cases, supporting fast, accurate responses for
                urgent care.
              </p>
            </div>

            <div className="md:h-[18vh] md:w-[28vw] lg:w-[31vw] rounded-2xl flex flex-col justify-around items-center md:items-start py-2 lg:px-5 mb-5 md:mb-0 md:ml-4">
              <p className="text-black text-sm md:text-base text-center md:text-left md:w-[100%] lg:w-[80%]">
                Quantifies clinical parameters, like 28 intersection angles used
                in Chiropractic treatment, enhancing diagnostic precision in
                niche fields.
              </p>
              <h1 className="text-[#72C2A6] font-bold text-lg md:text-xl lg:text-2xl">
                Measure
              </h1>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default EnhanceSection;
