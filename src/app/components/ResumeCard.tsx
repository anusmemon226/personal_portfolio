import React from 'react'

interface CardType {
    year: string,
    degree: string,
    outcome:string,
    institute: string,
    description: string
}

const ResumeCard = ({ year, degree,outcome, institute, description }: CardType) => {
    return (
        <div className='max-md:w-full p-6 max-md:my-2 max-md:mx-0 bg-slate-100 rounded-xl'>
            <h2 className='text-[#ffbd39] font-bold text-3xl py-1'>{year}</h2>
            <p className='text-2xl py-1'>{degree}</p>
            <span className='uppercase mt-1 block text-[18px] pt-1 font-semibold'>{institute}</span>
            <span className='uppercase mb-1 block text-[16px]'>{outcome}</span>
            <p className='py-1'>{description}</p>
        </div>
    )
}

export default ResumeCard