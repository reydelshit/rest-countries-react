import React from 'react'

const PaginationButton = ({totalPost, countryPerPage, setCurrrentPage}) => {

    let countryIndex = [];

    for(let i = 1; i <= Math.ceil(totalPost/countryPerPage); i++){
      countryIndex.push(i)
    }

  return (
    <div className='paginationBTN__container'>

        {countryIndex.map((country, index) => (
              index < 10 &&      
              <div key={index} className='paginationButton'>
                <button onClick={() => setCurrrentPage(country)}>{country}</button>
              </div>
            ))}
    
    </div>
  )
}

export default PaginationButton