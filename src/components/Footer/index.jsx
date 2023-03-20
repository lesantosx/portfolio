import styles from './Footer.module.scss'
// import { ReactComponent as Registered } from 'assets/marca_registrada.svg'

import icons from 'json/icons-social.json'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        Developed by lesantosx  |       
          {icons.map((icon) => {
            return (              
                <a key={icon.name} href={icon.link}>
                  <img src={icon.icon} alt={icon.name} />
                </a>
            )
          })}        
      </div>
      
    </footer>
  )
}
