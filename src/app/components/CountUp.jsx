"use client";

import React from "react";
import CountUp from "react-countup";

const CountsUp = () => {
  return (
    <div>
      <div className=" rounded-[24px] bg-card-hover-gradient py-6 px-6 md:px-20">
        <div className="flex flex-wrap gap-6 sm:gap-0">
          <div className="w-full sm:w-3/12 ">
            <CountUp start={0} end={12} duration={2.75} startOnMount={true}>
              {({ countUpRef, start }) => (
                <div>
                  <div className="flex justify-center">
                    <span
                      className="font-bold text-3xl md:text-5xl lg:text-6xl text-black"
                      ref={countUpRef}
                    />
                    <span
                      className="font-bold text-3xl md:text-5xl lg:text-6xl text-black"
                      onClick={start}
                    >
                      +
                    </span>
                  </div>
                </div>
              )}
            </CountUp>
            <p className="font-normal text-base sm:text-xl lg:text-2xl text-black tracking-[5%] text-center">
              Years of Experience
            </p>
          </div>
          <div className="w-full sm:w-6/12">
            <CountUp start={0} end={800} startOnMount={true}>
              {({ countUpRef, start }) => (
                <div>
                  <div className="flex justify-center">
                    <span
                      className="font-bold text-3xl md:text-5xl lg:text-6xl text-black"
                      ref={countUpRef}
                    />
                    <span
                      className="font-bold text-3xl md:text-5xl lg:text-6xl text-black"
                      onClick={start}
                    >
                      +
                    </span>
                  </div>
                  <p className="font-normal text-base sm:text-xl lg:text-2xl text-black tracking-[5%] text-center">
                    Satisfied customers
                  </p>
                </div>
              )}
            </CountUp>
          </div>
          <div className="w-full sm:w-3/12">
            <CountUp start={0} end={99} startOnMount={true}>
              {({ countUpRef, start }) => (
                <div>
                  <div className="flex justify-center">
                    <span
                      className="font-bold text-3xl md:text-5xl lg:text-6xl text-black"
                      ref={countUpRef}
                    />
                    <span
                      className="font-bold text-3xl md:text-5xl lg:text-6xl text-black"
                      onClick={start}
                    >
                      %
                    </span>
                  </div>
                  <p className="font-normal text-base sm:text-xl lg:text-2xl text-black tracking-[5%] text-center">
                    Cybersecurity guarant
                  </p>
                </div>
              )}
            </CountUp>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountsUp;
