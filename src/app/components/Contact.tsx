import React, { ForwardedRef, forwardRef } from 'react'

const Projects = (_: unknown, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <div ref={ref} id='resume' className='h-screen mb-10 flex flex-col items-center justify-center px-6 max-5sm:px-5 sm:px-16 md:px-10 lg:px-28'>
            <h1 className='font-black text-[50px] max-md:text-[42px] max-sm:text-[38px] uppercase text-center leading-relaxed'>Contact Now</h1>
            <p className="w-[75%] max-md:w-[100%] text-center max-md:text-[16px] max-sm:text-[14px] max-sm:px-3 pb-3">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
            </p>



        </div>
    )
}

export default forwardRef(Projects)