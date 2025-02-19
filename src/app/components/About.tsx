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
      <SectionHeader heading="About Me" paragraph="Hi, I'm Muhammad Anas, a Computer Science student at Salim Habib University. I'm passionate about technology and always eager to explore new innovations. My interests lie in Artificial Intelligence, Machine Learning, and Cybersecurity, where I enjoy solving complex problems and building smart solutions. I love working on projects that push the boundaries of technology, whether it's developing intelligent systems, securing networks, or creating efficient applications. With a strong foundation in programming and a curious mindset, I'm always looking to learn and grow. Let's connect and build something amazing together! "/>

      <div className="flex max-md:flex-col md:justify-evenly max-md:items-center max-md:w-full">
        <div className="w-[75%] sm:w-[60%] aspect-square md:w-[50%] max-md:rounded-full max-md:overflow-hidden my-auto max-md:shadow-sm max-md:shadow-gray-600 max-md:mb-1">
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
            <AboutDetailField title="Resident" value="Karachi, Pakistan" />
            <AboutDetailField title="Linkedin" value="https://www.linkedin.com/in/muhammadanus226/" />
            <AboutDetailField title="Github" value="https://github.com/anusmemon226" />
          </div>
          {/* <div className="mt-4">
            <button className="bg-[#ffbd39] p-4 rounded-full">Download CV</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default forwardRef(About);
