import styles from './Developments.module.scss'

import { Tooltip } from '@mui/material'

export default function Developments({ project }) {
  const description = `# ${project.description}`

  return (
    <div className={styles.post}>           
      <h2 className={styles.title}>{project.title}</h2>
      <p>{description}</p>
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
      <div className={styles.footer}>
        <a className={styles.btnRead} href={project.preview} target="_blank" rel="noreferrer">Preview</a>
        <a className={styles.btnRead} href={project.code} target="_blank" rel="noreferrer">Code</a>
      </div>
      
    </div>
  )
}
