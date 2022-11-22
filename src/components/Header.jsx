import React from 'react'

import { Link } from 'react-router-dom'
import SwitchTheme from "./secondary/SwitchTheme"


import Filter from "./secondary/Filter"
import Search from "./secondary/Search"


const Header = () => {
  return (
    <header>
        <div className='main__header'>
            <Link to="/"><h1>Where in the world?</h1></Link>
            <SwitchTheme />
        </div>

        <div className='main__navigations'>
            <Search />
            <Filter />
        </div>

    </header>
  )
}

export default Header