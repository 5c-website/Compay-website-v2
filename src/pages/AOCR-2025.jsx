import React, { useEffect, useRef } from "react";
import Footer from "../components/Footer";
import BannerImg from "../../public/img/Promotional-banners/AOCR.png";
import Segment from "../../public/img/Promotional-banners/segment.png";
import Measure from "../../public/img/Promotional-banners/measure.png";
import Detect from "../../public/img/Promotional-banners/detect.png";
import Analyse from "../../public/img/Promotional-banners/analyse.png";
import Understand from "../../public/img/Promotional-banners/understand.png";
import SpeakerImg from "../../public/img/Promotional-banners/kalyan.png";
import borderless from "../../public/img/Promotional-banners/borderless-radiology.png";
import prodigi from "../../public/img/Promotional-banners/prodigi.png";
import MarqueeCom from "../components/Marquee";
import { navigate } from "gatsby";
import { BadgeInfo, Calendar, Clock, MapPin } from "lucide-react";

function AOCR() {
  const features = [
    {
      iconSrc: Segment,
      title: "Segment",
      description: "Speeds up annotations and cuts down clerical errors.",
    },
    {
      iconSrc: Measure,
      title: "Measure",
      description: "Cuts reporting time by 40%.",
    },
    {
      iconSrc: Detect,
      title: "Detect",
      description:
        "Detects 240 pathologies across 9 studies, with an impressive F1 score of 0.93.",
    },
    {
      iconSrc: Analyse,
      title: "Analyse",
      description:
        "Leverages metadata and diverse sources to enhance diagnostics.",
    },
    {
      iconSrc: Understand,
      title: "Understand",
      description:
        "Generates actionable, context-rich reports with clear clinical pathways.",
    },
  ];

  const calendarContainerRef = useRef(null);

  const scrollToCalendar = () => {
    if (calendarContainerRef.current) {
      calendarContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <header>
        <div className="flex items-center justify-center font-['Poppins'] bg-[linear-gradient(90deg,#FFD452_0%,#FCC219_73%,#FBBC04_100%)] p-3 gap-1 md:gap-3">
          <p className="text-black text-[0.6rem] md:text-sm">
            Meet us at AOCR 2025! Find us at Booth 26, Chennai Trade Center,
            Nandambakkam.
          </p>
          <button
            className="bg-white text-black rounded-full px-3 md:px-6 py-1 text-[0.6rem] md:text-sm font-['Poppins'] min-w-[8rem]"
            onClick={() =>
              window.open(
                "https://calendly.com/5caocr-5cnetwork/meet-with-5c-network-aocr-2025-booth-no-26",
                "_blank"
              )
            }
          >
            Book a meeting now
          </button>
        </div>
      </header>
      <div
        className="w-[100%] cursor-pointer"
        onClick={scrollToCalendar}
        style={{
          maxWidth: "100vw",
          overflow: "hidden",
        }}
      >
        <img
          src={BannerImg}
          className="w-full object-contain"
          alt="RSNA 2024 Brochure"
        />
      </div>
      <div className="h-[10vh] md:h-[15vh] bg-[#E8F2FE] flex flex-column justify-center items-center">
        <MarqueeCom />
      </div>
      <div
        className="bg-black calendly-inline-widget"
        data-url="https://calendly.com/5caocr-5cnetwork/meet-with-5c-network-aocr-2025-booth-no-26?background_color=131313&text_color=ffffff&primary_color=ffde59"
        style={{ minWidth: "320px", height: "675px" }}
        ref={calendarContainerRef}
      ></div>

      <div className="bg-white w-full py-8">
        <div className="max-w-6xl mx-auto pt-8 md:pt-16 pb-8 md:pb-16">
          <div className="flex justify-around items-stretch gap-8 w-full">
            <div className="flex-1 flex flex-col space-y-6 bg-white shadow-xl rounded-lg p-6 min-h-[300px] transition-shadow duration-300 hover:shadow-2xl">
              <div className="w-36 h-28 rounded-full flex items-center justify-center self-start">
                <img src={borderless} alt={"borderless radiology"} />
              </div>
              <p className="text-gray-700 text-left">
                Unlock the future with Borderless Radiology—where technology
                meets opportunity. Collaborate seamlessly on advanced tools and
                report from anywhere, redefining how you practice and innovate
                in radiology.
              </p>
              <div className="flex justify-start">
                <button
                  className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600 transition-colors"
                  onClick={() => navigate("/borderless-radiology")}
                >
                  Know More
                </button>
              </div>
            </div>

            <div className="flex-1 flex flex-col space-y-6 bg-white shadow-xl rounded-lg p-6 min-h-[300px] transition-shadow duration-300 hover:shadow-2xl">
              <div className="w-28 h-28 rounded-full flex items-center justify-center self-start">
                <img src={prodigi} alt={"prodigi"} />
              </div>
              <p className="text-gray-700 text-left">
                At 5C Network, we understand the pivotal role radiology plays in
                modern healthcare. That's why we have developed Prodigi, a
                revolutionary radiology reporting tool combined with a robust
                PACS solution that is transforming the diagnostic process with
                unparalleled technology.
              </p>
              <div className="flex justify-start">
                <button
                  className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600 transition-colors"
                  onClick={() => navigate("/ai-products/prodigi")}
                >
                  Join 5C
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black ">
        <div className="max-w-4xl mx-auto pt-8 md:pt-16 pb-8 md:pb-16 px-4 md:px-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-white">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Bionic{" "}
            </span>
            does it all - <br /> and you can decide what you need
          </h1>

          <div className="py-4 md:py-6">
            <button
              className="inline-flex items-center space-x-2 bg-[#0070C0] text-white px-4 md:px-6 py-2 md:py-3 rounded-full"
              onClick={() => navigate("/ai-products/bionic-suite")}
            >
              <BadgeInfo className="w-4 h-4" />
              <span className="text-base md:text-xl">Know More</span>
            </button>
          </div>

          <p className="text-base md:text-lg mb-8 md:mb-12 text-gray-300">
            Transform radiology reporting with the Bionic AI suite, trained on
            over 1 billion images. Our powerful algorithms analyze X-rays, CT
            scans, and MRIs, slashing reporting times by up to 70%. Enjoy the
            seamless blend of voice-enabled dictation and AI-powered reporting
            for faster, more precise results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 md:p-6"
              >
                <div className="p-3 rounded-lg flex items-center justify-center w-2/5">
                  <img
                    src={feature.iconSrc}
                    alt={`${feature.title} icon`}
                    className="w-12 md:w-16 h-12 md:h-16 object-contain"
                  />
                </div>
                <div className="w-3/5">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white w-full py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 flex justify-center">
              <div className="w-full max-w-md">
                <img
                  src={SpeakerImg}
                  height={400}
                  width={400}
                  alt="speaker image"
                />
              </div>
            </div>

            <div className="flex-1 flex flex-col space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="text-orange-400" size={24} />
                  <div>
                    <div className="font-semibold text-lg">
                      Innovation Theater,
                    </div>
                    <div>Chennai Trade Centre, Nandhambakkam</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className="text-orange-400" size={24} />
                  <div>
                    <div className="font-semibold">Friday,</div>
                    <div>January 24, 2025</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="text-orange-400" size={24} />
                  <div>
                    <div>Will start at</div>
                    <div className="font-semibold">11:30 AM - 12:00PM</div>
                  </div>
                </div>
              </div>

              <p className="text-gray-700">
                Listen to Kalyan break down how multi-modal AI is driving
                innovation at 5C, transforming diagnostics, and helping
                radiologists lead the way in advanced healthcare.
              </p>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors w-fit">
                Register Now
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

export default AOCR;
