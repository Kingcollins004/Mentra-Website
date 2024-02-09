import React from "react";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import JoinMentra from "@/Components/JoinMentra";
import Image from "next/image";
import wellnessImg from "../../../public/Assets/Images/wellnessImg.png";
import { fraunces } from "../fonts";
import classnames from "classnames";


const page = () => {
  return (
    <div>
      <Header />

      <div className="text-center bg-[#FFFDF2] pt-[10%]">
        <button className="bg-[none] border-[1px] border-[#FFCC63] text-[#FFCC63] text-[12px] mt-[2%] rounded-[50px] px-[15px] py-[7px]">
          Wellness library
        </button>
        <h1 className={classnames(fraunces.className, "text-[64px] font-bold")}>
          Explore Your Wellness <br />
          Library
        </h1>
        <h1 className="text-[22px] mt-[2%]">
          Discover a curated collection of resources <br /> designed to empower
          and uplift. From guided <br />
          meditations to insightful articles, explore
          <br />
          content that nurtures your mental health
          <br /> journey.
        </h1>
      </div>

      <div className="text-center bg-[#FFFDF2] py-[5%] px-[15%]">
        <div className="flex flex-wrap justify-center ml-[3%] px-[15%] mt-[2%]">
          <div className="w-[100%] flex justify-center rounded-[16px]  bg-white">
            <div className="flex items-center">
              <Image
                className="rounded-s-[16px]"
                width={600}
                src={wellnessImg}
              />
            </div>

            <div className="text-left py-[2%] px-[3%]">
              <h1 className="text-[14px] text-[#6941C6] font-semibold mb-[5%]">
                Olivia Rhye • 20 Jan 2024
              </h1>
              <h1 className="text-[#002C3C] text-[18px] font-medium mb-[5%]">
                Mindful Mornings: A Guide to Starting Your Day Right
              </h1>
              <h1 className="text-[#475467] text-[16px] font-regular">
                Craft a morning routine that sets a positive tone for the day,
                fostering well-being and productivity.
              </h1>
              <div className="flex mt-[15%]">
                <button className="bg-[#F9F5FF] px-[15px] border-[#E9D7FE] border-[1px] rounded-[10px] mr-[3%] text-[#6941C6]">
                  Design
                </button>
                <button className="bg-[#EEF4FF] px-[15px] border-[#C7D7FE] border-[1px] rounded-[10px] mr-[3%] text-[#3538CD]">
                  Research
                </button>
              </div>
            </div>
          </div>

          <div className="w-[100%] flex justify-center rounded-[16px] mt-[3%] bg-white">
            <div className="flex items-center">
              <Image
                className="rounded-s-[16px]"
                width={600}
                src={wellnessImg}
              />
            </div>

            <div className="text-left py-[2%] px-[3%]">
              <h1 className="text-[14px] text-[#6941C6] font-semibold mb-[5%]">
                Olivia Rhye • 20 Jan 2024
              </h1>
              <h1 className="text-[#002C3C] text-[18px] font-medium mb-[5%]">
                Mindful Mornings: A Guide to Starting Your Day Right
              </h1>
              <h1 className="text-[#475467] text-[16px] font-regular">
                Craft a morning routine that sets a positive tone for the day,
                fostering well-being and productivity.
              </h1>
              <div className="flex mt-[15%]">
                <button className="bg-[#F9F5FF] px-[15px] border-[#E9D7FE] border-[1px] rounded-[10px] mr-[3%] text-[#6941C6]">
                  Design
                </button>
                <button className="bg-[#EEF4FF] px-[15px] border-[#C7D7FE] border-[1px] rounded-[10px] mr-[3%] text-[#3538CD]">
                  Research
                </button>
              </div>
            </div>
          </div>

          <div className="w-[100%] flex justify-center rounded-[16px] mt-[3%] bg-white">
            <div className="flex items-center">
              <Image
                className="rounded-s-[16px]"
                width={600}
                src={wellnessImg}
              />
            </div>

            <div className="text-left py-[2%] px-[3%]">
              <h1 className="text-[14px] text-[#6941C6] font-semibold mb-[5%]">
                Olivia Rhye • 20 Jan 2024
              </h1>
              <h1 className="text-[#002C3C] text-[18px] font-medium mb-[5%]">
                Mindful Mornings: A Guide to Starting Your Day Right
              </h1>
              <h1 className="text-[#475467] text-[16px] font-regular">
                Craft a morning routine that sets a positive tone for the day,
                fostering well-being and productivity.
              </h1>
              <div className="flex mt-[15%]">
                <button className="bg-[#F9F5FF] px-[15px] border-[#E9D7FE] border-[1px] rounded-[10px] mr-[3%] text-[#6941C6]">
                  Design
                </button>
                <button className="bg-[#EEF4FF] px-[15px] border-[#C7D7FE] border-[1px] rounded-[10px] mr-[3%] text-[#3538CD]">
                  Research
                </button>
              </div>
            </div>
          </div>

          <div className="w-[100%] flex justify-center rounded-[16px] mt-[3%] bg-white">
            <div className="flex items-center">
              <Image
                className="rounded-s-[16px]"
                width={600}
                src={wellnessImg}
              />
            </div>

            <div className="text-left py-[2%] px-[3%]">
              <h1 className="text-[14px] text-[#6941C6] font-semibold mb-[5%]">
                Olivia Rhye • 20 Jan 2024
              </h1>
              <h1 className="text-[#002C3C] text-[18px] font-medium mb-[5%]">
                Mindful Mornings: A Guide to Starting Your Day Right
              </h1>
              <h1 className="text-[#475467] text-[16px] font-regular">
                Craft a morning routine that sets a positive tone for the day,
                fostering well-being and productivity.
              </h1>
              <div className="flex mt-[15%]">
                <button className="bg-[#F9F5FF] px-[15px] border-[#E9D7FE] border-[1px] rounded-[10px] mr-[3%] text-[#6941C6]">
                  Design
                </button>
                <button className="bg-[#EEF4FF] px-[15px] border-[#C7D7FE] border-[1px] rounded-[10px] mr-[3%] text-[#3538CD]">
                  Research
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <JoinMentra />
      <Footer />
    </div>
  );
};

export default page;
