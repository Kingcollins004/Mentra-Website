import React from "react";
import available from "../../../public/Assets/Svgs/available.svg";
import care from "../../../public/Assets/Svgs/care.svg";
import companion from "../../../public/Assets/Svgs/companion.svg";
import free from "../../../public/Assets/Svgs/free.svg";
import unique from "../../../public/Assets/Svgs/unique.svg";
import sensitive from "../../../public/Assets/Svgs/sensitive.svg";
import privateIcon from "../../../public/Assets/Svgs/private.svg";
import starIcon from "../../../public/Assets/Svgs/starIcon.svg";
import clock from "../../../public/Assets/Svgs/clock.svg";
import person from "../../../public/Assets/Svgs/person.svg";
import lock from "../../../public/Assets/Svgs/lock.svg";
import tag from "../../../public/Assets/Svgs/tag.svg";
import badge1 from "../../../public/Assets/Images/badge1.png";
import badge2 from "../../../public/Assets/Images/badge2.png";
import badge3 from "../../../public/Assets/Images/badge3.png";
import badge4 from "../../../public/Assets/Images/badge4.png";
import workSide from "../../../public/Assets/Images/workSide.png";
import Image from "next/image";
import { fraunces } from "../../app/fonts";
import classnames from "classnames";

const AboutMentra = () => {
  return (
    <div className="px-[5%] py-[5%] bg-[#FFFCF6]">
      <div className=" text-center">
        <div>
          <p
            className={classnames(
              fraunces.className,
              "text-[24px] font-semibold"
            )}
          >
            Designed for all of humanity, no matter who you are or where you
            are.
          </p>
          <p
            className={classnames(
              fraunces.className,
              "text-[24px] font-semibold mt-[4%]"
            )}
          >
            Mentra is…
          </p>
        </div>

        <div>
          <div className="flex justify-between items-center px-[15%] mt-[5%]">
            <div className="flex px-[1%] py-[1%] rounded-[50px] items-center bg-white shadow-lg">
              <Image src={unique} />
              <p className="ml-[5px]">Unique to you</p>
            </div>

            <div className="flex px-[1%] py-[1%] rounded-[50px] items-center bg-white shadow-lg">
              <Image src={privateIcon} />
              <p className="ml-[5px]">Completely Private</p>
            </div>

            <div className="flex px-[1%] py-[1%] rounded-[50px] items-center bg-white shadow-lg">
              <Image src={free} />
              <p className="ml-[5px]">Judgment Free</p>
            </div>

            <div className="flex px-[1%] py-[1%] rounded-[50px] items-center bg-white shadow-lg">
              <Image src={sensitive} />
              <p className="ml-[5px]">Culturally Sensitive</p>
            </div>

            <div className="flex px-[1%] py-[1%] rounded-[50px] items-center bg-white shadow-lg">
              <Image src={unique} />
              <p className="ml-[5px]">Understanding and Kind</p>
            </div>
          </div>

          <div className="flex justify-between items-center px-[12%] mt-[2%]">
            <div className="flex px-[1%] py-[1%] rounded-[50px] items-center bg-white shadow-lg">
              <Image src={care} />
              <p className="ml-[5px]">Empowering Self-Care</p>
            </div>

            <div className="flex px-[1%] py-[1%] rounded-[50px] items-center bg-white shadow-lg">
              <Image src={care} />
              <p className="ml-[5px]">Unbiased Listening Ear</p>
            </div>

            <div className="flex px-[1%] py-[1%] rounded-[50px] items-center bg-white shadow-lg">
              <Image src={available} />
              <p className="ml-[5px]">Always Available</p>
            </div>

            <div className="flex px-[1%] py-[1%] rounded-[50px] items-center bg-white shadow-lg">
              <Image src={companion} />
              <p className="ml-[5px]">Your Companion</p>
            </div>

            <div className="flex px-[1%] py-[1%] rounded-[50px] items-center bg-white shadow-lg">
              <Image src={care} />
              <p className="ml-[5px]">Your Safe Haven</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between px-[10%] mt-[12%] text-left">
          <div className="w-[25%]">
            <Image src={starIcon} />
            <div>
              <h1
                className={classnames(
                  fraunces.className,
                  "text-[48px] text-[#002C3C] font-semibold py-[2%] w-[80%]"
                )}
              >
                What We Offer
              </h1>
              <p className="w-[90%]">
                Discover our offerings for a healthier, happier you.
              </p>
            </div>
          </div>

          <div className="w-[75%]">
            <div className="flex px-[10%] justify-between">
              <div className="bg-[#99BEB7] rounded-[40px] p-[4%] w-[48%]">
                <Image src={clock} />
                <h1 className="text-[#002C3C] text-[24px] font-bold mt-[5%]">
                  Round the Clock Personalized Support
                </h1>
                <p className="text-[#002C3C] font-medium mt-[2%]">
                  Mentra’s personalized interaction goes beyond understanding –
                  it's like having a friend who truly gets you and offers
                  support uniquely crafted just for you, wherever and whenever
                  you need it
                </p>
              </div>

              <div className="bg-[#FAE19D] rounded-[40px] p-[4%] w-[48%] h-[350px]">
                <Image src={tag} />
                <h1 className="text-[#002C3C] text-[24px] font-bold mt-[5%]">
                  Licensed Therapists on Demand
                </h1>
                <p className="text-[#002C3C] font-medium mt-[2%]">
                  Mentra connects you with qualified therapists for personalized
                  professional support without the hassle.
                </p>
              </div>
            </div>

            <div className="flex px-[10%] justify-between mt-[3%]">
              <div className="bg-[#C7D69F] rounded-[40px] p-[4%] w-[48%]">
                <Image src={lock} />
                <h1 className="text-[#002C3C] text-[24px] font-bold mt-[5%]">
                  Anonymous & Secure
                </h1>
                <p className="text-[#002C3C] font-medium mt-[2%]">
                  Mentra is a sanctuary of complete anonymity and privacy,
                  shattering the walls of stigma. Your data is not just safe;
                  it's yours to own. Your secrets are kept secret.
                </p>
              </div>

              <div className="bg-[#1A6A73] rounded-[40px] p-[4%] w-[48%] h-[350px] mt-[-5%]">
                <Image src={person} />
                <h1 className="text-[white] text-[24px] font-bold mt-[5%]">
                  Engaging Wellness Library
                </h1>
                <p className="text-[white] font-medium mt-[2%]">
                  Mentra is a world where you can engage, explore, and nurture
                  your mind with a touch of playfulness through interactive
                  tools and games.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[10%] py-[5%]">
        <h1
          className={classnames(
            fraunces.className,
            "text-[48px] text-[#002C3C] font-bold"
          )}
        >
          How it Works
        </h1>
        <div className="flex items-center justify-center">
          <div className="w-[40%] mr-[4%]">
            <div className="border-[#FAE19D] border-l-[4px] px-[3%] py-[3%]">
              <Image src={badge1} />
              <div className="mt-[3%]">
                <h1 className="text-[18px] font-semibold text-[#1A6A73]">
                  Download, Sign Up, Subscribe and Personalize
                </h1>
                <p className="text-[#1A6A73]">
                  Get started in moments. Tell us a little about yourself to
                  personalize your experience.
                </p>
              </div>
            </div>

            <div className="border-[#F9F7F3] border-l-[4px] px-[3%] py-[3%]">
              <Image src={badge2} />
              <div className="mt-[3%]">
                <h1 className="text-[18px] font-semibold text-[#1A6A73]">
                  Meet Your AI Companion
                </h1>
                <p className="text-[#1A6A73]">
                  Chat with your empathetic AI buddy, designed to understand and
                  respond to your emotions.
                </p>
              </div>
            </div>

            <div className="border-[#F9F7F3] border-l-[4px] px-[3%] py-[3%]">
              <Image src={badge3} />
              <div className="mt-[3%]">
                <h1 className="text-[18px] font-semibold text-[#1A6A73]">
                  Need professional support? Get matched with a therapist
                </h1>
                <p className="text-[#1A6A73]">
                  Our smart match gets you the right therapist. Book sessions
                  that fit your schedule.
                </p>
              </div>
            </div>

            <div className="border-[#F9F7F3] border-l-[4px] px-[3%] py-[3%]">
              <Image src={badge4} />
              <div className="mt-[3%]">
                <h1 className="text-[18px] font-semibold text-[#1A6A73]">
                  Evolving with you
                </h1>
                <p className="text-[#1A6A73]">
                  Mentra learns and adapts with you. Get tips and activities
                  made just for you.
                </p>
              </div>
            </div>
          </div>

          <div>
            <Image width={600} src={workSide} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMentra;
