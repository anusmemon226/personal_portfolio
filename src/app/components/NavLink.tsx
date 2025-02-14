"use client"
import React from 'react'

type NavLinkType = {
    title: string,
    activeSection: string,
    handleClick: (currentSection: string) => void
}

const NavLink = ({ title, activeSection, handleClick }: NavLinkType) => {

    return (
        <a
            onClick={() => handleClick(title)}
            className={`${activeSection == title ? "text-[#ffbd39]" : "text-white hover:text-[#ffbd39]"} cursor-pointer md:mx-3 lg:mx-5 transition duration-200 max-md:py-2`}>
            {title}
        </a>
    )
}

export default NavLink