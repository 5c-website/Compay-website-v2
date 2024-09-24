import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const JobCard = ({ title, location, onApply }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 1.5 }}
      className="w-[100%] md:w-[32%] min-h-[150px] bg-[#fff] rounded-2xl shadow-lg flex flex-col justify-between items-start p-[18px] md:p-6 gap-2"
    >
      <p className="text-[#1B3363] text-[18px] md:text-[20px] font-medium">{title}</p>
      <p className="text-[#0070C0] text-[16px] md:text-[18px] font-medium">{location}</p>
      <button
        onClick={onApply}
        className="px-2 py-1 md:px-4 md:py-2 border-[#000] border-solid border-2 rounded-full md:mt-2"
      >
        Apply Now
      </button>
    </motion.div>
  );
};

export default JobCard;
