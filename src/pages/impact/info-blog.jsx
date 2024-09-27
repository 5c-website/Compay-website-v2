import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useLocation } from "@reach/router";
import prodigiImg from "../../../public/img/ai-products/prodigi_three.png";
import prodigiScanner from "../../../public/img/blog-info/blog_scan.png";
import bgImg from "../../../public/img/blog-info/blog_contact.png";
import { slackAlerts } from "../../api/SlackTiggers";
import { NocoFetch } from "../../api/NocoDBEndpoints";
import { ToastContainer, toast } from "react-toastify";

function InfoBlog() {
  const { search } = useLocation();
  const notify = () => toast("Demo Request submitted");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    hospitalName: "",
  });
  const queryParams = new URLSearchParams(search);
  const blogInfo = queryParams.get("blogInformation");

  const parsedBlogInfo = JSON.parse(blogInfo);

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
        "Mobile Number": formData.phone,
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
            {parsedBlogInfo &&
              parsedBlogInfo.length !== 0 &&
              parsedBlogInfo[0]?.title}
          </h1>
        </div>

        <div className="md:min-h-[80vh] w-[100%] flex flex-col md:flex-row justify-center items-start">
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
          <div className="w-[90%] mx-auto md:w-[52vw] md:min-h-[50vh] md:max-h-[78vh] md:overflow-y-scroll order-0 md:order-1">
            <div className="flex flex-col justify-center items-center w-[100%]">
              {parsedBlogInfo && parsedBlogInfo.length !== 0 && (
                <img
                  className="md:w-[80%] md:h-[40vh] w-[98%] h-[30vh] my-4"
                  src={parsedBlogInfo[0]?.imageUrl}
                  alt="img"
                />
              )}

              {parsedBlogInfo &&
                parsedBlogInfo.length !== 0 &&
                (parsedBlogInfo[0]?.description === null ||
                parsedBlogInfo[0]?.description ===
                  undefined ? null : parsedBlogInfo[0]?.description?.length ===
                  1 ? (
                  <p className="text-[#000] text-[16px] md:text-[18px] text-center md:px-[20px] text-justify">
                    {parsedBlogInfo[0]?.description}
                  </p>
                ) : (
                  parsedBlogInfo[0]?.description?.map((each) => {
                    return (
                      <p className="text-[#000] text-[16px] md:text-[18px] self-start md:px-[20px] text-justify mb-[14px]">
                        {each}
                      </p>
                    );
                  })
                ))}
              {parsedBlogInfo &&
                parsedBlogInfo.length !== 0 &&
                parsedBlogInfo[0]?.information?.length !== 0 && (
                  <div className="mt-5">
                    {parsedBlogInfo[0]?.information?.map((info, index) => {
                      return (
                        <div
                          key={index}
                          className="self-start md:px-[20px] my-[14px]"
                        >
                          <h1 className="text-[#000] text-[18px] md:text-[22px] font-bold text-left">
                            {info?.title}
                          </h1>
                          {info?.imageUrl !== null ? (
                            <img
                              className="md:w-[80%] md:h-[40vh] w-[98%] h-[30vh] my-2"
                              src={info?.imageUrl}
                              alt="img"
                            />
                          ) : null}
                          {info?.description?.length === 1 ? (
                            <p className="font-normal text-[#000] text-[16px] md:text-[18px] text-center text-justify mb-2">
                              {info?.description}
                            </p>
                          ) : (
                            info?.description?.map((each) => {
                              return (
                                <p className="font-normal text-[#000] text-[16px] md:text-[18px] text-center text-justify mb-4">
                                  {each}
                                </p>
                              );
                            })
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
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

export default InfoBlog;
