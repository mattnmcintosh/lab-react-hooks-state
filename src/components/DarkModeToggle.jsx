import React from 'react'

const DarkModeToggle = ({ darkMode, setDarkMode }) => {

  function switchDarkLightMode() {
    setDarkMode((currentState) => !currentState);
  }

  return (
    <button onClick={() => switchDarkLightMode()}>{darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}</button>
  )
}

export default DarkModeToggle
