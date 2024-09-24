import React from "react";
import Navbar from "../../components/Navbar";
import LifeBanner from "../../../public/img/lifeat5c/bg_img.png";
import "../../styles/global.css";
import Footer from "../../components/Footer";
import firstImg from "../../../public/img/lifeat5c/one_img.png";
import secondImg from "../../../public/img/lifeat5c/two_img.png";
import threeImg from "../../../public/img/lifeat5c/three_img.png";
import fourImg from "../../../public/img/lifeat5c/four_img.png";
import fiveImg from "../../../public/img/lifeat5c/five_img.png";
import sixImg from "../../../public/img/lifeat5c/six_img.png";
import sevenImg from "../../../public/img/lifeat5c/seven_img.png";
import eightImg from "../../../public/img/lifeat5c/eight_img.png";
import { motion } from "framer-motion";

function lifeAt5C() {
  return (
    <>
      <div>
        <header>
          <Navbar />
        </header>
      </div>
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
              backgroundImage: `url(${LifeBanner})`,
            }}
          >
            <h1 className=" text-[24px] md:text-[44px] text-[#fff] text-center font-bold">
              Join the team changing <br /> healthcare for all
            </h1>
          </div>
        </motion.div>

        <motion.div className="w-[100%] flex flex-row justify-center items-center mt-10"  initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-[#EA4335] to-[#CC0000] text-[24px] md:text-[32px] font-bold"> Life at 5C Network </h1>
        </motion.div>

        <motion.div
          className="md:min-h-[80vh] w-[100%] my-[30px] md:my-[50px]"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-[94%] mx-auto h-[100%]">
            <div className="md:h-[48vh] flex flex-col md:flex-row justify-between items-center md:my-0 my-2 md:gap-0 gap-4">
              <div className="h-[100%] w-[50%] md:w-[18%]">
                <img src={firstImg} className="w-[100%] h-[100%]" alt="img" />
              </div>
              <div className="h-[100%] w-[80%] md:w-[38%]">
                <img src={secondImg} className="w-[100%] h-[100%]" alt="img" />
              </div>
              <div className="h-[100%] w-[80%] md:w-[38%]">
                <img src={threeImg} className="w-[100%] h-[100%]" alt="img" />
              </div>
            </div>
            <div className="md:h-[48vh] flex flex-col md:flex-row justify-between items-center my-6 md:gap-0 gap-4">
              <div className="h-[100%] w-[80%]  md:w-[32%]">
                <img src={fourImg} className="w-[100%] h-[100%]" alt="img" />
              </div>
              <div className="h-[100%] w-[80%]  md:w-[42%]">
                <img src={fiveImg} className="w-[100%] h-[100%]" alt="img" />
              </div>
              <div className="h-[100%] w-[80%] md:w-[20%]">
                <img src={sixImg} className="w-[100%] h-[100%]" alt="img" />
              </div>
            </div>
            <div className="md:h-[54vh] flex flex-col md:flex-row justify-between items-center my-6 md:gap-0 gap-4">
              <div className="h-[100%] w-[80%] md:w-[48%]">
                <img src={sevenImg} className="w-[100%] h-[100%]" alt="img" />
              </div>
              <div className="h-[100%] w-[80%] md:w-[48%]">
                <img src={eightImg} className="w-[100%] h-[100%]" alt="img" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default lifeAt5C;
