"use client";
/* eslint-disable react/no-unescaped-entities */

import React, { useEffect, useState } from "react";
import CommonBtn from "./CommonBtn";
import Image from "next/image";
import lineImg from "../../../public/assets/images/png/hero-toggle-line.png";

const Hero = ({
  heading1,
  heading2,
  heading3,
  description,
  display,
  heroBgImg,
  btn1,
  btn2,
  btn1Styling,
  btn2Styling,
  contentStyling,
  aboutBtn,
  descriptionStyling,
  heroHeading,
  heroSection,
  heroImg,
}) => {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector(".hero-section").offsetHeight;
      const scrollPosition = window.scrollY;
      setShowOverlay(scrollPosition > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`hero-section py-5 px-5 mb-12 flex container max-w-[1340px] 2xl:max-w-[1550px] mx-auto ${heroSection}`}
    >
      {!showOverlay && (
        <div className="bg-marged-gradient absolute -bottom-20 end-0  w-1/2 ms-auto h-[128px] z-[1]"></div>
     )} 
      {!showOverlay && (  <Image className={`${heroImg} top-0 left-0 z-0 h-screen object-cover bg-right bg-no-repeat`}
        src={heroBgImg}
        alt="hero-img"
      />  )}
      <div className={`flex items-center relative z-10 ${heroHeading}`}>
        <div className={` relative ${contentStyling}`}>
          <div className="flex flex-col gap-4 lg:gap-[50px]">
            <h1 className="font-normal text-[26px] sm:text-4xl md:text-[46px] xl:text-6xl md:leading-[52px] xl:leading-[72px] text-white ">
              <Image
                className={`absolute top-1/2 -translate-y-[62%] -left-4 w-[61px] h-[190px] ${display}`}
                src={lineImg}
                alt="line-vector"
              />
              {heading1}
              <span className="font-semibold text-3xl sm:text-5xl md:text-[50px] xl:text-[72px] text-[#54F4FC]">
                {heading2}
              </span>{" "}
              {heading3}
            </h1>
            <p
              className={`font-normal text-lg text-[#D7D7D7] ${descriptionStyling}`}
            >
              {description}
            </p>
            <div className="flex gap-4 md:gap-8">
              <CommonBtn
                aboutBtn={aboutBtn}
                btn1Styling={btn1Styling}
                btnName={btn1}
                btnCss="bg-[#53F3FB]  text-black text-base border-[#53F3FB] rounded-[10px]"
              />
              <CommonBtn
                btn2Styling={btn2Styling}
                btnName={btn2}
                btnCss="hover:bg-[#53F3FB] border-[#53F3FB] text-[#53F3FB] hover:text-black text-base rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
