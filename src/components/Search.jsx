import React from 'react'


const Search = () => {
  return (
    <div className='search__container'>
        <i className="fa-solid fa-magnifying-glass search__icon"></i>
        <input type="text" placeholder='Search for a country'/>
    </div>
  )
}

export default Search