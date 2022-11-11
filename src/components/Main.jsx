import { useState } from "react"

const Main = ({search: Search, filter: Filter, country: Country, paginationBTN: PaginationButton}) => {
  
  const [storeRegion, setStoreRegion] = useState([])

  return (
    <div className='main__container'>
        <div className="main__navigations">
            <Search />
            <Filter setStoreRegion={setStoreRegion} storeRegion={storeRegion}/>
        </div>

        <div className="main__body">
            <Country storeRegion={storeRegion}/>
        </div>

    </div>
  )
}

export default Main