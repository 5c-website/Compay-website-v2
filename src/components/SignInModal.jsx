import React from "react";
import clientImage from "../../public/img/sign_in/client.png";
import radImage from "../../public/img/sign_in/rads.png";

const SignInModal = () => {
  return (
    <div className="bg-white rounded-lg p-4 sm:p-8 w-full max-w-md sm:max-w-2xl">
      <div className="flex gap-8 flex-col sm:flex-row justify-between sm:space-x-8 space-y-8 sm:space-y-0">
        <div
          className="flex flex-col items-center cursor-pointer group"
          onClick={() => window.open("https://client.5cnetwork.com", "_blank")}
        >
          <div className="w-36 h-36 sm:w-48 sm:h-48 bg-white-200 rounded-full flex items-center justify-center mb-4 overflow-hidden transition-transform duration-300 ease-in-out group-hover:scale-110">
            <img
              src={clientImage}
              alt="Hospital icon"
              className="w-28 h-18 sm:w-36 sm:h-36 transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
          </div>
          <p className="text-center font-semibold text-sm sm:text-base">
            HOSPITAL/DIAGNOSTIC CENTRE
          </p>
        </div>

        <div
          className="flex flex-col items-center cursor-pointer group"
          onClick={() => window.open("https://rads.5cnetwork.com", "_blank")}
        >
          <div className="w-36 h-36 sm:w-48 sm:h-48 bg-white-200 rounded-full flex items-center justify-center mb-4 overflow-hidden transition-transform duration-300 ease-in-out group-hover:scale-110">
            <img
              src={radImage}
              alt="Radiologist icon"
              className="w-28 h-28 sm:w-36 sm:h-36 transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
          </div>
          <p className="text-center font-semibold text-sm sm:text-base">
            RADIOLOGIST
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
