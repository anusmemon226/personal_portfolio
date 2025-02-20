import React, { ForwardedRef, forwardRef } from 'react'
import SectionHeader from './SectionHeader'
import ServiceCard from './ServiceCard'
import { BarChart, BrainCircuit, Database, Globe, Lightbulb, PenTool, Smartphone, Store, Wrench } from 'lucide-react'
const Services = (_: unknown, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <div ref={ref} className='mb-10 flex flex-col items-center justify-center px-6 max-5sm:px-5 sm:px-16 md:px-10 lg:px-20'>
            <SectionHeader heading='Services' paragraph='Offering innovative and efficient solutions in software development, machine learning, and web and mobile applications to bring ideas to life.' />
            <div className='w-full sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 sm:gap-5 py-5'>
                <ServiceCard icon={<BrainCircuit size={80}/>} title='AI/ML Model Development' />
                <ServiceCard icon={<Globe size={80}/>} title='Website Development & Optimization' />
                <ServiceCard icon={<Smartphone size={80}/>} title='Mobile App Development' />
                <ServiceCard icon={<BarChart size={80}/>} title='Data Engineering' />
                <ServiceCard icon={<Database size={80}/>} title='Database Designing' />
                <ServiceCard icon={<Store size={80} />} title='Wordpress & Shopify Development' />
                <ServiceCard icon={<PenTool size={80}/>} title='UI/UX Designing' />
                <ServiceCard icon={<Lightbulb size={80} />} title='IT Consulting & Strategy' />
                <ServiceCard icon={<Wrench size={80} />} title='Software Maintenance & Support' />
            </div>
        </div>
    )
}

export default forwardRef(Services)