import React from "react";
import { useState } from "react";
import { navigate } from "gatsby";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Popup from "./Popup";
import { slackAlerts } from "../api/SlackTiggers";
import { NocoFetch } from "../api/NocoDBEndpoints";
import { PlatformApi } from "../api/PlatformApi";

function ReachUs() {
  const notify = () => toast("Successfully submitted");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [position, setposition] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [cvDriveLink, setcvDriveLink] = useState("");
  const [coverLetter, setcoverLetter] = useState("");
  const [selecteddepartment, setSelecteddepartment] = useState("Engineering");
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const department = [
    "Engineering",
    "Human Resource",
    "Product",
    "Sales",
    "Delivery",
    "IT",
    "Finance",
    "AI",
  ];

  const handleIconClick = (event) => {
    setIsSubmitting(true);
    event.preventDefault();
    navigate(`/company/careers`);
  };

  const handleSelectChange = (e) => {
    setSelecteddepartment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = {
      first_name: firstname,
      last_name: lastname,
      email: email,
      phone_number: phonenumber,
      department: selecteddepartment,
      position: position,
      cover_letter: coverLetter,
      cv_drive_link: cvDriveLink,
    };

    try {
      await PlatformApi.sendCareerApplicationMailToHR(formData);
    } catch (error) {
      console.error("Error sending career application to HR:", error);
    }

    try {
      const response = await NocoFetch.createJobApplicationEntry(formData);
      await slackAlerts.jobRequestAlert(formData);

      if (response.status === 200) {
        setShowPopup(true);
        notify();
        // Reset form fields
        setfirstname("");
        setlastname("");
        setposition("");
        setEmail("");
        setphonenumber("");
        setcoverLetter("");
        setSelecteddepartment("");
        setcvDriveLink("");
      } else {
        throw new Error("Failed to send data to Slack");
      }
    } catch (error) {
      console.error("Error submitting form to Slack:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Careers-Form</title>
        <meta
          name="description"
          content="Unlock your future with our career form – your gateway to exciting opportunities and professional growth. Submit your details and take the first step towards a fulfilling career"
        />
        <meta
          name="google-site-verification"
          content="google3324f12ef9a97f3e"
        />
      </Helmet>
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <ToastContainer />
        <div className=" absolute top-[20px] bottom-auto left-auto right-[20px]">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios-filled/50/delete-sign--v1.png"
            alt="delete-sign--v1"
            className="cursor-pointer"
            onClick={handleIconClick}
          />
        </div>
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Careers @ 5C Network
          </h2>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e, {
              firstname,
              lastname,
              position,
              email,
              phonenumber,
              coverLetter,
              selecteddepartment,
              cvDriveLink,
            });
          }}
          method="POST"
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  required
                  value={firstname}
                  onChange={(e) => setfirstname(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  value={lastname}
                  onChange={(e) => setlastname(e.target.value)}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Phone number
              </label>
              <div className="relative mt-2.5">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    className="h-full  rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm"
                  >
                    <option>+91</option>
                    <option>+1</option>
                    <option> +51</option>
                    <option> +44</option>
                    <option> +966</option>
                    <option>+971</option>
                    <option>+974</option>
                    <option>+234</option>
                  </select>
                </div>
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 px-3.5 py-2 pl-[6rem] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  value={phonenumber}
                  required
                  onChange={(e) => setphonenumber(e.target.value)}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="position"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Department
              </label>
              <div className="relative mt-2.5">
                <select
                  className=" w-full border-2 p-2 focus:outline-none bg-white rounded-md "
                  id="department"
                  name="department"
                  value={selecteddepartment}
                  required
                  onChange={handleSelectChange}
                >
                  {department.map((item, i) => (
                    <option value={item} key={i}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="position"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Position
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="Position"
                  id="Position"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  value={position}
                  required
                  onChange={(e) => setposition(e.target.value)}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Cover Letter
              </label>
              <div className="mt-2.5">
                <textarea
                  name="coverLetter"
                  id="coverLetter"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  defaultValue={""}
                  value={coverLetter}
                  onChange={(e) => setcoverLetter(e.target.value)}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="flex gap-[0.5rem]">
                <label
                  htmlFor="position"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  CV Google Drive Link
                </label>
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/ios-filled/50/link--v1.png"
                  alt="link--v1"
                />
              </div>
              <div className="relative mt-2.5">
                <input
                  type="text"
                  name="Resume"
                  id="Resume"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  value={cvDriveLink}
                  required
                  onChange={(e) => setcvDriveLink(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              disabled={isSubmitting || isLoading}
              className="block w-full rounded-md bg-[#152D5B] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600  toast-btn"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin flex justify-center items-center rounded-full h-6 w-6 border-b-2 border-white"></div>
                </div>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
        {showPopup && <Popup />}
      </div>
    </>
  );
}

export default ReachUs;
