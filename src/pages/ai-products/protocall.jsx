import React from "react";
import Navbar from "../../components/Navbar";
import bionicImg from "../../../public/img/ai-products/protocall.png";
import ProductsBanner from "../../components/ProductsBanner";
import protocallLogo from "../../../public/img/ai-products/protocall_logo.png";
import Footer from "../../components/Footer";
import { navigate } from "gatsby";

function protocall() {
  const features = [
    {
      title: "AI-Powered Efficiency:",
      description:
        "ProtoCALL instantly finds the most relevant protocols, saving time and enhancing accuracy in your radiological workflows.",
    },
    {
      title: "Tailored to Your Needs:",
      description:
        "ProtoCALL adapts to different clinical scenarios, offering customized protocol suggestions to suit your specific requirements.",
    },
    {
      title: "User-Friendly Interface:",
      description:
        "Seamlessly integrates into our existing web app, ensuring a smooth and intuitive user experience.",
    },
  ];

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
            img={bionicImg}
            heading={"ProtoCALL"}
            buttonText={"Book a Demo"}
            linkToRedirect={"/contact-us"}
          />
        </div>
        <div className="md:h-[26vh] my-[20px] md:my-[40px]">
          <div className="flex flex-col justify-center items-center px-[20px] md:px-[40px] gap-2 md:gap-4">
            <h1
              className="font-bold text-[16px] md:text-[32px] text-center bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(180deg, #EA4335, #CC0000)",
              }}
            >
              Introducing ProtoCALL - Transform Your Radiology Protocols!
            </h1>
            <div className="text-center flex flex-col justify-center items-center px-[10px] md:px-[40px]">
              <p className="text-[12px] md:text-[20px] text-[#000]">
                At 5C Network, we are dedicated to providing cutting-edge
                solutions that elevate your radiology practice. With our latest
                innovation, ProtoCALL, we are taking radiology protocols to the
                next level.
              </p>
              <p className="text-[12px] md:text-[20px] text-[#000]">
                ProtoCALL is an AI-driven feature integrated into our web and
                mobile platforms, designed to streamline and optimize the
                selection of protocols for various radiology tests. By
                leveraging advanced algorithms, ProtoCALL suggests the most
                suitable protocols, ensuring precision and efficiency in
                radiological assessments.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center md:min-h-[40vh] my-[20px] w-[100%] py-[4px] md:py-[10px] bg-[#F3F7FF]">
          <div className="h-[70%] w-[70%] md:w-[50%] md:h-[100%] flex flex-col justify-center items-center">
            <img
              className="h-[100%] w-[100%] md:h-[60%] md:w-[50%]"
              src={protocallLogo}
              alt="img"
            />
          </div>
          <div className="md:w-[50%] h-[100%] flex flex-col justify-center items-center">
            <div className="w-full max-w-2xl mx-auto px-6 md:p-4">
              <p className="text-[#1B3363] font-bold my-[10px] md:mb-[20px] text-[16px] md:text-[32px] md:text-left text-center">
                {" "}
                Why Choose ProtoCALL?{" "}
              </p>
              <ul className="md:space-y-8">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start my-[10px] md:my-[0px]"
                  >
                    <div className="w-3 h-3 bg-[#1F6299] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h2 className="text-[#000] font-bold text-[14px] md:text-[24px] mb-1">
                        {feature.title}
                      </h2>
                      <p className="text-[#000] text-[12px] md:text-[20px]">
                        {feature.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="md:h-[26vh] mt-[20px]">
          <div className="flex flex-col justify-center items-center px-[20px] md:px-[40px] gap-2 md:gap-4">
            <p className="text-[14px] md:text-[24px] font-semibold text-center text-[#000]">
              We are excited to bring you this innovative tool and look forward
              to seeing how it enhances your daily operations.
            </p>
            <p
              className="font-bold text-[14px] md:text-[24px] text-center bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(180deg, #EA4335, #CC0000)",
              }}
            >
              Introducing ProtoCALL - Transform Your Radiology Protocols!
            </p>
            <div className="w-[100%] flex flex-row justify-center items-center mb-[20px]">
              <button
                className="bg-[#1B3363] text-[#fff] px-3 md:px-5 py-2 md:py-3 rounded-xl"
                onClick={() => navigate("/contact-us")}
              >
                Schedule a demo
              </button>
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

export default protocall;
