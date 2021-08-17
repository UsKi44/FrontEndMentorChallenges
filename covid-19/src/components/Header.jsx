import React from "react";
import "../styles/Header.css";
import { animateScroll as scroll } from "react-scroll";
import LogoImg from "../img/MainArtboard.svg";

function Header() {
  return (
    <div className="Header_parrent">
      <div className="Header">
        <img src={LogoImg} alt="logo" onClick={() => scroll.scrollToTop} />
        <button className="hamburger">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </div>
  );
}

export default Header;
