import React, { useEffect, useState } from "react"

import styles from './About.module.scss'

export default function About(props) { 
	const [sectionText, setSectionText] = useState('')
	const [sectionKey, setSectionKey] = useState('')
	const sections = [
		{
			title: 'Me',
			key: 'about',
			text: 'My name is Letícia Santos and I have more than 3 years of experience with web development.'
		},
		{
			title: 'Career',
			key: 'career',
			text: 'Currently working as a web developer for a healthcare technology company. I am dedicated to front-end development in my career.'
		},
		{
			title: 'Education',
			key: 'education',
			text: 'I have a degree in ADS (Systems Analysis and Development) and a postgraduate degree in Information Intelligence.'
		}
	]

	useEffect(() => {
		changeSection('about')
	}, [])

	const changeSection = (key) => { 
		const section = sections.filter((s) => s.key === key)[0]
		setSectionText(section.text)
		setSectionKey(key)
	}

	return (
		<section id="about" className={styles.section__aboutme}>
			<div className={styles.about_wrapper}>
				<div className={styles.about_text}>
					<div className={props.showAbout === 'show' ? styles.show : styles.hidden}>
						<h1>about me<span>.</span></h1>
						<div className={styles.about__div}>
							<ul className={styles.sections}>
								{sections.map((section) => {
									return (
										<li
											key={section.key}
											onClick={() => changeSection(section.key)}
											className={sectionKey === section.key ? styles.active : ''}
										>
											{section.title}
										</li>
									)
								})}
							</ul>
							<div>
								<span className={styles.sectionText}>{sectionText}</span>
							</div>
						</div>
					</div>
				</div>
			</div>		
		</section>
	)
}