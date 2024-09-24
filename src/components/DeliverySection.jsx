import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const DeliverySection = () => {
  const cities = ["Varanasi", "Patiala", "Coimbatore", "Patna", "Gulbarga", "Bhopal", "Agartala"];
  const [reportNumber, setReportNumber] = useState(47); 
  const [currentCity, setCurrentCity] = useState(cities[0]); 
  const [index, setIndex] = useState(0); 

  const generateRandomNumber = () => Math.floor(Math.random() * (60 - 25 + 1)) + 25;

  useEffect(() => {
    const interval = setInterval(() => {
      setReportNumber(generateRandomNumber());
      setIndex((prevIndex) => (prevIndex + 1) % cities.length); 
      setCurrentCity(cities[(index + 1) % cities.length]); 
    }, 2500); 

    return () => clearInterval(interval); 
  }, [index]); 

  return (
    <section className="md:h-[28vh] bg-[#1B3363] flex flex-row justify-center items-center my-4">
      <p
        className="text-[#fff] text-[14px] md:text-[32px] lg:text-[44px] font-normal text-center px-4 md:px-8 py-5 md:py-0"
        style={{ wordSpacing: "0.1em", letterSpacing: "0.01em" }}
      >
        By the time you have scrolled through here, <br /> we have delivered

        <motion.span
          className="text-[#EA4335]"
          key={reportNumber}
          initial={{ opacity: 0, scale: 0.5 }} 
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }} 
          transition={{ duration: 0.5 }} 
        >
          &nbsp;<span className="font-bold text-shadow">{reportNumber}</span>
        </motion.span>{" "}
         reports in{" "}
        <motion.span
          className="text-[#EA4335]"
          key={currentCity}
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: 20 }} 
          transition={{ duration: 0.5 }} 
        >
          <span className="font-bold text-shadow">{currentCity}.</span>
        </motion.span>
      </p>
    </section>
  );
};

export default DeliverySection;
