import Image from 'next/image'
import React, { ReactNode } from 'react'

const ServiceCard = ({ icon, title }: { icon: ReactNode, title: string }) => {
    return (
        <div className='flex flex-col items-center cursor-pointer group px-6 py-10 m-2 max-md:my-2 max-md:mx-0 bg-slate-200 rounded-lg transition-all duration-500 hover:bg-[#ffbd39]'>
            {icon}
            <h2 className='text-[#ffbd39] transition-colors duration-500 group-hover:text-white font-bold text-3xl py-4 break-words text-center'>{title}</h2>
            <span className='h-1 w-16 mx-auto block bg-[#ffbd39] group-hover:bg-white transition-all duration-500'></span>
        </div>
    )
}

export default ServiceCard