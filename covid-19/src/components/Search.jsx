import React, { useEffect } from "react";
import "../styles/Search.css";

function Search() {
  useEffect(() => {
    const searchCountry = document.getElementById("search");
    searchCountry.addEventListener("input", (e) => {
      const { value } = e.target;
      const countryName = document.querySelectorAll(".countryName");

      countryName.forEach((name) => {
        console.log(name.innerText);
        if (name.innerText.toLowerCase().includes(value.toLowerCase())) {
          name.parentElement.style.display = "block";
        } else {
          name.parentElement.style.display = "none";
        }
      });
    });
  }, []);

  return (
    <div className="Search">
      <div className="search_cont">
        <input type="search" placeholder="Search country" id="search" />
      </div>
    </div>
  );
}

export default Search;
