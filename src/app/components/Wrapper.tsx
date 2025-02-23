"use client"
import React, { useRef } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Resume from './Resume'
import Services from './Services'
import { motion, useScroll, useSpring } from "motion/react"
import ScrollToTop from './ScrollToTop'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import TechStack from './TechStack'
import Footer from './Footer'

const Wrapper = () => {
    const heroRef = useRef<HTMLDivElement>(null!)
    const aboutRef = useRef<HTMLDivElement>(null!)
    const resumeRef = useRef<HTMLDivElement>(null!)
    const ServicesRef = useRef<HTMLDivElement>(null!)
    const skillRef = useRef<HTMLDivElement>(null!)
    const projectRef = useRef<HTMLDivElement>(null!)
    const contactRef = useRef<HTMLDivElement>(null!)
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
            <Navbar heroRef={heroRef} aboutRef={aboutRef} resumeRef={resumeRef} serviceRef={ServicesRef} skillRef={skillRef} projectRef={projectRef} contactRef={contactRef} />
            <Hero ref={heroRef} references={[projectRef, contactRef]} />
            <About ref={aboutRef} />
            <Resume ref={resumeRef} />
            <Services ref={ServicesRef} />
            <Skills ref={skillRef} />
            <TechStack />
            <Projects ref={projectRef} />
            <Contact ref={contactRef} />
            <Footer />
            <ScrollToTop />
        </>
    )
}

export default Wrapper