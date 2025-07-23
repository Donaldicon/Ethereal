import React from "react";

import Email from "./Email";

import horizontalLine from "../assets/hero/horizontal-line.png";
import verticalLine from "../assets/hero/vertical-line.png";
import heroPhone from "../assets/hero/hero-phones.png";

import { easeInOut, motion } from "framer-motion";

const Hero = () => {
  return (
    <div>
      {/* Desktop View */}
      <div className="relative hidden md:flex flex-col justify-center bg-[#FAFBFB]">
        <div className=" flex items-center justify-center pt-[75px]">
          <img src={verticalLine} alt="" className="w-full px-6" />
        </div>

        <div className="absolute left-[7%] top-[2%]">
          <img
            src={horizontalLine}
            alt=""
            className="h-[600px] lg:h-[750px] desktop:h-[1000px] bigScreens:h-[1200px]"
          />
        </div>

        <div className="absolute right-[7.2%] top-[2%]">
          <img
            src={horizontalLine}
            alt=""
            className="h-[600px] lg:h-[750px] desktop:h-[1000px] bigScreens:h-[1200px]"
          />
        </div>

        <div className="w-[7px] h-[7px] rounded-full bg-gray-400 absolute top-[72px] left-[6.6%] lg:left-[6.8%]" />

        <div className="w-[7px] h-[7px] rounded-full bg-gray-400 absolute top-[72px] right-[6.83%] lg:right-[7.05%] " />

        <div className="overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 100, y: 0 }}
            transition={{ duration: 2, ease: easeInOut }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center justify-center pt-[4%] pb-[4%]">
              <p className="text-center font-bold font-barlow text-[37px] lg:text-[45px] text-[#363636] leading-[45px] lg:leading-[50px] xl:leading-[65px] xl:text-[55px]">
                Find & Book Hotels Near You <br /> in real- time instantly with{" "}
                <span className="text-[#259F72] font-voltaire">Ethereal</span>
              </p>
              <p className="text-center font-poppins text-[#808080] text-opacity-80 mt-3 mb-7 text-[14px] lg:text-[16px] xl:text-[18px]">
                Whether you're new in town or just need a quick stay nearby,
                Ethereal <br /> shows you every hotel around you, in real-time.
              </p>

              <Email />

              <div className="mt-6 relative overflow-hidden">
                <img src={heroPhone} alt="" className="translate-x-10" />
                <div className="absolute w-full h-[200px] -bottom-1 z-10 bg-gradient-to-t from-white/100 via-white/80 to-white/10 bg-opacity-100 " />
                <div className="absolute h-[50px] bottom-0 bg-[#e8e9e9] w-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="relative md:hidden flex flex-col justify-center bg-[#FAFBFB] mt-[40px]">
        <div className=" flex items-center justify-center pt-[35px]">
          <img src={verticalLine} alt="" className="w-full px-3" />
        </div>

        <div className="absolute left-[7%] top-[2%]">
          <img src={horizontalLine} alt="" className="w-1/2 h-[380px]" />
        </div>

        <div className="absolute right-[7.2%] top-[2%]">
          <img src={horizontalLine} alt="" className="w-1/2 h-[380px]" />
        </div>

        <div className="w-[4px] h-[4px] rounded-full bg-gray-400 absolute top-[33px] left-[6.65%]" />

        <div className="w-[4px] h-[4px] rounded-full bg-gray-400 absolute top-[33px] right-[6.95%] " />

        <div className="overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 100, y: 0 }}
            transition={{ duration: 2, ease: easeInOut }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center justify-center pt-[3%] pb-[4%]">
              <p className="text-center font-bold font-barlow text-[25px] text-[#363636] leading-[33px]">
                Find & Book Hotels Near <br /> You in real- time instantly{" "}
                <br /> with{" "}
                <span className="text-[#259F72] font-voltaire">Ethereal</span>
              </p>
              <p className="text-center font-poppins text-[#808080] text-opacity-80 mt-1 mb-4 text-[10px]">
                Whether you're new in town or just need a<br /> quick stay
                nearby, Ethereal shows you
                <br /> every hotel around you, in real-time.
              </p>

              <Email />

              <div className="mt-3 relative overflow-hidden">
                <img src={heroPhone} alt="" className="" />
                <div className="absolute w-full h-[200px] -bottom-1 z-10 bg-gradient-to-t from-white/100 via-white/80 to-white/10 bg-opacity-100 " />
                <div className="absolute h-[50px] bottom-0 bg-[#e8e9e9] w-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
