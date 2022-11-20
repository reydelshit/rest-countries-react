import { useContext, useEffect, useState  } from 'react'

import { MainContext } from '../context/MainContext'


const useRegion = () => {
  
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

    return {regions, showFilter, showFilterValue, setSomething, setShowFilter }
}

export default useRegion