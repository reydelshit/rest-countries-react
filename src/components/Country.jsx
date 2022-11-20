import React from 'react'
import { useState, useContext } from 'react';
import { MainContext } from '../context/MainContext';

import CountryCard from './CountryCard';
import PaginationButton from './PaginationButton';


const Country = () => {

  const { filteredCountry } = useContext(MainContext)

    
  const [currentPage, setCurrrentPage] = useState(1);
  const [countryPerPage] = useState(10)
  const indexOfLastPost = currentPage * countryPerPage;
  const indexOfFirstPost = indexOfLastPost - countryPerPage;
  const currentCountries = filteredCountry.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <CountryCard currentCountries={currentCountries}/>
      <PaginationButton totalPost={filteredCountry.length} countryPerPage={countryPerPage} setCurrrentPage={setCurrrentPage}/>
    </>
  )
}

export default Country