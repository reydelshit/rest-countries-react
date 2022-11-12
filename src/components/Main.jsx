import { useState, useEffect } from "react"

import { MainContext } from '../context/MainContext'

const Main = ({search: Search, filter: Filter, country: Country}) => {
  
  const [storeRegion, setStoreRegion] = useState([])
  const [country, setCountry] = useState([]);

  useEffect(() => {

    try{
      if(!storeRegion.length){      
        const fetchCountries = async () => {
            const get = await fetch('https://restcountries.com/v3.1/all')
            const store = await get.json()

            const mapThroughCountries = store.map((co) => {
              return co;
            })
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


  return (
    <div className='main__container'>
      <MainContext.Provider value={{storeRegion, setStoreRegion, country}}>
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