import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'
import SectionHeader from './SectionHeader'

const TechStack = () => {
    return (
        <div className='py-5'>
            <SectionHeader heading='Technology Stack' />
            <Marquee pauseOnHover speed={100} autoFill className='flex gap-x-5 items-center py-5'>
                <Image src={"/icons/html5.svg"} width={100} height={100} alt='HTML5' className='mx-3 px-2'/>
                <Image src={"/icons/css.svg"} width={120} height={120} alt='CSS3' className='mx-3 px-2'/>
                <Image src={"/icons/tailwind.svg"} width={120} height={70} alt='CSS3' className='mx-3 px-2'/>
                <Image src={"/icons/javascript.svg"} width={100} height={70} alt='Javascript' className='mx-3 px-2'/>
                <Image src={"/icons/jquery.svg"} width={110} height={70} alt='Jquery' className='mx-3 px-2'/>
                <Image src={"/icons/react.svg"} width={110} height={80} alt='Jquery' className='mx-3 px-2'/>
                <Image src={"/icons/reactnative.svg"} width={110} height={80} alt='Jquery' className='mx-3 px-2'/>
                <Image src={"/icons/redux.svg"} width={100} height={70} alt='Jquery' className='mx-3 px-2'/>
            </Marquee>
            <Marquee pauseOnHover speed={100} autoFill direction='right' className='flex gap-0 items-center py-5'>
                <Image src={"/icons/nodejs.svg"} width={150} height={150} alt='Jquery' className='mx-3 px-2' />
                <Image src={"/icons/expressjs.png"} width={220} height={220} alt='Jquery' className='mx-3 px-2' />
                <Image src={"/icons/mongodb.svg"} width={200} height={180} alt='Jquery' className='mx-3 px-2' />
                <Image src={"/icons/mysql.svg"} width={140} height={100} alt='Jquery' className='mx-3 px-2' />
                <Image src={"/icons/nextjs.svg"} width={140} height={100} alt='Jquery' className='mx-3 px-2' />
                <Image src={"/icons/python.svg"} width={100} height={70} alt='Jquery' className='mx-3 px-2' />
                <Image src={"/icons/java.svg"} width={120} height={80} alt='Jquery' className='mx-3 px-2' />
                <Image src={"/icons/c.svg"} width={100} height={70} alt='Jquery' className='mx-3 px-2' />
            </Marquee>
        </div>
    )
}

export default TechStack