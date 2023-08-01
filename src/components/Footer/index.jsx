import styles from './Footer.module.scss'
import icons from 'json/icons-social.json'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <span>Developed by lesantosx</span>       
      </div>
      <div>
        {icons.map((icon) => {
          return (              
              <a key={icon.name} href={icon.link} target="_blank" rel="noreferrer">
                <img src={icon.icon} alt={icon.name} />
              </a>
          )
        })}  
      </div>
      
    </footer>
  )
}
