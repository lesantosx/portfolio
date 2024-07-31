import { ReactTyped } from "react-typed"

import styles from './Banner.module.scss'
import image from 'assets/lesantosx-circle.png'
import icons from 'json/icons-social.json'

export default function Banner() {
	const description = "# Front-end Developer"

  return (
    <section id="banner" className={styles.banner}> 
			<div className={styles.container}>
				<div className={styles.intro}>
					<div className={styles.details}>
						<div className={styles.title}>							
							<h1 className={styles.writter}>Hello,</h1>
							<h1 className={styles.subWritter}>I'm Letícia Santos</h1>
							<ReactTyped
								strings={[description]}
								typeSpeed={100}
								className={styles.paragraph}
							/>
						</div>						

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
				</div>
			</div>   
		</section>
  )
}
