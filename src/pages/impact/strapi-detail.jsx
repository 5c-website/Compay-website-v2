import React, { useState } from "react";
import { useLocation, navigate } from "@reach/router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useStrapiItem } from "../../hooks/use-strapi";
import { COLLECTION_TYPES } from "../../services/strapi";
import { STRAPI_URL } from "../../utils/constants";
import prodigiImg from "../../../public/img/ai-products/prodigi_three.png";
import prodigiScanner from "../../../public/img/blog-info/blog_scan.png";
import bgImg from "../../../public/img/blog-info/blog_contact.png";
import { slackAlerts } from "../../api/SlackTiggers";
import { NocoFetch } from "../../api/NocoDBEndpoints";
import { ToastContainer, toast } from "react-toastify";

const CONTENT_BLOCK_TYPES = {
  RICH_TEXT: "shared.rich-text",
  QUOTE: "shared.quote",
  MEDIA: "shared.media",
  SLIDER: "shared.slider",
};
const CONTENT_TYPE_CONFIG = {
  blogs: {
    collection: COLLECTION_TYPES.ARTICLES,
    backRoute: "/impact/blogs/",
    backLabel: "Back to Blogs",
  },
  "case-studies": {
    collection: COLLECTION_TYPES.CASE_STUDIES,
    backRoute: "/impact/case-study/",
    backLabel: "Back to Case Studies",
  },
  newsroom: {
    collection: COLLECTION_TYPES.NEWSROOM,
    backRoute: "/impact/newsroom/",
    backLabel: "Back to Newsroom",
  },
};

function UniversalContentDetail() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const notify = () => toast("Demo Request submitted");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    hospitalName: "",
  });

  const pathSegments = location.pathname.split("/").filter(Boolean);
  const slug = pathSegments[pathSegments.length - 1] || "";

  const contentType =
    searchParams.get("type") ||
    searchParams.get("contentType") ||
    detectContentTypeFromPath(location.pathname) ||
    "blogs";

  const config = CONTENT_TYPE_CONFIG[contentType] || CONTENT_TYPE_CONFIG.blogs;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const payload = {
        "Form-name": "Book-a-demo",
        "First name": formData.fullName,
        Email: formData.email,
        "Mobile Number": formData.phoneNumber,
        "Diagnostic Center Name": formData.hospitalName,
      };
      const response = await NocoFetch.createDemoRequestEntry(payload);

      const demoRequestAlertAttributes = {
        client_name: formData.fullName,
        email: formData.email,
        mobile_number: formData.phoneNumber,
        hospitalName: formData.hospitalName,
      };
      await slackAlerts.demoRequestAlert(demoRequestAlertAttributes);
      if (response.status === 200) {
        notify();
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          hospitalName: "",
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      hospitalName: "",
    });
  };

  const handleBackNavigation = () => {
    const referrer = document.referrer;
    const currentDomain = window.location.origin;
    if (
      referrer &&
      referrer.startsWith(currentDomain) &&
      !referrer.includes(location.pathname)
    ) {
      navigate(-1);
    } else {
      window.location.href = config.backRoute;
    }
  };

  const {
    data: content,
    loading,
    error,
  } = useStrapiItem(config.collection, slug);

  function detectContentTypeFromPath(pathname) {
    if (pathname.includes("case-study")) return "case-studies";
    if (pathname.includes("newsroom")) return "newsroom";
    if (pathname.includes("blog")) return "blogs";
    return null;
  }

  const renderContentBlock = (block) => {
    switch (block.__component) {
      case CONTENT_BLOCK_TYPES.RICH_TEXT:
        return (
          <div
            key={block.id}
            className="prose prose-lg prose-gray max-w-none mb-6"
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={getMarkdownComponents()}
            >
              {block.body}
            </ReactMarkdown>
          </div>
        );

      case CONTENT_BLOCK_TYPES.QUOTE:
        return (
          <blockquote
            key={block.id}
            className="border-l-4 border-[#1B3366] pl-6 my-8 italic bg-gray-50 p-6 rounded-r-lg"
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={getMarkdownComponents()}
            >
              {block.body}
            </ReactMarkdown>
            {block.title && (
              <footer className="text-lg font-medium text-gray-600">
                — {block.title}
              </footer>
            )}
          </blockquote>
        );

      case CONTENT_BLOCK_TYPES.MEDIA:
        return (
          block.media?.data && (
            <figure key={block.id} className="my-8">
              <img
                src={`${STRAPI_URL}${
                  block.media.data.attributes?.url || block.media.url
                }`}
                alt={
                  block.media.data.attributes?.alternativeText ||
                  block.media.alternativeText ||
                  ""
                }
                className="w-full h-auto max-w-full rounded-lg shadow-lg object-contain"
              />
            </figure>
          )
        );

      case CONTENT_BLOCK_TYPES.SLIDER:
        return (
          block.files?.data &&
          block.files.data.length > 0 && (
            <div key={block.id} className="my-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {block.files.data.map((file) => (
                  <img
                    key={file.id}
                    src={`${STRAPI_URL}${file.attributes?.url || file.url}`}
                    alt={
                      file.attributes?.alternativeText ||
                      file.alternativeText ||
                      ""
                    }
                    className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-lg shadow-md"
                  />
                ))}
              </div>
            </div>
          )
        );

      default:
        return null;
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getTitle = (content) => {
    return content["5cNetwork"] || content.title || "Untitled";
  };

  const getDescription = (content) => {
    return content["5cNetworkDescription"] || content.description || "";
  };

  const getMarkdownComponents = () => ({
    p: ({ node, ...props }) => (
      <p className="mb-4 text-gray-700 leading-relaxed" {...props} />
    ),
    h1: ({ node, ...props }) => (
      <h1 className="text-3xl mb-4 font-bold text-gray-900" {...props} />
    ),
    h2: ({ node, ...props }) => (
      <h2 className="text-2xl mb-4 font-bold text-gray-900" {...props} />
    ),
    h3: ({ node, ...props }) => (
      <h3 className="text-xl mb-4 font-bold text-gray-900" {...props} />
    ),
    ul: ({ node, ...props }) => (
      <ul className="list-disc ml-6 mb-4" {...props} />
    ),
    ol: ({ node, ...props }) => (
      <ol className="list-decimal ml-6 mb-4" {...props} />
    ),
    li: ({ node, ...props }) => <li className="mb-2" {...props} />,
    blockquote: ({ node, ...props }) => (
      <blockquote
        className="border-l-4 border-[#1B3366] pl-6 my-8 italic bg-gray-50 p-6 rounded-r-lg"
        {...props}
      />
    ),
    img: ({ node, ...props }) => (
      <figure key={node.position} className="my-8">
        <img
          src={
            props.src.startsWith("http")
              ? props.src
              : `${STRAPI_URL}${props.src.replace(/^\/strapi/, "")}`
          }
          alt={props.alt || ""}
          className="w-full h-auto max-w-full rounded-lg shadow-lg object-contain"
        />
      </figure>
    ),
    a: ({ node, ...props }) => {
      const isExternalLink =
        props.href &&
        (props.href.startsWith("http") || props.href.startsWith("//"));
      return (
        <a
          className="text-[#1B3366] hover:underline"
          target={isExternalLink ? "_blank" : undefined}
          rel={isExternalLink ? "noopener noreferrer" : undefined}
          {...props}
        />
      );
    },
    strong: ({ node, ...props }) => (
      <strong className="font-semibold" {...props} />
    ),
    em: ({ node, ...props }) => <em className="italic" {...props} />,
    code: ({ node, ...props }) => (
      <code className="bg-gray-100 px-2 py-1 rounded-md text-sm" {...props} />
    ),
    pre: ({ node, ...props }) => (
      <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto" {...props} />
    ),
    hr: ({ node, ...props }) => (
      <hr className="my-8 border-gray-300" {...props} />
    ),
  });

  if (loading) {
    return (
      <>
        <div>
          <header>
            <Navbar />
          </header>
        </div>
        <div className="w-full flex flex-col justify-center items-center pt-[90px] min-h-screen">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1B3366]"></div>
          </div>
        </div>
        <footer>
          <Footer />
        </footer>
      </>
    );
  }

  if (error || !content) {
    return (
      <>
        <div>
          <header>
            <Navbar />
          </header>
        </div>
        <div className="w-full flex flex-col justify-center items-center pt-[90px] min-h-screen">
          <div className="text-center text-red-500 min-h-[400px] flex items-center justify-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Error</h2>
              <p>{error || "Content not found"}</p>
              <button
                className="mt-4 px-4 py-2 bg-[#1B3366] text-white rounded hover:bg-blue-700 transition-colors"
                onClick={() => navigate(-1)}
              >
                ← Back
              </button>
            </div>
          </div>
        </div>
        <footer>
          <Footer />
        </footer>
      </>
    );
  }

  return (
    <>
      <div>
        <header>
          <Navbar />
        </header>
      </div>
      <div className="w-[100%] flex flex-col justify-center items-center pt-[55px] pb-[14px]">
        <ToastContainer />
        <div className="bg-[#F3F7FF] h-[16vh] flex flex-col justify-center items-center w-[100%] my-4">
          <h1 className="text-[#000] text-[18px] font-bold md:text-[24px] text-center px-[4px] md:px-[10px]">
            {getTitle(content)}
          </h1>
        </div>

        <div className="md:min-h-[80vh] w-[100%] flex flex-col md:flex-row justify-center items-start max-w-[1920px] mx-auto">
          <div className="w-[90%] md:w-[22vw] my-2 mx-auto bg-[#F3F7FF] py-2 md:py-0 px-2 md:px-0 md:h-[50vh] flex flex-col justify-around items-center rounded-xl md:order-0 order-1">
            <h1
              className="font-bold text-[18px] md:text-[26px] text-center bg-clip-text text-transparent uppercase"
              style={{
                backgroundImage: "linear-gradient(180deg, #EA4335, #CC0000)",
              }}
            >
              try Our Mobile App
            </h1>
            <p className="text-[#1B3363] text-[14px] md:font-[16px] text-center my-2 md:my-0">
              For the first time in India Award Winning Mobile App for Radiology
            </p>
            <div className="flex flex-row justify-center items-center my-2 md:my-0">
              <div className="flex flex-col justify-center items-center  w-[60%] gap-2">
                <div className="flex flex-row justify-start items-center w-[80%] gap-3">
                  <img
                    src={prodigiImg}
                    className="h-[25px] w-[30px]"
                    alt="img"
                  />
                  <p className="text-[#000] text-[14px] font-medium">
                    Case Activation
                  </p>
                </div>
                <div className="flex flex-row justify-start items-center w-[80%] gap-3">
                  <img
                    src={prodigiImg}
                    className="h-[25px] w-[30px]"
                    alt="img"
                  />
                  <p className="text-[#000] text-[14px] font-medium">
                    Report Download
                  </p>
                </div>
                <div className="flex flex-row justify-start items-center w-[80%] gap-3">
                  <img
                    src={prodigiImg}
                    className="h-[25px] w-[30px]"
                    alt="img"
                  />
                  <p className="text-[#000] text-[14px] font-medium">
                    Notification Alerts
                  </p>
                </div>
                <div className="flex flex-row justify-start items-center w-[80%] gap-3">
                  <img
                    src={prodigiImg}
                    className="h-[25px] w-[30px]"
                    alt="img"
                  />
                  <p className="text-[#000] text-[14px] font-medium">
                    {" "}
                    Report Sharing{" "}
                  </p>
                </div>
                <div className="flex flex-row justify-start items-center w-[80%] gap-3">
                  <img
                    src={prodigiImg}
                    className="h-[25px] w-[30px]"
                    alt="img"
                  />
                  <p className="text-[#000] text-[14px] font-medium">
                    {" "}
                    Multi-Lingual
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-[40%]">
                <img
                  src={prodigiScanner}
                  className="h-[100%] w-[90%]"
                  alt="img"
                />
              </div>
            </div>
            <div className="flex flex-row justify-center items-center">
              <button className="bg-[#1B3363] rounded-full text-[16px] md:text-[18px] text-[#fff] px-2 md:px-3 py-1 md:py-2">
                Download Now
              </button>
            </div>
          </div>
          <div className="w-[90%] mx-auto md:w-[52vw] lg:max-w-[1200px] md:min-h-[50vh] md:max-h-[78vh] md:overflow-y-scroll order-0 md:order-1">
            <div className="flex flex-col justify-center items-center w-[100%]">
              <button
                className="mb-6 px-4 py-2 text-[#1B3366] border border-[#1B3366] rounded hover:bg-[#1B3366] hover:text-white transition-colors self-start"
                onClick={handleBackNavigation}
              >
                ← Back
              </button>
              <div className="mb-8 w-full">
                <div className="flex items-center gap-4 mb-4">
                  {content.category && (
                    <span className="px-3 py-1 bg-[#1B3366] text-white text-sm rounded-full">
                      {content.category.name}
                    </span>
                  )}
                  <span className="text-gray-600 text-sm">
                    {formatDate(content.publishedAt)}
                  </span>
                  {content.author && (
                    <span className="text-gray-600 text-sm">
                      By {content.author.name}
                    </span>
                  )}
                </div>

                {getDescription(content) && (
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    {getDescription(content)}
                  </p>
                )}
              </div>

              {content.cover && (
                <div className="mb-8 w-full">
                  <img
                    src={`${STRAPI_URL}${
                      content.cover.formats?.large?.url || content.cover.url
                    }`}
                    alt={content.cover.alternativeText || getTitle(content)}
                    className="w-full h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] object-contain md:object-cover rounded-lg shadow-lg max-w-full"
                  />
                </div>
              )}

              <div className="prose prose-lg prose-gray max-w-none w-full">
                {content.blocks?.map((block) => renderContentBlock(block))}

                {(!content.blocks || content.blocks.length === 0) &&
                  content.body && (
                    <div className="prose prose-lg prose-gray max-w-none mb-6">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={getMarkdownComponents()}
                      >
                        {content.body}
                      </ReactMarkdown>
                    </div>
                  )}
              </div>

              <div className="text-center mt-12 w-full">
                <button
                  className="px-6 py-3 bg-[#1B3366] text-white rounded hover:bg-blue-700 transition-colors"
                  onClick={handleBackNavigation}
                >
                  {config.backLabel}
                </button>
              </div>
            </div>
          </div>
          <div className="w-[90%] md:w-[22vw] min-h-[50vh] md:order-2 order-2 my-2 mx-auto">
            <div
              className="h-[100%] w-[100%] bg-cover bg-no-repeat pt-[90px] flex flex-col justify-start items-center pb-[10px] rounded-xl"
              style={{
                backgroundImage: `url(${bgImg})`,
              }}
            >
              <h1 className="text-[#000] font-bold text-[18px] md:text-[20px] my-4">
                Schedule A Live Demo Today
              </h1>
              <form onSubmit={handleSubmit} className="space-y-5 w-[90%]">
                <div>
                  <input
                    type="text"
                    value={formData.fullName}
                    name="fullName"
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    value={formData.email}
                    name="email"
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="flex items-center">
                  <div className="w-2/6">
                    <div className="border border-gray-300 rounded-md px-2 py-3 bg-gray-100 flex flex-row justify-center gap-3 items-center">
                      <span> 🇮🇳 </span>
                      <span className="flex items-center justify-center">
                        +91
                      </span>
                    </div>
                  </div>
                  <div className="w-5/6">
                    <input
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      name="phoneNumber"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ml-2"
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    value={formData.hospitalName}
                    name="hospitalName"
                    onChange={handleInputChange}
                    placeholder="Diagnostic/Hospital Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="text-center mt-6">
                  <button className="bg-[#1B3363] rounded-full text-[#fff] px-3 py-2">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default UniversalContentDetail;
