import React from 'react'

type PropType = {
   ip?: string;
   location?: string;
   timezone?: string;
   isp?: string;
}

function InfoBoxSection(props: PropType) {
   const {ip, location, timezone, isp} = props


  return (
    <div className="bg-light w-[90%] max-w-[850px] mx-auto shadow-card rounded-lg flex flex-col lg:flex-row py-5 px-7 z-40 absolute top-[40%] lg:top-[75%] left-0 right-0">
      <div className='w-full lg:w-[25%] border-gray-300 px-7 py-5 border-r-0 border-b-[1px] lg:border-b-0 lg:border-r-[1px] text-center lg:text-left'>
         <p className='uppercase text-gray-500 font-black text-xs'>
            ip address
         </p>
         <h3 className='text-black font-bold mt-4 text-2xl whitespace-pre-wrap'>{ip || "8.8.8.8"}</h3>
      </div>
      <div className='w-full lg:w-[25%] border-gray-300 px-7 py-5 border-r-0 border-b-[1px] lg:border-b-0 lg:border-r-[1px] text-center lg:text-left'>
         <p className='uppercase text-gray-500 font-black text-xs'>
            location
         </p>
         <h3 className='text-black font-bold mt-4 text-2xl whitespace-pre-wrap'>{location || "unknown"}</h3>
      </div>
      <div className='w-full lg:w-[25%] border-gray-300 px-7 py-5 border-r-0 border-b-[1px] lg:border-b-0 lg:border-r-[1px] text-center lg:text-left'>
         <p className='uppercase text-gray-500 font-black text-xs'>
            timezone
         </p>
         <h3 className='text-black font-bold mt-4 text-2xl whitespace-pre-wrap'>{timezone || "UTC - 03:00"}</h3>
      </div>
      <div className='w-full lg:w-[25%] border-gray-400 px-7 py-5 text-center lg:text-left'>
         <p className='uppercase text-gray-500 font-black text-xs'>
            isp
         </p>
         <h3 className='text-black font-bold mt-4 text-2xl whitespace-pre-wrap'>{isp || "any"}</h3>
      </div>
    </div>
  )
}

export default InfoBoxSection