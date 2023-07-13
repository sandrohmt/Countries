import { Link } from "react-router-dom"

import './Country.css'

function Country ({country}) {

  return (
    <Link state={{country}} className="card" to={`country/${country.id}`} >
      <div className="country" key={country.id}>
          <img src={country.flag} alt="" />
          <h1 className="countries-name"> {country.name} </h1>
          <h1> 
            <span className="title">Population: </span> 
            <span className="info">{country.population}</span> 
          </h1>

          <h1 className="country-region"> 
            <span className="title"> Region: </span>
            <span className="info">{country.region}</span>
          </h1>

          <h1 className="country-capital"> 
            <span className="title"> Capital: </span> 
            <span className="info"> {country.capital} </span>
          </h1>
      </div>
    </Link>
  )
  
}

export default Country