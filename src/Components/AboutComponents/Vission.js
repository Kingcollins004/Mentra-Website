import React from "react";
import ourStory from "../../../public/Assets/Images/ourStory.png";
import Image from "next/image";
import { fraunces } from "../../app/fonts";
import classnames from "classnames";

const Vission = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-[#333333]">
        <div>
          <h1 className={classnames(fraunces.className, "text-[40px] text-center font-bold mb-[3%] max-[768px]:text-[24px]")}>
            Vision Statement
          </h1>
          <h1 className="text-[18px] font-medium mb-[3%] max-[768px]:text-[14px]">
            Our vision is to be at the forefront of mental and emotional
            wellness solutions, setting a global standard for innovation,
            inclusivity, and effectiveness. We aspire to create a world where
            support for mental and emotional well-being is seamlessly integrated
            into daily life, accessible to all, regardless of location or
            circumstance.
          </h1>
          <h1 className="text-[18px] max-[768px]:text-[14px]">
            Through continuous innovation and a deep understanding of the human
            experience, we aim to foster a future where every individual has the
            tools and support to thrive mentally and emotionally.
          </h1>
        </div>

        <div className="mt-[5%]">
          <Image src={ourStory} />
        </div>
      </div>
    </div>
  );
};

export default Vission;
