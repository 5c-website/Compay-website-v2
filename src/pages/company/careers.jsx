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
      title: "Senior Data Scientist - LLM",
      location: "Bangalore, Karnataka, India",
      detailedInformation: {
        no_of_positions: "NA",
        type: "Full Time",
        job_expiration: "NA",
        required_experience: "2+ years",
        skills: ["Deep Learning, LLMs", "Python"],
        full_description: [
          {
            heading: "Job Summary",
            points: [
              "5C Network is building multi-modal AI for autonomous diagnosis of medical imaging. This role focuses on developing advanced AI models for medical imaging analysis using Large Language Models.",
            ],
          },
          {
            heading: "Key Responsibilities",
            points: [
              "Develop and optimize prompts for various LLM tasks, ensuring high performance in different use cases.",
              "Work on instruction fine-tuning for specific tasks to adapt models to custom requirements.",
              "Develop workflows for Retrieval-Augmented Generation (RAG) systems to combine LLMs with external knowledge bases.",
            ],
          },
          {
            heading: "LLM Deployment",
            points: [
              "Set up and manage the deployment of LLMs in production environments.",
              "Ensure scalability, security, and performance in self-hosted LLM environments.",
              "Work with quantization techniques to optimize model performance and reduce memory footprint.",
            ],
          },
          {
            heading: "Dataset Building and Chain of Thought (CoT)",
            points: [
              "Build and manage high-quality datasets to enable Chain of Thought (CoT) reasoning in LLMs.",
              "Annotate and refine datasets to improve LLM performance in complex multi-step reasoning tasks.",
            ],
          },
          {
            heading: "Vector Databases and RAG Integration",
            points: [
              "Work with Vector Databases (ideally Qdrant) to implement RAG-based solutions, combining LLMs with semantic search and retrieval.",
              "Ensure efficient storage, indexing, and retrieval of vectorized data for enhanced LLM performance.",
            ],
          },
          {
            heading: "Collaboration and Research",
            points: [
              "Collaborate with AI researchers and engineers to integrate LLMs into production systems.",
              "Research and experiment with new LLM architectures and approaches to improve task performance.",
            ],
          },
          {
            heading: "Qualifications",
            points: [
              "Bachelor's or Master's degree in Computer Science, Data Science, or related field",
              "Prior experience in self-hosting LLMs and working with deployment frameworks.",
              "Prior experience or strong interest in healthcare AI applications.",
              "Excellent problem-solving and analytical skills.",
              "Strong communication skills and ability to work in a collaborative research environment",
            ],
          },
          {
            heading: "Technical Requirements",
            points: [
              "2+ years’ experience in Deep Learning with 1+ years’ experience in LLMs",
              "Python Expertise: Ability to write clean, scalable code for LLM deployment and fine-tuning.",
              "LLM Knowledge: Experience with instruction fine-tuning, quantization, prompt engineering and RAG-based systems.",
              "LLM Deployment: Understanding of the tools and processes for self-hosting LLMs, including optimization and scaling techniques.",
            ],
          },
          {
            heading: "Role Details",
            points: ["Work Type: In-person", "Location: Bangalore"],
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
    {
      title: "Area Sales Manager",
      location: "Anywhere in India",
      detailedInformation: {
        no_of_positions: "NA",
        type: "Full Time",
        job_expiration: "NA",
        required_experience: "5+ years",
        skills: ["Experience in Tele-Radiology &  Health care"],
        full_description: [
          {
            heading: "Job Summary",
            points: [
              "5C Network is India’s leading Medical AI company providing high-quality radiology reporting services powered by advanced AI technologies. Our mission is to make radiology services accessible and efficient through innovative solutions. We are now expanding our operations to Egypt and seeking a dynamic and experienced Country Manager to lead this venture.",
            ],
          },
          {
            heading: "Key Responsibilities",
            points: [
              "Drive sales revenue growth within designated geographic territories to achieve maximum potential.",
              "Strategize and implement robust sales approaches consistently exceeding predetermined targets.",
              "Identify, assess, and engage prospective clients through persuasive sales proposals and successful negotiation tactics.",
              "Foster enduring partnerships with key stakeholders in the healthcare sector to unlock fresh business prospects.",
              "Analyse evolving market dynamics and customer demands to fine-tune strategies and seize emerging opportunities.",
              "Ensure seamless coordination between sales and marketing teams to maintain synergy in initiatives.",
              "Act as the face of the company in sales gatherings and industry events to bolster market presence.",
              "Supervise the sales pipeline, forecasts, and overall performance to drive ongoing enhancements.",
              "Set a standard for professionalism, ethical conduct, and adherence to company regulations through exemplary leadership.",
            ],
          },
          {
            heading: "Additional Responsibilities",
            points: [
              "Collaborate with the marketing team on tailored promotional efforts and campaigns.",
              "Actively participate in events to cultivate valuable sales leads.",
              "Foster enduring client relationships to nurture loyalty and repeat business.",
              "Negotiate deals adeptly to ensure mutually advantageous outcomes.",
              "Effectively advocate for the company’s product while addressing client needs.",
              "Cultivate enduring relationships with both new and existing clients.",
              "Exhibit an unwavering passion and dedication to driving organisational success.",
              "Craft and execute strategic marketing plans to attract and retain customers efficiently.",
            ],
          },
          {
            heading: "Requirements",
            points: [
              "experience in Tele-Radiology domain would be a plus.",
              "Experience in Health care domain is Manadatory.",
              "5+ yrs of experience as a business development manager, sales manager, or in a similar role.",
              "Proven track record of successful sales achievements.",
              "Proficiency in English language.",
              "In-depth knowledge of market dynamics.",
              "Excellent communication and negotiation skills.",
              "Ability to build rapport with clients and stakeholders.",
              "Strong time management and planning capabilities.",
            ],
          },
          {
            heading: "Note",
            points: [
              "This is a target-based sales role, and the compensation package will include performance-based incentives.",
              "To apply, please submit your resume along with a cover letter detailing your relevant experience and why you believe you are the right fit for this position.",
            ],
          },
        ],
      },
    },
    {
      title: "Senior Data Scientist - AI",
      location: "Bangalore, Karnataka, India",
      detailedInformation: {
        no_of_positions: "NA",
        type: "Full Time",
        job_expiration: "NA",
        required_experience: "2+ years",
        skills: ["Deep learning algorithms &  Python"],
        full_description: [
          {
            heading: "Job Summary",
            points: [
              "5C Network is building multi-modal AI for autonomous diagnosis of medical imaging. This role focuses on developing advanced AI models for medical imaging analysis using Computer Vision and Vision Language Models.",
            ],
          },
          {
            heading: "Key Responsibilities",
            points: [
              "Develop and implement Computer Vision Models, VLM (Vision Language Models) and 3D models on CT and MRI scans to classify/segment/detect findings on the scans.",
              "Collaborate with top radiologists and AI scientists in India and US.",
              "Work with the Product and Engineering teams to operationalize the models.",
              "Contribute to cutting-edge research in medical image analysis and AI-assisted diagnostics",
              "Assist in writing and publishing academic papers in peer-reviewed journals and conferences.",
            ],
          },
          {
            heading: "Qualifications",
            points: [
              "Bachelor's or Master's degree in Computer Science, Data Science, or related field.",
              "Demonstrated experience in training and deploying computer vision models.",
              "Prior experience or strong interest in healthcare AI applications.",
              "Excellent problem-solving and analytical skills.",
              "Strong communication skills and ability to work in a collaborative research environment.",
            ],
          },
          {
            heading: "Technical Requirements",
            points: [
              "2+ years experience in Deep Learning.",
              "Strong fundamentals in deep learning algorithms.",
              "5+ yrs of experience as a business development manager, sales manager, or in a similar role.",
              "Proficiency in Python and the Deep Learning framework PyTorch.",
              "Experience with well-known computer vision architectures (e.g., ResNet, DenseNet, U-Net, Vision Transformers, V-Net, etc).",
              "In-depth knowledge of market dynamics.",
              "Experience in building deep learning architectures from scratch.",
              "Experience in Large Language Models.",
              "Experience in model pruning and quantization and in scaling model training and inference using GPUs.",
            ],
          },
        ],
      },
    },
    {
      title: "Senior Software Engineer (Full Stack)",
      location: "Bangalore, Karnataka, India",
      detailedInformation: {
        no_of_positions: "NA",
        type: "Full-time & Work from Office",
        job_expiration: "NA",
        required_experience: "3+ years",
        full_description: [
          {
            heading: "Job Summary",
            points: [
              "We are hiring a Senior Full Stack Engineer (React.js, Node.js, MongoDB) with 3+ years of experience to build and maintain scalable web applications. This Bangalore-based, full-time, onsite role involves API development, UI/UX collaboration, code reviews, and mentoring. Experience with cloud, CI/CD, and microservices is a plus.",
            ],
          },
          {
            heading: "Key Responsibilities",
            points: [
              "Design, develop, and maintain scalable and efficient code for both client and server-side applications",
              "Work with front-end technologies to create responsive and intuitive user interfaces",
              "Develop robust back-end services and APIs to support application functionality",
              "Collaborate with UI/UX designers to implement visually appealing and user-friendly interfaces",
              "Participate in code reviews to ensure code quality and best practices",
              "Troubleshoot, debug, and upgrade existing software components",
              "Write clean, maintainable, and well-documented code",
              "Implement automated testing strategies to ensure application reliability",
              "Stay current with emerging technologies and industry trends",
              "Mentor junior developers and contribute to team knowledge sharing",
            ],
          },
          {
            heading: "Required Qualifications",
            points: [
              "Bachelors degree in computer science, Engineering, or related field",
              "Minimum 3+ years of professional experience in full-stack development",
              "Strong proficiency in React.js, including state management, hooks, and component architecture",
              "Experience with Node.js and Express.js for backend development",
              "Expertise in MongoDB database design, queries, and Mongoose ODM",
              "Solid understanding of RESTful API development with Express.js",
              "Experience with RESTful API design and implementation",
              "Familiarity with version control systems (Git)",
              "Knowledge of web application security principles",
              "Strong problem-solving skills and attention to detail",
              "Excellent communication and teamwork skills",
            ],
          },
          {
            heading: "Preferred Skills",
            points: [
              "Experience with cloud services (AWS, Azure, or GCP)",
              "Knowledge of containerization and orchestration tools (Docker, Kubernetes)",
              "Experience with microservices architecture",
              "Understanding of CI/CD pipelines",
              "Knowledge of agile development methodologies",
              "Experience with performance optimization techniques",
              "Familiarity with testing frameworks",
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
      <div className="mx-4 mt-4 md:mt-10 md:mx-[60px] my-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {JobsData?.map((job) => (
            <JobCard
              title={job.title}
              location={job.location}
              onApply={() => handleApply(job.title)}
            />
          ))}
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
