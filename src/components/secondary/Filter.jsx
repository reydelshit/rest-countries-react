import React from 'react'

import { Link } from 'react-router-dom'

import useRegion from '../../hooks/useRegion'
const Filter = () => {

  const { showFilter, regions, showFilterValue, setSomething, setShowFilter } = useRegion()

  return (
    <div className='filter__container'>
    <button onClick={() => setShowFilter(!showFilter)}>{showFilterValue} <span className='filter__down-arrow'><i className="down-arroww fa-solid fa-angle-down"></i></span></button>

    {showFilter && 
        <div className='filter__country'>
            {regions.map((reg, index) => (
              <Link to={`/region/${reg}`} onClick={() => setSomething(reg)} key={index}>
                {reg}
              </Link>
            ))}
        </div>}

    </div>
  )
}

export default Filter