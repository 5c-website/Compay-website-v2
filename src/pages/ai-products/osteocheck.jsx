import React from "react";
import Navbar from "../../components/Navbar";
import osImg from "../../../public/img/os_check/os_check_top.png";
import ProductsBanner from "../../components/ProductsBanner";
import { motion } from "framer-motion";
import boneImg from "../../../public/img/os_check/os_bone_check.png";
import Footer from "../../components/Footer";
import BoneMarquee from "../../components/BoneMarquee";
import logoOne from "../../../public/img/os_check/os_sym_one.png";
import logoTwo from "../../../public/img/os_check/os_sym_two.png";
import logoThree from "../../../public/img/os_check/os_sym_three.png";
import logoFour from "../../../public/img/os_check/os_sym_four.png";
import fooLogoOne from "../../../public/img/os_check/os_foo_one.png";
import fooLogoTwo from "../../../public/img/os_check/os_foo_two.png";
import fooLogoThree from "../../../public/img/os_check/os_foo_thre.png";
import fooLogoFour from "../../../public/img/os_check/os_foo_four.png";
import { navigate } from "gatsby";

function osteocheck() {
  return (
    <>
      <div>
        <header>
          <Navbar />
        </header>
      </div>
      <div className="w-[100%] flex flex-col justify-center items-center pt-[90px]">
        <div className="w-[100%] px-4 md:px-10">
          <ProductsBanner
            img={osImg}
            heading={"OsteoCheck"}
            buttonText={"Book a Demo"}
            linkToRedirect={"/contact-us"}
          />
        </div>
        <div className="bg-[#F3F7FF] min-h-[25vh] md:h-[40vh] flex flex-col justify-center items-center md:my-[40px] my-[30px] px-[24px] md:px-[60px] gap-4">
          <motion.h1
            className="text-[#000] font-bold text-[16px] md:text-[32px] text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Bone Health in the Indian Market
          </motion.h1>
          <motion.p
            className="text-[#000] text-[12px] md:text-[20px] text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Impact of Bone Degeneration on Indian Market: With nearly half of
            adults aged 45+ affected by osteopenia and 18.3% grappling with
            osteoporosis, there's a vast market for interventions facilitating
            an active lifestyle and fracture prevention. With 62 million adults
            in need of advanced treatments, the bone condition treatment sector
            in India offers significant growth opportunities.
          </motion.p>
        </div>

        <div className="min-h-[40vh] flex flex-col justify-start items-center ">
          <h1 className="text-[#1B3463] font-bold text-[16px] md:text-[32px] pl-6 pr-6 text-center">
            Individuals who qualify for a Bone Check{" "}
          </h1>
          <div className="h-auto w-[90vw] md:h-auto md:w-[60vw]  my-[20px]">
            <img src={boneImg} className="h-full w-full" alt="img" />
          </div>
        </div>
        <div className="min-h-[50vh] flex flex-col justify-start items-center my-[0px] md:my-[40px]">
          <h1 className="text-[#1B3463] font-bold text-[16px] md:text-[32px] text-center pl-6 pr-6">
            What are some of the eventualities of bone degeneration?
          </h1>
          <div className="w-[100vw] min-h-[400px]">
            <BoneMarquee />
          </div>
        </div>

        <div className="md:h-[18vh] flex flex-col justify-start items-center px-[20px] pb-[20px] md:pb-[0px] md:px-[40px]">
          <p className="text-[#000000] text-[12px] md:text-[20px] text-center">
            By incorporating our solution into your diagnostic center, you not
            only enhance the range of services offered but also contribute to
            reducing the overall societal burden posed by osteoarthritis.
            Together, let's empower individuals to lead a healthier, more active
            life.
          </p>
        </div>
        <div className="bg-[#F3F7FF] md:h-[60vh] flex flex-col justify-start items-center my-[10px] md:my-[40px] md:py-[40px] w-[100%]">
          <h1 className="text-[#1B3463] font-bold text-center text-[16px] md:text-[32px] py-[10px]">
            {" "}
            Benefits of OsteoCheck{" "}
          </h1>
          <div className="text-center flex flex-col md:flex-row justify-center items-center h-[100%] gap-8 w-[90%] my-[20px]">
            <div className="md:w-[22%] w-[90%] md:h-[100%] h-[200px] rounded-2xl shadow-lg bg-white flex flex-col justify-around items-center py-2">
              <img
                src={logoOne}
                className="md:h-[100px] md:w-[100px] h-[60px] w-[60px]"
                alt="img"
              />
              <p className="text-[12px] md:text-[20px] text-[#5E6282] px-4 md:px-8">
                {" "}
                With OsteoCheck, uncover bone degeneration in its early stages,
                facilitating swift and efficient treatment.{" "}
              </p>
            </div>
            <div className="md:w-[22%] w-[90%] md:h-[100%]  h-[200px] rounded-2xl shadow-lg bg-white flex flex-col justify-around items-center py-2">
              <img
                src={logoTwo}
                className="md:h-[100px] md:w-[100px] h-[60px] w-[60px]"
                alt="img"
              />
              <p className="text-[12px] md:text-[20px] text-[#5E6282] px-4 md:px-8">
                {" "}
                By detecting bone degeneration promptly, OsteoCheck is
                instrumental in averting severe complications and preserving
                lives.{" "}
              </p>
            </div>
            <div className="md:w-[22%] w-[90%] md:h-[100%]  h-[200px] rounded-2xl shadow-lg bg-white flex flex-col justify-around items-center py-2">
              <img
                src={logoThree}
                className="md:h-[100px] md:w-[100px] h-[60px] w-[60px]"
                alt="img"
              />
              <p className="text-[12px] md:text-[20px] text-[#5E6282] px-4 md:px-8">
                {" "}
                Facilitates timely detection of bone degeneration, essential for
                initiating timely interventions and halting disease advancement{" "}
              </p>
            </div>
            <div className="md:w-[22%] w-[90%] md:h-[100%]  h-[200px] rounded-2xl shadow-lg bg-white flex flex-col justify-around items-center py-2">
              <img
                src={logoFour}
                className="md:h-[100px] md:w-[100px] h-[60px] w-[60px]"
                alt="img"
              />
              <p className="text-[12px] md:text-[20px] text-[#5E6282] px-4 md:px-8">
                {" "}
                Reports offer patients tailored, actionable guidance specific to
                their condition, gender, and age, empowering informed decision-
                making.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="md:min-h-[60vh] flex flex-col justify-start items-center my-[10px] md:my-[40px] md:py-[40px] w-[100%]">
          <p
            className="font-bold text-[16px] md:text-[32px] text-center bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(180deg, #EA4335, #CC0000)",
            }}
          >
            {" "}
            Why Choose OsteoCheck?{" "}
          </p>
          <div className="text-center flex flex-col md:flex-row flex-wrap justify-around gap-8 items-center h-[100%] w-[100%] my-[20px] pl-4">
            <div className="md:w-[42%] flex flex-row justify-center items-center gap-2 md:pl-2 md:gap-8 md:h-[30vh]">
              <img
                src={fooLogoOne}
                className="md:h-[200px] md:w-[200px] h-[100px] w-[120px]"
                alt="img"
              />
              <div className="flex flex-col justify-center gap-2 md:gap-8 items-start h-[100%] px-[10px] md:px-[0px]">
                <h1 className="text-[14px] md:text-[24px] text-[#000] font-bold text-left">
                  {" "}
                  Developed on Robust Data{" "}
                </h1>
                <p className="text-[#000000] text-[12px] md:text-[20px] text-left">
                  {" "}
                  Developed through a collaboration between a radiologist and 5C
                  Network, OsteoCheck has undergone training on a dataset
                  comprising approximately 1.3 million scans.{" "}
                </p>
              </div>
            </div>
            <div className="md:w-[42%] flex flex-row justify-center items-center gap-2 md:gap-8 md:h-[30vh]">
              <img
                src={fooLogoTwo}
                className="md:h-[200px] md:w-[200px] h-[100px] w-[120px]"
                alt="img"
              />
              <div className="flex flex-col justify-center gap-2 md:gap-8 items-start h-[100%] px-[10px] md:px-[0px]">
                <h1 className="text-[14px] md:text-[24px] text-[#000] font-bold text-left">
                  {" "}
                  Clinical Evaluations By OsteoCheck{" "}
                </h1>
                <p className="text-[#000000] text-[12px] md:text-[20px] text-left">
                  {" "}
                  It evaluates various clinical parameters, including reduction
                  in joint space, presence of osteophytes, sclerosis, tibial
                  spikes, bone alignment, and post-operative conditions.{" "}
                </p>
              </div>
            </div>
            <div className="md:w-[42%] flex flex-row justify-center items-center gap-2 md:gap-8 md:h-[30vh]">
              <img
                src={fooLogoThree}
                className="md:h-[200px] md:w-[200px] h-[100px] w-[120px]"
                alt="img"
              />
              <div className="flex flex-col justify-center gap-2 md:gap-8 items-start h-[100%] px-[10px] md:px-[0px]">
                <h1 className="text-[14px] md:text-[24px] text-[#000] font-bold text-left">
                  {" "}
                  Continuous Enhancement{" "}
                </h1>
                <p className="text-[#000000] text-[12px] md:text-[20px] text-left">
                  {" "}
                  OsteoCheck continually updates with Al advancements and user
                  feedback, improving diagnostics and user experience. Real-time
                  monitoring ensures reliable support for healthcare providers.{" "}
                </p>
              </div>
            </div>
            <div className="md:w-[42%] flex flex-row justify-center items-center gap-2 md:gap-8 md:h-[30vh]">
              <img
                src={fooLogoFour}
                className="md:h-[200px] md:w-[200px] h-[100px] w-[120px]"
                alt="img"
              />
              <div className="flex flex-col justify-center gap-2 md:gap-8 items-start h-[100%] px-[10px] md:px-[0px]">
                <h1 className="text-[14px] md:text-[24px] text-[#000] font-bold text-left">
                  {" "}
                  Advanced Diagnosis and Grading System for Bone Degeneration{" "}
                </h1>
                <p className="text-[#000000] text-[12px] md:text-[20px] text-left">
                  {" "}
                  OsteoCheck is a diagnostic system that evaluates bone
                  degeneration, categorizing severity into grades ranging from 1
                  to 4.{" "}
                </p>
              </div>
            </div>
          </div>
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

export default osteocheck;
