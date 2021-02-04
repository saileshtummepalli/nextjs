import React, { useState, useEffect } from 'react';
import axios from "axios"
import CountriesList from "components/Layout/Countries/CountriesList";
function Countries() {

    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [filteredCountries, setFilteredCountries] = useState([]);
  
    useEffect(() => {
      setLoading(true);
      axios
        .get("https://restcountries.eu/rest/v2/all")
        .then((res) => {
          setCountries(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  
    useEffect(() => {
      setFilteredCountries(
        countries.filter((country) =>
          country.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }, [search, countries]);
  
    if (loading) {
      return <p>Loading countries...</p>;
    }
  
    return (
      <div className="App">
        <h1>Countries Lists</h1>
       
        <input
          type="text"
          placeholder="Search Countries"
          onChange={(e) => setSearch(e.target.value)}
        />
        {filteredCountries.map((country, idx) => (
          <CountriesList key={idx} {...country} />
        ))}
      </div>
    );
  }
  
export default Countries
