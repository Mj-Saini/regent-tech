"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FacebookIcon,
  TelIcon,
  TwitterIcon,
  YouTubeIcon,
  HeaderEmailIcon,
  DropdownIcon,
} from "./Icons";
import logo from "../../../public/assets/images/svg/logo.svg";
import { headerData } from "./Helper";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const location = usePathname();
  const [toggleNav, setToggleNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (toggleNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up the effect when the component is unmounted or toggleNav changes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [toggleNav]);
  const handleMouseEnter = (tab) => {
    if (tab.submenu) {
      setDropdown(tab.path);
    }
  };

  const handleMouseLeave = () => {
    setDropdown(null);
  };

  const isActive = (path) => {
    if (path === "/") {
      return location === "/";
    }
    return location.startsWith(path);
  };
  return (
    <div className={` duration-300 ${isScrolled ? "bg-black" : ""}`}>
      <div className={`py-5 px-5 md:px-10 mx-auto `}>
        <div className="bg-[#51F1F9] py-2.5 px-3 sm:px-5 rounded-[20px] flex flex-col-reverse sm:flex-row items-center justify-between">
          <div className="flex flex-col md:flex-row gap-2 lg:gap-[54px] lg:items-center">
            <div className="flex gap-2 items-center">
              <span className="md:flex text-sm sm:text-base font-normal text-white capitalize items-center justify-center w-6 h-6 bg-black rounded-full">
                <TelIcon />
              </span>{" "}
              <a
                href="tel:+91 - 81460 73609"
                className="font-medium text-base text-black flex gap-1 lg:gap-3 items-center"
              >
                <span className="font-normal text-sm sm:text-base text-black">
                  Sales Enquiry :
                </span>
                +91 - 81460 73609
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <span className="md:flex text-sm sm:text-base font-normal text-white capitalize items-center justify-center w-6 h-6 bg-black rounded-full">
                <HeaderEmailIcon />
              </span>

              <a
                href="mailto: archit@regentdigitech.com"
                className="font-medium text-sm sm:text-base text-black gap-1 lg:gap-3"
              >
                <span className="font-normal text-sm sm:text-base text-black">
                  Email:-
                </span>{" "}
                archit@regentdigitech.com
              </a>
            </div>
          </div>
          <div className="flex gap-3 lg:gap-[18px] mb-3 sm:mb-0">
            <a target="_blank" href="https://x.com/i/flow/login?redirect_after_login=%2Fregentdigitech">
              <TwitterIcon />
            </a>
            <a target="_blank" href="https://www.facebook.com/regentdigitech">
              <FacebookIcon />
            </a>
            <a target="_blank" href="https://www.youtube.com/channel/UC3Tx6EsLQBmOclTSsDp2jLw">
              <YouTubeIcon />
            </a>
          </div>
        </div>
        <div
          className={`mt-5 flex items-center bg-header-gradient rounded-[20px] pe-5 lg:pe-10 
           justify-end py-4 md:py-[21px] 
          `}
        >
          <span
            className={`flex justify-center items-center bg-white !ms-0
               sm:w-[250px] lg:w-[302px] w-[150px] h-[70px] md:h-[86px] absolute left-0 md:top-[75px] rounded-e-[50px] 
               py-5 px-5`}
          >
            <Link href="/">
              <Image className={`w-32 md:w-[180px] `} src={logo} alt="logo" />
            </Link>
          </span>
          <div
            className={` flex gap-5 xl:gap-[50px] max-lg:fixed top-0 max-lg:h-screen max-lg:w-screen max-lg:items-center max-lg:justify-center flex-col lg:flex-row bg-black lg:bg-transparent duration-300 ${
              !toggleNav ? "-left-full" : "left-0"
            }`}
          >
            {headerData.map((tab, index) => (
              <div
                onMouseEnter={() => handleMouseEnter(tab)}
                onMouseLeave={handleMouseLeave}
                onClick={() => {
                  setToggleNav(false);
                  if (tab.path === "/about-us") setDropdown(null);
                }}
                key={index}
                className="relative"
              >
                <Link
                  href={tab.path}
                  className={`font-medium text-lg capitalize hover:text-[#53F3FB] duration-300 flex items-center gap-3 justify-between ${
                    isActive(tab.path) ? "text-[#53F3FB]" : "text-white"
                  }`}
                >
                  {tab.tabs} {tab.submenu && <DropdownIcon className="ml-2" />}
                </Link>
                {tab.submenu && dropdown === tab.path && (
                  <div className="absolute top-full left-0 bg-card_hover_gradient rounded-lg shadow-lg z-50 overflow-hidden w-[140px] ">
                    {tab.submenu.map((item, subIndex) => (
                      <Link
                        key={subIndex}
                        href={item.path}
                        className="font-medium text-base capitalize hover:bg-[#53F3FB] text-white hover:text-black duration-300 px-2 py-2 block "
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div
            onClick={() => setToggleNav(!toggleNav)}
            className="flex flex-col justify-between h-5 w-6 lg:hidden z-[100] relative cursor-pointer duration-300"
          >
            <span
              className={` border-[3px] w-full rounded-sm duration-300 ${
                toggleNav
                  ? "translate-y-[8px] -rotate-45 border-[#53F3FB]"
                  : "border-[#53F3FB]"
              }`}
            ></span>
            <span
              className={` border-[3px] w-full rounded-sm duration-300 ${
                toggleNav ? "rotate-45 border-[#53F3FB]" : "border-[#53F3FB]"
              }`}
            ></span>
            <span
              className={` border-[3px] w-full rounded-sm duration-300 ${
                toggleNav ? "opacity-0 border-[#53F3FB]" : "border-[#53F3FB]"
              }`}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
