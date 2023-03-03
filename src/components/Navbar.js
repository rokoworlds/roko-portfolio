import React from 'react'
import LogoLight from '../images/roko-logo-light.png'
import LogoDark from '../images/roko-logo-dark.png'


function Navbar(props) {
    return (
        <header id="header"  className={props.darkMode ? "dark": ""}>
            <div className='logo'>
                <img src={props.darkMode ? LogoDark : LogoLight}  alt='' />
            </div>

            <button className="nav-toggle" aria-expanded={props.mobMenuIcon} onClick={props.changeMenuIcon}> 
                <span className="hamburger"></span>
            </button>
            <nav className="nav">
                
                <ul class="nav--list" data-visible={props.visibility}>
                    <li>

                    <div 
                    className="nav-theme--toggler" 
                >
                    <p className="nav-theme--toggler--light"> <span class="material-symbols-outlined">
                        light_mode
                    </span> </p>
                    <div 
                        className="nav-theme--toggler--slider"
                        onClick={props.toggleDarkMode}
                    >
                        <div className="nav-theme--toggler--slider--circle"></div>
                    </div>
                    <p className="nav-theme--toggler--dark"> <span class="material-symbols-outlined">
                        dark_mode
                    </span> </p>
                </div>

                    </li>
                    <li className="nav--item active"> <a href="#about" className="nav--link">About</a></li>
                    <li className="nav--item active"> <a href="#work" className="nav--link">Projects</a></li>
                    <li className="nav--item active"> <a href="#contacts" className="nav--link">Contacts</a></li>
                </ul>
            </nav>
        </header>
        )
}

export default Navbar