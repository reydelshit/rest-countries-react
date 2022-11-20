import { MainContext } from '../context/MainContext'

import useCountries from '../hooks/useCountries';
import Loader from './Loader';


const Main = ({search: Search, filter: Filter, country: Country}) => {
  
  const { country, setStoreRegion, filteredCountry, filterCountry} = useCountries();

  return (
    <div className='main__container'>
      <MainContext.Provider value={{country, setStoreRegion, filteredCountry, filterCountry}} >
        <div className="main__navigations">
              <Search/>
              <Filter/>
          </div>
          <div className="main__body">
              {country ? <Country/> : <Loader />}
          </div>
      </MainContext.Provider>

    </div>
  )
}

export default Main