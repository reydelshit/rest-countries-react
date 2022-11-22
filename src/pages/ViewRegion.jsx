import React, { useEffect, useState, useContext } from 'react'

import {useParams} from 'react-router-dom'

import PaginationButton from '../components/Pagination'
import CountryContainer from '../components/secondary/CountryContainer'

import { MainContext } from '../context/MainContext'



const ViewRegion = () => {

  const { setStoreCountries, filteredCountry, setIsLoading, isLoading} = useContext(MainContext)

  const [currentPage, setCurrrentPage] = useState(1);
  const [countryPerPage] = useState(10)


  const {reg} =  useParams();

  useEffect(() => {

    if(reg){
      const fetchRegion = async () => {
        const res = await fetch(`https://restcountries.com/v2/region/${reg}`)
        const data = await res.json();
        setStoreCountries(data)
        setIsLoading(false)

      }
      fetchRegion();
    }

}, [reg])

const indexOfLastPost = currentPage * countryPerPage;
const indexOfFirstPost = indexOfLastPost - countryPerPage;
const currentCountries = filteredCountry.slice(indexOfFirstPost, indexOfLastPost);

  if(isLoading){
    return(
      <div className='loading__container'>
        <h1>Loading.....</h1>
      </div>
    )
  }

  return (
    <div className='main__container'>
      <div className='main__body'>
        {filteredCountry.length > 1 && <h1 style={{textAlign: "center", marginBottom: '1rem'}}>{reg}</h1>}
          <CountryContainer currentCountries={currentCountries}/>
          <PaginationButton setCurrrentPage={setCurrrentPage} totalPost={filteredCountry.length} countryPerPage={countryPerPage}/>
      </div>
    </div>
  )
}

export default ViewRegion