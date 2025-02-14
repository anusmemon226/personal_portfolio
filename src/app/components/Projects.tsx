"use client"
import React, { ForwardedRef, forwardRef, useState } from 'react'
import SectionHeader from './SectionHeader'
import { motion } from "motion/react"
import ProjectCard from './ProjectCard'

const Projects = (_: unknown, ref: ForwardedRef<HTMLDivElement>) => {
    const [currentCategory, setCurrentCategory] = useState("web")

    return (
        <div ref={ref} className='mb-10 flex flex-col items-center justify-center px-6 max-5sm:px-5 sm:px-16 md:px-10 lg:px-28'>
            <SectionHeader heading='Projects' paragraph='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia' />

            <div className='flex justify-center flex-wrap gap-y-3 gap-x-5 mt-3'>
                <button onClick={() => setCurrentCategory("web")} className={`${currentCategory == "web" ? "bg-[#ffbd39]" : "bg-slate-200"} transition-all duration-500 text-lg  px-3 py-1 rounded-full`}>Websites</button>
                <button onClick={() => setCurrentCategory("mob")} className={`${currentCategory == "mob" ? "bg-[#ffbd39]" : "bg-slate-200"} transition-all duration-500 text-lg  px-3 py-1 rounded-full`}>Mobile Applications</button>
                <button onClick={() => setCurrentCategory("ml")} className={`${currentCategory == "ml" ? "bg-[#ffbd39]" : "bg-slate-200"} transition-all duration-500 text-lg  px-3 py-1 rounded-full`}>ML/AI Projects</button>
            </div>

            <motion.div
                key={currentCategory}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-8 w-full'
            >
                {currentCategory === "web" && (
                    <ProjectCard projectName='Business Website' projectDescription='Project Description' />
                )}
                {currentCategory === "mob" && (
                    <ProjectCard projectName='Mobile App' projectDescription='Project Description' />
                )}
                {currentCategory === "ml" && (
                    <>
                        <ProjectCard projectName='ML Project 01' projectDescription='Project Description' />
                        <ProjectCard projectName='ML Project 02' projectDescription='Project Description' />
                    </>
                )}
            </motion.div>

        </div>
    )
}

export default forwardRef(Projects)