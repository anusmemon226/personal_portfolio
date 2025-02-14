import React, { ForwardedRef, forwardRef } from 'react'
import SectionHeader from './SectionHeader'
import SkillCard from './SkillCard'

const Skills = (_: unknown, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <div ref={ref} className='mb-10 flex flex-col items-center justify-center px-6 max-5sm:px-5 sm:px-16 md:px-10 lg:px-28'>
            <SectionHeader heading='Skills' paragraph='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia' />
            <div className='grid sm:grid-cols-2 w-full'>
                <SkillCard skillName='Photoshop' percentage='40' />
                <SkillCard skillName='Photoshop' percentage='60' />
                <SkillCard skillName='Photoshop' percentage='70' />
                <SkillCard skillName='Photoshop' percentage='50' />
                <SkillCard skillName='Photoshop' percentage='90' />
                <SkillCard skillName='Photoshop' percentage='80' />
            </div>

        </div>
    )
}

export default forwardRef(Skills)