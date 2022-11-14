import { useState, useEffect } from "react"


const useCountries = () => {

  const [country, setCountry] = useState([]);
  const [storeRegion, setStoreRegion] = useState([])
  const [search, setSearch] = useState('');



    useEffect(() => {
        try{
          if(!storeRegion.length){      
            const fetchCountries = async () => {
                const get = await fetch('https://restcountries.com/v3.1/all')
                const store = await get.json()
    
                setCountry(store)
              }
            fetchCountries();
          } else {
            setCountry(storeRegion)
            // console.log(storeRegion, 'use countries')
          }
    
        } catch(err){
          console.log(err)
        }
        
      }, [storeRegion])

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

      return {country, storeRegion, setStoreRegion, filteredCountry, filterCountry}
}

export default useCountries