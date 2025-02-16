import React, { ForwardedRef, forwardRef } from "react";
function Hero(_: unknown, ref: ForwardedRef<HTMLDivElement>) {
  return (
    <div ref={ref} className="flex justify-between pt-1 px-6 max-4sm:px-0 sm:px-16 md:px-10 lg:px-20 bg-slate-50 relative">
      <div className="flex w-[50%] max-4sm:w-[100%] max-lg:w-[100%] max-lg:bg-white/20 max-5sm:bg-white/30 flex-col justify-center max-2sm:my-[3.5rem] max-3sm:my-[6rem] max-4sm:my-[5.5rem] max-5sm:my-[3.5rem] my-[4.8rem] sm:my-[5.2rem] px-2 max-4sm:px-3 z-10 break-words">
        <p className="text-[20px] max-3sm:text-[18px] uppercase text-[#ffbd39] py-5 font-semibold">
          Hello!
        </p>
        <h1 className="text-[60px] font-black max-3sm:leading-[0.45in] max-4sm:leading-[0.4in] sm:leading-[0.6in] leading-[0.58in] max-3sm:text-[45px] max-4sm:text-[40px] max-5sm:text-[35px]">
          I&#39;m <span className="text-[#ffbd39]">Muhammad Anas</span>
        </h1>
        <div className="5sm:w-max py-3">
          <h1 className="text-[30px] max-3sm:text-[20px] max-4sm:text-[18px] 5sm:animate-typing max-5sm:text-[20px] 5sm:overflow-hidden max-5sm:text-wrap 5sm:whitespace-nowrap 5sm:border-r-4 5sm:border-r-black 5sm:pr-5">A Freelance Web Developer</h1>
        </div>
        <div className="py-3 pb-5 flex max-5sm:flex-col">
          <button className="bg-[#ffbd39] border border-[#ffbd39] text-sm py-3 px-5 rounded-full">
            Hire Me
          </button>
          <button className="5sm:ml-4 max-5sm:mt-3 text-sm py-3 px-5 rounded-full border border-black">
            My Works
          </button>
        </div>
      </div>
      <div
        className={`sm:w-[90%] w-[100%] h-[100%] bg-profilePic bg-50% bg-bottom sm:bg-contain bg-no-repeat sm:bg-right-bottom absolute left-0`}
      ></div>
    </div>
  );
}

export default forwardRef(Hero);
