"use client"
import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Resume from './Resume'
import Services from './Services'
import { motion, useScroll, useSpring } from "motion/react"
import ScrollToTop from './ScrollToTop'

const Wrapper = () => {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })
    return (
        <>
            <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scaleX,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 5,
                    originX: 0,
                    backgroundColor: "#ffbd39",
                    zIndex: 100
                }}
            />
            <Navbar />
            <Hero />
            <About />
            <Resume />
            <Services />
            <ScrollToTop/>
        </>
    )
}

export default Wrapper