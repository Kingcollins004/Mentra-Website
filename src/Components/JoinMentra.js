import React from "react";
import Image from "next/image";
import joinMentra from "../../public/Assets/Images/joinMetra.png";
import { fraunces } from "../app/fonts";
import classnames from "classnames";
import arrowRight from "../../public/Assets/Svgs/arrowRight.svg";

const JoinMentra = () => {
  return (
    <div className="bg-[#FFFDF2] pb-[5%] px-[15%] max-[768px]:px-[5%] max-[768px]:mt-[15%] max-[768px]:pb-[10%]">
      <div className="flex justify-between items-center px-[5%] bg-[#FFEEC9] rounded-[48px] py-[2%] max-[768px]:flex-col max-[768px]:rounded-[24px]">
        <div className="w-[50%] max-[768px]:w-[100%]">
          <h1
            className={classnames(
              fraunces.className,
              "text-[45px] text-[#251909] font-bold max-[1500px]:text-[34px] max-[768px]:text-[24px] max-[768px]:py-[5%]"
            )}
          >
            Join Mentra's circle of support and be a beacon of positivity! 🌟
          </h1>
          <p className="mt-[3%] text-[19px] max-[768px]:text-[16px]">
            Are you a therapist ready to make a meaningful impact? Embrace the
            opportunity to connect with individuals seeking your guidance on
            their mental well-being journey.{" "}
          </p>
          <div className="flex bg-[#1A6A73] rounded-[50px] p-[3.5%] mt-[5%] w-[40%] max-[1850px]:w-fit">
            <button className=" text-[white] w-[180px]">
              Sign up for Therapists
            </button>
            <Image width={25} className="ml-[2%]" src={arrowRight} />
          </div>
        </div>
        <div className="w-[50%] flex justify-center max-[768px]:w-[90%] max-[768px]:mt-[5%] max-[768px]:pb-[5%]">
          <Image src={joinMentra} />
        </div>
      </div>
    </div>
  );
};

export default JoinMentra;
