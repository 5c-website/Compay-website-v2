import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,  
    threshold: 0.3,    
  });

  return (
    <section
      ref={ref}
      className="md:min-h-[20vh] bg-[#F3F7FF] flex flex-col justify-between items-center my-4 py-4 md:py-0 px-3 md:px-6"
    > 
      <div className="my-5 md:my-2 md:h-[200px] w-[100%] px-2 md:px-6 flex flex-row justify-around items-center">
        <div className="h-[80%] md:w-[30%] lg:w-[20%] flex flex-col justify-center items-center">
          <h1 className="text-[#0070C0] font-bold text-[20px] md:text-[36px] lg:text-[50px] ml-2 md:ml-0">
            {inView ? (
              <CountUp start={199000} end={9863469} duration={3} separator="," />
            ) : (
              '0'
            )}
          </h1>
          <p className="text-[#1B3363] font-bold text-[12px] md:text-[22px] lg:text-[30px]">
            Cases Reported
          </p>
        </div>

        <div className="h-[80%] md:w-[30%] lg:w-[20%] flex flex-col justify-center items-center">
          <h1 className="text-[#0070C0] font-bold text-[20px] md:text-[36px] lg:text-[50px] ml-2 md:ml-0">
            {inView ? (
              <CountUp start={1000} end={3000} duration={3} />
            ) : (
              '0'
            )}+
          </h1>
          <p className="text-[#1B3363] font-bold text-[12px] md:text-[22px] lg:text-[30px]">
            Clients
          </p>
        </div>

        <div className="h-[80%] md:w-[30%] lg:w-[20%] flex flex-col justify-center items-center">
          <h1 className="text-[#0070C0] font-bold text-[20px] md:text-[36px] lg:text-[50px] ml-2 md:ml-0">
            {inView ? (
              <CountUp start={100} end={500} duration={3} />
            ) : (
              '0'
            )}+
          </h1>
          <p className="text-[#1B3363] font-bold text-[12px] md:text-[22px] lg:text-[30px]">
            Radiologists
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
