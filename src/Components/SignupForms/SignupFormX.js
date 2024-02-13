"use client";
import React, { useState } from "react";
import profileIcon from "../../../public/Assets/Svgs/profileIcon.svg";
import Image from "next/image";
import SignupForm11 from "./SignupForm11";

const SignupFormX = () => {
  const [nextModal, setNextModal] = useState(false);

  const handleClick = () => {
    setNextModal(true);
  };

  const conditions = [
    "Anger",
    "Anxiety",
    "Bipolar",
    "Career",
    "Chronic Impulsivity",
    "Conflict",
    "Depression",
    "Eating",
    "Educational Assessments",
    "Family",
    "Grief",
    "Health",
    "Intimacy",
    "Life Transitions",
    "Parenting",
    "Relationships",
    "Religion",
    "Self-Esteem",
    "Sleeping",
    "Social Behavior",
    "Stress",
    "Substance Abuse",
    "Trauma & Abuse",
  ];

  return (
    <div>
      {nextModal ? (
        <SignupForm11 />
      ) : (
        <div className="flex flex-col  items-center h-[100%] bg-white mx-[35%] rounded-[20px] my-[2%] z-1">
          <div className="pt-[8%] text-center flex flex-col items-center border-b-[1px] border-[#E2E4E9] w-[90%] pb-[5%]">
            <Image src={profileIcon} />
            <h1 className="text-[24px] font-bold ">
            What conditions do you treat?
            </h1>
            <p>Select all that applies</p>
          </div>

          <div className="mt-[5%] w-[90%] px-[2%] pb-[10%] rounded-[20px] text-center">
            <div className="w-[100%] text-left">
              {conditions.map((word, index) => (
                <button
                  className="px-[4%] m-[1%] border-[2px] border-[#F9F7F3] rounded-[30px] py-[3%]"
                  key={index}
                >
                  {word}
                </button>
              ))}
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

export default SignupFormX;
