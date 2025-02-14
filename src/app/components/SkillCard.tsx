import React from 'react'

const SkillCard = ({ skillName, percentage }: { skillName: string, percentage: string }) => {
    return (
        <div className='w-full px-4 py-10'>
            <p className='text-lg sm:text-2xl font-bold'>{skillName}</p>
            <div className='mt-2 bg-slate-300 rounded'>
                <div className={`relative h-3 rounded bg-[#ffbd39] w-[${percentage}%] cursor-pointer`}>
                    <p className='bg-[#ffbd39] p-2 rounded-b-xl font-bold absolute top-[12px] right-0'>{percentage}%</p>
                </div>
            </div>
        </div>
    )
}

export default SkillCard