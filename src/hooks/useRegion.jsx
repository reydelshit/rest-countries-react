import { useContext, useEffect, useState  } from 'react'

import { MainContext } from '../context/MainContext'
import useLoader from './useLoader'


const useRegion = () => {
  
    const { setStoreRegion } = useContext(MainContext)
    const {setLoader, isLoading} = useLoader();


    const [showFilter, setShowFilter] = useState(false)
    const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
    const [showFilterValue, setShowFilterValue] = useState("Filter by Region") 
    const [currentRegion, setCurrentRegion] = useState(null)

    useEffect(() => {
        if(currentRegion){
          const fetchRegion = async () => {
            const res = await fetch(`https://restcountries.com/v2/region/${currentRegion}`)
            isLoading(res)
            const data = await res.json();
            setLoader(0)
    
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