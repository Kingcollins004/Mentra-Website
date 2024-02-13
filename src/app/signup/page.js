"use client"
import Image from "next/image";
import React, { useState } from "react";
import pattern from "../../../public/Assets/Svgs/Pattern.svg";
import logo from "../../../public/Assets/Svgs/logo.svg";
import profileIcon from "../../../public/Assets/Svgs/profileIcon.svg";
import SignupFormTwo from "@/Components/SignupForms/SignupFormTwo";

const page = () => {
  const [nextModal, setNextModal] = useState(false);

  const handleClick = () => {
    setNextModal(true);
  };

  return (
    <div className="h-[100%] flex flex-col justify-between bg-contain bg-no-repeat bg-[#F6F8FA] relative px-[5%] py-[1%] pb-[5%]">
      <div
        className="absolute top-[50%] left-[50%] -z-1"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <Image src={pattern} />
      </div>
      <div className="flex justify-between items-center w-[100%]">
        <div className="w-[20%]">
          <h1>Back</h1>
        </div>
        <div className="flex justify-center items-center w-[60%]">
          <Image src={logo} />
        </div>
        <div className="flex w-[20%]">
          <h1>Already have a therapist account?</h1>
          <h1>Login</h1>
        </div>
      </div>
      {nextModal ? (
        <SignupFormTwo />
      ) : (
        <form className="flex flex-col  items-center h-[70vh] bg-white mx-[35%] rounded-[20px] mt-[7%] z-10">
          <div className="pt-[8%] text-center flex flex-col items-center border-b-[1px] border-[#E2E4E9] w-[90%] pb-[5%]">
            <Image src={profileIcon} />
            <h1 className="text-[24px] font-bold ">Sign Up as a therapist</h1>
            <p>Enter your details to proceed.</p>
          </div>

          <div className="mt-[5%]">
            <div className="bg-[#F9F7F3] w-[450px] text-[13px] py-[3%] px-[5%] rounded-[30px]">
              <p className="text-[15px] font-semibold text-[#191B1E]">
                Fullname
              </p>
              <input
                className="bg-[#F9F7F3] text-[15px] font-semibold w-[100%] h-[30px]"
                placeholder="Enter fullname"
              />
            </div>

            <div className="bg-[#F9F7F3] mt-[3%] w-[450px] text-[13px] py-[3%] px-[5%] rounded-[30px]">
              <p className="text-[15px] font-semibold text-[#191B1E]">
                Mobile Number
              </p>
              <div className="flex items-center">
                <h1>+44</h1>
                <input
                  className="bg-[#F9F7F3] text-[15px] font-semibold w-[100%] h-[30px]"
                  placeholder="000000000"
                />
              </div>
            </div>

            <div className="bg-[#F9F7F3] mt-[3%] w-[450px] text-[13px] py-[3%] px-[5%] rounded-[30px]">
              <p className="text-[15px] font-semibold text-[#191B1E]">Gender</p>
              <select
                className="bg-[#F9F7F3] text-[15px] font-semibold w-[100%] h-[30px]"
                placeholder="Enter fullname"
              >
                <option>Choose Gender</option>
              </select>
            </div>
            <div>
              <button onClick={handleClick} className="bg-[#1A6A73] text-center w-[100%] py-[5%] mt-[5%] text-[white] rounded-[30px]">
                Continue
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default page;
