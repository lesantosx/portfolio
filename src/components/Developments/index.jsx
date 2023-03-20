import styles from './Developments.module.scss'

export default function Developments({ project }) {
  const description = `# ${project.description}`

  const openPreview = (url) => {
    window.open(url)
  }

  return (
    <div className={styles.post}>           
      <h2 className={styles.title}>{project.title}</h2>
      <p>{description}</p>
      <ul className={styles.techs}>
        {project.techs.map((tech) => {
          return (
            <li className={styles.techs__li} key={tech.id}>
              <img src={tech.icon} alt={tech.name}/>
            </li>
          )
        })}        
      </ul>
      <div className={styles.footer}>
        <a className={styles.btnRead} href={project.preview} target="_blank">Preview</a>
        <a className={styles.btnRead} href={project.code} target="_blank">Code</a>
      </div>
      
    </div>
  )
}
