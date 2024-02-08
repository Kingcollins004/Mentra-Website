"use client";
import React, { useState } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import JoinMentra from "@/Components/JoinMentra";
import "./about.css";
import OurStory from "@/Components/AboutComponents/OurStory";

const page = () => {
  const [activeLink, setActiveLink] = useState(0);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center bg-[#FFFDF2] py-[5%]">
        <div className="text-center">
          <h1 className="text-[64px] font-bold ">
            Unveiling the <br /> Heartbeat of Mentra
          </h1>
          <h1 className="text-[22px] mt-[3%]">
            Journey with us as we share our story, mission, <br />
            and vision, revealing the essence that drives <br />
            Mentra to redefine the landscape of mental <br />
            well-being.
          </h1>
        </div>
        <div>
          <div className="flex justify-center items-center mt-[15%] bg-[#C7D69F] rounded-[50px] px-[15px] py-[1.5%]">
            <p
              className={activeLink === 0 ? "active" : ""}
              onClick={() => handleLinkClick(0)}
              //   style={{cursor: "pointer", margin: "5px 15px"}}
            >
              Our Story
            </p>
            <p
              className={activeLink === 1 ? "active" : ""}
              onClick={() => handleLinkClick(1)}
            >
              Mission
            </p>
            <p
              className={activeLink === 2 ? "active" : ""}
              onClick={() => handleLinkClick(2)}
            >
              Vision
            </p>
            <p
              className={activeLink === 3 ? "active" : ""}
              onClick={() => handleLinkClick(3)}
            >
              Our team
            </p>
            <p
              className={activeLink === 4 ? "active" : ""}
              onClick={() => handleLinkClick(4)}
            >
              Careers
            </p>
          </div>
        </div>
        <div className="mt-[3%] bg-[#C7D69F] mx-[15%] rounded-[40px] px-[5%] py-[5%] ">
          <OurStory />
        </div>
      </div>

      <JoinMentra />
      <Footer />
    </div>
  );
};

export default page;
