import React, { useEffect, useState } from 'react'

import { FaMoon, FaRegMoon } from 'react-icons/fa'

function Header() {

  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {

    function toggleTheme() {
      if(darkMode) {
        document.querySelector("body").setAttribute('data-theme', 'dark')
      }
      else {
        document.querySelector("body").setAttribute('data-theme', 'light')
      }
      setDarkMode(!darkMode)
    }

    const darkModeButton = document.querySelector(".dark-mode")
    const lightModeButton = document.querySelector(".light-mode")
  
    darkModeButton.addEventListener('click', toggleTheme)
    lightModeButton.addEventListener('click', toggleTheme)

    return () => {
      darkModeButton.removeEventListener('click', toggleTheme);
      lightModeButton.removeEventListener('click', toggleTheme);
    }
  }, [])

  

  return (

    <div className='header'>
        <h1 className='logo'>Where in the world?</h1>
        {darkMode
        ? <button className='button dark-mode'> <FaMoon /> dark mode</button>
        : <button className='button light-mode'><FaRegMoon /> light mode</button>
        }
      </div>

  )
}

export default Header

// Resolver o problema do theme switcher