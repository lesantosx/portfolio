import { useState } from 'react'

import styles from './Projects.module.scss'
import projectsJson from 'json/projects.json'
import filters from 'json/projectTypes.json'

import LaptopIcon from '@mui/icons-material/Laptop'
import GitHubIcon from '@mui/icons-material/GitHub'
import { Tooltip } from '@mui/material'

export default function Projects() {

  const [projects, setProjects] = useState(projectsJson)

  const filterProjects = (type) => {
    const newItems = projects.filter((p) => p.type === type)
		setProjects(newItems)
  }

  return (
    <main className={styles.container}>
      <center className={styles.filters}>       
        <ul className={styles.filters__ul} >      
          <li key="all" onClick={() => setProjects(projectsJson)}>All</li>
          {filters.map((filter) => {
            return (              
              <li key={filter.id} onClick={() => filterProjects(filter.id)}>{filter.type}</li>
            )
          })}
        </ul>
      </center>

      <div className={styles.projects}>        
        {projects.map((project) => {
          return (
            <div className={styles.project}>
              <div>
                <span className={styles.project__name}>{project.title}</span>
                <div className={styles.project__skills}>
                  <ul className={styles.techs}>
                    {project.techs.map((tech) => {
                      return (
                        <li className={styles.techs__li} key={tech.id}>
                          <Tooltip title={tech.name}>
                            <img src={tech.icon} alt={tech.name}/>
                          </Tooltip>
                          
                        </li>
                      )
                    })}        
                  </ul>
                </div>
                <span className={styles.project__description}>{project.description}</span>
                <div className={styles.project__btns}>
                  <a className={styles.btnRead} href={project.preview} target="_blank" rel="noreferrer"><LaptopIcon sx={{ fontSize: 16 }} className={styles.icons}/>live demo</a>
                  <a className={styles.btnRead} href={project.code} target="_blank" rel="noreferrer"><GitHubIcon sx={{ fontSize: 16 }} className={styles.icons} />source code</a>      
                </div>
              </div>            
            </div>               
          )
        })}
      </div>      
    </main>
  )
}
