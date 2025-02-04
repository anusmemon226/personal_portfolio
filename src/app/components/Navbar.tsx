"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [stickyNavbar, setStickyNavbar] = useState(false)


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
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

  }, [showMenu])

  return (
    <div className={`bg-black px-6 sm:px-16 md:px-10 lg:px-20 py-3 flex flex-row justify-between items-center ${stickyNavbar ? "sticky top-0 z-50" : "relative"}`}>
      <Link href={"/"}>
        <h1 className="font-black text-4xl text-white">ANAS</h1>
      </Link>
      <div
        className={`flex items-center ${showMenu == false
          ? "max-md:h-0 max-md:py-0 max-md:hidden"
          : "max-md:h-100 max-md:visible"
          } max-md:absolute max-md:flex-col max-md:top-[100%] max-md:left-0 max-md:bg-black max-md:w-full max-md:py-4 z-20`}
      >
        <Link href={"/"} className="text-white md:mx-3 lg:mx-5 hover:text-[#ffbd39] transition duration-200 max-md:py-2">
          Home
        </Link>
        <Link
          href={"#about"}
          className="text-white md:mx-3 lg:mx-5 hover:text-[#ffbd39] transition duration-200 max-md:py-2"
        >
          About
        </Link>
        <Link
          href={"#resume"}
          className="text-white md:mx-3 lg:mx-5 hover:text-[#ffbd39] transition duration-200 max-md:py-2"
        >
          Resume
        </Link>
        <Link
          href={"/"}
          className="text-white md:mx-3 lg:mx-5 hover:text-[#ffbd39] transition duration-200 max-md:py-2"
        >
          Services
        </Link>
        <Link
          href={"/"}
          className="text-white md:mx-3 lg:mx-5 hover:text-[#ffbd39] transition duration-200 max-md:py-2"
        >
          Skills
        </Link>
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
