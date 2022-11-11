import React from 'react'
import { useEffect, useState } from 'react';

import CountryCard from './CountryCard';
import PaginationButton from './PaginationButton';

const Country = ({storeRegion}) => {
    
  const [country, setCountry] = useState([]);
  const [currentPage, setCurrrentPage] = useState(1);

  const [countryPerPage] = useState(8)

  

  
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

  const indexOfLastPost = currentPage * countryPerPage;
  const indexOfFirstPost = indexOfLastPost - countryPerPage;
  const currentCountries = country.slice(indexOfFirstPost, indexOfLastPost);

  // console.log(countryPerPage)

  return (
    <div>
      <CountryCard currentCountries={currentCountries}/>
      <PaginationButton totalPost={country.length} countryPerPage={countryPerPage} setCurrrentPage={setCurrrentPage}/>
    </div>
  )
}

export default Country