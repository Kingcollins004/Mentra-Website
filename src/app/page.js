import Header from "@/Components/Header";
import Image from "next/image";
import logo from "../../public/Assets/Svgs/logo.svg";
import heroImg from "../../public/Assets/Images/heroImg.png";
import leaf from "../../public/Assets/Images/leaf2023.png";
import AboutMentra from "@/Components/HomeComponents/AboutMentra";
import JoinMentra from "@/Components/JoinMentra";
import Testimonials from "@/Utilities/Testimonials";
import Footer from "@/Components/Footer";
import { fraunces } from "./fonts";
import classnames from "classnames";

export default function Home() {
  return (
    <div>
      <div className="w-[100%] h-[100vh] bg-gradient-to-b from-[#FBEDB1] to-[#FEF7EC]">
        <Header />
        <div className="flex justify-between items-center">
          <div className="pl-[15%] w-[50%]">
            <Image width={300} src={logo} />
            <h1
              className={classnames(
                fraunces.className,
                "text-[56px] text-[#002C3C] font-semibold"
              )}
            >
              your mantra for <br /> mental and emotional <br /> wellness
            </h1>
            <div className="mt-[3%]">
              <p>
                Welcome to Mentra: Unlock a world of mental well-being with
                Mentra—a revolutionary platform combining cutting-edge AI
                technology with compassionate human support.
              </p>
              <button className="bg-[#002C3C] text-[white] rounded-[50px] p-[3%] mt-[5%]">
                Join the waitlist
              </button>
            </div>
            <div className="flex px-[3%] py-[3%] w-[70%] bg-[#C7D69F] rounded-[15px] mt-[5%]">
              <Image src={leaf} />
              <div className="ml-[3%]">
                <h1 className="text-[#1A6A73]">Semi-finalist</h1>
                <p className="text-[12px] text-[#002C3C]">
                  Oxford and Cambridge Artificial Intelligence Competition 2023
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <Image width={700} src={heroImg} />
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
