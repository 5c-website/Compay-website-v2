import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { useLocation } from "@reach/router";
import experinceLogo from "../../../public/img/careers/experience.png";
import skillsLogo from "../../../public/img/careers/skills.png";
import Footer from "../../components/Footer";
import ReachUs from "../../components/ReachUs";
import { navigate } from "gatsby";

const JobDescription = () => {
  const [showReachUs, setShowReachUs] = useState(false);
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const jobInfo = queryParams.get("jobInfo");
  const parsedJobInfo = jobInfo
    ? JSON.parse(decodeURIComponent(jobInfo))
    : null;

  return (
    <>
      {showReachUs && <ReachUs />}
      <header>
        <Navbar />
      </header>
      <div className="w-[100%] flex flex-col justify-center items-center pt-[70px]">
        <div className="md:min-h-[20vh] md:h-[28vh] bg-[#F3F7FF] w-[100%] px-[10px] md:px-[60px] py-[6px] md:py-[30px]">
          <div className="h-[100%] flex flex-row justify-between items-center">
            <div className="w-[100%] md:w-[50%] h-[90%] flex flex-col justify-between items-center md:items-start md:gap-0 gap-2">
              <div className="flex flex-row justify-center items-center md:pt-0 pt-2">
                <h1 className="text-[#1B3363] font-bold text-[14px] md:text-[30px]">
                  {parsedJobInfo &&
                    parsedJobInfo.length > 0 &&
                    parsedJobInfo[0]?.title}
                </h1>
                <h1 className="text-[#0A66C2] font-bold text-[10px] md:text-[16px] bg-white p-1 md:p-2 ml-2 rounded-full">
                  (
                  {parsedJobInfo && parsedJobInfo[0]?.detailedInformation?.type}
                  )
                </h1>
              </div>
              <p className="text-[#0070C0] text-[14px] md:text-[22px]">
                {parsedJobInfo &&
                  parsedJobInfo.length > 0 &&
                  parsedJobInfo[0]?.location}
              </p>
              <button
                className="bg-[#0070C0] text-[#fff] px-1 py-1 md:px-1.5 md:py-1 rounded-full cursor-hover border border-solid border-[#000] text-[10px] md:text-[20px]"
                onClick={() => navigate(`/company/reach-us/`)}
              >
                Apply now
              </button>
            </div>
            {/* <div className="w-[40%] md:w-[20%] h-[90%] flex flex-col justify-between items-center gap-2 md:gap-0">
              <div>
                <img
                  src={"../../static/logo.png"}
                  className="h-[40px] w-[60px] md:h-[70px] md:w-[120px]"
                  alt="img"
                />
              </div>
              <p className="text-[#0070C0] text-[9px] md:text-[18px]">
           
                Positions Available -
                {(parsedJobInfo && parsedJobInfo.length > 0 ) && parsedJobInfo[0]?.detailedInformation?.no_of_positions}
              </p>
              <p className="text-[#0070C0] text-[9px] md:text-[18px]">
        
                Expires On -{" "}
                {(parsedJobInfo && parsedJobInfo.length > 0 ) && parsedJobInfo[0]?.detailedInformation?.job_expiration}
              </p>
            </div> */}
          </div>
        </div>
        <div className="md:h-[150px] md:my-[30px] w-[100%] md:px-[60px] flex flex-col md:flex-row justify-between items-center md:gap-0 gap-4 mt-5">
          <div className="h-[100%] w-[90%] md:w-[44%] rounded-2xl flex flex-row justify-start items-center bg-white shadow-xl md:pl-5 md:p-0 p-4">
            <img
              src={experinceLogo}
              className="md:h-[100px] md:w-[100px] h-[60px] w-[60px]"
              alt="img"
            />
            <div className="flex flex-col pl-2 md:pl-8 justify-start items-start gap-4">
              <h1 className="text-[#1B3363] text-[16px] md:text-[22px] font-bold">
                Required Experience{" "}
              </h1>
              <p className="text-[#0070C0] text-[14px] md:text-[20px]">
                {parsedJobInfo &&
                  parsedJobInfo.length > 0 &&
                  parsedJobInfo[0]?.detailedInformation?.required_experience}
              </p>
            </div>
          </div>
          {parsedJobInfo &&
            parsedJobInfo[0]?.detailedInformation?.skills?.length && (
              <div className="h-[100%] w-[90%] md:w-[44%] rounded-2xl flex flex-row justify-start items-center bg-white shadow-xl md:pl-5 md:p-0 p-4">
                <img
                  src={skillsLogo}
                  className="md:h-[100px] md:w-[100px] h-[60px] w-[60px]"
                  alt="img"
                />
                <div className="flex flex-col  pl-2 md:pl-8 justify-start items-start gap-4">
                  <h1 className="text-[#1B3363] text-[16px] md:text-[22px] font-bold">
                    Skills
                  </h1>
                  <p className="text-[#0070C0] text-[14px] md:text-[20px]">
                    {parsedJobInfo &&
                      parsedJobInfo.length > 0 &&
                      parsedJobInfo[0]?.detailedInformation?.skills?.join(", ")}
                  </p>
                </div>
              </div>
            )}
        </div>

        <div className="min-h-[30vh] w-[100%] py-[20px] md:px-[60px] mb-8">
          <div className="h-[100%] border-[#000] border-solid border-2 rounded-2xl mx-auto w-[90%] md:w-[100%] px-4 py-4">
            {parsedJobInfo &&
              parsedJobInfo.length > 0 &&
              parsedJobInfo[0]?.detailedInformation?.full_description?.map(
                (each) => {
                  return (
                    <div key={each?.heading} className="py-2">
                      <h1 className="text-[#000] text-[16px] md:text-[20px] pl-2 font-medium">
                        {" "}
                        {each?.heading}:{" "}
                      </h1>
                      <ul>
                        {each?.points?.map((every) => (
                          <li
                            key={every}
                            className="list-disc ml-5 text-[#000] text-[14px] md:text-[18px] "
                          >
                            {" "}
                            {every}{" "}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                }
              )}
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default JobDescription;
