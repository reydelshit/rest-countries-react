import React from 'react'
import useRegion from '../hooks/useRegion'


const Filter = ({}) => {
  
  const {regions, showFilter, showFilterValue, setSomething, setShowFilter } = useRegion();

  return (
    <div className='filter__container'>
        <button onClick={() => setShowFilter(!showFilter)}>{showFilterValue} <span className='filter__down-arrow'><i className="down-arroww fa-solid fa-angle-down"></i></span></button>

        {showFilter && 
            <div className='filter__country'>
                {regions.map((reg, index) => (
                  <button onClick={() => setSomething(reg)} key={index}>
                    {reg}
                  </button>
                ))}
            </div>}

    </div>
  )
}

export default Filter