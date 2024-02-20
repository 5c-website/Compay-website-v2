import React, { useState } from 'react';
import '../styles/global.css';

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [resultMessage, setResultMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const object = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });
    const json = JSON.stringify(object);

    setResultMessage('Please wait...');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const responseData = await response.json();
      if (response.status === 200) {
        setResultMessage(responseData.message);
      } else {
        setResultMessage(responseData.message);
      }
    } catch (error) {
      console.log(error);
      setResultMessage('Something went wrong!');
    }

    form.reset();
    setResultMessage('');
  };

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isOpen && (
        <div id="web3forms__widget">
          <div id="w3f__widget--content" className="fixed flex flex-col z-50 bottom-[100px] top-0 right-0 h-auto left-0 sm:top-auto sm:right-5 sm:left-auto h-[calc(100%-95px)] w-full sm:w-[350px] overflow-auto min-h-[250px] sm:h-[600px] border border-gray-300 bg-white shadow-2xl rounded-md">
            <div className="flex p-5 flex-col justify-center items-center h-32 bg-indigo-600">
              <h3 className="text-lg text-white">How can we help?</h3>
              <p className="text-white opacity-50">We usually respond in a few hours</p>
            </div>
            <div className="bg-gray-50 flex-grow p-6">
              <form action="https://api.web3forms.com/submit" method="POST" id="form" className="needs-validation" noValidate onSubmit={handleSubmit}>
                    <h1>hello</h1>
              </form>
            </div>
          </div>
          <button id="w3f__widget--btn" onClick={toggleForm} className="fixed z-40 right-5 bottom-5 shadow-lg flex justify-center items-center w-14 h-14 bg-indigo-500 rounded-full focus:outline-none hover:bg-indigo-600 focus:bg-indigo-600 transition duration-300 ease">
          {/* <svg
          class="w-6 h-6 text-white absolute"
          x-show="!open"
          x-transition:enter-start="opacity-0 -rotate-45 scale-75"
          x-transition:enter="transition duration-200 transform ease"
          x-transition:leave="transition duration-100 transform ease"
          x-transition:leave-end="opacity-0 -rotate-45"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
          ></path>
        </svg> */}

        {/* <svg
          class="w-6 h-6 text-white absolute"
          x-show="open"
          x-transition:enter-start="opacity-0 rotate-45 scale-75"
          x-transition:enter="transition duration-200 transform ease"
          x-transition:leave="transition duration-100 transform ease"
          x-transition:leave-end="opacity-0 rotate-45"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg> */}
          </button>
        </div>
      )}

      <main className="h-screen flex flex-col space-y-2 items-center justify-center bg-gray-50">
      <div class="flex flex-col items-center justify-center -translate-x-1/2"> <p class="text-center text-xl text-gray-500">Web3Forms</p>
      <h1 class="font-bold text-center text-4xl text-indigo-500">
        Contact Widget Demo
      </h1>
     <p class="text-center text-xl text-gray-500 mt-3">Please open in Full Screen ?</p>

      <div>
        {/* <svg
          class="opacity-20 ml-16 mt-6"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 415.262 415.261"
          style="enable-background: new 0 0 415.262 415.261;"
          xml:space="preserve"
        >
          <g>
            <path
              d="M414.937,374.984c-7.956-24.479-20.196-47.736-30.601-70.992c-1.224-3.06-6.12-3.06-7.956-1.224   c-10.403,11.016-22.031,22.032-28.764,35.496h-0.612c-74.664,5.508-146.88-58.141-198.288-104.652   c-59.364-53.244-113.22-118.116-134.64-195.84c-1.224-9.792-2.448-20.196-2.448-30.6c0-4.896-6.732-4.896-7.344,0   c0,1.836,0,3.672,0,5.508C1.836,12.68,0,14.516,0,17.576c0.612,6.732,2.448,13.464,3.672,20.196   C8.568,203.624,173.808,363.356,335.376,373.76c-5.508,9.792-10.403,20.195-16.523,29.988c-3.061,4.283,1.836,8.567,6.12,7.955   c30.6-4.283,58.14-18.972,86.292-29.987C413.712,381.104,416.16,378.656,414.937,374.984z M332.928,399.464   c3.673-7.956,6.12-15.912,10.404-23.868c1.225-3.061-0.612-5.508-2.448-6.12c0-1.836-1.224-3.061-3.06-3.672   c-146.268-24.48-264.996-124.236-309.06-259.489c28.764,53.244,72.828,99.756,116.28,138.924   c31.824,28.765,65.484,54.468,102.204,75.888c28.764,16.524,64.872,31.824,97.92,21.421l0,0c-1.836,4.896,5.508,7.344,7.956,3.672   c7.956-10.404,15.912-20.196,24.48-29.376c8.567,18.972,17.748,37.943,24.479,57.527   C379.44,382.94,356.796,393.956,332.928,399.464z"
            />
          </g>
        </svg> */}
      </div>
      </div>
      </main>

      <p className="text-xs text-center text-gray-400" id="result">
        {resultMessage}
      </p>
    </div>
  );
};

export default ContactForm;



