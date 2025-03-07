import React from "react";
import { motion } from "framer-motion";

const CompanyBanner = ({
  img,
  heading,
  description,
  containerClassName,
  contentClassName,
  headerClassName,
  descriptionClassName,
}) => {
  return (
    <div
      className={`min-h-[26vh] md:h-[45vh] w-[100%] bg-cover bg-center rounded-xl flex flex-col justify-center ${containerClassName}`}
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div
        className={`h-[200px] md:w-[41%] md:ml-[80px] p-3 md:p-0 mt-4 md:mt-0 ${contentClassName}`}
      >
        <motion.h1
          className={`text-[#fff] text-[20px] md:text-[32px] font-bold ${headerClassName} `}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {heading}
        </motion.h1>
        <motion.p
          className={`text-[#fff] text-12px md:text-[24px] mt-2 ${descriptionClassName}`}
          // ${isMobile ? "text-center w-full" : ""}`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
};

export default CompanyBanner;
