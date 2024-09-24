import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const WorkflowSection = ({ bionicLogoImg }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);
    }
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

  const mobileContainerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="w-[100%] px-4 flex flex-col justify-center items-center md:my-[20px]">
      <h1 className="text-red-500 text-[16px] text-center md:text-[32px] font-bold my-[20px]">
        Enhancing Radiologist Workflow with Bionic
      </h1>
      <motion.div
        className="md:h-[60vh] w-[100%] flex flex-col md:flex-row justify-between items-center my-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={isMobile ? mobileContainerVariants : { visible: {} }}
      >
        <motion.div
          className="flex flex-col justify-between items-center h-[100%]"
          variants={leftContainerVariants}
        >
          <div className="md:h-[30vh] bg-[#F3F7FF] md:w-[31vw] rounded-2xl flex flex-col justify-around items-center py-2 px-[20px] mb-[20px] md:mb-0 md:ml-2">
            <h1 className="text-[#000] font-bold text-[14px] md:text-[24px]">
              Segment
            </h1>
            <p className="text-[#000] text-[12px] md:text-[20px] text-center">
              Bionic segments and measures organs in scans. For example, in CT
              Abdomen scans, Bionic segments key organs and provides
              radiologists with precise measurements, reducing analysis time.
            </p>
          </div>
          <div className="md:h-[25vh] bg-[#F3F7FF] md:w-[31vw] rounded-2xl flex flex-col justify-around items-center py-2 px-[20px] mb-[20px] md:mb-0 md:ml-2">
            <h1 className="text-[#000] font-bold text-[14px] md:text-[24px]">
              Measure
            </h1>
            <p className="text-[#000] text-[12px] md:text-[20px] text-center">
              Bionic quantifies clinical parameters, such as the 28 intersection
              angles used in Chiropractic treatment, enhancing diagnostic
              precision in niche fields.
            </p>
          </div>
        </motion.div>
        <motion.div className="md:block hidden" variants={middleImageVariants}>
          <div
            className="bg-cover bg-center h-[55vh] w-[35vw] flex flex-col justify-center items-center"
            style={{
              backgroundImage: `url(${bionicLogoImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h1 className="text-[50px] font-bold text-red-500">Bionic</h1>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col justify-between items-center h-[100%]"
          variants={rightContainerVariants}
        >
          <div className="md:h-[30vh] bg-[#F3F7FF] md:w-[31vw] rounded-2xl flex flex-col justify-around items-center py-2 px-[20px] mb-[20px] md:mb-0 md:mr-4">
            <h1 className="text-[#000] font-bold text-[14px] md:text-[24px]">
              Detect
            </h1>
            <p className="text-[#000] text-[12px] md:text-[20px] text-center">
              Bionic autonomously detects pathologies, like brain hemorrhages,
              generating preliminary reports for critical cases. This feature
              supports fast, accurate responses in urgent care settings.
            </p>
          </div>
          <div className="md:h-[25vh] bg-[#F3F7FF] md:w-[31vw] rounded-2xl flex flex-col justify-around items-center py-2 px-[20px] md:mr-4">
            <h1 className="text-[#000] font-bold text-[14px] md:text-[24px]">
              Analyze
            </h1>
            <p className="text-[#000] text-[12px] md:text-[20px] text-center">
              Bionic’s AI-driven analysis replaces traditional DEXA scans for
              osteoporosis detection by analyzing knee X-rays, already used
              across geriatric and orthopedic hospitals in Bangalore.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WorkflowSection;
