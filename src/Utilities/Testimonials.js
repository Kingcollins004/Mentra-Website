"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
import { caveat } from "../app/fonts";
import classnames from "classnames";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: true
  };

  return (
    <div className="bg-[#FFFDF2] py-[5%] px-[15%] text-center max-[768px]:px-[5%] max-[768px]:m-0">
      <Slider {...settings}>
        <div>
          <h3
            className={classnames(
              caveat.className,
              "text-[32px] italic font-bold max-[768px]:text-[18px]"
            )}
          >
            Honestly one of the best starter kits I have ever used. It’s saved
            me hours of time designing layouts. One of the best investments I
            made.
          </h3>
        </div>
        <div>
          <h3
            className={classnames(
              caveat.className,
              "text-[32px] italic font-bold max-[768px]:text-[18px]"
            )}
          >
            "This toolkit exceeded my expectations! As a beginner, it's been a
            game-changer, streamlining my design process and saving me valuable
            time. Definitely a wise investment!"
          </h3>
        </div>
        <div>
          <h3
            className={classnames(
              caveat.className,
              "text-[32px] italic font-bold max-[768px]:text-[18px]"
            )}
          >
            "I can't express how much I love this starter kit! It's been a
            lifesaver for me, simplifying the design process and giving me
            professional-looking layouts without the hassle. Truly a worthwhile
            investment!"
          </h3>
        </div>
        <div>
          <h3
            className={classnames(
              caveat.className,
              "text-[32px] italic font-bold max-[768px]:text-[18px]"
            )}
          >
            "This starter kit is a must-have for anyone starting out in design.
            It's not just user-friendly but also incredibly efficient, cutting
            down the time I spend on layouts. I consider it one of the smartest
            investments I've made."
          </h3>
        </div>
        <div>
          <h3
            className={classnames(
              caveat.className,
              "text-[32px] italic font-bold max-[768px]:text-[18px]"
            )}
          >
            "An absolute gem for beginners! This starter kit has been a
            time-saving marvel for me. I'm amazed at the quality and ease it
            brings to designing layouts. I'd recommend it to anyone—it's a
            fantastic investment!"
          </h3>
        </div>
        <div>
          <h3
            className={classnames(
              caveat.className,
              "text-[32px] italic font-bold max-[768px]:text-[18px]"
            )}
          >
            "I can't thank this starter kit enough for making my design journey
            smoother. It's like having a design assistant that understands my
            needs. Without a doubt, one of the best investments I've made for my
            creative projects!"
          </h3>
        </div>
      </Slider>
    </div>
  );
};

export default Testimonials;
