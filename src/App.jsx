import { useContext, useState } from "react"

import { Routes, Route} from 'react-router-dom'


import Header from "./components/Header"
import Main from "./pages/Main"

import Region from "./pages/Region"
import ViewCountry from "./pages/ViewCountry"
import ViewRegion from "./pages/ViewRegion"


import useDefaultCountry from "./hooks/useDefaultCountry"

import { ThemeContext } from "./context/ThemeContext"
import { MainContext } from "./context/MainContext"

import useSearchFilter from "./hooks/useSearchFilter"


function App() {

  const [theme, setTheme ] = useState("dark")
  const [isLoading, setIsLoading ] = useState(true)


  const {storeCountries, setStoreCountries, filteredCountry, filterCountry} = useSearchFilter();


  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <MainContext.Provider value={{storeCountries, filteredCountry, setStoreCountries, filterCountry, isLoading, setIsLoading}}>
        <div id={theme}>
          <Header />
          <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/country/:id" element={<ViewCountry />}/>

            <Route path="/region" element={ <Region />}/>
            <Route path="/region/:reg" element={ <ViewRegion />}/>

          </Routes>
        </div>
      </MainContext.Provider>
    </ThemeContext.Provider>

  )
}

export default App
