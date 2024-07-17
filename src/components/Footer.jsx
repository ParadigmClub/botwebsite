import React from "react";
import logo from "../mayoorlogo.svg";

function Footer() {
  return (
    <div>
      <footer className="footer footer-center bg-gray-900 text-primary-content pt-5">
        <aside>
          <img src={logo} alt="logo" className="h-20 w-20" />
          <p className="font-bold text-white">
            Mayoor School Noida
            <br />
            Sector 126, Noida, Uttar Pradesh
          </p>
          <p className="text-white">
            Copyright © {new Date().getFullYear()} - All rights reserved | Built
            by{" "}
            <a
              href="https://whirlxd.xyz"
              target="_blank"
              className="text-[#a3ff00]"
            >
              Medhansh Kapoor
            </a>
          </p>
        </aside>
        <nav></nav>
      </footer>
    </div>
  );
}

export default Footer;
