"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import logo from "../../public/Assets/Svgs/logo.svg";
import Link from "next/link";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    // Retrieve active link index from local storage on component mount
    const storedActiveLink = localStorage.getItem("activeLink");
    if (storedActiveLink) {
      setActiveLink(parseInt(storedActiveLink, 10));
    }
  }, []);

  const handleLinkClick = (index) => {
    setActiveLink(index);
    // Store active link index in local storage
    localStorage.setItem("activeLink", index.toString());
  };
  return (
    <div className="px-[5%] py-[1.5%] bg-[#FBEDB1]  fixed w-[100%] z-[10]">
      <div className="flex justify-between items-center">
        <div className="w-[20%]">
          <Link href="/">
            <Image src={logo} />
          </Link>
        </div>
        <div className="flex justify-between w-[50%] px-[3%]">
          <h1
            className=""
            onClick={() => handleLinkClick(0)}
            style={
              activeLink === 0 ? { fontWeight: "700", color: "#1A6A73" } : { fontWeight: "400" }
            }
          >
            <Link href="/about">About</Link>
          </h1>
          <h1
            className=""
            onClick={() => handleLinkClick(1)}
            style={
              activeLink === 1 ? { fontWeight: "700", color: "#1A6A73" } : { fontWeight: "400" }
            }
          >
            <Link href="/mentra-for-work">Mentra for Work</Link>
          </h1>
          <h1
            className=""
            onClick={() => handleLinkClick(2)}
            style={
              activeLink === 2 ? { fontWeight: "700", color: "#1A6A73" } : { fontWeight: "400" }
            }
          >
            <Link href="/for-therapist">For Therapists</Link>
          </h1>
          <h1
            className=""
            onClick={() => handleLinkClick(3)}
            style={
              activeLink === 3 ? { fontWeight: "700", color: "#1A6A73" } : { fontWeight: "400" }
            }
          >
            <Link href="/wellness-library">Wellness Library</Link>
          </h1>
          <h1
            className=""
            onClick={() => handleLinkClick(4)}
            style={
              activeLink === 4 ? { fontWeight: "700", color: "#1A6A73" } : { fontWeight: "400" }
            }
          >
            <Link href="/contact">Contact</Link>
          </h1>
        </div>
        <div className="flex justify-end w-[30%]">
          <button className="ml-[6%] mr-[2%] bg-[#20232D] text-white w-[150px] h-[50px] rounded-[30px] shadow-lg">
            Get the App
          </button>
          <button className="bg-[#1A6A73] text-white w-[170px] h-[50px] rounded-[30px] shadow-lg">
            Therapists Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
