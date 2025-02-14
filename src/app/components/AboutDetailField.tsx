import React from 'react'

const AboutDetailField = ({ title, value }: { title: string, value: string }) => {
    return (
        <div className="flex max-md:flex-wrap max-4sm:flex-col py-3">
            <p className="w-[34%] font-bold">{title}:</p>
            <p className="flex-1">{value}</p>
        </div>
    )
}

export default AboutDetailField