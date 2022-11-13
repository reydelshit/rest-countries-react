import React from 'react'

const Header = () => {

  const goBackHome = () => {
    window.location.reload();
    return false;
  }
  return (
    <header>
        <h1 onClick={goBackHome}>Where in the world?</h1>
        <div className='switchTheme__container'>
            <button><i className="fa-solid fa-moon"></i></button>
            <span> Dark Mode</span>
        </div>
    </header>
  )
}

export default Header