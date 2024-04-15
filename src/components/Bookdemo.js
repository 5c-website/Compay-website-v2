import React from 'react'
import { useState } from 'react';

function Bookdemo() {
     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [mobileNumber, setMobileNumber] = useState('');
     const [DiagnosticFacilityName, setDiagnosticFacilityName] = useState('');
     const bearer="e56c2503ae0b35a6a98be8fad95ba56e82116b9f1f27b233579f7616a6d5f562e930c8ca887e27b062165692f353ba69275f4fe041a39f826b3dac0250fadf6a7fd271c65aff8aeab05af2dbe38a3b8e724993ac131f1e49b3076e0c9285270d550382069060aa2eca49f818fbbfa10c2ef0a485d0930d6d70e661728736f6d4";

     const handleSubmit = async (e) => {
          e.preventDefault();

          const formData = {
               data: {
                    name,
                    email,
                    mobileNumber,
                    DiagnosticFacilityName,
               }
          };

          try {
               
               const response = await fetch('https://katturai.cubebase.ai/api/bookdemodatas', {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json',
                         'Authorization': `Bearer ${bearer}`,
                    },
                    body: JSON.stringify(formData),
               });
               

               if (response.ok) {
                    setName('');
               setEmail('');
               setMobileNumber('');
               setDiagnosticFacilityName('');
               } else {
                    throw new Error('Failed to submit form');
               }
          } catch (error) {
               console.error('Error submitting form:', error);
          }
     };
     return (
          <div className=' book-demo flex flex-col w-[25%] sm:w-full sm:order-2'>

               <div className=' w-full mt-[11rem]'>

                    <div class=" bg-[#19191a] rounded-lg relative" >
                         <svg viewBox="0 0 500 100" style={{ borderRadius: '8px 8px 0 0' }}>
                              <path d="M 0 50 C 150 150 300 0 500 80 L 500 0 L 0 0" fill="rgb(57, 27, 112)"></path>
                              <path d="M 0 50 C 150 150 330 -30 500 50 L 500 0 L 0 0" fill="#0E7452" opacity="0.8"></path>
                              <path d="M 0 50 C 215 150 250 0 500 100 L 500 0 L 0 0" fill="#0E7452" opacity="0.5"></path>
                         </svg>


                         <div class="mx-auto w-full max-w-[550px] relative z-10">

                              <form onSubmit={(e) => {
                                   e.preventDefault();
                                   handleSubmit(e);
                              }} method="POST" className=' p-[2.1rem]'>
                                   <div class="mb-5">
                                        <label
                                             for="name"
                                             class="mb-3 uppercase block text-center text-2xl font-bold text-[#F5F5DC] font-use-one"
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
                                             class="mb-3 block text-base font-medium text-[#F5F5DC] font-use-one"
                                        >
                                             Full Name
                                        </label>
                                        <input
                                             type="text"
                                             name="name"
                                             id="name"
                                             value={name}
                                             onChange={(e) => setName(e.target.value)}
                                             placeholder="Full Name"
                                             required
                                             class="font-use-one w-full rounded-md border border-[#313030] bg-[#313030] py-3 px-6 text-base font-medium text-[#F5F5DC] outline-none focus:border-[#313030] focus:shadow-md"
                                        />
                                   </div>
                                   <div class="mb-5">
                                        <label
                                             for="email"
                                             class="mb-3 block text-base font-medium text-[#F5F5DC] font-use-one"
                                        >
                                             Email Address
                                        </label>
                                        <input
                                             type="email"
                                             name="email"
                                             id="email"
                                             value={email}
                                             onChange={(e) => setEmail(e.target.value)}
                                             placeholder="example@domain.com"
                                             required
                                             class=" font-use-one w-full rounded-md border border-[#313030] bg-[#313030] py-3 px-6 text-base font-medium text-[#F5F5DC] outline-none focus:border-[#313030] focus:shadow-md"
                                        />
                                   </div>
                                   <div class="mb-5">
                                        <label
                                             for="Mobile-Number"
                                             class="mb-3 block text-base font-medium text-[#F5F5DC] font-use-one"
                                        >
                                             Mobile Number
                                        </label>
                                        <input
                                             type="text"
                                             name="Mobile-Number"
                                             id="Mobile-Number"
                                             value={mobileNumber}
                                             onChange={(e) => setMobileNumber(e.target.value)}
                                             placeholder="Enter your Mobile Number"
                                             required
                                             class="font-use-one w-full rounded-md border border-[#313030] bg-[#313030] py-3 px-6 text-base font-medium text-[#F5F5DC] outline-none focus:border-[#313030] focus:shadow-md"
                                        />
                                   </div>
                                   <div class="mb-5">
                                        <label
                                             for="Mobile-Number"
                                             class="mb-3 block text-base font-medium text-[#F5F5DC] font-use-one"
                                        >
                                             Diagnostic/Hospital Name
                                        </label>
                                        <input
                                             type="text"
                                             name="Diagnostic/Hospital Name"
                                             id="Diagnostic/Hospital Name"
                                             value={DiagnosticFacilityName}
                                             onChange={(e) => setDiagnosticFacilityName(e.target.value)}
                                             placeholder="Enter your Diagnostic/Hospital Name"
                                             required
                                             class="w-full rounded-md border border-[#313030] bg-[#313030] py-3 px-6 text-base font-medium text-[#F5F5DC] outline-none focus:border-[#313030] focus:shadow-md font-use-one"
                                        />
                                   </div>
                                   <div>
                                        <button
                                             class="hover:shadow-form rounded-md bg-[#0E7452] py-3 px-8 text-base font-semibold text-white outline-none font-use-one"
                                        >
                                             Submit
                                        </button>
                                   </div>

                              </form>

                         </div>



                    </div>

               </div>

          </div>
     )
}

export default Bookdemo