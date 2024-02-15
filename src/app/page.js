"use client";
import Header from "@/Components/Header";
import Image from "next/image";
import logo from "../../public/Assets/Svgs/logo.svg";
import heroImg from "../../public/Assets/Images/heroImg.png";
import heroMobile from "../../public/Assets/Svgs/heroMobile.png";
import leaf from "../../public/Assets/Images/leaf2023.png";
import AboutMentra from "@/Components/HomeComponents/AboutMentra";
import JoinMentra from "@/Components/JoinMentra";
import Testimonials from "@/Utilities/Testimonials";
import Footer from "@/Components/Footer";
import { fraunces } from "./fonts";
import classnames from "classnames";
import arrowRight from "../../public/Assets/Svgs/arrowRight.svg";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    // Set the initial value of isSmallScreen
    handleResize();

    // Attach event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="w-[100%] h-[100vh] bg-gradient-to-b from-[#FBEDB1] to-[#FEF7EC] max-[768px]:h-[100%]">
        <Header />
        <div className="flex justify-between items-center pt-[5%] max-[768px]:flex-col max-[768px]:pt-[20%]">
          <div className="pl-[15%] w-[50%] pt-[3%] max-[768px]:pl-[5%] max-[768px]:w-[100%]">
            <Image className="max-[768px]:w-[40%]" width={300} src={logo} />
            <h1
              className={classnames(
                fraunces.className,
                "text-[56px] text-[#002C3C] font-semibold max-[1500px]:text-[42px] max-[768px]:text-[28px]"
              )}
            >
              your mantra for <br /> mental and emotional <br /> wellness
            </h1>
            <div className="mt-[3%]">
              <p className="max-[768px]:text-[14px] max-[768px]:w-[90%]">
                Welcome to Mentra: Unlock a world of mental well-being with
                Mentra—a revolutionary platform combining cutting-edge AI
                technology with compassionate human support.
              </p>

              <div className="flex bg-[#1A6A73] rounded-[50px] p-[3%] mt-[5%] w-fit">
                <button className=" text-[white] w-[100%]">
                  Join the waitlist
                </button>
                <Image width={25} className="ml-[2%]" src={arrowRight} />
              </div>
            </div>
            <div className="flex px-[3%] py-[3%] w-[65%] bg-[#C7D69F] rounded-[15px] mt-[5%] max-[768px]:w-[75%]">
              <Image
                className="w-[20%] max-[1500px]:w-[25%] max-[768px]:h-[60px]"
                src={leaf}
              />
              <div className="ml-[3%] w-[70%]">
                <h1 className="text-[#1A6A73] font-semibold">Semi-finalist</h1>
                <p className="text-[12px] text-[#002C3C]">
                  Oxford and Cambridge Artificial Intelligence Competition 2023
                </p>
              </div>
            </div>
          </div>

          <div className="w-[50%] max-[768px]:w-[100%] max-[768px]:pt-[5%] max-[768px]:flex max-[768px]:justify-center">
            {isSmallScreen ? (
              <Image
                className="max-[768px]:w-[80%]"
                width={700}
                src={heroMobile}
              />
            ) : (
              <Image
                className="max-[768px]:w-[80%]"
                width={700}
                src={heroImg}
              />
            )}
          </div>
        </div>
      </div>
      <AboutMentra />
      <JoinMentra />
      <Testimonials />
      <Footer />
    </div>
  );
}
