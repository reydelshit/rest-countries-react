import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../context/MainContext'

import CountryContainer from '../components/secondary/CountryContainer'
import PaginationButton from '../components/Pagination'
import NoCountry from '../components/secondary/NoCountry'

import Navigation from '../components/Navigation'


const Main = () => {

  const { setStoreCountries, filteredCountry, setIsLoading, isLoading} = useContext(MainContext)

  const [currentPage, setCurrrentPage] = useState(1);
  const [countryPerPage] = useState(10)

  useEffect(() => {
    try{
      const fetchDefaultCountries = async () => {
        const fetchCountries = await fetch('https://restcountries.com/v3.1/all');
        const data = await fetchCountries.json();
        setStoreCountries(data)
        setIsLoading(false)

      }

      fetchDefaultCountries()

    } catch (err) {
      console.log(err)
    }
  }, [])

const indexOfLastPost = currentPage * countryPerPage;
const indexOfFirstPost = indexOfLastPost - countryPerPage;
const currentCountries = filteredCountry.slice(indexOfFirstPost, indexOfLastPost);

  if(isLoading){
    return(
      <NoCountry />
    )
  }
  return (
    <div className='main__container'>
        <Navigation />
      <div className='main__body'>
          {filteredCountry.length ? <CountryContainer currentCountries={currentCountries}/> : <NoCountry />}
          <PaginationButton setCurrrentPage={setCurrrentPage} totalPost={filteredCountry.length} countryPerPage={countryPerPage}/>
      </div>
    </div>
  )
}

export default Main