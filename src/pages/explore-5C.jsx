import { Users, X } from "lucide-react";
import fiveClog from "../../public/img/footer_logo.png";
import React, { useState, useEffect, useRef } from "react";
import { CheckCircle, CircleMinus } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from "recharts";
import hospital from "../../public/img/lead-generation/icons/hospital.svg";
import vortex from "../../public/img/lead-generation/icons/vortex.svg";
import pacs from "../../public/img/lead-generation/icons/pacs.svg";
import radiologyReport from "../../public/img/lead-generation/icons/radiologyReport.svg";
import downloadReport from "../../public/img/lead-generation/icons/downloadReport.svg";
import qualityCheck from "../../public/img/lead-generation/icons/qualityCheck.svg";
import radiologist from "../../public/img/lead-generation/icons/radiologist.svg";
import ai from "../../public/img/lead-generation/icons/ai.svg";
import appstore from "../../public/img/lead-generation/icons/appstore.svg";
import playstore from "../../public/img/lead-generation/icons/playstore.svg";
import { NocoFetch } from "../api/NocoDBEndpoints";
import { slackAlerts } from "../api/SlackTiggers";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import laptopMockUpImage from "../../public/img/lead-generation/laptop.png";
import mobileGif from "../../public/img/lead-generation/mobile-gif.gif";
import bionicAi from "../../public/img/lead-generation/icons/bionic-ai.svg";

const TeleradiologyLanding = () => {
  const [activeTab, setActiveTab] = useState("with"); // 'with' or 'without'
  const [showMore, setShowMore] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState("refer");
  const [showFloatingButton, setShowFloatingButton] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  // Reference to the form section
  const formRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (formRef.current && !isDismissed) {
        const formPosition = formRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setShowFloatingButton(formPosition > windowHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
    setShowFloatingButton(false);
  };

  const handleDismiss = (e) => {
    e.stopPropagation();
    setIsDismissed(true);
    setShowFloatingButton(false);
  };

  // Generate sample data for the graph
  const withSpendData = Array.from({ length: 12 }, (_, i) => ({
    name: i,
    value: 50000 + Math.random() * 50000 + i * 3000,
  }));

  const withoutSpendData = Array.from({ length: 12 }, (_, i) => ({
    name: i,
    value: 85000 - Math.random() * 40000 - i * 2000,
  }));

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  // Hero Section
  const HeroSection = () => (
    <>
      <div className="max-w-6xl mx-auto relative px-4 md:px-6 lg:px-8">
        {/* AI Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-6 py-4 bg-white rounded-full shadow-sm">
            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
              <img src={bionicAi} className="w-6 h-6 text-white" />
            </div>
            <span className="text-gray-800 font-medium text-sm md:text-xl">
              Introducing AI - Powered Diagnostics
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          AI Meets Teleradiology: Smarter Diagnostics, Faster Care!
        </h1>

        {/* Subheading */}
        <p className="text-center text-gray-600 text-sm md:text-base max-w-2xl mx-auto mb-8">
          At 5C Network, we break barriers and deliver diagnostic reports at
          lightning speed, powered by cutting-edge Artificial Intelligence (AI)
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mb-12">
          <button
            className="px-6 py-3 bg-indigo-500 text-white rounded-3xl hover:bg-indigo-600 transition-colors"
            onClick={scrollToForm}
          >
            Explore 5C
          </button>
        </div>
      </div>

      {/* Main Content Container with Image */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Image Container - Visible on All Devices */}
        <div className="w-full max-w-5xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 rounded-3xl overflow-hidden">
            <img
              src={laptopMockUpImage}
              alt="Dashboard Preview"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );

  // Floating Action Button Component
  const FloatingButton = () =>
    showFloatingButton &&
    !isDismissed && (
      <div className="fixed bottom-6 left-0 right-0 flex justify-center z-50 px-4">
        <div className="relative bg-gray-800 rounded-lg shadow-lg p-3 flex items-center gap-3 max-w-md w-full">
          {/* Close Button */}
          <button
            onClick={handleDismiss}
            className="absolute -top-2 -right-2 w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
          >
            <X className="w-4 h-4 text-white" />
          </button>

          <img src={fiveClog} alt="5C Network" className="w-10 h-10 rounded" />
          <div className="flex-grow">
            <h4 className="text-white font-medium">5C Network</h4>
            <p className="text-gray-300 text-sm">Join our network today!</p>
          </div>
          <button
            onClick={scrollToForm}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
          >
            Join Us
          </button>
        </div>
      </div>
    );

  const FlowChartSection = () => {
    const nodes = [
      {
        id: "hospital",
        title: "Hospital",
        description:
          "Your journey to faster and smarter radiology starts here!",
        image: hospital,
        x: 50,
        y: 50,
        mobileOrder: 1,
      },
      {
        id: "vortex",
        title: "5C VORTEX",
        description:
          "Securely pushes cases to the 5C platform for seamless processing.",
        image: vortex,
        x: 350,
        y: 50,
        mobileOrder: 2,
      },
      {
        id: "pacs",
        title: "5C PACS",
        description:
          "Stores anonymized DICOM images for AI-assisted analysis and reporting.",
        image: pacs,
        x: 650,
        y: 50,
        mobileOrder: 3,
      },
      {
        id: "bionic",
        title: "Bionic Inference Engine",
        description:
          "Our AI-powered engine enhances radiology workflow with automated insights.",
        image: ai,
        x: 900,
        y: 50,
        mobileOrder: 4,
      },
      {
        id: "report",
        title: "Radiology Report",
        description:
          "With the help of AI, our radiologists will efficiently analyze and report findings.",
        image: radiologyReport,
        x: 900,
        y: 250,
        mobileOrder: 5,
      },
      {
        id: "quality",
        title: "Quality Check",
        description:
          "Every report undergoes expert validation to ensure precision and reliability.",
        image: qualityCheck,
        x: 650,
        y: 250,
        mobileOrder: 6,
      },
      {
        id: "platform",
        title: "5C Platform",
        description:
          "Easily access reports in PDF and Word format anytime on the 5C platform.",
        image: downloadReport,
        x: 350,
        y: 250,
        mobileOrder: 6,
      },
      {
        id: "team",
        title: "Hospital Radiology Team",
        description:
          "Your team can download reports and track case status seamlessly on our platform.",
        image: radiologist,
        x: 50,
        y: 250,
        mobileOrder: 8,
      },
    ];

    const connections = [
      {
        from: "hospital",
        to: "vortex",
        label: "Pushing of selected cases to Vortex",
      },
      { from: "vortex", to: "pacs", label: "Anonymized DICOM Images" },
      { from: "pacs", to: "bionic", label: "" },
      { from: "bionic", to: "report", label: "" },
      { from: "report", to: "platform", label: "" },
      { from: "team", to: "platform", label: "" },
    ];

    const Popover = ({ node }) => (
      <div className="absolute z-10 bg-white rounded-lg shadow-xl p-4 w-64 transform -translate-x-1/2 -translate-y-full mb-2">
        <h3 className="font-bold text-lg mb-2">{node.title}</h3>
        <p className="text-gray-600">{node.description}</p>

        {/* Pointer */}
        <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2">
          <div className="w-4 h-4 bg-white rotate-45 shadow-lg" />
        </div>
      </div>
    );

    const IconNode = ({ node }) => (
      <div className="absolute group" style={{ left: node.x, top: node.y }}>
        <div className="relative">
          {/* Popover only shows on hover using group-hover */}
          <div className="hidden group-hover:block">
            <Popover node={node} />
          </div>
          <img
            src={node.image}
            alt={node.title}
            className="w-20 h-20 rounded-lg bg-white p-2 hover:shadow-lg transition-all duration-200"
          />
          <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-sm font-medium">
            {node.title}
          </span>
        </div>
      </div>
    );

    // Mobile Node Component remains the same
    const MobileNode = ({ node }) => (
      <div className="flex items-center p-4 bg-white rounded-lg shadow-md mb-4">
        <img
          src={node.image}
          alt={node.title}
          className="w-12 h-12 rounded-lg bg-white p-2 mr-4"
        />
        <div>
          <h3 className="font-bold text-lg mb-1">{node.title}</h3>
          <p className="text-sm text-gray-600">{node.description}</p>
        </div>
      </div>
    );

    const Connection = ({ from, to, label }) => {
      const fromNode = nodes.find((n) => n.id === from);
      const toNode = nodes.find((n) => n.id === to);

      const startX = fromNode.x + 36;
      const startY = fromNode.y + 36;
      const endX = toNode.x + 36;
      const endY = toNode.y + 36;

      return (
        <>
          <line
            x1={startX}
            y1={startY}
            x2={endX}
            y2={endY}
            stroke="#CBD5E1"
            strokeWidth="2"
            strokeDasharray="4"
          />
          {label && (
            <text
              x={(startX + endX) / 2}
              y={(startY + endY) / 2 - 10}
              textAnchor="middle"
              className="text-xs text-gray-500"
            >
              {label}
            </text>
          )}
        </>
      );
    };

    return (
      <div className="p-4 md:p-12">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-6 text-center">
          5C Radiology Workflow
        </h2>

        {/* Desktop View */}
        <div className="hidden md:block relative w-full h-[380px] rounded-xl">
          <svg className="absolute inset-0 w-full h-full">
            {connections.map((conn, i) => (
              <Connection key={i} {...conn} />
            ))}
          </svg>
          {nodes.map((node) => (
            <IconNode key={node.id} node={node} />
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          <div className="relative">
            {nodes
              .sort((a, b) => a.mobileOrder - b.mobileOrder)
              .map((node, index) => (
                <div key={node.id} className="relative">
                  <MobileNode node={node} />
                  {index < nodes.length - 1 && (
                    <div className="h-8 w-0.5 bg-gray-200 absolute left-[29px] bottom-[-32px]" />
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  };

  // with and without 5c graph section
  const GraphSection = () => (
    <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 border-2">
      <span className="text-purple-600 font-medium mb-4 block">
        {activeTab === "without"
          ? "USUAL PRODUCTIVITY"
          : "INCREASE PRODUCTIVITY"}
      </span>

      <div className="space-y-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          Accelerated Outcomes with 5C Network
        </h2>
        <h4 className="text-3xl md:text-4xl">vs Slower Pace without it</h4>
      </div>

      {/* Toggle Buttons */}
      <div className="inline-flex p-1 bg-gray-100 rounded-full mb-6">
        <button
          onClick={() => setActiveTab("with")}
          className={`px-8 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            activeTab === "with"
              ? "bg-purple-500 text-white shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          With 5C
        </button>
        <button
          onClick={() => setActiveTab("without")}
          className={`px-8 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            activeTab === "without"
              ? "bg-purple-500 text-white shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Without 5C
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="space-y-6">
            {activeTab === "without"
              ? [
                  "Delays & manual effort slow down reporting.",
                  "Manual activation wastes valuable minutes.",
                  "Risk of errors without AI validation.",
                  "Unpredictable turnaround times for emergencies.",
                  "Limited availability when you need it most.",
                  "Generic, unbranded reports.",
                ].map((text, index) => (
                  <div key={index} className="flex gap-3">
                    <CircleMinus className="w-6 h-6 text-red-500 flex-shrink-0" />
                    <p className="text-gray-600">{text}</p>
                  </div>
                ))
              : [
                  "Reports delivered fast with AI-powered precision.",
                  "Auto-activation saves time, no manual work needed.",
                  "AI & QC double-check every report for accuracy.",
                  "Urgent cases in 1 hour for critical situations.",
                  "24/7 service with expert radiologists.",
                  "Custom-branded reports with your logo.",
                ].map((text, index) => (
                  <div key={index} className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <p className="text-gray-600">{text}</p>
                  </div>
                ))}
          </div>
        </div>

        {/* Graph Section */}
        <div className="h-80">
          {/* Balance Statistics */}
          {/* <div className="flex justify-between items-center mb-4">
                <span className="text-gray-500">Balance Statistics</span>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold">$85,211.00</span>
                  <span
                    className={`${
                      activeTab === "without"
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    ↑ 65.1%
                  </span>
                </div>
              </div> */}

          {/* Area Chart */}
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={activeTab === "with" ? withSpendData : withoutSpendData}
            >
              <defs>
                {activeTab === "without" ? (
                  <>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                    </linearGradient>
                  </>
                ) : (
                  <>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                    </linearGradient>
                  </>
                )}
              </defs>

              <XAxis dataKey="name" hide />
              <YAxis hide />
              <Area
                type="monotone"
                dataKey="value"
                stroke={activeTab === "without" ? "#ef4444" : "#22c55e"}
                fillOpacity={1}
                fill={
                  activeTab === "without"
                    ? "url(#colorValue)"
                    : "url(#colorValue)"
                }
                animationDuration={500}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  // details about 5c section
  const CardSection = () => (
    <>
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">
          Unlock the Full Potential of 5C Network
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover features designed to streamline diagnostics and enhance
          collaboration. From automation to AI-driven insights, experience
          efficiency like never before
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Double Check for Accuracy - Because Every Report Matters!",
            features: [
              "AI-Driven Validation: Our AI reviews every report",
              "Dual Layer Quality Check: A dedicated Quality Control QC team reviews high-quality reports",
              "Result? 100% accurate, clinically validated reports every time!",
            ],
          },
          {
            title: "Need an Urgent Report? We've Got You Covered!",
            features: [
              "No worries! Our Urgent Report Feature ensures",
              "5C NMR reports delivered within 1 hour for critical cases",
              "Zero delays in life-saving decisions",
            ],
          },
          {
            title:
              "Want a Detailed Report from Highly Experienced Radiologists?",
            features: [
              "Yes, we provide premium reports with in-depth insights",
              "Get detailed, structured, and clinically enriched reports",
              "At your fingertips",
            ],
          },
        ].map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-8 shadow-lg transition-transform transform hover:-translate-y-2 hover:scale-105"
          >
            <h3 className="font-bold text-xl mb-6">{card.title}</h3>
            <div className="space-y-4">
              {card.features.map((feature, fIndex) => (
                <div key={fIndex} className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <p className="text-gray-600">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {showMore && (
          <>
            {/* Additional Cards */}
            {[
              {
                title: "Expert Radiologist Reports - In-Depth & Reliable",
                features: [
                  "Get premium, clinically enriched reports from top radiologists.",
                  "Detailed, structured insights for better diagnosis.",
                  "Expert-reviewed reports at your fingertips.",
                ],
              },
              {
                title: "Accuracy You Can Trust - AI & QC Verified!",
                features: [
                  "AI Clinical Validation - Automated accuracy checks.",
                  "Dual-Layer Quality Control - Expert QC team review.",
                  "Every report matters, and we make sure it's perfect!",
                ],
              },
              {
                title: "Customizable Report Formats - Your Reports, Your Way!",
                features: [
                  "We offer reports in Word & PDF formats, along with custom-branded reports featuring your hospital's logo.",
                  "5C Standard Template - Optimized for seamless documentation.",
                  "Your Hospital's Own Template - Your preferred format for tailored consistency.",
                ],
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg transition-transform transform hover:-translate-y-2 hover:scale-105"
              >
                <h3 className="font-bold text-xl mb-6">{card.title}</h3>
                <div className="space-y-4">
                  {card.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <p className="text-gray-600">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      <div className="flex justify-center">
        <button
          onClick={toggleShowMore}
          className="px-8 py-3 bg-purple-600 text-white rounded-3xl hover:bg-purple-700 transition-colors"
        >
          {showMore ? "Show Less" : "More About 5C"}
        </button>
      </div>
    </>
  );

  // New Mobile App Experience Section
  const MobileAppSection = () => (
    <div className="bg-[#fdfdfd] rounded-3xl shadow-lg p-8 md:p-12 my-24">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Experience Our App - Anytime, Anywhere
          </h2>
          <p className="text-gray-600">
            Our app is available on both the App Store and Play Store, offering
            you:
          </p>

          <div className="space-y-4">
            {[
              { title: "Seamless Access", desc: "Use our services on the go." },
              { title: "Intuitive Design", desc: "Navigate with ease." },
              {
                title: "Instant Updates",
                desc: "Stay informed with real-time notifications.",
              },
              {
                title: "Enhanced Features",
                desc: "Get the best of speed, reliability, and efficiency in one app.",
              },
            ].map((feature, index) => (
              <div key={index} className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <div>
                  <p className="font-semibold">{feature.title}</p>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4 mt-8">
            <button
              className="px-8 py-3 bg-purple-600 text-white rounded-3xl hover:bg-purple-700 transition-colors inline-flex items-center gap-2"
              onClick={() =>
                window.open(
                  "https://apps.apple.com/in/app/5c-network/id6479616840",
                  "_blank"
                )
              }
            >
              <img src={appstore} alt="App Store" className="w-5 h-5" />
              <span>App Store</span>
            </button>
            <button
              className="px-8 py-3 bg-gray-900 text-white rounded-3xl hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=db.com.a5c&pcampaignid=web_share",
                  "_blank"
                )
              }
            >
              <img src={playstore} alt="Play Store" className="w-5 h-5" />
              <span>Google Play</span>
            </button>
          </div>
        </div>

        <div className="relative">
          <img
            src={mobileGif}
            alt="Mobile Preview"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );

  // FAQ Section
  const FAQSection = () => (
    <div className="p-8 md:p-12 my-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Curious? Find Your Answers Here!
      </h2>

      <div className="space-y-4 max-w-3xl mx-auto">
        {[
          {
            id: "refer",
            question: "Does 5C Require a High-End System?",
            answer:
              "Nope! All you need is a Windows PC running Windows 7 or later and a basic internet connection. There is no need for expensive setups or complex software.",
          },
          {
            id: "how",
            question: "What if I Need a Second Opinion?",
            answer:
              "Yes, we've got an option! If you need another expert review, simply send the case for 'Rework' - we'll provide a detailed second opinion.Because every report deserves a fresh perspective!",
          },
          {
            id: "conditions",
            question: "Do 5C Operate Only from 9 AM - 9 PM?",
            answer:
              "No! We are a 24/7 Radiology Platform.Reports anytime, anywhere - No waiting, no delays.",
          },
          {
            id: "track",
            question: "What Does AI Do in 5C?",
            answer:
              "Our AI is trained to Effectively classify normal & abnormal medical images and Enhance accuracy, reduce errors, and optimize report generation.",
          },
        ].map((faq) => (
          <div key={faq.id} className="border rounded-lg">
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center"
              onClick={() =>
                setActiveAccordion(activeAccordion === faq.id ? "" : faq.id)
              }
            >
              <span className="font-medium">{faq.question}</span>
              <span className="text-2xl">
                {activeAccordion === faq.id ? "−" : "+"}
              </span>
            </button>
            {activeAccordion === faq.id && (
              <div className="px-6 py-4 bg-gray-50">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  // Contact Form Section
  const ContactSection = () => {
    const [formData, setFormData] = useState({
      organizationName: "",
      contactPersonName: "",
      contactNumber: "",
      email: "",
      message: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });

      // Clear error for that field on change
      setErrors({ ...errors, [name]: "" });
    };

    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const validateContactNumber = (number) => {
      const phoneRegex = /^\d{10}$/; // Adjust regex based on your requirements
      return phoneRegex.test(number);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      let newErrors = {};

      if (!formData.organizationName) {
        newErrors.organizationName = "Organization Name is required.";
      }

      if (!formData.contactPersonName) {
        newErrors.contactPersonName = "Contact Person Name is required.";
      }

      if (
        !formData.contactNumber ||
        !validateContactNumber(formData.contactNumber)
      ) {
        newErrors.contactNumber =
          "Valid Contact Number is required (10 digits).";
      }

      if (!formData.email || !validateEmail(formData.email)) {
        newErrors.email = "Valid Email is required.";
      }

      // If there are errors, update state and return early
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
      try {
        const payload = {
          "Form-name": "lead-Page",
          "First name": formData.contactPersonName,
          Email: formData.email,
          "Mobile Number": formData.contactNumber,
          "Organization Name": formData.organizationName,
          Message: formData.message,
        };
        const response = await NocoFetch.createDemoRequestEntry(payload);

        const leadRequestAlertAttributes = {
          organization_name: formData.organizationName,
          client_name: formData.contactPersonName,
          email: formData.email,
          mobile_number: formData.contactNumber,
          message: formData.message,
        };

        await slackAlerts.leadRequestAlert(leadRequestAlertAttributes);
        if (response.status === 200) {
          setFormData({
            organizationName: "",
            contactPersonName: "",
            contactNumber: "",
            email: "",
            message: "",
          });
        } else {
          throw new Error("Failed to submit form");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    };

    return (
      <div
        ref={formRef}
        className="bg-white rounded-3xl shadow-lg p-8 md:p-12 my-24"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          LET'S GET STARTED!
        </h2>
        <p className="text-gray-600 mb-12 text-center">
          Want to explore our platform? It's easy! Just fill out the form,
          submit, and we'll guide you from there.
        </p>

        <div className="max-w-2xl mx-auto">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Organization Name
              </label>
              <input
                type="text"
                name="organizationName"
                value={formData.organizationName}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition duration-200 ease-in-out ${
                  errors.organizationName ? "border-red-500" : ""
                }`}
              />
              {errors.organizationName && (
                <p className="text-red-500 text-sm">
                  {errors.organizationName}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Person Name
              </label>
              <input
                type="text"
                name="contactPersonName"
                value={formData.contactPersonName}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition duration-200 ease-in-out ${
                  errors.contactPersonName ? "border-red-500" : ""
                }`}
              />
              {errors.contactPersonName && (
                <p className="text-red-500 text-sm">
                  {errors.contactPersonName}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Number
              </label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition duration-200 ease-in-out ${
                  errors.contactNumber ? "border-red-500" : ""
                }`}
              />
              {errors.contactNumber && (
                <p className="text-red-500 text-sm">{errors.contactNumber}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition duration-200 ease-in-out ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Leave a Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition duration-200 ease-in-out`}
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 ease-in-out"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="min-h-screen bg-gray-50 pt-[120px] pb-8 mb-8">
        <HeroSection />
        <div className="max-w-6xl mx-auto px-4 space-y-12">
          <FlowChartSection />
          <GraphSection />
          <CardSection />
          <MobileAppSection />
          <FAQSection />
          <ContactSection />
        </div>
        <FloatingButton />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default TeleradiologyLanding;
