import Image from "next/image";
import React, { forwardRef } from "react";
import aboutProfile from "../../../public/profilePic.png";
import SectionHeader from "./SectionHeader";
import AboutDetailField from "./AboutDetailField";


const About = (_: unknown, ref: React.ForwardedRef<HTMLDivElement>) => {
  return (
    <div
      ref={ref}
      id="about"
      className="mb-10 flex flex-col items-center justify-center px-6 max-5sm:px-0 sm:px-16 md:px-10 lg:px-20 pt-10"
    >
      <SectionHeader heading="About Me" paragraph="Passionate Computer Science Enthusiast | Dedicated to innovations in
        technology | Artificial Intelligence, Machine Learning and Cyber
        Security Enthusiast | Enrolled in Governer Sindh Initiative for
        Generative AI"/>

      <div className="flex max-md:flex-col md:justify-evenly max-md:items-center max-md:w-full">
        <div className="w-[50%] aspect-square md:w-[50%] max-md:rounded-full max-md:overflow-hidden my-auto max-md:shadow-sm max-md:shadow-gray-600 max-md:mb-1">
          <Image src={aboutProfile} alt="Profile Pic" className="w-[600px] block" />
        </div>
        <div className="w-[50%] max-md:w-[100%] bg-slate-50 px-8 flex flex-col justify-center py-5">
          <div className="flex py-3">
            <h1 className="font-bold text-[30px] max-sm:text-[26px] underline underline-offset-4">
              Personal Details
            </h1>
          </div>
          <div>
            <AboutDetailField title="Name" value="Muhammad Anas" />
            <AboutDetailField title="Email" value="anusm226@gmail.com" />
            <AboutDetailField title="Phone Number" value="+92 330 2626644" />
            <AboutDetailField title="Date of Birth" value="July 21, 2001" />
            <AboutDetailField title="Resident" value="Karachi, Pakistan" />
          </div>
          <div className="mt-4">
            <button className="bg-[#ffbd39] p-4 rounded-full">Download CV</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(About);
