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
    <div className="bg-light w-[90%] max-w-[850px] mx-auto shadow-card rounded-lg flex flex-col lg:flex-row py-5 px-7 z-10 absolute -bottom-[35%] left-0 right-0">
      <div className='w-full lg:w-[25%] border-gray-300 px-7 py-5 border-r-0 border-b-[1px] lg:border-b-0 lg:border-r-[1px]'>
         <p className='uppercase text-gray-500 font-black text-xs'>
            ip address
         </p>
         <h3 className='text-black font-bold mt-4 text-2xl'>{ip || "8.8.8.8"}</h3>
      </div>
      <div className='w-full lg:w-[25%] border-gray-300 px-7 py-5 border-r-0 border-b-[1px] lg:border-b-0 lg:border-r-[1px]'>
         <p className='uppercase text-gray-500 font-black text-xs'>
            location
         </p>
         <h3 className='text-black font-bold mt-4 text-2xl'>{location || "unknown"}</h3>
      </div>
      <div className='w-full lg:w-[25%] border-gray-300 px-7 py-5 border-r-0 border-b-[1px] lg:border-b-0 lg:border-r-[1px]'>
         <p className='uppercase text-gray-500 font-black text-xs'>
            timezone
         </p>
         <h3 className='text-black font-bold mt-4 text-2xl'>{timezone || "UTC - 03:00"}</h3>
      </div>
      <div className='w-full lg:w-[25%] border-gray-400 px-7 py-5'>
         <p className='uppercase text-gray-500 font-black text-xs'>
            isp
         </p>
         <h3 className='text-black font-bold mt-4 text-2xl'>{isp || "any"}</h3>
      </div>
    </div>
  )
}

export default InfoBoxSection