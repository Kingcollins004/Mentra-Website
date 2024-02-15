import React from "react";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import JoinMentra from "@/Components/JoinMentra";
import Image from "next/image";
import creator1 from "../../../public/Assets/Images/creator1.png";
import creator2 from "../../../public/Assets/Images/creator2.png";
import creator3 from "../../../public/Assets/Images/creator3.png";
import starIcon from "../../../public/Assets/Svgs/starIcon.svg";
import company1 from "../../../public/Assets/Svgs/company1.svg";
import company2 from "../../../public/Assets/Svgs/company2.svg";
import company3 from "../../../public/Assets/Svgs/company3.svg";
import company4 from "../../../public/Assets/Svgs/company4.svg";
import company5 from "../../../public/Assets/Svgs/company5.svg";
import { fraunces } from "../fonts";
import classnames from "classnames";
import arrowRight from "../../../public/Assets/Svgs/arrowRight.svg";

const page = () => {
  return (
    <div className="bg-[#FFFDF2]">
      <Header />
      <div className="bg-[#FFFDF2] max-[768px]:pt-[15%]">
        <div
          style={{ backgroundImage: "url(/Assets/Images/CreatorBg.png)" }}
          className="text-center h-[75vh] w-[100%] bg-cover pt-[10%] bg-no-repeat max-[768px]:h-[100%]"
        >
          <button className="bg-[none] mt-[2%] text-[#1A6A73] border-[1px] border-[#1A6A73] rounded-[50px] p-[8px] font-semibold max-[768px]:p-[3%]">
            Mentra For Work
          </button>
          <h1
            className={classnames(
              fraunces.className,
              "text-[64px] font-bold max-[768px]:text-[32px] max-[768px]:mt-[5%]"
            )}
          >
            Elevate Workplace <br />
            Well-Being with <br />
            Mentra for Work.
          </h1>
          <h1 className="text-[22px] mt-[2%] max-[768px]:text-[16px]">
            Explore how Mentra for Work brings a holistic <br /> approach to
            employee well-being, creating a positive <br /> and thriving
            workplace environment.
          </h1>
        </div>

        <div className="flex justify-center px-[20%] py-[5%] items-center max-[768px]:px-[5%] max-[768px]:flex-col-reverse max-[768px]:mt-[10%]">
          <div className="w-[49%] flex justify-start max-[768px]:w-[80%] max-[768px]:mt-[8%]">
            <Image width={500} src={creator1} />
          </div>
          <div className="w-[49%] ml-[2%] max-[768px]:w-[100%]">
            <Image
              className="mb-[7%] max-[768px]:mb-[3%] max-[768px]:w-[10%]"
              src={starIcon}
            />
            <h1
              className={classnames(
                fraunces.className,
                "text-[32px] font-semibold mb-[3%] w-[80%] max-[768px]:text-[24px] max-[768px]:w-[100%]"
              )}
            >
              Employee well-being meets workplace innovation
            </h1>
            <h1 className="text-[18px] text-[#555562] mb-[3%] w-[80%] max-[768px]:text-[16px] max-[768px]:w-[100%]">
              Elevate your workplace with Mentra. Our platform is designed to
              enhance employee well-being, contributing to higher satisfaction,
              increased engagement, and a happier, more resilient workforce.
            </h1>

            <div className="flex bg-[#20232D] rounded-[50px] px-[5%] py-[4%] mt-[5%] w-[200px]">
              <button className=" text-[white] ">Join the waitlist</button>
              <Image width={25} className="ml-[2%]" src={arrowRight} />
            </div>
          </div>
        </div>

        <div className="flex justify-center px-[20%] py-[5%] items-center max-[768px]:px-[5%] max-[768px]:flex-col">
          <div className="w-[49%] mr-[2%] max-[768px]:w-[100%]">
            <Image
              className="mb-[7%] max-[768px]:mb-[3%] max-[768px]:w-[10%]"
              src={starIcon}
            />
            <h1
              className={classnames(
                fraunces.className,
                "text-[32px] font-semibold mb-[3%] w-[50%] max-[768px]:text-[24px] max-[768px]:w-[100%]"
              )}
            >
              Tailored Solutions for Companies
            </h1>
            <h1 className="text-[18px] text-[#555562] mb-[3%] w-[80%] max-[768px]:text-[16px] max-[768px]:w-[100%]">
              Mentra offers tailored solutions to meet the unique needs of your
              company. From company-wide access to personalized well-being
              programs, empower your organization with tools that make a
              positive impact on employee mental health.
            </h1>
            <div className="flex bg-[#20232D] rounded-[50px] px-[5%] py-[4%] mt-[5%] w-[200px]">
              <button className=" text-[white] ">Join the waitlist</button>
              <Image width={25} className="ml-[2%]" src={arrowRight} />
            </div>
          </div>

          <div className="w-[49%] flex justify-start max-[768px]:w-[80%] max-[768px]:mt-[8%]">
            <Image width={500} src={creator2} />
          </div>
        </div>
      </div>

      <div className="text-center py-[5%] bg-[#F9F7F3]">
        <h1 className="text-[20px] text-[#626366] font-semibold max-[768px]:text-[16px]">
          800 companies have already use Mentra
        </h1>
        <div className="flex justify-center items-center mt-[3%] max-[768px]:flex-wrap">
          <div className="mx-[2%] max-[768px]:w-[30%] max-[768px]:mx-[5%] max-[768px]:mt-[5%]">
            <Image src={company1} />
          </div>
          <div className="mx-[2%] max-[768px]:w-[30%] max-[768px]:mx-[5%] max-[768px]:mt-[5%]">
            <Image src={company2} />
          </div>
          <div className="mx-[2%] max-[768px]:w-[30%] max-[768px]:mx-[5%] max-[768px]:mt-[5%]">
            <Image src={company3} />
          </div>
          <div className="mx-[2%] max-[768px]:w-[30%] max-[768px]:mx-[5%] max-[768px]:mt-[5%]">
            <Image src={company4} />
          </div>
          <div className="mx-[2%] max-[768px]:w-[30%] max-[768px]:mx-[5%] max-[768px]:mt-[5%]">
            <Image src={company5} />
          </div>
        </div>
      </div>

      <div className="flex justify-center px-[20%] py-[5%] items-center bg-[#F9F7F3] mb-[7%] max-[768px]:px-[5%] max-[768px]:flex-col-reverse">
        <div className="w-[49%] flex justify-start max-[768px]:w-[80%] max-[768px]:mt-[8%]">
          <Image width={500} src={creator3} />
        </div>
        <div className="w-[49%] ml-[2%] max-[768px]:w-[100%]">
          <Image className="mb-[7%]" src={starIcon} />
          <h1
            className={classnames(
              fraunces.className,
              "text-[32px] font-semibold mb-[3%] w-[80%] max-[768px]:text-[24px] max-[768px]:w-[100%]"
            )}
          >
            Explore the advantages of incorporating Mentra for Work into your
            organization's culture.
          </h1>
          <h1 className="text-[18px] text-[#555562] mb-[3%] w-[80%] max-[768px]:text-[16px] max-[768px]:w-[100%]">
            Elevate your workplace with Mentra. Our platform is designed to
            enhance employee well-being, contributing to higher satisfaction,
            increased engagement, and a happier, more resilient workforce.
          </h1>
          <div className="flex bg-[#20232D] rounded-[50px] px-[5%] py-[4%] mt-[5%] w-[200px]">
            <button className=" text-[white] ">Join the waitlist</button>
            <Image width={25} className="ml-[2%]" src={arrowRight} />
          </div>
        </div>
      </div>
      <JoinMentra />
      <Footer />
    </div>
  );
};

export default page;
