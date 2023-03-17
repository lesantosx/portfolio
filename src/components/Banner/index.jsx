import styles from './Banner.module.scss'

export default function Banner({ title, description, img, link, alt }) {
	const paragraph = description ? `# ${description}` : ''
  return (
    <section className={styles.banner}> 
      <div>
				<h1 className={styles.title}>{title}</h1>
				<p className={styles.paragraph}>{paragraph}</p>
			</div>

			<div className={styles.images}>
				<a href={link}>
					<img className={styles.circle} src={img} alt={alt} />
				</a>				
			</div>
    </section>
  )
}
