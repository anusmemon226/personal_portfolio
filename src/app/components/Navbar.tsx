"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";

interface refTypes {
  heroRef: React.RefObject<HTMLDivElement>,
  aboutRef: React.RefObject<HTMLDivElement>,
  resumeRef: React.RefObject<HTMLDivElement>,
  serviceRef: React.RefObject<HTMLDivElement>,
  skillRef: React.RefObject<HTMLDivElement>,
  projectRef: React.RefObject<HTMLDivElement>,
  contactRef: React.RefObject<HTMLDivElement>
}

function Navbar({ heroRef, aboutRef, resumeRef, serviceRef, skillRef, projectRef, contactRef }: refTypes) {
  const [showMenu, setShowMenu] = useState(false);
  const [stickyNavbar, setStickyNavbar] = useState(false)
  const [activeSection, setActiveSection] = useState("Home")


  const handleClick = (currentSection: string) => {
    switch (currentSection) {
      case "Home":
        window.scrollTo({ top: heroRef.current.offsetTop - heroRef.current.offsetTop, behavior: "smooth" })
        break
      case "About":
        window.scrollTo({ top: aboutRef.current.offsetTop - 40, behavior: "smooth" })
        break
      case "Education":
        window.scrollTo({ top: resumeRef.current.offsetTop - 60, behavior: "smooth" })
        break
      case "Services":
        window.scrollTo({ top: serviceRef.current.offsetTop - 60, behavior: "smooth" })
        break
      case "Skills":
        window.scrollTo({ top: skillRef.current.offsetTop - 60, behavior: "smooth" })
        break
      case "Projects":
        window.scrollTo({ top: projectRef.current.offsetTop - 60, behavior: "smooth" })
        break
      case "Contact":
        window.scrollTo({ top: contactRef.current.offsetTop - 60, behavior: "smooth" })
        break
      default:
        return
    }


    setShowMenu(false)
  }

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

      if (
        aboutRef.current &&
        resumeRef.current &&
        serviceRef.current &&
        skillRef.current &&
        projectRef.current &&
        contactRef.current
      ) {
        const scrollPosition = window.scrollY;
        const aboutOffset = aboutRef.current.offsetTop;
        const resumeOffset = resumeRef.current.offsetTop;
        const serviceOffset = serviceRef.current.offsetTop;
        const skillOffset = skillRef.current.offsetTop;
        const projectOffset = projectRef.current.offsetTop;
        const contactOffset = contactRef.current.offsetTop;

        if (scrollPosition < aboutOffset - 50) {
          setActiveSection("Home");
        } else if (scrollPosition >= aboutOffset - 50 && scrollPosition < resumeOffset - 65) {
          setActiveSection("About");
        } else if (scrollPosition >= resumeOffset - 65 && scrollPosition < serviceOffset - 65) {
          setActiveSection("Education");
        } else if (scrollPosition >= serviceOffset - 65 && scrollPosition < skillOffset - 65) {
          setActiveSection("Services");
        } else if (scrollPosition >= skillOffset - 65 && scrollPosition < projectOffset - 65) {
          setActiveSection("Skills");
        } else if (scrollPosition >= projectOffset - 65 && scrollPosition < contactOffset - 65) {
          setActiveSection("Projects");
        } else if (scrollPosition >= contactOffset - 65) {
          setActiveSection("Contact");
        }
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [
    showMenu,
    aboutRef.current,
    resumeRef.current,
    serviceRef.current,
    skillRef.current,
    projectRef.current,
    contactRef.current,
  ]);


  return (
    <div className={`bg-black px-6 sm:px-16 md:px-10 lg:px-20 py-3 flex flex-row justify-between items-center ${stickyNavbar ? "sticky top-0 z-50 pt-4" : "relative"}`}>
      <Link href={"/"}>
        <h1 className="font-black text-4xl text-white">ANAS.</h1>
      </Link>
      <div
        className={`flex items-center overflow-hidden transition-all duration-500 ease-in-out
    ${showMenu ? "max-md:max-h-[400px] max-md:py-4" : "max-md:max-h-0 max-md:py-0"}
    max-md:absolute max-md:flex-col max-md:top-[100%] max-md:left-0 max-md:bg-black max-md:w-full z-20`}
      >
        <NavLink title="Home" activeSection={activeSection} handleClick={handleClick} />
        <NavLink title="About" activeSection={activeSection} handleClick={handleClick} />
        <NavLink title="Education" activeSection={activeSection} handleClick={handleClick} />
        <NavLink title="Services" activeSection={activeSection} handleClick={handleClick} />
        <NavLink title="Skills" activeSection={activeSection} handleClick={handleClick} />
        <NavLink title="Projects" activeSection={activeSection} handleClick={handleClick} />
        <NavLink title="Contact" activeSection={activeSection} handleClick={handleClick} />
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
