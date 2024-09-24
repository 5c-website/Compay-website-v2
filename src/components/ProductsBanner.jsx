import React from "react";
import { motion } from "framer-motion";

const ProductsBanner = ({ img, heading, buttonText, linkToRedirect }) => {
  return (
    <motion.div
      className="min-h-[26vh] md:h-[45vh] w-[100%] bg-cover bg-center rounded-xl flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${img})`,
      }}
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="h-[200px] md:w-[41%] p-3 md:p-0 mt-4 md:mt-0 flex flex-col justify-center items-center">
        <motion.h1
          className="text-[#fff] text-[24px] md:text-[44px] font-bold"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 10 }}
          transition={{ duration: 0.8 }}
        >
          {heading}
        </motion.h1>
        <motion.button
          className="text-14px md:text-[20px] mt-2 bg-[#fff] text-[#000] rounded-2xl px-2 py-2 md:px-4 md:py-2 font-bold"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 10 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onClick={() => (window.location.href = `${linkToRedirect}`)}
        >
          {buttonText}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductsBanner;
