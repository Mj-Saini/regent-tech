import React from "react";
import Hero from "../../components/Hero";
import ScrollAnimation from "@/app/components/ScrollAnimation";
import Image from "next/image";
import heroImg from "../../../../public/assets/images/webp/solution-bg-img.webp";

const page = () => {
  return (
    <div>
      <Hero
        heading1=""
        heading2="Our Solutions"
        display="hidden"
        btn1Styling="hidden"
        heroSection="min-h-[calc(70vh-174px)]"
        heroImg="fixed"
        btn2Styling="hidden"
        descriptionStyling=""
        heroBgImg={heroImg}
        contentStyling="w-full md:w-9/12 xl:w-7/12 md:pe-24"
        heroHeading="!items-center !pt-[60px]"
        description="At Regent Digitech, our solutions are crafted to meet your specific security needs with precision. We offer cutting-edge technologies, integrated systems, and customizable frameworks, all designed to enhance protection, scalability, and proactive threat management."
      />
      <section className="relative bg-black">
        <span
          className={`bg-[#2FCADB99]/20 inline-block sm:w-[393px] sm:h-[393px] rounded-full blur-[100px] absolute bottom-0 -end-[100px] z-[1] `}
        ></span>
        <span
          className={`bg-[#2FCADB99]/20 inline-block sm:w-[393px] sm:h-[393px] rounded-full blur-[100px] absolute -top-44 -left-[100px] z-[1] `}
        ></span>
        <div className="pb-10 px-5 md:pb-20 relative z-[2] container max-w-[1340px] 2xl:max-w-[1550px] mx-auto">
          <div className="flex flex-col items-center">
            <div className="w-full flex justify-center flex-col items-center relative">
              <ScrollAnimation />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
