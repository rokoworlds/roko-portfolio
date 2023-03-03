import React from 'react'
import Avatar from '../images/avatar.jpg'


function Intro(props) {



    return (
        <div className={props.darkMode ? "intro-bg--dark": ""}>
        <section className='intro' id="home">
            <h1 className="section--title section--title__intro">
                Hi, I am <strong>Roman Koropat</strong>
            </h1>
            <p className="section--subtitle section--subtitle__intro "> 
                web developer 
            </p>

            <img src={Avatar} alt="Cutie cat" className="intro--img "/>

        </section>
        </div>
    )
}



export default Intro