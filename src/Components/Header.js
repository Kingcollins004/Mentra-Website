"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import logo from "../../public/Assets/Svgs/logo.svg";
import Link from "next/link";
import menu from "../../public/Assets/Svgs/menuIcon.svg";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    // Retrieve active link index from local storage on component mount
    const storedActiveLink = localStorage.getItem("activeLink");
    if (storedActiveLink) {
      setActiveLink(parseInt(storedActiveLink, 10));
    }
  }, []);

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

  const handleClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleLinkClick = (index) => {
    setActiveLink(index);
    // Store active link index in local storage
    localStorage.setItem("activeLink", index.toString());
  };
  return (
    <div className="px-[5%] py-[1.5%] bg-[#FBEDB1] fixed w-[100%] z-[10] max-[768px]:py-[5%]">
      {isSmallScreen ? (
        <div className="flex justify-between items-center">
          <div className="w-[20%]">
            <Link href="/">
              <Image src={logo} />
            </Link>
          </div>

          <div className="flex justify-end w-[30%]">
            <Image onClick={handleClick} className="menu" src={menu} />
            {isDropdownVisible && (
              <div className="bg-white p-[4%] w-[40%] mt-[10%] ml-[-32%] flex-col flex absolute shadow-lg rounded-[10px]">
                <h1
                  className="my-[4%]"
                  onClick={() => handleLinkClick(0)}
                  style={
                    activeLink === 0
                      ? { fontWeight: "700", color: "#1A6A73" }
                      : { fontWeight: "400" }
                  }
                >
                  <Link href="/about">About</Link>
                </h1>
                <h1
                  className="my-[4%]"
                  onClick={() => handleLinkClick(1)}
                  style={
                    activeLink === 1
                      ? { fontWeight: "700", color: "#1A6A73" }
                      : { fontWeight: "400" }
                  }
                >
                  <Link href="/mentra-for-work">Mentra for Work</Link>
                </h1>
                <h1
                  className="my-[4%]"
                  onClick={() => handleLinkClick(2)}
                  style={
                    activeLink === 2
                      ? { fontWeight: "700", color: "#1A6A73" }
                      : { fontWeight: "400" }
                  }
                >
                  <Link href="/for-therapist">For Therapists</Link>
                </h1>
                <h1
                  className="my-[4%]"
                  onClick={() => handleLinkClick(3)}
                  style={
                    activeLink === 3
                      ? { fontWeight: "700", color: "#1A6A73" }
                      : { fontWeight: "400" }
                  }
                >
                  <Link href="/wellness-library">Wellness Library</Link>
                </h1>
                <h1
                  className="my-[4%]"
                  onClick={() => handleLinkClick(4)}
                  style={
                    activeLink === 4
                      ? { fontWeight: "700", color: "#1A6A73" }
                      : { fontWeight: "400" }
                  }
                >
                  <Link href="/contact">Contact</Link>
                </h1>
              </div>
            )}
          </div>
        </div>
      ) : (
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
                activeLink === 0
                  ? { fontWeight: "700", color: "#1A6A73" }
                  : { fontWeight: "400" }
              }
            >
              <Link href="/about">About</Link>
            </h1>
            <h1
              className=""
              onClick={() => handleLinkClick(1)}
              style={
                activeLink === 1
                  ? { fontWeight: "700", color: "#1A6A73" }
                  : { fontWeight: "400" }
              }
            >
              <Link href="/mentra-for-work">Mentra for Work</Link>
            </h1>
            <h1
              className=""
              onClick={() => handleLinkClick(2)}
              style={
                activeLink === 2
                  ? { fontWeight: "700", color: "#1A6A73" }
                  : { fontWeight: "400" }
              }
            >
              <Link href="/for-therapist">For Therapists</Link>
            </h1>
            <h1
              className=""
              onClick={() => handleLinkClick(3)}
              style={
                activeLink === 3
                  ? { fontWeight: "700", color: "#1A6A73" }
                  : { fontWeight: "400" }
              }
            >
              <Link href="/wellness-library">Wellness Library</Link>
            </h1>
            <h1
              className=""
              onClick={() => handleLinkClick(4)}
              style={
                activeLink === 4
                  ? { fontWeight: "700", color: "#1A6A73" }
                  : { fontWeight: "400" }
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
      )}
    </div>
  );
};

export default Header;
