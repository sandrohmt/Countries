import { Link, useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"
import { FaMoon, FaRegMoon, FaSearch } from 'react-icons/fa'

import './DataCountries.css'



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
    <div className="container">

      <Link to={"/"}>
        <button className="button back">
        <FaArrowLeft className="back-icon"/> Back 
        </button>
      </Link>

      <div className="main">

      <div className="country-img">
        <img width={480} height={240} src={flag} alt="" />
      </div>
       
      <div className="country-info">
        <h1 className="country-name">{name}</h1>
          
          <div className="paragraph">
              <span className="title">Native Name: </span>
              {Object.entries(nativeName).map(([key, value]) => (
                <span className="info" key={key}>{key} - {value.common} </span>
              ))}
            </div>

            <div className="paragraph"> 
              <span className="title">Population:</span> 
              <span className="info"> {population} </span>
            </div>

            <div className="paragraph">
              <span className="title" >Region: </span>
              <span className="info"> {region} </span>
            </div>

            <div className="paragraph">
              <span className="title"> Sub Region: </span>
              <span className="info"> {subRegion} </span>
            </div>

            <div className="paragraph">
              <span className="title"> Capital: </span>
              <span className="info"> {capital} </span>
            </div>

            <div className="paragraph">
              <span className="title"> Top Level Domain: </span>
              <span className="info"> {tld} </span>
            </div>

            <div className="paragraph">
              <span className="title">Currencies: </span>
              {Object.entries(currencies).map(([key, value]) => (
                <span className="info" key={key}>{value.name} ({value.symbol}) </span>
              ))}
            </div>

            <div className="paragraph">
              <span className="title">Languages: </span>
              {Object.entries(languages).map(([key, value]) => (
                  <span className="info" key={key}>{value} </span>
                ))}
            </div>
          </div>
        

      </div>
 
    </div>
  )
}

export default DataCountries