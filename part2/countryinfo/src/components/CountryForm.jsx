const CountryForm = ({ countryName, handleChange }) => {
  return (
    <>
      <p>
        find countries
        <input type="text" value={countryName} onChange={handleChange}></input>
      </p>
    </>
  );
};

export default CountryForm;
