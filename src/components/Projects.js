import React from 'react'
import ProjectCards from './ProjectCards'
import data from '../data'



function Projects() {

    const cards = data.map(item => {
        return (
            <ProjectCards
                key={item.id}
                {...item}
                
            />
        )
      })  

    return (
        <section className="project-cards--section">
        <p className="section--subtitle section--subtitle__work"> Other Noteworthy Projects</p>
        <div className='project--all-cards'>
            {cards}
        </div>
        


    </section>
    )
}

export default Projects



