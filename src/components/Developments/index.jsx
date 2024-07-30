import styles from './Developments.module.scss'

import LaptopIcon from '@mui/icons-material/Laptop'
import GitHubIcon from '@mui/icons-material/GitHub'

import { Tooltip } from '@mui/material'

export default function Developments({ project }) {

  return (
    <div className={styles.project}>
      <div className={styles.project_img}>
        <img src={project.image} alt=''/>
      </div>

      <div className={styles.project_skills}>
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

      <div className={styles.project_details}>
        <h2 className={styles.project_name}>{project.title}</h2>
        <p className={styles.project_info}>{project.description}</p>
      </div>

      <div className={styles.project_btns}>
        <a className={styles.btnRead} href={project.preview} target="_blank" rel="noreferrer">
          <LaptopIcon sx={{ fontSize: 16 }} className={styles.icons} />live demo
        </a>
        <a className={styles.btnRead} href={project.code} target="_blank" rel="noreferrer">
          <GitHubIcon sx={{ fontSize: 16 }} className={styles.icons} />source code
        </a>        
      </div>
    </div>
  )
}
