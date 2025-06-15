// --- REACT LIBRARIES ---
import { useState } from "react";
import { useEffect } from "react";

// --- EXTERNAL LIBRARIES
import axios from "axios";

// --- COMPONENTS ---
import CountryForm from "./components/CountryForm";

// --- UTILITIES ---
import { getAllCountries, getCountryInfo } from "./utils/countries";

function App() {
  const [countryName, setCountryName] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountryInfo("finland").then((data) => {
      console.log(data);

      setCountries(data);
    });
  }, []);

  const handleCountrySearch = (e) => {
    setCountryName(e.target.value);
  };

  return (
    <>
      <CountryForm
        countryName={countryName}
        handleChange={handleCountrySearch}
      ></CountryForm>
    </>
  );
}

export default App;
