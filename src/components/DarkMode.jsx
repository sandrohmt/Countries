function DarkMode() {

  function setDarkMode() {
    document.querySelector("body").setAttribute('data-theme', 'dark')
  }

  function setLightMode() {
    document.querySelector("body").setAttribute('data-theme', 'light')
  }

  const darkModeButton = document.querySelector(".dark-mode")
  const lightModeButton = document.querySelector(".light-mode")

  darkModeButton.addEventListener('click', setDarkMode)
  lightModeButton.addEventListener('click', setLightMode)

}

export default DarkMode