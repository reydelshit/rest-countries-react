import { useState } from "react"

const useLoader = () => {

  const [loader, setLoader] = useState(null)
  
  const isLoading = (country) => {
    if(country){
      setLoader(1)
      console.log('loading')
    }
  }

  return {loader, setLoader, isLoading}
}

export default useLoader
