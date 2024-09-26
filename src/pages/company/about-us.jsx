import React from "react";
import Navbar from "../../components/Navbar";
import topBanner from "../../../public/img/about_us/top_bg.png";
import Footer from "../../components/Footer";
import AboutMarquee from "../../components/AboutMarquee";
import profileOne from "../../../public/img/about_us/pro_one.png";
import profileTwo from "../../../public/img/about_us/pro_two.png";
import profileThree from "../../../public/img/about_us/pro_three.png";
import profileFour from "../../../public/img/about_us/pro_four.png";
import profileFive from "../../../public/img/about_us/pro_five.png";
import profileSix from "../../../public/img/about_us/pro_six.png";
import investorOne from "../../../public/img/about_us/investor_one.png";
import investorTwo from "../../../public/img/about_us/investor_two.png";
import investorThree from "../../../public/img/about_us/investor_three.png";
import investorFour from "../../../public/img/about_us/investor_four.png";
import linkedinLogo from "../../../public/img/about_us/linkedin.png";
import { motion } from "framer-motion";

function aboutUs() {
  const teamMembers = [
    {
      img: profileOne,
      name: "Kalyan Sivasilam",
      role: "Founder & CEO",
      linkedin: "https://www.linkedin.com/in/kalyansivasailam/",
      info: "Kalyan has a B.Tech in Computer Science from the National Institute of Technology, Surathkal, and a post-graduate diploma in Intellectual Property Rights Law from the National Law School of India University, Bangalore. Recognized as one of Forbes 30 Under 30, Kalyan has been instrumental in driving 5C Network's mission to revolutionize radiology with AI.",
    },
    {
      img: profileTwo,
      name: "Syed Ahmed",
      role: "Co-Founder & Director",
      linkedin: "https://www.linkedin.com/in/syed-s-ahmed-06553114/",
      info: "Syed is an alumnus of the Indian Institute of Science, Bangalore, with over 30 years of experience in managing business operations across various industries. His strategic insight has been vital in scaling 5C Network’s impact across India.",
    },
    {
      img: profileThree,
      name: "Anand Iyer",
      role: "Chief Operational Officer",
      linkedin: "https://www.linkedin.com/in/anandriyer/",
      info: "Anand holds a management degree from the Indian Institute of Management (IIM), Bangalore, and brings over 30 years of experience in sales, marketing, and operations management. His leadership ensures operational efficiency across 5C Network’s AI solutions.",
    },
    {
      img: profileFour,
      name: "Bargava Subramanian",
      role: "Chief AI Officer",
      linkedin: "https://www.linkedin.com/in/bargava/",
      info: "Bargava has a postgraduate degree from the University of Maryland and over 20 years of experience in data science and AI. His expertise drives the development of 5C Network’s AI models, ensuring that Bionic delivers world-class diagnostic performance.",
    },
    {
      img: profileFive,
      name: "Kirthiraj Yuvaraj",
      role: "Chief Technology Officer",
      linkedin: "https://www.linkedin.com/in/kirthiraj/",
      info: "Kirthiraj holds a degree in Computer Engineering and brings over 11 years of experience in product development and technology management. He has worked in various startups, building products from the ground up and specializing in technical architecture. ",
    },
    {
      img: profileSix,
      name: "Prathusha Mannar",
      role: "Head - Human Resources",
      linkedin: "https://www.linkedin.com/in/prathyusha-mannar-462a147/",
      info: "Prathyusha Mannar, with an MBA in HR and 15 years of experience, excels in talent management, employee relations, and HR strategy. She ensures HR functions align with business goals while fostering a positive work environment, contributing to 5C Network's growth and success in delivering cutting-edge healthcare solutions.",
    },
  ];

  const isMobileDevice = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth <= 768;
    }
    return false;
  };

  return (
    <>
      <div>
        <header>
          <Navbar />
        </header>
      </div>
      <div className="w-[100%] flex flex-col justify-center items-center pt-[90px]">
        <div className="w-[100%] px-3 md:px-10">
          <div
            className="w-[100%] rounded-2xl overflow-hidden"
            style={{
              backgroundImage: `url(${topBanner})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col items-center md:items-start px-4 py-8 md:pl-20 md:pt-10">
              <motion.h1
                className="text-[#fff] text-[20px] md:text-[32px] font-bold mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                About Us
              </motion.h1>

              {!isMobileDevice() && (
                <>
                  <motion.p
                    className="text-[#fff] text-[18px] w-[80vw] md:w-[50vw] py-2 md:py-2"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    5C Network is at the forefront of multimodal AI technology
                    applied to medical imaging. Our core product, the Bionic
                    suite, is designed to transform radiology reporting by
                    seamlessly integrating Computer Vision (CV) and LLM
                    technologies. Bionic not only reads, detects, and analyzes
                    medical scans but also writes comprehensive medical notes,
                    providing actionable insights that support clinicians in
                    decision-making.
                  </motion.p>
                  <motion.p
                    className="text-[#fff] text-[18px] w-[80vw] md:w-[50vw] py-2 md:py-2"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    Our product is actively used in clinical practice, with
                    regulatory approval for a wide variety of use cases across
                    India's largest hospital groups and several marquee
                    hospitals. With proprietary access to one of the world's
                    largest medical imaging datasets, we control the entire
                    end-to-end AI pipeline—from data collection to model
                    deployment—ensuring highly accurate, effective diagnostic
                    solutions that drive improvements in clinical outcomes.
                  </motion.p>
                </>
              )}
              {isMobileDevice() && (
                <>
                  <motion.p
                    className="text-[#fff] text-[12px] md:text-[16px] w-[80vw] md:w-[50vw] py-2 md:py-2 text-center md:text-left"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    5C Network is a medical AI company, specializing in remote
                    Radiology reporting and advanced AI-powered diagnostic
                    tools. We aim to revolutionize healthcare by harnessing the
                    power of AI and deep learning to provide precise and
                    personalized diagnoses.
                  </motion.p>
                  <motion.p
                    className="text-[#fff] text-[12px] md:text-[16px] w-[80vw] md:w-[50vw] py-2 md:py-2 text-center md:text-left"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    Our team at 5C Network brings together a diverse range of
                    expertise and a deep passion for reshaping the healthcare
                    landscape. We have a track record of pushing the boundaries
                    of healthcare technology, from developing groundbreaking AI
                    models to collaborating with healthcare institutions
                    worldwide.
                  </motion.p>
                  <motion.p
                    className="text-[#fff] text-[12px] md:text-[16px] w-[80vw] md:w-[50vw] py-2 md:py-2 text-center md:text-left"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    5C Network taps into the unmatched potential of various AI
                    models, meticulously crafted to provide radiology reports
                    that set new benchmarks in accuracy. Beyond mere reporting,
                    our platform amplifies the innate capabilities of
                    radiologists, making them more efficient and precise,
                    ensuring they are always ahead of the curve.
                  </motion.p>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="my-[20px] md:h-[200px] w-[100%]">
          <div className="flex flex-row justify-start items-center pl-6 md:pl-10">
            <h1 className="text-[#1B3363] text-[24px] md:text-[44px] font-bold">
              {" "}
              Clients{" "}
            </h1>
            <div className="h-[8px] w-[8px] bg-red-500 relative top-3 left-2 md:block hidden"></div>
          </div>
          <div className="my-[10px] bg-[#F3F7FF] py-[10px] md:py-[20px]">
            <AboutMarquee />
          </div>
        </div>

        <div className="w-full">
          <div className="flex flex-row md:justify-start justify-center items-center pl-6 md:pl-10">
            <h1 className="text-[#1B3363] text-[24px] md:text-[44px] md:text-left font-bold">
              Our Executive Team
            </h1>
            <div className="h-[8px] w-[8px] bg-red-500 relative top-3 left-2 md:block hidden"></div>
          </div>

          <div className="min-h-[60vh] px-3 md:px-10 flex flex-wrap justify-center md:justify-between items-start gap-8 my-[10px] md:my-[20px]">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col justify-around items-center rounded-2xl overflow-hidden group bg-[#F3F7FF] 
                   h-[300px] md:h-[380px] flex-1 min-w-[250px] max-w-[300px] md:min-w-[380px] md:max-w-[400px] mx-auto"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Team member image */}
                <img
                  src={member.img}
                  className="h-[160px] w-[160px] md:h-[200px] md:w-[200px] object-cover"
                  alt={member.name}
                />

                {/* Team member name and role */}
                <div className="text-center">
                  <h1 className="text-[#000] text-[22px] md:text-[28px] font-bold">
                    {member.name}
                  </h1>
                  <div className="flex flex-row justify-center md:justify-start items-center gap-4">
                    <p className="text-[#1B3363] text-[18px] md:text-[22px]">
                      {member.role}
                    </p>
                    <a href="https://linkedin.com/in/">
                      <img
                        src={linkedinLogo}
                        className="h-[20px] w-[20px]"
                        alt="LinkedIn"
                      />
                    </a>
                  </div>
                </div>

                {/* Hover effect for additional info */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                  <div className="text-white text-center w-[80%] md:w-[65%] mx-auto">
                    <p className="text-[14px] md:text-[16px]">{member.info}</p>
                  </div>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-2 right-2"
                  >
                    <img
                      src={linkedinLogo}
                      className="h-[20px] w-[20px]"
                      alt="LinkedIn"
                    />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* <div className="w-[100%]">
          <div className="flex flex-row justify-start items-center pl-6 md:pl-10">
            <h1 className="text-[#1B3363] text-[24px] md:text-[44px] font-bold">
              Our Executive Team
            </h1>
            <div className="h-[8px] w-[8px] bg-red-500 relative top-3 left-2 md:block hidden"></div>
          </div>
          <div className="min-h-[60vh] px-3 md:px-10 flex flex-col md:flex-row justify-between items-start flex-wrap gap-8 my-[10px] md:my-[20px]">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="relative h-[300px] md:h-[380px] mx-auto w-[90%] md:w-[26%] flex flex-col justify-around items-center rounded-2xl overflow-hidden group bg-[#F3F7FF]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img
                  src={member.img}
                  className="h-[160px] w-[160px] md:h-[200px] md:w-[200px] object-cover"
                  alt={member.name}
                />
                <div>
                  <h1 className="text-[#000] text-[22px] md:text-[28px] font-bold">
                    {member.name}
                  </h1>
                  <div className="flex flex-row justify-start items-center gap-6">
                    <p className="text-[#1B3363] text-[20px] md:text-[22px]">
                      {member.role}
                    </p>
                    <a href="https://linkedin.com/in/">
                      <img
                        src={linkedinLogo}
                        className="h-[20px] w-[20px]"
                        alt="linkedin logo"
                      />
                    </a>
                  </div>
                </div>

                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                  <div className="text-white text-center w-[80%] md:w-[65%] mx-auto">
                    <p className="text-[14px] md:text-[16px]">
                      {member.info}
                    </p>
                  </div>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-2 right-2"
                  >
                    <img
                      src={linkedinLogo}
                      className="h-[20px] w-[20px]"
                      alt="LinkedIn logo"
                    />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
         */}
        <div className="my-[20px] md:h-[200px] w-[100%]">
          <div className="flex flex-row justify-start items-center pl-6 md:pl-10">
            <h1 className="text-[#1B3363] text-[24px] md:text-[44px] font-bold">
              {" "}
              Investors{" "}
            </h1>
            <div className="h-[8px] w-[8px] bg-red-500 relative top-3 left-2 md:block hidden"></div>
          </div>
          <div className="my-[10px] bg-[#F3F7FF] py-[10px] px-[20px] md:px-[60px] md:py-[20px]">
            <div className="flex flex-row justify-between items-center">
              <div>
                <img
                  src={investorOne}
                  className="h-[30px] w-[70px] md:h-[70px] md:w-[200px]"
                  alt="img"
                />
              </div>
              <div>
                <img
                  src={investorTwo}
                  className="h-[30px] w-[70px] md:h-[70px] md:w-[200px]"
                  alt="img"
                />
              </div>
              <div>
                <img
                  src={investorThree}
                  className="h-[30px] w-[70px] md:h-[70px] md:w-[200px]"
                  alt="img"
                />
              </div>
              <div>
                <img
                  src={investorFour}
                  className="h-[30px] w-[70px] md:h-[70px] md:w-[200px]"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default aboutUs;
