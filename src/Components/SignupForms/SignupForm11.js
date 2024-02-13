"use client";
import React, { useState } from "react";
import profileIcon from "../../../public/Assets/Svgs/profileIcon.svg";
import Image from "next/image";
import "./style.css";
import cation from "../../../public/Assets/Svgs/CautionIcon.svg";
import Link from "next/link";

const SignupForm11 = () => {
  const conditions = [
    "Cognitive Behavioral Therapy (CBT)",
    "Mindfulness-Based Therapies",
    "Emotionally Focused Therapy (EFT)",
    "Solution-Focused Therapy",
    "Trauma-FocusedTherapy",
    "Acceptance and Commitment Therapy (ACT)",
    "Motivational Interviewing",
    "Dialectical Behavior Therapy (DBT)",
    "Psychodynamic Therapy",
    "Client-Centered Therapy",
    "Family Therapy",
  ];

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className="flex flex-col  items-center h-[100%] bg-white mx-[30%] rounded-[20px] my-[2%] z-1">
        <div className="pt-[8%] text-center flex flex-col items-center border-b-[1px] border-[#E2E4E9] w-[90%] pb-[5%]">
          <Image src={profileIcon} />
          <h1 className="text-[24px] font-bold ">
            What techniques are you an expert in?
          </h1>
          <p>Select all that applies</p>
        </div>

        <div className="mt-[5%] w-[90%] px-[2%] pb-[10%] rounded-[20px] text-center">
          <div className="w-[100%] text-left">
            {conditions.map((word, index) => (
              <button
                className="px-[3%] m-[1%] border-[2px] border-[#F9F7F3] rounded-[30px] py-[3%]"
                key={index}
              >
                {word}
              </button>
            ))}
          </div>
          <div>
            <button
              onClick={openModal}
              type="button"
              className="bg-[#1A6A73] text-center w-[90%] mx-[5%] py-[5%] mt-[8%] text-[white] rounded-[30px]"
            >
              Submit Application
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <Image src={cation} />
            <div className="w-[90%] text-center my-[3%]">
              <h1 className="text-[#0A090B] font-semibold text-[20px] mb-[3%]">
                Your application is being reviewed
              </h1>
              <p className="text-[#7F7D83]">
                Your application to become a Mentra therapist has been submitted
                successfully. You'll receive an email once your application is
                reviewed.
              </p>
            </div>
            <div>
              <Link href={"/"}>
                <button
                  type="button"
                  className="bg-[#20232D] text-center w-[400px]  py-[5%] mt-[5%] text-[white] rounded-[30px]"
                >
                  Go home
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignupForm11;
