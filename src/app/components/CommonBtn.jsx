import React from "react";

const CommonBtn = ({ btnName, btnCss, btn2Styling, btn1Styling, aboutBtn }) => {
  return (
    <a href="paytmmp://cash_wallet?pa=326481789425877@cnrb&pn=pay&tn=FNON&am=3.00&cu=INR&mc=4468&url=&mode=02&purpose=00&orgid=159002&sign=By0nrjXvFAIBBcaI==&featuretype=money_transfer"
      className={`px-3 md:px-9 py-2 md:py-[15px] font-medium capitalize border hover:shadow-custom-shadow duration-300 ${btnCss} ${btn1Styling} ${btn2Styling} ${aboutBtn}`}
    >
      {btnName}
    </a>
  );
};

export default CommonBtn;
