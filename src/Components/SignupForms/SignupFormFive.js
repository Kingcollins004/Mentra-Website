"use client";
import React, { useState } from "react";
import profileIcon from "../../../public/Assets/Svgs/profileIcon.svg";
import Image from "next/image";
import SignupFormSix from "./SignupFormSix";

const SignupFormFive = () => {
  const [nextModal, setNextModal] = useState(false);

  const handleClick = () => {
    setNextModal(true);
  };

  return (
    <div>
      {nextModal ? (
        <SignupFormSix />
      ) : (
        <div className="flex flex-col  items-center h-[70vh] bg-white mx-[35%] rounded-[20px] mt-[6%] mb-[2%] z-1">
          <div className="pt-[8%] text-center flex flex-col items-center border-b-[1px] border-[#E2E4E9] w-[90%] pb-[5%]">
            <Image src={profileIcon} />
            <h1 className="text-[24px] font-bold ">
              How much time do you spend on Admin related tasks per week?
            </h1>
            <p>Enter your details to proceed.</p>
          </div>

          <div className="mt-[5%] w-[100%]">
            <div>
              <button className="w-[90%] mx-[5%] my-[3%] py-[3%] text-center border-[2px] border-[#F9F7F3] rounded-[30px]">
                1-4 hours
              </button>
              <button className="w-[90%] mx-[5%] my-[1%] py-[3%] text-center border-[2px] border-[#F9F7F3] rounded-[30px]">
                5-9 hours
              </button>
              <button className="w-[90%] mx-[5%] my-[3%] py-[3%] text-center border-[2px] border-[#F9F7F3] rounded-[30px]">
                10 hours
              </button>
            </div>
            <div>
              <button
                onClick={handleClick}
                className="bg-[#1A6A73] text-center w-[90%] mx-[5%] py-[5%] mt-[3%] text-[white] rounded-[30px]"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignupFormFive;
