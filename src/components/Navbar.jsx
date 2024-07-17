import React from "react";
import Headroom from "react-headroom";

function Navbar() {
  return (
    <Headroom
      style={{
        webkitTransition: "all .5s ease-in-out",
        mozTransition: "all .5s ease-in-out",
        oTransition: "all .5s ease-in-out",
        transition: "all .5s ease-in-out",
      }}
    >
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
                    <a href="https://discord.gg/RC3wxVetdk" target="_blank">
                      Discord
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/botmayoor/"
                      target="_blank"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>
          <a href="/" className="btn btn-ghost text-xl">
            BOT2K24
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
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
                    <a href="https://discord.gg/RC3wxVetdk" target="_blank">
                      Discord
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/botmayoor/"
                      target="_blank"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfoIp-3erOri72MpCI5F-jYFvS9XLNLS-De2aWW3ywQeBk65Q/viewform"
            className="btn btn-outline btn-primary"
            target="_blank"
          >
            REGISTER
          </a>
        </div>
      </div>
    </Headroom>
  );
}

export default Navbar;
