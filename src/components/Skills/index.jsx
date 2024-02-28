import { Tooltip } from '@mui/material'

import styles from './Skills.module.scss'
import skills from 'json/skills.json'

export default function Skills(props) {
  const title = 'my skills'

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.about_wrapper}>        
        <div className={styles.about_text}>
          <div className={props.showSkills === 'show' ? styles.show : styles.hidden}>
            <h1>{title}<span>.</span></h1>
            <div>
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
