"use client";
import React, { useState } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import JoinMentra from "@/Components/JoinMentra";
import "./about.css";
import OurStory from "@/Components/AboutComponents/OurStory";
import { fraunces } from "../fonts";
import classnames from "classnames";
import Mission from "@/Components/AboutComponents/Mission";
import Vission from "@/Components/AboutComponents/Vission";
import Team from "@/Components/AboutComponents/Team";

const page = () => {
  const [activeLink, setActiveLink] = useState(0);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center bg-[#FFFDF2] py-[9%]">
        <div className="text-center">
          <h1
            className={classnames(fraunces.className, "text-[64px] font-bold")}
          >
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
          <div
            style={
              activeLink === 0
                ? { backgroundColor: "#C7D69F" }
                : activeLink === 1
                ? { backgroundColor: "#99BEB7" }
                : activeLink === 2
                ? { backgroundColor: "#FBEDB1" }
                : activeLink === 3
                ? { backgroundColor: "#FAE19D" }
                : activeLink === 4
                ? { backgroundColor: "#99BEB7" }
                : { display: "none" }
            }
            className="flex justify-center items-center mt-[15%] rounded-[50px] px-[15px] py-[1.5%]"
          >
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
        <div
          style={
            activeLink === 0
              ? { backgroundColor: "#C7D69F" }
              : activeLink === 1
              ? { backgroundColor: "#99BEB7" }
              : activeLink === 2
              ? { backgroundColor: "#FBEDB1" }
              : activeLink === 3
              ? { backgroundColor: "#FAE19D" }
              : activeLink === 4
              ? { backgroundColor: "#99BEB7" }
              : { display: "none" }
          }
          className="mt-[3%] mx-[15%] rounded-[40px] px-[5%] py-[5%] "
        >
          {activeLink === 0 ? (
            <OurStory />
          ) : activeLink === 1 ? (
            <Mission />
          ) : activeLink === 2 ? (
            <Vission />
          ) : activeLink === 3 ? (
            <Team />
          ) : activeLink === 4 ? (
            <OurStory />
          ) : null}
        </div>
      </div>

      <JoinMentra />
      <Footer />
    </div>
  );
};

export default page;
