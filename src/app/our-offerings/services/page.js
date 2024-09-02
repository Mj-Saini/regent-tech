import React from "react";
import Hero from "../../components/Hero";
import heroImg from "../../../../public/assets/images/webp/service-hero-bg-img.webp";
import Security from "../../components/Security";

const page = () => {
  return (
    <div>
      <Hero
        heading1=""
        heading2="Services"
        display="hidden"
        btn1Styling="hidden"
        btn2Styling="hidden"
        heroBgImg={heroImg}
        heroSection="min-h-[calc(80vh-174px)]"
        heroImg="fixed"
        contentStyling="w-full md:w-9/12 xl:w-7/12"
        description="At Regent Digitech, we provide a range of services to enhance your enterprise's security. Our offerings include advanced security solutions with cutting-edge technology, seamless integration into your existing systems, and strategic consulting to develop robust security strategies. We also offer managed services with 24/7 monitoring and incident response, along with comprehensive training and support to empower your team. Our goal is to deliver innovative, tailored solutions that strengthen your security posture and drive your success."
      />
      <div className="-mt-28 relative z-[2] bg-black">
        <Security />
      </div>
    </div>
  );
};

export default page;
