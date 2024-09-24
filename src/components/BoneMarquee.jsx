import React, { useRef } from "react";
import Marquee from "react-fast-marquee";
import imageOne from "../../public/img/os_check/os_bone_one.png";
import imageTwo from "../../public/img/os_check/os_bone_two.png";
import imageThree from "../../public/img/os_check/os_bone_three.png";
import imageFour from "../../public/img/os_check/os_bone_four.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

function BoneMarquee() {
  const marqueeItems = [
    {
      src: imageOne,
      title: "Progressive Joint Pains",
      description:
        "Morning stiffness persists, impeding activities like climbing stairs. Reduced joint flexibility further limits mobility, exacerbating the impact on daily activities",
    },
    {
      src: imageTwo,
      title: "Changes in Joint shape and Alignment",
      description:
        "Advanced OA can lead to changes in the shape and alignment of joints, particularly noticeable in knees, affecting the joint's appearance and function",
    },
    {
      src: imageThree,
      title: "Surgery",
      description:
        "Total knee and hip replacement surgeries are common procedures that may be necessary in these cases.",
    },
    {
      src: imageFour,
      title: "Swelling and Inflammation of the joints",
      description:
        "Cartilage breakdown can lead to joint inflammation, causing swelling and warmth.",
    },
  ];

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300; // Adjust scroll amount as needed
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="md:min-h-[65vh] mt-[20px] relative">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-2 z-10"
      >
        <ChevronLeft />
      </button>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory  xl:justify-center"
      >
        {marqueeItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start bg-[#F3F7FF] shadow-lg mx-2 md:mx-4 min-w-[280px] lg:w-[300px] rounded-3xl min-h-[40vh] mb-[80px] snap-start"
          >
            <img
              src={item.src}
              alt={`certification ${index + 1}`}
              className="object-contain"
            />
            <div className="flex flex-col justify-center items-center text-center px-6 py-2 h-full">
              <p className="text-[14px] md:text-[24px] text-[#1E1D4C] px-3">
                {item.title}
              </p>
              <div className="h-full flex items-center justify-center py-2">
                <p className="text-sm text-gray-400 text-[12px] md:text-[20px] mt-2 leading-7">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-2 z-10"
      >
        <ChevronRight />
      </button>
    </div>
  );
}

export default BoneMarquee;
