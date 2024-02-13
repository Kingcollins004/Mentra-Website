"use client";
import React, { useState } from "react";
import profileIcon from "../../../public/Assets/Svgs/profileIcon.svg";
import Image from "next/image";
import SignupFormX from "./SignupFormX";

const SignupFormNine = () => {
  const [nextModal, setNextModal] = useState(false);

  const handleClick = () => {
    setNextModal(true);
  };
  return (
    <div>
      {nextModal ? (
        <SignupFormX />
      ) : (
        <div className="flex flex-col  items-center h-[70vh] bg-white mx-[35%] rounded-[20px] mt-[7%] z-1">
          <div className="pt-[9%] text-center flex flex-col items-center border-b-[1px] border-[#E2E4E9] w-[90%] pb-[5%]">
            <Image src={profileIcon} />
            <h1 className="text-[24px] font-bold ">
              Select the best option that describes you
            </h1>
            <p>Enter your details to proceed.</p>
          </div>

          <div className="mt-[5%] border-dashed border-2 border-[#E7E7E0] w-[90%] px-[2%] py-[10%] rounded-[20px] text-center">
            <div className="text-center">
              <h1 className="text-[18px] font-semibold">Choose a file</h1>
              <p className="mt-[2%]">JPEG, PNG, PDF formats, up to 50 MB.</p>
            </div>
            <div>
              <button
                onClick={handleClick}
                className="bg-[white] font-semibold shadow-md text-center w-[30%] mx-[5%] py-[3%] mt-[3%] text-[#000000] border-[1px] rounded-[30px]"
              >
                Browse File
              </button>
            </div>
            <div>
              <button
                onClick={handleClick}
                className="bg-[#1A6A73] text-center w-[90%] mx-[5%] py-[5%] mt-[8%] text-[white] rounded-[30px]"
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

export default SignupFormNine;
