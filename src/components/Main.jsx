// import { useState, useEffect } from "react"

import { MainContext } from '../context/MainContext'

import useCountries from '../hooks/useCountries';

const Main = ({search: Search, filter: Filter, country: Country}) => {
  
  // ilterCountry, filteredCountry, 
  // const { filterCountry, filteredCountry} = useSearchFilter();
  const { country, setStoreRegion, filteredCountry, filterCountry} = useCountries();

  return (
    <div className='main__container'>
      <MainContext.Provider value={{country, setStoreRegion, filteredCountry, filterCountry}} >
        <div className="main__navigations">
              <Search/>
              <Filter/>
          </div>
          <div className="main__body">
              <Country/>
          </div>
      </MainContext.Provider>

    </div>
  )
}

export default Main