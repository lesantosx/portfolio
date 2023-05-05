import styles from './Projects.module.scss'

import Developments from 'components/Developments'

import projectsJson from 'json/projects.json'

export default function Projects(props) {
  const title = '<  Projects  />'

  const projects = projectsJson.filter( p => p.highlight)

  return (
    <section id="projects" className={styles.body}>     

      <div className={styles.about_wrapper}>        
        <div className={styles.about_text}>
          <div className={props.showHighlights === 'show' ? styles.show : styles.hidden}>
            <h1>{title}</h1>
            <div className={styles.projects}>
              {projects.map((project) => {
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
