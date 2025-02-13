"use client"
import { ArrowUp } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const ScrollToTop = () => {
    const [showButton, setShowButton] = useState(false)
    useEffect(() => {

        const scrollEffect = () => {
            if (window.scrollY > 300) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        }

        window.addEventListener("scroll", scrollEffect)

        return () => {
            window.removeEventListener("scroll", scrollEffect)
        }
    }, [])
    return (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={`${showButton ? "opacity-1" : "opacity-0"} transition-opacity duration-500 fixed bottom-10 right-10 h-50 w-50 p-2 rounded-full bg-[#ffbd39] text-black`}>
            <ArrowUp />
        </button>
    )
}

export default ScrollToTop