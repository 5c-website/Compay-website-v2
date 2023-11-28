import React,{ useEffect }  from 'react'
import '../styles/global.css'
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import { navigate } from 'gatsby';
import { useForm } from '@formspree/react';
import { Alert } from "flowbite-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ReachUs() {
    const [agreed, setAgreed] = useState(false)
    const [state, handleSubmit] = useForm("myyqardv");
    const [submitted, setSubmitted] = useState(false);
    const notify = () => toast("Successfully submitted");
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [selectedValue, setSelectedValue] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('');
    const genre = ['Radiologist', 'Clinicians', 'Hospitals', 'Diagnostic centers','Healthcare aggregators'];

    
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }

      useEffect(() => {
        if (state.succeeded && submitted) {
          notify();
          setFirstName('');
          setLastName('');
          setCompany('');
          setEmail('');
          setPhoneNumber('');
          setMessage('');
          setSelectedGenre('');
        }   
      }, [state.succeeded, submitted]);

     
  

  const handleSelectChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const handleIconClick = (event) => {
    event.preventDefault()

    navigate(-1)
  };
        
    
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <ToastContainer />
      <div className=' absolute top-[20px] bottom-auto left-auto right-[20px]'>
      <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/delete-sign--v1.png" alt="delete-sign--v1" className='cursor-pointer' onClick={handleIconClick}/>
      </div>
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Reach Us</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
        Your Door to Join India’s leading AI Powered Radiology Group opens here!
        </p>
      </div>
      <form  onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(e,{
                  firstName,
                  lastName,
                  company,
                  email,
                  phoneNumber,
                  message,
                  selectedGenre,
                });
                setSubmitted(true);
                
            }} method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20"> 
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6" required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
              Company
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
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
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>
         
      <select
        className=" border-2 p-2 focus:outline-none bg-white rounded-md "
        id="designation"
        name="designation"
        value={selectedGenre}
        onChange={handleSelectChange}
      >
        {genre.map((item, i) => (
          <option value={item} key={i}>
            {item}
          </option>
        ))}
      </select>

          
          
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                defaultValue={''}
                value={message}
                  onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? 'bg-[#00d4ff]' : 'bg-gray-200',
                  'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? 'translate-x-3.5' : 'translate-x-0',
                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold text-[#00d4ff]">
                privacy&nbsp;policy
              </a>
              .
            </Switch.Label>
          </Switch.Group>
        </div>
        <div className="mt-10">
          <button 
            type="submit"
            className="block w-full rounded-md bg-[black] px-3.5 py-2.5 text-center text-sm font-semibold text-[#00d4ff] shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600  toast-btn"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  )
}

export default ReachUs
