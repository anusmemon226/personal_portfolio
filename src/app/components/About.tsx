import Image from "next/image";
import React from "react";
import profilePic from "../../../public/profilePicPng.png";

function About() {
  return (
    <div id="about" className="mb-10 flex flex-col items-center justify-center px-6 max-5sm:px-0 sm:px-16 md:px-10 lg:px-20 pt-10">
      <h1 className="font-black text-[50px] max-md:text-[42px] max-sm:text-[38px] uppercase text-center leading-relaxed">
        About Me
      </h1>
      <p className="w-[75%] max-md:w-[100%] text-center max-md:text-[16px] max-sm:text-[14px] max-sm:px-3 pb-3">
        Passionate Computer Science Enthusiast | Dedicated to innovations in
        technology | Artificial Intelligence, Machine Learning and Cyber
        Security Enthusiast | Enrolled in Governer Sindh Initiative for
        Generative AI
      </p>
      <div className="flex max-md:w-full">
        <div className="w-[50%] max-md:hidden my-auto">
          <Image src={profilePic} alt="Profile Pic" className="w-[800px] block" />
        </div>
        <div className="w-[50%] max-md:w-[100%] bg-slate-50 px-8 flex flex-col justify-center py-5">
          <div className="flex py-3">
            <h1 className="font-bold text-[30px] max-sm:text-[26px] underline underline-offset-4">Personal Details</h1>
          </div>
          <div>
            <div className="flex max-md:flex-wrap max-4sm:flex-col py-3">
              <p className="w-[34%] font-bold">Name:</p>
              <p className="flex-1">Muhammad Anus</p>
            </div>
            <div className="flex max-md:flex-wrap max-4sm:flex-col py-3">
              <p className="w-[34%] font-bold">Date of Birth:</p>
              <p className="flex-1">July 21, 2001</p>
            </div>
            <div className="flex max-md:flex-wrap max-4sm:flex-col py-3">
              <p className="w-[34%] font-bold">Email:</p>
              <p className="flex-1">anusm226@gmail.com</p>
            </div>
            <div className="flex max-md:flex-wrap max-4sm:flex-col py-3">
              <p className="w-[34%] font-bold">Phone Number:</p>
              <p className="flex-1">+92 330 2626644</p>
            </div>
            <div className="flex max-md:flex-wrap max-4sm:flex-col py-3">
              <p className="w-[34%] font-bold">Resident:</p>
              <p className="flex-1">Karachi, Pakistan</p>
            </div>
          </div>
          <div className="mt-4">
            <button className="bg-[#ffbd39] p-4 rounded-full">Download CV</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
