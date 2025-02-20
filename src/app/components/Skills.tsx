import React, { ForwardedRef, forwardRef } from 'react'
import SectionHeader from './SectionHeader'
import SkillCard from './SkillCard'

const Skills = (_: unknown, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <div ref={ref} className='mb-10 flex flex-col items-center justify-center px-6 max-5sm:px-5 sm:px-16 md:px-10 lg:px-28'>
            <SectionHeader heading='Skills' paragraph='A showcase of my expertise across various technologies, highlighting my proficiency in development, design, and problem-solving.' />
            <div className='grid sm:grid-cols-2 w-full'>
                <SkillCard skillName='AI/ML Model Development' percentage='70' />
                <SkillCard skillName='MERN Stack Development' percentage='85' />
                <SkillCard skillName='Mobile Application Development' percentage='80' />
                <SkillCard skillName='Database Designing' percentage='75' />
                <SkillCard skillName='Data Engineering' percentage='80' />
                <SkillCard skillName='UI/UX Designing' percentage='75' />
            </div>
        </div>
    )
}
export default forwardRef(Skills)