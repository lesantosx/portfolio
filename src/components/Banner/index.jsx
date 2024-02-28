import styles from './Banner.module.scss'
import image from 'assets/lesantosx-circle.png'
import icons from 'json/icons-social.json'

export default function Banner() {
	const title = "Hello,"
	const title2 = "I'm Letícia Santos"
	const description="# Front-end Developer"
  return (
    <section className={styles.banner}> 
      <div>
			<h1 className={styles.title}>{title}</h1>
			<h1 className={styles.title2}>{title2}</h1>
			<p className={styles.paragraph}>{description}</p>		

			<div className={styles.socials}>
			{icons.map((icon) => {
          return (              
						<a key={icon.name} href={icon.link} target="_blank" rel="noreferrer">
							<img src={icon.icon} alt={icon.name} />
						</a>
          )
        })}
			</div>		
		</div>

		<div className={styles.images}>
			<img className={styles.circle} src={image} alt='' />				
		</div>
</section>
  )
}
