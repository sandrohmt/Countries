import { useState, useEffect } from 'react'
import './Countries.css'
import { FaMoon, FaRegMoon, FaSearch } from 'react-icons/fa'
import DataCountries from './DataCountries'
import Country from './Country'

function Countries() {
  const [countries, setCountries] = useState([])
  const [regions, setRegions] = useState([])


  async function getDataCountries() {
    const resp = await fetch('https://restcountries.com/v3.1/all')
    const data = await resp.json() 
    const regionNames = [...new Set (data.map((item => item.region)))]
    setRegions(regionNames)
    const infoCountry = data.map((country, index) => {

      // const nativeName = country.name.nativeName ? Object.values(country.name.nativeName)[0].common : []
      // console.log(nativeName)

      return {
        id: index,
        flag: country.flags.png,
        name: country.name.common, 
        population: country.population,
        capital: country.capital,
        region: country.region, 
        nativeName: country.name.nativeName,
        subRegion: country.subregion,
        tld: country.tld,
        currencies: country.currencies,
        languages: country.languages
      }

    })
    setCountries(infoCountry)
  }

  console.log(countries)


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
      <ul>
      {countries.map((country) => (
          <Country key={country.id} country={country} />
          ))}
      </ul>
    </div>

  </div>
  )
}

export default Countries

// componentizar meu projeto 
// descobrir como vou fazer o border countries
// estilizar as paginas
// dark/light mode