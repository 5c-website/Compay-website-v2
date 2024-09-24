import React from "react";
import Marquee from "react-fast-marquee";

function MarqueeCom() {
  const marqueeItems = [
    { src: "./img/certifications/iso_logo.png", text: "ISO 13485:2016" },
    { src: "./img/certifications/iso_logo.png", text: "ISO 27701:2019" },
    { src: "./img/certifications/iso_logo.png", text: "ISO 9001:2019" },
    { src: "./img/certifications/iso_logo.png", text: "ISO 27001:2022" },
    { src: "./img/certifications/hipaa_logo.png", text: "HIPAA Compliant" },
    {
      src: "./img/certifications/cdsco_logo.png",
      text: "200+ CDSCO Approvals",
    },
    { src: "./img/certifications/iso_logo.png", text: "ISO 13485:2016" },
    { src: "./img/certifications/iso_logo.png", text: "ISO 27701:2019" },
    { src: "./img/certifications/iso_logo.png", text: "ISO 9001:2019" },
    { src: "./img/certifications/iso_logo.png", text: "ISO 27001:2022" },
    { src: "./img/certifications/hipaa_logo.png", text: "HIPAA Compliant" },
    {
      src: "./img/certifications/cdsco_logo.png",
      text: "200+ CDSCO Approvals",
    },
  ];

  return (
    <div className="overflow-hidden">
      <Marquee gradient={false} speed={100}>
        {marqueeItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center whitespace-nowrap mx-6 2xl:mx-10"
          >
            <img
              src={item.src}
              alt={`certification ${index + 1}`}
              className="h-[45px] w-[80px] md:h-[60px] md:w-[100px] object-contain"
            />
            <p className="text-[16px] md:text-[18px] text-[#0D50B6] 2xl:text-[20px]">
              {item.text}
            </p>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default MarqueeCom;
