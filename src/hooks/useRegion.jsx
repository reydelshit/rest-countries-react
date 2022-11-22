import { useState  } from 'react'


const useRegion = () => {
  
    // const [storeRegion, setStoreRegion] = useState([])

    const [showFilter, setShowFilter] = useState(false)
    const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
    const [showFilterValue, setShowFilterValue] = useState("Filter by Region") 
    const [currentRegion, setCurrentRegion] = useState(null)

    
    const setSomething = (val) => {
      setCurrentRegion(val)
      setShowFilterValue(val)
      setShowFilter(false)
    }

    return {showFilter, regions, setShowFilter, currentRegion, setSomething, showFilterValue}
}

export default useRegion