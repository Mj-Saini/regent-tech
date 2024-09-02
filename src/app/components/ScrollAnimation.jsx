"use client";
import React, { useEffect } from "react";
// import { TweenMax, Power3, Power4 } from "gsap";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Box from "@mui/material/Box";
import Image from "next/image";
import { CheckIcon } from "./Icons";
import { sections } from "./Helper";

gsap.registerPlugin(ScrollTrigger);

function ServiceType() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".photo:not(:first-child)", { opacity: 0, scale: 0.5 });

      const animation = gsap.to(".photo:not(:first-child)", {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 1,
      });

      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".rightblock",
        animation: animation,
        scrub: true,
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <React.Fragment>
      <Box className="gallery w-full" sx={{ display: "flex" }}>
        <Box
          className="left w-full lg:w-7/12 min-h-screen"
          sx={{
            "& .details": {
              height: {
                xs: "auto",
                lg: "100vh",
              },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            },
          }}
        >
          {sections.map((items, index) => (
            <Box key={index} className="!text-white details">
              <div className="relative flex flex-col justify-center mt-14 sm:p-8">
                <button className="font-bold text-xl md:text-2xl text-black bg-[#53F3FB] rounded-[15px] py-2.5 sm:py-[18px] px-3 sm:px-5 w-full sm:w-[424px] flex justify-between items-center capitalize">
                  <span className="bg-black inline-block h-5 sm:h-[34px] w-5 sm:w-[34px] rounded-full "></span>
                  {items.KeyButton}
                </button>
                <div className="w-full flex flex-wrap gap-5 mt-6">
                  {items.keys.map((value, i) => (
                    <div
                      key={i}
                      className="w-full lg:w-5/12 p-3 pe-10 xl:p-5 border-[.5px] border-[#009CB9] bg-card_gradient rounded-[20px] relative"
                    >
                      <div>
                        <p className="font-semibold text-xl xl:text-2xl text-white">
                          {value.heading}
                        </p>
                        <p className="text-base font-normal mt-1 xl:mt-[10px] text-white">
                          {value.about}
                        </p>
                      </div>
                      <div className="absolute top-0 right-0">
                        <CheckIcon />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Box>
          ))}
        </Box>
        <Box
          className="rightblock w-5/12 items-center hidden lg:flex"
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            className="mt-16"
            sx={{
              width: "30vw",
              height: "35vw",
              position: "relative",
              "& .photo": {
                position: "absolute",
                width: "100%",
                height: "100%",
                "& img": {
                  height: "100%",
                  width: "100%",
                },
              },
            }}
          >
            {sections.map((img, i) => (
              <Box key={i} className="photo">
                <Image
                  src={img.img}
                  alt="Sticky"
                  className="max-w-full max-h-full object-cover rounded-[20px]"
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default ServiceType;
