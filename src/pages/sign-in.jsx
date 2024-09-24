import React from "react";
import Navbar from "../components/Navbar";
import SignInModal from "../components/SignInModal";

function SignIn() {
  return (
    <>
      <div>
        <header>
          <Navbar />
        </header>
      </div>
      <SignInModal />
      {/* <div className="w-[100%] flex flex-col justify-center items-center pt-[70px]">
        <h1 className="font-bold mt-4 text-[20px]">
          We're currently enhancing <span className="text-green-600">Sign In page</span> to serve you better.
        </h1>
        <h1 className="font-bold mt-4 text-[20px]">
          Please check back soon for an improved experience!
        </h1>
      </div> */}
    </>
  );
}

export default SignIn;
