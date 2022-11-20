import React from 'react'
import { useState, useContext } from 'react';
import { MainContext } from '../context/MainContext';

import CountryCard from './CountryCard';
import PaginationButton from './PaginationButton';
import Loader from './Loader';
import useCountries from '../hooks/useCountries';


const Country = () => {

  const { filteredCountry } = useContext(MainContext)
  const {isLoading} = useCountries()

    
  const [currentPage, setCurrrentPage] = useState(1);
  const [countryPerPage] = useState(10)
  const indexOfLastPost = currentPage * countryPerPage;
  const indexOfFirstPost = indexOfLastPost - countryPerPage;
  const currentCountries = filteredCountry.slice(indexOfFirstPost, indexOfLastPost);

  if(isLoading){
    return (
      <div className='loading__container'>
        <h1>LOADINGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG................</h1>
      </div>
    )
  }

  return (
      <div>
        {currentCountries.length ? <CountryCard currentCountries={currentCountries}/> : <Loader />}
        <PaginationButton totalPost={filteredCountry.length} countryPerPage={countryPerPage} setCurrrentPage={setCurrrentPage}/>
      </div>
  )
}

export default Country