import React from 'react'
import CV from '../romancv.pdf'

function Services() {
    return (
        <section class="about" id="about">
            <h2 class="section--title section--title__about"> About me </h2>
            <div class="about--container">
                <div class="about--box">
                    <h3> Hi, I'm Roman. Nice to meet you. </h3>
                    <p> I'm interested in web development and everything connected with it. <br/> Ready to implement excellent projects
 with wonderful people. </p>

                    
                </div>
                





            </div>

            <a href={CV} download='Roman Coropat CV' class="btn"> My RESUME </a>
        </section>

    )
}

export default Services


