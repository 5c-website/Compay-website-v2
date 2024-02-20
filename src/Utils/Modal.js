import React from 'react'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {ToastContainer} from "react-toastify"
import { useForm, ValidationError } from '@formspree/react';

function Modal() {
  const [open, setOpen] = useState(true)
  const cancelButtonRef = useRef(null)
  const [state, handleSubmit] = useForm("xpzvdnkn");
  if (state.succeeded) {
      return <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />;
  }


  return (
    <>
    <ToastContainer />
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-[#19191a] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <svg viewBox="0 0 500 100">
  <path d="M 0 50 C 150 150 300 0 500 80 L 500 0 L 0 0" fill="rgb(57, 27, 112)"></path>
  <path d="M 0 50 C 150 150 330 -30 500 50 L 500 0 L 0 0" fill="#0E7452" opacity="0.8"></path>
 <path d="M 0 50 C 215 150 250 0 500 100 L 500 0 L 0 0" fill="#0E7452" opacity="0.5"></path>
</svg>
              <form onSubmit={handleSubmit} className=' p-[2.1rem]'>
                      <div class="mb-5">
                        <label
                          for="name"
                          class="mb-3 uppercase block text-center text-2xl font-medium text-[#F5F5DC]"
                        >
                          Schedule a Live Demo Today
                        </label>
                        {/* <label
                          for="name"
                          class="mb-3 font-use block text-center items-center text-[12px] text-[#F5F5DC]"
                        >
                          Our friendly team of experts will be in touch to provide your personalized people strategy assessment.
                        </label> */}
                      </div>
                      {/* <div class="mb-5">
                        <label
                          for="name"
                          class="mb-3 font-use block text-center items-center text-[14px] text-[#F5F5DC]"
                        >
                          Our friendly team of experts will be in touch to provide your personalized people strategy assessment.
                        </label>
                      </div> */}
                      <div class="mb-5">
                        <label
                          for="name"
                          class="mb-3 block text-base font-medium text-[#F5F5DC]"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Full Name"
                          required
                          class="w-full rounded-md border border-[#313030] bg-[#313030] py-3 px-6 text-base font-medium text-[#F5F5DC] outline-none focus:border-[#313030] focus:shadow-md"
                        />
                      </div>
                      <div class="mb-5">
                        <label
                          for="email"
                          class="mb-3 block text-base font-medium text-[#F5F5DC]"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="example@domain.com"
                          required
                          class="w-full rounded-md border border-[#313030] bg-[#313030] py-3 px-6 text-base font-medium text-[#F5F5DC] outline-none focus:border-[#313030] focus:shadow-md"
                        />
                      </div>
                      <div class="mb-5">
                        <label
                          for="Mobile-Number"
                          class="mb-3 block text-base font-medium text-[#F5F5DC]"
                        >
                          Mobile Number
                        </label>
                        <input
                          type="text"
                          name="Mobile-Number"
                          id="Mobile-Number"
                          placeholder="Enter your Mobile Number"
                          required
                          class="w-full rounded-md border border-[#313030] bg-[#313030] py-3 px-6 text-base font-medium text-[#F5F5DC] outline-none focus:border-[#313030] focus:shadow-md"
                        />
                      </div>
                      <div class="mb-5">
                        <label
                          for="Mobile-Number"
                          class="mb-3 block text-base font-medium text-[#F5F5DC]"
                        >
                          Diagnostic/Hospital Name
                        </label>
                        <input
                          type="text"
                          name="Diagnostic/Hospital Name"
                          id="Diagnostic/Hospital Name"
                          placeholder="Enter your Diagnostic/Hospital Name"
                          required
                          class="w-full rounded-md border border-[#313030] bg-[#313030] py-3 px-6 text-base font-medium text-[#F5F5DC] outline-none focus:border-[#313030] focus:shadow-md"
                        />
                      </div>
                      <div>
                        <button
                          class="hover:shadow-form rounded-md bg-[#0E7452] py-3 px-8 text-base font-semibold text-white outline-none"
                        >
                          Submit
                        </button>
                      </div>

                    </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root></>
  )
}

export default Modal