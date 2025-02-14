import React from 'react'

const SectionHeader = ({ heading, paragraph }: { heading: string, paragraph?: string }) => {
    return (
        <>
            <h1 className="font-black text-[50px] max-md:text-[42px] max-sm:text-[38px] uppercase text-center leading-relaxed">
                {heading}
            </h1>
            <p className="w-[75%] max-md:w-[100%] text-center max-md:text-[16px] max-sm:text-[14px] max-sm:px-3 pb-3">
                {paragraph}
            </p>
        </>
    )
}

export default SectionHeader