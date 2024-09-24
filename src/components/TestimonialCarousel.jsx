import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import "../styles/global.css";
import activeImg from "../../public/img/feedback/active_quote.png";
import unactiveImg from "../../public/img/feedback/unactive_quote.png";

const testimonials = [
  {
    id: 1,
    text: "The Bionic Report by 5C Network has transformed our workflow, making report generation fast and accurate. This tool allows us to focus more on patient care by reducing errors and prioritizing urgent cases.",
    author: "Dr. Neha Sharma",
    position: "Chief Radiologist, City Hospital",
    location: "Jharkhand, India",
  },
  {
    id: 2,
    text: "5C Network is a highly reliable platform and their reporting services are always up fast and accurate.",
    author: " Madan Prasad Mathur",
    position: " Technician, Alam Hospital",
    location: "Karnataka, India",
  },
  {
    id: 3,
    text: "OsteoCheck has been a game-changer for my practice. The ability to get precise, AI-assisted readings from simple knee X-rays helps me tailor treatment plans more effectively and engage patients in their care process, making early intervention possible.",
    author: "Dr. Isha Gaikwad",
    position: "Orthopedic Surgeon",
    location: "Maharashtra, India",
  },
  {
    id: 4,
    text: "The Bionic Report by 5C Network has transformed our workflow, making report generation fast and accurate. This tool allows us to focus more on patient care by reducing errors and prioritizing urgent cases.",
    author: "Dr. Neha Sharma",
    position: "Chief Radiologist, City Hospital",
    location: "Jharkhand, India",
  },
  {
    id: 5,
    text: "5C Network is a highly reliable platform and their reporting services are always up fast and accurate.",
    author: " Madan Prasad Mathur",
    position: " Technician, Alam Hospital",
    location: "Karnataka, India",
  },
  {
    id: 6,
    text: "OsteoCheck has been a game-changer for my practice. The ability to get precise, AI-assisted readings from simple knee X-rays helps me tailor treatment plans more effectively and engage patients in their care process, making early intervention possible.",
    author: "Dr. Isha Gaikwad",
    position: "Orthopedic Surgeon",
    location: "Maharashtra, India",
  },
];

const TestimonialCard = ({ text, author, position, location, isCenter }) => (
  <div className="px-4">
    <motion.div
      className={`rounded-lg p-6 min-h-[350px] flex flex-col justify-between relative transition-all duration-300 ${
        isCenter
          ? "bg-[#0C5192] text-white shadow-xl md:w-[480px] z-50 md:top-20 md:right-[65px]"
          : "bg-white text-gray-700 shadow-lg"
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1.0 }}
    >
      <img
        src={isCenter ? activeImg : unactiveImg}
        alt="Quote"
        className={`absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[40px] w-[40px] md:h-[60px] md:w-[70px] transition-all duration-300 ${
          isCenter ? "opacity-100 shadow-2xl" : "opacity-50"
        }`}
      />
      <div className="mb-4 relative top-[55px] z-10 flex-grow text-center">
        <p
          className={`${
            isCenter ? "text-white" : "text-gray-700"
          } line-clamp-6`}
        >
          {text}
        </p>
      </div>
      <div className="relative z-10 text-center">
        <div
          className={`font-semibold ${
            isCenter ? "text-white" : "text-gray-600"
          }`}
        >
          {author}
        </div>
        <div className={`text-sm ${isCenter ? "text-white" : "text-gray-600"}`}>
          {position}
        </div>
        <div className={`text-sm ${isCenter ? "text-white" : "text-gray-600"}`}>
          {location}
        </div>
      </div>
    </motion.div>
  </div>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-[#1B3363] text-white cursor-pointer"
  >
    <ChevronLeft size={24} />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-[#1B3363] text-white cursor-pointer"
  >
    <ChevronRight size={24} />
  </button>
);

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto py-6">
      <div className="relative">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              {...testimonial}
              isCenter={index === currentSlide}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
