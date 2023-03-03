import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

function Footer() {
    return (
        <footer className="footer" id="contacts">
        <a href="mailto:roman.koropat@gmail.com" className="footer--link"> roman.koropat@gmail.com </a> 

        <ul className="social-list">
            <li className="social-list--item"> 
                <a className="social-list--link" href="https://www.linkedin.com/in/roman-coropat-878440228/" target="_blank" rel="noreferrer"> 
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
            </li>

            <li className="social-list--item"> 
                <a className="social-list--link" href="https://www.facebook.com/roman.koropat" target="_blank" rel="noreferrer"> 
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
            </li>

            <li className="social-list--item"> 
                <a className="social-list--link" href= "https://github.com/rokoworlds" target="_blank" rel="noreferrer"> 
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </li>

        </ul>

    </footer >
    )
}

export default Footer