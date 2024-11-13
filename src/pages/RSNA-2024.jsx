import React, { useEffect, useRef } from "react";
import Footer from "../components/Footer";
import BannerImg from "../../public/img/rsna2024/RSA_brochure.png";
import Segment from "../../public/img/rsna2024/segment.png";
import Measure from "../../public/img/rsna2024/measure.png";
import Detect from "../../public/img/rsna2024/detect.png";
import Analyse from "../../public/img/rsna2024/analyse.png";
import Understand from "../../public/img/rsna2024/understand.png";
import { MapPin } from "lucide-react";

function RSNA() {
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
            Meet us at RSNA 2024 in Chicago! Find us at Booth 5714, South Hall
            Level 3, McCormick Place.
          </p>
          <button
            className="bg-white text-black rounded-full px-3 md:px-6 py-1 text-[0.6rem] md:text-sm font-['Poppins'] min-w-[8rem]"
            onClick={() =>
              window.open(
                "https://calendly.com/product-5c/connect-with-5c-network-at-rsna",
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
      <div className="bg-black py-8 md:py-16">
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/product-5c/connect-with-5c-network-at-rsna?background_color=131313&text_color=ffffff&primary_color=ffde59"
          style={{ minWidth: "320px", height: "675px" }}
          ref={calendarContainerRef}
        ></div>

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
              onClick={() =>
                window.open(
                  "https://rsna2024.mapyourshow.com/8_0/floorplan/?hallID=A&selectedBooth=5714",
                  "_blank"
                )
              }
            >
              <MapPin className="w-4 h-4" />
              <span className="text-base md:text-xl">5C booth location</span>
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

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default RSNA;
