import React, { ForwardedRef, forwardRef } from 'react'

function Resume(_:unknown, ref: ForwardedRef<HTMLDivElement>) {
  return (
    <div ref={ref} id='resume' className='mb-10 flex flex-col items-center justify-center px-6 max-5sm:px-5 sm:px-16 md:px-10 lg:px-20'>
      <h1 className='font-black text-[50px] max-md:text-[42px] max-sm:text-[38px] uppercase text-center leading-relaxed'>Resume</h1>
      <div className='flex flex-wrap justify-center max-md:flex-col'>
        <div className='w-[45%] max-md:w-full p-6 m-2 max-md:my-2 max-md:mx-0 bg-slate-100 rounded-lg'>
          <h2 className='text-[#ffbd39] font-bold text-3xl py-1'>2019-2020</h2>
          <p className='text-2xl py-1'>SSC Part 1 & 2</p>
          <span className='uppercase my-1 block tracking-[0.1rem] text-[14px] py-1'>K.M.A Boys Secondary School</span>
          <p className='py-1'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
        </div>
        <div className='w-[45%] max-md:w-full p-6 m-2 max-md:my-2 max-md:mx-0 bg-slate-100 rounded-lg'>
          <h2 className='text-[#ffbd39] font-bold text-3xl py-1'>2017-2018</h2>
          <p className='text-2xl py-1'>HSC Part 1 & 2</p>
          <span className='uppercase my-1 block tracking-[0.1rem] text-[14px] py-1'>Sindh Muslim Boys Government Science College</span>
          <p className='py-1'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
        </div>
      </div>
    </div>
  )
}

export default forwardRef(Resume)