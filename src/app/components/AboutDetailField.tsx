import { SquareArrowOutUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const AboutDetailField = ({ title, value }: { title: string, value: string }) => {
    return (
        <div className="flex max-md:flex-wrap max-4sm:flex-col py-3">
            {title != "Linkedin" && title != "Github" && <><p className="w-[34%] font-bold">{title}:</p>
            <p className="flex-1">{value}</p></>}
            {title == "Linkedin" && 
            <>
                <Link href={value} target='_blank' className="font-bold flex items-center w-full transition-all duration-500 hover:text-gray-600">
                <p className=''>{title} Profile</p>
                <SquareArrowOutUpRight className='cursor-pointer ml-1' />
                </Link>
            </>
            }
             {title == "Github" && 
            <>
                <Link href={value} target='_blank' className="font-bold flex items-center w-full transition-all duration-500 hover:text-gray-600">
                <p className=''>{title} Profile</p>
                <SquareArrowOutUpRight className='cursor-pointer ml-1' />
                </Link>
            </>
            }
            
        </div>
    )
}

export default AboutDetailField