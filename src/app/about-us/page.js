import React from "react";
import Hero from "../components/Hero";
import Image from "next/image";
import heroImg from "../../../public/assets/images/webp/about-hero-bg-img.webp";
import founderImg from "../../../public/assets/images/svg/founder-img.svg";
import SecuritiesCards from "./../components/SecuritiesCards";
import { aboutCardData } from "../components/Helper";

const page = () => {
  return (
    <div>
      <Hero
        heading1="About "
        heading2=" Regent Digitech"
        display="hidden"
        btn1="Read More"
        aboutBtn="w-[200px] md:w-[300px]"
        btn2Styling="hidden"
        heroBgImg={heroImg}
        heroImg="fixed"
        heroSection="min-h-[calc(80vh-174px)]"
        contentStyling="w-full md:w-10/12 xl:w-7/12"
        description="Regent Digitech is a boutique Security Integrator with a young spirit and mature approach, offering fresh and easy to adopt technologies for enterprises. Founded in 2016 the company has a vision to be one of the leading system integrators bringing disruptive and emerging technologies to enterprises improve their security posture."
      />

      <section className="relative z-[2] pb-12 lg:pb-20 bg-Star_bg bg-cover bg-center bg-black pt-10">
        <span
          className={`bg-[#2FCADB99]/20 inline-block sm:w-[393px] sm:h-[393px] rounded-full blur-[100px] absolute -top-24 lg:top-0 -end-[200px] z-[1] `}
        ></span>
        <div className="px-5 text-white text-center max-w-[1340px] 2xl:max-w-[1550px] mx-auto relative z-[3] ">
          <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[56px] lg:leading-[65px] text-center ">
            Meet Our Founder
          </h1>
          <p className="text-base sm:text-xl lg:text-[22px] font-normal text-[#54F4FC] mt-3 lg:mt-5 ">
            The Man of Honor & Enthusiasm
          </p>
          <div className="md:w-11/12 xl:w-9/12 m-auto">
            <p className="text-base lg:text-lg font-normal my-5 lg:my-10 tracking-[7%]">
              Prashant is Cyber Security Enthusiast with 20 Years Corporate
              Experience. He is innovating in understanding customer problems &
              providing the right solution. He have been instrumental with
              corporate like Dell, IBM to deliver the best of the class
              solutions to the customers. He is very good in building
              relationships and always delivered on his commitments. Passion and
              dedication describes Prashant the best, he displays lot of
              maturity and authority on any task assigned. He is a great team
              player and gives more than 100% to achieve the goals set out for
              him to achieve. He is also a high performance individual
              contributor with an ability to build relationships at different
              levels.
            </p>
            <div className="py-10 sm:py-[86px]">
              <div
                className="flex items-center justify-center 
                    gradient_border bg-transparent w-full"
              >
                <div className="md:w-5/12 pe-6 lg:pe-[54px] relative z-[2]">
                  <h2 className="text-lg sm:text-2xl lg:text-[34px] font-semibold text-right ">
                    Prashant Sirohi
                  </h2>
                  <p className="text-xs sm:text-base lg:text-xl font-normal text-right mt-3 md:mt-5  ">
                    DIRECTOR & CHIEF INNOVATION OFFICER
                  </p>
                </div>

                <div className="md:w-4/12 lg:w-3/12">
                  <div
                    className="w-[100px] h-[100px] sm:w-[208px] sm:h-[209px] relative  before:absolute before:w-0 before:h-[200%] gradient_border2_before before:top-[50%] before:-left-[0%] before:translate-y-[-50%] 
                            after:hidden sm:after:block sm:after:absolute sm:after:w-0 sm:after:h-[200%] gradient_border2_after sm:after:top-[50%] sm:after:-right-[0%] sm:after:translate-y-[-50%]"
                  >
                    <span className="bg-[#2FCADB99]/20 inline-block sm:w-[350px] sm:h-[330px] rounded-full blur-[100px] absolute top-1/2 -translate-y-1/2 -translate-x-1/2 sm:left-1/2 z-0"></span>

                    <Image
                      className="w-full relative z-[2]"
                      src={founderImg}
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEARTURE POINT */}
      <section className="bg-black relative z-[2]">
        <div className="py-12 px-5 md:py-14 lg:py-16 xl:py-20 max-w-[1340px] 2xl:max-w-[1550px] mx-auto relative">
          <span className="bg-[#2FCADB99]/20 inline-block sm:w-[493px] sm:h-[493px] rounded-full blur-[100px] absolute sm:top-[150px] sm:-left-[150px]"></span>

          <div className="mt-6 lg:mt-[50px] flex flex-wrap justify-center -mx-6">
            {aboutCardData.map((items, index) => (
              <div key={index} className="w-full sm:w-1/2 xl:w-1/3 px-6 mt-16">
                <SecuritiesCards mapData={items} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
