import React from "react";
import Navbar from "../../components/Navbar";
import bionicImg from "../../../public/img/bionic-report/top_bg.png";
import ProductsBanner from "../../components/ProductsBanner";
import bionicLogoImg from "../../../public/img/bionic-report/bionic.png";
import CardOneImg from "../../../public/img/bionic-report/b_one.png";
import CardTwoImg from "../../../public/img/bionic-report/b_two.png";
import CardThreeImg from "../../../public/img/bionic-report/b_three.png";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import WorkflowSection from "../../components/WorkflowSection";
import { navigate } from "gatsby";

function BionicReport() {
  const { ref: card1Ref, inView: card1InView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: card2Ref, inView: card2InView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: card3Ref, inView: card3InView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const cardAnimation = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  return (
    <>
      <div>
        <header>
          <Navbar />
        </header>
      </div>
      <div className="w-[100%] flex flex-col justify-center items-center pt-[90px] ">
        <div className="w-[100%] px-4 md:px-10 border-2 border-yellow">
          <ProductsBanner
            img={bionicImg}
            heading={"Bionic Suite"}
            buttonText={"Book a Demo"}
            linkToRedirect={"/contact-us"}
          />
        </div>
        <div className="bg-[#F3F7FF] min-h-[25vh] md:h-[40vh] flex flex-col justify-center items-center md:my-[40px] my-[30px] px-[24px] md:px-[60px] py-[10px] gap-4">
          <motion.h1
            className="text-red-500 font-bold text-[16px] md:text-[32px] text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Experience the Future of Radiology with Bionic: AI-Powered Precision
            for Faster, Smarter Diagnoses
          </motion.h1>
          <motion.p
            className="text-[#000] text-[12px] md:text-[20px] text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            At 5C Network, we lead the transformation of medical imaging through
            our innovative multimodal AI technologies. Our flagship product, the
            Bionic Suite, seamlessly integrates Computer Vision and Large
            Language Models to revolutionize radiology reporting.
          </motion.p>
          <motion.p
            className="text-[#000] text-[12px] md:text-[20px] text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            The Bionic Suite is actively deployed across India’s leading
            hospital networks and clinics, helping radiologists achieve faster,
            more accurate diagnoses.
          </motion.p>
        </div>
        <WorkflowSection bionicLogoImg={bionicLogoImg} />

        <div className="w-[100%] px-4 md:px-10 flex flex-col justify-center items-center my-[20px]">
          <h1 className="text-red-500 text-[16px] text-center md:text-[32px] font-bold my-[20px]">
            Core Products of the Bionic Suite
          </h1>
          <div className="md:min-h-[60vh] w-[100%]">
            <motion.div
              className="md:h-[35vh] bg-white rounded-2xl shadow-lg mb-[40px] flex flex-col md:flex-row justify-start items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="md:w-[40%] md:h-[100%]">
                <img src={CardOneImg} className="h-[100%] w-[100%]" alt="img" />
              </div>
              <div className="md:w-[55%] flex flex-col justify-start items-start gap-4 md:pl-[20px] p-4 md:p-0">
                <h1 className="text-[#0070C0] text-[14px] md:text-[24px] font-bold">
                  Bionic Inference Engine
                </h1>
                <p className="text-[#000] text-[12px] md:text-[20px] md:pr-[20px]">
                  The Bionic Inference Engine is our flagship AI tool designed
                  to automate key steps in radiology. From detecting
                  abnormalities to analyzing pathology measurements, this engine
                  provides AI-driven insights that help radiologists make
                  faster, more informed decisions.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="md:h-[35vh] bg-white rounded-2xl shadow-lg mb-[40px] flex flex-col-reverse md:flex-row flex justify-between items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="md:w-[60%] flex flex-col justify-start items-start gap-4 md:pl-[20px] p-4 md:p-0">
                <h1 className="text-[#0070C0] text-[14px] md:text-[24px] font-bold">
                  Bionic Report
                </h1>
                <p className="text-[#000] text-[12px] md:text-[20px] md:pr-[20px]">
                  The Bionic Report streamlines report generation by converting
                  radiologist inputs into structured, standardized medical
                  reports. This AI tool ensures consistency, precision, and
                  adherence to global reporting standards, supporting
                  radiologists in delivering accurate, professional results.
                </p>
              </div>
              <div className="md:w-[30%] md:h-[100%] ">
                <img
                  src={CardTwoImg}
                  className="h-[100%] w-[100%] rounded-t-lg md:rounded-r-lg"
                  alt="img"
                />
              </div>
            </motion.div>
            <motion.div
              className="md:h-[35vh] bg-white rounded-2xl shadow-lg mb-[40px] flex flex-col md:flex-row justify-start items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="md:w-[35%] md:h-[100%]">
                <img
                  src={CardThreeImg}
                  className="h-[100%] w-[100%] rounded-t-lg md:rounded-l-lg"
                  alt="img"
                />
              </div>
              <div className="h-full w-full flex flex-col md:justify-center md:items-center gap-4 md:pl-[20px] p-4 md:p-0">
                <div className="flex flex-col justify-start items-start md:w-10/12 gap-3">
                  <h1 className="text-[#0070C0] text-[14px] md:text-[24px] font-bold">
                    Evo Screen
                  </h1>
                  <p className="text-[#000] text-[12px] md:text-[20px] md:pr-[20px]">
                    Evo Screen is an AI-powered oncology screening platform that
                    helps radiologists deliver comprehensive, proactive
                    full-body MRI reports. Evo Screen detects tumors and other
                    pathologies, empowering patients to take timely, actionable
                    measures for cancer screening and early detection.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="w-[100%] px-4 md:px-10 flex flex-col justify-center items-center my-[20px]">
          <h1 className="text-red-500  text-[16px] text-center md:text-[32px] font-bold my-[20px]">
            How Bionic Aligns with Radiology Reporting Standards?
          </h1>
          <p className="text-[#000] text-[12px] md:text-[20px] md:py-6 text-center px-[10px] md:px-[80px]">
            {" "}
            Bionic is built on a Detection-Analysis-Synthesis (D-A-S) workflow,
            closely mirroring how radiologists interpret medical scans:
          </p>
          <div className="my-2 md:h-[200px] w-[100%] px-6 flex flex-col md:flex-row justify-around items-center mt-10 gap-4 md:py-6">
            <motion.div
              ref={card1Ref}
              className="h-[80%] md:w-[20%] flex flex-col justify-center items-center gap-3 border border-[#000] border-b-[20px] border-b-[#0C5192] md:border-none p-4 rounded-2xl"
              initial="hidden"
              animate={card1InView ? "visible" : "hidden"}
              variants={cardAnimation}
            >
              <div className="px-5 py-2 bg-[#F3F7FF] rounded-full">
                <h1 className="font-bold text-[28px]">D </h1>
              </div>
              <p className="text-[#000] font-bold text-[14px] md:text-[24px]">
                Detection
              </p>
              <p className="text-[#000] text-[12px] md:text-[20px] text-center">
                CV technology identifies pathologies, such as lesions or masses,
                in imaging studies.
              </p>
            </motion.div>

            <motion.div
              ref={card2Ref}
              className="h-[80%] md:w-[20%] flex flex-col justify-center items-center gap-3 border border-[#000] border-b-[20px] border-b-[#0C5192] md:border-none p-4 rounded-2xl"
              initial="hidden"
              animate={card2InView ? "visible" : "hidden"}
              variants={cardAnimation}
            >
              <div className="px-5 py-2 bg-[#F3F7FF] rounded-full">
                <h1 className="font-bold text-[28px]">A </h1>
              </div>
              <p className="text-[#000] font-bold text-[14px] md:text-[24px]">
                Analysis
              </p>
              <p className="text-[#000] text-[12px] md:text-[20px] text-center">
                Bionic measures and evaluates abnormalities to aid in disease
                assessment and treatment planning.
              </p>
            </motion.div>

            <motion.div
              ref={card3Ref}
              className="h-[80%] md:w-[20%] flex flex-col justify-center items-center gap-3 border border-[#000] border-b-[20px] border-b-[#0C5192] md:border-none p-4 rounded-2xl"
              initial="hidden"
              animate={card3InView ? "visible" : "hidden"}
              variants={cardAnimation}
            >
              <div className="px-5 py-2 bg-[#F3F7FF] rounded-full">
                <h1 className="font-bold text-[28px]">S </h1>
              </div>
              <p className="text-[#000] font-bold text-[14px] md:text-[24px]">
                Synthesis
              </p>
              <p className="text-[#000] text-[12px] md:text-[20px] text-center">
                AI-generated reports provide clear, actionable next steps,
                facilitating accurate diagnosis and treatment decisions.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="w-[100%] px-2 md:px-10 flex flex-col justify-center items-center my-[10px] md:my-[30px]">
          <p className="text-[#000000] text-[12px] md:text-[20px] font-normal text-center px-[10px] md:px-[40px]">
            Bionic Suite is more than just a tool—it's a part of your team. It
            works quietly in the background, ensuring that your radiologists'
            skills are used where they matter most—providing top-notch patient
            care.
          </p>
          <h1 className="text-red-500  text-[14px] text-center md:text-[32px] font-bold my-[20px]">
            Join the Future of Radiology with Bionic Suite.
          </h1>
        </div>
        <div className="w-[100%] flex flex-row justify-center items-center mb-[40px]">
          <button
            className="bg-[#1B3363] text-[#fff] px-3 md:px-5 py-2 md:py-3 rounded-xl"
            onClick={() => navigate("/contact-us")}
          >
            Schedule a demo
          </button>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default BionicReport;
