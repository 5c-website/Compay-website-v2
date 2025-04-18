import React from "react";
import Navbar from "../../components/Navbar";
import bionicImg from "../../../public/img/ai-products/kronos_top.png";
import ProductsBanner from "../../components/ProductsBanner";
import kronosLogo from "../../../public/img/ai-products/kronos_logo.png";
import Footer from "../../components/Footer";
import { navigate } from "gatsby";

function kronos() {
  const features = [
    {
      title: "Efficiency Redefined:",
      description:
        "Streamline your search for neuroradiology expertise with Kronos’ intuitive interface and extensive database, saving valuable time and resources.",
    },
    {
      title: "Reliability at Your Fingertips: ",
      description:
        "Trust in Kronos’ ability to deliver up-to-date, evidence-based information, empowering you to make informed decisions confidently.",
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
            heading={"Kronos"}
            buttonText={"Book a Demo"}
            linkToRedirect={"/contact-us"}
          />
        </div>
        <div className="min-h-[20vh] md:h-[20vh] md:mt-[40px] my-[20px] md:my-0">
          <div className="flex flex-col justify-center items-center px-[20px] md:px-[40px] gap-2 md:gap-4">
            <h1
              className="font-bold text-[16px] md:text-[32px] text-center bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(180deg, #EA4335, #CC0000)",
              }}
            >
              Discover Kronos: Your Intelligent Neuroradiology Assistant
            </h1>
            <div className="text-center flex flex-col justify-center items-center px-[10px] md:px-[40px]">
              <p className="text-[12px] md:text-[20px] text-[#000]">
                Kronos stands at the forefront of medical innovation as a
                state-of-the-art intelligent assistant meticulously crafted for
                neuroradiology. Powered by 5C Network’s groundbreaking Large
                Language Models, Kronos redefines how professionals access
                critical neuroradiology insights.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#F3F7FF] w-full py-8 sm:py-10 md:py-12 flex flex-col justify-start items-center my-4 sm:my-6 md:my-10">
          <div className="text-center flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap justify-center items-stretch gap-6 sm:gap-4 md:gap-6 lg:gap-8 w-full max-w-[90%]">
            {/* Card 1 */}
            <div className="mx-auto w-[90%] sm:w-[45%] md:w-[30%] rounded-2xl shadow-lg bg-white flex flex-col justify-between items-center py-4 px-3">
              <h1 className="text-[#1B3363] text-base sm:text-lg md:text-xl lg:text-2xl text-center font-extrabold py-3">
                Swift Access to Precise Insights
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-[#5E6282] px-2 sm:px-3 md:px-4 text-center">
                Kronos offers rapid and reliable access to precise
                neuroradiology insights, enabling informed decision-making
                within seconds.
              </p>
            </div>

            {/* Card 2 */}
            <div className="mx-auto w-[90%] sm:w-[45%] md:w-[30%] rounded-2xl shadow-lg bg-white flex flex-col justify-between items-center py-4 px-3">
              <h1 className="text-[#1B3363] text-base sm:text-lg md:text-xl lg:text-2xl text-center font-extrabold py-3">
                Natural Conversational Interface
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-[#5E6282] px-2 sm:px-3 md:px-4 text-center">
                Experience seamless interactions with Kronos that mimic
                consulting sessions with seasoned neuroradiologists, ensuring
                ease of use and accuracy.
              </p>
            </div>

            {/* Card 3 */}
            <div className="mx-auto w-[90%] sm:w-[45%] md:w-[30%] rounded-2xl shadow-lg bg-white flex flex-col justify-between items-center py-4 px-3">
              <h1 className="text-[#1B3363] text-base sm:text-lg md:text-xl lg:text-2xl text-center font-extrabold py-3">
                Thoroughly Vetted Information
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-[#5E6282] px-2 sm:px-3 md:px-4 text-center">
                Leveraging data from authoritative textbooks and peer-reviewed
                journals, Kronos guarantees comprehensive and accurate responses
                to your queries.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:min-h-[40vh] my-[20px] w-[100%] py-[4px] md:py-[10px]">
          <div className="h-[70%] w-[70%] md:w-[50%] md:h-[100%] flex flex-col justify-center items-center pt-10 pb-10">
            <img className="md:h-[60%] md:w-[50%]" src={kronosLogo} alt="img" />
          </div>
          <div className="md:w-[50%] h-[100%] flex flex-col justify-center items-center">
            <div className="w-full max-w-2xl mx-auto px-6 md:p-4">
              <p className="text-[#1B3363] font-bold my-[10px] md:mb-[20px] text-[16px] md:text-[32px] md:text-left text-center md:my-[0px] my-[20px]">
                Why Choose Kronos?
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

        <div className="md:min-h-[26vh] my-[20px]">
          <div className="flex flex-col justify-center items-center px-[10px] md:px-[20px] md:px-[40px] gap-2 md:gap-4">
            <h1 className="text-[#000] font-bold text-[14px] md:text-[24px]">
              Who Should Use Kronos?
            </h1>
            <p className="text-[12px] md:text-[20px] text-center text-[#000] px-[15px] md:px-[40px]">
              Kronos is tailored for professionals in neuroradiology who seek to
              enhance diagnostic accuracy, improve workflow efficiency, and stay
              at the forefront of medical advancements.
            </p>
            <p
              className="font-bold text-[16px] md:text-[24px] text-center bg-clip-text text-transparent my-[20px]"
              style={{
                backgroundImage: "linear-gradient(180deg, #EA4335, #CC0000)",
              }}
            >
              Experience Kronos Today!
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

export default kronos;
