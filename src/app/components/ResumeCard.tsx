import React from 'react'

interface CardType {
    year: string,
    degree: string,
    institute: string,
    description: string
}

const ResumeCard = ({ year, degree, institute, description }: CardType) => {
    return (
        <div className='w-[45%] max-md:w-full p-6 m-2 max-md:my-2 max-md:mx-0 bg-slate-100 rounded-lg'>
            <h2 className='text-[#ffbd39] font-bold text-3xl py-1'>{year}</h2>
            <p className='text-2xl py-1'>{degree}</p>
            <span className='uppercase my-1 block tracking-[0.1rem] text-[14px] py-1'>{institute}</span>
            <p className='py-1'>{description}</p>
        </div>
    )
}

export default ResumeCard