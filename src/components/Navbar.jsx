import React, { useState, useEffect } from "react";
import Headroom from "react-headroom";
import Countdown from "react-countdown";

function Navbar() {
  const calculateTimeLeft = () => {
    const targetDate = new Date("August 8, 2023 09:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });
  function brochureDownload() {
    window.open(
      "https://drive.google.com/file/d/1Coq7lmUBd7TzEOVKHzVHRfZJtuYcoEzQ/view?usp=sharing"
    );
  }
  return (
    <Headroom
      style={{
        webkitTransition: "all .5s ease-in-out",
        mozTransition: "all .5s ease-in-out",
        oTransition: "all .5s ease-in-out",
        transition: "all .5s ease-in-out",
      }}
    >
      <div className="py-0 navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="#competitions">COMPETITIONS</a>
              </li>
              <li>
                <a>SOCIALS</a>
                <ul className="p-2">
                  <li>
                    <a href="https://discord.com/invite/Ghcq5h4Dsw" target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="16"
                        height="16"
                        viewBox="0,0,256,256"
                        // style="fill:#000000;"
                      >
                        <g
                          fill="#ffffff"
                          fill-rule="nonzero"
                          stroke="none"
                          stroke-width="1"
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          stroke-miterlimit="10"
                          stroke-dasharray=""
                          stroke-dashoffset="0"
                          font-family="none"
                          font-weight="none"
                          font-size="none"
                          text-anchor="none"
                          // style="mix-blend-mode: normal"
                        >
                          <g transform="scale(5.12,5.12)">
                            <path d="M18.90625,7c0,0 -6.36719,0.4375 -10.53125,3.78125c-0.01953,0.00781 -0.04297,0.01953 -0.0625,0.03125c-0.72266,0.66797 -1.26562,1.70313 -1.9375,3.1875c-0.67187,1.48438 -1.38281,3.39453 -2.03125,5.53125c-1.29297,4.27734 -2.34375,9.52734 -2.34375,14.46875c-0.00391,0.17578 0.03906,0.34766 0.125,0.5c1.46094,2.56641 4.14844,4.11719 6.65625,5.09375c2.50781,0.97656 4.82422,1.36719 6,1.40625c0.33203,0.01172 0.64844,-0.14062 0.84375,-0.40625l2.4375,-3.375c1.96484,0.46484 4.26953,0.78125 6.9375,0.78125c2.66797,0 4.97266,-0.31641 6.9375,-0.78125l2.4375,3.375c0.19531,0.26563 0.51172,0.41797 0.84375,0.40625c1.17578,-0.03906 3.49219,-0.42969 6,-1.40625c2.50781,-0.97656 5.19531,-2.52734 6.65625,-5.09375c0.08594,-0.15234 0.12891,-0.32422 0.125,-0.5c0,-4.94141 -1.05078,-10.19141 -2.34375,-14.46875c-0.64844,-2.13672 -1.35937,-4.04687 -2.03125,-5.53125c-0.67187,-1.48437 -1.21484,-2.51953 -1.9375,-3.1875c-0.01953,-0.01172 -0.04297,-0.02344 -0.0625,-0.03125c-4.16406,-3.34375 -10.53125,-3.78125 -10.53125,-3.78125c-0.07422,-0.00781 -0.14453,-0.00781 -0.21875,0c-0.34766,0.04688 -0.64062,0.27344 -0.78125,0.59375c0,0 -0.33984,0.74609 -0.5625,1.8125c-1.94922,-0.3125 -3.58984,-0.40625 -4.53125,-0.40625c-0.94141,0 -2.58203,0.09375 -4.53125,0.40625c-0.22266,-1.06641 -0.5625,-1.8125 -0.5625,-1.8125c-0.17187,-0.39062 -0.57422,-0.62891 -1,-0.59375zM18.28125,9.15625c0.07422,0.20313 0.125,0.39453 0.1875,0.625c-2.25391,0.52344 -4.72266,1.37891 -7.03125,2.8125c-0.36328,0.15234 -0.60156,0.50391 -0.61328,0.89844c-0.00781,0.39063 0.21484,0.75391 0.56641,0.92578c0.35547,0.16797 0.77734,0.11719 1.07813,-0.13672c4.63281,-2.87109 10.52734,-3.28125 12.53125,-3.28125c2.00391,0 7.89844,0.41016 12.53125,3.28125c0.30078,0.25391 0.72266,0.30469 1.07813,0.13672c0.35156,-0.17187 0.57422,-0.53516 0.56641,-0.92578c-0.01172,-0.39453 -0.25,-0.74609 -0.61328,-0.89844c-2.30859,-1.43359 -4.77734,-2.28906 -7.03125,-2.8125c0.0625,-0.23047 0.11328,-0.42187 0.1875,-0.625c1.14063,0.14063 5.57422,0.73828 8.59375,3.125c0.19531,0.17969 0.875,1.17969 1.5,2.5625c0.625,1.38281 1.28125,3.18359 1.90625,5.25c1.21875,4.03125 2.20313,9.00391 2.25,13.5625c-1.13672,1.83984 -3.26953,3.20703 -5.46875,4.0625c-2,0.77734 -3.86719,1.125 -4.84375,1.21875l-1.6875,-2.28125c0.85938,-0.27734 1.63281,-0.57812 2.3125,-0.875c2.52344,-1.10937 3.875,-2.28125 3.875,-2.28125c0.41406,-0.37109 0.44922,-1.00781 0.07813,-1.42187c-0.37109,-0.41406 -1.00781,-0.44922 -1.42187,-0.07812c0,0 -1.04687,0.95703 -3.34375,1.96875c-0.84375,0.37109 -1.86719,0.73828 -3.03125,1.0625c-0.26953,-0.03125 -0.53906,0.04688 -0.75,0.21875c-1.86328,0.45313 -4.07812,0.75 -6.6875,0.75c-2.62891,0 -4.84766,-0.32422 -6.71875,-0.78125c-0.21094,-0.14062 -0.46875,-0.19922 -0.71875,-0.15625c-1.16797,-0.32422 -2.18359,-0.72266 -3.03125,-1.09375c-2.29687,-1.01172 -3.34375,-1.96875 -3.34375,-1.96875c-0.22656,-0.21094 -0.53906,-0.30078 -0.84375,-0.25c-0.38672,0.05859 -0.70703,0.33594 -0.8125,0.71484c-0.10937,0.375 0.01563,0.78125 0.3125,1.03516c0,0 1.35156,1.17188 3.875,2.28125c0.67969,0.29688 1.45313,0.59766 2.3125,0.875l-1.6875,2.28125c-0.97656,-0.09375 -2.84375,-0.44141 -4.84375,-1.21875c-2.19922,-0.85547 -4.33203,-2.22266 -5.46875,-4.0625c0.04688,-4.55859 1.03125,-9.53125 2.25,-13.5625c0.625,-2.06641 1.28125,-3.86719 1.90625,-5.25c0.625,-1.38281 1.30469,-2.38281 1.5,-2.5625c3.01953,-2.38672 7.45313,-2.98437 8.59375,-3.125zM18.5,21c-2.55078,0 -4.5,2.31641 -4.5,5c0,2.68359 1.94922,5 4.5,5c2.55078,0 4.5,-2.31641 4.5,-5c0,-2.68359 -1.94922,-5 -4.5,-5zM31.5,21c-2.55078,0 -4.5,2.31641 -4.5,5c0,2.68359 1.94922,5 4.5,5c2.55078,0 4.5,-2.31641 4.5,-5c0,-2.68359 -1.94922,-5 -4.5,-5zM18.5,23c1.31641,0 2.5,1.26563 2.5,3c0,1.73438 -1.18359,3 -2.5,3c-1.31641,0 -2.5,-1.26562 -2.5,-3c0,-1.73437 1.18359,-3 2.5,-3zM31.5,23c1.31641,0 2.5,1.26563 2.5,3c0,1.73438 -1.18359,3 -2.5,3c-1.31641,0 -2.5,-1.26562 -2.5,-3c0,-1.73437 1.18359,-3 2.5,-3z"></path>
                          </g>
                        </g>
                      </svg>
                      Discord
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/botmayoor/"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="16"
                        height="16"
                        viewBox="0,0,256,256"
                        // style="fill:#000000;"
                      >
                        <g
                          fill="#ffffff"
                          fill-rule="nonzero"
                          stroke="none"
                          stroke-width="1"
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          stroke-miterlimit="10"
                          stroke-dasharray=""
                          stroke-dashoffset="0"
                          font-family="none"
                          font-weight="none"
                          font-size="none"
                          text-anchor="none"
                          // style="mix-blend-mode: normal"
                        >
                          <g transform="scale(5.12,5.12)">
                            <path d="M16,3c-7.16752,0 -13,5.83248 -13,13v18c0,7.16752 5.83248,13 13,13h18c7.16752,0 13,-5.83248 13,-13v-18c0,-7.16752 -5.83248,-13 -13,-13zM16,5h18c6.08648,0 11,4.91352 11,11v18c0,6.08648 -4.91352,11 -11,11h-18c-6.08648,0 -11,-4.91352 -11,-11v-18c0,-6.08648 4.91352,-11 11,-11zM37,11c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM25,14c-6.06329,0 -11,4.93671 -11,11c0,6.06329 4.93671,11 11,11c6.06329,0 11,-4.93671 11,-11c0,-6.06329 -4.93671,-11 -11,-11zM25,16c4.98241,0 9,4.01759 9,9c0,4.98241 -4.01759,9 -9,9c-4.98241,0 -9,-4.01759 -9,-9c0,-4.98241 4.01759,-9 9,-9z"></path>
                          </g>
                        </g>
                      </svg>
                      Instagram
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <button onClick={brochureDownload}>BROCHURE</button>
              </li>
            </ul>
          </div>
          <a href="/" className="text-xl btn btn-ghost">
            BOT2K24
          </a>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">
            <li>
              <a href="#competitions">COMPETITIONS</a>
            </li>

            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <details>
                <summary>SOCIALS</summary>
                <ul className="p-2">
                  <li>
                    <a href="https://discord.com/invite/Ghcq5h4Dsw" target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="24"
                        height="24"
                        viewBox="0,0,256,256"
                        // style="fill:#000000;"
                      >
                        {" "}
                        <g
                          fill="#ffffff"
                          fill-rule="nonzero"
                          stroke="none"
                          stroke-width="1"
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          stroke-miterlimit="10"
                          stroke-dasharray=""
                          stroke-dashoffset="0"
                          font-family="none"
                          font-weight="none"
                          font-size="none"
                          text-anchor="none"
                          // style="mix-blend-mode: normal"
                        >
                          <g transform="scale(5.12,5.12)">
                            <path d="M18.90625,7c0,0 -6.36719,0.4375 -10.53125,3.78125c-0.01953,0.00781 -0.04297,0.01953 -0.0625,0.03125c-0.72266,0.66797 -1.26562,1.70313 -1.9375,3.1875c-0.67187,1.48438 -1.38281,3.39453 -2.03125,5.53125c-1.29297,4.27734 -2.34375,9.52734 -2.34375,14.46875c-0.00391,0.17578 0.03906,0.34766 0.125,0.5c1.46094,2.56641 4.14844,4.11719 6.65625,5.09375c2.50781,0.97656 4.82422,1.36719 6,1.40625c0.33203,0.01172 0.64844,-0.14062 0.84375,-0.40625l2.4375,-3.375c1.96484,0.46484 4.26953,0.78125 6.9375,0.78125c2.66797,0 4.97266,-0.31641 6.9375,-0.78125l2.4375,3.375c0.19531,0.26563 0.51172,0.41797 0.84375,0.40625c1.17578,-0.03906 3.49219,-0.42969 6,-1.40625c2.50781,-0.97656 5.19531,-2.52734 6.65625,-5.09375c0.08594,-0.15234 0.12891,-0.32422 0.125,-0.5c0,-4.94141 -1.05078,-10.19141 -2.34375,-14.46875c-0.64844,-2.13672 -1.35937,-4.04687 -2.03125,-5.53125c-0.67187,-1.48437 -1.21484,-2.51953 -1.9375,-3.1875c-0.01953,-0.01172 -0.04297,-0.02344 -0.0625,-0.03125c-4.16406,-3.34375 -10.53125,-3.78125 -10.53125,-3.78125c-0.07422,-0.00781 -0.14453,-0.00781 -0.21875,0c-0.34766,0.04688 -0.64062,0.27344 -0.78125,0.59375c0,0 -0.33984,0.74609 -0.5625,1.8125c-1.94922,-0.3125 -3.58984,-0.40625 -4.53125,-0.40625c-0.94141,0 -2.58203,0.09375 -4.53125,0.40625c-0.22266,-1.06641 -0.5625,-1.8125 -0.5625,-1.8125c-0.17187,-0.39062 -0.57422,-0.62891 -1,-0.59375zM18.28125,9.15625c0.07422,0.20313 0.125,0.39453 0.1875,0.625c-2.25391,0.52344 -4.72266,1.37891 -7.03125,2.8125c-0.36328,0.15234 -0.60156,0.50391 -0.61328,0.89844c-0.00781,0.39063 0.21484,0.75391 0.56641,0.92578c0.35547,0.16797 0.77734,0.11719 1.07813,-0.13672c4.63281,-2.87109 10.52734,-3.28125 12.53125,-3.28125c2.00391,0 7.89844,0.41016 12.53125,3.28125c0.30078,0.25391 0.72266,0.30469 1.07813,0.13672c0.35156,-0.17187 0.57422,-0.53516 0.56641,-0.92578c-0.01172,-0.39453 -0.25,-0.74609 -0.61328,-0.89844c-2.30859,-1.43359 -4.77734,-2.28906 -7.03125,-2.8125c0.0625,-0.23047 0.11328,-0.42187 0.1875,-0.625c1.14063,0.14063 5.57422,0.73828 8.59375,3.125c0.19531,0.17969 0.875,1.17969 1.5,2.5625c0.625,1.38281 1.28125,3.18359 1.90625,5.25c1.21875,4.03125 2.20313,9.00391 2.25,13.5625c-1.13672,1.83984 -3.26953,3.20703 -5.46875,4.0625c-2,0.77734 -3.86719,1.125 -4.84375,1.21875l-1.6875,-2.28125c0.85938,-0.27734 1.63281,-0.57812 2.3125,-0.875c2.52344,-1.10937 3.875,-2.28125 3.875,-2.28125c0.41406,-0.37109 0.44922,-1.00781 0.07813,-1.42187c-0.37109,-0.41406 -1.00781,-0.44922 -1.42187,-0.07812c0,0 -1.04687,0.95703 -3.34375,1.96875c-0.84375,0.37109 -1.86719,0.73828 -3.03125,1.0625c-0.26953,-0.03125 -0.53906,0.04688 -0.75,0.21875c-1.86328,0.45313 -4.07812,0.75 -6.6875,0.75c-2.62891,0 -4.84766,-0.32422 -6.71875,-0.78125c-0.21094,-0.14062 -0.46875,-0.19922 -0.71875,-0.15625c-1.16797,-0.32422 -2.18359,-0.72266 -3.03125,-1.09375c-2.29687,-1.01172 -3.34375,-1.96875 -3.34375,-1.96875c-0.22656,-0.21094 -0.53906,-0.30078 -0.84375,-0.25c-0.38672,0.05859 -0.70703,0.33594 -0.8125,0.71484c-0.10937,0.375 0.01563,0.78125 0.3125,1.03516c0,0 1.35156,1.17188 3.875,2.28125c0.67969,0.29688 1.45313,0.59766 2.3125,0.875l-1.6875,2.28125c-0.97656,-0.09375 -2.84375,-0.44141 -4.84375,-1.21875c-2.19922,-0.85547 -4.33203,-2.22266 -5.46875,-4.0625c0.04688,-4.55859 1.03125,-9.53125 2.25,-13.5625c0.625,-2.06641 1.28125,-3.86719 1.90625,-5.25c0.625,-1.38281 1.30469,-2.38281 1.5,-2.5625c3.01953,-2.38672 7.45313,-2.98437 8.59375,-3.125zM18.5,21c-2.55078,0 -4.5,2.31641 -4.5,5c0,2.68359 1.94922,5 4.5,5c2.55078,0 4.5,-2.31641 4.5,-5c0,-2.68359 -1.94922,-5 -4.5,-5zM31.5,21c-2.55078,0 -4.5,2.31641 -4.5,5c0,2.68359 1.94922,5 4.5,5c2.55078,0 4.5,-2.31641 4.5,-5c0,-2.68359 -1.94922,-5 -4.5,-5zM18.5,23c1.31641,0 2.5,1.26563 2.5,3c0,1.73438 -1.18359,3 -2.5,3c-1.31641,0 -2.5,-1.26562 -2.5,-3c0,-1.73437 1.18359,-3 2.5,-3zM31.5,23c1.31641,0 2.5,1.26563 2.5,3c0,1.73438 -1.18359,3 -2.5,3c-1.31641,0 -2.5,-1.26562 -2.5,-3c0,-1.73437 1.18359,-3 2.5,-3z"></path>
                          </g>
                        </g>{" "}
                      </svg>{" "}
                      Discord
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/botmayoor/"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="24"
                        height="24"
                        viewBox="0,0,256,256"
                        // style="fill:#000000;"
                      >
                        <g
                          fill="#ffffff"
                          fill-rule="nonzero"
                          stroke="none"
                          stroke-width="1"
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          stroke-miterlimit="10"
                          stroke-dasharray=""
                          stroke-dashoffset="0"
                          font-family="none"
                          font-weight="none"
                          font-size="none"
                          text-anchor="none"
                          // style="mix-blend-mode: normal"
                        >
                          <g transform="scale(5.12,5.12)">
                            <path d="M16,3c-7.16752,0 -13,5.83248 -13,13v18c0,7.16752 5.83248,13 13,13h18c7.16752,0 13,-5.83248 13,-13v-18c0,-7.16752 -5.83248,-13 -13,-13zM16,5h18c6.08648,0 11,4.91352 11,11v18c0,6.08648 -4.91352,11 -11,11h-18c-6.08648,0 -11,-4.91352 -11,-11v-18c0,-6.08648 4.91352,-11 11,-11zM37,11c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM25,14c-6.06329,0 -11,4.93671 -11,11c0,6.06329 4.93671,11 11,11c6.06329,0 11,-4.93671 11,-11c0,-6.06329 -4.93671,-11 -11,-11zM25,16c4.98241,0 9,4.01759 9,9c0,4.98241 -4.01759,9 -9,9c-4.98241,0 -9,-4.01759 -9,-9c0,-4.98241 4.01759,-9 9,-9z"></path>
                          </g>
                        </g>
                      </svg>
                      Instagram
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <button onClick={brochureDownload}>BROCHURE</button>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Countdown
            date={new Date(1723088150 * 1000)}
            renderer={({ days, hours }) => (
              <>
                <div
                  className="text[#A3FF00]"
                  style={{
                    textAlign: "center",
                    color: "#A3FF00",
                  }}
                >
                  {days}D & {hours}H to go
                </div>
                <br></br>
              </>
            )}
          />
          {""}
        </div>
      </div>
    </Headroom>
  );
}

export default Navbar;
