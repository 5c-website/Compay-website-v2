import React from "react";
import Navbar from "../../components/Navbar";
import topBanner from "../../../public/img/case_study.png";
import CompanyBanner from "../../components/CompanyBanner";
import Footer from "../../components/Footer";
import GridComponent from "../../components/GridComponent";
import imageOne from "../../../public/img/user_studies/study1.png";
import imageTwo from "../../../public/img/user_studies/study2.png";

function caseStudies() {
  const isMobileDevice = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth <= 768;
    }
    return false;
  };
  const StudyData = [
    {
      category: "User Stories",
      title:
        "Tier 1 City Client Struggling to Deliver Timely Reports for High Volume Scans",
      description: [
        "5C Network is a leading provider of digital diagnostics delivery services, offering specialized expertise to healthcare facilities across the globe. One of our clients, a multi-specialty hospital located in a tier 1 city, needed help managing the high volume of diagnostic scans that needed to be reported quickly and accurately. The client used to perform 70 CT and MRI scans in a day with an average of 2000+ scans in a month.",
      ],
      imageUrl: imageOne,
      information: [
        {
          title: "Challenge",
          description: [
            "The client hospital, located in a tier 1 city was struggling with a surge in diagnostic scans due to more patients seeking healthcare. They have only one radiologist who can not keep up with the workload, causing delays in reporting results and treating patients. Specialized cases are being delayed as well. The hospital needed help managing the large number of scans and reducing the backlog of pending reports within a 12-hour timeframe.",
          ],
          imageUrl: null,
        },
        {
          title: "5C Network Solution",
          description: [
            "5C Network provided a solution for managing high volumes of CT and MRI scans at a hospital. We streamlined the process by receiving scans electronically, prioritizing based on urgency, and assigning them to our radiologists. ",
            "Using advanced remote radiology technology, our AI-powered platform enabled secure remote access for interpretation and real-time collaboration among radiologists, eliminating the need for physical presence.",
            "With 24/7 availability, our elite team of radiologists ensured continuous coverage, enabling timely reporting even during night hours. Their rigorous quality assurance process maintained over 99% accuracy, reducing the need for reworks and upholding high reporting standards.",
          ],
          imageUrl: null,
        },
        {
          title: "Results",
          description: [
            "Partnering with 5C Network, the tier 1 city hospital significantly improved diagnostic scan reporting.",
            "Turnaround time was reduced from 2-3 days to under 12 hours, expediting patient diagnosis and treatment. ",
            "Immediate scan reporting enhanced patient care, enabling prompt treatment plans.",
            "Streamlined workflow and 24/7 radiologist availability minimized backlogs, boosting overall efficiency.",
          ],
          imageUrl: null,
        },
        {
          title: "Conclusion",
          description: [
            "5C Network's expertise in delivering quality digital diagnostic services helped the client efficiently manage 2000+ radiology scans and achieve timely reporting within 12 hours. Additionally, our team of 400+ radiologists with expertise in 217+ specialties helped them to report critical cases as well. ",
          ],
          imageUrl: null,
        },
      ],
    },
    {
      category: "User Stories",
      title:
        "How 5C Network Helped a Medical Diagnostic Chain Improve Patient Care and Expand Their Patient Base",
      description: [
        "One of our esteemed clients is a medical diagnostic chain in India. The diagnostic chain was struggling with the challenge of delivering quick and accurate radiology reports due to the unavailability of radiologists. This resulted in delayed diagnoses, prolonged patient wait times, and increased patient dissatisfaction. The client approached 5C Network for a solution to help them cover the gap and improve patient care.",
      ],
      imageUrl: imageTwo,
      information: [
        {
          title: "Challenge",
          description: [
            "The medical diagnostic chain faced significant challenges in delivering radiology reports on time. Due to the shortage of radiologists, they struggled to meet the high demand for radiology services, resulting in delayed reports and increased patient wait times. This was negatively impacting their patient care and overall reputation in the market. They needed a reliable solution that could help them address this issue and deliver quick and accurate reports to their patients.",
          ],
          imageUrl: null,
        },
        {
          title: "5C Network Solution",
          description: [
            "We analyzed the client's requirements and devised a customized solution to address their challenges. Leveraging our extensive network of 400+ experienced radiologists, we provided them with 24/7 coverage for their radiology reporting needs. We implemented a seamless workflow, allowing the client to send radiology images securely to their platform for interpretation.",
            "Our expert radiologist team provided timely and accurate reports that were delivered to the client for further action. The entire process was streamlined and optimized for efficiency, ensuring quick and accurate reports.",
          ],
          imageUrl: null,
        },
        {
          title: "Results",
          description: [
            "Implementing our solution brought about a significant transformation in the medical diagnostic chain's radiology services. The quick and accurate reports enabled them to provide timely diagnosis, reduce patient wait times, and enhance patient satisfaction.",
            "As a result, the medical diagnostic chain's patient base increased by a remarkable 72%!",
            "The improved patient care and efficient radiology services also enhanced their reputation in the market, leading to increased referrals and business growth.",
          ],
          imageUrl: null,
        },
        {
          title: "Conclusion",
          description: [
            "Our services proved to be a game-changer for the client, helping them overcome the challenge of the unavailability of radiologists and deliver quick and accurate reports to their patients. The improved patient care and increased patient base have positively impacted their business outcome. ",
          ],
          imageUrl: null,
        },
      ],
    },
  ];

  const Studycategories = ["Latest", "User Stories"];

  return (
    <>
      <div>
        <header>
          <Navbar />
        </header>
      </div>
      <div className="w-[100%] flex flex-col justify-center items-center pt-[90px]">
        <div className="w-[100%] px-4 md:px-10">
          <CompanyBanner
            img={topBanner}
            heading={"Case Study"}
            containerClassName={"items-center md:items-start"}
            contentClassName={"flex items-center"}
          />
        </div>
        <div className="w-[100%]">
          <GridComponent
            section={"Studies"}
            comInformation={StudyData}
            comCategories={Studycategories}
            isNewsRoom={false}
          />
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default caseStudies;
