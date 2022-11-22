import React from 'react'

import Bold from "../utils/Bold"

const CountryContainer = ({currentCountries}) => {
  return (
    <div className='country__container'>
        {currentCountries.map((current, index) => (
        <div className='country__indi' key={index}>
            <img src={current.flags.png} alt={current.name} />
                <div className='country__information'>
                    {current.name.common ? <h2>{current.name.common}</h2> : <h2>{current.name}</h2>}
                    
                    <p><Bold text="Population"/>: {current.population}</p>
                    <p><Bold text="Region"/>: {current.region}</p>
                    <p><Bold text="Capital"/>: {current.capital}</p>
            </div>
            </div>
        ))}
    </div>
  )
}

export default CountryContainer