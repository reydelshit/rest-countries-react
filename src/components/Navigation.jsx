import React from 'react'

import Search from '../components/secondary/Search'
import Filter from '../components/secondary/Filter'

const Navigation = () => {
  return (
    <div className='main__navigations'>
        <Search />
        <Filter />
    </div>
  )
}

export default Navigation