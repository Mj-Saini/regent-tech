import React from "react";
import Hero from "../../components/Hero";
import heroImg from "../../../../public/assets/images/webp/partners-hero-bg-img.webp";
import Image from "next/image";
import { customersData, partnersData } from "@/app/components/Helper";

const page = () => {
  return (
    <div>
      <Hero
        heading1=" "
        heading2=" Our Customers"
        display="hidden"
        btn1Styling="hidden"
        btn2Styling="hidden"
        descriptionStyling="!max-w-[530px]"
        heroBgImg={heroImg}
        heroSection="min-h-[calc(80vh-174px)]"
        heroImg="fixed"
        contentStyling="w-full"
        heroHeading="!items-center !pt-[60px]"
        description="Our valuable Customer's trust and partnership inspire us every day. We’re grateful for the opportunity to work with them, driving innovation and delivering top-notch security solutions."
      />
      {/* partners logos */}
      <section className=" sm:pb-12 -mt-20 relative bg-black z-[1]">
        <span className="bg-[#2FCADB99]/20 inline-block sm:w-[493px] sm:h-[493px] rounded-full blur-[100px] absolute -top-64 -end-[150px] z-0"></span>
        <span className="bg-[#2FCADB99]/20 inline-block sm:w-[493px] sm:h-[493px] rounded-full blur-[100px] absolute bottom-20 -left-[150px] z-0"></span>
        <div className="bg- black gap-4 flex w-full flex-wrap justify-center px-10 py-24 ">
          {customersData.map((items, index) => {
            return (
              <div
                key={index}
                className="flex justify-center px-3 z-[2] relative"
              >
                <Image className="w-3/5" src={items.img} alt="image" />
              </div>
            );
          })}
        </div>
      </section>{" "}
    </div>
  );
};

export default page;
