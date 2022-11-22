import React, { useState } from 'react'

const useSearchFilter = () => {

  const [storeCountries, setStoreCountries] = useState([]);

  const [search, setSearch] = useState('');

    const filterCountry = (valueFromOnchange) => {

        const converToLowerCase = valueFromOnchange.toLowerCase();
        setSearch(converToLowerCase)
        // console.log(valueFromOnchange)

      }
    
    const filteredCountry = storeCountries.filter((current) => {
        if(current.name.official){
          const currentNameLowerCase = current.name.official.toLowerCase();
          if(currentNameLowerCase.includes(search)){
            return currentNameLowerCase;
          } 
        } else {
          const currentNameLowerCase = current.name.toLowerCase();
            if(currentNameLowerCase.includes(search)){
              return currentNameLowerCase;
            }
        }
    
      })

  return {filterCountry, filteredCountry, setStoreCountries, storeCountries, setSearch}
}

export default useSearchFilter