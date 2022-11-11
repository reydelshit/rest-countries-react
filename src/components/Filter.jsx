import React, { useState } from 'react'
import { useEffect } from 'react'

const Filter = ({setStoreRegion}) => {

    const [showFilter, setShowFilter] = useState(false)

    const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

    const [currentRegion, setCurrentRegion] = useState(null)

    useEffect(() => {
        if(currentRegion){
          const fetchRegion = async () => {
            const res = await fetch(`https://restcountries.com/v2/region/${currentRegion}`)
            const data = await res.json();
    
            setStoreRegion(data);
            console.log(data)
    
          }
          fetchRegion();
        }
    }, [currentRegion, setStoreRegion])
    

  return (
    <div className='filter__container'>
        <button onClick={() => setShowFilter(!showFilter)}>Filter by Region</button>

        {showFilter && 
            <div className='filter__country'>
                {regions.map((reg, index) => (
                  <button onClick={() => setCurrentRegion(reg)} key={index}>
                  {reg}
                  </button>
                ))}
            </div>}

    </div>
  )
}

export default Filter