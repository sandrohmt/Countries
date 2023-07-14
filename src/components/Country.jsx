import { Link } from "react-router-dom"

import './Country.css'

function Country ({country}) {

  return (
    <Link state={{country}} className="card" to={`country/${country.id}`} >
      <div className="country" key={country.id}>
          <img width={320} height={160}  src={country.flag} alt="" />
          <div className="text">
            <h1 className="countries-name"> {country.name} </h1>
            <h1> 
              <span className="title">Population: </span> 
              <span className="info">{country.population}</span> 
            </h1>

            <h1 className="countries-region"> 
              <span className="title"> Region: </span>
              <span className="info">{country.region}</span>
            </h1>

            <h1 className="countries-capital"> 
              <span className="title"> Capital: </span> 
              <span className="info"> {country.capital} </span>
            </h1>
          </div>
          
      </div>
    </Link>
  )
  
}

export default Country