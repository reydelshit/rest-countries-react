import React, { useState } from 'react'
import { useContext, useEffect  } from 'react'

import { MainContext } from '../context/MainContext'

const Filter = ({}) => {

    const { setStoreRegion } = useContext(MainContext)

    const [showFilter, setShowFilter] = useState(false)

    const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
    const [showFilterValue, setShowFilterValue] = useState("Filter by Region") 
    const [currentRegion, setCurrentRegion] = useState(null)

    useEffect(() => {
        if(currentRegion){
          const fetchRegion = async () => {
            const res = await fetch(`https://restcountries.com/v2/region/${currentRegion}`)
            const data = await res.json();
    
            setStoreRegion(data);
            // console.log(data)
    
          }
          fetchRegion();
        }
    }, [currentRegion])
    
    const setSomething = (val) => {
      setCurrentRegion(val)
      setShowFilterValue(val)
      setShowFilter(false)
    }

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