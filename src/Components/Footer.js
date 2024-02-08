import React from "react";
import appleBtn from "../../public/Assets/appleBtn.svg";
import googleBtn from "../../public/Assets/googleBtn.svg";
import logo from "../../public/Assets/Svgs/logoW.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div
      className="h-[100vh] bg-cover w-[100%] bg-no-repeat m-0 flex flex-col justify-center items-center px-[15%]"
      style={{ backgroundImage: "url(/Assets/Images/footerBg.png)" }}
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[56px] font-bold">Join the Mentra Community</h1>
        <p className="text-[20px] my-[3%]">
          Ready to experience the transformative power of Mentra? Download our
          app now and gain instant access to personalized conversations,
          professional therapists, guided journaling, and a wealth of self-care
          resources.
        </p>
        <div className="flex">
          <Image className="mr-[3%]" width={200} src={appleBtn} />
          <Image src={googleBtn} />
        </div>
      </div>

      <div className="bg-[#002C3C] rounded-[40px] w-[100%] mt-[5%] text-[white] px-[3%] py-[3%] flex">
        <div className="w-[50%]">
          <Image src={logo} />
          <p>Your pocket-sized wellness buddy. </p>
          <div className="mt-[50%]">
            <button className="border-[1px] border-[white] rounded-[30px] p-[3%] w-[40%]">
              English
            </button>
          </div>
        </div>
        <div>
          <h1>Solutions</h1>
          <p>Mentra for work</p>
          <p>Wellness Library</p>
          <p>For Therapists</p>
        </div>
        <div>
          <h1>Company</h1>
          <p>About us</p>
          <p>Contact us</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
