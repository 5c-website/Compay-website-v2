import React from 'react'
import playstore from '../Assets/privacypolicy/playstore.png'

function mobileapp() {
    const listItems = [
        { text: 'Case Activation' },
        { text: 'Report Download' },
        { text: 'Notification alerts' },
        { text: 'Report Sharing' },
        { text: 'Multi-lingual' }
      ];
  return (
    <>
    <div className=' bg-[#19191a] p-[2rem] mt-[8rem] rounded-lg ribbon-box relative '>
    <div class="ribbon"><span className=' tracking-[2px]'>New</span></div>

    <div className=' items-center flex'>

    <div className=' pl-[5px] pr-[5px] text-center flex justify-center relative grow-0 shrink-0 basis-full'>
        <span className=' break-words leading-[1.5]'>
            <div className=' uppercase text-[#CB110A] text-[2.7rem] mb-0 leading-[1.5]'>5c mobile app</div>
            <div className=' text-center text-[0.9rem] text-[#1677FF] mt-[1rem] mb-0 leading-[1.5]'>For the first time in India:</div>
            <div className='text-center text-[0.9rem] text-[#1677FF] mb-0 leading-[1.5]'>Award Winning Mobile App for Radiology</div>
        </span>
    </div>
    </div>
    <div className=' flex justify-between mt-[2rem]'>
        <div className=' flex flex-col justify-center'>
        {listItems.map((item, index) => (
              <li key={index} className='flex text-[1rem] items-center mt-[0.2rem] text-[#fff] font-use tracking-[1.5px]'>
                <div className='h-[1.4rem] w-[1.4rem] flex justify-center flex-col text-center mx-[0.625rem] my-0 '>
                  <img src='https://client.5cnetwork.com/Icons/logo_5c.svg' alt='5c Logo' />
                </div>
                {item.text}
              </li>
            ))}
            <a href=' https://play.google.com/store/apps/details?id=db.com.a5c' target='_blank'>
            <button className=' text-center flex justify-center items-center h-[3rem] rounded-full pr-[1.5rem] text-[1rem] mt-[2rem] bg-[#1677FF] text-[#fff] border-[#1677ff] outline-none relative px-[11px] py-[4px]'>
                <div className=' h-[1.4rem] w-[1.4rem] mx-[0.625px] my-0 flex text-center flex-col'>
                    <img src={playstore}></img>
                </div>
                <span className=' ml-[10px]'>
                    Download Now</span>
            </button>
            </a>
        </div>
        <div className=' w-[8.5rem] h-full flex justify-center flex-col text-center'>
            <img src='https://client.5cnetwork.com/Icons/downloadMobileAppLink.svg'></img>
        </div>
    </div>
    </div>
    </>
  )
}

export default mobileapp