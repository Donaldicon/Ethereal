import React, { useEffect, useState, use } from "react";
import Logo from "../assets/logo/ethereal-logo.png";
import lineOne from "../assets/modal/Line 119.png";
import lineTwo from "../assets/modal/Line 120.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

import { HashLink } from "react-router-hash-link";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import axios from "axios";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const link = 'https://docs.google.com/forms/d/1YEpd41kVzNZT6Y9mBn5nXbA1bYXQMxgBmgpX1Z_Tjg8/viewform?edit_requested=true'

  const openModal = (modalData) => {
    setIsModalOpen(true);
    setModalContent(modalData);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isModalOpen]);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleWindow = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "Expanded National Reach & Visibility",
      content: (
        <>
          Showcase your hotel to a vast network of travelers and tourists across
          the entire country, gaining significantly more visibility with a wider
          audience than ever before.
        </>
      ),
    },
    {
      title: "Precision Local Targeting",
      content:
        "Your hotel listings will intelligently appear when users are within your vicinity, effectively putting your property right in front of travelers who are actively looking for accommodation near you.",
    },
    {
      title: "Complimentary Online Advertising",
      content:
        "Partnering with Ethereal grants your hotel free online advertising, designed to help your property stand out and attract attention midst the competition.",
    },
    {
      title: "Direct Guest Communication",
      content:
        "Facilitate easy and direct contact between guests and your hotel through the app itself, allowing for swift handling of any questions or special requests.",
    },
    {
      title: "Enhanced Guest Trust & Safety",
      content:
        "Facilitate easy and direct contact between guests and your hotel through the app itself, allowing for swift handling of any questions or special requests.",
    },
    {
      title: "Boosted Online Presence with Video Reviews",
      content:
        "Take advantage of our optional feature allowing users to share live video reviews on social media. This boosts your hotel's online presence and provides authentic, dynamic promotion.",
    },
    {
      title: "Excellence Recognition on Top 50 List",
      content:
        'Gain prestigious recognition by earning a spot on our "Top 50 Hotels of the Month" list. This distinction is based on real ratings and reviews from guests and is available for hotels that opt for the video package.',
    },
  ];

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const originalOffset = navbar?.offsetTop || 20;
    const handleScroll = () => {
      if (window.scrollY >= originalOffset) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [hotelEmail, setHotelEmail] = useState("");

  const onboardingFn = async function () {
    return await axios.post(`${import.meta.env.VITE_BASEURL}/emails`, {
      email: hotelEmail,
      type: "onboarding",
    });
  };

  const { mutate, isPending } = useMutation({
    mutationFn: onboardingFn,
    onSuccess: (response) => {
      toast.success(response.data.message);
      hotelEmail("");
    },
    onError: (error) => toast.error(error.response.data.message),
  });

  return (
    <div id="navbar">
      <div
        className={`bg-[#2FCC93] hidden md:flex items-center justify-between px-[1%] bigScreens:px-[13%] py-[10px] transition-all duration-700 ${
          isSticky
            ? "fixed top-0 w-full shadow-2xl z-[50] px-[20px] py-[10px]"
            : "mx-[2%] relative rounded-full"
        }`}
      >
        <HashLink smooth to="#">
          <div className="flex items-center space-x-2">
            {/* Logo */}
            <img src={Logo} alt="App Logo" className="w-12" />
            {/* Ethereal */}
            <p className="font-voltaire text-[18px] text-white text-opacity-90">
              Ethereal
            </p>
          </div>
        </HashLink>

        {/* Navigation options */}
        <div className="flex items-center justify-between space-x-7 text-white text-opacity-60 font-barlow md:text-[15px] lg:text-[17px] xl:text-[19px] font-medium">
          <button className="transition-all duration-500 ease-in-out hover:text-white">
            <HashLink smooth to="#whyus">
              Why us
            </HashLink>
          </button>
          <button className="transition-all duration-500 ease-in-out hover:text-white">
            <HashLink smooth to="#waitlist">
              Waitlist
            </HashLink>
          </button>
          <button className="transition-all duration-500 ease-in-out hover:text-white">
            <HashLink smooth to="#contact">
              Contact us
            </HashLink>
          </button>
        </div>

        <button
          className="bg-white text-[#259F72] px-5 py-3 rounded-full text-[15px] font-semibold font-barlow"
          onClick={openModal}
        >
          Partner With Us
        </button>
      </div>

      {/* mobile View */}
      <div
        className={`bg-[#2FCC93] flex md:hidden items-center justify-between py-[10px] transition-all z-[50] duration-700 fixed top-0 w-full shadow-2xl px-[10px]`}
      >
        <HashLink smooth to="#">
          <div className="flex items-center space-x-2">
            {/* Logo */}
            <img src={Logo} alt="App Logo" className="w-7" />
            {/* Ethereal */}
            <p className="font-voltaire text-[15px] text-white text-opacity-90">
              Ethereal
            </p>
          </div>
        </HashLink>

        <div
          onClick={toggleNavbar}
          className="transition-all duration-1000 ease-in-out"
        >
          <div className="flex items-center flex-col space-y-1 cursor-pointer">
            <span
              className={`h-[1px] w-[10px] bg-white transition-all duration-700 ease-in-out ${
                isOpen ? "w-[22px] rotate-45 translate-y-[4.5px]" : ""
              }`}
            />
            <span
              className={`h-[1px] w-[15px] bg-white transition-all duration-700 ease-in-out ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[1px] w-[10px] bg-white transition-all duration-700 ease-in-out ${
                isOpen ? "w-[22px] -rotate-45 -translate-y-[5px]" : ""
              }`}
            />
          </div>
        </div>

        <div
          className={`absolute top-[48px] left-0 bg-black transition-all duration-700 ease-in-out w-full ${
            isOpen ? "h-[200px] opacity-100" : "h-0 opacity-0"
          }`}
        >
          {isOpen && (
            <div>
              {/* Navigation options */}
              <div
                className={`flex flex-col items-center justify-center space-y-7 text-white text-opacity-60 font-barlow text-[15px] font-medium pt-3`}
                onClick={toggleNavbar}
              >
                <button className="transition-all duration-500 ease-in-out hover:text-white">
                  <HashLink smooth to="#whyus">
                    Why us
                  </HashLink>
                </button>
                <button className="transition-all duration-500 ease-in-out hover:text-white">
                  <HashLink smooth to="#waitlist">
                    Waitlist
                  </HashLink>
                </button>
                <button className="transition-all duration-500 ease-in-out hover:text-white">
                  <HashLink smooth to="#contact-M">
                    Contact us
                  </HashLink>
                </button>

                <button
                  className="font-semibold font-barlow"
                  onClick={openModal}
                >
                  Partner With Us
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-70 backdrop-blur-sm z-50 flex items-center justify-center ">
          <div className="bg-white w-[90%] text-black h-[90%] rounded-2xl shadow-2xl py-7 px-[5%] overflow-y-auto scrollbar-hide">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center space-x-1 mb-1 md:mb-2 mx-auto">
                <p className="font-voltaire text-[#2FCC93] text-[18px] md:text-[20px] xl:text-[24px]">
                  Ethereal
                </p>
                <img
                  src={Logo}
                  alt="Ethereal Logo"
                  className="w-[22px] md:w-[30px] xl:w-[35px] shadow-lg rounded-full"
                />
              </div>
              <div
                className="text-[12px] xl:text-[15px] w-5 h-5 xl:w-8 xl:h-8 flex items-center -mt-[4px] justify-center bg-[#F0F1F3] text-[#363636] rounded-full cursor-pointer"
                onClick={closeModal}
              >
                <FontAwesomeIcon icon={faX} />
              </div>
            </div>
            <p className="text-center font-barlow text-[20px] leading-[25px] md:text-[25px] md:leading-[30px] xl:text-[30px] xl:leading-[35px] font-bold text-[#363636]">
              Elevate Your Hotel's Reach
              <br />
              <span className="font-medium font-voltaire text-[20px] md:text-[24px]">
                Partner with Us...
              </span>
            </p>
            <p className="text-center mt-3 text-[#808080] text-[10px] md:text-[12px] xl:text-[15px] font-poppins px-[8%] lg:px-[10%] xl:px-[15%]">
              Welcome to the dawn of a new future for your hotel. Share your
              email below, and we'll send you a comprehensive form to begin your
              onboarding journey with Ethereal.
            </p>

            <div className="flex justify-center mt-3 md:mt-4">
              <Link to={link} className="text-[#2FCC93] text-[12px] md:text-[14px] xl:text-[16px] font-barlow font-medium">
                Click here to Access the Onboarding form
              </Link>
            </div>

            <p className="font-barlow text-[#DADBDD] text-center text-[11px] md:text-[12px] xl:text-[14px] my-1">
              OR
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                mutate();
              }}
            >
              <div className="relative flex items-center justify-center w-[90%] md:w-[60%] max-w-[500px] mx-auto">
                <input
                  type="text"
                  placeholder="Enter your hotel's email address"
                  required
                  value={hotelEmail}
                  className="text-[#C5C5C5] placeholder:text-[#C5C5C5] text-[10px] placeholder:text-[10px] md:text-[12px] md:placeholder:text-[12px] xl:text-[14px] xl:placeholder:text-[14px] outline-none  py-4 pl-2 w-full bg-[#F5F6F7] pr-[90px] md:pr-[105px] font-poppins placeholder:font-poppins"
                  onChange={(e) => setHotelEmail(e.target.value)}
                />
                <div className="absolute right-2">
                  <button
                    className="font-barlow text-[12px] md:text-[15px] text-white bg-[#2FCC93] py-2 px-2"
                    type="submit"
                  >
                    {isPending ? "Loading..." : "Get Started"}
                  </button>
                </div>
              </div>
            </form>

            <div className="flex items-center justify-center mt-8 mb-5">
              <img src={lineTwo} alt="" className="w-[35%]" />
              <p className="font-barlow italic text-[#363636] text-[17px] md:text-[22px] font-bold">
                Key Benefits
              </p>
              <img src={lineOne} alt="" className=" w-[35%]" />
            </div>

            <div className="flex flex-col mx-auto space-y-3 w-[92%] md:w-[80%] 2xl:w-[70%] font-barlow">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="bg-[#F0F1F3]  md:mb-3 text-[12px] md:text-[14px] text-[#808080] xl:text-[16px] px-2 md:px-5 py-3 md:py-4 xl:py-5"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-[#363636]"> {section.title}</p>
                    <FontAwesomeIcon
                      icon={faChevronUp}
                      className={`text-[#363636] transition-all duration-300  ${
                        openIndex === index ? "rotate-180" : "rotate-0"
                      }`}
                      onClick={() => toggleWindow(index)}
                    />
                  </div>
                  {openIndex === index && (
                    <div className="mt-2 md:mt-4 text-[10px] md:text-[12px] xl:text-[14px] w-[95%] font-poppins">
                      {section.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
