import React from "react";

function Filter() {
  return (
    <div className="search_bar" id="searchBar">
      <div>
        <form className="fm-control">
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
