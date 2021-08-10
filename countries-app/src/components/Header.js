import React from "react";
import { animateScroll as scroll } from "react-scroll";

function Header() {
  const changeMode = () => {
    const changeBtn = document.querySelector("#change");
    const head = document.querySelector("#header");
    const form = document.getElementById("form");
    const select = document.getElementById("select");

    changeBtn.addEventListener("click", () => {
      document.body.classList.toggle("light");
      head.classList.toggle("light");
      form.classList.toggle("light");
      select.classList.toggle("light");
    });
  };

  return (
    <div className="Header_parrent" id="header">
      <div className="Header">
        <div className="homeBtn" onClick={() => scroll.scrollToTop()}>
          <h1 className="appName">Where in the world?</h1>
        </div>

        <div className="modes">
          <div>
            <i
              className="fas fa-moon"
              id="change"
              onClick={() => changeMode()}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
