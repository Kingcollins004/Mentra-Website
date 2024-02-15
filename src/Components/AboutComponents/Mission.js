import React from "react";
import missionVideo from "../../../public/Assets/Images/missionVideo.png";
import Image from "next/image";
import { fraunces } from "../../app/fonts";
import classnames from "classnames";

const Mission = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-[#333333]">
        <div>
          <h1
            className={classnames(
              fraunces.className,
              "text-[40px] text-center font-bold mb-[3%] max-[768px]:text-[24px]"
            )}
          >
            Mission Statement
          </h1>
          <h1 className="text-[18px] font-medium mb-[3%] max-[768px]:text-[14px]">
            At Mentra, our mission is to revolutionize the landscape of mental
            and emotional support through the synergy of advanced AI and human
            empathy. We are committed to making personalized, accessible, and
            effective support a reality for everyone.
          </h1>
          <h1 className="text-[18px] max-[768px]:text-[14px]">
            By breaking down barriers to care, we empower individuals to achieve
            mental and emotional wellness, enhancing the quality of life across
            communities worldwide.
          </h1>
        </div>

        <div className="mt-[5%]">
          <Image src={missionVideo} />
        </div>
      </div>
    </div>
  );
};

export default Mission;
