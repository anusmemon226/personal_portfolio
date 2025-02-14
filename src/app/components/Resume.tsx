import React, { ForwardedRef, forwardRef } from 'react'
import SectionHeader from './SectionHeader'
import ResumeCard from './ResumeCard'

function Resume(_: unknown, ref: ForwardedRef<HTMLDivElement>) {
  return (
    <div ref={ref} id='resume' className='mb-10 flex flex-col items-center justify-center px-6 max-5sm:px-5 sm:px-16 md:px-10 lg:px-20'>
      <SectionHeader heading="Resume" />
      <div className='flex flex-wrap justify-center max-md:flex-col'>
        <ResumeCard year='2019-2020' degree='SSC Part 1 & 2' institute='K.M.A Boys Secondary School' description='A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.' />
        <ResumeCard year='2017-2018' degree='HSC Part 1 & 2' institute='Sindh Muslim Boys Government Science College' description='A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.' />
      </div>
    </div>
  )
}

export default forwardRef(Resume)