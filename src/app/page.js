/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import Hero from "./components/Hero";
import Security from "./components/Security";
import Image from "next/image";
import lineVector from "../../public/assets/images/svg/line-vector.svg";
import CountsUp from "./components/CountUp";
import { SubscribeMailIcon } from "./components/Icons";
import heroImg from "../../public/assets/images/webp/landing-page-hero-bg-img.webp";
import girlImg from "../../public/assets/images/webp/subscribe-img.webp";
import CommonBtn from "./components/CommonBtn";

export default function Home() {
  const [subscribe, setSubscribe] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with email:", subscribe);
    setSubscribe("");
  };
  return (
    <main className="overflow-x-hidden">
      <Hero
        heading1="Comprehensive "
        heading2=" Cybersecurity"
        heading3=" Strategies for Growth and Resilience"
        heroBgImg={heroImg}
        display="hidden md:block"
        btn1="LEARN MORE"
        btn2="TALK WITH US"
        heroSection="min-h-[calc(100vh-174px)]"
        heroImg="absolute"
        contentStyling="w-full md:w-9/12 xl:w-8/12 sm:px-[50px] "
        description=" Unlock your business's full potential with our comprehensive
              cybersecurity strategies. Safeguard your growth and resilience in
              the digital age."
      />

      {/* OUR MOTIVE */}
      <section className="relative px-5 md:pt-10 sm:pb-12 md:pb-16 lg:pb-24 mb-12 -mt-10 md:mt-0">
        <span className="bg-[#2FCADB99]/20 inline-block w-[193px] h-[193px] sm:w-[493px] sm:h-[493px] rounded-full blur-[100px] absolute top-0 sm:-top-[100px] left-0 sm:-left-[100px]"></span>
        <span className="bg-[#2FCADB99]/20 inline-block sm:w-[493px] sm:h-[493px] rounded-full blur-[100px] absolute bottom-0 -end-10"></span>

        <div className="lg:px-[59px] relative z-[10] lg:pt-20  max-w-[1340px] 2xl:max-w-[1550px] mx-auto">
          <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[54px] text-[#3ED5DD] text-center">
            Our Motive
          </h2>

          <p className="ff_montserrat font-normal text-base sm:text-xl lg:text-2xl text-white text-center pt-3 sm:pt-6 lg:pt-12">
            Our motive at
            <span className=" text-[#54F4FC] font-bold leading-10">
              &nbsp; Regent Digitech &nbsp;
            </span>
            is to be a leading system integrator that brings disruptive and
            emerging technologies to enterprises, enhancing their security
            posture. Founded in 2016, we combine a youthful spirit with a mature
            approach, offering fresh and easily adoptable technologies to help
            enterprises stay ahead in security.
          </p>
          <div className="mt-6 md:mt-12">
            <CountsUp />
          </div>
        </div>
      </section>
      {/* SECURITY */}
      <Security
        heading1="Providing security"
        heading2="to your Digital Assets"
        subHeading="Our Securities"
        description="At Regent Digitech, we offer a comprehensive range of services designed to elevate your enterprise’s security posture through cutting-edge technologies and expert integration. Our services include:"
      />

      {/* SUBSCRIBE US*/}
      {/* <div className="py-10 px-5 md:py-20 relative">
        <span className="bg-[#2FCADB99]/20 inline-block sm:w-[493px] sm:h-[493px] rounded-full blur-[100px] absolute -top-[50px] -end-[150px] z-0"></span>
        <div className="max-w-[1340px] 2xl:max-w-[1550px] mx-auto">
          <div className="flex flex-col-reverse lg:flex-row -mx-3 xl:-mx-6 flex-wrap items-center relative z-[1]">
            <div className="w-full lg:w-1/2 text-center px-3 xl:px-6 mt-8 lg:mt-0 h-full">
              <div className="p-5 sm:p-10 lg:p-4 xl:p-[50px] bg-gradient_green border-[0.5px] border-white/50 rounded-[48px] h-full relative overflow-hidden">
                <span className="bg-[#2FCADB99]/20 inline-block sm:w-[493px] sm:h-[493px] rounded-full blur-[100px] absolute -top-[150px] left-1/2 -translate-x-1/2 z-0"></span>

                <h1 className="font-semibold text-2xl md:text-[35px] min-[1350px]:text-[38px] xl:!leading-[70px] text-white relative z-[1]">
                  Subscribe our News Letter
                </h1>
                <p className="mt-2.5 text-base md:text-lg font-normal text-white/50 md:leading-[22px] relative z-[1]">
                  Are you curious about what’s happening at Regent Digitech? Get
                  latest news and products updates directly to you mail inbox. 
                  Subscriber Email
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col min-[400px]:flex-row gap-5 mt-7 xl:mt-[50px] relative z-[1]">
                    <input
                      className="w-full outline-none rounded-[15px] px-4 font-normal text-sm md:text-md lg:text-xl xl:text-2xl placeholder:text-black py-3.5 md:py-2.5 lg:py-[17px] "
                      type="email"
                      name="email"
                      id="mail"
                      value={subscribe}
                      required
                      onChange={(e) => setSubscribe(e.target.value)}
                      placeholder="Enter your email address"
                    />
                    <span className="bg-white px-[16.2px]  py-3 md:py-2.5 lg:py-[17px]  rounded-[15px] border border-[#03759F] sm:flex items-center justify-center hidden ">
                      <SubscribeMailIcon />
                    </span>
                  </div>
                  <div className="flex w-full justify-center mt-4 sm:mt-8 lg:mt-[50px] relative z-[1]">
                    <CommonBtn
                      btnName="Subscribe Now  "
                      btnCss="bg-[#53F3FB] border-[#53F3FB]  text-black text-base md:text-xl lg:text-2xl !rounded-[15px]  w-full py-3 sm:!py-3 md:!py-[13px] lg:!py-[18px]"
                    />
                  </div>
                </form>
                <p className="text-white font-normal text-sm md:text-base mt-6 lg:mt-[50px] relative z-[1]">
                  This site is protected by reCAPTCHA and the Google Privacy
                  Policy and Terms of Service apply.
                </p>
              </div>
            </div>
            <div className=" w-full sm:w-9/12 lg:w-1/2 px-3 xl:px-6">
              <div className="h-full w-full xl:h-[579px] rounded-[48px]">
                <Image
                  className="w-full h-full object-cover rounded-[48px]"
                  src={girlImg}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </main>
  );
}
