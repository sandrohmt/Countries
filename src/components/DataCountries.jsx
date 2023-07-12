import { useLocation } from "react-router-dom"


function DataCountries () {



  const infoCountry = useLocation()
  const flag = infoCountry.state.country.flag
  const name = infoCountry.state.country.name
  const nativeName = infoCountry.state.country.nativeName
  const population = infoCountry.state.country.population
  const region = infoCountry.state.country.region
  const subRegion = infoCountry.state.country.subRegion
  const capital = infoCountry.state.country.capital
  const tld = infoCountry.state.country.tld
  const currencies = infoCountry.state.country.currencies
  const languages = infoCountry.state.country.languages


  
  return (
    <div>
      <img src={flag} alt="" />
      <h1>{name}</h1>
      <div>
      <h1>Native Name:</h1>
      {Object.entries(nativeName).map(([key, value]) => (
        <span key={key}>{key} - {value.common} </span>
      ))}
      </div>
      <h1>Population: {population}</h1>
      <h1>Region: {region}</h1>
      <h1>Sub Region: {subRegion}</h1>
      <h1>Capital: {capital}</h1>
      <h1>Top Level Domain{tld}</h1>
      <div>
      <h1>Currencies:</h1>
      {Object.entries(currencies).map(([key, value]) => (
        <span key={key}>{value.name} ({value.symbol}) </span>
      ))}
      </div>
      <div>
      <h1>Languages:</h1>
      {Object.entries(languages).map(([key, value]) => (
          <span key={key}>{value} </span>
        ))}
      </div>
    </div>
  )
}



export default DataCountries