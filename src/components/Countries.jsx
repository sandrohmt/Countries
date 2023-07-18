import { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'

import Country from './Country'
import './Countries.css'

function Countries() {
  const [countries, setCountries] = useState([])
  const [regions, setRegions] = useState([])
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [itensPerPage, setItensPerPage] = useState(8)

  const pages = Math.ceil(countries.length / itensPerPage)
  const startIndex = currentPage *  itensPerPage
  const endIndex = startIndex *  itensPerPage
  


  async function getDataCountries() {
    const resp = await fetch('https://restcountries.com/v3.1/all')
    const data = await resp.json() 
    const regionNames = [...new Set (data.map((item => item.region)))]
    setRegions(regionNames)
    const infoCountry = data.map((country, index) => {

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
        languages: country.languages,
      }

    })
    setCountries(infoCountry)  
  }

  useEffect(() => {
    getDataCountries()
  }, [])
  

  let filteredCountries = countries.filter((country) => {
    const lowerCaseSearch = search.toLowerCase()
    const lowerCaseName = country.name.toLowerCase()

    const matchesFilter = filter === '' || country.region.includes(filter)
    const matchesSearch = lowerCaseName.includes(lowerCaseSearch)
    

    return matchesFilter && matchesSearch
  })

   filteredCountries = filteredCountries.slice(startIndex, endIndex)


  return (
    <div className='container'>
      <div className='filters'>
        <div className='search'>
          <FaSearch className='search-icon'/>
          <input 
          onChange={(event) => setSearch(event.target.value)}
          placeholder='Search for a country' border={'none'} 
          type="search"
          value={search} />
        </div>
        

        <select
        onChange={(event) => setFilter(event.target.value)}
        value={filter}
        defaultValue={""}>
          <option value="">
            Filter by Region
          </option>
        {regions.map((country, index) => (
          <option key={index} value={country}> 
          {country}
          </option>
        ))}
      </select>
    </div>

    <div className='main'>
      <ul className='countries'>
      {filteredCountries.length > 0
      ? filteredCountries.map((country) => (<Country key={country.id} country={country} />))
      : <span className='no-country'>No country found!</span>}
      </ul>
    </div>

    <div className="footer">
        {Array.from(Array(pages), (item, index) => {
          return <button>{filteredCountries}</button>
        })}
    </div>
  </div>
  )
}

export default Countries


// fazer paginação
// descobrir como vou fazer o border countries