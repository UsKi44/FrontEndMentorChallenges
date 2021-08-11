import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URL = "https://restcountries.eu/rest/v2/all";

function Countries() {
  const [countries, setCountries] = useState([]);
  const countriesData = async () => {
    const response = await fetch(URL);
    const countries = await response.json();
    setCountries(countries);
  };

  useEffect(() => {
    countriesData();
  }, []);

  const removeCountry = (numericCode) => {
    const newCountry = countries.filter(
      (country) => country.numericCode !== numericCode
    );
    setCountries(newCountry);
  };

  return (
    <div className="country_divs" id="countriesDiv">
      {countries.map((country) => {
        const { name, numericCode, population, region, capital, flag } =
          country;
        return (
          <div key={numericCode} className="inner_div">
            <div className="toCenter">
              <div className="toCenterChild">
                <img src={flag} alt={name} />
                <h3 className="countryName">{name}</h3>
                <h4>Population: {population}</h4>
                <h4>Region: {region}</h4>
                <h4>Capital: {capital}</h4>
                <div className="more_options">
                  <div className="toCenter2">
                    <div>
                      <Link to={`/countries/${name}`}>Learn More</Link>
                    </div>
                    <div>
                      <button
                        className="removeCountry"
                        onClick={() => removeCountry(numericCode)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Countries;
