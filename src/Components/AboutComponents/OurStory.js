import Image from "next/image";
import React from "react";
import ourStory from "../../../public/Assets/Images/ourStory.png";

const OurStory = () => {
  return (
    <div className="flex flex-col items-center justify-center text-[#333333]">
      <div>
        <h1 className="text-[18px] mb-[3%] max-[768px]:text-[16px]">
          Born in 2023 with a vision to transform mental and emotional
          well-being, we're here to shatter barriers and open doors to
          accessible, affordable care for everyone.
        </h1>
        <h1 className="text-[24px] font-medium mb-[3%] w-[80%] max-[768px]:text-[18px]">
          At Mentra, we don't just believe in healthcare as a right; we see it
          as a fundamental pillar of a vibrant life. 
        </h1>
        <h1 className="text-[18px] max-[768px]:text-[16px]">
          Harnessing the transformative power of artificial intelligence fused
          with the warmth and understanding of human expertise, we bring you
          care that's not only affordable but deeply personalized. Imagine a
          world where mental health support adapts to your needs, where help is
          not just professional but also profoundly personal. That's the world
          Mentra is building.
        </h1>
      </div>

      <div>
        <Image src={ourStory} />
      </div>

      <div>
        <h1 className="text-[18px] mb-[3%] max-[768px]:text-[16px]">
          Our platform is more than just a service; it's a
          sanctuary—user-friendly and intuitive. Mentra is accessible anytime,
          anywhere. We meet you in your moment of need, guiding you gently
          toward the future you desire and deserve.
        </h1>
        <h1 className="text-[18px] mb-[3%] max-[768px]:text-[16px]">
          Mentra isn't just our name; it's our promise to you. A promise of
          unwavering support, a companion in your journey towards wellbeing.
          We're here to hold space for you, listen, guide, and empower.{" "}
        </h1>
        <h1 className="text-[18px] max-[768px]:text-[16px]">
          With Mentra, embrace a life where mental and emotional wellness is not
          just a dream, but your everyday reality. Welcome to Mentra - your
          mantra for mental and emotional wellness.
        </h1>
      </div>
    </div>
  );
};

export default OurStory;
