import React, { useState } from "react";
import Navbar from "../components/Navbar";
import contactImgBg from "../../public/img/contact_us.png";
import CompanyBanner from "../components/CompanyBanner";
import Footer from "../components/Footer";
import { NocoFetch } from "../api/NocoDBEndpoints";
import { slackAlerts } from "../api/SlackTiggers";
import Popup from "../components/Popup";

function ContactUs() {
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    help: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const payload = {
        "Form-name": "Contact-Page",
        "First name": formData.fullName,
        Email: formData.email,
        "Mobile Number": formData.phone,
        Message: formData.message,
        Category: formData.help,
      };
      const response = await NocoFetch.createDemoRequestEntry(payload);

      const demoRequestAlertAttributes = {
        client_name: formData.fullName,
        email: formData.email,
        mobile_number: formData.phone,
        category: formData.help,
        description: formData.message,
      };
      await slackAlerts.demoRequestAlert(demoRequestAlertAttributes);
      if (response.status === 200) {
        setShowPopup(true);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          help: "",
          message: "",
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div>
        <header>
          <Navbar />
        </header>
      </div>
      <div className="w-[100%] flex flex-col justify-center items-center pt-[90px] px-4 md:px-10">
        <div className="w-[100%]">
          <CompanyBanner
            img={contactImgBg}
            heading={"Get in touch!"}
            contentClassName="w-full md:w-[42%] flex flex-col justify-center"
            headerClassName="text-center md:text-left"
            descriptionClassName="text-center md:text-left"
            description={
              <>
                Have an inquiry or potential opportunity for us?
                <br /> Fill out the form to contact our team.
              </>
            }
          />
        </div>
        <div className="w-[100%] md:min-h-[30vh] my-[60px] ">
          <div className="flex flex-col-reverse md:flex-row justify-center items-center">
            <div className="w-[90%] md:w-[50%] h-[100%] md:ml-3 my-2 md:my-0 mt-12">
              <div className="flex flex-row md:justify-start md:items-start justify-center items-center">
                <h1 className="text-[#1B3363] text-center md:text-left text-[28px] md:text-[42px] font-bold">
                  Locations
                </h1>
                <div className="h-[8px] w-[8px] bg-red-500 self-end relative top-[-16px] left-[6px] md:block hidden"></div>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-start md:mt-4">
                <div className="w-[100%] md:w-[33%] border-[#000] border-solid border-b-2 md:border-r-2 md:border-b-0">
                  <p className="text-[16px] text-[#000] p-3">
                    The Radhouse, 313, 7th Main Rd, opposite Ashirwad
                    Supermarket, Mico Layout, BTM 2nd Stage, BTM Layout,
                    Bengaluru, Karnataka 560076
                  </p>
                </div>
                <div className="md:w-[33%] border-[#000] border-solid border-b-2 md:border-r-2 md:border-b-0">
                  <p className="text-[16px] text-[#000] p-3">
                    Cerebrum, above Third Wave Coffee, Mico Layout, BTM 2nd
                    Stage, BTM Layout, Bengaluru, Karnataka 560076
                  </p>
                </div>
                <div className="md:w-[33%] border-[#000] border-solid border-b-2 md:border-none md:border-b-0">
                  <p className="text-[16px] text-[#000] p-3">
                    Neocortex, Covai Tech Park, Indira Nagar, Civil Aerodrome
                    Post, Nehru Nagar, Coimbatore, Tamil Nadu 641014
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[94%] md:w-[50%] h-[100%]">
              <div className="flex flex-col justify-between items-center position-none lg:absolute w-full lg:w-1/2">
                <div className="md:min-h-[550px] w-full lg:w-[500px] rounded-2xl bg-white shadow-lg p-8 position-none lg:absolute -top-[30rem] left-[20%]">
                  <h1 className="text-center font-bold text-[#1B3363] text-[24px] md:text-[30px] my-2">
                    {" "}
                    Schedule a Demo{" "}
                  </h1>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        required
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1B3363]"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Email Address"
                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1B3363]"
                      />
                    </div>

                    <div>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                          🇮🇳 +91
                        </span>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="Phone Number"
                          className="flex-1 block w-full px-4 py-3 border border-gray-300 rounded-r-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1B3363]"
                        />
                      </div>
                    </div>

                    <div>
                      <input
                        type="text"
                        name="help"
                        value={formData.help}
                        required
                        onChange={handleChange}
                        placeholder="How can we help?"
                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1B3363]"
                      />
                    </div>

                    <div>
                      <textarea
                        rows={3}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Leave a message"
                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1B3363]"
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full bg-[#1C3363] text-white font-semibold py-3 rounded-lg shadow hover:bg-[#1B3363] transition duration-300"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="flex items-center justify-center">
                            <div className="animate-spin flex justify-center items-center rounded-full h-6 w-6 border-b-2 border-white"></div>
                          </div>
                        ) : (
                          "Contact"
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
      {showPopup && <Popup />}
    </>
  );
}

export default ContactUs;
