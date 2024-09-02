/* eslint-disable react/no-unescaped-entities */
import React from "react";

const SolutionsKeyButton = ({ mapData }) => {
  return (
    <button className="font-bold text-xl md:text-2xl text-blalk bg-[#53F3FB] rounded-[15px] py-2.5 sm:py-[18px] px-3 sm:px-5 w-full sm:w-[424px] flex justify-between items-center capitalize">
      <span className="bg-black inline-block h-5 sm:h-[34px] w-5 sm:w-[34px] rounded-full "></span>
      {mapData.KeyButton}
    </button>
  );
};

export default SolutionsKeyButton;
