import { useState, useEffect } from "react"

import { MainContext } from '../context/MainContext'

const Main = ({search: Search, filter: Filter, country: Country}) => {
  
  // country all
  const [storeRegion, setStoreRegion] = useState([])
  const [country, setCountry] = useState([]);

  // search 
  const [search, setSearch] = useState('')

  useEffect(() => {

    try{
      if(!storeRegion.length){      
        const fetchCountries = async () => {
            const get = await fetch('https://restcountries.com/v3.1/all')
            const store = await get.json()

            const mapThroughCountries = store.map((co) => {
              return co;
            })
            // console.log(mapThroughCountries)
            setCountry(mapThroughCountries)
          }
        fetchCountries();
      } else {
        setCountry(storeRegion)
      }

    } catch(err){
      console.log(err)
    }
    
  }, [storeRegion])


  // filter country search 
  const filterCountry = (valueFromOnchange) => {
    const converToLowerCase = valueFromOnchange.toLowerCase();
    setSearch(converToLowerCase)

  }

  const filteredCountry = country.filter((current) => {

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




  return (
    <div className='main__container'>
      <MainContext.Provider value={{storeRegion, setStoreRegion, filterCountry, filteredCountry}}>
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