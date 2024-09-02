import React from "react";
import { RightTickMark } from "./Icons";
import solutionCardImg from "../../../public/assets/images/svg/solution-card.svg";
import Image from "next/image";

const SolutionsCard = ({ keysData }) => {
  return (
    <div className="relative p-3 md:p-5 h-full group z-10 security_card border-2 border-[#009CB9] rounded-[20px] hover:bg-card_hover_gradient flex flex-col justify-center">
      {/* <Image
        className="absolute top-0 left-0 w-full h-full z-0 object-fit"
        src={solutionCardImg}
        alt="solution-card"
      /> */}
      <span className="absolute top-0 right-0 flex items-center justify-center w-10 h-10 border border-[#009CB9] rounded-full bg-black group-hover:bg-[#009CB9] duration-300 ">
        <RightTickMark />
      </span>
      <h2 className="text-lg md:text-2xl font-semibold text-white capitalize">
        {keysData.heading}
      </h2>
      <p className="font-normal text-sm text-white leading-6">
        {keysData.about}
      </p>
      
    </div>
  );
};

export default SolutionsCard;
