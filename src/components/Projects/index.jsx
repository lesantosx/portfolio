import React, { useEffect, useState } from "react"

import styles from './Projects.module.scss'
import Developments from 'components/Developments'

export default function Projects(props) {
  const title = 'projects'
  const apiProjectsJson = 'https://my-json-server.typicode.com/lesantosx/github-src-json/db'
  const [projectsJson, setProjectsJson] = useState([])

  useEffect(() => {
		getProjects()
	}, [])

  const getProjects = async () => { 
		const response = await fetch(apiProjectsJson);
    const projects = await response.json();
    setProjectsJson(projects.projects)
	}

  return (
    <section id="projects" className={styles.body}>     

      <div className={styles.about_wrapper}>        
        <div className={styles.about_text}>
          <div className={props.showHighlights === 'show' ? styles.show : styles.hidden}>
            <h1>{title}<span>.</span></h1>
            <div className={styles.projects}>
              {projectsJson.map((project) => {
                return (
                  <Developments key={project.id} project={project}/>                    
                )
              })}    
            </div>
            
          </div>
         </div>
      </div>
      
    </section>
  )
}
