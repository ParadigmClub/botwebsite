import React, { useState, useEffect } from "react";
import AnimationOnScroll from "react-animate-on-scroll";
import { Suspense, lazy } from "react";
import Typewriter from "typewriter-effect";

import yLogo from "../public/botnewlogoyellow.webp";
const Loader = lazy(() => import("./Loader"));
function Hero() {
  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="text-center align-center">
        <Suspense fallback={<Loader />}>
          <AnimationOnScroll animateIn="fadeInDownBig" animateOnce={true}>
            <div className="avatar">
              <div className="w-60">
                <img
                  src={yLogo}
                  alt="my image"
                  className="mask mask-circle"
                  // loading="lazy"
                />
              </div>
            </div>
          </AnimationOnScroll>
        </Suspense>

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

                    .changeDelay(10)
                    .typeString(
                      `A Tech Fest Organized By Mayoor School,Noida Celebrating Innovation And Creativity`
                    )

                    .start();
                }}
              />
            </p>

            <div className="grid-cols-2 grid-rows-1 gap-6 rid">
              <AnimationOnScroll
                animateIn="fadeInRightBig"
                animateOnce={true}
                offset={0}
              >
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
                offset={50}
              >
                <a
                  href="/results"
                  className="mt-2 btn btn-outline btn-info btn-wide"
                  target="_blank"
                >
                  Result(s)
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
