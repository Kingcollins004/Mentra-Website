"use client";
import React, { useState } from "react";
import profileIcon from "../../../public/Assets/Svgs/profileIcon.svg";
import Image from "next/image";
import SignupFormThree from "./SignupFormThree";
const SignupFormTwo = () => {
  const [nextModal, setNextModal] = useState(false);

  const handleClick = () => {
    setNextModal(true);
  };
  return (
    <form className="z-10">
      {nextModal ? (
        <SignupFormThree />
      ) : (
        <form className="flex flex-col  items-center h-[100%] bg-white mx-[35%] pb-[3%] rounded-[20px] mt-[2.5%] z-10 max-[768px]:mt-[5%] max-[768px]:mx-[0%] max-[768px]:w-[100%]">
          <div className="pt-[8%] text-center flex flex-col items-center border-b-[1px] border-[#E2E4E9] w-[90%] pb-[5%] max-[768px]:w-[100%]">
            <Image src={profileIcon} />
            <h1 className="text-[24px] font-bold ">Sign Up as a therapist</h1>
            <p>Enter your details to proceed.</p>
          </div>

          <div className="mt-[5%] max-[768px]:w-[90%]">
            <div className="bg-[#F9F7F3] mt-[3%] w-[450px] text-[13px] py-[3%] px-[5%] rounded-[30px] max-[768px]:w-[100%] max-[768px]:rounded-[15px]">
              <p className="text-[15px] font-semibold text-[#191B1E]">
                Enter Nationality
              </p>
              <select
                className="bg-[#F9F7F3] text-[15px] font-semibold w-[100%] h-[30px]"
                placeholder="Enter fullname"
              >
                <option>Select an Option</option>
              </select>
            </div>

            <div className="bg-[#F9F7F3] mt-[3%] w-[450px] text-[13px] py-[3%] px-[5%] rounded-[30px] max-[768px]:w-[90%]">
              <p className="text-[15px] font-semibold text-[#191B1E]">
                Countried lived in
              </p>
              <div className="flex items-center">
                <input
                  className="bg-[#F9F7F3] text-[15px] font-semibold w-[100%] h-[30px]"
                  placeholder="mail@email.com"
                />
              </div>
            </div>

            <div className="bg-[#F9F7F3] mt-[3%] w-[450px] text-[13px] py-[3%] px-[5%] rounded-[30px] max-[768px]:w-[90%]">
              <p className="text-[15px] font-semibold text-[#191B1E]">
                Country of residence
              </p>
              <select
                className="bg-[#F9F7F3] text-[15px] font-semibold w-[100%] h-[30px]"
                placeholder="Enter fullname"
              >
                <option>Select an option</option>
              </select>
            </div>

            <div className="bg-[#F9F7F3] mt-[3%] w-[450px] text-[13px] py-[3%] px-[5%] rounded-[30px] max-[768px]:w-[90%]">
              <p className="text-[15px] font-semibold text-[#191B1E]">
                Current Address
              </p>
              <div className="flex items-center">
                <input
                  className="bg-[#F9F7F3] text-[15px] font-semibold w-[100%] h-[30px]"
                  placeholder="Enter address"
                />
              </div>
            </div>

            <div className="bg-[#F9F7F3] mt-[3%] w-[450px] text-[13px] py-[3%] px-[5%] rounded-[30px] max-[768px]:w-[90%]">
              <p className="text-[15px] font-semibold text-[#191B1E]">
                Emirate of Licensure
              </p>
              <select
                className="bg-[#F9F7F3] text-[15px] font-semibold w-[100%] h-[30px]"
                placeholder="Enter fullname"
              >
                <option>Enter an option</option>
              </select>
            </div>
            <div>
              <button
                onClick={handleClick}
                className="bg-[#1A6A73] text-center w-[100%] py-[5%] mt-[5%] text-[white] rounded-[30px]"
              >
                Continue
              </button>
            </div>
          </div>
        </form>
      )}
    </form>
  );
};

export default SignupFormTwo;
