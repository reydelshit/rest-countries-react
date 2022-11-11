import React from 'react'
import { useEffect, useState } from 'react';


import Bold from './utils/Bold';

const Country = ({storeRegion}) => {
    
  const [country, setCountry] = useState([])
  
  useEffect(() => {

    try{
      if(!storeRegion.length){      
        const fetchCountries = async () => {
            const get = await fetch('https://restcountries.com/v3.1/all')
            const store = await get.json()
            // console.log(store)

            const mapThroughCountries = store.map((co) => {
              return co
            })

            // mapThroughCountries();
            setCountry(mapThroughCountries)

            console.log(mapThroughCountries);
          }

        fetchCountries();
      } else {
        setCountry(storeRegion)

      }

    } catch(err){
      console.log(err)
    }
    
  }, [storeRegion])

  return (
    <div className='country__container'>

      {country.map((coun, index) => (
        index < 8 &&         
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

export default Country