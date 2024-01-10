import { Country } from './Country';

export const Countries = ({ countries, handleSelectCountry }) => {
  if (countries.length > 10) {
    return (
      <div>Too many matches, specify another filter</div>
    );
  }

  if (countries.length === 1) {
    const country = countries[0];
    return (<div><Country country={country} /></div>);
  }

  return (
    <div id="countries">
      {countries.map(country => (
        <div key={country.name.common}>{country.name.common} 
          <button onClick={() => handleSelectCountry(country.name.common)}>show</button>
        </div>)
      )}
    </div>
  );
};
