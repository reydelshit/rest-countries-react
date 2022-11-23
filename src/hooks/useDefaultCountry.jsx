import React, { useContext, useEffect, useState } from 'react'

import { MainContext } from '../context/MainContext';

const useDefaultCountry = () => {

  // const [defaultCountries, setDefaultCountries] = useState([]);

  const {storeCountries, setStoreCountries} = useContext(MainContext);


  useEffect(() => {
    try{
      const fetchDefaultCountries = async () => {
        const fetchCountries = await fetch('https://restcountries.com/v3.1/all');
        const data = await fetchCountries.json();

        setStoreCountries(data)

        // console.log(data)

      }

      fetchDefaultCountries()

    } catch (err) {
      console.log(err)
    }
  }, [])
  
  return { storeCountries  }
}

export default useDefaultCountry