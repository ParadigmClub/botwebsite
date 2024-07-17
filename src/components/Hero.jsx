import React from "react";
import AnimationOnScroll from "react-animate-on-scroll";
import Typewriter from "typewriter-effect";
import Logo from "../logo.jpg";

function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="align-center text-center">
        <AnimationOnScroll animateIn="fadeInDownBig" animateOnce={true}>
          <div className="avatar">
            <div className="w-48 mask mask-circle">
              <img src={Logo} alt="my image" />
            </div>
          </div>
        </AnimationOnScroll>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <AnimationOnScroll animateIn="fadeInUp" animateOnce={true}>
              <h1 className="text-5xl text-[#a3ff00] font-bold">
                Battle Of Titans 2K24
              </h1>
            </AnimationOnScroll>

            <p className="py-6 text-pretty">
              <Typewriter
                options={{
                  cursor: "",
                }}
                onInit={(typewriter) => {
                  typewriter

                    .changeDelay(16)
                    .typeString(
                      "A Technical Fest Organized By Mayoor School Noida Celebrating Innovation And Creativity"
                    )

                    .start();
                }}
              />
            </p>

            <div className="rid grid-cols-2 grid-rows-1 gap-6">
              <AnimationOnScroll animateIn="fadeInRightBig" animateOnce={true}>
                <a
                  href="#competitions"
                  className="btn btn-outline btn-warning btn-wide mb-2 "
                >
                  Events
                </a>
              </AnimationOnScroll>
              <AnimationOnScroll
                animateIn="fadeInLeftBig"
                animateOnce={true}
                offset={100}
              >
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfoIp-3erOri72MpCI5F-jYFvS9XLNLS-De2aWW3ywQeBk65Q/viewform"
                  className="btn btn-outline btn-info btn-wide mt-2"
                  target="_blank"
                >
                  Registration
                </a>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
