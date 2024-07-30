import { Tooltip } from '@mui/material'

import styles from './Skills.module.scss'
import skills from 'json/skills.json'

export default function Skills() {
  const title = 'my skills'

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.about_wrapper}>        
        <div className={styles.about_text}>
          <div>
            <h1>{title}<span>.</span></h1>
            <div className={styles.skills_details}>
              <ul>
                {skills.map((skill) => {
                  return (
                    <li key={skill.name}>
                        <Tooltip title={skill.name}>
                          <img src={skill.icon} alt={skill.name} /> 
                        </Tooltip>                    
                    </li>
                  )
                })}
              </ul>
            </div>     
          </div>
        </div>
      </div>  
      
    </section>
  )
}
