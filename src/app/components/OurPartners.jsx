import React from "react";
import Slider from "react-slick";
import redlogo from "../../../public/assets/images/svg/sas-partner.svg";
import pvcusLogo from "../../../public/assets/images/svg/aws-logo.svg";

import Image from "next/image";

const OurPartners = () => {
  const settingsToRight = {
    dots: false,
    infinite: true,
    speed: 2500, // Adjust speed as needed
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1, // Set to 1 for continuous sliding without pause
    cssEase: "linear",
    variableWidth: true,
    pauseOnHover: true,
    rtl: false,
    draggable: false,
    swipeToSlide: false,
    touchMove: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const settingsToLeft = {
    ...settingsToRight,
    rtl: true, // Right-to-left direction for the second slider
  };

  const logos = new Array(14).fill(redlogo);
  const pvcusLogos = new Array(14).fill(pvcusLogo);

  return (
    <section className="relative px-5 pt-10">
      <span className="bg-[#2FCADB99]/20 inline-block sm:w-[493px] sm:h-[493px] rounded-full blur-[100px] absolute -top-32 -left-[150px] z-0"></span>
      <div className="py-12 lg:p-[50px] text text-center md:mt-10 relative z-[1] max-w-[1340px] 2xl:max-w-[1550px] mx-auto overflow-hidden">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[56px] lg:leading-[65px] text-center font-medium text-white">
          Our Technology Partners
        </h1>
        <p className="text-base sm:text-xl lg:text-2xl font-normal mt-5 text-[#54F4FC]">
          Delivering Security Solutions for leading brands
        </p>
        <div className=" mt-[50px] sm:mt-10 bg-gray-bg-gradient rounded-[30px] shadow-[0px_0px_185.6px_0px_#0000002B] py-5 overflow-hidden">
          <div className="">
            <Slider {...settingsToRight} className="slider">
              {logos.map((logo, index) => (
                <div key={index} className="slider-item">
                  <Image src={logo} alt={`partner-logo-${index}`} />
                </div>
              ))}
            </Slider>
          </div>

          <div className="slider-container">
            <Slider {...settingsToLeft} className="slider">
              {pvcusLogos.map((logo, index) => (
                <div key={index} className="slider-item">
                  <Image src={logo} alt={`pvcus-logo-${index}`} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
