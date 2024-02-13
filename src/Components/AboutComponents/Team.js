import React from "react";
import team1 from "../../../public/Assets/Images/team1.png";
import team2 from "../../../public/Assets/Images/team2.png";
import team3 from "../../../public/Assets/Images/team3.png";
import team4 from "../../../public/Assets/Images/team4.png";
import team5 from "../../../public/Assets/Images/team5.png";
import team6 from "../../../public/Assets/Images/team6.png";
import team7 from "../../../public/Assets/Images/team7.png";
import Image from "next/image";
import { fraunces } from "../../app/fonts";
import classnames from "classnames";

const Team = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-[#333333]">
        <div>
          <h1 className={classnames(fraunces.className, "text-[40px] text-center font-bold mb-[3%]")}>
            Our Team
          </h1>
          <h1 className="text-[18px] font-medium mb-[3%] text-center">
            Meet the Minds Behind Mentra
          </h1>
        </div>

        <div className="flex flex-wrap justify-center">
          <div className="mt-[5%] mx-[3%]">
            <Image src={team1} />
          </div>

          <div className="mt-[5%] mx-[3%]">
            <Image src={team2} />
          </div>

          <div className="mt-[5%] mx-[3%]">
            <Image src={team3} />
          </div>

          <div className="mt-[5%] mx-[3%]">
            <Image src={team4} />
          </div>

          <div className="mt-[5%] mx-[3%]">
            <Image src={team5} />
          </div>

          <div className="mt-[5%] mx-[3%]">
            <Image src={team6} />
          </div>

          <div className="mt-[5%] mx-[3%]">
            <Image src={team7} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Team;
