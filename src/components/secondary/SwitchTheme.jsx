import React from 'react'

import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react';

const SwitchTheme = () => {

  const {theme, setTheme} = useContext(ThemeContext);


    const toggleTheme = () => {
        setTheme((currentTheme) => currentTheme === "dark" ? "light" : "dark")
        console.log(theme)
      }

      
  return (
    <div className='switchTheme__container'>
        <button onClick={toggleTheme}><i className="fa-solid fa-moon"></i></button>
        <span> Dark Mode</span>
    </div>
  )
}

export default SwitchTheme