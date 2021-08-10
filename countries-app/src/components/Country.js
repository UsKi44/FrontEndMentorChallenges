import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Country() {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  const exactCountry = `https://restcountries.eu/rest/v2/name/${name}`;

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(exactCountry);
      const country = await response.json();
      setCountry(country);
    };

    fetchCountryData();
  }, [exactCountry]);

  return (
    <div className="Country">
      <Link to="/">
        <button className="go_back">
          <i className="fas fa-long-arrow-alt-left"></i>
          Back
        </button>
      </Link>

      <div className="info_content">
        {country.map((info) => {
          const {
            name,
            flag,
            nativeName,
            population,
            region,
            subregion,
            capital,
            borders,
            numericCode,
            topLevelDomain,
            currencies,
            languages,
          } = info;

          return (
            <div className="info" key={numericCode}>
              <div className="img_div">
                <img src={flag} alt={name} />
              </div>
              <div className="other_info">
                <h1>{name}</h1>
                <div className="other_info_child">
                  <div className="first_info">
                    <h3>Native Name: {nativeName} </h3>
                    <h3>Population: {population}</h3>
                    <h3>Region: {region}</h3>
                    <h3>Sub Region: {subregion}</h3>
                    <h3>Capital: {capital}</h3>
                  </div>
                  <div className="second_info">
                    <h3>Top Level Domain: {topLevelDomain}</h3>
                    <h3>Currencies: {currencies[0].name}</h3>
                    <h3>Languages: {languages[0].name}</h3>
                  </div>
                </div>
                <div className="borders">
                  <h3>Border Countries: </h3>
                  <div className="border">
                    {borders.map((border) => {
                      return (
                        <ul key={border}>
                          <li>{border}</li>
                        </ul>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Country;
