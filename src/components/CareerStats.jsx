import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const CareerStats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,  
    threshold: 0.6,    
  });

  return (
    <section
      ref={ref}
      className="md:min-h-[33vh] bg-[#F3F7FF] flex flex-col justify-between items-center my-8 md:my-10 pt-8 px-3 md:px-6"
    >
      <h1
        className="text-[#1B3363] text-[15px] md:text-[34px] 2xl:text-[38px] w-[100%] font-bold text-center"
        style={{ wordSpacing: '0.1em', letterSpacing: '0.01em' }}
      >
        We are only getting started
      </h1>
      
      <div className="my-5 md:my-2 md:h-[200px] w-[100%] px-2 md:px-6 flex flex-row justify-around items-center">
        <div className="h-[80%] md:w-[20%] flex flex-col justify-center items-center">
        <h1 className="text-[#0070C0] font-bold text-[20px] md:text-[50px]">
            {inView ? (
              <CountUp start={90} end={200} duration={2} />
            ) : (
              '0'
            )}+
          </h1>
          <p className="text-[#1B3363] font-bold text-[14px] md:text-[30px]">
            Employees
          </p>
          <p className='text-[#1B3363] text-[11px] md:text-[16px] text-center'> Across the departments </p>
        </div>

        <div className="h-[80%] md:w-[20%] flex flex-col justify-center items-center">
          <h1 className="text-[#0070C0] font-bold text-[20px] md:text-[50px]">
            {inView ? (
              <CountUp start={199} end={300} duration={2} />
            ) : (
              '0'
            )}+
          </h1>
          <p className="text-[#1B3363] font-bold text-[14px] md:text-[30px]">
            Locations
          </p>
          <p className='text-[#1B3363] text-[11px] md:text-[16px] text-center'> We are providing services </p>
        </div>

        <div className="h-[80%] md:w-[20%] flex flex-col justify-center items-center">
          <h1 className="text-[#0070C0] font-bold text-[20px] md:text-[50px]">
            {inView ? (
              <CountUp start={1000} end={3000} duration={2} />
            ) : (
              '0'
            )}+
          </h1>
          <p className="text-[#1B3363] font-bold text-[14px] md:text-[30px] ">
            Clients
          </p>
          <p className='text-[#1B3363] text-[11px] md:text-[16px] text-center'> We have worked with </p>
        </div>
      </div>
    </section>
  );
};

export default CareerStats;
