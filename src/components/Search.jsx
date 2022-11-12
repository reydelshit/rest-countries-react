import React from 'react'
import { useContext, useState } from 'react'

import { MainContext } from '../context/MainContext'


const Search = () => {

  const { country, storeRegion } = useContext(MainContext)

  const [search, setSearch] = useState(null)
  // const [filteredCountries, setFilteredCountries] = useState([])

  const filterCountry = (valueFromOnchange) => {
    const converToLowerCase = valueFromOnchange.toLowerCase();
    setSearch(converToLowerCase)

  }

  const filteredCountry = country.filter((current) => {

    const currentNameLowerCase = current.name.official.toLowerCase();
    if(currentNameLowerCase.includes(search)){
      return currentNameLowerCase;
    }
  })

  const filteredRegion = storeRegion.filter((current) => {

    const currentNameLowerCase = current.name.toLowerCase();
    if(currentNameLowerCase.includes(search)){
      return currentNameLowerCase;
    }
  })


  return (
    <div className='search__container'>
        <i className="fa-solid fa-magnifying-glass search__icon"></i>
        <input onChange={(e) => filterCountry(e.target.value)} type="text" placeholder='Search for a country'/>
    </div>
  )
}

export default Search