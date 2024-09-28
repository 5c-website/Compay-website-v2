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
      className="bg-white rounded-2xl shadow-lg flex flex-col justify-between p-4 sm:p-6 gap-4 border-2 h-full"
    >
      <div>
        <p className="text-[#1B3363] text-lg sm:text-xl font-medium mb-2">
          {title}
        </p>
        <p className="text-[#0070C0] text-base sm:text-lg font-medium">
          {location}
        </p>
      </div>
      <button
        onClick={onApply}
        className="px-3 py-1 text-sm border-black border-solid border-2 rounded-full mt-2 transition-colors duration-300 hover:bg-black hover:text-white self-start"
      >
        Apply Now
      </button>
    </motion.div>
  );
};

export default JobCard;
