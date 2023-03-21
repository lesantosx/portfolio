import { useState } from 'react'

import styles from './Projects.module.scss'

import Developments from 'components/Developments'
import Banner from 'components/Banner'
import image from 'assets/sammy-line-workflow.gif'

import projectsJson from 'json/projects.json'
import skills from 'json/skills.json'


//link="https://icons8.com/illustrations/author/7WmtYU90j36d" alt="Illustration by Fruzka" <img src={image} alt="Illustration by Fruzka" />

export default function Projects() {

  const [projects, setProjects] = useState(projectsJson)

  const filters = skills.map((p) => p.name)

  const filterProjects = (name) => {
    let newItems = []

    projects.filter((p) => {
			p.techs.map((tech) => {
        if(tech.name === name){
          newItems.push(p)
        }
      })
		})
		setProjects(newItems)
  }

  return (
    <main>
      <div className={styles.filters}>       
        <ul className={styles.filters__ul} >
          <span>Filter:</span>       
          <li key="all" onClick={() => setProjects(projectsJson)}>All</li>
          {filters.map((filter) => {
            return (              
              <li key={filter} onClick={() => filterProjects(filter)}>{filter}</li>
            )
          })}
        </ul>
      </div>

      <div className={styles.projects}>
        <ul className={styles.posts}>
          {projects.map((project) => {
            return (
              <li key={project.id}>
                <Developments key={project.id} project={project}/> 
              </li>                     
            )
          })}
        </ul>
        <div>          
        </div>
      </div>      
    </main>
  )
}
