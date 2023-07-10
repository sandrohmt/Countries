import { useState, useEffect } from 'react'
import './Country.css'
import { FaMoon, FaRegMoon, FaSearch } from 'react-icons/fa'

function Country() {
  const [countries, setCountries] = useState([])
  const [regions, setRegions] = useState([])


  URL = 'https://restcountries.com/v3.1/all'

  async function getDataCountries() {
    const resp = await fetch(URL)
    const data = await resp.json() 
    const regionNames = [...new Set (data.map((item => item.region)))]
    setRegions(regionNames)
    const infoCountry = data.map((country, index) => ({
      id: index,
      flags: country.flags.png,
      name: country.name.common, 
      population: country.population,
      capital: country.capital,
      region: country.region, 
      nativeName: country.name.nativeName,
      subRegion: country.subregion,
      tld: country.tld,
      currencies: country.currencies,
      languages: country.languages

    }))
    console.log(infoCountry)
    setCountries(infoCountry)
  }


  useEffect(() => {
    getDataCountries()
  }, [])


  return (
    <div className='container'>
      <div className='header'>
        <h1>Where in the world?</h1>
        <button> <FaMoon /> dark mode</button>
        <button><FaRegMoon/> light mode</button>
      </div>

      <div className='search'>
        <FaSearch/>
        <input placeholder='Search for a country' border={'none'} type="search" />
      </div>

      <select defaultValue={""}>
        <option disabled  value="">
          Filter by Region
        </option>
      {regions.map((country, index) => (
        <option key={index} value={country}> 
        {country}
         </option>
      ))}
    </select>

    <div className='main'>
      {countries.map((country) => {
        return (
          <div key={country.id}>
            <img src={country.flags} alt="" />
            <h1> {country.name} </h1>
            <h1> Population: {country.population} </h1>
            <h1> Region: {country.region} </h1>
            <h1> Capital: {country.capital} </h1>
            
          </div>
        )
    })}
    </div>

  </div>
  )
}

export default Country

// componentizar meu projeto
// arrumar o react router dom
// estilizar as paginas
// dark/light mode