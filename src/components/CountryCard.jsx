import React from 'react'

import Bold from './utils/Bold';


const CountryHolder = ({currentCountries}) => {
  return (
    <div className='country__container'>
        {currentCountries.map((coun, index) => (       
            <div className='country__indi' key={index}>
            <img src={coun.flags.png} alt={coun.name} />
                <div className='country__information'>
                    <h2>{coun.name.official}</h2>

                    <p><Bold text="Population"/>: {coun.population}</p>
                    <p><Bold text="Region"/>: {coun.region}</p>
                    <p><Bold text="Capital"/>: {coun.capital}</p>
            </div>
        </div>
        ))}
    </div>

  )
}

export default CountryHolder