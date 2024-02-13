import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import JoinMentra from "@/Components/JoinMentra";
import Image from "next/image";
import React from "react";
import checked from "../../../public/Assets/Svgs/circleChecked.svg";
import { fraunces } from "../fonts";
import classnames from "classnames";
// import arrowRight from "../../../public/Assets/Svgs/arrowRight.svg";
import Link from "next/link";


const page = () => {
  return (
    <div>
      <Header />
      <div>
        <div
          style={{ backgroundImage: "url(/Assets/Images/therapistBg.png)" }}
          className="text-center h-[75vh] bg-contain pt-[10%] bg-no-repeat"
        >
          <h1
            className={classnames(fraunces.className, "text-[64px] font-bold")}
          >
            Joining Mentra as a <br />
            Therapist
          </h1>
          <h1 className="text-[22px] mt-[2%]">
            As a therapist partnering with us, you'll embark on a <br />
            journey of making a meaningful impact in the lives of <br />
            individuals seeking support.
          </h1>
          <Link href="/signup">
            <button className="bg-[#1A6A73] mt-[2%] text-[white] rounded-[50px] p-[1%]">
              Sign up as a therapist
            </button>
          </Link>
        </div>
        <div className="text-center bg-[#FFFDF2] py-[5%] px-[15%]">
          <h1 className="text-[32px] font-medium px-[15%]">
            Discover the benefits of collaborating with Mentra and how our
            platform empowers therapists to connect, engage, and contribute to
            the well-being of our diverse community."
          </h1>
          <div className="flex flex-wrap justify-center ml-[3%] px-[15%] mt-[5%]">
            <div className="w-[48%]">
              <div className="flex items-center">
                <Image src={checked} />
                <h1 className="text-[18px] font-semibold text-[#243141] ml-[2%]">
                  Empowering Connections
                </h1>
              </div>
              <h1 className="text-[#8E959D] text-left w-[80%] mt-[2%]">
                Forge meaningful connections with clients seeking support on
                their mental health journey.
              </h1>
            </div>

            <div className="w-[48%]">
              <div className="flex items-center">
                <Image src={checked} />
                <h1 className="text-[18px] font-semibold text-[#243141] ml-[2%]">
                  Flexible Engagement
                </h1>
              </div>
              <h1 className="text-[#8E959D] text-left w-[80%] mt-[2%]">
                Enjoy the flexibility to engage with clients through secure and
                innovative online platforms.
              </h1>
            </div>

            <div className="w-[48%] mt-[5%]">
              <div className="flex items-center">
                <Image src={checked} />
                <h1 className="text-[18px] font-semibold text-[#243141] ml-[2%]">
                  Community Impact
                </h1>
              </div>
              <h1 className="text-[#8E959D] text-left w-[80%] mt-[2%]">
                Contribute to the well-being of a diverse community, making a
                positive impact on individual lives.
              </h1>
            </div>

            <div className="w-[48%] mt-[5%]">
              <div className="flex items-center">
                <Image src={checked} />
                <h1 className="text-[18px] font-semibold text-[#243141] ml-[2%]">
                  Innovative Technology
                </h1>
              </div>
              <h1 className="text-[#8E959D] text-left w-[80%] mt-[2%]">
                Leverage cutting-edge technology that enhances the therapeutic
                experience for both therapists and clients.
              </h1>
            </div>

            <div className="w-[48%] mt-[5%]">
              <div className="flex items-center">
                <Image src={checked} />
                <h1 className="text-[18px] font-semibold text-[#243141] ml-[2%]">
                  Secure and Confidential
                </h1>
              </div>
              <h1 className="text-[#8E959D] text-left w-[80%] mt-[2%]">
                Ensure a secure and confidential environment for therapy
                sessions, prioritizing client privacy.
              </h1>
            </div>

            <div className="w-[48%] mt-[5%]">
              <div className="flex items-center">
                <Image src={checked} />
                <h1 className="text-[18px] font-semibold text-[#243141] ml-[2%]">
                  Comprehensive Support
                </h1>
              </div>
              <h1 className="text-[#8E959D] text-left w-[80%] mt-[2%]">
                Benefit from our comprehensive support system, including
                resources, training, and a collaborative network.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <JoinMentra />
      <Footer />
    </div>
  );
};

export default page;
