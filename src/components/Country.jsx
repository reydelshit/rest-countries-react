import React from 'react'
import { useEffect, useState, useContext } from 'react';
import { MainContext } from '../context/MainContext';

import CountryCard from './CountryCard';
import PaginationButton from './PaginationButton';

const Country = () => {

  const { country, filteredCountry } = useContext(MainContext)
    
  // const [country, setCountry] = useState([]);
  const [currentPage, setCurrrentPage] = useState(1);

  const [countryPerPage] = useState(10)

  const indexOfLastPost = currentPage * countryPerPage;
  const indexOfFirstPost = indexOfLastPost - countryPerPage;
  const currentCountries = filteredCountry.slice(indexOfFirstPost, indexOfLastPost);

  // console.log(countryPerPage)

  return (
    <div>
      <CountryCard currentCountries={currentCountries} filteredCountry={filteredCountry}/>
      <PaginationButton totalPost={filteredCountry.length} countryPerPage={countryPerPage} setCurrrentPage={setCurrrentPage}/>
    </div>
  )
}

export default Country