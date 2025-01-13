import React, { useEffect, useRef } from "react";
import Footer from "../components/Footer";
import BannerImg from "../../public/img/Promotional-banners/AOCR-speaker-cover.png";
import SpeakerImg from "../../public/img/Promotional-banners/speaker-register-img.png";

function AOCR() {
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
      <div
        className="bg-black calendly-inline-widget"
        data-url="https://calendly.com/5caocr-5cnetwork/ai-powered-radiology-kalyan-sivasailam-at-aocr-2025?background_color=131313&text_color=ffffff&primary_color=ffde59"
        style={{ minWidth: "320px", height: "675px" }}
        ref={calendarContainerRef}
      ></div>

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
              <h2>
                <strong>Personalized Digital Business Card:</strong>
              </h2>
              <p className="text-gray-700">
                Stand out at AOCR! Register by January 20th to receive your
                exclusive digital business card at the event—personalized just
                for you (for all registrations).
              </p>

              <h2>
                <strong>Win an iPhone!</strong>
              </h2>
              <p className="text-gray-700">
                Every registration by January 20th gets automatically entered
                into a Lucky Draw to win a brand-new iPhone. The winner will be
                announced at the event!
              </p>
              <button
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors w-fit"
                onClick={() =>
                  window.open(
                    "https://calendly.com/5caocr-5cnetwork/ai-powered-radiology-kalyan-sivasailam-at-aocr-2025",
                    "_blank"
                  )
                }
              >
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
