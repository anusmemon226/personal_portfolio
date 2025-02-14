import React, { ForwardedRef, forwardRef } from 'react'

const Skills = (_: unknown, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <div ref={ref} id='resume' className='mb-10 flex flex-col items-center justify-center px-6 max-5sm:px-5 sm:px-16 md:px-10 lg:px-28'>
            <h1 className='font-black text-[50px] max-md:text-[42px] max-sm:text-[38px] uppercase text-center leading-relaxed'>Skills</h1>
            <p className="w-[75%] max-md:w-[100%] text-center max-md:text-[16px] max-sm:text-[14px] max-sm:px-3 pb-3">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
            </p>

            <div className='grid sm:grid-cols-2 w-full'>
                <div className='w-full px-4 py-8'>
                    <p className='text-lg sm:text-2xl font-bold'>Photoshop</p>
                    <div className='mt-2 bg-slate-300 rounded'>
                        <div className={`relative h-3 rounded bg-[#ffbd39] w-[40%] cursor-pointer`}>
                            <p className='bg-[#ffbd39] p-2 rounded-b-xl font-bold absolute top-[12px] right-0'>40%</p>
                        </div>
                    </div>
                </div>
                <div className='w-full px-4 py-8'>
                    <p className='text-lg sm:text-2xl font-bold'>Photoshop</p>
                    <div className='mt-2 bg-slate-300 rounded'>
                        <div className={`relative h-3 rounded bg-[#ffbd39] w-[60%] cursor-pointer`}>
                            <p className='bg-[#ffbd39] p-2 rounded-b-xl font-bold absolute top-[12px] right-0'>60%</p>
                        </div>
                    </div>
                </div>
                <div className='w-full px-4 py-8'>
                    <p className='text-lg sm:text-2xl font-bold'>Photoshop</p>
                    <div className='mt-2 bg-slate-300 rounded'>
                        <div className={`relative h-3 rounded bg-[#ffbd39] w-[80%] cursor-pointer`}>
                            <p className='bg-[#ffbd39] p-2 rounded-b-xl font-bold absolute top-[12px] right-0'>80%</p>
                        </div>
                    </div>
                </div>
                <div className='w-full px-4 py-8'>
                    <p className='text-lg sm:text-2xl font-bold'>Photoshop</p>
                    <div className='mt-2 bg-slate-300 rounded'>
                        <div className={`relative h-3 rounded bg-[#ffbd39] w-[20%] cursor-pointer`}>
                            <p className='bg-[#ffbd39] p-2 rounded-b-xl font-bold absolute top-[12px] right-0'>20%</p>
                        </div>
                    </div>
                </div>
                <div className='w-full px-4 py-8'>
                    <p className='text-lg sm:text-2xl font-bold'>Photoshop</p>
                    <div className='mt-2 bg-slate-300 rounded'>
                        <div className={`relative h-3 rounded bg-[#ffbd39] w-[90%] cursor-pointer`}>
                            <p className='bg-[#ffbd39] p-2 rounded-b-xl font-bold absolute top-[12px] right-0'>90%</p>
                        </div>
                    </div>
                </div>
                <div className='w-full px-4 py-8'>
                    <p className='text-lg sm:text-2xl font-bold'>Photoshop</p>
                    <div className='mt-2 bg-slate-300 rounded'>
                        <div className={`relative h-3 rounded bg-[#ffbd39] w-[60%] cursor-pointer`}>
                            <p className='bg-[#ffbd39] p-2 rounded-b-xl font-bold absolute top-[12px] right-0'>60%</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default forwardRef(Skills)