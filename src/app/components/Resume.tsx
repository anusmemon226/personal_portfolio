import React, { ForwardedRef, forwardRef } from 'react'
import SectionHeader from './SectionHeader'
import ResumeCard from './ResumeCard'

function Resume(_: unknown, ref: ForwardedRef<HTMLDivElement>) {
  return (
    <div ref={ref} id='Education' className='mb-10 flex flex-col items-center justify-center px-6 max-5sm:px-5 sm:px-16 md:px-10 lg:px-20'>
      <SectionHeader heading="Education" />
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
        <ResumeCard year='2022-Present' degree='Bachelor of Science in Computer Science' outcome="Current CGPA : 3.88" institute='Salim Habib University' description="Pursuing a Bachelor's in Computer Science with a strong academic record. Passionate about software development, machine learning, and AI. Constantly exploring innovative technologies to enhance problem-solving skills." />
        <ResumeCard year='2017-2018' degree='HSC Part 1 & 2' outcome='Percentage : 75.45%' institute='S.M Boys Government Science College' description='Completed HSC with a Pre-Medical background, building a strong foundation in biology, chemistry, and physics. Later transitioned into Computer Science, combining analytical thinking with problem-solving skills in technology.' />
        <ResumeCard year='2019-2020' degree='SSC Part 1 & 2' outcome='Percentage : 81.52%' institute='K.M.A Boys Secondary School' description='Completed SSC with a focus on medical science, gaining a strong understanding of biology, chemistry, and physics. Achieved a solid academic record with a passion for learning and problem-solving.' />
      </div>
    </div>
  )
}

export default forwardRef(Resume)