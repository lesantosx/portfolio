import styles from './Banner.module.scss'

export default function Banner({ title, description, img, link, alt }) {
	const paragraph = description ? `# ${description}` : ''
  return (
    <section className={styles.banner}> 
      <div>
				<h1 className={styles.title}>{title}</h1>
				<p className={styles.paragraph}>{paragraph}</p>		

				<div className={styles.socials}>
					<a className={styles.socials__btn} href="https://www.linkedin.com/in/lesantosx/" target="_blank" rel="noreferrer">LinkedIn</a>
					<a className={styles.socials__btn} href="https://github.com/lesantosx" target="_blank" rel="noreferrer">GitHub</a>		
				</div>
				
			</div>

			<div className={styles.images}>
				<a href={link}>
					<img className={styles.circle} src={img} alt={alt} />
				</a>				
			</div>
    </section>
  )
}
