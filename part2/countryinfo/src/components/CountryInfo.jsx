const CountryInfo = (data) => {
  return (
    <>
      <h1>{data.name}</h1>
      <p>Capital: {data.capital}</p>
      <p>Area: {data.area}</p>
      <h2>Languages:</h2>
      <ul>
        {data.languages.map((languagePrefix) => {
          let language = data.languages[languagePrefix];
          return <li key={languagePrefix}>{language}</li>;
        })}
      </ul>
      <img src={data.flag} />
    </>
  );
};

export default CountryInfo;
