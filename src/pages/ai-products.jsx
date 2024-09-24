import React from "react";
import Navbar from "../components/Navbar";
import CompanyBanner from "../components/CompanyBanner";
import bgImg from "../../public/img/ai-products/top_bg.png";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { navigate } from "gatsby";

function aiProducts() {
  return (
    <>
      <div>
        <header>
          <Navbar />
        </header>
      </div>
      <div className="w-[100%] flex flex-col justify-center items-center pt-[90px] px-4 md:px-10">
        <div className="w-[100%]">
          <CompanyBanner
            img={bgImg}
            heading={"Our Products"}
            description={
              "Our platform leverages cutting-edge AI to streamline radiological workflows, ensuring precise and timely diagnoses. Explore our products and see how we make a difference."
            }
          />
        </div>

        <div className="min-h-[70vh] w-[100%] my-[30px] md:my-[40px] gap-2 flex flex-col justify-between items-center gap-4 md:gap-8">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center w-[100%] h-[100%] md:gap-0 gap-3"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div
              className="w-[100%] md:w-[44%] md:h-[28vh] rounded-lg bg-[#F3F7FF] flex flex-col justify-center items-center px-[14px] py-[10px] md:py-[30px] md:px-[30px] shadow-lg cursor-pointer"
              onClick={() => navigate(`/ai-products/bionic-suite`)}
            >
              <h1
                className="font-bold text-[22px] md:text-[50px] text-center bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(180deg, #EA4335, #CC0000)",
                }}
              >
                Bionic Suite
              </h1>
              <p className="text-[#000] text-center text-[14px] md:text-[18px]">
                A solution by 5C Network that harnesses the power of artificial
                intelligence to redefine radiology reporting.
              </p>
            </div>
            <div
              className="w-[100%] md:w-[44%] md:h-[28vh] rounded-lg bg-[#F3F7FF] flex flex-col justify-center items-center px-[14px] py-[10px] md:py-[30px] md:px-[30px] shadow-lg cursor-pointer"
              onClick={() => navigate(`/ai-products/prodigi`)}
            >
              <h1
                className="font-bold text-[22px] md:text-[50px] text-center bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(180deg, #EA4335, #CC0000)",
                }}
              >
                Prodigi
              </h1>
              <p className="text-[#000] text-center text-[14px] md:text-[18px]">
                Prodigi harnesses the power of artificial intelligence to
                enhance reporting capabilities across a diverse range of imaging
                modalities.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center w-[100%] h-[100%] md:gap-0 gap-3"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div
              className="w-[100%] md:w-[44%] md:h-[28vh] rounded-lg bg-[#F3F7FF] flex flex-col justify-center items-center px-[14px] py-[10px] md:py-[30px] md:px-[30px] shadow-lg cursor-pointer"
              onClick={() => navigate(`/ai-products/kronos`)}
            >
              <h1
                className="font-bold text-[22px] md:text-[50px] text-center bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(180deg, #EA4335, #CC0000)",
                }}
              >
                Kronos
              </h1>
              <p className="text-[#000] text-center text-[14px] md:text-[18px]">
                Kronos is a state-of-the-art intelligent assistant for
                neuroradiology powered by 5C Network’s groundbreaking Large
                Language Models.
              </p>
            </div>
            <div
              className="w-[100%] md:w-[44%] md:h-[28vh] rounded-lg bg-[#F3F7FF] flex flex-col justify-center items-center px-[14px] py-[10px] md:py-[30px] md:px-[30px] shadow-lg cursor-pointer"
              onClick={() => navigate(`/ai-products/osteocheck`)}
            >
              <h1
                className="font-bold text-[22px] md:text-[50px] text-center bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(180deg, #EA4335, #CC0000)",
                }}
              >
                OsteoCheck
              </h1>
              <p className="text-[#000] text-center text-[14px] md:text-[18px]">
                OsteoCheck, developed by 5C Network, is India's first
                regulatory-approved AI-powered diagnostic tool for early
                detection and assessment of knee health.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row justify-between items-center w-[100%] h-[100%] md:gap-0 gap-3"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div
              className="w-[100%] md:w-[44%] md:h-[28vh] rounded-lg bg-[#F3F7FF] flex flex-col justify-center items-center px-[14px] py-[10px] md:py-[40px] md:px-[30px] shadow-lg cursor-pointer"
              onClick={() => navigate(`/ai-products/protocall`)}
            >
              <h1
                className="font-bold text-[22px] md:text-[50px] text-center bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(180deg, #EA4335, #CC0000)",
                }}
              >
                ProtoCALL
              </h1>
              <p className="text-[#000] text-center text-[14px] md:text-[18px]">
                ProtoCALL is an AI-driven feature integrated into our web and
                mobile platforms for radiology test protocols.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default aiProducts;
