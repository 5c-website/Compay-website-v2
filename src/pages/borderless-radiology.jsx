import React from "react";
import Navbar from "../components/Navbar";
import borderBanner from "../../public/img/borderless_radiology.png";
import borderless2 from "../../public/img/borderless2.png";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import "../styles/global.css";

function BorderlessRadiology() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="w-[100%] flex flex-col justify-center items-center pt-[90px]">
        <motion.div
          className="h-[30vh] md:h-[36vh] w-[100%]"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="w-[94%] mx-auto h-[100%] bg-cover bg-center rounded-xl flex flex-col justify-center items-center"
            style={{
              backgroundImage: `url(${borderBanner})`,
            }}
          >
            <h1 className=" text-[24px] md:text-[44px] text-[#fff] text-center font-bold">
              Join our Radiologist Team
            </h1>
            <button
              className="text-[#000] bg-white px-4 py-2 rounded-full font-bold cursor-pointer"
              onClick={() =>
                (window.location.href = "https://borderlessradiology.com/")
              }
            >
              Join Now
            </button>
          </div>
        </motion.div>
        <motion.div
          className="w-[100%] flex flex-row justify-center items-center mt-10 text-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA4335] to-[#CC0000] text-[24px] md:text-[32px] font-bold text-center pl-2 pr-2">
            Partnering Benefits with 5C Network
          </h1>
        </motion.div>
        <div className="md:min-h-[36vh] w-[100%]">
          <div className="w-[94%] mx-auto h-[100%] my-[10px] md:mt-[40px]">
            <div className="w-full flex flex-col md:flex-row justify-between items-center p-6 bg-white">
              <motion.div
                className="w-full md:w-[60%] flex flex-col space-y-6 relative before:content-[''] before:absolute before:left-[5px] before:top-0 before:bottom-0 before:w-[2px] before:bg-black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <div className="flex flex-row items-start space-x-2 relative">
                  <div className="w-[36px] h-[12px] md:w-3.5 md:h-3 bg-[#1B3363] rounded-full"></div>
                  <p className="text-gray-700 text-lg">
                    Our AI algorithms assist radiologists by flagging anomalies
                    and abnormalities, ensuring no detail goes unnoticed.
                  </p>
                </div>
                <div className="flex flex-row items-start space-x-2">
                  <div className="w-[36px] h-[12px] md:w-3.5 md:h-3 bg-[#1B3363] rounded-full mt-2"></div>
                  <p className="text-gray-700 text-lg">
                    Assisted by AI, radiologists experience a substantial
                    reduction in case reporting time, leading to faster patient
                    care.
                  </p>
                </div>
                <div className="flex flex-row items-start space-x-2">
                  <div className="w-[36px] h-[12px] ml-[1px] md:w-[18px] md:h-3 bg-[#1B3363] rounded-full mt-2"></div>
                  <p className="text-gray-700 text-lg">
                    Harmonious blend of human intellect and AI provides multiple
                    checks, making oversights a thing of the past and
                    skyrocketing diagnostic precision.
                  </p>
                </div>
                <div className="flex flex-row items-start space-x-2">
                  <div className="w-[36px] h-[12px] md:w-3.5 md:h-3 bg-[#1B3363] rounded-full mt-2"></div>
                  <p className="text-gray-700 text-lg">
                    Our AI is not stagnant—it learns. Each scan and report
                    refines its capabilities, continually enhancing its
                    assistance.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="w-full md:w-[35%] mt-8 md:mt-0"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <img
                  src={borderless2}
                  alt="AI assisting radiology"
                  className="rounded-xl w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="my-10 md:my-[20]">
          <button
            className="bg-[#1B3363] text-[#fff] text-[18px] md:text-[24px] md:px-4 md:py-2 px-3 py-2 rounded-2xl shadow-xl cursor-pointer"
            onClick={() => window.open("https://borderlessradiology.com/","_blank")}
          >
            Connect with us
          </button>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default BorderlessRadiology;
