import React from "react";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import JoinMentra from "@/Components/JoinMentra";
import Image from "next/image";
import email from "../../../public/Assets/Svgs/email.svg";
import info from "../../../public/Assets/Svgs/info.svg";
import { fraunces } from "../fonts";
import classnames from "classnames";

const page = () => {
  return (
    <div>
      <Header />
      <div className="flex px-[15%] justify-between py-[10%] bg-[#FFFDF2] max-[768px]:pt-[25%] max-[768px]:flex-col max-[768px]:px-[5%]">
        <div className="w-[49%] max-[768px]:w-[100%]">
          <h1
            className={classnames(
              fraunces.className,
              "text-[64px] font-bold text-[#1D1E20] max-[768px]:text-[32px]"
            )}
          >
            We’d love <br /> to hear from you
          </h1>
          <h1 className="text-[18px] font-semibold text-[#616161] mt-[2%] w-[80%] max-[768px]:text-[14px]">
            Feel free to reach out to us if you have any questions or feedback
            for us.
          </h1>
          <div className="mt-[5%]">
            <h1 className="font-medium">You can reach us at:</h1>

            <div className="flex items-center my-[3%]">
              <Image src={email} />
              <div className="ml-[3%] max-[768px]:text-[14px]">
                <h1>Email</h1>
                <h1>Get in touch by emailing help@mentra.com</h1>
              </div>
            </div>

            <div className="flex items-center my-[3%]">
              <Image src={email} />
              <div className="ml-[3%] max-[768px]:text-[14px]">
                <h1>Phone</h1>
                <h1>Give us a call on (02) 1234 5503</h1>
              </div>
            </div>

            <div className="flex items-center my-[3%]">
              <Image src={email} />
              <div className="ml-[3%] max-[768px]:text-[14px]">
                <h1>Location</h1>
                <h1>Visit us at 2030 Queen St, Sydney 2000 NY</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[48px] bg-gradient-to-b from-[#FBEDB1] to-[#FEF7EC] py-[3%] px-[5%] w-[49%] max-[768px]:w-[100%] max-[768px]:mt-[5%] max-[768px]:px-[5%] max-[768px]:rounded-[20px]">
          <div className="w-[100%] bg-white rounded-[16px] p-[3%] mt-[5%]">
            <h1 className="max-[768px]:text-[14px] font-semibold">Fullname</h1>
            <input placeholder="Enter yout fullname" className="w-[100%] max-[768px]:text-[14px]" />
          </div>

          <div className="w-[100%] bg-white rounded-[16px] p-[3%] mt-[5%]">
            <h1 className="max-[768px]:text-[14px] font-semibold">Email Address</h1>
            <input type="email" placeholder="Enter your email" className="w-[100%] max-[768px]:text-[14px]" />
          </div>

          <div className="w-[100%] bg-white rounded-[16px] p-[3%] mt-[5%]">
            <h1 className="max-[768px]:text-[14px] font-semibold">Phone Number</h1>
            <input type="number" placeholder="Enter your phone number" className="w-[100%] max-[768px]:text-[14px]" />
          </div>

          <div className="w-[100%] bg-white rounded-[16px] p-[3%] mt-[5%]">
            <h1 className="max-[768px]:text-[14px] font-semibold">Message (optional)</h1>
            <textarea placeholder="Enter message" className="w-[100%] max-[768px]:text-[14px]" />
          </div>

          <div className="flex">
            <Image src={info} />
            <h1 className="text-[12px]">This is a hint text to help user.</h1>
          </div>

          <div className="w-[100%] mt-[5%] text-center">
            <button className="bg-[#1A6A73] w-[100%] text-[white] rounded-[50px] p-[3%] mt-[5%]">
              Send Message
            </button>
          </div>
        </div>
      </div>
      <JoinMentra />
      <Footer />
    </div>
  );
};

export default page;
