import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { AiOutlineClockCircle } from "react-icons/ai";

import { BsPhone } from "react-icons/bs";
import { Link as LinkScroll } from "react-scroll";

import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className="overflow-visible header" style={{ zIndex: "3" }}>
      <div className="flex navUp">
        <BsPhone className="text-orange-300 " />
        <p className="ml-2 text-sm text-white" style={{ marginTop: "-3px" }}>
          042-011-1234
        </p>
        <AiOutlineClockCircle className="ml-10 text-orange-300" />
        <p className="ml-2 text-sm text-white" style={{ marginTop: "-3px" }}>
          Mon-Sat: 11AM - 23PM
        </p>
      </div>
      <div className="navDiv">
        <nav className="navbar">
          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={30} style={{ color: "#ffffff" }} />
            ) : (
              <FaBars size={30} style={{ color: "#ffffff" }} />
            )}
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <p className="mt-3 mr-10 text-xl text-white">MOON'STAURANT</p>
            </li>
            <li className="nav-item">
              <LinkScroll
                to="hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                Home
              </LinkScroll>
            </li>
            <li className="nav-item">
              <LinkScroll
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                About
              </LinkScroll>
            </li>
            <li className="nav-item">
              <LinkScroll
                to="menu"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                Menu
              </LinkScroll>
            </li>
            <li className="nav-item">
              <LinkScroll
                to="specials"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                Specials
              </LinkScroll>
            </li>
            <li className="nav-item">
              <LinkScroll
                to="chefs"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                Chefs
              </LinkScroll>
            </li>
            <li className="nav-item">
              <LinkScroll
                to="contect"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                Contect
              </LinkScroll>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

window.addEventListener("scroll", () => {
  const test = document.querySelector(".navDiv");
  if (window.scrollY > 100) {
    test.style.backgroundColor = "rgba(0, 0, 0, .8)";
  } else {
    test.style.backgroundColor = "rgba(0, 0, 0, .2)";
  }
});

window.addEventListener("scroll", () => {
  const navMove = document.querySelector(".header");
  if (window.scrollY > 100) {
    navMove.style.marginTop = "-40px";
  } else {
    navMove.style.marginTop = "0";
  }
});

export default Navbar;
