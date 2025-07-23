import React, { useState } from "react";

import { easeInOut, motion } from "framer-motion";

import { HashLink } from "react-router-hash-link";

import Logo from "../assets/logo/ethereal-logo.png";

import arrowUpRight from "../assets/logo/arrow-up-righ.png";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const Footer = () => {
  const [entryEmail, setEntryEmail] = useState("");

  const newsletterFn = async function () {
    return await axios.post(`${import.meta.env.VITE_BASEURL}/emails`, {
      email: entryEmail,
      type: "newsletter",
    });
  };

  const { mutate, isPending } = useMutation({
    mutationFn: newsletterFn,
    onSuccess: (response) => {
      toast.success(response.data.message);
      setEntryEmail("");
    },
    onError: (error) => toast.error(error.response.data.message),
  });

  const currentYear = new Date().getFullYear();
  return (
    <section>
      <div className="mt-10 bg-[#000000] text-[#5B5B5B] font-poppins px-[2%] py-[3%] rounded-3xl overflow-visible hidden md:block">
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col w-[50%]">
            <div className="flex items-center space-x-2 xl:space-x-3">
              <img src={Logo} alt="" className="md:w-8 lg:w-10 xl:w-12" />
              <p className="text-[#34E0A1] md:text-[24px] lg:text-[28px] xl:text-[32px] font-voltaire">
                Ethereal
              </p>
            </div>
            <p className="mt-2 mb-3 xl:mb-5 xl:mt-5 md:text-[11px] lg:text-[13px] xl:text-[15px]">
              "Late night? No sweat. Ethereal helps you find a place <br /> to
              sleep when time is of the essence.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                mutate();
              }}
            >
              <div className="relative w-[295px] lg:w-[347px] xl:w-[400px]">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={entryEmail}
                  required
                  placeholder="Your Email Address"
                  className="font-barlow placeholder:font-barlow md:text-[11px] lg:text-[13px] xl:text-[15px] placeholder:md:text-[11px] placeholder:lg:text-[13px] placeholder:xl:text-[15px] w-full text-[#AAABAD] pl-3 outline-none py-3 xl:py-4 pr-[120px] lg:pr-[135px]"
                  onChange={(e) => setEntryEmail(e.target.value)}
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2">
                  <button
                    className="bg-[#2FCC93] md:text-[10px] lg:text-[12px] xl:text-[12px] text-white py-2 px-3 transition-all duration-700 ease-in-out hover:text-[#2fcc93]  hover:bg-white"
                    type="submit"
                  >
                    {isPending ? "Loading..." : "Newsletter"}
                  </button>
                </div>
              </div>
            </form>

            <p className="font-barlow mt-3 text-[#363636] md:text-[11px] lg:text-[13px] xl:text-[15px] ">
              Copyright © {currentYear} Ethereal. All rights reserved.
            </p>
          </div>

          <div className="space-y-[30%] text-[#5B5B5B] md:text-[13px] lg:text-[15px] xl:text-[18px] flex flex-col items-end">
            <div className="overflow-hidden">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 2, ease: easeInOut }}
                viewport={{ once: false }}
              >
                <div className="flex items-center space-x-3 cursor-pointer">
                  <HashLink smooth to="#whyus">
                    Why us
                  </HashLink>
                  <img src={arrowUpRight} alt="" />
                </div>
              </motion.div>
            </div>

            <div className="overflow-hidden">
              <motion.div
                initial={{ x: -70, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 2, ease: easeInOut }}
                viewport={{ once: false }}
              >
                <div className="flex items-center space-x-3 cursor-pointer">
                  <HashLink smooth to="#waitlist">
                    Waitlist
                  </HashLink>
                  <img src={arrowUpRight} alt="" />
                </div>
              </motion.div>
            </div>

            <div className="overflow-hidden">
              <motion.div
                initial={{ x: -90, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 2, ease: easeInOut }}
                viewport={{ once: false }}
              >
                <div className="flex items-center space-x-3 cursor-pointer">
                  <HashLink smooth to="#contact">
                    Contact Us
                  </HashLink>
                  <img src={arrowUpRight} alt="" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="bg-[#848586] h-[1px] w-full mt-4 xl:mt-6" />

        <div className="mt-2 md:text-[11px] lg:text-[13px] xl:text-[15px] text-[#363636] font-barlow flex items-center justify-center space-x-4">
          <p>Terms&Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>

      {/* Mobile View */}
      <div className="mt-10 bg-[#000000] text-[#5B5B5B] font-poppins py-5 rounded-3xl block md:hidden px-[5%]">
        <div className="flex flex-col w-full">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2 ">
              <img src={Logo} alt="" className="w-10" />
              <p className="text-[#34E0A1] text-[25px] font-voltaire">
                Ethereal
              </p>
            </div>
            <p className="mt-2 mb-5 text-[11px]">
              "Late night? No sweat. Ethereal helps you find a place <br /> to
              sleep when time is of the essence.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                mutate();
              }}
            >
              <div className="relative w-full">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email Address"
                  value={entryEmail}
                  required
                  className="font-barlow placeholder:font-barlow text-[12px] placeholder:text-[12px] w-full text-[#AAABAD] pl-3 outline-none py-3 pr-[135px]"
                  onChange={(e) => setEntryEmail(e.target.value)}
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2">
                  <button
                    className="bg-[#2FCC93] text-[12px] text-white py-2 px-3 transition-all duration-700 ease-in-out hover:text-[#2fcc93]  hover:bg-white"
                    type="submit"
                  >
                    {isPending ? "Loading..." : "Newsletter"}
                  </button>
                </div>
              </div>
            </form>

            <p className="font-barlow mt-1 text-[#363636] text-[11px]  ">
              Copyright © {currentYear} Ethereal. All rights reserved.
            </p>
          </div>

          <div className="space-y-5 mt-7 text-[#5B5B5B] text-[15px]  flex flex-col items-start">
            <div className="overflow-hidden">
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 2, ease: easeInOut }}
                viewport={{ once: false }}
              >
                <div className="flex items-center space-x-3 cursor-pointer">
                  <HashLink smooth to="#whyus">
                    Why us
                  </HashLink>
                  <img src={arrowUpRight} alt="" />
                </div>
              </motion.div>
            </div>

            <div className="overflow-hidden">
              <motion.div
                initial={{ x: 70, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 2, ease: easeInOut }}
                viewport={{ once: false }}
              >
                <div className="flex items-center space-x-3 cursor-pointer">
                  <HashLink smooth to="#waitlist">
                    Waitlist
                  </HashLink>
                  <img src={arrowUpRight} alt="" />
                </div>
              </motion.div>
            </div>

            <div className="overflow-hidden">
              <motion.div
                initial={{ x: 90, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 2, ease: easeInOut }}
                viewport={{ once: false }}
              >
                <div className="flex items-center space-x-3 cursor-pointer">
                  <HashLink smooth to="#contact-M">
                    Contact Us
                  </HashLink>
                  <img src={arrowUpRight} alt="" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="bg-[#848586] h-[1px] w-full mt-4 xl:mt-6" />

        <div className="mt-2 text-[11px]  text-[#363636] font-barlow flex items-center justify-center space-x-4">
          <p>Terms&Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
