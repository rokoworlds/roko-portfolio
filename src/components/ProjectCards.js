import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faFolder } from"@fortawesome/free-regular-svg-icons"





function ProjectCards(props) {
    return (

        <div>
            <div className="project-card">
                <div className='project-card--icon-box'>
                    <div className='project-card--icon'> <FontAwesomeIcon icon={faFolder} /> </div>
                    <div className='project-card--links'>
                        <a className='card-link' href= "https://github.com/rokoworlds" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> </a>
                        <a className='card-link' href= "https://github.com/rokoworlds" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} /> </a>
                    </div>
                </div>
                <h2 className='project-card--title'>{props.title}</h2>
                <p className='project-card--description'> {props.description} </p>
                <p className='project-card--tools'> {props.tools} </p>

            </div>


            

        </div>

    )
}

export default ProjectCards



