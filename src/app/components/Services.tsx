import React, { ForwardedRef, forwardRef } from 'react'
import SectionHeader from './SectionHeader'
import ServiceCard from './ServiceCard'
const Services = (_: unknown, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <div ref={ref} className='mb-10 flex flex-col items-center justify-center px-6 max-5sm:px-5 sm:px-16 md:px-10 lg:px-20'>
            <SectionHeader heading='Services' paragraph='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia' />
            <div className='w-full sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 sm:gap-5 py-5'>
                <ServiceCard icon='analysis.png' title='Website Design' />
                <ServiceCard icon='analysis.png' title='Website Design' />
                <ServiceCard icon='analysis.png' title='Website Design' />
                <ServiceCard icon='analysis.png' title='Website Design' />
                <ServiceCard icon='analysis.png' title='Website Design' />
                <ServiceCard icon='analysis.png' title='Website Design' />
            </div>
        </div>
    )
}

export default forwardRef(Services)