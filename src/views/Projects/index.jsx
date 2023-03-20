import styles from './Projects.module.scss'

import Developments from 'components/Developments'
import Banner from 'components/Banner'

import projectsJson from 'json/projects.json'
import image from 'assets/sammy-line-17.png'

export default function Projects() {
  return (
    <main>
      <Banner 
        title="Projects" 
        description="" 
        img={image} 
        alt="Illustration by Elisabet Guba" 
        link="https://icons8.com/illustrations/author/lZpGtGw5182N"
      /> 
      <ul className={styles.posts}>
        {projectsJson.map((project) => {
          return (
            <li key={project.id}>
              <Developments key={project.id} project={project}/> 
            </li>                     
          )
        })}
      </ul>
    </main>
  )
}
