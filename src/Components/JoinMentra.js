import React from "react";
import Image from "next/image";
import joinMentra from "../../public/Assets/Images/joinMetra.png";
import { fraunces } from "../app/fonts";
import classnames from "classnames";

const JoinMentra = () => {
  return (
    <div className="bg-[#FFFDF2] pb-[5%] px-[15%]">
      <div className="flex justify-between items-center px-[5%] bg-[#FFEEC9] rounded-[48px] py-[2%]">
        <div className="w-[50%]">
          <h1
            className={classnames(
              fraunces.className,
              "text-[45px] text-[#251909] font-bold"
            )}
          >
            Join Mentra's circle of support and be a beacon of positivity! 🌟
          </h1>
          <p className="mt-[3%] text-[19px]">
            Are you a therapist ready to make a meaningful impact? Embrace the
            opportunity to connect with individuals seeking your guidance on
            their mental well-being journey.{" "}
          </p>
          <button className="bg-[#1A6A73] mt-[5%] text-[white] rounded-[50px] p-[3%]">
            Sign up as a therapist
          </button>
        </div>
        <div className="w-[50%] flex justify-center">
          <Image src={joinMentra} />
        </div>
      </div>
    </div>
  );
};

export default JoinMentra;
