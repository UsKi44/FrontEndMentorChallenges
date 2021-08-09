import React from "react";
import { animateScroll as scroll } from "react-scroll";

function Header() {
  return (
    <div className="Header_parrent">
      <div className="Header">
        <div className="homeBtn" onClick={() => scroll.scrollToTop()}>
          <h1 className="appName">Where in the world?</h1>
        </div>

        <div className="modes">
          <div>
            <i className="fas fa-moon"></i>
            <span className="modeChanger">Dark Mode</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
