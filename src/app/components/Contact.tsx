import React, { ForwardedRef, forwardRef } from 'react'
import SectionHeader from './SectionHeader'
import ContactForm from './ContactForm'


const Contact = (_: unknown, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <div ref={ref} id='resume' className='mb-10 flex flex-col items-center justify-center px-6 max-5sm:px-5 sm:px-16 md:px-10 lg:px-28'>
            <SectionHeader heading='Contact Me' paragraph='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia' />
            <ContactForm />
        </div>
    )
}

export default forwardRef(Contact)