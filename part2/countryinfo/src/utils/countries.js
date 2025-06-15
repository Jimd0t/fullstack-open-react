import axios from "axios";

const COUNTRY_API_BASE_URL = "https://studies.cs.helsinki.fi/restcountries/api";
const ALL_COUNTRY_INFO_EP = "/all";
const SPECIFIC_COUNTRY_INFO_EP = "/name/";

const getAllCountries = () => {
  axios.get(COUNTRY_API_BASE_URL + ALL_COUNTRY_INFO_EP).then((response) => {
    return transformData(response.data);
  });
};

const getCountryInfo = (countryName) => {
  axios
    .get(COUNTRY_API_BASE_URL + SPECIFIC_COUNTRY_INFO_EP + countryName)
    .then((response) => {
      return transformData(response.data);
    });
};

const transformData = (data) => {
  let formattedData = {
    countryList: [],
    countryInfo: [],
  };

  Object.keys(data).forEach((key) => {
    console.log("Start");

    console.log(data);

    let countryInfo = data[key];
    console.log(countryInfo);

    formattedData.countryList.push(countryInfo.name.common);
    let countryName = countryInfo.name.common;
    let importantData = {
      name: countryInfo.name.common,
      capital: countryInfo.capital,
      area: countryInfo.area,
      languages: countryInfo.languages,
      flag: countryInfo.flags.png,
    };

    formattedData.countryInfo[countryName] = importantData;
  });

  return transformedData;
};

export { getAllCountries, getCountryInfo };
