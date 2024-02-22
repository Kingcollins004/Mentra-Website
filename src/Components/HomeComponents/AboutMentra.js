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
              "text-[24px] font-semibold max-[768px]:text-[18px]"
            )}
          >
            Designed for all of humanity, no matter who you are or where you
            are.
          </p>
          <p
            className={classnames(
              fraunces.className,
              "text-[24px] font-semibold mt-[4%] max-[768px]:text-[18px]"
            )}
          >
            Mentra is…
          </p>
        </div>

        <div className="max-[768px]:flex max-[768px]:justify-between">
          <div className="flex justify-between items-center px-[15%] mt-[5%] max-[1520px]:px-[5%] max-[1750px]:px-[10%] max-[768px]:flex-col max-[768px]:px-[0%] max-[768px]:items-start max-[768px]:w-[48%] max-[1390px]:px-[0%]">
            <div className="flex px-[1%] py-[1%] rounded-[50px] items-center bg-white shadow-lg max-[768px]:my-[5%]">
              <Image
                className="max-[768px]:w-[25%] max-[1390px]:w-[20%]"
                src={unique}
              />
              <p className="ml-[5px] max-[768px]:text-[14px]">Unique to you</p>
            </div>

            <div className="flex px-[1%] py-[1%] rounded-[50px] items-center bg-white shadow-lg max-[768px]:my-[5%]">
              <Image
                className="max-[768px]:w-[20%] max-[1390px]:w-[20%]"
                src={privateIcon}
              />
              <p className="ml-[5px] max-[768px]:text-[14px]">
                Completely Private
              </p>
            </div>

            <div className="flex px-[1%] py-[1%] rounded-[50px] items-center bg-white shadow-lg max-[768px]:my-[5%]">
              <Image
                className="max-[768px]:w-[25%] max-[1390px]:w-[20%]"
                src={free}
              />
              <p className="ml-[5px] max-[768px]:text-[14px]">Judgment Free</p>
            </div>

            <div className="flex px-[1%] py-[1%] rounded-[50px] items-center bg-white shadow-lg max-[768px]:my-[5%]">
              <Image
                className="max-[768px]:w-[20%] max-[1390px]:w-[20%]"
                src={sensitive}
              />
              <p className="ml-[5px] max-[768px]:text-[14px]">
                Culturally Sensitive
              </p>
            </div>

            <div className="flex px-[1%] py-[1%] rounded-[50px] items-center bg-white shadow-lg max-[768px]:my-[5%]">
              <Image
                className="max-[768px]:w-[20%] max-[1390px]:w-[15%]"
                src={unique}
              />
              <p className="ml-[5px] max-[768px]:text-[14px]">
                Understanding and Kind
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center px-[12%] mt-[2%]  max-[1520px]:px-[5%] max-[1750px]:px-[10%] max-[768px]:flex-col max-[768px]:px-[0%] max-[768px]:items-start max-[768px]:w-[48%] max-[1390px]:px-[0%]">
            <div className="flex px-[1%] py-[1%] rounded-[50px] items-center bg-white shadow-lg max-[768px]:my-[5%]">
              <Image
                className="max-[768px]:w-[20%] max-[1390px]:w-[15%]"
                src={care}
              />
              <p className="ml-[5px] max-[768px]:text-[14px]">
                Empowering Self-Care
              </p>
            </div>

            <div className="flex px-[1%] py-[1%] rounded-[50px] items-center bg-white shadow-lg max-[768px]:my-[5%]">
              <Image
                className="max-[768px]:w-[20%] max-[1390px]:w-[15%]"
                src={care}
              />
              <p className="ml-[5px] max-[768px]:text-[14px]">
                Unbiased Listening Ear
              </p>
            </div>

            <div className="flex px-[1%] py-[1%] rounded-[50px] items-center bg-white shadow-lg max-[768px]:my-[5%]">
              <Image
                className="max-[768px]:w-[25%] max-[1390px]:w-[20%]"
                src={available}
              />
              <p className="ml-[5px] max-[768px]:text-[14px]">
                Always Available
              </p>
            </div>

            <div className="flex px-[1%] py-[1%] rounded-[50px] items-center bg-white shadow-lg max-[768px]:my-[5%]">
              <Image
                className="max-[768px]:w-[25%] max-[1390px]:w-[20%]"
                src={companion}
              />
              <p className="ml-[5px] max-[768px]:text-[14px]">Your Companion</p>
            </div>

            <div className="flex px-[1%] py-[1%] rounded-[50px] items-center bg-white shadow-lg max-[768px]:my-[5%]">
              <Image
                className="max-[768px]:w-[25%] max-[1390px]:w-[20%]"
                src={care}
              />
              <p className="ml-[5px] max-[768px]:text-[14px]">
                Your Safe Haven
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between px-[5%] mt-[12%] text-left max-[768px]:flex-col max-[768px]:px-[0%]">
          <div className="w-[25%] max-[768px]:w-[100%]">
            <Image src={starIcon} />
            <div>
              <h1
                className={classnames(
                  fraunces.className,
                  "text-[48px] text-[#002C3C] font-semibold py-[2%] w-[80%] max-[1500px]:w-[100%] max-[768px]:text-[24px] max-[768px]:py-[5%]"
                )}
              >
                What We Offer
              </h1>
              <p className="w-[90%]">
                Discover our offerings for a healthier, happier you.
              </p>
            </div>
          </div>

          <div className="w-[75%] max-[768px]:w-[100%] max-[768px]:mt-[5%]">
            <div className="flex px-[10%] justify-between max-[1500px]:px-[5%] max-[768px]:px-[0%]">
              <div className="bg-[#99BEB7] rounded-[40px] p-[4%] w-[48%] max-[768px]:rounded-[20px]">
                <Image className="max-[768px]:w-[60%]" src={clock} />
                <h1 className="text-[#002C3C] text-[24px] font-bold mt-[5%] max-[768px]:text-[18px]">
                  Round the Clock Personalized Support
                </h1>
                <p className="text-[#002C3C] font-medium mt-[2%] max-[768px]:text-[14px]">
                  Mentra’s personalized interaction goes beyond understanding –
                  it's like having a friend who truly gets you and offers
                  support uniquely crafted just for you, wherever and whenever
                  you need it
                </p>
              </div>

              <div className="bg-[#FAE19D] rounded-[40px] p-[4%] w-[48%] h-[360px] max-[768px]:rounded-[20px]">
                <Image className="max-[768px]:w-[60%]" src={tag} />
                <h1 className="text-[#002C3C] text-[24px] font-bold mt-[5%] max-[768px]:text-[18px]">
                  Licensed Therapists on Demand
                </h1>
                <p className="text-[#002C3C] font-medium mt-[2%] max-[768px]:text-[14px]">
                  Mentra connects you with qualified therapists for personalized
                  professional support without the hassle.
                </p>
              </div>
            </div>

            <div className="flex px-[10%] justify-between mt-[3%] max-[1500px]:px-[5%] max-[768px]:px-[0%]">
              <div className="bg-[#C7D69F] rounded-[40px] p-[4%] w-[48%] max-[768px]:rounded-[20px]">
                <Image className="max-[768px]:w-[60%]" src={lock} />
                <h1 className="text-[#002C3C] text-[24px] font-bold mt-[5%] max-[768px]:text-[18px]">
                  Anonymous & Secure
                </h1>
                <p className="text-[#002C3C] font-medium mt-[2%] max-[768px]:text-[14px]">
                  Mentra is a sanctuary of complete anonymity and privacy,
                  shattering the walls of stigma. Your data is not just safe;
                  it's yours to own. Your secrets are kept secret.
                </p>
              </div>

              <div className="bg-[#1A6A73] rounded-[40px] p-[4%] w-[48%] h-[380px] mt-[-7%] max-[768px]:rounded-[20px]">
                <Image className="max-[768px]:w-[60%]" src={person} />
                <h1 className="text-[white] text-[24px] font-bold mt-[5%] max-[768px]:text-[18px]">
                  Engaging Wellness Library
                </h1>
                <p className="text-[white] font-medium mt-[2%] max-[768px]:text-[14px]">
                  Mentra is a world where you can engage, explore, and nurture
                  your mind with a touch of playfulness through interactive
                  tools and games.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[5%] mt-[5%] py-[5%] max-[768px]:px-[5%]">
        <h1
          className={classnames(
            fraunces.className,
            "text-[48px] text-[#002C3C] font-bold max-[768px]:text-[24px] max-[768px]:py-[5%]"
          )}
        >
          How it Works
        </h1>
        <div className="flex items-center justify-center max-[768px]:flex-col">
          <div className="w-[40%] mr-[4%] max-[768px]:w-[100%]">
            <div className="border-[#FAE19D] border-l-[4px] px-[3%] py-[3%]">
              <Image src={badge1} />
              <div className="mt-[3%]">
                <h1 className="text-[18px] font-semibold text-[#1A6A73]">
                  Download, Sign Up, Subscribe and Personalize
                </h1>
                <p className="text-[#1A6A73] text-[14px] mt-[2%]">
                  Get started in moments. Tell us a little about yourself to
                  personalize your experience.
                </p>
              </div>
            </div>

            <div className="border-[#F9F7F3] border-l-[4px] px-[3%] py-[3%] ">
              <Image src={badge2} />
              <div className="mt-[3%]">
                <h1 className="text-[18px] font-semibold text-[#002C3C]">
                  Meet Your AI Companion
                </h1>
                <p className="text-[#002C3C] text-[14px] mt-[2%]">
                  Chat with your empathetic AI buddy, designed to understand and
                  respond to your emotions.
                </p>
              </div>
            </div>

            <div className="border-[#F9F7F3] border-l-[4px] px-[3%] py-[3%]">
              <Image src={badge3} />
              <div className="mt-[3%]">
                <h1 className="text-[18px] font-semibold text-[#002C3C]">
                  Need professional support? Get matched with a therapist
                </h1>
                <p className="text-[#002C3C] text-[14px] mt-[2%]">
                  Our smart match gets you the right therapist. Book sessions
                  that fit your schedule.
                </p>
              </div>
            </div>

            <div className="border-[#F9F7F3] border-l-[4px] px-[3%] py-[3%]">
              <Image src={badge4} />
              <div className="mt-[3%]">
                <h1 className="text-[18px] font-semibold text-[#002C3C]">
                  Evolving with you
                </h1>
                <p className="text-[#002C3C] text-[14px] mt-[2%]">
                  Mentra learns and adapts with you. Get tips and activities
                  made just for you.
                </p>
              </div>
            </div>
          </div>

          <div className="max-[768px]:mt-[10%]">
            <Image width={600} src={workSide} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMentra;
