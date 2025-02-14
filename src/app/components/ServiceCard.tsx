import Image from 'next/image'
import React from 'react'

const ServiceCard = ({ icon, title }: { icon: string, title: string }) => {
    return (
        <div className='cursor-pointer group px-6 py-10 m-2 max-md:my-2 max-md:mx-0 bg-slate-200 rounded-lg transition-all duration-500 hover:bg-[#ffbd39]'>
            <Image src={`/${icon}`} alt='analysis icon' width={80} height={80} className='mx-auto' />
            <h2 className='text-[#ffbd39] transition-colors duration-500 group-hover:text-white font-bold text-3xl py-4 break-words text-center'>{title}</h2>
            <span className='h-1 w-16 mx-auto block bg-[#ffbd39] group-hover:bg-white transition-all duration-500'></span>
        </div>
    )
}

export default ServiceCard