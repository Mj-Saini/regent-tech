"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import logo from "../../../public/assets/images/svg/logo.svg";
import {
  EmailIcon,
  FacebookIcon,
  InstaIcon,
  LinkdinIcon,
  TelIcon,
  TwitterIcon,
} from "./Icons";

const Footer = () => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  const location = usePathname();
  const currentYear = new Date().getFullYear();
  return (
    <div className="relative bg-black z-[1]">
      <div className="py-5 !pb-0 px-5 max-w-[1340px] 2xl:max-w-[1550px] mx-auto bg-common-background relative">
        <span
          className={`bg-[#2FCADB99]/20 inline-block sm:w-[393px] sm:h-[393px] rounded-full blur-[100px] absolute top-0 -end-[100px] z-0  ${
            location === "/" || location === "/about-us" ? "block" : "hidden"
          }`}
        ></span>{" "}
        <div className="flex flex-wrap justify-between bg-gray-bg-gradient p-6 md:p-10 xl:p-12 rounded-[20px] relative z-[1]">
          <div className="w-full lg:w-4/12 relative">
            <span
              className={`bg-[#2FCADB99]/20 inline-block sm:w-[393px] sm:h-[393px] rounded-full blur-[100px] absolute -bottom-24 -left-24 z-0  ${
                location === "/our-offerings/solutions" ||
                location === "/contacts-us"
                  ? "block"
                  : "hidden"
              }`}
            ></span>
            <span className="p-2.5 rounded-[20px] bg-header-gradient flex items-center justify-center w-[135px] md:w-[224px] h-[70px] md:h-[92px] mx-auto sm:ms-0 relative z-[2]">
              <Link onClick={scrollToTop} href="/">
                <Image className="w-32 md:w-[180px]" src={logo} alt="logo" />
              </Link>
            </span>
            <p className="font-normal text-base text-white mt-5 lg:pe-10 xl:pe-0 text-center sm:text-start relative z-[2]">
              We are one of leading system integrator in the field of Cyber
              security, offering fresh and easy to adopt technologies for
              enterprises.
            </p>
            <div className="footer_social_icon flex items-center gap-4 mt-5 relative z-[2]">
              <a
                target="_blank"
                href="https://www.linkedin.com/company/regentdigitech/"
              >
                <LinkdinIcon />
              </a>
              <a target="_blank" href="https://www.instagram.com/regentdigitech?igsh=NGk0ZXFldjlkcjEx">
                <InstaIcon />
              </a>
              <a target="_blank" href="https://www.facebook.com/regentdigitech">
                <FacebookIcon />
              </a>
              <a
                target="_blank"
                href="https://x.com/i/flow/login?redirect_after_login=%2Fregentdigitech"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-8/12 xl:w-7/12 mt-6 lg:mt-0 relative z-[2]">
            <div className="flex flex-wrap">
              <div className="w-full sm:w-4/12">
                <h2 className="font-bold text-xl text-white tracking-[2%] capitalize">
                  Our Services
                </h2>
                <div className="mt-3 md:mt-5 flex flex-col gap-2 md:gap-4">
                  <span>
                    <Link 
                    onClick={scrollToTop}
                      href="/our-offerings/services"
                      className="text-base font-normal text-white/80 hover:text-[#009CB9] duration-300"
                    >
                      Data Security
                    </Link>
                  </span>
                  <span>
                    <Link 
                    onClick={scrollToTop}
                      href="/our-offerings/services"
                      className="text-base font-normal text-white/80 hover:text-[#009CB9] duration-300"
                    >
                      Network Security
                    </Link>
                  </span>
                  <span>
                    <Link 
                    onClick={scrollToTop}
                      href="/our-offerings/services"
                      className="text-base font-normal text-white/80 hover:text-[#009CB9] duration-300"
                    >
                      Application Security
                    </Link>
                  </span>
                  <span>
                    <Link 
                    onClick={scrollToTop}
                      href="/our-offerings/services"
                      className="text-base font-normal text-white/80 hover:text-[#009CB9] duration-300"
                    >
                      Database Security
                    </Link>
                  </span>
                </div>
              </div>
              <div className="w-full sm:w-3/12 mt-6 sm:mt-0">
                <h2 className="font-bold text-xl text-white tracking-[2%] capitalize">
                  pages
                </h2>
                <div className="mt-3 md:mt-5 flex flex-col gap-2 md:gap-4">
                  <span>
                    <Link 
                    onClick={scrollToTop}
                      href="/"
                      className="text-base font-normal text-white/80 hover:text-[#009CB9] duration-300"
                    >
                      Home
                    </Link>
                  </span>
                  <span>
                    <Link 
                    onClick={scrollToTop}
                      href="/about-us"
                      className="text-base font-normal text-white/80 hover:text-[#009CB9] duration-300"
                    >
                      About Us
                    </Link>
                  </span>
                  <span>
                    <Link 
                    onClick={scrollToTop}
                      href="/contacts-us"
                      className="text-base font-normal text-white/80 hover:text-[#009CB9] duration-300"
                    >
                      Contact Us
                    </Link>
                  </span>
                  <span>
                    <Link 
                    onClick={scrollToTop}
                      href="/terms-condition"
                      className="text-base font-normal text-white/80 hover:text-[#009CB9] duration-300"
                    >
                      Term of use
                    </Link>
                  </span>
                  <span>
                    <Link 
                    onClick={scrollToTop}
                      href="/privacy-policy"
                      className="text-base font-normal text-white/80 hover:text-[#009CB9] duration-300"
                    >
                      Privacy policy
                    </Link>
                  </span>
                </div>
              </div>
              <div className="w-full sm:w-5/12 mt-6 sm:mt-0">
                <h2 className="font-bold text-xl text-white tracking-[2%] capitalize">
                  Contact Us
                </h2>
                <div className="mt-5 flex flex-col gap-4">
                  <div className="flex gap-3 xl:gap-5">
                    <span className="flex justify-center items-center w-6 h-6 bg-white rounded-full footer_tel_icon">
                      <TelIcon />
                    </span>{" "}
                    <a
                      className="font-normal text-base text-white/80"
                      href="tel:+91-81460-73609"
                    >
                      Phone: +91-81460-73609
                    </a>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex gap-3 xl:gap-5">
                      <span className="flex justify-center items-center w-6 h-6 bg-white rounded-full ">
                        <EmailIcon />
                      </span>
                      <a
                        className="font-normal text-base text-white/80 "
                        href="mailto:archit@regentdigitech.com"
                      >
                        Email: archit@regentdigitech.com <br />{" "}
                        support@regentdigitech.com
                      </a>
                    </div>
                    <br />
                    <a
                      className="font-normal text-base text-white/80 "
                      href="mailto: support@regentdigitech.com"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="font-normal text-center text-base text-white lg:py-6 py-4 relative z-[2]">
          © 2016 – {currentYear} All Rights Reserved. Regent Digitech Pvt. Ltd.
        </p>
      </div>
    </div>
  );
};

export default Footer;
