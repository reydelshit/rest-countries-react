import React, { useContext } from 'react'

import { ThemeContext } from '../context/ThemeContext'

const Header = () => {

  const {theme, setTheme} = useContext(ThemeContext);

  const goBackHome = () => {
    window.location.reload();
    return false;
  }

  const toggleTheme = () => {
    setTheme((currentTheme) => currentTheme === "dark" ? "light" : "dark")
    console.log(theme)
  }

  return (
    <header>
        <h1 onClick={goBackHome}>Where in the world?</h1>
        <div className='switchTheme__container'>
            <button onClick={toggleTheme}><i className="fa-solid fa-moon"></i></button>
            <span> Dark Mode</span>
        </div>
    </header>
  )
}

export default Header