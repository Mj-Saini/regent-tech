"use client";
import React, { useState } from "react";
import Hero from "../components/Hero";
import { contactUsData } from "../components/Helper";
import SecuritiesCards from "../components/SecuritiesCards";
import { SubscribeMailIcon, TelIcon, WhatsappIcon } from "../components/Icons";
import Image from "next/image";
import heroImg from "../../../public/assets/images/webp/contect-us-bg-img.webp";
import contactImg from "../../../public/assets/images/webp/contact-us-img.webp";

export default function Page() {
  const [userData, setUserData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData, "userdata");
    setUserData({
      fname: "",
      lname: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  return (
    <div>
      <Hero
        heading1="We are here to assist you "
        heading2="Regent Digitech "
        display="hidden"
        btn1Styling="hidden"
        btn2Styling="hidden"
        descriptionStyling="!max-w-[530px]"
        heroBgImg={heroImg}
        heroImg="fixed"
        contentStyling="w-full md:w-9/12 xl:w-7/12"
        heroHeading="!items-start !pt-[60px]"
        heroSection="min-h-[calc(80vh-174px)]"
        description="Ready to enhance your security? Reach out to Regent Digitech for expert solutions and personalized support. We’re here to assist with your needs and inquiries."
      />
      <section className="-mt-28 bg-black z-[2] relative">
        <div className="py-12 px-5 md:py-14 lg:py-16 xl:py-20 max-w-[1340px] 2xl:max-w-[1550px] mx-auto relative">
          <span className="bg-[#2FCADB99]/20 inline-block sm:w-[493px] sm:h-[493px] rounded-full blur-[100px] absolute sm:top-[150px] sm:-left-[150px]"></span>

          <div className="mt-6 lg:mt-[50px] flex flex-wrap justify-center -mx-6">
            {contactUsData.map((items, index) => (
              <div key={index} className="w-full sm:w-1/2 xl:w-1/3 px-6 mt-16">
                <SecuritiesCards mapData={items} />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CONTACT FORM */}

      <section className=" relative">
        <span className="bg-[#2FCADB99]/20 inline-block sm:w-[493px] sm:h-[493px] rounded-full blur-[100px] absolute bottom-0 -end-[150px] z-0"></span>

        <div className="py-10 px-5 md:py-16 lg:py-20  max-w-[1340px] 2xl:max-w-[1550px] mx-auto ">
          <div className="flex flex-col lg:flex-row items-center -mx-4 xl:-mx-[30px] ">
            <div className="hidden lg:block w-full min-[430px]:w-8/12 sm:w-7/12 md:w-6/12 px-4 xl:px-[30px] ">
              <div className="relative xl:h-[802px] border-[0.5px] border-white/20  rounded-3xl lg:rounded-[50px]">
                <div className="absolute bg-gradient_green w-full h-full top-0 left-0 rounded-3xl lg:rounded-[50px] py-7">
                  <div className="w-8/12 xl:w-6/12 gap-5 text-end m-[0_40px_0_auto]  flex h-full items-end ">
                   
                    <div>
                      <WhatsappIcon />
                    </div>
                  </div>
                </div>
                <Image
                  className="h-full w-full object-cover rounded-3xl lg:rounded-[50px]"
                  src={contactImg}
                  alt="img"
                />
              </div>
            </div>
            <div className="w-full sm:w-10/12 lg:w-6/12 px-4 xl:px-[30px] sm:mt-8 lg:mt-0">
              <div className="border-[.5px] border-[#FFFFFF80] bg-gradient_grey rounded-[48px] p-[20px_8px] sm:px-5 xl:p-[30px_50px] h-full relative overflow-hidden">
                <span className="bg-[#2FCADB99]/20 inline-block sm:w-[493px] sm:h-[493px] rounded-full blur-[100px] absolute -top-[150px] left-1/2 -translate-x-1/2 z-0"></span>
                <h1 className="text-xl sm:text-3xl min-[1100px]:text-[38px] font-semibold text-center text-white capitalize relative z-[2]">
                  Feel free to drop a line
                </h1>

                <form onSubmit={handleSubmit} className="relative z-[2]">
                  {/* fname and lname input */}
                  <div className="flex flex-col gap-3 sm:gap-0 sm:flex-row  mx-[-15px] mt-5 md:mt-[30px] ">
                    <div className="w-full sm:w-6/12 px-[15px]">
                      <input
                        className="w-full rounded-[15px] py-3 xl:py-[17.5px] ps-3 xl:ps-5 pe-2 focus:outline-none text-sm sm:text-base min-[1320px]:text-xl font-normal text-[#2c2c2c] "
                        type="text"
                        required
                        name="fname"
                        id="fname"
                        value={userData.fname}
                        onChange={handleInputChange}
                        placeholder="enter your name"
                      />
                    </div>
                    <div className="w-full sm:w-6/12 px-[15px]">
                      <input
                        className="w-full rounded-[15px] py-3 xl:py-[17.5px] ps-3 xl:ps-5 pe-2 focus:outline-none text-sm sm:text-base min-[1320px]:text-xl font-normal text-[#2c2c2c] "
                        type="text"
                        required
                        name="lname"
                        id="lname"
                        value={userData.lname}
                        onChange={handleInputChange}
                        placeholder="enter your surname"
                      />
                    </div>
                  </div>
                  {/* email input */}
                  <div className="flex mx-[-15px] mt-3 xl:mt-[30px] ">
                    <div className="w-full sm:w-10/12 px-[15px]">
                      <input
                        className="w-full rounded-[15px] py-3 xl:py-[17.5px] ps-3 xl:ps-5 pe-2 focus:outline-none text-sm sm:text-base min-[1320px]:text-xl font-normal text-[#2c2c2c] "
                        type="email"
                        required
                        name="email"
                        id="email"
                        value={userData.email}
                        onChange={handleInputChange}
                        placeholder="enter your email address"
                      />
                    </div>
                    <div className=" hidden sm:block w-2/12 px-[15px]">
                      <span className="bg-white p-1 xl:p-[12px_10px] rounded-[15px]  flex items-center justify-center contect_form_icon">
                        <SubscribeMailIcon />
                      </span>
                    </div>
                  </div>
                  {/* Phone input */}
                  <div className="flex mx-[-15px] mt-3 xl:mt-[30px] ">
                    <div className="w-full sm:w-10/12 px-[15px]">
                      <input
                        className="w-full rounded-[15px] py-3 xl:py-[17.5px] ps-3 xl:ps-5 pe-2 focus:outline-none text-sm sm:text-base min-[1320px]:text-xl font-normal text-[#2c2c2c] "
                        type="number"
                        required
                        name="phone"
                        id="phone"
                        value={userData.phone}
                        onChange={handleInputChange}
                        placeholder="enter your phone number"
                      />
                    </div>
                    <div className=" hidden sm:block w-2/12 px-[15px]">
                      <span className="bg-white p-1 xl:p-[12px_10px] rounded-[15px]  flex items-center justify-center contect_form_icon">
                        <TelIcon />
                      </span>
                    </div>
                  </div>

                  {/* textarea  */}
                  <div className="mt-3 xl:mt-[30px] ">
                    <textarea
                      className="w-full h-[192px] rounded-[15px] py-3 xl:py-[17.5px] ps-3 xl:ps-5 pe-2 focus:outline-none text-sm sm:text-base min-[1320px]:text-xl font-normal text-[#2c2c2c] resize-none"
                      name="message"
                      id="message"
                      value={userData.message}
                      onChange={handleInputChange}
                      placeholder="Type here!"
                    ></textarea>
                  </div>

                  <div className="mt-3 sm:mt-4 xl:mt-[30px] flex gap-1.5 sm:gap-2.5 items-start ">
                    <input
                      className="mt-1 "
                      type="checkbox"
                      name="policy"
                      id="policy"
                    />
                    <p className="text-sm sm:text-base min-[1320px]:text-xl text-white font-normal ">
                      By clicking submit you agree to our Privacy Policy and
                      Terms and Conditions.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="bg-[#51F0F9] text-black py-3 xl:py-5  font-mediem w-full rounded-[15px] text-base sm:text-lg xl:text-2xl mt-4 xl:mt-[30px] "
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
