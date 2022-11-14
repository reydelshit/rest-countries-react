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

  console.log(currentCountries, 'country component')




  return (
    <>
      {currentCountries.length ? <CountryCard currentCountries={currentCountries}/> : <h1> no country existed</h1>}
      <PaginationButton totalPost={filteredCountry.length} countryPerPage={countryPerPage} setCurrrentPage={setCurrrentPage}/>
    </>
  )
}

export default Country