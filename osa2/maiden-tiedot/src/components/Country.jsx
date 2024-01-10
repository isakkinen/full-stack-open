
export const Country = ({ country }) => {
  return (
    <div id="country">
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital[0]}</p>
      <p>Area: {country.area}</p>
      <br></br>
      <b>Languages:</b>
      <ul>
        {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt}></img>
    </div>
  );
};
