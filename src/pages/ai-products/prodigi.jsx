import React, { useRef, useEffect } from "react";
import Navbar from "../../components/Navbar";
import ProductsBanner from "../../components/ProductsBanner";
import Banner from "../../../public/img/ai-products/prodigi_top_bg.png";
import prodigiOne from "../../../public/img/ai-products/prodigi_one.png";
import prodigiTwo from "../../../public/img/ai-products/prodigi_two.png";
import prodigiThree from "../../../public/img/prodigi.mp4";
import Footer from "../../components/Footer";
import { navigate } from "gatsby";

function Prodigi() {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (videoRef.current) {
              videoRef.current.play();
            }
          } else {
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const sections = [
    {
      title: "Empowering Radiologists with Cutting-Edge Technology",
      content:
        "Prodigi harnesses the power of artificial intelligence to enhance reporting capabilities across a diverse range of imaging modalities, including X-rays, CT scans, MRIs, mammograms, and nuclear medicine studies. This state-of-the-art tool enables radiologists to rapidly and accurately interpret imaging studies, concentrating their expertise on diagnosis and treatment planning.",
    },
    {
      title: "Automated Excellence for Enhanced Productivity",
      content:
        "By automating the reporting process, Prodigi boosts productivity, allowing radiologists to deliver timely and precise reports. This improvement in workflow facilitates improved patient care by enabling faster and more reliable diagnostic outcomes. Prodigi prioritizes cases effectively, expediting the entire diagnostic process and revolutionizing the workflow in modern radiology practices.",
    },
  ];

  const features = [
    {
      title: "Integrated AI-Assisted Reporting:",
      description:
        "Prodigi incorporates advanced AI algorithms to boost the accuracy and efficiency of radiology reporting, providing an intelligent analysis that aids radiologists in making precise interpretations.",
    },
    {
      title: "Cloud-Based PACS:",
      description:
        "Our Picture Archiving and Communication System is cloud-based, offering secure and scalable solutions for storing, accessing, and transferring medical images, facilitating seamless collaboration.",
    },
    {
      title: "Advanced DICOM Viewer:",
      description:
        "Equipped with sophisticated tools for detailed image analysis, Prodigi's DICOM viewer is tailor-made to meet radiological needs, enhancing the ability to scrutinize images thoroughly.",
    },
    {
      title: "Enterprise-Grade System:",
      description:
        "Designed for high availability, scalability, and security, Prodigi is a reliable and robust solution for critical medical imaging tasks.",
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
            img={Banner}
            heading={"Prodigi"}
            buttonText={"Book a Demo"}
            linkToRedirect={"/contact-us"}
          />
        </div>
        <div className="md:min-h-[200px] w-[95%] my-[30px]">
          <h1
            className="font-bold text-[16px] md:text-[32px] text-center bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(180deg, #EA4335, #CC0000)",
            }}
          >
            Welcome to the Future of Radiology Reporting
          </h1>
          <p className="text-[#000] text-[12px] md:text-[20px] text-center my-[10px] px-[10px] md:px-[20px]">
            At 5C Network, we understand the pivotal role radiology plays in
            modern healthcare. That’s why we have developed Prodigi, a
            revolutionary radiology reporting tool combined with a robust PACS
            solution that is transforming the diagnostic process with
            unparalleled technology.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center min-h-[50vh] md:min-h-[29vh] w-[100%] my-[20px] pl-[20px] md:pl-[80px]">
          <div className="md:w-[60%] flex flex-row jusitfy-start items-start">
            <div className="container md:px-4 md:py-8 md:max-w-3xl">
              <div className="relative">
                <div className="absolute left-1.5 top-0 bottom-0 w-0.5 mt-3 bg-[#1B3363]"></div>
                <div className="space-y-12">
                  {sections.map((section, index) => (
                    <div key={index} className="flex">
                      <div className="relative">
                        <div className="w-3 h-3 bg-[#1B3363] rounded-full mt-3 z-10 relative"></div>
                      </div>
                      <div className="flex-1 ml-6">
                        <h2 className="text-[14px] md:text-[24px] font-bold mb-2">
                          {section.title}
                        </h2>
                        <p className="text-[12px] md:text-[20px] text-gray-700 leading-2 md:leading-10">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[30%] flex flex-col justify-between items-center hidden md:block">
            <div className="">
              <img
                src={prodigiOne}
                className="h-[45vh] mb-8 w-[100%]"
                alt="img"
              />
            </div>
            <div>
              <img src={prodigiTwo} className="h-[34vh] w-[100vw]" alt="img" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-[#F3F7FF] min-h-[20vh] my-[20px] w-[100%] py-[4px] md:py-[10px] gap-2 md:gap-5">
          <h1 className="text-[#1B3363] text-[16px] md:text-[32px]">
            {" "}
            How Prodigi Works?{" "}
          </h1>
          <p className="text-[#000] text-center text-[12px] md:text-[20px] w-[90%]">
            {" "}
            Images captured at diagnostic centers or hospitals are digitally
            uploaded and transferred to our network of expert radiologists.
            Leveraging their extensive experience along with AI-enhanced
            algorithms, these professionals provide fast, accurate
            interpretations. Our system is designed for speed, reducing
            turnaround times to as low as 24 minutes—yes, that’s right—while
            maintaining the highest standards of accuracy.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center md:min-h-[40vh] my-[20px] w-[100%] py-[4px] md:py-[10px]">
          <div className="h-[100%] w-[92%] md:w-[80%] md:h-[100%] flex flex-col justify-center items-center">
            <video
              ref={videoRef}
              src={prodigiThree}
              className="h-[100%] w-[100%] md:h-[80%] md:w-[85%]"
              controls
              loop={true}
              muted
            />
          </div>
          <div className="md:w-[50%] h-[100%] flex flex-col justify-center items-center">
            <div className="w-full max-w-2xl mx-auto p-4">
              <ul className="md:space-y-6">
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
                      <p className="text-[#000] text-[14px] md:text-[16px]">
                        {feature.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="h-[20vh] w-[100%] my-[20px] md:my-[40px] flex flex-col justify-center items-center">
          <h1 className="text-[#000] text-[12px] md:text-[20px] font-bold text-center px-[10px]">
            Discover a new era of radiological reporting that’s not just
            advanced, but also intuitively simple and profoundly impactful.
          </h1>
          <button
            className="text-[#fff] bg-[#1B3363] px-4 py-2 rounded-xl my-5"
            onClick={() => navigate("/contact-us")}
          >
            Schedule a demo
          </button>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Prodigi;
