import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import projectRIY from '../images/riy-project-img.bmp'
import projectRedditClone from '../images/reddit-clone-img.bmp'

import projectPortfolio from '../images/var 3.2.bmp'

function MyProjects(props) {
    return (
        <div className={props.darkMode ? "work-bg--dark": ""}>
            <div className='project--title-text' id="work">
            <h2 class="section--title">My work</h2>
            <p class="section--subtitle section--subtitle__work"> Some of my recent projects</p>
            </div>      

            <section className="work" >
            <h2 className="section--tittle section--title__work">'ReginYoga' - personal website</h2>
            <p className="section--subtitle project--subtitle__work"> React / JS / Bootstrap</p>
            <div className="work--body">

                <p> A single page personal website made for a briliant yoga instructor, built with React and Bootstrap.
                </p>
                <div className='project--links'>
                    <a className="social-list--link link-color" href= "https://github.com/rokoworlds" target="_blank" rel="noreferrer"> 
                    <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a className="social-list--link link-color" href= "https://rokoworlds.github.io/reginyoga-v1/" target="_blank" rel="noreferrer"> 
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                </div>

            </div>
            <img src={projectRIY} alt="" className="work--img" />
            </section>


            <section className="work">
            <h2 className="section--tittle section--title__work">Reddit Clone Project</h2>
            <p className="section--subtitle project--subtitle__work">Next.js / Chakra UI / TypeScript </p>
            <div className="work--body">

                <p> A simple Reddit clone build with React, Next.js, Firebase v9, Chakra UI, TypeScript, Recoil
                </p>
                
                <div className='project--links'>
                    <a className="social-list--link link-color" href= "https://github.com/rokoworlds/reddit-clone-app" target="_blank" rel="noreferrer"> 
                    <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a className="social-list--link link-color" href= "https://reddit-clone-app-drab.vercel.app/" target="_blank" rel="noreferrer"> 
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                </div>


            </div>
            <img src={projectRedditClone} alt="Cute cat Asbjorn looking serious and ready to work!" className="work--img" />
            </section>
        </div>

    )
}

export default MyProjects