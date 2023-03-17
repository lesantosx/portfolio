import styles from './Skills.module.scss'
import skills from 'json/skills.json'

export default function Skills() {
  const title = '<  My Skills  />'

  return (
    <section className={styles.skills}>
      <h1>{title}</h1>
      <div>
        <ul>
          {skills.map((skill) => {
            return (
              <li  key={skill.name}>
                <img src={skill.icon} alt={skill.name} />
              </li>
            )
          })}
        </ul>
      </div>     
    </section>
  )
}
