import { useState, useEffect } from "react";
import "../styles/Countries.css";

const countriesUrl = "https://restcountries.eu/rest/v2/all";
const covidUrl = "https://covid-api.mmediagroup.fr/v1/cases";
const zoo = {
  lion: "1",
  panda: "2",
};

function Countries() {
  const [countries, setCountries] = useState([]);
  const [covidInfo, setCovidInfo] = useState([]);

  const getCountries = async () => {
    const response = await fetch(countriesUrl);
    const countries = await response.json();
    setCountries(countries);
  };

  const covidData = async () => {
    const response = await fetch(covidUrl);
    const data = await response.json();
    setCovidInfo(data);
    console.log(covidInfo);
  };

  useEffect(() => {
    getCountries();
    console.log(countries);
    covidData();
  }, []);

  return (
    <div className="Countries">
      <div className="country_divs" id="countriesDiv">
        {countries.map((country) => {
          const { name, numericCode, population, flag } = country;
          return (
            <div key={numericCode} className="country_div">
              <img src={flag} alt={name} />
              <h4 className="countryName">Country Name: {name}</h4>
              <h4>population: {population}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Countries;
