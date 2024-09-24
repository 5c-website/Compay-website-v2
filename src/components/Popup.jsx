import { Fragment, useRef, useState } from 'react'
import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { navigate } from 'gatsby'

function Popup() {
  const [open, setOpen] = useState(true)

  const cancelButtonRef = useRef(null)

  return (
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className=' flex flex-col justify-center items-center m-8'>
                    <div className=" w-[9rem] mt-[2rem]" >
                    <img src="https://katturai.cubebase.ai/uploads/mail_43f992b4b8.gif" alt="mail" onClick={() => setOpen(false)} ></img>
                    </div>
                    <h2 className=" font-bold text-[2rem]">Thank You</h2>
                    <p className="m-[2rem] text-center">Your request has been completed. One of our team expert will reach out you in short time</p>
                    <button className=" Dialog-button" role="button" onClick={()=>navigate("/company/careers/")}>Back to site</button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Popup;