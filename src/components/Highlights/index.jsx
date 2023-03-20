import styles from './Highlights.module.scss'

import Developments from 'components/Developments'

import projectsJson from 'json/projects.json'

export default function Highlights(props) {
  const title = '<  Featured Projects  />'

  const projects = projectsJson.filter( p => p.highlight)

  return (
    <section className={styles.body}>      

      <div className={styles.about_wrapper}>        
        <div className={styles.about_text}>
          <div className={props.className === 'show' ? styles.show : styles.hidden}>
          <h1>{title}</h1>
          <ul className={styles.posts}>
            {projects.map((project) => {
              return (
                <li key={project.id}>
                  <Developments key={project.id} project={project}/> 
                </li>                     
              )
            })}
          </ul>      
          </div>
         </div>
      </div>
      
    </section>
  )
}
