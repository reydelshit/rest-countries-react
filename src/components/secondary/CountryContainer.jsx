import React from 'react'
import { Link } from 'react-router-dom'

import Bold from "../utils/Bold"

const CountryContainer = ({currentCountries}) => {
  return (
    <div className='country__container'>
        {currentCountries.map((current, index) => (
          <Link key={index} to={`/country/${current.name.common ? current.name.common : current.name}`}>
            <div className='country__indi'>
                <img src={current.flags.png} alt={current.name} />
                    <div className='country__information'>
                        {current.name.common ? <h2>{current.name.common}</h2> : <h2>{current.name}</h2>}
                        
                        <p><Bold text="Population"/>: {Intl.NumberFormat('en-US').format(current.population)}</p>
                        <p><Bold text="Region"/>: {current.region}</p>
                        <p><Bold text="Capital"/>: {current.capital}</p>
                </div>
              </div>
            </Link>
          ))}
    </div>
  )
}

export default CountryContainer