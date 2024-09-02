import React from "react";
import Hero from "../../components/Hero";
import heroImg from "../../../../public/assets/images/webp/partners-hero-bg-img.webp";
import Image from "next/image";
import { partnersData } from "@/app/components/Helper";

const page = () => {
  return (
    <div>
      <Hero
        heading1=" "
        heading2="Our Partners "
        display="hidden"
        btn1Styling="hidden"
        btn2Styling="hidden"
        descriptionStyling="!max-w-[530px]"
        heroSection="min-h-[calc(80vh-174px)]"
        heroImg="fixed"
        heroBgImg={heroImg}
        contentStyling="w-full"
        heroHeading="!items-center !pt-[60px]"
        description="We value our Partner's collaboration and are grateful for the strong relationships we’ve built together. Their support and expertise are essential to our mutual success. By combining our strengths, we deliver exceptional security solutions and drive innovation in the industry."
      />
      {/* partners logos */}
      <section className=" sm:pb-12 -mt-20 z-[2] relative bg-black">
        <span className="bg-[#2FCADB99]/20 inline-block sm:w-[493px] sm:h-[493px] rounded-full blur-[100px] absolute -top-64 -end-[150px] z-0"></span>
        <span className="bg-[#2FCADB99]/20 inline-block sm:w-[493px] sm:h-[493px] rounded-full blur-[100px] absolute bottom-0 -left-[150px] z-0"></span>
        <div className="bg- black gap-6 flex w-full flex-wrap justify-center p-12 sm:p-24 lg:p-20 ">
          {partnersData.map((items, index) => {
            return (
              <div
                key={index}
                className="flex justify-center px-3 z-[2] relative mt-6"
              >
                <Image className="w-3/4" src={items.img} alt="image" />
              </div>
            );
          })}
        </div>
      </section>{" "}
    </div>
  );
};

export default page;
