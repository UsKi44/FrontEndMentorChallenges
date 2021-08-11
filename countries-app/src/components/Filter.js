import React, { useEffect } from "react";

function Filter() {
  useEffect(() => {
    const searchCountry = document.getElementById("search");
    searchCountry.addEventListener("input", (e) => {
      const { value } = e.target;
      const countryName = document.querySelectorAll(".countryName");

      countryName.forEach((name) => {
        console.log(name.innerText);
        if (name.innerText.toLowerCase().includes(value.toLowerCase())) {
          name.parentElement.parentElement.parentElement.style.display =
            "block";
        } else {
          name.parentElement.parentElement.parentElement.style.display = "none";
        }
      });
    });
  }, []);

  return (
    <div className="search_bar" id="searchBar">
      <div className="search_by_name">
        <form className="fm-control" id="form">
          <i id="search_icon" className="fas fa-search"></i>
          <input
            type="search"
            name="search"
            id="search"
            className="searchCountry"
            placeholder="Search for a country..."
          />
        </form>
      </div>
      <div className="select_continent">
        <select name="select" id="select" className="select">
          <option value="Filter by Region">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
