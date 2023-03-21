import { useState } from 'react'

import styles from './Projects.module.scss'

import Developments from 'components/Developments'

import projectsJson from 'json/projects.json'
import skills from 'json/skills.json'

export default function Projects() {

  const [projects, setProjects] = useState(projectsJson)

  const filters = skills.map((p) => p.name)

  const filterProjects = (name) => {
    let newItems = []

    projects.forEach((p) => {
			p.techs.forEach((tech) => {
        if(tech.name === name){
          newItems.push(p)
        }
      })
		})
		setProjects(newItems)
  }

  return (
    <main className={styles.container}>
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
