import Image from "next/image";
import React from "react";
import logo from "../../public/Assets/Svgs/logo.svg";
import Link from "next/link";

const Header = () => {
  return (
    <div className="px-[5%] py-[1.5%] bg-white bg-blur bg-opacity-50 fixed w-[100%]">
      <div className="flex justify-between items-center">
        <div>
          <Link href="/">
            <Image src={logo} />
          </Link>
        </div>
        <div className="flex">
          <h1 className="mx-[25px]">
            <Link href="/about">About</Link>
          </h1>
          <h1 className="mx-[25px]">
            <Link href="/mentra-for-work">Mentra for Work</Link>
          </h1>
          <h1 className="mx-[25px]">
            <Link href="/for-therapist">For Therapists</Link>
          </h1>
          <h1 className="mx-[25px]">
            <Link href="/wellness-library">Wellness Library</Link>
          </h1>
          <h1 className="mx-[25px]">
          <Link href="/contact">Contact</Link>
          </h1>
        </div>
        <div className="flex">
          <button className="mx-[25px] bg-[#20232D] text-white w-[150px] h-[50px] rounded-[30px] shadow-lg">
            Get the App
          </button>
          <button className="bg-[#1A6A73] text-white w-[180px] h-[50px] rounded-[30px] shadow-lg">
            Therapists Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
