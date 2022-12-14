import React, { useContext } from 'react'
import { MainContext } from '../../context/MainContext';

import useSearchFilter from '../../hooks/useSearchFilter';

const Search = () => {

  const {filterCountry} = useContext(MainContext);

  return (
    <div className='search__container'>
        <i className="fa-solid fa-magnifying-glass search__icon"></i>
        <input onChange={(e) => filterCountry(e.target.value)} type="text" placeholder='Search for a country'/>
    </div>
  )
}

export default Search