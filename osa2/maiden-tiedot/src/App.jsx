import { useState, useEffect } from 'react'
import axios from 'axios'
import { Countries } from './components/Countries'

function App() {
  const [country, setCountry] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get("https://studies.cs.helsinki.fi/restcountries/api/all/").then(response => {
      setCountries(response.data);
    })
  }, [])

  const filteredCountries = countries.filter(country2 => country2.name.common.toLowerCase().includes(country.toLowerCase()))
  return (
    <div>
      find countries <input value={country} onChange={(event) => setCountry(event.target.value)}></input>
      <Countries countries={filteredCountries}/>
    </div>
  )
}

export default App
