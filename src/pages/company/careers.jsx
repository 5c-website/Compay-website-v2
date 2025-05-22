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
              "5C Network is India’s leading Medical AI company, delivering high-quality radiology reporting services powered by advanced AI technologies. Our mission is to make radiology services more accessible and efficient through innovative solutions.",
              "We are seeking motivated sales professionals with in-depth experience in Teleradiology sales or healthcare equipment sales. Ideal candidates should have strong connections in the diagnostic and hospital sectors.",
              "Opportunities are available across India",
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
    {
      title: "Inside Sales Representative",
      location: "Bangalore – On-site",
      detailedInformation: {
        no_of_positions: "NA",
        type: "Full-time",
        job_expiration: "NA",
        required_experience: "1 to 5 years",
        full_description: [
          {
            heading: "Job Summary",
            points: [
              "As an Inside Sales Representative, you will play a crucial role in driving our sales efforts and expanding our customer base. You will be responsible for identifying potential customers, engaging with prospects, and guiding them through the sales process. Your goal is to build strong relationships with healthcare providers and organizations, understand their needs, and demonstrate how our AI teleradiology solutions can address their challenges.",
            ],
          },
          {
            heading: "Key Responsibilities",
            points: [
              "Lead Generation: Proactively identify and qualify potential customers through research, cold calling, email campaigns, and social media.",
              "Customer Engagement: Engage with prospects to understand their needs, pain points, and objectives. Present our AI teleradiology solutions in a compelling manner to showcase their value.",
              "Sales Pipeline Management: Manage and maintain a robust sales pipeline, ensuring accurate and timely updates in the CRM system. Track and report on key metrics and progress towards sales targets.",
              "Product Knowledge: Develop a deep understanding of our AI teleradiology products and services, staying up to date with industry trends and advancements. Communicate product features, benefits, and competitive advantages effectively.",
              "Collaboration: Work closely with the sales, marketing, and customer success teams to align strategies, share insights, and ensure a seamless customer experience. Provide feedback to help refine marketing materials and sales approaches.",
              "Negotiation and Closing: Navigate the sales process from initial contact to contract negotiation and closing. Handle objections and overcome challenges to secure new business opportunities.",
              "Customer Relationship Management: Build and maintain long-term relationships with clients. Ensure high levels of customer satisfaction and identify opportunities for upselling or cross-selling.",
            ],
          },
          {
            heading: "Required Qualifications",
            points: [
              "Bachelor’s degree in business, Marketing, Healthcare, or a related field.",
              "Proven experience in inside sales, preferably in the healthcare or technology industry.",
              "Strong understanding of the healthcare market, particularly teleradiology and AI applications, is a plus.",
              "Excellent communication and interpersonal skills with the ability to build rapport and trust with prospects and clients.",
              "Results-oriented with a track record of meeting or exceeding sales targets.",
              "Proficient in CRM software (e.g., Salesforce) and other sales tools.",
              "Strong organizational and time management skills, with the ability to manage multiple priorities effectively.",
              "Self-motivated, proactive, and able to work independently as well as part of a team.",
            ],
          },
          {
            heading: "Benefits",
            points: [
              "Competitive salary and Sales Incentive structure",
              "Professional development opportunities",
              "Collaborative and innovative work environment",
              "Opportunity to make a significant impact in the healthcare industry",
            ],
          },
        ],
      },
    },
    {
      "title": "Data Science Specialist",
      "location": "Bangalore – On-site",
      "detailedInformation": {
        "no_of_positions": "NA",
        "type": "Full-time",
        "job_expiration": "NA",
        "required_experience": "1 to 6 years (but mindset > experience)",
        "full_description": [
          {
            "heading": "About the Role",
            "points": [
              "We’re looking for a mission-driven, hands-on Data Analytics Specialist who is not just technically sharp, but obsessed with impact. This is not your average analytics role. You’ll be driving the metrics that run the business — from clinical operations to stakeholder reporting to automation.",
              "You’ll work closely with leadership, radiologists, operations, product teams, and AI engineers to ensure every decision we make is data-backed, actionable, and scalable. If you’re the kind of person who finds excitement in building dashboards, triggering automations, rewriting messy pipelines, and helping the company grow through deep insights — this is your playground."
            ]
          },
          {
            "heading": "Key Responsibilities",
            "points": [
              "Own and Drive Business KPIs: Take complete ownership of company-wide metrics; proactively align with stakeholders to ensure accuracy, relevance, and actionability.",
              "Data Engineering: Build and optimize robust pipelines (ETL/ELT) across Postgres, ClickHouse, and other data sources.",
              "Dashboards & Reporting: Design and maintain intuitive, powerful dashboards (e.g., Metabase, Power BI, Tableau, Google Data Studio) that stakeholders love to use.",
              "Backend Data Transformation: Write clean, reusable code to transform raw data into production-grade insights.",
              "API Creation: Build and maintain internal APIs to serve analytics outputs to frontend and production systems.",
              "Email Automation: Create dynamic, real-time insights and scheduled updates through email reports for various stakeholders.",
              "Spreadsheet Mastery: Manipulate and automate complex data in spreadsheets (Excel/Google Sheets) for both deep-dive analysis and reporting.",
              "AI & Automation: Work with AI models and predictive algorithms to bring automation into analytics and operational workflows.",
              "Business Understanding: Deeply understand our teleradiology ecosystem—clinical flow, operations, financials, tech platform—and speak the language of every team you work with.",
              "Proactive Collaboration: Don’t wait to be told. Identify data gaps, flag inconsistencies, suggest product tweaks, and work shoulder-to-shoulder with leadership."
            ]
          },
          {
            "heading": "Required Skills",
            "points": [
              "Strong foundation in Python for data analytics (Pandas, NumPy, FastAPI, Jupyter, etc.)",
              "Solid understanding of SQL (ClickHouse, PostgreSQL) and experience designing queries for performance",
              "End-to-end ownership of dashboards — from data model to frontend display",
              "Experience building or working with APIs for analytics",
              "Strong knowledge of spreadsheet tools and formula-driven reporting",
              "Experience working with AI/ML models for real-world applications (preferred)",
              "Hands-on experience with backend data transformations, versioning, and automation",
              "Working knowledge of frontend/backend frameworks, preferably in a full-stack environment"
            ]
          },
          {
            "heading": "Bonus / Nice to Have",
            "points": [
              "Exposure to tools like dbt, Airflow, ChromaDB, Streamlit, Plotly",
              "Familiarity with data privacy, compliance, and healthcare analytics",
              "Experience building analytics platforms for SaaS or health-tech companies"
            ]
          },
          {
            "heading": "Mindset We’re Looking For",
            "points": [
              "10x Hustler: Willing to go the extra mile to solve a business problem, even if you have to learn the tool that day",
              "Obsessed with Accuracy: You don’t ship unless the numbers make sense, no matter what",
              "Extreme Ownership: You don’t wait to be asked. You drive results.",
              "Fast Learner: You may not know everything, but you can pick up anything in a few days",
              "Business First, Code Later: You understand that the goal isn’t just dashboards — it’s impact"
            ]
          },
          {
            "heading": "Why Join Us?",
            "points": [
              "Work at the heart of India's fastest-growing teleradiology platform",
              "Direct access to leadership and real-world decision-making",
              "Opportunity to build game-changing analytics systems and shape the business strategy",
              "Learn AI, automation, product, and ops – all in one role",
              "Clear 3-month ramp-up roadmap and growth plan"
            ]
          },
          {
            "heading": "Expectation in First 3 Months",
            "points": [
              "Build one end-to-end dashboard from scratch",
              "Clean up at least one messy data pipeline",
              "Automate at least one stakeholder email update",
              "Prove accuracy across critical business metrics",
              "Understand the platform’s full-stack structure and propose one improvement"
            ]
          }
        ]
      }
    },
    {
      "title": "Data Science Intern – Analytics, Automation & Problem Solving",
      "location": "Bangalore – On-site",
      "detailedInformation": {
        "no_of_positions": "NA",
        "type": "Internship 3–6 months",
        "job_expiration": "NA",
        "required_experience": "Final-year students or recent graduates",
        "full_description": [
          {
            "heading": "About the Role",
            "points": [
              "We’re looking for a high-agency intern who’s not just interested in data—but obsessed with solving problems. At 5C Network, data isn’t just about analysis; it’s about building systems, driving operations, and enabling healthcare outcomes. You’ll work with our Data Science & Analytics team to go beyond dashboards—owning problems, building automations, and working directly with data that impacts thousands of lives."
            ]
          },
          {
            "heading": "What You’ll Work On",
            "points": [
              "Complex Querying & Data Handling: Write high-performance SQL queries across large healthcare datasets (PostgreSQL, ClickHouse); troubleshoot data discrepancies and ensure reliability.",
              "Python-based Data Transformation: Clean, manipulate, and transform raw data using Pandas/Numpy; contribute to backend scripts used in live dashboards and reporting tools.",
              "Dashboarding & Reporting: Assist in building intuitive dashboards (Metabase/Power BI/Google Data Studio) that drive daily decisions for ops, product, and clinical teams.",
              "Automations & Workflows: Identify repetitive processes and help automate them using Python, APIs, and email/reporting tools.",
              "Advanced Applications: Collaborate on use-cases involving natural language data, smart assistants, and auto-triggered insights—bringing intelligence into decision loops.",
              "Business Context Awareness: Understand the why behind every metric. Don’t just solve queries — solve problems that matter."
            ]
          },
          {
            "heading": "What We Expect from You",
            "points": [
              "Strong grasp of SQL — not just writing queries, but optimizing, debugging, and owning logic across tables",
              "Solid working knowledge of Python for data (Pandas, NumPy, scripting)",
              "Comfort working with databases, schemas, and real-world messy data",
              "Curiosity to dig deeper: If something looks off, you investigate, not ignore",
              "Ability to think business-first: You ask \"What is this metric telling us?\" before jumping into code",
              "High ownership: You don’t wait for perfect specs—you explore, propose, and drive",
              "Willingness to stretch: Whether it’s automating a report, building an internal tool, or learning something new that day"
            ]
          },
          {
            "heading": "Nice to Have",
            "points": [
              "Experience working with APIs or backend data workflows",
              "Familiarity with tools like FastAPI, Git, or visualization platforms",
              "Interest in healthcare or operations-heavy environments",
              "Exposure to LLMs, text analytics, or no-code/low-code integrations (even if exploratory)"
            ]
          },
          {
            "heading": "Why This Internship is Different",
            "points": [
              "Real work, real impact: You’ll work on live projects that affect national healthcare delivery",
              "Learn full-stack analytics: From data pipelines to dashboards to business impact",
              "Mentorship from experienced data scientists and full-stack engineers",
              "Opportunity to convert to a full-time role based on performance"
            ]
          },
          {
            "heading": "Perks",
            "points": [
              "Paid internship with stipend",
              "Certificate and potential pre-placement offer",
              "Office in Bangalore’s startup and health-tech hub"
            ]
          }
        ]
      }
    }
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
