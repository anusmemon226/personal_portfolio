"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface refTypes {
  heroRef: React.RefObject<HTMLDivElement>,
  aboutRef: React.RefObject<HTMLDivElement>,
  resumeRef: React.RefObject<HTMLDivElement>,
  serviceRef: React.RefObject<HTMLDivElement>,
  skillRef: React.RefObject<HTMLDivElement>
}

function Navbar({ heroRef, aboutRef, resumeRef, serviceRef, skillRef }: refTypes) {
  const [showMenu, setShowMenu] = useState(false);
  const [stickyNavbar, setStickyNavbar] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth >= 768 && showMenu) {
        setShowMenu(false);
      }
    };
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setStickyNavbar(true);
      } else {
        setStickyNavbar(false);
      }

      const scrollPosition = window.scrollY;
      const aboutOffset = aboutRef.current.offsetTop;
      const resumeOffset = resumeRef.current.offsetTop;
      const serviceOffset = serviceRef.current.offsetTop
      const skillOffset = skillRef.current.offsetTop

      console.log(scrollPosition + " - " + (resumeOffset - 65))

      if (scrollPosition < aboutOffset - 50) {
        setActiveSection("home");
      } else if (scrollPosition >= aboutOffset - 50 && scrollPosition < resumeOffset - 65) {
        setActiveSection("about");
      } else if (scrollPosition >= resumeOffset - 65 && scrollPosition < serviceOffset - 65) {
        setActiveSection("resume");
      } else if (scrollPosition >= serviceOffset - 65 && scrollPosition < skillOffset) {
        setActiveSection("services");
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }

  }, [showMenu])

  return (
    <div className={`bg-black px-6 sm:px-16 md:px-10 lg:px-20 py-3 flex flex-row justify-between items-center ${stickyNavbar ? "sticky top-0 z-50 pt-4" : "relative"}`}>
      <Link href={"/"}>
        <h1 className="font-black text-4xl text-white">ANAS</h1>
      </Link>
      <div
        className={`flex items-center overflow-hidden transition-all duration-500 ease-in-out
    ${showMenu ? "max-md:max-h-[400px] max-md:py-4" : "max-md:max-h-0 max-md:py-0"}
    max-md:absolute max-md:flex-col max-md:top-[100%] max-md:left-0 max-md:bg-black max-md:w-full z-20`}
      >
        <button
          onClick={(e) => {
            window.scrollTo({ top: heroRef.current.offsetTop - heroRef.current.offsetTop, behavior: "smooth" })
            setShowMenu(false)
          }}
          className={`${activeSection == "home" ? "text-[#ffbd39]" : "text-white hover:text-[#ffbd39]"} md:mx-3 lg:mx-5 transition duration-200 max-md:py-2`}>
          Home
        </button>
        <button
          onClick={() => {
            window.scrollTo({ top: aboutRef.current.offsetTop - 40, behavior: "smooth" })
            setShowMenu(false)
          }}
          className={`${activeSection == "about" ? "text-[#ffbd39]" : "text-white hover:text-[#ffbd39]"} md:mx-3 lg:mx-5 transition duration-200 max-md:py-2`}
        >
          About
        </button>
        <button
          onClick={() => {
            window.scrollTo({ top: resumeRef.current.offsetTop - 60, behavior: "smooth" })
            setShowMenu(false)
          }}
          className={`${activeSection == "resume" ? "text-[#ffbd39]" : "text-white hover:text-[#ffbd39]"} md:mx-3 lg:mx-5 transition duration-200 max-md:py-2`}
        >
          Resume
        </button>
        <button
          onClick={() => {
            window.scrollTo({ top: serviceRef.current.offsetTop - 60, behavior: "smooth" })
            setShowMenu(false)
          }}
          className={`${activeSection == "services" ? "text-[#ffbd39]" : "text-white hover:text-[#ffbd39]"} md:mx-3 lg:mx-5 transition duration-200 max-md:py-2`}
        >
          Services
        </button>
        <button
          onClick={() => {
            window.scrollTo({ top: skillRef.current.offsetTop - 40, behavior: "smooth" })
            setShowMenu(false)
          }}
          className="text-white md:mx-3 lg:mx-5 hover:text-[#ffbd39] transition duration-200 max-md:py-2"
        >
          Skills
        </button>
        <Link
          href={"/"}
          className="text-white md:mx-3 lg:mx-5 hover:text-[#ffbd39] transition duration-200 max-md:py-2"
        >
          Projects
        </Link>
        <Link
          href={"/"}
          className="text-white md:mx-3 lg:mx-5 hover:text-[#ffbd39] transition duration-200 max-md:py-2"
        >
          Contact
        </Link>
      </div>
      <div
        className="flex items-center md:hidden cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      >
        <p className="text-white p-1">Menu</p>
        <div className="">
          <div className="h-0.5 w-6 bg-white my-1"></div>
          <div className="h-0.5 w-6 bg-white my-1"></div>
          <div className="h-0.5 w-6 bg-white my-1"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
