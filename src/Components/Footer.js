import React from "react";
import appleBtn from "../../public/Assets/appleBtn.svg";
import googleBtn from "../../public/Assets/googleBtn.svg";
import logo from "../../public/Assets/Svgs/logoW.svg";
import Image from "next/image";
import { fraunces } from "../../src/app/fonts";
import classnames from "classnames";
import twitter from "../../public/Assets/Svgs/twitter.svg";
import tiktok from "../../public/Assets/Svgs/tiktok.svg";
import instagram from "../../public/Assets/Svgs/instagram.svg";
import globe from "../../public/Assets/Svgs/globe.svg";
import arrowDown from "../../public/Assets/Svgs/arrowDown.svg";
const Footer = () => {
  return (
    <div
      className="h-[100vh] bg-cover w-[100%] bg-no-repeat m-0 flex flex-col justify-center items-center px-[15%] max-[768px]:h-[100%] max-[768px]:px-[5%] max-[768px]:pb-[5%]"
      style={{ backgroundImage: "url(/Assets/Images/footerBg.png)" }}
    >
      <div className="flex flex-col justify-center items-center max-[768px]:mt-[10%]">
        <h1
          className={classnames(
            fraunces.className,
            "text-[56px] font-bold max-[768px]:text-[28px]"
          )}
        >
          Join the Mentra Community
        </h1>
        <p className="text-[20px] my-[3%] max-[768px]:text-[16px]">
          Ready to experience the transformative power of Mentra? Download our
          app now and gain instant access to personalized conversations,
          professional therapists, guided journaling, and a wealth of self-care
          resources.
        </p>

        <div className="flex w-[35%] max-[768px]:w-[80%]">
          <div className="flex items-center mr-[3%] bg-black rounded-[40px] justify-center text-white w-[200px] py-[2%]">
            <Image className="mr-[2%]" width={50} src={appleBtn} />
            <div className="text-left">
              <h1 className="text-[13px]">Get it on</h1>
              <p className="text-[16px] m-0 font-semibold">App Store</p>
            </div>
          </div>

          <div className="flex items-center bg-black rounded-[40px] justify-center text-[white] w-[200px] py-[2%]">
            <Image className="mr-[3%]" width={50} src={googleBtn} />
            <div className="text-left">
              <h1 className="text-[13px]">Get it on</h1>
              <p className="text-[16px] m-0 font-semibold">App Store</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#002C3C] rounded-[40px] w-[100%] mt-[5%] text-[white] px-[3%] py-[3%] flex max-[768px]:flex-col max-[768px]:mt-[10%] max-[768px]:rounded-[20px] max-[768px]:py-[5%]">
        <div className="w-[50%] max-[768px]:w-[100%]">
          <Image src={logo} />
          <p className="mt-[3%] text-[18px] font-medium">
            Your pocket-sized wellness buddy. 
          </p>
          <div className="mt-[50%] max-[768px]:mt-[5%]">
            <div className="border-[1px] border-[white] rounded-[30px] px-[3%] py-[2%] w-[35%] flex item-center justify-between ">
              <Image width={30} src={globe} />
              <button className=" ">English</button>
              <Image width={30} src={arrowDown} />
            </div>
          </div>
        </div>
        <div className="w-[20%] flex items-start flex-col max-[768px]:mt-[7%] max-[768px]:w-[100%]">
          <h1 className="font-bold mb-[7%] max-[768px]:mb-[3%]">Solutions</h1>
          <p className="text-[14px] font-light my-[4%] max-[768px]:my-[1%]">Mentra for work</p>
          <p className="text-[14px] font-light my-[4%] max-[768px]:my-[1%]">Wellness Library</p>
          <p className="text-[14px] font-light my-[4%] max-[768px]:my-[1%]">For Therapists</p>
        </div>
        <div className="w-[20%] flex items-start flex-col max-[768px]:mt-[7%] max-[768px]:w-[100%]">
          <h1 className="font-bold mb-[7%]">Company</h1>
          <p className="text-[14px] font-light my-[4%] max-[768px]:my-[1%]">About us</p>
          <p className="text-[14px] font-light my-[4%] max-[768px]:my-[1%]">Contact us</p>
        </div>
        <div className="w-[20%] flex items-start flex-col max-[768px]:mt-[7%] max-[768px]:w-[100%]">
          <h1 className="font-bold mb-[7%]">Follow Us</h1>
          <div className="flex my-[4%] max-[768px]:my-[1%] items-center">
            <Image src={twitter} />
            <p className="text-[14px] font-light ml-[7%]">Twitter</p>
          </div>

          <div className="flex my-[4%] max-[768px]:my-[1%] items-center">
            <Image src={instagram} />
            <p className="text-[14px] font-light ml-[7%]">Instagram</p>
          </div>

          <div className="flex my-[4%] max-[768px]:my-[1%] items-center">
            <Image src={tiktok} />
            <p className="text-[14px] font-light ml-[7%]">TikTok</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
