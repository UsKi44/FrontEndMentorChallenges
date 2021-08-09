import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URL = "https://restcountries.eu/rest/v2/all";

function Countries() {
  const [countries, setCountries] = useState([]);
  const countryData = async () => {
    const response = await fetch(URL);
    const countries = await response.json();
    setCountries(countries);
  };

  useEffect(() => {
    countryData();
  }, []);

  return (
    <div className="country_divs">
      {countries.map((country) => {
        const { name, numericCode, population, region, capital, flag } =
          country;
        return (
          <div key={numericCode} className="inner_div">
            <Link to={`/countries/${name}`} className="country_link">
              <div>
                <img src={flag} alt={name} />
                <h3>{name}</h3>
                <h4>Population: {population}</h4>
                <h4>Region: {region}</h4>
                <h4>Capital: {capital}</h4>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Countries;
