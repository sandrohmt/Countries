import React, { useEffect, useState } from 'react'

import { FaMoon, FaSun } from 'react-icons/fa'

import './Header.css'


function Header() {

  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.querySelector("body").setAttribute('data-theme', 'dark')
  }, [])

  function toggleTheme() {
      if(darkMode) {
        document.querySelector("body").setAttribute('data-theme', 'dark')
      }
      else {
        document.querySelector("body").setAttribute('data-theme', 'light')
      }
      setDarkMode(!darkMode)
    }


  return (

    <div className='header'>
        <h1 className='logo'>Where in the world?</h1>
        {darkMode
        ? <button onClick={toggleTheme} className='button dark-mode'> <FaMoon /> dark mode</button>
        : <button onClick={toggleTheme}  className='button light-mode'><FaSun /> light mode</button>
        }
      </div>

  )
}

export default Header
