"use client";
import Hero from "../components/Hero";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonialData } from "../components/Helper";
import { ReviewStar } from "../components/Icons";
import Image from "next/image";
import heroImg from "../../../public/assets/images/webp/partners-hero-bg-img.webp";
import profileImg from "../../../public/assets/images/svg/regent_icon.svg";
import Slider from "react-slick";
import { useState } from "react";

export default function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const MAX_LENGTH = 150;

  return (
    <div>
      <Hero
        heading1=""
        heading2="Testimonials"
        display="hidden"
        btn1Styling="hidden"
        btn2Styling="hidden"
        heroSection="min-h-[calc(80vh-174px)]"
        descriptionStyling=""
        heroBgImg={heroImg}
        heroImg="fixed"
        contentStyling="w-full md:w-9/12 xl:w-7/12 md:pe-16"
        heroHeading="!items-center !pt-[60px]"
        description="Our clients consistently praise Regent Digitech for our innovative solutions and exceptional service. They highlight our expertise in seamlessly integrating cutting-edge security technologies and our commitment to tailored, effective support. Their success stories drive us forward."
      />

      <section className="relative lg:px-10 bg-Star_bg bg-black">
        <span
          className={`bg-[#2FCADB99]/20 inline-block sm:w-[393px] sm:h-[393px] rounded-full blur-[100px] absolute -top-44 -end-[200px] z-[1] `}
        ></span>
        <span
          className={`bg-[#2FCADB99]/20 inline-block sm:w-[393px] sm:h-[393px] rounded-full blur-[100px] absolute top-0 -left-[100px] z-[1] `}
        ></span>
        <div className="py-10 px-5 md:py-20 container max-w-[1340px] 2xl:max-w-[1550px] mx-auto relative">
          <div className="flex flex-col items-center z-[3] relative">
           

            <div className="mt-6 lg:mt-[50px] flex flex-wrap justify-center -mx-6 w-full">
              <Slider {...settings} className="w-full  flex">
                {testimonialData.map((items, index) => {
                  const isExpanded = expandedCards[index];
                  const truncatedDescription =
                    items.description.length > MAX_LENGTH
                      ? items.description.substring(0, MAX_LENGTH) + "..."
                      : items.description;
                  return (
                    <div
                      key={index}
                     
                      className="w-full flex sm:px-6 mt-16 h-full px-2"
                    >
                      <div className="relative px-3 py-5 md:p-5  group z-10 security_card border-2 border-[#009CB9] rounded-[20px] hover:bg-card_hover_gradient">
                        <span className="absolute -top-8 sm:-top-10 left-1/2 lg:left-4  -translate-x-1/2 flex items-center justify-center w-[60px] sm:w-[70px] h-[60px] sm:h-[70px] border border-[#009CB9] rounded-full bg-black duration-300 ">
                          <Image
                            className="w-1/2"
                            src={profileImg}
                            alt="user-profile"
                          />
                        </span>
                        <div className="flex flex-col justify-between pt-4">
                          <div className="mb-2">
                            <h2 className="text-lg md:text-2xl font-semibold text-white line-clamp-1">
                              {items.heading}
                            </h2>
                            <p className="font-normal text-base md:text-lg text-white">
                              {items.roll}
                            </p>
                            <p className="font-normal text-base text-white flex gap-2.5 mt-1">
                              4.5
                              <span className="flex gap-1 items-center">
                                <ReviewStar />
                                <ReviewStar />
                                <ReviewStar />
                                <ReviewStar />
                                <ReviewStar />
                              </span>
                            </p>
                          </div>

                          <p
                           onClick={() => toggleExpand(index)}
                            className={`font-normal text-base md:text-lg text-white pt-2 md:pt-[18px] pb-4 md:pb-10 leading-6 overflow-y-auto h-[140px]`}
                          >
                            {isExpanded
                              ? items.description
                              : truncatedDescription}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
