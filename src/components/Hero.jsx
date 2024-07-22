import React from "react";
import AnimationOnScroll from "react-animate-on-scroll";
import Typewriter from "typewriter-effect";
import Logo from "../logo.jpg";
import NoBg from "../public/botlogbg.png";
import newLogo from "../public/botnewlogo.webp";
import yLogo from "../public/botnewlogoyellow.webp";
function Hero() {
  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="text-center align-center">
        <AnimationOnScroll animateIn="fadeInDownBig" animateOnce={true}>
          <div className="avatar">
            {/* <div className="w-48 mask mask-circle">
              <img src={Logo} alt="my image" />
            </div> */}
            <div className="w-60">
              <img
                src={newLogo}
                alt="my image"
                className="mask mask-circle"
                loading="lazy"
              />
            </div>
          </div>
        </AnimationOnScroll>
        <div className="text-center hero-content">
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

            <div className="grid-cols-2 grid-rows-1 gap-6 rid">
              <AnimationOnScroll animateIn="fadeInRightBig" animateOnce={true}>
                <a
                  href="#competitions"
                  className="mb-2 btn btn-outline btn-warning btn-wide "
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
                  className="mt-2 btn btn-outline btn-info btn-wide"
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
