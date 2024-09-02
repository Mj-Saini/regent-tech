"use client";
import React from "react";
import { SecurityLockIcon } from "./Icons";

const SecuritiesCards = ({ mapData }) => {
  return (
    <div className="relative px-3 py-5 md:p-5 h-full group z-10 security_card border-2 border-[#009CB9] rounded-[20px] hover:bg-card_hover_gradient">
      <span className="absolute -top-8 sm:-top-10 left-[48%] -translate-x-1/2 flex items-center justify-center w-[60px] sm:w-[70px] h-[60px] sm:h-[70px] border border-[#009CB9] rounded-full bg-black group-hover:bg-[#009CB9] duration-300 group ">
        {mapData.icon || <SecurityLockIcon />}
      </span>
      <h2 className="text-lg md:text-2xl font-semibold text-center pt-5 md:pt-10 text-white">
        {mapData.heading}
      </h2>
      <p className={`font-normal text-base md:text-lg text-white text-center pt-2 md:pt-5 pb-4 md:pb-10 leading-6 ${mapData.cardStyling}`}>
        {mapData.description}
      </p>
      <p className="font-normal text-base md:text-lg text-white text-center leading-6">
        {mapData.dial}
      </p>
    </div>
  );
};

export default SecuritiesCards;
