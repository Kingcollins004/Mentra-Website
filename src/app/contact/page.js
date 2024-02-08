import React from "react";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import JoinMentra from "@/Components/JoinMentra";
import Image from "next/image";
import email from "../../../public/Assets/Svgs/email.svg";
import info from "../../../public/Assets/Svgs/info.svg"
const page = () => {
  return (
    <div>
      <Header />
      <div className="flex px-[15%] justify-between py-[5%] bg-[#FFFDF2]">
        <div className="w-[49%]">
          <h1 className="text-[64px] font-bold text-[#1D1E20]">
            We’d love <br /> to hear from you
          </h1>
          <h1 className="text-[18px] font-semibold text-[#616161] mt-[2%] w-[80%]">
            Feel free to reach out to us if you have any questions or feedback
            for us.
          </h1>
          <div className="mt-[5%]">
            <h1 className="font-medium">You can reach us at:</h1>

            <div className="flex items-center my-[3%]">
              <Image src={email} />
              <div className="ml-[3%]">
                <h1>Email</h1>
                <h1>Get in touch by emailing help@mentra.com</h1>
              </div>
            </div>

            <div className="flex items-center my-[3%]">
              <Image src={email} />
              <div className="ml-[3%]">
                <h1>Phone</h1>
                <h1>Give us a call on (02) 1234 5503</h1>
              </div>
            </div>

            <div className="flex items-center my-[3%]">
              <Image src={email} />
              <div className="ml-[3%]">
                <h1>Location</h1>
                <h1>Visit us at 2030 Queen St, Sydney 2000 NY</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[48px] bg-gradient-to-b from-[#FBEDB1] to-[#FEF7EC] py-[3%] px-[5%] w-[49%]">
          <div className="w-[100%] bg-white rounded-[16px] p-[3%] mt-[5%]">
            <h1>Assets</h1>
            <input placeholder="Type your answer" />
          </div>

          <div className="w-[100%] bg-white rounded-[16px] p-[3%] mt-[5%]">
            <h1>Assets</h1>
            <input placeholder="Type your answer" />
          </div>

          <div className="w-[100%] bg-white rounded-[16px] p-[3%] mt-[5%]">
            <h1>Assets</h1>
            <input placeholder="Type your answer" />
          </div>

          <div className="w-[100%] bg-white rounded-[16px] p-[3%] mt-[5%]">
            <h1>Assets (optional)</h1>
            <textarea placeholder="Not Selected" />
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
