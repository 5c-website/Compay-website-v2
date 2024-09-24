import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const isMobileDevice = () => {
  if (typeof window !== "undefined") {
    return window.innerWidth <= 768;
  }

  return false;
};


const ConfigureSection = () => {
  const textVariantLeft = isMobileDevice()
    ? {
        hidden: { y: 100, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.7 } },
      }
    : {
        hidden: { x: -100, opacity: 0 }, 
        visible: { x: 0, opacity: 1, transition: { duration: 0.7 } },
      };

  const textVariantRight = isMobileDevice()
    ? {
        hidden: { y: 100, opacity: 0 }, 
        visible: { y: 0, opacity: 1, transition: { duration: 0.7 } },
      }
    : {
        hidden: { x: 100, opacity: 0 }, 
        visible: { x: 0, opacity: 1, transition: { duration: 0.7 } },
      };

  const imageVariantLeft = isMobileDevice()
    ? {
        hidden: { y: 100, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.7 } },
      }
    : {
        hidden: { x: -100, opacity: 0 }, 
        visible: { x: 0, opacity: 1, transition: { duration: 0.7 } },
      };

  const imageVariantRight = isMobileDevice()
    ? {
        hidden: { y: 100, opacity: 0 }, 
        visible: { y: 0, opacity: 1, transition: { duration: 0.7 } },
      }
    : {
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.7 } },
      };

  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-[#fff] flex flex-col justify-center items-center my-8">
      <div className="flex">
        <h1 className="text-[#1B3363] font-bold text-[22px] md:text-[34px] my-4">
          Configuring AI to Work for You
        </h1>
        <div className="h-[6px] w-[6px] bg-red-500 relative top-[36px] left-[5px] md:top-[48px] md:left-2 md:block hidden"></div>
      </div>
      <div className="flex flex-row justify-center items-center my-8">
        <div className="min-h-[300px]">
          <div className="flex flex-col justify-center items-center gap-8">
            <motion.div
              ref={ref1}
              className="flex flex-row justify-start items-start gap-3 lg:gap-8"
              initial="hidden"
              animate={inView1 ? "visible" : "hidden"}
            >
              <motion.img
                src="./img/ai_work/one.png"
                className="w-[130px] h-[50px] md:w-[200px] md:h-[80px] lg:w-[300px] lg:h-[100px]"
                alt="img"
                variants={imageVariantLeft}
              />
              <motion.div variants={textVariantRight}>
                <p className="text-[#1B3363] text-[12px] md:text-[18px] lg:text-[22px]">
                  Streamlines clinical <br /> workflows in radiology
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              ref={ref2}
              className="flex flex-row justify-center items-center gap-3 lg:gap-8"
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
            >
              <motion.div variants={textVariantLeft}>
                <p className="text-[#1B3363] text-[12px] md:text-[18px] lg:text-[22px]">
                  Automates the initial <br /> review process
                </p>
              </motion.div>
              <motion.img
                src="./img/ai_work/two.png"
                className="w-[130px] h-[50px] md:w-[200px] md:h-[80px] lg:w-[300px] lg:h-[100px]"
                alt="img"
                variants={imageVariantRight}
              />
            </motion.div>

            <motion.div
              ref={ref3}
              className="flex flex-row justify-center items-center gap-3 lg:gap-8"
              initial="hidden"
              animate={inView3 ? "visible" : "hidden"}
            >
              <motion.img
                src="./img/ai_work/three.png"
                className="w-[130px] h-[50px] md:w-[200px] md:h-[80px] lg:w-[300px] lg:h-[100px]"
                alt="img"
                variants={imageVariantLeft}
              />
              <motion.div variants={textVariantRight}>
                <p className="text-[#1B3363] text-[12px] text-[12px] md:text-[18px] lg:text-[22px]">
                  Categorizes scans into normal, <br /> simple abnormalities,
                  and complex <br /> abnormalities
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              ref={ref4}
              className="flex flex-row justify-center items-center gap-3 lg:gap-8"
              initial="hidden"
              animate={inView4 ? "visible" : "hidden"}
            >
              <motion.div variants={textVariantLeft}>
                <p className="text-[#1B3363] text-[12px] text-[12px] md:text-[18px] lg:text-[22px]">
                  Assists in prioritizing cases and <br /> directing them to
                  appropriate <br /> radiological expertise
                </p>
              </motion.div>
              <motion.img
                src="./img/ai_work/four.png"
                className="w-[130px] h-[50px] md:w-[200px] md:h-[80px] lg:w-[300px] lg:h-[100px]"
                alt="img"
                variants={imageVariantRight}
              />
            </motion.div>

            <motion.div
              ref={ref5}
              className="flex flex-row justify-center items-center gap-3 lg:gap-8"
              initial="hidden"
              animate={inView5 ? "visible" : "hidden"}
            >
              <motion.img
                src="./img/ai_work/five.png"
                className="w-[130px] h-[50px] md:w-[200px] md:h-[80px] lg:w-[300px] lg:h-[100px]"
                alt="img"
                variants={imageVariantLeft}
              />
              <motion.div variants={textVariantRight}>
                <p className="text-[#1B3363] text-[12px] md:text-[18px] lg:text-[22px]">
                  Helps in reducing the <br /> turnaround time <br />
                  significantly
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfigureSection;
