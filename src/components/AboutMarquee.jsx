import React from "react";
import Marquee from "react-fast-marquee";
import imageOne from "../../public/img/about_us/mar_one.png";
import imageTwo from "../../public/img/about_us/mar_two.png";
import imageThree from "../../public/img/about_us/mar_three.png";
import imageFour from "../../public/img/about_us/mar_four.png";

function AboutMarquee() {
  const marqueeItems = [
    { src: imageOne, text: "AMM Foundation" },
    { src: imageTwo, text: "SK Hospitals" },
    {
      src: imageThree,
      text: "Shankar Super Speciality",
    },
    {
      src: imageFour,
      text: "R S Gaur multispeciality hospital",
    },
    { src: imageOne, text: "AMM Foundation" },
    { src: imageTwo, text: "SK Hospitals" },
    {
      src: imageThree,
      text: "Shankar Super Speciality",
    },
    {
      src: imageFour,
      text: "R S Gaur multispeciality hospital",
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

export default AboutMarquee;
