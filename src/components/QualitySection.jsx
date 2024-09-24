import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { navigate } from 'gatsby';

const QualitySection = () => {
  const { ref: card1Ref, inView: card1InView } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: card2Ref, inView: card2InView } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: card3Ref, inView: card3InView } = useInView({ threshold: 0.2, triggerOnce: true });

  const cardAnimation = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-[#fff] flex flex-col justify-between items-center my-4 py-10 px-4 md:px-6">
      <h1
        className="text-[#1B3363] text-[17px] md:text-[28px] lg:text-[36px] w-[100%] font-bold text-center md:my-6"
        style={{ wordSpacing: '0.1em', letterSpacing: '0.01em' }}
      >
        Enhancing the Quality of Radiodiagnosis
      </h1>

     <div className="h-[6px] w-[6px] bg-red-500 relative md:top-[-42px] md:left-[305px] lg:left-[375px] hidden md:block"></div>
      <div className="my-2 md:h-[200px] w-[100%] px-6 flex flex-col md:flex-row justify-around items-center mt-10 gap-2">
        <motion.div
          ref={card1Ref}
          className="h-[80%] md:w-[30%] lg:w-[20%] flex flex-col justify-center items-center gap-3 border border-[#000] border-b-[20px] border-b-[#0C5192] md:border-none p-4 rounded-2xl"
          initial="hidden"
          animate={card1InView ? "visible" : "hidden"}
          variants={cardAnimation}
        >
          <img src="./img/quality/quality_img1.png" className="h-[100%] w-[80px]" alt="alt_img" />
          <p className="text-[#000] font-bold text-[18px] md:text-[20px]">Quantification</p>
          <p className="text-[#000] text-[14px] md:text-[16px] text-center">
            Exact measurements of identified issues ensure data consistency and adherence to standards.
          </p>
        </motion.div>

        <motion.div
          ref={card2Ref}
          className="h-[80%] md:w-[30%] lg:w-[20%] flex flex-col justify-center items-center gap-3 border border-[#000] border-b-[20px] border-b-[#0C5192] md:border-none p-4 rounded-2xl"
          initial="hidden"
          animate={card2InView ? "visible" : "hidden"}
          variants={cardAnimation}
        >
          <img src="./img/quality/quality_img2.png" className="h-[100%] w-[80px]" alt="alt_img" />
          <p className="text-[#000] font-bold text-[18px] md:text-[20px]">Consistency</p>
          <p className="text-[#000] text-[14px] md:text-[16px] text-center">
            Standard terminology in reports enhances reliability and uniformity, minimizing differences across diagnoses.
          </p>
        </motion.div>

        <motion.div
          ref={card3Ref}
          className="h-[80%] md:w-[30%] lg:w-[20%] flex flex-col justify-center items-center gap-3 border border-[#000] border-b-[20px] border-b-[#0C5192] md:border-none p-4 rounded-2xl"
          initial="hidden"
          animate={card3InView ? "visible" : "hidden"}
          variants={cardAnimation}
        >
          <img src="./img/quality/quality_img3.png" className="h-[100%] w-[80px]" alt="alt_img" />
          <p className="text-[#000] font-bold text-[18px] md:text-[20px]">Clarity</p>
          <p className="text-[#000] text-[14px] md:text-[16px] text-center">
            Clear recommendations for follow-up steps or treatments facilitate swift and informed decision-making based on radiological findings.
          </p>
        </motion.div>
      </div>

      <div className="mt-[20px] md:mt-[80px]">
        <motion.button
          className="text-white px-3 py-2 md:px-6 md:py-3 rounded-md text-lg transition-colors duration-300 hover:bg-gradient-to-br hover:from-[#CC0000] hover:to-[#EA4335] bg-gradient-to-br from-[#CC0000] to-[#EA4335]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(`/ai-products/bionic-suite/`)}
        >
          See how it works
        </motion.button>
      </div>
    </section>
  );
};

export default QualitySection;
