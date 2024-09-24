import React from "react";
import Navbar from "../../components/Navbar";
import careerBannerImage from "../../../public/img/careers/top.png";
import CompanyBanner from "../../components/CompanyBanner";
import { motion } from "framer-motion";
import JobCard from "../../components/JobCard";
import { navigate, Link } from "gatsby";
import "../../styles/global.css";
import Footer from "../../components/Footer";
import CareerStats from "../../components/CareerStats";

function Career() {
  const JobsData = [
    {
      title: "Senior Software Engineer",
      location: "Coimbatore, Tamil Nadu, India",
      detailedInformation: {
        no_of_positions: "NA",
        type: "Full Time",
        job_expiration: "NA",
        required_experience: "3+ years",
        skills: ["Javascript", "Node.Js", "Express.Js", "SQL"],
        full_description: [
          {
            heading: "Job Summary",
            points: [
              "We're seeking a passionate Senior Software Engineer to create systems for the entire diagnosis lifecycle.",
            ],
          },
          {
            heading: "Responsibilities",
            points: [
              "Design, develop, and maintain scalable, high-performance software systems.",
              "Lead technical projects and mentor junior team members.",
              "Write clean, high-quality code.",
              "Collaborate with cross-functional teams.",
              "Optimize application performance and scalability.",
              "Conduct code reviews.",
              "Contribute to architectural decisions.",
            ],
          },
          {
            heading: "Requirements",
            points: [
              "Bachelor's degree in Computer Science or equivalent experience.",
              "3+ years of software engineering experience, focusing on backend development.",
              "Strong proficiency in JavaScript (ES6+), Node.js, Express.js, SQL, PostgreSQL, MySQL.",
              "Excellent computer science fundamentals and problem-solving skills.",
              "Strong grasp of data structures, algorithms, and OOP.",
              "Experience with RESTful APIs, Websockets, and JSON.",
              "Proficiency in Git.",
            ],
          },
          {
            heading: "Preferred Skills",
            points: [
              "Cloud infrastructure experience (AWS).",
              "CI/CD pipelines knowledge.",
              "Containerization and microservices exposure.",
              "TypeScript experience.",
              "Familiarity with frontend technologies (e.g., ReactJS).",
            ],
          },
        ],
      },
    },
    {
      title: "IT Administrator (Hardware)",
      location: "Bangalore, Karnataka, India",
      detailedInformation: {
        no_of_positions: "NA",
        type: "Full Time",
        job_expiration: "NA",
        required_experience: "0-2 years",
        skills: ["Networking protocols and hardware"],
        full_description: [
          {
            heading: "Job Summary",
            points: [
              "We are seeking a proactive and detail-oriented IT Administrator (Hardware) to manage and maintain our organisation’s hardware infrastructure.",
              "The ideal candidate will have in-depth knowledge of computer hardware, troubleshooting, and system setup, ensuring smooth day-to-day operations of all hardware-related systems.",
            ],
          },
          {
            heading: "Key Responsibilities",
            points: [
              "Hardware Setup and Installation: Set up, install, and configure computer hardware systems including desktops, laptops, servers, printers, and network devices.",
              "Hardware Maintenance: Regularly inspect and maintain computer systems, networks, and peripherals to ensure they are running efficiently and to prevent any disruptions.",
              "Troubleshooting and Repair: Diagnose hardware-related issues and resolve them quickly to minimise downtime. Repair or replace faulty hardware components when necessary.",
              "Asset Management: Maintain an inventory of all IT hardware, ensuring proper documentation, tracking, and updating of hardware assets.",
              "Peripheral Devices: Manage and troubleshoot peripheral devices such as printers, scanners, monitors, keyboards, and other accessories.",
              "Backup Systems: Set up and manage hardware for data backup systems, ensuring redundancy and data protection..",
              "Upgrade and Replacement : Plan and execute hardware upgrades or replacements as per organisational needs, ensuring minimal disruption to business operations.",
              "Vendor Coordination: Liaise with hardware vendors and service providers for purchasing new hardware, maintenance, and warranty services.",
              "Assets Management:- Managing all the assets and getting tracked and record of it, Conducting internal reviews and preparing supporting documentation for the clearance",
              "Documentation: Create and update hardware configuration documentation, troubleshooting guides, and standard operating procedures (SOPs).",
              "IT Security Compliance: Ensure all hardware complies with organisational security protocols, including endpoint security and network hardware safeguards.",
              "Network Hardware Management: Manage and troubleshoot network devices such as routers, switches, access points, and firewalls.",
            ],
          },
          {
            heading: "Requirements",
            points: [
              "Bachelor’s degree in Information Technology, Computer Science, or a related field (or equivalent experience).",
              "Proven experience in IT hardware management, system installation, troubleshooting, and repair.",
              "Expertise with hardware components like CPUs, GPUs, motherboards, storage devices, and networking equipment.",
              "Strong understanding of networking protocols and hardware (routers, switches, access points).",
              "Experience with IT asset management tools and processes.",
              "Good communication skills to collaborate with team members and other Departments. Ability to prioritise and manage multiple tasks in a fast-paced environment.",
            ],
          },
          {
            heading: "You will be a great fit in the team if",
            points: [
              "Support: Provide timely support to employees facing hardware issues, either on-site or remotely.",
              "Monitoring and Reporting: Monitor hardware performance and generate periodic reports on hardware health and operational metrics.",
            ],
          },
        ],
      },
    },
    {
      title: "Quality Assessors",
      location: "Bangalore, Karnataka, India",
      detailedInformation: {
        no_of_positions: "NA",
        type: "Full Time",
        job_expiration: "NA",
        required_experience: "2-8 years",
        skills: ["B.sc(in radiology)", "Imaging Tech"],
        full_description: [
          {
            heading: "Job Summary",
            points: [
              "We are looking for motivated and talented individuals to join our team as Radiographers/Quality Assessors.",
              "This is a unique opportunity to advance your career in a cutting-edge healthcare environment, working alongside industry leaders in Radiology and AI.",
            ],
          },
          {
            heading: "What can join?",
            points: [
              "Recent B.Sc graduate in Radiology or imaging Technology.",
              "This is a unique opportunity to advance your career in a cutting-edge healthcare environment, working alongside industry leaders in Radiology and AI.",
            ],
          },
          {
            heading: "What we offer?",
            points: [
              "Competitive Salary: Attractive package with benefits.",
              "Professional Development: Training, mentorship, and growth oppurtunities.",
              "Innovative Environment: State-of-the-art facility with advanced imaging technology.",
              "Career Growth: Advancement oppurtunities in a rapidly growing organization.",
            ],
          },
          {
            heading: "Why Join Us?",
            points: [
              "Leader in AI Healthcare: Join 5C Network at the forefront of AI and radiology.",
              "Commitment to Excellence: Contribute to top-tier patient care.",
              "Cutting-Edge Technology: Hands-On experience with the latest in imaging and AI.",
            ],
          },
        ],
      },
    },
  ];

  const handleApply = (title) => {
    const JobInfomation = JobsData?.filter(
      (job) => job?.title.trim() === title.trim()
    );
    const jobInfoString = encodeURIComponent(JSON.stringify(JobInfomation));
    navigate(
      `/company/job-description?title=${encodeURIComponent(
        title
      )}&jobInfo=${jobInfoString}`
    );
  };

  return (
    <>
      <div>
        <header>
          <Navbar />
        </header>
      </div>
      <div className="w-[100%] flex flex-col jusify-center items-center pt-[90px] px-4 md:px-10">
        <div className="w-[100%]">
          <CompanyBanner
            img={careerBannerImage}
            heading={"Want Opportunity?"}
            description={
              "Our team consists of a mix of new-age thinkers, armed with a non-conformist approach to problem solving and experts with decades of expertise in the Healthcare sector "
            }
          />
        </div>
        <div className="mt-4 ml-2 md:mt-10 md:ml-4 flex flex-row justify-end items-end self-start">
          <motion.h1
            className="text-[#1C3363] text-[22px] md:text-[44px] font-bold"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Career Opportunity
          </motion.h1>
          <div className="md:h-[8px] md:w-[8px] h-[6px] w-[6px] bg-[#F04444] mb-2 ml-2 md:mb-4"></div>
        </div>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="ml-2 md:ml-4 md:mt-2 text-[16px] md:text-[20px]"
        >
          5C Network foster innovation at the highest levels. A place where
          incredibly talented individuals are empowered to do their best work
          each day, with very little in their way. If you see a future with us,
          do consider applying to the current openings below, or send us an
          email!
        </motion.p>
      </div>
      <div className="mx-6 mt-4 md:mt-10 md:mx-[60px] flex flex my-6">
        <div className="flex flex-col md:flex-row justify-between items-start w-[100%] flex-wrap gap-4 md:gap-4">
          {JobsData?.map((job) => {
            return (
              <JobCard
                title={job?.title}
                location={job?.location}
                onApply={() => handleApply(job?.title)}
              />
            );
          })}
        </div>
      </div>
      <div className="h-[14vh] flex flex-row justify-center items-center">
        <motion.div
          className="bg-white h-[100px] mx-auto w-[85%] md:w-[80%] rounded-2xl shadow-lg flex flex-col justify-center items-center text-center px-2 py-1"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="text-[#1B3363] font-bold text-[14px] md:text-[20px]">
            {" "}
            Can’t Find The Perfect Position?{" "}
          </h1>
          <p className="text-[#1B3363] text-[14px] md:text-[20px]">
            <Link to="/company/reach-us">
              <span className="text-[#0070C0]">Contact Us</span>
            </Link>
            &nbsp;Anyway. We may have an available opportunity for you.
          </p>
        </motion.div>
      </div>
      <div>
        <CareerStats />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Career;
