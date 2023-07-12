import { Link } from "react-router-dom"

function Country ({country}) {

  return (
    <Link state={{country}} className="card" to={`country/${country.id}`} >
      <div key={country.id}>
          <img src={country.flag} alt="" />
          <h1> {country.name} </h1>
          <h1> Population: {country.population} </h1>
          <h1> Region: {country.region} </h1>
          <h1> Capital: {country.capital} </h1>
      </div>
    </Link>
  )
  
}

export default Country