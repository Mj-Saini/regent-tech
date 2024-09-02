import React from "react";

const CommonBtn = ({ btnName, btnCss, btn2Styling, btn1Styling, aboutBtn }) => {
  return (
    <button
      className={`px-3 md:px-9 py-2 md:py-[15px] font-medium capitalize border hover:shadow-custom-shadow duration-300 ${btnCss} ${btn1Styling} ${btn2Styling} ${aboutBtn}`}
    >
      {btnName}
    </button>
  );
};

export default CommonBtn;
