import React from 'react'
import Navbar from './components/Navbar.js'
import Intro from './components/Intro.js'
import About from './components/About.js'
import Projects from './components/Projects.js'
import Footer from './components/Footer.js'
import MyWork from './components/MyWork.js'





function App() {
  const [darkMode, setDarkMode] = React.useState(false)
  const [visibility, setVisibility] = React.useState(false)
  const [mobMenuIcon, setMobMenuIcon] = React.useState(false)

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

  function changeMenuIcon() {
    setMobMenuIcon(prevMode => !prevMode)
    setVisibility(prevMode => !prevMode)
  }

  const navLinks = document.querySelectorAll('.nav--link')
  const nav = document.querySelector('.nav--list')
  const navToggle = document.querySelector('.nav-toggle')
  navLinks.forEach(link => {
    link.addEventListener('OnClick', () => {
        nav.setAttribute("data-visible", !{visibility})
        navToggle.setAttribute("aria-expanded", !{mobMenuIcon})
    })
}) 





  return (
    <div>
      <Navbar 
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        visibility={visibility}
        mobMenuIcon={mobMenuIcon}
        changeMenuIcon={changeMenuIcon}
      /> 
      <Intro 
      darkMode={darkMode}
      />
      <About />
      <MyWork 
      darkMode={darkMode}
      /> 
      <Projects />
      
      <Footer />
    </div>
  )
}

export default App

