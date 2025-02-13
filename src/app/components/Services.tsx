import Image from 'next/image'
import React, { ForwardedRef, forwardRef } from 'react'
const Services = (_: unknown, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <div ref={ref} id='resume' className='mb-10 flex flex-col items-center justify-center px-6 max-5sm:px-5 sm:px-16 md:px-10 lg:px-20'>
            <h1 className='font-black text-[50px] max-md:text-[42px] max-sm:text-[38px] uppercase text-center leading-relaxed'>Services</h1>
            <p className="w-[75%] max-md:w-[100%] text-center max-md:text-[16px] max-sm:text-[14px] max-sm:px-3 pb-3">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
            </p>

            <div className='w-full sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 sm:gap-5 py-5'>
                <div className='cursor-pointer group px-6 py-10 m-2 max-md:my-2 max-md:mx-0 bg-slate-200 rounded-lg transition-all duration-500 hover:bg-[#ffbd39]'>
                    <Image src={"/analysis.png"} alt='analysis icon' width={80} height={80} className='mx-auto' />
                    <h2 className='text-[#ffbd39] transition-colors duration-500 group-hover:text-white font-bold text-3xl py-4 break-words text-center'>Website Design</h2>
                    <span className='h-1 w-16 mx-auto block bg-[#ffbd39] group-hover:bg-white transition-all duration-500'></span>
                </div>
                <div className='cursor-pointer group px-6 py-10 m-2 max-md:my-2 max-md:mx-0 bg-slate-200 rounded-lg transition-all duration-500 hover:bg-[#ffbd39]'>
                    <Image src={"/analysis.png"} alt='analysis icon' width={80} height={80} className='mx-auto' />
                    <h2 className='text-[#ffbd39] transition-colors duration-500 group-hover:text-white font-bold text-3xl py-4 break-words text-center'>Website Design</h2>
                    <span className='h-1 w-16 mx-auto block bg-[#ffbd39] group-hover:bg-white transition-all duration-500'></span>
                </div>
                <div className='cursor-pointer group px-6 py-10 m-2 max-md:my-2 max-md:mx-0 bg-slate-200 rounded-lg transition-all duration-500 hover:bg-[#ffbd39]'>
                    <Image src={"/analysis.png"} alt='analysis icon' width={80} height={80} className='mx-auto' />
                    <h2 className='text-[#ffbd39] transition-colors duration-500 group-hover:text-white font-bold text-3xl py-4 break-words text-center'>Website Design</h2>
                    <span className='h-1 w-16 mx-auto block bg-[#ffbd39] group-hover:bg-white transition-all duration-500'></span>
                </div>
                <div className='cursor-pointer group px-6 py-10 m-2 max-md:my-2 max-md:mx-0 bg-slate-200 rounded-lg transition-all duration-500 hover:bg-[#ffbd39]'>
                    <Image src={"/analysis.png"} alt='analysis icon' width={80} height={80} className='mx-auto' />
                    <h2 className='text-[#ffbd39] transition-colors duration-500 group-hover:text-white font-bold text-3xl py-4 break-words text-center'>Website Design</h2>
                    <span className='h-1 w-16 mx-auto block bg-[#ffbd39] group-hover:bg-white transition-all duration-500'></span>
                </div>
                <div className='cursor-pointer group px-6 py-10 m-2 max-md:my-2 max-md:mx-0 bg-slate-200 rounded-lg transition-all duration-500 hover:bg-[#ffbd39]'>
                    <Image src={"/analysis.png"} alt='analysis icon' width={80} height={80} className='mx-auto' />
                    <h2 className='text-[#ffbd39] transition-colors duration-500 group-hover:text-white font-bold text-3xl py-4 break-words text-center'>Website Design</h2>
                    <span className='h-1 w-16 mx-auto block bg-[#ffbd39] group-hover:bg-white transition-all duration-500'></span>
                </div>
                <div className='cursor-pointer group px-6 py-10 m-2 max-md:my-2 max-md:mx-0 bg-slate-200 rounded-lg transition-all duration-500 hover:bg-[#ffbd39]'>
                    <Image src={"/analysis.png"} alt='analysis icon' width={80} height={80} className='mx-auto' />
                    <h2 className='text-[#ffbd39] transition-colors duration-500 group-hover:text-white font-bold text-3xl py-4 break-words text-center'>Website Design</h2>
                    <span className='h-1 w-16 mx-auto block bg-[#ffbd39] group-hover:bg-white transition-all duration-500'></span>
                </div>
            </div>
        </div>
    )
}

export default forwardRef(Services)