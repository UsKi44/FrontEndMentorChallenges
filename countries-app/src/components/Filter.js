import React, { useEffect, useState } from "react";

function Filter() {
  // let search = document.querySelector("#search");
  // const [input, setInput] = useState("");
  // const [result, setResult] = useState([]);

  // search.addEventListener("input", (e) => {
  //   const { value } = e.target;

  //   setInput(value);
  // });

  // useEffect(() => {
  //   const searchCountry = async () => {
  //     const response = await fetch(
  //       `https://restcountries.eu/rest/v2/name/${input}`
  //     );
  //     const result = await response.json();
  //     setResult(result);
  //   };
  //   console.log(result);
  // }, []);

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
